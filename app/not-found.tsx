import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-space-blue">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-quantum-purple mb-4">404 - Page Not Found</h1>
        <p className="text-white mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/">
          <span className="bg-quantum-purple text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
            Go back home
          </span>
        </Link>
      </div>
    </div>
  )
}

