// Read-only helpers for browsing/downloading raw Spine chibi assets from the public
// fexli/ArknightsResource repo. Unauthenticated GitHub REST calls — fine for occasional
// dev-tool use (60 req/hr limit), no token required. See ../README.md for the full workflow.

import fs from 'node:fs/promises'
import path from 'node:path'

const RESOURCE_OWNER = 'fexli'
const RESOURCE_REPO = 'ArknightsResource'

// Local clone of fexli/ArknightsResource, checked before hitting the network. Overridable
// via env var; falls back to GitHub API only if the local path doesn't have the requested
// folder (e.g. a newer operator not yet pulled locally).
const LOCAL_RESOURCE_ROOT =
  process.env.ARKNIGHTS_RESOURCE_LOCAL_PATH || 'C:\\Users\\Yudis\\Documents\\Workspace\\ArknightsResource'

/** Copy a model folder's files (.skel/.atlas/.png) from the local ArknightsResource clone
 * into destDir. Returns the list of copied paths, or null if the local folder doesn't
 * exist/is empty (caller should fall back to the GitHub API in that case). */
async function copyLocalModelFolder(repoPath, destDir) {
  const localDir = path.join(LOCAL_RESOURCE_ROOT, ...repoPath.split('/'))
  let names
  try {
    names = await fs.readdir(localDir)
  } catch {
    return null
  }
  if (names.length === 0) return null
  await fs.mkdir(destDir, { recursive: true })
  const written = []
  for (const name of names) {
    const dest = path.join(destDir, name)
    await fs.copyFile(path.join(localDir, name), dest)
    written.push(dest)
  }
  return written
}

/** List char_* folders under the local clone's spine/ directory whose name contains
 * `fragment` (case-insensitive). Returns null (not []) if the local spine/ directory is
 * missing entirely, so the caller knows to fall back to the GitHub API — but an empty match
 * list for an existing directory is returned as [], since that's a real "not found locally,
 * clone may be behind" case the caller should also fall back on. */
async function listLocalSpineFolders(fragment) {
  const spineDir = path.join(LOCAL_RESOURCE_ROOT, 'spine')
  let entries
  try {
    entries = await fs.readdir(spineDir, { withFileTypes: true })
  } catch {
    return null
  }
  const needle = fragment.toLowerCase()
  return entries
    .filter((entry) => entry.isDirectory() && entry.name.toLowerCase().includes(needle))
    .map((entry) => ({ name: entry.name, path: `spine/${entry.name}`, type: 'dir' }))
}

function apiUrl(repoPath) {
  return `https://api.github.com/repos/${RESOURCE_OWNER}/${RESOURCE_REPO}/contents/${repoPath}`
}

async function githubJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
  if (!res.ok) {
    throw new Error(`GitHub API request failed (${res.status} ${res.statusText}): ${url}`)
  }
  return res.json()
}

async function fetchAndWrite(url, destFile) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Download failed (${res.status} ${res.statusText}): ${url}`)
  }
  const buffer = Buffer.from(await res.arrayBuffer())
  await fs.mkdir(path.dirname(destFile), { recursive: true })
  await fs.writeFile(destFile, buffer)
  return destFile
}

/** List the contents of a folder inside fexli/ArknightsResource. Returns raw GitHub API
 * entries: [{ name, path, type: 'file'|'dir', download_url }]. `repoPath` uses forward
 * slashes regardless of host OS (it's a GitHub repo path, not a filesystem path). */
export async function listFolder(repoPath) {
  return githubJson(apiUrl(repoPath))
}

/** Search the top-level `spine/` directory for char_* folders whose name contains
 * `fragment` (case-insensitive). Entry point for finding an operator's char code — but
 * disambiguating between multiple matches, or operators whose char code doesn't resemble
 * their display name at all (e.g. Aak = char_225_haak), is left to the caller. See the
 * README for why that step stays a manual/judgment call rather than something this
 * function tries to guess. */
export async function findSpineFolders(fragment) {
  const local = await listLocalSpineFolders(fragment)
  if (local && local.length > 0) return local
  const entries = await listFolder('spine')
  const needle = fragment.toLowerCase()
  return entries.filter(
    (entry) => entry.type === 'dir' && entry.name.toLowerCase().includes(needle),
  )
}

/** Download a single file from a known repo path (e.g.
 * "spine/char_002_amiya/build_char_002_amiya/Spine/char_002_amiya.skel") to `destFile`.
 * Resolves the actual download URL via the contents API rather than guessing the raw.
 * githubusercontent.com branch name — the API's `download_url` already points at the
 * resolved LFS binary, not a pointer file. */
export async function downloadRaw(repoPath, destFile) {
  const parent = path.posix.dirname(repoPath)
  const filename = path.posix.basename(repoPath)
  const entries = await listFolder(parent)
  const entry = entries.find((item) => item.name === filename)
  if (!entry || !entry.download_url) {
    throw new Error(`File not found in fexli/ArknightsResource: ${repoPath}`)
  }
  return fetchAndWrite(entry.download_url, destFile)
}

/** Download every file inside a Spine model folder (the .skel/.atlas/.png triple, or the
 * older .json/.atlas/.png variant) into `destDir`, preserving filenames. Skips the network
 * entirely if `destDir` already has files in it, so re-running a render doesn't re-spend
 * GitHub API rate limit. Returns the list of local paths present in `destDir` afterwards. */
export async function downloadModelFolder(repoPath, destDir) {
  const existing = await fs.readdir(destDir).catch(() => [])
  if (existing.length > 0) {
    return existing.map((name) => path.join(destDir, name))
  }
  const local = await copyLocalModelFolder(repoPath, destDir)
  if (local) return local
  const entries = await listFolder(repoPath)
  const files = entries.filter((entry) => entry.type === 'file' && entry.download_url)
  if (files.length === 0) {
    throw new Error(`No files found at ${repoPath} — check the model path is correct`)
  }
  const written = []
  for (const file of files) {
    written.push(await fetchAndWrite(file.download_url, path.join(destDir, file.name)))
  }
  return written
}
