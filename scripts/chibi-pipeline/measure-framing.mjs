#!/usr/bin/env node
// Computes the `chibiFraming` value to paste into src/data/operators.ts for a walking
// mascot, from the meta.json files capture.mjs writes alongside an idle render and a move
// render of the same operator/skin.
//
// Why this is a diagnostic, not a correction tool: viewer.html's __spineRenderAt always
// bottom-anchors and horizontally centers a clip's own locked framing rect within a fixed
// `size`x`size` canvas (see viewer/viewer.html), so idle and move are ALWAYS positioned
// identically in canvas-pixel space by construction — there is no position drift for
// offsetXPercent/offsetYPercent to fix as long as both were rendered with the same `--size`.
// That matches operator_context.md's own finding: once idle and move share one pipeline,
// `chibiFraming` converges to ~identity (scale 0.99-1.01, offsets ~0), rather than the
// large corrections the old wiki.gg-idle + rendered-move mismatch used to need.
//
// The one thing that CAN differ between idle and move is apparent SIZE — if one clip's
// motion envelope is a visibly tighter or looser box than the other's, the character will
// look bigger/smaller when the mascot switches states. Since chibiFraming.scale applies to
// BOTH layers at once (the shared wrapper in WalkingChibi.tsx), it can't reconcile a
// idle-vs-move size mismatch either — it's a "how big should the whole mascot be" dial,
// not a per-layer correction. So this script's job is to report that mismatch (as a
// warning) so a human/Claude can judge whether it's a real pipeline problem (e.g. try
// --bounds-mode pixel-probe or more --samples) or just how the game's own animation looks,
// and to emit the ready-to-paste identity default plus the two clips' effective canvas
// fill percentage for context.
//
// Usage:
//   node scripts/chibi-pipeline/measure-framing.mjs --idle-meta out/amiya/frames-relax/meta.json --move-meta out/amiya/frames-move/meta.json

import fs from 'node:fs/promises'
import { parseArgs } from 'node:util'
import { pathToFileURL } from 'node:url'

const SIZE_MISMATCH_WARN_THRESHOLD = 0.1 // 10%

export async function measureFraming({ idleMetaPath, moveMetaPath }) {
  const idleMeta = JSON.parse(await fs.readFile(idleMetaPath, 'utf8'))
  const moveMeta = JSON.parse(await fs.readFile(moveMetaPath, 'utf8'))

  if (idleMeta.size !== moveMeta.size) {
    throw new Error(
      `idle and move were captured at different --size (${idleMeta.size} vs ${moveMeta.size}) — ` +
        `re-render one of them with matching --size before comparing, otherwise this comparison is meaningless.`,
    )
  }

  const idleFill = idleMeta.canvasMapping.drawWidth * idleMeta.canvasMapping.drawHeight
  const moveFill = moveMeta.canvasMapping.drawWidth * moveMeta.canvasMapping.drawHeight
  const sizeRatio = moveFill > 0 ? Math.sqrt(idleFill / moveFill) : 1

  const result = {
    chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 },
    diagnostics: {
      idleFillPercent: Math.round((idleMeta.canvasMapping.drawHeight / idleMeta.size) * 1000) / 10,
      moveFillPercent: Math.round((moveMeta.canvasMapping.drawHeight / moveMeta.size) * 1000) / 10,
      apparentSizeRatio: Math.round(sizeRatio * 1000) / 1000,
    },
  }

  const mismatch = Math.abs(sizeRatio - 1)
  if (mismatch > SIZE_MISMATCH_WARN_THRESHOLD) {
    result.warning =
      `idle and move differ in apparent size by ${Math.round(mismatch * 100)}% ` +
      `(idle fills ${result.diagnostics.idleFillPercent}% of the canvas height, move fills ` +
      `${result.diagnostics.moveFillPercent}%). chibiFraming.scale is shared by both layers, so it ` +
      `can't fix a per-clip mismatch this large — this usually means the two renders used ` +
      `different --bounds-mode/--samples, or one genuinely has a much tighter/looser silhouette. ` +
      `Compare the two frame sets visually before trusting the identity default below.`
  }

  return result
}

const isMain = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url

if (isMain) {
  const { values } = parseArgs({
    options: {
      'idle-meta': { type: 'string' },
      'move-meta': { type: 'string' },
    },
  })

  for (const required of ['idle-meta', 'move-meta']) {
    if (!values[required]) {
      console.error(`Missing required --${required}`)
      process.exit(1)
    }
  }

  const result = await measureFraming({ idleMetaPath: values['idle-meta'], moveMetaPath: values['move-meta'] })
  if (result.warning) console.warn(`WARNING: ${result.warning}`)
  console.log(JSON.stringify(result, null, 2))
}
