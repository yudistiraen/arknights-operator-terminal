---
name: card-framing
description: Tidy the portrait crop of operator cards on the /operator roster list by tuning each operator's `portraitFocus` (zoom/x/y) to a consistent bust-shot standard — head centered in the card, crop ending around the chest. Use when the user asks to fix, tidy, align, or "rapihkan" operator card positions/framing, or after adding a new operator whose card looks off.
---

# Card Framing — operator roster cards

Every card on `/operator` crops the operator's first skin (`skins[0].src`) with
`portraitFocus: { zoom, x, y }` from `src/data/operators/<slug>.ts`
(defaults `250 / 50 / 0`). The render lives in
`src/components/ui/OperatorCardArt.tsx`:
`background-size: auto <zoom>%; background-position: <x>% <y>%`, on a card with
aspect ratio `0.6`.

## The standard (judge anatomically, never by asset coordinates)

The anchor is the **head** — skull, face and the main hair mass around it.
**Non-human features are NOT anchors**: animal ears, horns, halos, antennae,
crests, hats, headgear and floating accessories vary wildly between operators
(tall rabbit ears, tiny horns, a halo, nothing at all). Ignore them when
placing the head. They may be clipped by any edge, or sit in empty space
above the head. Never shrink or shift the crop just to fit them in.

Target for every card:

1. **Head centered horizontally, and symmetric.** Judge two centers:
   - the **face center**: between the eyes / on the nose bridge;
   - the **head silhouette center**: skull plus the hair hugging it, without
     ears, horns, ponytails or accessories.

   Both should sit close to the vertical center line. When the head is turned
   these two disagree (Logos: face 54.5% vs silhouette 60%; Mountain: muzzle
   52% vs head 65%). Split the difference, leaning toward the **silhouette**.
   The user reads "symmetric" as equal margin on the left and right of the
   head, not as the eye midpoint on the line. The whole face stays visible and
   no side edge cuts the face.
2. **Head in the middle band vertically.** The **eye line** sits at 45–52% of
   the card height, and the chin at about 55–62%. Measure from the eyes, not
   from the crown of the head: hair volume, hats and hoods hide where the skull
   actually ends.
3. **Head size consistent.** The **eye-to-chin distance** is about 12% of the
   card height (≈ 46–50 px on the 400 px compare card). Measure vertically from
   the eye line to the bottom of the chin. This is the size metric. Two others
   look tempting but don't work:
   - **Face width.** It depends on pose: a frontal face looks wider than a 3/4
     face of the same size. Straight hair falling along the cheeks also blurs
     the face edge. Sizing by face width left Bagpipe and Ceobe (both frontal,
     with hair along the face) visibly smaller than everyone else.
   - **Overall head height.** Big hair volume (e.g. Blaze) makes a head look
     larger than it is.

   An open mouth (Bagpipe, Ceobe) doesn't move the chin much; measure to the
   jaw line, not the lip.

   **Eye-to-chin assumes typical anime proportions** (big eyes set low in a
   short face). Mature or male faces drawn with small, high-set eyes and a long
   jaw (e.g. Chongyue) already hit ~48 px while the whole head is still visibly
   smaller than its neighbours. For those faces, size by the **skull**
   instead:
   - Measure from the top of the skull to the chin. Estimate the skull top
     under the hair, ignoring spikes, volume, ears and horns.
   - Match that head height to neighbouring cards, roughly 42–48% of the card
     height. In that case it is fine for the chin to sit lower (up to ~68%)
     while the eye line stays at 45–52%.
   - Chongyue went from 355 to 420 this way.

   The final consistency check (see the workflow) is the real arbiter: the
   whole head must read as the same size as the cards next to it.
4. **Bust shot.** Neck, shoulders and upper chest are visible below the chin.
   The bottom edge of the card falls around the chest. Hands, waist and weapons
   below the chest stay out of frame or fade into the bottom gradient, under the
   name label.

The reference card is **Amiya** (`{ y: 7, x: 40, zoom: 280 }`). Her face is
centered, her eye line is at about 50%, and her eye-to-chin distance is about 11–12%
of the card height. Her rabbit ears run off the top edge, which is fine because
ears don't count. Calibrated examples:

