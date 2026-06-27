export const BUTTON_BASE = "lobby-btn relative overflow-hidden bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)] text-left"

export const BUTTON_HOVER = "hover:bg-white/[0.14] hover:border-white/[0.2] active:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6] transition-transform duration-200 hover:scale-[1.015] active:scale-[0.985] cursor-pointer"

export const BUTTON_CYAN_BASE = "lobby-btn relative overflow-hidden bg-[#3ba4c9]/25 backdrop-blur-md border border-[#3ba4c9]/30 shadow-[0_2px_12px_rgba(59,164,201,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] text-left"

export const BUTTON_CYAN_HOVER = "hover:bg-[#3ba4c9]/35 hover:border-[#3ba4c9]/40 active:bg-[#3ba4c9]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6] transition-transform duration-200 hover:scale-[1.015] active:scale-[0.985] cursor-pointer"

export const PHYSICAL_EXAM_RATINGS: Record<string, number> = {
  Flawed: 1,
  Normal: 2,
  Standard: 3,
  Excellent: 4,
  Outstanding: 5,
  '■■': 5,
}
