'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Avatar } from '@/components/ui/Avatar'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <section className="section-padding bg-surface/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Don't take our word for it — hear from the businesses we've transformed."
        />

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden"
            >
              {/* Decorative quote */}
              <Quote
                size={80}
                className="absolute top-6 right-8 text-primary/8 rotate-180"
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-amber text-amber" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8 relative z-10">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar
                  src={t.avatar}
                  alt={t.name}
                  size="lg"
                  fallback={t.name}
                />
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                  <div className="text-sm font-medium text-primary-light">{t.company}</div>
                </div>
                <div className="ml-auto hidden md:block">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-2 border border-border text-muted">
                    {t.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-8 h-2 bg-primary'
                      : 'w-2 h-2 bg-border hover:bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Company logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">
            Businesses That Trust Us
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {testimonials.map((t) => (
              <span key={t.id} className="text-sm font-bold text-muted-fg hover:text-foreground transition-colors">
                {t.company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
