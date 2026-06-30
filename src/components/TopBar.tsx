import Link from 'next/link'
import { useApp } from './AppShell'

export function TopBar() {
  return (
    <div className="fixed md:absolute top-3 right-3 md:top-5 md:right-6 z-50 md:z-30 flex items-center gap-2 md:gap-3">
      <Link
        href="/operator"
        className="hud-item w-7 h-7 md:w-9 md:h-9 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-white/[0.14] hover:border-white/[0.2] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6]"
        style={{ transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s' }}
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-[18px] md:h-[18px] fill-white/50">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </Link>
      
      <div className="hud-item hidden md:flex items-center gap-2 bg-ak-panel/50 backdrop-blur-sm border border-ak-border/30 px-3 py-1.5">
        <div className="w-2 h-2 bg-ak-accent rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]" />
        <span className="font-display text-[11px] text-ak-text-muted tracking-wider">RHODES ISLAND</span>
      </div>
    </div>
  )
}
