'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useApp } from './AppShell'
import { playClick } from '../lib/sound'
import { DotStrip, FOCUS_RING } from './ui/Console'

const SPRING_EASE = 'cubic-bezier(0.22, 1.2, 0.36, 1)'

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
  matchExact?: boolean
}

const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    label: 'Command Center',
    matchExact: true,
    icon: (
      <img src="/Base_icon.svg" alt="" className="w-5 h-5 opacity-80 group-aria-[current=page]:opacity-100" />
    ),
  },
  {
    href: '/operator',
    label: 'Operator List',
    icon: (
      <img src="/Operator_icon.svg" alt="" className="w-5 h-5 opacity-80 group-aria-[current=page]:opacity-100" />
    ),
  },
  {
    href: '/calendar',
    label: 'Calendar',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
      </svg>
    ),
  },
  {
    href: '/recruit',
    label: 'Recruit',
    icon: (
      <img src="/Recruit_icon.svg" alt="" className="w-5 h-5 opacity-80 group-aria-[current=page]:opacity-100" />
    ),
  },
  {
    href: '/items',
    label: 'Items',
    icon: (
      <img src="/Depot_icon.svg" alt="" className="w-5 h-5 opacity-80 group-aria-[current=page]:opacity-100" />
    ),
  },
  {
    href: '/planner',
    label: 'Operator Training',
    icon: (
      <img src="/Training_icon.png" alt="" className="w-5 h-5 object-contain opacity-80 group-aria-[current=page]:opacity-100" />
    ),
  },
]

const ROW_CLASSES = `
  sidemenu-item group relative flex items-center w-full h-11 overflow-hidden cursor-pointer
  focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-gc-scan
`

function RowLabel({ isCollapsed, children }: { isCollapsed: boolean; children: React.ReactNode }) {
  return (
    <span
      className={`relative z-10 font-data text-[12px] tracking-[0.14em] uppercase whitespace-nowrap ${isCollapsed ? 'md:opacity-0' : 'opacity-100'}`}
      style={{ transition: 'opacity 0.2s' }}
    >
      {children}
    </span>
  )
}

function RowIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative z-10 shrink-0 flex items-center justify-center w-[72px] h-full group-active:scale-[0.9]" style={{ transition: 'transform 0.15s' }}>
      {children}
    </span>
  )
}

// Hover: raised wash fades in while a cyan scan line sweeps across (sidemenu-scan keyframe, transform only).
function HoverScan() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 group-active:opacity-70" style={{ transition: 'opacity 0.15s ease-out' }}>
      <div className="absolute inset-0 bg-gc-raised/60" />
      <div className="sidemenu-scan-line absolute top-0 -left-0.5 w-0.5 h-full bg-[linear-gradient(to_bottom,transparent,rgba(79,214,224,0.5),transparent)]" />
    </div>
  )
}

function Divider({ isCollapsed }: { isCollapsed: boolean }) {
  // Insets match the icon column's padding in both states: 16px each side of the 72px rail when collapsed.
  return (
    <div
      className={`h-px mx-4 bg-gc-line origin-left ${isCollapsed ? 'md:scale-x-[0.1724]' : 'scale-x-100'}`}
      style={{ transition: `transform 0.3s ${SPRING_EASE}` }}
    />
  )
}

function MuteButton({ isCollapsed }: { isCollapsed: boolean }) {
  const { isMuted, toggleMute } = useApp()
  const label = isMuted ? 'Unmute' : 'Mute'

  return (
    <button
      onClick={() => { playClick(); toggleMute() }}
      className={`${ROW_CLASSES} text-gc-dim hover:text-gc-ink`}
      title={isCollapsed ? label : undefined}
      aria-label={label}
    >
      <HoverScan />
      <RowIcon>
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          {isMuted ? (
            <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          ) : (
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-3.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          )}
        </svg>
      </RowIcon>
      <RowLabel isCollapsed={isCollapsed}>{label}</RowLabel>
    </button>
  )
}

