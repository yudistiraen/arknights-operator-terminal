import { BUTTON_BASE, BUTTON_HOVER } from '../constants'

interface NavigationArrowsProps {
  onPrevious: () => void
  onNext: () => void
}

export function NavigationArrows({ onPrevious, onNext }: NavigationArrowsProps) {
  return (
    <div className="absolute left-0 top-0 w-[54%] h-full z-30 flex items-center justify-between px-4 pointer-events-none">
      <button
        onClick={onPrevious}
        className={`lobby-btn pointer-events-auto w-10 h-10 flex items-center justify-center ${BUTTON_BASE} ${BUTTON_HOVER} rounded-sm`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white/60 stroke-2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={onNext}
        className={`lobby-btn pointer-events-auto w-10 h-10 flex items-center justify-center ${BUTTON_BASE} ${BUTTON_HOVER} rounded-sm`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white/60 stroke-2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
