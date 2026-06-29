'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useApp } from './AppShell'
import { playClick } from '../lib/sound'

interface NavItem {
  href: string
  label: string
  code: string
  icon: React.ReactNode
  matchExact?: boolean
}

const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    label: 'Command Center',
    code: 'HOME',
    matchExact: true,
    icon: (
      <img src="/Base_icon.svg" alt="" className="w-4 h-4 opacity-80" />
    ),
  },
  {
    href: '/operator',
    label: 'Operator List',
    code: 'ROSTER',
    icon: (
      <img src="/Operator_icon.svg" alt="" className="w-4 h-4 opacity-80" />
    ),
  },
  {
    href: '/calendar',
    label: 'Calendar',
    code: 'CAL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: '????',
    code: '',
    icon: (''),
  },
]

function MuteButton() {
  const { isMuted, toggleMute } = useApp()

  return (
    <button
      onClick={() => { playClick(); toggleMute() }}
      className="sidemenu-item group relative flex items-center gap-3 w-full px-4 py-3 overflow-hidden text-white/35 hover:text-white/70 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ak-accent-bright"
      style={{ transition: 'color 0.25s' }}
    >
      <div className="sidemenu-scan absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden" style={{ transition: 'opacity 0.15s' }}>
        <div className="absolute inset-0 bg-white/[0.03]" />
        <div
          className="sidemenu-scan-line absolute top-0 w-[2px] h-full"
          style={{ left: '-2px', background: 'linear-gradient(to bottom, transparent, rgba(94,196,230,0.5), transparent)' }}
        />
      </div>
      <span className="relative z-10 shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          {isMuted ? (
            <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          ) : (
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-3.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          )}
        </svg>
      </span>
      <span className="relative z-10 font-display text-[11px] tracking-[0.1em] uppercase">
        {isMuted ? 'Unmute' : 'Mute'}
      </span>
    </button>
  )
}

function NavLink({ item, isActive, onClick }: { item: NavItem; isActive: boolean; onClick?: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={() => { playClick(); onClick?.() }}
      className={`
        sidemenu-item group relative flex items-center gap-3 w-full px-4 py-3 overflow-hidden
        ${isActive
          ? 'text-ak-accent-bright'
          : 'text-white/35 hover:text-white/70'
        }
        focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ak-accent-bright
      `}
      style={{ transition: 'color 0.25s' }}
    >
      {isActive && (
        <div className="absolute left-0 top-0 w-[2px] h-full bg-ak-accent-bright shadow-[0_0_8px_rgba(94,196,230,0.4)]" />
      )}

      <div className="sidemenu-scan absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden" style={{ transition: 'opacity 0.15s' }}>
        <div className="absolute inset-0 bg-white/[0.03]" />
        <div
          className="sidemenu-scan-line absolute top-0 w-[2px] h-full"
          style={{ left: '-2px', background: 'linear-gradient(to bottom, transparent, rgba(94,196,230,0.5), transparent)' }}
        />
      </div>

      <span className="relative z-10 shrink-0">{item.icon}</span>
      <span className="relative z-10 font-display text-[11px] tracking-[0.1em] uppercase whitespace-nowrap">
        {item.label}
      </span>
      <span className="relative z-10 ml-auto font-display text-[9px] text-white/15 tracking-widest">
        {item.code}
      </span>
    </Link>
  )
}

export function SideMenu() {
  const pathname = usePathname()
  const { hasEntered, sidebarOpen, toggleSidebar } = useApp()
  const [mobileOpen, setMobileOpen] = useState(false)

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
        className="fixed top-3 left-3 z-50 md:hidden w-8 h-8 flex items-center justify-center bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:bg-white/[0.14] active:scale-[0.95] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
        style={{ transition: 'background-color 0.2s, transform 0.15s' }}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/50">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>

      {/* Desktop toggle (visible when sidebar is hidden) */}
      {!sidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 hidden md:flex w-8 h-8 items-center justify-center bg-white/[0.06] backdrop-blur-md border border-white/[0.1] shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:bg-white/[0.12] hover:border-white/[0.18] active:scale-[0.95] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
          style={{ transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s' }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/50">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      )}

      {/* Backdrop (mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
          style={{ transition: 'opacity 0.3s' }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 w-[220px]
          bg-ak-bg/95 backdrop-blur-md border-r border-white/[0.06]
          shadow-[4px_0_24px_rgba(0,0,0,0.4)]
          flex flex-col
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          ${sidebarOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}
        `}
        style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-4 pt-5 pb-4">
          <div>
            <Link href="/" onClick={closeMobile} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright">
              <img
                src="/Arknights_logo.webp"
                alt="Arknights"
                className="h-8 w-auto object-contain opacity-70"
              />
            </Link>
            <div className="flex items-center gap-2 mt-2.5">
              <div className="w-1.5 h-1.5 bg-ak-accent rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]" />
              <span className="font-display text-[9px] text-white/20 tracking-[0.15em] uppercase">
                Operator Terminal
              </span>
            </div>
          </div>

          {/* Collapse button (desktop) */}
          <button
            onClick={toggleSidebar}
            className="hidden md:flex mt-0.5 w-6 h-6 items-center justify-center text-white/20 hover:text-white/50 cursor-pointer active:scale-[0.9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright"
            style={{ transition: 'color 0.2s, transform 0.15s' }}
            title="Hide sidebar"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
              <path d="M11 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 5h2v14h-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent mx-2" />

        {/* Navigation */}
        <nav className="flex-1 py-3 flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = item.matchExact
              ? pathname === item.href
              : pathname.startsWith(item.href)
            return <NavLink key={item.href} item={item} isActive={isActive} onClick={closeMobile} />
          })}
        </nav>

        <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent mx-2" />

        {/* Bottom section */}
        <div className="py-2">
          <MuteButton />
        </div>

        <div className="px-4 pb-4 pt-1">
          <p className="font-display text-[8px] text-white/10 tracking-wider leading-relaxed">
            RHODES ISLAND<br />TERMINAL v2.0
          </p>
        </div>
      </aside>
    </>
  )
}
