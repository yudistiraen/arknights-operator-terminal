'use client'

import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
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

gsap.registerPlugin(useGSAP)

function BirthdayCell({ entries, day, isToday }: { entries: BirthdayEntry[]; day: number; isToday: boolean }) {
  return (
    <div
      className={`
        group relative aspect-square p-1.5 md:p-2 border overflow-hidden
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
        font-display text-[10px] md:text-xs leading-none block
        ${isToday ? 'text-ak-accent-bright font-semibold' : 'text-white/50'}
      `}>
        {day}
      </span>

      {entries.length > 0 && (
        <div className="mt-1 md:mt-1.5 flex flex-wrap gap-0.5 md:gap-1">
          {entries.map((entry) => (
            <Link
              key={entry.operator.name}
              href={`/operator/${toSlug(entry.operator.name)}`}
              className="relative block w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden border border-ak-gold/40 hover:border-ak-gold-bright/70 active:scale-[0.93] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ak-accent-bright"
              style={{ transition: 'border-color 0.2s, transform 0.15s' }}
              title={entry.operator.name}
            >
              <img
                src={entry.portrait}
                alt={entry.operator.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </Link>
          ))}
        </div>
      )}

      {entries.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-1 pb-0.5 pt-2 opacity-0 group-hover:opacity-100 pointer-events-none hidden md:block" style={{ transition: 'opacity 0.2s' }}>
          <p className="font-display text-xs text-ak-gold-bright/90 tracking-wider truncate">
            {entries.map(e => e.operator.name).join(', ')}
          </p>
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
    <div className="upcoming-section w-full max-w-4xl mt-6 md:mt-10">
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <div className="w-1 h-4 bg-ak-accent/50" />
        <h2 className="font-display text-xs md:text-sm text-white/40 tracking-[0.15em] uppercase">
          Upcoming Birthdays
        </h2>
      </div>
      <div className="grid gap-1.5 md:gap-2">
        {upcoming.map((entry) => (
          <Link
            key={entry.operator.name}
            href={`/operator/${toSlug(entry.operator.name)}`}
            className="group flex items-center gap-3 md:gap-4 bg-white/[0.025] border border-white/[0.06] hover:bg-white/[0.05] hover:border-ak-accent/20 px-3 md:px-4 py-2 md:py-2.5 active:scale-[0.995] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
            style={{ transition: 'background-color 0.25s, border-color 0.25s, transform 0.15s' }}
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-ak-gold/30 shrink-0">
              <img
                src={entry.portrait}
                alt={entry.operator.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-xs md:text-sm text-white/80 group-hover:text-white/95 tracking-wider truncate" style={{ transition: 'color 0.25s' }}>
                {entry.operator.name}
              </p>
              <p className="font-body text-[9px] md:text-[10px] text-white/35 tracking-wide">
                {MONTH_LABELS[entry.month]} {entry.day}
              </p>
            </div>
            <div className="shrink-0 text-right">
              {entry.daysUntil === 0 ? (
                <span className="font-display text-[10px] md:text-xs text-ak-gold-bright tracking-wider">TODAY</span>
              ) : (
                <span className="font-display text-[10px] md:text-xs text-white/20 tracking-wider">
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

export function Calendar() {
  const { hasEntered } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [today, setToday] = useState<Date | null>(null)

  const now = today ?? new Date(2000, 0, 1)
  const [currentMonth, setCurrentMonth] = useState(now.getMonth())
  const [currentYear, setCurrentYear] = useState(now.getFullYear())
  const [mounted, setMounted] = useState(false)

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

  const isToday = useCallback((day: number) => {
    if (!today) return false
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
  }, [currentMonth, currentYear, today])

  const prevMonth = useCallback(() => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(y => y - 1)
    } else {
      setCurrentMonth(m => m - 1)
    }
  }, [currentMonth])

  const nextMonth = useCallback(() => {
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
    cells.push(
      <BirthdayCell key={day} entries={entries} day={day} isToday={isToday(day)} />
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
      <div className="flex-1 relative z-10 flex flex-col items-center px-3 md:px-6 pt-14 md:pt-20 pb-8">
        {/* Header */}
        <div className="cal-header w-full max-w-4xl mb-6 md:mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1 h-6 md:h-8 bg-ak-accent/40" />
              <div>
                <h1 className="font-display text-lg md:text-2xl font-bold text-white/85 tracking-wider uppercase leading-none">
                  Calendar
                </h1>
                <p className="font-display text-[9px] md:text-[10px] text-white/50 tracking-[0.15em] uppercase mt-0.5">
                  Operator Birthdays
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/[0.03] border border-white/[0.07] px-2 md:px-3 py-1 md:py-1.5">
              <div className="w-1.5 h-1.5 bg-ak-gold/60 rounded-full" />
              <span className="font-display text-[9px] md:text-[10px] text-white/70 tracking-wider">
                {birthdayCount} {birthdayCount === 1 ? 'BIRTHDAY' : 'BIRTHDAYS'} THIS MONTH
              </span>
            </div>
          </div>
        </div>

        {/* Month Navigation */}
        <div className="cal-header w-full max-w-4xl flex items-center justify-between mb-4 md:mb-6">
          <button
            onClick={prevMonth}
            className="flex items-center gap-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] px-3 py-1.5 md:px-4 md:py-2 active:scale-[0.96] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
            style={{ transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s' }}
          >
            <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 fill-none stroke-white/40 stroke-2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display text-[10px] md:text-xs text-white/70 tracking-wider hidden md:block">PREV</span>
          </button>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-6 md:w-10 h-px bg-gradient-to-r from-transparent to-ak-accent/20" />
            <h2 className="font-display text-base md:text-xl font-bold text-white/80 tracking-[0.12em] uppercase">
              {MONTH_LABELS[currentMonth]} {currentYear}
            </h2>
            <div className="w-6 md:w-10 h-px bg-gradient-to-l from-transparent to-ak-accent/20" />
          </div>

          <button
            onClick={nextMonth}
            className="flex items-center gap-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] px-3 py-1.5 md:px-4 md:py-2 active:scale-[0.96] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
            style={{ transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s' }}
          >
            <span className="font-display text-[10px] md:text-xs text-white/70 tracking-wider hidden md:block">NEXT</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 fill-none stroke-white/40 stroke-2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Day Labels */}
        <div className="w-full max-w-4xl grid grid-cols-7 gap-px md:gap-1 mb-px md:mb-1">
          {DAY_LABELS.map((label) => (
            <div key={label} className="cal-day-label text-center py-1.5 md:py-2">
              <span className="font-display text-[9px] md:text-[10px] text-white/50 tracking-[0.2em]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="cal-grid w-full max-w-4xl grid grid-cols-7 gap-px md:gap-1">
          {cells}
        </div>

        {/* Upcoming Birthdays */}
        <UpcomingList />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
