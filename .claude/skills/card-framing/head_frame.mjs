import fs from 'node:fs'
// Head-box framing (see SKILL.md "Head-box anchor").
//   node head_frame.mjs measure manifest.txt heads.txt [Name ...]   -> where each head box lands on its card now
//   node head_frame.mjs solve   manifest.txt heads.txt size cx top [Name ...] -> Name|zoom|x|y putting the box there
// Card space: width 1 = card width, height 1 = card height (aspect 0.6).
const [mode, manifestPath, headsPath, ...rest] = process.argv.slice(2)
const rows = path => Object.fromEntries(fs.readFileSync(path, 'utf8').trim().split('\n').map(line => { const p = line.split('|'); return [p[0], p] }))
const manifest = rows(manifestPath), heads = rows(headsPath)
function current(focusText) {
  const get = key => { const m = focusText.match(new RegExp(`${key}: ?(-?[0-9.]+)`)); return m ? +m[1] : null }
  return { zoom: get('zoom') ?? 250, x: get('x') ?? 50, y: get('y') ?? 0 }
}
const CARD_W = 240, CARD_H = 400
function boxOnCard(name) {
  const [, , , , imgW, imgH, focusText] = manifest[name]
  const [, fx, fy, fs] = heads[name].map(Number)
  const { zoom, x, y } = current(focusText)
  const H = CARD_H * zoom / 100, W = H * imgW / imgH
  const offX = (CARD_W - W) * x / 100, offY = (CARD_H - H) * y / 100
  const side = fs * W
  return { size: side / CARD_W, cx: (offX + fx * W + side / 2) / CARD_W, top: (offY + fy * H) / CARD_H, score: +heads[name][4] }
}
if (mode === 'measure') {
  const names = rest.length ? rest : Object.keys(manifest)
  for (const name of names) {
    if (!heads[name] || heads[name][1] === '-') { console.log(`${name}|no head`); continue }
    const b = boxOnCard(name)
    console.log(`${name}|size ${b.size.toFixed(3)}|cx ${b.cx.toFixed(3)}|top ${b.top.toFixed(3)}|score ${b.score}`)
  }
} else if (mode === 'solve') {
  const [size, cx, top, ...names] = rest
  for (const name of (names.length ? names : Object.keys(manifest))) {
    if (!heads[name] || heads[name][1] === '-' || +heads[name][4] < 0.9) { console.error(`skip ${name} (no reliable head box)`); continue }
    const [, , , , imgW, imgH] = manifest[name]
    const [, fx, fy, fs] = heads[name].map(Number)
    // side = fs*W = size*CARD_W  ->  W, then H and zoom
    const W = size * CARD_W / fs, H = W * imgH / imgW, zoom = H / CARD_H * 100
    const left = cx * CARD_W - (fx * W + fs * W / 2), topPx = top * CARD_H - fy * H
    const x = (CARD_W - W) === 0 ? 50 : left / (CARD_W - W) * 100, y = topPx / (CARD_H - H) * 100
    console.log(`${name}|${Math.round(zoom)}|${x.toFixed(1)}|${y.toFixed(1)}`)
  }
}
