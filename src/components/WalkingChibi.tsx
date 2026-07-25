'use client'

import { useMemo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { getWalkableChibis, type WalkableChibi } from '../lib/operators'
import { getChibiId } from '../lib/chibiSelection'
import { useApp } from './AppShell'

gsap.registerPlugin(useGSAP)

const SPRITE_SIZE = 96
const EDGE_PADDING = 300
const WALK_SPEED_PX_PER_SEC = 55
const MIN_PAUSE_SEC = 1.5
const MAX_PAUSE_SEC = 5

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

interface WalkingChibiUnitProps {
  chibi: WalkableChibi
}

function WalkingChibiUnit({ chibi }: WalkingChibiUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const flipRef = useRef<HTMLDivElement>(null)
  const idleVideoRef = useRef<HTMLDivElement>(null)
  const moveVideoRef = useRef<HTMLDivElement>(null)
  const idleVideoElRef = useRef<HTMLVideoElement>(null)
  const moveVideoElRef = useRef<HTMLVideoElement>(null)

  useGSAP(() => {
    const container = containerRef.current
    const flipTarget = flipRef.current
    const idleLayer = idleVideoRef.current
    const moveLayer = moveVideoRef.current
    const idleVideoEl = idleVideoElRef.current
    const moveVideoEl = moveVideoElRef.current
    if (!container || !flipTarget || !idleLayer || !moveLayer || !idleVideoEl || !moveVideoEl) return

    const maxWalkX = () => window.innerWidth - SPRITE_SIZE - EDGE_PADDING
    gsap.set(container, { x: randomBetween(EDGE_PADDING, maxWalkX()) })

    // Idle starts visible/playing, move starts hidden — keep their decode state matching that
    // from the first frame instead of relying on the `walk()`/`onComplete` handoff below to
    // establish it (see the perf note on that handoff for why an always-decoding hidden layer
    // is expensive enough to matter at 5 mascots).
    moveVideoEl.pause()

    function walk() {
      const currentX = gsap.getProperty(container, 'x') as number
      const targetX = randomBetween(EDGE_PADDING, maxWalkX())
      const movingRight = targetX > currentX
      const walkDistance = Math.abs(targetX - currentX)

      gsap.set(flipTarget, { scaleX: movingRight ? 1 : -1 })
      // Idle and move are independent looping videos, not phase-locked — resetting to t=0 at
      // the exact moment each layer becomes visible guarantees it always starts from the same
      // calibrated pose (see chibiFraming's doc comment in types.ts for why that matters for
      // skins with a dynamic prop). Pausing whichever layer just became hidden (rather than
      // leaving both `<video>`s decoding forever) roughly doubles FPS with several mascots
      // active — alpha-channel VP9 decode is expensive and most of it was going to waste on
      // frames nobody could see.
      moveVideoEl!.currentTime = 0
      moveVideoEl!.play().catch(() => {})
      idleVideoEl!.pause()
      gsap.set(moveLayer, { opacity: 1 })
      gsap.set(idleLayer, { opacity: 0 })

      gsap.to(container, {
        x: targetX,
        duration: Math.max(walkDistance / WALK_SPEED_PX_PER_SEC, 0.4),
        ease: 'none',
        onComplete: () => {
          idleVideoEl!.currentTime = 0
          idleVideoEl!.play().catch(() => {})
          moveVideoEl!.pause()
          gsap.set(moveLayer, { opacity: 0 })
          gsap.set(idleLayer, { opacity: 1 })
          gsap.delayedCall(randomBetween(MIN_PAUSE_SEC, MAX_PAUSE_SEC), walk)
        },
      })
    }

    gsap.delayedCall(randomBetween(0, MAX_PAUSE_SEC), walk)
  }, [])

  const { scale, offsetXPercent, offsetYPercent } = chibi.framing

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 left-0 z-99 pointer-events-none w-19.25 h-19.25 md:w-21.5 md:h-21.5"
    >
      {/* The full chibi.framing transform (scale + offset) lives on this one plain wrapper div
          (not containerRef/flipRef, which GSAP owns for x-position and the walk-direction flip
          respectively — mixing a manual transform into an element GSAP animates gets silently
          overwritten whenever GSAP next sets that element's transform) and is shared by BOTH the
          idle and move layers below, rather than living on either video individually. That's what
          keeps idle and move sized and positioned identically for any value of `scale`/offset —
          see chibiFraming's doc comment in types.ts. */}
      <div className="w-full h-full" style={{ transform: `scale(${scale}) translate(${offsetXPercent}%, ${offsetYPercent}%)` }}>
        {/* Static ground shadow instead of a `drop-shadow` filter on the video layers below —
            `drop-shadow` on animated alpha-video content has to re-rasterize+blur from the alpha
            channel every single frame (the content keeps changing), which is expensive enough at
            5 mascots to roughly halve the frame rate on its own. A plain blurred ellipse costs
            nothing per frame since its own content never changes — the compositor just reuses the
            same rasterized layer. */}
        <div className="absolute inset-x-0 bottom-[6%] mx-auto w-[55%] h-[12%] rounded-full bg-black/45 blur-[3px]" />
        <div ref={flipRef} className="relative w-full h-full overflow-hidden">
          <div ref={idleVideoRef} className="absolute inset-0">
            <video
              ref={idleVideoElRef}
              src={chibi.idleSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div ref={moveVideoRef} className="absolute inset-0 opacity-0">
            <video
              ref={moveVideoElRef}
              src={chibi.moveSrc}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function WalkingChibi() {
  const { selectedChibiIds } = useApp()
  const pool = useMemo(() => getWalkableChibis(), [])
  const activeChibis = useMemo(
    () => pool.filter(chibi => selectedChibiIds.includes(getChibiId(chibi))),
    [pool, selectedChibiIds],
  )

  return (
    <>
      {activeChibis.map(chibi => (
        <WalkingChibiUnit key={getChibiId(chibi)} chibi={chibi} />
      ))}
    </>
  )
}
