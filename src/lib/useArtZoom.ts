import { useState, useRef, useCallback, useEffect } from 'react'

const MIN_ZOOM = 1
const MAX_ZOOM = 4
const DOUBLE_CLICK_ZOOM = 2.5
const WHEEL_SENSITIVITY = 0.0012
const TAP_MAX_MOVE_PX = 10
const TAP_MAX_DURATION_MS = 250
const DOUBLE_TAP_WINDOW_MS = 300
const DOUBLE_TAP_MAX_DISTANCE_PX = 30

export interface ZoomTransform {
  scale: number
  offsetX: number
  offsetY: number
}

const IDENTITY: ZoomTransform = { scale: 1, offsetX: 0, offsetY: 0 }

interface TapPoint {
  x: number
  y: number
  time: number
}

interface PinchState {
  startDistance: number
  startScale: number
}

/**
 * Wheel / pinch / drag / double-click zoom for the character art.
 * `viewportRef` receives the gestures; `contentRef` is the element that gets transformed
 * (transform-origin: center). Offsets are clamped so the art edge never drifts past the
 * viewport center, and everything resets whenever `resetKey` changes (skin / operator switch).
 */
export function useArtZoom(resetKey: string) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState<ZoomTransform>(IDENTITY)
  const [isGesturing, setIsGesturing] = useState(false)
  const transformRef = useRef(transform)

  const activePointers = useRef(new Map<number, { x: number; y: number }>())
  const pinchState = useRef<PinchState | null>(null)
  // Touch double-tap is detected by hand: synthesized dblclick on touch is unreliable across mobile browsers.
  const tapStart = useRef<TapPoint | null>(null)
  const lastTap = useRef<TapPoint | null>(null)
  const lastTouchToggleTime = useRef(0)

  // Several pointer/wheel events can land before React re-renders, so keep the ref in sync eagerly.
  const commitTransform = useCallback((next: ZoomTransform) => {
    transformRef.current = next
    setTransform(next)
  }, [])

  const resetZoom = useCallback(() => commitTransform(IDENTITY), [commitTransform])

  useEffect(() => { resetZoom() }, [resetKey, resetZoom])

  const clampTransform = useCallback((next: ZoomTransform): ZoomTransform => {
    const content = contentRef.current
    const scale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next.scale))
    if (!content || scale === 1) return { scale, offsetX: 0, offsetY: 0 }
    const maxOffsetX = (content.offsetWidth * (scale - 1)) / 2
    const maxOffsetY = (content.offsetHeight * (scale - 1)) / 2
    return {
      scale,
      offsetX: Math.min(maxOffsetX, Math.max(-maxOffsetX, next.offsetX)),
      offsetY: Math.min(maxOffsetY, Math.max(-maxOffsetY, next.offsetY)),
    }
  }, [])

  // Zooms so the content point under (clientX, clientY) stays under the cursor.
  const zoomAtPoint = useCallback((targetScale: number, clientX: number, clientY: number) => {
    const content = contentRef.current
    const current = transformRef.current
    if (!content) return
    const clampedScale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, targetScale))
    const rect = content.getBoundingClientRect()
    // Untransformed center of the content box = current visual center minus the applied offset.
    const centerX = rect.left + rect.width / 2 - current.offsetX
    const centerY = rect.top + rect.height / 2 - current.offsetY
    const anchorX = clientX - centerX
    const anchorY = clientY - centerY
    const ratio = clampedScale / current.scale
    commitTransform(clampTransform({
      scale: clampedScale,
      offsetX: anchorX - (anchorX - current.offsetX) * ratio,
      offsetY: anchorY - (anchorY - current.offsetY) * ratio,
    }))
  }, [clampTransform, commitTransform])


  // Wheel needs a non-passive native listener so preventDefault can stop page scroll.
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const handleWheel = (event: WheelEvent) => {
      if ((event.target as HTMLElement).closest('[data-zoom-ignore]')) return
      event.preventDefault()
      const factor = Math.exp(-event.deltaY * WHEEL_SENSITIVITY * (event.deltaMode === 1 ? 30 : 1))
      zoomAtPoint(transformRef.current.scale * factor, event.clientX, event.clientY)
    }
    viewport.addEventListener('wheel', handleWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', handleWheel)
  }, [zoomAtPoint])

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.closest('button, a, [data-zoom-ignore]')) return
    if (event.pointerType === 'mouse' && event.button !== 0) return
    activePointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    tapStart.current = event.pointerType === 'touch' && activePointers.current.size === 1
      ? { x: event.clientX, y: event.clientY, time: event.timeStamp }
      : null
    if (activePointers.current.size === 2) {
      const [first, second] = [...activePointers.current.values()]
      pinchState.current = {
        startDistance: Math.hypot(second.x - first.x, second.y - first.y),
        startScale: transformRef.current.scale,
      }
    }
    // A single touch at 1x must stay a page scroll on mobile, so only capture once there's something to pan or pinch.
    if (transformRef.current.scale > 1 || activePointers.current.size === 2) {
      event.currentTarget.setPointerCapture(event.pointerId)
      setIsGesturing(true)
    }
  }, [])

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const previous = activePointers.current.get(event.pointerId)
    if (!previous) return
    const next = { x: event.clientX, y: event.clientY }
    activePointers.current.set(event.pointerId, next)

    if (activePointers.current.size === 2 && pinchState.current) {
      const [first, second] = [...activePointers.current.values()]
      const distance = Math.hypot(second.x - first.x, second.y - first.y)
      zoomAtPoint(
        pinchState.current.startScale * (distance / pinchState.current.startDistance),
        (first.x + second.x) / 2,
        (first.y + second.y) / 2,
      )
      return
    }
    const current = transformRef.current
    if (activePointers.current.size === 1 && current.scale > 1) {
      commitTransform(clampTransform({
        scale: current.scale,
        offsetX: current.offsetX + (next.x - previous.x),
        offsetY: current.offsetY + (next.y - previous.y),
      }))
    }
  }, [clampTransform, commitTransform, zoomAtPoint])

  const toggleZoomAt = useCallback((clientX: number, clientY: number) => {
    if (transformRef.current.scale > 1) resetZoom()
    else zoomAtPoint(DOUBLE_CLICK_ZOOM, clientX, clientY)
  }, [resetZoom, zoomAtPoint])

  const handlePointerEnd = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    activePointers.current.delete(event.pointerId)
    if (activePointers.current.size < 2) pinchState.current = null
    if (activePointers.current.size === 0) setIsGesturing(false)
  }, [])

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const start = tapStart.current
    tapStart.current = null
    handlePointerEnd(event)
    if (!start || event.pointerType !== 'touch') return
    const isTap = Math.hypot(event.clientX - start.x, event.clientY - start.y) < TAP_MAX_MOVE_PX
      && event.timeStamp - start.time < TAP_MAX_DURATION_MS
    if (!isTap) return
    const previous = lastTap.current
    if (previous
      && start.time - previous.time < DOUBLE_TAP_WINDOW_MS
      && Math.hypot(start.x - previous.x, start.y - previous.y) < DOUBLE_TAP_MAX_DISTANCE_PX) {
      lastTap.current = null
      lastTouchToggleTime.current = event.timeStamp
      toggleZoomAt(start.x, start.y)
    } else {
      lastTap.current = { x: start.x, y: start.y, time: event.timeStamp }
    }
  }, [handlePointerEnd, toggleZoomAt])

  const handleDoubleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button, a, [data-zoom-ignore]')) return
    // Some browsers still fire dblclick after a double-tap we already handled.
    if (event.timeStamp - lastTouchToggleTime.current < 600) return
    toggleZoomAt(event.clientX, event.clientY)
  }, [toggleZoomAt])

  return {
    viewportRef,
    contentRef,
    transform,
    isGesturing,
    viewportHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerEnd,
      onDoubleClick: handleDoubleClick,
    },
  }
}
