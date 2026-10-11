import Image from 'next/image'
import Link from 'next/link'
import type { RosterEntry } from '../../lib/operators'
import { playHover } from '../../lib/sound'
import { RARITY_SOLID } from '../../constants'
import { FOCUS_RING } from './Console'

// Compact manifest-style row for the Recruit list view — a rarity-colored
// portrait swatch on the left, name on the right. Shares the roster grid's
// GSAP entrance (`.op-card`) so switching view modes doesn't need its own timeline.
export function RosterListRow({ entry, href }: { entry: RosterEntry; href: string }) {
  const rarityColor = RARITY_SOLID[entry.operator.rarity] ?? RARITY_SOLID[1]

  return (
    <Link
      href={href}
      onMouseEnter={playHover}
      className={`op-card group flex items-center gap-3 bg-gc-panel border border-gc-line pr-3 md:pr-4 hover:bg-gc-raised hover:border-gc-line-strong active:scale-[0.99] ${FOCUS_RING}`}
      style={{ transition: 'transform 0.15s ease' }}
    >
      <div
        className="relative overflow-hidden aspect-[0.6] h-16 md:h-20 shrink-0 bg-gc-base border-l-2"
        style={{ borderColor: rarityColor }}
      >
        <Image
          src={entry.operator.portrait ?? entry.operator.skins[0].src}
          alt={entry.operator.name}
          fill
          sizes="40px"
          loading="lazy"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gc-raised mix-blend-multiply opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="min-w-0 flex flex-col gap-1.5">
        <p className="font-body text-[13px] md:text-sm font-semibold text-gc-ink leading-none truncate">
          {entry.operator.name}
          {entry.isAlter && (
            <span className="ml-1.5 font-data text-[9px] font-medium text-[#f0954f] tracking-[0.12em] align-middle">ALTER</span>
          )}
        </p>
        <div className="flex items-center gap-1.5">
          <Image
            src={entry.operator.classIcon}
            alt={entry.operator.class}
            width={16}
            height={16}
            className="w-3 h-3 md:w-5.5 md:h-5.5 object-contain opacity-60 shrink-0"
          />
          <Image
            src={entry.operator.branchIcon}
            alt={entry.operator.branch}
            width={16}
            height={16}
            className="w-3 h-3 md:w-5.5 md:h-5.5 object-contain opacity-60 shrink-0"
          />
        </div>
      </div>
    </Link>
  )
}
