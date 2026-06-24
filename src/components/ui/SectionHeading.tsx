import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-10 md:mb-12"
    >
      <p className="mb-2 text-sm text-neutral-500">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-[15px] text-neutral-500 md:text-base">{description}</p>
      )}
    </motion.div>
  )
}