- Blaze `{ y: 3, x: 36, zoom: 360 }`
- Blaze the Igniting Spark `{ y: 2, x: 64, zoom: 340 }`
- Aak `{ y: -2, x: 35, zoom: 330 }` (3/4 profile, face centered)
- Angelina `{ y: -3, x: 35, zoom: 300 }`
- Archetto `{ y: -5, x: 30, zoom: 290 }` (head near the top of the art, so negative `y`; re-tuned on the live page)
- Non-human or hidden faces: Mountain `{ y: -11, x: 46.5, zoom: 390 }` (tiger head turned left: silhouette ~56%, muzzle ~47%), Mudrock `{ y: -4.5, x: 36, zoom: 270 }` (full helmet: visor slit = eye line, helmet = head)
- Full-body art, which needs high zoom:
  - Ash `{ y: 1, x: 50, zoom: 380 }`
  - Bellone `{ y: -1, x: 54, zoom: 400 }`
  - Chongyue `{ y: 0, x: 51, zoom: 420 }` (mature male face, sized by skull height)
  - Młynar `{ y: -3.5, x: 50.5, zoom: 460 }` (mature male: 420 read too small, 520 lost the chest — the bust-shot rule caps the zoom, so take the largest head that still shows collar + upper chest)
  - Ifrit `{ y: -8, x: 41.3, zoom: 290 }` (head tilted: balanced by the head silhouette and the two twin-tails, not the eye midpoint)
  - Kal'tsit `{ y: 1, x: 48.6, zoom: 360 }` (one long side-lock makes the hair left-heavy: split the difference between face ~54% and hair ~43%)
  - Carnelian `{ y: 1, x: 49, zoom: 370 }`
  - Ascalon `{ y: -3, x: 53, zoom: 330 }`
  - Blemishine `{ y: -1, x: 42, zoom: 330 }`
  - Bagpipe `{ y: 14, x: 53, zoom: 345 }` (frontal face)
  - Ceobe `{ y: 3, x: 50, zoom: 310 }` (frontal face)

**Tolerated deviations.** In some art the head is strongly tilted, turned far
to one side, or the body leans hard. In those cases center the face itself,
not the skull outline. If the art is cut close above the head, a small empty
band at the top is acceptable. `x`/`y` outside 0–100 are valid
(e.g. `y: -5`).

## Tooling

`card-framing.mjs` in this folder needs the dev server running
(`pnpm dev`, default `http://localhost:3000`; override with `BASE_URL`).
Write screenshots to the session scratchpad, not the repo.

```bash
H=.claude/skills/card-framing/card-framing.mjs
# side-by-side candidates (Amiya reference card is always prepended)
node $H compare "$SCRATCH/c.png" "blaze|/operators/blaze/base.png|360|36|3" "blaze alt|/operators/blaze/base.png|340|34|1"
# real page, filtered through the search box
node $H verify "$SCRATCH/v.png" blaze
# several operators in one browser session (writes v-<term>.png each); never
# run one verify per operator in parallel, it overloads the dev server
node $H verify "$SCRATCH/v.png" "kirin, logos, magallan"
```

The compare view draws three guides on each card:
- magenta vertical line: center
- cyan line: 50%, the eye-line target
- yellow line: 70%, roughly where the chest should be

`verify` draws the same guides on the real cards.

## Workflow per operator

1. **Find the art and current values.** Read `skins[0].src` and `portraitFocus`
   for the base form and for every alter. An alter needs its **own**
   `portraitFocus` inside its `alter` object. Without one, it inherits the
   base's values via `{ ...op, ...alter }`, which almost never fits.
   Check the image size with `file <png>`.
2. **Locate the head.** Render a full view (`zoom 100, x 50, y 0`). On that
   240×400 card, the image height is `H = 400` and its width is
   `W = 400 · imgW/imgH`. It is offset horizontally by `(240 − W)/2`.
   Read off the face center `sx` and eye line `sy` in screen px, and the
   eye-to-chin distance `d` in px. Convert to image fractions:
   `fx = (sx − (240 − W)/2) / W` and `fy = sy / 400`.
