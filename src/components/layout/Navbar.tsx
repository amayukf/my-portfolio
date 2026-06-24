import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../../data/portfolio'
import { Button } from '../ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-white/[0.06] bg-[#0a0a0a]/85 py-3 backdrop-blur-xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
      style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
    >
      <nav className="container-main flex items-center justify-between" aria-label="Main navigation">
        <a href="#" className="text-base font-semibold text-white">
          {profile.name.split(' ')[0]}
        </a>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-500 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="!px-4 !py-2 !text-sm">
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-neutral-300 transition-colors hover:bg-white/5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-[calc(4.5rem+env(safe-area-inset-top))] z-50 rounded-2xl border border-white/10 bg-[#111] p-5 shadow-2xl md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex min-h-[48px] items-center rounded-lg px-3 text-base text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 border-t border-white/5 pt-3">
                  <a
                    href="#contact"
                    className="flex min-h-[48px] w-full items-center justify-center rounded-lg bg-white text-sm font-medium text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
