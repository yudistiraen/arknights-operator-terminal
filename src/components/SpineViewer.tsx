import { useEffect, useRef, useState } from 'react'
import { spine } from '../lib/vendor/spine-webgl-3.8'
import type { SkinL2D } from '../types'
import { assetUrl } from '../lib/assetUrl'
import { Spinner } from './ui/Spinner'

// Arknights dynamic illustrations are exported from Spine 3.8, which Esoteric Software
// never published to npm (only 4.0+ is on @esotericsoftware/spine-webgl). The 3.8 runtime
// is vendored from the official spine-runtimes repo's `3.8` branch build output instead,
// and lacks the newer SpineCanvas convenience wrapper, so the render loop is wired by hand.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const spineLib = spine as any

const CAMERA_PADDING = 1.35
// Dynamic illustrations bundle a wide cinematic backdrop (rubble, or in scenes with multiple
// characters, the other operators too — spanning far outside the operator herself) in the same
// skeleton. All slots render — nothing is hidden — but framing is computed from her own slots
// only, so the camera stays centered on her instead of zooming out to fit the whole cast/scene.
// Without an explicit prefix, only "bg_"-prefixed slots are excluded (the common case).
const DEFAULT_BACKGROUND_SLOT_PREFIX = 'bg_'
// Backing-store resolution is snapped to this step so a pinch/wheel zoom doesn't reallocate the
// drawing buffer every frame, and capped so a 4× zoom on a high-DPR screen stays within GPU limits.
const RESOLUTION_SCALE_STEP = 0.5
const MAX_CANVAS_SIDE = 4096

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pickAnimationName(animations: any[]): string | null {
  if (animations.length === 0) return null
  const loop = animations.find(animation => /idle|loop/i.test(animation.name))
  return (loop ?? animations[0]).name
}

// Same approach as Skeleton.prototype.getBounds, but restricted to the operator's own slots
// (via characterSlotPrefix, or by excluding "bg_"-prefixed ones by default) so they don't pull
// the framing wide. Falls back to the full skeleton if that leaves nothing to measure.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getForegroundBounds(skeleton: any, offset: any, size: any, characterSlotPrefix?: string) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  let temp: number[] = []
  for (const slot of skeleton.drawOrder) {
    const name = slot.data.name
    const isForeground = characterSlotPrefix ? name.startsWith(characterSlotPrefix) : !name.startsWith(DEFAULT_BACKGROUND_SLOT_PREFIX)
    if (!slot.bone.active || !isForeground) continue
    const attachment = slot.getAttachment()
    if (!attachment) continue
    let vertices: number[] | null = null
    if (attachment instanceof spineLib.RegionAttachment) {
      temp = spineLib.Utils.setArraySize(temp, 8, 0)
      attachment.computeWorldVertices(slot.bone, temp, 0, 2)
      vertices = temp
    } else if (attachment instanceof spineLib.MeshAttachment) {
      temp = spineLib.Utils.setArraySize(temp, attachment.worldVerticesLength, 0)
      attachment.computeWorldVertices(slot, 0, attachment.worldVerticesLength, temp, 0, 2)
      vertices = temp
    }
    if (!vertices) continue
    for (let i = 0; i < vertices.length; i += 2) {
      minX = Math.min(minX, vertices[i])
      minY = Math.min(minY, vertices[i + 1])
      maxX = Math.max(maxX, vertices[i])
      maxY = Math.max(maxY, vertices[i + 1])
    }
  }
  if (minX === Infinity) {
    skeleton.getBounds(offset, size, [])
    return
  }
  offset.set(minX, minY)
  size.set(maxX - minX, maxY - minY)
}

interface SpineViewerProps {
  l2d: SkinL2D
  className?: string
  /** CSS zoom applied by the parent (useArtZoom). The canvas is upscaled by a CSS transform when
   * zoomed, so its drawing buffer is rendered this many times larger to stay sharp. */
  resolutionScale?: number
}

