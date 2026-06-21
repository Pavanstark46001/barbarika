'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Briefcase, Layers, MessageSquare,
  Inbox, Settings, ExternalLink, LogOut, Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: '/admin/dashboard',    icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/portfolio',    icon: Briefcase,       label: 'Portfolio' },
  { href: '/admin/services',     icon: Layers,          label: 'Services' },
  { href: '/admin/testimonials', icon: MessageSquare,   label: 'Testimonials' },
  { href: '/admin/leads',        icon: Inbox,           label: 'Leads' },
  { href: '/admin/settings',     icon: Settings,        label: 'Settings' },
]

interface Props {
  onLogout: () => void
}

export function AdminSidebar({ onLogout }: Props) {
  const pathname = usePathname()

  return (
    <aside className="w-64 shrink-0 bg-[#09090f] border-r border-white/6 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-white/6">
        <Link href="/admin/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-md">
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-display font-bold text-white">Barbarika</div>
            <div className="text-xs text-white/40">Admin Panel</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                active
                  ? 'bg-primary/15 text-primary border border-primary/25'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              )}
            >
              <Icon size={17} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/6 space-y-1">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
        >
          <ExternalLink size={16} />
          View Live Site
        </a>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-400/70 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  )
}
