import * as cheerio from 'cheerio'

export interface ScrapedEvent {
  name: string
  tag: string
  startDate: string
  endDate: string
  bannerUrl: string
  wikiUrl: string
}

const WIKI_BASE_URL = 'https://arknights.wiki.gg'
const EVENT_LIST_URL = `${WIKI_BASE_URL}/wiki/Event`

// Matches "CN: 2026/01/16 – 2026/02/07" style lines and pulls out the region label + date range.
const REGION_DATE_LINE = /(CN|Global|JP|KR):\s*(\d{4})\/(\d{2})\/(\d{2})\s*[–-]\s*(\d{4})\/(\d{2})\/(\d{2})/g

function toIsoDate(year: string, month: string, day: string): string {
  return `${year}-${month}-${day}`
}

function extractTagAndName(rawText: string): { tag: string; name: string } {
  const bracketMatch = rawText.match(/^\[(.+?)\]\s*(.+)$/)
  if (!bracketMatch) {
    return { tag: 'Event', name: rawText.trim() }
  }
  const [, bracketContent, name] = bracketMatch
  const primaryTag = bracketContent.split(/[–-]/)[0].trim()
  return { tag: primaryTag, name: name.trim() }
}

function extractGlobalDateRange(dateCellText: string): { startDate: string; endDate: string } | null {
  REGION_DATE_LINE.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = REGION_DATE_LINE.exec(dateCellText)) !== null) {
    const [, region, startYear, startMonth, startDay, endYear, endMonth, endDay] = match
    if (region === 'Global') {
      return {
        startDate: toIsoDate(startYear, startMonth, startDay),
        endDate: toIsoDate(endYear, endMonth, endDay),
      }
    }
  }
  return null
}

function parseEventTable($: cheerio.CheerioAPI, table: ReturnType<cheerio.CheerioAPI>): ScrapedEvent[] {
  const events: ScrapedEvent[] = []

  table.find('tbody > tr').each((_rowIndex, row) => {
    const cells = $(row).find('td')
    if (cells.length < 2) return // header row has <th>, not <td>

    const nameCell = cells.eq(0)
    const dateCell = cells.eq(1)

    const link = nameCell.find('a[href^="/wiki/"]').first()
    if (link.length === 0) return

    const rawNameText = link.find('span').first().text().trim() || link.text().trim()
    const { tag, name } = extractTagAndName(rawNameText)

    const bannerSrc = nameCell.find('img.banner').first().attr('src')
    if (!bannerSrc) return

    const globalRange = extractGlobalDateRange(dateCell.text())
    if (!globalRange) return // event has no announced Global-server schedule yet

    events.push({
      name,
      tag,
      startDate: globalRange.startDate,
      endDate: globalRange.endDate,
      bannerUrl: new URL(bannerSrc, WIKI_BASE_URL).toString(),
      wikiUrl: new URL(link.attr('href') ?? '', WIKI_BASE_URL).toString(),
    })
  })

  return events
}

export async function scrapeArknightsEvents(): Promise<ScrapedEvent[]> {
  const response = await fetch(EVENT_LIST_URL, {
    headers: { 'User-Agent': 'arknights-portfolio-events-sync/1.0' },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch ${EVENT_LIST_URL}: ${response.status} ${response.statusText}`)
  }

  const html = await response.text()
  const $ = cheerio.load(html)

  const ongoingTable = $('#Ongoing').parent('h3').nextAll('table').first()
  const upcomingTable = $('#Upcoming').parent('h3').nextAll('table').first()

  const ongoingEvents = ongoingTable.length ? parseEventTable($, ongoingTable) : []
  const upcomingEvents = upcomingTable.length ? parseEventTable($, upcomingTable) : []

  return [...ongoingEvents, ...upcomingEvents]
}
