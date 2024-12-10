import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Layout from '@/components/layout/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Analytics } from '@/components/Analytics'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quantum AI Forge',
  description: 'Forging the future with advanced AI solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ErrorBoundary>
            <Layout>
              <Analytics />
              {children}
            </Layout>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  )
}

