'use client'
import { motion } from 'framer-motion'
import {
  ShieldCheck, Zap, Users, HeartHandshake,
  LineChart, Clock, Award, Code2,
} from 'lucide-react'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { StaggerContainer, StaggerItem } from '@/components/animations/SlideUp'
import { ScrollCounter } from '@/components/animations/ScrollCounter'

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile sprints with weekly demos. Most projects delivered 20–30% faster than industry average.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: '50-point QA checklist. Every project goes through rigorous testing before delivery.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Code2,
    title: 'Clean, Scalable Code',
    description: 'Enterprise-grade architecture built to scale. From 100 to 100,000 users without rewrites.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    icon: LineChart,
    title: 'ROI Focused',
    description: 'We don\'t just build software — we build products that generate measurable business results.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'A full-stack team of designers, developers, and marketers — all under one roof.',
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership Mindset',
    description: 'We treat your business goals as our own. Long-term relationships over one-off projects.',
    color: 'from-rose-500 to-red-600',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Responsive support via WhatsApp, email, and dedicated Slack channel. Never left hanging.',
    color: 'from-teal-500 to-green-600',
  },
  {
    icon: Award,
    title: 'Domain Expertise',
    description: 'Deep domain knowledge in healthcare, education, finance, and retail — not just generic development.',
    color: 'from-yellow-500 to-amber-600',
  },
]

const bigStats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', description: 'Across 10+ industries' },
  { value: 99,  suffix: '%', label: 'Client Satisfaction', description: 'Measured post-delivery' },
  { value: 70,  suffix: '%', label: 'Cost Reduction', description: 'Average for automation clients' },
  { value: 300, suffix: '%', label: 'Traffic Growth', description: 'Average for SEO clients' },
]

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-surface/50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      {/* Decorative blob */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Why Barbarika"
          title="The Agency That Delivers, Not Just Promises"
          description="We've heard the horror stories — missed deadlines, buggy software, ghost developers. We built Barbarika to be the agency we wished we had."
        />

        {/* Feature grid */}
        <StaggerContainer stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <StaggerItem key={reason.title}>
                <div className="group bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{reason.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Big stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bigStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative text-center p-6 rounded-2xl overflow-hidden group"
            >
              {/* Gradient bg */}
              <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="absolute inset-0 border border-primary/10 rounded-2xl group-hover:border-primary/30 transition-colors" />

              <div className="relative">
                <div className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-1">
                  <ScrollCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
