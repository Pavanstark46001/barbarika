'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
}

export function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.06,
  stagger = 0.02,
  once = true,
  as: Tag = 'div',
}: TextRevealProps) {
  const words = text.split(' ')

  return (
    <Tag className={cn('overflow-hidden', className)}>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once, margin: '-30px' }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%', opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: delay + i * stagger,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

// Char-level reveal
interface CharRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

export function CharReveal({ text, className, delay = 0, stagger = 0.03, once = true }: CharRevealProps) {
  return (
    <span className={cn('inline-block overflow-hidden', className)}>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once }}
        className="inline-flex"
      >
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: delay + i * stagger,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  )
}
