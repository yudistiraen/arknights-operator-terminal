'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { getWalkableChibis } from '../lib/operators'
import { MAX_WALKING_CHIBIS, getChibiId, readChibiSelectionCookie } from '../lib/chibiSelection'
import { useApp } from './AppShell'
import { WalkingChibiUnit } from './WalkingChibi'
import { FOCUS_RING } from './ui/Console'

const STREAM_SPRITE_SIZE = 192
const STREAM_EDGE_PADDING = 48
const SELECTION_POLL_INTERVAL_MS = 1000

/** Greenscreen page meant to be captured as an OBS Browser Source. The walking selection lives in
 * a cookie, so it's polled here — picking chibis in another tab (or an OBS browser dock, which
 * shares the source's cookie jar) updates this page live without a reload. */
export function StreamLayout() {
  const { selectedChibiIds: initialSelectedIds } = useApp()
  const [selectedChibiIds, setSelectedChibiIds] = useState<string[]>(initialSelectedIds)
  const pool = useMemo(() => getWalkableChibis(), [])

  useEffect(() => {
    setSelectedChibiIds(initialSelectedIds)
  }, [initialSelectedIds])

  useEffect(() => {
    const syncFromCookie = () => {
      const cookieSelection = readChibiSelectionCookie()
      if (cookieSelection === null) return
      setSelectedChibiIds(previousIds =>
        previousIds.join('|') === cookieSelection.join('|') ? previousIds : cookieSelection,
      )
    }
    const intervalId = window.setInterval(syncFromCookie, SELECTION_POLL_INTERVAL_MS)
    return () => window.clearInterval(intervalId)
  }, [])

  const activeChibis = useMemo(
    () => pool.filter(chibi => selectedChibiIds.includes(getChibiId(chibi))),
    [pool, selectedChibiIds],
  )

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#00ff00]" aria-label="Stream layout greenscreen">
      {activeChibis.map(chibi => (
        <WalkingChibiUnit
          key={getChibiId(chibi)}
          chibi={chibi}
          spriteSize={STREAM_SPRITE_SIZE}
          edgePadding={STREAM_EDGE_PADDING}
          sizeClassName="w-48 h-48"
          showGroundShadow={false}
        />
      ))}
      {/* Invisible until the cursor reaches this corner (or it gets keyboard focus), so it never
          shows up in the OBS capture unless someone is actively using the source's Interact window. */}
      <div className="group fixed top-0 right-0 z-100 p-4">
        <Link
          href="/operator"
          className={`flex items-center gap-3 border border-gc-line-strong bg-gc-float px-4 py-2.5 font-data text-xs uppercase tracking-[0.12em] text-gc-ink opacity-0 shadow-[0_8px_24px_-8px_rgba(79,214,224,0.25),0_2px_6px_rgba(0,0,0,0.4)] group-hover:opacity-100 focus-visible:opacity-100 hover:border-gc-scan hover:text-gc-scan active:scale-[0.97] ${FOCUS_RING}`}
          style={{ transition: 'opacity 0.2s cubic-bezier(0.22, 1.2, 0.36, 1), transform 0.15s cubic-bezier(0.22, 1.2, 0.36, 1)' }}
        >
          Choose operators
          <span className="text-gc-dim">{activeChibis.length}/{MAX_WALKING_CHIBIS}</span>
        </Link>
      </div>
    </main>
  )
}
