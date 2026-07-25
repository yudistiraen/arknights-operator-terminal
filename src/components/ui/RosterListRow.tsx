import Image from 'next/image'
import Link from 'next/link'
import type { RosterEntry } from '../../lib/operators'
import { playHover } from '../../lib/sound'
import { RARITY_SOLID } from '../../constants'

// Compact manifest-style row for the Recruit list view — a rarity-colored
// portrait swatch on the left, name on the right. Shares the roster grid's
// GSAP entrance (`.op-card`) so switching view modes doesn't need its own timeline.
export function RosterListRow({ entry, href }: { entry: RosterEntry; href: string }) {
  const rarityColor = RARITY_SOLID[entry.operator.rarity] ?? RARITY_SOLID[1]

  return (
    <Link
      href={href}
      onMouseEnter={playHover}
      className="op-card group flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] pr-3 md:pr-4 hover:bg-white/[0.06] hover:border-[#3ba4c9]/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6]"
      style={{ transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s ease' }}
    >
      <div
        className="relative overflow-hidden aspect-[0.6] h-16 md:h-20 shrink-0 bg-black/30 border-2"
        style={{ borderColor: rarityColor, boxShadow: `0 0 10px ${rarityColor}2e` }}
      >
        <Image
          src={entry.operator.portrait ?? entry.operator.skins[0].src}
          alt={entry.operator.name}
          fill
          sizes="40px"
          loading="lazy"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      </div>

      <div className="min-w-0 flex flex-col gap-1.5">
        <p className="font-display text-xs md:text-[13px] font-bold text-white/85 tracking-wide leading-none truncate">
          {entry.operator.name}
          {entry.isAlter && (
            <span className="ml-1.5 text-[9px] font-normal text-[#f0954f]/70 tracking-widest align-middle">ALTER</span>
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
