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
          ? 'bg-ak-accent/[0.08] border-ak-accent/30 shadow-[0_0_20px_rgba(59,164,201,0.08),inset_0_0_12px_rgba(59,164,201,0.04)]'
          : entries.length > 0
            ? 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-ak-accent/20'
            : 'bg-white/[0.015] border-white/[0.05]'
        }
      `}
      style={{ transition: 'background-color 0.25s, border-color 0.25s' }}
    >
      {isToday && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ak-accent/50 via-ak-accent/20 to-transparent" />
      )}

      <span className={`
        font-display text-xs md:text-sm leading-none block
        ${isToday ? 'text-ak-accent-bright font-semibold' : 'text-white/50'}
      `}>
        {day}
      </span>

      {entries.length > 0 && (
        <div className="mt-1.5 md:mt-2 flex flex-wrap gap-1 md:gap-1.5">
          {entries.map((entry) => (
            <Link
              key={entry.operator.name}
              href={`/operator/${toSlug(entry.operator.name)}`}
              className="relative block w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-ak-gold/40 hover:border-ak-gold-bright/70 active:scale-[0.93] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ak-accent-bright"
              style={{ transition: 'border-color 0.2s, transform 0.15s' }}
              title={entry.operator.name}
            >
              <Image
                src={entry.portrait}
                alt={entry.operator.name}
                fill
                sizes="40px"
                loading="lazy"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
                  className={`h-[3.5px] md:h-1 cursor-help ${slot.isStart ? 'rounded-l-full' : ''} ${slot.isEnd ? 'rounded-r-full' : ''}`}
                  style={{
                    backgroundColor: `rgba(${colorR}, ${colorG}, ${colorB}, ${isDimmed ? 0.2 : 0.85})`,
                    boxShadow: isDimmed ? 'none' : `0 0 4px rgba(${colorR}, ${colorG}, ${colorB}, 0.45)`,
                    transition: 'background-color 0.2s, box-shadow 0.2s',
                  }}
                />
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-52 px-3.5 py-2 bg-[#0a0f1a] border opacity-0 scale-95 group-hover/eventline:opacity-100 group-hover/eventline:scale-100 pointer-events-none z-30 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                  style={{
                    borderColor: `rgba(${colorR}, ${colorG}, ${colorB}, 0.35)`,
                    transition: 'opacity 0.15s, transform 0.15s',
                  }}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})` }} />
                    <p className="font-display text-[11px] md:text-sm font-semibold text-white/90 leading-tight text-center">
                      {slot.event.name}
                    </p>
                  </div>
                  <p className="font-display text-sm text-white/35 tracking-wider text-center mt-1.5">
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
    <div className="upcoming-section w-full max-w-6xl mt-8 md:mt-12">
      <div className="flex items-center gap-4 mb-4 md:mb-5">
        <div className="w-1.5 h-5 bg-ak-accent/50" />
        <h2 className="font-display text-sm md:text-base text-white/40 tracking-[0.15em] uppercase">
          Upcoming Birthdays
        </h2>
      </div>
      <div className="grid gap-2 md:gap-2.5">
        {upcoming.map((entry) => (
          <Link
            key={entry.operator.name}
            href={`/operator/${toSlug(entry.operator.name)}`}
            className="group flex items-center gap-4 md:gap-5 bg-white/[0.025] border border-white/[0.06] hover:bg-white/[0.05] hover:border-ak-accent/20 px-4 md:px-5 py-2.5 md:py-3 active:scale-[0.995] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
            style={{ transition: 'background-color 0.25s, border-color 0.25s, transform 0.15s' }}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-ak-gold/30 shrink-0">
              <Image
                src={entry.portrait}
                alt={entry.operator.name}
                fill
                sizes="48px"
                loading="lazy"
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-sm md:text-base text-white/80 group-hover:text-white/95 tracking-wider truncate" style={{ transition: 'color 0.25s' }}>
                {entry.operator.name}
              </p>
              <p className="font-body text-[11px] md:text-[13px] text-white/35 tracking-wide">
                {MONTH_LABELS[entry.month]} {entry.day}
              </p>
            </div>
            <div className="shrink-0 text-right">
              {entry.daysUntil === 0 ? (
                <span className="font-display text-xs md:text-sm text-ak-gold-bright tracking-wider">TODAY</span>
              ) : (
                <span className="font-display text-xs md:text-sm text-white/20 tracking-wider">
                  {entry.daysUntil}d
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
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
    <div className="upcoming-section w-full max-w-6xl mt-8 md:mt-12">
      <div className="flex items-center gap-4 mb-4 md:mb-5">
        <div className="w-1.5 h-5 bg-ak-gold/50" />
        <h2 className="font-display text-sm md:text-base text-white/40 tracking-[0.15em] uppercase">
          Ongoing Events
        </h2>
      </div>
      <div className="grid gap-2 md:gap-2.5">
        {ongoing.map((event) => {
          const [colorR, colorG, colorB] = event.color
          const accentColor = `rgb(${colorR}, ${colorG}, ${colorB})`
          const daysLeft = getDaysUntil(event.endDate, today)
          const isUrgent = daysLeft <= 1

          return (
            <div
              key={event.id}
              className="group relative flex items-center gap-4 md:gap-5 bg-white/[0.025] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] px-4 md:px-5 py-2.5 md:py-3"
              style={{ transition: 'background-color 0.25s, border-color 0.25s' }}
            >
              {isUrgent && <div className="urgent-ring" aria-hidden />}
              <div
                className="relative w-16 h-10 md:w-20 md:h-12 overflow-hidden border shrink-0"
                style={{ borderColor: `rgba(${colorR}, ${colorG}, ${colorB}, 0.4)` }}
              >
                <Image
                  src={event.banner}
                  alt={event.name}
                  fill
                  sizes="80px"
                  loading="lazy"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, rgba(${colorR}, ${colorG}, ${colorB}, 0.5), transparent 70%)`, mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm md:text-base text-white/80 group-hover:text-white/95 tracking-wider truncate" style={{ transition: 'color 0.25s' }}>
                  {event.name}
                </p>
                <p className="font-body text-[11px] md:text-[13px] text-white/35 tracking-wide">
                  {formatEventDateRange(event)}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span
                  className={`font-display text-xs md:text-sm tracking-wider ${isUrgent ? 'animate-[pulse-glow_2.4s_ease-in-out_infinite]' : ''}`}
                  style={{ color: isUrgent ? '#d97a6e' : accentColor }}
                >
                  {daysLeft <= 0 ? 'LAST DAY' : `${daysLeft}d`}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
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
    <div className="upcoming-section w-full max-w-6xl mt-8 md:mt-12">
      <div className="flex items-center gap-4 mb-4 md:mb-5">
        <div className="w-1.5 h-5 bg-ak-gold/50" />
        <h2 className="font-display text-sm md:text-base text-white/40 tracking-[0.15em] uppercase">
          Upcoming Events
        </h2>
      </div>
      <div className="grid gap-2 md:gap-2.5">
        {upcoming.map((event) => {
          const [colorR, colorG, colorB] = event.color
          const accentColor = `rgb(${colorR}, ${colorG}, ${colorB})`
          const daysUntil = getDaysUntil(event.startDate, today)

          return (
            <div
              key={event.id}
              className="group flex items-center gap-4 md:gap-5 bg-white/[0.025] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] px-4 md:px-5 py-2.5 md:py-3"
              style={{ transition: 'background-color 0.25s, border-color 0.25s' }}
            >
              <div
                className="relative w-16 h-10 md:w-20 md:h-12 overflow-hidden border shrink-0"
                style={{ borderColor: `rgba(${colorR}, ${colorG}, ${colorB}, 0.4)` }}
              >
                <Image
                  src={event.banner}
                  alt={event.name}
                  fill
                  sizes="80px"
                  loading="lazy"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, rgba(${colorR}, ${colorG}, ${colorB}, 0.5), transparent 70%)`, mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm md:text-base text-white/80 group-hover:text-white/95 tracking-wider truncate" style={{ transition: 'color 0.25s' }}>
                  {event.name}
                </p>
                <p className="font-body text-[11px] md:text-[13px] text-white/35 tracking-wide">
                  {formatEventDateRange(event)}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span className="font-display text-xs md:text-sm tracking-wider" style={{ color: accentColor }}>
                  {daysUntil}d
                </span>
              </div>
            </div>
          )
        })}
      </div>
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
    <div ref={containerRef} className="relative w-full min-h-screen bg-ak-bg overflow-x-hidden flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,164,201,0.06) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 100%, rgba(212,168,67,0.03) 0%, transparent 50%)' }} />
      </div>

      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />

      {/* Content */}
      <div className="flex-1 relative z-10 flex flex-col items-center px-4 md:px-8 pt-16 md:pt-24 pb-10">
        {/* Header */}
        <div className="cal-header w-full max-w-6xl mb-8 md:mb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-5">
              <div className="w-1.5 h-8 md:h-10 bg-ak-accent/40" />
              <div>
                <h1 className="font-display text-xl md:text-3xl font-bold text-white/85 tracking-wider uppercase leading-none">
                  Calendar
                </h1>
                <p className="font-display text-[11px] md:text-[13px] text-white/50 tracking-[0.15em] uppercase mt-1">
                  Birthdays &amp; Events
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2 md:gap-2.5">
              <div className="flex items-center gap-2 md:gap-2.5 bg-white/[0.03] border border-white/[0.07] px-2.5 md:px-4 py-1.5 md:py-2">
                <div className="w-2 h-2 bg-ak-gold/60 rounded-full" />
                <span className="font-display text-[11px] md:text-[13px] text-white/70 tracking-wider">
                  {birthdayCount} {birthdayCount === 1 ? 'BIRTHDAY' : 'BIRTHDAYS'}
                </span>
              </div>
              {eventLanes.laneCount > 0 && (
                <div className="flex items-center gap-2 md:gap-2.5 bg-white/[0.03] border border-white/[0.07] px-2.5 md:px-4 py-1.5 md:py-2">
                  <div className="w-2 h-2 bg-ak-accent/60 rounded-full" />
                  <span className="font-display text-[11px] md:text-[13px] text-white/70 tracking-wider">
                    {eventLanes.laneCount} {eventLanes.laneCount === 1 ? 'EVENT' : 'EVENTS'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Month Navigation */}
        <div className="cal-header w-full max-w-6xl flex items-center justify-between mb-5 md:mb-8">
          <button
            onClick={prevMonth}
            className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] px-4 py-2 md:px-5 md:py-2.5 active:scale-[0.96] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
            style={{ transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-none stroke-white/40 stroke-2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display text-xs md:text-sm text-white/70 tracking-wider hidden md:block">PREV</span>
          </button>

          <div className="flex items-center gap-4 md:gap-5">
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-ak-accent/20" />
            <h2 className="font-display text-lg md:text-2xl font-bold text-white/80 tracking-[0.12em] uppercase">
              {MONTH_LABELS[currentMonth]} {currentYear}
            </h2>
            <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-ak-accent/20" />
          </div>

          <button
            onClick={nextMonth}
            className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] px-4 py-2 md:px-5 md:py-2.5 active:scale-[0.96] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
            style={{ transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s' }}
          >
            <span className="font-display text-xs md:text-sm text-white/70 tracking-wider hidden md:block">NEXT</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-none stroke-white/40 stroke-2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Day Labels */}
        <div className="w-full max-w-6xl grid grid-cols-7 gap-px md:gap-1.5 mb-px md:mb-1.5">
          {DAY_LABELS.map((label) => (
            <div key={label} className="cal-day-label text-center py-2 md:py-2.5">
              <span className="font-display text-[11px] md:text-[13px] text-white/50 tracking-[0.2em]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="cal-grid w-full max-w-6xl grid grid-cols-7 gap-px md:gap-1.5">
          {cells}
        </div>

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