// Round tab straddling the sidebar's right edge. Lives outside the <aside> (which clips overflow) and
// follows it with the same 192px translate, so its center always sits on the border line.
function CollapseButton({ isCollapsed, onToggle }: { isCollapsed: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={() => { playClick(); onToggle() }}
      className={`
        group fixed top-[30px] left-[250px] z-[51] hidden md:flex items-center justify-center w-7 h-7 rounded-full
        bg-gc-raised border border-gc-line-strong text-gc-text hover:text-gc-ink cursor-pointer
        shadow-[0_0_0_3px_var(--color-gc-frame),0_4px_12px_-2px_rgba(0,0,0,0.6)]
        ${isCollapsed ? '-translate-x-[192px]' : 'translate-x-0'}
        ${FOCUS_RING}
      `}
      style={{ transition: `transform 0.3s ${SPRING_EASE}` }}
      aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      aria-expanded={!isCollapsed}
    >
      <span className="absolute inset-0 rounded-full bg-gc-float opacity-0 group-hover:opacity-100 pointer-events-none" style={{ transition: 'opacity 0.15s ease-out' }} />
      <span className="relative flex group-active:scale-[0.85]" style={{ transition: 'transform 0.15s' }}>
        <svg
          viewBox="0 0 24 24"
          className={`w-3.5 h-3.5 fill-none stroke-current stroke-[2.5] ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}
          style={{ transition: `transform 0.3s ${SPRING_EASE}` }}
        >
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  )
}

function NavLink({ item, isActive, isCollapsed, onClick }: { item: NavItem; isActive: boolean; isCollapsed: boolean; onClick?: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={() => { playClick(); onClick?.() }}
      className={`${ROW_CLASSES} ${isActive ? 'text-gc-scan' : 'text-gc-dim hover:text-gc-ink'}`}
      title={isCollapsed ? item.label : undefined}
      aria-label={item.label}
      aria-current={isActive ? 'page' : undefined}
    >
      {/* Active: cyan rail on the left edge + a faint cyan wash fading to the right. */}
      <div
        className={`absolute left-0 top-2 bottom-2 w-0.5 bg-gc-scan drop-shadow-[0_0_6px_rgba(79,214,224,0.4)] origin-center pointer-events-none ${isActive ? 'scale-y-100' : 'scale-y-0'}`}
        style={{ transition: `transform 0.25s ${SPRING_EASE}` }}
      />
      <div
        className={`absolute inset-0 bg-linear-to-r from-gc-scan/8 to-transparent pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.25s ease-out' }}
      />
      <HoverScan />
      <RowIcon>{item.icon}</RowIcon>
      <RowLabel isCollapsed={isCollapsed}>{item.label}</RowLabel>
    </Link>
  )
}

export function SideMenu() {
  const pathname = usePathname()
  const { hasEntered, sidebarOpen, toggleSidebar } = useApp()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isCollapsed = !sidebarOpen

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [mobileOpen])

  if (!hasEntered) return null

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className={`fixed top-3 left-3 z-50 md:hidden w-10 h-10 flex items-center justify-center bg-gc-frame border border-gc-line-strong hover:bg-gc-raised active:scale-[0.95] cursor-pointer ${FOCUS_RING}`}
        style={{ transition: 'transform 0.15s' }}
        aria-label="Open menu"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gc-text">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>

      {/* Backdrop (mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Sidebar — 264px expanded, 72px icon rail collapsed. Collapsing slides the panel left by 192px
          and its content back right by the same amount, so the icon column never moves. */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 w-[264px] overflow-hidden
          bg-gc-frame border-r border-gc-line
          shadow-[1px_0_0_rgba(255,255,255,0.03),8px_0_32px_-8px_rgba(0,0,0,0.7)]
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isCollapsed ? 'md:-translate-x-[192px]' : 'md:translate-x-0'}
        `}
        style={{ transition: `transform 0.3s ${SPRING_EASE}` }}
      >
        <div
          className={`flex flex-col h-full w-full ${isCollapsed ? 'md:translate-x-[192px]' : 'translate-x-0'}`}
          style={{ transition: `transform 0.3s ${SPRING_EASE}` }}
        >
          {/* Header — logo and monogram share the same 88px slot so nav rows never shift */}
          <div className="relative h-[88px] shrink-0">
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center ${isCollapsed ? 'md:opacity-0 md:pointer-events-none' : 'opacity-100'}`}
              style={{ transition: 'opacity 0.2s' }}
            >
              <Link href="/" onClick={closeMobile} className={`block w-fit hover:opacity-80 active:scale-[0.98] ${FOCUS_RING}`} style={{ transition: 'opacity 0.15s, transform 0.15s' }} tabIndex={isCollapsed ? -1 : undefined}>
                <Image
                  src="/Arknights_logo.webp"
                  alt="Arknights"
                  width={415}
                  height={116}
                  className="h-9 w-auto object-contain opacity-70"
                />
              </Link>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-1.5 h-1.5 bg-gc-signal" />
                <span className="font-data text-[10px] text-gc-dim tracking-[0.14em] uppercase">
                  Operator Terminal
                </span>
              </div>
            </div>

            <div
              className={`absolute top-0 left-0 w-[72px] h-full hidden md:flex items-center justify-center ${isCollapsed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              style={{ transition: 'opacity 0.2s' }}
            >
              <Link
                href="/"
                className={`relative w-10 h-10 flex items-center justify-center border border-gc-line-strong hover:bg-gc-raised active:scale-[0.94] ${FOCUS_RING}`}
                style={{ transition: 'transform 0.15s' }}
                title="Command Center"
                aria-label="Command Center"
                tabIndex={isCollapsed ? undefined : -1}
              >
                <span className="font-display text-[11px] text-gc-text tracking-[0.1em]">RI</span>
                <span className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-gc-signal" />
              </Link>
            </div>
          </div>

          <Divider isCollapsed={isCollapsed} />

          {/* Navigation */}
          <nav className="flex-1 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = item.matchExact
                ? pathname === item.href
                : pathname.startsWith(item.href)
              return <NavLink key={item.href} item={item} isActive={isActive} isCollapsed={isCollapsed} onClick={closeMobile} />
            })}
          </nav>

          <Divider isCollapsed={isCollapsed} />

          {/* Bottom section */}
          <div className="py-3 flex flex-col gap-1">
            <MuteButton isCollapsed={isCollapsed} />
          </div>

          {/* Footer — full label and short version cross-fade in the same slot */}
          <div className="relative h-14 shrink-0">
            <div
              className={`absolute inset-0 flex flex-col justify-center pl-[26px] gap-2 font-data text-[10px] text-gc-ghost tracking-[0.14em] leading-none ${isCollapsed ? 'md:opacity-0' : 'opacity-100'}`}
              style={{ transition: 'opacity 0.2s' }}
            >
              <span>RHODES ISLAND · TERMINAL v0.7</span>
              <DotStrip count={14} offset={3} />
            </div>
            <p
              className={`absolute top-0 left-0 w-[72px] h-full hidden md:flex items-center justify-center font-data text-[10px] text-gc-ghost tracking-[0.14em] ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.2s' }}
              aria-hidden
            >
              v0.5
            </p>
          </div>
        </div>
      </aside>

      <CollapseButton isCollapsed={isCollapsed} onToggle={toggleSidebar} />
    </>
  )
}
