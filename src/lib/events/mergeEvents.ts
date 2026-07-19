import sharp from 'sharp'
import type { GameEvent } from '../../types'
import type { ScrapedEvent } from './scrapeArknightsEvents'

export interface NewBannerFile {
  relativePath: string // path relative to public/, e.g. "events/vector-breakthrough-2/banner.png"
  content: Buffer
}

export interface MergeResult {
  merged: GameEvent[]
  newEvents: GameEvent[]
  updatedEvents: GameEvent[]
  newBanners: NewBannerFile[]
}

function normalizeName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, ' ')
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

function uniqueSlug(name: string, takenIds: Set<string>): string {
  const base = slugify(name) || 'event'
  if (!takenIds.has(base)) return base
  let suffix = 2
  while (takenIds.has(`${base}-${suffix}`)) suffix += 1
  return `${base}-${suffix}`
}

async function downloadBanner(bannerUrl: string): Promise<Buffer> {
  const response = await fetch(bannerUrl, {
    headers: { 'User-Agent': 'arknights-portfolio-events-sync/1.0' },
  })
  if (!response.ok) {
    throw new Error(`Failed to download banner ${bannerUrl}: ${response.status} ${response.statusText}`)
  }
  return Buffer.from(await response.arrayBuffer())
}

async function computeAverageColor(imageBuffer: Buffer): Promise<[number, number, number]> {
  const { data } = await sharp(imageBuffer)
    .resize(1, 1)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  return [data[0], data[1], data[2]]
}

export async function mergeEvents(existingEvents: GameEvent[], scrapedEvents: ScrapedEvent[]): Promise<MergeResult> {
  const takenIds = new Set(existingEvents.map((event) => event.id))
  const existingByName = new Map(existingEvents.map((event) => [normalizeName(event.name), event]))

  const merged: GameEvent[] = existingEvents.map((event) => ({ ...event }))
  const newEvents: GameEvent[] = []
  const updatedEvents: GameEvent[] = []
  const newBanners: NewBannerFile[] = []

  for (const scrapedEvent of scrapedEvents) {
    const existingEvent = existingByName.get(normalizeName(scrapedEvent.name))

    if (existingEvent) {
      if (existingEvent.startDate !== scrapedEvent.startDate || existingEvent.endDate !== scrapedEvent.endDate) {
        existingEvent.startDate = scrapedEvent.startDate
        existingEvent.endDate = scrapedEvent.endDate
        const mergedEntry = merged.find((event) => event.id === existingEvent.id)
        if (mergedEntry) {
          mergedEntry.startDate = scrapedEvent.startDate
          mergedEntry.endDate = scrapedEvent.endDate
        }
        updatedEvents.push(existingEvent)
      }
      continue
    }

    const id = uniqueSlug(scrapedEvent.name, takenIds)
    takenIds.add(id)

    const bannerBuffer = await downloadBanner(scrapedEvent.bannerUrl)
    const color = await computeAverageColor(bannerBuffer)
    const relativePath = `events/${id}/banner.png`

    const newEvent: GameEvent = {
      id,
      name: scrapedEvent.name,
      tag: scrapedEvent.tag,
      banner: `/${relativePath}`,
      color,
      startDate: scrapedEvent.startDate,
      endDate: scrapedEvent.endDate,
    }

    merged.push(newEvent)
    newEvents.push(newEvent)
    newBanners.push({ relativePath, content: bannerBuffer })
  }

  return { merged, newEvents, updatedEvents, newBanners }
}
