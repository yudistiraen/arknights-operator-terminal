'use client'

import { useMemo, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { playClick } from '../lib/sound'
import { useApp } from './AppShell'
import { ITEMS, ITEM_CATEGORIES, ITEM_RARITY_STYLE, groupItems, type Item, type ItemCategory } from '../lib/items'

gsap.registerPlugin(useGSAP)

function ItemIcon({ item, className }: { item: Item; className: string }) {
  if (!item.icon) {
    return (
      <svg viewBox="0 0 24 24" className={`${className} p-[22%] text-white/10 fill-current`} aria-hidden>
        <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.3 6.7 3.7L12 11.7 5.3 8 12 4.3zM5 9.7l6 3.3v6.6l-6-3.3V9.7zm8 9.9V13l6-3.3v6.6l-6 3.3z" />
      </svg>
    )
  }
  return <img src={`/items/${item.icon}.webp`} alt="" width={128} height={128} loading="lazy" decoding="async" className={`${className} object-contain`} />
}

function ItemCard({ item }: { item: Item }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTapped, setIsTapped] = useState(false)
  // 3D layers (preserve-3d + backface) are only mounted while a card is in play: with
  // ~700 cards always layered the compositor juggled 3000+ layers and the chibis stuttered.
  const [isLayered, setIsLayered] = useState(false)
  const isFlipped = isHovered || isTapped
  const rarityStyle = ITEM_RARITY_STYLE[item.rarity] ?? ITEM_RARITY_STYLE[1]
  const summary = item.usage ?? item.description

  return (
    // Hover/focus flips on desktop; tap toggles on touch, where hover doesn't exist.
    <button
      type="button"
      onClick={() => { playClick(); setIsLayered(true); setIsTapped(tapped => !tapped) }}
      onMouseEnter={() => { setIsLayered(true); setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false); setIsTapped(false) }}
      onFocus={event => { if (event.currentTarget.matches(':focus-visible')) { setIsLayered(true); setIsHovered(true) } }}
      onBlur={() => { setIsHovered(false); setIsTapped(false) }}
      aria-pressed={isFlipped}
      aria-label={`${item.name}, tier ${item.rarity}${summary ? `. ${summary}` : ''}`}
      className="block w-full aspect-[3/4] [content-visibility:auto] perspective-[900px] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright active:scale-[0.98]"
      style={{ transition: 'transform 0.15s ease-out' }}
    >
      <span
        className={`
          relative block w-full h-full ${isLayered ? 'transform-3d' : ''} ${isLayered && isFlipped ? 'rotate-y-180' : ''}
        `}
        style={{ transition: 'transform 0.65s cubic-bezier(0.34, 1.3, 0.64, 1)' }}
        onTransitionEnd={event => { if (event.target === event.currentTarget && !isFlipped) setIsLayered(false) }}
      >
        {/* Front — icon + name */}
        <span
          aria-hidden
          className={`absolute inset-0 ${isLayered ? 'backface-hidden' : ''} flex flex-col overflow-hidden border border-white/[0.07] bg-ak-panel/70 shadow-[0_2px_6px_rgba(8,12,20,0.35),0_10px_24px_rgba(8,12,20,0.45),inset_0_1px_0_rgba(255,255,255,0.05)]`}
        >
          <span className={`absolute inset-0 ${rarityStyle.glow}`} />
          <span className="relative flex-1 flex items-center justify-center min-h-0 pt-2">
            <ItemIcon item={item} className="w-[68%] aspect-square" />
          </span>
          <span className="relative px-2 pb-3 pt-1 font-display text-[11px] md:text-xs leading-tight tracking-wide text-center text-white/60 line-clamp-2 min-h-[2.6em] box-content">
            {item.name}
          </span>
          <span className={`absolute bottom-0 inset-x-0 h-[3px] ${rarityStyle.bar} opacity-80`} />
        </span>

        {/* Back — description */}
        {isLayered && <span
          aria-hidden
          className={`absolute inset-0 backface-hidden rotate-y-180 flex flex-col overflow-hidden border ${rarityStyle.frame} bg-ak-elevated shadow-[0_2px_6px_rgba(8,12,20,0.35),0_14px_30px_rgba(8,12,20,0.55)] p-2.5 md:p-3`}
        >
          <span className="font-display text-[9px] text-white/30 tracking-[0.18em] uppercase truncate">{item.group}</span>
          <span className="mt-1 font-display text-xs md:text-[13px] font-bold leading-tight text-white/90 line-clamp-2">{item.name}</span>
          <span className="flex items-center gap-0.5 mt-1.5">
            {Array.from({ length: 6 }, (_, tierIndex) => (
              <span key={tierIndex} className={`w-2 h-[2px] ${tierIndex < item.rarity ? rarityStyle.bar : 'bg-white/[0.08]'}`} />
            ))}
            <span className={`ml-1.5 font-display text-[9px] tracking-[0.15em] uppercase ${rarityStyle.text}`}>T{item.rarity}</span>
          </span>
          <span className="mt-2 pt-2 border-t border-white/[0.06] flex-1 min-h-0 overflow-hidden text-[10px] md:text-[11px] leading-[1.55] text-white/55 mask-[linear-gradient(to_bottom,black_75%,transparent)]">
            {summary ?? 'No description available.'}
          </span>
        </span>}
      </span>
    </button>
  )
}

