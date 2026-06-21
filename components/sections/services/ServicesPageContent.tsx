'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, CheckCircle2,
  Globe, LayoutDashboard, Smartphone, Bot, TrendingUp, Search, Palette, Share2,
  type LucideIcon,
} from 'lucide-react'
import type { Service } from '@/types'
import { TiltCard } from '@/components/animations/TiltCard'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const SERVICE_ICONS: Record<string, LucideIcon> = {
  Globe, LayoutDashboard, Smartphone, Bot, TrendingUp, Search, Palette, Share2,
}

function ServiceIcon({ name, color }: { name: string; color: string }) {
  const Icon = SERVICE_ICONS[name] ?? Globe
  return (
    <div className={cn('w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5 shadow-lg shrink-0', color)}>
      <Icon size={28} className="text-white" />
    </div>
  )
}

const PROCESS_STEPS = [
  { step: '01', title: 'Discovery',  desc: 'Deep-dive into your goals, audience, and competition.' },
  { step: '02', title: 'Strategy',   desc: 'A tailored roadmap aligned to your business objectives.' },
  { step: '03', title: 'Design',     desc: 'Wireframes, prototypes, and polished visual designs.' },
  { step: '04', title: 'Build',      desc: 'Agile development with weekly progress updates.' },
  { step: '05', title: 'Launch',     desc: 'Deployment, training, and ongoing support.' },
]

export function ServicesPageContent({ services }: { services: Service[] }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">What We Do</span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Everything You Need to{' '}
            <span className="gradient-text">Win Online</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From strategy to execution, we cover every aspect of your digital presence.
            8 specialized services, one cohesive team, one shared goal — your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-10"
          >
            {[
              { value: '8',    label: 'Core Services' },
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+',  label: 'Happy Clients' },
              { value: '5+',   label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section-padding bg-surface/30 relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard>
                  <div className="glass-card p-8 h-full flex flex-col rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300 group">
                    <ServiceIcon name={service.icon} color={service.color} />

                    <h2 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                      {service.shortDescription}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-2 border border-border text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                    >
                      Explore service <ArrowRight size={15} />
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Deliver Excellence"
            description="A proven 5-step process refined across 150+ projects that ensures on-time delivery and exceptional quality."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < 4 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white font-display font-bold text-base mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Not sure which service you need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted mb-8 text-lg"
          >
            Talk to our experts — free. We&apos;ll recommend the right services for your goals and budget.
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
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View Our Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
