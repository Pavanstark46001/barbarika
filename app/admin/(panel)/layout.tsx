'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { LOCAL_STORAGE_KEYS } from '@/lib/constants'

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.auth)
    if (!raw) { router.replace('/admin'); return }
    try {
      const s = JSON.parse(raw)
      if (s.expiresAt > Date.now()) { setReady(true) }
      else { localStorage.removeItem(LOCAL_STORAGE_KEYS.auth); router.replace('/admin') }
    } catch {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.auth)
      router.replace('/admin')
    }
  }, [router])

  function logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.auth)
    router.push('/admin')
  }

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#09090f]">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0f0f1a]">
      <AdminSidebar onLogout={logout} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
