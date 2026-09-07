import { useState } from 'react'
import {
  Brain,
  Code2,
  ExternalLink,
  GraduationCap,
  Heart,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  TrendingUp,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { projects } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { GitHubIcon } from '../ui/SocialIcons'

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Brain,
  GraduationCap,
  Search,
  ShieldCheck,
  Heart,
  TrendingUp,
}

function ProjectThumbnail({ src, alt, title }: { src?: string; alt: string; title: string }) {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (!src || error) {
    return (
      <div className="flex h-full min-h-[160px] items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-900 to-black p-4 text-center sm:min-h-[180px]">
        <div className="space-y-1">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400">
            <Code2 size={20} />
          </div>
          <span className="block text-sm font-semibold text-neutral-300">{title}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full bg-neutral-950 overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 animate-pulse">
          <span className="text-xs text-neutral-400 font-mono flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            Loading live preview...
          </span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`h-full min-h-[160px] w-full object-cover object-top sm:min-h-[180px] transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  )
}

function SpotlightProject({ project }: { project: (typeof projects)[0] }) {
  const Icon = iconMap[project.icon] ?? Code2

  return (
    <GlassCard className="overflow-hidden !p-0 border-emerald-500/30 shadow-2xl shadow-emerald-950/20" delay={0}>
      <div className="grid lg:grid-cols-12">
        {/* Large Media Showcase Container */}
        <div className="project-thumb relative h-64 sm:h-80 lg:h-auto lg:col-span-7 lg:min-h-[420px] bg-neutral-950">
          <ProjectThumbnail
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            title={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0a0a0a]/40 lg:to-[#0a0a0a]" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/70 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
            <Sparkles size={14} className="animate-spin text-emerald-400" />
            Featured Spotlight Project
          </div>
        </div>

        {/* Project Content & Details */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-emerald-400">
                <Icon size={22} />
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-400">
                Commercial Deployment
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300 sm:text-base">{project.description}</p>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">The Problem</p>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-300 sm:text-sm">{project.problem}</p>
            </div>

            {project.metrics && (
              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2.5 text-center">
                    <p className="text-base font-bold tabular-nums text-white sm:text-lg">{m.value}</p>
                    <p className="text-[10px] font-mono text-neutral-400 sm:text-xs">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:gap-3 border-t border-white/10 pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link w-full sm:w-auto flex-1 justify-center"
            >
              <GitHubIcon size={18} />
              View Code
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link-primary w-full sm:w-auto flex-1 justify-center"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const Icon = iconMap[project.icon] ?? Code2

  return (
    <GlassCard delay={index * 0.06} className="flex h-full flex-col overflow-hidden !p-0">
      <div className="project-thumb relative h-44 sm:h-48 bg-neutral-950">
        <ProjectThumbnail
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          title={project.title}
        />
        <div className="absolute left-3 top-3 rounded-lg border border-white/10 bg-black/60 p-2 backdrop-blur-md sm:left-4 sm:top-4">
          <Icon className="text-white" size={18} />
        </div>
        {project.stars > 0 && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md sm:right-4 sm:top-4">
            <Star size={12} fill="currentColor" />
            {project.stars}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-400">{project.description}</p>

        <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
          <p className="text-[11px] font-mono uppercase text-emerald-400">Impact</p>
          <p className="mt-1 text-xs leading-relaxed text-neutral-300">{project.impact}</p>
        </div>

        <ul className="mt-3 flex-1 space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2 text-xs text-neutral-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[11px] text-neutral-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-2 border-t border-white/10 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link min-h-[40px] flex-1 !px-2 text-xs sm:min-h-[44px] sm:text-sm justify-center"
          >
            <GitHubIcon size={16} />
            Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link-primary min-h-[40px] flex-1 !px-2 text-xs sm:min-h-[44px] sm:text-sm justify-center"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  )
}

export function Projects() {
  const spotlight = projects.find((p) => p.spotlight)
  const rest = projects.filter((p) => !p.spotlight)

  return (
    <section id="projects" className="section-pad" aria-labelledby="projects-heading">
      <div className="container-main">
        <SectionHeading
          eyebrow="Featured Work"
          title="Real products. Real deployments."
          description="Every project below is live, deployed, and solving an actual problem — not a tutorial clone."
          id="projects-heading"
        />

        {spotlight && (
          <div className="mb-8 sm:mb-10">
            <SpotlightProject project={spotlight} />
          </div>
        )}

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
