import { NextRequest, NextResponse } from 'next/server'
import { EVENTS } from '../../../../data/events'
import { scrapeArknightsEvents } from '../../../../lib/events/scrapeArknightsEvents'
import { mergeEvents } from '../../../../lib/events/mergeEvents'
import { GitHubEventsRepository } from '../../../../lib/events/githubEventsRepository'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

function isAuthorized(request: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) return false
  return request.headers.get('authorization') === `Bearer ${cronSecret}`
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const scrapedEvents = await scrapeArknightsEvents()
    const { merged, newEvents, updatedEvents, newBanners } = await mergeEvents(EVENTS, scrapedEvents)

    if (newEvents.length === 0 && updatedEvents.length === 0) {
      return NextResponse.json({
        message: 'No changes detected',
        checkedAt: new Date().toISOString(),
      })
    }

    const repository = new GitHubEventsRepository()
    const result = await repository.publish(merged, newBanners, {
      newEventNames: newEvents.map((event) => event.name),
      updatedEventNames: updatedEvents.map((event) => event.name),
    })

    return NextResponse.json({
      message: 'Events synced',
      newEvents: newEvents.map((event) => event.name),
      updatedEvents: updatedEvents.map((event) => event.name),
      commitUrl: result.commitUrl,
    })
  } catch (error) {
    console.error('[scrape-events] sync failed', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
