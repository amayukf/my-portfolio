import {
  Calendar,
  GitBranch,
  Layers,
  Rocket,
  Star,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import { achievements } from '../../data/portfolio'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  GitBranch,
  Rocket,
  Star,
  Layers,
  Trophy,
  Calendar,
}

export function Achievements() {
  return (
    <section id="achievements" className="section-pad border-t border-white/[0.04]" aria-labelledby="achievements-heading">
      <div className="container-main">
        <SectionHeading
          eyebrow="Achievements & Highlights"
          title="Numbers that back it up"
          description="Proof of consistent building, deploying, and learning."
          id="achievements-heading"
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Star
            return (
              <GlassCard key={item.label} delay={i * 0.04} className="!p-4 text-center sm:!p-5">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] sm:h-11 sm:w-11">
                  <Icon className="text-neutral-400" size={20} />
                </div>
                <p className="mt-3 text-2xl font-semibold tabular-nums text-white sm:mt-4 sm:text-3xl">
                  <AnimatedCounter value={item.value} />
                  {item.suffix}
                </p>
                <p className="mt-1.5 text-[11px] leading-snug text-neutral-600 sm:text-xs">{item.label}</p>
              </GlassCard>
            )
          })}
        </div>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
          {[
            {
              title: 'Woliso Blood Donation',
              desc: 'Full-stack Django + React platform for scheduling donations and tracking impact',
            },
            {
              title: 'GitHub Pro Member',
              desc: 'Professional developer account with advanced analytics and collaboration',
            },
            {
              title: 'Consistent Shipper',
              desc: 'Active contributions with 20+ live production deployments',
            },
          ].map((highlight, i) => (
            <GlassCard key={highlight.title} delay={0.15 + i * 0.04} className="border-l-2 border-l-white/20">
              <h3 className="text-sm font-semibold text-white">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{highlight.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
