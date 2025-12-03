import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Simple in-memory storage (will reset on deployment)
// For production, use Redis, Vercel KV, or a database
let pageViews: Record<string, number> = {}
let uniqueVisitors = new Set<string>()
let clickEvents: Record<string, number> = {}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { page, event } = body
    
    // Get visitor IP for unique tracking
    const headersList = await headers()
    const forwarded = headersList.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : headersList.get('x-real-ip') || 'unknown'
    
    // Track page view
    if (page) {
      pageViews[page] = (pageViews[page] || 0) + 1
      uniqueVisitors.add(ip)
    }
    
    // Track click event
    if (event) {
      clickEvents[event] = (clickEvents[event] || 0) + 1
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    pageViews,
    uniqueVisitors: uniqueVisitors.size,
    clickEvents,
    totalPageViews: Object.values(pageViews).reduce((a, b) => a + b, 0),
  })
}
