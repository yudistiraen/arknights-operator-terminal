// Minimal static file server used during Puppeteer capture. Needed because loading the
// skeleton/atlas/texture via `file://` URLs hits CORS in headless Chrome — see operator_context.md
// step 4 ("wajib http server, walaupun cuma Node http bawaan tanpa dependency").

import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.atlas': 'text/plain; charset=utf-8',
  '.skel': 'application/octet-stream',
}

/** Serves multiple filesystem directories under distinct URL prefixes from one HTTP
 * server, e.g. [{ prefix: '/model/', dir: modelDir }, { prefix: '/runtime/', dir: runtimeDir }].
 * Returns { baseUrl, close() }. Listens on 127.0.0.1 with an OS-assigned free port. */
export function startStaticServer(routes) {
  const sorted = [...routes].sort((a, b) => b.prefix.length - a.prefix.length)

  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0])
    const route = sorted.find((r) => url.startsWith(r.prefix))
    if (!route) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    const relative = url.slice(route.prefix.length)
    const root = path.resolve(route.dir)
    const filePath = path.resolve(root, relative)
    if (filePath !== root && !filePath.startsWith(root + path.sep)) {
      res.writeHead(403)
      res.end('Forbidden')
      return
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.end('Not found')
        return
      }
      const ext = path.extname(filePath)
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' })
      res.end(data)
    })
  })

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address()
      resolve({
        baseUrl: `http://127.0.0.1:${port}`,
        close: () => new Promise((res) => server.close(() => res())),
      })
    })
  })
}
