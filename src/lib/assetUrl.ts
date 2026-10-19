// Heavy assets (voice for now) live in the Cloudflare R2 bucket, mirroring the public/ layout
// (knowledge/cloudflare_r2.md). NEXT_PUBLIC_ASSET_URL is set as a Vercel project env var, so Vercel
// builds point at R2; locally it stays empty in .env and `pnpm dev` serves the public/ copies.
const ASSET_HOST = (process.env.NEXT_PUBLIC_ASSET_URL ?? '').replace(/\/+$/, '')

/** Resolves a public/-relative asset path (e.g. '/operators/amiya/voice/jp/cn_001.mp3') to its served URL. */
export function assetUrl(path: string): string {
  if (!ASSET_HOST) return path
  return `${ASSET_HOST}${path.startsWith('/') ? path : `/${path}`}`
}
