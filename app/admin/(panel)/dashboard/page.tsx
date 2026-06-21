'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Briefcase, Inbox, MessageSquare, Layers, TrendingUp, Clock, ArrowRight, type LucideIcon } from 'lucide-react'
import type { Lead } from '@/types'
import { LOCAL_STORAGE_KEYS } from '@/lib/constants'
import { projects } from '@/data/portfolio'
import { testimonials } from '@/data/testimonials'
import { services } from '@/data/services'

const STATUS_COLOR: Record<string, string> = {
  new:       'bg-blue-500/15 text-blue-400 border-blue-500/25',
  contacted: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
  converted: 'bg-green-500/15 text-green-400 border-green-500/25',
  closed:    'bg-white/10 text-white/40 border-white/10',
}

function StatCard({ icon: Icon, label, value, sub, color }: {
  icon: LucideIcon; label: string; value: number | string; sub?: string; color: string
}) {
  return (
    <div className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-primary/30 transition-colors">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
        <Icon size={20} />
      </div>
      <div className="text-3xl font-display font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-white/50">{label}</div>
      {sub && <div className="text-xs text-white/30 mt-1">{sub}</div>}
    </div>
  )
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.leads)
      setLeads(raw ? JSON.parse(raw) : [])
    } catch { setLeads([]) }
  }, [])

  const newLeads = leads.filter((l) => l.status === 'new').length
  const recentLeads = [...leads].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 6)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold text-white mb-1">Dashboard</h1>
        <p className="text-sm text-white/40">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Briefcase}     label="Total Projects"    value={projects.length}      color="bg-primary/20 text-primary" />
        <StatCard icon={Layers}        label="Services"          value={services.length}      color="bg-accent/20 text-accent" />
        <StatCard icon={MessageSquare} label="Testimonials"      value={testimonials.length}  color="bg-cyan/20 text-cyan" />
        <StatCard icon={Inbox}         label="Total Leads"       value={leads.length}
          sub={newLeads > 0 ? `${newLeads} new` : 'All up to date'}
          color="bg-green-500/20 text-green-400" />
      </div>

      {/* New leads alert */}
      {newLeads > 0 && (
        <div className="mb-8 p-4 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              {newLeads} new lead{newLeads > 1 ? 's' : ''} waiting for your response
            </span>
          </div>
          <Link href="/admin/leads" className="text-xs font-semibold text-primary hover:underline">
            View Leads →
          </Link>
        </div>
      )}

      {/* Recent leads */}
      <div className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-white/6">
          <h2 className="font-semibold text-white flex items-center gap-2">
            <Clock size={16} className="text-white/40" />
            Recent Leads
          </h2>
          <Link href="/admin/leads" className="text-xs text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight size={12} />
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className="p-10 text-center">
            <Inbox size={32} className="text-white/20 mx-auto mb-3" />
            <p className="text-sm text-white/40">No leads yet. They&apos;ll appear here when someone submits the contact form.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center gap-4 px-5 py-4 hover:bg-white/3 transition-colors">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {lead.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">{lead.name}</div>
                  <div className="text-xs text-white/40 truncate">{lead.email} · {lead.company || 'No company'}</div>
                </div>
                <div className="hidden md:block text-xs text-white/30 shrink-0">
                  {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${STATUS_COLOR[lead.status] ?? STATUS_COLOR.new}`}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick links */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { href: '/admin/portfolio',    label: 'Manage Portfolio',    icon: Briefcase },
          { href: '/admin/testimonials', label: 'Add Testimonial',     icon: MessageSquare },
          { href: '/admin/leads',        label: 'Review Leads',        icon: Inbox },
          { href: '/admin/settings',     label: 'Update Settings',     icon: Layers },
        ].map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2.5 p-4 rounded-xl bg-white/4 border border-white/8 text-sm text-white/60 hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all"
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
