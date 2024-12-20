import { AppProps } from 'next/app'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/store'
import Layout from '../components/layout/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Analytics } from '@vercel/analytics/react'
import * as Sentry from "@sentry/nextjs"
import '../styles/globals.css'

Sentry.init({
  dsn: "YOUR_SENTRY_DSN", // Replace with your actual Sentry DSN
  tracesSampleRate: 1.0,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Layout>
            <Analytics />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  )
}

