export const profile = {
  name: 'Amayu Kaba',
  headline: 'Full-stack developer',
  tagline: 'Information Technology student',
  bio: 'I build web apps end to end — React frontends, Django/Python backends, deployed and live. Most of what I know came from shipping projects, not copying tutorials.',
  avatar: 'https://avatars.githubusercontent.com/u/138348766?v=4',
  email: 'ameyukeba@gmail.com',
  telegram: 'https://t.me/ame_kt',
  github: 'https://github.com/amayukf',
  linkedin: 'https://www.linkedin.com/in/ameyu-keba',
  available: true,
  resumeUrl: '/resume.html',
  typingRoles: [
    'Full Stack Developer',
    'Information Technology Student',
    'React & TypeScript Developer',
    'Django & Python Developer',
  ],
}

export const about = {
  story: [
    "I'm an Information Technology student who got into development by building things I actually needed — exam checkers, LMS tools, donation platforms.",
    "I work mostly with React, TypeScript, Django, and PostgreSQL. If it's on my GitHub, I built it, deployed it, and pushed updates myself.",
    "Looking for an internship or junior role where I can write code on a real team.",
  ],
  goals: [
    'Software engineering internship (remote or on-site)',
    'Work on products with real users',
    'Get better at backend architecture and databases',
  ],
  strengths: [
    'Full-stack — frontend to API to deployment',
    '15+ apps live on Vercel, Netlify & Render',
    'React, TypeScript, Django, FastAPI',
    'Comfortable owning a project solo',
    'Writes clean, readable code',
  ],
}

export const achievements = [
  { label: 'Public Repositories', value: 25, suffix: '+', icon: 'GitBranch' },
  { label: 'Live Deployments', value: 15, suffix: '+', icon: 'Rocket' },
  { label: 'GitHub Stars', value: 6, suffix: '', icon: 'Star' },
  { label: 'Technologies Used', value: 20, suffix: '+', icon: 'Layers' },
  { label: 'Hackathon Projects', value: 1, suffix: '', icon: 'Trophy' },
  { label: 'Years Building', value: 2, suffix: '+', icon: 'Calendar' },
]

export const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'HTML5', 'CSS3'],
  backend: ['Python', 'Django', 'FastAPI', 'Node.js', 'REST APIs', 'Supabase'],
  languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  databases: ['PostgreSQL', 'Supabase', 'SQLite', 'MongoDB'],
  tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'pnpm', 'npm'],
  cloud: ['Vercel', 'Netlify', 'Render', 'GitHub Actions'],
  versionControl: ['Git', 'GitHub', 'Branching', 'Pull Requests', 'Code Review'],
}

export const githubStats = {
  username: 'amayukf',
  publicRepos: 25,
  followers: 5,
  following: 4,
  memberSince: 'July 2023',
  totalStars: 6,
  deployedApps: 15,
  contributionStreak: 'Active',
  topLanguages: [
    { name: 'TypeScript', percentage: 32, color: '#3178c6' },
    { name: 'JavaScript', percentage: 28, color: '#f7df1e' },
    { name: 'Python', percentage: 22, color: '#3776ab' },
    { name: 'HTML', percentage: 12, color: '#e34c26' },
    { name: 'CSS', percentage: 6, color: '#563d7c' },
  ],
  contributionGraphUrl:
    'https://github-readme-activity-graph.vercel.app/graph?username=amayukf&theme=react-dark&hide_border=true&area=true',
  streakUrl:
    'https://github-readme-streak-stats.herokuapp.com/?user=amayukf&theme=react&hide_border=true',
  statsUrl:
    'https://github-readme-stats.vercel.app/api?username=amayukf&show_icons=true&theme=react&hide_border=true&include_all_commits=true',
}

export interface Project {
  id: string
  title: string
  description: string
  problem: string
  features: string[]
  impact: string
  techStack: string[]
  github: string
  liveDemo?: string
  thumbnail: string
  stars: number
  metrics?: { label: string; value: string }[]
  gradient: string
  icon: string
  featured: boolean
  spotlight?: boolean
}

