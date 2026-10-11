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
      <span className="font-data text-[11px] tracking-[0.14em] text-gc-dim uppercase w-10">{label}</span>
      <div className="flex-1 h-1 bg-gc-raised overflow-hidden">
        <div
          className={`h-full ${color} animate-[stat-fill_0.8s_ease-out_forwards] origin-left`}
          style={{ width: `${fillPercentage}%`, animationDelay: `${delay}s`, transform: 'scaleX(0)' }}
        />
      </div>
      <span className="font-data text-sm text-gc-ink w-12 text-right tabular-nums font-medium">{value}</span>
    </div>
  )
}
