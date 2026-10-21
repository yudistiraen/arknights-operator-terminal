#!/usr/bin/env node
// Walking-chibi framing standard: solves `chibiFraming` for every walkable skin so the mascot
// lands at the SAME on-screen body height, ground line and horizontal center as the reference
// (Amiya base). See "Walking chibi framing standard" in scripts/chibi-pipeline/README.md for
// the rules this enforces and when to override by hand.
//
// Why it measures pixels instead of reading capture.mjs meta.json: every clip's camera is
// auto-fit to its own motion envelope, so the character's size/position inside the 600x600
// video differs per operator AND the meta.json for older renders (Amiya, Aak, Blaze, ...) was
// never kept. The published .webm alpha channel is the one source of truth every skin has.
//
// Usage:
//   node scripts/chibi-pipeline/standardize-walking-framing.mjs              # dry run, prints table
//   node scripts/chibi-pipeline/standardize-walking-framing.mjs --write      # rewrite chibiFraming in src/data/operators/*.ts
//   node scripts/chibi-pipeline/standardize-walking-framing.mjs --only april,mudrock
//   node scripts/chibi-pipeline/standardize-walking-framing.mjs --calibrate  # re-derive TARGET from the reference skin

import fs from 'node:fs/promises'
import path from 'node:path'
import { parseArgs } from 'node:util'
import { measureClip } from './lib/measure-alpha.mjs'

const ROOT = path.resolve(import.meta.dirname, '../..')
const OPERATORS_DIR = path.join(ROOT, 'src/data/operators')

// Reference skin the standard is derived from — the one walking chibi the user signed off on.
const REFERENCE = { file: 'amiya.ts', moveSrc: '/operators/amiya/chibi-move.webm', framing: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 0 } }

// On-screen target, as fractions of the WalkingChibi sprite box (0 = top/left, 1 = bottom/right).
// Derived once from REFERENCE via --calibrate; hardcoded so the standard can't drift if someone
// later retunes Amiya's own framing by hand.
const TARGET = { bodyHeight: 1.0125, feetY: 1.0475, centerX: 0.5187 }

const IDLE_MOVE_HEIGHT_WARN = 0.15
const SCALE_OUTLIER_RANGE = [1.1, 2.4]
const MAX_SCREEN_WIDTH = 1.5 // in sprite-box widths

function round(value, decimals) {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor || 0
}

/** WalkingChibi applies `scale(s) translate(tx%, ty%)` around the box center, so a video-space
 * point p lands on screen at 0.5 + s * ((p - 0.5) + t). Inverting that for the target gives: */
function solveFraming(metrics, target) {
  // Height match, capped by width so a wide non-humanoid (Friston-3's vehicle) doesn't balloon
  // to several sprite-widths just because it's short.
  const scale = round(Math.min(target.bodyHeight / metrics.bodyHeight, MAX_SCREEN_WIDTH / metrics.bodyWidth), 2)
  return {
    scale,
    offsetXPercent: round(((target.centerX - 0.5) / scale - (metrics.centerX - 0.5)) * 100, 1),
    offsetYPercent: round(((target.feetY - 0.5) / scale - (metrics.feetY - 0.5)) * 100, 1),
  }
}

function screenMetrics(metrics, framing) {
  const project = (point, offsetPercent) => 0.5 + framing.scale * ((point - 0.5) + offsetPercent / 100)
  return {
    bodyHeight: metrics.bodyHeight * framing.scale,
    feetY: project(metrics.feetY, framing.offsetYPercent),
    centerX: project(metrics.centerX, framing.offsetXPercent),
  }
}

