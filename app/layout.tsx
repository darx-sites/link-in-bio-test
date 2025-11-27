import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Link in Bio | Your Digital Hub',
  description: 'Connect with me through all my social platforms and explore my work. One link for everything.',
  keywords: ['link in bio', 'social media', 'portfolio', 'contact', 'digital hub'],
  authors: [{ name: 'Link in Bio' }],
  openGraph: {
    title: 'Link in Bio | Your Digital Hub',
    description: 'Connect with me through all my social platforms and explore my work.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link in Bio | Your Digital Hub',
    description: 'Connect with me through all my social platforms and explore my work.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}