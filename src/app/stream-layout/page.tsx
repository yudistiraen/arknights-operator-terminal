import type { Metadata } from 'next'
import { StreamLayout } from '../../components/StreamLayout'

export const metadata: Metadata = {
  title: 'Stream Layout — Arknights',
}

export default function StreamLayoutPage() {
  return <StreamLayout />
}
