#!/usr/bin/env node
// ffmpeg wrapper: PNG frame sequence -> alpha-channel VP9 webm, matching the format the
// rest of the project already expects (CharacterArt.tsx, WalkingChibi.tsx) — same codec
// settings and `alpha_mode=1` tag as the existing wiki.gg-sourced chibi.webm files.
// Requires `ffmpeg`/`ffprobe` on PATH; this is intentionally a system dependency, not an
// npm one (see operator_context.md — "dev-only tooling, not bundled into production").
//
// Usage:
//   node scripts/chibi-pipeline/encode.mjs --frames <dir with frame_%03d.png> --fps 30 --out <file.webm>

import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { parseArgs } from 'node:util'
import path from 'node:path'
import fs from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const execFileAsync = promisify(execFile)

async function run(cmd, args) {
  try {
    return await execFileAsync(cmd, args)
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`"${cmd}" not found on PATH — install it and make sure it's reachable from this shell.`)
    }
    throw new Error(`${cmd} ${args.join(' ')} failed:\n${err.stderr || err.message}`)
  }
}

export async function encodeToWebm({ framesDir, fps, outFile, pattern = 'frame_%03d.png' }) {
  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await run('ffmpeg', [
    '-y',
    '-framerate', String(fps),
    '-i', path.join(framesDir, pattern),
    '-c:v', 'libvpx-vp9',
    '-pix_fmt', 'yuva420p',
    '-b:v', '0',
    '-crf', '28',
    '-auto-alt-ref', '0',
    outFile,
  ])
  return outFile
}

/** Confirms the encoded file carries the `alpha_mode=1` tag the project's other chibi
 * webm files have (operator_context.md step 9-10) — catches a silently-opaque encode early instead
 * of only noticing when the mascot renders with a black box in the browser. */
export async function verifyAlpha(webmFile) {
  const { stdout } = await run('ffprobe', [
    '-v', 'error',
    '-show_entries', 'stream_tags=alpha_mode',
    '-of', 'default=noprint_wrappers=1',
    webmFile,
  ])
  if (!stdout.includes('alpha_mode=1')) {
    throw new Error(`Encoded file is missing the alpha_mode=1 tag — transparency is probably broken: ${webmFile}`)
  }
}

const isMain = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url

if (isMain) {
  const { values } = parseArgs({
    options: {
      frames: { type: 'string' },
      fps: { type: 'string', default: '30' },
      out: { type: 'string' },
    },
  })

  for (const required of ['frames', 'out']) {
    if (!values[required]) {
      console.error(`Missing required --${required}`)
      process.exit(1)
    }
  }

  await encodeToWebm({ framesDir: values.frames, fps: Number(values.fps), outFile: values.out })
  await verifyAlpha(values.out)
  console.log(`Encoded and verified: ${values.out}`)
}
