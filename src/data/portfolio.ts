export const profile = {
  name: "Amayu Kaba",
  headline: "Full-Stack & Mobile Developer building AI tools",
  tagline: "Information Technology student",
  bio: "I build web & mobile apps end to end — React & Flutter frontends, Django/Python backends, deployed and live. Most of what I know came from shipping projects, not copying tutorials.",
  avatar: "https://avatars.githubusercontent.com/u/138348766?v=4",
  email: "ameyukeba@gmail.com",
  telegram: "https://t.me/ame_kt",
  github: "https://github.com/amayukf",
  linkedin: "https://www.linkedin.com/in/ameyu-keba",
  location: "Oromia, Ethiopia",
  available: true,
  resumeUrl: "/resume.html",
  typingRoles: [
    "Full-Stack & Mobile Developer",
    "React & TypeScript Developer",
    "Flutter & Mobile App Developer",
    "Python & FastAPI Developer",
    "AI Tools Builder",
  ],
};

export const about = {
  story: [
    "I'm an Information Technology student who got into development by building things I actually needed — exam checkers, mobile apps, LMS tools, donation platforms, and AI-powered utilities.",
    "I work mostly with React, TypeScript, Next.js, Flutter, Dart, Python, Django, and FastAPI. If it's on my GitHub, I built it, deployed it, and pushed updates myself.",
    "Looking for a software engineering internship or junior full-stack/mobile role where I can write code on a real team.",
  ],
  goals: [
    "Software engineering internship (remote or on-site)",
    "Work on products with real users across web & mobile",
    "Get better at backend architecture and system design",
  ],
  strengths: [
    "Full-stack & mobile — React, Flutter, Python APIs to deployment",
    "20+ apps live on Vercel, Netlify & Render",
    "Cross-platform mobile apps with Flutter & Dart",
    "Comfortable owning a project solo from spec to deploy",
    "Writes clean, maintainable, readable code",
  ],
};

export const achievements = [
  { label: "Public Repositories", value: 32, suffix: "+", icon: "GitBranch" },
  { label: "Live Deployments", value: 20, suffix: "+", icon: "Rocket" },
  { label: "GitHub Stars", value: 9, suffix: "", icon: "Star" },
  { label: "Technologies Used", value: 20, suffix: "+", icon: "Layers" },
  { label: "Hackathon Projects", value: 1, suffix: "", icon: "Trophy" },
  { label: "Years Building", value: 3, suffix: "+", icon: "Calendar" },
];

export const highlights = [
  {
    title: "Woliso Blood Management",
    desc: "Full-stack Django REST + React platform managing emergency donor dispatch and hospital scheduling.",
    tag: "Production Healthcare App",
  },
  {
    title: "GiftyTech Commercial Platform",
    desc: "Production tech store deployment with 95+ Lighthouse score serving active commercial customers.",
    tag: "95+ Lighthouse SEO",
  },
  {
    title: "32+ Open Source Projects",
    desc: "Proven track record of building and deploying web, mobile, and Python tools independently.",
    tag: "Active Contributor",
  },
];

export const skills = {
  frontend: [
    "React",
    "TypeScript",
    "Next.js",
    "Flutter",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
    "HTML5",
    "CSS3",
  ],
  backend: ["Python", "Django", "FastAPI", "Node.js", "REST APIs", "Supabase"],
  languages: ["JavaScript", "TypeScript", "Python", "Dart", "HTML", "CSS"],
  databases: ["PostgreSQL", "Supabase", "SQLite", "MongoDB"],
  tools: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Postman"],
  cloud: ["Vercel", "Netlify", "Render", "GitHub Actions"],
};

export const githubStats = {
  username: "amayukf",
  publicRepos: 32,
  followers: 8,
  following: 3,
  memberSince: "July 2023",
  totalStars: 9,
  deployedApps: 20,
  contributionStreak: "Active",
  topLanguages: [
    { name: "JavaScript", percentage: 34, color: "#f7df1e" },
    { name: "TypeScript", percentage: 28, color: "#3178c6" },
    { name: "Python", percentage: 22, color: "#3776ab" },
    { name: "HTML", percentage: 10, color: "#e34c26" },
    { name: "CSS", percentage: 6, color: "#563d7c" },
  ],
  contributionGraphUrl:
    "https://github-readme-activity-graph.vercel.app/graph?username=amayukf&theme=react-dark&hide_border=true&area=true",
  streakUrl:
    "https://github-readme-streak-stats.herokuapp.com/?user=amayukf&theme=react&hide_border=true",
  statsUrl:
    "https://github-readme-stats.vercel.app/api?username=amayukf&show_icons=true&theme=react&hide_border=true&include_all_commits=true",
};

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  features: string[];
  impact: string;
  techStack: string[];
  github: string;
  liveDemo?: string;
  thumbnail?: string;
  stars: number;
  metrics?: { label: string; value: string }[];
  gradient: string;
  icon: string;
  featured: boolean;
  spotlight?: boolean;
}

