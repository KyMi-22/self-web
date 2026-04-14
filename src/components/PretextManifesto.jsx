import { layoutWithLines, measureLineStats, prepareWithSegments } from '@chenglou/pretext';
import { useEffect, useRef, useState } from 'react';

function balanceWidth(prepared, maxWidth, minWidth) {
  const fullStats = measureLineStats(prepared, maxWidth);
  let low = Math.min(minWidth, maxWidth);
  let high = maxWidth;
  let bestWidth = maxWidth;
  let bestLineWidth = fullStats.maxLineWidth;

  while (high - low > 4) {
    const mid = (low + high) / 2;
    const stats = measureLineStats(prepared, mid);

    if (stats.lineCount > fullStats.lineCount) {
      low = mid;
      continue;
    }

    high = mid;
    bestWidth = mid;
    bestLineWidth = stats.maxLineWidth;
  }

  return Math.min(maxWidth, Math.max(bestLineWidth, bestWidth));
}

export function PretextManifesto({ text }) {
  const ref = useRef(null);
  const [layoutState, setLayoutState] = useState({
    lines: [],
    lineCount: 0,
    width: 0,
  });

  useEffect(() => {
    if (!ref.current || !text) {
      return undefined;
    }

    const prepared = prepareWithSegments(text, '600 20px "IBM Plex Mono"');

    const updateLayout = () => {
      const width = ref.current?.clientWidth ?? 0;

      if (!width) {
        return;
      }

      const targetWidth = balanceWidth(prepared, width, 220);
      const { lines, lineCount } = layoutWithLines(prepared, targetWidth, 32);
      setLayoutState({ lines, lineCount, width: targetWidth });
    };

    updateLayout();

    const observer = new ResizeObserver(() => {
      updateLayout();
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text]);

  return (
    <div className="rounded-[30px] border border-ink/10 bg-white/80 p-5 shadow-soft">
      <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.28em] text-ink/45">
        <span>pretext layout</span>
        <span>
          {layoutState.lineCount} lines / {Math.round(layoutState.width)} px
        </span>
      </div>
      <div ref={ref} className="mt-5 min-h-[176px]">
        <div
          className="max-w-full rounded-[24px] border border-dashed border-ink/12 bg-paper px-4 py-5 text-[1.125rem] font-semibold tracking-[-0.08em] text-ink"
          style={{ width: layoutState.width || '100%' }}
        >
          {layoutState.lines.length > 0 ? (
            layoutState.lines.map((line, index) => (
              <span
                key={`${line.text}-${index}`}
                className={`block leading-8 ${index % 2 === 0 ? 'text-ink' : 'text-olive'}`}
              >
                {line.text}
              </span>
            ))
          ) : (
            <span className="block leading-8 text-ink">{text}</span>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-ink/62">
        This panel uses Pretext to measure the sentence, find a tighter balanced width, and
        render line by line instead of trusting CSS-only wrapping.
      </p>
    </div>
  );
}
