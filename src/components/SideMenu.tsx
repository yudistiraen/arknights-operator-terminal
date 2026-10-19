'use client'

import { useState, useEffect, useRef } from 'react'
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
  {
    href: '/stream-layout',
    label: 'Stream Layout',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zM10 7.5v7l5.5-3.5L10 7.5z" />
      </svg>
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

function MuteIcon({ isMuted }: { isMuted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      {isMuted ? (
        <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
      ) : (
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-3.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
      )}
    </svg>
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
        <MuteIcon isMuted={isMuted} />
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

const FAB_SIZE = 56
const FAB_EDGE_GAP = 16
const FAB_ITEM_SIZE = 44
const FAB_ITEM_GAP = 10
const FAB_ITEM_EDGE_GAP = 8
const FAB_DRAG_THRESHOLD = 6
const FAB_ITEM_STAGGER_MS = 35
// Screen-space degrees (0° = right, 90° = down), so increasing angles sweep clockwise.
// Every icon launches from bottom-left and orbits clockwise to its slot.
const FAB_ORBIT_START_ANGLE = 135
const FAB_FIRST_RING_RADIUS = FAB_SIZE / 2 + FAB_ITEM_GAP + FAB_ITEM_SIZE / 2
const FAB_RING_SPACING = FAB_ITEM_SIZE + FAB_ITEM_GAP
const FAB_MAX_RINGS = 4
const FAB_ORBIT_EASE = 'cubic-bezier(0.34, 1.25, 0.5, 1)'

interface FabOffset { x: number; y: number }

// Offset is measured from the default bottom-right resting spot, so it's always <= 0 on both axes.
function clampFabOffset(offset: FabOffset): FabOffset {
  const minX = -(window.innerWidth - FAB_SIZE - FAB_EDGE_GAP * 2)
  const minY = -(window.innerHeight - FAB_SIZE - FAB_EDGE_GAP * 2)
  return {
    x: Math.min(0, Math.max(minX, offset.x)),
    y: Math.min(0, Math.max(minY, offset.y)),
  }
}

interface FabMenuEntry {
  key: string
  label: string
  icon: React.ReactNode
  href?: string
  isActive?: boolean
  onSelect?: () => void
}

interface FabOrbitSlot { angle: number; radius: number }

// Packs icons onto rings around the FAB: walk clockwise from bottom-left in 1° steps, claiming a slot
// whenever the icon would sit fully on-screen and clear of the previous one. Whatever doesn't fit on
// ring 1 moves out to ring 2, and so on. Angles stay unwrapped (>= start) so the open sweep is always clockwise.
function computeFabOrbitSlots(itemCount: number, offset: FabOffset): FabOrbitSlot[] {
  const fallbackSlot: FabOrbitSlot = { angle: FAB_ORBIT_START_ANGLE, radius: FAB_FIRST_RING_RADIUS }
  if (typeof window === 'undefined') return Array.from({ length: itemCount }, () => fallbackSlot)
  const slots: FabOrbitSlot[] = []
  const centerX = window.innerWidth - FAB_EDGE_GAP - FAB_SIZE / 2 + offset.x
  const centerY = window.innerHeight - FAB_EDGE_GAP - FAB_SIZE / 2 + offset.y
  const minCenter = FAB_ITEM_EDGE_GAP + FAB_ITEM_SIZE / 2

  for (let ringIndex = 0; ringIndex < FAB_MAX_RINGS && slots.length < itemCount; ringIndex++) {
    const radius = FAB_FIRST_RING_RADIUS + ringIndex * FAB_RING_SPACING
    const slotSpacingDegrees = (2 * Math.asin(Math.min(1, FAB_RING_SPACING / 2 / radius)) * 180) / Math.PI
    let firstSlotAngle: number | null = null
    let lastSlotAngle = -Infinity

    for (let angle = FAB_ORBIT_START_ANGLE; angle < FAB_ORBIT_START_ANGLE + 360 && slots.length < itemCount; angle++) {
      const radians = (angle * Math.PI) / 180
      const itemX = centerX + radius * Math.cos(radians)
      const itemY = centerY + radius * Math.sin(radians)
      const isOnScreen =
        itemX >= minCenter && itemX <= window.innerWidth - minCenter &&
        itemY >= minCenter && itemY <= window.innerHeight - minCenter
      if (!isOnScreen) continue
      if (angle - lastSlotAngle < slotSpacingDegrees) continue
      if (firstSlotAngle !== null && firstSlotAngle + 360 - angle < slotSpacingDegrees) break
      firstSlotAngle ??= angle
      lastSlotAngle = angle
      slots.push({ angle, radius })
    }
  }
  while (slots.length < itemCount) slots.push(fallbackSlot)
  return slots
}

function FabMenuButton({ entry, slot, itemIndex, itemCount, isOpen, isDragging, onNavigate }: {
  entry: FabMenuEntry
  slot: FabOrbitSlot
  itemIndex: number
  itemCount: number
  isOpen: boolean
  isDragging: boolean
  onNavigate: () => void
}) {
  // Open: first slot launches first. Close: last slot leaves first, so the orbit unwinds back to bottom-left.
  const delayMs = (isOpen ? itemIndex : itemCount - 1 - itemIndex) * FAB_ITEM_STAGGER_MS
  const angle = isOpen ? slot.angle : FAB_ORBIT_START_ANGLE
  // While dragging, slots are re-packed every frame — snap instead of re-orbiting.
  const orbitTransition = isDragging ? 'none' : `transform 0.55s ${FAB_ORBIT_EASE} ${delayMs}ms`
  const controlTransition = isDragging ? 'none' : `${orbitTransition}, opacity 0.22s ease-out ${delayMs}ms`
  const className = `
    group absolute -left-[22px] -top-[22px] flex items-center justify-center rounded-full cursor-pointer [-webkit-tap-highlight-color:transparent]
    border ${entry.isActive ? 'border-gc-scan/70 text-gc-scan' : 'border-gc-line-strong text-gc-text hover:text-gc-ink'}
    bg-gc-raised shadow-[0_0_0_3px_rgba(29,30,32,0.9),0_6px_16px_-4px_rgba(0,0,0,0.7),0_0_18px_-6px_rgba(79,214,224,0.25)]
    ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
    ${FOCUS_RING}
  `
  // The icon counter-rotates by the same angle with the same timing, so it stays upright mid-orbit.
  const style: React.CSSProperties = {
    width: FAB_ITEM_SIZE,
    height: FAB_ITEM_SIZE,
    transform: `rotate(${-angle}deg) scale(${isOpen ? 1 : 0.35})`,
    opacity: isOpen ? 1 : 0,
    transition: controlTransition,
  }
  const inner = (
    <>
      <span className="absolute inset-0 rounded-full bg-gc-float opacity-0 group-hover:opacity-100 pointer-events-none" style={{ transition: 'opacity 0.15s ease-out' }} />
      <span className="relative flex group-active:scale-[0.85]" style={{ transition: 'transform 0.15s' }}>{entry.icon}</span>
    </>
  )
  const control = entry.href ? (
    <Link
      href={entry.href}
      onClick={() => { playClick(); onNavigate() }}
      className={className}
      style={style}
      title={entry.label}
      aria-label={entry.label}
      aria-current={entry.isActive ? 'page' : undefined}
      tabIndex={isOpen ? undefined : -1}
    >
      {inner}
    </Link>
  ) : (
    <button
      onClick={() => { playClick(); entry.onSelect?.() }}
      className={className}
      style={style}
      title={entry.label}
      aria-label={entry.label}
      tabIndex={isOpen ? undefined : -1}
    >
      {inner}
    </button>
  )

  // Zero-size pivot on the FAB center; rotating it carries the arm (and the icon at its tip) around the orbit.
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: FAB_SIZE / 2, top: FAB_SIZE / 2, transform: `rotate(${angle}deg)`, transition: orbitTransition }}
    >
      <div className="absolute" style={{ transform: `translateX(${slot.radius}px)` }}>
        {control}
      </div>
    </div>
  )
}

