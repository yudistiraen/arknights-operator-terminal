// Alpha-channel body measurement of a published chibi .webm, shared by
// standardize-walking-framing.mjs (and anything else that needs body metrics).

import path from 'node:path'
import { spawn } from 'node:child_process'

const PUBLIC_DIR = path.resolve(import.meta.dirname, '../../../public')
const DECODE_SIZE = 200 // measure on a downscaled copy — plenty of precision for 2-decimal output
const SAMPLE_FPS = 10
const ALPHA_THRESHOLD = 40

function median(values) {
  const sorted = [...values].sort((first, second) => first - second)
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2
}

/** Per-frame alpha bounding boxes of a VP9-alpha webm, as fractions of the frame. */
function decodeBoxes(videoPath) {
  return new Promise((resolve, reject) => {
    // `-c:v libvpx-vp9` BEFORE `-i` is required: ffmpeg's native vp9 decoder silently drops the
    // alpha plane and every frame reads as fully opaque.
    const ffmpeg = spawn('ffmpeg', [
      '-v', 'error', '-c:v', 'libvpx-vp9', '-i', videoPath,
      '-vf', `fps=${SAMPLE_FPS},format=rgba,scale=${DECODE_SIZE}:${DECODE_SIZE}:flags=area`,
      '-f', 'rawvideo', '-pix_fmt', 'rgba', '-',
    ])
    const chunks = []
    let stderr = ''
    ffmpeg.stdout.on('data', chunk => chunks.push(chunk))
    ffmpeg.stderr.on('data', chunk => { stderr += chunk })
    ffmpeg.on('error', reject)
    ffmpeg.on('close', code => {
      if (code !== 0) return reject(new Error(`ffmpeg failed on ${videoPath}: ${stderr}`))
      const buffer = Buffer.concat(chunks)
      const frameBytes = DECODE_SIZE * DECODE_SIZE * 4
      const boxes = []
      for (let frameStart = 0; frameStart + frameBytes <= buffer.length; frameStart += frameBytes) {
        let top = DECODE_SIZE, bottom = -1, left = DECODE_SIZE, right = -1
        for (let row = 0; row < DECODE_SIZE; row++) {
          for (let column = 0; column < DECODE_SIZE; column++) {
            if (buffer[frameStart + (row * DECODE_SIZE + column) * 4 + 3] <= ALPHA_THRESHOLD) continue
            if (row < top) top = row
            if (row > bottom) bottom = row
            if (column < left) left = column
            if (column > right) right = column
          }
        }
        if (bottom >= 0) boxes.push({ top: top / DECODE_SIZE, bottom: (bottom + 1) / DECODE_SIZE, left: left / DECODE_SIZE, right: (right + 1) / DECODE_SIZE })
      }
      if (!boxes.length) return reject(new Error(`no opaque pixels in ${videoPath}`))
      resolve(boxes)
    })
  })
}

/** Median body metrics of one clip, in video-frame fractions. Medians (not unions) so a single
 * weapon-swing frame or flowing cape can't dominate the measurement. */
export async function measureClip(publicSrc) {
  // Accepts a public URL path (`/operators/...`) or a filesystem path to any rendered .webm.
  const videoPath = publicSrc.startsWith('/operators/') ? path.join(PUBLIC_DIR, publicSrc) : publicSrc
  const boxes = await decodeBoxes(videoPath)
  return {
    bodyHeight: median(boxes.map(box => box.bottom - box.top)),
    topY: median(boxes.map(box => box.top)),
    feetY: median(boxes.map(box => box.bottom)),
    bodyWidth: median(boxes.map(box => box.right - box.left)),
    centerX: median(boxes.map(box => (box.left + box.right) / 2)),
  }
}
