'use client'

import { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import { SplashScreen } from './SplashScreen'
import { SideMenu } from './SideMenu'
import { WalkingChibi } from './WalkingChibi'
import { getWalkableChibis } from '../lib/operators'
import { pickTitleVoice } from '../lib/titleVoice'
import { assetUrl } from '../lib/assetUrl'
import { MAX_WALKING_CHIBIS, getChibiId, readChibiSelectionCookie, writeChibiSelectionCookie, applyChibiSelectionToggle } from '../lib/chibiSelection'

gsap.registerPlugin(useGSAP)

const STREAM_LAYOUT_PATH = '/stream-layout'
const MUTE_COOKIE_NAME = 'audio-muted'
const MUTE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

function readMuteCookie(): boolean {
  if (typeof document === 'undefined') return false
  return document.cookie.match(new RegExp(`(?:^|; )${MUTE_COOKIE_NAME}=1(?:;|$)`)) !== null
}

function writeMuteCookie(isMuted: boolean): void {
  if (typeof document === 'undefined') return
  document.cookie = `${MUTE_COOKIE_NAME}=${isMuted ? '1' : '0'}; path=/; max-age=${MUTE_COOKIE_MAX_AGE_SECONDS}; samesite=lax`
}

interface AppContextType {
  isMuted: boolean
  toggleMute: () => void
  hasEntered: boolean
  sidebarOpen: boolean
  toggleSidebar: () => void
  selectedChibiIds: string[]
  toggleChibiSelection: (id: string) => void
}

const AppContext = createContext<AppContextType>({
  isMuted: false,
  toggleMute: () => {},
  hasEntered: false,
  sidebarOpen: true,
  toggleSidebar: () => {},
  selectedChibiIds: [],
  toggleChibiSelection: () => {},
})

export function useApp() {
  return useContext(AppContext)
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStreamLayout = pathname === STREAM_LAYOUT_PATH
  const [hasEntered, setHasEntered] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  useEffect(() => {
    if (readMuteCookie()) setIsMuted(true)
  }, [])
  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), [])
  const audioRef = useRef<HTMLAudioElement>(null)
  const splashRef = useRef<HTMLDivElement>(null)

  // Picked and preloaded while the splash is up so the click plays it with no fetch delay.
  // No language switcher yet, so this uses the default (EN) pool.
  const titleVoiceRef = useRef<HTMLAudioElement | null>(null)
  useEffect(() => {
    const titleVoice = pickTitleVoice()
    if (!titleVoice) return
    const titleVoiceAudio = new Audio(assetUrl(titleVoice.src))
    titleVoiceAudio.preload = 'auto'
    titleVoiceAudio.volume = 0.8
    titleVoiceRef.current = titleVoiceAudio
  }, [])

  const [selectedChibiIds, setSelectedChibiIds] = useState<string[]>([])
  useEffect(() => {
    const cookieSelection = readChibiSelectionCookie()
    if (cookieSelection !== null) {
      setSelectedChibiIds(cookieSelection)
      writeChibiSelectionCookie(cookieSelection) // persist in case readChibiSelectionCookie healed a stale/corrupt value
      return
    }
    // One default skin per distinct operator, up to the cap — getWalkableChibis() can list
    // several skins for the same operator, and picking straight from it without deduping would
    // violate the one-walking-slot-per-operator rule right out of the gate.
    const defaultIds: string[] = []
    const seenOperators = new Set<string>()
    for (const chibi of getWalkableChibis()) {
      if (defaultIds.length >= MAX_WALKING_CHIBIS) break
      if (seenOperators.has(chibi.operatorName)) continue
      seenOperators.add(chibi.operatorName)
      defaultIds.push(getChibiId(chibi))
    }
    setSelectedChibiIds(defaultIds)
    writeChibiSelectionCookie(defaultIds)
  }, [])

  const toggleChibiSelection = useCallback((id: string) => {
    setSelectedChibiIds(prev => {
      const next = applyChibiSelectionToggle(prev, id)
      writeChibiSelectionCookie(next)
      return next
    })
  }, [])

  const handleEnter = useCallback(() => {
    if (hasEntered) return
    const enterSound = new Audio('/audio/enter_effect.mp3')
    enterSound.volume = 0.8
    enterSound.play().catch(() => {})

    // Read the cookie directly instead of trusting `isMuted` — the splash screen is
    // clickable before the mount effect that syncs `isMuted` from the cookie has run,
    // so a fast click would otherwise start the BGM unmuted despite a muted cookie.
    const startMuted = readMuteCookie()
    if (startMuted !== isMuted) setIsMuted(startMuted)

    // A random operator calls out the title, like tapping the in-game title screen. It's a UI
    // sound like enter_effect, so it plays even when the BGM is muted.
    titleVoiceRef.current?.play().catch(() => {})

    const audioElement = audioRef.current
    if (audioElement) {
      audioElement.volume = 0
      audioElement.muted = startMuted
      audioElement.play().then(() => {
        if (startMuted) return
        const volumeFade = { volume: 0 }
        gsap.to(volumeFade, {
          volume: 0.8,
          duration: 1,
          ease: 'power2.out',
          onUpdate: () => { audioElement.volume = volumeFade.volume },
        })
      }).catch(() => {})
    }

    const splashElement = splashRef.current
    if (splashElement) {
      gsap.to(splashElement, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => setHasEntered(true),
      })
    } else {
      setHasEntered(true)
    }
  }, [hasEntered, isMuted])

  useEffect(() => {
    const audioElement = audioRef.current
    if (!audioElement) return
    const handleVisibilityChange = () => {
      if (document.hidden) audioElement.pause()
      else if (!isMuted) audioElement.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [isMuted])

  const toggleMute = useCallback(() => {
    const audioElement = audioRef.current
    if (!audioElement) return
    if (isMuted) {
      audioElement.muted = false
      audioElement.play().then(() => {
        const volumeFade = { volume: 0 }
        gsap.to(volumeFade, {
          volume: 0.8,
          duration: 0.5,
          ease: 'power2.out',
          onUpdate: () => { audioElement.volume = volumeFade.volume },
        })
      }).catch(() => {})
    } else {
      const volumeFade = { volume: audioElement.volume }
      gsap.to(volumeFade, {
        volume: 0,
        duration: 0.3,
        ease: 'power2.in',
        onUpdate: () => { audioElement.volume = volumeFade.volume },
        onComplete: () => { audioElement.muted = true },
      })
    }
    setIsMuted(!isMuted)
    writeMuteCookie(!isMuted)
  }, [isMuted])

  const contextValue = { isMuted, toggleMute, hasEntered, sidebarOpen, toggleSidebar, selectedChibiIds, toggleChibiSelection }

  // The OBS stream layout is a bare greenscreen capture surface — no sidebar, splash, BGM,
  // or the regular walking-chibi overlay (it renders its own, larger ones).
  if (isStreamLayout) {
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  }

  return (
    <AppContext.Provider value={contextValue}>
      <audio ref={audioRef} src="/audio/Arknights OST.mp3" loop preload="auto" />
      <SideMenu />
      <div
        className={sidebarOpen ? 'md:ml-[264px]' : 'md:ml-[72px]'}
        style={{ transition: 'margin-left 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {children}
      </div>
      {hasEntered && <WalkingChibi />}
      {!hasEntered && <SplashScreen ref={splashRef} onEnter={handleEnter} />}
    </AppContext.Provider>
  )
}
