'use client'
import { useState } from 'react'
import { Globe, LayoutDashboard, Smartphone, Bot, TrendingUp, Search, Palette, Share2, CheckCircle2, type LucideIcon } from 'lucide-react'
import { services } from '@/data/services'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, LucideIcon> = {
  Globe, LayoutDashboard, Smartphone, Bot, TrendingUp, Search, Palette, Share2,
}

export default function AdminServicesPage() {
  const [search, setSearch] = useState('')

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold text-white mb-1">Services</h1>
        <p className="text-sm text-white/40">{services.length} services configured. Edit the data files to modify service details.</p>
      </div>

      <div className="bg-primary/8 border border-primary/20 rounded-xl px-5 py-4 mb-6 text-sm text-primary/80">
        Services are configured via <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">data/services.ts</code>. This page provides a read-only overview of your current service offering.
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter services..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((service) => {
          const Icon = ICON_MAP[service.icon] ?? Globe
          return (
            <div
              key={service.id}
              className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:border-primary/25 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={cn('w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0', service.color)}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white text-sm">{service.title}</h3>
                    <Badge variant="outline" className="text-[10px]">Active</Badge>
                  </div>
                  <p className="text-xs text-white/40 mb-3 leading-relaxed">{service.shortDescription}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/8 text-white/40">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/5 rounded-lg py-2">
                      <div className="text-xs font-bold text-white">{service.features.length}</div>
                      <div className="text-[10px] text-white/30">Features</div>
                    </div>
                    <div className="bg-white/5 rounded-lg py-2">
                      <div className="text-xs font-bold text-white">{service.benefits.length}</div>
                      <div className="text-[10px] text-white/30">Benefits</div>
                    </div>
                    <div className="bg-white/5 rounded-lg py-2">
                      <div className="text-xs font-bold text-white">{service.process.length}</div>
                      <div className="text-[10px] text-white/30">Steps</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
