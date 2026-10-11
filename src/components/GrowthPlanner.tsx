'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { getRosterEntries, type RosterEntry } from '../lib/operators'
import { playClick } from '../lib/sound'
import {
  allocateRecords,
  clampPoint,
  comparePoints,
  expBetween,
  materialsBetween,
  maxEliteFor,
  maxLevelsFor,
  maxPointFor,
  type GrowthPoint,
  type MaterialCost,
  type RecordAllocation,
} from '../lib/growth'
import { BATTLE_RECORDS, LMD_ITEM_ID } from '../data/operatorGrowth'
import { ITEMS, ITEM_RARITY_STYLE } from '../lib/items'
import { RARITY_SOLID } from '../constants'
import { useApp } from './AppShell'
import { Stars } from './ui/Stars'

gsap.registerPlugin(useGSAP)

const MAX_PLANS = 5
const STORAGE_KEY = 'growth-planner:v1'
const SEARCH_RESULT_LIMIT = 8
const FOCUS_RING = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright'

interface GrowthPlan {
  key: string
  entry: RosterEntry
  current: GrowthPoint
  target: GrowthPoint
}

const entryKey = (entry: RosterEntry) => `${entry.operator.name}-${entry.alterIndex ?? 'base'}`

type StoredPlan = Pick<GrowthPlan, 'key' | 'current' | 'target'>

// Rebuilds plans from storage against the current roster — entries that no longer exist are
// dropped and points are re-clamped, so a stale or hand-edited save can't break the page.
function loadPlans(): GrowthPlan[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    if (!Array.isArray(stored)) return []
    const rosterByKey = new Map(getRosterEntries().map(entry => [entryKey(entry), entry]))
    const plans: GrowthPlan[] = []
    for (const item of stored as StoredPlan[]) {
      const entry = rosterByKey.get(item?.key)
      if (!entry || !item.current || !item.target || plans.some(plan => plan.key === item.key)) continue
      const rarity = entry.operator.rarity
      plans.push({ key: item.key, entry, current: clampPoint(rarity, item.current), target: clampPoint(rarity, item.target) })
    }
    return plans.slice(0, MAX_PLANS)
  } catch {
    return []
  }
}

function savePlans(plans: GrowthPlan[]) {
  try {
    const stored: StoredPlan[] = plans.map(({ key, current, target }) => ({ key, current, target }))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // Storage blocked or full — the planner still works for this visit.
  }
}
const formatNumber = (value: number) => value.toLocaleString('en-US')
const formatCompact = (value: number) => new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(value)

const ITEM_BY_ID = new Map(ITEMS.map(item => [item.id, item]))

// LMD first as the baseline cost, then the rarest materials, matching the in-game promotion screen.
function sortMaterials(materials: MaterialCost[]): MaterialCost[] {
  const rank = (material: MaterialCost) => material.id === LMD_ITEM_ID ? Infinity : ITEM_BY_ID.get(material.id)?.rarity ?? 0
  return [...materials].sort((left, right) => rank(right) - rank(left) || left.id.localeCompare(right.id))
}

function RecordIcon({ icon, className }: { icon: string; className: string }) {
  return <img src={`/items/${icon}.webp`} alt="" width={128} height={128} loading="lazy" decoding="async" className={`${className} object-contain`} />
}

