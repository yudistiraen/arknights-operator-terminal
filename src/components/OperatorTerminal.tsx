'use client'

import { useState, useRef, useCallback, useLayoutEffect, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { OPERATORS } from '../data/operators'
import { getFactionTheme } from '../data/factionThemes'
import { toSlug, getRosterEntries, altersOf } from '../lib/operators'
import { getChibiId, MAX_WALKING_CHIBIS } from '../lib/chibiSelection'
import { playClick, playTransition } from '../lib/sound'
import { BUTTON_BASE, BUTTON_HOVER, BUTTON_CYAN_BASE, BUTTON_CYAN_HOVER, PHYSICAL_EXAM_RATINGS } from '../constants'
import { BracketCorners, FOCUS_RING, SignalTriangle } from './ui/Console'
import { PANEL_CONFIGS } from './panels'
import { CharacterArt } from './CharacterArt'
import { OperatorHud } from './OperatorHud'
import { IllustratorCredit } from './IllustratorCredit'
import { SkinSelector } from './SkinSelector'
import { TopBar } from './TopBar'
import { useApp } from './AppShell'
import { NavigationArrows } from './NavigationArrows'

gsap.registerPlugin(useGSAP)

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

interface OperatorTerminalProps {
  initialOperatorIndex: number
  // null/undefined = base form; otherwise a 0-based index into altersOf(operator).
  initialAlterIndex?: number | null
}

export function OperatorTerminal({ initialOperatorIndex, initialAlterIndex = null }: OperatorTerminalProps) {
  const [operatorIndex, setOperatorIndex] = useState(initialOperatorIndex)
  const [expandedPanelId, setExpandedPanelId] = useState<string | null>(null)
  const [skinIndex, setSkinIndex] = useState(0)
  const [variantIndex, setVariantIndex] = useState(-1)
  const [activeAlterIndex, setActiveAlterIndex] = useState<number | null>(initialAlterIndex)
  const [showL2D, setShowL2D] = useState(false)
  const { hasEntered, selectedChibiIds, toggleChibiSelection } = useApp()
  const isFirstMount = useRef(true)

  useEffect(() => {
    if (!hasEntered) return
    const enterSound = new Audio('/audio/enter_effect.mp3')
    enterSound.volume = 0.8
    enterSound.play().catch(() => {})
  }, [])

  // Sync state when list navigation changes the operator (prop-driven, not arrow-driven).
  // Skip first mount — state already matches initialOperatorIndex from useState.
  // Arrow navigation updates operatorIndex directly and replaceState causes the prop to also
  // arrive here, but since values match the already-updated state those setters are no-ops.
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }
    setOperatorIndex(initialOperatorIndex)
    setSkinIndex(0)
    setVariantIndex(-1)
    setActiveAlterIndex(initialAlterIndex)
    setExpandedPanelId(null)
  }, [initialOperatorIndex, initialAlterIndex])

  // L2D is tied to a specific skin, so always default back to the static image
  // whenever the operator, skin, variant, or alter form changes.
  useEffect(() => {
    setShowL2D(false)
  }, [operatorIndex, skinIndex, variantIndex, activeAlterIndex])

  const rosterEntries = useMemo(() => getRosterEntries(), [])

  const baseOperator = OPERATORS[operatorIndex]
  const alters = useMemo(() => altersOf(baseOperator), [baseOperator])
  const activeVariant = variantIndex >= 0 ? baseOperator.variants?.[variantIndex] : undefined
  const activeAlter = activeAlterIndex !== null ? alters[activeAlterIndex] : undefined
  const activeOperator = activeAlter
    // Voice lines are recorded per character form, so an alter/variant never inherits the base set.
    ? { ...baseOperator, voice: undefined, ...activeAlter } as typeof baseOperator
    : activeVariant
      ? { ...baseOperator, voice: undefined, ...activeVariant } as typeof baseOperator
      : baseOperator
  const factionTheme = getFactionTheme(activeOperator.faction)
  const [accentR, accentG, accentB] = factionTheme.accent
  const hasModules = Object.keys(activeOperator.modules).length > 0

  const currentSkin = activeOperator.skins[skinIndex]
  // Variant skins (Guard/Medic, ...) reuse plain ids like 'base' across forms, so they need the
  // same class-namespaced id getWalkableChibis() uses, or they'd collide with the primary form's.
  const currentSkinNamespacedId = activeVariant ? `${activeVariant.class.toLowerCase()}:${currentSkin.id}` : currentSkin.id
  const currentSkinChibiId = currentSkin.chibiMoveSrc && currentSkin.chibiFraming
    ? getChibiId({ operatorName: activeOperator.name, skinId: currentSkinNamespacedId })
    : undefined
  const activeChibiIdForOperator = selectedChibiIds.find(id => id.startsWith(`${activeOperator.name}::`))
  const currentSkinWalkingToggle = currentSkinChibiId ? {
    isSelected: currentSkinChibiId === activeChibiIdForOperator,
    disabled: currentSkinChibiId !== activeChibiIdForOperator && !activeChibiIdForOperator && selectedChibiIds.length >= MAX_WALKING_CHIBIS,
    onToggle: () => toggleChibiSelection(currentSkinChibiId),
  } : undefined

  const artRef = useRef<HTMLImageElement>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const originalPosition = useRef<{ top: number; left: number; width: number; height: number } | null>(null)
  const pendingExpansion = useRef<{ id: string; rect: DOMRect } | null>(null)
  const isAnimating = useRef(false)
  const isSkinAnimating = useRef(false)

  // Fades the art out, waits for `nextSrc` to actually finish loading (large source
  // images can take longer than the glitch animation), then applies the state change
  // and plays the reveal. Without the wait, the reveal could finish while the browser
  // is still painting the previous image, showing stale art for the new state.
  const playArtTransition = useCallback((nextSrc: string, applyState: () => void) => {
    const artImage = artRef.current
    if (!artImage) { applyState(); return }
    isSkinAnimating.current = true
    gsap.timeline()
      .to(artImage, { opacity: 0, scale: 1.03, duration: 0.15, ease: 'power2.in' })
      .call(() => {
        applyState()
        preloadImage(nextSrc).then(() => {
          gsap.set(artImage, { scale: 0.97 })
          gsap.timeline({ onComplete: () => { isSkinAnimating.current = false } })
            .to(artImage, { opacity: 0.15, duration: 0.04 })
            .to(artImage, { opacity: 0, duration: 0.03 })
            .to(artImage, { opacity: 0.5, duration: 0.05 })
            .to(artImage, { opacity: 0.1, duration: 0.03 })
            .to(artImage, { opacity: 0.8, duration: 0.06 })
            .to(artImage, { opacity: 0.4, duration: 0.03 })
            .to(artImage, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
        })
      })
  }, [])

  const switchSkin = useCallback((targetIndex: number) => {
    if (targetIndex === skinIndex || isSkinAnimating.current || !artRef.current) return
    playTransition()
    const nextSrc = activeOperator.skins[targetIndex]?.src ?? activeOperator.skins[0].src
    playArtTransition(nextSrc, () => setSkinIndex(targetIndex))
  }, [skinIndex, activeOperator, playArtTransition])

  const expandPanel = useCallback((panelId: string) => {
    const buttonElement = panelRefs.current[panelId]
    const gridElement = gridRef.current
    if (!buttonElement || !gridElement || expandedPanelId || isAnimating.current) return
    playClick()
    pendingExpansion.current = { id: panelId, rect: buttonElement.getBoundingClientRect() }
    setExpandedPanelId(panelId)
  }, [expandedPanelId])

  const collapsePanel = useCallback(() => {
    if (!expandedPanelId || isAnimating.current) return
    isAnimating.current = true
    const buttonElement = panelRefs.current[expandedPanelId]
    const savedPosition = originalPosition.current
    if (!buttonElement || !savedPosition) return
    const previewElement = buttonElement.querySelector('.btn-preview') as HTMLElement
    const expandedContent = buttonElement.querySelector('.btn-expanded') as HTMLElement
    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(buttonElement, { clearProps: 'position,top,left,width,height,zIndex,overflow' })
        if (previewElement) gsap.set(previewElement, { clearProps: 'opacity' })
        if (expandedContent) gsap.set(expandedContent, { clearProps: 'opacity,pointerEvents' })
        setExpandedPanelId(null)
        isAnimating.current = false
      },
    })
    if (expandedContent) timeline.to(expandedContent, { opacity: 0, duration: 0.2, ease: 'power2.in' })
    timeline.to(buttonElement, { top: savedPosition.top, left: savedPosition.left, width: savedPosition.width, height: savedPosition.height, duration: 0.45, ease: 'power3.inOut' }, 0.05)
    if (previewElement) timeline.to(previewElement, { opacity: 1, duration: 0.2 }, 0.35)
    Object.entries(panelRefs.current).forEach(([key, element]) => {
      if (key !== expandedPanelId && element) timeline.to(element, { opacity: 1, scale: 1, duration: 0.3 }, 0.25)
    })
  }, [expandedPanelId])

  useLayoutEffect(() => {
    if (!expandedPanelId || !pendingExpansion.current) return
    const { id: panelId, rect: panelRect } = pendingExpansion.current
    pendingExpansion.current = null
    isAnimating.current = true
    const buttonElement = panelRefs.current[panelId]
    const gridElement = gridRef.current
    if (!buttonElement || !gridElement) return
    const gridRect = gridElement.getBoundingClientRect()
    const topOffset = panelRect.top - gridRect.top
    const leftOffset = panelRect.left - gridRect.left
    originalPosition.current = { top: topOffset, left: leftOffset, width: panelRect.width, height: panelRect.height }
    const previewElement = buttonElement.querySelector('.btn-preview') as HTMLElement
    const expandedContent = buttonElement.querySelector('.btn-expanded') as HTMLElement
    gsap.set(buttonElement, { position: 'absolute', top: topOffset, left: leftOffset, width: panelRect.width, height: panelRect.height, zIndex: 10, overflow: 'hidden' })
    if (expandedContent) gsap.set(expandedContent, { opacity: 0, pointerEvents: 'none' })
    Object.entries(panelRefs.current).forEach(([key, element]) => {
      if (key !== panelId && element) gsap.to(element, { opacity: 0, scale: 0.95, duration: 0.3 })
    })
    const timeline = gsap.timeline({ onComplete: () => { isAnimating.current = false } })
    timeline.to(buttonElement, { top: 0, left: 0, width: gridRect.width, height: gridRect.height, duration: 0.5, ease: 'power3.inOut' })
    if (previewElement) timeline.to(previewElement, { opacity: 0, duration: 0.15 }, 0)
    if (expandedContent) timeline.to(expandedContent, { opacity: 1, pointerEvents: 'auto', duration: 0.3 }, 0.25)
  }, [expandedPanelId])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && expandedPanelId) collapsePanel()
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (!expandedPanelId || isAnimating.current) return
      const buttonElement = panelRefs.current[expandedPanelId]
      if (buttonElement && !buttonElement.contains(event.target as Node)) collapsePanel()
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [expandedPanelId, collapsePanel])



  const switchOperator = useCallback((direction: -1 | 1) => {
    if (isSkinAnimating.current) return
    playClick()
    setExpandedPanelId(null)
    const currentEntryIndex = rosterEntries.findIndex(
      entry => entry.operatorIndex === operatorIndex && entry.alterIndex === activeAlterIndex
    )
    const nextEntry = rosterEntries[(currentEntryIndex + direction + rosterEntries.length) % rosterEntries.length]
    const nextIndex = nextEntry.operatorIndex
    const nextAlterIndex = nextEntry.alterIndex
    const nextOperator = OPERATORS[nextIndex]
    const nextSlug = toSlug(nextOperator.name)
    const nextUrl = nextAlterIndex !== null ? `/operator?codeName=${nextSlug}&alter=${nextAlterIndex + 1}` : `/operator?codeName=${nextSlug}`
    const nextSrc = (nextAlterIndex !== null ? altersOf(nextOperator)[nextAlterIndex]?.skins[0]?.src : undefined) ?? nextOperator.skins[0].src
    playArtTransition(nextSrc, () => {
      setOperatorIndex(nextIndex)
      setSkinIndex(0)
      setVariantIndex(-1)
      setActiveAlterIndex(nextAlterIndex)
      window.history.replaceState(null, '', nextUrl)
    })
  }, [operatorIndex, activeAlterIndex, rosterEntries, playArtTransition])

  const switchVariant = useCallback((targetVariant: number) => {
    if (isSkinAnimating.current || !artRef.current) return
    playTransition()
    const nextSrc = baseOperator.variants?.[targetVariant]?.skins?.[0]?.src ?? baseOperator.skins[0].src
    playArtTransition(nextSrc, () => { setVariantIndex(targetVariant); setSkinIndex(0); setExpandedPanelId(null) })
  }, [baseOperator, playArtTransition])

  const switchAlter = useCallback((targetAlterIndex: number | null) => {
    if (isSkinAnimating.current || !artRef.current) return
    playTransition()
    const slug = toSlug(OPERATORS[operatorIndex].name)
    const nextSrc = (targetAlterIndex !== null ? alters[targetAlterIndex]?.skins[0]?.src : undefined) ?? baseOperator.skins[0].src
    playArtTransition(nextSrc, () => {
      setActiveAlterIndex(targetAlterIndex)
      setVariantIndex(-1)
      setSkinIndex(0)
      setExpandedPanelId(null)
      window.history.replaceState(null, '', targetAlterIndex !== null ? `/operator?codeName=${slug}&alter=${targetAlterIndex + 1}` : `/operator?codeName=${slug}`)
    })
  }, [operatorIndex, baseOperator, alters, playArtTransition])

  useGSAP(() => {
    gsap.set(['.char-art', '.bottom-info', '.lobby-btn', '.hud-item', '.skin-btn', '.section-label', '.section-divider'], { opacity: 0 })
  }, { scope: containerRef })

  useGSAP(() => {
    if (!hasEntered) return

    const entranceTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    const flickerTimeline = gsap.timeline()
    flickerTimeline.set('.char-art', { opacity: 0 })
      .to('.char-art', { opacity: 0.15, duration: 0.05, delay: 0.1 })
      .to('.char-art', { opacity: 0, duration: 0.04 })
      .to('.char-art', { opacity: 0.4, duration: 0.06 })
      .to('.char-art', { opacity: 0.05, duration: 0.03 })
      .to('.char-art', { opacity: 0.7, duration: 0.08 })
      .to('.char-art', { opacity: 0.2, duration: 0.04 })
      .to('.char-art', { opacity: 0.9, duration: 0.06 })
      .to('.char-art', { opacity: 0.5, duration: 0.03 })
      .to('.char-art', { opacity: 1, duration: 0.1 })
      .to('.char-art', { opacity: 0.85, duration: 0.04 })
      .to('.char-art', { opacity: 1, duration: 0.15 })
    entranceTimeline.add(flickerTimeline, 0)
    entranceTimeline.fromTo('.char-art', { x: -60, scale: 1.05 }, { x: 0, scale: 1, duration: 1.2 }, 0)
      .fromTo('.bottom-info', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.7')
      .fromTo('.lobby-btn', { opacity: 0, y: 25, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06 }, '-=0.5')
      .fromTo('.hud-item', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 }, '-=0.3')
      .fromTo('.skin-btn', { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.06 }, '-=0.4')
      .fromTo('.section-label', { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }, '-=0.6')
      .fromTo('.section-divider', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.5')
  }, { scope: containerRef, dependencies: [hasEntered] })

  const renderCard = (panelId: string, baseClassName: string, hoverClassName: string, previewContent: React.ReactNode, disabled = false) => {
    const panelConfig = PANEL_CONFIGS[panelId]
    const isExpanded = expandedPanelId === panelId
    const PanelComponent = panelConfig.Component
    return (
      <div
        ref={element => { panelRefs.current[panelId] = element }}
        onClick={() => !disabled && !isExpanded && expandPanel(panelId)}
        role="button"
        tabIndex={disabled ? -1 : isExpanded ? -1 : 0}
        aria-disabled={disabled}
        onKeyDown={event => { if (!disabled && !isExpanded && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); expandPanel(panelId) } }}
        className={`${baseClassName} ${disabled ? '' : isExpanded ? '' : hoverClassName}`}
      >
        <div className="btn-preview flex flex-col justify-between h-full">{previewContent}</div>
        {isExpanded && (
          <div className="btn-expanded absolute inset-0 flex flex-col">
            <div className="flex items-center gap-3 px-4 md:px-6 h-11 md:h-14 border-b border-gc-line shrink-0">
              <span className="w-1.5 h-1.5 bg-gc-signal" />
              <h2 className="font-display text-[12px] md:text-[14px] text-gc-text tracking-[0.18em] uppercase leading-none">{panelConfig.title}</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-6 ak-scroll">
              <PanelComponent operator={activeOperator} />
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full min-h-screen md:h-screen overflow-x-hidden overflow-y-auto md:overflow-hidden bg-gc-void flex flex-col">
      <div className="flex-1 min-h-0 relative overflow-hidden">
        {/* Neutral graphite stage behind the art; the faction tint survives only as a faint wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_28%_45%,#2a2b2e_0%,transparent_70%),radial-gradient(ellipse_50%_50%_at_90%_10%,#1f2022_0%,transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-100"
          style={{ background: `radial-gradient(ellipse at 25% 50%, rgba(${accentR}, ${accentG}, ${accentB}, 0.04) 0%, transparent 60%)` }}
        />
        {/* Survey-grid backdrop on the art side only */}
        <div className="absolute top-0 left-0 w-full h-[50vh] md:inset-y-0 md:h-auto md:w-[58%] pointer-events-none opacity-60 bg-[linear-gradient(var(--color-gc-line-soft)_1px,transparent_1px),linear-gradient(90deg,var(--color-gc-line-soft)_1px,transparent_1px)] bg-[size:48px_48px] mask-[radial-gradient(ellipse_70%_70%_at_45%_45%,black,transparent_80%)]" />

        <TopBar />

        <div className="relative flex flex-col md:block min-h-screen md:min-h-0 md:h-full">
          <div className="relative h-[50vh] w-full shrink-0 md:absolute md:inset-y-0 md:left-0 md:w-[58%] md:h-auto overflow-hidden">
            <CharacterArt
              ref={artRef}
              operator={activeOperator}
              skinSrc={activeOperator.skins[skinIndex].src}
              chibiSrc={activeOperator.skins[skinIndex].chibiSrc}
              chibiDetailFraming={activeOperator.skins[skinIndex].chibiDetailFraming ?? activeOperator.skins[skinIndex].chibiFraming}
              walkingToggle={currentSkinWalkingToggle}
              l2d={activeOperator.skins[skinIndex].l2d}
              showL2D={showL2D}
            />
            <OperatorHud operator={activeOperator} />
            <IllustratorCredit illustrator={activeOperator.skins[skinIndex].illustrator} triggerKey={`${activeOperator.name}-${variantIndex}-${activeAlterIndex}-${activeOperator.skins[skinIndex].id}`} />
            {activeOperator.skins[skinIndex].l2d && (
              <button
                type="button"
                onClick={() => setShowL2D(value => !value)}
                aria-label={showL2D ? 'Switch to static artwork' : 'Switch to dynamic illustration'}
                aria-pressed={showL2D}
                title={showL2D ? 'Static artwork' : 'Dynamic illustration'}
                className={`hud-item absolute bottom-1 md:bottom-2 right-[calc(50%+70px)] md:right-[calc(50%+84px)] z-30 group w-6 h-6 md:w-7 md:h-7 flex items-center justify-center border cursor-pointer active:scale-90 ${FOCUS_RING} ${
                  showL2D
                    ? 'bg-gc-invert border-gc-invert'
                    : 'bg-gc-frame border-gc-line-strong hover:bg-gc-raised'
                }`}
                style={{ transition: 'transform 0.15s cubic-bezier(0.22,1.2,0.36,1)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" className={`w-3 h-3 md:w-3.5 md:h-3.5 ${showL2D ? 'text-gc-void' : 'text-gc-text group-hover:text-gc-ink'}`}>
                  <path d="M17 2.5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 12.5v-2a4 4 0 0 1 4-4h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 21.5l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 11.5v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            {baseOperator.variants && baseOperator.variants.length > 0 && (
              <div className="absolute bottom-28 md:bottom-52 left-4 md:left-8 z-30 flex items-center gap-1.5">
                <button
                  onClick={() => switchVariant(-1)}
                  className={`group relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border active:scale-95 ${FOCUS_RING} ${variantIndex === -1 ? 'bg-gc-invert border-gc-invert' : 'bg-gc-frame border-gc-line hover:bg-gc-raised hover:border-gc-line-strong'}`}
                  style={{ transition: 'transform 0.15s' }}
                  title={baseOperator.class}
                >
                  <Image src={baseOperator.classIcon} alt={baseOperator.class} width={24} height={24} className={`w-5 h-5 md:w-6 md:h-6 ${variantIndex === -1 ? 'opacity-100 invert' : 'opacity-50 group-hover:opacity-80'} transition-opacity`} />
                </button>
                {baseOperator.variants.map((variant, index) => (
                  <button
                    key={variant.class}
                    onClick={() => switchVariant(index)}
                    className={`group relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border active:scale-95 ${FOCUS_RING} ${variantIndex === index ? 'bg-gc-invert border-gc-invert' : 'bg-gc-frame border-gc-line hover:bg-gc-raised hover:border-gc-line-strong'}`}
                  style={{ transition: 'transform 0.15s' }}
                    title={variant.class}
                  >
                    <Image src={variant.classIcon} alt={variant.class} width={24} height={24} className={`w-5 h-5 md:w-6 md:h-6 ${variantIndex === index ? 'opacity-100 invert' : 'opacity-50 group-hover:opacity-80'} transition-opacity`} />
                  </button>
                ))}
              </div>
            )}
            {alters.length > 0 && baseOperator.portrait && (
              <div className="absolute bottom-28 md:bottom-52 left-4 md:left-8 z-30 flex items-center gap-2">
                {[
                  { active: activeAlterIndex === null, src: baseOperator.portrait, alt: baseOperator.name, onClick: () => switchAlter(null) },
                  ...alters.map((alter, alterIndex) => ({
                    active: activeAlterIndex === alterIndex, src: alter.portrait, alt: alter.name, onClick: () => switchAlter(alterIndex),
                  })),
                ].map((btn) => (
                  <button
                    key={btn.alt}
                    onClick={btn.onClick}
                    className={`group relative w-10 h-10 md:w-11 md:h-11 cursor-pointer active:scale-95 ${FOCUS_RING}`}
                    style={{ transition: 'transform 0.15s' }}
                  >
                    <div className="absolute bottom-full left-0 mb-1.5 pointer-events-none overflow-hidden h-0 group-hover:h-6 opacity-0 group-hover:opacity-100" style={{ transition: 'height 0.2s cubic-bezier(0.16,1,0.3,1), opacity 0.15s' }}>
                      <div
                        className="max-w-0 group-hover:max-w-48 overflow-hidden whitespace-nowrap h-full bg-gc-float border border-gc-line-strong flex items-center px-0 group-hover:px-2.5"
                        style={{ transition: 'max-width 0.35s cubic-bezier(0.16,1,0.3,1) 0.1s, padding 0.25s ease 0.1s' }}
                      >
                        <span className="font-data text-[10px] tracking-wider text-gc-ink opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.15s ease 0.25s' }}>{btn.alt}</span>
                      </div>
                    </div>
                    <div className={`absolute inset-0 border overflow-hidden ${btn.active ? 'border-gc-invert bg-gc-raised' : 'border-gc-line bg-gc-frame hover:border-gc-line-strong'}`}>
                      <Image src={btn.src} alt={btn.alt} fill sizes="44px" className={`object-cover ${btn.active ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`} style={{ transition: 'opacity 0.2s' }} />
                    </div>
                    {btn.active && <BracketCorners size={6} className="border-gc-signal" />}
                    {btn.active && <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gc-signal" />}
                  </button>
                ))}
              </div>
            )}
            <SkinSelector skins={activeOperator.skins} activeSkinIndex={skinIndex} onSkinChange={switchSkin} />
            {rosterEntries.length > 1 && (
              <NavigationArrows onPrevious={() => switchOperator(-1)} onNext={() => switchOperator(1)} />
            )}
          </div>

          <div className="relative w-full md:absolute md:right-0 md:top-0 md:w-[46%] md:h-full z-20">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-gc-void/90 via-gc-void/60 to-transparent pointer-events-none" />
            <div ref={gridRef} className="relative z-10 md:h-full flex flex-col justify-start md:justify-center gap-1.5 md:gap-2 px-3 md:pr-6 md:pl-4 py-4 md:pt-16 md:pb-6">
              <span className="section-label flex items-center gap-2 text-[9px] md:text-[10px] text-gc-dim font-data tracking-[0.18em] uppercase pl-1"><span className="w-1.5 h-1.5 bg-gc-signal" />Combat Data</span>
              <div className="flex gap-1.5 md:gap-2 flex-none md:flex-[2]">
                {renderCard('attribute', `${BUTTON_BASE} w-[38%] p-2 md:p-3`, BUTTON_HOVER, <>
                  <div>
                    <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none mb-0.5 md:mb-1">Attribute</h2>
                    <span className="font-data text-[10px] md:text-xs text-gc-dim tracking-wider">Trust {activeOperator.trust} / 200</span>
                  </div>
                  {(() => {
                    const examValues = Object.values(activeOperator.physicalExam)
                    const maxRating = Math.max(...examValues.map(v => PHYSICAL_EXAM_RATINGS[v] || 3))
                    return <div className="mt-1">
                      <div className="flex gap-2 md:gap-3">
                        <span className="text-[10px] md:text-xs text-gc-dim font-data">HP {activeOperator.stats.hp}</span>
                        <span className="text-[10px] md:text-xs text-gc-dim font-data">ATK {activeOperator.stats.atk}</span>
                      </div>
                      <div className="flex gap-0.5 mt-1 md:mt-1.5">
                        {examValues.map((examValue, examIndex) => {
                          const rating = PHYSICAL_EXAM_RATINGS[examValue] || 3
                          const isHighest = rating === maxRating
                          return <div
                            key={examIndex}
                            className={`h-1 flex-1 ${rating >= 4 ? 'bg-gc-text' : 'bg-gc-raised'} ${isHighest && maxRating > 4 ? '!bg-gc-signal' : ''}`}
                            style={isHighest && maxRating > 4 ? { animation: 'exam-blink 1.5s ease-in-out infinite' } : undefined}
                          />
                        })}
                      </div>
                    </div>
                  })()}
                </>)}
                {renderCard('trait', `${BUTTON_CYAN_BASE} flex-1 p-2 md:p-3`, BUTTON_CYAN_HOVER, <>
                  <SignalTriangle corner="bottom-left" />
                  <Image src={activeOperator.branchIcon} alt="" aria-hidden="true" width={88} height={88} className="absolute right-0 top-0 w-13 h-13 md:w-22 md:h-22 object-contain opacity-[0.12] pointer-events-none select-none" style={{ zIndex: 0 }} />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Trait</h2>
                    </div>
                    <div className="flex items-center gap-2 mt-2 mb-2 md:mb-4">
                      <span className="font-data text-[10px] md:text-[13px] text-gc-ink">{activeOperator.branch}</span>
                      <span className="font-data text-[10px] md:text-[13px] text-gc-dim">&middot; {activeOperator.position}</span>
                    </div>
                    <div className="relative z-10 bg-gc-base/40 border border-gc-line/70 p-2 md:p-4">
                      <p className="font-body text-[11px] md:text-[13px] leading-[1.6] text-gc-text">{activeOperator.trait}</p>
                    </div>
                  </div>
                </>, true)}
              </div>
              <div className="flex gap-1.5 md:gap-2 flex-none md:flex-[2.5]">
                {renderCard('skills', `${BUTTON_BASE} w-[42%] p-2 md:p-3`, BUTTON_HOVER, <>
                  <div>
                    <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Skills</h2>
                    <div className="flex gap-1.5 md:gap-2 mt-2 md:mt-3">
                      {activeOperator.skills.map((skill) => (
                        <Image key={skill.name} src={skill.icon} alt={skill.name} width={40} height={40} className="w-7 h-7 md:w-10 md:h-10 object-contain bg-gc-base border border-gc-line" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[8px] md:text-[9px] text-gc-dim font-data tracking-wider mt-1">{activeOperator.skills.length} Equipped &middot; {activeOperator?.skills[0]?.rank}</span>
                </>)}
                {renderCard('talents', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Talents</h2>
                  <ul className="mt-2 md:mt-3 flex flex-col gap-1 md:gap-1.5">
                    {[...new Set(activeOperator.talents.map((talent) => talent.name))].map((talentName) => (
                      <li key={talentName} className="flex items-center gap-1.5 md:gap-2 min-w-0">
                        <span aria-hidden="true" className="w-1 h-1 shrink-0 bg-gc-dim" />
                        <span className="text-[10px] md:text-[13px] text-gc-text font-body truncate">{talentName}</span>
                      </li>
                    ))}
                  </ul>
                </>)}
              </div>
              <div className="flex gap-1.5 md:gap-2 flex-none md:flex-[2]">
                {hasModules ? renderCard('modules', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Modules</h2>
                  <div className="mt-2 md:mt-3 flex flex-row flex-wrap gap-1 md:gap-1.5">
                    {Object.values(activeOperator.modules).filter(mod => 'stages' in mod).map(mod => (
                      <span key={mod.code} className="text-[9px] md:text-[11px] px-1 md:px-1.5 py-0.5 border border-gc-line-strong text-gc-ink font-data tracking-[0.06em]">{mod.code}</span>
                    ))}
                  </div>
                  <span className="mt-1.5 md:mt-2 text-[10px] md:text-xs text-gc-dim font-data">{Object.keys(activeOperator.modules).length} Equipped</span>
                </>) : renderCard('modules', `${BUTTON_BASE} flex-1 p-2 md:p-3 opacity-40`, BUTTON_HOVER, <>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Modules</h2>
                  </div>
                  <div className="display-flex w-full">
                    <svg className="w-7 h-7 md:w-10 md:h-10 text-gc-ghost shrink-0 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <div className="text-[9px] md:text-[10px] text-gc-ghost font-data uppercase tracking-[0.14em] w-full text-center mt-1">No module</div>
                  </div>
                </>, true)}
                {renderCard('growth', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Growth Materials</h2>
                  <span className="text-[10px] md:text-xs text-gc-dim font-data mt-0.5 md:mt-1">Coming Soon</span>
                </>)}
              </div>

              <div className="section-divider h-px bg-gc-line my-0.5 md:my-1 origin-left" />

              <span className="section-label flex items-center gap-2 text-[9px] md:text-[10px] text-gc-dim font-data tracking-[0.18em] uppercase pl-1"><span className="w-1.5 h-1.5 bg-gc-ghost" />Operator Info</span>
              <div className="flex gap-1.5 md:gap-2 flex-none md:flex-[2]">
                {renderCard('profile', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <Image src={activeOperator.factionIcon} alt="" aria-hidden="true" width={88} height={88} className="absolute right-0 top-0 w-13 h-13 md:w-22 md:h-22 object-contain opacity-[0.12] pointer-events-none select-none" style={{ zIndex: 0 }} />
                  <h2 className="relative font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Profile</h2>
                  <span className="relative font-data text-[10px] md:text-xs text-gc-ink tracking-[0.08em] uppercase mt-2">{activeOperator.faction}</span>
                </>)}
                {renderCard('voice', `${BUTTON_BASE} flex-[0.7] p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Voice Actors</h2>
                  <span className="text-[10px] md:text-xs text-gc-dim font-data mt-0.5 md:mt-1">4 Lang</span>
                </>)}
                {renderCard('story', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-gc-text leading-none">Story</h2>
                  {activeOperator.story
                    ? <p className="text-[9px] md:text-[10px] text-gc-signal-dim font-data uppercase tracking-[0.12em] leading-relaxed mt-0.5 md:mt-1">Contains spoilers</p>
                    : <span className="text-[10px] md:text-xs text-gc-dim font-data mt-0.5 md:mt-1">Coming Soon</span>
                  }
                </>)}
              </div>
            </div>
          </div>
        </div>

        <div className="fixed md:absolute inset-0 pointer-events-none z-40 shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]" />
      </div>
    </div>
  )
}