const thumb = (url: string) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800`

export const projects: Project[] = [
  {
    id: 'gifty-tech',
    title: 'GiftyTech Ethiopia',
    description: 'Premium tech retail showcase with cinematic dark UI.',
    problem: 'A laptop and smartphone retailer needed a professional online presence that matched the quality of their products — not a generic template.',
    features: [
      'Glassmorphism UI with Framer Motion animations',
      'SEO-optimized with structured data',
      'Multi-channel contact integration',
      'WCAG-compliant accessibility',
    ],
    impact: '4 GitHub stars · Production deployment serving real customers',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/amayukf/gifty-tech',
    liveDemo: 'https://gifty-tech.vercel.app',
    thumbnail: thumb('https://gifty-tech.vercel.app'),
    stars: 4,
    metrics: [
      { label: 'Stars', value: '4' },
      { label: 'Sections', value: '8' },
      { label: 'Lighthouse', value: '95+' },
    ],
    gradient: 'from-emerald-600/30 to-teal-900/30',
    icon: 'ShoppingBag',
    featured: true,
    spotlight: true,
  },
  {
    id: 'blood-donation',
    title: 'Woliso Blood Donation',
    description: 'Full-stack blood donation platform for scheduling donations and tracking impact.',
    problem: 'Hospitals and donors needed a single system to schedule blood donations, manage profiles, and track lives saved.',
    features: [
      'Donor registration with JWT authentication',
      'Schedule donations (station or home visit)',
      'Admin dashboard for hospitals and schedules',
      'Donation stats and lives-saved tracking',
    ],
    impact: 'Full-stack Django REST + React app deployed on Render',
    techStack: ['React', 'Django REST', 'JWT', 'Vite', 'Axios'],
    github: 'https://github.com/amayukf/2blood-donation-management-system',
    liveDemo: 'https://blood-donation-frontend-rxfc.onrender.com/',
    thumbnail: thumb('https://blood-donation-frontend-rxfc.onrender.com/'),
    stars: 0,
    metrics: [
      { label: 'Stack', value: 'Full' },
      { label: 'Auth', value: 'JWT' },
      { label: 'Roles', value: '2' },
    ],
    gradient: 'from-red-600/30 to-rose-900/30',
    icon: 'Heart',
    featured: true,
  },
  {
    id: 'eduhub',
    title: 'EduHub LMS',
    description: 'Full learning management system with teacher and student portals.',
    problem: 'Educators needed affordable tools to manage courses, assignments, and assessments online.',
    features: [
      'Role-based auth (Teacher / Student)',
      'Rich-text lecture notes with TipTap',
      'Timed quizzes with auto-grading',
      'PDF worksheet uploads & submissions',
    ],
    impact: 'Dual-portal LMS deployed on Vercel with Supabase backend',
    techStack: ['React', 'TypeScript', 'Supabase', 'Zustand', 'TipTap'],
    github: 'https://github.com/amayukf/eduhub',
    liveDemo: 'https://eduhub-mocha.vercel.app',
    thumbnail: thumb('https://eduhub-mocha.vercel.app'),
    stars: 0,
    metrics: [
      { label: 'Portals', value: '2' },
      { label: 'Quiz Types', value: '3' },
      { label: 'Auth', value: 'RBAC' },
    ],
    gradient: 'from-blue-600/30 to-indigo-900/30',
    icon: 'GraduationCap',
    featured: true,
  },
  {
    id: 'neuroui',
    title: 'NeuroUI',
    description: 'Tool that generates production React components from text descriptions.',
    problem: 'Scaffolding UI from scratch takes too long — this automates the flow from description to deployable component.',
    features: [
      'Multi-step generation pipeline',
      'Live code preview with Sandpack',
      'Export to ZIP, StackBlitz, CodeSandbox',
      '9 built-in demo templates',
    ],
    impact: 'Hackathon project · Generates components in under 90 seconds',
    techStack: ['Next.js', 'TypeScript', 'Sandpack', 'Monaco Editor'],
    github: 'https://github.com/amayukf/NeuroUI',
    liveDemo: 'https://neuroui.onrender.com',
    thumbnail: thumb('https://neuroui.onrender.com'),
    stars: 0,
    metrics: [
      { label: 'Pipeline', value: '6-step' },
      { label: 'Demos', value: '9' },
      { label: 'Gen Time', value: '<90s' },
    ],
    gradient: 'from-violet-600/30 to-purple-900/30',
    icon: 'Brain',
    featured: true,
  },
  {
    id: 'exit-exam-checker',
    title: 'Exit Exam Checker',
    description: 'Exit exam result lookup for university students.',
    problem: 'Students struggle to quickly check exit exam results during high-traffic release periods.',
    features: ['Fast result lookup', 'Mobile-responsive UI', 'Optimized Vercel deployment'],
    impact: 'Recently updated · Built for real student use cases',
    techStack: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/amayukf/exit-exam-checker',
    liveDemo: 'https://exit-exam-checker.vercel.app',
    thumbnail: thumb('https://exit-exam-checker.vercel.app'),
    stars: 0,
    gradient: 'from-amber-600/30 to-orange-900/30',
    icon: 'Search',
    featured: true,
  },
  {
    id: 'tindercheck',
    title: 'TinderCheck',
    description: 'Identity verification platform with multi-service architecture.',
    problem: 'Needed a verification flow spanning frontend, API, and deployment across multiple services.',
    features: ['Python API backend', 'Multi-repo architecture', 'Netlify + Vercel deployment'],
    impact: '1 GitHub star · 3-repository full-stack system',
    techStack: ['Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/amayukf/tindercheckweb',
    liveDemo: 'https://tindercheck.netlify.app',
    thumbnail: thumb('https://tindercheck.netlify.app'),
    stars: 1,
    gradient: 'from-rose-600/30 to-pink-900/30',
    icon: 'ShieldCheck',
    featured: true,
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Contact', href: '#contact' },
]
