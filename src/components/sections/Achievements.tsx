import { CheckCircle2 } from 'lucide-react'
import { highlights } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

export function Achievements() {
  return (
    <section id="achievements" className="section-pad border-t border-white/[0.04]" aria-labelledby="achievements-heading">
      <div className="container-main">
        <SectionHeading
          eyebrow="Key Highlights"
          title="Engineering milestones & impact"
          description="Concrete results from shipping production web & mobile applications."
          id="achievements-heading"
        />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.08} className="flex flex-col justify-between border-l-2 border-l-emerald-500/50 p-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400">
                    {item.tag}
                  </span>
                  <CheckCircle2 size={16} className="text-emerald-400" />
                </div>
                <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400 sm:text-sm">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
