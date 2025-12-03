'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, Users, MousePointerClick, TrendingUp } from 'lucide-react'

interface AnalyticsData {
  pageViews: Record<string, number>
  uniqueVisitors: number
  clickEvents: Record<string, number>
  totalPageViews: number
}

export default function AdminPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  // Simple password protection (for production, use proper auth)
  const ADMIN_PASSWORD = 'emerita2025' // Change this!

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      fetchData()
    } else {
      alert('Incorrect password')
    }
  }

  const fetchData = async () => {
    const res = await fetch('/api/track')
    const analytics = await res.json()
    setData(analytics)
  }

  useEffect(() => {
    if (authenticated) {
      fetchData()
      const interval = setInterval(fetchData, 5000) // Refresh every 5 seconds
      return () => clearInterval(interval)
    }
  }, [authenticated])

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
        <Card className="w-full max-w-md border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Login
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <p className="text-slate-400">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
            <p className="text-slate-400">Real-time visitor tracking (resets on deployment)</p>
          </div>
          <button
            onClick={fetchData}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Refresh
          </button>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Total Page Views</CardTitle>
              <Eye className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{data.totalPageViews}</div>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Unique Visitors</CardTitle>
              <Users className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{data.uniqueVisitors}</div>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Click Events</CardTitle>
              <MousePointerClick className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {Object.values(data.clickEvents).reduce((a, b) => a + b, 0)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {data.totalPageViews > 0
                  ? ((Object.values(data.clickEvents).reduce((a, b) => a + b, 0) / data.totalPageViews) * 100).toFixed(1)
                  : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Page Views Breakdown */}
        <Card className="mb-4 border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-white">Page Views by Route</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.keys(data.pageViews).length === 0 ? (
              <p className="text-slate-400">No page views yet</p>
            ) : (
              <div className="space-y-2">
                {Object.entries(data.pageViews).map(([page, count]) => (
                  <div key={page} className="flex items-center justify-between rounded-lg bg-slate-800 p-3">
                    <span className="font-mono text-sm text-slate-300">{page}</span>
                    <span className="font-bold text-white">{count} views</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Click Events Breakdown */}
        <Card className="border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-white">Click Events</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.keys(data.clickEvents).length === 0 ? (
              <p className="text-slate-400">No click events yet</p>
            ) : (
              <div className="space-y-2">
                {Object.entries(data.clickEvents).map(([event, count]) => (
                  <div key={event} className="flex items-center justify-between rounded-lg bg-slate-800 p-3">
                    <span className="font-mono text-sm text-slate-300">{event}</span>
                    <span className="font-bold text-white">{count} clicks</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
