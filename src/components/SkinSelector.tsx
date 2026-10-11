import type { OperatorSkin } from '../types'
import { FOCUS_RING } from './ui/Console'

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
            aria-pressed={isActive}
            className={`skin-btn group flex items-center gap-1.5 md:gap-2 min-w-7 md:min-w-9 h-7 md:h-9 px-2 md:px-3 border shadow-[0_8px_20px_-8px_rgba(0,0,0,0.7)] ${FOCUS_RING} ${
              isActive
                ? 'bg-gc-invert border-gc-invert'
                : 'bg-gc-frame border-gc-line hover:bg-gc-raised hover:border-gc-line-strong cursor-pointer active:scale-[0.97]'
            }`}
            style={{ transition: 'transform 0.15s' }}
          >
            <div
              className={`w-1.5 h-1.5 shrink-0 ${isActive ? 'bg-gc-void' : 'bg-gc-ghost group-hover:bg-gc-dim'}`}
            />
            <span
              className={`font-data text-[10px] tracking-[0.1em] uppercase whitespace-nowrap overflow-hidden ${
                isActive
                  ? 'max-w-[120px] opacity-100 text-gc-void'
                  : 'max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 text-gc-text'
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
