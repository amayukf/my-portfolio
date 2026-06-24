# Amayu Kaba — Portfolio

A premium, production-ready developer portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

## Features

- Modern 2026 dark theme with glassmorphism
- Smooth scroll animations via Framer Motion
- Mobile-first responsive design
- SEO optimized with Open Graph and JSON-LD structured data
- Accessible navigation and form labels
- GitHub analytics integration (contribution graph, stats, streak)
- Featured projects with live demo links

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** for fast builds
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, etc.
│   └── ui/           # Reusable UI primitives
├── data/
│   └── portfolio.ts  # All portfolio content (edit here)
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

Edit `src/data/portfolio.ts` to update:

- Personal info, bio, and social links
- Skills categories
- Featured projects
- Experience timeline
- Education and certifications

Update `index.html` for SEO metadata and canonical URL.

Replace the email placeholder in `portfolio.ts` with your real email.

## Deploy to Vercel

### Option 1: Vercel Dashboard

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Vite — no config needed
5. Click **Deploy**

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

### Build Settings (auto-detected)

| Setting          | Value       |
| ---------------- | ----------- |
| Framework        | Vite        |
| Build Command    | `npm run build` |
| Output Directory | `dist`      |
| Install Command  | `npm install` |

## Contact Form

The contact form currently shows a success state on submit. To make it functional, integrate a service like:

- [Formspree](https://formspree.io)
- [Web3Forms](https://web3forms.com)
- [EmailJS](https://www.emailjs.com)
- A custom API route on Vercel

## License

MIT © Amayu Kaba
