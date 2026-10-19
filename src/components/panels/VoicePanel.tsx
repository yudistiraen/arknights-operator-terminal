import { useEffect, useRef, useState } from 'react'
import type { Operator, VoiceLanguage, VoiceLine } from '../../types'
import { assetUrl } from '../../lib/assetUrl'
import { FOCUS_RING } from '../ui/Console'

const LANGUAGE_NAMES: Record<VoiceLanguage, string> = {
  JP: 'Japanese',
  CN: 'Chinese',
  EN: 'English',
  KR: 'Korean',
}

const SPRING_EASE = 'ease-[cubic-bezier(0.22,1.2,0.36,1)]'

export function VoicePanel({ operator }: { operator: Operator }) {
  const [openLanguage, setOpenLanguage] = useState<VoiceLanguage | null>(null)
  const [playingLineId, setPlayingLineId] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressBarRef = useRef<HTMLSpanElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  const voiceLines = operator.voice?.lines ?? []

  const stopPlayback = () => {
    if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current)
    animationFrameRef.current = null
    audioRef.current?.pause()
    audioRef.current = null
    setPlayingLineId(null)
  }

  // Stop audio when the panel closes or the operator/form changes.
  useEffect(() => stopPlayback, [operator.voice])

  const toggleLanguage = (language: VoiceLanguage) => {
    stopPlayback()
    setOpenLanguage(previous => previous === language ? null : language)
  }

  const trackProgress = () => {
    const audio = audioRef.current
    if (!audio) return
    if (progressBarRef.current && audio.duration) {
      progressBarRef.current.style.transform = `scaleX(${audio.currentTime / audio.duration})`
    }
    animationFrameRef.current = requestAnimationFrame(trackProgress)
  }

  const toggleLine = (language: VoiceLanguage, line: VoiceLine) => {
    const wasPlaying = playingLineId === line.id
    stopPlayback()
    if (wasPlaying || !operator.voice) return

    const audio = new Audio(assetUrl(`${operator.voice.audioDir}/${language.toLowerCase()}/${line.id}.mp3`))
    audio.addEventListener('ended', stopPlayback)
    audio.addEventListener('error', stopPlayback)
    audioRef.current = audio
    setPlayingLineId(line.id)
    audio.play().catch(stopPlayback)
    animationFrameRef.current = requestAnimationFrame(trackProgress)
  }

  return (
    <div className="space-y-1">
      {/* Collab operators can lack a voice actor in some languages (e.g. Luo Xiaohei has no EN/KR) */}
      {(Object.entries(operator.cv) as [VoiceLanguage, string][]).filter(([, actorName]) => actorName).map(([language, actorName]) => {
        const isOpen = openLanguage === language
        return (
          <div key={language} className="border border-gc-line overflow-hidden">
            <button
              onClick={() => toggleLanguage(language)}
              aria-expanded={isOpen}
              className={`w-full flex items-center gap-4 px-4 h-12 cursor-pointer text-left ${isOpen ? 'bg-gc-invert' : 'bg-gc-base hover:bg-gc-raised active:bg-gc-panel'} ${FOCUS_RING}`}
            >
              <span className={`font-data text-[11px] uppercase tracking-[0.14em] w-8 shrink-0 ${isOpen ? 'text-gc-void' : 'text-gc-dim'}`}>{language}</span>
              <span className="flex-1 min-w-0">
                <span className={`block font-body text-sm font-medium truncate ${isOpen ? 'text-gc-void' : 'text-gc-ink'}`}>{actorName}</span>
                <span className={`block font-data text-[9px] uppercase tracking-[0.14em] ${isOpen ? 'text-gc-void/60' : 'text-gc-ghost'}`}>{LANGUAGE_NAMES[language]}</span>
              </span>
              {voiceLines.length > 0 && (
                <span className={`font-data text-[10px] tabular-nums tracking-[0.08em] ${isOpen ? 'text-gc-void/70' : 'text-gc-dim'}`}>{voiceLines.length} lines</span>
              )}
              <svg
                className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${SPRING_EASE} ${isOpen ? 'rotate-180 text-gc-void' : 'text-gc-dim'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                {voiceLines.length > 0 ? (
                    <ul className="ak-scroll max-h-105 overflow-y-auto bg-gc-panel">
                      {voiceLines.map(line => (
                        <VoiceLineRow
                          key={line.id}
                          line={line}
                          language={language}
                          isPlaying={playingLineId === line.id}
                          progressBarRef={progressBarRef}
                          onToggle={() => toggleLine(language, line)}
                        />
                      ))}
                    </ul>
                  ) : (
                    <p className="bg-gc-panel px-4 py-4 font-data text-[11px] text-gc-dim tracking-[0.08em]">No voice lines recorded for this operator yet.</p>
                  )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function VoiceLineRow({ line, language, isPlaying, progressBarRef, onToggle }: {
  line: VoiceLine
  language: VoiceLanguage
  isPlaying: boolean
  progressBarRef: React.RefObject<HTMLSpanElement | null>
  onToggle: () => void
}) {
  const lineText = line.text[language]
  const translation = language !== 'EN' ? line.text.EN : undefined
  const hasAudio = !line.audio || line.audio.includes(language)

  return (
    <li className="border-b border-gc-line-soft last:border-b-0">
      <button
        onClick={onToggle}
        disabled={!hasAudio}
        aria-pressed={isPlaying}
        aria-label={hasAudio ? `${isPlaying ? 'Stop' : 'Play'} ${line.title}` : `${line.title} (no recording)`}
        className={`group relative w-full flex gap-3 px-4 py-3 text-left cursor-pointer active:scale-[0.99] disabled:cursor-default disabled:active:scale-100 ${FOCUS_RING} focus-visible:-outline-offset-1`}
      >
        {/* Hover layer: opacity only */}
        <span className="pointer-events-none absolute inset-0 bg-gc-raised opacity-0 group-enabled:group-hover:opacity-100 transition-opacity duration-150 ease-out" />
        {/* Playing rail */}
        <span className={`pointer-events-none absolute left-0 top-2 bottom-2 w-0.5 bg-gc-signal origin-center transition-transform duration-250 ${SPRING_EASE} ${isPlaying ? 'scale-y-100' : 'scale-y-0'}`} />

        <span className={`relative mt-0.5 flex items-center justify-center w-7 h-7 shrink-0 border ${isPlaying ? 'border-gc-signal text-gc-signal' : hasAudio ? 'border-gc-line text-gc-dim group-hover:text-gc-ink group-hover:border-gc-line-strong' : 'border-gc-line-soft text-gc-ghost'}`}>
          {isPlaying ? (
            <span className="flex items-end gap-0.5 h-3" aria-hidden="true">
              {[0, 180, 90].map(delay => (
                <span
                  key={delay}
                  className="w-0.5 h-full bg-current origin-bottom animate-[voice-level_0.7s_ease-in-out_infinite] motion-reduce:animate-none"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </span>
          ) : (
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M3 1.5v9l7.5-4.5z" />
            </svg>
          )}
        </span>

        <span className="relative flex-1 min-w-0">
          <span className={`block font-data text-[10px] uppercase tracking-[0.14em] ${isPlaying ? 'text-gc-signal' : 'text-gc-dim'}`}>
            {line.title}{isPlaying && ' · Playing…'}{!hasAudio && ' · Text only'}
          </span>
          {lineText && (
            <span className="block mt-1 font-body text-[13px] leading-[1.7] text-gc-ink whitespace-pre-line">{lineText}</span>
          )}
          {translation && (
            <span className="block mt-1 font-body text-[12px] leading-[1.7] text-gc-dim whitespace-pre-line">{translation}</span>
          )}
        </span>

        {/* Playback progress */}
        {isPlaying && (
          <span
            ref={progressBarRef}
            className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gc-signal origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        )}
      </button>
    </li>
  )
}
