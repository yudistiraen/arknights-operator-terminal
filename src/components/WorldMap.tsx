'use client'

import { useId, useMemo, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { OPERATORS } from '../data/operators'
import { NATION_LABELS, getNationIcon, normalizeNationId } from '../lib/nations'
import { toSlug } from '../lib/operators'
import { playClick } from '../lib/sound'
import type { Operator } from '../types'
import { FOCUS_RING, Panel, StatusDot } from './ui/Console'
import { ParticleField } from './ui/ParticleField'
import terraGridRaw from '../data/terraGrid.json'

interface TerraTile {
  col: number
  row: number
  type: string
  nationId?: string
  color: string
  uncertain?: boolean
}

interface TerraGridData {
  gridCols: number
  gridRows: number
  imageWidth: number
  imageHeight: number
  tiles: TerraTile[]
}

const terraGrid = terraGridRaw as TerraGridData

// Camera: a shallow, low bird's-eye angle (PITCH_DEG = degrees above the
// horizon — 90 would be a straight top-down view), with yaw kept at 0 so the
// grid's column axis stays screen-horizontal and its left/right edges render
// perfectly vertical. Projected by hand (orthographic, no CSS 3D transform)
// so every raised tile's top face and side walls land at exact, controllable
// coordinates and the SVG's viewBox can just be fit to their real bounds.
const PITCH_DEG = 30
const YAW_DEG = 0
const ELEVATION_FACTOR = 1.6 // raised-tile height, as a multiple of one hex's vertical spacing
const WALL_SHADE = 0.55 // side walls render as this fraction of the tile's own top color
const DIM_SHADE = 0.6 // unfocused nations while another one is hovered/pinned

const PITCH_RAD = (PITCH_DEG * Math.PI) / 180
const YAW_RAD = (YAW_DEG * Math.PI) / 180

// Flat-top odd-q hexagon vertex offsets, matching the layout
// scripts/terra-map/extract-grid.mjs used when it sampled the source map (see
// makeCellCenter / preview render there). Order: TL, TR, R, BR, BL, L — so
// edges are N(0-1), NE(1-2), SE(2-3), S(3-4), SW(4-5), NW(5-0).
function hexVertexOffsets(hexWidth: number, hexHeight: number): [number, number][] {
  const halfW = hexWidth / 2
  const halfH = hexHeight / 2
  return [
    [-halfW * 0.5, -halfH],
    [halfW * 0.5, -halfH],
    [halfW, 0],
    [halfW * 0.5, halfH],
    [-halfW * 0.5, halfH],
    [-halfW, 0],
  ]
}

// The three downward-facing edges (as vertex-index pairs) that can expose a
// side wall when their neighbor is lower, plus that neighbor's offset — which
// depends on column parity, since this is an odd-q offset grid.
const LOWER_EDGES: { edge: [number, number]; neighborOffset: (col: number) => [number, number] }[] = [
  { edge: [3, 4], neighborOffset: () => [0, 1] },
  { edge: [2, 3], neighborOffset: col => (col % 2 === 0 ? [1, 0] : [1, 1]) },
  { edge: [4, 5], neighborOffset: col => (col % 2 === 0 ? [-1, 0] : [-1, 1]) },
]

function round(n: number): number {
  return Math.round(n * 100) / 100
}

// Orthographic camera: yaw around the vertical axis, then pitch around the
// resulting horizontal axis. A stylized, uniform-scale projection (no
// perspective divide) reads cleaner for a small hex mosaic than true
// foreshortening would.
function project(x: number, y: number, z: number): [number, number] {
  const xYaw = x * Math.cos(YAW_RAD) - y * Math.sin(YAW_RAD)
  const yYaw = x * Math.sin(YAW_RAD) + y * Math.cos(YAW_RAD)
  const screenX = xYaw
  const screenY = yYaw * Math.sin(PITCH_RAD) - z * Math.cos(PITCH_RAD)
  return [screenX, screenY]
}

function projectDepth(x: number, y: number, z: number): number {
  const yYaw = x * Math.sin(YAW_RAD) + y * Math.cos(YAW_RAD)
  return yYaw * Math.cos(PITCH_RAD) + z * Math.sin(PITCH_RAD)
}

// Console tone (design-pattern.md §4.8): every tile keeps its sampled hue so nations,
// ice, desert and sea still read as themselves, but saturation and lightness are
// clamped into the graphite band. Terrain sits near-grey, nations carry a muted
// tint, and the focused nation is lifted back toward its true color.
type TileTone = 'sea' | 'terrain' | 'nation' | 'nation-active'

const TILE_TONES: Record<TileTone, { saturationScale: number; saturationMax: number; lightMin: number; lightMax: number }> = {
  sea: { saturationScale: 0.4, saturationMax: 0.22, lightMin: 0.1, lightMax: 0.14 },
  terrain: { saturationScale: 0.2, saturationMax: 0.08, lightMin: 0.22, lightMax: 0.34 },
  // Nations are the clickable layer, so they sit clearly brighter than terrain.
  nation: { saturationScale: 0.75, saturationMax: 0.5, lightMin: 0.4, lightMax: 0.54 },
  'nation-active': { saturationScale: 1, saturationMax: 0.72, lightMin: 0.5, lightMax: 0.64 },
}

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const lightness = (max + min) / 2
  if (max === min) return [0, 0, lightness]
  const delta = max - min
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  const hue = max === r ? (g - b) / delta + (g < b ? 6 : 0) : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4
  return [hue * 60, saturation, lightness]
}

