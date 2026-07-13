import { EVENTS } from '../data/events'
import type { GameEvent } from '../types'

export function parseEventDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function isSameDate(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function getDaysUntil(dateStr: string, today: Date): number {
  const target = parseEventDate(dateStr)
  const diffMs = startOfDay(target).getTime() - startOfDay(today).getTime()
  return Math.round(diffMs / (1000 * 60 * 60 * 24))
}

export function isEventOngoing(event: GameEvent, today: Date): boolean {
  const day = startOfDay(today)
  return day >= parseEventDate(event.startDate) && day <= parseEventDate(event.endDate)
}

export function getOngoingEvents(today: Date, events: GameEvent[] = EVENTS): GameEvent[] {
  return events
    .filter((event) => isEventOngoing(event, today))
    .sort((a, b) => parseEventDate(a.endDate).getTime() - parseEventDate(b.endDate).getTime())
}

export function getUpcomingEvents(today: Date, events: GameEvent[] = EVENTS): GameEvent[] {
  const day = startOfDay(today)
  return events
    .filter((event) => parseEventDate(event.startDate) > day)
    .sort((a, b) => parseEventDate(a.startDate).getTime() - parseEventDate(b.startDate).getTime())
}

export function eventOverlapsMonth(event: GameEvent, year: number, month: number): boolean {
  const monthStart = new Date(year, month, 1)
  const monthEnd = new Date(year, month + 1, 0)
  return parseEventDate(event.startDate) <= monthEnd && parseEventDate(event.endDate) >= monthStart
}

export interface EventLaneSlot {
  event: GameEvent
  isStart: boolean
  isEnd: boolean
}

export interface EventLaneInfo {
  lanesByDay: Map<number, (EventLaneSlot | null)[]>
  laneCount: number
}

export function getEventLanesForMonth(year: number, month: number, events: GameEvent[] = EVENTS): EventLaneInfo {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthEvents = events
    .filter((event) => eventOverlapsMonth(event, year, month))
    .sort((a, b) => {
      const startDiff = parseEventDate(a.startDate).getTime() - parseEventDate(b.startDate).getTime()
      return startDiff !== 0 ? startDiff : a.id.localeCompare(b.id)
    })

  const lanesByDay = new Map<number, (EventLaneSlot | null)[]>()
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)
    const slots = monthEvents.map((event): EventLaneSlot | null => {
      const start = parseEventDate(event.startDate)
      const end = parseEventDate(event.endDate)
      if (date < start || date > end) return null
      return { event, isStart: isSameDate(date, start), isEnd: isSameDate(date, end) }
    })
    lanesByDay.set(day, slots)
  }

  return { lanesByDay, laneCount: monthEvents.length }
}

export function eventColorString(event: GameEvent, alpha = 1): string {
  const [r, g, b] = event.color
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const MONTH_SHORT_LABELS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
]

export function formatEventDateRange(event: GameEvent): string {
  const start = parseEventDate(event.startDate)
  const end = parseEventDate(event.endDate)
  return `${MONTH_SHORT_LABELS[start.getMonth()]} ${start.getDate()} – ${MONTH_SHORT_LABELS[end.getMonth()]} ${end.getDate()}`
}
