#!/usr/bin/env node
// Renders a walking chibi's idle AND move clip with ONE shared camera (the union of both clips'
// motion envelopes). WalkingChibi.tsx applies a single chibiFraming to both layers, so two clips
// rendered with their own auto-fit cameras show up at different sizes/ground lines the moment the
// mascot stops walking (Blue Poison, Reed). This is the standard way to render a walkable skin.
//
// Usage:
//   node scripts/chibi-pipeline/render-walking-pair.mjs \
//     --model spine/char_129_bluep/build_char_129_bluep/Spine \
//     --idle-out public/operators/blue-poison/chibi.webm \
//     --move-out public/operators/blue-poison/chibi-move.webm \
//     [--idle-anim Relax] [--move-anim Move] [any render-chibi.mjs option]

import path from 'node:path'
import { parseArgs } from 'node:util'
import { renderChibi } from './render-chibi.mjs'

const { values } = parseArgs({
  options: {
    model: { type: 'string' },
    'idle-out': { type: 'string' },
    'move-out': { type: 'string' },
    'idle-anim': { type: 'string', default: 'Relax' },
    'move-anim': { type: 'string', default: 'Move' },
    fps: { type: 'string', default: '30' },
    size: { type: 'string', default: '600' },
    samples: { type: 'string', default: '60' },
    margin: { type: 'string', default: '0.12' },
    'bounds-mode': { type: 'string', default: 'getBounds' },
    'sample-mode': { type: 'string', default: 'union' },
    'work-dir': { type: 'string' },
    'hide-slots': { type: 'string', default: '' },
  },
})

for (const required of ['model', 'idle-out', 'move-out']) {
  if (!values[required]) {
    console.error(`Missing required --${required}`)
    process.exit(1)
  }
}

const shared = {
  model: values.model,
  fps: Number(values.fps),
  size: Number(values.size),
  samples: Number(values.samples),
  margin: Number(values.margin),
  boundsMode: values['bounds-mode'],
  sampleMode: values['sample-mode'],
  hideSlots: values['hide-slots'],
  workDir: values['work-dir'],
}

const idleAnim = values['idle-anim']
const moveAnim = values['move-anim']
const idle = await renderChibi({ ...shared, anim: idleAnim, out: path.resolve(values['idle-out']), sharedCameraAnims: [moveAnim] })
const move = await renderChibi({ ...shared, anim: moveAnim, out: path.resolve(values['move-out']), sharedCameraAnims: [idleAnim] })

const sameCamera = JSON.stringify(idle.meta.framingRect) === JSON.stringify(move.meta.framingRect)
console.log(sameCamera ? 'Shared camera OK — idle and move use an identical framing rect.' : 'WARNING: idle and move framing rects differ!')
if (!sameCamera) process.exit(1)
