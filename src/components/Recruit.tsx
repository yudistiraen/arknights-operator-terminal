'use client'

import { useMemo, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { toSlug } from '../lib/operators'
import { playClick } from '../lib/sound'
import { useApp } from './AppShell'
import { Stars } from './ui/Stars'
import { RosterCard } from './ui/RosterCard'
import { RosterListRow } from './ui/RosterListRow'
import { RARITY_GRADIENT } from '../constants'
import {
  AFFIX_TAGS,
  CLASS_TAGS,
  POSITION_TAGS,
  QUALIFICATION_TAGS,
  getRecruitableEntries,
  matchesAllTags,
  type RecruitCategory,
  type RecruitTag,
} from '../lib/recruit'

gsap.registerPlugin(useGSAP)

const MAX_TAGS = 6

const CATEGORY_STYLE: Record<RecruitCategory, {
  label: string
  active: string
  idle: string
  chip: string
}> = {
  class: {
    label: 'Class',
    active: 'border-ak-accent-bright/70 bg-ak-accent/20 text-ak-accent-bright shadow-[0_0_0_1px_rgba(94,196,230,0.15),0_0_16px_rgba(94,196,230,0.15)]',
    idle: 'border-white/[0.08] text-white/50 hover:border-ak-accent/30 hover:text-white/75',
    chip: 'border-ak-accent-bright/40 bg-ak-accent/15 text-ak-accent-bright',
  },
  position: {
    label: 'Position',
    active: 'border-ak-gold-bright/70 bg-ak-gold/20 text-ak-gold-bright shadow-[0_0_0_1px_rgba(240,201,92,0.15),0_0_16px_rgba(240,201,92,0.15)]',
    idle: 'border-white/[0.08] text-white/50 hover:border-ak-gold/30 hover:text-white/75',
    chip: 'border-ak-gold-bright/40 bg-ak-gold/15 text-ak-gold-bright',
  },
  affix: {
    label: 'Specialization',
    active: 'border-ak-orange-bright/70 bg-ak-orange/20 text-ak-orange-bright shadow-[0_0_0_1px_rgba(240,149,79,0.15),0_0_16px_rgba(240,149,79,0.15)]',
    idle: 'border-white/[0.08] text-white/50 hover:border-ak-orange/30 hover:text-white/75',
    chip: 'border-ak-orange-bright/40 bg-ak-orange/15 text-ak-orange-bright',
  },
  qualification: {
    label: 'Qualification',
    active: 'border-white/70 bg-white/20 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_16px_rgba(255,255,255,0.15)]',
    idle: 'border-white/[0.08] text-white/50 hover:border-white/30 hover:text-white/75',
    chip: 'border-white/40 bg-white/15 text-white',
  },
}

function TagButton({ tag, isSelected, isDisabled, onToggle }: {
  tag: RecruitTag
  isSelected: boolean
  isDisabled: boolean
  onToggle: () => void
}) {
  const style = CATEGORY_STYLE[tag.category]
  return (
    <button
      type="button"
      onClick={() => { if (!isDisabled || isSelected) { playClick(); onToggle() } }}
      disabled={isDisabled && !isSelected}
      aria-pressed={isSelected}
      className={`
        font-display text-xs md:text-[13px] tracking-wide px-3.5 py-2 border cursor-pointer
        disabled:cursor-not-allowed disabled:opacity-30
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright
        ${isSelected ? style.active : style.idle}
      `}
      style={{ transition: 'transform 0.15s ease, background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s' }}
    >
      {tag.label}
    </button>
  )
}

function TagGroup({ title, tags, selected, onToggle, isFull }: {
  title: string
  tags: RecruitTag[]
  selected: RecruitTag[]
  onToggle: (tag: RecruitTag) => void
  isFull: boolean
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="font-display text-[11px] md:text-xs text-white/25 tracking-[0.2em] uppercase">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => {
          const isSelected = selected.some(t => t.norm === tag.norm)
          return (
            <TagButton
              key={tag.norm}
              tag={tag}
              isSelected={isSelected}
              isDisabled={isFull}
              onToggle={() => onToggle(tag)}
            />
          )
        })}
      </div>
    </div>
  )
}

type ViewMode = 'card' | 'list'

