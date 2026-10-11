// Graphite Console primitives — see design-pattern.md §4.

/** Chamfers the top-left and bottom-right corners. Clips borders too, so bordered
 *  chamfers put the border color on a wrapper and clip a 1px-inset child. */
export const CHAMFER = '[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]'
export const CHAMFER_SM = '[clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]'

export const PANEL_SHADOW = 'shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_32px_-12px_rgba(0,0,0,0.7),0_2px_6px_rgba(0,0,0,0.4)]'
export const FLOAT_SHADOW = 'shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8),0_4px_12px_rgba(0,0,0,0.5)]'

export const FOCUS_RING = 'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gc-scan'

/** Search fields, selects and dropdown triggers (§4.10). Border swaps are instant, not animated. */
export const INPUT_CLASSES = 'bg-gc-base border border-gc-line text-gc-ink font-data text-[13px] tracking-[0.04em] h-9 placeholder:text-gc-ghost hover:border-gc-line-strong focus:border-gc-line-strong focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gc-scan'

/** Floating dropdown surface (§4.2 floating layer). */
export const MENU_CLASSES = 'bg-gc-float border border-gc-line-strong shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8),0_4px_12px_rgba(0,0,0,0.5)]'

/** Dropdown option: selected = inverted fill, like every other selection. */
export function menuItemClasses(isSelected: boolean): string {
  return isSelected
    ? 'bg-gc-invert text-gc-void'
    : 'text-gc-text hover:bg-gc-raised hover:text-gc-ink active:bg-gc-panel'
}

/** Ghost button (§4.5): bordered, raised layer on hover. Pair with a child `<HoverFill />`. */
export const GHOST_BUTTON = `group relative inline-flex items-center justify-center gap-2 border border-gc-line text-gc-text hover:text-gc-ink font-data text-[11px] tracking-[0.14em] uppercase cursor-pointer active:scale-[0.98] disabled:cursor-not-allowed disabled:text-gc-ghost disabled:border-gc-line-soft ${FOCUS_RING}`

/** Opacity-faded hover layer for buttons/rows — only opacity animates. Parent needs `group relative`. */
export function HoverFill({ className = 'bg-gc-raised' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-disabled:opacity-0 ${className}`}
      style={{ transition: 'opacity 0.15s ease-out' }}
    />
  )
}

/** Sticky page header used by every list page: display-face title, live readout on the right. */
export function PageHeader({ title, readout, className = '' }: { title: string; readout?: React.ReactNode; className?: string }) {
  return (
    <header className={`sticky top-0 z-40 bg-gc-void/90 backdrop-blur-md border-b border-gc-line ${className}`}>
      <div className="flex items-center justify-between gap-4 pl-16 pr-4 md:px-8 h-14 md:h-16">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-gc-signal" />
          <h1 className="font-display text-[13px] md:text-[15px] text-gc-text tracking-[0.18em] uppercase leading-none">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          {readout}
          <DotStrip count={8} offset={5} className="max-md:hidden" />
        </div>
      </div>
    </header>
  )
}

type DotTone = 'ghost' | 'signal' | 'scan'

const DOT_TONE_CLASSES: Record<DotTone, string> = {
  ghost: 'bg-gc-ghost',
  signal: 'bg-gc-signal-dim',
  scan: 'bg-gc-scan-dim',
}

// Irregular but deterministic: a fixed gap rhythm with two accent dots, so every strip
// reads as telemetry without any randomness that would differ between server and client.
const DOT_GAPS = [6, 4, 14, 4, 4, 22, 6, 4, 10, 30, 4, 8]

/** Decorative telemetry dot strip (§4.4). Pure decoration — never encodes status. */
export function DotStrip({ count = 10, accent = 'signal', offset = 0, className = '' }: {
  count?: number
  accent?: Exclude<DotTone, 'ghost'>
  offset?: number
  className?: string
}) {
  return (
    <div aria-hidden className={`flex items-center ${className}`}>
      {Array.from({ length: count }, (_, dotIndex) => {
        const rhythmIndex = (dotIndex + offset) % DOT_GAPS.length
        const tone: DotTone = rhythmIndex === 2 ? accent : rhythmIndex === 8 ? (accent === 'signal' ? 'scan' : 'signal') : 'ghost'
        return (
          <span
            key={dotIndex}
            className={`w-[3px] h-[3px] shrink-0 ${DOT_TONE_CLASSES[tone]}`}
            style={{ marginRight: DOT_GAPS[rhythmIndex] }}
          />
        )
      })}
    </div>
  )
}

const SIGNAL_TRIANGLE_CORNERS = {
  'top-right': 'top-1.5 right-1.5 [clip-path:polygon(0_0,100%_0,100%_100%)]',
  'bottom-left': 'bottom-1.5 left-1.5 [clip-path:polygon(0_0,0_100%,100%_100%)]',
} as const

/** Small yellow right triangle tucked into a frame corner. One per screen region. */
export function SignalTriangle({ corner = 'top-right', className = '' }: { corner?: keyof typeof SIGNAL_TRIANGLE_CORNERS; className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute w-2 h-2 bg-gc-signal ${SIGNAL_TRIANGLE_CORNERS[corner]} ${className}`}
    />
  )
}