3. **First guess.**
   - Zoom: `zoom ≈ 100 · 48 / d` (48 px ≈ 12% of the card height). On a full
     view, `d` is tiny (often 6–15 px), so small misreads swing the zoom a lot.
     Always re-measure on the first zoomed render and rescale:
     `zoom_new = zoom · 48 / d_measured`.
   - With `H = 4·zoom` and `W = H · imgW/imgH`:
     - `x = (120 − fx·W) · 100 / (240 − W)`
     - `y = (194 − fy·H) · 100 / (400 − H)`, which puts the eye line at about 48.5%.
   - `node $H guess "<label>|<src>|<imgW>|<imgH>|<fx>|<fy>|<zoom>" ...` does
     this math and prints ready-to-paste compare specs.
   - **Full-body art:** on a full view the face is only 12–18 px, and the
     first guess typically overshoots the zoom by about 2x (Ash, Bagpipe,
     Carnelian, etc. first came out at 500–700). Treat that render as a
     measuring pass:
     - On the zoomed render, the face is at `sx`, `sy` on screen.
       `offX = (240 − W)·x/100` and `offY = (400 − H)·y/100`.
     - Then `fx = (sx − offX)/W` and `fy = (sy − offY)/H`.
     - Measure `d` there too, then run `guess` again with `zoom · 48 / d`.
       The second pass usually lands within a few px.
   - **Final consistency check:** before applying, put the new cards in one
     `compare` run next to 2–3 calibrated examples and compare eye-to-chin
     by eye. Any card whose face looks smaller or larger than its neighbours
     gets rescaled, even if it passed the numbers.
4. **Compare 2–4 candidates** next to the reference. Adjust in small steps:
   - Larger `x` moves the art left in the card, so the face shifts left.
   - Larger `y` moves the art up, so the face shifts up.
   - Zoom changes head size. Re-center after changing it.
   - Pick the candidate that best meets criteria 1–4.
5. **Edit the data file.** Put `portraitFocus: { y, x, zoom }` right after
   `portrait:`, matching the existing field order. For an alter, put it inside
   the `alter` object after its `portrait:`.
6. **Verify on the real page** with `verify <search>`. The search box matches the operator name literally (e.g. `Młynar` needs `ynar`, not `mlynar`). Search for the shared
   name so the base and its alters show up together. Look at every card in the
   batch before reporting.
   - `verify` draws the same three guides on the live cards. **Re-measure the
     eye line there against the cyan 50% guide.** That reading is the one that
     counts.
   - Eyeballed positions from `compare` drifted by about 4% (Ch'en and
     Holungday read 47% in the harness but sat at 42–43% on the real page,
     and the user flagged them as too high).
   - If a card is off, adjust `y` and run `verify` again. Repeat until the
     eyes sit on or just above the cyan line.
   - `verify` renders at 2x and draws faint 40/45/55/60% verticals. Read
     horizontal balance off those lines.
   - To shift the art right by `s`% of the card width, use
     `x_new = ((240 − W)·x/100 + 2.4·s) · 100 / (240 − W)` with
     `W = 4·zoom·imgW/imgH`. Render −/+ variants with `compare` and pick the
     most balanced one. Eyeballing the 1x page missed Mon3tr's face sitting at
     64%.

## Batching and reporting

- Work in batches the user can review (e.g. one rarity tier or one letter at a
  time). Run `compare` with several operators in one call (up to ~6 cards per
  row).
- Many operators already have hand-set `portraitFocus` values. Change those only
  if they clearly fail the standard, and list every old → new change in the
  report so the user can revert individual ones.
- Report per operator: old values, new values, and one line on what was wrong
  (e.g. "face was cut off on the left", "head too small, chest not reached").

## Whole-rarity batches (e.g. "rapihkan bintang 5")

Measure on the live page, not on full views. One screenshot of 12 cards beats
12 compares. The helper scripts in this folder:

