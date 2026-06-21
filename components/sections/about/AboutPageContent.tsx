'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Award, Users, Rocket, Heart, TrendingUp, Shield } from 'lucide-react'
import { teamMembers } from '@/data/team'
import { Avatar } from '@/components/ui/Avatar'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { ScrollCounter } from '@/components/animations/ScrollCounter'
import { Button } from '@/components/ui/Button'
import { TiltCard } from '@/components/animations/TiltCard'

// Inline SVG social icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const MILESTONES = [
  { year: '2019', title: 'Founded',            desc: 'Barbarika was born with a mission to make world-class tech accessible to Indian businesses.' },
  { year: '2020', title: 'First Big Client',   desc: 'Delivered a hospital management system for a 200-bed hospital — our flagship case study.' },
  { year: '2021', title: 'Digital Marketing',  desc: 'Expanded into full-stack digital marketing. Clients started seeing 10x organic growth.' },
  { year: '2022', title: '50+ Projects',       desc: 'Crossed 50 successful project deliveries across 6 industries in just 3 years.' },
  { year: '2023', title: 'AI Division',        desc: 'Launched dedicated AI & ML division. Built first GPT-4 powered sales agent.' },
  { year: '2024', title: '150+ Projects',      desc: 'Serving 50+ active clients across India with a team of 30+ specialists.' },
]

const VALUES = [
  { icon: Users,     title: 'Client-First Always',       desc: 'Every decision starts with one question: what\'s best for our client?' },
  { icon: Award,     title: 'Quality Over Speed',        desc: 'We never compromise on quality. Better to take an extra week than to ship something mediocre.' },
  { icon: Shield,    title: 'Radical Transparency',      desc: 'No hidden costs, no surprises. We communicate openly about timelines, challenges, and trade-offs.' },
  { icon: Rocket,    title: 'Innovation at Core',        desc: 'We adopt new technologies early and build with future scalability in mind.' },
  { icon: TrendingUp,title: 'Data-Driven Decisions',     desc: 'We measure everything. Every recommendation is backed by data, not gut feel.' },
  { icon: Heart,     title: 'Long-Term Partnerships',   desc: 'We build for the long run. Our clients stay with us for years, not just one project.' },
]

export function AboutPageContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Story</span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            We Build Technology That{' '}
            <span className="gradient-text">Moves Businesses Forward</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted max-w-3xl mx-auto mb-14 leading-relaxed"
          >
            Barbarika was founded on a simple belief: that every business — regardless of size or
            budget — deserves access to world-class technology and marketing. We&apos;re a team of
            builders, designers, marketers, and AI engineers on a mission to make that happen.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { end: 150, suffix: '+', label: 'Projects Delivered' },
              { end: 50,  suffix: '+', label: 'Happy Clients' },
              { end: 30,  suffix: '+', label: 'Team Members' },
              { end: 5,   suffix: '+', label: 'Years in Business' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-display font-bold gradient-text">
                  <ScrollCounter end={s.end} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our Story / Timeline ── */}
      <section className="section-padding bg-surface/40 relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Journey"
            title="How We Got Here"
            description="From a 2-person startup to a 30+ member team trusted by 50+ businesses across India."
          />

          <div className="relative">
            {/* Central line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-cyan/40 hidden sm:block" />

            <div className="space-y-6">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="sm:pl-24 relative"
                >
                  {/* Year bubble */}
                  <div className="hidden sm:flex absolute left-0 top-4 w-16 h-16 rounded-2xl gradient-primary items-center justify-center text-white font-display font-bold text-sm shadow-lg shadow-primary/30">
                    {m.year}
                  </div>

                  <div className="glass rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="sm:hidden px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                        {m.year}
                      </span>
                      <h3 className="font-bold text-foreground">{m.title}</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Core Values"
            description="The principles that guide every decision we make, every line of code we write, every campaign we run."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <TiltCard>
                  <div className="glass-card rounded-2xl border border-border p-7 h-full hover:border-primary/30 transition-colors group">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                      <value.icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding bg-surface/40 relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="The People"
            title="Meet the Team Behind Barbarika"
            description="A passionate team of builders, designers, marketers, and AI engineers united by a shared mission."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              >
                <TiltCard>
                  <div className="glass-card rounded-2xl border border-border p-7 h-full hover:border-primary/30 transition-colors text-center group">
                    {/* Avatar */}
                    <div className="flex justify-center mb-4">
                      <Avatar
                        src={member.avatar}
                        alt={member.name}
                        fallback={member.name}
                        size="xl"
                      />
                    </div>

                    <h3 className="font-bold text-foreground text-lg mb-0.5 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted leading-relaxed mb-5">{member.bio}</p>

                    {/* Socials */}
                    <div className="flex justify-center gap-2">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/40 transition-all"
                          aria-label="LinkedIn"
                        >
                          <LinkedInIcon />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/40 transition-all"
                          aria-label="X / Twitter"
                        >
                          <XIcon />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/40 transition-all"
                          aria-label="GitHub"
                        >
                          <GitHubIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Work With Us ── */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Barbarika</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Not Just Another Agency —
                <span className="gradient-text"> A Long-Term Technology Partner</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                We don&apos;t disappear after project delivery. We stay involved, iterate based on
                real usage, and scale solutions as your business grows. Our success is measured by your success.
              </p>
              <ul className="space-y-4">
                {[
                  'Dedicated project manager for every client',
                  'Weekly sprint updates with live demos',
                  '1-year free bug-fix warranty on all projects',
                  'Source code fully owned by you',
                  'Priority support via WhatsApp & email',
                  'Post-launch training and documentation',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Big quote card */}
              <div className="glass rounded-3xl border border-primary/20 p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />
                <div className="text-6xl text-primary/20 font-display font-bold leading-none mb-4">&ldquo;</div>
                <blockquote className="text-xl text-foreground font-medium leading-relaxed mb-6">
                  Our hospital&apos;s digital transformation would not have been possible without Barbarika.
                  They didn&apos;t just build software — they understood our workflows and built something our doctors and nurses actually love using.
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar alt="Dr. Ramesh Gupta" fallback="DR" size="md" />
                  <div>
                    <div className="font-bold text-foreground text-sm">Dr. Ramesh Gupta</div>
                    <div className="text-xs text-muted">Medical Director, MedCare Hospitals</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted text-lg mb-8"
          >
            Let&apos;s start with a free 30-minute discovery call and see if we&apos;re a good fit.
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
                Book a Free Call
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