export function Items() {
  const { hasEntered } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<ItemCategory>('materials')
  const [query, setQuery] = useState('')

  const normalizedQuery = query.trim().toLowerCase()
  const matchingItems = useMemo(
    () => normalizedQuery ? ITEMS.filter(item => item.name.toLowerCase().includes(normalizedQuery)) : ITEMS,
    [normalizedQuery],
  )

  const countsByCategory = useMemo(() => {
    const counts: Record<ItemCategory, number> = { materials: 0, basic: 0, consumables: 0, other: 0 }
    for (const item of matchingItems) counts[item.category]++
    return counts
  }, [matchingItems])

  const groupedItems = useMemo(
    () => groupItems(matchingItems.filter(item => item.category === activeCategory), activeCategory),
    [matchingItems, activeCategory],
  )

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.items-header', '.items-tabs'], { opacity: 0 })
      return
    }
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo('.items-header', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 })
      .fromTo('.items-tabs', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
  }, { scope: containerRef, dependencies: [hasEntered] })

  useGSAP(() => {
    if (!hasEntered) return
    gsap.fromTo('.item-group', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power3.out' })
  }, { scope: containerRef, dependencies: [activeCategory, hasEntered] })

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-ak-bg overflow-y-auto overflow-x-hidden ak-scroll">
      {/* Background */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 25% 15%, rgba(59,164,201,0.05) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(212,168,67,0.03) 0%, transparent 50%)' }}
      />

      {/* Header */}
      <header className="items-header sticky top-0 z-40 bg-ak-bg/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between gap-4 pl-16 pr-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:block w-px h-4 bg-white/[0.08]" />
            <h1 className="font-display text-sm md:text-base font-bold text-white/80 tracking-[0.12em] uppercase">Items</h1>
            <span className="hidden sm:inline font-display text-[10px] md:text-[11px] text-white/25 tracking-wider">
              {matchingItems.length}<span className="text-white/15"> / {ITEMS.length}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Category tabs — mirrors the in-game Depot tabs */}
      <nav className="items-tabs relative z-20 border-b border-white/[0.04] bg-white/[0.015]" aria-label="Item categories">
        <div className="flex gap-1 md:gap-2 px-4 md:px-8 overflow-x-auto ak-scroll">
          {ITEM_CATEGORIES.map(category => {
            const isActive = category.id === activeCategory
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => { if (!isActive) { playClick(); setActiveCategory(category.id) } }}
                aria-pressed={isActive}
                className={`
                  relative shrink-0 flex items-baseline gap-2 px-3 md:px-4 py-3 md:py-3.5 cursor-pointer
                  font-display text-xs md:text-sm tracking-[0.12em] uppercase
                  focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ak-accent-bright
                  active:opacity-70
                  ${isActive ? 'text-ak-accent-bright' : 'text-white/35 hover:text-white/70'}
                `}
                style={{ transition: 'color 0.2s, opacity 0.15s' }}
              >
                {category.label}
                <span className={`text-[10px] tracking-wider ${isActive ? 'text-ak-accent/70' : 'text-white/20'}`}>{countsByCategory[category.id]}</span>
                <span
                  className={`absolute left-0 right-0 bottom-0 h-[2px] bg-ak-accent-bright shadow-[0_0_8px_rgba(94,196,230,0.4)] origin-left ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                  style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s' }}
                />
              </button>
            )
          })}
        </div>
        <div className="px-4 md:px-8 py-3 md:py-4 border-t border-white/[0.04]">
          <label className="relative flex items-center w-full max-w-[16rem]">
            <span className="sr-only">Search items by name</span>
            <svg viewBox="0 0 24 24" className="absolute left-2.5 w-3.5 h-3.5 fill-white/25 pointer-events-none" aria-hidden>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search items"
              className="w-full bg-white/[0.04] border border-white/[0.08] pl-8 pr-3 py-1.5 md:py-2 font-display text-xs md:text-[13px] tracking-wide text-white/80 placeholder:text-white/25 hover:border-white/[0.16] focus:border-ak-accent/50 focus:bg-white/[0.06] focus-visible:outline-none"
              style={{ transition: 'border-color 0.2s, background-color 0.2s' }}
            />
          </label>
        </div>
      </nav>

      {/* Item groups */}
      <main className="relative z-0 px-4 md:px-8 py-5 md:py-8">
        {groupedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="font-display text-xs text-white/25 tracking-wider">No {ITEM_CATEGORIES.find(category => category.id === activeCategory)?.label.toLowerCase()} match &ldquo;{query.trim()}&rdquo;</p>
            <button
              type="button"
              onClick={() => { playClick(); setQuery('') }}
              className="mt-2 text-[#3ba4c9]/50 hover:text-ak-accent-bright active:opacity-70 text-[11px] font-display tracking-wider cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
              style={{ transition: 'color 0.2s, opacity 0.15s' }}
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-8 md:space-y-10">
            {groupedItems.map(({ group, items }) => (
              <section key={group} className="item-group">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <h2 className="font-display text-[11px] md:text-xs text-white/40 tracking-[0.2em] uppercase">{group}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/[0.1] to-transparent" />
                  <span className="text-[9px] md:text-[10px] text-white/20 font-display tracking-[0.2em]">{items.length}</span>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-2 md:gap-3">
                  {items.map(item => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-30 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />
    </div>
  )
}
