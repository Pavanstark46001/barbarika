'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { TiltCard } from '@/components/animations/TiltCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { projects, projectCategories } from '@/data/portfolio'
import { cn } from '@/lib/utils'
import type { ProjectCategory } from '@/types'

const categoryGradients: Record<string, string> = {
  Healthcare:    'from-red-600 to-rose-700',
  Education:     'from-blue-600 to-indigo-700',
  Finance:       'from-emerald-600 to-teal-700',
  Retail:        'from-cyan-600 to-sky-700',
  AI:            'from-teal-600 to-green-700',
  Construction:  'from-yellow-600 to-amber-700',
  'Real Estate': 'from-slate-600 to-stone-700',
  Restaurant:    'from-orange-600 to-red-700',
}

const displayCategories: ProjectCategory[] = ['All', 'Healthcare', 'Education', 'Finance', 'Retail', 'AI', 'Construction']

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')

  const filtered = activeCategory === 'All'
    ? projects.filter((p) => p.featured).slice(0, 6)
    : projects.filter((p) => p.category === activeCategory).slice(0, 6)

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Portfolio"
          title="Real Projects. Measurable Results."
          description="We don't just build software — we build products that generate ROI. Here's proof from clients who trusted us."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {displayCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-surface border border-border text-muted hover:text-foreground hover:border-primary/40'
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard tiltStrength={6} scale={1.02} className="h-full">
                  <div className="h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group flex flex-col">
                    {/* Image placeholder */}
                    <div className={`relative h-48 bg-gradient-to-br ${categoryGradients[project.category] || 'from-indigo-600 to-violet-700'} overflow-hidden`}>
                      {/* Abstract pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-white/20 blur-xl" />
                        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                        <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-white/30 blur-lg -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <Badge variant="default" className="bg-black/30 border-white/20 text-white text-xs backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Link href={`/portfolio/${project.slug}`}>
                          <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2">
                            View Details <ExternalLink size={14} />
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-primary-light transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Key result */}
                      {project.benefits[0] && (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-green/5 border border-green/20 mb-4">
                          <span className="text-green text-lg">↑</span>
                          <span className="text-xs font-medium text-foreground">{project.benefits[0]}</span>
                        </div>
                      )}

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium px-2 py-0.5 rounded-md bg-surface-2 border border-border text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-xs text-muted-fg">+{project.techStack.length - 4}</span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3">
                        <Link href={`/portfolio/${project.slug}`} className="flex-1">
                          <Button variant="secondary" size="sm" fullWidth>
                            Case Study
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" size="sm">
                            Build Similar
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button variant="outline" size="lg" icon={<ArrowUpRight size={18} />} iconPosition="right">
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
