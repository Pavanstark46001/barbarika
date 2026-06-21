'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, CheckCircle2, TrendingUp, Search, Share2, Mail,
  BarChart3, Target, Zap, DollarSign, Star,
} from 'lucide-react'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { ScrollCounter } from '@/components/animations/ScrollCounter'
import { Button } from '@/components/ui/Button'
import { TiltCard } from '@/components/animations/TiltCard'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { ContactCTA } from '@/components/sections/home/ContactCTA'
import { CONTACT_WHATSAPP } from '@/lib/constants'
import { cn } from '@/lib/utils'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const CHANNELS = [
  {
    icon: Search,
    color: 'from-blue-500 to-indigo-600',
    title: 'Search Engine Optimization',
    desc: 'Rank on page 1 for high-intent keywords your buyers actually search. Technical SEO, content strategy, and authority link building.',
    metrics: ['10x organic traffic in 6 months', 'Page 1 rankings for 50+ keywords', 'Compound growth — no ongoing ad spend'],
  },
  {
    icon: Target,
    color: 'from-orange-500 to-red-600',
    title: 'Pay-Per-Click Advertising',
    desc: 'ROI-driven Google Ads and Meta Ads campaigns. Every rupee tracked, every campaign optimized for maximum returns.',
    metrics: ['3–8x ROAS on ad spend', 'Lower CPA with AI bid optimization', 'Weekly performance reporting'],
  },
  {
    icon: Share2,
    color: 'from-pink-500 to-rose-600',
    title: 'Social Media Marketing',
    desc: 'Build a loyal brand community on Instagram, LinkedIn, and Facebook with content that resonates and converts.',
    metrics: ['30% avg. engagement rate increase', 'Consistent brand voice across channels', 'Influencer partnerships & collaborations'],
  },
  {
    icon: TrendingUp,
    color: 'from-teal-500 to-green-600',
    title: 'Content Marketing',
    desc: 'Authority-building content — blogs, case studies, videos, and infographics — that educates prospects and drives organic traffic.',
    metrics: ['3x more inbound leads from content', 'Thought leadership in your niche', 'Long-form content optimized for search'],
  },
  {
    icon: Mail,
    color: 'from-violet-500 to-purple-600',
    title: 'Email Marketing',
    desc: 'Automated drip campaigns, newsletters, and lifecycle emails that nurture leads and retain customers at scale.',
    metrics: ['40–60% open rates (industry avg 20%)', 'Automated lead nurturing sequences', 'Personalized campaigns at scale'],
  },
  {
    icon: BarChart3,
    color: 'from-amber-500 to-orange-600',
    title: 'Analytics & Reporting',
    desc: 'Full-funnel attribution, custom dashboards, and monthly strategy reviews so you always know exactly what\'s working.',
    metrics: ['Live performance dashboards', 'Monthly deep-dive strategy reviews', 'Clear attribution across all channels'],
  },
]

