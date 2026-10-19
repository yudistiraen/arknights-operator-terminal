# Asset caching & Cloudflare R2 — plan

Status: **planning**. Written 2026-10-19.

Done so far (2026-10-19):
- R2 bucket `arknights-portfolio-assets` created (location APAC, Standard class).
- `scripts/assets/sync-r2.sh`: rclone sync of voice assets (`operators/*/voice/**`, `audio/title-voices/**`)
  with the Stage A `Cache-Control`. Credentials come from `R2_*` vars in `.env` (gitignored; see `.env.example`).
- R2 API token (Object Read & Write, scoped to the bucket) in `.env`; rclone installed via winget.
- Env layout: a single gitignored `.env` (R2 secrets + empty `NEXT_PUBLIC_ASSET_URL`, so dev serves `public/`).
  Vercel project env (Config, Production + Preview) holds `R2_PUBLIC_URL` for the §0 proxy; `NEXT_PUBLIC_ASSET_URL`
  stays unset there until the custom domain. Nothing env-related is committed except `.env.example`.
- Voice re-encoded 64k → 48k mono; `MP3_BITRATE = '48k'` in `scripts/voice-pipeline/gen_title_voices.py`
  (shared by `gen_operator_voices.py`), so newly extracted voice is 48k directly.
- Public access: the bucket's `r2.dev` Public Development URL is enabled
  (`https://pub-17b501c3d8f54d5ca4bcd67fd48eb824.r2.dev`). **r2.dev is blocked by Indonesian ISPs** (ISP DNS resolves it
  to a block IP → `ERR_CONNECTION_REFUSED`; via 1.1.1.1 it returns 200), so browsers must not hit it directly.
  Interim fix: proxy through Vercel, see **§0**.
- Uploaded: 11,048 voice objects (446 MiB), `audio/mpeg` verified. They still carry the superseded header
  `max-age=3600, stale-while-revalidate=86400`; re-sync pending for the revised Stage A policy (§2).
- Production verified: voice served via the Vercel proxy, 200 `audio/mpeg`, Vercel CDN caches it (`X-Vercel-Cache: HIT`).
- App: `src/lib/assetUrl.ts` used by VoicePanel + AppShell title voice; voice folders gitignored.
- §0 interim proxy implemented in `next.config.ts` (build verified: rewrites registered; local file → 200, missing voice → proxied).
- L2D (dynamic illustrations, `public/operators/*/l2d/`, scripts/l2d-pipeline) moved to R2 the same way: gitignored,
  synced by `sync-r2.sh`, proxied by the §0 rewrite, `SpineViewer` resolves paths through `assetUrl()`.
- Still pending: re-sync with the revised Stage A header (§2), optional `--max-delete` guard in sync-r2.sh; then §0 domain switch.

## 0. Interim Vercel proxy → custom domain (DON'T FORGET)

**Now (interim, no own domain):** browsers request voice from the site's own origin; `next.config.ts` `rewrites()`
forwards `/operators/:operator/voice/:path*` and `/audio/title-voices/:path*` to `R2_PUBLIC_URL` (the r2.dev URL) on
Vercel's servers, which aren't behind Indonesian ISP blocking. Rewrites run after `public/` lookup, so local dev
keeps serving the local copies.

- Vercel env: `R2_PUBLIC_URL` = r2.dev URL (Config, Production + Preview). `NEXT_PUBLIC_ASSET_URL` must be **unset**,
  otherwise browsers go straight to r2.dev again.
- Cost: voice bytes flow through Vercel bandwidth (Hobby 100 GB/month). Fine for on-demand ~20 KB clips, but this is
  the thing §4 says not to do long term, so it's temporary.

**Later (when a domain is bought — the planned end state):**

1. Buy a domain (e.g. Cloudflare Registrar) or move an existing one's DNS to Cloudflare.
2. R2 bucket → Settings → **Custom Domains** → connect `assets.<domain>`. Check it resolves from an Indonesian ISP
   connection (no blocking) and returns `audio/mpeg` + `Cache-Control`.
3. Add the Cache Rule on the asset domain (§3 Phase 3 step 4); optionally disable the r2.dev Public Development URL.
   **Add bucket CORS** (allow `GET`/`HEAD` from the site origin(s)) — required, not optional: L2D loads `.skel`/`.atlas`
   via XHR and uploads PNGs to WebGL (`crossOrigin="anonymous"`), which both fail cross-origin without it and leave
   the L2D canvas blank. Voice (`<audio>`) works without CORS, so voice alone won't reveal a missing rule.
