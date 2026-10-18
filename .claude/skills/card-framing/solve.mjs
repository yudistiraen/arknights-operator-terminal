import fs from 'node:fs'
// usage: node solve.mjs manifest.txt "Name|faceX|eyeY|eyeChin[|targetEye]" ...  (fractions of the live card)
// -> Name|zoom|x|y : new portraitFocus that puts the face center on 50%, eyes on targetEye (default .485), eye-chin = 12%.
const manifest = Object.fromEntries(fs.readFileSync(process.argv[2], 'utf8').trim().split('\n').map(line => { const p = line.split('|'); return [p[0], p] }))
for (const spec of process.argv.slice(3)) {
  const [name, faceX, eyeY, eyeChin, targetEye = '0.485'] = spec.split('|')
  const row = manifest[name]; if (!row) { console.error('unknown', name); continue }
  const [, , , src, imgW, imgH, focusText] = row
  const m = focusText.match(/y: (-?[\d.]+), ?x: ?(-?[\d.]+), zoom: (\d+)/) ?? focusText.match(/x: ?(-?[\d.]+), ?y: (-?[\d.]+), zoom: (\d+)/)
  let zoom = 250, x = 50, y = 0
  if (m) { if (focusText.indexOf('y:') < focusText.indexOf('x:')) { y = +m[1]; x = +m[2] } else { x = +m[1]; y = +m[2] } zoom = +m[3] }
  const H = 4 * zoom, W = H * imgW / imgH
  const fx = (faceX * 240 - (240 - W) * x / 100) / W, fy = (eyeY * 400 - (400 - H) * y / 100) / H
  const newZoom = Math.round(zoom * 0.12 / eyeChin / 5) * 5
  const H2 = 4 * newZoom, W2 = H2 * imgW / imgH
  const newX = (120 - fx * W2) * 100 / (240 - W2), newY = (targetEye * 400 - fy * H2) * 100 / (400 - H2)
  console.log(`${name}|${newZoom}|${newX.toFixed(1)}|${newY.toFixed(1)}`)
}
