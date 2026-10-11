import Link from 'next/link'
import { FOCUS_RING } from './ui/Console'

export function TopBar() {
  return (
    <div className="fixed md:absolute top-3 right-3 md:top-5 md:right-6 z-50 md:z-30 flex items-center gap-2 md:gap-3">
      <Link
        href="/operator"
        aria-label="Back to operator list"
        className={`hud-item group relative w-8 h-8 md:w-9 md:h-9 bg-gc-frame border border-gc-line-strong shadow-[0_8px_20px_-8px_rgba(0,0,0,0.7)] flex items-center justify-center active:scale-[0.95] ${FOCUS_RING}`}
        style={{ transition: 'transform 0.15s' }}
      >
        <span className="absolute inset-0 bg-gc-raised opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.15s ease-out' }} />
        <svg viewBox="0 0 24 24" className="relative w-3.5 h-3.5 md:w-[18px] md:h-[18px] fill-gc-text">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </Link>
    </div>
  )
}
