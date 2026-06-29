const CLICK_SOUND_SRC = '/audio/futuristic_click.mp3'
const CLICK_VOLUME = 0.5

export function playClick() {
  const sound = new Audio(CLICK_SOUND_SRC)
  sound.volume = CLICK_VOLUME
  sound.play().catch(() => {})
}
