'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-space-blue">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-quantum-purple mb-4">Something went wrong!</h1>
        <p className="text-white mb-4">We apologize for the inconvenience. Our team has been notified.</p>
        <button
          onClick={() => reset()}
          className="bg-quantum-purple text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

