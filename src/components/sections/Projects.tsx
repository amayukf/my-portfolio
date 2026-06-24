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
}

function ProjectThumbnail({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex h-full min-h-[160px] items-center justify-center bg-neutral-900 sm:min-h-[180px]">
        <span className="px-4 text-center text-sm font-medium text-neutral-500">{title}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full min-h-[160px] w-full object-cover object-top sm:min-h-[180px]"
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  )
}

function SpotlightProject({ project }: { project: (typeof projects)[0] }) {
  const Icon = iconMap[project.icon] ?? Code2

  return (
    <GlassCard className="overflow-hidden !p-0" delay={0}>
      <div className="grid lg:grid-cols-2">
        <div className="project-thumb relative h-52 sm:h-64 lg:h-auto lg:min-h-[400px]">
          <ProjectThumbnail
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            title={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0a0a0a]/40" />
        </div>

        <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2">
              <Icon className="text-neutral-300" size={20} />
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-400">
              Featured
            </span>
          </div>

          <h3 id="projects-heading" className="mt-4 text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-400 sm:mt-3 sm:text-base">{project.description}</p>

          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-4">
            <p className="text-xs font-medium text-neutral-500">Problem</p>
            <p className="mt-2 text-sm text-neutral-400">{project.problem}</p>
          </div>

          {project.metrics && (
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-lg border border-white/5 bg-white/[0.02] px-2 py-2 text-center sm:px-3">
                  <p className="text-base font-semibold tabular-nums text-white sm:text-lg">{m.value}</p>
                  <p className="text-[10px] text-neutral-600 sm:text-xs">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 text-xs text-neutral-500">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link w-full sm:w-auto"
            >
              <GitHubIcon size={16} />
              View Code
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link-primary w-full sm:w-auto"
              >
                <ExternalLink size={16} />
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
      <div className="project-thumb relative h-40 sm:h-44">
        <ProjectThumbnail
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          title={project.title}
        />
        <div className="absolute left-3 top-3 rounded-lg border border-white/10 bg-black/50 p-1.5 backdrop-blur-sm sm:left-4 sm:top-4 sm:p-2">
          <Icon className="text-white" size={18} />
        </div>
        {project.stars > 0 && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-0.5 text-xs text-amber-300 backdrop-blur-sm sm:right-4 sm:top-4 sm:px-2.5 sm:py-1">
            <Star size={12} fill="currentColor" />
            {project.stars}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-white sm:text-lg">{project.title}</h3>
        <p className="mt-1.5 text-sm text-neutral-400">{project.description}</p>

        <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
          <p className="text-xs font-medium text-neutral-500">Impact</p>
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">{project.impact}</p>
        </div>

        <ul className="mt-3 flex-1 space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2 text-xs text-neutral-500">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded bg-white/5 px-2 py-0.5 text-[11px] text-neutral-600">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2 border-t border-white/5 pt-4 sm:mt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link min-h-[40px] flex-1 !px-2 text-xs sm:min-h-[44px] sm:text-sm"
          >
            <GitHubIcon size={14} />
            Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link-primary min-h-[40px] flex-1 !px-2 text-xs sm:min-h-[44px] sm:text-sm"
            >
              <ExternalLink size={14} />
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
        />

        {spotlight && (
          <div className="mb-6 sm:mb-8">
            <SpotlightProject project={spotlight} />
          </div>
        )}

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
