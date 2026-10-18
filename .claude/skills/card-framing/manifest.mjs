import fs from 'node:fs'
// Prints label|file|indent|src|imgW|imgH|currentFocus for every rarity-N card (base or alter).
const rarity = process.argv[2] ?? '5'
const dir = 'src/data/operators'
// Some art files are WebP saved under a .png name, so sniff the real format.
function pngSize(path) {
  const b = fs.readFileSync(path)
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = b.toString('ascii', 12, 16)
    if (chunk === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)]
    if (chunk === 'VP8L') { const bits = b.readUInt32LE(21); return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1] }
    return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff]
  }
  return [b.readUInt32BE(16), b.readUInt32BE(20)]
}
for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts')) {
  const lines = fs.readFileSync(`${dir}/${file}`, 'utf8').split('\n')
  // Each form = a "name: ..., rarity: N" line; its first base skin + portrait line follow it.
  lines.forEach((line, index) => {
    const m = line.match(/^(\s*)name: (['"])(.+?)\2, fileNo.*rarity: (\d)/)
    if (!m || m[4] !== rarity) return
    const indent = m[1]
    let src = null, focus = '-', portraitLine = null
    for (let j = index + 1; j < lines.length; j++) {
      if (j > index + 1 && /^\s*name: (['"]).+?\1, fileNo/.test(lines[j])) break
      if (!src) { const s = lines[j].match(/id: 'base'.*?src: '([^']+)'/); if (s) src = s[1] }
      if (portraitLine === null && lines[j].startsWith(indent + 'portrait: ')) portraitLine = j
      if (lines[j].startsWith(indent + 'portraitFocus:')) { focus = lines[j].trim(); break }
      if (portraitLine !== null && j > portraitLine + 1) break
    }
    if (!src) return
    const [w, h] = pngSize('public' + src)
    console.log([m[3], file, indent.length, src, w, h, focus].join('|'))
  })
}
