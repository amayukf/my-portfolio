import { Activity, Calendar, Flame, GitBranch, Rocket, Star, Users } from 'lucide-react'
import { githubStats, profile } from '../../data/portfolio'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { GitHubIcon } from '../ui/SocialIcons'

export function GitHubAnalytics() {
  const stats = [
    { icon: GitBranch, label: 'Repositories', value: githubStats.publicRepos },
    { icon: Star, label: 'Stars Earned', value: githubStats.totalStars },
    { icon: Users, label: 'Followers', value: githubStats.followers },
    { icon: Rocket, label: 'Deployed Apps', value: githubStats.deployedApps },
    { icon: Flame, label: 'Contribution Streak', value: 0, text: githubStats.contributionStreak },
    { icon: Calendar, label: 'Member Since', value: 0, text: githubStats.memberSince },
  ]

  return (
    <section id="analytics" className="section-pad border-t border-white/[0.04]" aria-labelledby="analytics-heading">
      <div className="container-main">
        <SectionHeading
          eyebrow="GitHub Analytics"
          title="Open source in numbers"
          description={`@${githubStats.username} — building in public since ${githubStats.memberSince}`}
        />

        <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.03} className="!p-3 text-center sm:!p-4">
              <stat.icon className="mx-auto text-neutral-500" size={20} />
              <p
                id={i === 0 ? 'analytics-heading' : undefined}
                className="mt-2 text-lg font-semibold tabular-nums text-white sm:mt-3 sm:text-xl md:text-2xl"
              >
                {stat.text ?? (
                  <>
                    <AnimatedCounter value={stat.value} />
                    {stat.label === 'Deployed Apps' && '+'}
                  </>
                )}
              </p>
              <p className="mt-1 text-[10px] text-neutral-600 sm:text-[11px]">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-5">
          <GlassCard delay={0.08} className="overflow-hidden lg:col-span-3">
            <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-white sm:mb-4 sm:text-lg">
              <Activity size={18} className="text-neutral-500" />
              Contribution Graph
            </h3>
            <div className="scroll-hint -mx-1 rounded-xl bg-black/30 p-2 sm:mx-0">
              <img
                src={githubStats.contributionGraphUrl}
                alt="GitHub contribution activity graph for amayukf"
                className="w-full min-w-[280px] rounded-lg sm:min-w-[600px]"
                loading="lazy"
                decoding="async"
                width={800}
                height={200}
              />
            </div>
            <p className="mt-2 text-center text-[11px] text-neutral-600 sm:hidden">Swipe to view graph →</p>
          </GlassCard>

          <GlassCard delay={0.12} className="lg:col-span-2">
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-5 sm:text-lg">Most Used Languages</h3>
            <div className="space-y-3 sm:space-y-4">
              {githubStats.topLanguages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-neutral-300">{lang.name}</span>
                    <span className="font-mono text-xs text-neutral-600">{lang.percentage}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5 sm:h-2">
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

          <GlassCard delay={0.16} className="overflow-hidden lg:col-span-5">
            <h3 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">Activity & Streak</h3>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <img
                src={githubStats.statsUrl}
                alt="GitHub statistics for amayukf"
                className="w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <img
                src={githubStats.streakUrl}
                alt="GitHub contribution streak for amayukf"
                className="w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
