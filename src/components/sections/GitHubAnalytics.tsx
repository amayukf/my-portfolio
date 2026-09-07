import { useState } from 'react'
import { Activity, Calendar, Flame, GitBranch, Rocket, Star, Users, Code } from 'lucide-react'
import { githubStats, profile } from '../../data/portfolio'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { GitHubIcon } from '../ui/SocialIcons'

export function GitHubAnalytics() {
  const [graphError, setGraphError] = useState(false)

  const stats = [
    { icon: GitBranch, label: 'Repositories', value: githubStats.publicRepos },
    { icon: Star, label: 'Stars Earned', value: githubStats.totalStars },
    { icon: Users, label: 'Followers', value: githubStats.followers },
    { icon: Rocket, label: 'Deployed Apps', value: githubStats.deployedApps },
    { icon: Flame, label: 'Streak Status', value: 0, text: githubStats.contributionStreak },
    { icon: Calendar, label: 'Member Since', value: 0, text: githubStats.memberSince },
  ]

  return (
    <section id="analytics" className="section-pad border-t border-white/[0.04]" aria-labelledby="analytics-heading">
      <div className="container-main">
        <SectionHeading
          eyebrow="GitHub Analytics"
          title="Open source in numbers"
          description={`@${githubStats.username} — building in public since ${githubStats.memberSince}`}
          id="analytics-heading"
        />

        {/* Top Summary Cards */}
        <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.03} className="!p-3 text-center sm:!p-4">
              <stat.icon className="mx-auto text-neutral-400" size={20} />
              <p className="mt-2 text-lg font-semibold tabular-nums text-white sm:mt-3 sm:text-xl md:text-2xl">
                {stat.text ?? (
                  <>
                    <AnimatedCounter value={stat.value} />
                    {stat.label === 'Deployed Apps' && '+'}
                  </>
                )}
              </p>
              <p className="mt-1 text-[10px] text-neutral-400 sm:text-[11px]">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-5">
          {/* Real GitHub Contribution Graph Image */}
          <GlassCard delay={0.08} className="overflow-hidden lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white sm:text-lg">
                <Activity size={18} className="text-emerald-400" />
                Live GitHub Activity Graph
              </h3>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-neutral-400 hover:text-emerald-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 transition-colors"
              >
                @{githubStats.username}
              </a>
            </div>

            <div className="flex items-center justify-center min-h-[160px] rounded-xl border border-white/5 bg-black/40 p-3 sm:p-4 overflow-x-auto">
              {!graphError ? (
                <img
                  src={githubStats.contributionGraphUrl}
                  alt={`GitHub Contribution Graph for ${githubStats.username}`}
                  className="w-full max-w-full rounded-lg object-contain min-w-[500px]"
                  loading="lazy"
                  onError={() => setGraphError(true)}
                />
              ) : (
                <div className="text-center py-6">
                  <p className="text-sm text-neutral-400">View real-time commit history directly on GitHub</p>
                  <Button href={profile.github} variant="secondary" external className="mt-3 !py-1.5 !px-3 !text-xs">
                    <GitHubIcon size={14} />
                    Open @{githubStats.username}
                  </Button>
                </div>
              )}
            </div>
          </GlassCard>

          {/* Languages Breakdown */}
          <GlassCard delay={0.12} className="lg:col-span-2">
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-5 sm:text-lg flex items-center gap-2">
              <Code size={18} className="text-blue-400" />
              Most Used Languages
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {githubStats.topLanguages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-neutral-200 font-medium">{lang.name}</span>
                    <span className="font-mono text-xs text-neutral-400">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color,
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 sm:mt-6">
              <Button href={profile.github} variant="secondary" external className="w-full !text-sm">
                <GitHubIcon size={16} />
                View Full Profile
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
