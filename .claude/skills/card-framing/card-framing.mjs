// Roster-card framing harness for the /operator list (see SKILL.md).
//
//   node card-framing.mjs compare <out.png> "<label>|<src>|<zoom>|<x>|<y>" ...
//   node card-framing.mjs verify  <out.png> <search term>
//
// `compare` renders each spec with the exact math OperatorCardArt uses
// (background-size: auto <zoom>%, background-position: <x>% <y>%) at the
// real card aspect, next to the Amiya reference card, with guide lines.
// `verify` screenshots the real /operator page filtered by the search box.
// Both need the dev server on BASE_URL (default http://localhost:3000).
import { execSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'
const REFERENCE_SPEC = 'amiya (ref)|/operators/amiya/base.png|280|40|7'
const CARD_WIDTH = 240
const CARD_ASPECT = 0.6

async function loadChromium() {
  try {
    return (await import('playwright')).chromium
  } catch {
    const globalRoot = execSync('npm root -g').toString().trim()
    const entry = pathToFileURL(path.join(globalRoot, 'playwright', 'index.mjs')).href
    return (await import(entry)).chromium
  }
}

function renderCard(spec) {
  const [label, src, zoom, x, y] = spec.split('|')
  // Guides: vertical center, 50% horizontal (eye line target), 70% (chest line).
  return `
    <figure style="display:inline-block;margin:8px;text-align:center;color:#bbb;font:12px monospace">
      <div style="position:relative;width:${CARD_WIDTH}px;aspect-ratio:${CARD_ASPECT};overflow:hidden;background:#1b1c1f;border:1px solid #333">
        <div style="position:absolute;inset:0;background:url(${BASE_URL}${src}) no-repeat;background-size:auto ${zoom}%;background-position:${x}% ${y}%;opacity:.8"></div>
        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.85),rgba(0,0,0,.6) 25%,transparent 55%)"></div>
        <div style="position:absolute;top:0;bottom:0;left:50%;border-left:1px dashed rgba(255,0,255,.45)"></div>
        <div style="position:absolute;left:0;right:0;top:50%;border-top:1px dashed rgba(0,255,255,.45)"></div>
        <div style="position:absolute;left:0;right:0;top:70%;border-top:1px dashed rgba(255,200,0,.35)"></div>
      </div>
      <figcaption>${label}<br>${zoom} / ${x} / ${y}</figcaption>
    </figure>`
}

// `guess` turns a face measurement into a compare spec (SKILL.md, step 3):
//   node card-framing.mjs guess "<label>|<src>|<imgW>|<imgH>|<fx>|<fy>|<zoom>" ...
// fx/fy are the face center / eye line as fractions of the source image.
function guessSpec(spec) {
  const [label, src, imageWidth, imageHeight, faceX, eyeY, zoom] = spec.split('|')
  const renderedHeight = 4 * Number(zoom)
  const renderedWidth = renderedHeight * Number(imageWidth) / Number(imageHeight)
  const x = (120 - Number(faceX) * renderedWidth) * 100 / (CARD_WIDTH - renderedWidth)
  const y = (Number(process.env.EYE_PX ?? 194) - Number(eyeY) * renderedHeight) * 100 / (400 - renderedHeight)
  return `${label}|${src}|${zoom}|${x.toFixed(1)}|${y.toFixed(1)}`
}

if (process.argv[2] === 'guess') {
  console.log(process.argv.slice(3).map(guessSpec).join('\n'))
  process.exit(0)
}

const [mode, out, ...rest] = process.argv.slice(2)
if (!['compare', 'verify'].includes(mode) || !out || rest.length === 0) {
  console.error('usage: compare <out.png> "<label>|<src>|<zoom>|<x>|<y>" ... | verify <out.png> <search> | guess "<label>|<src>|<imgW>|<imgH>|<fx>|<fy>|<zoom>" ...')
  process.exit(1)
}

const chromium = await loadChromium()
const browser = await chromium.launch()
try {
  if (mode === 'compare') {
    const specs = [REFERENCE_SPEC, ...rest]
    const page = await browser.newPage({ viewport: { width: Math.min(specs.length, 6) * 260 + 40, height: 500 } })
    // Navigate to the dev-server origin first so the images aren't blocked as cross-origin from about:blank.
    await page.goto(`${BASE_URL}/favicon.ico`)
    await page.setContent(`<body style="margin:0;padding:8px;background:#111">${specs.map(renderCard).join('')}</body>`)
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(500)
    await page.screenshot({ path: out, fullPage: true })
  } else {
    // 2x pixels so a few-px horizontal offset of the face is actually readable.
    const page = await browser.newPage({ viewport: { width: 1440, height: 1300 }, deviceScaleFactor: 2 })
    async function openRoster() {
    await page.goto(`${BASE_URL}/operator`, { waitUntil: 'networkidle', timeout: 90000 })
    // Dismiss the splash screen. A slow (cold-compiling) dev server can swallow
    // the first Enter, so keep pressing until the search box shows up.
    // The search box is in the DOM (and "visible") underneath the splash, so
    // wait on the splash prompt itself instead.
    const splashPrompt = page.getByText(/click or press enter/i)
    await page.waitForTimeout(1500)
    for (let attempt = 0; attempt < 8 && await splashPrompt.isVisible(); attempt++) {
      await page.keyboard.press('Enter')
      await page.waitForTimeout(1500)
    }
    await splashPrompt.waitFor({ state: 'hidden', timeout: 15000 })
    await page.waitForTimeout(1000)
    }
    await openRoster()
    // Comma-separated search terms are screenshotted one after another in this
    // single session (`out` gets a -<term> suffix each). Running one browser per
    // operator in parallel overloads the dev server and times out.
    const searchTerms = rest.join(' ').split(',').map(term => term.trim()).filter(Boolean)
    for (const searchTerm of searchTerms) {
      // A dev-server hot reload (e.g. right after editing a data file) can
      // navigate the page mid-capture; reopen and retry that term once.
      for (let attempt = 0; ; attempt++) {
      try {
      // "=Name A|Name B|..." shows exactly those cards (up to ~12, two grid
      // rows) by hiding every other card, so a whole batch is checked in one
      // screenshot. Plain terms go through the search box.
      const exactNames = searchTerm.startsWith('=') ? searchTerm.slice(1).split('|').map(name => name.trim().toLowerCase()) : null
      await page.fill('input[placeholder^="Operator name"]', exactNames ? '' : searchTerm)
      await page.waitForTimeout(2500)
      if (exactNames) {
        await page.$$eval('.op-card', (cards, names) => cards.forEach(card => {
          const name = card.querySelector('.op-name-text')?.textContent?.trim().toLowerCase() ?? ''
          card.style.display = names.includes(name) ? '' : 'none'
        }), exactNames)
        // Cards live in per-rarity sections; gather the chosen ones into the
        // first grid so a mixed-rarity set still renders as one block.
        await page.$$eval('.op-card', cards => {
          const shown = cards.filter(card => card.style.display !== 'none')
          if (!shown.length) return
          const grid = shown[0].parentElement
          shown.slice(1).forEach(card => grid.appendChild(card))
          shown[0].scrollIntoView({ block: 'start' })
        })
        // Lower rarity sections fade in via GSAP on scroll; let that finish.
        await page.waitForTimeout(3000)
        await page.waitForTimeout(1500)
      }
      // Same guide lines as `compare`, drawn on the real cards so measurements
      // come from the live page instead of being eyeballed across two renders.
      await page.$$eval('.op-card > a', cards => cards.forEach(card => {
        if (card.querySelector('[data-framing-guide]')) return
        for (const [style, color] of [
          // Faint 40/45/55/60% verticals: a ruler for how far off-center the face sits.
          ['top:0;bottom:0;left:40%;border-left', 'rgba(255,255,255,.18)'],
          ['top:0;bottom:0;left:45%;border-left', 'rgba(255,255,255,.28)'],
          ['top:0;bottom:0;left:55%;border-left', 'rgba(255,255,255,.28)'],
          ['top:0;bottom:0;left:60%;border-left', 'rgba(255,255,255,.18)'],
          ['top:0;bottom:0;left:50%;border-left', 'rgba(255,0,255,.6)'],
          ['left:0;right:0;top:50%;border-top', 'rgba(0,255,255,.6)'],
          ['left:0;right:0;top:70%;border-top', 'rgba(255,200,0,.5)'],
        ]) {
          const guide = document.createElement('div')
          guide.dataset.framingGuide = ''
          guide.style.cssText = `position:absolute;z-index:30;pointer-events:none;${style}:1px dashed ${color}`
          card.appendChild(guide)
        }
      }))
      const termOut = searchTerms.length > 1 ? out.replace(/\.png$/, `-${searchTerm.replace(/\W+/g, '_')}.png`) : out
      // Clip to the card grid (first two rows) so the card fills the image.
      // Clip to the bounding box of the visible cards (at most two rows).
      const bounds = await page.$$eval('.op-card', cards => {
        const rects = cards.filter(card => card.style.display !== 'none').map(card => card.getBoundingClientRect()).filter(rect => rect.width > 0)
        if (!rects.length) return null
        const top = Math.min(...rects.map(rect => rect.top))
        const rowHeight = rects[0].height
        const inView = rects.filter(rect => rect.top < top + rowHeight * 2)
        return { left: Math.min(...inView.map(rect => rect.left)), top, right: Math.max(...inView.map(rect => rect.right)), bottom: Math.max(...inView.map(rect => rect.bottom)) }
      })
      const clip = bounds ? { x: bounds.left - 8, y: bounds.top - 8, width: bounds.right - bounds.left + 16, height: Math.min(1300 - bounds.top + 8, bounds.bottom - bounds.top + 16) } : undefined
      await page.screenshot({ path: termOut, clip })
      console.log(`saved ${termOut}`)
      break
      } catch (error) {
        if (attempt >= 1 || !/context was destroyed|navigation/i.test(String(error))) throw error
        await page.waitForTimeout(3000)
        await openRoster()
      }
      }
    }
  }
  if (mode === 'compare') console.log(`saved ${out}`)
} finally {
  await browser.close()
}
