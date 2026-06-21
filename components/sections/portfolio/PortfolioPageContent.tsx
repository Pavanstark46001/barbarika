'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import type { Project, ProjectCategory } from '@/types'
import { projectCategories } from '@/data/portfolio'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

const CATEGORY_GRADIENT: Record<string, string> = {
  Healthcare:    'from-red-500 via-rose-500 to-pink-600',
  Education:     'from-blue-500 via-indigo-500 to-violet-600',
  Construction:  'from-yellow-500 via-amber-500 to-orange-600',
  Retail:        'from-cyan-500 via-sky-500 to-blue-600',
  Finance:       'from-green-500 via-emerald-500 to-teal-600',
  AI:            'from-teal-400 via-green-500 to-emerald-600',
  Restaurant:    'from-orange-500 via-red-500 to-rose-600',
  'Real Estate': 'from-stone-500 via-neutral-500 to-slate-600',
  Travel:        'from-violet-500 via-purple-500 to-fuchsia-600',
}

const CATEGORY_ICON: Record<string, string> = {
  Healthcare:    '🏥',
  Education:     '🎓',
  Construction:  '🏗️',
  Retail:        '🛍️',
  Finance:       '💰',
  AI:            '🤖',
  Restaurant:    '🍽️',
  'Real Estate': '🏢',
  Travel:        '✈️',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const gradient = CATEGORY_GRADIENT[project.category] ?? 'from-primary to-accent'
  const emoji = CATEGORY_ICON[project.category] ?? '💼'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-black/20 transition-all duration-400">
          {/* Visual placeholder */}
          <div className={cn('relative h-52 bg-gradient-to-br flex flex-col items-center justify-center overflow-hidden', gradient)}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 grid-pattern" />
            </div>
            {/* Floating orbs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-black/10 blur-lg" />

            <span className="text-5xl mb-2 relative z-10">{emoji}</span>
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase relative z-10">
              {project.category}
            </span>

            {/* Featured badge */}
            {project.featured && (
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold backdrop-blur-sm">
                Featured
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

            {/* Key result */}
            <div className="flex items-center gap-2 mb-4 text-sm text-foreground/80">
              <CheckCircle2 size={14} className="text-primary shrink-0" />
              {project.benefits[0]}
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-xs bg-surface-2 border border-border text-muted font-medium"
                >
                  {t}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-0.5 rounded-full text-xs bg-surface-2 border border-border text-muted">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              View Case Study <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function PortfolioPageContent({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active)

  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Work</span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Real Clients,{' '}
            <span className="gradient-text">Real Results</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Every project is a success story. Browse our portfolio of solutions delivered
            across healthcare, education, finance, retail, AI, and more.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-10"
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: `${featured.length}`,  label: 'Featured Case Studies' },
              { value: '8+',   label: 'Industries Served' },
              { value: '99%',  label: 'Client Satisfaction' },
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
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200',
                  active === cat
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-surface border-border text-muted hover:border-primary/40 hover:text-foreground'
                )}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </motion.button>
            ))}
          </div>

          {/* Count label */}
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-muted mb-8"
          >
            Showing{' '}
            <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'project' : 'projects'}
            {active !== 'All' && ` in ${active}`}
          </motion.p>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── "Start Your Project" CTA ── */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Want Your Business in Here?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted text-lg mb-8 max-w-xl mx-auto"
          >
            Every project starts with a conversation. Tell us your vision and we&apos;ll show you how we&apos;d bring it to life.
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
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
