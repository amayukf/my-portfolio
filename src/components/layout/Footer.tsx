import { Send } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-white/5 py-10 sm:py-12"
      style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="container-main flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-base font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-neutral-600">© {year}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="GitHub profile"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={profile.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Telegram"
          >
            <Send size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