// Mobile-only (< md) navigation: a draggable floating button resting bottom-right that orbits the
// sidebar's destinations around itself as icons.
function MobileNavFab() {
  const pathname = usePathname()
  const { isMuted, toggleMute } = useApp()
  const [isOpen, setIsOpen] = useState(false)
  const [offset, setOffset] = useState<FabOffset>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef<{ pointerX: number; pointerY: number; offset: FabOffset; hasMoved: boolean } | null>(null)

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    const handleResize = () => setOffset(previous => clampFabOffset(previous))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const handleOutsidePointer = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    window.addEventListener('pointerdown', handleOutsidePointer)
    return () => {
      window.removeEventListener('keydown', handleEscape)
      window.removeEventListener('pointerdown', handleOutsidePointer)
    }
  }, [isOpen])

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    dragStartRef.current = { pointerX: event.clientX, pointerY: event.clientY, offset, hasMoved: false }
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const dragStart = dragStartRef.current
    if (!dragStart) return
    const deltaX = event.clientX - dragStart.pointerX
    const deltaY = event.clientY - dragStart.pointerY
    if (!dragStart.hasMoved && Math.hypot(deltaX, deltaY) < FAB_DRAG_THRESHOLD) return
    if (!dragStart.hasMoved) {
      dragStart.hasMoved = true
      setIsDragging(true)
    }
    setOffset(clampFabOffset({ x: dragStart.offset.x + deltaX, y: dragStart.offset.y + deltaY }))
  }

  const handlePointerEnd = () => {
    const dragStart = dragStartRef.current
    dragStartRef.current = null
    setIsDragging(false)
    if (dragStart && !dragStart.hasMoved) {
      playClick()
      setIsOpen(previous => !previous)
    }
  }

  const handleKeyboardToggle = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    playClick()
    setIsOpen(previous => !previous)
  }

  const entries: FabMenuEntry[] = [
    ...NAV_ITEMS.map(item => ({
      key: item.href,
      label: item.label,
      icon: item.icon,
      href: item.href,
      isActive: item.matchExact ? pathname === item.href : pathname.startsWith(item.href),
    })),
    {
      key: 'mute',
      label: isMuted ? 'Unmute' : 'Mute',
      onSelect: toggleMute,
      icon: <MuteIcon isMuted={isMuted} />,
    },
  ]
  // Recomputed every render so the orbit follows the FAB while it's dragged.
  const orbitSlots = computeFabOrbitSlots(entries.length, offset)
  const barTransition = `transform 0.32s ${SPRING_EASE}, opacity 0.2s ease-out`

  return (
    <div
      ref={containerRef}
      className="fixed z-[100] md:hidden"
      style={{
        right: FAB_EDGE_GAP,
        bottom: FAB_EDGE_GAP,
        width: FAB_SIZE,
        height: FAB_SIZE,
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
    >
      <nav aria-label="Main menu" id="mobile-fab-menu">
        {entries.map((entry, itemIndex) => (
          <FabMenuButton
            key={entry.key}
            entry={entry}
            slot={orbitSlots[itemIndex]}
            itemIndex={itemIndex}
            itemCount={entries.length}
            isOpen={isOpen}
            isDragging={isDragging}
            onNavigate={() => setIsOpen(false)}
          />
        ))}
      </nav>

      <button
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={() => { dragStartRef.current = null; setIsDragging(false) }}
        onKeyDown={handleKeyboardToggle}
        className={`
          group absolute inset-0 flex items-center justify-center rounded-full touch-none select-none [-webkit-tap-highlight-color:transparent]
          ${isDragging ? 'cursor-grabbing' : 'cursor-pointer'}
          bg-gc-frame border ${isOpen ? 'border-gc-scan/70' : 'border-gc-line-strong'}
          shadow-[0_0_0_4px_rgba(11,11,12,0.55),0_10px_28px_-6px_rgba(0,0,0,0.8),0_0_24px_-8px_rgba(79,214,224,0.35)]
          ${FOCUS_RING}
        `}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-fab-menu"
      >
        <span className="absolute inset-0 rounded-full bg-gc-raised opacity-0 group-hover:opacity-100 pointer-events-none" style={{ transition: 'opacity 0.15s ease-out' }} />
        <span
          className={`absolute inset-1 rounded-full border border-gc-scan/40 pointer-events-none ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ transition: `transform 0.35s ${SPRING_EASE}, opacity 0.2s ease-out` }}
        />
        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-gc-signal pointer-events-none" />
        <span
          className={`relative w-5 h-4 group-active:scale-[0.85] ${isDragging ? 'scale-[0.9]' : ''}`}
          style={{ transition: 'transform 0.15s' }}
        >
          {/* Three bars fold into an X: outer bars slide to center and rotate, middle bar collapses. */}
          <span
            className={`absolute left-0 top-0 w-full h-0.5 bg-gc-ink origin-center ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            style={{ transition: barTransition }}
          />
          <span
            className={`absolute left-0 top-[7px] w-full h-0.5 bg-gc-ink origin-center ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}
            style={{ transition: barTransition }}
          />
          <span
            className={`absolute left-0 top-[14px] w-full h-0.5 bg-gc-ink origin-center ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            style={{ transition: barTransition }}
          />
        </span>
      </button>
    </div>
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
  const isCollapsed = !sidebarOpen

  if (!hasEntered) return null

  return (
    <>
      {/* Sidebar — 264px expanded, 72px icon rail collapsed. Collapsing slides the panel left by 192px
          and its content back right by the same amount, so the icon column never moves. */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 w-[264px] overflow-hidden hidden md:block
          bg-gc-frame border-r border-gc-line
          shadow-[1px_0_0_rgba(255,255,255,0.03),8px_0_32px_-8px_rgba(0,0,0,0.7)]
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
              <Link href="/" className={`block w-fit hover:opacity-80 active:scale-[0.98] ${FOCUS_RING}`} style={{ transition: 'opacity 0.15s, transform 0.15s' }} tabIndex={isCollapsed ? -1 : undefined}>
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
              return <NavLink key={item.href} item={item} isActive={isActive} isCollapsed={isCollapsed} />
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
      <MobileNavFab />
    </>
  )
}
