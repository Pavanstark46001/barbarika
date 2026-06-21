'use client'
import { useEffect, useState } from 'react'
import { Plus, Pencil, Trash2, Star, Search, X } from 'lucide-react'
import type { Project, ProjectCategory } from '@/types'
import { Modal } from '@/components/ui/Modal'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { projects as staticProjects } from '@/data/portfolio'
import { LOCAL_STORAGE_KEYS } from '@/lib/constants'
import { generateId } from '@/lib/utils'

const CATEGORIES: ProjectCategory[] = [
  'Healthcare', 'Education', 'Finance', 'Retail', 'AI',
  'Construction', 'Travel', 'Restaurant', 'Real Estate',
]

const GRADIENT: Record<string, string> = {
  Healthcare: 'from-red-500 to-rose-600', Education: 'from-blue-500 to-indigo-600',
  Finance: 'from-green-500 to-emerald-600', Retail: 'from-cyan-500 to-sky-600',
  AI: 'from-teal-400 to-green-600', Construction: 'from-yellow-500 to-amber-600',
  Restaurant: 'from-orange-500 to-red-600', 'Real Estate': 'from-stone-500 to-slate-600',
  Travel: 'from-violet-500 to-fuchsia-600', All: 'from-primary to-accent',
}

type FormData = Omit<Project, 'id' | 'screenshots'>

const EMPTY_FORM: FormData = {
  slug: '', title: '', category: 'Healthcare', description: '', longDescription: '',
  techStack: [], imageUrl: '', demoUrl: '', benefits: [], featured: false,
}

function load(): Project[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.portfolio)
    return raw ? JSON.parse(raw) : staticProjects
  } catch { return staticProjects }
}

