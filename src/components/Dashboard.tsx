'use client'

import { useRef, useMemo } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { OPERATORS } from '../data/operators'
import { altersOf } from '../lib/operators'
import { useApp } from './AppShell'
import { Footer } from './Footer'
import { OngoingEvents } from './OngoingEvents'
import { WorldMap } from './WorldMap'
import { BracketCorners, CHAMFER, DotStrip, Label, PANEL_SHADOW, Panel, StatusDot } from './ui/Console'

gsap.registerPlugin(useGSAP)

const DAILY_MISSIONS = [
  { name: 'Tactical Drill', days: [0, 1, 2, 3, 4, 5, 6], image: '/missions/Tactical_Drill.png' },
  { name: 'Aerial Threat', days: [2, 3, 5, 0], image: '/missions/Aerial_Threat.png' },
  { name: 'Cargo Escort', days: [2, 4, 6, 0], image: '/missions/Cargo_Escort.png' },
  { name: 'Resource Search', days: [1, 3, 5, 6], image: '/missions/Resource_Search.png' },
  { name: 'Solid Defense', days: [1, 4, 5, 0], image: '/missions/Solid_Defense.png' },
  { name: 'Fierce Attack', days: [1, 2, 5, 6], image: '/missions/Fierce_Attack.png' },
  { name: 'Unstoppable Charge', days: [3, 4, 6, 0], image: '/missions/Unstoppable_Charge.png' },
  { name: 'Fearless Protection', days: [2, 3, 6, 0], image: '/missions/Fearless_Protection.png' },
]

