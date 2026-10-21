#!/usr/bin/env node
// Renders a few low-fps Relax frames for every dorm (build_*) Spine folder of one character, so
// match-skin-folder.py can pick which folder is which skin by looking, not by guessing names.
// Probes are cached in scripts/chibi-pipeline/out/probes/<char>__<folder>/frames/.
//
// Usage: node .claude/skills/walking-chibi/probe-skin-folders.mjs char_129_bluep
// (Git Bash: prefix with MSYS_NO_PATHCONV=1 if you pass any /-leading paths.)

import fs from 'node:fs'
import path from 'node:path'
import { downloadModelFolder } from '../../../scripts/chibi-pipeline/lib/github.mjs'
import { resolveRuntimeForModel } from '../../../scripts/chibi-pipeline/lib/spineVersion.mjs'
import { runCapture } from '../../../scripts/chibi-pipeline/capture.mjs'

const ROOT = path.resolve(import.meta.dirname, '../../..')
const SPINE_ROOT = path.join(process.env.ARKNIGHTS_RESOURCE_LOCAL_PATH || 'C:/Users/Yudis/Documents/Workspace/ArknightsResource', 'spine')
const PROBE_ROOT = path.join(ROOT, 'scripts/chibi-pipeline/out/probes')

const charId = process.argv[2]
if (!charId) {
  console.error('Usage: probe-skin-folders.mjs <char id, e.g. char_129_bluep>')
  process.exit(1)
}

// Dorm models live in build_<char>[_skin] folders. Some alters ship their dorm model without the
// build_ prefix (e.g. char_1026_gvial2/char_1026_gvial2/Spine) — include those only when no
// build_ twin exists.
const entries = fs.readdirSync(path.join(SPINE_ROOT, charId))
const folders = entries.filter(name => name.startsWith('build_') || !entries.includes(`build_${name}`))

for (const folder of folders) {
  const workDir = path.join(PROBE_ROOT, `${charId}__${folder}`)
  const framesDir = path.join(workDir, 'frames')
  if (fs.existsSync(path.join(framesDir, 'meta.json'))) {
    console.log(`cached  spine/${charId}/${folder}`)
    continue
  }
  try {
    const modelDir = path.join(workDir, 'model-files')
    await downloadModelFolder(`spine/${charId}/${folder}/Spine`, modelDir)
    const skelFile = fs.readdirSync(modelDir).find(file => file.endsWith('.skel'))
    const { runtimePath } = await resolveRuntimeForModel(path.join(modelDir, skelFile))
    await runCapture({ modelDir, runtimePath, anim: 'Relax', outDir: framesDir, fps: 2, samples: 12 })
    console.log(`probed  spine/${charId}/${folder}`)
  } catch (error) {
    console.log(`FAILED  spine/${charId}/${folder}: ${String(error.message || error).split('\n')[0]}`)
  }
}
