import type { OperatorSkin } from '../types'

interface SkinSelectorProps {
  skins: OperatorSkin[]
  activeSkinIndex: number
  onSkinChange: (index: number) => void
}

export function SkinSelector({ skins, activeSkinIndex, onSkinChange }: SkinSelectorProps) {
  return (
    <div className="absolute top-3 left-3 md:top-5 md:left-6 z-30 flex items-center gap-1.5 md:gap-2">
      {skins.map((skin, index) => {
        const isActive = index === activeSkinIndex
        return (
          <button
            key={skin.id}
            onClick={() => onSkinChange(index)}
            className={`skin-btn group flex items-center gap-1.5 md:gap-2 min-w-7 md:min-w-9 h-7 md:h-9 px-2 md:px-3 bg-white/[0.08] backdrop-blur-md border shadow-[0_2px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6] ${
              isActive
                ? 'border-ak-accent/50 bg-ak-accent/15 shadow-[0_0_12px_rgba(59,164,201,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]'
                : 'border-white/[0.12] hover:bg-white/[0.14] hover:border-white/[0.2] cursor-pointer active:scale-[0.97]'
            }`}
            style={{ transition: 'background-color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s' }}
          >
            <div
              className={`w-1 h-4 rounded-full shrink-0 ${
                isActive
                  ? 'bg-ak-accent shadow-[0_0_6px_rgba(59,164,201,0.5)]'
                  : 'bg-white/20 group-hover:bg-white/40'
              }`}
              style={{ transition: 'background-color 0.3s, box-shadow 0.3s' }}
            />
            <span
              className={`font-display text-[10px] tracking-wider whitespace-nowrap overflow-hidden ${
                isActive
                  ? 'max-w-[120px] opacity-100 text-ak-accent-bright'
                  : 'max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 text-white/60'
              }`}
              style={{ transition: 'max-width 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease 0.1s' }}
            >
              {skin.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
