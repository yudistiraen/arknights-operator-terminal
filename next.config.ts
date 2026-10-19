import type { NextConfig } from 'next'

// Temporary: r2.dev is blocked by Indonesian ISPs, so voice and L2D requests are proxied through Vercel to R2.
// Remove once the bucket has a custom domain (then set NEXT_PUBLIC_ASSET_URL instead) — knowledge/cloudflare_r2.md §0.
const R2_PUBLIC_URL = (process.env.R2_PUBLIC_URL ?? '').replace(/\/+$/, '')

const nextConfig: NextConfig = {
  // Default (afterFiles) rewrites run after the public/ lookup, so local dev keeps serving the local voice/L2D copies.
  async rewrites() {
    if (!R2_PUBLIC_URL) return []
    return [
      { source: '/operators/:operator/voice/:path*', destination: `${R2_PUBLIC_URL}/operators/:operator/voice/:path*` },
      { source: '/audio/title-voices/:path*', destination: `${R2_PUBLIC_URL}/audio/title-voices/:path*` },
      { source: '/operators/:operator/l2d/:path*', destination: `${R2_PUBLIC_URL}/operators/:operator/l2d/:path*` },
    ]
  },
}

export default nextConfig
