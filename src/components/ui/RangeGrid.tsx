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
              className={`w-5 h-5 ${
                cell === 2
                  ? 'bg-gc-signal'
                  : cell === 1
                    ? 'bg-gc-invert'
                    : 'border border-gc-line-soft'
              }`}
            >
              {cell === 2 && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gc-void" />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
