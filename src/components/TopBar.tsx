interface TopBarProps {
  isMuted: boolean
  onToggleMute: () => void
}

export function TopBar({ isMuted, onToggleMute }: TopBarProps) {
  return (
    <div className="absolute top-5 right-6 z-30 flex items-center gap-3">
      <button
        onClick={onToggleMute}
        className="hud-item w-9 h-9 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-white/[0.14] hover:border-white/[0.2] active:scale-[0.97] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6]"
        style={{ transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s' }}
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white/50">
          {isMuted ? (
            <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          ) : (
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-3.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          )}
        </svg>
      </button>
      <div className="hud-item flex items-center gap-2 bg-ak-panel/50 backdrop-blur-sm border border-ak-border/30 px-3 py-1.5">
        <div className="w-2 h-2 bg-ak-accent rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]" />
        <span className="font-display text-[11px] text-ak-text-muted tracking-wider">RHODES ISLAND</span>
      </div>
    </div>
  )
}