const SKIN_PATTERN = /chibiSrc: '([^']+)', chibiMoveSrc: '([^']+)', chibiFraming: \{ scale: [-\d.]+, offsetXPercent: [-\d.]+, offsetYPercent: [-\d.]+ \}/g

async function main() {
  const { values } = parseArgs({
    options: {
      write: { type: 'boolean', default: false },
      calibrate: { type: 'boolean', default: false },
      only: { type: 'string' },
    },
  })

  if (values.calibrate) {
    const reference = await measureClip(REFERENCE.moveSrc)
    const target = screenMetrics(reference, REFERENCE.framing)
    console.log('Paste into TARGET:', JSON.stringify(Object.fromEntries(Object.entries(target).map(([key, value]) => [key, round(value, 4)]))))
    return
  }

  const onlyFiles = values.only?.split(',').map(name => `${name.trim()}.ts`)
  const files = (await fs.readdir(OPERATORS_DIR)).filter(file => file.endsWith('.ts') && (!onlyFiles || onlyFiles.includes(file)))
  const measurementCache = new Map()
  const measure = src => {
    if (!measurementCache.has(src)) measurementCache.set(src, measureClip(src))
    return measurementCache.get(src)
  }

  const rows = []
  for (const file of files) {
    const filePath = path.join(OPERATORS_DIR, file)
    const source = await fs.readFile(filePath, 'utf8')
    const matches = [...source.matchAll(SKIN_PATTERN)]
    if (!matches.length) continue

    const replacements = []
    for (const match of matches) {
      const [, idleSrc, moveSrc] = match
      const isReference = file === REFERENCE.file && moveSrc === REFERENCE.moveSrc
      const [idle, move] = await Promise.all([measure(idleSrc), measure(moveSrc)])
      // Sized from the walk cycle, not idle: Move is always an upright standing pose, while idle
      // varies wildly (sitting, lying down, kneeling) and would mis-size those operators.
      const framing = isReference ? REFERENCE.framing : solveFraming(move, TARGET)
      const warnings = []
      if (Math.abs(move.bodyHeight / idle.bodyHeight - 1) > IDLE_MOVE_HEIGHT_WARN) warnings.push(`move/idle height ${round(move.bodyHeight / idle.bodyHeight, 2)}`)
      if (framing.scale < SCALE_OUTLIER_RANGE[0] || framing.scale > SCALE_OUTLIER_RANGE[1]) warnings.push('scale outlier — check for a tall prop/effect')
      rows.push({ file, moveSrc, framing, warnings })
      replacements.push({ match, framing })
    }

    if (values.write) {
      let updated = source
      // Replace back-to-front so earlier match indices stay valid.
      for (const { match, framing } of replacements.reverse()) {
        const literal = `chibiFraming: { scale: ${framing.scale}, offsetXPercent: ${framing.offsetXPercent}, offsetYPercent: ${framing.offsetYPercent} }`
        const previousLiteral = match[0].match(/chibiFraming: \{[^}]+\}/)[0]
        // The operator page's HUD chibi box falls back to chibiFraming when chibiDetailFraming is
        // unset (OperatorTerminal.tsx). Pin the previous value as an explicit chibiDetailFraming
        // so standardizing the walking mascot never silently reframes the HUD box.
        const hasDetailFraming = source.startsWith(', chibiDetailFraming:', match.index + match[0].length)
        const detailLiteral = hasDetailFraming ? '' : `, ${previousLiteral.replace('chibiFraming', 'chibiDetailFraming')}`
        const replaced = match[0].replace(previousLiteral, literal + detailLiteral)
        updated = updated.slice(0, match.index) + replaced + updated.slice(match.index + match[0].length)
      }
      if (updated !== source) await fs.writeFile(filePath, updated)
    }
  }

  for (const row of rows) {
    const { scale, offsetXPercent, offsetYPercent } = row.framing
    console.log(`${row.file.padEnd(22)} ${row.moveSrc.padEnd(56)} scale ${String(scale).padEnd(5)} x ${String(offsetXPercent).padEnd(5)} y ${String(offsetYPercent).padEnd(5)} ${row.warnings.join('; ')}`)
  }
  console.log(`\n${rows.length} walkable skins${values.write ? ' written' : ' (dry run — pass --write to apply)'}`)
}

await main()