4. Vercel env: **add** `NEXT_PUBLIC_ASSET_URL=https://assets.<domain>` (Config, Production + Preview) and **delete**
   `R2_PUBLIC_URL`.
5. Code: delete the `rewrites()` block from `next.config.ts` and the `R2_PUBLIC_URL` entry in `.env.example`.
   `assetUrl()` already prefixes `NEXT_PUBLIC_ASSET_URL`, so no other code changes.
6. Redeploy (`NEXT_PUBLIC_*` is inlined at build time) and verify in DevTools → Network that `.mp3` requests go to
   `assets.<domain>` with status 200, then `cf-cache-status: HIT` on repeat.
7. Optional: move the site itself to the domain too (Vercel → Domains), replacing `*.vercel.app`.

Goal: stop the site from re-requesting heavy static assets, shrink what we ship, and move those assets
off the git repo / Vercel deploy onto Cloudflare R2 behind Cloudflare's CDN.

---

## 1. Where we are now

### What's in `public/` (2.6 GB, git pack 1.82 GB)

| Type | Files | Size | Lives in |
|---|---|---|---|
| PNG — operator art, skins, skill icons | 1,649 | **1.7 GB** | `public/operators/<op>/` |
| MP3 — voice lines + title voices | 11,052 | 629 MB | `public/operators/<op>/voice/<lang>/`, `public/audio/title-voices/` |
| WebM — chibis | 834 | 292 MB | `public/operators/<op>/` |
| Items, events, icons, missions, BGM | — | ~40 MB | `public/items`, `public/events`, `public/icons`, `public/missions`, `public/audio` |

Voice grows by roughly **8 MB per operator** (4 languages, 64 kbps MP3), so the full roster would put voice alone at around 1.8 GB.

### How assets are served today

- Every `public/` file is served with `Cache-Control: public, max-age=0`. The browser keeps the file but
  **revalidates on every use**: one round trip per asset per page view, answered with `304` via ETag.
- `next.config.ts` is empty: no `headers()`, no `images` config.
- Asset paths are hard-coded absolute strings in the data files (`'/operators/amiya/base.png'`,
  `audioDir: '/operators/amiya/voice'`). Nothing in the app knows about an asset host.
- `next/image` is used in about 29 places (skill icons, class icons, portraits, skins). On Vercel every
  optimized source image counts against the Image Optimization quota, and about 1,600 PNGs can exhaust it.
- Voice already loads on demand: `VoicePanel` creates the `Audio` only on click. The splash preloads one
  title voice (about 10 KB). BGM (`/audio/Arknights OST.mp3`) is `preload="auto"`.
- `public/events/` is static. The `scrape-events` cron writes data, not files, so event banners only
  change when we commit them.

---

## 2. Cache layers we want

```
Browser cache  ──miss──▶  Cloudflare edge (CDN)  ──miss──▶  R2 bucket
 (max-age, immutable)      (Edge TTL via Cache Rule)        (origin, pay per read op)
```

| Layer | What it saves | How |
|---|---|---|
| **Browser** | Repeat visits make **zero requests** for an asset already seen | `Cache-Control: public, max-age=31536000, immutable` |
| **Cloudflare edge** | First-time visitors are served from a nearby PoP; R2 is read only on edge miss | R2 custom domain + Cache Rule with a long Edge TTL |
| **App** | Never download what the visitor doesn't use | Load on demand (voice already does), no blanket preloading |
| **File size** | Every miss costs less | PNG → WebP, voice 64k → 48k MP3 |

### Cache policy: two stages

Long caching is only safe when an asset's URL changes whenever its content changes. We're still in active
development and assets get re-rendered or replaced in place often (portraits, chibi re-renders, voice
regeneration), so the policy is staged on whether URLs are versioned yet.

**Stage A: now, during development (unversioned URLs)**