function toConsoleTone(hex: string, tone: TileTone): string {
  const [hue, saturation, lightness] = hexToHsl(hex)
  const { saturationScale, saturationMax, lightMin, lightMax } = TILE_TONES[tone]
  const mutedSaturation = Math.min(saturation * saturationScale, saturationMax)
  const mappedLightness = lightMin + lightness * (lightMax - lightMin)
  return `hsl(${round(hue)} ${round(mutedSaturation * 100)}% ${round(mappedLightness * 100)}%)`
}

// Side walls: the tile's own tone with its lightness scaled down.
function shadeTone(hslColor: string, factor: number): string {
  return hslColor.replace(/(\d+(?:\.\d+)?)%\)$/, (_, lightness) => `${round(Number(lightness) * factor)}%)`)
}

function polygonPoints(points: [number, number][]): string {
  return points.map(([x, y]) => `${round(x)},${round(y)}`).join(' ')
}

interface Shape {
  key: string
  points: string
  fill: string
  activeFill: string
  dimFill: string
  isSea: boolean
  nationId: string | null
  depth: number
  col: number
  row: number
}

// Sci-fi map pin: a marker on the nation, a leader line that grows upward, then a
// tag that opens to the right with the region name. Pure transform/opacity keyframes,
// sequenced with delays; remounted per nation (key) so the sequence replays on every hover.
const CALLOUT_LINE_HEIGHT = 'h-14 md:h-20'

