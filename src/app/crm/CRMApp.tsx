'use client'

import { useState } from 'react'
import CRMDashboard from './CRMDashboard'

const DUMMY_CREDENTIALS = [
  { username: 'admin', password: 'admin123', name: 'A-Deepakkumar', role: 'Admin' },
  { username: 'sales', password: 'sales123', name: 'Sales Manager', role: 'Sales' },
]

type Session = { name: string; role: string }

export default function CRMApp() {
  const [session, setSession] = useState<Session | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      const match = DUMMY_CREDENTIALS.find(c => c.username === username && c.password === password)
      if (match) {
        setSession({ name: match.name, role: match.role })
      } else {
        setError('Invalid username or password.')
      }
      setLoading(false)
    }, 800)
  }

  if (session) {
    return <CRMDashboard session={session} onLogout={() => setSession(null)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060f1e] via-[#0F2854] to-[#1C4D8D] flex items-center justify-center p-4" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#BDE8F5] mb-4">
            <span className="text-[#0F2854] text-2xl font-black">A</span>
          </div>
          <h1 className="text-white text-xl font-bold">Astrizion CRM</h1>
          <p className="text-blue-300 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-7">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="username"
                required
                className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-[#1C4D8D] focus:ring-2 focus:ring-[#BDE8F5] transition-all placeholder-gray-300"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 pr-10 text-sm outline-none focus:border-[#1C4D8D] focus:ring-2 focus:ring-[#BDE8F5] transition-all placeholder-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPass
                    ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" /></svg>
                    : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  }
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 rounded-lg px-3.5 py-2.5 flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0F2854] hover:bg-[#1C4D8D] text-white font-semibold py-2.5 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm mt-1"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          {/* Demo credentials hint */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">Demo Credentials</p>
            <div className="space-y-1.5">
              {DUMMY_CREDENTIALS.map(c => (
                <button
                  key={c.username}
                  type="button"
                  onClick={() => { setUsername(c.username); setPassword(c.password); setError('') }}
                  className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:bg-[#BDE8F5]/40 rounded-lg transition-colors text-left"
                >
                  <div>
                    <span className="text-xs font-semibold text-gray-700">{c.username}</span>
                    <span className="text-xs text-gray-400 ml-2">/ {c.password}</span>
                  </div>
                  <span className="text-[10px] font-medium bg-[#0F2854] text-white px-1.5 py-0.5 rounded">{c.role}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-blue-300/50 text-xs mt-6">© 2026 Astrizion Technologies</p>
      </div>
    </div>
  )
}
