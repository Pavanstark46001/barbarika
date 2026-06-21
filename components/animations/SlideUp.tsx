'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SlideUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 40,
  className,
  once = true,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered children wrapper
interface StaggerProps {
  children: ReactNode
  stagger?: number
  className?: string
  once?: boolean
}

const containerVariants = (stagger: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
})

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

export function StaggerContainer({ children, stagger = 0.1, className, once = true }: StaggerProps) {
  return (
    <motion.div
      variants={containerVariants(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