function RegionCallout({ label, icon, accent, xPercent, yPercent }: { label: string; icon: string | null; accent: string; xPercent: number; yPercent: number }) {
  // Near the right edge the tag would leave the panel, so it opens leftward instead.
  const opensLeft = xPercent > 85
  return (
    <div className="absolute" style={{ left: `${xPercent}%`, top: `${yPercent}%` }}>
      {/* Marker: square ring + core on the nation's anchor point */}
      <span className="absolute -left-2 -top-2 w-4 h-4 border border-gc-signal motion-safe:animate-[callout-marker_0.2s_ease-out_both]" />
      <span className="absolute -left-[3px] -top-[3px] w-1.5 h-1.5 bg-gc-signal" />

      {/* Leader line, drawn upward from the marker */}
      <span className={`absolute left-0 bottom-0 w-px -translate-x-1/2 ${CALLOUT_LINE_HEIGHT} bg-gradient-to-t from-gc-signal to-gc-invert origin-bottom will-change-transform motion-safe:animate-[callout-line_0.24s_cubic-bezier(0.22,1,0.36,1)_0.08s_both]`} />

      {/* Tag: opens sideways from the top of the line */}
      <div className={`absolute bottom-0 ${CALLOUT_LINE_HEIGHT} ${opensLeft ? 'right-0' : 'left-0'}`}>
        <div
          style={{ '--region-accent': accent } as CSSProperties}
          className={`absolute top-0 -translate-y-1/2 flex items-center gap-2.5 whitespace-nowrap bg-gc-float/95 border border-gc-line-strong ${opensLeft ? '-right-px border-r-2 border-r-(--region-accent) origin-right' : '-left-px border-l-2 border-l-(--region-accent) origin-left'} pl-2.5 pr-3 h-8 md:h-9 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.8)] will-change-transform motion-safe:animate-[callout-tag_0.32s_cubic-bezier(0.22,1.2,0.36,1)_0.3s_both]`}
        >
          {icon ? (
            <Image
              src={icon}
              alt=""
              width={22}
              height={22}
              className="w-5 h-5 md:w-[22px] md:h-[22px] object-contain shrink-0 opacity-90 motion-safe:animate-[callout-text_0.2s_ease-out_0.5s_both]"
            />
          ) : (
            <span className="w-1.5 h-1.5 bg-(--region-accent) shrink-0 motion-safe:animate-[callout-text_0.2s_ease-out_0.5s_both]" />
          )}
          <span className="font-display text-[11px] md:text-[13px] text-gc-ink uppercase tracking-[0.16em] leading-none motion-safe:animate-[callout-text_0.24s_ease-out_0.52s_both]">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

export function WorldMap() {
  // Two layers of selection: hover (and keyboard focus) is a transient
  // preview that clears as soon as the pointer leaves, while click/tap pins a
  // nation so the operator strip below stays reachable. Pinning clears on
  // Escape, on tapping open sea, or by re-tapping the same nation.
  const [hoveredNation, setHoveredNation] = useState<string | null>(null)
  const [pinnedNation, setPinnedNation] = useState<string | null>(null)
  const activeNation = hoveredNation ?? pinnedNation

  const operatorsByNation = useMemo(() => {
    const byNation: Record<string, Operator[]> = {}
    for (const op of OPERATORS) {
      const nationId = normalizeNationId(op.birthplace)
      if (!NATION_LABELS[nationId]) continue
      ;(byNation[nationId] ??= []).push(op)
    }
    for (const ops of Object.values(byNation)) {
      ops.sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
    }
    return byNation
  }, [])

  const { gridCols, gridRows, imageWidth, imageHeight, tiles } = terraGrid
  const stepX = imageWidth / gridCols
  const stepY = imageHeight / gridRows
  const hexWidth = stepX / 0.75
  const hexHeight = stepY
  const elevation = stepY * ELEVATION_FACTOR

  const { shapes, labels, viewBox } = useMemo(() => {
    const vertexOffsets = hexVertexOffsets(hexWidth, hexHeight)
    const tileByKey = new Map(tiles.map(tile => [`${tile.col},${tile.row}`, tile]))
    const centerX = imageWidth / 2
    const centerY = imageHeight / 2

    const groundCenter = (col: number, row: number): [number, number] => {
      const x = stepX / 2 + col * stepX - centerX
      const y = stepY / 2 + row * stepY + (col % 2 === 1 ? stepY / 2 : 0) - centerY
      return [x, y]
    }

    const allShapes: Shape[] = []
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
    const track = (x: number, y: number) => {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }

    const nationCentroids = new Map<string, { sumX: number; sumY: number; count: number }>()

    for (const tile of tiles) {
      const [cx, cy] = groundCenter(tile.col, tile.row)
      const isSea = tile.type === 'sea'
      const tileElevation = isSea ? 0 : elevation
      const nationId = tile.type === 'country' ? tile.nationId ?? null : null
      // Sea tiles keep their sampled per-tile variation but are toned down
      // toward the page's dark palette — still clearly ocean, but no longer a
      // bright plate that fights the page background; the sea-only radial mask in the
      // <svg> below fades its outer edge the rest of the way into the page.
      const fill = toConsoleTone(tile.color, isSea ? 'sea' : nationId ? 'nation' : 'terrain')
      const activeFill = nationId ? toConsoleTone(tile.color, 'nation-active') : fill
      // Unfocused nations darken instead of fading, so the map stays fully opaque.
      const dimFill = nationId ? shadeTone(fill, DIM_SHADE) : fill

      if (nationId) {
        const acc = nationCentroids.get(nationId) ?? { sumX: 0, sumY: 0, count: 0 }
        acc.sumX += cx
        acc.sumY += cy
        acc.count += 1
        nationCentroids.set(nationId, acc)
      }

      const topProjected = vertexOffsets.map(([dx, dy]) => {
        const [sx, sy] = project(cx + dx, cy + dy, tileElevation)
        track(sx, sy)
        return [sx, sy] as [number, number]
      })
      const topDepth = projectDepth(cx, cy, tileElevation)
      allShapes.push({
        key: `${tile.col}-${tile.row}-top`,
        points: polygonPoints(topProjected),
        fill,
        activeFill,
        dimFill,
        isSea,
        nationId,
        depth: topDepth,
        col: tile.col,
        row: tile.row,
      })

      if (tileElevation === 0) continue
      for (const { edge, neighborOffset } of LOWER_EDGES) {
        const [dc, dr] = neighborOffset(tile.col)
        const neighbor = tileByKey.get(`${tile.col + dc},${tile.row + dr}`)
        const neighborElevation = neighbor && neighbor.type !== 'sea' ? elevation : 0
        if (neighborElevation >= tileElevation) continue

        const [ai, bi] = edge
        const [adx, ady] = vertexOffsets[ai]
        const [bdx, bdy] = vertexOffsets[bi]
        const topA = project(cx + adx, cy + ady, tileElevation)
        const topB = project(cx + bdx, cy + bdy, tileElevation)
        const botB = project(cx + bdx, cy + bdy, 0)
        const botA = project(cx + adx, cy + ady, 0)
        ;[topA, topB, botB, botA].forEach(([sx, sy]) => track(sx, sy))
        allShapes.push({
          key: `${tile.col}-${tile.row}-wall-${ai}${bi}`,
          points: polygonPoints([topA, topB, botB, botA]),
          fill: shadeTone(fill, WALL_SHADE),
          activeFill: shadeTone(activeFill, WALL_SHADE),
          dimFill: shadeTone(dimFill, WALL_SHADE),
          isSea: false,
          nationId,
          depth: (topDepth + projectDepth(cx, cy, 0)) / 2,
          col: tile.col,
          row: tile.row,
        })
      }
    }

    allShapes.sort((a, b) => a.depth - b.depth)

    // Label anchors: centroid of each nation's ground-level tiles, projected at
    // the raised surface height so the text sits on top of the terrain. The
    // projection is linear (no perspective divide), so averaging before or
    // after projecting gives the same point — averaging first is one projection
    // per nation instead of one per tile.
    const labels = Array.from(nationCentroids.entries()).map(([nationId, { sumX, sumY, count }]) => {
      const [sx, sy] = project(sumX / count, sumY / count, elevation)
      track(sx, sy)
      return { nationId, x: sx, y: sy }
    })

    // Generous margin so the mask's fade (below) has room to vignette the
    // empty space around the landmass without eating into real tiles.
    const margin = elevation * 1.5
    const box = {
      minX: round(minX - margin),
      minY: round(minY - margin),
      width: round(maxX - minX + margin * 2),
      height: round(maxY - minY + margin * 2),
    }

    return { shapes: allShapes, labels, viewBox: box }
  }, [tiles, imageWidth, imageHeight, stepX, stepY, hexWidth, hexHeight, elevation])

  // Hover hit-testing is split from the visual layer: the visual polygons lift
  // when active (see liftOffset below), which would move their own hit-area out
  // from under the cursor and flicker. These transparent copies sit at each
  // country tile's original position, grouped per nation so moving between
  // tiles of the same nation never fires a leave/enter pair — one focusable,
  // labelled element per nation.
  const nationHitGroups = useMemo(() => {
    const groups = new Map<string, Shape[]>()
    for (const shape of shapes) {
      if (!shape.nationId) continue
      const list = groups.get(shape.nationId) ?? []
      list.push(shape)
      groups.set(shape.nationId, list)
    }
    return Array.from(groups.entries())
  }, [shapes])

  const svgIdPrefix = `terra${useId().replace(/[^a-zA-Z0-9]/g, '')}`

  // Render cost on hover is what makes the callout stutter, so the geometry is built once:
  // a static base SVG (sea + unclaimed land) that never re-renders, and per-nation polygon
  // lists whose idle/active/dim fills live in CSS variables. Hovering then only flips a
  // `data-state` attribute on ~18 nation groups instead of re-rendering ~2k polygons.
  const baseLayer = useMemo(() => (
    <>
      {/* Only the flat sea fades out into the panel; land is always fully opaque. */}
      <defs>
        <radialGradient id={`${svgIdPrefix}-sea-fade`} cx="50%" cy="50%" r="62%">
          <stop offset="48%" stopColor="#fff" />
          <stop offset="92%" stopColor="#000" />
        </radialGradient>
        <mask id={`${svgIdPrefix}-sea-mask`} maskUnits="userSpaceOnUse" x={viewBox.minX} y={viewBox.minY} width={viewBox.width} height={viewBox.height}>
          <rect x={viewBox.minX} y={viewBox.minY} width={viewBox.width} height={viewBox.height} fill={`url(#${svgIdPrefix}-sea-fade)`} />
        </mask>
      </defs>
      <g mask={`url(#${svgIdPrefix}-sea-mask)`}>
        {shapes.filter(shape => shape.isSea).map(shape => (
          <polygon key={shape.key} points={shape.points} fill={shape.fill} data-col={shape.col} data-row={shape.row} />
        ))}
      </g>
      {shapes.filter(shape => !shape.isSea && shape.nationId === null).map(shape => (
        <polygon key={shape.key} points={shape.points} fill={shape.fill} data-col={shape.col} data-row={shape.row} />
      ))}
    </>
  ), [shapes, viewBox, svgIdPrefix])

  const nationPolygons = useMemo(() => new Map(nationHitGroups.map(([nationId, nationShapes]) => [
    nationId,
    nationShapes.map(shape => (
      <polygon
        key={shape.key}
        points={shape.points}
        data-col={shape.col}
        data-row={shape.row}
        strokeWidth={2}
        style={{ '--tone-idle': shape.fill, '--tone-active': shape.activeFill, '--tone-dim': shape.dimFill } as CSSProperties}
        className="[fill:var(--tone-idle)] [stroke:none] group-data-[state=dim]/nation:[fill:var(--tone-dim)] group-data-[state=active]/nation:[fill:var(--tone-active)] group-data-[state=active]/nation:[stroke:#e8d23c]"
      />
    )),
  ])), [nationHitGroups])

  // The focused nation is drawn last so its lifted tiles are never overlapped by a
  // neighbor further south.
  const nationDrawOrder = useMemo(() => {
    const nationIds = nationHitGroups.map(([nationId]) => nationId)
    return activeNation ? [...nationIds.filter(nationId => nationId !== activeNation), activeNation] : nationIds
  }, [nationHitGroups, activeNation])

  // One representative color per nation (its first top face's lifted tone) for the callout accent.
  const nationAccents = useMemo(() => new Map(nationHitGroups.map(([nationId, nationShapes]) => [
    nationId,
    (nationShapes.find(shape => shape.key.endsWith('-top')) ?? nationShapes[0]).activeFill,
  ])), [nationHitGroups])

  const activeLabel = activeNation ? NATION_LABELS[activeNation] : null
  const activeOperators = activeNation ? operatorsByNation[activeNation] ?? [] : []

  // A plain CSS transform (GPU-accelerated, no geometry recompute) rather than
  // re-projecting points at a higher elevation — cheap enough to run on every
  // hover without any jank.
  const liftOffset = stepY * 0.5

  // The region callout is HTML layered over the SVG (real fonts, Tailwind motion, and it
  // escapes the map's radial mask), so its anchor is the nation's label point — lifted with
  // the tiles — expressed as a percentage of the viewBox.
  const activeAnchor = (() => {
    const label = labels.find(candidate => candidate.nationId === activeNation)
    if (!label) return null
    return {
      xPercent: ((label.x - viewBox.minX) / viewBox.width) * 100,
      yPercent: ((label.y - liftOffset - viewBox.minY) / viewBox.height) * 100,
    }
  })()

  const togglePinned = (nationId: string) => {
    setPinnedNation(prev => (prev === nationId ? null : nationId))
  }

  return (
    <Panel
      title="Terra"
      rail
      className="world-map-panel w-full max-w-[1250px]"
      contentClassName="p-4 md:p-6"
      headerRight={
        <StatusDot
          tone={activeLabel ? 'progress' : 'scan'}
          blink={false}
          label={activeLabel
            ? `${activeLabel} · ${activeOperators.length} operator${activeOperators.length === 1 ? '' : 's'}`
            : `${nationHitGroups.length} nations`}
        />
      }
    >
      {/* Ruler ticks along the top edge, as on a survey plot */}
      <div aria-hidden className="absolute top-0 inset-x-6 h-1.5 bg-[repeating-linear-gradient(90deg,var(--color-gc-line)_0_1px,transparent_1px_8px)] max-md:hidden" />
      {/* Ambient particles sit on the bottom layer so they never cover tiles or callouts */}
      <ParticleField className="absolute inset-0 z-0 overflow-hidden" />
      <div className="relative z-10 w-full max-w-5xl mx-auto py-2">
        <div className="relative">
          {/* Static ground shadow — a blurred layer rasterized once, instead of a drop-shadow
              filter on the SVG that would repaint on every hover. */}
          <div aria-hidden className="pointer-events-none absolute inset-x-[14%] top-[35%] bottom-[12%] bg-black/45 blur-3xl" />

          <svg
            aria-hidden
            viewBox={`${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`}
            className="relative w-full h-auto block"
          >
            {baseLayer}
          </svg>

          <svg
            viewBox={`${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`}
            className="absolute inset-0 w-full h-full block"
            onClick={() => setPinnedNation(null)}
          >
            {nationDrawOrder.map(nationId => {
              const nationState = activeNation === null ? 'idle' : nationId === activeNation ? 'active' : 'dim'
              return (
                <g
                  key={nationId}
                  data-state={nationState}
                  className="group/nation pointer-events-none [transition:transform_0.18s_cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                  style={nationState === 'active' ? { transform: `translateY(-${liftOffset}px)` } : undefined}
                >
                  {nationPolygons.get(nationId)}
                </g>
              )
            })}

            {/* Hit areas stay at ground level so lifting a nation never moves them under the cursor */}
            {nationHitGroups.map(([nationId, nationShapes]) => (
              <g
                key={`hit-${nationId}`}
                role="button"
                tabIndex={0}
                aria-label={`${NATION_LABELS[nationId]} — ${(operatorsByNation[nationId] ?? []).length} operators`}
                aria-pressed={pinnedNation === nationId}
                className="cursor-pointer outline-none [pointer-events:all]"
                onPointerEnter={event => {
                  if (event.pointerType === 'mouse') setHoveredNation(nationId)
                }}
                onPointerLeave={event => {
                  if (event.pointerType === 'mouse') {
                    setHoveredNation(prev => (prev === nationId ? null : prev))
                  }
                }}
                onClick={event => {
                  event.stopPropagation()
                  playClick()
                  togglePinned(nationId)
                }}
                onFocus={() => setHoveredNation(nationId)}
                onBlur={() => setHoveredNation(prev => (prev === nationId ? null : prev))}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    playClick()
                    togglePinned(nationId)
                  }
                  if (event.key === 'Escape') {
                    setPinnedNation(null)
                    setHoveredNation(null)
                  }
                }}
              >
                {nationShapes.map(shape => (
                  <polygon
                    key={`${shape.key}-hit`}
                    points={shape.points}
                    fill="transparent"
                    data-col={shape.col}
                    data-row={shape.row}
                  />
                ))}
              </g>
            ))}
          </svg>

          <div aria-hidden className="pointer-events-none absolute inset-0">
            {activeNation && activeLabel && activeAnchor && (
              <RegionCallout
                key={activeNation}
                label={activeLabel}
                icon={getNationIcon(activeNation)}
                accent={nationAccents.get(activeNation) ?? 'var(--color-gc-signal)'}
                xPercent={activeAnchor.xPercent}
                yPercent={activeAnchor.yPercent}
              />
            )}
          </div>
        </div>
      </div>

      {/* Nation detail strip: the payoff for selecting a nation. Fixed height
          (not min-height) with its own scroll — the dashboard column is
          vertically centered, so any growth here would re-center everything
          and drag the map out from under the cursor. Large nations scroll
          inside the strip instead; the bottom fade hints there's more. */}
      <div className="relative z-10 mt-2 h-35 overflow-y-auto overscroll-contain scrollbar-thin [scrollbar-color:#3a3c40_transparent] mask-[linear-gradient(to_bottom,black_calc(100%-20px),transparent)]">
        {activeNation ? (
          <div key={activeNation} className="pb-5 animate-[map-detail-in_0.25s_ease-out] motion-reduce:animate-none">
            {activeOperators.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-2">
                {activeOperators.map(op => (
                  <Link
                    key={op.name}
                    href={`/operator?codeName=${toSlug(op.name)}`}
                    onClick={playClick}
                    className={`group relative flex items-center gap-2 border border-gc-line bg-gc-base pl-1 pr-3 py-1 active:scale-[0.97] ${FOCUS_RING} [transition:transform_0.15s_ease] motion-reduce:transition-none`}
                  >
                    <span aria-hidden className="absolute inset-0 bg-gc-raised opacity-0 group-hover:opacity-100 [transition:opacity_0.15s_ease-out]" />
                    <span
                      aria-hidden
                      className="relative w-7 h-7 shrink-0 bg-no-repeat bg-gc-panel opacity-85 group-hover:opacity-100 [transition:opacity_0.2s] motion-reduce:transition-none"
                      style={{
                        // 256px optimizer variant, not the multi-MB source art — decoding full
                        // art for every chip was what stalled the hover callout.
                        backgroundImage: `url(/_next/image?url=${encodeURIComponent(op.skins[0].src)}&w=256&q=75)`,
                        backgroundSize: `auto ${op.portraitFocus?.zoom ?? 250}%`,
                        backgroundPosition: `${op.portraitFocus?.x ?? 50}% ${op.portraitFocus?.y ?? 0}%`,
                      }}
                    />
                    <span className="relative font-data text-[11px] text-gc-text group-hover:text-gc-ink tracking-[0.04em]">
                      {op.name}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="pt-6 text-center font-data text-[10px] text-gc-dim tracking-[0.14em] uppercase">
                No operators on file for {activeLabel}
              </p>
            )}
          </div>
        ) : (
          <p className="pt-6 text-center font-data text-[10px] text-gc-dim tracking-[0.14em] uppercase">
            Hover to preview · click a nation to pin it
          </p>
        )}
      </div>
    </Panel>
  )
}