const PACKAGES = [
  {
    name: 'Growth Starter',
    price: '₹25,000',
    period: '/month',
    desc: 'Perfect for businesses just beginning their digital marketing journey.',
    features: [
      { text: 'SEO (On-page + Technical)', included: true },
      { text: 'Social Media (2 platforms)', included: true },
      { text: 'Content (4 blog posts/month)', included: true },
      { text: 'Monthly performance report', included: true },
      { text: 'Google / Meta Ads management', included: false },
      { text: 'Email marketing automation', included: false },
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Scale Pro',
    price: '₹60,000',
    period: '/month',
    desc: 'Our most popular plan for businesses serious about fast, measurable growth.',
    features: [
      { text: 'Everything in Growth Starter', included: true },
      { text: 'Google Ads + Meta Ads (up to ₹1L ad spend)', included: true },
      { text: 'Email marketing automation', included: true },
      { text: 'Content (8 blogs + 2 videos/month)', included: true },
      { text: 'Dedicated growth manager', included: true },
      { text: 'Weekly performance calls', included: true },
    ],
    highlighted: true,
    cta: 'Most Popular — Start Now',
  },
  {
    name: 'Enterprise Growth',
    price: 'Custom',
    period: '',
    desc: 'Full-funnel marketing engine for established businesses and enterprises.',
    features: [
      { text: 'Everything in Scale Pro', included: true },
      { text: 'Unlimited ad budget management', included: true },
      { text: 'Influencer & PR campaigns', included: true },
      { text: 'Custom analytics dashboard', included: true },
      { text: 'Dedicated team of 5+ specialists', included: true },
      { text: 'CMO-level strategy consulting', included: true },
    ],
    highlighted: false,
    cta: 'Contact for Pricing',
  },
]

const RESULTS = [
  { end: 300, suffix: '%', label: 'Avg. traffic increase in 6 months' },
  { end: 50,  suffix: '%', label: 'Average reduction in cost per lead' },
  { end: 10,  suffix: 'x', label: 'Return on ad spend (ROAS) for top clients' },
  { end: 100, suffix: '+', label: 'Brands grown with our marketing' },
]

const PROCESS = [
  { num: '01', title: 'Full Audit',     desc: 'Deep analysis of your current digital presence, competitors, and opportunities.' },
  { num: '02', title: 'Strategy Build', desc: 'A custom 90-day growth roadmap aligned to your revenue goals.' },
  { num: '03', title: 'Execute',        desc: 'Campaign setup, content creation, and multi-channel launch.' },
  { num: '04', title: 'Optimize & Scale', desc: 'A/B testing, weekly optimization, and scaling what works.' },
]

export function DigitalMarketingContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Digital Marketing</span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Turn Your Digital Presence Into a{' '}
            <span className="gradient-text">Revenue Machine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Data-driven digital marketing that drives qualified leads, grows brand authority,
            and delivers measurable ROI — not vanity metrics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <MagneticButton>
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'd like a free digital marketing audit.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glow" size="xl" icon={<Zap size={20} />} iconPosition="left">
                  Get Free Marketing Audit
                </Button>
              </a>
            </MagneticButton>
            <Link href="/contact">
              <Button variant="secondary" size="xl">
                View Packages
              </Button>
            </Link>
          </motion.div>

          {/* Logos / proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {['Google Partner', 'Meta Business Partner', 'Google Analytics Certified', 'SEMrush Certified'].map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full text-xs font-semibold bg-surface border border-border text-muted">
                ✓ {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Results Stats ── */}
      <section className="py-20 bg-surface/50 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold gradient-text mb-2">
                  <ScrollCounter end={r.end} suffix={r.suffix} />
                </div>
                <div className="text-sm text-muted leading-tight">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Channels ── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Capabilities"
            title="6 Channels, One Unified Strategy"
            description="We don't do isolated tactics. Every channel works together as part of a unified growth engine designed for your business."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHANNELS.map((channel, i) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <TiltCard>
                  <div className="glass-card rounded-2xl border border-border p-7 h-full hover:border-primary/30 transition-colors group flex flex-col">
                    <div className={cn('w-13 h-13 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5 shadow-lg w-[52px] h-[52px]', channel.color)}>
                      <channel.icon size={24} className="text-white" />
                    </div>

                    <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{channel.desc}</p>

                    <ul className="space-y-1.5">
                      {channel.metrics.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-xs text-foreground/70">
                          <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-surface/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="From Audit to Results in 30 Days"
            description="Our battle-tested 4-step process gets results faster than traditional agencies."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white font-display font-bold mx-auto mb-4 text-sm shadow-lg shadow-primary/30">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Marketing Packages"
            title="Transparent Pricing, Real Results"
            description="No lock-in contracts. Month-to-month plans that scale with your growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PACKAGES.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'rounded-2xl border flex flex-col overflow-hidden transition-all duration-300',
                  plan.highlighted
                    ? 'border-primary/50 shadow-2xl shadow-primary/20 scale-[1.03]'
                    : 'border-border hover:border-primary/30'
                )}
              >
                {plan.highlighted && <div className="h-1 w-full gradient-primary" />}

                <div className="flex-1 p-7 bg-surface">
                  {plan.highlighted && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold">
                      <Star size={11} className="fill-current" /> Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted mb-5 leading-relaxed">{plan.desc}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-sm text-muted">{plan.period}</span>}
                    {!plan.period && (
                      <p className="text-xs text-muted mt-1">Tailored to your business scale</p>
                    )}
                  </div>

                  <a
                    href={
                      plan.name === 'Enterprise Growth'
                        ? '/contact'
                        : `https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'm interested in the ${plan.name} marketing plan.`
                    }
                    target={plan.name === 'Enterprise Growth' ? undefined : '_blank'}
                    rel={plan.name === 'Enterprise Growth' ? undefined : 'noopener noreferrer'}
                  >
                    <Button
                      variant={plan.highlighted ? 'glow' : 'secondary'}
                      fullWidth
                      size="lg"
                      className="mb-6"
                    >
                      {plan.cta}
                    </Button>
                  </a>

                  <div className="border-t border-border mb-5" />

                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className={cn('shrink-0 mt-0.5', f.included ? 'text-green' : 'text-muted-fg opacity-40')}
                        />
                        <span className={cn('text-sm leading-relaxed', !f.included && 'line-through text-muted-fg')}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted mt-8"
          >
            All plans are month-to-month with no long-term lock-in. Prices exclude GST.{' '}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Custom plans available
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* ── Free Audit CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-background to-accent/8" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary"
          >
            <Zap size={16} className="fill-primary" />
            <span className="text-sm font-bold">Limited Offer — Free Marketing Audit (₹15,000 Value)</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Get a Free Marketing Audit Worth ₹15,000
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted text-lg mb-8 max-w-xl mx-auto"
          >
            We&apos;ll audit your website, SEO, social media, and ad accounts — and show you exactly where you&apos;re leaving money on the table.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton>
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'd like to claim my free marketing audit.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glow" size="xl" icon={<WhatsAppIcon />} iconPosition="left">
                  Claim Free Audit on WhatsApp
                </Button>
              </a>
            </MagneticButton>
            <Link href="/contact">
              <Button variant="secondary" size="xl" icon={<ArrowRight size={18} />} iconPosition="right">
                Fill Contact Form
              </Button>
            </Link>
          </motion.div>
          <p className="text-xs text-muted mt-6">No commitment. No credit card. Just actionable insights.</p>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
