'use client'

import { useMemo, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { toSlug } from '../lib/operators'
import { playClick } from '../lib/sound'
import { useApp } from './AppShell'
import { RosterCard } from './ui/RosterCard'
import { RosterListRow } from './ui/RosterListRow'
import { FOCUS_RING, GHOST_BUTTON, HoverFill, Label, PageHeader } from './ui/Console'
import {
  AFFIX_TAGS,
  CLASS_TAGS,
  POSITION_TAGS,
  QUALIFICATION_TAGS,
  getRecruitableEntries,
  getTagCombinations,
  type RecruitTag,
} from '../lib/recruit'

gsap.registerPlugin(useGSAP)

const MAX_TAGS = 6

const TAG_ACTIVE = 'border-gc-invert bg-gc-invert text-gc-void'
const TAG_IDLE = 'border-gc-line bg-gc-base text-gc-text hover:border-gc-line-strong hover:bg-gc-raised hover:text-gc-ink'
const TAG_CHIP = 'border-gc-invert bg-gc-invert text-gc-void hover:opacity-85'

function TagButton({ tag, isSelected, isDisabled, onToggle }: {
  tag: RecruitTag
  isSelected: boolean
  isDisabled: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={() => { if (!isDisabled || isSelected) { playClick(); onToggle() } }}
      disabled={isDisabled && !isSelected}
      aria-pressed={isSelected}
      className={`
        font-data text-xs md:text-[13px] tracking-[0.04em] px-3.5 h-9 border cursor-pointer active:scale-[0.97]
        disabled:cursor-not-allowed disabled:opacity-30
        ${FOCUS_RING}
        ${isSelected ? TAG_ACTIVE : TAG_IDLE}
      `}
      style={{ transition: 'transform 0.15s cubic-bezier(0.22, 1.2, 0.36, 1)' }}
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
      <Label>{title}</Label>
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
    <div className="flex items-center gap-0.5 border border-gc-line p-0.5">
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
            className={`flex items-center justify-center w-6 h-6 md:w-7 md:h-7 cursor-pointer active:scale-90 ${FOCUS_RING} ${
              isActive ? 'bg-gc-invert text-gc-void' : 'text-gc-dim hover:bg-gc-raised hover:text-gc-ink'
            }`}
            style={{ transition: 'transform 0.15s' }}
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

  const combinations = useMemo(
    () => (selected.length === 0 ? [] : getTagCombinations(recruitable, selected)),
    [selected, recruitable],
  )

  const buildHref = (alterIndex: number | null, name: string) => {
    const slug = toSlug(name)
    return alterIndex !== null ? `/operator?codeName=${slug}&alter=${alterIndex + 1}` : `/operator?codeName=${slug}`
  }

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.recruit-header', '.recruit-picker', '.recruit-readout', '.combo-group', '.op-card'], { opacity: 0 })
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
    gsap.fromTo('.combo-group', { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.08, ease: 'power3.out' })
    gsap.fromTo('.op-card', { opacity: 0, y: 10, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.02, ease: 'power3.out' })
  }, { scope: containerRef, dependencies: [combinations, hasEntered] })

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden ak-scroll">
      <PageHeader title="Recruitment" className="recruit-header" />

      {/* Tag picker */}
      <div className="recruit-picker relative z-20 border-b border-gc-line bg-gc-frame">
        <div className="px-5 md:px-10 py-5 md:py-6 flex flex-col gap-5 md:gap-6">
          <p className="font-body text-[13px] md:text-sm text-gc-text leading-[1.7] max-w-2xl">
            Select the tags offered on your recruitment slip (up to {MAX_TAGS}). Every combination of up to 3 tags is listed with the operators it can roll, best guaranteed rarity first. 6★ operators only appear in combinations that include <span className="text-gc-ink font-medium">Top Operator</span>.
          </p>

          <TagGroup title="Class" tags={CLASS_TAGS} selected={selected} onToggle={toggleTag} isFull={isFull} />
          <TagGroup title="Position" tags={POSITION_TAGS} selected={selected} onToggle={toggleTag} isFull={isFull} />
          <TagGroup title="Specialization" tags={AFFIX_TAGS} selected={selected} onToggle={toggleTag} isFull={isFull} />
          <TagGroup title="Qualification" tags={QUALIFICATION_TAGS} selected={selected} onToggle={toggleTag} isFull={isFull} />
        </div>

        {/* Query readout — the terminal-style boolean expression of the current search */}
        <div className="recruit-readout flex items-end justify-between gap-4 border-t border-gc-line bg-gc-base px-5 md:px-10 py-3.5 md:py-4">
          <div className="flex flex-col gap-2.5 min-w-0">
            <span className="font-data text-[11px] text-gc-text tracking-[0.14em] uppercase tabular-nums">
              {selected.length}<span className="text-gc-ghost"> / {MAX_TAGS} tags</span>
            </span>
            <div className="flex items-center gap-2 flex-wrap min-h-7 font-data text-xs md:text-[13px] tracking-[0.06em]">
              <span className="text-gc-dim shrink-0 uppercase tracking-[0.14em] text-[11px]">Query</span>
              {selected.length === 0 ? (
                <span className="text-gc-ghost">no tags selected</span>
              ) : (
                selected.map(tag => (
                  <button
                    key={tag.norm}
                    type="button"
                    onClick={() => { playClick(); toggleTag(tag) }}
                    className={`flex items-center gap-1.5 border px-2.5 h-7 cursor-pointer active:scale-[0.97] ${FOCUS_RING} ${TAG_CHIP}`}
                    style={{ transition: 'transform 0.15s, opacity 0.15s' }}
                    aria-label={`Remove ${tag.label} tag`}
                  >
                    {tag.label}
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current opacity-70">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </button>
                ))
              )}
              <span className="w-[7px] h-3.5 bg-gc-signal motion-safe:animate-[exam-blink_1.1s_step-end_infinite]" aria-hidden />
            </div>
          </div>
          {selected.length > 0 && (
            <button
              type="button"
              onClick={clearTags}
              className={`${GHOST_BUTTON} shrink-0 h-8 px-3`}
              style={{ transition: 'transform 0.15s' }}
            >
              <HoverFill />
              <span className="relative">Clear tags</span>
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <main className="relative z-0 px-4 md:px-8 py-5 md:py-8">
        {/* Layout switch sits right under the query, above whatever it controls */}
        <div className="flex items-center gap-3 mb-5 md:mb-6">
          <span className="font-data text-[11px] text-gc-dim tracking-[0.14em] uppercase">Layout</span>
          <ViewModeToggle mode={viewMode} onChange={setViewMode} />
        </div>
        {selected.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-gc-ghost fill-current mb-3">
              <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" />
            </svg>
            <p className="font-body text-sm text-gc-text">Select a tag above to start the search.</p>
          </div>
        ) : combinations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-gc-ghost fill-current mb-3">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <p className="font-body text-sm text-gc-text">No recruitable operator carries any of these tags.</p>
            <button
              onClick={clearTags}
              className={`${GHOST_BUTTON} mt-4 h-9 px-4`}
              style={{ transition: 'transform 0.15s' }}
            >
              Reset tags
            </button>
          </div>
        ) : (
          <div className="flex flex-col border-t border-gc-line">
            {combinations.map(({ tags, entries }) => (
              <section
                key={tags.map(tag => tag.norm).join('+')}
                className="combo-group grid grid-cols-1 md:grid-cols-[13rem_1fr] gap-3 md:gap-5 border-b border-gc-line py-4 md:py-5"
              >
                <div className="flex md:flex-col items-start justify-between md:justify-start gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span
                        key={tag.norm}
                        className="font-data text-[11px] md:text-xs tracking-[0.04em] px-2.5 h-7 flex items-center border border-gc-line-strong bg-gc-raised text-gc-ink"
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <span className="shrink-0 font-data text-[10px] md:text-[11px] text-gc-dim tracking-[0.08em] uppercase tabular-nums">
                    {entries.length} {entries.length === 1 ? 'operator' : 'operators'}
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
                        key={`${entry.operator.name}-${entry.alterIndex ?? 'base'}`}
                        entry={entry}
                        href={buildHref(entry.alterIndex, entry.operator.name)}
                      />
                    ) : (
                      <RosterListRow
                        key={`${entry.operator.name}-${entry.alterIndex ?? 'base'}`}
                        entry={entry}
                        href={buildHref(entry.alterIndex, entry.operator.name)}
                      />
                    )
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

    </div>
  )
}
