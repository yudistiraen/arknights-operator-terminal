'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { OPERATORS } from '../data/operators'
import type { Operator } from '../types'
import { toSlug } from '../lib/operators'
import { useApp } from './AppShell'
import { Stars } from './ui/Stars'

gsap.registerPlugin(useGSAP)

const RARITY_GRADIENT: Record<number, string> = {
  6: 'from-[#f07830]/60 to-[#c05018]/20',
  5: 'from-[#f0c95c]/40 to-[#d4a843]/15',
  4: 'from-[#c9a0f0]/40 to-[#9060c0]/15',
  3: 'from-[#5ec4e6]/40 to-[#3ba4c9]/15',
  2: 'from-[#8ce6a0]/30 to-[#50b068]/10',
  1: 'from-white/20 to-white/5',
}

const RARITY_BAR: Record<number, string> = {
  6: 'from-[#f07830] to-[#c05018]',
  5: 'from-[#f0c95c]/70 to-[#d4a843]/50',
  4: 'from-[#c9a0f0]/70 to-[#9060c0]/50',
  3: 'from-[#5ec4e6]/60 to-[#3ba4c9]/40',
  2: 'from-[#8ce6a0]/50 to-[#50b068]/30',
  1: 'from-white/30 to-white/10',
}

const SELECT_CHEVRON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='rgba(255,255,255,0.3)'%3E%3Cpath fill-rule='evenodd' d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`

const selectBase = "appearance-none bg-[#0e1624] border border-white/[0.08] text-white/60 font-display text-[11px] tracking-wider pl-3 pr-8 py-1.5 hover:border-white/[0.16] focus:border-[#3ba4c9]/40 focus:outline-none cursor-pointer"
const optionBase = "bg-[#0e1624] text-[#c8d0dc]"

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
    <div className="flex flex-col gap-1 relative" ref={dropdownRef}>
      <label className="text-[8px] md:text-[9px] text-white/20 font-display tracking-[0.15em] uppercase">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 bg-[#0e1624] border border-white/[0.08] text-white/60 font-display text-[11px] tracking-wider pl-2.5 pr-7 py-1.5 hover:border-white/[0.16] focus:border-[#3ba4c9]/40 focus:outline-none cursor-pointer text-left"
        style={{
          backgroundImage: SELECT_CHEVRON,
          backgroundPosition: 'right 6px center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '16px',
          transition: 'border-color 0.2s',
        }}
      >
        {selected?.icon && (
          <img src={selected.icon} alt="" className="w-3.5 h-3.5 object-contain opacity-60 shrink-0" />
        )}
        <span className="truncate">{selected?.label ?? 'All'}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-full w-max max-h-56 overflow-y-auto bg-[#0c1220] border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-50 ak-scroll">
          {options.map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => { onChange(option.value); setIsOpen(false) }}
              className={`flex items-center gap-2 w-full px-2.5 py-1.5 text-left font-display text-[11px] tracking-wider cursor-pointer ${
                option.value === value
                  ? 'bg-[#3ba4c9]/15 text-[#5ec4e6]'
                  : 'text-white/50 hover:bg-white/[0.06] hover:text-white/75'
              }`}
              style={{ transition: 'background-color 0.15s, color 0.15s' }}
            >
              {option.icon ? (
                <img src={option.icon} alt="" className="w-3.5 h-3.5 object-contain shrink-0 opacity-65" />
              ) : (
                <span className="w-3.5 shrink-0" />
              )}
              <span className="truncate">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

interface RosterEntry {
  operator: Operator
  operatorIndex: number
  isAlter: boolean
}

export function OperatorList() {
  const { hasEntered } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
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

  const allEntries = useMemo<RosterEntry[]>(() => {
    const entries: RosterEntry[] = []
    OPERATORS.forEach((op, opIndex) => {
      entries.push({ operator: op, operatorIndex: opIndex, isAlter: false })
      if (op.alter) {
        entries.push({
          operator: { ...op, ...op.alter } as Operator,
          operatorIndex: opIndex,
          isAlter: true,
        })
      }
    })
    return entries
  }, [])

  const filteredEntries = useMemo(() => {
    let result = [...allEntries]
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(entry => entry.operator.name.toLowerCase().includes(query))
    }
    if (rarityFilter !== 'all') result = result.filter(entry => entry.operator.rarity === Number(rarityFilter))
    if (classFilter !== 'all') result = result.filter(entry => entry.operator.class === classFilter)
    if (branchFilter !== 'all') result = result.filter(entry => entry.operator.branch === branchFilter)
    if (factionFilter !== 'all') result = result.filter(entry => entry.operator.faction === factionFilter)
    result.sort((entryA, entryB) => {
      if (entryB.operator.rarity !== entryA.operator.rarity) return entryB.operator.rarity - entryA.operator.rarity
      return entryA.operator.name.localeCompare(entryB.operator.name)
    })
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
    backgroundPosition: 'right 6px center',
    backgroundRepeat: 'no-repeat' as const,
    backgroundSize: '16px',
  }

  const buildOperatorHref = (entry: RosterEntry) => {
    const slug = toSlug(OPERATORS[entry.operatorIndex].name)
    return entry.isAlter ? `/operator?operator=${slug}&alter=true` : `/operator?operator=${slug}`
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
      <header className="roster-header sticky top-0 z-40 bg-ak-bg/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-px h-4 bg-white/[0.08]" />
            <h1 className="font-display text-sm md:text-base font-bold text-white/80 tracking-[0.12em] uppercase">
              Operator List
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-display text-[10px] md:text-[11px] text-white/25 tracking-wider">
              {filteredEntries.length}<span className="text-white/15"> / {allEntries.length}</span>
            </span>
            <div className="w-1.5 h-1.5 bg-[#3ba4c9]/50 rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="roster-filter relative z-20 border-b border-white/[0.04] bg-white/[0.015]">
        <div className="flex flex-wrap items-end gap-2.5 md:gap-4 px-4 md:px-8 py-3 md:py-4">
          <div className="flex flex-col gap-1">
            <label className="text-[8px] md:text-[9px] text-white/20 font-display tracking-[0.15em] uppercase">Search</label>
            <div className="relative">
              <svg viewBox="0 0 24 24" className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 fill-white/25 pointer-events-none">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                placeholder="Operator name..."
                className="bg-[#0e1624] border border-white/[0.08] text-white/70 font-display text-[11px] tracking-wider pl-7 pr-3 py-1.5 w-36 md:w-44 placeholder:text-white/20 hover:border-white/[0.16] focus:border-[#3ba4c9]/40 focus:outline-none"
              />
            </div>
          </div>

          <div className="w-px h-6 bg-white/[0.06] hidden md:block" />

          <div className="flex flex-col gap-1">
            <label className="text-[8px] md:text-[9px] text-white/20 font-display tracking-[0.15em] uppercase">Rarity</label>
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
              className="flex items-center gap-1 text-[#3ba4c9]/60 hover:text-[#5ec4e6] font-display text-[10px] tracking-wider uppercase pb-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6]"
              style={{ transition: 'color 0.2s' }}
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
              Clear ({activeFilterCount})
            </button>
          )}
        </div>
      </div>

      {/* Operator grid */}
      <main className="px-4 md:px-8 py-5 md:py-8">
        {groupedByRarity.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/[0.07] fill-current mb-3">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <p className="font-display text-xs text-white/25 tracking-wider">No operators match current filters</p>
            <button
              onClick={clearFilters}
              className="mt-2 text-[#3ba4c9]/50 hover:text-[#5ec4e6] text-[11px] font-display tracking-wider cursor-pointer"
              style={{ transition: 'color 0.2s' }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="space-y-7 md:space-y-10">
            {groupedByRarity.map(({ rarity, entries }) => (
              <section key={rarity} className="rarity-group">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Stars count={rarity} />
                  <div className={`flex-1 h-px bg-gradient-to-r ${RARITY_GRADIENT[rarity] ?? 'from-white/10 to-transparent'}`} />
                  <span className="text-[9px] md:text-[10px] text-white/20 font-display tracking-[0.2em] uppercase">
                    {entries.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
                  {entries.map(entry => (
                    <Link
                      key={`${entry.operator.name}-${entry.isAlter ? 'alter' : 'base'}`}
                      href={buildOperatorHref(entry)}
                      className="op-card group relative overflow-hidden bg-white/[0.03] border border-white/[0.07] text-left aspect-[3/4] hover:border-[#3ba4c9]/25 hover:bg-white/[0.06] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6]"
                      style={{ transition: 'translate 0.25s ease, scale 0.15s ease, border-color 0.3s, background-color 0.3s' }}
                    >
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${RARITY_BAR[entry.operator.rarity] ?? 'from-white/20 to-white/5'} z-10`} />

                      <img
                        src={entry.operator.skins[0].src}
                        alt={entry.operator.name}
                        className="absolute bottom-0 left-0 right-0 h-[82%] w-full object-contain object-bottom opacity-70 group-hover:opacity-90"
                        style={{ transition: 'opacity 0.3s' }}
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/40 to-[#080c14]/10" />
                      <div
                        className="absolute inset-0 bg-[#080c14]/15 group-hover:bg-transparent"
                        style={{ transition: 'background-color 0.3s' }}
                      />

                      <img
                        src={entry.operator.classIcon}
                        alt={entry.operator.class}
                        className="absolute top-2 left-2 w-5 h-5 md:w-7 md:h-7 object-contain opacity-35 group-hover:opacity-55 z-10"
                        style={{ transition: 'opacity 0.3s' }}
                      />

                      <img
                        src={entry.operator.factionIcon}
                        alt={entry.operator.faction}
                        className="absolute top-2 right-2 w-5 h-5 md:w-7 md:h-7 object-contain opacity-30 group-hover:opacity-50 z-10"
                        style={{ transition: 'opacity 0.3s' }}
                      />

                      {entry.isAlter && (
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                          <span className="font-display text-[7px] md:text-[8px] tracking-[0.15em] uppercase text-[#f07830]/70 bg-[#f07830]/10 px-1.5 py-0.5 border border-[#f07830]/20">
                            ALTER
                          </span>
                        </div>
                      )}

                      {entry.operator.tags?.includes('Crossover') && (
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                          <span className="font-display text-[7px] md:text-[8px] tracking-[0.15em] uppercase text-[#f07830]/70 bg-[#f07830]/10 px-1.5 py-0.5 border border-[#f07830]/20">
                            CROSSOVER
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-2.5 z-10">
                        <p className="font-display text-[12px] md:text-sm font-bold text-white/85 tracking-wide leading-none mb-1 truncate">
                          {entry.operator.name}
                        </p>
                        <p className="text-[10px] md:text-xs text-white/30 font-display tracking-wider truncate">
                          {entry.operator.class} · {entry.operator.branch}
                        </p>
                      </div>

                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                        style={{ transition: 'opacity 0.3s', boxShadow: 'inset 0 0 40px rgba(59,164,201,0.06)' }}
                      />
                    </Link>
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
