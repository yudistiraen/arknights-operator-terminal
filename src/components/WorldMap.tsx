'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { OPERATORS } from '../data/operators'
import { NATION_LABELS, normalizeNationId } from '../lib/nations'
import { toSlug } from '../lib/operators'
import { playClick } from '../lib/sound'
import type { Operator } from '../types'
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

function darken(hex: string, factor: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const toHex = (c: number) => Math.max(0, Math.min(255, Math.round(c * factor))).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function polygonPoints(points: [number, number][]): string {
  return points.map(([x, y]) => `${round(x)},${round(y)}`).join(' ')
}

interface Shape {
  key: string
  points: string
  fill: string
  nationId: string | null
  depth: number
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
      // bright plate that fights the page background; the radial mask on the
      // <svg> below fades its outer edge the rest of the way into the page.
      const fill = isSea ? darken(tile.color, 0.55) : tile.color

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
        nationId,
        depth: topDepth,
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
          fill: darken(tile.color, WALL_SHADE),
          nationId,
          depth: (topDepth + projectDepth(cx, cy, 0)) / 2,
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
    const margin = elevation * 3
    const box = [
      round(minX - margin),
      round(minY - margin),
      round(maxX - minX + margin * 2),
      round(maxY - minY + margin * 2),
    ].join(' ')

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

  const activeLabel = activeNation ? NATION_LABELS[activeNation] : null
  const activeOperators = activeNation ? operatorsByNation[activeNation] ?? [] : []

  // A plain CSS transform (GPU-accelerated, no geometry recompute) rather than
  // re-projecting points at a higher elevation — cheap enough to run on every
  // hover without any jank.
  const liftOffset = stepY * 0.5

  // SVG text isn't warped by the polygons' per-vertex projection — placing it
  // at a projected anchor point renders upright on its own, no extra work
  // needed to keep nation names horizontal and legible.
  const labelFontSize = stepY * 1.3

  const togglePinned = (nationId: string) => {
    setPinnedNation(prev => (prev === nationId ? null : nationId))
  }

  return (
    <div className="world-map-panel w-full max-w-[960px] md:zoom-[1.3]">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-3.5 bg-ak-accent/60" />
      <span className="font-display text-md text-white/40 tracking-[0.15em] uppercase">
          Terra
        </span>
        <div className="flex-1 h-px bg-white/[0.06]" />
        <span className="font-display text-md text-ak-accent-bright/60 tracking-wider uppercase">
          {activeLabel
            ? `${activeLabel} · ${activeOperators.length} Operator${activeOperators.length === 1 ? '' : 's'}`
            : `${nationHitGroups.length} Nations`}
        </span>
      </div>

      <div className="relative w-full max-w-2xl mx-auto py-4">
        <div className="absolute inset-x-[4%] top-1/2 h-[110%] -translate-y-1/2 rounded-full bg-ak-accent/10 blur-[60px] pointer-events-none" />

        <svg
          viewBox={viewBox}
          className="relative w-full h-auto block drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)] mask-[radial-gradient(ellipse_62%_62%_at_50%_50%,black_48%,transparent_92%)]"
          onClick={() => setPinnedNation(null)}
        >
          {shapes.map(shape => {
            const isActive = shape.nationId !== null && shape.nationId === activeNation
            const isDimmed = activeNation !== null && shape.nationId !== null && !isActive
            return (
              <polygon
                key={shape.key}
                points={shape.points}
                fill={shape.fill}
                stroke={isActive ? 'rgba(255,255,255,0.75)' : 'none'}
                strokeWidth={isActive ? 3 : 0}
                opacity={isDimmed ? 0.55 : 1}
                className={shape.nationId !== null
                  ? 'pointer-events-none [transition:transform_0.15s_ease-out,opacity_0.2s_ease] motion-reduce:transition-none'
                  : undefined}
                style={shape.nationId !== null && isActive ? { transform: `translateY(-${liftOffset}px)` } : undefined}
              />
            )
          })}
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
                <polygon key={`${shape.key}-hit`} points={shape.points} fill="transparent" />
              ))}
            </g>
          ))}
          {labels.map(label => {
            const isActive = label.nationId === activeNation
            return (
              <text
                key={`label-${label.nationId}`}
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={labelFontSize}
                fontWeight={600}
                fill="white"
                stroke="rgba(0,0,0,0.65)"
                strokeWidth={labelFontSize * 0.12}
                paintOrder="stroke"
                opacity={isActive ? 1 : 0}
                className="font-display uppercase tracking-wide pointer-events-none [transition:opacity_0.2s_ease,transform_0.15s_ease-out] motion-reduce:transition-none"
                style={isActive ? { transform: `translateY(-${liftOffset}px)` } : undefined}
              >
                {NATION_LABELS[label.nationId]}
              </text>
            )
          })}
        </svg>
      </div>

      {/* Nation detail strip: the payoff for selecting a nation. Reserved
          height so hovering the map never shifts the layout below it. */}
      <div className="mt-2 min-h-[72px]">
        {activeNation ? (
          <div key={activeNation} className="animate-[map-detail-in_0.25s_ease-out] motion-reduce:animate-none">
            {activeOperators.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-2">
                {activeOperators.map(op => (
                  <Link
                    key={op.name}
                    href={`/operator?operator=${toSlug(op.name)}`}
                    onClick={playClick}
                    className="group flex items-center gap-2 border border-white/[0.07] bg-white/[0.03] pl-1 pr-3 py-1 hover:border-ak-accent/30 hover:bg-white/[0.06] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ak-accent-bright [transition:border-color_0.2s,background-color_0.2s,transform_0.15s_ease] motion-reduce:transition-none"
                  >
                    <span
                      aria-hidden
                      className="w-7 h-7 shrink-0 bg-no-repeat bg-white/[0.04] opacity-85 group-hover:opacity-100 [transition:opacity_0.2s] motion-reduce:transition-none"
                      style={{
                        backgroundImage: `url(${op.skins[0].src})`,
                        backgroundSize: `auto ${op.portraitFocus?.zoom ?? 250}%`,
                        backgroundPosition: `${op.portraitFocus?.x ?? 50}% ${op.portraitFocus?.y ?? 0}%`,
                      }}
                    />
                    <span className="font-display text-[11px] text-white/55 group-hover:text-white/90 tracking-wide [transition:color_0.2s] motion-reduce:transition-none">
                      {op.name}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="pt-6 text-center font-display text-[10px] text-white/25 tracking-[0.2em] uppercase">
                No operators on file for {activeLabel}
              </p>
            )}
          </div>
        ) : (
          <p className="pt-6 text-center font-display text-[10px] text-white/25 tracking-[0.2em] uppercase">
            Hover to preview · click a nation to pin it
          </p>
        )}
      </div>
    </div>
  )
}
