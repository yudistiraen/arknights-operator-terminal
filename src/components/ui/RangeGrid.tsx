interface RangeGridProps {
  grid: number[][]
}

export function RangeGrid({ grid }: RangeGridProps) {
  return (
    <div className="inline-grid gap-[3px]">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-[3px]">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`w-5 h-5 rounded-[2px] ${
                cell === 2
                  ? 'bg-ak-accent shadow-[0_0_6px_rgba(59,164,201,0.5)]'
                  : cell === 1
                    ? 'bg-white/[0.12] border border-white/[0.08]'
                    : 'bg-transparent'
              }`}
            >
              {cell === 2 && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
