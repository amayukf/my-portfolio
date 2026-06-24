import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function GlassCard({ children, className = '', hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -2,
              transition: { duration: 0.2 },
            }
          : undefined
      }
      className={`glass group/card p-5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.05] sm:p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