export const projects: Project[] = [
  {
    id: "gifty-tech",
    title: "GiftyTech Ethiopia",
    description: "Production E-Commerce Platform — Built for high-conversion retail with cinematic dark UI.",
    problem:
      "A laptop & tech retailer needed a fast, high-converting digital storefront capable of handling heavy mobile traffic and structured SEO.",
    features: [
      "Glassmorphism UI with Framer Motion 60fps animations",
      "SEO-optimized with structured JSON-LD schemas",
      "Multi-channel contact integration & product showcase",
      "WCAG 2.1 AA compliant accessibility rating",
    ],
    impact: "5 GitHub stars · Active commercial production deployment",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/amayukf/gifty-tech",
    liveDemo: "https://gifty-tech.vercel.app",
    stars: 5,
    metrics: [
      { label: "Stars", value: "5" },
      { label: "Sections", value: "8" },
      { label: "Lighthouse", value: "95+" },
    ],
    gradient: "from-emerald-600/30 to-teal-900/30",
    icon: "ShoppingBag",
    featured: true,
    spotlight: true,
  },
  {
    id: "blood-donation",
    title: "Woliso Blood Management",
    description:
      "Full-Stack Healthcare Dispatch Platform — Django REST backend with React 19 SPA.",
    problem:
      "Regional medical stations required a centralized system for emergency donor dispatch, appointment scheduling, and blood inventory tracking.",
    features: [
      "Secure JWT user authentication & session handling",
      "Donor dispatch scheduling (station & emergency visits)",
      "Role-based administrative portal for medical staff",
      "Live analytics tracking total donations & lives impacted",
    ],
    impact: "Full-stack Django REST + React 19 architecture deployed on Render",
    techStack: ["React 19", "Django REST", "Python", "JWT", "Axios"],
    github: "https://github.com/amayukf/2blood-donation-management-system",
    liveDemo: "https://blood-donation-frontend-rxfc.onrender.com/",
    stars: 0,
    metrics: [
      { label: "Architecture", value: "Full Stack" },
      { label: "Security", value: "JWT Auth" },
      { label: "Roles", value: "Admin/Donor" },
    ],
    gradient: "from-red-600/30 to-rose-900/30",
    icon: "Heart",
    featured: true,
  },
  {
    id: "eduhub",
    title: "EduHub LMS Platform",
    description:
      "Cloud Learning Management System — Supabase BaaS with multi-role user workflows.",
    problem:
      "Educational institutions needed a low-latency digital classroom for course material publishing, rich-text note taking, and auto-graded assessments.",
    features: [
      "Dual portal architecture for Instructors & Students",
      "Rich-text editor powered by TipTap integration",
      "Timed multi-choice quizzes with real-time scoring",
      "Document upload pipeline for assignment submission",
    ],
    impact: "Production multi-portal LMS backed by Supabase PostgreSQL",
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Zustand"],
    github: "https://github.com/amayukf/eduhub",
    liveDemo: "https://eduhub-mocha.vercel.app",
    stars: 0,
    metrics: [
      { label: "Portals", value: "2" },
      { label: "Database", value: "Supabase" },
      { label: "Auth", value: "RBAC" },
    ],
    gradient: "from-blue-600/30 to-indigo-900/30",
    icon: "GraduationCap",
    featured: true,
  },
  {
    id: "neuroui",
    title: "NeuroUI Generator",
    description:
      "AI Component Synthesizer — Scaffolds deployable React UI components from natural language.",
    problem:
      "Scaffolding custom React components manually takes up valuable engineering time — NeuroUI automates code generation into live previews.",
    features: [
      "Multi-stage component synthesis pipeline",
      "Sandpack & Monaco Editor real-time browser code runtime",
      "Instant export to StackBlitz, CodeSandbox & ZIP",
      "9 built-in production templates",
    ],
    impact: "Hackathon project · Synthesizes isolated UI components in <90s",
    techStack: ["Next.js 14", "TypeScript", "Sandpack", "Monaco Editor"],
    github: "https://github.com/amayukf/NeuroUI",
    liveDemo: "https://neuroui.onrender.com",
    stars: 0,
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Templates", value: "9" },
      { label: "Latency", value: "<90s" },
    ],
    gradient: "from-violet-600/30 to-purple-900/30",
    icon: "Brain",
    featured: true,
  },
  {
    id: "trading-performance",
    title: "Trading Performance Analytics",
    description:
      "Python Financial Data Analytics & Quantitative Performance Engine.",
    problem:
      "Traders and financial analysts needed automated calculation of win-rates, risk-reward ratios (R:R), drawdown metrics, and trade analytics from raw log execution data.",
    features: [
      "Automated trade execution parsing & analytics pipeline",
      "Risk-to-Reward (R:R) and Maximum Drawdown (MDD) tracking",
      "Interactive data visualizations with Python & Pandas",
      "Performance metrics export & statistical summary reports",
    ],
    impact: "Python data processing pipeline for financial performance tracking",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "FastAPI"],
    github: "https://github.com/amayukf/trading-performance",
    stars: 0,
    metrics: [
      { label: "Pipeline", value: "Pandas" },
      { label: "Analysis", value: "R:R / MDD" },
      { label: "Stack", value: "Python" },
    ],
    gradient: "from-amber-600/30 to-orange-900/30",
    icon: "TrendingUp",
    featured: true,
  },
  {
    id: "identity-check",
    title: "IdentityCheck Verification Suite",
    description:
      "Python-based identity and profile validation microservice connecting API services with web clients.",
    problem:
      "Identity validation workflows required seamless coordination between a Python processing backend microservice and web interfaces.",
    features: [
      "Python microservice backend API integration",
      "Decoupled multi-repository full-stack architecture",
      "Multi-cloud deployment across Netlify & Vercel",
    ],
    impact: "2 GitHub stars · 3-repository full-stack architecture",
    techStack: ["Python", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/amayukf/tindercheckweb",
    liveDemo: "https://tindercheck.netlify.app",
    stars: 2,
    metrics: [
      { label: "Backend", value: "Python" },
      { label: "Repos", value: "3 System" },
      { label: "Stars", value: "2" },
    ],
    gradient: "from-rose-600/30 to-pink-900/30",
    icon: "ShieldCheck",
    featured: true,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Analytics", href: "#analytics" },
  { label: "Contact", href: "#contact" },
];
