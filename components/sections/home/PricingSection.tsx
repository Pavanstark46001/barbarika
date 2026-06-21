'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, X, Zap } from 'lucide-react'
import { SectionHeader } from '@/components/animations/SectionReveal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { pricingPlans } from '@/data/pricing'
import { cn } from '@/lib/utils'
import { CONTACT_WHATSAPP } from '@/lib/constants'

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent Pricing, No Surprises"
          description="We believe in honest pricing. No hidden costs, no scope creep surprises. Here's what to expect."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'relative rounded-2xl border flex flex-col overflow-hidden transition-all duration-300',
                plan.highlighted
                  ? 'border-primary/50 shadow-2xl shadow-primary/20 scale-[1.03]'
                  : 'border-border hover:border-primary/30 hover:shadow-lg hover:shadow-black/20'
              )}
            >
              {/* Highlighted gradient top border */}
              {plan.highlighted && (
                <div className="h-1 w-full gradient-primary" />
              )}

              {/* Card bg */}
              <div className={cn('flex-1 p-7', plan.highlighted ? 'bg-surface' : 'bg-surface')}>
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <Badge variant="primary" dot>
                      <Zap size={11} />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Plan name + description */}
                <h3 className="text-xl font-display font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted mb-6 leading-relaxed">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-display font-bold text-foreground">
                        ₹{plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm text-muted pb-1">/{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-display font-bold gradient-text">Custom</div>
                  )}
                  {typeof plan.price === 'number' && (
                    <p className="text-xs text-muted mt-1">Starting price. Final quote based on scope.</p>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={
                    plan.price === 'Custom'
                      ? `/contact`
                      : `https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'm interested in the ${plan.name} package.`
                  }
                  target={plan.price === 'Custom' ? undefined : '_blank'}
                  rel={plan.price !== 'Custom' ? 'noopener noreferrer' : undefined}
                >
                  <Button
                    variant={plan.highlighted ? 'glow' : 'secondary'}
                    fullWidth
                    size="lg"
                    className="mb-6"
                  >
                    {plan.cta}
                  </Button>
                </Link>

                {/* Divider */}
                <div className="border-t border-border mb-6" />

                {/* Features list */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check size={16} className="text-green shrink-0 mt-0.5" />
                      ) : (
                        <X size={16} className="text-muted-fg shrink-0 mt-0.5" />
                      )}
                      <span
                        className={cn(
                          'text-sm leading-relaxed',
                          feature.included ? 'text-foreground' : 'text-muted-fg line-through'
                        )}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted mt-8"
        >
          All prices are in INR and exclude GST. Need a custom quote?{' '}
          <Link href="/contact" className="text-primary-light hover:underline font-medium">
            Contact us
          </Link>{' '}
          for a free consultation.
        </motion.p>
      </div>
    </section>
  )
}
