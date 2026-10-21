# L2D (dynamic illustration) pipeline

Turns a skin's dynamic illustration from the local Arknights PC client into the files behind the
operator page's L2D toggle (`l2d` on a skin in `src/data/operators/<op>.ts`, rendered by
`src/components/SpineViewer.tsx`). "L2D" is the UI name; the assets are Spine 3.8.99.

```
PC client bundle (.ab) ──extract_l2d.py──▶ public/operators/<op>/l2d/ ──sync-r2.sh──▶ R2 bucket
                                         └─▶ prints the `l2d: {...}` snippet for the skin
```

## Requirements

- The EN PC client installed (default `F:/YostarGames/Arknights_EN`, override with `--client`).
  Bundles live in `Arknights_Data/PersistentData/Bundles/arts/dynchars/`.
- Python 3.10+ with `pip install UnityPy Pillow`.
- For upload: rclone + `R2_*` vars in `.env` (see `knowledge/cloudflare_r2.md`).

## Steps

1. **Find the bundle.** Names are `char_<id>_<code>_<skin>.ab`: `_2` is the E2 art, anything else
   (`epoque#17`, `sale#16`, …) is a skin. Don't trust the skin code to tell you which skin it is —
   extract, then compare the atlas page / backdrop against the skin's static art.

2. **List the layers** (never pipe this through `tail`/`head` — rows are sorted by sortingOrder,
   so the backdrop is at the top):

   ```sh
   python scripts/l2d-pipeline/extract_l2d.py "char_391_rosmon_epoque#17" --list
   ```

   The first line shows the skeleton's sortingOrder(s). Rows marked `*` are what `--auto` takes:
   every active idle-loop mesh with a texture. Tap/skill/intro branches (`Interact`, `Special`,
   `Start`) are left out.

3. **Extract:**

   ```sh
   python scripts/l2d-pipeline/extract_l2d.py "char_391_rosmon_epoque#17"      --out-dir public/operators/rosmontis/l2d --stem rosmontis-become-anew --auto
   ```

   Name the stem `<operator>-<skin-name>` (`-e2` for E2 art; alters: `<alter>-e2` in the base
   operator's `l2d/` folder — the R2 rewrite only matches `/operators/<op>/l2d/`). It writes
   `<stem>.skel`, `<stem>.atlas`, the atlas page PNG(s), `<stem>-bg.png`, any `<stem>-fg*.png`
   overlays, and prints the `l2d: {...}` snippet. `--exclude <name>` drops a layer that looks
   wrong; `--layers <name>` forces one in.

4. **Wire it** into the skin in `src/data/operators/<op>.ts` (paste the snippet). Only if framing
   is off, add `focus` / `characterSlotPrefix` (see `SkinL2D` in `src/types.ts`).

5. **Check it** in the browser: open the operator, pick the skin, toggle L2D. Compare against the
   static art: backdrop placement, no white boxes, no black boxes, no thin dark outlines.

6. **Upload** (the `l2d/` folders are gitignored; production serves them from R2):

   ```sh
   scripts/assets/sync-r2.sh --dry-run   # review
   scripts/assets/sync-r2.sh
   ```

## What the extractor handles (and why)

| Problem seen | Cause | Handling |
|---|---|---|
| White boxes / smeared streaks | Client pages are straight alpha; SpineViewer draws premultiplied | Pages are premultiplied on export |
| Opaque black boxes | Some bundles split alpha into `<tex>[alpha]` | Merged back in |
| Thin dark outlines (faces) | That split colour page is already premultiplied | Unpremultiplied before the shared premultiply |
| No background | Backdrop is Unity quads in the prefab, not Spine | `--backdrop` composites them (relative to the skeleton GameObject, ×100 units, full 3D transform, raw mesh verts/UVs, dissolve/weight masks) |
| `#` breaks URLs | Skin codes contain `#` | Page names get `#` → `_` |
| Splashes/wind/frames missing | They draw *in front of* the skeleton (positive sortingOrder) | Composited as `overlays`, drawn after the skeleton (or after a `separatorSlotNames` slot when the skeleton is split into parts) |
| Atlas page bleeding around a mesh / curved mesh wrong | One affine UV fit per layer | Rasterized per triangle |
| Fish bones etc. missing (Specter) | SkinnedMeshRenderer | Posed with bone × bindpose |
| Effects grey/dim or blown out | Tint conventions differ per shader; materials keep stale props | Shader read from the client's shader bundles: only declared props, scaled by the shader default |
| Black boxes / no torn edges | `Mask/Erase` shader cuts what's beneath | `blend: 'erase'` overlays; baked into the backdrop when behind the skeleton |
| White sheet over everything | Screen-filling tiled shimmer planes, intro fog | Skipped by `--auto` |

**Particles (`--particles`):** idle ParticleSystems are exported by `particles.py` to
`<stem>-particles.json` (+ `<stem>-p*.png` textures) and simulated in the browser by
`src/lib/l2dParticles.ts` (emission/bursts, shapes, velocity/force/noise/clamp, over-lifetime
curves, texture sheets, billboard/stretched/mesh, BoneFollower emitters). Shared FX textures come
from the install's `StreamingAssets/AB/Windows/refs/fx/texture/*.ab` (loaded automatically).
A `_RamTex` ≥512px is an atlas sampled by UV, not a gradient. Custom-data driven shader effects
(dissolve/UV scroll per particle) aren't simulated, so verify each skin before enabling it —
currently on for Exusiai NC, Hvít Aska, Hoshiguma the Breacher only (others drew white blobs).
Animated shader effects on mesh layers are frozen; opaque animated-dissolve quads are skipped.
