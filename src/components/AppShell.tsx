'use client'

import { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplashScreen } from './SplashScreen'
import { SideMenu } from './SideMenu'

gsap.registerPlugin(useGSAP)

interface AppContextType {
  isMuted: boolean
  toggleMute: () => void
  hasEntered: boolean
  sidebarOpen: boolean
  toggleSidebar: () => void
}

const AppContext = createContext<AppContextType>({
  isMuted: false,
  toggleMute: () => {},
  hasEntered: false,
  sidebarOpen: true,
  toggleSidebar: () => {},
})

export function useApp() {
  return useContext(AppContext)
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [hasEntered, setHasEntered] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), [])
  const audioRef = useRef<HTMLAudioElement>(null)
  const splashRef = useRef<HTMLDivElement>(null)

  const handleEnter = useCallback(() => {
    if (hasEntered) return
    const enterSound = new Audio('/audio/enter_effect.mp3')
    enterSound.volume = 0.8
    enterSound.play().catch(() => {})

    const audioElement = audioRef.current
    if (audioElement) {
      audioElement.volume = 0
      audioElement.play().then(() => {
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
  }, [hasEntered])

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
  }, [isMuted])

  return (
    <AppContext.Provider value={{ isMuted, toggleMute, hasEntered, sidebarOpen, toggleSidebar }}>
      <audio ref={audioRef} src="/audio/Arknights OST.mp3" loop preload="auto" />
      <SideMenu />
      <div
        className={sidebarOpen ? 'md:ml-[220px]' : ''}
        style={{ transition: 'margin-left 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {children}
      </div>
      {!hasEntered && <SplashScreen ref={splashRef} onEnter={handleEnter} />}
    </AppContext.Provider>
  )
}