Principle: **browser short, CDN long.** The browser cache is the only layer we can't purge remotely; CDN caches
(Cloudflare edge, and Vercel's CDN while it proxies voice) can be purged any time. So until URLs are versioned,
keep the browser TTL short and let the purgeable CDN hold files longer.

| Environment | `Cache-Control` for static asset paths | Why |
|---|---|---|
| Local `pnpm dev` | unchanged (`max-age=0`) | Asset edits must show on the next reload |
| Production | `public, max-age=60, s-maxage=3600` | Browser keeps a file **60 s**; shared caches (CDN) keep it **1 hour**. After an update + CDN purge, every visitor has the new file within ≤1 min |

- `max-age=60` applies to browsers; `s-maxage=3600` applies only to shared caches (Cloudflare edge, Vercel CDN)
  and is ignored by browsers. One header covers both, now (Vercel proxy) and later (custom domain).
- No `stale-while-revalidate`: it would let a browser play the old file once more after expiry.
- Why 60 s (not 5 min, not 0): below a minute the difference is unnoticeable (sync + purge takes longer than
  that), while replays of the same line within a minute stay instant from cache. For zero staleness use
  `no-cache, s-maxage=3600` instead (every play revalidates; unchanged files return `304` via ETag, no
  re-download). Never `no-store`, which forces a full download every play.
- Cost: browsers revalidate after 60 s with a conditional request answered `304` at the edge (no R2 read).
  Voice loads on demand and clips are ~20 KB, so this is negligible.
- Superseded value (2026-10-19, first upload): `public, max-age=3600, stale-while-revalidate=86400` — updates could
  linger up to ~1 h in browsers with no way to speed it up.

**Updating an existing asset under Stage A:**

1. Regenerate / re-encode the file locally.
2. `bash scripts/assets/sync-r2.sh` (uploads changed files with the Stage A header).
3. Purge the CDN cache:
   - now (Vercel proxy): Vercel project → Settings → Caches → Purge CDN Cache; confirm with `X-Vercel-Cache: MISS`
     on the next request (not yet verified that this purges external-rewrite responses).
   - later (custom domain): Cloudflare → Caching → Purge Cache (single URL or everything).
4. Visitors get the new file within ≤1 min (their remaining browser TTL). To check yourself immediately:
   DevTools → Network → *Disable cache*, or an incognito window.

**Applying this policy (pending):** set `cache_control` in `scripts/assets/sync-r2.sh` to
`public, max-age=60, s-maxage=3600`, then run it once with `--ignore-times` so the 11,048 objects already in R2
get the new header (re-uploads ~446 MiB, ~11k Class A ops — within the free tier).

For paths still served by Vercel (`/operators/**` art/chibi, `/audio/**` SFX/BGM, `/items/**`, `/icons/**`,
`/missions/**`, `/events/**`): same header via `headers()` in `next.config.ts`, gated on
`process.env.NODE_ENV === 'production'` (Phase 1).

**Stage B: after automatic versioning lands (with R2, Phase 3)**

| Path | Browser | Edge |
|---|---|---|
| `/operators/**`, `/audio/**`, `/items/**`, `/icons/**`, `/missions/**` | `public, max-age=31536000, immutable` | 1 year |
| `/events/**` | `public, max-age=86400, stale-while-revalidate=604800` | 7 days |

**Automatic versioning (prerequisite for Stage B):** a build step hashes each asset file into
`assetManifest.json`, and `assetUrl(path)` appends `?v=<hash>`. Changed content → new hash → new URL →
visitors fetch it immediately; unchanged files stay cached with zero requests. Never rely on manual
`?v=` bumps, because our generators (`gen_operator_voices.py`, chibi pipeline) overwrite files in place.

Browser caches can't be purged remotely. Cloudflare's edge cache can (*Purge Cache*), but that doesn't
help visitors who already hold a copy. That's why Stage B waits for versioning.

#### Versioned URLs: worked example

The version is a **content hash**: the first 8 hex characters of the file's SHA-256. The object name in R2 never
changes; R2 (and the Vercel proxy) ignore the query string, but browsers treat every distinct `?v=` as a new URL.

```
Unversioned (Stage A, today):  /operators/amiya/voice/jp/cn_001.mp3
Versioned   (Stage B):         /operators/amiya/voice/jp/cn_001.mp3?v=c2771cc5
                               /operators/amiya/voice/jp/cn_002.mp3?v=456af99e
```

Real case (2026-10-19), `cn_001.mp3` re-encoded 64k → 48k:

| | Content | URL the app emits |
|---|---|---|
| Before | 64k MP3 | `/operators/amiya/voice/jp/cn_001.mp3?v=6649b4fb` |
| After | 48k MP3 | `/operators/amiya/voice/jp/cn_001.mp3?v=c2771cc5` |

Visitors holding `?v=6649b4fb` in cache are asked for `?v=c2771cc5`, a URL they've never seen, so they get the
new file immediately. `cn_002.mp3` didn't change, its hash stays `456af99e` and it's served from cache with zero
requests. That guarantee (same URL ⇒ same bytes forever) is what makes `max-age=31536000, immutable` safe.

**Getting the hash** (all give the same value; `sha256` of the file bytes, keep the first 8 hex chars):

```bash
# Git Bash
sha256sum public/operators/amiya/voice/jp/cn_001.mp3 | cut -c1-8          # → c2771cc5
```
```powershell
# PowerShell
(Get-FileHash public/operators/amiya/voice/jp/cn_001.mp3 -Algorithm SHA256).Hash.Substring(0,8).ToLower()
```
```js
// Node (what the manifest script uses)
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
createHash('sha256').update(readFileSync(filePath)).digest('hex').slice(0, 8)
```
```python
# Python (if gen_operator_voices.py writes hashes itself)
hashlib.sha256(mp3_path.read_bytes()).hexdigest()[:8]
```

8 hex chars (32 bits) is plenty: a collision only matters between two versions of the *same* path.

**Manifest script sketch** (`scripts/assets/gen-asset-manifest.mjs`, run after `sync-r2.sh`):

```js
import { createHash } from 'node:crypto'
import { globSync, readFileSync, writeFileSync } from 'node:fs'   // globSync: Node 22+

const manifest = {}
for (const file of globSync('public/{operators/*/voice/**/*.mp3,audio/title-voices/**/*.mp3}')) {
  const urlPath = '/' + file.replaceAll('\\', '/').replace(/^public\//, '')
  manifest[urlPath] = createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 8)
}
writeFileSync('src/data/assetManifest.json', JSON.stringify(manifest, null, 0))
```

**`assetUrl()` change** (VoicePanel / AppShell already call it, so nothing else changes):

```ts
import assetManifest from '../data/assetManifest.json'

export function assetUrl(path: string): string {
  const hash = (assetManifest as Record<string, string>)[path]
  const versionedPath = hash ? `${path}?v=${hash}` : path
  return ASSET_HOST ? `${ASSET_HOST}${versionedPath}` : versionedPath
}
```

**Workflow when an asset changes:** regenerate/re-encode → `sync-r2.sh` (upload) → regenerate hashes →
commit the hash data → push. The deploy carries the new hashes, so the new URLs go live with it. Hash from the
same local files that were synced, so URL and R2 bytes match.

**Open point — manifest size:** a single manifest for ~11k voice files is ~500 KB of JSON, too heavy to ship
in a shared bundle. Preferred: store hashes per operator, written by `gen_operator_voices.py` into
`src/data/voices/<op>.ts` (e.g. `audioHash: { jp: { cn_001: 'c2771cc5', … } }`), so they load only with that
operator's data; title voices get theirs in `titleVoices.json`. Decide when Stage B is implemented.

**When switching to Stage B:** change `cache_control` in `scripts/assets/sync-r2.sh` to
`public, max-age=31536000, immutable` and re-sync with `--header-upload` forcing existing objects to update
(e.g. one run with `--ignore-times`), so old objects get the new header too.

---

## 3. Plan

### Phase 1: Stage A cache headers now (no R2 needed)

- Add `headers()` to `next.config.ts` with the Stage A policy, production only (path patterns for
  `/operators/:path*`, `/audio/:path*`, `/items/:path*`, `/icons/:path*`, `/missions/:path*`, `/events/:path*`).
- Verify against a production build (`pnpm build && pnpm start`):
  `curl -sI http://localhost:3000/operators/amiya/base.png | grep -i cache-control`. In DevTools, a reload
  within the hour shows `(disk cache)` / `(memory cache)` with no network round trip.

### Phase 2: shrink before uploading

- **PNG → WebP** (quality around 85–90, alpha kept) via a script under `scripts/assets/`. Expect
  roughly 70–80% smaller. The script also rewrites `.png` → `.webp` in `src/data/operators/*.ts`.
  Spot-check art with fine line work (hair, glow effects) at full size before committing to a quality setting.
- **Voice 64k → 48k MP3**: re-encode the existing files (no re-extraction from the game), and change the
  default bitrate in `scripts/voice-pipeline/`.
- Rerun the size table in §1 afterwards.

### Phase 3: move heavy assets to R2

1. **Bucket**: one bucket, mirroring the `public/` layout (`operators/…`, `audio/title-voices/…`).
2. **Public access**: custom domain on a Cloudflare-managed zone (e.g. `assets.<domain>`). Avoid
   `r2.dev` for production (rate-limited, no cache control).
3. **Upload** with **rclone** (R2 is S3-compatible):
   - `rclone sync public/operators r2:<bucket>/operators --header-upload "Cache-Control: <Stage A or B value>"`
   - `sync` only sends new or changed files, so reruns after adding operators are cheap.
   - Content-Type is set from the extension (`.webp`, `.webm`, `.mp3`); spot-check one of each.
   - Wrap it in `scripts/assets/sync-r2.*` so it's one command.
4. **Cache Rule** on the asset domain: cache everything, Edge TTL 1 year (respect origin headers
   for `/events/`).
5. **CORS** on the bucket: allow `GET` from the site origin(s). Plain `<img>`, `<audio>` and `<video>`
   don't need it, but any `fetch()` of an asset (or Web Audio / canvas use later) does.
6. **App changes**:
   - `NEXT_PUBLIC_ASSET_URL` env (e.g. `https://assets.<domain>`). Empty → fall back to local
     `/operators/...`, so dev keeps working offline.
   - Automatic versioning (see Stage B): build step writes `assetManifest.json` (path → short content hash).
   - Switch R2 uploads and edge rules to the Stage B policy only once versioned URLs are live.
   - One `assetUrl(path)` helper in `src/lib/` (prefixes the asset host and appends `?v=<hash>`), used wherever an asset path from data reaches the DOM
     (`CharacterArt`, `WalkingChibi`, `VoicePanel`, `AppShell` title voice, the `next/image` call sites).
     The data files keep their relative `/operators/...` paths.
   - `next/image` for R2 assets: either `images.remotePatterns` for the asset domain, or `unoptimized`
     for pre-converted WebP so Vercel's optimization quota isn't spent re-optimizing them. **Decide one**
     (recommendation: `unoptimized`, since Phase 2 already optimized them).
7. **Repo**: add the moved folders to `.gitignore` (local copies stay for dev and as the sync source).
   Note that git **history still holds the 1.82 GB**. Shrinking that requires a history rewrite
   (`git filter-repo`), which is destructive and needs a force-push. That's a separate decision.

### Phase 4: verify

- `curl -sI https://assets.<domain>/operators/amiya/base.webp`: expect `cache-control: …immutable`,
  `cf-cache-status: HIT` on the second request, correct `content-type`.
- Browser: second visit loads art/voice/chibi from disk cache with no requests.
- Play a voice line, open an operator page, and run the splash title voice, all from the R2 domain.
- Vercel deploy size drops; Image Optimization usage stops growing for operator art.

---

## 4. Explicitly not doing

- **Service worker / Cache Storage**: the browser HTTP cache with `immutable` already gives zero-request
  repeat visits. A SW adds invalidation bugs for little gain.
- **Proxying R2 through Vercel** (rewrites `/operators/*` → R2): every byte would still flow through and
  bill against Vercel, which defeats the point. Exception: the voice-only interim proxy in §0, which exists only
  because r2.dev is ISP-blocked in Indonesia and goes away with the custom domain.
- **Storing assets in a database**: files go to object storage, data stays in the repo.

---

## 5. Prerequisites (owner: user)

- Cloudflare account with R2 enabled (a payment method may be required even within the free tier).
- R2 API token, *Object Read & Write* scoped to the bucket. Gives Access Key ID, Secret Access Key, and the
  endpoint `https://<account_id>.r2.cloudflarestorage.com`. Store it in `.env.local` / the rclone config, **never in git
  or chat**.
- A domain on Cloudflare for the asset subdomain.
- Optional: the Cloudflare MCP server ("Workers Bindings") for bucket management. Bulk upload still
  goes through rclone. Add it from an interactive terminal:
  `claude mcp add --transport sse cloudflare-bindings https://bindings.mcp.cloudflare.com/sse`, then `/mcp` to log in.

## 6. Open decisions

1. Asset domain name (bucket is `arknights-portfolio-assets`). Blocks the §0 switch away from the Vercel proxy.
2. Move voice only first, or all heavy assets (art + chibi + voice) in one go? Recommendation: all,
   because Phase 2/3 tooling is the same.
3. WebP quality setting (confirm visually on a few full-size arts).
4. `next/image` strategy for R2 assets: `unoptimized` (recommended) vs `remotePatterns`.
5. Whether to rewrite git history to drop the 1.82 GB already committed.

## 7. Reference numbers (re-measure after each phase)

| | Now | After Phase 2 (estimate) |
|---|---|---|
| PNG / WebP art | 1.7 GB | ~0.35–0.5 GB |
| Voice (74 operators) | 616 MB | ~460 MB |
| Chibi WebM | 292 MB | unchanged |
