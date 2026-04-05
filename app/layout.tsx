import type { Metadata } from 'next'
import { Navbar } from '@/components/ui/Navbar'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Ayush Kumar Shaw - Developer Portfolio',
  description:
    'Premium developer portfolio showcasing innovative 3D web experiences, IoT projects, and full-stack development work.',
  generator: 'v0.app',
  icons: {
    icon: '/image.jpg',
    apple: '/image.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />

        {/* Wrap sections in main with padding for fixed navbar */}
        <main className="pt-24">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  )
}