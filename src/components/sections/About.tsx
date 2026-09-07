import { about } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-pad border-t border-white/[0.04]" aria-labelledby="about-heading">
      <div className="container-main max-w-3xl">
        <SectionHeading eyebrow="About" title="A bit about me" id="about-heading" />

        <GlassCard hover={false} delay={0}>
          <div className="space-y-4">
            {about.story.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-pretty text-[15px] leading-relaxed text-neutral-400 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-white/5 pt-6">
            <p className="mb-3 text-sm font-medium text-neutral-300">Currently looking for</p>
            <ul className="space-y-2">
              {about.goals.map((goal) => (
                <li key={goal} className="text-sm text-neutral-500">
                  — {goal}
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
