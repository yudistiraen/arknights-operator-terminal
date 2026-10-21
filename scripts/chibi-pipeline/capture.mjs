#!/usr/bin/env node
// Puppeteer-driven Spine chibi frame capture. Loads a Spine model (skel/atlas/png) into
// the headless-browser Canvas2D renderer (viewer/viewer.html), plays back one named
// animation with a camera locked from the clip's own motion envelope, and screenshots
// each frame with a transparent background into PNG frames ready for encode.mjs.
//
// Usage:
//   node scripts/chibi-pipeline/capture.mjs \
//     --model <dir with .skel/.atlas/.png> --runtime <path to spine-canvas.js> \
//     --anim Move --out <frames output dir> \
//     [--fps 30] [--size 600] [--samples 60] [--margin 0.12] \
//     [--bounds-mode getBounds|pixel-probe] [--sample-mode union|t0] [--hide-slots "C_*,X"]
//     [--shared-camera Move]  (union another clip's envelope into this clip's camera)
//
// See render-chibi.mjs for the orchestrator that wires this together with download +
// version-detect + encode for a full operator.

import fs from 'node:fs/promises'
import path from 'node:path'
import { parseArgs } from 'node:util'
import { fileURLToPath, pathToFileURL } from 'node:url'
import puppeteer from 'puppeteer'
import { startStaticServer } from './lib/server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const VIEWER_DIR = path.join(__dirname, 'viewer')

/**
 * @param {object} opts
 * @param {string} opts.modelDir - directory containing the .skel/.atlas/.png triple
 * @param {string} opts.runtimePath - path to the matching spine-canvas.js build
 * @param {string} opts.anim - animation name (e.g. "Relax", "Move")
 * @param {string} opts.outDir - directory to write frame_%03d.png + meta.json into
 * @param {number} [opts.fps]
 * @param {number} [opts.size] - square canvas size in px
 * @param {number} [opts.samples] - bounding-box sample count for framing (ignored if sampleMode is 't0')
 * @param {number} [opts.margin] - fractional margin added around the sampled bounding box
 * @param {'getBounds'|'pixel-probe'} [opts.boundsMode]
 * @param {'union'|'t0'} [opts.sampleMode]
 * @param {string} [opts.hideSlots] - comma-separated slot/attachment names to hide (`*` suffix = prefix match)
 * @param {string[]} [opts.sharedCameraAnims] - other clips whose motion envelope is unioned into this
 *   clip's camera. Rendering idle with ['Move'] and move with ['Relax'] gives both the identical camera,
 *   so they share one scale and ground line (required for WalkingChibi's single chibiFraming).
 */
