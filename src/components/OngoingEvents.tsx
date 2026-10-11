'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { getDaysUntil, getOngoingEvents, formatEventDateRange } from '../lib/events'
import { BracketCorners, Panel, StatusDot } from './ui/Console'

export function OngoingEvents() {
  const now = new Date()
  const ongoingEvents = useMemo(() => getOngoingEvents(now), [now.toDateString()])

  if (ongoingEvents.length === 0) return null

  return (
    <Panel
      title="Ongoing Events"
      className="ongoing-events w-full max-w-[1250px] mb-10 md:mb-14"
      contentClassName="p-4 md:p-5"
      headerRight={<StatusDot tone="scan" label={`${ongoingEvents.length} live`} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {ongoingEvents.map((event) => {
          const daysLeft = getDaysUntil(event.endDate, now)
          const isUrgent = daysLeft <= 1

          return (
            <div
              key={event.id}
              className={`event-card group relative flex flex-col overflow-hidden border bg-gc-base ${isUrgent ? 'border-gc-alert' : 'border-gc-line'}`}
            >
              {/* Banner */}
              <div className="relative aspect-[3/1] overflow-hidden">
                <Image
                  src={event.banner}
                  alt={event.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-[1.04]"
                  style={{ transition: 'transform 0.5s cubic-bezier(0.22, 1.2, 0.36, 1)' }}
                />
                <div className="absolute inset-0 bg-gc-raised mix-blend-multiply opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent" />
                <BracketCorners size={8} className="border-gc-invert/60" />

                <div className="absolute inset-x-0 bottom-0 px-3 pb-2.5 z-10">
                  <p className="font-body text-sm md:text-base font-medium text-gc-ink leading-snug">
                    {event.name}
                  </p>
                </div>
              </div>

              {/* Readout strip */}
              <div className="flex items-center justify-between gap-3 border-t border-gc-line-soft px-3 py-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="shrink-0 font-data text-[10px] tracking-[0.14em] uppercase text-gc-text border border-gc-line px-1.5 py-0.5">
                    {event.tag}
                  </span>
                  <span className="truncate font-data text-[11px] text-gc-dim tracking-[0.08em] uppercase tabular-nums">
                    {formatEventDateRange(event)}
                  </span>
                </div>
                <span suppressHydrationWarning className="shrink-0">
                  <StatusDot
                    tone={isUrgent ? 'alert' : 'active'}
                    blink={isUrgent}
                    label={daysLeft <= 0 ? 'Ends today' : `${daysLeft}d left`}
                  />
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
