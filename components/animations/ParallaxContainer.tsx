'use client'
import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParallaxContainerProps {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function ParallaxContainer({
  children,
  speed = 0.3,
  direction = 'up',
  className,
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const range = 200 * speed

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [range, -range] : [-range, range]
  )
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [range, -range] : direction === 'right' ? [-range, range] : [0, 0]
  )

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div style={{ y: direction === 'up' || direction === 'down' ? y : 0, x }}>
        {children}
      </motion.div>
    </div>
  )
}

// Floating element with idle animation
interface FloatingProps {
  children: ReactNode
  delay?: number
  amplitude?: number
  className?: string
}

export function Floating({ children, delay = 0, amplitude = 12, className }: FloatingProps) {
  return (
    <motion.div
      className={cn('inline-block', className)}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
