'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { faqs } from '@/data/faqs'
import { cn } from '@/lib/utils'

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq1')

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="section-padding bg-surface/50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions We Get All the Time"
          description="Everything you need to know before starting your project. Still have questions? We're one WhatsApp away."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div
                className={cn(
                  'rounded-xl border overflow-hidden transition-all duration-300',
                  openId === faq.id
                    ? 'border-primary/30 bg-surface shadow-lg shadow-primary/5'
                    : 'border-border bg-surface hover:border-primary/20'
                )}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openId === faq.id}
                >
                  <span className={cn('text-sm font-semibold leading-relaxed', openId === faq.id ? 'text-foreground' : 'text-foreground/80')}>
                    {faq.question}
                  </span>
                  <span className={cn('mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200', openId === faq.id ? 'bg-primary text-white' : 'bg-surface-2 text-muted')}>
                    {openId === faq.id ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-border mb-4" />
                        <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl glass border border-primary/20 text-center"
        >
          <p className="text-sm font-medium text-foreground mb-3">
            Still have questions? We&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi! I have a question about your services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green/10 border border-green/30 text-green text-sm font-semibold hover:bg-green/20 transition-colors"
            >
              <span className="text-base">💬</span>
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@barbarika.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-2 border border-border text-foreground text-sm font-semibold hover:border-primary/40 transition-colors"
            >
              <span className="text-base">✉️</span>
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
