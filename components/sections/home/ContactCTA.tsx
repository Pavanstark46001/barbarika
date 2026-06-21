'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { Floating } from '@/components/animations/ParallaxContainer'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, CONTACT_WHATSAPP } from '@/lib/constants'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#0d0d1f] to-[#09090f]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan/15 blur-[80px] pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute top-12 left-12 opacity-20 hidden lg:block pointer-events-none">
        <Floating amplitude={10} delay={0}>
          <div className="w-16 h-16 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center">
            <Mail size={24} className="text-white/60" />
          </div>
        </Floating>
      </div>
      <div className="absolute top-20 right-16 opacity-20 hidden lg:block pointer-events-none">
        <Floating amplitude={12} delay={1}>
          <div className="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center">
            <CalendarDays size={20} className="text-white/60" />
          </div>
        </Floating>
      </div>
      <div className="absolute bottom-16 left-24 opacity-20 hidden lg:block pointer-events-none">
        <Floating amplitude={8} delay={2}>
          <div className="w-14 h-14 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center">
            <Phone size={22} className="text-white/60" />
          </div>
        </Floating>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-sm font-medium text-white/80">Available for New Projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
        >
          Ready to Build Something{' '}
          <span className="gradient-text">Extraordinary?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Schedule a free 30-minute discovery call. We&apos;ll understand your requirements,
          share our approach, and provide a detailed proposal within 24 hours — no commitment required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton>
            <Link href="/contact">
              <Button
                variant="glow"
                size="xl"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Book Free Consultation
              </Button>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'd like to discuss a project.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="xl"
                icon={<WhatsAppIcon />}
                iconPosition="left"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                WhatsApp Us
              </Button>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-white/10 pt-10"
        >
          {[
            { icon: Mail,    text: CONTACT_EMAIL,    href: `mailto:${CONTACT_EMAIL}` },
            { icon: Phone,   text: CONTACT_PHONE,    href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}` },
            { icon: MapPin,  text: CONTACT_ADDRESS,  href: '#' },
          ].map(({ icon: Icon, text, href }) => (
            <a
              key={text}
              href={href}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              <Icon size={15} className="text-primary-light" />
              {text}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
