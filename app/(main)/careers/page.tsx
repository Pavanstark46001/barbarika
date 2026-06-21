'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Briefcase, MapPin, Clock, ArrowRight, Heart, Rocket,
  Users, Globe, Zap, Coffee, CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/constants'

const PERKS = [
  { icon: Globe,   title: 'Remote-First',        desc: 'Work from anywhere in India. We care about output, not location.' },
  { icon: Rocket,  title: 'Fast Growth',          desc: 'Join early and grow fast. We promote from within based on merit.' },
  { icon: Heart,   title: 'Health & Wellness',    desc: 'Medical insurance for you and your family, plus wellness allowance.' },
  { icon: Coffee,  title: 'Flexible Hours',       desc: 'No rigid 9–5. We trust you to manage your time and deliver results.' },
  { icon: Zap,     title: 'Latest Tech',          desc: 'Work with cutting-edge tools — React, AI, cloud infrastructure.' },
  { icon: Users,   title: 'Great Team',           desc: 'Collaborate with talented people who are passionate about their craft.' },
]

const OPEN_ROLES = [
  {
    title: 'Full-Stack Developer',
    type: 'Full-time',
    location: 'Remote (India)',
    department: 'Engineering',
    experience: '2–5 years',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    department: 'Design',
    experience: '2–4 years',
    skills: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
  },
  {
    title: 'Mobile App Developer',
    type: 'Full-time',
    location: 'Remote (India)',
    department: 'Engineering',
    experience: '2–4 years',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    title: 'Digital Marketing Manager',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    department: 'Marketing',
    experience: '3–6 years',
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'],
  },
  {
    title: 'AI / ML Engineer',
    type: 'Full-time',
    location: 'Remote (India)',
    department: 'AI Division',
    experience: '2–5 years',
    skills: ['Python', 'LLMs', 'LangChain', 'Vector DBs'],
  },
  {
    title: 'Business Development Executive',
    type: 'Full-time',
    location: 'Hyderabad',
    department: 'Sales',
    experience: '1–3 years',
    skills: ['B2B Sales', 'CRM', 'Proposal Writing', 'Client Relations'],
  },
]

const DEPT_COLOR: Record<string, string> = {
  Engineering: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Design:      'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Marketing:   'bg-green-500/10 text-green-400 border-green-500/20',
  'AI Division':'bg-violet-500/10 text-violet-400 border-violet-500/20',
  Sales:       'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">We&apos;re Hiring</span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Build the Future{' '}
            <span className="gradient-text">With Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Join a team of builders, designers, and marketers on a mission to make
            world-class technology accessible to every Indian business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-4 justify-center text-sm text-muted"
          >
            {[
              `${OPEN_ROLES.length} Open Positions`,
              'Remote-First Culture',
              'Competitive Salaries',
              'Hyderabad HQ',
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-primary" />{t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="section-padding bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Barbarika"
            title="A Place Where Great Work Happens"
            description="We've built the culture we always wanted to work in — one that values craft, autonomy, and impact."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="glass-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <perk.icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1.5">{perk.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section className="section-padding bg-background" id="roles">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Open Positions"
            title={`${OPEN_ROLES.length} Roles Available`}
            description="Don't see a perfect fit? Send us your resume anyway — we're always looking for exceptional people."
          />

          <div className="space-y-4">
            {OPEN_ROLES.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group glass-card rounded-2xl border border-border p-6 hover:border-primary/40 transition-all cursor-default"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap mb-2">
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {role.title}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${DEPT_COLOR[role.department]}`}>
                        {role.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                      <span className="flex items-center gap-1.5"><Briefcase size={13} />{role.experience}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={13} />{role.location}</span>
                      <span className="flex items-center gap-1.5"><Clock size={13} />{role.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded text-xs bg-surface-2 border border-border text-muted">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Application: ${role.title}&body=Hi Barbarika Team,%0D%0A%0D%0AI am interested in the ${role.title} position.`}
                    className="shrink-0"
                  >
                    <Button variant="secondary" size="sm" icon={<ArrowRight size={14} />} iconPosition="right">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Open application */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 rounded-2xl border border-dashed border-primary/30 bg-primary/4 text-center"
          >
            <h3 className="font-bold text-foreground mb-2">Don&apos;t see your role?</h3>
            <p className="text-sm text-muted mb-4">
              We&apos;re always looking for talented people. Send us your portfolio or resume and we&apos;ll reach out when the right role opens.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}?subject=Open Application — ${SITE_NAME}`}>
              <Button variant="glow" size="md">Send Open Application</Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-surface/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Hiring Process"
            title="Simple. Fast. Respectful."
            description="We respect your time. Our process is designed to be quick and give you a real feel for the work."
          />
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Apply',        desc: 'Send your resume & portfolio' },
              { step: '02', title: 'Screening',    desc: '30-min culture fit call' },
              { step: '03', title: 'Assignment',   desc: 'Small paid take-home task' },
              { step: '04', title: 'Offer',        desc: 'Decision within 48 hours' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl border border-border p-5 text-center"
              >
                <div className="text-2xl font-display font-black gradient-text mb-2">{s.step}</div>
                <div className="font-bold text-foreground text-sm mb-1">{s.title}</div>
                <div className="text-xs text-muted">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
