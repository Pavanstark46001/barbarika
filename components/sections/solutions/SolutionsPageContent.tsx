'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, CheckCircle2,
  Hospital, Stethoscope, School, GraduationCap, Banknote, Users2,
  ShoppingCart, HardHat, Bot, Building2,
  type LucideIcon,
} from 'lucide-react'
import type { Solution } from '@/types'
import { Button } from '@/components/ui/Button'
import { TiltCard } from '@/components/animations/TiltCard'
import { cn } from '@/lib/utils'

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  Hospital, Stethoscope, School, GraduationCap, Banknote, Users2,
  ShoppingCart, HardHat, Bot, Building2,
}

const INDUSTRY_LABELS: Record<string, string> = {
  All:          'All Industries',
  Healthcare:   'Healthcare',
  Education:    'Education',
  Finance:      'Finance',
  Business:     'Business',
  Retail:       'Retail',
  Construction: 'Construction',
  AI:           'AI & Automation',
}

function SolutionIcon({ name, color }: { name: string; color: string }) {
  const Icon = SOLUTION_ICONS[name] ?? Building2
  return (
    <div className={cn('w-13 h-13 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5 shadow-lg shrink-0 w-[52px] h-[52px]', color)}>
      <Icon size={26} className="text-white" />
    </div>
  )
}

interface Props {
  solutions: Solution[]
  industries: string[]
}

export function SolutionsPageContent({ solutions, industries }: Props) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? solutions
    : solutions.filter((s) => s.industry === active)

  const tabs = ['All', ...industries]

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan/6 blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Industry Solutions</span>
            <span className="h-px w-8 bg-accent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Tailored Solutions for{' '}
            <span className="gradient-text">Every Industry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We understand that different industries have unique challenges. Our solutions are
            purpose-built for your sector, not adapted from generic templates.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-10"
          >
            {[
              { value: `${solutions.length}+`, label: 'Solutions' },
              { value: '7+', label: 'Industries' },
              { value: '150+', label: 'Deployments' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="section-padding bg-surface/30 relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Industry filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActive(tab)}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200',
                  active === tab
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-surface border-border text-muted hover:border-primary/40 hover:text-foreground'
                )}
              >
                {INDUSTRY_LABELS[tab] ?? tab}
              </motion.button>
            ))}
          </div>

          {/* Solutions grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((solution, i) => (
                <motion.div
                  key={solution.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <TiltCard>
                    <div className="glass-card h-full rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300 p-7 flex flex-col group">
                      <div className="flex items-start justify-between mb-5">
                        <SolutionIcon name={solution.icon} color={solution.color} />
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-2 border border-border text-muted">
                          {solution.industry}
                        </span>
                      </div>

                      <h2 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {solution.title}
                      </h2>
                      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                        {solution.shortDescription}
                      </p>

                      {/* Feature highlights */}
                      <ul className="space-y-1.5 mb-6">
                        {solution.features.slice(0, 3).map((f) => (
                          <li key={f.title} className="flex items-center gap-2 text-xs text-foreground/70">
                            <CheckCircle2 size={13} className="text-primary shrink-0" />
                            {f.title}
                          </li>
                        ))}
                      </ul>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {solution.technologies.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full text-xs bg-surface-2 border border-border text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/solutions/${solution.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        View Solution <ArrowRight size={15} />
                      </Link>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-primary/5" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Don&apos;t see your industry?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted mb-8 text-lg"
          >
            We build custom solutions for any business. Tell us your challenge and we&apos;ll design the perfect solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button variant="glow" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Discuss Your Requirements
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
