'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { getRosterEntries, type RosterEntry } from '../lib/operators'
import { playClick } from '../lib/sound'
import { CHAMFER, NoImage, PANEL_SHADOW, PageHeader, SignalTriangle } from './ui/Console'
import {
  allocateRecords,
  canMaster,
  canUnlockModule,
  clampPoint,
  clampRange,
  expBetween,
  masteryCountsFor,
  materialsBetween,
  maxEliteFor,
  maxLevelsFor,
  maxPointFor,
  maxSkillLevelFor,
  mergeMaterials,
  moduleMaterialsBetween,
  modulesFor,
  skillMaterialsBetween,
  MAX_SKILL_LEVEL,
  type GrowthPoint,
  type GrowthRange,
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
const DEPOT_STORAGE_KEY = 'growth-planner:depot:v1'
const SEARCH_RESULT_LIMIT = 8
const FOCUS_RING = 'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gc-scan'

interface GrowthPlan {
  key: string
  entry: RosterEntry
  current: GrowthPoint
  target: GrowthPoint
  skillLevel: GrowthRange
  // One range per skill, in skill order (always 0 → 0 for skills without masteries).
  masteries: GrowthRange[]
  // One stage range per module in modulesFor() order (always 0 → 0 for modules not shown).
  modules: GrowthRange[]
}

const entryKey = (entry: RosterEntry) => `${entry.operator.name}-${entry.alterIndex ?? 'base'}`

type StoredPlan = Pick<GrowthPlan, 'key' | 'current' | 'target'> & Partial<Pick<GrowthPlan, 'skillLevel' | 'masteries' | 'modules'>>

// Keeps every part of a plan inside what the operator can reach — e.g. dropping the target to
// Elite 0 pulls the skill level target back to 4.
function normalizePlan(plan: GrowthPlan): GrowthPlan {
  const { name, rarity } = plan.entry.operator
  const current = clampPoint(rarity, plan.current)
  const target = clampPoint(rarity, plan.target)
  const skillLevel = {
    current: clampRange(plan.skillLevel, 1, maxSkillLevelFor(name, current.elite)).current,
    target: clampRange(plan.skillLevel, 1, maxSkillLevelFor(name, target.elite)).target,
  }
  const masteries = masteryCountsFor(name).map((count, skillIndex) => clampRange(plan.masteries[skillIndex] ?? { current: 0, target: 0 }, 0, count))
  const modules = modulesFor(name).map((module, moduleIndex) =>
    clampRange(plan.modules[moduleIndex] ?? { current: 0, target: 0 }, 0, module.stages.length))
  return { ...plan, current, target, skillLevel, masteries, modules }
}

function createPlan(entry: RosterEntry): GrowthPlan {
  const target = maxPointFor(entry.operator.rarity)
  return normalizePlan({
    key: entryKey(entry),
    entry,
    current: { elite: 0, level: 1 },
    target,
    skillLevel: { current: 1, target: MAX_SKILL_LEVEL },
    masteries: [],
    modules: [],
  })
}

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
      plans.push(normalizePlan({
        key: item.key,
        entry,
        current: item.current,
        target: item.target,
        skillLevel: item.skillLevel ?? { current: 1, target: 1 },
        masteries: Array.isArray(item.masteries) ? item.masteries : [],
        modules: Array.isArray(item.modules) ? item.modules : [],
      }))
    }
    return plans.slice(0, MAX_PLANS)
  } catch {
    return []
  }
}

function savePlans(plans: GrowthPlan[]) {
  try {
    const stored: StoredPlan[] = plans.map(({ key, current, target, skillLevel, masteries, modules }) => ({ key, current, target, skillLevel, masteries, modules }))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // Storage blocked or full — the planner still works for this visit.
  }
}
// Item id → how many the player already owns.
type Depot = Record<string, number>

function loadDepot(): Depot {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(DEPOT_STORAGE_KEY) ?? '{}')
    if (!stored || typeof stored !== 'object' || Array.isArray(stored)) return {}
    const depot: Depot = {}
    for (const [id, count] of Object.entries(stored)) {
      if (typeof count === 'number' && Number.isFinite(count) && count > 0) depot[id] = Math.floor(count)
    }
    return depot
  } catch {
    return {}
  }
}

