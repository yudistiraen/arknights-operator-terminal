interface SpinnerProps {
  label: string
  className?: string
}

/** Twin-arc loading spinner: neutral graphite rings (1s) with a yellow signal arc counter-rotating at
 * 2x between them. Yellow = "in progress" in the Graphite Console palette (design-pattern.md §2.4). */
export function Spinner({ label, className = '' }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`grid w-12.5 aspect-square rounded-full border-4 border-solid border-x-transparent border-y-gc-dim animate-[spinner-turn_1s_infinite_linear] motion-reduce:animate-[spinner-turn_3s_infinite_linear] before:content-[''] before:[grid-area:1/1] before:m-0.5 before:rounded-full before:border-4 before:border-solid before:border-x-transparent before:border-y-gc-signal before:animate-[spinner-turn_0.5s_infinite_linear_reverse] motion-reduce:before:animate-[spinner-turn_1.5s_infinite_linear_reverse] after:content-[''] after:[grid-area:1/1] after:m-2 after:rounded-full after:border-4 after:border-solid after:border-x-transparent after:border-y-gc-line-strong ${className}`}
    />
  )
}
