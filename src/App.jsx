import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import {
  ArrowRight,
  BookOpenText,
  ExternalLink,
  GitBranch,
  Layers3,
  Menu,
  PenLine,
  SquareCode,
  UserRound,
} from 'lucide-react';
import { PretextManifesto } from './components/PretextManifesto.jsx';
import { blogPosts, profile, projects, skillGroups, timeline } from './data/site.js';

const navItems = [
  { to: '/', label: 'Start', icon: SquareCode, end: true },
  { to: '/blog', label: 'Blog', icon: PenLine },
  { to: '/portfolio', label: 'Portfolio', icon: Layers3 },
  { to: '/about', label: 'About', icon: UserRound },
];

function SectionHeading({ eyebrow, title, detail }) {
  return (
    <header className="flex flex-col gap-3">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.08em] text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-ink/70 sm:text-base">{detail}</p>
    </header>
  );
}

function Shell({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(181,142,104,0.24),transparent_34%),radial-gradient(circle_at_top_right,_rgba(108,123,74,0.16),transparent_28%),linear-gradient(180deg,_rgba(248,242,232,0.96),rgba(244,236,224,1))]" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30 mb-6">
          <div className="panel flex items-center justify-between gap-4 px-5 py-4 backdrop-blur">
            <Link to="/" className="flex min-w-0 flex-col">
              <span className="text-sm uppercase tracking-[0.35em] text-olive">KyrieQi</span>
              <span className="truncate text-xs text-ink/65">
                personal notes / selected work / quiet experiments
              </span>
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink md:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              <Menu size={18} />
            </button>

            <nav
              className={`${
                isOpen ? 'flex' : 'hidden'
              } absolute left-0 right-0 top-[calc(100%+0.75rem)] flex-col gap-2 rounded-[28px] border border-ink/10 bg-paper-strong p-3 shadow-soft md:static md:flex md:flex-row md:items-center md:rounded-full md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            >
              {navItems.map(({ to, label, icon: Icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                      isActive
                        ? 'bg-ink text-paper'
                        : 'text-ink/70 hover:bg-white/70 hover:text-ink'
                    }`
                  }
                >
                  <Icon size={16} />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-16 pb-6">
          <div className="panel grid gap-4 px-5 py-5 text-sm text-ink/70 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-ink">
                Built with React, Tailwind CSS, and Pretext for measured typography.
              </p>
              <p>Icons by Lucide. Imagery sourced from Unsplash free photos.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
              >
                <GitBranch size={16} />
                GitHub
              </a>
              <Link
                to={profile.blogCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
              >
                <BookOpenText size={16} />
                {profile.blogCta.label}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-olive/20 bg-olive/10 blur-2xl" />
          <span className="eyebrow">Fresh rebuild</span>
          <div className="mt-5 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.09em] text-ink sm:text-5xl xl:text-6xl">
                A calm beige journal for writing, building, and collecting thoughtful work.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-ink/72 sm:text-base">
                This site turns the original static pages into a single editorial system: a
                blog for learning notes, a portfolio for selected builds, and an about page
                that explains the person behind the browser tab.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className="button-primary" to="/blog">
                  Read the blog
                  <ArrowRight size={16} />
                </Link>
                <Link className="button-secondary" to="/portfolio">
                  Explore the work
                </Link>
              </div>
              <dl className="grid gap-3 sm:grid-cols-3">
                {profile.stats.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-ink/8 bg-white/60 p-4">
                    <dt className="text-[11px] uppercase tracking-[0.26em] text-ink/50">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-2xl text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid gap-4">
              <PretextManifesto text={profile.manifesto} />
              <div className="rounded-[28px] border border-ink/10 bg-ink p-5 text-paper shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-paper/55">
                      currently shipping
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-paper/80">
                      {profile.currentFocus}
                    </p>
                  </div>
                  <span className="rounded-full border border-paper/10 px-3 py-1 text-xs text-paper/70">
                    v2 refactor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="grid gap-6">
          <div className="panel overflow-hidden p-3">
            <img
              src={profile.heroImage}
              alt="Warm workspace with notebook and keyboard"
              className="h-[250px] w-full rounded-[24px] object-cover"
            />
            <div className="grid gap-3 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-terracotta">desk note</p>
              <p className="text-sm leading-7 text-ink/72">
                Monospace everywhere, beige surfaces, and enough contrast to stay readable at
                night without turning the whole site into another generic dark landing page.
              </p>
            </div>
          </div>
          <div className="panel px-6 py-6">
            <p className="text-xs uppercase tracking-[0.35em] text-olive">route map</p>
            <div className="mt-5 space-y-4">
              {[
                ['Blog', 'Searchable notes, tags, and small editorial cards.'],
                ['Portfolio', 'Case-study style project blocks with live and code links.'],
                ['About', 'Timeline, skills, values, and working preferences.'],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-[22px] border border-ink/8 bg-white/55 p-4">
                  <p className="text-lg text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/68">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="panel px-6 py-6 sm:px-7">
          <SectionHeading
            eyebrow="Latest writing"
            title="Recent notes from the blog."
            detail="A few posts preserved from the original project, rewritten into a cleaner card system."
          />
          <div className="mt-8 space-y-4">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="rounded-[26px] border border-ink/8 bg-white/65 p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink/45">
                  <span>{post.category}</span>
                  <span className="text-olive">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 text-2xl tracking-[-0.08em] text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel px-6 py-6 sm:px-7">
          <SectionHeading
            eyebrow="Selected work"
            title="Portfolio cards with better hierarchy and cleaner decisions."
            detail="The project area now reads like a compact archive instead of a generic gallery."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <article key={project.title} className="rounded-[26px] border border-ink/8 bg-white/70 p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full rounded-[20px] object-cover"
                  loading="lazy"
                />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg text-ink">{project.title}</h3>
                  <span className="rounded-full border border-ink/10 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-ink/55">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink/68">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = category === 'All' || post.category === category;
    const needle = query.trim().toLowerCase();
    const haystack = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
    const matchesQuery = !needle || haystack.includes(needle);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-6">
      <section className="panel px-6 py-8 sm:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Learning notes, design fragments, and build logs."
          detail="The old static article list becomes a searchable index with cleaner filtering and stronger typography."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="rounded-full border border-ink/10 bg-white/70 px-5 py-4">
            <span className="sr-only">Search posts</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search notes, tags, topics"
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/35"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  item === category
                    ? 'border-ink bg-ink text-paper'
                    : 'border-ink/10 bg-white/70 text-ink/70 hover:border-ink hover:text-ink'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="panel px-6 py-6">
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-ink/45">
              <span>{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="mt-4 text-3xl tracking-[-0.08em] text-ink">{post.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ink/72">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/62"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function PortfolioPage() {
  return (
    <div className="space-y-6">
      <section className="panel px-6 py-8 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected builds, experiments, and interface studies."
          detail="Each project card is simplified into the information people actually care about: the problem, the stack, and the links."
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="panel overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="grid gap-5 px-6 py-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-olive">{project.year}</p>
                  <h3 className="mt-2 text-3xl tracking-[-0.08em] text-ink">{project.title}</h3>
                </div>
                <span className="rounded-full border border-ink/10 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-ink/60">
                  {project.status}
                </span>
              </div>
              <p className="text-sm leading-7 text-ink/72">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/62"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {project.facts.map((fact) => (
                  <div key={fact.label} className="rounded-[22px] border border-ink/8 bg-white/60 p-4">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-ink/45">{fact.label}</p>
                    <p className="mt-2 text-sm leading-6 text-ink/75">{fact.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Live demo
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  View code
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="panel overflow-hidden">
          <img
            src={profile.aboutImage}
            alt="Minimal desk setup with notebook"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
        <div className="panel px-6 py-8 sm:px-8">
          <SectionHeading
            eyebrow="About"
            title="A computer student who uses design to make technical work feel more human."
            detail={profile.about}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {profile.details.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-ink/8 bg-white/65 p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-ink/42">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-ink/75">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="panel px-6 py-6">
          <SectionHeading
            eyebrow="Timeline"
            title="Short version of the journey."
            detail="This section keeps the original milestones, but the presentation is more structured."
          />
          <div className="mt-8 space-y-5">
            {timeline.map((item) => (
              <div key={item.year} className="relative border-l border-ink/12 pl-5">
                <span className="absolute -left-[6px] top-1 h-3 w-3 rounded-full bg-terracotta" />
                <p className="text-xs uppercase tracking-[0.28em] text-olive">{item.year}</p>
                <h3 className="mt-2 text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel px-6 py-6">
          <SectionHeading
            eyebrow="Toolkit"
            title="Working stack and strengths."
            detail="Still centered on web development and interface design, but with a cleaner breakdown."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[26px] border border-ink/8 bg-white/68 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-terracotta">{group.title}</p>
                <div className="mt-4 space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-3 text-sm text-ink">
                        <span>{skill.name}</span>
                        <span className="text-ink/45">{skill.level}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-ink/8">
                        <div
                          className="h-2 rounded-full bg-ink"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Shell>
  );
}