export function SpineViewer({ l2d, className, resolutionScale = 1 }: SpineViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(true)
  // Read from the render loop without restarting the effect (which would reload the skeleton).
  const resolutionScaleRef = useRef(resolutionScale)
  resolutionScaleRef.current = resolutionScale

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    setFailed(false)
    setLoading(true)
    let disposed = false
    let rafId = 0

    const context = new spineLib.webgl.ManagedWebGLRenderingContext(canvas, { alpha: true })
    const renderer = new spineLib.webgl.SceneRenderer(canvas, context)
    const assetManager = new spineLib.webgl.AssetManager(context)
    // L2D files live on R2 in production (knowledge/cloudflare_r2.md); the atlas's page PNGs resolve
    // relative to the atlas URL, so they follow it automatically.
    const skelUrl = assetUrl(l2d.skel)
    const atlasUrl = assetUrl(l2d.atlas)
    const backdrop = l2d.backdrop
    const backdropUrl = backdrop ? assetUrl(backdrop.src) : null
    assetManager.loadBinary(skelUrl)
    assetManager.loadTextureAtlas(atlasUrl)
    if (backdropUrl) assetManager.loadTexture(backdropUrl)
    let backdropTexture: any = null

    let skeleton: any = null
    let animationState: any = null
    let lastTime = 0
    const maxRenderbufferSize: number = context.gl.getParameter(context.gl.MAX_RENDERBUFFER_SIZE)

    // Replaces SceneRenderer.resize(ResizeMode.Fit), which sizes the drawing buffer to the canvas's
    // CSS size — ignoring devicePixelRatio and the parent's zoom, so zoomed-in art went blurry.
    function resizeToDisplay() {
      const canvasElement = canvas as HTMLCanvasElement
      const snappedScale = Math.ceil(resolutionScaleRef.current / RESOLUTION_SCALE_STEP) * RESOLUTION_SCALE_STEP
      const desiredScale = (window.devicePixelRatio || 1) * Math.max(1, snappedScale)
      const longestSide = Math.max(canvasElement.clientWidth, canvasElement.clientHeight, 1)
      const pixelScale = Math.min(desiredScale, Math.min(MAX_CANVAS_SIDE, maxRenderbufferSize) / longestSide)
      const width = Math.round(canvasElement.clientWidth * pixelScale)
      const height = Math.round(canvasElement.clientHeight * pixelScale)
      if (canvasElement.width !== width || canvasElement.height !== height) {
        canvasElement.width = width
        canvasElement.height = height
      }
      context.gl.viewport(0, 0, width, height)
      // Fit: grow the camera viewport along one axis so it matches the canvas aspect ratio.
      const camera = renderer.camera
      const scale = camera.viewportHeight / camera.viewportWidth < height / width
        ? camera.viewportWidth / width
        : camera.viewportHeight / height
      camera.viewportWidth = width * scale
      camera.viewportHeight = height * scale
      camera.update()
    }

    function render(now: number) {
      if (disposed) return
      rafId = requestAnimationFrame(render)
      const delta = lastTime === 0 ? 0 : (now - lastTime) / 1000
      lastTime = now
      if (!skeleton || !animationState) return

      animationState.update(delta)
      animationState.apply(skeleton)
      skeleton.updateWorldTransform()

      resizeToDisplay()
      context.gl.clearColor(0, 0, 0, 0)
      context.gl.clear(context.gl.COLOR_BUFFER_BIT)
      renderer.begin()
      if (backdrop && backdropTexture) {
        // Skeleton slots leave the batcher on whatever blend mode the last slot used.
        renderer.batcher.setBlendMode(context.gl.ONE, context.gl.ONE_MINUS_SRC_ALPHA)
        renderer.drawTexture(backdropTexture, backdrop.x, backdrop.y, backdrop.width, backdrop.height)
      }
      renderer.drawSkeleton(skeleton, true)
      renderer.end()
    }

    function waitForAssets() {
      if (disposed) return
      if (!assetManager.isLoadingComplete()) {
        requestAnimationFrame(waitForAssets)
        return
      }
      if (assetManager.hasErrors()) {
        setFailed(true)
        return
      }

      if (backdropUrl) backdropTexture = assetManager.get(backdropUrl)
      const atlas = assetManager.get(atlasUrl)
      const attachmentLoader = new spineLib.AtlasAttachmentLoader(atlas)
      const skeletonBinary = new spineLib.SkeletonBinary(attachmentLoader)
      const binary = assetManager.get(skelUrl)
      const skeletonData = skeletonBinary.readSkeletonData(binary)

      skeleton = new spineLib.Skeleton(skeletonData)
      skeleton.setToSetupPose()
      skeleton.updateWorldTransform()

      const stateData = new spineLib.AnimationStateData(skeletonData)
      animationState = new spineLib.AnimationState(stateData)
      const animationName = pickAnimationName(skeletonData.animations)
      if (animationName) animationState.setAnimation(0, animationName, true)
      // Frame from the animation's first frame, not the setup pose: some skeletons park slots far
      // off-screen in setup (e.g. Rosmontis "Become Anew" BG_A at x≈-3100) and only the animation
      // brings them into place, which made the camera zoom out to fit space that's never shown.
      animationState.update(0)
      animationState.apply(skeleton)
      skeleton.updateWorldTransform()

      const offset = new spineLib.Vector2()
      const size = new spineLib.Vector2()
      getForegroundBounds(skeleton, offset, size, l2d.characterSlotPrefix)
      const focus = l2d.focus
      const zoom = focus?.zoom ?? 1
      renderer.camera.position.x = offset.x + size.x / 2 + (focus?.offsetX ?? 0)
      renderer.camera.position.y = offset.y + size.y / 2 + (focus?.offsetY ?? 0)
      renderer.camera.viewportWidth = size.x * CAMERA_PADDING * zoom
      renderer.camera.viewportHeight = size.y * CAMERA_PADDING * zoom

      rafId = requestAnimationFrame(render)
      setLoading(false)
    }

    requestAnimationFrame(waitForAssets)

    return () => {
      disposed = true
      cancelAnimationFrame(rafId)
      renderer.dispose()
      assetManager.dispose()
    }
  }, [l2d])

  if (failed) return null

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`${className ?? ''} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      />
      {loading && (
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <Spinner label="Loading dynamic illustration" />
        </div>
      )}
    </>
  )
}
