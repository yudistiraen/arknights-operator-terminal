'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { getDaysUntil, getOngoingEvents, formatEventDateRange } from '../lib/events'

export function OngoingEvents() {
  const now = new Date()
  const ongoingEvents = useMemo(() => getOngoingEvents(now), [now.toDateString()])

  if (ongoingEvents.length === 0) return null

  return (
    <div className="ongoing-events w-full max-w-[960px] mb-10 md:mb-14 md:zoom-[1.3]">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-3.5 bg-ak-accent/60" />
        <span className="font-display text-md text-white/40 tracking-[0.15em] uppercase">
          Ongoing Events
        </span>
        <div className="flex-1 h-px bg-white/[0.06]" />
        <span className="font-display text-md text-ak-accent/40 tracking-wider uppercase">
          {ongoingEvents.length} LIVE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {ongoingEvents.map((event) => {
          const [colorR, colorG, colorB] = event.color
          const daysLeft = getDaysUntil(event.endDate, now)
          const isUrgent = daysLeft <= 1
          const accentColor = `rgb(${colorR}, ${colorG}, ${colorB})`
          const accentSoft = `rgba(${colorR}, ${colorG}, ${colorB}, 0.35)`
          const accentFaint = `rgba(${colorR}, ${colorG}, ${colorB}, 0.16)`

          return (
            <div
              key={event.id}
              className="event-card group relative flex flex-col overflow-hidden border border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16]"
              style={{ transition: 'border-color 0.25s' }}
            >
              {isUrgent && <div className="urgent-ring" aria-hidden />}
              {/* Banner */}
              <div className="relative aspect-[3/1] overflow-hidden">
                <Image
                  src={event.banner}
                  alt={event.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-[1.04]"
                  style={{ transition: 'transform 0.5s ease-out' }}
                />

                {/* Color wash from banner's dominant tone */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `linear-gradient(to top, ${accentSoft}, transparent 60%)`, mixBlendMode: 'multiply' }}
                />
                {/* Contrast gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Corner marks */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l z-10" style={{ borderColor: accentColor, opacity: 0.6 }} />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r z-10" style={{ borderColor: accentColor, opacity: 0.6 }} />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l z-10" style={{ borderColor: accentColor, opacity: 0.6 }} />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r z-10" style={{ borderColor: accentColor, opacity: 0.6 }} />

                {/* Live status dot */}
                <div className="absolute top-1.5 right-1.5 z-10">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]"
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 6px ${accentSoft}` }}
                  />
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`, opacity: 0.6 }} />

                {/* Name  */}
                <div className="absolute inset-x-0 bottom-0 px-2.5 pb-2 md:px-3 md:pb-2.5 z-10">
                  <p className="font-display text-sm md:text-[15px] text-white/90 leading-snug tracking-wide">
                    {event.name}
                  </p>
                </div>
              </div>

              {/* Footer strip */}
              <div className="border-t border-white/[0.06]">
                <div className="px-2.5">
                  <span
                    className="inline-block font-display text-[9px] md:text-[10px] tracking-[0.1em] uppercase px-1.5 py-0.5 border mb-1"
                    style={{ backgroundColor: accentFaint, borderColor: accentSoft, color: accentColor }}
                  >
                    {event.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between px-2.5 md:px-3 pb-1.5 md:pb-2 ">
                  <span className="font-display text-xs md:text-sm text-white/35 tracking-[0.1em] uppercase">
                    {formatEventDateRange(event)}
                  </span>
                  <span
                    className={`font-display text-[10px] md:text-sm tracking-wider uppercase ${isUrgent ? 'animate-[pulse-glow_2.4s_ease-in-out_infinite]' : ''}`}
                    style={{ color: isUrgent ? '#d97a6e' : accentColor }}
                    suppressHydrationWarning
                  >
                    {daysLeft <= 0 ? 'Ends Today' : `Ends in ${daysLeft}d`}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
