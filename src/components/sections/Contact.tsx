import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Mail, Send } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { CopyEmailButton } from '../ui/CopyEmailButton'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="section-pad border-t border-white/[0.04]" aria-labelledby="contact-heading">
      <div className="container-main">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Internship, freelance, or collaboration — I reply within 24 hours."
        />

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <GlassCard className="lg:col-span-2" delay={0}>
            <h3 id="contact-heading" className="text-lg font-semibold text-white sm:text-xl">
              Reach me directly
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:mt-3">
              The fastest way to reach me is email or Telegram. I&apos;m actively looking for internship and remote opportunities.
            </p>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex min-h-[48px] items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-sm text-neutral-300 transition-colors hover:border-white/10 hover:text-white"
              >
                <Mail size={18} className="shrink-0 text-neutral-500" />
                <span className="break-all">{profile.email}</span>
              </a>
              <CopyEmailButton email={profile.email} className="w-full" />

              <a
                href={profile.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center gap-3 text-sm text-neutral-500 transition-colors hover:text-white"
              >
                <Send size={18} className="text-neutral-500" />
                Telegram: @ame_kt
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-link">
                <GitHubIcon size={18} />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-link">
                <LinkedInIcon size={18} />
                LinkedIn
              </a>
              <a
                href={profile.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link col-span-2"
              >
                <Send size={18} />
                Telegram
              </a>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-3" delay={0.08}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[320px] flex-col items-center justify-center py-10 text-center sm:min-h-[400px] sm:py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="rounded-full bg-emerald-500/10 p-5"
                  >
                    <CheckCircle2 className="text-emerald-400" size={36} />
                  </motion.div>
                  <h3 className="mt-5 text-xl font-semibold text-white sm:mt-6 sm:text-2xl">Message received!</h3>
                  <p className="mt-2 max-w-sm text-sm text-neutral-500">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-500">
                        Name
                      </label>
                      <input id="name" name="name" type="text" required autoComplete="name" className="input-field" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-500">
                        Email
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email" className="input-field" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-neutral-500">
                      Subject
                    </label>
                    <input id="subject" name="subject" type="text" required className="input-field" placeholder="Internship opportunity / Project inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-500">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="input-field min-h-[120px] resize-none py-3"
                      placeholder="Tell me about the role or project..."
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
