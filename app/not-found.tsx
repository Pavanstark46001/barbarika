'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CONTACT_WHATSAPP } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-4">
      {/* Ambient glow */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[130px] pointer-events-none" />

      {/* Giant faded 404 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[30vw] font-display font-black text-foreground leading-none"
        >
          404
        </motion.span>
      </div>

      <div className="relative z-10 text-center max-w-xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="h-px w-8 bg-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">404 Error</span>
          <span className="h-px w-8 bg-primary" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight"
        >
          This page took a{' '}
          <span className="gradient-text">wrong turn.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-muted text-lg mb-10 leading-relaxed"
        >
          The page you&apos;re looking for doesn&apos;t exist, was moved, or the URL is incorrect.
          Let&apos;s get you back on track.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button variant="glow" size="lg" icon={<Home size={18} />} iconPosition="left">
              Back to Home
            </Button>
          </Link>
          <a
            href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi%21%20I%20got%20a%20404%20error%20on%20your%20website.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg" icon={<MessageCircle size={18} />} iconPosition="left">
              Contact Support
            </Button>
          </a>
        </motion.div>

        {/* Quick nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 pt-8 border-t border-border"
        >
          <p className="text-xs text-muted mb-4 uppercase tracking-widest font-semibold">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/services',          label: 'Services' },
              { href: '/portfolio',         label: 'Portfolio' },
              { href: '/solutions',         label: 'Solutions' },
              { href: '/digital-marketing', label: 'Digital Marketing' },
              { href: '/about',             label: 'About Us' },
              { href: '/contact',           label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-full text-sm border border-border text-muted hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
