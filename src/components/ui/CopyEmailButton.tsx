import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy } from 'lucide-react'

interface CopyEmailButtonProps {
  email: string
  className?: string
}

export function CopyEmailButton({ email, className = '' }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white ${className}`}
      aria-label={copied ? 'Email copied' : 'Copy email address'}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-emerald-400"
          >
            <Check size={16} />
            Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Copy size={16} />
            Copy Email
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
