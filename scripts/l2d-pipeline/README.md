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

2. **List the layers** to choose the backdrop:

   ```sh
   python scripts/l2d-pipeline/extract_l2d.py "char_391_rosmon_epoque#17" --list
   ```

   Rows are Unity renderers in the prefab, sorted by sortingOrder. Negative orders draw behind the
   skeleton. The backdrop is the big static quads (usually named `bg`, `BG`, `bg_di`, `sky`,
   `castle`, `column`…). Skip effects: fire, particles, glows, anything with `_DisturbTex`/flow
   textures or inactive rows.

3. **Extract:**

   ```sh
   python scripts/l2d-pipeline/extract_l2d.py "char_391_rosmon_epoque#17" \
     --out-dir public/operators/rosmontis/l2d --stem rosmontis-become-anew \
     --backdrop bg bg_cloud_01 column_01 column_02
   ```

   Name the stem `<operator>-<skin-name>` (`-e2` for E2 art). It writes `<stem>.skel`,
   `<stem>.atlas`, the atlas page PNG(s), `<stem>-bg.png`, and prints the `l2d: {...}` snippet.

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

Particle systems and animated shader effects (fire, sparkles, birds…) are not reproduced.
