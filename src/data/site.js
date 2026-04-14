export const profile = {
  github: 'https://github.com/',
  blogCta: {
    label: 'Open journal',
    href: '/blog',
  },
  stats: [
    { label: 'writing notes', value: '06' },
    { label: 'selected works', value: '05' },
    { label: 'years learning', value: '03+' },
  ],
  manifesto:
    'Code with clarity. Design for calm. Keep enough contrast that the reading always wins.',
  currentFocus:
    'Refining a personal site that feels more like a quiet desk than a template: readable layouts, measured text, and small details that hold together.',
  heroImage:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  aboutImage:
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  about:
    'I am KyrieQi, a computer student with a steady interest in interface design. I like projects where structure matters: readable layouts, clear naming, deliberate hierarchy, and the feeling that someone has actually edited the page instead of just generating it.',
  details: [
    { label: 'Base', value: 'Somewhere between code editor tabs, notebooks, and good coffee.' },
    { label: 'Focus', value: 'Frontend systems, UI structure, and design-aware engineering.' },
    { label: 'Preference', value: 'Small components, clean motion, and typography that earns its space.' },
    { label: 'Status', value: 'Still learning, still rebuilding, still shipping better versions.' },
  ],
};

export const blogPosts = [
  {
    slug: 'building-my-first-personal-website',
    category: 'Web Development',
    date: '2026-04-01',
    readTime: '5 min read',
    title: 'Building My First Personal Website Again, But With Better Taste',
    excerpt:
      'The original site did its job, but it was structurally a stack of disconnected pages. This rewrite turns the same ideas into a calmer system with better hierarchy, routing, and reusable content blocks.',
    tags: ['react', 'tailwind', 'refactor'],
  },
  {
    slug: 'why-monospace-can-still-feel-warm',
    category: 'Design',
    date: '2026-03-26',
    readTime: '4 min read',
    title: 'Why Monospace Can Still Feel Warm',
    excerpt:
      'Monospace fonts usually get pushed toward terminal aesthetics. With softer spacing, beige surfaces, and strong contrast, the same typographic voice can become calm instead of cold.',
    tags: ['typography', 'ui', 'visual-language'],
  },
  {
    slug: 'learning-in-public-with-small-posts',
    category: 'Learning',
    date: '2026-03-18',
    readTime: '6 min read',
    title: 'Learning in Public Works Better When Posts Stay Small',
    excerpt:
      'Short notes reduce the pressure to sound complete. They make it easier to capture what changed in your thinking without pretending every idea deserves a full essay.',
    tags: ['growth', 'notes', 'writing'],
  },
  {
    slug: 'css-decisions-that-cut-noise',
    category: 'Web Development',
    date: '2026-03-05',
    readTime: '7 min read',
    title: 'CSS Decisions That Quiet Down a Layout',
    excerpt:
      'A lot of interface noise comes from weak spacing rules and inconsistent shape language. These are the CSS decisions that made my pages feel edited instead of assembled.',
    tags: ['css', 'layout', 'frontend'],
  },
  {
    slug: 'coffee-code-and-the-shape-of-a-workday',
    category: 'Life',
    date: '2026-02-25',
    readTime: '4 min read',
    title: 'Coffee, Code, and the Shape of a Workday',
    excerpt:
      'A comfortable setup is not about buying more gear. It is mostly about removing friction, keeping the desk honest, and making the next task obvious.',
    tags: ['workspace', 'routine', 'focus'],
  },
  {
    slug: 'using-figma-to-think-before-i-code',
    category: 'Design',
    date: '2026-02-11',
    readTime: '8 min read',
    title: 'Using Figma to Think Before I Code',
    excerpt:
      'Figma became more useful once I stopped treating it as a polishing tool and started using it to stress-test layout choices before opening the editor.',
    tags: ['figma', 'process', 'product-thinking'],
  },
];

