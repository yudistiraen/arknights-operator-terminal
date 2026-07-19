import { Octokit } from '@octokit/rest'
import type { GameEvent } from '../../types'
import { generateEventsFileSource } from './generateEventsFileSource'
import type { NewBannerFile } from './mergeEvents'

const EVENTS_DATA_PATH = 'src/data/events.ts'

export interface PublishSummary {
  newEventNames: string[]
  updatedEventNames: string[]
}

export interface PublishResult {
  committed: boolean
  commitUrl: string
}

// GitHub-backed implementation of the events publishing step. The site has no
// database today, so this commits the regenerated src/data/events.ts (plus
// any new banner images) straight to the deploy branch, which triggers a
// normal Vercel deploy. If events ever move to a database, a sibling
// repository (e.g. SupabaseEventsRepository) can implement the same
// `publish` shape without the scraper/merge logic above needing to change.
export class GitHubEventsRepository {
  private readonly octokit: Octokit
  private readonly owner: string
  private readonly repo: string
  private readonly branch: string

  constructor() {
    const token = process.env.EVENTS_SYNC_GITHUB_TOKEN
    if (!token) {
      throw new Error('EVENTS_SYNC_GITHUB_TOKEN environment variable is not set')
    }
    this.octokit = new Octokit({ auth: token })
    this.owner = process.env.EVENTS_SYNC_GITHUB_OWNER || 'yudistiraen'
    this.repo = process.env.EVENTS_SYNC_GITHUB_REPO || 'arknights-operator-terminal'
    this.branch = process.env.EVENTS_SYNC_TARGET_BRANCH || 'main'
  }

  async publish(
    mergedEvents: GameEvent[],
    newBanners: NewBannerFile[],
    summary: PublishSummary
  ): Promise<PublishResult> {
    const { data: branchRef } = await this.octokit.git.getRef({
      owner: this.owner,
      repo: this.repo,
      ref: `heads/${this.branch}`,
    })
    const latestCommitSha = branchRef.object.sha

    const { data: latestCommit } = await this.octokit.git.getCommit({
      owner: this.owner,
      repo: this.repo,
      commit_sha: latestCommitSha,
    })

    const eventsFileSource = generateEventsFileSource(mergedEvents)
    const { data: eventsBlob } = await this.octokit.git.createBlob({
      owner: this.owner,
      repo: this.repo,
      content: Buffer.from(eventsFileSource, 'utf-8').toString('base64'),
      encoding: 'base64',
    })

    const bannerTreeEntries = await Promise.all(
      newBanners.map(async (banner) => {
        const { data: blob } = await this.octokit.git.createBlob({
          owner: this.owner,
          repo: this.repo,
          content: banner.content.toString('base64'),
          encoding: 'base64',
        })
        return {
          path: `public/${banner.relativePath}`,
          mode: '100644' as const,
          type: 'blob' as const,
          sha: blob.sha,
        }
      })
    )

    const { data: newTree } = await this.octokit.git.createTree({
      owner: this.owner,
      repo: this.repo,
      base_tree: latestCommit.tree.sha,
      tree: [
        { path: EVENTS_DATA_PATH, mode: '100644', type: 'blob', sha: eventsBlob.sha },
        ...bannerTreeEntries,
      ],
    })

    const { data: newCommit } = await this.octokit.git.createCommit({
      owner: this.owner,
      repo: this.repo,
      message: buildCommitMessage(summary),
      tree: newTree.sha,
      parents: [latestCommitSha],
    })

    await this.octokit.git.updateRef({
      owner: this.owner,
      repo: this.repo,
      ref: `heads/${this.branch}`,
      sha: newCommit.sha,
    })

    return { committed: true, commitUrl: newCommit.html_url }
  }
}

function buildCommitMessage(summary: PublishSummary): string {
  const parts: string[] = []
  if (summary.newEventNames.length > 0) {
    parts.push(`add ${summary.newEventNames.length} event(s): ${summary.newEventNames.join(', ')}`)
  }
  if (summary.updatedEventNames.length > 0) {
    parts.push(`refresh dates for ${summary.updatedEventNames.length} event(s): ${summary.updatedEventNames.join(', ')}`)
  }
  return `chore(events): auto-sync from wiki — ${parts.join('; ')}`
}
