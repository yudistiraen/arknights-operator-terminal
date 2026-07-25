import Image from 'next/image'
import Link from 'next/link'
import type { RosterEntry } from '../../lib/operators'
import type { WalkingToggleProps } from '../../lib/chibiSelection'
import { playHover } from '../../lib/sound'
import { RARITY_BAR } from '../../constants'
import { OperatorCardArt } from './OperatorCardArt'

// Roster-card corner ribbon. "both" covers an alter form that is itself
// crossover content (e.g. Kirin R Yato) — distinct from a plain alter or a
// plain crossover so the two statuses don't collapse into one label.
const CARD_BADGES = {
  alter: {
    label: 'ALTER',
    gradient: 'from-[#f0954f] to-[#c05018]',
    box: '-left-7 w-24 md:-left-9 md:w-32',
    text: 'text-[7px] md:text-[9px] tracking-widest',
  },
  crossover: {
    label: 'CROSSOVER',
    gradient: 'from-[#4f9d67] to-[#265c37]',
    box: '-left-9 w-32 md:-left-12 md:w-40',
    text: 'text-[6px] md:text-[9px] tracking-wider -ml-3',
  },
  both: {
    label: 'XOVER ALT',
    gradient: 'from-[#a06ff0] to-[#5a2fa8]',
    box: '-left-9 w-32 md:-left-12 md:w-40',
    text: 'text-[6px] md:text-[9px] tracking-wider -ml-3',
  },
} as const satisfies Record<string, { label: string, gradient: string, box: string, text: string }>

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
      className="block group relative overflow-hidden bg-white/[0.03] border border-white/[0.07] text-left aspect-[0.60] w-full hover:border-[#3ba4c9]/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6]"
      style={{ transition: 'translate 0.25s ease, scale 0.15s ease, border-color 0.3s' }}
    >
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${RARITY_BAR[entry.operator.rarity] ?? 'from-white/20 to-white/5'} z-10`} />

      <OperatorCardArt
        src={entry.operator.skins[0].src}
        zoom={entry.operator.portraitFocus?.zoom ?? 250}
        x={entry.operator.portraitFocus?.x ?? 50}
        y={entry.operator.portraitFocus?.y ?? 0}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/35 to-transparent" />

      {badge && (
        <div
          className={`absolute top-2 md:top-2.5 -rotate-45 z-20 pointer-events-none flex items-center justify-center h-4 md:h-5 shadow-[0_2px_6px_rgba(0,0,0,0.35)] bg-gradient-to-r ${badge.box} ${badge.gradient}`}
        >
          <span className={`font-display font-bold uppercase text-white leading-none whitespace-nowrap ${badge.text}`}>
            {badge.label}
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-2 z-10">
        <div className="flex items-center gap-1 md:gap-1.5">
          <p className="font-display text-xs md:text-sm font-bold text-white/90 tracking-wide leading-none min-w-0">
            <span className="op-name-wrap truncate">
              <span className="op-name-text">{entry.operator.name}</span>
              <span className="op-name-cursor" aria-hidden />
            </span>
          </p>
        </div>
        <div className="flex gap-1 pt-1">
          <Image
            src={entry.operator.classIcon}
            alt={entry.operator.class}
            width={20}
            height={20}
            className="w-3 h-3 md:w-5 md:h-5 object-contain opacity-70 shrink-0"
          />
          <p className="text-xs md:text-[11px] text-white/35 font-display tracking-wider truncate mt-1">
            {entry.operator.class} · {entry.operator.branch}
          </p>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{ transition: 'opacity 0.3s', boxShadow: 'inset 0 0 40px rgba(59,164,201,0.06)' }}
      />
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
        title={walkingToggle.isSelected ? 'Remove from walking chibi' : 'Add to walking chibi'}
        aria-pressed={walkingToggle.isSelected}
        className={`absolute top-2 right-2 z-20 flex items-center justify-center w-5.5 h-5.5 md:w-6.5 md:h-6.5 border backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright ${
          walkingToggle.isSelected
            ? 'bg-ak-accent/80 border-ak-accent-bright text-white'
            : 'bg-black/40 border-white/20 text-white/50 hover:border-white/40 hover:text-white/80'
        } ${walkingToggle.disabled && !walkingToggle.isSelected ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{ transition: 'background-color 0.2s, border-color 0.2s, color 0.2s, opacity 0.2s' }}
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