const DAY_INDICES = [1, 2, 3, 4, 5, 6, 0]
const DAY_SHORT_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function Dashboard() {
  const { hasEntered } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const today = new Date().getDay()

  const stats = useMemo(() => {
    const classes = new Set<string>()
    const factions = new Set<string>()
    let totalEntries = OPERATORS.length
    for (const op of OPERATORS) {
      classes.add(op.class)
      factions.add(op.faction)
      totalEntries += altersOf(op).length
    }
    return {
      totalOperators: totalEntries,
      totalClasses: classes.size,
      totalFactions: factions.size,
    }
  }, [])

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.dashboard-logo', '.dashboard-subtitle', '.dashboard-divider', '.stat-card', '.ongoing-events', '.mission-schedule', '.world-map-panel', '.dashboard-footer', '.hud-ambient'], { opacity: 0 })
      return
    }

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Ongoing Events and Supply Schedule read as one HUD update, so they
    // share a nested timeline anchored at position 0 to enter in lockstep.
    const panelsTl = gsap.timeline()
      .fromTo('.ongoing-events', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0)
      .fromTo('.event-card', { opacity: 0, y: 15, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.07 }, 0.2)
      .fromTo('.mission-schedule', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0)
      .fromTo('.mission-row', { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.2, stagger: 0.04 }, 0.2)

    timeline
      .fromTo('.dashboard-logo', { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.7 })
      .fromTo('.dashboard-subtitle', { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.25')
      .fromTo('.dashboard-divider', { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, '-=0.3')
      .fromTo('.stat-card', { opacity: 0, y: 20, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.08 }, '-=0.2')
      .add(panelsTl, '-=0.15')
      .fromTo('.world-map-panel', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.1')
      .fromTo('.dashboard-footer', { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2')
      .fromTo('.hud-ambient', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.3')

  }, { scope: containerRef, dependencies: [hasEntered] })

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-x-hidden flex flex-col">
      {/* HUD readouts: real status + date pinned to the viewport */}
      <div className="hud-ambient fixed inset-0 pointer-events-none z-20 hidden md:block font-data">
        <div className="absolute top-5 right-6 flex items-center gap-4">
          <StatusDot tone="scan" label="PRTS online" muted />
          <span className="text-[10px] text-gc-ghost tracking-[0.14em] tabular-nums" suppressHydrationWarning>
            {new Date().toISOString().slice(0, 10).replace(/-/g, ' · ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative z-10 flex flex-col items-center px-4 md:px-8 pt-20 pb-14">
        {/* Hero section */}
        <div className="dashboard-logo mb-6">
          <Image
            src="/Arknights_logo.webp"
            alt="Arknights"
            width={415}
            height={116}
            priority
            className="h-16 md:h-24 w-auto object-contain opacity-90"
          />
        </div>
        <div className="dashboard-subtitle flex items-center gap-3 md:gap-4 mb-12 md:mb-14">
          <span className="dashboard-divider w-1.5 h-1.5 bg-gc-signal" />
          <span className="font-display text-[10px] md:text-xs text-gc-dim tracking-[0.2em] uppercase">
            Operator Terminal
          </span>
          <span className="dashboard-divider w-1.5 h-1.5 bg-gc-scan-dim" />
        </div>

        {/* Stats strip */}
        <div className="w-full max-w-2xl grid grid-cols-3 gap-2 md:gap-3 mb-14">
          {[
            { label: 'Operators', value: stats.totalOperators },
            { label: 'Classes', value: stats.totalClasses },
            { label: 'Factions', value: stats.totalFactions },
          ].map((stat, statIndex) => (
            <div key={stat.label} className={`stat-card relative bg-gc-frame p-1.5 md:p-2 ${CHAMFER} ${PANEL_SHADOW}`}>
              <div className="border border-gc-line bg-gc-panel px-3 py-3 md:px-4 md:py-4">
                <Label>{stat.label}</Label>
                <p className="font-data text-2xl md:text-4xl font-medium text-gc-ink tracking-tight leading-none tabular-nums mt-3">
                  {stat.value}
                </p>
              </div>
              <DotStrip count={8} offset={statIndex * 3} className="mt-1.5 px-0.5" />
            </div>
          ))}
        </div>

        {/* Ongoing Events */}
        <OngoingEvents />

        {/* Supply Operations */}
        <Panel
          title="Supply Schedule"
          signal
          className="mission-schedule w-full max-w-[1250px]"
          contentClassName="p-4 md:p-5"
          headerRight={<StatusDot tone="progress" blink={false} label={`Today · ${DAY_SHORT_NAMES[today]}`} />}
        >
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
            {DAILY_MISSIONS.map((mission) => {
              const isOpenToday = mission.days.includes(today)
              const isAlwaysOpen = mission.days.length === 7

              return (
                <div key={mission.name} className="mission-row group relative flex flex-col">
                  {/* Image card */}
                  <div className={`relative overflow-hidden border ${isOpenToday ? 'border-gc-line-strong' : 'border-gc-line-soft'}`}>
                    {isOpenToday && <span className="absolute inset-0 z-20"><BracketCorners className="border-gc-invert" /></span>}

                    <div className="aspect-[225/497] relative bg-gc-base">
                      <Image
                        src={mission.image}
                        alt={mission.name}
                        fill
                        sizes="(max-width: 768px) 30vw, 15vw"
                        loading="lazy"
                        className={`object-cover ${isOpenToday ? 'opacity-90' : 'opacity-20 grayscale'}`}
                      />
                      {/* Neutral color treatment so the art sits inside the graphite UI */}
                      <div className="absolute inset-0 bg-gc-raised mix-blend-multiply opacity-40" />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 px-2 pb-2 z-10">
                        <p className={`font-body text-[13px] md:text-sm font-medium leading-tight ${isOpenToday ? 'text-gc-ink' : 'text-gc-ghost'}`}>
                          {mission.name}
                        </p>
                        <p className={`font-data text-[9px] md:text-[10px] tracking-[0.14em] uppercase mt-1 ${isOpenToday ? 'text-gc-signal' : 'text-gc-ghost'}`}>
                          {isAlwaysOpen ? 'Always open' : isOpenToday ? 'Open' : 'Closed'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Day dots — Mon → Sun */}
                  <div className="flex justify-center gap-1 md:gap-1.5 mt-2.5" aria-label={`Open on ${mission.days.map(dayIndex => DAY_SHORT_NAMES[dayIndex]).join(', ')}`}>
                    {DAY_INDICES.map((dayIndex) => {
                      const isOpenThatDay = mission.days.includes(dayIndex)
                      const isDayToday = dayIndex === today
                      return (
                        <span
                          key={dayIndex}
                          title={DAY_SHORT_NAMES[dayIndex]}
                          className={`w-1.5 h-1.5 md:w-[7px] md:h-[7px] ${
                            isOpenThatDay && isDayToday
                              ? 'bg-gc-signal'
                              : isOpenThatDay
                                ? 'bg-gc-dim'
                                : isDayToday
                                  ? 'border border-gc-signal-dim'
                                  : 'bg-gc-raised'
                          }`}
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </Panel>

        <div className="mt-10 md:mt-14 w-full flex justify-center">
          <WorldMap />
        </div>
      </div>

      <div className="dashboard-footer relative z-10">
        <Footer />
      </div>
    </div>
  )
}
