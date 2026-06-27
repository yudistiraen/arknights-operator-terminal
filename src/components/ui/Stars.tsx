export function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="w-4 h-4 fill-ak-gold-bright drop-shadow-[0_0_4px_rgba(212,168,67,0.5)]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}
