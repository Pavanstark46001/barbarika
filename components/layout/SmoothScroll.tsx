'use client'
import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'
import { cn } from '@/lib/utils'

interface SmoothScrollProps {
  children: ReactNode
  className?: string
}

export function SmoothScroll({ children, className }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <div className={cn('min-h-screen flex flex-col', className)}>{children}</div>
}
