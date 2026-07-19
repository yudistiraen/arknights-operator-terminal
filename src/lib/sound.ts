const CLICK_SOUND_SRC = '/audio/futuristic_click.mp3'
const CLICK_VOLUME = 0.5
const TRANSITION_SOUND_SRC = '/audio/glitch_transition.mp3'
const TRANSITION_VOLUME = 0.6
const HOVER_VOLUME = 0.15
const HOVER_THROTTLE_MS = 80

let hoverSound: HTMLAudioElement | null = null
let lastHoverAt = 0

export function playClick() {
  const sound = new Audio(CLICK_SOUND_SRC)
  sound.volume = CLICK_VOLUME
  sound.play().catch(() => {})
}

// Glitch transition — the sound used when swapping skins/variants/alters
// in the operator terminal.
export function playTransition() {
  const sound = new Audio(TRANSITION_SOUND_SRC)
  sound.volume = TRANSITION_VOLUME
  sound.play().catch(() => {})
}

// Softer, throttled variant of the transition sound for hover feedback —
// sweeping the pointer across a dense grid must not fire a burst of
// full-volume sounds.
export function playHover() {
  const now = Date.now()
  if (now - lastHoverAt < HOVER_THROTTLE_MS) return
  lastHoverAt = now
  if (!hoverSound) {
    hoverSound = new Audio(TRANSITION_SOUND_SRC)
    hoverSound.volume = HOVER_VOLUME
  }
  hoverSound.currentTime = 0
  hoverSound.play().catch(() => {})
}
