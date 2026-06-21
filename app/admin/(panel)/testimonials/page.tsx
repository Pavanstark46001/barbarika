'use client'
import { useEffect, useState } from 'react'
import { Plus, Pencil, Trash2, Star, Search, X } from 'lucide-react'
import type { Testimonial } from '@/types'
import { Modal } from '@/components/ui/Modal'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { testimonials as staticTestimonials } from '@/data/testimonials'
import { LOCAL_STORAGE_KEYS } from '@/lib/constants'
import { generateId } from '@/lib/utils'

const INDUSTRIES = ['Healthcare', 'Education', 'Finance', 'Retail', 'AI', 'Construction', 'Restaurant', 'Real Estate', 'Travel']

type FormData = Omit<Testimonial, 'id'>

const EMPTY_FORM: FormData = {
  name: '', company: '', role: '', avatar: '', rating: 5, content: '', industry: 'Healthcare',
}

function load(): Testimonial[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.testimonials)
    return raw ? JSON.parse(raw) : staticTestimonials
  } catch { return staticTestimonials }
}

function save(data: Testimonial[]) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.testimonials, JSON.stringify(data))
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState<'add' | 'edit' | null>(null)
  const [editing, setEditing] = useState<Testimonial | null>(null)
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  useEffect(() => { setTestimonials(load()) }, [])

  const filtered = testimonials.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.company.toLowerCase().includes(search.toLowerCase())
  )

  function openAdd() { setForm(EMPTY_FORM); setEditing(null); setModal('add') }
  function openEdit(t: Testimonial) {
    setForm({ name: t.name, company: t.company, role: t.role, avatar: t.avatar,
      rating: t.rating, content: t.content, industry: t.industry })
    setEditing(t); setModal('edit')
  }

  function handleSave() {
    if (!form.name || !form.content) return
    let updated: Testimonial[]
    if (modal === 'add') {
      updated = [...testimonials, { id: generateId(), ...form, rating: Number(form.rating) }]
    } else {
      updated = testimonials.map((t) => t.id === editing!.id
        ? { ...t, ...form, rating: Number(form.rating) } : t)
    }
    save(updated); setTestimonials(updated); setModal(null)
  }

  function handleDelete() {
    const updated = testimonials.filter((t) => t.id !== deleteId)
    save(updated); setTestimonials(updated); setDeleteId(null)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-white mb-1">Testimonials</h1>
          <p className="text-sm text-white/40">{testimonials.length} testimonials</p>
        </div>
        <Button variant="glow" size="sm" icon={<Plus size={16} />} iconPosition="left" onClick={openAdd}>
          Add Testimonial
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or company..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors"
        />
        {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"><X size={14} /></button>}
      </div>

      {/* Table */}
      <div className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6 text-left text-xs text-white/40 font-semibold uppercase tracking-wider">
                <th className="px-5 py-3">Person</th>
                <th className="px-5 py-3 hidden md:table-cell">Industry</th>
                <th className="px-5 py-3 hidden lg:table-cell">Review</th>
                <th className="px-5 py-3">Rating</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar src={t.avatar} alt={t.name} fallback={t.name} size="sm" />
                      <div>
                        <div className="text-sm font-medium text-white">{t.name}</div>
                        <div className="text-xs text-white/40">{t.role} · {t.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="px-2.5 py-1 rounded-full text-xs bg-white/8 border border-white/10 text-white/60">{t.industry}</span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <p className="text-xs text-white/40 truncate max-w-[260px]">{t.content}</p>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={13} className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-white/15'} />
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <button onClick={() => openEdit(t)} className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-colors"><Pencil size={15} /></button>
                      <button onClick={() => setDeleteId(t.id)} className="p-1.5 rounded-lg text-white/40 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="py-12 text-center text-white/30 text-sm">No testimonials found</div>
          )}
        </div>
      </div>

      {/* Add / Edit Modal */}
      <Modal isOpen={modal === 'add' || modal === 'edit'} onClose={() => setModal(null)}
        title={modal === 'add' ? 'Add Testimonial' : 'Edit Testimonial'} size="lg">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Full Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required />
            <Input label="Role / Position" value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Company" value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} />
            <Select label="Industry" value={form.industry} onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
              options={INDUSTRIES.map((i) => ({ value: i, label: i }))} />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Rating</label>
            <div className="flex gap-2">
              {[1,2,3,4,5].map((n) => (
                <button key={n} type="button" onClick={() => setForm((f) => ({ ...f, rating: n }))}
                  className="p-1">
                  <Star size={22} className={n <= form.rating ? 'fill-amber-400 text-amber-400' : 'text-border hover:text-amber-400/50'} />
                </button>
              ))}
            </div>
          </div>
          <Textarea label="Testimonial Content" rows={4} value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} required />
          <div className="flex gap-3 pt-2">
            <Button variant="glow" onClick={handleSave} fullWidth>{modal === 'add' ? 'Add Testimonial' : 'Save Changes'}</Button>
            <Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirm */}
      <Modal isOpen={!!deleteId} onClose={() => setDeleteId(null)} title="Delete Testimonial" size="sm">
        <p className="text-muted mb-6">Are you sure? This testimonial will be permanently removed.</p>
        <div className="flex gap-3">
          <Button variant="destructive" onClick={handleDelete} fullWidth>Delete</Button>
          <Button variant="secondary" onClick={() => setDeleteId(null)}>Cancel</Button>
        </div>
      </Modal>
    </div>
  )
}
