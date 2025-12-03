'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pathname }),
    }).catch(() => {}) // Silent fail
  }, [pathname])

  return null
}

export function trackClick(eventName: string) {
  fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event: eventName }),
  }).catch(() => {}) // Silent fail
}
