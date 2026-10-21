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

Optionally sanity-check idle vs move agree in apparent size before wiring them up:

```sh
node scripts/chibi-pipeline/measure-framing.mjs   --idle-meta scripts/chibi-pipeline/out/amiya/frames-relax/meta.json   --move-meta scripts/chibi-pipeline/out/amiya/frames-move/meta.json
```

Copy the two `.webm` files into `public/operators/<name>/`, set `chibiSrc`/`chibiMoveSrc`
plus a placeholder `chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }`, then
apply the walking-chibi standard (next section) — never ship the identity placeholder.

## Walking chibi: idle + move MUST share one camera

`render-chibi.mjs` auto-fits each clip's camera to that clip's own motion envelope. For a walking
mascot that's wrong: `WalkingChibi.tsx` applies one `chibiFraming` to both layers, so an idle and
move rendered with different cameras visibly shrink/grow or sink/float when the mascot stops
(Blue Poison, Reed, Mountain all shipped like this). Always render walkable skins as a pair:

```sh
node scripts/chibi-pipeline/render-walking-pair.mjs   --model spine/char_129_bluep/build_char_129_bluep/Spine   --idle-out scripts/chibi-pipeline/out/blue-poison/chibi.webm   --move-out scripts/chibi-pipeline/out/blue-poison/chibi-move.webm
```

It unions both clips' envelopes into one framing rect (`--shared-camera` on `capture.mjs`/
`render-chibi.mjs`) and exits non-zero if the two renders' rects aren't identical.

To check already-published assets, `audit-walking-pairs.py` estimates each pair's idle/move camera
ratio by matching the (rigid) chibi head across scales — bounding boxes can't, since walk and idle
poses differ. Same-camera pairs measure ratio 0.98–1.02 with feet delta ≤ 1%; anything flagged
gets re-rendered with `render-walking-pair.mjs`, never patched via `chibiFraming`. It needs numpy +
OpenCV in a throwaway venv (see the script's docstring).

## Walking chibi framing standard

Every render's camera is auto-fit to its own clip, so the character's size and position inside
the 600×600 video differ per operator. `standardize-walking-framing.mjs` measures the published
**Move** clip's alpha bounding box (median per frame) and solves `chibiFraming` so every mascot
appears on screen exactly like the reference, **Amiya base** (`scale 1.5`, offsets 0):

| Rule | Value (fraction of the sprite box) |
|---|---|
| Body height (Move bbox, ears/horns included) | 1.0125 |
| Feet line (bbox bottom) | 1.0475 |
| Horizontal center | 0.5187 |
| Max on-screen width (wide non-humanoid cap) | 1.5 |

```sh
node scripts/chibi-pipeline/standardize-walking-framing.mjs --only april            # dry run
node scripts/chibi-pipeline/standardize-walking-framing.mjs --only april --write    # rewrite the data file
node scripts/chibi-pipeline/standardize-walking-framing.mjs --write                 # every walkable skin
```

Guardrails:

- **Measured from Move, not idle** — walk cycles are always upright; idles can sit, lie or kneel.
- **Don't hand-tune `chibiFraming`.** If a result looks wrong, fix the video (floating props →
  `--hide-slots`, wrong clip, phantom bounds → `--bounds-mode pixel-probe`) and re-run.
- **Read the warnings.** `move/idle height` > 15% means idle will visibly resize when the mascot
  stops — re-render both clips with the same options. `scale outlier` means check it visually.
- **HUD box stays untouched.** On `--write`, a skin with no `chibiDetailFraming` gets its previous
  `chibiFraming` pinned as `chibiDetailFraming`, so the operator page's chibi box doesn't move.
- **Changing the standard** is a user decision: edit `REFERENCE`, run `--calibrate`, paste the
  printed values into `TARGET`, then `--write` everything.

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
| `render-walking-pair.mjs` | Renders a walkable skin's idle + move with one shared camera (required for walking chibi) |
| `audit-walking-pairs.py` | Flags published idle/move pairs whose cameras differ (head template matching) |
| `standardize-walking-framing.mjs` | Solves `chibiFraming` for every walkable skin to the Amiya standard (see above) |

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
  filling in `chibiSrc`/`chibiMoveSrc` in `src/data/operators/<name>.ts` (`chibiFraming` then
  comes from `standardize-walking-framing.mjs`).

## A note on the Spine runtime API surface

`viewer/viewer.html` is written against the `spine-canvas.js` Canvas2D runtime API as
documented in `operator_context.md` (itself derived from an already-validated implementation that
rendered Amiya/Togawa Sakiko/Logos/Mon3tr/Mlynar/Aak/Fiammetta). Minor API differences
between Spine runtime branches (3.x vs 4.x) are possible — if a new operator's version
resolves to a branch that hasn't been exercised through this exact rewritten viewer yet,
render one frame first (`--samples 1 --sample-mode t0`) and visually sanity-check it before
running a full batch.
