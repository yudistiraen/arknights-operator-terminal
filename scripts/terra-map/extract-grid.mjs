// Terra world map hex sampler.
// Reads Terra_world_map_redrawn_ver.2.webp, overlays a configurable flat-top
// odd-q hex grid, samples the color of each cell, classifies it, and writes:
//   scripts/terra-map/out/terra-grid.json   (col,row,type,nationId?,color,uncertain?)
//   scripts/terra-map/out/terra-preview.png (solid-color re-render for visual QA)
//
// Usage: node scripts/terra-map/extract-grid.mjs [cols] [rows]

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const IMAGE_PATH = path.join(ROOT, "Terra_world_map_redrawn_ver.2.webp");
const OUT_DIR = path.join(__dirname, "out");

const GRID_COLS = Number(process.argv[2]) || 50;
const GRID_ROWS = Number(process.argv[3]) || 62;
// Small nations (Kjerag, Siesta, Minos, Laterano, ...) only span a handful of
// cells at the requested output resolution — too few samples for a reliable
// color average, and any single stray/icon pixel skews them badly. So we
// classify on a much finer internal grid (FINE_FACTOR x denser) where every
// nation gets a solid sample pool, then aggregate back down to the output
// resolution by majority vote. This keeps the final tile count exactly at
// GRID_COLS x GRID_ROWS (so browser performance stays predictable) while the
// color/label decisions themselves are based on far more data.
const FINE_FACTOR = 3;

// ---------------------------------------------------------------------------
// Reference swatch regions: rectangles hand-picked from clean, label-free
// patches of the source image (see conversation log) that are known to be
// pure examples of each non-nation category. Each category can have a wide
// color *gradient* (sea and ice especially), so we sample a small grid of
// points across the rectangle and outlier-trim, rather than relying on one
// single reference color.
// ---------------------------------------------------------------------------
const BASE_REGIONS = {
  // [x1, y1, x2, y2, step, trimThreshold]
  background: [[50, 20, 2900, 160, 50, 15]],
  sea: [[2100, 2700, 2900, 3600, 50, 55]],
  land: [[600, 2900, 950, 3100, 25, 20]],
  ice: [[1650, 800, 2050, 1050, 25, 40]],
  void: [[1080, 280, 1420, 430, 25, 35]],
  desert: [[405, 2670, 475, 2760, 10, 30]],
};

// Confident-match deltaE threshold: below this, a cell is assigned straight to
// the base category. Above it, the cell becomes a "country-candidate" that
// gets resolved via clustering below.
const CONFIDENT_DELTA_E = 9;
// Above this deltaE even the *nearest* base swatch is too far to be a plausible
// match for anything but a saturated nation color.
const COUNTRY_CANDIDATE_MIN_DELTA_E = 13;

const NATION_LIST = [
  "sami", "ursus", "higashi", "kazimierz", "yan", "bolivar", "columbia",
  "kazdel", "leithanien", "kjerag", "siracusa", "victoria", "minos",
  "laterano", "rimbilliton", "siesta", "sargon", "iberia",
];

// Approximate nation locations carried over from the hand-tuned HTML
// prototype (in its 30x36 grid space) turned out to only roughly line up
// with the real artwork — small/tightly-packed nations bled into their
// neighbors. These anchors were instead read directly off a 1000px-wide
// render of the reference image (fc = x/1000, fr = y/1246.6, i.e. fraction
// of image width/height), by eye-balling each color blob's center of mass.
const NATION_ANCHORS_FRACTIONAL = {
  sami: { fc: 0.365, fr: 0.369 },
  ursus: { fc: 0.570, fr: 0.397 },
  higashi: { fc: 0.800, fr: 0.377 },
  kazimierz: { fc: 0.445, fr: 0.445 },
  yan: { fc: 0.790, fr: 0.445 },
  bolivar: { fc: 0.215, fr: 0.457 },
  columbia: { fc: 0.280, fr: 0.437 },
  kazdel: { fc: 0.668, fr: 0.473 },
  leithanien: { fc: 0.5498, fr: 0.500 },
  kjerag: { fc: 0.383, fr: 0.489 },
  siracusa: { fc: 0.628, fr: 0.505 },
  victoria: { fc: 0.460, fr: 0.521 },
  minos: { fc: 0.330, fr: 0.549 },
  laterano: { fc: 0.565, fr: 0.553 },
  rimbilliton: { fc: 0.680, fr: 0.577 },
  siesta: { fc: 0.395, fr: 0.561 },
  sargon: { fc: 0.285, fr: 0.610 },
  iberia: { fc: 0.520, fr: 0.630 },
};

