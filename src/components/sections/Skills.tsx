import { skills } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

const categories = [
  { key: 'frontend' as const, label: 'Frontend' },
  { key: 'backend' as const, label: 'Backend' },
  { key: 'languages' as const, label: 'Programming Languages' },
  { key: 'databases' as const, label: 'Databases' },
  { key: 'tools' as const, label: 'Tools' },
  { key: 'cloud' as const, label: 'Cloud & Deployment' },
]

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-white/[0.04]" aria-labelledby="skills-heading">
      <div className="container-main">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A full-stack toolkit honed across 32+ deployed projects."
          id="skills-heading"
        />

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <GlassCard key={cat.key} delay={i * 0.04}>
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {cat.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                {skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-neutral-400 sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
