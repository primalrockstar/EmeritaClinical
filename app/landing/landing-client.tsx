'use client'

import { useEffect } from 'react'

export function LandingPageClient() {
  useEffect(() => {
    // Track page view
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: '/landing' }),
    }).catch(() => {})
  }, [])

  return null
}

export function TrackableButton({ 
  href, 
  eventName, 
  children, 
  className 
}: { 
  href: string
  eventName: string
  children: React.ReactNode
  className?: string
}) {
  const handleClick = () => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: eventName }),
    }).catch(() => {})
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
