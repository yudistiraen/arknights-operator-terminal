export function Footer() {
  return (
    <footer className="relative z-50 shrink-0">
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="bg-ak-bg/80 backdrop-blur-sm px-4 md:px-6 py-1.5">
          <p className="text-[9px] md:text-[10px] text-white/20 font-display tracking-wider text-center leading-relaxed">
            Fan-made project — not affiliated with or endorsed by Hypergryph or Yostar.
            <span className="hidden md:inline"> Arknights and all related assets © Hypergryph Co., Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
