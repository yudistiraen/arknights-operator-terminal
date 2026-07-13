'use client'

import { useRef, useMemo } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { OPERATORS } from '../data/operators'
import { useApp } from './AppShell'
import { Footer } from './Footer'
import { OngoingEvents } from './OngoingEvents'
import { WorldMap } from './WorldMap'

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
      if (op.alter) totalEntries++
    }
    return {
      totalOperators: totalEntries,
      totalClasses: classes.size,
      totalFactions: factions.size,
    }
  }, [])

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.dashboard-logo', '.dashboard-title', '.dashboard-subtitle', '.dashboard-divider', '.stat-card', '.ongoing-events', '.mission-schedule', '.world-map-panel', '.dashboard-cta', '.dashboard-footer', '.hud-ambient', '.hud-rail'], { opacity: 0 })
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
      .fromTo('.dashboard-title', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
      .fromTo('.dashboard-subtitle', { opacity: 0, letterSpacing: '0.5em' }, { opacity: 1, letterSpacing: '0.2em', duration: 0.5, ease: 'power2.out' }, '-=0.25')
      .fromTo('.dashboard-divider', { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, '-=0.3')
      .fromTo('.stat-card', { opacity: 0, y: 20, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.08 }, '-=0.2')
      .add(panelsTl, '-=0.15')
      .fromTo('.world-map-panel', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.1')
      .fromTo('.dashboard-cta', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.15')
      .fromTo('.dashboard-footer', { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2')
      .fromTo('.hud-ambient, .hud-rail', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.3')

  }, { scope: containerRef, dependencies: [hasEntered] })

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-ak-bg overflow-x-hidden flex flex-col">
      {/* Background layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        {/* Faint hex grid, echoing the Terra map's hex mosaic; masked so it
            concentrates near the top and dissolves before the map section */}
        <div
          className="absolute inset-0 opacity-[0.03] mask-[radial-gradient(ellipse_90%_70%_at_50%_0%,black,transparent_75%)]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z' fill='%233ba4c9' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '56px 98px',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,164,201,0.06) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 100%, rgba(212,168,67,0.03) 0%, transparent 50%)' }} />
      </div>

      {/* HUD readouts: decorative terminal chrome pinned to the viewport */}
      <div className="hud-ambient fixed inset-0 pointer-events-none z-20 hidden md:block font-display">
        <div className="absolute top-4 right-5 flex items-center gap-2.5">
          <span className="w-1 h-1 rounded-full bg-ak-accent/60 animate-[pulse-glow_2.5s_ease-in-out_infinite]" />
          <span className="text-[9px] text-white/25 tracking-[0.25em] uppercase">PRTS // Online</span>
          <span className="text-[9px] text-ak-accent/35 tracking-[0.2em]" suppressHydrationWarning>
            {new Date().toISOString().slice(0, 10).replace(/-/g, ' · ')}
          </span>
        </div>
        <div className="absolute bottom-9 right-5 text-right">
          <p className="text-[9px] text-white/15 tracking-[0.25em] uppercase">Terra Surveillance Grid</p>
        </div>
      </div>

      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />

      {/* Content — centered vertically */}
      <div className="flex-1 relative z-10 flex flex-col items-center justify-center px-4 py-16">
        {/* Side rails: hairline + rotated label filling the wide-screen margins */}
        <div className="hud-rail hidden xl:flex absolute left-7 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
          <div className="w-px h-28 bg-gradient-to-b from-transparent via-ak-accent/20 to-ak-accent/20" />
          <span className="font-display text-[9px] text-white/15 tracking-[0.35em] uppercase [writing-mode:vertical-rl]">
            Rhodes Island Terminal
          </span>
          <div className="w-px h-28 bg-gradient-to-b from-ak-accent/20 via-ak-accent/20 to-transparent" />
        </div>
        <div className="hud-rail hidden xl:flex absolute right-7 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
          <div className="w-px h-28 bg-gradient-to-b from-transparent via-ak-accent/20 to-ak-accent/20" />
          <span className="font-display text-[9px] text-white/15 tracking-[0.35em] uppercase [writing-mode:vertical-rl]">
            Operator Records
          </span>
          <div className="w-px h-28 bg-gradient-to-b from-ak-accent/20 via-ak-accent/20 to-transparent" />
        </div>
        {/* Hero section */}
        <div className="dashboard-logo mb-5 md:mb-6">
          <Image
            src="/Arknights_logo.webp"
            alt="Arknights"
            width={415}
            height={116}
            priority
            className="h-16 md:h-24 w-auto object-contain drop-shadow-[0_0_30px_rgba(59,164,201,0.12)]"
          />
        </div>
        <div className="dashboard-subtitle flex items-center gap-3 md:gap-4 mb-12 md:mb-16">
          <div className="dashboard-divider w-8 md:w-12 h-px bg-ak-accent/30 origin-right" />
          <span className="font-display text-[10px] md:text-xs text-ak-accent-bright/50 tracking-[0.2em] uppercase">
            Operator Terminal
          </span>
          <div className="dashboard-divider w-8 md:w-12 h-px bg-ak-accent/30 origin-left" />
        </div>

        {/* Stats strip */}
        <div className="w-full max-w-2xl grid grid-cols-3 gap-2 md:gap-3 mb-10 md:mb-14">
          {[
            { label: 'Operators', value: stats.totalOperators },
            { label: 'Classes', value: stats.totalClasses },
            { label: 'Factions', value: stats.totalFactions },
          ].map((stat) => (
            <div
              key={stat.label}
              className="stat-card relative bg-white/[0.03] border border-white/[0.07] p-3 md:p-4 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ak-accent/30 via-ak-accent/10 to-transparent" />
              <span className="font-display text-2xl md:text-4xl font-bold text-white/85 tracking-tight leading-none">
                {stat.value}
              </span>
              <p className="font-display text-[9px] md:text-[11px] text-white/35 tracking-[0.15em] uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Ongoing Events */}
        <OngoingEvents />

        {/* Supply Operations */}
        <div className="mission-schedule w-full max-w-[960px]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-3.5 bg-ak-accent/60" />
            <span className="font-display text-md md:text-xs text-white/40 tracking-[0.15em] uppercase">
              Supply Schedule
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="font-display text-md text-ak-accent/40 tracking-wider uppercase">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][today]}
            </span>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-3.5">
            {DAILY_MISSIONS.map((mission) => {
              const isOpenToday = mission.days.includes(today)
              const isAlwaysOpen = mission.days.length === 7

              return (
                <div
                  key={mission.name}
                  className="mission-row group relative flex flex-col"
                >
                  {/* Image card */}
                  <div className={`relative overflow-hidden border ${
                    isOpenToday
                      ? 'border-ak-accent/30 shadow-[0_0_15px_rgba(59,164,201,0.12)]'
                      : 'border-white/[0.06]'
                  }`}>
                    {/* Corner marks */}
                    <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l z-10 ${isOpenToday ? 'border-ak-accent/50' : 'border-white/10'}`} />
                    <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r z-10 ${isOpenToday ? 'border-ak-accent/50' : 'border-white/10'}`} />
                    <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l z-10 ${isOpenToday ? 'border-ak-accent/50' : 'border-white/10'}`} />
                    <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r z-10 ${isOpenToday ? 'border-ak-accent/50' : 'border-white/10'}`} />

                    {/* Image */}
                    <div className="aspect-[225/497] relative">
                      <Image
                        src={mission.image}
                        alt={mission.name}
                        fill
                        sizes="(max-width: 768px) 30vw, 15vw"
                        loading="lazy"
                        className={`object-cover ${
                          isOpenToday ? 'opacity-90' : 'opacity-25 grayscale'
                        }`}
                      />

                      {/* Scan line overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.04]"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,164,201,0.3) 2px, rgba(59,164,201,0.3) 3px)',
                        }}
                      />

                      {/* Bottom gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ak-bg via-ak-bg/70 to-transparent" />

                      {/* Status badge */}
                      {isOpenToday && (
                        <div className="absolute top-1.5 right-1.5 z-10">
                          <div className="w-1.5 h-1.5 rounded-full bg-ak-accent shadow-[0_0_6px_rgba(59,164,201,0.6)] animate-[pulse-glow_2s_ease-in-out_infinite]" />
                        </div>
                      )}

                      {/* Mission name overlay */}
                      <div className="absolute inset-x-0 bottom-0 px-1.5 pb-1.5 z-10">
                        <p className={`font-display text-sm leading-tight tracking-wide ${
                          isOpenToday ? 'text-white/90' : 'text-white/35'
                        }`}>
                          {mission.name}
                        </p>
                        {isAlwaysOpen && (
                          <span className="font-display text-xs text-ak-gold/50 tracking-widest uppercase">
                            Always
                          </span>
                        )}
                      </div>

                      {/* Top accent line */}
                      {isOpenToday && (
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ak-accent/50 to-transparent" />
                      )}
                    </div>
                  </div>

                  {/* Day dots */}
                  <div className="flex justify-center gap-1 mt-2">
                    {DAY_INDICES.map((dayIdx, i) => {
                      const isActive = mission.days.includes(dayIdx)
                      const isDayToday = dayIdx === today

                      return (
                        <div
                          key={dayIdx}
                          className="flex flex-col items-center gap-0.5"
                          title={['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}
                        >
                          <div
                            className={`w-[5px] h-[5px] md:w-[7px] md:h-[7px] ${
                              isActive && isDayToday
                                ? 'bg-ak-accent shadow-[0_0_4px_rgba(59,164,201,0.5)]'
                                : isActive
                                  ? 'bg-ak-accent/25'
                                  : isDayToday
                                    ? 'border border-white/15 bg-transparent'
                                    : 'bg-white/[0.05]'
                            }`}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

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
