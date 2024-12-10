'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would typically integrate with your analytics service
    const url = `${pathname}${searchParams.toString()}`
    console.log(`Page view: ${url}`)
  }, [pathname, searchParams])

  return null
}

