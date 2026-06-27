import { forwardRef } from 'react'

interface SplashScreenProps {
  onEnter: () => void
}

export const SplashScreen = forwardRef<HTMLDivElement, SplashScreenProps>(
  function SplashScreen({ onEnter }, ref) {
    return (
      <div ref={ref} className="absolute inset-0 z-[100] bg-ak-bg flex flex-col items-center justify-center cursor-pointer" onClick={onEnter}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,164,201,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        <div className="relative flex flex-col items-center gap-6">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-ak-accent/40 to-transparent" />
          <img src="/Arknights_logo.webp" alt="Arknights" className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-ak-accent/30" />
            <span className="font-display text-[11px] text-ak-accent-bright/60 tracking-[0.3em] uppercase">Operator Terminal</span>
            <div className="w-8 h-px bg-ak-accent/30" />
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-ak-accent/40 to-transparent" />
          <span className="font-display text-[10px] text-white/25 tracking-[0.2em] uppercase animate-[pulse-glow_2s_ease-in-out_infinite]">Click to Enter</span>
        </div>
      </div>
    )
  }
)