function ViewModeToggle({ mode, onChange }: { mode: ViewMode; onChange: (mode: ViewMode) => void }) {
  const options: { mode: ViewMode; label: string; path: string }[] = [
    { mode: 'card', label: 'Card view', path: 'M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z' },
    { mode: 'list', label: 'List view', path: 'M4 5h5v5H4V5zm7 1h9v1h-9V6zM4 14h5v5H4v-5zm7 1h9v1h-9v-1z' },
  ]
  return (
    <div className="flex items-center gap-0.5 border border-white/[0.08] p-0.5">
      {options.map(option => {
        const isActive = mode === option.mode
        return (
          <button
            key={option.mode}
            type="button"
            title={option.label}
            aria-label={option.label}
            aria-pressed={isActive}
            onClick={() => { if (!isActive) { playClick(); onChange(option.mode) } }}
            className={`flex items-center justify-center w-6 h-6 md:w-7 md:h-7 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright ${
              isActive ? 'bg-ak-accent/20 text-ak-accent-bright' : 'text-white/35 hover:text-white/65'
            }`}
            style={{ transition: 'background-color 0.2s, color 0.2s' }}
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current">
              <path d={option.path} />
            </svg>
          </button>
        )
      })}
    </div>
  )
}

export function Recruit() {
  const { hasEntered } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<RecruitTag[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>('card')

  const recruitable = useMemo(() => getRecruitableEntries(), [])
  const isFull = selected.length >= MAX_TAGS

  const toggleTag = (tag: RecruitTag) => {
    setSelected(prev => {
      if (prev.some(t => t.norm === tag.norm)) return prev.filter(t => t.norm !== tag.norm)
      if (prev.length >= MAX_TAGS) return prev
      return [...prev, tag]
    })
  }

  const clearTags = () => { playClick(); setSelected([]) }

  const groupedResults = useMemo(() => {
    if (selected.length === 0) return []
    const matches = recruitable.filter(({ tagSet }) => matchesAllTags(tagSet, selected))
    const groups: Record<number, typeof matches> = {}
    for (const match of matches) {
      const rarity = match.entry.operator.rarity
      if (!groups[rarity]) groups[rarity] = []
      groups[rarity].push(match)
    }
    return Object.entries(groups)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([rarity, entries]) => ({ rarity: Number(rarity), entries }))
  }, [selected, recruitable])

  const totalMatches = groupedResults.reduce((sum, group) => sum + group.entries.length, 0)

  const buildHref = (isAlter: boolean, name: string) => {
    const slug = toSlug(name)
    return isAlter ? `/operator?operator=${slug}&alter=true` : `/operator?operator=${slug}`
  }

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.recruit-header', '.recruit-picker', '.recruit-readout', '.rarity-group', '.op-card'], { opacity: 0 })
      return
    }
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline
      .fromTo('.recruit-header', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 })
      .fromTo('.recruit-picker', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
      .fromTo('.recruit-readout', { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2')
  }, { scope: containerRef, dependencies: [hasEntered] })

  useGSAP(() => {
    if (!hasEntered) return
    gsap.fromTo('.rarity-group', { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.08, ease: 'power3.out' })
    gsap.fromTo('.op-card', { opacity: 0, y: 10, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.02, ease: 'power3.out' })
  }, { scope: containerRef, dependencies: [groupedResults.length, hasEntered] })

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
      <header className="recruit-header sticky top-0 z-40 bg-ak-bg/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-px h-4 bg-white/[0.08]" />
            <h1 className="font-display text-sm md:text-base font-bold text-white/80 tracking-[0.12em] uppercase">
              Recruitment
            </h1>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <ViewModeToggle mode={viewMode} onChange={setViewMode} />
            <div className="w-px h-4 bg-white/[0.08]" />
            <div className="flex items-center gap-2.5">
              <span className="font-display text-[10px] md:text-[11px] text-white/25 tracking-wider">
                {selected.length}<span className="text-white/15"> / {MAX_TAGS} TAGS</span>
              </span>
              <div className={`w-1.5 h-1.5 rounded-full ${selected.length > 0 ? 'bg-ak-accent/50 animate-[pulse-glow_2s_ease-in-out_infinite]' : 'bg-white/10'}`} />
            </div>
          </div>
        </div>
      </header>

      {/* Tag picker */}
      <div className="recruit-picker relative z-20 border-b border-white/[0.04] bg-white/[0.015]">
        <div className="px-5 md:px-10 py-5 md:py-6 flex flex-col gap-5 md:gap-6">
          <p className="font-body text-xs md:text-[13px] text-white/35 leading-relaxed max-w-2xl">
            Select up to {MAX_TAGS} tags. Rhodes Island will surface every operator whose profile carries <span className="text-white/55">all</span> selected tags at once — exactly like a live recruitment slip.
          </p>

          <TagGroup title="Class" tags={CLASS_TAGS} selected={selected} onToggle={toggleTag} isFull={isFull} />
          <TagGroup title="Position" tags={POSITION_TAGS} selected={selected} onToggle={toggleTag} isFull={isFull} />
          <TagGroup title="Specialization" tags={AFFIX_TAGS} selected={selected} onToggle={toggleTag} isFull={isFull} />
          <TagGroup title="Qualification" tags={QUALIFICATION_TAGS} selected={selected} onToggle={toggleTag} isFull={isFull} />
        </div>

        {/* Query readout — the terminal-style boolean expression of the current search */}
        <div className="recruit-readout border-t border-white/[0.05] bg-black/20 px-5 md:px-10 py-3.5 md:py-4">
          <div className="flex items-center gap-2 flex-wrap font-display text-xs md:text-sm tracking-wider">
            <span className="text-ak-accent/50 shrink-0">TAG.SEARCH ::</span>
            {selected.length === 0 ? (
              <span className="text-white/20 italic">awaiting tag selection</span>
            ) : (
              selected.map((tag, index) => (
                <span key={tag.norm} className="flex items-center gap-2">
                  {index > 0 && <span className="text-white/20">∩</span>}
                  <button
                    type="button"
                    onClick={() => { playClick(); toggleTag(tag) }}
                    className={`flex items-center gap-1.5 border px-2.5 py-1 cursor-pointer hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright ${CATEGORY_STYLE[tag.category].chip}`}
                    style={{ transition: 'filter 0.15s' }}
                    aria-label={`Remove ${tag.label} tag`}
                  >
                    {tag.label}
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current opacity-70">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </button>
                </span>
              ))
            )}
            <span className="w-[7px] h-3.5 bg-ak-accent-bright/60 animate-[pulse-glow_1.1s_ease-in-out_infinite]" aria-hidden />
            {selected.length > 0 && (
              <button
                type="button"
                onClick={clearTags}
                className="ml-auto text-[#3ba4c9]/60 hover:text-ak-accent-bright font-display text-xs tracking-wider uppercase cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
                style={{ transition: 'color 0.2s' }}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <main className="px-4 md:px-8 py-5 md:py-8">
        {selected.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/[0.07] fill-current mb-3">
              <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" />
            </svg>
            <p className="font-display text-xs text-white/25 tracking-wider">Select a tag above to begin the search</p>
          </div>
        ) : totalMatches === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/[0.07] fill-current mb-3">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <p className="font-display text-xs text-white/25 tracking-wider">No operator carries this exact tag combination</p>
            <button
              onClick={clearTags}
              className="mt-2 text-[#3ba4c9]/50 hover:text-ak-accent-bright text-[11px] font-display tracking-wider cursor-pointer"
              style={{ transition: 'color 0.2s' }}
            >
              Reset tags
            </button>
          </div>
        ) : (
          <div className="space-y-7 md:space-y-10">
            {groupedResults.map(({ rarity, entries }) => (
              <section key={rarity} className="rarity-group">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Stars count={rarity} />
                  <div className={`flex-1 h-px bg-gradient-to-r ${RARITY_GRADIENT[rarity] ?? 'from-white/10 to-transparent'}`} />
                  <span className="text-[9px] md:text-[10px] text-white/20 font-display tracking-[0.2em] uppercase">
                    {entries.length}
                  </span>
                </div>

                <div
                  className={
                    viewMode === 'card'
                      ? 'grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(7.5rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-1.5 md:gap-3'
                      : 'grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-1.5 md:gap-2'
                  }
                >
                  {entries.map(({ entry }) => (
                    viewMode === 'card' ? (
                      <RosterCard
                        key={`${entry.operator.name}-${entry.isAlter ? 'alter' : 'base'}`}
                        entry={entry}
                        href={buildHref(entry.isAlter, entry.operator.name)}
                      />
                    ) : (
                      <RosterListRow
                        key={`${entry.operator.name}-${entry.isAlter ? 'alter' : 'base'}`}
                        entry={entry}
                        href={buildHref(entry.isAlter, entry.operator.name)}
                      />
                    )
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
