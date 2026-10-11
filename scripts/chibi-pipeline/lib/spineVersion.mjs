// Detects the Spine runtime version a .skel binary was exported with, and fetches the
// matching spine-canvas.js (Canvas2D) runtime build from EsotericSoftware/spine-runtimes.
// See operator_context.md "Pipeline render tervalidasi" step 1-2 for why this per-model check is
// required (newer operators may use a newer Spine version than older ones).

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const RUNTIME_CACHE_DIR = path.join(__dirname, '..', 'runtime-cache')

// Branches confirmed to exist on EsotericSoftware/spine-runtimes as of the pipeline's
// original validation (operator_context.md, 2026-07-25). If a new operator reports a version not
// in this list, check https://github.com/EsotericSoftware/spine-runtimes/branches for a
// newer branch and add it here rather than guessing.
const KNOWN_BRANCHES = ['3.5', '3.6', '3.7', '3.8', '4.0', '4.1', '4.2', '4.3', '4.4']

/** Extract the Spine version string (e.g. "3.8.99") from a .skel file's binary header by
 * scanning for printable-ASCII runs, same approach as the documented
 * `perl -ne 'print "$1\n" while /([\x20-\x7E]{4,})/g'` one-liner in operator_context.md. Only reads
 * the first 4KB — the version string appears near the start of the file. */
export async function detectVersion(skelPath) {
  const handle = await fs.open(skelPath, 'r')
  let buffer
  try {
    buffer = Buffer.alloc(4096)
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0)
    buffer = buffer.subarray(0, bytesRead)
  } finally {
    await handle.close()
  }

  const text = buffer.toString('latin1')
  const printableRuns = text.match(/[\x20-\x7E]{4,}/g) || []
  const versionRun = printableRuns.find((run) => /^\d+\.\d+\.\d+$/.test(run))
  if (!versionRun) {
    throw new Error(
      `Could not find a version string (e.g. "3.8.99") in the first 4KB of ${skelPath}. ` +
        `Inspect the file manually — the pipeline's version-detection heuristic assumes it's near the start.`,
    )
  }
  return versionRun
}

/** Map a detected version (e.g. "3.8.99") to its spine-runtimes branch (e.g. "3.8"). */
export function versionToBranch(version) {
  const branch = version.split('.').slice(0, 2).join('.')
  if (!KNOWN_BRANCHES.includes(branch)) {
    throw new Error(
      `Spine version ${version} maps to branch "${branch}", which isn't in the known-good list ` +
        `(${KNOWN_BRANCHES.join(', ')}). Check https://github.com/EsotericSoftware/spine-runtimes/branches ` +
        `for whether that branch exists, then add it to KNOWN_BRANCHES in lib/spineVersion.mjs.`,
    )
  }
  return branch
}

/** Downloads (once, cached in runtime-cache/) the Canvas2D spine-canvas.js build matching
 * `branch`, returning the local file path. Canvas2D (not WebGL) is used because it renders
 * headlessly without needing GPU flags in Puppeteer. */
export async function ensureRuntimeCached(branch) {
  const dest = path.join(RUNTIME_CACHE_DIR, `spine-canvas-${branch}.js`)
  try {
    await fs.access(dest)
    return dest
  } catch {
    // not cached yet, fall through to download
  }

  const url = `https://raw.githubusercontent.com/EsotericSoftware/spine-runtimes/${branch}/spine-ts/build/spine-canvas.js`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to download spine-canvas.js for branch ${branch} (${res.status} ${res.statusText}): ${url}`)
  }
  const body = await res.text()
  await fs.mkdir(RUNTIME_CACHE_DIR, { recursive: true })
  await fs.writeFile(dest, body, 'utf8')
  return dest
}

/** Convenience: detect + resolve + cache in one call, given the path to a downloaded .skel file. */
export async function resolveRuntimeForModel(skelPath) {
  const version = await detectVersion(skelPath)
  const branch = versionToBranch(version)
  const runtimePath = await ensureRuntimeCached(branch)
  return { version, branch, runtimePath }
}
