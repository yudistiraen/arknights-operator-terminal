'use client'

import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useApp } from './AppShell'
import { Footer } from './Footer'
import {
  getBirthdaysForMonth,
  getDaysInMonth,
  getFirstDayOfWeek,
  MONTH_LABELS,
  DAY_LABELS,
  getAllBirthdays,
} from '../lib/calendar'
import type { BirthdayEntry } from '../lib/calendar'
import { toSlug } from '../lib/operators'
import { playClick } from '../lib/sound'
import {
  getEventLanesForMonth,
  getOngoingEvents,
  getUpcomingEvents,
  getDaysUntil,
  formatEventDateRange,
} from '../lib/events'
import type { EventLaneSlot } from '../lib/events'
import { BracketCorners, FOCUS_RING, GHOST_BUTTON, HoverFill, Label, NoImage, PageHeader, Panel, StatusDot } from './ui/Console'

gsap.registerPlugin(useGSAP)

function DayCell({
  entries,
  eventSlots,
  day,
  isToday,
  hoveredEventId,
  onHoverEvent,
}: {
  entries: BirthdayEntry[]
  eventSlots: (EventLaneSlot | null)[]
  day: number
  isToday: boolean
  hoveredEventId: string | null
  onHoverEvent: (eventId: string | null) => void
}) {
  const hasEvents = eventSlots.some(Boolean)

  return (
    <div
      className={`
        group relative aspect-square p-2 md:p-2.5 border overflow-hidden hover:z-30 hover:overflow-visible
        ${isToday
          ? 'bg-gc-raised border-gc-line-strong'
          : entries.length > 0
            ? 'bg-gc-base border-gc-line hover:bg-gc-raised hover:border-gc-line-strong'
            : 'bg-gc-base/60 border-gc-line-soft'
        }
      `}
    >
      {isToday && <BracketCorners size={8} className="border-gc-signal" />}

      <span className={`
        font-data text-xs md:text-[13px] leading-none inline-block tabular-nums
        ${isToday ? 'bg-gc-signal text-gc-void font-medium px-1 py-0.5 -ml-1 -mt-0.5' : 'text-gc-text'}
      `}>
        {day}
      </span>

      {entries.length > 0 && (
        <div className="mt-1.5 md:mt-2 flex flex-wrap gap-1 md:gap-1.5">
          {entries.map((entry) => (
            <Link
              key={entry.operator.name}
              href={`/operator/${toSlug(entry.operator.name)}`}
              className={`relative block w-8 h-8 md:w-10 md:h-10 overflow-hidden border border-gc-line-strong bg-gc-panel hover:border-gc-invert active:scale-[0.93] ${FOCUS_RING}`}
              style={{ transition: 'transform 0.15s' }}
              title={entry.operator.name}
            >
              {entry.portrait ? (
                <Image
                  src={entry.portrait}
                  alt={entry.operator.name}
                  fill
                  sizes="40px"
                  loading="lazy"
                  className="object-cover object-center"
                />
              ) : (
                <NoImage label="" className="absolute inset-0 border-0" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </Link>
          ))}
        </div>
      )}

      {hasEvents && (
        <div className="absolute bottom-0 left-0 right-0 flex flex-col-reverse gap-0.5 pb-[1.5px] z-10">
          {eventSlots.map((slot, laneIndex) => {
            if (!slot) return <div key={laneIndex} className="h-[3.5px] md:h-1" />
            const [colorR, colorG, colorB] = slot.event.color
            const isDimmed = hoveredEventId !== null && hoveredEventId !== slot.event.id
            return (
              <div
                key={laneIndex}
                className="relative group/eventline"
                onMouseEnter={() => onHoverEvent(slot.event.id)}
                onMouseLeave={() => onHoverEvent(null)}
              >
                <div
                  className={`h-[3.5px] md:h-1 cursor-help ${slot.isStart ? 'ml-0.5' : ''} ${slot.isEnd ? 'mr-0.5' : ''}`}
                  style={{
                    backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})`,
                    opacity: isDimmed ? 0.2 : 0.85,
                    transition: 'opacity 0.2s',
                  }}
                />
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-52 px-3.5 py-2 bg-gc-float border border-gc-line-strong opacity-0 scale-95 group-hover/eventline:opacity-100 group-hover/eventline:scale-100 pointer-events-none z-30 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8),0_4px_12px_rgba(0,0,0,0.5)]"
                  style={{ transition: 'opacity 0.15s, transform 0.15s' }}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <span className="w-2 h-2 shrink-0" style={{ backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})` }} />
                    <p className="font-body text-[12px] md:text-[13px] font-medium text-gc-ink leading-tight text-center">
                      {slot.event.name}
                    </p>
                  </div>
                  <p className="font-data text-[11px] text-gc-dim tracking-[0.08em] uppercase text-center mt-1.5 tabular-nums">
                    {formatEventDateRange(slot.event)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function EmptyCell() {
  return <div className="aspect-square border border-transparent" />
}

function UpcomingList() {
  const [today, setToday] = useState<Date | null>(null)
  useEffect(() => { setToday(new Date()) }, [])

  const upcoming = useMemo(() => {
    if (!today) return []
    const all = getAllBirthdays()
    const withDistance = all.map((entry) => {
      const entryDate = new Date(today.getFullYear(), entry.month, entry.day)
      const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      let daysUntil = Math.floor((entryDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24))
      if (daysUntil < 0) daysUntil += 365
      return { ...entry, daysUntil }
    })
    withDistance.sort((a, b) => a.daysUntil - b.daysUntil)
    return withDistance.slice(0, 5)
  }, [today])

  return (
    <Panel title="Upcoming Birthdays" className="upcoming-section w-full max-w-6xl mt-8 md:mt-10" contentClassName="p-0">
      <ListHeader columns={['Operator', 'Date', 'In']} />
      <div className="grid">
        {upcoming.map((entry) => (
          <Link
            key={entry.operator.name}
            href={`/operator/${toSlug(entry.operator.name)}`}
            className={`group relative flex items-center gap-4 md:gap-5 border-b border-gc-line-soft last:border-b-0 px-4 md:px-5 h-14 ${entry.daysUntil === 0 ? 'bg-gc-invert' : ''} focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-gc-scan`}
          >
            {entry.daysUntil !== 0 && <HoverFill />}
            <div className="relative w-9 h-9 overflow-hidden border border-gc-line-strong bg-gc-panel shrink-0">
              {entry.portrait ? (
                <Image
                  src={entry.portrait}
                  alt={entry.operator.name}
                  fill
                  sizes="36px"
                  loading="lazy"
                  className="object-cover object-center"
                />
              ) : (
                <NoImage label="" className="absolute inset-0 border-0" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`relative font-body text-sm md:text-[15px] font-medium truncate ${entry.daysUntil === 0 ? 'text-gc-void' : 'text-gc-ink'}`}>
                {entry.operator.name}
              </p>
            </div>
            <span className={`relative w-28 font-data text-[11px] md:text-xs tracking-[0.08em] uppercase tabular-nums ${entry.daysUntil === 0 ? 'text-gc-void' : 'text-gc-dim'}`}>
              {MONTH_LABELS[entry.month]} {entry.day}
            </span>
            <span className={`relative w-16 text-right font-data text-[11px] md:text-xs tracking-[0.1em] uppercase tabular-nums ${entry.daysUntil === 0 ? 'text-gc-void font-medium' : 'text-gc-text'}`}>
              {entry.daysUntil === 0 ? 'Today' : `${entry.daysUntil}d`}
            </span>
          </Link>
        ))}
      </div>
    </Panel>
  )
}

function OngoingEventsList() {
  const [today, setToday] = useState<Date | null>(null)
  useEffect(() => { setToday(new Date()) }, [])

  const ongoing = useMemo(() => {
    if (!today) return []
    return getOngoingEvents(today)
  }, [today])

  if (!today || ongoing.length === 0) return null

  return (
    <Panel title="Ongoing Events" className="upcoming-section w-full max-w-6xl mt-8 md:mt-10" contentClassName="p-0">
      <ListHeader columns={['Event', 'Period', 'Ends']} />
      <div className="grid">
        {ongoing.map((event) => {
          const [colorR, colorG, colorB] = event.color
          const daysLeft = getDaysUntil(event.endDate, today)
          const isUrgent = daysLeft <= 1

          return (
            <div
              key={event.id}
              className="group relative flex items-center gap-4 md:gap-5 border-b border-gc-line-soft last:border-b-0 px-4 md:px-5 h-16"
            >
              <div className="relative w-16 h-10 md:w-20 md:h-11 overflow-hidden border border-gc-line-strong shrink-0">
                <Image
                  src={event.banner}
                  alt={event.name}
                  fill
                  sizes="80px"
                  loading="lazy"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gc-raised mix-blend-multiply opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-0 inset-y-0 w-0.5" style={{ backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})` }} />
              </div>
              <p className="flex-1 min-w-0 font-body text-sm md:text-[15px] font-medium text-gc-ink truncate">
                {event.name}
              </p>
              <span className="hidden sm:block w-48 font-data text-[11px] md:text-xs text-gc-dim tracking-[0.08em] uppercase tabular-nums">
                {formatEventDateRange(event)}
              </span>
              <div className="shrink-0 w-24 flex justify-end">
                <StatusDot tone={isUrgent ? 'alert' : 'active'} blink={isUrgent} label={daysLeft <= 0 ? 'Last day' : `${daysLeft}d left`} />
              </div>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}

function UpcomingEventsList() {
  const [today, setToday] = useState<Date | null>(null)
  useEffect(() => { setToday(new Date()) }, [])

  const upcoming = useMemo(() => {
    if (!today) return []
    return getUpcomingEvents(today).slice(0, 5)
  }, [today])

  if (!today || upcoming.length === 0) return null

  return (
    <Panel title="Upcoming Events" className="upcoming-section w-full max-w-6xl mt-8 md:mt-10" contentClassName="p-0">
      <ListHeader columns={['Event', 'Period', 'Starts']} />
      <div className="grid">
        {upcoming.map((event) => {
          const [colorR, colorG, colorB] = event.color
          const daysUntil = getDaysUntil(event.startDate, today)

          return (
            <div
              key={event.id}
              className="group relative flex items-center gap-4 md:gap-5 border-b border-gc-line-soft last:border-b-0 px-4 md:px-5 h-16"
            >
              <div className="relative w-16 h-10 md:w-20 md:h-11 overflow-hidden border border-gc-line-strong shrink-0">
                <Image
                  src={event.banner}
                  alt={event.name}
                  fill
                  sizes="80px"
                  loading="lazy"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gc-raised mix-blend-multiply opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-0 inset-y-0 w-0.5" style={{ backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})` }} />
              </div>
              <p className="flex-1 min-w-0 font-body text-sm md:text-[15px] font-medium text-gc-ink truncate">
                {event.name}
              </p>
              <span className="hidden sm:block w-48 font-data text-[11px] md:text-xs text-gc-dim tracking-[0.08em] uppercase tabular-nums">
                {formatEventDateRange(event)}
              </span>
              <div className="shrink-0 w-24 flex justify-end">
                <StatusDot tone="idle" label={`In ${daysUntil}d`} className="!text-gc-text" />
              </div>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}

function ListHeader({ columns: [primary, secondary, tertiary] }: { columns: [string, string, string] }) {
  return (
    <div className="flex items-center gap-4 md:gap-5 px-4 md:px-5 h-9 border-b border-gc-line">
      <Label className="flex-1">{primary}</Label>
      <Label className="hidden sm:block w-48">{secondary}</Label>
      <Label className="w-24 text-right">{tertiary}</Label>
    </div>
  )
}

export function Calendar() {
  const { hasEntered } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [today, setToday] = useState<Date | null>(null)

  const now = today ?? new Date(2000, 0, 1)
  const [currentMonth, setCurrentMonth] = useState(now.getMonth())
  const [currentYear, setCurrentYear] = useState(now.getFullYear())
  const [mounted, setMounted] = useState(false)
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null)

  useEffect(() => {
    const clientNow = new Date()
    setToday(clientNow)
    if (!mounted) {
      setCurrentMonth(clientNow.getMonth())
      setCurrentYear(clientNow.getFullYear())
      setMounted(true)
    }
  }, [])

  const birthdays = useMemo(() => getBirthdaysForMonth(currentMonth), [currentMonth])
  const daysInMonth = useMemo(() => getDaysInMonth(currentYear, currentMonth), [currentYear, currentMonth])
  const firstDay = useMemo(() => getFirstDayOfWeek(currentYear, currentMonth), [currentYear, currentMonth])
  const eventLanes = useMemo(() => getEventLanesForMonth(currentYear, currentMonth), [currentYear, currentMonth])

  const isToday = useCallback((day: number) => {
    if (!today) return false
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
  }, [currentMonth, currentYear, today])

  const prevMonth = useCallback(() => {
    playClick()
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(y => y - 1)
    } else {
      setCurrentMonth(m => m - 1)
    }
  }, [currentMonth])

  const nextMonth = useCallback(() => {
    playClick()
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(y => y + 1)
    } else {
      setCurrentMonth(m => m + 1)
    }
  }, [currentMonth])

  const birthdayCount = useMemo(() => {
    let count = 0
    birthdays.forEach((entries) => { count += entries.length })
    return count
  }, [birthdays])

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.cal-header', '.cal-day-label', '.cal-grid', '.upcoming-section'], { opacity: 0 })
      return
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.cal-header', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo('.cal-day-label', { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.03 }, '-=0.2')
      .fromTo('.cal-grid', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.15')
      .fromTo('.upcoming-section', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')

  }, { scope: containerRef, dependencies: [hasEntered] })

  const cells: React.ReactNode[] = []
  for (let i = 0; i < firstDay; i++) {
    cells.push(<EmptyCell key={`empty-${i}`} />)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const entries = birthdays.get(day) ?? []
    const eventSlots = eventLanes.lanesByDay.get(day) ?? []
    cells.push(
      <DayCell
        key={day}
        entries={entries}
        eventSlots={eventSlots}
        day={day}
        isToday={isToday(day)}
        hoveredEventId={hoveredEventId}
        onHoverEvent={setHoveredEventId}
      />
    )
  }

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-x-hidden flex flex-col">
      <PageHeader
        title="Calendar"
        className="cal-header"
        readout={
          <div className="flex items-center gap-4">
            <StatusDot tone="progress" blink={false} label={`${birthdayCount} ${birthdayCount === 1 ? 'birthday' : 'birthdays'}`} />
            {eventLanes.laneCount > 0 && (
              <StatusDot tone="scan" label={`${eventLanes.laneCount} ${eventLanes.laneCount === 1 ? 'event' : 'events'}`} className="max-sm:hidden" />
            )}
          </div>
        }
      />

      {/* Content */}
      <div className="flex-1 relative z-10 flex flex-col items-center px-4 md:px-8 pt-8 md:pt-10 pb-10">
        <Panel
          signal
          className="cal-grid w-full max-w-6xl"
          contentClassName="p-2 md:p-4"
          title={
            <h2 className="font-display text-[13px] md:text-[15px] leading-none uppercase tracking-[0.18em] text-gc-text tabular-nums">
              {MONTH_LABELS[currentMonth]} {currentYear}
            </h2>
          }
          headerRight={
            <div className="flex items-center gap-2">
              <button onClick={prevMonth} aria-label="Previous month" className={`${GHOST_BUTTON} h-8 px-2.5`} style={{ transition: 'transform 0.15s' }}>
                <HoverFill />
                <svg viewBox="0 0 24 24" className="relative w-4 h-4 fill-none stroke-current stroke-[1.5]">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="relative hidden md:inline">Prev</span>
              </button>
              <button onClick={nextMonth} aria-label="Next month" className={`${GHOST_BUTTON} h-8 px-2.5`} style={{ transition: 'transform 0.15s' }}>
                <HoverFill />
                <span className="relative hidden md:inline">Next</span>
                <svg viewBox="0 0 24 24" className="relative w-4 h-4 fill-none stroke-current stroke-[1.5]">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          }
        >
        {/* Day Labels */}
        <div className="w-full grid grid-cols-7 gap-px md:gap-1.5 mb-px md:mb-1.5">
          {DAY_LABELS.map((label) => (
            <div key={label} className="cal-day-label text-center py-2 md:py-2.5">
              <Label>{label}</Label>
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-7 gap-px md:gap-1.5">
          {cells}
        </div>
        </Panel>

        {/* Ongoing Events */}
        <OngoingEventsList />

        {/* Upcoming Events */}
        <UpcomingEventsList />

        {/* Upcoming Birthdays */}
        <UpcomingList />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
