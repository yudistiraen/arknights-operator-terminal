import { forwardRef, useState, useEffect } from 'react'
import Image from 'next/image'
import type { Operator, OperatorSkin, SkinL2D } from '../types'
import type { WalkingToggleProps } from '../lib/chibiSelection'
import { SpineViewer } from './SpineViewer'
import { useArtZoom } from '../lib/useArtZoom'

const ZOOM_HINT_STORAGE_KEY = 'ak-art-zoom-hint-seen'
const ZOOM_HINT_DELAY_MS = 1400
const ZOOM_HINT_DURATION_MS = 5000

interface CharacterArtProps {
  operator: Operator
  skinSrc: string
  chibiSrc: string
  chibiDetailFraming?: OperatorSkin['chibiDetailFraming']
  walkingToggle?: WalkingToggleProps
  l2d?: SkinL2D
  showL2D: boolean
}

export const CharacterArt = forwardRef<HTMLImageElement, CharacterArtProps>(
  function CharacterArt({ operator, skinSrc, chibiSrc, chibiDetailFraming, walkingToggle, l2d, showL2D }, ref) {
    const [chibiError, setChibiError] = useState(false)
    useEffect(() => { setChibiError(false) }, [chibiSrc])
    const { viewportRef, contentRef, transform, isGesturing, viewportHandlers } = useArtZoom(`${operator.name}::${skinSrc}`)
    const isZoomed = transform.scale > 1

    // One-time discoverability hint; stops showing for good once the viewer has zoomed.
    const [showZoomHint, setShowZoomHint] = useState(false)
    const [isTouchDevice, setIsTouchDevice] = useState(false)
    useEffect(() => {
      try { if (localStorage.getItem(ZOOM_HINT_STORAGE_KEY)) return } catch { /* storage blocked — still show it */ }
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
      const showTimer = setTimeout(() => setShowZoomHint(true), ZOOM_HINT_DELAY_MS)
      const hideTimer = setTimeout(() => setShowZoomHint(false), ZOOM_HINT_DELAY_MS + ZOOM_HINT_DURATION_MS)
      return () => { clearTimeout(showTimer); clearTimeout(hideTimer) }
    }, [])
    useEffect(() => {
      if (!isZoomed) return
      setShowZoomHint(false)
      try { localStorage.setItem(ZOOM_HINT_STORAGE_KEY, '1') } catch { /* non-critical */ }
    }, [isZoomed])

    return (
      <div
        ref={viewportRef}
        {...viewportHandlers}
        className={`absolute inset-0 overflow-hidden select-none ${isZoomed ? 'touch-none' : 'touch-pan-y'} ${isZoomed ? (isGesturing ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ak-bg z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ak-bg via-ak-bg/70 to-transparent z-10" />
        <div className="char-art absolute inset-0 z-0 flex items-center justify-center">
          <div
            ref={contentRef}
            className="relative w-[90%] h-[92%] will-change-transform"
            style={{
              transform: `translate3d(${transform.offsetX}px, ${transform.offsetY}px, 0) scale(${transform.scale})`,
              transition: isGesturing ? 'none' : 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {/* Image stays mounted even while the L2D layer covers it (just hidden via visibility,
                not opacity — GSAP's playArtTransition animates this element's inline opacity, which
                would fight a Tailwind opacity class) — switchSkin/switchOperator in OperatorTerminal
                animate via this ref, so unmounting it while L2D is active would null the ref and
                silently break navigation while viewing L2D. */}
            <Image
              ref={ref}
              src={skinSrc}
              alt={operator.name}
              fill
              priority
              draggable={false}
              // Zoomed in, ask for the biggest srcset candidate so the art stays sharp.
              sizes={isZoomed ? '(max-width: 768px) 360vw, 220vw' : '(max-width: 768px) 90vw, 55vw'}
              className={`object-contain drop-shadow-[0_0_40px_rgba(59,164,201,0.1)] ${l2d && showL2D ? 'invisible' : ''}`}
            />
            {l2d && showL2D && (
              <SpineViewer l2d={l2d} className="absolute inset-0 w-full h-full drop-shadow-[0_0_40px_rgba(59,164,201,0.1)]" />
            )}
          </div>
        </div>
        <div
          aria-hidden={!showZoomHint}
          className={`absolute top-14 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center gap-2 px-3 py-1.5 bg-ak-panel/75 backdrop-blur-md border border-ak-accent/30 shadow-[0_4px_16px_rgba(0,0,0,0.3),0_0_12px_rgba(59,164,201,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] ${
            showZoomHint ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1.5'
          }`}
          style={{ transition: 'opacity 0.5s cubic-bezier(0.22,1,0.36,1), translate 0.5s cubic-bezier(0.22,1,0.36,1)' }}
        >
          {isTouchDevice ? (
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-ak-accent-bright stroke-2">
              <path d="M4 4l5 5M4 4v4M4 4h4M20 20l-5-5M20 20v-4M20 20h-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-ak-accent-bright stroke-2">
              <rect x="6" y="3" width="12" height="18" rx="6" />
              <path d="M12 7v3" strokeLinecap="round" />
            </svg>
          )}
          <span className="font-display text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-white/75 whitespace-nowrap">
            {isTouchDevice ? 'Pinch to zoom · Double-tap to reset' : 'Scroll to zoom · Double-click to reset'}
          </span>
        </div>
        <div data-zoom-ignore className="hud-item absolute bottom-4 right-4 md:bottom-8 md:right-20 z-20 flex flex-col items-center gap-2 md:gap-5">
          <div className="relative w-20 h-20 md:w-35 md:h-35 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-ak-panel/40 backdrop-blur-sm border border-ak-border/30 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(59,164,201,0.06)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ak-accent/40" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ak-accent/40" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ak-accent/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ak-accent/40" />
            {walkingToggle && (
              <button
                type="button"
                onClick={walkingToggle.onToggle}
                disabled={walkingToggle.disabled}
                title={walkingToggle.isSelected ? 'Remove from walking chibi' : 'Set this skin as walking chibi'}
                aria-pressed={walkingToggle.isSelected}
                className={`absolute top-1 left-1 z-20 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright ${
                  walkingToggle.isSelected
                    ? 'bg-ak-accent/80 border-ak-accent-bright text-white'
                    : 'bg-black/40 border-white/20 text-white/50 hover:border-white/40 hover:text-white/80'
                } ${walkingToggle.disabled && !walkingToggle.isSelected ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                style={{ transition: 'background-color 0.2s, border-color 0.2s, color 0.2s, opacity 0.2s' }}
              >
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current">
                  <ellipse cx="12" cy="15.5" rx="4.5" ry="6.5" />
                  <circle cx="9" cy="4.2" r="1.3" />
                  <circle cx="12.2" cy="3.2" r="1.5" />
                  <circle cx="15.2" cy="4.2" r="1.3" />
                  <circle cx="17.2" cy="6.8" r="1" />
                </svg>
              </button>
            )}
            {chibiError ? (
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <span className="font-display text-xs text-white/20 tracking-wider">-Data Not Found-</span>
              </div>
            ) : (
              <video
                key={chibiSrc}
                src={chibiSrc}
                autoPlay
                loop
                muted
                playsInline
                onError={() => setChibiError(true)}
                style={chibiDetailFraming ? {
                  transform: `scale(${chibiDetailFraming.scale}) translate(${chibiDetailFraming.offsetXPercent}%, ${chibiDetailFraming.offsetYPercent}%)`,
                } : undefined}
                className={`relative z-10 w-full h-full object-cover drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] ${
                  chibiDetailFraming ? '' : 'scale-110 -translate-y-2 md:-translate-y-4'
                }`}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
)
