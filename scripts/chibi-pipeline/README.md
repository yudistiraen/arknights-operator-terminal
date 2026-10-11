# Chibi/Spine render pipeline

Reusable local tooling that turns raw Spine files from
[fexli/ArknightsResource](https://github.com/fexli/ArknightsResource) into the
alpha-channel `.webm` chibi videos this project uses (`chibiSrc`/`chibiMoveSrc` in
`src/data/operators.ts`). Replaces the previous workflow of rewriting one-off scripts in a
scratchpad session every time a new operator needed chibi.

**wiki.gg is no longer the starting point for chibi assets.** `fexli/ArknightsResource` is
the default source for both idle and Move now — see "Unifikasi sumber idle" in
`operator_context.md` for why mixing sources (wiki.gg idle + rendered Move) causes visible
alignment bugs. Static art (splash, skill icons, portraits) is unaffected — wiki.gg via
Firecrawl stays the source for those.

## Requirements

- `ffmpeg` and `ffprobe` on PATH (system binaries, not an npm dependency — install via
  e.g. `winget install Gyan.FFmpeg` if missing)
- `pnpm install` (pulls in `puppeteer`, added as a devDependency for this pipeline)

## Quick start

Render one animation clip end-to-end (download + version-detect + capture + encode):

```sh
node scripts/chibi-pipeline/render-chibi.mjs \
  --model spine/char_002_amiya/build_char_002_amiya/Spine \
  --anim Relax \
  --out scripts/chibi-pipeline/out/amiya/chibi.webm
```

Do it again for the walk cycle:

```sh
node scripts/chibi-pipeline/render-chibi.mjs \
  --model spine/char_002_amiya/build_char_002_amiya/Spine \
  --anim Move \
  --out scripts/chibi-pipeline/out/amiya/chibi-move.webm
```

Then sanity-check idle vs move agree in apparent size before wiring them up:

```sh
node scripts/chibi-pipeline/measure-framing.mjs \
  --idle-meta scripts/chibi-pipeline/out/amiya/frames-relax/meta.json \
  --move-meta scripts/chibi-pipeline/out/amiya/frames-move/meta.json
```

That prints a `chibiFraming` object — paste it into the skin's entry in
`src/data/operators.ts` (see `chibiFraming`'s doc comment in `src/types.ts` for what each
field means and how it's applied). Finally, copy the two `.webm` files into
`public/operators/<name>/` and set `chibiSrc`/`chibiMoveSrc` in `operators.ts`.

## What each script does

| Script | Job |
|---|---|
| `lib/github.mjs` | Search `fexli/ArknightsResource`'s `spine/` folder and fetch a model's raw `.skel`/`.atlas`/`.png` — reads from the local clone at `ARKNIGHTS_RESOURCE_LOCAL_PATH` (default `C:\Users\Yudis\Documents\Workspace\ArknightsResource`) first, only hitting the GitHub API when a folder isn't found locally (e.g. clone is behind) |
| `lib/spineVersion.mjs` | Detect the Spine version a `.skel` was exported with, fetch the matching `spine-canvas.js` runtime (cached in `runtime-cache/`) |
| `lib/server.mjs` | Tiny static file server so Puppeteer can load assets without hitting `file://` CORS |
| `viewer/viewer.html` | Headless Spine Canvas2D render harness — the actual renderer, driven by `capture.mjs` |
| `capture.mjs` | Plays one animation, locks a camera from its motion envelope, screenshots every frame |
| `encode.mjs` | ffmpeg: frames -> alpha-channel VP9 webm, then verifies the `alpha_mode=1` tag |
| `measure-framing.mjs` | Diagnostic: compares an idle render's and move render's `meta.json` and reports the `chibiFraming` to use |
| `render-chibi.mjs` | Orchestrator wiring the above together for one clip |

Output lands in gitignored `scripts/chibi-pipeline/out/<char-code>/` — never written
directly into `public/`. Moving the finished file into `public/operators/<name>/` and
editing `operators.ts` stays a deliberate manual step.

## What this tool deliberately does NOT automate

These require judgment calls that have burned past batches when assumed rather than
checked — see the "Sub-rencana: Multi-state chibi" section of `operator_context.md` for the
original incidents:

- **Finding the char code.** Display names often don't resemble the folder name at all
  (Aak = `char_225_haak`, Fiammetta = `char_300_phenxi`, Młynar's Polish `ł`).
  `findSpineFolders()` in `lib/github.mjs` narrows the search; picking the right one is
  still on you.
- **Disambiguating skin folders.** Skin folder suffixes (`nian_4`, `boc_9`, ...) carry no
  hint of which skin they are. Render one frame of each candidate (`capture.mjs` with
  `--samples 1 --sample-mode t0`) and compare against the skin's `skin1.png`/`skin2.png`
  art visually — don't assume folder listing order matches skin order.
- **Checking for a 0-duration clip first.** `capture.mjs` aborts with a clear error if the
  requested animation has 0 duration (e.g. Togawa Sakiko's dorm `Default` — she idles on
  `Relax` instead), but doesn't know in advance which clip name is the "real" idle for a
  given operator.
- **Choosing `--bounds-mode pixel-probe`.** Only needed when a model has an invisible
  attachment that fools `getBounds()` — the symptom is every sampled pose reporting an
  identical, oversized bounding box regardless of `t`. Default `getBounds` is faster and
  correct for normal models; only switch if you see that symptom.
- **Choosing `--sample-mode t0`.** Needed for skins with a fast-swinging dangling prop
  (chains, tails — e.g. Togawa Sakiko skin1 "Master of Melodia") where averaging the
  bounding box across the clip produces a visible position "jump" the instant the
  component resets `currentTime` to 0 on a state transition. Default `union` is right for
  most models.
- **Choosing `--hide-slots`.** Some skins ship dorm-scene props (`C_*` regions in the atlas)
  that are visible in the setup pose and never keyed off by Relax/Move, so they render as
  floating objects next to the chibi (e.g. Młynar W Dali `epoque_28` — a big sword). Pass
  `--hide-slots "C_*"` (comma-separated, `*` = prefix match on slot or attachment name).
  Check the atlas region list first; hiding also tightens the framing, so `chibiFraming`
  scale may need lowering to keep the old apparent size.
- **Final placement.** Copying the rendered `.webm` into `public/operators/<name>/` and
  filling in `chibiSrc`/`chibiMoveSrc`/`chibiFraming`/`chibiDetailFraming` in
  `operators.ts`.

## A note on the Spine runtime API surface

`viewer/viewer.html` is written against the `spine-canvas.js` Canvas2D runtime API as
documented in `operator_context.md` (itself derived from an already-validated implementation that
rendered Amiya/Togawa Sakiko/Logos/Mon3tr/Mlynar/Aak/Fiammetta). Minor API differences
between Spine runtime branches (3.x vs 4.x) are possible — if a new operator's version
resolves to a branch that hasn't been exercised through this exact rewritten viewer yet,
render one frame first (`--samples 1 --sample-mode t0`) and visually sanity-check it before
running a full batch.
