'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface ScrollCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export function ScrollCounter({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  className,
  decimals = 0,
}: ScrollCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true, threshold: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * end)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}