function saveDepot(depot: Depot) {
  try {
    localStorage.setItem(DEPOT_STORAGE_KEY, JSON.stringify(depot))
  } catch {
    // Storage blocked or full — the depot still works for this visit.
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
      <label htmlFor="training-search" className="sr-only">Search operator</label>
      <div className={`flex items-center gap-3 border bg-gc-base px-4 py-3 ${isFull ? 'border-gc-line-soft opacity-50' : 'border-gc-line focus-within:border-gc-line-strong'}`} style={{ transition: 'border-color 0.2s' }}>
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gc-text shrink-0">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <input
          id="training-search"
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
          className="flex-1 min-w-0 bg-transparent font-data text-sm tracking-wide text-gc-ink placeholder:text-gc-text outline-none disabled:cursor-not-allowed"
        />
      </div>

      {isOpen && query.trim() && (
        <ul className="absolute z-50 left-0 right-0 mt-1 max-h-80 overflow-y-auto ak-scroll border border-gc-line bg-gc-float shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8),0_4px_12px_rgba(0,0,0,0.5)]">
          {results.length === 0 ? (
            <li className="px-4 py-3 font-data text-xs text-gc-text tracking-wider">No operator matches “{query.trim()}”</li>
          ) : results.map(entry => (
            <li key={entryKey(entry)}>
              <button
                type="button"
                onMouseDown={event => event.preventDefault()}
                onClick={() => select(entry)}
                className={`flex items-center gap-3 w-full px-3 py-2 text-left cursor-pointer hover:bg-gc-raised active:bg-gc-panel ${FOCUS_RING} focus-visible:outline-offset-[-2px]`}
                style={{ transition: 'background-color 0.15s' }}
              >
                <span className="relative w-7 h-10 shrink-0 overflow-hidden border" style={{ borderColor: RARITY_SOLID[entry.operator.rarity] }}>
                  <Image src={entry.operator.portrait ?? entry.operator.skins[0].src} alt="" fill sizes="28px" className="object-cover" />
                </span>
                <span className="font-data text-sm text-gc-ink tracking-wide truncate">{entry.operator.name}</span>
                {entry.isAlter && <span className="text-[9px] text-[#f0954f] tracking-[0.12em]">ALTER</span>}
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
  const stepButton = `flex items-center justify-center w-7 h-8 border border-gc-line text-gc-ink cursor-pointer hover:text-gc-ink hover:border-gc-line-strong active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed ${FOCUS_RING}`

  return (
    <fieldset className="flex flex-col gap-2 min-w-0">
      <legend className="font-data text-[10px] text-gc-text tracking-[0.2em] uppercase mb-2">{label}</legend>
      <div className="flex items-center gap-1" role="group" aria-label={`${label} elite phase`}>
        {Array.from({ length: maxEliteFor(rarity) + 1 }, (_, elite) => {
          const isActive = point.elite === elite
          return (
            <button
              key={elite}
              type="button"
              aria-pressed={isActive}
              onClick={() => { if (!isActive) { playClick(); set({ elite, level: point.level }) } }}
              className={`font-data text-xs tracking-wider px-2.5 py-1.5 border cursor-pointer active:scale-95 ${FOCUS_RING} ${
                isActive
                  ? 'border-gc-invert bg-gc-invert text-gc-void'
                  : 'border-gc-line text-gc-ink hover:text-gc-ink hover:border-gc-line-strong'
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
        <label className="flex items-center gap-1 h-8 px-2 border border-gc-line bg-gc-base focus-within:border-gc-line-strong" style={{ transition: 'border-color 0.2s' }}>
          <span className="font-data text-[10px] text-gc-text tracking-widest leading-none">LV</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={levelCap}
            value={point.level}
            aria-label={`${label} level`}
            onChange={event => set({ ...point, level: Number(event.target.value) })}
            className="w-8 h-full bg-transparent text-center font-data text-base font-medium leading-none text-gc-ink tabular-nums outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <span className="font-data text-[10px] text-gc-text tabular-nums leading-none">/ {levelCap}</span>
        </label>
        <button type="button" aria-label={`Raise ${label.toLowerCase()} level`} disabled={point.level >= levelCap} onClick={() => set({ ...point, level: point.level + 1 })} className={stepButton} style={{ transition: 'color 0.2s, border-color 0.2s, transform 0.15s ease' }}>+</button>
        <button
          type="button"
          disabled={point.level >= levelCap}
          onClick={() => { playClick(); set({ ...point, level: levelCap }) }}
          className={`h-8 px-2 font-data text-[10px] tracking-widest text-gc-ink border border-gc-line cursor-pointer hover:text-gc-signal hover:border-gc-signal-dim active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed ${FOCUS_RING}`}
          style={{ transition: 'color 0.2s, border-color 0.2s, transform 0.15s ease' }}
        >
          MAX
        </button>
      </div>
    </fieldset>
  )
}

type TrackHandle = 'current' | 'target'

const TRACK_EASING = 'cubic-bezier(0.34, 1.3, 0.64, 1)'

// The whole climb from E0 Lv1 to the rarity's cap as one draggable rail. Every level of every
// elite phase is its own step, so E0 Lv50 and E1 Lv1 are distinct — promoting is a step too.
function GrowthTrack({ rarity, current, target, onChange }: {
  rarity: number
  current: GrowthPoint
  target: GrowthPoint
  onChange: (current: GrowthPoint, target: GrowthPoint) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState<TrackHandle | null>(null)
  const levelCaps = maxLevelsFor(rarity)
  const lastStep = levelCaps.reduce((sum, cap) => sum + cap, 0) - 1

  const toStep = (point: GrowthPoint) => levelCaps.slice(0, point.elite).reduce((sum, cap) => sum + cap, 0) + point.level - 1
  const toPoint = (step: number): GrowthPoint => {
    let remaining = Math.min(Math.max(Math.round(step), 0), lastStep)
    for (let elite = 0; elite < levelCaps.length; elite++) {
      if (remaining < levelCaps[elite]) return { elite, level: remaining + 1 }
      remaining -= levelCaps[elite]
    }
    return maxPointFor(rarity)
  }

  const currentStep = toStep(current)
  const targetStep = toStep(target)
  const startFraction = currentStep / lastStep
  const endFraction = targetStep / lastStep

  // Handles can meet but never cross, so dragging one can't silently invert the plan.
  const moveHandle = (handle: TrackHandle, step: number) => {
    if (handle === 'current') onChange(toPoint(Math.min(step, targetStep)), target)
    else onChange(current, toPoint(Math.max(step, currentStep)))
  }

  const stepFromPointer = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect()
    if (!rect || rect.width === 0) return 0
    return ((clientX - rect.left) / rect.width) * lastStep
  }

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const step = stepFromPointer(event.clientX)
    // Grab whichever handle is closer; ties (handles stacked) go by drag direction later.
    const handle: TrackHandle = Math.abs(step - currentStep) < Math.abs(step - targetStep)
      || (currentStep === targetStep && step < currentStep) ? 'current' : 'target'
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(handle)
    moveHandle(handle, step)
  }

  const handleKeyDown = (handle: TrackHandle) => (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step = handle === 'current' ? currentStep : targetStep
    const deltas: Record<string, number> = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 10, PageDown: -10 }
    if (event.key in deltas) moveHandle(handle, step + deltas[event.key])
    else if (event.key === 'Home') moveHandle(handle, 0)
    else if (event.key === 'End') moveHandle(handle, lastStep)
    else return
    event.preventDefault()
  }

  // Segment widths line up with step positions: step s sits at s / lastStep, so each phase
  // boundary falls halfway between its last level and the next phase's Lv1.
  const segmentGrow = (cap: number, elite: number) => {
    if (levelCaps.length === 1) return cap - 1
    return elite === 0 || elite === levelCaps.length - 1 ? cap - 0.5 : cap
  }
  const motion = dragging ? 'none' : `transform 0.45s ${TRACK_EASING}`

  const handles: { handle: TrackHandle; fraction: number; point: GrowthPoint; className: string }[] = [
    { handle: 'current', fraction: startFraction, point: current, className: 'border border-gc-invert bg-gc-void' },
    { handle: 'target', fraction: endFraction, point: target, className: 'bg-gc-signal' },
  ]

  return (
    <div
      ref={trackRef}
      onPointerDown={startDrag}
      onPointerMove={event => { if (dragging) moveHandle(dragging, stepFromPointer(event.clientX)) }}
      onPointerUp={() => setDragging(null)}
      onPointerCancel={() => setDragging(null)}
      className={`relative h-8 touch-none select-none ${dragging ? 'cursor-grabbing' : 'cursor-pointer'}`}
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex h-1.5">
        {levelCaps.map((cap, elite) => (
          <div key={elite} className={`relative h-full bg-gc-raised ${elite > 0 ? 'border-l-[3px] border-gc-frame' : ''}`} style={{ flexGrow: segmentGrow(cap, elite) }}>
            <span className="absolute -top-4 left-1 font-data text-[9px] text-gc-text tracking-widest pointer-events-none">E{elite}</span>
          </div>
        ))}
      </div>
      {endFraction > startFraction && (
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1.5 w-full origin-left pointer-events-none bg-gc-text"
          style={{ transform: `translateX(${startFraction * 100}%) scaleX(${endFraction - startFraction})`, transformOrigin: 'left', transition: motion }}
        />
      )}
      {handles.map(({ handle, fraction, point, className }) => (
        // Full-width wrapper so translateX percentages are relative to the rail, not the handle.
        <div key={handle} className="absolute inset-0 pointer-events-none" style={{ transform: `translateX(${fraction * 100}%)`, transition: motion }}>
          <div
            role="slider"
            tabIndex={0}
            aria-label={handle === 'current' ? 'Current level' : 'Target level'}
            aria-valuemin={0}
            aria-valuemax={lastStep}
            aria-valuenow={handle === 'current' ? currentStep : targetStep}
            aria-valuetext={`Elite ${point.elite}, level ${point.level}`}
            onKeyDown={handleKeyDown(handle)}
            className={`group absolute top-1/2 left-0 flex items-center justify-center w-7 h-7 -translate-x-1/2 -translate-y-1/2 pointer-events-auto outline-none ${dragging === handle ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            <span
              className={`block w-3 h-3 rotate-45 group-hover:scale-125 group-active:scale-110 group-focus-visible:outline group-focus-visible:outline-1 group-focus-visible:outline-offset-2 group-focus-visible:outline-gc-scan ${dragging === handle ? 'scale-125' : ''} ${className}`}
              style={{ transition: `transform 0.2s ${TRACK_EASING}` }}
            />
          </div>
        </div>
      ))}
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
            className={`flex items-center gap-2 ${isLarge ? `relative overflow-hidden border ${rarityStyle.frame} bg-gc-base p-2.5` : ''} ${count === 0 ? 'opacity-45' : ''}`}
          >
            {isLarge && <div className={`absolute inset-0 pointer-events-none ${rarityStyle.glow}`} />}
            <RecordIcon icon={record.icon} className={`relative shrink-0 ${isLarge ? 'w-11 h-11' : 'w-7 h-7'}`} />
            <div className="relative min-w-0">
              <p className={`font-data font-medium tabular-nums leading-none ${isLarge ? 'text-xl text-gc-ink' : 'text-sm text-gc-ink'}`}>
                <span className="text-gc-text font-normal text-[0.7em] mr-0.5">×</span>{formatNumber(count)}
              </p>
              {isLarge && <p className={`mt-1 font-data text-[10px] tracking-wider truncate ${rarityStyle.text}`}>{record.name.replace(' Battle Record', '')}</p>}
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
              <span className="font-data text-sm font-medium text-gc-ink tabular-nums leading-none">
                <span className="text-gc-text font-normal text-[0.7em] mr-0.5">×</span>{id === LMD_ITEM_ID ? formatCompact(count) : formatNumber(count)}
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
          <p className="font-data text-xl font-medium text-gc-ink tabular-nums tracking-[-0.03em] leading-none">{formatNumber(lmd.count)}</p>
          <span className="font-data text-[10px] text-gc-text tracking-[0.2em]">LMD</span>
        </div>
      )}
      {items.length > 0 && (
        <ul className="grid grid-cols-4 gap-1.5">
          {sortMaterials(items).map(({ id, count }) => {
            const item = ITEM_BY_ID.get(id)
            const rarityStyle = ITEM_RARITY_STYLE[item?.rarity ?? 1] ?? ITEM_RARITY_STYLE[1]
            return (
              <li key={id} title={item?.name ?? id} className={`relative flex flex-col items-center gap-1 overflow-hidden border ${rarityStyle.frame} bg-gc-base px-1 pt-1.5 pb-1`}>
                <div className={`absolute inset-0 pointer-events-none ${rarityStyle.glow}`} />
                {item?.icon && <RecordIcon icon={item.icon} className="relative w-10 h-10" />}
                <p className="relative font-data text-sm font-medium text-gc-ink tabular-nums leading-none">
                  <span className="text-gc-text font-normal text-[0.7em] mr-0.5">×</span>{formatNumber(count)}
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

function planMaterials(plan: GrowthPlan): MaterialCost[] {
  const { name, rarity } = plan.entry.operator
  return mergeMaterials(
    materialsBetween(name, rarity, plan.current, plan.target),
    skillMaterialsBetween(name, plan.target, plan.skillLevel, plan.masteries),
    moduleMaterialsBetween(name, plan.target, plan.modules),
  )
}

const STEP_TRANSITION = { transition: 'color 0.2s, border-color 0.2s, background-color 0.2s, transform 0.15s ease' }

// Small −/value/+ control for a bounded integer, sized to sit inline in a row.
function NumberStepper({ label, value, min, max, onChange }: {
  label: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
}) {
  const stepButton = `flex items-center justify-center w-6 h-7 border border-gc-line text-gc-ink cursor-pointer hover:text-gc-ink hover:border-gc-line-strong active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed ${FOCUS_RING}`
  return (
    <div className="flex items-center gap-1" role="group" aria-label={label}>
      <button type="button" aria-label={`Lower ${label.toLowerCase()}`} disabled={value <= min} onClick={() => onChange(value - 1)} className={stepButton} style={STEP_TRANSITION}>−</button>
      <span className="flex items-center justify-center w-9 h-7 border border-gc-line bg-gc-base font-data text-sm font-medium text-gc-ink tabular-nums leading-none" aria-live="polite">{value}</span>
      <button type="button" aria-label={`Raise ${label.toLowerCase()}`} disabled={value >= max} onClick={() => onChange(value + 1)} className={stepButton} style={STEP_TRANSITION}>+</button>
    </div>
  )
}

const MASTERY_LABELS = ['—', 'M1', 'M2', 'M3']
const MODULE_STAGE_LABELS = ['—', '1', '2', '3']

// Segmented picker for a small rank (mastery M0–M3, module stage 0–3).
function RankPicker({ label, labels, rankName, value, max, isDisabled, onChange }: {
  label: string
  labels: string[]
  rankName: string
  value: number
  max: number
  isDisabled: boolean
  onChange: (value: number) => void
}) {
  return (
    <div className="flex items-center gap-0.5" role="group" aria-label={label}>
      {labels.slice(0, max + 1).map((rankLabel, rank) => {
        const isActive = value === rank
        return (
          <button
            key={rank}
            type="button"
            aria-pressed={isActive}
            aria-label={`${label}: ${rank === 0 ? `no ${rankName.toLowerCase()}` : `${rankName} ${rank}`}`}
            disabled={isDisabled}
            onClick={() => { if (!isActive) { playClick(); onChange(rank) } }}
            className={`w-8 h-7 font-data text-[11px] tracking-wider border cursor-pointer active:scale-95 disabled:cursor-not-allowed ${FOCUS_RING} ${
              isActive
                ? 'border-gc-signal bg-gc-signal text-gc-void'
                : 'border-gc-line text-gc-ink hover:text-gc-ink hover:border-gc-line-strong'
            }`}
            style={STEP_TRANSITION}
          >
            {rankLabel}
          </button>
        )
      })}
    </div>
  )
}

function RangeArrow() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-gc-dim" aria-hidden>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  )
}

// One collapsible section of a plan card. Each keeps its own open state, so several can be open at once.
function PlannerAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentId = useId()
  const panelRef = useRef<HTMLDivElement>(null)

  // Content fades and drops in on open; height snaps since only transform/opacity are animated.
  useGSAP(() => {
    if (isExpanded && panelRef.current) gsap.fromTo(panelRef.current, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' })
  }, { dependencies: [isExpanded] })

  return (
    <section aria-label={title} className={`border ${isExpanded ? 'border-gc-line-strong bg-gc-base' : 'border-gc-line bg-gc-base/60'}`}>
      <h3>
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          onClick={() => { playClick(); setIsExpanded(previous => !previous) }}
          className={`flex items-center justify-between w-full px-3 py-2.5 font-data text-xs tracking-[0.2em] uppercase cursor-pointer hover:bg-gc-raised active:bg-gc-panel ${FOCUS_RING} focus-visible:outline-offset-[-2px] ${
            isExpanded ? 'text-gc-ink' : 'text-gc-text hover:text-gc-ink'
          }`}
          style={{ transition: 'color 0.2s, background-color 0.2s' }}
        >
          {title}
          <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-current ${isExpanded ? 'rotate-180' : ''}`} style={{ transition: 'transform 0.3s cubic-bezier(0.34, 1.3, 0.64, 1)' }} aria-hidden>
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
          </svg>
        </button>
      </h3>

      {isExpanded && (
        <div id={contentId} ref={panelRef} className="flex flex-col gap-3 border-t border-gc-line-soft px-3 pt-3 pb-3.5">
          {children}
        </div>
      )}
    </section>
  )
}

function SkillPlanner({ plan, onChange }: { plan: GrowthPlan; onChange: (plan: GrowthPlan) => void }) {
  const { operator } = plan.entry
  const masteryCounts = masteryCountsFor(operator.name)
  const skillLevelCurrentMax = maxSkillLevelFor(operator.name, plan.current.elite)
  const skillLevelTargetMax = maxSkillLevelFor(operator.name, plan.target.elite)
  const isMasteryOpen = canMaster(plan.target, plan.skillLevel.target)
  const masterableSkills = operator.skills
    .map((skill, skillIndex) => ({ skill, skillIndex, count: masteryCounts[skillIndex] ?? 0 }))
    .filter(({ count }) => count > 0)

  if (skillLevelTargetMax <= 1 && masterableSkills.length === 0) return null

  const setSkillLevel = (skillLevel: GrowthRange) => onChange({ ...plan, skillLevel })
  const setMastery = (skillIndex: number, mastery: GrowthRange) =>
    onChange({ ...plan, masteries: plan.masteries.map((range, index) => index === skillIndex ? mastery : range) })

  return (
    <PlannerAccordion title="Skill">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <h4 className="font-data text-[10px] text-gc-text tracking-[0.2em] uppercase w-[5.5rem]">Skill level</h4>
        <div className="flex items-center gap-3">
          <NumberStepper label="Current skill level" value={plan.skillLevel.current} min={1} max={skillLevelCurrentMax} onChange={current => setSkillLevel({ ...plan.skillLevel, current })} />
          <RangeArrow />
          <NumberStepper label="Target skill level" value={plan.skillLevel.target} min={1} max={skillLevelTargetMax} onChange={target => setSkillLevel({ ...plan.skillLevel, target })} />
        </div>
        {skillLevelTargetMax < MAX_SKILL_LEVEL && (
          <span className="font-data text-[10px] text-gc-text tracking-wider">Lv 5–7 need Elite 1</span>
        )}
      </div>

      {masterableSkills.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h4 className="font-data text-[10px] text-gc-text tracking-[0.2em] uppercase w-[5.5rem]">Mastery</h4>
            {!isMasteryOpen && (
              <p className="font-data text-[11px] tracking-wide text-gc-alert">
                Set the target to Elite 2 and Skill Level 7 to plan masteries.
              </p>
            )}
          </div>
          <ul className={`flex flex-col gap-2 ${isMasteryOpen ? '' : 'opacity-40'}`} style={{ transition: 'opacity 0.2s' }}>
            {masterableSkills.map(({ skill, skillIndex, count }) => {
              const mastery = plan.masteries[skillIndex] ?? { current: 0, target: 0 }
              return (
                <li key={skill.name} className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <div className="flex items-center gap-2 w-full sm:w-48 min-w-0">
                    <span className="relative w-8 h-8 shrink-0 border border-gc-line bg-gc-base">
                      <Image src={skill.icon} alt="" fill sizes="32px" className="object-cover" />
                    </span>
                    <span className="font-data text-xs text-gc-ink tracking-wide truncate" title={skill.name}>
                      <span className="text-gc-text mr-1">S{skillIndex + 1}</span>{skill.name}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
                    <RankPicker label={`${skill.name} current mastery`} labels={MASTERY_LABELS} rankName="Mastery" value={mastery.current} max={count} isDisabled={!isMasteryOpen} onChange={current => setMastery(skillIndex, { ...mastery, current })} />
                    <span className="rotate-90 sm:rotate-0"><RangeArrow /></span>
                    <RankPicker label={`${skill.name} target mastery`} labels={MASTERY_LABELS} rankName="Mastery" value={mastery.target} max={count} isDisabled={!isMasteryOpen} onChange={target => setMastery(skillIndex, { ...mastery, target })} />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </PlannerAccordion>
  )
}

// Matches gamedata modules to the operator's own module list by code, so only modules the
// operator page shows (e.g. no RA-only modules) can be planned.
function plannableModules(plan: GrowthPlan) {
  const { operator } = plan.entry
  const namesByCode = new Map(Object.values(operator.modules ?? {}).map(module => [module.code.toUpperCase(), module.name]))
  return modulesFor(operator.name)
    .map((module, moduleIndex) => ({ module, moduleIndex, name: namesByCode.get(module.code.toUpperCase()) }))
    .filter((entry): entry is typeof entry & { name: string } => entry.name !== undefined)
}

function ModulePlanner({ plan, onChange }: { plan: GrowthPlan; onChange: (plan: GrowthPlan) => void }) {
  const modules = plannableModules(plan)
  if (modules.length === 0) return null

  const setModule = (moduleIndex: number, stage: GrowthRange) =>
    onChange({ ...plan, modules: plan.modules.map((range, index) => index === moduleIndex ? stage : range) })

  return (
    <PlannerAccordion title="Module">
      <ul className="flex flex-col gap-2">
        {modules.map(({ module, moduleIndex, name }) => {
          const stage = plan.modules[moduleIndex] ?? { current: 0, target: 0 }
          const isUnlocked = canUnlockModule(plan.target, module)
          return (
            <li key={module.code} className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <div className="flex items-center gap-2 w-full sm:w-48 min-w-0">
                  <span className="flex items-center justify-center shrink-0 h-8 px-1.5 min-w-[3.25rem] border border-gc-signal-dim bg-gc-base font-data text-[11px] font-medium text-gc-signal tracking-[0.08em]">
                    {module.code}
                  </span>
                  <span className="font-data text-xs text-gc-ink tracking-wide truncate" title={name}>{name}</span>
                </div>
                <div className={`flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 ${isUnlocked ? '' : 'opacity-40'}`} style={{ transition: 'opacity 0.2s' }}>
                  <RankPicker label={`${module.code} current stage`} labels={MODULE_STAGE_LABELS} rankName="Stage" value={stage.current} max={module.stages.length} isDisabled={!isUnlocked} onChange={current => setModule(moduleIndex, { ...stage, current })} />
                  <span className="rotate-90 sm:rotate-0"><RangeArrow /></span>
                  <RankPicker label={`${module.code} target stage`} labels={MODULE_STAGE_LABELS} rankName="Stage" value={stage.target} max={module.stages.length} isDisabled={!isUnlocked} onChange={target => setModule(moduleIndex, { ...stage, target })} />
                </div>
              </div>
              {!isUnlocked && (
                <p className="font-data text-[11px] tracking-wide text-gc-alert">
                  Set the target to Elite 2 Lv{module.unlockLevel} to plan this module.
                </p>
              )}
            </li>
          )
        })}
      </ul>
    </PlannerAccordion>
  )
}

function PlanCard({ plan, onChange, onRemove }: {
  plan: GrowthPlan
  onChange: (plan: GrowthPlan) => void
  onRemove: () => void
}) {
  const { operator, isAlter } = plan.entry
  const rarityColor = RARITY_SOLID[operator.rarity] ?? RARITY_SOLID[1]
  const exp = expBetween(operator.rarity, plan.current, plan.target)
  const { allocations } = allocateRecords(exp)
  const materials = planMaterials(plan)
  const hasNeeds = exp > 0 || materials.length > 0

  return (
    <article className={`plan-card relative flex gap-4 md:gap-5 border border-gc-line bg-gc-frame p-3 md:p-4 ${PANEL_SHADOW}`}>
      <div className="relative w-16 md:w-24 aspect-[0.6] self-start shrink-0 overflow-hidden border-2 bg-gc-base" style={{ borderColor: rarityColor, boxShadow: `0 0 12px ${rarityColor}33` }}>
        <Image src={operator.portrait ?? operator.skins[0].src} alt={operator.name} fill sizes="96px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-4">
        <header className="flex items-start gap-3">
          <div className="min-w-0">
            <h2 className="font-display text-sm md:text-base text-gc-ink uppercase tracking-[0.06em] leading-tight truncate">
              {operator.name}
              {isAlter && <span className="ml-2 text-[9px] font-normal text-[#f0954f] tracking-[0.12em] align-middle">ALTER</span>}
            </h2>
            <div className="mt-1"><Stars count={operator.rarity} /></div>
          </div>
          <button
            type="button"
            onClick={() => { playClick(); onRemove() }}
            aria-label={`Remove ${operator.name} from the plan`}
            className={`ml-auto shrink-0 flex items-center justify-center w-7 h-7 text-gc-text border border-transparent cursor-pointer hover:text-gc-alert hover:border-gc-alert/50 active:scale-90 ${FOCUS_RING}`}
            style={{ transition: 'color 0.2s, border-color 0.2s, transform 0.15s ease' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
          </button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(2.5rem,1fr)_auto] items-center gap-3 sm:gap-4">
          <PointEditor label="Current" rarity={operator.rarity} point={plan.current} onChange={current => onChange({ ...plan, current })} />
          <div className="flex items-center justify-center self-stretch" aria-hidden>
            <svg viewBox="0 0 24 24" className="w-5 h-5 rotate-90 sm:rotate-0 fill-current text-gc-signal"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
          </div>
          <PointEditor label="Target" rarity={operator.rarity} point={plan.target} onChange={target => onChange({ ...plan, target })} />
        </div>

        <GrowthTrack rarity={operator.rarity} current={plan.current} target={plan.target} onChange={(current, target) => onChange({ ...plan, current, target })} />

        <SkillPlanner plan={plan} onChange={onChange} />
        <ModulePlanner plan={plan} onChange={onChange} />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gc-line-soft pt-3">
          {hasNeeds ? (
            <>
              {exp > 0 && (
                <>
                  <p className="font-data text-sm tracking-wide text-gc-ink">
                    <span className="text-lg font-medium text-gc-ink tabular-nums">{formatNumber(exp)}</span> EXP
                  </p>
                  <RecordCounts allocations={allocations} size="sm" />
                </>
              )}
              {materials.length > 0 && (
                <div className="basis-full flex flex-wrap items-center gap-x-6 gap-y-2">
                  <p className="font-data text-[10px] text-gc-text tracking-[0.2em] uppercase w-[5.5rem]">Materials</p>
                  <MaterialList materials={materials} size="sm" />
                </div>
              )}
            </>
          ) : (
            <p className="font-data text-xs tracking-wider text-gc-alert">
              Set a target above the current level or skill level to see what this operator needs.
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

function DepotInput({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <input
      type="number"
      inputMode="numeric"
      min={0}
      value={value === 0 ? '' : value}
      placeholder="0"
      aria-label={`${label} in depot`}
      onChange={event => onChange(Math.max(Math.floor(Number(event.target.value)) || 0, 0))}
      className="w-full h-8 px-2 border border-gc-line bg-gc-base text-right font-data text-sm font-medium text-gc-ink tabular-nums placeholder:text-gc-dim outline-none hover:border-gc-line-strong focus:border-gc-line-strong [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      style={{ transition: 'border-color 0.2s' }}
    />
  )
}

function DepotRow({ icon, name, rarity, needed, owned, toFarm, onOwnedChange }: {
  icon: string | null
  name: string
  rarity: number
  needed: number
  owned: number
  toFarm: number
  onOwnedChange: (value: number) => void
}) {
  const isCovered = toFarm === 0
  const isUnneeded = needed === 0 && isCovered
  const rarityStyle = ITEM_RARITY_STYLE[rarity] ?? ITEM_RARITY_STYLE[1]
  return (
    <li className="grid grid-cols-[2.25rem_minmax(0,1fr)_5.5rem_5.5rem] sm:grid-cols-[2.25rem_minmax(0,1fr)_6rem_7rem_6rem] items-center gap-x-3 gap-y-1 px-3 py-2 border-b border-gc-line-soft last:border-b-0">
      <span className={`relative flex items-center justify-center w-9 h-9 border ${rarityStyle.frame} bg-gc-base`}>
        {icon && <RecordIcon icon={icon} className="w-8 h-8" />}
      </span>
      <span className="flex flex-col gap-0.5 min-w-0">
        <span className="font-data text-xs md:text-[13px] text-gc-ink tracking-wide truncate" title={name}>{name}</span>
        <span className="sm:hidden font-data text-[10px] text-gc-text tracking-wider tabular-nums">Need {formatNumber(needed)}</span>
      </span>
      <span className="hidden sm:block text-right font-data text-sm text-gc-ink tabular-nums">{formatNumber(needed)}</span>
      <DepotInput label={name} value={owned} onChange={onOwnedChange} />
      <span className={`text-right font-data text-sm font-medium tabular-nums ${isUnneeded ? 'text-gc-dim' : isCovered ? 'text-gc-ok' : 'text-gc-signal'}`}>
        {isUnneeded ? '—' : isCovered ? 'Done' : formatNumber(toFarm)}
      </span>
    </li>
  )
}

function DepotSection({ exp, records, materials, depot, onDepotChange }: {
  exp: number
  records: RecordAllocation[]
  materials: MaterialCost[]
  depot: Depot
  onDepotChange: (depot: Depot) => void
}) {
  const setOwned = (id: string, count: number) => {
    const next = { ...depot }
    if (count > 0) next[id] = count
    else delete next[id]
    onDepotChange(next)
  }

  // Battle Records are interchangeable — what the player owns counts as EXP, and whatever EXP is
  // still missing is re-split into records, largest first.
  const ownedExp = BATTLE_RECORDS.reduce((sum, record) => sum + (depot[record.id] ?? 0) * record.exp, 0)
  const missingExp = Math.max(exp - ownedExp, 0)
  const farmRecords = allocateRecords(missingExp).allocations
  const sortedMaterials = sortMaterials(materials)
  const remainingCount = sortedMaterials.filter(({ id, count }) => count > (depot[id] ?? 0)).length + (missingExp > 0 ? 1 : 0)
  const hasDepot = Object.keys(depot).length > 0

  return (
    <section aria-labelledby="depot-heading" className={`depot-section bg-gc-frame p-2 ${CHAMFER} ${PANEL_SHADOW}`}>
      <header className="flex flex-wrap items-center gap-x-4 gap-y-2 px-2 h-auto min-h-9 py-1.5">
        <h2 id="depot-heading" className="font-display text-[11px] md:text-xs text-gc-dim tracking-[0.18em] uppercase">Depot &amp; farming</h2>
        <span className={`font-data text-[11px] tracking-wider ${remainingCount === 0 ? 'text-gc-ok' : 'text-gc-signal'}`}>
          {remainingCount === 0 ? 'Everything is covered' : `${remainingCount} item${remainingCount === 1 ? '' : 's'} left to farm`}
        </span>
        {hasDepot && (
          <button
            type="button"
            onClick={() => { playClick(); onDepotChange({}) }}
            className={`ml-auto font-data text-[11px] tracking-wider uppercase text-gc-text cursor-pointer hover:text-gc-alert active:scale-95 ${FOCUS_RING}`}
            style={{ transition: 'color 0.2s, transform 0.15s ease' }}
          >
            Clear depot
          </button>
        )}
      </header>

      <p className="px-4 pt-3 font-body text-xs text-gc-text leading-[1.7]">
        Enter how many of each item you already have. The last column shows what you still need to farm.
      </p>

      <div className="grid grid-cols-[2.25rem_minmax(0,1fr)_5.5rem_5.5rem] sm:grid-cols-[2.25rem_minmax(0,1fr)_6rem_7rem_6rem] gap-x-3 px-3 pt-3 pb-1.5 font-data text-[10px] text-gc-text tracking-[0.2em] uppercase">
        <span className="col-span-2">Item</span>
        <span className="hidden sm:block text-right">Needed</span>
        <span className="text-right">You have</span>
        <span className="text-right">To farm</span>
      </div>

      <h3 className="px-3 pt-2 pb-1 font-data text-[10px] text-gc-text tracking-[0.2em] uppercase border-t border-gc-line-soft">
        Battle Records <span className="normal-case tracking-wide text-gc-dim">· {formatNumber(missingExp)} EXP still missing</span>
      </h3>
      <ul>
        {BATTLE_RECORDS.map((record, index) => (
          <DepotRow
            key={record.id}
            icon={record.icon}
            name={record.name}
            rarity={record.rarity}
            needed={records[index].count}
            owned={depot[record.id] ?? 0}
            toFarm={farmRecords[index].count}
            onOwnedChange={count => setOwned(record.id, count)}
          />
        ))}
      </ul>

      {sortedMaterials.length > 0 && (
        <>
          <h3 className="px-3 pt-2 pb-1 font-data text-[10px] text-gc-text tracking-[0.2em] uppercase border-t border-gc-line-soft">LMD &amp; materials</h3>
          <ul>
            {sortedMaterials.map(({ id, count }) => {
              const item = ITEM_BY_ID.get(id)
              const owned = depot[id] ?? 0
              return (
                <DepotRow
                  key={id}
                  icon={item?.icon ?? null}
                  name={item?.name ?? id}
                  rarity={item?.rarity ?? 1}
                  needed={count}
                  owned={owned}
                  toFarm={Math.max(count - owned, 0)}
                  onOwnedChange={value => setOwned(id, value)}
                />
              )
            })}
          </ul>
        </>
      )}
    </section>
  )
}

export function OperatorTraining() {
  const { hasEntered } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [plans, setPlans] = useState<GrowthPlan[]>([])
  const [depot, setDepot] = useState<Depot>({})
  const [hasLoaded, setHasLoaded] = useState(false)

  // Read after mount, not in the initial state, so the server render and first client render match.
  useEffect(() => {
    setPlans(loadPlans())
    setDepot(loadDepot())
    setHasLoaded(true)
  }, [])

  useEffect(() => {
    if (hasLoaded) savePlans(plans)
  }, [plans, hasLoaded])

  useEffect(() => {
    if (hasLoaded) saveDepot(depot)
  }, [depot, hasLoaded])

  const addPlan = (entry: RosterEntry) => {
    setPlans(previous => previous.length >= MAX_PLANS ? previous : [...previous, createPlan(entry)])
  }
  const updatePlan = (updated: GrowthPlan) =>
    setPlans(previous => previous.map(plan => plan.key === updated.key ? normalizePlan(updated) : plan))
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

    const materials = mergeMaterials(...plans.map(planMaterials))
    return { exp, overflow, allocations, materials }
  }, [plans])

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.training-header', '.training-picker', '.training-summary'], { opacity: 0 })
      return
    }
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo('.training-header', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 })
      .fromTo('.training-picker', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
      .fromTo('.training-summary', { opacity: 0, x: 12 }, { opacity: 1, x: 0, duration: 0.4 }, '-=0.25')
  }, { scope: containerRef, dependencies: [hasEntered] })

  useGSAP(() => {
    if (!hasEntered) return
    gsap.fromTo('.plan-card:last-child', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'back.out(1.4)' })
  }, { scope: containerRef, dependencies: [plans.length, hasEntered] })

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden ak-scroll">
      <PageHeader
        title="Operator Training"
        className="training-header"
        readout={
          <span className="font-data text-[11px] text-gc-text tracking-[0.08em] uppercase tabular-nums">
            {plans.length}<span className="text-gc-ghost"> / {MAX_PLANS} operators</span>
          </span>
        }
      />

      <div className="training-picker relative z-30 border-b border-gc-line bg-gc-frame px-5 md:px-10 py-5 md:py-6 flex flex-col gap-4">
        <p className="font-body text-[13px] md:text-sm text-gc-text leading-[1.7] max-w-2xl">
          Plan up to {MAX_PLANS} operators. Set where each one is now and where you want them, and the planner counts the Battle Records — largest records first — plus the LMD and materials needed. Fill in your depot below to see what's left to farm.
        </p>
        <div className="flex flex-col gap-2">
          <OperatorSearch plans={plans} onAdd={addPlan} />
        </div>
      </div>

      <main className="relative z-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-5 md:gap-8 px-4 md:px-8 py-5 md:py-8">
        <section aria-label="Operator plans" className="flex flex-col gap-3 md:gap-4 min-w-0">
          {plans.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center border border-gc-line-soft bg-gc-base/60">
              <NoImage label="No plan" className="w-20 h-20" />
              <p className="font-body text-sm text-gc-text">Search for an operator above to start a plan.</p>
            </div>
          ) : plans.map(plan => (
            <PlanCard key={plan.key} plan={plan} onChange={updatePlan} onRemove={() => removePlan(plan.key)} />
          ))}
          {plans.length > 0 && (
            <DepotSection exp={totals.exp} records={totals.allocations} materials={totals.materials} depot={depot} onDepotChange={setDepot} />
          )}
        </section>

        <aside className={`training-summary relative lg:sticky lg:top-20 self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto ak-scroll bg-gc-frame p-2 ${CHAMFER} ${PANEL_SHADOW}`}>
          <SignalTriangle />
          <div className="px-2 h-9 flex items-center">
            <h2 className="font-display text-[11px] md:text-xs text-gc-dim tracking-[0.18em] uppercase">Battle Records needed</h2>
          </div>
          <div className="p-4 flex flex-col gap-4 border border-gc-line-strong bg-gc-panel">
            <div>
              <p className="font-data text-[10px] text-gc-text tracking-[0.2em] uppercase">Total EXP</p>
              <p className="font-data text-3xl font-medium text-gc-ink tabular-nums tracking-[-0.03em] leading-tight mt-1">{formatNumber(totals.exp)}</p>
            </div>
            <RecordCounts allocations={totals.allocations} size="lg" />
            {totals.overflow > 0 && (
              <p className="font-body text-[11px] text-gc-text leading-[1.7]">
                Rounding up to whole Drill Records adds {formatNumber(totals.overflow)} EXP beyond the target.
              </p>
            )}
          </div>
          <div className="px-2 h-9 mt-1 flex items-center">
            <h2 className="font-display text-[11px] md:text-xs text-gc-dim tracking-[0.18em] uppercase">Materials needed</h2>
          </div>
          <div className="p-4 border border-gc-line-strong bg-gc-panel">
            {totals.materials.length > 0 ? (
              <MaterialList materials={totals.materials} size="lg" />
            ) : (
              <p className="font-body text-[13px] text-gc-text">No materials needed yet.</p>
            )}
          </div>
        </aside>
      </main>

    </div>
  )
}
