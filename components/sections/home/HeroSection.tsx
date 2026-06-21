'use client'
import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollCounter } from '@/components/animations/ScrollCounter'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { CONTACT_WHATSAPP } from '@/lib/constants'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
})

const stats = [
  { value: 150, suffix: '+', label: 'Projects', sublabel: 'Delivered' },
  { value: 50,  suffix: '+', label: 'Clients',  sublabel: 'Served' },
  { value: 5,   suffix: '+', label: 'Years',    sublabel: 'Experience' },
  { value: 99,  suffix: '%', label: 'Client',   sublabel: 'Satisfaction' },
]

const chips = [
  'Website Development',
  'Mobile Apps',
  'AI Agents',
  'Digital Marketing',
  'SEO',
  'UI/UX Design',
]

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    const next = document.getElementById('services')
    next?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

      {/* Gradient blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan/10 blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Three.js Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <HeroCanvas />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-primary/20"
        >
          <Sparkles size={14} className="text-primary-light animate-pulse" />
          <span className="text-sm font-medium text-muted-fg">
            Trusted by <span className="text-foreground font-semibold">100+</span> Businesses Across India
          </span>
          <span className="text-base">🇮🇳</span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl mx-auto mb-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight"
          >
            {['We Build', 'Digital Products', 'That Drive'].map((line, i) => (
              <motion.span
                key={line}
                className="block text-foreground"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              className="block gradient-text"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            >
              Business Growth
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="max-w-2xl text-lg sm:text-xl text-muted leading-relaxed mb-10"
        >
          Premium software development, AI agents, and digital marketing for
          hospitals, schools, e-commerce, and enterprises. We turn your vision
          into a digital product that generates real revenue.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <MagneticButton>
            <Button
              variant="glow"
              size="xl"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              onClick={() =>
                window.open(
                  `https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'd like to start a project with Barbarika.`,
                  '_blank'
                )
              }
            >
              Start Your Project
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Link href="/portfolio">
              <Button variant="outline" size="xl" icon={<ExternalLink size={18} />} iconPosition="right">
                View Portfolio
              </Button>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Chip row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.05 }}
          className="flex flex-wrap justify-center gap-2 mb-4"
        >
          {chips.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.1 + i * 0.05 }}
              className="text-xs font-medium px-3 py-1.5 rounded-full glass border border-border text-muted-fg"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 mb-8"
      >
        <div className="glass rounded-2xl border border-border px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-0.5">
                <ScrollCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <div className="text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="text-xs text-muted">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted hover:text-foreground transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
