import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Mail, Send } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { CopyEmailButton } from '../ui/CopyEmailButton'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeading } from '../ui/SectionHeading'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'

// Optional custom webhook or Telegram Bot integration for instant SMS/Mobile notifications
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || ''
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || ''
const SMS_WEBHOOK_URL = import.meta.env.VITE_SMS_WEBHOOK_URL || ''

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    const formattedMessage = `📩 New Portfolio Lead!\n👤 Name: ${name}\n✉️ Email: ${email}\n📌 Subject: ${subject}\n💬 Message: ${message}`

    let success = false

    try {
      // 1. Submit to Formspree for Email delivery
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xjyvaonl'
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        success = true
      }

      // 2. Dispatch instant Telegram notification (acts as instant mobile push/SMS) if configured
      if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: formattedMessage,
          }),
        }).catch(() => {})
      }

      // 3. Dispatch to custom SMS Webhook (Twilio / Make / Zapier) if configured
      if (SMS_WEBHOOK_URL) {
        await fetch(SMS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message, formattedMessage }),
        }).catch(() => {})
      }

      if (success) {
        setSubmitted(true)
        form.reset()
      } else {
        // Fallback to mailto if services fail
        const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
        window.location.href = mailtoUrl
        setSubmitted(true)
      }
    } catch {
      // Fallback to mailto on network error
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
      window.location.href = mailtoUrl
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-pad border-t border-white/[0.04]" aria-labelledby="contact-heading">
      <div className="container-main">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Internship, freelance, or collaboration — I reply within 24 hours."
          id="contact-heading"
        />

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <GlassCard className="lg:col-span-2" delay={0}>
            <h3 className="text-lg font-semibold text-white sm:text-xl">
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
                  <h3 className="mt-5 text-xl font-semibold text-white sm:mt-6 sm:text-2xl">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-neutral-500">
                    Thanks for reaching out. I&apos;ll get instant notification on my phone and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-neutral-500 transition-colors hover:text-white"
                  >
                    Send another message
                  </button>
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
                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}
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
