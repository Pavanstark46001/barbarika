'use client'
import { useEffect, useState } from 'react'
import { Inbox, Search, X, ChevronDown, Eye } from 'lucide-react'
import type { Lead } from '@/types'
import { Modal } from '@/components/ui/Modal'
import { LOCAL_STORAGE_KEYS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const STATUS_OPTIONS: Lead['status'][] = ['new', 'contacted', 'converted', 'closed']

const STATUS_STYLE: Record<string, string> = {
  new:       'bg-blue-500/15 text-blue-400 border-blue-500/25',
  contacted: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
  converted: 'bg-green-500/15 text-green-400 border-green-500/25',
  closed:    'bg-white/8 text-white/30 border-white/10',
}

function load(): Lead[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.leads)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

function save(data: Lead[]) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.leads, JSON.stringify(data))
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<Lead['status'] | 'all'>('all')
  const [viewing, setViewing] = useState<Lead | null>(null)

  useEffect(() => { setLeads(load()) }, [])

  const filtered = leads.filter((l) => {
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.company?.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || l.status === filter
    return matchSearch && matchFilter
  }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  function updateStatus(id: string, status: Lead['status']) {
    const updated = leads.map((l) => l.id === id ? { ...l, status } : l)
    save(updated); setLeads(updated)
    if (viewing?.id === id) setViewing((v) => v ? { ...v, status } : v)
  }

  const counts = STATUS_OPTIONS.reduce<Record<string, number>>((acc, s) => {
    acc[s] = leads.filter((l) => l.status === s).length
    return acc
  }, {})

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold text-white mb-1">Leads</h1>
        <p className="text-sm text-white/40">{leads.length} total enquiries received</p>
      </div>

      {/* Status filter tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {(['all', ...STATUS_OPTIONS] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium border transition-all',
              filter === s
                ? 'bg-primary/15 border-primary/30 text-primary'
                : 'bg-white/4 border-white/8 text-white/50 hover:border-white/20 hover:text-white/70'
            )}
          >
            {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            {s !== 'all' && counts[s] > 0 && (
              <span className="ml-2 text-xs opacity-70">({counts[s]})</span>
            )}
            {s === 'all' && <span className="ml-2 text-xs opacity-70">({leads.length})</span>}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or company..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors"
        />
        {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"><X size={14} /></button>}
      </div>

      {/* Table */}
      <div className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Inbox size={36} className="text-white/15 mx-auto mb-3" />
            <p className="text-sm text-white/30">
              {leads.length === 0 ? 'No leads yet. Submit the contact form to see leads here.' : 'No leads match your filter.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/6 text-left text-xs text-white/40 font-semibold uppercase tracking-wider">
                  <th className="px-5 py-3">Contact</th>
                  <th className="px-5 py-3 hidden md:table-cell">Service</th>
                  <th className="px-5 py-3 hidden lg:table-cell">Date</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/3 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                          {lead.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{lead.name}</div>
                          <div className="text-xs text-white/40">{lead.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <span className="text-xs text-white/50">{lead.service || '—'}</span>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <span className="text-xs text-white/40">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value as Lead['status'])}
                          className={cn(
                            'appearance-none pr-6 pl-2.5 py-1 rounded-full text-xs font-semibold border cursor-pointer outline-none transition-colors',
                            STATUS_STYLE[lead.status]
                          )}
                          style={{ background: 'transparent' }}
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s} value={s} className="bg-[#1a1a2e] text-white">
                              {s.charAt(0).toUpperCase() + s.slice(1)}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={10} className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => setViewing(lead)}
                        className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-colors"
                      >
                        <Eye size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Lead Modal */}
      <Modal isOpen={!!viewing} onClose={() => setViewing(null)} title="Lead Details" size="md">
        {viewing && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Name',    value: viewing.name },
                { label: 'Email',   value: viewing.email },
                { label: 'Phone',   value: viewing.phone },
                { label: 'Company', value: viewing.company || '—' },
                { label: 'Service', value: viewing.service || '—' },
                { label: 'Date',    value: new Date(viewing.createdAt).toLocaleString('en-IN') },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xs text-muted mb-1">{label}</div>
                  <div className="text-sm text-foreground font-medium break-all">{value}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs text-muted mb-2">Message</div>
              <div className="text-sm text-foreground bg-surface-2 rounded-xl p-4 leading-relaxed">
                {viewing.message}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted mb-2">Update Status</div>
              <div className="flex gap-2 flex-wrap">
                {STATUS_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => updateStatus(viewing.id, s)}
                    className={cn(
                      'px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all',
                      viewing.status === s
                        ? STATUS_STYLE[s]
                        : 'bg-surface-2 border-border text-muted hover:border-primary/40'
                    )}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href={`mailto:${viewing.email}?subject=Re: Your enquiry on Barbarika`} className="flex-1">
                <button className="w-full py-2.5 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors">
                  Reply via Email
                </button>
              </a>
              <a href={`https://wa.me/${viewing.phone.replace(/[^0-9]/g, '')}?text=Hi ${viewing.name}! Thank you for contacting Barbarika.`} target="_blank" rel="noopener noreferrer" className="flex-1">
                <button className="w-full py-2.5 rounded-xl text-sm font-semibold bg-green-600 text-white hover:bg-green-500 transition-colors">
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
