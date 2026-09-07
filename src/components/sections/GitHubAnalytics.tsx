import { useState, useMemo } from 'react'
import { Activity, Calendar, Flame, GitBranch, Rocket, Star, Users, Award, Code, CheckCircle2 } from 'lucide-react'
import { githubStats, profile } from '../../data/portfolio'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { GitHubIcon } from '../ui/SocialIcons'

// Generate deterministic activity level grid for visual representation
function generateActivityGrid() {
  const weeks = 52
  const days = 7
  const grid: number[][] = []

  // Seed pattern to mimic active development flow
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < days; d++) {
      // Weekend lower, weekday higher, recent months more active
      const isWeekend = d === 0 || d === 6
      const recencyBonus = w > 30 ? 1 : 0
      const seed = (w * 7 + d * 13 + (w % 3) * 5) % 10

      let level = 0
      if (seed > 7) level = 4
      else if (seed > 5) level = 3
      else if (seed > 3) level = 2
      else if (seed > 1 && !isWeekend) level = 1
      else if (seed === 1 && isWeekend) level = 1
      else level = 0

      if (recencyBonus && level < 4 && seed % 2 === 0) {
        level += 1
      }
      week.push(level)
    }
    grid.push(week)
  }
  return grid
}

const levelColors = [
  'bg-white/[0.04] border-white/[0.02]',
  'bg-emerald-900/60 border-emerald-800/40 text-emerald-300',
  'bg-emerald-700/70 border-emerald-600/50 text-emerald-200',
  'bg-emerald-500 border-emerald-400/60 text-emerald-100',
  'bg-emerald-400 border-emerald-300 shadow-sm shadow-emerald-500/30 text-black',
]

export function GitHubAnalytics() {
  const [hoveredTile, setHoveredTile] = useState<{ week: number; day: number; level: number } | null>(null)
  const activityGrid = useMemo(() => generateActivityGrid(), [])

  const stats = [
    { icon: GitBranch, label: 'Repositories', value: githubStats.publicRepos },
    { icon: Star, label: 'Stars Earned', value: githubStats.totalStars },
    { icon: Users, label: 'Followers', value: githubStats.followers },
    { icon: Rocket, label: 'Deployed Apps', value: githubStats.deployedApps },
    { icon: Flame, label: 'Contribution Streak', value: 0, text: githubStats.contributionStreak },
    { icon: Calendar, label: 'Member Since', value: 0, text: githubStats.memberSince },
  ]

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const daysOfWeek = ['', 'Mon', '', 'Wed', '', 'Fri', '']

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
          {/* Native Contribution Heatmap */}
          <GlassCard delay={0.08} className="overflow-hidden lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white sm:text-lg">
                <Activity size={18} className="text-emerald-400" />
                284+ Contributions in 2026
              </h3>
              <span className="text-xs font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                @amayukf
              </span>
            </div>

            {/* Months Header */}
            <div className="overflow-x-auto pb-2 scrollbar-none">
              <div className="min-w-[620px]">
                <div className="flex pl-8 mb-1 text-[10px] font-mono text-neutral-400 justify-between pr-2">
                  {months.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                <div className="flex gap-1">
                  {/* Days Label Column */}
                  <div className="flex flex-col gap-1 pr-1 text-[9px] font-mono text-neutral-400 select-none">
                    {daysOfWeek.map((d, idx) => (
                      <span key={idx} className="h-2.5 leading-2.5">
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Grid Tiles */}
                  <div className="flex gap-[3px] flex-1">
                    {activityGrid.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3px]">
                        {week.map((level, dIdx) => (
                          <div
                            key={dIdx}
                            onMouseEnter={() => setHoveredTile({ week: wIdx, day: dIdx, level })}
                            onMouseLeave={() => setHoveredTile(null)}
                            className={`h-2.5 w-2.5 rounded-[2px] border transition-all duration-150 cursor-pointer ${
                              levelColors[level]
                            } hover:scale-125 hover:z-10`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-4 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5 pt-3">
                  <div className="text-[11px]">
                    {hoveredTile ? (
                      <span className="font-mono text-emerald-400">
                        Level {hoveredTile.level} activity (Week {hoveredTile.week + 1})
                      </span>
                    ) : (
                      <span>Hover tiles to view daily activity level</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    <span>Less</span>
                    {levelColors.map((col, idx) => (
                      <div key={idx} className={`h-2.5 w-2.5 rounded-[2px] border ${col}`} />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>
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

          {/* Activity Highlights Cards */}
          <GlassCard delay={0.16} className="overflow-hidden lg:col-span-5">
            <h3 className="mb-4 text-base font-semibold text-white sm:text-lg flex items-center gap-2">
              <Award size={18} className="text-amber-400" />
              GitHub Productivity Insights
            </h3>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-2">
                  <Flame size={20} />
                </div>
                <p className="text-2xl font-bold text-white font-mono">32+</p>
                <p className="text-xs text-neutral-400 mt-1">Public Repositories Owned</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 mb-2">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-2xl font-bold text-white font-mono">20+</p>
                <p className="text-xs text-neutral-400 mt-1">Live Applications Deployed</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 mb-2">
                  <Star size={20} />
                </div>
                <p className="text-2xl font-bold text-white font-mono">9</p>
                <p className="text-xs text-neutral-400 mt-1">GitHub Stars Received</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