function nationAnchorsFractional() {
  return NATION_ANCHORS_FRACTIONAL;
}

// Some nations are a literal handful of native hexes drawn in a color barely
// distinguishable from plain "land" grey (e.g. Kjerag's grey reads closer to
// land than to any other nation, so it never clears the candidate threshold
// and the automatic seed search has nothing real to find). For these,
// manually-verified tile centers (read directly off the reference image by
// eye, then confirmed with a raw pixel sample) are more trustworthy than
// automatic detection — `skipAutoSeed: true` disables the normal seed search
// entirely so it can't also grab an unrelated neighbor's cells under this
// nation's name. Nations whose auto-detection is otherwise working just get
// `points` added on top (e.g. Siracusa: one extra verified tile its own
// flood-fill missed), with auto-seeding left on.
const MANUAL_OVERRIDES = {
  kjerag: {
    skipAutoSeed: true,
    points: [
      { fc: 0.3862, fr: 0.4872 }, // verified: raw pixel (1140,1793) = rgb(182,182,182)
      { fc: 0.3804, fr: 0.4940 }, // verified: raw pixel (1123,1818) = rgb(182,182,182)
    ],
  },
  leithanien: {
    skipAutoSeed: true,
    points: [
      { fc: 0.5505, fr: 0.5005 }, // verified: raw pixel (1625,1842) = rgb(80,114,102)
      { fc: 0.5589, fr: 0.5005 }, // verified: raw pixel (1650,1842) = rgb(80,114,102)
      { fc: 0.5376, fr: 0.5019 }, // verified: raw pixel (1587,1847) = rgb(80,114,102)
      { fc: 0.5528, fr: 0.5109 }, // verified: raw pixel (1632,1880) = rgb(82,113,102)
    ],
  },
  // User-confirmed: the stray "void" (near-black) speck just above Siracusa's
  // own blob, next to Kazdel's icon, is actually Siracusa territory (its own
  // color-based detection landed on an icon-shadow pixel there instead).
  // Siracusa's normal flood-fill already finds the rest of its blob fine.
  siracusa: {
    skipAutoSeed: false,
    points: [
      { fc: 0.6101, fr: 0.4918 }, // was misclassified as void: rgb ~ (0,2,5)
    ],
  },
};

