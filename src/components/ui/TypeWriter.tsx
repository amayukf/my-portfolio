import { useEffect, useState } from 'react'

interface TypeWriterProps {
  words: string[]
  className?: string
}

export function TypeWriter({ words, className = '' }: TypeWriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1)
          setText(next)
          if (next === current) {
            setTimeout(() => setDeleting(true), 2000)
          }
        } else {
          const next = current.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setDeleting(false)
            setIndex((i) => (i + 1) % words.length)
          }
        }
      },
      deleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-neutral-500 align-middle" style={{ height: '1em' }} />
    </span>
  )
}
