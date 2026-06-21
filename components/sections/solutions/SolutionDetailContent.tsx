'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, ChevronRight, CheckCircle2,
  Hospital, Stethoscope, School, GraduationCap, Banknote, Users2,
  ShoppingCart, HardHat, Bot, Building2,
  type LucideIcon,
} from 'lucide-react'
import type { Solution } from '@/types'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { TiltCard } from '@/components/animations/TiltCard'
import { ContactCTA } from '@/components/sections/home/ContactCTA'
import { CONTACT_WHATSAPP } from '@/lib/constants'
import { cn } from '@/lib/utils'

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  Hospital, Stethoscope, School, GraduationCap, Banknote, Users2,
  ShoppingCart, HardHat, Bot, Building2,
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

interface Props {
  solution: Solution
  related: Solution[]
}

export function SolutionDetailContent({ solution, related }: Props) {
  const Icon = SOLUTION_ICONS[solution.icon] ?? Building2

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent/6 blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-muted mb-10"
          >
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={14} className="text-muted-fg" />
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <ChevronRight size={14} className="text-muted-fg" />
            <span className="text-foreground font-medium">{solution.title}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className={cn(
                  'inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br shadow-2xl',
                  solution.color
                )}>
                  <Icon size={40} className="text-white" />
                </div>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-surface border border-border text-muted">
                  {solution.industry}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 leading-tight"
              >
                {solution.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-lg text-muted leading-relaxed mb-8"
              >
                {solution.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton>
                  <a
                    href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'm interested in your ${solution.title} solution.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="glow" size="lg" icon={<WhatsAppIcon />} iconPosition="left">
                      Discuss on WhatsApp
                    </Button>
                  </a>
                </MagneticButton>
                <Link href="/contact">
                  <Button variant="secondary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Request a Demo
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glass rounded-2xl border border-border p-8">
                <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">
                  Built With
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {solution.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-xl text-sm font-medium bg-surface-2 border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-border pt-6 space-y-3">
                  {[
                    'Custom development, fully owned by you',
                    'Scalable cloud architecture',
                    'Dedicated support & maintenance',
                    'On-site training included',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-padding bg-surface/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Modules & Features"
            title="Everything You Need, Nothing You Don't"
            description="Purpose-built modules designed specifically for the challenges of your industry."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solution.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <TiltCard>
                  <div className="glass-card rounded-2xl border border-border p-6 h-full hover:border-primary/30 transition-colors group">
                    {/* Colored number badge */}
                    <div className={cn(
                      'w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white text-sm font-display font-bold mb-4 shadow-md',
                      solution.color
                    )}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{feat.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Custom ── */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl border border-primary/20 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Why Custom Over Off-the-Shelf?
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Generic software is built for everyone — and serves no one perfectly. Our solutions
                  are tailored to your exact workflows, terminology, and compliance needs.
                </p>
                <Link href="/contact">
                  <Button variant="glow" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Let&apos;s Build Yours
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Fits Your Workflow',        desc: 'Built around how your team actually works, not how generic software assumes.' },
                  { title: 'You Own the Code',          desc: 'No vendor lock-in, no recurring license fees. Full source code ownership.' },
                  { title: 'Scales with You',           desc: 'Start small, add modules as you grow. Infinitely scalable architecture.' },
                  { title: 'Industry Compliance Ready', desc: 'Built with sector-specific regulations, certifications, and standards.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-0.5">{item.title}</div>
                      <div className="text-xs text-muted leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Solutions ── */}
      {related.length > 0 && (
        <section className="section-padding bg-surface/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="More Solutions"
              title="Other Solutions You Might Need"
              description="We build a full ecosystem of solutions that can work together seamlessly."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((rel, i) => {
                const RelIcon = SOLUTION_ICONS[rel.icon] ?? Building2
                return (
                  <motion.div
                    key={rel.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/solutions/${rel.slug}`} className="block h-full">
                      <div className="glass-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                        <div className={cn(
                          'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-md',
                          rel.color
                        )}>
                          <RelIcon size={22} className="text-white" />
                        </div>
                        <span className="text-xs font-semibold text-muted mb-2">{rel.industry}</span>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {rel.title}
                        </h3>
                        <p className="text-sm text-muted mb-4 leading-relaxed flex-1">{rel.shortDescription}</p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all mt-auto">
                          View Solution <ArrowRight size={13} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <div className="text-center mt-10">
              <Link href="/solutions">
                <Button variant="secondary" size="md" icon={<ArrowLeft size={16} />} iconPosition="left">
                  All Solutions
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
