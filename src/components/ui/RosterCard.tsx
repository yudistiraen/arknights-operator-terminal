import Image from 'next/image'
import Link from 'next/link'
import type { RosterEntry } from '../../lib/operators'
import type { WalkingToggleProps } from '../../lib/chibiSelection'
import { playHover } from '../../lib/sound'
import { RARITY_BAR } from '../../constants'
import { OperatorCardArt } from './OperatorCardArt'
import { BracketCorners, FOCUS_RING } from './Console'

// Roster-card corner ribbon. "both" covers an alter form that is itself
// crossover content (e.g. Kirin R Yato) — distinct from a plain alter or a
// plain crossover so the two statuses don't collapse into one label.
const CARD_BADGES = {
  alter: { label: 'Alter', tone: 'bg-[#f0954f] text-gc-void' },
  crossover: { label: 'Crossover', tone: 'bg-[#4f9d67] text-gc-void' },
  both: { label: 'Xover alt', tone: 'bg-[#a06ff0] text-gc-void' },
} as const satisfies Record<string, { label: string, tone: string }>

function getCardBadge(entry: RosterEntry): typeof CARD_BADGES[keyof typeof CARD_BADGES] | null {
  const isCrossover = entry.operator.tags?.includes('Crossover') ?? false
  if (entry.isAlter && isCrossover) return CARD_BADGES.both
  if (entry.isAlter) return CARD_BADGES.alter
  if (isCrossover) return CARD_BADGES.crossover
  return null
}

// Shared roster-grid card used by both the Operator List and Recruit results —
// keeping it in one place means the hover name-reveal animation, badges, and
// rarity accent stay in sync everywhere a roster of operators is rendered.
export function RosterCard({ entry, href, walkingToggle }: { entry: RosterEntry; href: string; walkingToggle?: WalkingToggleProps }) {
  const badge = getCardBadge(entry)

  return (
    <div className="op-card relative">
    <Link
      href={href}
      onMouseEnter={playHover}
      className={`block group relative overflow-hidden bg-gc-panel border border-gc-line text-left aspect-[0.60] w-full hover:border-gc-line-strong active:scale-[0.98] ${FOCUS_RING}`}
      style={{ transition: 'scale 0.15s cubic-bezier(0.22, 1.2, 0.36, 1)' }}
    >
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${RARITY_BAR[entry.operator.rarity] ?? 'from-white/20 to-white/5'} z-10`} />

      <OperatorCardArt
        src={entry.operator.skins[0].src}
        zoom={entry.operator.portraitFocus?.zoom ?? 250}
        x={entry.operator.portraitFocus?.x ?? 50}
        y={entry.operator.portraitFocus?.y ?? 0}
      />

      <div className="absolute inset-0 bg-gc-raised mix-blend-multiply opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 via-25% to-transparent to-55%" />

      {badge && (
        <span className={`absolute top-2 left-2 z-20 pointer-events-none font-data text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.12em] leading-none px-1.5 py-1 ${badge.tone}`}>
          {badge.label}
        </span>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-2 z-10">
        <div className="flex items-center gap-1 md:gap-1.5">
          <p className="font-body text-[13px] md:text-[15px] font-semibold text-gc-ink leading-none min-w-0">
            <span className="op-name-wrap truncate">
              <span className="op-name-text">{entry.operator.name}</span>
              <span className="op-name-cursor" aria-hidden />
            </span>
          </p>
        </div>
        <div className="flex items-center gap-1.5 pt-1.5">
          <Image
            src={entry.operator.classIcon}
            alt={entry.operator.class}
            width={20}
            height={20}
            className="w-3 h-3 md:w-4 md:h-4 object-contain opacity-60 shrink-0"
          />
          <p className="text-[10px] md:text-[11px] text-gc-dim font-data tracking-[0.04em] truncate">
            {entry.operator.class} · {entry.operator.branch}
          </p>
        </div>
      </div>

      <span className="absolute inset-1 z-10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-events-none" style={{ transition: 'opacity 0.2s ease-out' }}>
        <BracketCorners size={8} className="border-gc-invert" />
      </span>
    </Link>
    {walkingToggle && (
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          walkingToggle.onToggle()
        }}
        disabled={walkingToggle.disabled}
        title={walkingToggle.isSelected ? 'Retreat' : 'Deploy operator'}
        aria-pressed={walkingToggle.isSelected}
        className={`absolute top-2 right-2 z-20 flex items-center justify-center w-5.5 h-5.5 md:w-6.5 md:h-6.5 border active:scale-[0.92] ${FOCUS_RING} ${
          walkingToggle.isSelected
            ? 'bg-gc-invert border-gc-invert text-gc-void'
            : 'bg-gc-void/70 border-gc-line-strong text-gc-dim hover:text-gc-ink hover:bg-gc-raised'
        } ${walkingToggle.disabled && !walkingToggle.isSelected ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{ transition: 'transform 0.15s, opacity 0.2s' }}
      >
        <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current">
          <ellipse cx="12" cy="15.5" rx="4.5" ry="6.5" />
          <circle cx="9" cy="4.2" r="1.3" />
          <circle cx="12.2" cy="3.2" r="1.5" />
          <circle cx="15.2" cy="4.2" r="1.3" />
          <circle cx="17.2" cy="6.8" r="1" />
        </svg>
      </button>
    )}
    </div>
  )
}