/** L-shaped 1px corners marking a focus area (§4.4). Parent must be `relative`. */
export function BracketCorners({ size = 10, className = 'border-gc-line-strong' }: { size?: number; className?: string }) {
  const cornerStyle = { width: size, height: size }
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <span className={`absolute top-0 left-0 border-t border-l ${className}`} style={cornerStyle} />
      <span className={`absolute top-0 right-0 border-t border-r ${className}`} style={cornerStyle} />
      <span className={`absolute bottom-0 left-0 border-b border-l ${className}`} style={cornerStyle} />
      <span className={`absolute bottom-0 right-0 border-b border-r ${className}`} style={cornerStyle} />
    </span>
  )
}

/** Vertical tick rail for a frame's right edge. */
export function TickRail({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden className={`pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-[3px] ${className}`}>
      {Array.from({ length: 9 }, (_, tickIndex) => (
        <span key={tickIndex} className={`w-[3px] h-[3px] ${tickIndex === 4 ? 'bg-gc-scan-dim' : 'bg-gc-ghost'}`} />
      ))}
    </span>
  )
}

export type StatusTone = 'active' | 'progress' | 'scan' | 'alert' | 'ok' | 'idle'

const STATUS_DOT_CLASSES: Record<StatusTone, string> = {
  active: 'bg-gc-text',
  progress: 'bg-gc-signal',
  scan: 'bg-gc-scan',
  alert: 'bg-gc-alert',
  ok: 'bg-gc-ok',
  idle: 'bg-gc-ghost',
}

const STATUS_TEXT_CLASSES: Record<StatusTone, string> = {
  active: 'text-gc-text',
  progress: 'text-gc-signal',
  scan: 'text-gc-scan',
  alert: 'text-gc-alert',
  ok: 'text-gc-ok',
  idle: 'text-gc-ghost',
}

/** Status is always a word plus a dot, never color alone (§4.7). */
export function StatusDot({ tone, label, blink = tone === 'progress', muted = false, className = '' }: {
  tone: StatusTone
  label?: string
  blink?: boolean
  /** Keep the dot colored but set the label in dim grey (ambient readouts). */
  muted?: boolean
  className?: string
}) {
  return (
    <span className={`inline-flex items-center gap-2 font-data text-[11px] tracking-[0.14em] uppercase ${muted ? 'text-gc-dim' : STATUS_TEXT_CLASSES[tone]} ${className}`}>
      <span className={`w-1.5 h-1.5 shrink-0 ${STATUS_DOT_CLASSES[tone]} ${blink ? 'motion-safe:animate-[exam-blink_1.2s_ease-in-out_infinite]' : ''}`} />
      {label}
    </span>
  )
}

/** Panel title set in the frame, not the content (§4.1). */
export function FrameTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[13px] md:text-[15px] leading-none uppercase tracking-[0.18em] text-gc-dim ${className}`}>
      {children}
    </h2>
  )
}

/** Data-type label: column headers, field labels, eyebrows. */
export function Label({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-data text-[11px] leading-none uppercase tracking-[0.14em] text-gc-dim ${className}`}>
      {children}
    </span>
  )
}

/** The three-layer bezel panel: frame → inset border → content. */
export function Panel({
  title,
  headerRight,
  signal = false,
  rail = false,
  dots = true,
  className = '',
  contentClassName = 'p-5',
  children,
}: {
  title?: React.ReactNode
  headerRight?: React.ReactNode
  signal?: boolean
  rail?: boolean
  dots?: boolean
  className?: string
  contentClassName?: string
  children: React.ReactNode
}) {
  return (
    <section className={`relative bg-gc-frame p-2 md:p-3 ${CHAMFER} ${PANEL_SHADOW} ${className}`}>
      {signal && <SignalTriangle />}
      {(title || headerRight) && (
        <header className="flex items-center justify-between gap-4 h-8 md:h-10 px-1">
          {typeof title === 'string' ? <FrameTitle>{title}</FrameTitle> : title}
          {headerRight}
        </header>
      )}
      <div className={`relative border border-gc-line-strong bg-gc-panel ${contentClassName}`}>{children}</div>
      {rail && <TickRail className="max-md:hidden" />}
      {dots && <DotStrip count={12} className="mt-2 px-1 max-md:hidden" />}
    </section>
  )
}

/** Missing-image placeholder: a box with an X cross (§4.9). */
export function NoImage({ label = 'No image', className = '' }: { label?: string; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-gc-panel border border-gc-line overflow-hidden ${className}`}>
      <svg aria-hidden className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" className="stroke-gc-line" strokeWidth="1" />
        <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" className="stroke-gc-line" strokeWidth="1" />
      </svg>
      <span className="relative bg-gc-panel px-1.5 font-data text-[9px] uppercase tracking-[0.14em] text-gc-dim">{label}</span>
    </div>
  )
}
