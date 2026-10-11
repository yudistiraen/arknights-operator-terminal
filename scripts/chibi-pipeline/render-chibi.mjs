#!/usr/bin/env node
// Orchestrator: download raw Spine files -> detect runtime version -> capture frames ->
// encode to webm, for ONE animation clip. Run it once per clip a chibi needs (once for
// the idle/dorm clip, once for Move, etc — see README.md for the two-call idle+move
// pattern and why both should go through this same script for chibiFraming to stay valid).
//
// Usage:
//   node scripts/chibi-pipeline/render-chibi.mjs \
//     --model spine/char_002_amiya/build_char_002_amiya/Spine \
//     --anim Relax --out scripts/chibi-pipeline/out/amiya/chibi.webm \
//     [--fps 30] [--size 600] [--samples 60] [--margin 0.12] \
//     [--bounds-mode getBounds|pixel-probe] [--sample-mode union|t0] [--work-dir <dir>]
//     [--hide-slots "C_*"]  (hide dorm-scene props baked into the setup pose)

import path from 'node:path'
import fs from 'node:fs/promises'
import { parseArgs } from 'node:util'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { downloadModelFolder } from './lib/github.mjs'
import { resolveRuntimeForModel } from './lib/spineVersion.mjs'
import { runCapture } from './capture.mjs'
import { encodeToWebm, verifyAlpha } from './encode.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT_ROOT = path.join(__dirname, 'out')

function slugForModel(modelRepoPath) {
  // "spine/char_002_amiya/build_char_002_amiya/Spine" -> "char_002_amiya"
  // "spine/char_002_amiya/build_char_002_amiya_skin_x/Spine" -> "char_002_amiya_skin_x"
  // Uses the build-folder segment (not just the char-code segment) so base and skin
  // variants of the same character never collide on one work-dir — downloadModelFolder()
  // skips re-downloading when the dest dir already has files, so a shared slug made skin
  // renders silently reuse the base model's files unless --work-dir was passed explicitly
  // (hit independently by two operators in the same batch, see operator_context.md).
  const segments = modelRepoPath.split('/').filter(Boolean)
  const buildSegment = segments[2] || segments[1] || segments[0]
  return buildSegment.replace(/^build_/, '')
}

export async function renderChibi(opts) {
  const {
    model,
    anim,
    out,
    fps = 30,
    size = 600,
    samples = 60,
    margin = 0.12,
    boundsMode = 'getBounds',
    sampleMode = 'union',
    hideSlots = '',
    workDir,
  } = opts

  const slug = slugForModel(model)
  const resolvedWorkDir = workDir || path.join(DEFAULT_OUT_ROOT, slug)
  const modelDir = path.join(resolvedWorkDir, 'model-files')
  const framesDir = path.join(resolvedWorkDir, `frames-${anim.toLowerCase()}`)

  console.log(`[1/4] Fetching model files for ${model} (local clone preferred) ...`)
  await downloadModelFolder(model, modelDir)

  const skelFile = (await fs.readdir(modelDir)).find((f) => f.endsWith('.skel'))
  if (!skelFile) throw new Error(`No .skel file found in ${modelDir}`)
  console.log('[2/4] Detecting Spine runtime version ...')
  const { version, branch, runtimePath } = await resolveRuntimeForModel(path.join(modelDir, skelFile))
  console.log(`      -> Spine ${version} (spine-runtimes branch ${branch})`)

  console.log(`[3/4] Capturing "${anim}" frames ...`)
  const meta = await runCapture({
    modelDir,
    runtimePath,
    anim,
    outDir: framesDir,
    fps,
    size,
    samples,
    margin,
    boundsMode,
    sampleMode,
    hideSlots,
  })
  console.log(`      -> ${meta.frameCount} frames, ${meta.duration.toFixed(3)}s`)

  console.log('[4/4] Encoding to webm ...')
  await encodeToWebm({ framesDir, fps, outFile: out })
  await verifyAlpha(out)
  console.log(`Done: ${out}`)

  return { meta, out, version, branch }
}

const isMain = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url

if (isMain) {
  const { values } = parseArgs({
    options: {
      model: { type: 'string' },
      anim: { type: 'string' },
      out: { type: 'string' },
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

  for (const required of ['model', 'anim', 'out']) {
    if (!values[required]) {
      console.error(`Missing required --${required}`)
      process.exit(1)
    }
  }

  await renderChibi({
    model: values.model,
    anim: values.anim,
    out: values.out,
    fps: Number(values.fps),
    size: Number(values.size),
    samples: Number(values.samples),
    margin: Number(values.margin),
    boundsMode: values['bounds-mode'],
    sampleMode: values['sample-mode'],
    workDir: values['work-dir'],
    hideSlots: values['hide-slots'],
  })
}
