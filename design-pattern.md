# design-pattern.md — "Graphite Console" UI Guideline

The design system for the sci-fi UI overhaul. Reference: the "TRANSLATION / CAMERA MAP" HUD mockup.
Every new or reworked component follows this file. `CLAUDE.md` rules still apply on top of it (Tailwind-only, no `transition-all`, only `transform`/`opacity` animate, hover + focus-visible + active on every clickable element).

---

## 1. What we take from the reference

| Observed in reference | What it becomes here |
|---|---|
| Neutral **graphite** surfaces (no navy, no tint) with a soft radial vignette | Neutral grey scale replaces the current navy `ak-*` palette |
| Thick **bezel frames** around each panel: outer frame → inner inset border → content | 3-layer panel anatomy (§4.1) |
| Wide, spaced, **low-contrast display titles** ("TRANSLATION", "CAMERA MAP") sitting in the bezel, not in the content | Panel titles live in the frame header, set in a wide display face, grey, not white |
| Color only as **tiny signal points**: yellow + cyan dots, one yellow corner triangle, the yellow "PROCESS..." | Accent coverage stays under ~5% of any screen. Color = status, never decoration |
| **Dot strips and ruler ticks** along frame edges | Decorative "telemetry" rails on panel edges (§4.4) |
| Monospaced, tracked-out **data tables**, selected row inverted (light fill, dark text) | Table/list pattern (§4.6) |
| **Placeholder box with an X cross** | Empty/missing-image state (§4.9) |
| **Topographic contours, triangulated translucent polygons, ring markers** on the map | Data-viz language for the World Map, range grids, charts (§4.8) |
| Small notched corners, almost no border radius | Chamfered corners, `rounded-none` everywhere |

"Clean" means: few colors, lots of dark negative space, thin lines, and one level of decoration per panel. If a panel has rails **and** ticks **and** a corner triangle **and** a glow, take one away.

---

## 2. Color tokens

Replace the navy palette in `src/app/globals.css` `@theme`. Names describe roles, not hues, so components never need to change again when we retune.

### 2.1 Surfaces (graphite, neutral, base → floating)

| Token | Hex | Use |
|---|---|---|
| `--color-gc-void` | `#0b0b0c` | Page background, darkest corners of the vignette |
| `--color-gc-base` | `#141516` | Main canvas behind panels |
| `--color-gc-frame` | `#1d1e20` | Panel bezel / outer frame |
| `--color-gc-panel` | `#222326` | Panel content area |
| `--color-gc-raised` | `#2b2c30` | Hovered rows, inputs, raised chips |
| `--color-gc-float` | `#34363a` | Popovers, tooltips, dropdowns, modals |

### 2.2 Lines

| Token | Value | Use |
|---|---|---|
| `--color-gc-line` | `#3a3c40` | Default 1px borders, dividers |
| `--color-gc-line-soft` | `rgba(255,255,255,0.06)` | Inner hairlines, table row separators |
| `--color-gc-line-strong` | `#5a5d62` | Frame inset border, focused input border |

### 2.3 Text

| Token | Hex | Use |
|---|---|---|
| `--color-gc-ink` | `#e6e7e8` | Primary values, operator names, selected-row text on dark |
| `--color-gc-text` | `#a9acb1` | Body text |
| `--color-gc-dim` | `#6e7176` | Labels, column headers, panel titles in the frame |
| `--color-gc-ghost` | `#45474b` | Disabled, inactive rows, decorative glyphs |
| `--color-gc-invert` | `#cfd1d4` | Fill for the selected/inverted row (text on it = `gc-void`) |

### 2.4 Signal accents (the only colors allowed)

| Token | Hex | Meaning |
|---|---|---|
| `--color-gc-signal` | `#e8d23c` | **Primary signal / yellow.** Active, in progress, current selection marker, the corner triangle. Inherits the role of the old `ak-gold` |
| `--color-gc-signal-dim` | `#8f8226` | Yellow at rest, dot strips |
| `--color-gc-scan` | `#4fd6e0` | **Secondary / cyan.** Links, interactive hints, map markers, focus ring. Inherits the role of the old `ak-accent` |
| `--color-gc-scan-dim` | `#2c7c83` | Cyan at rest, dot strips |
| `--color-gc-alert` | `#e0603a` | Error, "ending soon", danger |
| `--color-gc-ok` | `#7fd18a` | Verified / complete (use sparingly; grey "VERIFIED" text is usually enough) |

