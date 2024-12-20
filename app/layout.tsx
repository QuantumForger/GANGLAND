import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quantum AI Forge',
  description: 'Forging the future with advanced AI solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumaiforge.com',
    siteName: 'Quantum AI Forge',
    images: [
      {
        url: 'https://quantumaiforge.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quantum AI Forge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quantumaiforge',
    creator: '@quantumaiforge',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-deep-space-blue`}>
        <div className="flex flex-col min-h-screen relative">
          <div className="absolute inset-0 bg-gradient-to-b from-deep-space-blue to-elite-navy opacity-50 z-0" />
          <div className="absolute inset-0 bg-neural-pattern opacity-5 mix-blend-overlay z-0" />
          <Header />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

