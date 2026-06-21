'use client'
import { motion } from 'framer-motion'
import { BookOpen, Rss, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const CATEGORIES = [
  { label: 'Web Development',    count: 12, color: 'from-blue-500 to-indigo-600' },
  { label: 'Digital Marketing',  count: 8,  color: 'from-green-500 to-emerald-600' },
  { label: 'AI & Automation',    count: 6,  color: 'from-violet-500 to-purple-600' },
  { label: 'Mobile Apps',        count: 5,  color: 'from-pink-500 to-rose-600' },
  { label: 'Business Growth',    count: 9,  color: 'from-amber-500 to-orange-600' },
  { label: 'Case Studies',       count: 4,  color: 'from-cyan-500 to-teal-600' },
]

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Insights & Resources</span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            The Barbarika{' '}
            <span className="gradient-text">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted mb-10 leading-relaxed"
          >
            Practical guides, case studies, and insights on software development,
            digital marketing, and growing your business with technology.
          </motion.p>

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl border border-primary/20 p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />

            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5">
              <BookOpen size={28} className="text-white" />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              Articles Coming Soon
            </h2>
            <p className="text-muted mb-6 max-w-sm mx-auto">
              We&apos;re busy writing in-depth guides and real case studies.
              Subscribe to get notified when we publish.
            </p>

            {/* Email subscribe */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-3 max-w-sm mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm text-foreground placeholder:text-muted outline-none focus:border-primary/50 transition-colors"
              />
              <Button variant="glow" size="md" icon={<Rss size={15} />} iconPosition="left">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="section-padding bg-surface/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Tag size={16} className="text-primary" />
            <h2 className="font-display font-bold text-foreground text-xl">Browse by Category</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group glass-card rounded-2xl border border-border p-5 hover:border-primary/30 transition-all cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3`}>
                  <BookOpen size={18} className="text-white" />
                </div>
                <div className="font-semibold text-foreground text-sm mb-0.5 group-hover:text-primary transition-colors">
                  {cat.label}
                </div>
                <div className="text-xs text-muted">{cat.count} articles</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Looking for something specific?
          </h2>
          <p className="text-muted mb-6">
            Check out our case studies in the portfolio, or talk to us directly about your challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/portfolio">
              <Button variant="glow" size="lg" icon={<ArrowRight size={17} />} iconPosition="right">
                View Case Studies
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">Talk to Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
