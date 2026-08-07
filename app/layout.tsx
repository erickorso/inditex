import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Podcaster Challenge — Erick Vargas',
  description:
    'Inditex-style podcast browser take-home: Next.js, TypeScript, Redux Toolkit + Saga, Jest, Storybook. By Erick Vargas Ramos.',
  authors: [{ name: 'Erick Vargas Ramos', url: 'https://github.com/erickorso' }],
  openGraph: {
    title: 'Podcaster Challenge — Erick Vargas',
    description:
      'Next.js podcast browser (list → detail → episode) with Redux Saga and Storybook.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
