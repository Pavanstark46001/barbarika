'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LOCAL_STORAGE_KEYS } from '@/lib/constants'

export function useAdminAuth() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.auth)
    if (!raw) { router.replace('/admin'); return }
    try {
      const session = JSON.parse(raw)
      if (session.expiresAt > Date.now()) {
        setAuthenticated(true)
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.auth)
        router.replace('/admin')
        return
      }
    } catch {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.auth)
      router.replace('/admin')
      return
    }
    setLoading(false)
  }, [router])

  function logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.auth)
    router.push('/admin')
  }

  return { loading, authenticated, logout }
}
