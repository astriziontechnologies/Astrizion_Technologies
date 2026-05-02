'use client'

import { useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Contact = {
  id: number
  name: string
  company: string
  email: string
  phone: string
  status: 'Lead' | 'Prospect' | 'Customer' | 'Churned'
  value: number
  lastContact: string
}

type Deal = {
  id: number
  title: string
  contact: string
  value: number
  stage: 'Lead' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Won' | 'Lost'
  probability: number
  closeDate: string
}

type Task = {
  id: number
  title: string
  contact: string
  dueDate: string
  priority: 'Low' | 'Medium' | 'High'
  done: boolean
  type: 'Call' | 'Email' | 'Meeting' | 'Follow-up'
}

// ─── Dummy Data ───────────────────────────────────────────────────────────────

const CONTACTS: Contact[] = [
  { id: 1, name: 'Ravi Shankar', company: 'TechNova Pvt Ltd', email: 'ravi@technova.in', phone: '+91 98401 23456', status: 'Customer', value: 120000, lastContact: '2026-04-28' },
  { id: 2, name: 'Priya Meenakshi', company: 'Kovai Softworks', email: 'priya@kovaisoft.com', phone: '+91 99401 78901', status: 'Prospect', value: 45000, lastContact: '2026-04-30' },
  { id: 3, name: 'Anand Krishnan', company: 'Salem Fintech', email: 'anand@salemft.com', phone: '+91 94440 55678', status: 'Lead', value: 0, lastContact: '2026-05-01' },
  { id: 4, name: 'Deepa Sundaram', company: 'Madurai Retail Co', email: 'deepa@madurairetail.com', phone: '+91 87540 12345', status: 'Customer', value: 88000, lastContact: '2026-04-25' },
  { id: 5, name: 'Karthik Balasubramanian', company: 'Erode Agri Tech', email: 'karthik@erodeagri.in', phone: '+91 96001 34567', status: 'Prospect', value: 32000, lastContact: '2026-04-29' },
  { id: 6, name: 'Meena Rajendran', company: 'Chennai Digital Hub', email: 'meena@cdh.in', phone: '+91 98760 99001', status: 'Customer', value: 215000, lastContact: '2026-05-01' },
  { id: 7, name: 'Suresh Murugan', company: 'Trichy Logistics', email: 'suresh@trichylog.com', phone: '+91 90023 45678', status: 'Churned', value: 15000, lastContact: '2026-03-10' },
  { id: 8, name: 'Lakshmi Narayanan', company: 'Vellore IT Park', email: 'lakshmi@velloreit.in', phone: '+91 91234 56789', status: 'Lead', value: 0, lastContact: '2026-05-02' },
]

const DEALS: Deal[] = [
  { id: 1, title: 'E-commerce Website', contact: 'Ravi Shankar', value: 75000, stage: 'Won', probability: 100, closeDate: '2026-04-15' },
  { id: 2, title: 'Mobile App Development', contact: 'Priya Meenakshi', value: 150000, stage: 'Proposal', probability: 60, closeDate: '2026-05-30' },
  { id: 3, title: 'AI Chatbot Integration', contact: 'Anand Krishnan', value: 60000, stage: 'Qualified', probability: 40, closeDate: '2026-06-15' },
  { id: 4, title: 'ERP System', contact: 'Deepa Sundaram', value: 200000, stage: 'Negotiation', probability: 80, closeDate: '2026-05-20' },
  { id: 5, title: 'SEO & Digital Marketing', contact: 'Karthik Balasubramanian', value: 35000, stage: 'Lead', probability: 20, closeDate: '2026-07-01' },
  { id: 6, title: 'Cloud Migration', contact: 'Meena Rajendran', value: 180000, stage: 'Proposal', probability: 65, closeDate: '2026-06-01' },
  { id: 7, title: 'Web Scraping Tool', contact: 'Suresh Murugan', value: 25000, stage: 'Lost', probability: 0, closeDate: '2026-03-01' },
  { id: 8, title: 'HR Portal', contact: 'Lakshmi Narayanan', value: 90000, stage: 'Qualified', probability: 35, closeDate: '2026-07-15' },
]

const TASKS: Task[] = [
  { id: 1, title: 'Follow up on ERP proposal', contact: 'Deepa Sundaram', dueDate: '2026-05-03', priority: 'High', done: false, type: 'Call' },
  { id: 2, title: 'Send mobile app wireframes', contact: 'Priya Meenakshi', dueDate: '2026-05-04', priority: 'High', done: false, type: 'Email' },
  { id: 3, title: 'Demo call for cloud migration', contact: 'Meena Rajendran', dueDate: '2026-05-05', priority: 'Medium', done: false, type: 'Meeting' },
  { id: 4, title: 'Qualify new lead requirements', contact: 'Anand Krishnan', dueDate: '2026-05-06', priority: 'Medium', done: true, type: 'Call' },
  { id: 5, title: 'Send invoice — e-commerce site', contact: 'Ravi Shankar', dueDate: '2026-04-30', priority: 'Low', done: true, type: 'Email' },
  { id: 6, title: 'Onboarding meeting', contact: 'Lakshmi Narayanan', dueDate: '2026-05-07', priority: 'Medium', done: false, type: 'Meeting' },
  { id: 7, title: 'Quarterly review call', contact: 'Deepa Sundaram', dueDate: '2026-05-10', priority: 'Low', done: false, type: 'Follow-up' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmt = (n: number) => `₹${n.toLocaleString('en-IN')}`

const statusColor: Record<Contact['status'], string> = {
  Lead: 'bg-yellow-100 text-yellow-800',
  Prospect: 'bg-blue-100 text-blue-800',
  Customer: 'bg-green-100 text-green-800',
  Churned: 'bg-red-100 text-red-800',
}

const priorityColor: Record<Task['priority'], string> = {
  Low: 'bg-gray-100 text-gray-600',
  Medium: 'bg-yellow-100 text-yellow-700',
  High: 'bg-red-100 text-red-700',
}

const typeIcon: Record<Task['type'], string> = {
  Call: '📞',
  Email: '✉️',
  Meeting: '🤝',
  'Follow-up': '🔔',
}

const STAGES: Deal['stage'][] = ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Won', 'Lost']

// ─── Modules ──────────────────────────────────────────────────────────────────

function Dashboard() {
  const totalRevenue = CONTACTS.filter(c => c.status === 'Customer').reduce((s, c) => s + c.value, 0)
  const openDeals = DEALS.filter(d => !['Won', 'Lost'].includes(d.stage))
  const pipeline = openDeals.reduce((s, d) => s + d.value * d.probability / 100, 0)
  const pendingTasks = TASKS.filter(t => !t.done).length
  const winRate = Math.round(
    DEALS.filter(d => d.stage === 'Won').length /
    DEALS.filter(d => ['Won', 'Lost'].includes(d.stage)).length * 100
  )

  const stageGroups = STAGES.slice(0, 4).map(stage => ({
    stage,
    count: DEALS.filter(d => d.stage === stage).length,
    value: DEALS.filter(d => d.stage === stage).reduce((s, d) => s + d.value, 0),
  }))

  const recentActivities = [
    { text: 'Meena Rajendran moved to Proposal stage', time: '2h ago', icon: '📋' },
    { text: 'New lead: Lakshmi Narayanan added', time: '4h ago', icon: '➕' },
    { text: 'ERP deal won — Deepa Sundaram', time: '1d ago', icon: '🏆' },
    { text: 'Follow-up email sent to Priya Meenakshi', time: '1d ago', icon: '✉️' },
    { text: 'Demo call completed — Anand Krishnan', time: '2d ago', icon: '📞' },
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Dashboard</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Overview of your sales pipeline and activities</p>
      </div>

      {/* Stat cards — 2 cols on mobile, 4 on lg */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: 'Total Revenue', value: fmt(totalRevenue), sub: 'from customers', color: 'bg-[#0F2854] text-white' },
          { label: 'Pipeline', value: fmt(Math.round(pipeline)), sub: 'weighted forecast', color: 'bg-[#1C4D8D] text-white' },
          { label: 'Open Deals', value: String(openDeals.length), sub: `${DEALS.length} total`, color: 'bg-[#4988C4] text-white' },
          { label: 'Win Rate', value: `${winRate}%`, sub: 'closed deals', color: 'bg-[#BDE8F5] text-[#0F2854]' },
        ].map(card => (
          <div key={card.label} className={`rounded-xl sm:rounded-2xl p-3.5 sm:p-5 ${card.color} flex flex-col gap-1`}>
            <span className="text-xs font-medium opacity-75 leading-tight">{card.label}</span>
            <span className="text-base sm:text-xl lg:text-2xl font-bold leading-tight break-all">{card.value}</span>
            <span className="text-[10px] sm:text-xs opacity-60">{card.sub}</span>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-3 sm:mb-4">Pipeline by Stage</h3>
          <div className="space-y-2.5 sm:space-y-3">
            {stageGroups.map(({ stage, count, value }) => {
              const max = Math.max(...stageGroups.map(s => s.value), 1)
              const pct = Math.round(value / max * 100)
              return (
                <div key={stage}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span className="text-gray-600">{stage} <span className="text-gray-400">({count})</span></span>
                    <span className="font-medium text-gray-800">{fmt(value)}</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1C4D8D] rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-3 sm:mb-4">Recent Activity</h3>
          <ul className="space-y-2.5 sm:space-y-3">
            {recentActivities.map((a, i) => (
              <li key={i} className="flex gap-2.5 items-start">
                <span className="text-base leading-none mt-0.5 flex-shrink-0">{a.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-700 leading-snug">{a.text}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Upcoming tasks */}
      <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Upcoming Tasks</h3>
          <span className="text-[10px] sm:text-xs bg-red-50 text-red-600 font-medium px-2 py-0.5 rounded-full">{pendingTasks} pending</span>
        </div>
        <div className="divide-y divide-gray-50">
          {TASKS.filter(t => !t.done).slice(0, 4).map(task => (
            <div key={task.id} className="flex items-center gap-2.5 sm:gap-3 py-2 sm:py-2.5">
              <span className="text-base flex-shrink-0">{typeIcon[task.type]}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">{task.title}</p>
                <p className="text-[10px] sm:text-xs text-gray-400 truncate">{task.contact} · {task.dueDate}</p>
              </div>
              <span className={`text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0 ${priorityColor[task.priority]}`}>
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Contacts() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<Contact['status'] | 'All'>('All')

  const filtered = CONTACTS.filter(c => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'All' || c.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Contacts</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{CONTACTS.length} total contacts</p>
        </div>
        <button className="bg-[#1C4D8D] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-[#0F2854] transition-colors whitespace-nowrap">
          + Add Contact
        </button>
      </div>

      {/* Search */}
      <input
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#4988C4]"
        placeholder="Search by name or company…"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Filter chips — scrollable row on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {(['All', 'Lead', 'Prospect', 'Customer', 'Churned'] as const).map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap flex-shrink-0 ${filter === s ? 'bg-[#1C4D8D] text-white border-[#1C4D8D]' : 'border-gray-200 text-gray-600 hover:border-[#4988C4]'}`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table — horizontal scroll on mobile */}
      <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[320px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-3 sm:px-4 py-3 font-medium text-gray-600 text-xs sm:text-sm">Name</th>
                <th className="text-left px-3 sm:px-4 py-3 font-medium text-gray-600 text-xs sm:text-sm hidden sm:table-cell">Company</th>
                <th className="text-left px-3 sm:px-4 py-3 font-medium text-gray-600 text-xs sm:text-sm hidden lg:table-cell">Email</th>
                <th className="text-left px-3 sm:px-4 py-3 font-medium text-gray-600 text-xs sm:text-sm">Status</th>
                <th className="text-right px-3 sm:px-4 py-3 font-medium text-gray-600 text-xs sm:text-sm hidden sm:table-cell">Value</th>
                <th className="text-right px-3 sm:px-4 py-3 font-medium text-gray-600 text-xs sm:text-sm hidden xl:table-cell">Last Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(c => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#BDE8F5] flex items-center justify-center text-[#0F2854] font-semibold text-[10px] sm:text-xs flex-shrink-0">
                        {c.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 text-xs sm:text-sm truncate max-w-[100px] sm:max-w-none">{c.name}</p>
                        <p className="text-[10px] text-gray-400 sm:hidden truncate">{c.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-600 text-xs sm:text-sm hidden sm:table-cell">{c.company}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-500 text-xs hidden lg:table-cell">{c.email}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3">
                    <span className={`text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded-full ${statusColor[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right font-medium text-gray-800 text-xs sm:text-sm hidden sm:table-cell">
                    {c.value > 0 ? fmt(c.value) : '—'}
                  </td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right text-gray-400 text-xs hidden xl:table-cell">{c.lastContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-sm">No contacts found</div>
          )}
        </div>
      </div>
    </div>
  )
}

function Pipeline() {
  const stages = STAGES.slice(0, 4)
  const dealsByStage = stages.map(stage => ({
    stage,
    deals: DEALS.filter(d => d.stage === stage),
  }))

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Deals Pipeline</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            {DEALS.filter(d => !['Won', 'Lost'].includes(d.stage)).length} active deals
          </p>
        </div>
        <button className="bg-[#1C4D8D] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-[#0F2854] transition-colors whitespace-nowrap">
          + New Deal
        </button>
      </div>

      {/* Won / Lost */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-green-50 border border-green-100 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3 items-center">
          <span className="text-xl sm:text-2xl flex-shrink-0">🏆</span>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-green-800">Won Deals</p>
            <p className="text-sm sm:text-lg font-bold text-green-700 truncate">
              {fmt(DEALS.filter(d => d.stage === 'Won').reduce((s, d) => s + d.value, 0))}
            </p>
          </div>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3 items-center">
          <span className="text-xl sm:text-2xl flex-shrink-0">❌</span>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-red-800">Lost Deals</p>
            <p className="text-sm sm:text-lg font-bold text-red-700 truncate">
              {fmt(DEALS.filter(d => d.stage === 'Lost').reduce((s, d) => s + d.value, 0))}
            </p>
          </div>
        </div>
      </div>

      {/* Kanban — horizontal scroll on mobile, grid on larger screens */}
      <div className="overflow-x-auto pb-2">
        <div className="grid grid-cols-4 gap-3 sm:gap-4 min-w-[640px]">
          {dealsByStage.map(({ stage, deals }) => (
            <div key={stage} className="bg-gray-50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-gray-100">
              <div className="flex justify-between items-center mb-2.5 sm:mb-3">
                <h3 className="font-semibold text-gray-700 text-xs sm:text-sm">{stage}</h3>
                <span className="text-[10px] sm:text-xs bg-white border border-gray-200 text-gray-500 rounded-full px-1.5 sm:px-2 py-0.5">
                  {deals.length}
                </span>
              </div>
              <div className="space-y-2 sm:space-y-2.5">
                {deals.map(deal => (
                  <div key={deal.id} className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                    <p className="font-medium text-gray-800 text-xs sm:text-sm leading-snug">{deal.title}</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 truncate">{deal.contact}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs sm:text-sm font-bold text-[#0F2854]">{fmt(deal.value)}</span>
                      <span className="text-[10px] sm:text-xs text-gray-400">{deal.probability}%</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-[#4988C4] rounded-full" style={{ width: `${deal.probability}%` }} />
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5">Close: {deal.closeDate}</p>
                  </div>
                ))}
                {deals.length === 0 && (
                  <p className="text-[10px] sm:text-xs text-gray-400 text-center py-3 sm:py-4">No deals</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Tasks() {
  const [tasks, setTasks] = useState(TASKS)
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Done'>('All')

  const toggle = (id: number) =>
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))

  const filtered = tasks.filter(t =>
    filter === 'All' ? true : filter === 'Pending' ? !t.done : t.done
  )

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Tasks</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            {tasks.filter(t => !t.done).length} pending · {tasks.filter(t => t.done).length} completed
          </p>
        </div>
        <button className="bg-[#1C4D8D] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-lg hover:bg-[#0F2854] transition-colors whitespace-nowrap">
          + Add Task
        </button>
      </div>

      <div className="flex gap-2">
        {(['All', 'Pending', 'Done'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${filter === f ? 'bg-[#1C4D8D] text-white border-[#1C4D8D]' : 'border-gray-200 text-gray-600 hover:border-[#4988C4]'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        {filtered.map(task => (
          <div
            key={task.id}
            className={`flex items-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-3 sm:py-3.5 hover:bg-gray-50 transition-colors ${task.done ? 'opacity-60' : ''}`}
          >
            <button
              onClick={() => toggle(task.id)}
              className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${task.done ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-[#4988C4]'}`}
            >
              {task.done && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-xs sm:text-sm font-medium ${task.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {task.title}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 truncate">
                {typeIcon[task.type]} {task.type} · {task.contact} · {task.dueDate}
              </p>
            </div>
            <span className={`text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0 ${priorityColor[task.priority]}`}>
              {task.priority}
            </span>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-10 text-gray-400 text-sm">No tasks</div>
        )}
      </div>
    </div>
  )
}

function Reports() {
  const monthlyRevenue = [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 62000 },
    { month: 'Mar', value: 38000 },
    { month: 'Apr', value: 91000 },
    { month: 'May', value: 55000 },
    { month: 'Jun', value: 0 },
  ]
  const maxRev = Math.max(...monthlyRevenue.map(m => m.value), 1)

  const sourceData = [
    { label: 'Referral', pct: 38, color: 'bg-[#0F2854]' },
    { label: 'Website', pct: 27, color: 'bg-[#1C4D8D]' },
    { label: 'Social Media', pct: 20, color: 'bg-[#4988C4]' },
    { label: 'Cold Outreach', pct: 15, color: 'bg-[#BDE8F5]' },
  ]

  const wonDeals = DEALS.filter(d => d.stage === 'Won')
  const avgDeal = Math.round(wonDeals.reduce((s, d) => s + d.value, 0) / wonDeals.length)
  const customers = CONTACTS.filter(c => c.status === 'Customer')
  const avgLTV = Math.round(customers.reduce((s, c) => s + c.value, 0) / customers.length)

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Reports</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Sales performance and analytics</p>
      </div>

      {/* KPI cards — 2 cols always, 4 on lg */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: 'Avg Deal Size', value: fmt(avgDeal), trend: '↑ 12%', up: true },
          { label: 'Sales Cycle', value: '32 days', trend: '↑ 3d slower', up: false },
          { label: 'Customer LTV', value: fmt(avgLTV), trend: '↑ 8%', up: true },
          { label: 'Churn Rate', value: '12.5%', trend: '↑ 2%', up: false },
        ].map(kpi => (
          <div key={kpi.label} className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-3 sm:p-4 shadow-sm">
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium">{kpi.label}</p>
            <p className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mt-1 break-all leading-tight">{kpi.value}</p>
            <p className={`text-[10px] sm:text-xs mt-1 ${kpi.up ? 'text-green-500' : 'text-red-500'}`}>{kpi.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Bar chart */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-4 sm:mb-5">Monthly Revenue (2026)</h3>
          <div className="flex items-end gap-1.5 sm:gap-2 h-28 sm:h-36">
            {monthlyRevenue.map(({ month, value }) => (
              <div key={month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[9px] sm:text-[10px] text-gray-500 leading-none">
                  {value > 0 ? `₹${Math.round(value / 1000)}k` : ''}
                </span>
                <div
                  className={`w-full rounded-t-md ${value > 0 ? 'bg-[#1C4D8D]' : 'bg-gray-100'}`}
                  style={{ height: `${value > 0 ? Math.max(value / maxRev * 100, 8) : 8}%` }}
                />
                <span className="text-[9px] sm:text-[10px] text-gray-500">{month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead sources */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-4 sm:mb-5">Lead Sources</h3>
          <div className="space-y-2.5 sm:space-y-3">
            {sourceData.map(({ label, pct, color }) => (
              <div key={label}>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="text-gray-600">{label}</span>
                  <span className="font-medium text-gray-800">{pct}%</span>
                </div>
                <div className="h-2 sm:h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-50 flex flex-wrap gap-2 sm:gap-3">
            {sourceData.map(({ label, pct, color }) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0 ${color}`} />
                <span className="text-[10px] sm:text-xs text-gray-500">{label} {pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top customers */}
      <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-3 sm:mb-4">Top Customers by Revenue</h3>
        <div className="space-y-2.5 sm:space-y-3">
          {CONTACTS.filter(c => c.value > 0)
            .sort((a, b) => b.value - a.value)
            .slice(0, 5)
            .map((c, i) => (
              <div key={c.id} className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs font-bold text-gray-300 w-4 flex-shrink-0">#{i + 1}</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#BDE8F5] flex items-center justify-center text-[#0F2854] font-semibold text-[10px] sm:text-xs flex-shrink-0">
                  {c.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">{c.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 truncate">{c.company}</p>
                </div>
                <div className="w-16 sm:w-24 hidden sm:block flex-shrink-0">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#4988C4] rounded-full"
                      style={{ width: `${c.value / CONTACTS.sort((a,b)=>b.value-a.value)[0].value * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0F2854] flex-shrink-0">{fmt(c.value)}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

// ─── Nav config ───────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )},
  { id: 'contacts', label: 'Contacts', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )},
  { id: 'pipeline', label: 'Pipeline', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )},
  { id: 'tasks', label: 'Tasks', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  )},
  { id: 'reports', label: 'Reports', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )},
] as const

type Tab = (typeof NAV_ITEMS)[number]['id']
type Session = { name: string; role: string }

// ─── Main Shell ───────────────────────────────────────────────────────────────

export default function CRMDashboard({ session, onLogout }: { session: Session; onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>('dashboard')
  const initials = session.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: 'var(--font-poppins)' }}>

      {/* ── Top header ── */}
      <header className="bg-[#0F2854] text-white px-3 sm:px-5 h-14 flex items-center gap-3 sticky top-0 z-30 shadow-lg flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 bg-[#BDE8F5] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-[#0F2854] text-xs font-bold">A</span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold leading-none">Astrizion CRM</p>
            <p className="text-[10px] text-blue-200 leading-none mt-0.5 hidden sm:block">Customer Relationship Management</p>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <div className="w-7 h-7 rounded-full bg-[#4988C4] flex items-center justify-center text-[10px] font-bold flex-shrink-0">{initials}</div>
            <div className="hidden md:block min-w-0">
              <p className="text-xs font-semibold leading-none truncate max-w-[100px]">{session.name}</p>
              <p className="text-[10px] text-blue-200 leading-none mt-0.5">{session.role}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* ── Body (sidebar + content) ── */}
      <div className="flex flex-1 min-h-0">

        {/* ── Desktop sidebar (lg+) ── */}
        <aside className="hidden lg:flex flex-col w-56 xl:w-60 bg-white border-r border-gray-100 flex-shrink-0">
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${tab === item.id ? 'bg-[#0F2854] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
          <div className="p-3 border-t border-gray-100">
            <div className="flex items-center gap-2.5 px-2">
              <div className="w-8 h-8 rounded-full bg-[#BDE8F5] flex items-center justify-center text-[#0F2854] font-bold text-xs flex-shrink-0">{initials}</div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">{session.name}</p>
                <p className="text-[10px] text-gray-400 truncate">{session.role}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 overflow-y-auto min-w-0">
          <div className="p-3 sm:p-4 lg:p-6 pb-24 lg:pb-6 max-w-screen-2xl mx-auto">
            {tab === 'dashboard' && <Dashboard />}
            {tab === 'contacts' && <Contacts />}
            {tab === 'pipeline' && <Pipeline />}
            {tab === 'tasks' && <Tasks />}
            {tab === 'reports' && <Reports />}
          </div>
        </main>
      </div>

      {/* ── Mobile bottom tab bar (< lg) ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 flex items-stretch shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 transition-colors ${tab === item.id ? 'text-[#0F2854]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <span className={`transition-transform ${tab === item.id ? 'scale-110' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium leading-none">{item.label}</span>
            {tab === item.id && (
              <span className="absolute top-0 w-8 h-0.5 bg-[#0F2854] rounded-full" />
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}
