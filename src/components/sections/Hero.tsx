import { ArrowDown, Download } from 'lucide-react'
import { githubStats, profile } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'
import { TypeWriter } from '../ui/TypeWriter'

export function Hero() {
  return (
    <section className="section-pad relative flex min-h-[calc(100dvh-4rem)] items-center pt-24 pb-16 sm:pt-28" aria-label="Introduction">
      <div className="container-main relative z-10">
        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          {/* Avatar first on mobile for visual hook */}
          <div className="order-1 flex flex-col items-center md:order-2 md:items-end">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-36 w-36 rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/40 sm:h-44 sm:w-44 md:h-52 md:w-52"
              width={208}
              height={208}
              loading="eager"
              fetchPriority="high"
            />
            <div className="mt-5 flex w-full max-w-xs justify-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm sm:max-w-none sm:gap-8 md:justify-end">
              <div className="text-center">
                <p className="font-semibold tabular-nums text-white">{githubStats.publicRepos}</p>
                <p className="text-xs text-neutral-600">repos</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <p className="font-semibold tabular-nums text-white">{githubStats.deployedApps}+</p>
                <p className="text-xs text-neutral-600">deployed</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <p className="font-semibold tabular-nums text-white">{githubStats.totalStars}</p>
                <p className="text-xs text-neutral-600">stars</p>
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1">
            {profile.available && (
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400 sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for internships
              </p>
            )}

            <h1 className="text-balance text-[clamp(2rem,8vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-white">
              {profile.name}
            </h1>

            <p className="mt-3 min-h-[1.75rem] text-base text-neutral-400 sm:mt-4 sm:text-lg md:text-xl">
              <TypeWriter words={profile.typingRoles} className="text-neutral-200" />
            </p>

            <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-neutral-500 sm:text-base">
              {profile.bio}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:mt-9">
              <Button href="#projects" variant="primary" className="w-full sm:w-auto">
                View projects
              </Button>
              <Button href={profile.resumeUrl} variant="secondary" external className="w-full sm:w-auto">
                <Download size={17} />
                Resume
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-neutral-500 transition-colors hover:border-white/20 hover:text-white"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-neutral-500 transition-colors hover:border-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hero-email break-all text-sm text-neutral-500 transition-colors hover:text-white sm:break-normal"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-neutral-600 transition-colors hover:text-neutral-400 sm:bottom-6 sm:block"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
