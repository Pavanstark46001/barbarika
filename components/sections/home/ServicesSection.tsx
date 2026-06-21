'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Globe, LayoutDashboard, Smartphone, Bot, TrendingUp,
  Search, Palette, Share2, ArrowUpRight, Check,
} from 'lucide-react'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { TiltCard } from '@/components/animations/TiltCard'
import { StaggerContainer, StaggerItem } from '@/components/animations/SlideUp'
import { services } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe, LayoutDashboard, Smartphone, Bot, TrendingUp, Search, Palette, Share2,
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  'from-indigo-500 to-violet-600': { bg: 'from-indigo-500/10 to-violet-600/10', text: 'text-indigo-400', border: 'hover:border-indigo-500/40' },
  'from-blue-500 to-cyan-500':     { bg: 'from-blue-500/10 to-cyan-500/10',     text: 'text-blue-400',   border: 'hover:border-blue-500/40' },
  'from-violet-500 to-purple-600': { bg: 'from-violet-500/10 to-purple-600/10', text: 'text-violet-400', border: 'hover:border-violet-500/40' },
  'from-emerald-500 to-teal-600':  { bg: 'from-emerald-500/10 to-teal-600/10',  text: 'text-emerald-400', border: 'hover:border-emerald-500/40' },
  'from-orange-500 to-rose-500':   { bg: 'from-orange-500/10 to-rose-500/10',   text: 'text-orange-400', border: 'hover:border-orange-500/40' },
  'from-sky-500 to-blue-600':      { bg: 'from-sky-500/10 to-blue-600/10',      text: 'text-sky-400',    border: 'hover:border-sky-500/40' },
  'from-pink-500 to-rose-600':     { bg: 'from-pink-500/10 to-rose-600/10',     text: 'text-pink-400',   border: 'hover:border-pink-500/40' },
  'from-fuchsia-500 to-pink-600':  { bg: 'from-fuchsia-500/10 to-pink-600/10', text: 'text-fuchsia-400', border: 'hover:border-fuchsia-500/40' },
}

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything You Need to Dominate Digital"
          description="From custom software to AI automation and full-funnel marketing — we build digital products that drive measurable business results."
        />

        <StaggerContainer stagger={0.07} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe
            const colors = colorMap[service.color] || colorMap['from-indigo-500 to-violet-600']

            return (
              <StaggerItem key={service.id}>
                <TiltCard tiltStrength={8} scale={1.02} className="h-full">
                  <div className={`h-full bg-surface border border-border rounded-2xl p-6 flex flex-col transition-all duration-300 ${colors.border} hover:shadow-lg hover:shadow-black/20 group`}>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-foreground mb-2 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                      {service.shortDescription}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-5">
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-xs text-muted">
                          <Check size={12} className={`${colors.text} shrink-0 mt-0.5`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} hover:gap-2.5 transition-all duration-200 group/link`}
                    >
                      <span>Explore service</span>
                      <ArrowUpRight size={15} className="group-hover/link:rotate-45 transition-transform duration-200" />
                    </Link>
                  </div>
                </TiltCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border bg-surface hover:border-primary/50 hover:bg-primary/5 text-sm font-semibold text-foreground transition-all duration-300 group"
          >
            View All Services
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