export async function runCapture(opts) {
  const {
    modelDir,
    runtimePath,
    anim,
    outDir,
    fps = 30,
    size = 600,
    samples = 60,
    margin = 0.12,
    boundsMode = 'getBounds',
    sampleMode = 'union',
    hideSlots = '',
    sharedCameraAnims = [],
  } = opts

  const modelFiles = await fs.readdir(modelDir)
  const skelName = modelFiles.find((f) => f.endsWith('.skel'))
  const atlasName = modelFiles.find((f) => f.endsWith('.atlas'))
  const pngName = modelFiles.find((f) => f.endsWith('.png'))
  if (!skelName || !atlasName || !pngName) {
    throw new Error(`Expected .skel/.atlas/.png in ${modelDir}, found: ${modelFiles.join(', ')}`)
  }

  const { baseUrl, close } = await startStaticServer([
    { prefix: '/model/', dir: modelDir },
    { prefix: '/runtime/', dir: path.dirname(runtimePath) },
    { prefix: '/viewer/', dir: VIEWER_DIR },
  ])

  const browser = await puppeteer.launch({ headless: true })
  try {
    const page = await browser.newPage()
    page.on('pageerror', (err) => console.error('[viewer pageerror]', err))
    page.on('console', (msg) => {
      if (msg.type() === 'error') console.error('[viewer console]', msg.text())
    })

    const viewerUrl = new URL(`${baseUrl}/viewer/viewer.html`)
    viewerUrl.searchParams.set('skel', `/model/${skelName}`)
    viewerUrl.searchParams.set('atlas', `/model/${atlasName}`)
    viewerUrl.searchParams.set('png', `/model/${pngName}`)
    viewerUrl.searchParams.set('runtime', `/runtime/${path.basename(runtimePath)}`)
    viewerUrl.searchParams.set('size', String(size))
    if (hideSlots) viewerUrl.searchParams.set('hide', hideSlots)

    await page.goto(viewerUrl.href)
    await page.evaluate(() => window.__spineInit())

    const duration = await page.evaluate((anim) => window.__spineGetDuration(anim), anim)
    if (duration <= 0) {
      throw new Error(
        `Animation "${anim}" has 0 duration — this clip has no keyframes (operator_context.md's ` +
          `Togawa Sakiko "Default" gotcha: some operators rely on a different clip, e.g. "Relax", ` +
          `as their idle instead). Pick a different --anim.`,
      )
    }

    const sampleCount = sampleMode === 't0' ? 1 : samples
    const computeFraming = (clip) =>
      page.evaluate(
        (clip, n, marginPct, mode) => window.__spineComputeFraming(clip, n, marginPct, mode),
        clip,
        sampleCount,
        margin,
        boundsMode,
      )
    let framing = await computeFraming(anim)
    for (const sharedAnim of sharedCameraAnims) {
      const sharedDuration = await page.evaluate((clip) => window.__spineGetDuration(clip), sharedAnim)
      if (!(sharedDuration > 0)) throw new Error(`--shared-camera clip "${sharedAnim}" is missing or has 0 duration`)
      const sharedFraming = await computeFraming(sharedAnim)
      framing = {
        minX: Math.min(framing.minX, sharedFraming.minX),
        maxX: Math.max(framing.maxX, sharedFraming.maxX),
        minY: Math.min(framing.minY, sharedFraming.minY),
        maxY: Math.max(framing.maxY, sharedFraming.maxY),
      }
    }
    await page.evaluate((rect) => window.__spineSetFraming(rect), framing)

    const frameCount = Math.max(1, Math.round(duration * fps))
    await fs.mkdir(outDir, { recursive: true })

    const canvasHandle = await page.$('#canvas')
    for (let i = 0; i < frameCount; i++) {
      const t = Math.min(i / fps, duration)
      await page.evaluate((anim, t) => window.__spineRenderAt(anim, t), anim, t)
      const frameFile = path.join(outDir, `frame_${String(i).padStart(3, '0')}.png`)
      await canvasHandle.screenshot({ path: frameFile, omitBackground: true })
    }

    const worldWidth = framing.maxX - framing.minX
    const worldHeight = framing.maxY - framing.minY
    const scale = Math.min(size / worldWidth, size / worldHeight)
    const canvasMapping = {
      scale,
      drawWidth: worldWidth * scale,
      drawHeight: worldHeight * scale,
      offsetX: (size - worldWidth * scale) / 2,
      offsetY: size - worldHeight * scale,
    }

    const meta = {
      anim,
      fps,
      size,
      duration,
      frameCount,
      samples: sampleCount,
      marginPercent: margin,
      boundsMode,
      sampleMode,
      hideSlots,
      sharedCameraAnims,
      framingRect: framing,
      canvasMapping,
    }
    await fs.writeFile(path.join(outDir, 'meta.json'), JSON.stringify(meta, null, 2))

    return meta
  } finally {
    await browser.close()
    await close()
  }
}

const isMain = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url

if (isMain) {
  const { values } = parseArgs({
    options: {
      model: { type: 'string' },
      runtime: { type: 'string' },
      anim: { type: 'string' },
      out: { type: 'string' },
      fps: { type: 'string', default: '30' },
      size: { type: 'string', default: '600' },
      samples: { type: 'string', default: '60' },
      margin: { type: 'string', default: '0.12' },
      'bounds-mode': { type: 'string', default: 'getBounds' },
      'sample-mode': { type: 'string', default: 'union' },
      'hide-slots': { type: 'string', default: '' },
      'shared-camera': { type: 'string', default: '' },
    },
  })

  for (const required of ['model', 'runtime', 'anim', 'out']) {
    if (!values[required]) {
      console.error(`Missing required --${required}`)
      process.exit(1)
    }
  }

  const meta = await runCapture({
    modelDir: values.model,
    runtimePath: values.runtime,
    anim: values.anim,
    outDir: values.out,
    fps: Number(values.fps),
    size: Number(values.size),
    samples: Number(values.samples),
    margin: Number(values.margin),
    boundsMode: values['bounds-mode'],
    sampleMode: values['sample-mode'],
    hideSlots: values['hide-slots'],
    sharedCameraAnims: values['shared-camera'].split(',').filter(Boolean),
  })

  console.log(`Captured ${meta.frameCount} frames (${meta.duration.toFixed(3)}s @ ${meta.fps}fps) to ${values.out}`)
}