```bash
node $D/manifest.mjs 5 > m.txt          # label|file|indent|src|imgW|imgH|current portraitFocus, one per card (bases + alters)
node $H verify v.png "=Akafuyu|Almond|...,=Broca|..."   # "=a|b|c" = show exactly those cards (≤12 per set)
node $D/solve.mjs m.txt "Name|faceX|eyeY|eyeChin" ...   # fractions read off the live card -> Name|zoom|x|y
node $D/apply.mjs m.txt "Name|zoom|x|y" ...             # writes/inserts portraitFocus for that form
```

- Loop: verify, measure, solve, apply, then regenerate the manifest. Always
  regenerate it before the next solve, because solve starts from the current
  values.
- Expect 2–3 passes. The first pass from badly framed cards overshoots in
  both directions (Croissant swung between too big and too small).
- Cards whose face isn't visible at all (Crackborne, Specter, Silence,
  Miss.Christine) need one `compare` full view first. Then use `guess`.

## Size cap: "not too big" (user-calibrated 2026-10-18; overrides earlier size rules)

The user picked these as the reference set:

- Mon3tr, Hellagur, Exusiai, Blaze, Carnelian
- Aak, Mountain, Thorns the Lodestar, Almond, Amiya

Measured on the live cards, they share:

- **Face width (skin, cheek to cheek) ≈ 40–45% of the card width.** This is
  the primary size rule. Above ~46% the card reads as "too big", even when
  eye-to-chin looks fine. The failing cards were 52–65%: Angelina, Bagpipe,
  Fiammetta, Saga, Saria, Nightingale, Magallan, Weedy.
- **Visible background on both sides of the head.** The head and its hair mass
  should not fill the card edge to edge. A head wider than the card is the
  visual symptom of over-zoom.
- **Eye line 48–51%**, with the face centered horizontally.
- **Crown (without ears, horns or halo) at ~10–28% from the top.** There is
  breathing room above the head, so the head is not jammed against the top
  edge.

Eye-to-chin (~11–13%) still has to hold, but treat it as a sanity check. When
the two disagree, take the **smaller** zoom.

Shrinking a card, given the live face width `fw`, face center `cx` and eye
line `ey` (all as card fractions):

```bash
node $D/solve.mjs m.txt "Name|cx|ey|$(echo "$fw*0.12/0.42" | bc -l)|.49"
```

This makes `solve` scale the zoom by `.42/fw`, put the face center at 50% and
the eyes at 49%.

## Head-box anchor (2026-10-18). PRIMARY METHOD, supersedes eyeballed sizing

Eyeballed measurements on screenshots (eye line, face width, chin) drift by
±10–15% per card. That noise is why batches never looked consistent. Use a
machine-measured anchor instead: the operator's own `portrait.png`. This is
the 180×180 headshot the game crops from the same art, at a consistent
head scale.

1. `locate_head.py` finds that headshot inside `skins[0].src` by multi-scale
   template matching. The art is padded, because heads often overflow the top
   edge. Output: `label|fx|fy|fs|score`, where fx/fy/fs are the box left, top
   and side as fractions of the art.
   - It needs OpenCV. Make a scratchpad venv:
     `python -m venv cvenv && cvenv/Scripts/python -m pip install opencv-python-headless numpy`
   - Run it with `-I`.
   - A score ≥ 0.9 means a reliable match.
   - No portrait or a low score (Miss.Christine, April, Leizi, Leonhardt,
     Waai Fu) means a manual card.
2. `head_frame.mjs measure m.txt heads.txt [names]` shows where the box sits
   on the card now.
3. `head_frame.mjs solve m.txt heads.txt SIZE CX TOP [names]` returns
   `Name|zoom|x|y`. Feed the result to `apply.mjs`.

Targets, calibrated on the user's approved cards (Mon3tr, Hellagur, Exusiai,
Blaze, Carnelian, Aak, Mountain, Thorns the Lodestar, Almond, Amiya):

- **SIZE 1.02**: box side ÷ card width
- **CX 0.50**
- **TOP 0.104**, which puts the box center at about 41% of the card height

Leave those 10 cards untouched; they define the look. Verify with `verify`
afterwards. The remaining outliers come from the game's own crop differing,
e.g. a hat or hood inside the headshot (Rosa, Specter the Unchained). Nudge
those by hand.