function OperatorSearch({ plans, onAdd }: { plans: GrowthPlan[]; onAdd: (entry: RosterEntry) => void }) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const roster = useMemo(() => getRosterEntries(), [])
  const isFull = plans.length >= MAX_PLANS

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return []
    const plannedKeys = new Set(plans.map(plan => plan.key))
    return roster
      .filter(entry => entry.operator.name.toLowerCase().includes(needle) && !plannedKeys.has(entryKey(entry)))
      .slice(0, SEARCH_RESULT_LIMIT)
  }, [query, roster, plans])

  const select = (entry: RosterEntry) => {
    playClick()
    onAdd(entry)
    setQuery('')
  }

  return (
    <div className="relative max-w-xl">
      <label htmlFor="growth-search" className="sr-only">Search operator</label>
      <div className={`flex items-center gap-3 border bg-black/25 px-4 py-3 ${isFull ? 'border-white/[0.05] opacity-50' : 'border-white/[0.1] focus-within:border-ak-accent/50'}`} style={{ transition: 'border-color 0.2s' }}>
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white/55 shrink-0">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <input
          id="growth-search"
          type="text"
          autoComplete="off"
          disabled={isFull}
          value={query}
          placeholder={isFull ? `All ${MAX_PLANS} slots are in use — remove an operator to add another` : 'Add an operator by name'}
          onChange={event => { setQuery(event.target.value); setIsOpen(true) }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          onKeyDown={event => {
            if (event.key === 'Enter' && results[0]) select(results[0])
            if (event.key === 'Escape') setIsOpen(false)
          }}
          className="flex-1 min-w-0 bg-transparent font-display text-sm tracking-wide text-white placeholder:text-white/55 outline-none disabled:cursor-not-allowed"
        />
      </div>

      {isOpen && query.trim() && (
        <ul className="absolute z-50 left-0 right-0 mt-1 max-h-80 overflow-y-auto ak-scroll border border-white/[0.1] bg-ak-panel/95 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(59,164,201,0.08)]">
          {results.length === 0 ? (
            <li className="px-4 py-3 font-display text-xs text-white/55 tracking-wider">No operator matches “{query.trim()}”</li>
          ) : results.map(entry => (
            <li key={entryKey(entry)}>
              <button
                type="button"
                onMouseDown={event => event.preventDefault()}
                onClick={() => select(entry)}
                className={`flex items-center gap-3 w-full px-3 py-2 text-left cursor-pointer hover:bg-white/[0.06] active:bg-white/[0.03] ${FOCUS_RING} focus-visible:outline-offset-[-2px]`}
                style={{ transition: 'background-color 0.15s' }}
              >
                <span className="relative w-7 h-10 shrink-0 overflow-hidden border" style={{ borderColor: RARITY_SOLID[entry.operator.rarity] }}>
                  <Image src={entry.operator.portrait ?? entry.operator.skins[0].src} alt="" fill sizes="28px" className="object-cover" />
                </span>
                <span className="font-display text-sm text-white/95 tracking-wide truncate">{entry.operator.name}</span>
                {entry.isAlter && <span className="text-[9px] text-ak-orange-bright/70 tracking-widest">ALTER</span>}
                <span className="ml-auto"><Stars count={entry.operator.rarity} /></span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function PointEditor({ label, rarity, point, onChange }: {
  label: string
  rarity: number
  point: GrowthPoint
  onChange: (point: GrowthPoint) => void
}) {
  const levelCap = maxLevelsFor(rarity)[point.elite]
  const set = (next: GrowthPoint) => onChange(clampPoint(rarity, next))
  const stepButton = `flex items-center justify-center w-7 h-8 border border-white/[0.08] text-white/70 cursor-pointer hover:text-white/95 hover:border-white/20 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed ${FOCUS_RING}`

  return (
    <fieldset className="flex flex-col gap-2 min-w-0">
      <legend className="font-display text-[10px] text-white/55 tracking-[0.2em] uppercase mb-2">{label}</legend>
      <div className="flex items-center gap-1" role="group" aria-label={`${label} elite phase`}>
        {Array.from({ length: maxEliteFor(rarity) + 1 }, (_, elite) => {
          const isActive = point.elite === elite
          return (
            <button
              key={elite}
              type="button"
              aria-pressed={isActive}
              onClick={() => { if (!isActive) { playClick(); set({ elite, level: point.level }) } }}
              className={`font-display text-xs tracking-wider px-2.5 py-1.5 border cursor-pointer active:scale-95 ${FOCUS_RING} ${
                isActive
                  ? 'border-ak-accent-bright/60 bg-ak-accent/20 text-ak-accent-bright'
                  : 'border-white/[0.08] text-white/70 hover:text-white/95 hover:border-white/20'
              }`}
              style={{ transition: 'background-color 0.2s, border-color 0.2s, color 0.2s, transform 0.15s ease' }}
            >
              Elite {elite}
            </button>
          )
        })}
      </div>
      <div className="flex items-center gap-1">
        <button type="button" aria-label={`Lower ${label.toLowerCase()} level`} disabled={point.level <= 1} onClick={() => set({ ...point, level: point.level - 1 })} className={stepButton} style={{ transition: 'color 0.2s, border-color 0.2s, transform 0.15s ease' }}>−</button>
        <label className="flex items-baseline gap-1.5 h-8 px-2 border border-white/[0.08] bg-black/20 focus-within:border-ak-accent/50" style={{ transition: 'border-color 0.2s' }}>
          <span className="font-display text-[10px] text-white/55 tracking-widest">LV</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={levelCap}
            value={point.level}
            aria-label={`${label} level`}
            onChange={event => set({ ...point, level: Number(event.target.value) })}
            className="w-9 bg-transparent font-display text-base font-bold text-white tabular-nums outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <span className="font-display text-[10px] text-white/55 tabular-nums">/ {levelCap}</span>
        </label>
        <button type="button" aria-label={`Raise ${label.toLowerCase()} level`} disabled={point.level >= levelCap} onClick={() => set({ ...point, level: point.level + 1 })} className={stepButton} style={{ transition: 'color 0.2s, border-color 0.2s, transform 0.15s ease' }}>+</button>
        <button
          type="button"
          disabled={point.level >= levelCap}
          onClick={() => { playClick(); set({ ...point, level: levelCap }) }}
          className={`h-8 px-2 font-display text-[10px] tracking-widest text-white/70 border border-white/[0.08] cursor-pointer hover:text-ak-gold-bright hover:border-ak-gold/40 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed ${FOCUS_RING}`}
          style={{ transition: 'color 0.2s, border-color 0.2s, transform 0.15s ease' }}
        >
          MAX
        </button>
      </div>
    </fieldset>
  )
}

// The whole climb from E0 Lv1 to the rarity's cap as one rail, each elite phase sized by its
// level span; the lit stretch is the part this plan covers.
function GrowthTrack({ rarity, current, target }: { rarity: number; current: GrowthPoint; target: GrowthPoint }) {
  const levelCaps = maxLevelsFor(rarity)
  const totalSteps = levelCaps.reduce((sum, cap) => sum + cap - 1, 0)
  const position = (point: GrowthPoint) =>
    levelCaps.slice(0, point.elite).reduce((sum, cap) => sum + cap - 1, 0) + point.level - 1
  const start = position(current) / totalSteps
  const end = position(target) / totalSteps
  const isValid = end > start

  return (
    <div className="relative h-6" aria-hidden>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex h-1.5 gap-[3px]">
        {levelCaps.map((cap, elite) => (
          <div key={elite} className="relative h-full bg-white/[0.07]" style={{ flexGrow: cap - 1 }}>
            <span className="absolute -top-3.5 left-0 font-display text-[9px] text-white/55 tracking-widest">E{elite}</span>
          </div>
        ))}
      </div>
      {isValid && (
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1.5 w-full origin-left bg-gradient-to-r from-ak-accent/70 to-ak-accent-bright shadow-[0_0_10px_rgba(94,196,230,0.45)]"
          style={{ transform: `translateX(${start * 100}%) scaleX(${end - start})`, transformOrigin: 'left', transition: 'transform 0.45s cubic-bezier(0.34, 1.3, 0.64, 1)' }}
        />
      )}
      <div className="absolute top-1/2 w-2.5 h-2.5 -translate-y-1/2 -translate-x-1/2 rotate-45 border border-white/60 bg-ak-bg" style={{ left: `${start * 100}%`, transition: 'left 0.45s cubic-bezier(0.34, 1.3, 0.64, 1)' }} />
      <div className="absolute top-1/2 w-2.5 h-2.5 -translate-y-1/2 -translate-x-1/2 rotate-45 bg-ak-accent-bright shadow-[0_0_8px_rgba(94,196,230,0.6)]" style={{ left: `${end * 100}%`, transition: 'left 0.45s cubic-bezier(0.34, 1.3, 0.64, 1)' }} />
    </div>
  )
}

function RecordCounts({ allocations, size }: { allocations: RecordAllocation[]; size: 'sm' | 'lg' }) {
  const isLarge = size === 'lg'
  return (
    <ul className={isLarge ? 'grid grid-cols-2 gap-2' : 'flex flex-wrap gap-x-4 gap-y-2'}>
      {allocations.map(({ record, count }) => {
        const rarityStyle = ITEM_RARITY_STYLE[record.rarity]
        return (
          <li
            key={record.id}
            title={`${record.name} — ${formatNumber(record.exp)} EXP each`}
            className={`flex items-center gap-2 ${isLarge ? `relative overflow-hidden border ${rarityStyle.frame} bg-white/[0.03] p-2.5` : ''} ${count === 0 ? 'opacity-45' : ''}`}
          >
            {isLarge && <div className={`absolute inset-0 pointer-events-none ${rarityStyle.glow}`} />}
            <RecordIcon icon={record.icon} className={`relative shrink-0 ${isLarge ? 'w-11 h-11' : 'w-7 h-7'}`} />
            <div className="relative min-w-0">
              <p className={`font-display font-bold tabular-nums leading-none ${isLarge ? 'text-xl text-white' : 'text-sm text-white/95'}`}>
                <span className="text-white/55 font-normal text-[0.7em] mr-0.5">×</span>{formatNumber(count)}
              </p>
              {isLarge && <p className={`mt-1 font-display text-[10px] tracking-wider truncate ${rarityStyle.text}`}>{record.name.replace(' Battle Record', '')}</p>}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function MaterialList({ materials, size }: { materials: MaterialCost[]; size: 'sm' | 'lg' }) {
  const isLarge = size === 'lg'
  const lmd = materials.find(material => material.id === LMD_ITEM_ID)
  const items = materials.filter(material => material.id !== LMD_ITEM_ID)

  if (!isLarge) {
    return (
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {sortMaterials(materials).map(({ id, count }) => {
          const item = ITEM_BY_ID.get(id)
          return (
            <li key={id} title={`${item?.name ?? id} × ${formatNumber(count)}`} className="flex items-center gap-1.5">
              {item?.icon && <RecordIcon icon={item.icon} className="w-7 h-7 shrink-0" />}
              <span className="font-display text-sm font-bold text-white/95 tabular-nums leading-none">
                <span className="text-white/55 font-normal text-[0.7em] mr-0.5">×</span>{id === LMD_ITEM_ID ? formatCompact(count) : formatNumber(count)}
              </span>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {lmd && (
        <div className="flex items-center gap-2.5">
          <RecordIcon icon="GOLD" className="w-8 h-8 shrink-0" />
          <p className="font-display text-xl font-bold text-white tabular-nums tracking-[-0.03em] leading-none">{formatNumber(lmd.count)}</p>
          <span className="font-display text-[10px] text-white/55 tracking-[0.2em]">LMD</span>
        </div>
      )}
      {items.length > 0 && (
        <ul className="grid grid-cols-4 gap-1.5">
          {sortMaterials(items).map(({ id, count }) => {
            const item = ITEM_BY_ID.get(id)
            const rarityStyle = ITEM_RARITY_STYLE[item?.rarity ?? 1] ?? ITEM_RARITY_STYLE[1]
            return (
              <li key={id} title={item?.name ?? id} className={`relative flex flex-col items-center gap-1 overflow-hidden border ${rarityStyle.frame} bg-white/[0.03] px-1 pt-1.5 pb-1`}>
                <div className={`absolute inset-0 pointer-events-none ${rarityStyle.glow}`} />
                {item?.icon && <RecordIcon icon={item.icon} className="relative w-10 h-10" />}
                <p className="relative font-display text-sm font-bold text-white tabular-nums leading-none">
                  <span className="text-white/55 font-normal text-[0.7em] mr-0.5">×</span>{formatNumber(count)}
                </p>
                <span className={`absolute bottom-0 inset-x-0 h-0.5 ${rarityStyle.bar} opacity-70`} />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function PlanCard({ plan, onChange, onRemove }: {
  plan: GrowthPlan
  onChange: (plan: GrowthPlan) => void
  onRemove: () => void
}) {
  const { operator, isAlter } = plan.entry
  const rarityColor = RARITY_SOLID[operator.rarity] ?? RARITY_SOLID[1]
  const isValid = comparePoints(plan.current, plan.target) < 0
  const exp = expBetween(operator.rarity, plan.current, plan.target)
  const { allocations } = allocateRecords(exp)
  const materials = materialsBetween(operator.name, operator.rarity, plan.current, plan.target)

  return (
    <article className="plan-card relative flex gap-4 md:gap-5 border border-white/[0.07] bg-ak-surface/60 p-3 md:p-4 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_8px_24px_rgba(0,0,0,0.25)]">
      <div className="relative w-16 md:w-24 aspect-[0.6] self-start shrink-0 overflow-hidden border-2 bg-black/30" style={{ borderColor: rarityColor, boxShadow: `0 0 12px ${rarityColor}33` }}>
        <Image src={operator.portrait ?? operator.skins[0].src} alt={operator.name} fill sizes="96px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-4">
        <header className="flex items-start gap-3">
          <div className="min-w-0">
            <h2 className="font-display text-base md:text-lg font-bold text-white tracking-[0.04em] leading-tight truncate">
              {operator.name}
              {isAlter && <span className="ml-2 text-[9px] font-normal text-ak-orange-bright/70 tracking-widest align-middle">ALTER</span>}
            </h2>
            <div className="mt-1"><Stars count={operator.rarity} tilted /></div>
          </div>
          <button
            type="button"
            onClick={() => { playClick(); onRemove() }}
            aria-label={`Remove ${operator.name} from the plan`}
            className={`ml-auto shrink-0 flex items-center justify-center w-7 h-7 text-white/55 border border-transparent cursor-pointer hover:text-ak-danger hover:border-ak-danger/40 active:scale-90 ${FOCUS_RING}`}
            style={{ transition: 'color 0.2s, border-color 0.2s, transform 0.15s ease' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
          </button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-end gap-3 sm:gap-4">
          <PointEditor label="Current" rarity={operator.rarity} point={plan.current} onChange={current => onChange({ ...plan, current })} />
          <svg viewBox="0 0 24 24" className="hidden sm:block w-5 h-5 mb-1.5 fill-current text-ak-accent/50" aria-hidden><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
          <PointEditor label="Target" rarity={operator.rarity} point={plan.target} onChange={target => onChange({ ...plan, target })} />
        </div>

        <GrowthTrack rarity={operator.rarity} current={plan.current} target={plan.target} />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.05] pt-3">
          {isValid ? (
            <>
              <p className="font-display text-sm tracking-wide text-white/70">
                <span className="text-lg font-bold text-white tabular-nums">{formatNumber(exp)}</span> EXP
              </p>
              <RecordCounts allocations={allocations} size="sm" />
              {materials.length > 0 && (
                <div className="basis-full flex flex-wrap items-center gap-x-6 gap-y-2">
                  <p className="font-display text-[10px] text-white/55 tracking-[0.2em] uppercase w-[5.5rem]">Materials</p>
                  <MaterialList materials={materials} size="sm" />
                </div>
              )}
            </>
          ) : (
            <p className="font-display text-xs tracking-wider text-ak-orange-bright/80">
              Set the target above the current level to see the EXP needed.
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export function GrowthPlanner() {
  const { hasEntered } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [plans, setPlans] = useState<GrowthPlan[]>([])
  const [hasLoaded, setHasLoaded] = useState(false)

  // Read after mount, not in the initial state, so the server render and first client render match.
  useEffect(() => {
    setPlans(loadPlans())
    setHasLoaded(true)
  }, [])

  useEffect(() => {
    if (hasLoaded) savePlans(plans)
  }, [plans, hasLoaded])

  const addPlan = (entry: RosterEntry) => {
    setPlans(previous => previous.length >= MAX_PLANS ? previous : [
      ...previous,
      { key: entryKey(entry), entry, current: { elite: 0, level: 1 }, target: maxPointFor(entry.operator.rarity) },
    ])
  }
  const updatePlan = (updated: GrowthPlan) => setPlans(previous => previous.map(plan => plan.key === updated.key ? updated : plan))
  const removePlan = (key: string) => setPlans(previous => previous.filter(plan => plan.key !== key))

  // Each operator's records are allocated on their own — cards are fed to one operator at a time,
  // so a Drill Record rounded up for one operator can't cover another's remainder.
  const totals = useMemo(() => {
    const counts = new Map<string, number>(BATTLE_RECORDS.map(record => [record.id, 0]))
    let exp = 0
    let overflow = 0
    for (const plan of plans) {
      const planExp = expBetween(plan.entry.operator.rarity, plan.current, plan.target)
      const allocation = allocateRecords(planExp)
      exp += planExp
      overflow += allocation.overflow
      allocation.allocations.forEach(({ record, count }) => counts.set(record.id, (counts.get(record.id) ?? 0) + count))
    }
    const allocations = BATTLE_RECORDS.map(record => ({ record, count: counts.get(record.id) ?? 0 }))

    const materialCounts = new Map<string, number>()
    for (const plan of plans) {
      const { operator } = plan.entry
      materialsBetween(operator.name, operator.rarity, plan.current, plan.target)
        .forEach(({ id, count }) => materialCounts.set(id, (materialCounts.get(id) ?? 0) + count))
    }
    const materials = [...materialCounts].map(([id, count]) => ({ id, count }))
    return { exp, overflow, allocations, materials }
  }, [plans])

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.growth-header', '.growth-picker', '.growth-summary'], { opacity: 0 })
      return
    }
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo('.growth-header', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 })
      .fromTo('.growth-picker', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
      .fromTo('.growth-summary', { opacity: 0, x: 12 }, { opacity: 1, x: 0, duration: 0.4 }, '-=0.25')
  }, { scope: containerRef, dependencies: [hasEntered] })

  useGSAP(() => {
    if (!hasEntered) return
    gsap.fromTo('.plan-card:last-child', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'back.out(1.4)' })
  }, { scope: containerRef, dependencies: [plans.length, hasEntered] })

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-ak-bg overflow-y-auto overflow-x-hidden ak-scroll">
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 10%, rgba(59,164,201,0.05) 0%, transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(212,168,67,0.035) 0%, transparent 50%)' }}
      />

      <header className="growth-header sticky top-0 z-40 bg-ak-bg/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center gap-3 md:gap-4 px-4 md:px-8 py-3 md:py-4">
          <div className="w-px h-4 bg-white/[0.08]" />
          <h1 className="font-display text-sm md:text-base font-bold text-white/95 tracking-[0.12em] uppercase">Growth Planner</h1>
        </div>
      </header>

      <div className="growth-picker relative z-30 border-b border-white/[0.04] bg-white/[0.015] px-5 md:px-10 py-5 md:py-6 flex flex-col gap-4">
        <p className="font-body text-xs md:text-[13px] text-white/65 leading-[1.7] max-w-2xl">
          Plan up to {MAX_PLANS} operators. Set where each one is now and where you want them, and the planner counts the Battle Records — largest records first — plus the LMD and promotion materials needed.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-[10px] md:text-[11px] text-white/55 tracking-wider">
              {plans.length}<span className="text-white/45"> / {MAX_PLANS} OPERATORS</span>
            </span>
            <div className={`w-1.5 h-1.5 rounded-full ${plans.length > 0 ? 'bg-ak-accent/50 animate-[pulse-glow_2s_ease-in-out_infinite]' : 'bg-white/10'}`} />
          </div>
          <OperatorSearch plans={plans} onAdd={addPlan} />
        </div>
      </div>

      <main className="relative z-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-5 md:gap-8 px-4 md:px-8 py-5 md:py-8">
        <section aria-label="Operator plans" className="flex flex-col gap-3 md:gap-4 min-w-0">
          {plans.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-white/[0.07]">
              <RecordIcon icon="sprite_exp_card_t4" className="w-12 h-12 opacity-25 grayscale mb-3" />
              <p className="font-display text-xs text-white/55 tracking-wider">Search for an operator above to start a plan</p>
            </div>
          ) : plans.map(plan => (
            <PlanCard key={plan.key} plan={plan} onChange={updatePlan} onRemove={() => removePlan(plan.key)} />
          ))}
        </section>

        <aside className="growth-summary lg:sticky lg:top-20 self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto ak-scroll border border-ak-accent/20 bg-ak-panel/70 backdrop-blur-md shadow-[0_0_0_1px_rgba(94,196,230,0.04),0_16px_40px_rgba(0,0,0,0.35),0_4px_16px_rgba(59,164,201,0.06)]">
          <div className="px-4 py-3 border-b border-white/[0.06] bg-black/20">
            <h2 className="font-display text-[11px] text-ak-accent-bright/90 tracking-[0.2em] uppercase">Battle Records needed</h2>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div>
              <p className="font-display text-[10px] text-white/55 tracking-[0.2em] uppercase">Total EXP</p>
              <p className="font-display text-3xl font-bold text-white tabular-nums tracking-[-0.03em] leading-tight">{formatNumber(totals.exp)}</p>
            </div>
            <RecordCounts allocations={totals.allocations} size="lg" />
            {totals.overflow > 0 && (
              <p className="font-body text-[11px] text-white/65 leading-[1.7]">
                Rounding up to whole Drill Records adds {formatNumber(totals.overflow)} EXP beyond the target.
              </p>
            )}
          </div>
          <div className="px-4 py-3 border-y border-white/[0.06] bg-black/20">
            <h2 className="font-display text-[11px] text-ak-accent-bright/90 tracking-[0.2em] uppercase">Materials needed</h2>
          </div>
          <div className="p-4">
            {totals.materials.length > 0 ? (
              <MaterialList materials={totals.materials} size="lg" />
            ) : (
              <p className="font-display text-xs text-white/55 tracking-wider">No materials needed yet.</p>
            )}
          </div>
        </aside>
      </main>

      <div className="fixed inset-0 pointer-events-none z-30 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />
    </div>
  )
}