export const projects = [
  {
    title: 'Personal Website System',
    year: '2026',
    status: 'Active',
    description:
      'A redesigned personal site that merges blog, portfolio, and about content into one cohesive editorial shell. The focus is on readable contrast, beige tones, and calmer pacing.',
    stack: ['React', 'Tailwind CSS', 'Pretext', 'Vite'],
    live: 'https://example.com',
    code: 'https://github.com/',
    image:
      'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80',
    facts: [
      { label: 'Problem', value: 'Too many disconnected static pages.' },
      { label: 'Decision', value: 'Single design system with routed content.' },
      { label: 'Result', value: 'Cleaner navigation and easier maintenance.' },
    ],
  },
  {
    title: 'Task Manager App',
    year: '2025',
    status: 'Completed',
    description:
      'A small productivity app focused on movement and clarity, with drag and drop, state grouping, and a restrained UI that favors legibility over decoration.',
    stack: ['React', 'Context API', 'CSS'],
    live: 'https://example.com',
    code: 'https://github.com/',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    facts: [
      { label: 'Users', value: 'Solo workflow and study planning.' },
      { label: 'Constraint', value: 'Fast interaction without visual clutter.' },
      { label: 'Learning', value: 'State shape matters more than UI polish.' },
    ],
  },
  {
    title: 'Weather Dashboard',
    year: '2025',
    status: 'Completed',
    description:
      'A weather interface that prioritizes scanning current conditions quickly, then expands into forecast detail and lightweight charts when needed.',
    stack: ['JavaScript', 'APIs', 'Charts'],
    live: 'https://example.com',
    code: 'https://github.com/',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80',
    facts: [
      { label: 'Surface', value: 'Dashboard with layered forecast summaries.' },
      { label: 'Focus', value: 'Fast comprehension of the next few hours.' },
      { label: 'Takeaway', value: 'Data UI needs disciplined emphasis.' },
    ],
  },
  {
    title: 'Design Portfolio Archive',
    year: '2024',
    status: 'Ongoing',
    description:
      'A modular archive for interface studies, typography experiments, and Figma explorations that are too small to deserve case studies but too useful to lose.',
    stack: ['Figma', 'UI', 'Design Systems'],
    live: 'https://example.com',
    code: 'https://github.com/',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    facts: [
      { label: 'Need', value: 'Keep sketches searchable and organized.' },
      { label: 'Format', value: 'Lightweight cards instead of huge decks.' },
      { label: 'Goal', value: 'Track taste, not just finished output.' },
    ],
  },
  {
    title: 'Notes Writing App',
    year: '2024',
    status: 'In Progress',
    description:
      'A writing-first note app that puts keyboard flow and markdown support ahead of everything else, aimed at quick capture and clean retrieval.',
    stack: ['Vue', 'Markdown', 'PWA'],
    live: 'https://example.com',
    code: 'https://github.com/',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    facts: [
      { label: 'Intent', value: 'Reduce friction between thought and storage.' },
      { label: 'Constraint', value: 'Works well on small screens and laptops.' },
      { label: 'State', value: 'Still refining sync and tagging.' },
    ],
  },
];

export const timeline = [
  {
    year: '2026 - now',
    title: 'Refining frontend structure',
    description:
      'Focusing on component systems, typographic rhythm, and practical UI engineering choices that survive beyond a single mockup.',
  },
  {
    year: '2025',
    title: 'Building more real web projects',
    description:
      'Moved from isolated experiments into apps with clearer constraints, better state handling, and more attention to presentation.',
  },
  {
    year: '2024',
    title: 'Design exploration became serious',
    description:
      'Started using Figma and design references as part of the engineering process instead of treating visual decisions as an afterthought.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML / CSS', level: '90%' },
      { name: 'JavaScript', level: '85%' },
      { name: 'React', level: '82%' },
      { name: 'Vue', level: '74%' },
    ],
  },
  {
    title: 'Design + tooling',
    items: [
      { name: 'Figma', level: '86%' },
      { name: 'UI systems', level: '80%' },
      { name: 'Node.js', level: '72%' },
      { name: 'Python', level: '70%' },
    ],
  },
];
