import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants = {
  primary: 'bg-white text-black hover:bg-neutral-200',
  secondary: 'border border-white/10 text-neutral-300 hover:border-white/20 hover:text-white',
  ghost: 'text-neutral-400 hover:text-white',
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${classes} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
    >
      {children}
    </motion.button>
  )
}
