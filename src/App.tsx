import { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { OPERATORS } from './data/operators'
import { BUTTON_BASE, BUTTON_HOVER, BUTTON_CYAN_BASE, BUTTON_CYAN_HOVER, PHYSICAL_EXAM_RATINGS } from './constants'
import { PANEL_CONFIGS } from './components/panels'
import { SplashScreen } from './components/SplashScreen'
import { CharacterArt } from './components/CharacterArt'
import { OperatorHud } from './components/OperatorHud'
import { SkinSelector } from './components/SkinSelector'
import { TopBar } from './components/TopBar'
import { NavigationArrows } from './components/NavigationArrows'

gsap.registerPlugin(useGSAP)

export default function App() {
  const [hasEntered, setHasEntered] = useState(false)
  const [operatorIndex, setOperatorIndex] = useState(0)
  const [expandedPanelId, setExpandedPanelId] = useState<string | null>(null)
  const [skinIndex, setSkinIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isAudioReady, setIsAudioReady] = useState(false)

  const activeOperator = OPERATORS[operatorIndex]

  const splashRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLImageElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
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
    const transitionSound = new Audio('/glitch_transition.mp3')
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
    const clickSound = new Audio('/futuristic_click.mp3')
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

  const handleEnter = useCallback(() => {
    if (hasEntered) return
    const enterSound = new Audio('/enter_effect.mp3')
    enterSound.volume = 0.8
    enterSound.play().catch(() => {})
    const audioElement = audioRef.current
    if (audioElement) {
      audioElement.volume = 0
      audioElement.play().then(() => {
        setIsAudioReady(true)
        const volumeFade = { volume: 0 }
        gsap.to(volumeFade, { volume: 0.8, duration: 1, ease: 'power2.out', onUpdate: () => { if (!audioElement.muted) audioElement.volume = volumeFade.volume } })
      }).catch(() => {})
    }
    const splashElement = splashRef.current
    if (splashElement) {
      gsap.to(splashElement, { opacity: 0, duration: 0.6, ease: 'power2.inOut', onComplete: () => setHasEntered(true) })
    } else {
      setHasEntered(true)
    }
  }, [hasEntered])

  useEffect(() => {
    const audioElement = audioRef.current
    if (!audioElement || !isAudioReady) return
    const handleVisibilityChange = () => {
      if (document.hidden) audioElement.pause()
      else if (!isMuted) audioElement.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [isAudioReady, isMuted])

  const toggleMute = useCallback(() => {
    const audioElement = audioRef.current
    if (!audioElement) return
    if (isMuted) {
      audioElement.muted = false
      const volumeFade = { volume: 0 }
      gsap.to(volumeFade, { volume: 0.8, duration: 0.5, ease: 'power2.out', onUpdate: () => { audioElement.volume = volumeFade.volume } })
    } else {
      const volumeFade = { volume: audioElement.volume }
      gsap.to(volumeFade, { volume: 0, duration: 0.3, ease: 'power2.in', onUpdate: () => { audioElement.volume = volumeFade.volume }, onComplete: () => { audioElement.muted = true } })
    }
    setIsMuted(!isMuted)
  }, [isMuted])

  const switchOperator = useCallback((direction: -1 | 1) => {
    if (isSkinAnimating.current) return
    const clickSound = new Audio('/futuristic_click.mp3')
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
        return nextIndex
      })
      isSkinAnimating.current = false
    }
  }, [])

  useGSAP(() => {
    if (!hasEntered) {
      gsap.set(['.char-art', '.bottom-info', '.lobby-btn', '.hud-item', '.skin-btn', '.section-label', '.section-divider'], { opacity: 0 })
      return
    }
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

  const renderCard = (panelId: string, baseClassName: string, hoverClassName: string, previewContent: React.ReactNode) => {
    const panelConfig = PANEL_CONFIGS[panelId]
    const isExpanded = expandedPanelId === panelId
    const PanelComponent = panelConfig.Component
    return (
      <div
        ref={element => { panelRefs.current[panelId] = element }}
        onClick={() => !isExpanded && expandPanel(panelId)}
        role="button"
        tabIndex={isExpanded ? -1 : 0}
        onKeyDown={event => { if (!isExpanded && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); expandPanel(panelId) } }}
        className={`${baseClassName} ${isExpanded ? '' : hoverClassName}`}
      >
        <div className="btn-preview flex flex-col justify-between h-full">{previewContent}</div>
        {isExpanded && (
          <div className="btn-expanded absolute inset-0 flex flex-col">
            <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b border-white/[0.1] shrink-0">
              <div className={`w-1 h-5 ${panelConfig.accent} rounded-full`} />
              <h2 className="font-display text-lg font-bold text-white/90 tracking-wider uppercase">{panelConfig.title}</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6 ak-scroll">
              <PanelComponent operator={activeOperator} />
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-ak-bg">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(59,164,201,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.04)_0%,transparent_50%)]" />
      <div className="glow-orb absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-ak-accent/8 rounded-full blur-[120px] opacity-20" />
      <div className="scanline absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-ak-accent/20 to-transparent pointer-events-none z-50" style={{ top: '-1px' }} />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* Character art section */}
      <CharacterArt ref={artRef} operator={activeOperator} skinSrc={activeOperator.skins[skinIndex].src} />

      {/* Operator info HUD (bottom-left) */}
      <OperatorHud operator={activeOperator} />

      {/* Skin selector (top-left) */}
      <SkinSelector skins={activeOperator.skins} activeSkinIndex={skinIndex} onSkinChange={switchSkin} />

      {/* Audio */}
      <audio ref={audioRef} src="/Arknights OST.mp3" loop preload="auto" />

      {/* Top bar with mute + Rhodes Island badge */}
      <TopBar isMuted={isMuted} onToggleMute={toggleMute} />

      {/* Right panel grid */}
      <div className="absolute right-0 top-0 w-[46%] h-full z-20">
        <div className="absolute inset-0 bg-gradient-to-l from-ak-bg/70 via-ak-bg/40 to-transparent pointer-events-none" />
        <div ref={gridRef} className="relative z-10 h-full flex flex-col justify-center gap-2 pr-6 pl-4 pt-16 pb-6">

          {/* Combat Data section */}
          <span className="section-label text-[10px] text-white/25 font-display tracking-[0.2em] uppercase pl-1">Combat Data</span>
          <div className="flex gap-2 flex-[2]">
            {renderCard('attribute', `${BUTTON_BASE} w-[38%] p-3`, BUTTON_HOVER, <>
              <div>
                <h2 className="font-display text-xl font-bold text-white/90 tracking-wide leading-none mb-1">Attribute</h2>
                <span className="font-display text-[10px] text-white/40 tracking-wider">Trust {activeOperator.trust} / 200</span>
              </div>
              <div className="flex gap-3 mt-1.5">
                <span className="text-[9px] text-white/30 font-display">HP {activeOperator.stats.hp}</span>
                <span className="text-[9px] text-white/30 font-display">ATK {activeOperator.stats.atk}</span>
              </div>
            </>)}
            {renderCard('trait', `${BUTTON_CYAN_BASE} flex-1 p-3`, BUTTON_CYAN_HOVER, <>
              <div className="flex items-start justify-between">
                <h2 className="font-display text-xl font-bold text-white/90 tracking-wide">Trait</h2>
                <img src={activeOperator.branchIcon} alt={activeOperator.branch} className="w-6 h-6 shrink-0 object-contain opacity-70 drop-shadow-[0_0_6px_rgba(59,164,201,0.3)]" />
              </div>
              <div><span className="text-[9px] text-white/40 font-display">{activeOperator.class} &middot; {activeOperator.branch}</span></div>
            </>)}
          </div>
          <div className="flex gap-2 flex-[2.5]">
            {renderCard('skills', `${BUTTON_BASE} w-[42%] p-3`, BUTTON_HOVER, <>
              <div>
                <h2 className="font-display text-xl font-bold text-white/90 tracking-wide">Skills</h2>
                <div className="flex gap-1.5 mt-1.5">
                  {activeOperator.skills.map((skill) => (
                    <img key={skill.name} src={skill.icon} alt={skill.name} className="w-6 h-6 rounded object-contain bg-white/[0.06]" />
                  ))}
                </div>
              </div>
              <span className="text-[9px] text-white/30 font-display tracking-wider mt-1">3 Equipped &middot; M3</span>
            </>)}
            {renderCard('talents', `${BUTTON_BASE} flex-1 p-3`, BUTTON_HOVER, <>
              <h2 className="font-display text-xl font-bold text-white/90 tracking-wide">Talents</h2>
              <div className="mt-1.5">
                <p className="text-[9px] text-white/35 font-display leading-relaxed truncate">{activeOperator.talents[0].name}</p>
                <p className="text-[9px] text-white/35 font-display leading-relaxed truncate">{activeOperator.talents[1].name}</p>
              </div>
            </>)}
          </div>
          <div className="flex gap-2 flex-[2]">
            {renderCard('modules', `${BUTTON_BASE} flex-1 p-3`, BUTTON_HOVER, <>
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-white/85 tracking-wide">Modules</h2>
                <div className="flex gap-1">
                  {Object.values(activeOperator.modules).filter(mod => 'stages' in mod).map(mod => (
                    <span key={mod.code} className="text-[8px] px-1.5 py-0.5 bg-ak-gold/20 text-ak-gold-bright border border-ak-gold/30 font-display rounded-sm">{mod.code}</span>
                  ))}
                </div>
              </div>
              <span className="text-[9px] text-white/30 font-display">{Object.keys(activeOperator.modules).length} Equipped</span>
            </>)}
            {renderCard('physexam', `${BUTTON_BASE} flex-1 p-3`, BUTTON_HOVER, <>
              <h2 className="font-display text-xl font-bold text-white/85 tracking-wide">Physical</h2>
              <div className="flex gap-0.5 mt-1.5">
                {Object.values(activeOperator.physicalExam).map((examValue, examIndex) => {
                  const rating = PHYSICAL_EXAM_RATINGS[examValue] || 3
                  return <div key={examIndex} className={`h-1 flex-1 rounded-full ${rating >= 4 ? 'bg-ak-accent/60' : 'bg-white/15'}`} />
                })}
              </div>
            </>)}
          </div>

          {/* Section divider */}
          <div className="section-divider h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent my-1 origin-left" />

          {/* Operator Info section */}
          <span className="section-label text-[10px] text-white/25 font-display tracking-[0.2em] uppercase pl-1">Operator Info</span>
          <div className="flex gap-2 flex-[2]">
            {renderCard('profile', `${BUTTON_BASE} flex-1 p-3`, BUTTON_HOVER, <>
              <h2 className="font-display text-xl font-bold text-white/90 tracking-wide leading-none mb-1">Profile</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] text-white/50 font-display font-semibold">{activeOperator.name}</span>
                <span className="text-[9px] text-white/30">&middot; {activeOperator.faction}</span>
              </div>
            </>)}
            {renderCard('voice', `${BUTTON_BASE} flex-[0.7] p-3`, BUTTON_HOVER, <>
              <h2 className="font-display text-xl font-bold text-white/85 tracking-wide">Voice</h2>
              <span className="text-[9px] text-white/25 font-display mt-1">4 Lang</span>
            </>)}
            {renderCard('lore', `${BUTTON_BASE} flex-1 p-3`, BUTTON_HOVER, <>
              <h2 className="font-display text-xl font-bold text-white/85 tracking-wide">Lore</h2>
              <p className="text-[9px] text-white/25 font-display leading-relaxed line-clamp-1 italic mt-1">{activeOperator.lore.slice(0, 60)}...</p>
            </>)}
          </div>
        </div>
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]" />

      {/* Operator navigation arrows */}
      {hasEntered && OPERATORS.length > 1 && (
        <NavigationArrows onPrevious={() => switchOperator(-1)} onNext={() => switchOperator(1)} />
      )}

      {/* Splash screen */}
      {!hasEntered && <SplashScreen ref={splashRef} onEnter={handleEnter} />}
    </div>
  )
}
