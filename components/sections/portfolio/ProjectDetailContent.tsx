'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react'
import type { Project } from '@/types'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { ContactCTA } from '@/components/sections/home/ContactCTA'
import { CONTACT_WHATSAPP } from '@/lib/constants'
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

const CATEGORY_EMOJI: Record<string, string> = {
  Healthcare: '🏥', Education: '🎓', Construction: '🏗️',
  Retail: '🛍️', Finance: '💰', AI: '🤖',
  Restaurant: '🍽️', 'Real Estate': '🏢', Travel: '✈️',
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

interface Props {
  project: Project
  related: Project[]
}

export function ProjectDetailContent({ project, related }: Props) {
  const gradient = CATEGORY_GRADIENT[project.category] ?? 'from-primary to-accent'
  const emoji = CATEGORY_EMOJI[project.category] ?? '💼'

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
        <div className={cn('absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[180px] opacity-10 pointer-events-none bg-gradient-to-br', gradient)} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-muted mb-10"
          >
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={14} className="text-muted-fg" />
            <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
            <ChevronRight size={14} className="text-muted-fg" />
            <span className="text-foreground font-medium truncate max-w-[200px]">{project.title}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className={cn(
                  'px-3 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r',
                  gradient
                )}>
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1.5 rounded-full text-sm font-semibold border border-primary/40 text-primary">
                    Featured Project
                  </span>
                )}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5 leading-tight"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-lg text-muted leading-relaxed mb-8"
              >
                {project.longDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton>
                  <a
                    href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I saw your ${project.title} case study and I'd like to build something similar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="glow" size="lg" icon={<WhatsAppIcon />} iconPosition="left">
                      Build Something Similar
                    </Button>
                  </a>
                </MagneticButton>
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" icon={<ExternalLink size={16} />} iconPosition="right">
                      Live Demo
                    </Button>
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right: visual mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={cn(
                'relative rounded-3xl overflow-hidden h-80 bg-gradient-to-br flex flex-col items-center justify-center shadow-2xl',
                gradient
              )}>
                {/* Grid overlay */}
                <div className="absolute inset-0 grid-pattern opacity-20" />
                {/* Orbs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/15 blur-2xl" />

                {/* Floating "browser" frame */}
                <div className="relative z-10 w-64 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 overflow-hidden shadow-xl">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2.5 bg-black/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <div className="flex-1 ml-2 h-4 rounded-full bg-white/20" />
                  </div>
                  {/* Content lines */}
                  <div className="p-4 space-y-2">
                    <div className="h-3 rounded-full bg-white/30 w-4/5" />
                    <div className="h-3 rounded-full bg-white/20 w-3/5" />
                    <div className="h-3 rounded-full bg-white/15 w-4/5" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="h-8 rounded-lg bg-white/20" />
                      ))}
                    </div>
                    <div className="h-3 rounded-full bg-white/15 w-2/3 mt-2" />
                    <div className="h-3 rounded-full bg-white/20 w-3/4" />
                  </div>
                </div>

                <span className="absolute bottom-5 text-white/60 text-xs font-medium">{project.category} Platform</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Results / Benefits ── */}
      <section className="section-padding bg-surface/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Results"
            title="Measurable Business Impact"
            description="Every solution we build is measured by the results it delivers to the business."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {project.benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  'relative rounded-2xl border p-6 overflow-hidden',
                  i === 0 ? 'border-primary/30 bg-primary/5' : 'border-border bg-surface'
                )}
              >
                <div className={cn(
                  'absolute top-0 left-0 right-0 h-0.5',
                  i === 0 ? 'gradient-primary' : `bg-gradient-to-r ${gradient} opacity-50`
                )} />
                <CheckCircle2
                  size={22}
                  className={cn('mb-3', i === 0 ? 'text-primary' : 'text-primary/60')}
                />
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technology"
            title="What We Built It With"
            description="A carefully chosen tech stack optimized for performance, scalability, and maintainability."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="px-5 py-3 rounded-2xl text-sm font-semibold bg-surface border border-border text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process highlight ── */}
      <section className="section-padding bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'rounded-3xl p-10 md:p-14 relative overflow-hidden bg-gradient-to-br',
            gradient
          )}>
            <div className="absolute inset-0 grid-pattern opacity-15" />
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-5xl mb-4 block">{emoji}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Want a Similar Solution for Your Business?
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  We&apos;ve built this kind of solution before — and we can build it better,
                  faster, and tailored to your exact requirements.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I want to build something like ${project.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:bg-white/90 transition-colors"
                  >
                    <WhatsAppIcon />
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 border border-white/30 text-white font-semibold text-sm hover:bg-white/30 transition-colors"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: '2-4',  unit: 'weeks',   label: 'Discovery & Design' },
                  { num: '8-16', unit: 'weeks',   label: 'Development' },
                  { num: '100%', unit: 'owned',   label: 'Source Code Ownership' },
                  { num: '1yr',  unit: 'support', label: 'Free Maintenance' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="text-2xl font-display font-bold text-white">
                      {item.num}<span className="text-sm text-white/60 ml-1">{item.unit}</span>
                    </div>
                    <div className="text-xs text-white/70 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Projects ── */}
      {related.length > 0 && (
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="More Case Studies"
              title="You May Also Like"
              description="Explore more success stories from our growing portfolio."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((rel, i) => {
                const relGrad = CATEGORY_GRADIENT[rel.category] ?? 'from-primary to-accent'
                const relEmoji = CATEGORY_EMOJI[rel.category] ?? '💼'
                return (
                  <motion.div
                    key={rel.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/portfolio/${rel.slug}`} className="block group">
                      <div className="rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                        <div className={cn('h-32 bg-gradient-to-br flex items-center justify-center relative overflow-hidden', relGrad)}>
                          <div className="absolute inset-0 grid-pattern opacity-20" />
                          <span className="text-4xl relative z-10">{relEmoji}</span>
                          <span className="absolute bottom-2 right-3 text-white/60 text-xs font-semibold">{rel.category}</span>
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">
                            {rel.title}
                          </h3>
                          <p className="text-xs text-muted mb-3 leading-relaxed">{rel.description}</p>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                            View Case Study <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <div className="text-center mt-10">
              <Link href="/portfolio">
                <Button variant="secondary" size="md" icon={<ArrowLeft size={16} />} iconPosition="left">
                  All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  )
}
