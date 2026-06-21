'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart, GraduationCap, HardHat, ShoppingBag, UtensilsCrossed,
  Banknote, Building2, Rocket, Briefcase, Building, ArrowUpRight, Stethoscope,
} from 'lucide-react'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { StaggerContainer, StaggerItem } from '@/components/animations/SlideUp'

const industries = [
  {
    id: 'hospitals',
    name: 'Hospitals & Clinics',
    icon: Stethoscope,
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-500/10',
    textColor: 'text-red-400',
    borderColor: 'hover:border-red-500/40',
    solutions: 3,
    href: '/solutions?industry=Healthcare',
  },
  {
    id: 'schools',
    name: 'Schools',
    icon: Building,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    borderColor: 'hover:border-blue-500/40',
    solutions: 2,
    href: '/solutions?industry=Education',
  },
  {
    id: 'colleges',
    name: 'Colleges & Universities',
    icon: GraduationCap,
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-500/10',
    textColor: 'text-violet-400',
    borderColor: 'hover:border-violet-500/40',
    solutions: 2,
    href: '/solutions?industry=Education',
  },
  {
    id: 'construction',
    name: 'Construction Companies',
    icon: HardHat,
    color: 'from-yellow-500 to-amber-600',
    bgColor: 'bg-yellow-500/10',
    textColor: 'text-yellow-400',
    borderColor: 'hover:border-yellow-500/40',
    solutions: 2,
    href: '/solutions?industry=Construction',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Businesses',
    icon: ShoppingBag,
    color: 'from-cyan-500 to-sky-600',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/40',
    solutions: 2,
    href: '/solutions?industry=Retail',
  },
  {
    id: 'restaurants',
    name: 'Restaurants & F&B',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400',
    borderColor: 'hover:border-orange-500/40',
    solutions: 1,
    href: '/solutions',
  },
  {
    id: 'finance',
    name: 'Finance & NBFCs',
    icon: Banknote,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/40',
    solutions: 2,
    href: '/solutions?industry=Finance',
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: Building2,
    color: 'from-stone-500 to-slate-600',
    bgColor: 'bg-slate-500/10',
    textColor: 'text-slate-400',
    borderColor: 'hover:border-slate-500/40',
    solutions: 2,
    href: '/solutions?industry=Construction',
  },
  {
    id: 'startups',
    name: 'Startups',
    icon: Rocket,
    color: 'from-fuchsia-500 to-pink-600',
    bgColor: 'bg-fuchsia-500/10',
    textColor: 'text-fuchsia-400',
    borderColor: 'hover:border-fuchsia-500/40',
    solutions: 5,
    href: '/solutions',
  },
  {
    id: 'sme',
    name: 'SMEs & MSMEs',
    icon: Briefcase,
    color: 'from-teal-500 to-green-600',
    bgColor: 'bg-teal-500/10',
    textColor: 'text-teal-400',
    borderColor: 'hover:border-teal-500/40',
    solutions: 4,
    href: '/solutions',
  },
  {
    id: 'enterprises',
    name: 'Enterprises',
    icon: Building,
    color: 'from-indigo-500 to-violet-600',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
    borderColor: 'hover:border-indigo-500/40',
    solutions: 6,
    href: '/solutions',
  },
]

export function IndustriesSection() {
  return (
    <section className="section-padding bg-surface/50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Solutions for Every Industry"
          description="We've built enterprise-grade software across 10+ industries. Whatever your sector, we speak your business language."
        />

        <StaggerContainer stagger={0.06} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.slice(0, 6).map((industry) => {
            const Icon = industry.icon
            return (
              <StaggerItem key={industry.id}>
                <Link href={industry.href}>
                  <div className={`group relative bg-surface border border-border rounded-2xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 ${industry.borderColor} hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 cursor-pointer`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      {industry.name}
                    </span>
                    <span className={`text-[10px] font-medium ${industry.textColor} bg-current/10 rounded-full px-2 py-0.5`}
                      style={{ background: 'currentColor', color: 'white', opacity: 0.7 }}
                    >
                      <span className={`text-[10px] font-medium ${industry.textColor}`}>
                        {industry.solutions} solution{industry.solutions > 1 ? 's' : ''}
                      </span>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Second row */}
        <StaggerContainer stagger={0.06} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 max-w-4xl mx-auto">
          {industries.slice(6).map((industry) => {
            const Icon = industry.icon
            return (
              <StaggerItem key={industry.id}>
                <Link href={industry.href}>
                  <div className={`group relative bg-surface border border-border rounded-2xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 ${industry.borderColor} hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 cursor-pointer`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      {industry.name}
                    </span>
                    <span className={`text-[10px] font-medium ${industry.textColor}`}>
                      {industry.solutions} solution{industry.solutions > 1 ? 's' : ''}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-primary transition-colors group"
          >
            Explore All Industry Solutions
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
