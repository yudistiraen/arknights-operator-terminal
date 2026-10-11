// Graphite Console card surfaces (design-pattern.md §4.1/§4.5). Hover/active swap surfaces
// instantly; only transform animates.
export const BUTTON_BASE = "lobby-btn relative overflow-hidden bg-gc-frame border border-gc-line shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_32px_-12px_rgba(0,0,0,0.7)] text-left"

export const BUTTON_HOVER = "hover:bg-gc-raised hover:border-gc-line-strong active:bg-gc-panel focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gc-scan transition-transform duration-200 ease-[cubic-bezier(0.22,1.2,0.36,1)] active:scale-[0.985] cursor-pointer"

// The one highlighted card per screen region: brighter inset border, carries the signal triangle.
export const BUTTON_CYAN_BASE = "lobby-btn relative overflow-hidden bg-gc-panel border border-gc-line-strong shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_32px_-12px_rgba(0,0,0,0.7)] text-left"

export const BUTTON_CYAN_HOVER = "hover:border-gc-invert focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gc-scan transition-transform duration-200 active:scale-[0.985] cursor-pointer"

export const RARITY_GRADIENT: Record<number, string> = {
  6: 'from-[#f07830]/60 to-[#c05018]/20',
  5: 'from-[#f0c95c]/40 to-[#d4a843]/15',
  4: 'from-[#c9a0f0]/40 to-[#9060c0]/15',
  3: 'from-[#5ec4e6]/40 to-[#3ba4c9]/15',
  2: 'from-[#8ce6a0]/30 to-[#50b068]/10',
  1: 'from-white/20 to-white/5',
}

export const RARITY_BAR: Record<number, string> = {
  6: 'from-[#f07830] to-[#c05018]',
  5: 'from-[#f0c95c]/70 to-[#d4a843]/50',
  4: 'from-[#c9a0f0]/70 to-[#9060c0]/50',
  3: 'from-[#5ec4e6]/60 to-[#3ba4c9]/40',
  2: 'from-[#8ce6a0]/50 to-[#50b068]/30',
  1: 'from-white/30 to-white/10',
}

export const RARITY_SOLID: Record<number, string> = {
  6: '#f07830',
  5: '#f0c95c',
  4: '#c9a0f0',
  3: '#5ec4e6',
  2: '#8ce6a0',
  1: '#d8d8d8',
}

export const PHYSICAL_EXAM_RATINGS: Record<string, number> = {
  Flawed: 1,
  Normal: 2,
  Standard: 3,
  Excellent: 4,
  Outstanding: 5,
  '■■': 5,
}
