import fs from 'node:fs'
// usage: node apply.mjs manifest.txt "Name|zoom|x|y" ... — replaces/inserts portraitFocus for that form.
const manifest = Object.fromEntries(fs.readFileSync(process.argv[2], 'utf8').trim().split('\n').map(line => { const p = line.split('|'); return [p[0], p] }))
for (const spec of process.argv.slice(3)) {
  const [name, zoom, x, y] = spec.split('|')
  const [, file, indentLength, src] = manifest[name]
  const path = `src/data/operators/${file}`, indent = ' '.repeat(+indentLength)
  // Some data files are CRLF: split either way and write back with the same ending.
  const text = fs.readFileSync(path, 'utf8'), eol = text.includes('\r\n') ? '\r\n' : '\n'
  const lines = text.split(/\r?\n/)
  const start = lines.findIndex(line => { const t = line.trim(); return (t.startsWith("name: '" + name + "', fileNo") || t.startsWith('name: "' + name + '", fileNo')) })
  const value = `${indent}portraitFocus: { y: ${+y}, x: ${+x}, zoom: ${+zoom} },`
  let done = false
  for (let j = start + 1; j < lines.length && !done; j++) {
    if (lines[j].startsWith(indent + 'portraitFocus:')) { lines[j] = value; done = true }
    else if (lines[j].startsWith(indent + 'portrait: ')) {
      if (lines[j + 1]?.startsWith(indent + 'portraitFocus:')) lines[j + 1] = value
      else lines.splice(j + 1, 0, value)
      done = true
    }
  }
  if (!done) {
    // No portrait field yet: add portrait + portraitFocus right after this form's skins array.
    const skinsStart = lines.findIndex((line, index) => index > start && line === indent + 'skins: [')
    const skinsEnd = skinsStart === -1 ? -1 : lines.findIndex((line, index) => index > skinsStart && line === indent + '],')
    if (skinsEnd !== -1) {
      lines.splice(skinsEnd + 1, 0, `${indent}portrait: '${src.replace(/[^/]+$/, 'portrait.png')}',`, value)
      done = true
    }
  }
  fs.writeFileSync(path, lines.join(eol))
  console.log(done ? 'ok' : 'FAILED', name, value.trim())
}