// ---------------------------------------------------------------------------
// Color space helpers (sRGB -> CIE Lab, CIE76 deltaE)
// ---------------------------------------------------------------------------
function srgbToLinear(c) {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function rgbToLab([r, g, b]) {
  const lr = srgbToLinear(r), lg = srgbToLinear(g), lb = srgbToLinear(b);
  const x = (lr * 0.4124 + lg * 0.3576 + lb * 0.1805) / 0.95047;
  const y = (lr * 0.2126 + lg * 0.7152 + lb * 0.0722) / 1.0;
  const z = (lr * 0.0193 + lg * 0.1192 + lb * 0.9505) / 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(x), fy = f(y), fz = f(z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}
function deltaE(labA, labB) {
  const dl = labA[0] - labB[0], da = labA[1] - labB[1], db = labA[2] - labB[2];
  return Math.sqrt(dl * dl + da * da + db * db);
}

function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
function rgbDist(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);
}

// Build a representative swatch list per base category by grid-sampling its
// known-clean region rectangle(s) and trimming outliers (border lines, text,
// stray icons) via two passes of median-distance filtering.
function buildBaseSwatchLab(colorAt) {
  const result = {};
  for (const [cat, regions] of Object.entries(BASE_REGIONS)) {
    let pts = [];
    for (const [x1, y1, x2, y2, step] of regions) {
      for (let y = y1; y < y2; y += step) {
        for (let x = x1; x < x2; x += step) {
          const c = colorAt(x, y);
          if (c) pts.push(c);
        }
      }
    }
    const [, , , , , trimThreshold] = regions[0];
    for (let pass = 0; pass < 2; pass++) {
      const med = [median(pts.map((p) => p[0])), median(pts.map((p) => p[1])), median(pts.map((p) => p[2]))];
      pts = pts.filter((p) => rgbDist(p, med) < trimThreshold);
    }
    result[cat] = pts.map(rgbToLab);
  }
  return result;
}

function minDeltaEToSwatchList(lab, swatchLabs) {
  let best = Infinity;
  for (const s of swatchLabs) {
    const d = deltaE(lab, s);
    if (d < best) best = d;
  }
  return best;
}

function labToRgb([L, a, b]) {
  const fy = (L + 16) / 116, fx = fy + a / 500, fz = fy - b / 200;
  const fInv = (t) => (t ** 3 > 0.008856 ? t ** 3 : (t - 16 / 116) / 7.787);
  const x = fInv(fx) * 0.95047, y = fInv(fy) * 1.0, z = fInv(fz) * 1.08883;
  const lr = x * 3.2406 + y * -1.5372 + z * -0.4986;
  const lg = x * -0.9689 + y * 1.8758 + z * 0.0415;
  const lb = x * 0.0557 + y * -0.204 + z * 1.057;
  const toSrgb = (c) => {
    c = c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;
    return Math.round(Math.min(255, Math.max(0, c * 255)));
  };
  return [toSrgb(lr), toSrgb(lg), toSrgb(lb)];
}

function rgbToHex([r, g, b]) {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log(`Loading ${IMAGE_PATH} ...`);
  const { data, info } = await sharp(IMAGE_PATH).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  console.log(`Image: ${width}x${height}, ${channels} channels`);

  function colorAt(x, y) {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || y < 0 || x >= width || y >= height) return null;
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  const baseSwatchLab = buildBaseSwatchLab(colorAt);
  console.log("\nBase swatch pool sizes (after outlier trim):");
  for (const [cat, labs] of Object.entries(baseSwatchLab)) {
    console.log(`  ${cat.padEnd(12)} ${labs.length} reference points`);
  }

  // Flat-top odd-q grids: FINE for sampling/classification, output (GRID_*)
  // for the final tile list. Both sized to fill the whole canvas.
  const FINE_COLS = GRID_COLS * FINE_FACTOR;
  const FINE_ROWS = GRID_ROWS * FINE_FACTOR;
  const STEP_X = width / GRID_COLS;
  const STEP_Y = height / GRID_ROWS;
  const FINE_STEP_X = width / FINE_COLS;
  const FINE_STEP_Y = height / FINE_ROWS;

  function makeCellCenter(stepX, stepY) {
    return (col, row) => {
      const x = stepX / 2 + col * stepX;
      const y = stepY / 2 + row * stepY + (col % 2 === 1 ? stepY / 2 : 0);
      return [x, y];
    };
  }
  const cellCenter = makeCellCenter(STEP_X, STEP_Y);
  const fineCellCenter = makeCellCenter(FINE_STEP_X, FINE_STEP_Y);

  // Robust per-cell color: sample a small jittered cluster of points and take
  // the medoid (point with smallest total distance to the others) so a
  // stray label/icon pixel can't skew the result.
  function sampleCell(cx, cy, stepX, stepY) {
    const jx = stepX * 0.22, jy = stepY * 0.22;
    const offsets = [[0, 0], [jx, 0], [-jx, 0], [0, jy], [0, -jy]];
    const pts = offsets.map(([dx, dy]) => colorAt(cx + dx, cy + dy)).filter(Boolean);
    if (pts.length === 0) return null;
    let bestIdx = 0, bestScore = Infinity;
    for (let i = 0; i < pts.length; i++) {
      let score = 0;
      for (let j = 0; j < pts.length; j++) {
        if (i === j) continue;
        const [r1, g1, b1] = pts[i], [r2, g2, b2] = pts[j];
        score += Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
      }
      if (score < bestScore) { bestScore = score; bestIdx = i; }
    }
    return pts[bestIdx];
  }

  const cells = [];
  for (let col = 0; col < FINE_COLS; col++) {
    for (let row = 0; row < FINE_ROWS; row++) {
      const [cx, cy] = fineCellCenter(col, row);
      if (cx < 0 || cy < 0 || cx >= width || cy >= height) continue;
      const rgb = sampleCell(cx, cy, FINE_STEP_X, FINE_STEP_Y);
      if (!rgb) continue;
      cells.push({ col, row, cx, cy, rgb, lab: rgbToLab(rgb) });
    }
  }
  console.log(`Sampled ${cells.length} cells on a fine ${FINE_COLS}x${FINE_ROWS} grid (FINE_STEP_X=${FINE_STEP_X.toFixed(2)}, FINE_STEP_Y=${FINE_STEP_Y.toFixed(2)}), aggregating to ${GRID_COLS}x${GRID_ROWS} output`);

  // Pass 1a: classify against the hand-picked base swatches. These regions
  // are small, so they under-represent how far sea/land/ice/void gradients
  // actually swing across the *whole* map — a cell on a distant, unsampled
  // shade of "sea" reads as unmatched and gets misfiled as a country
  // candidate. Left uncorrected, chains of these false positives run along
  // entire coastlines and bridge unrelated nations into one connected
  // component once flood-filled (this is exactly what happened: a single
  // 1114-cell "component" turned out to span half the map).
  function classifyAgainst(swatchLab) {
    for (const cell of cells) {
      let bestCat = null, bestDist = Infinity, secondDist = Infinity;
      for (const [cat, labs] of Object.entries(swatchLab)) {
        const d = minDeltaEToSwatchList(cell.lab, labs);
        if (d < bestDist) { secondDist = bestDist; bestDist = d; bestCat = cat; }
        else if (d < secondDist) { secondDist = d; }
      }
      cell.baseDist = bestDist;
      cell.baseCat = bestCat;
      cell.baseAmbiguous = secondDist - bestDist < 4;
    }
  }
  classifyAgainst(baseSwatchLab);

  // Pass 1b: bootstrap — rebuild each base category's swatch pool from every
  // cell classified confidently (small deltaE) against it *anywhere in the
  // map*, not just the hand-picked rectangle, then reclassify everything
  // against this far more representative pool.
  const BOOTSTRAP_CONFIDENT_DELTA_E = 6;
  const expandedSwatchLab = {};
  for (const cat of Object.keys(baseSwatchLab)) {
    const confidentLabs = cells
      .filter((c) => c.baseCat === cat && c.baseDist < BOOTSTRAP_CONFIDENT_DELTA_E)
      .map((c) => c.lab);
    expandedSwatchLab[cat] = confidentLabs.length > 20 ? confidentLabs : baseSwatchLab[cat];
  }
  console.log("\nBootstrapped swatch pool sizes (whole-map, confident cells):");
  for (const [cat, labs] of Object.entries(expandedSwatchLab)) {
    console.log(`  ${cat.padEnd(12)} ${labs.length} reference points`);
  }
  classifyAgainst(expandedSwatchLab);

  const countryCandidates = [];
  for (const cell of cells) {
    if (cell.baseDist > COUNTRY_CANDIDATE_MIN_DELTA_E) countryCandidates.push(cell);
  }

  // Pass 2: seeded region growing, one flood-fill per nation, started from
  // its own hand-verified anchor cell.
  //
  // Earlier attempts (nearest-anchor-by-position, then unsupervised
  // connected-component matching, then EM-style combined scoring) all shared
  // the same weak spot: they had to figure out *after the fact* which blob
  // belongs to which nation, and a stray or fragmented region could always
  // out-score the truth for some other nearby nation. Seeded growing sidesteps
  // that entirely — each nation starts from a cell we already trust (nearest
  // fine cell to its hand-read anchor) and only claims neighbors that match
  // *that* seed's own color, so Ursus's flood-fill can never wander into
  // Kazimierz's green and vice versa, and a stray desert-edge pixel can only
  // join Sargon's fill if it is both hex-adjacent *and* gold, which desert
  // brown is not.
  const anchors = nationAnchorsFractional();

  function hexNeighbors(col, row) {
    const evenOffsets = [[0, -1], [1, -1], [1, 0], [0, 1], [-1, 0], [-1, -1]];
    const oddOffsets = [[0, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]];
    const offsets = col % 2 === 0 ? evenOffsets : oddOffsets;
    return offsets.map(([dc, dr]) => [col + dc, row + dr]);
  }

  const candidateByKey = new Map(countryCandidates.map((c) => [`${c.col},${c.row}`, c]));
  const REGION_GROW_MAX_DELTA_E = 16;
  const MAX_HOPS = 45; // generous cap so growth can't runaway across the whole map

  // Cap how far a seed can be from its anchor: if a nation's true color is
  // faint (close to "land") and no candidate cell was even flagged near its
  // anchor, we want that nation to simply get zero cells — not reach out and
  // steal a neighboring nation's territory as its "nearest" candidate.
  const MAX_SEED_DISTANCE = 0.05;
  // Nation icons/crests sit right at the anchor point and are drawn in white,
  // over the fill — the single nearest candidate cell can land square on a
  // white icon pixel instead of the surrounding solid color (this is exactly
  // what happened to Iberia: the seed came back white, didn't match any of
  // its own green neighbors, and the fill died after one cell). Use the
  // median color of the nearest handful of candidates instead of trusting
  // any one pixel.
  const SEED_NEIGHBORHOOD = 7;
  const seedCells = {};
  const seedLabs = {};
  for (const nation of NATION_LIST) {
    // Manually-verified nations skip automatic seeding entirely — letting the
    // flood-fill also search for a seed risks it grabbing an unrelated
    // neighbor's cells under this nation's name in addition to the real ones.
    if (MANUAL_OVERRIDES[nation]?.skipAutoSeed) { seedCells[nation] = null; continue; }
    const ranked = countryCandidates
      .map((cell) => {
        const fc = cell.col / FINE_COLS, fr = cell.row / FINE_ROWS;
        return { cell, d: Math.hypot(fc - anchors[nation].fc, fr - anchors[nation].fr) };
      })
      .sort((a, b) => a.d - b.d);
    if (ranked.length === 0 || ranked[0].d > MAX_SEED_DISTANCE) { seedCells[nation] = null; continue; }
    const nearby = ranked.slice(0, SEED_NEIGHBORHOOD);
    seedCells[nation] = nearby[0].cell; // spatial starting point for the BFS
    seedLabs[nation] = [0, 1, 2].map((i) => median(nearby.map((r) => r.cell.lab[i])));
  }
  if (process.env.DEBUG_COMPONENTS) {
    console.log("\nSeed cells:");
    for (const nation of NATION_LIST) {
      console.log(`  ${nation.padEnd(12)} ${seedCells[nation] ? `col=${seedCells[nation].col},row=${seedCells[nation].row} medianColor=${rgbToHex(labToRgb(seedLabs[nation]))}` : "NO SEED (too far from any candidate)"}`);
    }
  }

  // Multi-source BFS across all nations at once: process the shared FIFO
  // queue in seed-then-layer order, so if two nations' fills could reach the
  // same cell, whichever is fewer hops away (i.e. closer) claims it first.
  const claimedBy = new Map(); // cell -> nation
  const queue = [];
  for (const nation of NATION_LIST) {
    if (!seedCells[nation]) continue;
    queue.push({ nation, cell: seedCells[nation], hops: 0, seedLab: seedLabs[nation] });
  }
  let qi = 0;
  while (qi < queue.length) {
    const { nation, cell, hops, seedLab } = queue[qi++];
    if (claimedBy.has(cell)) continue;
    if (hops > 0 && deltaE(cell.lab, seedLab) > REGION_GROW_MAX_DELTA_E) continue;
    claimedBy.set(cell, nation);
    if (hops >= MAX_HOPS) continue;
    for (const [nc, nr] of hexNeighbors(cell.col, cell.row)) {
      const neighbor = candidateByKey.get(`${nc},${nr}`);
      if (neighbor && !claimedBy.has(neighbor)) queue.push({ nation, cell: neighbor, hops: hops + 1, seedLab });
    }
  }

  const nationOfCell = new Map();
  for (const cell of countryCandidates) {
    const nation = claimedBy.get(cell) || null;
    nationOfCell.set(cell, nation ? { nationId: nation, uncertain: false } : { nationId: null, uncertain: false, rejected: true });
  }

  // Apply manual overrides: snap each verified point to its nearest actual
  // fine cell (searching *all* cells, not just candidates, since these
  // nations' true color often doesn't clear the candidate threshold at all)
  // and force-assign it, adding it into countryCandidates if it wasn't
  // already there so every downstream pass (mean color, aggregation, etc.)
  // picks it up.
  for (const [nation, { points }] of Object.entries(MANUAL_OVERRIDES)) {
    for (const point of points) {
      let best = null, bestDist = Infinity;
      for (const cell of cells) {
        const fc = cell.col / FINE_COLS, fr = cell.row / FINE_ROWS;
        const d = Math.hypot(fc - point.fc, fr - point.fr);
        if (d < bestDist) { bestDist = d; best = cell; }
      }
      if (!best) continue;
      if (!countryCandidates.includes(best)) countryCandidates.push(best);
      nationOfCell.set(best, { nationId: nation, uncertain: false });
      best.isManualOverride = true;
    }
  }

  // Fill in icon/crest holes: every nation's crest is drawn in white (plus a
  // dark drop-shadow) right on top of its fill, at the same spot we read the
  // anchor from. Pixels landing on the icon read as "ice" (white) or "void"
  // (near-black) rather than the nation's real color, leaving stray
  // off-color speckles inside otherwise-solid territory. A cell fully
  // enclosed by one nation's territory almost certainly *is* that nation's
  // territory — it just got a bad color sample — so absorb it, using the
  // nation's already-computed fill color rather than its own icon-colored
  // pixel. Two passes so a hole several fine-cells wide fills in from its
  // rim inward.
  const cellByKey = new Map(cells.map((c) => [`${c.col},${c.row}`, c]));
  for (let pass = 0; pass < 5; pass++) {
    const fills = [];
    for (const cell of cells) {
      const existing = nationOfCell.get(cell);
      if (existing && existing.nationId) continue; // already assigned
      const allNeighbors = hexNeighbors(cell.col, cell.row).map(([nc, nr]) => cellByKey.get(`${nc},${nr}`)).filter(Boolean);
      const knownNations = allNeighbors.map((n) => nationOfCell.get(n)?.nationId).filter(Boolean);
      // Require the *known* (already-assigned) neighbors to unanimously agree
      // on one nation, and that they make up a solid majority of however
      // many neighbors this cell actually has (handles map edges, which have
      // fewer than 6). A large icon empties several rings of fine cells, so
      // this is re-run multiple passes, filling one ring further in each time.
      if (knownNations.length < 3 || knownNations.length / allNeighbors.length < 0.5) continue;
      const uniqueNations = new Set(knownNations);
      if (uniqueNations.size !== 1) continue; // only fill single-nation-enclosed pockets
      fills.push({ cell, nationId: [...uniqueNations][0] });
    }
    if (fills.length === 0) break;
    for (const { cell, nationId } of fills) {
      if (!countryCandidates.includes(cell)) countryCandidates.push(cell);
      nationOfCell.set(cell, { nationId, uncertain: false });
      cell.isHoleFill = true;
    }
  }

  // Same artifact, different setting: map labels ("Sea of Clariside") and
  // small decorative marks are also drawn in white/black straight over
  // terrain, not just over nation fill — a fine cell landing on the text
  // reads as stray "ice" or "void" in the middle of open sea. Generalize the
  // hole-fill to plain terrain too: a cell whose own reading disagrees with
  // *every* known neighbor, when those neighbors unanimously agree on one
  // terrain type, gets corrected to match them. Real coastlines are safe from
  // this — an actual sea/land boundary cell has neighbors on both sides, so
  // it never sees a unanimous verdict.
  function currentLabel(cell) {
    const info = nationOfCell.get(cell);
    return info && info.nationId ? `country:${info.nationId}` : cell.baseCat;
  }
  for (let pass = 0; pass < 3; pass++) {
    const fixes = [];
    for (const cell of cells) {
      const own = currentLabel(cell);
      if (own === "background") continue;
      const allNeighbors = hexNeighbors(cell.col, cell.row).map(([nc, nr]) => cellByKey.get(`${nc},${nr}`)).filter(Boolean);
      const neighborLabels = allNeighbors.map(currentLabel).filter((l) => l !== "background");
      if (neighborLabels.length < 3 || neighborLabels.length / allNeighbors.length < 0.5) continue;
      const unique = new Set(neighborLabels);
      if (unique.size !== 1) continue;
      const consensus = [...unique][0];
      if (consensus === own || consensus.startsWith("country:")) continue; // country case already handled above
      fixes.push({ cell, consensus });
    }
    if (fixes.length === 0) break;
    for (const { cell, consensus } of fixes) {
      cell.baseCat = consensus;
      cell.baseAmbiguous = false;
      cell.baseDist = 0;
      nationOfCell.delete(cell);
      const idx = countryCandidates.indexOf(cell);
      if (idx !== -1) countryCandidates.splice(idx, 1);
    }
  }

  function nationMeanLab() {
    const sums = {};
    for (const cell of countryCandidates) {
      const info = nationOfCell.get(cell);
      if (!info.nationId) continue;
      if (cell.isHoleFill) continue; // icon-colored pixel, not representative fill
      if (!sums[info.nationId]) sums[info.nationId] = [0, 0, 0, 0];
      sums[info.nationId][0] += cell.lab[0];
      sums[info.nationId][1] += cell.lab[1];
      sums[info.nationId][2] += cell.lab[2];
      sums[info.nationId][3] += 1;
    }
    const means = {};
    for (const [nationId, [l, a, b, n]] of Object.entries(sums)) means[nationId] = [l / n, a / n, b / n];
    return means;
  }
  const nationMeans = nationMeanLab();

  // Per-cell color check: an antialiased edge pixel near the growth frontier
  // that drifted further from the seed than its neighbors gets flagged.
  // Hole-fill cells are deliberately excluded — their raw color is the icon,
  // not the fill, so it's expected to disagree with the nation's mean.
  for (const cell of countryCandidates) {
    if (cell.isHoleFill) continue;
    const info = nationOfCell.get(cell);
    if (!info.nationId) continue;
    const colorDist = nationMeans[info.nationId] ? deltaE(cell.lab, nationMeans[info.nationId]) : Infinity;
    if (colorDist > 16) nationOfCell.set(cell, { ...info, uncertain: true });
  }

  console.log("\nAuto-detected nation colors (mean of seeded flood-fill cells, from image):");
  for (const nation of NATION_LIST) {
    const n = countryCandidates.filter((c) => nationOfCell.get(c).nationId === nation).length;
    const mean = nationMeans[nation];
    console.log(`  ${nation.padEnd(12)} cells=${String(n).padEnd(4)} color=${mean ? rgbToHex(labToRgb(mean)) : "n/a"}`);
  }
  const rejectedCount = countryCandidates.filter((c) => nationOfCell.get(c).rejected).length;
  console.log(`Unclaimed by any nation's flood-fill (reverted to terrain classification): ${rejectedCount} cells`);

  // Label every fine cell (type, nationId?, uncertain, its own actual color).
  const countryCandidateSet = new Set(countryCandidates);
  for (const cell of cells) {
    const info = countryCandidateSet.has(cell) ? nationOfCell.get(cell) : null;
    if (info && info.nationId) {
      cell.finalType = "country";
      cell.finalNationId = info.nationId;
      cell.finalColor = rgbToHex(labToRgb(nationMeans[info.nationId]));
      cell.finalUncertain = info.uncertain;
    } else {
      // Not a nation cell — either never was a candidate, or its component
      // was rejected as noise. Either way, fall back to terrain classification.
      cell.finalType = cell.baseCat; // may be "background"
      cell.finalColor = rgbToHex(cell.rgb);
      cell.finalUncertain = cell.baseAmbiguous || cell.baseDist > CONFIDENT_DELTA_E || Boolean(info);
    }
  }

  // Aggregate fine cells down onto the output grid: each fine cell's pixel
  // center is mapped to its nearest output-grid cell (inverse of the same
  // odd-q formula), then every output cell takes the majority (type,nationId)
  // among its member fine cells and averages their color.
  function nearestOutputCell(x, y) {
    let col = Math.round((x - STEP_X / 2) / STEP_X);
    col = Math.min(GRID_COLS - 1, Math.max(0, col));
    const baseY = STEP_Y / 2 + (col % 2 === 1 ? STEP_Y / 2 : 0);
    let row = Math.round((y - baseY) / STEP_Y);
    row = Math.min(GRID_ROWS - 1, Math.max(0, row));
    return [col, row];
  }

  const buckets = new Map(); // "col,row" -> fine cells[]
  for (const cell of cells) {
    const [col, row] = nearestOutputCell(cell.cx, cell.cy);
    const key = `${col},${row}`;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(cell);
  }

  const tiles = [];
  const summary = {};
  for (const [key, members] of buckets.entries()) {
    const [col, row] = key.split(",").map(Number);
    const nonBackground = members.filter((m) => m.finalType !== "background");
    if (nonBackground.length === 0) continue; // whole output cell is outside the world

    const groupKey = (m) => m.finalType + (m.finalNationId ? ":" + m.finalNationId : "");
    // A manually-verified tile wins its output cell outright — these nations
    // are so small (2-3 native hexes) that a plain majority vote buries them
    // under whatever terrain fills the rest of the same output cell.
    const override = nonBackground.find((m) => m.isManualOverride);
    let winningKey, winners;
    if (override) {
      winningKey = groupKey(override);
      winners = nonBackground.filter((m) => groupKey(m) === winningKey);
    } else {
      // "land" is the unclaimed default, not a real competing signal — many
      // small nations (a handful of native hexes) get outvoted by the land
      // filling the rest of the same output cell and vanish entirely. So a
      // country classification wins outright over land regardless of count;
      // it only loses to a genuinely stronger terrain read (sea/ice/void/
      // desert), and ties among multiple nations in the same cell still go
      // to whichever has the most fine cells.
      const countryMembers = nonBackground.filter((m) => m.finalType === "country");
      const pool = countryMembers.length > 0
        ? nonBackground.filter((m) => m.finalType === "country" || m.finalType !== "land")
        : nonBackground;
      const counts = new Map();
      for (const m of pool) counts.set(groupKey(m), (counts.get(groupKey(m)) || 0) + 1);
      [winningKey] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
      winners = pool.filter((m) => groupKey(m) === winningKey);
    }
    const winningCount = winners.length;
    const [type, nationId] = winningKey.split(":");

    let color;
    if (type === "country") {
      color = rgbToHex(labToRgb(nationMeans[nationId]));
    } else {
      const meanRgb = [0, 1, 2].map((i) => Math.round(winners.reduce((s, m) => s + m.rgb[i], 0) / winners.length));
      color = rgbToHex(meanRgb);
    }
    const majorityShare = winningCount / nonBackground.length;
    const anyWinnerUncertain = winners.some((m) => m.finalUncertain);
    const uncertain = override ? false : (majorityShare < 0.6 || anyWinnerUncertain);

    summary[winningKey] = (summary[winningKey] || 0) + 1;
    tiles.push({ col, row, type, ...(nationId ? { nationId } : {}), color, ...(uncertain ? { uncertain: true } : {}) });
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "terra-grid.json");
  fs.writeFileSync(jsonPath, JSON.stringify({ gridCols: GRID_COLS, gridRows: GRID_ROWS, imageWidth: width, imageHeight: height, tiles }, null, 2));
  console.log(`\nWrote ${tiles.length} tiles -> ${jsonPath}`);

  console.log("\nSummary (tile counts):");
  for (const [k, v] of Object.entries(summary).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k.padEnd(24)} ${v}`);
  }
  const uncertainCount = tiles.filter((t) => t.uncertain).length;
  console.log(`\nFlagged uncertain: ${uncertainCount} / ${tiles.length}`);

  // Preview render: solid hex-ish (rounded rect approximated as hexagon path)
  // per tile at a manageable resolution.
  const PREVIEW_SCALE = 900 / width;
  const pw = Math.round(width * PREVIEW_SCALE), ph = Math.round(height * PREVIEW_SCALE);
  const hw = (STEP_X / 0.75) * PREVIEW_SCALE, hh = STEP_Y * PREVIEW_SCALE;
  let svgHexes = "";
  for (const tile of tiles) {
    const [cx0, cy0] = cellCenter(tile.col, tile.row);
    const cx = cx0 * PREVIEW_SCALE, cy = cy0 * PREVIEW_SCALE;
    const w2 = hw / 2, h2 = hh / 2;
    const pts = [
      [cx - w2 * 0.5, cy - h2], [cx + w2 * 0.5, cy - h2], [cx + w2, cy],
      [cx + w2 * 0.5, cy + h2], [cx - w2 * 0.5, cy + h2], [cx - w2, cy],
    ].map((p) => p.join(",")).join(" ");
    const strokeColor = tile.uncertain ? "#ff00ff" : "none";
    svgHexes += `<polygon points="${pts}" fill="${tile.color}" stroke="${strokeColor}" stroke-width="${tile.uncertain ? 1 : 0}"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${pw}" height="${ph}"><rect width="${pw}" height="${ph}" fill="#455a5a"/>${svgHexes}</svg>`;
  const previewPath = path.join(OUT_DIR, "terra-preview.png");
  await sharp(Buffer.from(svg)).png().toFile(previewPath);
  console.log(`Wrote preview -> ${previewPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