function save(data: Project[]) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.portfolio, JSON.stringify(data))
}

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState<'add' | 'edit' | null>(null)
  const [editing, setEditing] = useState<Project | null>(null)
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  useEffect(() => { setProjects(load()) }, [])

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  function openAdd() { setForm(EMPTY_FORM); setEditing(null); setModal('add') }
  function openEdit(p: Project) {
    setForm({ slug: p.slug, title: p.title, category: p.category, description: p.description,
      longDescription: p.longDescription, techStack: p.techStack, imageUrl: p.imageUrl ?? '',
      demoUrl: p.demoUrl ?? '', benefits: p.benefits, featured: p.featured })
    setEditing(p); setModal('edit')
  }

  function handleSave() {
    if (!form.title || !form.description) return
    const slug = form.slug || form.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    let updated: Project[]
    if (modal === 'add') {
      const newProject: Project = {
        id: generateId(), screenshots: [], ...form, slug,
        techStack: typeof form.techStack === 'string'
          ? (form.techStack as unknown as string).split(',').map((t: string) => t.trim()).filter(Boolean)
          : form.techStack,
        benefits: typeof form.benefits === 'string'
          ? (form.benefits as unknown as string).split('\n').map((b: string) => b.trim()).filter(Boolean)
          : form.benefits,
      }
      updated = [...projects, newProject]
    } else {
      updated = projects.map((p) => p.id === editing!.id ? {
        ...p, ...form, slug,
        techStack: typeof form.techStack === 'string'
          ? (form.techStack as unknown as string).split(',').map((t: string) => t.trim()).filter(Boolean)
          : form.techStack,
        benefits: typeof form.benefits === 'string'
          ? (form.benefits as unknown as string).split('\n').map((b: string) => b.trim()).filter(Boolean)
          : form.benefits,
      } : p)
    }
    save(updated); setProjects(updated); setModal(null)
  }

  function handleDelete() {
    const updated = projects.filter((p) => p.id !== deleteId)
    save(updated); setProjects(updated); setDeleteId(null)
  }

  function toggleFeatured(id: string) {
    const updated = projects.map((p) => p.id === id ? { ...p, featured: !p.featured } : p)
    save(updated); setProjects(updated)
  }

  const techVal = Array.isArray(form.techStack) ? form.techStack.join(', ') : form.techStack as unknown as string
  const benefitsVal = Array.isArray(form.benefits) ? form.benefits.join('\n') : form.benefits as unknown as string

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-white mb-1">Portfolio</h1>
          <p className="text-sm text-white/40">{projects.length} projects total</p>
        </div>
        <Button variant="glow" size="sm" icon={<Plus size={16} />} iconPosition="left" onClick={openAdd}>
          Add Project
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
            <X size={14} />
          </button>
        )}
      </div>

      {/* Table */}
      <div className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6 text-left text-xs text-white/40 font-semibold uppercase tracking-wider">
                <th className="px-5 py-3">Project</th>
                <th className="px-5 py-3 hidden md:table-cell">Category</th>
                <th className="px-5 py-3 hidden lg:table-cell">Tech Stack</th>
                <th className="px-5 py-3 text-center">Featured</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${GRADIENT[p.category] ?? 'from-primary to-accent'} shrink-0 flex items-center justify-center text-white text-xs font-bold`}>
                        {p.category.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{p.title}</div>
                        <div className="text-xs text-white/40 truncate max-w-[200px]">{p.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="px-2.5 py-1 rounded-full text-xs bg-white/8 border border-white/10 text-white/60">
                      {p.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <div className="flex gap-1 flex-wrap">
                      {p.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-xs bg-white/5 text-white/40">{t}</span>
                      ))}
                      {p.techStack.length > 3 && <span className="text-xs text-white/30">+{p.techStack.length - 3}</span>}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <button onClick={() => toggleFeatured(p.id)} title="Toggle featured">
                      <Star size={16} className={p.featured ? 'fill-amber-400 text-amber-400' : 'text-white/20 hover:text-white/50'} />
                    </button>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        onClick={() => openEdit(p)}
                        className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-colors"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => setDeleteId(p.id)}
                        className="p-1.5 rounded-lg text-white/40 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="py-12 text-center text-white/30 text-sm">No projects found</div>
          )}
        </div>
      </div>

      {/* Add / Edit Modal */}
      <Modal
        isOpen={modal === 'add' || modal === 'edit'}
        onClose={() => setModal(null)}
        title={modal === 'add' ? 'Add New Project' : 'Edit Project'}
        size="lg"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Project Title" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} required />
            <Select
              label="Category"
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as ProjectCategory }))}
              options={CATEGORIES.map((c) => ({ value: c, label: c }))}
            />
          </div>
          <Input label="Short Description" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} required />
          <Textarea label="Long Description" rows={3} value={form.longDescription} onChange={(e) => setForm((f) => ({ ...f, longDescription: e.target.value }))} />
          <Input label="Tech Stack (comma-separated)" placeholder="React, Node.js, PostgreSQL" value={techVal} onChange={(e) => setForm((f) => ({ ...f, techStack: e.target.value as unknown as string[] }))} />
          <Textarea label="Key Results / Benefits (one per line)" rows={3} placeholder="80% reduction in wait time&#10;₹50L saved annually" value={benefitsVal} onChange={(e) => setForm((f) => ({ ...f, benefits: e.target.value as unknown as string[] }))} />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Demo URL (optional)" placeholder="https://..." value={form.demoUrl ?? ''} onChange={(e) => setForm((f) => ({ ...f, demoUrl: e.target.value }))} />
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-foreground">Mark as Featured</span>
              </label>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button variant="glow" onClick={handleSave} fullWidth>
              {modal === 'add' ? 'Add Project' : 'Save Changes'}
            </Button>
            <Button variant="secondary" onClick={() => setModal(null)}>Cancel</Button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirm Modal */}
      <Modal isOpen={!!deleteId} onClose={() => setDeleteId(null)} title="Delete Project" size="sm">
        <p className="text-muted mb-6">Are you sure you want to delete this project? This cannot be undone.</p>
        <div className="flex gap-3">
          <Button variant="destructive" onClick={handleDelete} fullWidth>Delete</Button>
          <Button variant="secondary" onClick={() => setDeleteId(null)}>Cancel</Button>
        </div>
      </Modal>
    </div>
  )
}