Game-semantic colors stay as they are and are **not** UI accents: rarity star colors, `ak-infected` / `ak-non-infected`, class icons, event lane colors, and Terra nation colors (muted per §4.8). They show up only where they carry meaning from the game.

### 2.5 Rules
- Default state is grey. Color appears only when something **is** something: active, selected, warning, interactive-on-hover.
- Never use yellow and cyan with equal weight in the same component. Pick one lead per component.
- No colored panel backgrounds. Tint only with `/5`–`/10` alpha washes, and only on a selected/active element.
- Shadows are dark and neutral, never colored glows on panels. A soft glow (`drop-shadow` at 30–40% of the signal color) is allowed only on a ≤8px marker or dot.

---

## 3. Typography

| Role | Face | Where | Settings |
|---|---|---|---|
| **Display** | **Michroma** (Google Fonts) | Panel titles in the frame, page titles, operator name on the hero | Uppercase, `tracking-[0.18em]` for small titles; for the large hero, `tracking-[-0.03em]` (CLAUDE.md rule). Color `gc-dim` for frame titles, `gc-ink` for the hero name. Weight 400 only (it's a single-weight face) |
| **Body** | **IBM Plex Sans** | Profile text, lore, skill descriptions, paragraphs | 400/500, `leading-[1.7]`, `gc-text` |
| **Data** | **JetBrains Mono** | Tables, stats, timestamps, IDs, status labels, numbers, eyebrows | Uppercase for labels, `tracking-[0.12em]`, `tabular-nums`, 400/500 |

Rajdhani and Inter are retired during the migration. Wire the fonts through `next/font/google` in [layout.tsx](src/app/layout.tsx) as `--font-michroma`, `--font-plex`, `--font-jetbrains`, mapped in `@theme` to `--font-display`, `--font-body`, `--font-data`.

### Type scale (px)

| Token | Size / line-height | Face | Example |
|---|---|---|---|
| `hero` | 56 / 1.0 | Display | Operator name |
| `title` | 22 / 1.2 | Display | "CAMERA 03" style sub-heading inside a panel |
| `frame` | 15 / 1 | Display, `tracking-[0.18em]` | "TRANSLATION" panel titles |
| `body` | 15 / 1.7 | Body | Paragraphs |
| `data` | 13 / 1.5 | Data | Table cells, stat values |
| `label` | 11 / 1 | Data, `tracking-[0.14em]` uppercase | Column headers, field labels, status tags |
| `micro` | 9 / 1 | Data | Telemetry rail text, coordinates |

Never more than three type sizes visible inside a single panel.

---

## 4. Components

### 4.1 Panel (the core unit)

Three nested layers, same as the reference bezel:

```
┌─[frame: gc-frame]──────────────────────────────────◣─┐  ← signal triangle, top-right
│  TRANSLATION                         ▪ ▪   ▪          │  ← frame header: display title + dot strip
│ ┌─[inset border: gc-line-strong, 1px]─────────────┐ ▐ │  ← side tick rail (optional)
│ │ [content: gc-panel]                              │ ▐ │
│ │                                                  │   │
│ └──────────────────────────────────────────────────┘   │
│  ▪  ▪ ▪   ▪            ▪  ▪                 ▪ ▪       │  ← bottom dot strip (yellow/cyan/grey)
└───────────────────────────────────────────────────────┘
```

- **Frame:** `bg-gc-frame`, padding `p-3` (12px) on desktop, `p-2` on mobile.
- **Header:** sits inside the frame above the inset, height 40px. Title left in `frame` type, `gc-dim`. Right side: optional status dot strip or a small mono readout (e.g. `ID 0412`).
- **Inset:** `border border-gc-line-strong bg-gc-panel`. Content padding `p-5`.
- **Corners:** chamfer the top-left and bottom-right of the frame by 10px:
  `[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]`
  Note: `clip-path` cuts borders off. For a bordered chamfer, put the border color on an outer wrapper and clip an inner 1px-inset child with the same polygon.
- **Signal triangle:** an 8×8 yellow right triangle in the frame's top-right corner, only on the panel that currently has focus/selection or holds the page's primary content. One per screen region, not one per panel.
- **Depth:** `shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_12px_32px_-12px_rgba(0,0,0,0.7),0_2px_6px_rgba(0,0,0,0.4)]`.

### 4.2 Depth layers

| Layer | Surface | Shadow | z |
|---|---|---|---|
| Base | `gc-base` + vignette | none | 0 |
| Panel | `gc-frame` / `gc-panel` | panel shadow above | 10 |
| Raised (hover row, chip, input) | `gc-raised` | `0 1px 0 rgba(255,255,255,.05) inset` | 20 |
| Floating (tooltip, dropdown, modal) | `gc-float` + `border-gc-line-strong` | `0 24px 48px -16px rgba(0,0,0,.8), 0 4px 12px rgba(0,0,0,.5)` | 50 |

### 4.3 Page background

- Layered radial gradients, neutral only:
  `bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#26282b_0%,transparent_60%),radial-gradient(ellipse_60%_50%_at_100%_100%,#1a1b1d_0%,transparent_70%),linear-gradient(180deg,#141516,#0b0b0c)]`
- An SVG `feTurbulence` noise layer at `opacity-[0.035]`, `mix-blend-overlay`, fixed, `pointer-events-none`.
- No scanline animation, no particles in the new direction (the sidebar hover scan in §4.11 is a nav interaction, not background, and stays). "Clean" beats "busy". Existing `scanline` / `float-particle` keyframes get removed when the shell migrates.
- **Exception — Terra particles:** the Terra map panel (and only it) has an ambient particle field (`ParticleField`, particles.js 2.0.0) on its bottom layer (`z-0`, map and operator strip at `z-10`). Config = particles.js default with `line_linked: false`, `move: true` at speed `1.5`, all interactivity off, `pointer-events-none`. Skipped entirely under `prefers-reduced-motion`. Don't reuse it on other panels.

### 4.4 Telemetry rails (decoration, with rules)

- **Dot strip:** 2–3px square dots, irregular spacing, mostly `gc-ghost`, with 1–3 dots in `gc-signal-dim` / `gc-scan-dim`. Only along the bottom of a frame or the header's right side.
- **Tick rail:** a 3px-wide vertical bar on a frame's right edge, or a ruler of 1px ticks every 8px along a top edge (as on the Camera Map).
- **Bracket corners:** small L-shaped 1px `gc-line-strong` corners (10px arms) to mark a focus area inside content, e.g. around the operator art.
- Rails are static. If they ever animate, it's a single dot changing opacity, slow (≥2s), and disabled under `prefers-reduced-motion`.
- Max one rail type per panel edge. Rails never carry real information; if a dot means "online", it's a status indicator (§4.7), not a rail.

### 4.5 Buttons and interactive elements

| Variant | Rest | Hover | Focus-visible | Active | Disabled |
|---|---|---|---|---|---|
| **Primary** | `bg-gc-invert text-gc-void`, chamfered | `opacity-90` + left 2px yellow bar fades in | `outline outline-1 outline-offset-2 outline-gc-scan` | `scale-[0.98]` | `bg-gc-raised text-gc-ghost` |
| **Ghost** | `border border-gc-line text-gc-text` | `bg-gc-raised` layer fades in (opacity), text → `gc-ink` | same ring | `scale-[0.98]` | `text-gc-ghost border-gc-line-soft` |
| **Tab** | label type, `gc-dim` | `gc-text` | same ring | — | — |
| **Tab (selected)** | `gc-ink` + 2px yellow underline (scaleX in) | — | same ring | — | — |
| **Link** | `gc-scan` | underline via `scale-x` from 0 → 1 | same ring | `opacity-70` | — |

- Labels are uppercase Data type, sentence-length and literal: "Add to planner", "Show range", not "Submit" or "Go".
- Hover backgrounds are separate absolutely-positioned layers animated via `opacity`, because only `transform`/`opacity` may animate.
- Easing: `ease-[cubic-bezier(0.22,1.2,0.36,1)]` (spring overshoot) for transforms, `ease-out` 150ms for opacity.

### 4.6 Data tables and lists (Roster list, Items, Recruit results, Calendar list)

```
NAME            TIME          STATUS        ← label type, gc-dim, hairline below
CAMERA 01       08:30:59:09   ACTIVE        ← data type, gc-text
CAMERA 02       10:02:59:00   ACTIVE
█CAMERA 03█████ 15:47:16:08 ██ACTIVE██      ← selected: bg-gc-invert, text gc-void
CAMERA 04       44:59:56:08   ACTIVE
CAMERA 06       15:56:46:25   INACTIVE      ← whole row gc-ghost
CAMERA 07       58:30:59:59   ERROR         ← status cell only, gc-alert
```

- Row height 32px (desktop), 40px (touch). Separators `gc-line-soft`.
- Hover: `gc-raised` layer fades in. Selected: full inverted fill. Keyboard focus: cyan 1px inset outline.
- Status is always a word, never color alone. In-progress states end with "…" and use `gc-signal` ("PROCESSING…").
- Numbers right-aligned, `tabular-nums`.

### 4.7 Status indicators

- A 6px square dot + label in Data type. Colors per §2.4.
- In-progress may blink (`opacity` 1 → 0.3, 1.2s); everything else is static.
- "Ending ≤ 1 day" events use `gc-alert`. The current `urgent-ring` conic spin is replaced by a static alert border + a blinking alert dot.

### 4.8 Data visualization (World Map, Range Grid, Stat Bars, Growth Planner charts)

- **Lines:** 1px, `gc-line` / `rgba(255,255,255,0.18)`. Contour or grid backgrounds at 0.08–0.15 alpha.
- **Areas:** translucent white polygons, `fill-white/[0.06]` with `stroke-white/20`. Overlaps stack naturally, as in the reference triangulation.
- **Markers:** 14px ring (1px stroke) with a small chevron/glyph inside. Default `gc-scan`; the selected/primary marker is `gc-signal` with a second outer ring. Off-focus markers get a faint large ring (as on the bottom-right marker in the reference).
- **Terra map (console tone):** the map keeps its sampled colors, because nation color *is* data (it tells nations apart). Every tile keeps its hue, but saturation and lightness are clamped into the graphite band (`toConsoleTone` in `WorldMap.tsx`). Values are HSL; saturation = `min(source × scale, max)`, lightness = `min + source × (max − min)`:

  | Tone | Saturation scale / max | Lightness range | Use |
  |---|---|---|---|
  | `sea` | 0.4 / 22% | 10–14% | Ocean: a dark tinted graphite, barely above `gc-base` |
  | `terrain` | 0.2 / 8% | 22–34% | Unclaimed land, ice, desert: near-grey relief |
  | `nation` | 0.75 / 50% | 40–54% | Idle nations: clearly brighter than terrain — the brightness itself signals "this is interactive" |
  | `nation-active` | 1.0 / 72% | 50–64% | Hovered/pinned nation: lifted to near its real color |

  Side walls use the same tone at 55% lightness. Focus behavior: the active nation lifts (`translateY`), switches to `nation-active` and gets a 2px `gc-signal` outline; other nations drop to 45% opacity. Never show full-saturation source colors, and never tint the sea blue beyond the `sea` band.
- **Map region callout (hover/pin):** the region name is never printed on the map itself. Focusing a nation plays a sci-fi pin sequence, as an HTML layer over the SVG (`RegionCallout` in `WorldMap.tsx`):
  1. **Marker** (0–200ms): a 16px `gc-signal` square ring + 6px core on the nation's anchor, scaling in from 1.8×.
  2. **Leader line** (80–320ms): 1px line grows upward (`scaleY`, origin bottom), gradient `gc-signal` → `gc-invert`, 56px (80px desktop).
  3. **Tag** (300–620ms): `gc-float` box with a 2px `gc-signal` edge opens sideways from the top of the line (`scaleX`, origin left, spring easing). It opens **right**; only anchors in the last 15% of the map width open left.
  4. **Text** (500–750ms): the nation's emblem (`getNationIcon` → `public/icons/factions/*.png`, 20–22px, white) + region name in the display face, uppercase, `tracking-[0.16em]`, fading in from 6px left. Nations without an emblem asset (currently Kazdel) fall back to a 6px `gc-signal` square.

  Keyframes `callout-*` in `globals.css` animate only `transform`/`opacity`; the callout remounts per nation so the sequence replays, and `motion-safe:` skips it under reduced motion.
- **Range grid tiles:** occupied = `gc-invert` fill, empty = 1px `gc-line` outline, operator position = `gc-signal`.
- **Stat bars:** 4px track `gc-raised`, fill `gc-text`; the stat being compared or upgraded fills `gc-signal`. Animate with `scaleX` from the left (existing `stat-fill` keyframe is fine).
- **Side readout:** a narrow column of micro-type mono lines next to a chart (coordinates, IDs) is allowed as atmosphere, but it must show real values from the data (e.g. map coordinates, stage codes), never lorem/hex noise.

### 4.9 Images and operator art

- Art sits inside a bracket-cornered frame (§4.4), not a rounded card.
- Required overlays (CLAUDE.md): `bg-gradient-to-t from-black/60` + a color treatment layer. Here the treatment is neutral: `bg-[#2b2c30] mix-blend-multiply opacity-40` for thumbnails, so colorful splash art doesn't fight the graphite UI. Full operator art on the hero keeps only the bottom gradient (no multiply), since the art is the point of that page.
- **Missing image:** a `gc-panel` box with a 1px `gc-line` border and two diagonal 1px lines corner to corner (the X placeholder), label "NO IMAGE" in micro type.

### 4.10 Inputs (search, filters, Recruit tags, Planner fields)

- `bg-gc-base border border-gc-line`, chamfered 6px, height 36px, Data type.
- Focus: border → `gc-line-strong` + cyan focus ring. Placeholder `gc-ghost`.
- Toggle chips (Recruit tags, filters): off = ghost button; on = inverted fill (`gc-invert` / `gc-void` text), same as a selected row, so "selected" looks the same everywhere.

### 4.11 Sidebar navigation (`SideMenu`)

The sidebar is the one deliberate exception to §4.6 / §6: it keeps the original terminal feel (scan on hover, cyan rail on active) instead of the inverted-row selection.

```
┌─ 264px ───────────────────────┐   collapsed: 72px rail (icon column only)
│ [logo]                       (‹)  ← collapse tab: round, straddles the right edge
│ ■ OPERATOR TERMINAL           │   ← signal dot + micro type, gc-dim
│ ───────────────────────────── │   ← divider, gc-line (scaleX when collapsing)
│▌[icon]  COMMAND CENTER   ░░░░ │   ← active: 2px gc-scan rail + cyan wash → transparent
│ [icon]  OPERATOR LIST         │   ← rest: gc-dim
│ [icon]  RECRUIT    ¦          │   ← hover: gc-raised/60 wash + scan line sweeping right
│ ...                           │
│ ───────────────────────────── │
│ [icon]  MUTE                  │   ← utility row: same hover, never "active"
│ RHODES ISLAND · TERMINAL v0.5 │
│ ·· ·  · ··  ·                 │   ← dot strip (§4.4)
└───────────────────────────────┘
```

- **Shell:** `bg-gc-frame border-r border-gc-line`, neutral layered shadow. Width 264px; collapsed slides to a 72px rail via `translateX`, never by animating width.
- **Row:** 44px tall (`h-11`), full width. Icon column is a fixed 72px so icons don't move when collapsing. Label: Data type, 12px, `tracking-[0.14em]`, uppercase; it fades out (`opacity`) when collapsed, and the row shows its label via `title`.
- **Rest:** text `gc-dim`, icon `opacity-80`.
- **Hover (scan):** an absolutely-positioned layer fades in (`opacity`, 150ms ease-out) containing:
  - a `bg-gc-raised/60` wash over the whole row
  - a 2px vertical scan line, `linear-gradient(to bottom, transparent, rgba(79,214,224,0.5), transparent)` (`gc-scan` at 50%), looping left → right via the `sidemenu-scan` keyframe (2s linear, `transform` only, triggered by `.sidemenu-item:hover`)
  - text goes `gc-dim` → `gc-ink`.
- **Active (current page):** text and icon `gc-scan` (icon full opacity), plus:
  - a 2px `gc-scan` rail on the left edge, inset 8px top/bottom, with a soft `drop-shadow` glow at 40%; it enters with `scaleY` 0 → 1 on the spring ease (250ms)
  - a `bg-linear-to-r from-gc-scan/8 to-transparent` wash over the row, fading in via `opacity`.
  - No inverted fill, no trailing marker dot.
- **Pressed:** icon `scale-[0.9]`, hover layer drops to `opacity-70`.
- **Focus-visible:** 1px `gc-scan` outline, inset (`-outline-offset-1`).
- **Utility rows** (Mute) use the same row and hover, but never take the active style.
- **Collapse tab:** a 28px `rounded-full` button (the only round element in the UI — it reads as a handle, not a panel) centered on the sidebar's right border at the header's vertical center (`top-[30px] left-[250px]`), so half of it sticks out over the page. Icon only (14px chevron, rotates 180° on the spring ease when collapsed); no text label and no `title` tooltip, `aria-label` only.
  - `bg-gc-raised border border-gc-line-strong text-gc-text`, plus a 3px `gc-frame` ring shadow so it looks cut into the sidebar edge, and a neutral drop shadow.
  - Hover: `gc-float` layer fades in, text → `gc-ink`. Pressed: icon `scale-[0.85]`. Focus: standard `FOCUS_RING`.
  - It lives outside the `<aside>` (which clips overflow) and translates by the same `-192px` as the sidebar. Desktop only (`hidden md:flex`).
- **Mobile:** sidebar is off-canvas (`-translate-x-full`), opened by a 40px ghost button top-left; a backdrop closes it.
- Reduced motion: the scan loop is the one non-essential loop on screen; disable its animation under `prefers-reduced-motion` (the wash alone still marks hover).

### 4.12 Rarity stars

Rarity is always shown with the shared `<Stars count={rarity} />` component (`src/components/ui/Stars.tsx`). It has exactly one style, so every page reads the same:

- **Shape:** filled 5-point star, `w-3 h-3` (12px) mobile / `md:w-4 md:h-4` (16px) desktop.
- **Tilt:** every star rotated **15°** (`rotate-15`).
- **Spacing:** stars overlap, never gap: `-space-x-0.5` mobile / `md:-space-x-1` desktop, so the row reads as one badge.
- **Color:** `ak-gold-bright` / `gc-signal` with a soft 4px yellow drop-shadow. Stars are a game-semantic color (§2.5), not a UI signal, so they don't count against the one-accent rule.
- **Count = rarity:** render exactly `rarity` stars; never pad with empty/outline stars.
- **Don't:** add size or tilt variants, use `gap-*` between stars, rebuild stars inline with SVG or `★` text, or recolor them per rarity. The only allowed `★` glyph is inside native `<option>` text where components can't render.
- **Placement:** in a rarity group header, stars sit left of the divider line with the count on the right (Operator List, Recruit); on the operator hero they sit under the name, next to the `ID` readout.

---

## 5. Layout and spacing

Spacing tokens (4px base). Use only these steps:

| Token | px | Tailwind | Use |
|---|---|---|---|
| `xs` | 4 | `1` | Icon ↔ label |
| `sm` | 8 | `2` | Inside chips, between dots |
| `md` | 12 | `3` | Frame padding, row gaps |
| `lg` | 20 | `5` | Panel content padding |
| `xl` | 32 | `8` | Gap between panels |
| `2xl` | 56 | `14` | Section gaps on big pages |

- Panels sit on the base canvas with `gap-8` between them. Panels never touch.
- Edge-to-edge dashboard grids: `grid-cols-12`. The reference ratio (small left panel, big right panel) maps to `col-span-4` / `col-span-8`.
- Mobile (<768px): panels stack, frame padding drops to `p-2`, decorative rails and side readouts are hidden (`max-md:hidden`), titles stay.
- Border radius: `rounded-none` for everything. Chamfers replace rounding.

---

## 6. Motion

- Page/panel enter: frame fades in (`opacity`), then content `translateY(6px) → 0`, staggered 40ms per panel, max ~300ms total.
- Selection: the inverted row/tab fill uses `scaleX` from the left, 180ms spring.
- Hover: opacity layer swaps, 150ms.
- Allowed loops: in-progress dot blink, a single loading bar, and the sidebar hover scan (§4.11). Nothing else loops.
- Every animation is wrapped in `motion-safe:` or checked against `prefers-reduced-motion`.
- GSAP (already installed) is for orchestrated sequences like the splash screen and the panel stagger; simple hovers stay in Tailwind.

---

## 7. Copy voice

- Labels and statuses: uppercase mono, short, literal ("ACTIVE", "E2 MAX", "3 MATERIALS SHORT").
- Body copy: sentence case, plain. Operator lore keeps its original text.
- Empty states say what to do: "No operators match these tags. Remove a tag to widen the search."
- Errors say what happened: "Couldn't load event data. Reload to try again."
- No fake telemetry text. Every number on screen comes from real data.

---

## 8. Do / Don't

| Do | Don't |
|---|---|
| Grey first, color as signal | Cyan/gold outlines on every card |
| One signal triangle per screen region | Triangles, glows, and rails on every panel |
| Chamfered corners, `rounded-none` | `rounded-lg` cards |
| Inverted fill for "selected" everywhere (sidebar nav excepted, §4.11) | Different selection styles per page |
| Mono for any number | Numbers in the display face |
| Neutral dark shadows | Colored glows on panels |
| Animate `transform` / `opacity` only | `transition-all`, animating width/height/color |
| Real data in readouts | Decorative hex/lorem strings |

---

## 9. Migration map

| Old token | New token |
|---|---|
| `ak-bg` | `gc-void` / `gc-base` |
| `ak-surface` | `gc-frame` |
| `ak-panel` | `gc-panel` |
| `ak-elevated` | `gc-raised` |
| `ak-border` | `gc-line` |
| `ak-accent`, `ak-accent-bright` | `gc-scan`, `gc-scan` (hover = opacity, not a brighter hex) |
| `ak-gold`, `ak-gold-bright` | `gc-signal-dim`, `gc-signal` |
| `ak-text` | `gc-text` |
| `ak-text-muted` | `gc-dim` |
| `ak-danger`, `ak-orange*` | `gc-alert` |
| `ak-infected`, `ak-non-infected` | keep (game semantics) |
| `font-display` (Rajdhani) | `font-display` (Michroma) + `font-data` (JetBrains Mono) for numbers/labels |
| `font-body` (Inter) | `font-body` (IBM Plex Sans) |

Suggested rollout order (one PR-sized step each, screenshot-check each):
1. Tokens + fonts + page background in `globals.css` / `layout.tsx` (keep `ak-*` aliases pointing at the new values so nothing breaks).
2. Shared primitives: `Panel`, `Button`, `DataTable` row, `StatusDot`, `Placeholder` in `src/components/ui/`.
3. Shell: `AppShell`, `TopBar`, `SideMenu`, `Footer`.
4. Operator page: `OperatorTerminal`, `OperatorHud`, `panels/*`, `StatBar`, `RangeGrid`.
5. Lists: `OperatorRoster`, `RosterCard`, `RosterListRow`, `Items`, `Recruit`.
6. Data-viz pages: `WorldMap`, `Calendar`, `OngoingEvents`, `GrowthPlanner`, `Dashboard`.
7. Remove `ak-*` aliases and the retired keyframes (`scanline`, `float-particle`, `urgent-spin`). Keep `sidemenu-scan`: the sidebar hover scan is an intentional exception.
