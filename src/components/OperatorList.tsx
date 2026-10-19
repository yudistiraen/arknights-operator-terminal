'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { OPERATORS } from '../data/operators'
import { toSlug, getRosterEntries, getWalkableChibis, type RosterEntry } from '../lib/operators'
import { getChibiId, MAX_WALKING_CHIBIS } from '../lib/chibiSelection'
import { useApp } from './AppShell'
import { Stars } from './ui/Stars'
import { RosterCard } from './ui/RosterCard'
import { RARITY_GRADIENT } from '../constants'
import { GHOST_BUTTON, HoverFill, INPUT_CLASSES, Label, MENU_CLASSES, PageHeader, menuItemClasses } from './ui/Console'

gsap.registerPlugin(useGSAP)

const SELECT_CHEVRON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236e7176'%3E%3Cpath fill-rule='evenodd' d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`

const selectBase = `appearance-none ${INPUT_CLASSES} pl-3.5 pr-10 cursor-pointer`
const optionBase = "bg-gc-float text-gc-text"

interface FilterOption {
  value: string
  label: string
  icon?: string
}

function FilterDropdown({ label, value, options, onChange }: {
  label: string
  value: string
  options: FilterOption[]
  onChange: (value: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const selected = options.find(option => option.value === value)

  return (
    <div className="flex flex-col gap-1.5 relative" ref={dropdownRef}>
      <Label>{label}</Label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`flex items-center gap-2 ${INPUT_CLASSES} pl-3.5 pr-9 cursor-pointer text-left`}
        style={{
          backgroundImage: SELECT_CHEVRON,
          backgroundPosition: 'right 8px center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '20px',
        }}
      >
        {selected?.icon && (
          <Image src={selected.icon} alt="" width={18} height={18} className="w-4.5 h-4.5 object-contain opacity-60 shrink-0" />
        )}
        <span className="truncate">{selected?.label ?? 'All'}</span>
      </button>
      {isOpen && (
        <div className={`absolute top-full left-0 mt-1.5 min-w-full w-max max-h-72 overflow-y-auto z-50 ak-scroll ${MENU_CLASSES}`}>
          {options.map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => { onChange(option.value); setIsOpen(false) }}
              className={`flex items-center gap-2.5 w-full px-3.5 py-2 text-left font-data text-[13px] tracking-[0.04em] cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-gc-scan ${menuItemClasses(option.value === value)}`}
            >
              {option.icon ? (
                <Image src={option.icon} alt="" width={18} height={18} className={`w-4.5 h-4.5 object-contain shrink-0 opacity-65 ${option.value === value ? 'invert' : ''}`} />
              ) : (
                <span className="w-4.5 shrink-0" />
              )}
              <span className="truncate">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function OperatorList() {
  const { hasEntered, selectedChibiIds, toggleChibiSelection } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)

  // Default walkable skin per operator card (its first skin that has gone through the
  // multi-state chibi render pipeline) — used when the card's toggle is clicked and this
  // operator has no skin selected yet. Picking a specific skin instead is done from the
  // operator detail page; each operator still only occupies one walking slot at a time.
  const defaultChibiIdByOperator = useMemo(() => {
    const map = new Map<string, string>()
    for (const chibi of getWalkableChibis()) {
      if (!map.has(chibi.operatorName)) map.set(chibi.operatorName, getChibiId(chibi))
    }
    return map
  }, [])
  const [searchQuery, setSearchQuery] = useState('')
  const [rarityFilter, setRarityFilter] = useState('all')
  const [classFilter, setClassFilter] = useState('all')
  const [branchFilter, setBranchFilter] = useState('all')
  const [factionFilter, setFactionFilter] = useState('all')

  const uniqueClasses = useMemo(() => [...new Set(OPERATORS.map(op => op.class))].sort(), [])
  const uniqueFactions = useMemo(() => [...new Set(OPERATORS.map(op => op.faction))].sort(), [])
  const uniqueRarities = useMemo(() => [...new Set(OPERATORS.map(op => op.rarity))].sort((a, b) => b - a), [])

  const availableBranches = useMemo(() => {
    const source = classFilter !== 'all' ? OPERATORS.filter(op => op.class === classFilter) : OPERATORS
    return [...new Set(source.map(op => op.branch))].sort()
  }, [classFilter])

  const classOptions = useMemo<FilterOption[]>(() => {
    const iconMap: Record<string, string> = {}
    for (const op of OPERATORS) if (!iconMap[op.class]) iconMap[op.class] = op.classIcon
    return [{ value: 'all', label: 'All' }, ...uniqueClasses.map(cls => ({ value: cls, label: cls, icon: iconMap[cls] }))]
  }, [uniqueClasses])

  const branchOptions = useMemo<FilterOption[]>(() => {
    const iconMap: Record<string, string> = {}
    for (const op of OPERATORS) if (!iconMap[op.branch]) iconMap[op.branch] = op.branchIcon
    return [{ value: 'all', label: 'All' }, ...availableBranches.map(branch => ({ value: branch, label: branch, icon: iconMap[branch] }))]
  }, [availableBranches])

  const factionOptions = useMemo<FilterOption[]>(() => {
    const iconMap: Record<string, string> = {}
    for (const op of OPERATORS) if (!iconMap[op.faction]) iconMap[op.faction] = op.factionIcon
    return [{ value: 'all', label: 'All' }, ...uniqueFactions.map(faction => ({ value: faction, label: faction, icon: iconMap[faction] }))]
  }, [uniqueFactions])

  const handleClassChange = (value: string) => {
    setClassFilter(value)
    setBranchFilter('all')
  }

  const allEntries = useMemo<RosterEntry[]>(() => getRosterEntries(), [])

  const filteredEntries = useMemo(() => {
    let result = allEntries
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(entry => entry.operator.name.toLowerCase().includes(query))
    }
    if (rarityFilter !== 'all') result = result.filter(entry => entry.operator.rarity === Number(rarityFilter))
    if (classFilter !== 'all') result = result.filter(entry => entry.operator.class === classFilter)
    if (branchFilter !== 'all') result = result.filter(entry => entry.operator.branch === branchFilter)
    if (factionFilter !== 'all') result = result.filter(entry => entry.operator.faction === factionFilter)
    return result
  }, [searchQuery, rarityFilter, classFilter, branchFilter, factionFilter, allEntries])

  const groupedByRarity = useMemo(() => {
    const groups: Record<number, RosterEntry[]> = {}
    for (const entry of filteredEntries) {
      const rarity = entry.operator.rarity
      if (!groups[rarity]) groups[rarity] = []
      groups[rarity].push(entry)
    }
    return Object.entries(groups)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([rarity, entries]) => ({ rarity: Number(rarity), entries }))
  }, [filteredEntries])

  const activeFilterCount = [rarityFilter, classFilter, branchFilter, factionFilter].filter(f => f !== 'all').length + (searchQuery ? 1 : 0)

  const clearFilters = () => {
    setSearchQuery('')
    setRarityFilter('all')
    setClassFilter('all')
    setBranchFilter('all')
    setFactionFilter('all')
  }

  const selectStyle = {
    backgroundImage: SELECT_CHEVRON,
    backgroundPosition: 'right 8px center',
    backgroundRepeat: 'no-repeat' as const,
    backgroundSize: '20px',
  }

  const buildOperatorHref = (entry: RosterEntry) => {
    const slug = toSlug(OPERATORS[entry.operatorIndex].name)
    return entry.alterIndex !== null ? `/operator?codeName=${slug}&alter=${entry.alterIndex + 1}` : `/operator?codeName=${slug}`
  }

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.roster-header', '.roster-filter', '.rarity-group', '.op-card'], { opacity: 0 })
      return
    }
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline
      .fromTo('.roster-header', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 })
      .fromTo('.roster-filter', { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.35 }, '-=0.25')
      .fromTo('.rarity-group', { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.1 }, '-=0.15')
      .fromTo('.op-card', { opacity: 0, y: 12, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.03 }, '-=0.3')
  }, { scope: containerRef, dependencies: [hasEntered] })

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden ak-scroll">
      <PageHeader
        title="Operator List"
        className="roster-header"
        readout={
          <span className="font-data text-[11px] text-gc-text tracking-[0.08em] tabular-nums">
            {filteredEntries.length}<span className="text-gc-ghost"> / {allEntries.length}</span>
          </span>
        }
      />

      {/* Filters */}
      <div className="roster-filter relative z-20 border-b border-gc-line bg-gc-frame">
        <div className="flex flex-wrap items-end gap-3.5 md:gap-5 px-5 md:px-10 py-4 md:py-5">
          <div className="flex flex-col gap-1.5">
            <Label>Search</Label>
            <div className="relative">
              <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 fill-gc-dim pointer-events-none">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                placeholder="Operator name..."
                className={`${INPUT_CLASSES} pl-9 pr-4 w-44 md:w-56`}
              />
            </div>
          </div>

          <div className="w-px h-9 bg-gc-line hidden md:block" />

          <div className="flex flex-col gap-1.5">
            <Label>Rarity</Label>
            <select
              value={rarityFilter}
              onChange={event => setRarityFilter(event.target.value)}
              className={selectBase}
              style={selectStyle}
            >
              <option value="all" className={optionBase}>All</option>
              {uniqueRarities.map(rarity => (
                <option key={rarity} value={rarity} className={optionBase}>{rarity} ★</option>
              ))}
            </select>
          </div>

          <FilterDropdown label="Class" value={classFilter} options={classOptions} onChange={handleClassChange} />
          <FilterDropdown label="Branch" value={branchFilter} options={branchOptions} onChange={setBranchFilter} />
          <FilterDropdown label="Faction" value={factionFilter} options={factionOptions} onChange={setFactionFilter} />

          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className={`${GHOST_BUTTON} h-9 px-3`}
              style={{ transition: 'transform 0.15s' }}
            >
              <HoverFill />
              <svg viewBox="0 0 24 24" className="relative w-3.5 h-3.5 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
              <span className="relative">Clear filters ({activeFilterCount})</span>
            </button>
          )}
        </div>
      </div>

      {/* Operator grid */}
      <main className="relative z-0 px-4 md:px-8 py-5 md:py-8">
        {groupedByRarity.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-gc-ghost fill-current mb-3">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <p className="font-body text-sm text-gc-text">No operators match these filters.</p>
            <button
              onClick={clearFilters}
              className={`${GHOST_BUTTON} mt-4 h-9 px-4`}
              style={{ transition: 'transform 0.15s' }}
            >
              <HoverFill />
              <span className="relative">Clear filters</span>
            </button>
          </div>
        ) : (
          <div className="space-y-7 md:space-y-10">
            {groupedByRarity.map(({ rarity, entries }) => (
              <section key={rarity} className="rarity-group">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Stars count={rarity} />
                  <div className={`flex-1 h-px bg-gradient-to-r ${RARITY_GRADIENT[rarity] ?? 'from-white/10 to-transparent'}`} />
                  <span className="text-[10px] md:text-[11px] text-gc-dim font-data tracking-[0.14em] uppercase tabular-nums">
                    {entries.length} ops
                  </span>
                </div>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(7.5rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-1.5 md:gap-3">
                  {entries.map(entry => {
                    const defaultChibiId = defaultChibiIdByOperator.get(entry.operator.name)
                    // The operator's active walking skin, if any — may differ from defaultChibiId
                    // when a specific skin was picked from the detail page instead of the default.
                    const activeChibiId = selectedChibiIds.find(id => id.startsWith(`${entry.operator.name}::`))
                    const idToToggle = activeChibiId ?? defaultChibiId
                    return (
                      <RosterCard
                        key={`${entry.operator.name}-${entry.alterIndex ?? 'base'}`}
                        entry={entry}
                        href={buildOperatorHref(entry)}
                        walkingToggle={idToToggle ? {
                          isSelected: Boolean(activeChibiId),
                          disabled: !activeChibiId && selectedChibiIds.length >= MAX_WALKING_CHIBIS,
                          onToggle: () => toggleChibiSelection(idToToggle),
                        } : undefined}
                      />
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

    </div>
  )
}
