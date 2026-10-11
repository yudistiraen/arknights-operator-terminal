import type { Metadata } from 'next'
import { Michroma, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppShell } from '../components/AppShell'
import './globals.css'

const michroma = Michroma({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-michroma',
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Arknights — Operator Profile Terminal',
  icons: { icon: '/Arknights_logo.webp' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${michroma.variable} ${plexSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  )
}
