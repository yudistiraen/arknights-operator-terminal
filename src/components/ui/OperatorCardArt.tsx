'use client'

import { useEffect, useRef, useState } from 'react'

// Roster-card portraits crop each image to a custom zoom/focal point per
// operator (`portraitFocus`), which needs `background-size: auto <zoom>%` —
// a sizing mode `next/image`'s `fill`/`object-fit` can't express. We keep the
// background-image technique but route it through Next's image optimizer
// endpoint for automatic WebP/AVIF + resizing, and only set the URL once the
// card is near the viewport so a 100+ card grid doesn't fetch all at once.
export function OperatorCardArt({ src, zoom, x, y }: { src: string; zoom: number; x: number; y: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '600px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-no-repeat opacity-75 group-hover:opacity-95 group-hover:scale-[1.06]"
      style={{
        backgroundImage: isVisible ? `url(/_next/image?url=${encodeURIComponent(src)}&w=828&q=75)` : undefined,
        backgroundSize: `auto ${zoom}%`,
        backgroundPosition: `${x}% ${y}%`,
        transition: 'transform 0.4s ease, opacity 0.3s',
      }}
    />
  )
}
