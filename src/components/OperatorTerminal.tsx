'use client'

import { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { OPERATORS } from '../data/operators'
import { getFactionTheme } from '../data/factionThemes'
import { BUTTON_BASE, BUTTON_HOVER, BUTTON_CYAN_BASE, BUTTON_CYAN_HOVER, PHYSICAL_EXAM_RATINGS } from '../constants'
import { PANEL_CONFIGS } from './panels'
import { CharacterArt } from './CharacterArt'
import { OperatorHud } from './OperatorHud'
import { IllustratorCredit } from './IllustratorCredit'
import { SkinSelector } from './SkinSelector'
import { TopBar } from './TopBar'
import { useApp } from './AppShell'
import { NavigationArrows } from './NavigationArrows'
import { Footer } from './Footer'

gsap.registerPlugin(useGSAP)

interface OperatorTerminalProps {
  initialOperatorIndex: number
  initialAlter?: boolean
}

export function OperatorTerminal({ initialOperatorIndex, initialAlter = false }: OperatorTerminalProps) {
  const [operatorIndex, setOperatorIndex] = useState(initialOperatorIndex)
  const [expandedPanelId, setExpandedPanelId] = useState<string | null>(null)
  const [skinIndex, setSkinIndex] = useState(0)
  const [variantIndex, setVariantIndex] = useState(-1)
  const [isAlterActive, setIsAlterActive] = useState(initialAlter)
  const { hasEntered } = useApp()

  useEffect(() => {
    if (!hasEntered) return
    const enterSound = new Audio('/audio/enter_effect.mp3')
    enterSound.volume = 0.8
    enterSound.play().catch(() => {})
  }, [])

  const baseOperator = OPERATORS[operatorIndex]
  const activeVariant = variantIndex >= 0 ? baseOperator.variants?.[variantIndex] : undefined
  const activeAlter = isAlterActive ? baseOperator.alter : undefined
  const activeOperator = activeAlter
    ? { ...baseOperator, ...activeAlter } as typeof baseOperator
    : activeVariant
      ? { ...baseOperator, ...activeVariant } as typeof baseOperator
      : baseOperator
  const factionTheme = getFactionTheme(activeOperator.faction)
  const [accentR, accentG, accentB] = factionTheme.accent
  const [secR, secG, secB] = factionTheme.secondary
  const hasModules = Object.keys(activeOperator.modules).length > 0

  const artRef = useRef<HTMLImageElement>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const originalPosition = useRef<{ top: number; left: number; width: number; height: number } | null>(null)
  const pendingExpansion = useRef<{ id: string; rect: DOMRect } | null>(null)
  const isAnimating = useRef(false)
  const isSkinAnimating = useRef(false)

  const switchSkin = useCallback((targetIndex: number) => {
    if (targetIndex === skinIndex || isSkinAnimating.current || !artRef.current) return
    isSkinAnimating.current = true
    const transitionSound = new Audio('/audio/glitch_transition.mp3')
    transitionSound.volume = 0.6
    transitionSound.play().catch(() => {})
    const artImage = artRef.current
    const timeline = gsap.timeline({ onComplete: () => { isSkinAnimating.current = false } })
    timeline.to(artImage, { opacity: 0, scale: 1.03, duration: 0.15, ease: 'power2.in' })
      .call(() => setSkinIndex(targetIndex))
      .set(artImage, { scale: 0.97 })
      .to(artImage, { opacity: 0.15, duration: 0.04 })
      .to(artImage, { opacity: 0, duration: 0.03 })
      .to(artImage, { opacity: 0.5, duration: 0.05 })
      .to(artImage, { opacity: 0.1, duration: 0.03 })
      .to(artImage, { opacity: 0.8, duration: 0.06 })
      .to(artImage, { opacity: 0.4, duration: 0.03 })
      .to(artImage, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
  }, [skinIndex])

  const expandPanel = useCallback((panelId: string) => {
    const buttonElement = panelRefs.current[panelId]
    const gridElement = gridRef.current
    if (!buttonElement || !gridElement || expandedPanelId || isAnimating.current) return
    const clickSound = new Audio('/audio/futuristic_click.mp3')
    clickSound.volume = 0.5
    clickSound.play().catch(() => {})
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
    const clickSound = new Audio('/audio/futuristic_click.mp3')
    clickSound.volume = 0.5
    clickSound.play().catch(() => {})
    setExpandedPanelId(null)
    isSkinAnimating.current = true
    const artImage = artRef.current
    if (artImage) {
      const timeline = gsap.timeline({ onComplete: () => { isSkinAnimating.current = false } })
      timeline.to(artImage, { opacity: 0, scale: 1.03, duration: 0.15, ease: 'power2.in' })
        .call(() => {
          setOperatorIndex(previousIndex => {
            const nextIndex = (previousIndex + direction + OPERATORS.length) % OPERATORS.length
            setSkinIndex(0)
            setVariantIndex(-1)
            setIsAlterActive(false)
            return nextIndex
          })
        })
        .set(artImage, { scale: 0.97 })
        .to(artImage, { opacity: 0.15, duration: 0.04 })
        .to(artImage, { opacity: 0, duration: 0.03 })
        .to(artImage, { opacity: 0.5, duration: 0.05 })
        .to(artImage, { opacity: 0.1, duration: 0.03 })
        .to(artImage, { opacity: 0.8, duration: 0.06 })
        .to(artImage, { opacity: 0.4, duration: 0.03 })
        .to(artImage, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
    } else {
      setOperatorIndex(previousIndex => {
        const nextIndex = (previousIndex + direction + OPERATORS.length) % OPERATORS.length
        setSkinIndex(0)
        setVariantIndex(-1)
        setIsAlterActive(false)
        return nextIndex
      })
      isSkinAnimating.current = false
    }
  }, [])

  const switchVariant = useCallback((targetVariant: number) => {
    if (isSkinAnimating.current || !artRef.current) return
    isSkinAnimating.current = true
    const transitionSound = new Audio('/audio/glitch_transition.mp3')
    transitionSound.volume = 0.6
    transitionSound.play().catch(() => {})
    const artImage = artRef.current
    const timeline = gsap.timeline({ onComplete: () => { isSkinAnimating.current = false } })
    timeline.to(artImage, { opacity: 0, scale: 1.03, duration: 0.15, ease: 'power2.in' })
      .call(() => { setVariantIndex(targetVariant); setSkinIndex(0); setExpandedPanelId(null) })
      .set(artImage, { scale: 0.97 })
      .to(artImage, { opacity: 0.15, duration: 0.04 })
      .to(artImage, { opacity: 0, duration: 0.03 })
      .to(artImage, { opacity: 0.5, duration: 0.05 })
      .to(artImage, { opacity: 0.1, duration: 0.03 })
      .to(artImage, { opacity: 0.8, duration: 0.06 })
      .to(artImage, { opacity: 0.4, duration: 0.03 })
      .to(artImage, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
  }, [])

  const switchAlter = useCallback((activate: boolean) => {
    if (isSkinAnimating.current || !artRef.current) return
    isSkinAnimating.current = true
    const transitionSound = new Audio('/audio/glitch_transition.mp3')
    transitionSound.volume = 0.6
    transitionSound.play().catch(() => {})
    const artImage = artRef.current
    const timeline = gsap.timeline({ onComplete: () => { isSkinAnimating.current = false } })
    timeline.to(artImage, { opacity: 0, scale: 1.03, duration: 0.15, ease: 'power2.in' })
      .call(() => { setIsAlterActive(activate); setVariantIndex(-1); setSkinIndex(0); setExpandedPanelId(null) })
      .set(artImage, { scale: 0.97 })
      .to(artImage, { opacity: 0.15, duration: 0.04 })
      .to(artImage, { opacity: 0, duration: 0.03 })
      .to(artImage, { opacity: 0.5, duration: 0.05 })
      .to(artImage, { opacity: 0.1, duration: 0.03 })
      .to(artImage, { opacity: 0.8, duration: 0.06 })
      .to(artImage, { opacity: 0.4, duration: 0.03 })
      .to(artImage, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
  }, [])

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
      .fromTo('.section-label', { opacity: 0, x: 10, letterSpacing: '0.5em' }, { opacity: 1, x: 0, letterSpacing: '0.2em', duration: 0.6, stagger: 0.15, ease: 'power2.out' }, '-=0.6')
      .fromTo('.section-divider', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.5')
    gsap.to('.scanline', { y: '100vh', duration: 8, repeat: -1, ease: 'none' })
    gsap.to('.glow-orb', { opacity: 0.3, scale: 1.1, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
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
            <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 pt-3 md:pt-5 pb-2 md:pb-4 border-b border-white/[0.1] shrink-0">
              <div className={`w-1 h-4 md:h-5 ${panelConfig.accent} rounded-full`} />
              <h2 className="font-display text-base md:text-lg font-bold text-white/90 tracking-wider uppercase">{panelConfig.title}</h2>
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
    <div ref={containerRef} className="relative w-full min-h-screen md:h-screen overflow-x-hidden overflow-y-auto md:overflow-hidden bg-ak-bg flex flex-col">
      <div className="flex-1 min-h-0 relative overflow-hidden">
        <div
          className="absolute inset-0 transition-[background-color] duration-1000 ease-in-out"
          style={{ backgroundColor: `rgba(${accentR}, ${accentG}, ${accentB}, 0.04)` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 25% 50%, rgba(${accentR}, ${accentG}, ${accentB}, 0.1) 0%, transparent 60%)` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 80% 20%, rgba(${secR}, ${secG}, ${secB}, 0.05) 0%, transparent 50%)` }}
        />
        <div
          className="glow-orb absolute top-1/3 left-1/5 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-[background-color] duration-1000 ease-in-out"
          style={{ backgroundColor: `rgba(${accentR}, ${accentG}, ${accentB}, 0.08)` }}
        />
        <div
          className="scanline absolute left-0 w-full h-px pointer-events-none z-50"
          style={{ top: '-1px', background: `linear-gradient(to right, transparent, rgba(${accentR}, ${accentG}, ${accentB}, 0.2), transparent)` }}
        />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

        <TopBar />

        <div className="relative flex flex-col md:block min-h-screen md:min-h-0 md:h-full">
          <div className="relative h-[50vh] w-full shrink-0 md:absolute md:inset-y-0 md:left-0 md:w-[58%] md:h-auto overflow-hidden">
            <CharacterArt ref={artRef} operator={activeOperator} skinSrc={activeOperator.skins[skinIndex].src} chibiSrc={activeOperator.skins[skinIndex].chibiSrc} />
            <OperatorHud operator={activeOperator} />
            <IllustratorCredit illustrator={activeOperator.skins[skinIndex].illustrator} triggerKey={`${activeOperator.name}-${variantIndex}-${isAlterActive}-${activeOperator.skins[skinIndex].id}`} />
            {baseOperator.variants && baseOperator.variants.length > 0 && (
              <div className="absolute bottom-28 md:bottom-52 left-4 md:left-8 z-30 flex items-center gap-1.5">
                <button
                  onClick={() => switchVariant(-1)}
                  className={`group relative w-9 h-9 md:w-10 md:h-10 rounded flex items-center justify-center transition-all duration-200 ${variantIndex === -1 ? 'bg-white/15 ring-1 ring-white/40' : 'bg-white/4 hover:bg-white/10'}`}
                  title={baseOperator.class}
                >
                  <img src={baseOperator.classIcon} alt={baseOperator.class} className={`w-5 h-5 md:w-6 md:h-6 ${variantIndex === -1 ? 'opacity-90' : 'opacity-40 group-hover:opacity-70'} transition-opacity`} />
                </button>
                {baseOperator.variants.map((variant, index) => (
                  <button
                    key={variant.class}
                    onClick={() => switchVariant(index)}
                    className={`group relative w-9 h-9 md:w-10 md:h-10 rounded flex items-center justify-center transition-all duration-200 ${variantIndex === index ? 'bg-white/15 ring-1 ring-white/40' : 'bg-white/4 hover:bg-white/10'}`}
                    title={variant.class}
                  >
                    <img src={variant.classIcon} alt={variant.class} className={`w-5 h-5 md:w-6 md:h-6 ${variantIndex === index ? 'opacity-90' : 'opacity-40 group-hover:opacity-70'} transition-opacity`} />
                  </button>
                ))}
              </div>
            )}
            {baseOperator.alter && baseOperator.portrait && (
              <div className="absolute bottom-28 md:bottom-52 left-4 md:left-8 z-30 flex items-center gap-2">
                {[
                  { active: !isAlterActive, src: baseOperator.portrait, alt: baseOperator.name, onClick: () => switchAlter(false) },
                  { active: isAlterActive, src: baseOperator.alter.portrait, alt: baseOperator.alter.name, onClick: () => switchAlter(true) },
                ].map((btn) => (
                  <button
                    key={btn.alt}
                    onClick={btn.onClick}
                    className="group relative w-10 h-10 md:w-11 md:h-11 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6]"
                    style={{ transition: 'transform 0.15s' }}
                  >
                    <div className="absolute bottom-full left-0 mb-1.5 pointer-events-none overflow-hidden h-0 group-hover:h-6 opacity-0 group-hover:opacity-100" style={{ transition: 'height 0.2s cubic-bezier(0.16,1,0.3,1), opacity 0.15s' }}>
                      <div
                        className="max-w-0 group-hover:max-w-48 overflow-hidden whitespace-nowrap h-full bg-ak-panel/90 backdrop-blur-sm border border-ak-border/40 flex items-center px-0 group-hover:px-2.5"
                        style={{ transition: 'max-width 0.35s cubic-bezier(0.16,1,0.3,1) 0.1s, padding 0.25s ease 0.1s' }}
                      >
                        <span className="font-display text-[10px] tracking-wider text-white/70 opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.15s ease 0.25s' }}>{btn.alt}</span>
                      </div>
                    </div>
                    <div className={`absolute inset-0 border backdrop-blur-sm overflow-hidden ${btn.active ? 'border-ak-accent/60 bg-ak-accent/10 shadow-[0_0_14px_rgba(59,164,201,0.25)]' : 'border-white/[0.12] bg-ak-panel/60 hover:border-white/[0.25]'}`} style={{ transition: 'border-color 0.3s, background-color 0.3s, box-shadow 0.3s' }}>
                      <img src={btn.src} alt={btn.alt} className={`w-full h-full object-cover ${btn.active ? 'opacity-90' : 'opacity-40 group-hover:opacity-70'}`} style={{ transition: 'opacity 0.3s' }} />
                    </div>
                    <div className={`absolute w-2.5 h-2.5 border-t border-l ${btn.active ? 'top-0.5 left-0.5 border-ak-accent/70' : '-top-1 -left-1 border-transparent group-hover:top-0.5 group-hover:left-0.5 group-hover:border-white/30'}`} style={{ transition: 'top 0.3s, left 0.3s, border-color 0.3s' }} />
                    <div className={`absolute w-2.5 h-2.5 border-t border-r ${btn.active ? 'top-0.5 right-0.5 border-ak-accent/70' : '-top-1 -right-1 border-transparent group-hover:top-0.5 group-hover:right-0.5 group-hover:border-white/30'}`} style={{ transition: 'top 0.3s, right 0.3s, border-color 0.3s' }} />
                    <div className={`absolute w-2.5 h-2.5 border-b border-l ${btn.active ? 'bottom-0.5 left-0.5 border-ak-accent/70' : '-bottom-1 -left-1 border-transparent group-hover:bottom-0.5 group-hover:left-0.5 group-hover:border-white/30'}`} style={{ transition: 'bottom 0.3s, left 0.3s, border-color 0.3s' }} />
                    <div className={`absolute w-2.5 h-2.5 border-b border-r ${btn.active ? 'bottom-0.5 right-0.5 border-ak-accent/70' : '-bottom-1 -right-1 border-transparent group-hover:bottom-0.5 group-hover:right-0.5 group-hover:border-white/30'}`} style={{ transition: 'bottom 0.3s, right 0.3s, border-color 0.3s' }} />
                    {btn.active && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-ak-accent rounded-full shadow-[0_0_8px_rgba(59,164,201,0.6)]" />}
                  </button>
                ))}
              </div>
            )}
            <SkinSelector skins={activeOperator.skins} activeSkinIndex={skinIndex} onSkinChange={switchSkin} />
            {OPERATORS.length > 1 && (
              <NavigationArrows onPrevious={() => switchOperator(-1)} onNext={() => switchOperator(1)} />
            )}
          </div>

          <div className="relative w-full md:absolute md:right-0 md:top-0 md:w-[46%] md:h-full z-20">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-ak-bg/70 via-ak-bg/40 to-transparent pointer-events-none" />
            <div ref={gridRef} className="relative z-10 md:h-full flex flex-col justify-start md:justify-center gap-1.5 md:gap-2 px-3 md:pr-6 md:pl-4 py-4 md:pt-16 md:pb-6">
              <span className="section-label text-[8px] md:text-[10px] text-white/25 font-display tracking-[0.2em] uppercase pl-1">Combat Data</span>
              <div className="flex gap-1.5 md:gap-2 flex-none md:flex-[2]">
                {renderCard('attribute', `${BUTTON_BASE} w-[38%] p-2 md:p-3`, BUTTON_HOVER, <>
                  <div>
                    <h2 className="font-display text-sm md:text-xl font-bold text-white/90 tracking-wide leading-none mb-0.5 md:mb-1">Attribute</h2>
                    <span className="font-display text-[10px] md:text-xs text-white/40 tracking-wider">Trust {activeOperator.trust} / 200</span>
                  </div>
                  <div className="flex gap-2 md:gap-3 mt-1">
                    <span className="text-[10px] md:text-xs text-white/30 font-display">HP {activeOperator.stats.hp}</span>
                    <span className="text-[10px] md:text-xs text-white/30 font-display">ATK {activeOperator.stats.atk}</span>
                  </div>
                </>)}
                {renderCard('trait', `${BUTTON_CYAN_BASE} flex-1 p-2 md:p-3`, BUTTON_CYAN_HOVER, <>
                  <img src={activeOperator.branchIcon} alt="" aria-hidden="true" className="absolute -right-3 -bottom-3 md:-right-4 md:-bottom-4 w-24 h-24 md:w-32 md:h-32 object-contain opacity-[0.12] pointer-events-none select-none" style={{ zIndex: 0 }} />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <h2 className="font-display text-sm md:text-xl font-bold text-white/90 tracking-wide">Trait</h2>
                    </div>
                    <div className="flex items-center gap-2 mb-2 md:mb-4">
                      <span className="font-display text-[10px] md:text-xs text-ak-accent-bright">{activeOperator.branch} {activeOperator.class}</span>
                      <span className="text-[9px] md:text-[10px] text-white/40">&middot; {activeOperator.position}</span>
                    </div>
                    <div className="relative z-10 bg-white/[0.06] border border-white/[0.08] p-2 md:p-4">
                      <p className="text-[10px] md:text-xs leading-relaxed text-white/80">{activeOperator.trait}</p>
                    </div>
                  </div>
                </>, true)}
              </div>
              <div className="flex gap-1.5 md:gap-2 flex-none md:flex-[2.5]">
                {renderCard('skills', `${BUTTON_BASE} w-[42%] p-2 md:p-3`, BUTTON_HOVER, <>
                  <div>
                    <h2 className="font-display text-sm md:text-xl font-bold text-white/90 tracking-wide">Skills</h2>
                    <div className="flex gap-1.5 md:gap-2 mt-1 md:mt-1.5">
                      {activeOperator.skills.map((skill) => (
                        <img key={skill.name} src={skill.icon} alt={skill.name} className="w-7 h-7 md:w-10 md:h-10 rounded object-contain bg-white/[0.06]" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[8px] md:text-[9px] text-white/30 font-display tracking-wider mt-1">{activeOperator.skills.length} Equipped &middot; {activeOperator.skills[0].rank}</span>
                </>)}
                {renderCard('talents', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-sm md:text-xl font-bold text-white/90 tracking-wide">Talents</h2>
                  <div className="mt-1">
                    {activeOperator.talents.map((talent) => (
                      <p key={talent.name} className="text-xs md:text-sm text-white/35 font-display leading-relaxed truncate">{talent.name}</p>
                    ))}
                  </div>
                </>)}
              </div>
              <div className="flex gap-1.5 md:gap-2 flex-none md:flex-[2]">
                {hasModules ? renderCard('modules', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-sm md:text-xl font-bold text-white/85 tracking-wide">Modules</h2>
                    <div className="flex gap-1">
                      {Object.values(activeOperator.modules).filter(mod => 'stages' in mod).map(mod => (
                        <span key={mod.code} className="text-[10px] md:text-xs px-1 md:px-1.5 py-0.5 bg-ak-gold/20 text-ak-gold-bright border border-ak-gold/30 font-display rounded-sm">{mod.code}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] md:text-xs text-white/30 font-display">{Object.keys(activeOperator.modules).length} Equipped</span>
                </>) : renderCard('modules', `${BUTTON_BASE} flex-1 p-2 md:p-3 opacity-40`, BUTTON_HOVER, <>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-sm md:text-xl font-bold text-white/30 tracking-wide">Modules</h2>
                  </div>
                  <div className="display-flex w-full">
                    <svg className="w-7 h-7 md:w-10 md:h-10 text-white/20 shrink-0 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <div className="text-[10px] md:text-xs text-white/15 font-display italic w-full text-center mt-1">— Module not available —</div>
                  </div>
                </>, true)}
                {renderCard('physexam', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, (() => {
                  const examValues = Object.values(activeOperator.physicalExam)
                  const maxRating = Math.max(...examValues.map(v => PHYSICAL_EXAM_RATINGS[v] || 3))
                  return <>
                    <h2 className="font-display text-sm md:text-xl font-bold text-white/85 tracking-wide">Physical Exam</h2>
                    <div className="flex gap-0.5 mt-1">
                      {examValues.map((examValue, examIndex) => {
                        const rating = PHYSICAL_EXAM_RATINGS[examValue] || 3
                        const isHighest = rating === maxRating
                        return <div
                          key={examIndex}
                          className={`h-1 flex-1 rounded-full ${rating >= 4 ? 'bg-ak-accent/60' : 'bg-white/15'}`}
                          style={isHighest && maxRating > 4 ? { animation: 'exam-blink 1.5s ease-in-out infinite' } : undefined}
                        />
                      })}
                    </div>
                  </>
                })())}
              </div>

              <div className="section-divider h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent my-0.5 md:my-1 origin-left" />

              <span className="section-label text-[8px] md:text-[10px] text-white/25 font-display tracking-[0.2em] uppercase pl-1">Operator Info</span>
              <div className="flex gap-1.5 md:gap-2 flex-none md:flex-[2]">
                {renderCard('profile', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-sm md:text-xl font-bold text-white/90 tracking-wide leading-none mb-0.5 md:mb-1">Profile</h2>
                  <div className="flex items-center gap-2 mt-0.5 md:mt-1">
                    <span className="text-[10px] md:text-xs text-white/50 font-display font-semibold">{activeOperator.name}</span>
                    <span className="text-[10px] md:text-xs text-white/30">&middot; {activeOperator.faction}</span>
                  </div>
                </>)}
                {renderCard('voice', `${BUTTON_BASE} flex-[0.7] p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-sm md:text-xl font-bold text-white/85 tracking-wide">Voice Actors</h2>
                  <span className="text-[10px] md:text-xs text-white/25 font-display mt-0.5 md:mt-1">4 Lang</span>
                </>)}
                {renderCard('story', `${BUTTON_BASE} flex-1 p-2 md:p-3`, BUTTON_HOVER, <>
                  <h2 className="font-display text-sm md:text-xl font-bold text-white/85 tracking-wide">Story</h2>
                  {activeOperator.story
                    ? <p className="text-[10px] md:text-xs text-white/30 font-display leading-relaxed italic mt-0.5 md:mt-1">This section might contain spoiler</p>
                    : <span className="text-[10px] md:text-xs text-white/25 font-display mt-0.5 md:mt-1">Coming Soon</span>
                  }
                </>)}
              </div>
            </div>
          </div>
        </div>

        <div className="fixed md:absolute inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]" />
      </div>

      <Footer />
    </div>
  )
}
