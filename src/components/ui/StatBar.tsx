interface StatBarProps {
  label: string
  value: number
  max: number
  color: string
  delay?: number
}

export function StatBar({ label, value, max, color, delay = 0 }: StatBarProps) {
  const fillPercentage = Math.min((value / max) * 100, 100)

  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-[11px] tracking-wider text-white/40 uppercase w-10">{label}</span>
      <div className="flex-1 h-2 bg-white/[0.06] rounded-sm overflow-hidden">
        <div
          className={`h-full rounded-sm ${color} animate-[stat-fill_0.8s_ease-out_forwards] origin-left`}
          style={{ width: `${fillPercentage}%`, animationDelay: `${delay}s`, transform: 'scaleX(0)' }}
        />
      </div>
      <span className="font-display text-sm text-white/80 w-12 text-right tabular-nums font-semibold">{value}</span>
    </div>
  )
}
