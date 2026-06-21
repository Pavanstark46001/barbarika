'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronRight,
  Globe, LayoutDashboard, Smartphone, Bot, TrendingUp, Search, Palette, Share2,
  Zap, Database, Lock, BarChart3, RefreshCw, Layers, Wifi, Bell, ShieldCheck,
  Brain, Workflow, MessageSquare, Target, BarChart2, Megaphone, DollarSign,
  Code, FileText, Link as LinkIcon, MapPin, Users, Layout, PenTool, Calendar,
  MessageCircle, LineChart, Shield,
  type LucideIcon,
} from 'lucide-react'
import type { Service } from '@/types'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { Button } from '@/components/ui/Button'
import { TiltCard } from '@/components/animations/TiltCard'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { ContactCTA } from '@/components/sections/home/ContactCTA'
import { CONTACT_WHATSAPP } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, LucideIcon> = {
  Globe, LayoutDashboard, Smartphone, Bot, TrendingUp, Search, Palette, Share2,
  Zap, Database, Lock, BarChart3, RefreshCw, Layers, Wifi, Bell, ShieldCheck,
  Brain, Workflow, MessageSquare, Target, BarChart2, Megaphone, DollarSign,
  Code, FileText, Link: LinkIcon, MapPin, Users, Layout, PenTool, Calendar,
  MessageCircle, LineChart, Shield,
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function DynIcon({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  const Icon = ICON_MAP[name] ?? Globe
  return <Icon size={size} className={className} />
}

interface Props {
  service: Service
  related: Service[]
}

export function ServiceDetailContent({ service, related }: Props) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/6 blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-muted mb-10"
          >
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={14} className="text-muted-fg" />
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <ChevronRight size={14} className="text-muted-fg" />
            <span className="text-foreground font-medium">{service.title}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: content */}
            <div>
              {/* Icon badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className={cn(
                  'inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br shadow-2xl mb-8',
                  service.color
                )}
              >
                <DynIcon name={service.icon} size={40} className="text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 leading-tight"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-lg text-muted leading-relaxed mb-8"
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton>
                  <a
                    href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'm interested in ${service.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="glow" size="lg" icon={<WhatsAppIcon />} iconPosition="left">
                      Start on WhatsApp
                    </Button>
                  </a>
                </MagneticButton>
                <Link href="/contact">
                  <Button variant="secondary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Get a Quote
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: quick stats + tech */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              {/* Technologies */}
              <div className="glass rounded-2xl border border-border p-6">
                <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
                  Technologies We Use
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-surface-2 border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits quick list */}
              <div className="glass rounded-2xl border border-border p-6">
                <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
                  Key Benefits
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="section-padding bg-surface/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What's Included"
            title="Core Capabilities"
            description="Everything you need for a successful outcome, built into every engagement."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard>
                  <div className="glass-card rounded-2xl border border-border p-6 h-full hover:border-primary/30 transition-colors group">
                    <div className={cn(
                      'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-md',
                      service.color
                    )}>
                      <DynIcon name={feat.icon} size={22} className="text-white" />
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

      {/* ── Process Timeline ── */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="Our Delivery Process"
            description="A structured approach that keeps you informed and in control every step of the way."
          />
          <div className="space-y-4">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                {/* Connector line */}
                {i < service.process.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />
                )}
                {/* Step number circle */}
                <div className={cn(
                  'absolute left-0 top-4 w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-display font-bold shadow-lg shadow-primary/20',
                  service.color
                )}>
                  {step.step}
                </div>
                <div className="glass rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors">
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      {related.length > 0 && (
        <section className="section-padding bg-surface/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Explore More"
              title="Related Services"
              description="We offer a full suite of services to cover your complete digital journey."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((rel, i) => {
                const RelIcon = ICON_MAP[rel.icon] ?? Globe
                return (
                  <motion.div
                    key={rel.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/services/${rel.slug}`} className="block">
                      <div className="glass-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full">
                        <div className={cn(
                          'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-md',
                          rel.color
                        )}>
                          <RelIcon size={22} className="text-white" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {rel.title}
                        </h3>
                        <p className="text-sm text-muted mb-4 leading-relaxed">{rel.shortDescription}</p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                          Learn more <ArrowRight size={13} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <div className="text-center mt-10">
              <Link href="/services">
                <Button variant="secondary" size="md" icon={<ArrowLeft size={16} />} iconPosition="left">
                  All Services
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
