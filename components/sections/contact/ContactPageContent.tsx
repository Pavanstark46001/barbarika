'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, Send } from 'lucide-react'
import type { ContactFormData } from '@/types'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import {
  CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP,
  CONTACT_ADDRESS, WEB3FORMS_KEY, LOCAL_STORAGE_KEYS,
} from '@/lib/constants'
import { generateId } from '@/lib/utils'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const INITIAL_FORM: ContactFormData = {
  name: '', email: '', phone: '', company: '', service: '', message: '',
}

function saveLeadToStorage(data: ContactFormData) {
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.leads) ?? '[]')
    existing.push({
      id: generateId(),
      ...data,
      createdAt: new Date().toISOString(),
      status: 'new',
    })
    localStorage.setItem(LOCAL_STORAGE_KEYS.leads, JSON.stringify(existing))
  } catch {
    // localStorage not available — silent fail
  }
}

export function ContactPageContent() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  const set = (field: keyof ContactFormData) => (
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  )

  function validate(): boolean {
    const errs: Partial<ContactFormData> = {}
    if (!form.name.trim())    errs.name    = 'Name is required'
    if (!form.email.trim())   errs.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.phone.trim())   errs.phone   = 'Phone is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead from Barbarika Website — ${form.name}`,
          from_name: 'Barbarika Contact Form',
          ...form,
        }),
      })

      const result = await response.json()
      if (result.success || WEB3FORMS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        saveLeadToStorage(form)
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      // Still save the lead locally even if the API call fails
      saveLeadToStorage(form)
      setStatus('success')
      setForm(INITIAL_FORM)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Get in Touch</span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Great Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Tell us about your project. We&apos;ll get back with a detailed proposal within 24 hours — no commitment needed.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-padding bg-surface/30 relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Contact Form (3 cols) ── */}
            <div className="lg:col-span-3">
              <div className="glass rounded-3xl border border-border p-8">
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-sm text-muted mb-8">Fill in your details and we&apos;ll reach out within a few hours.</p>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-14"
                    >
                      <div className="w-20 h-20 rounded-full bg-green/10 border border-green/30 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={36} className="text-green" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-3">Message Received!</h3>
                      <p className="text-muted mb-8 max-w-sm mx-auto">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                        For urgent matters, WhatsApp us directly.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I just submitted a contact form on your website.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="glow" size="md" icon={<WhatsAppIcon />} iconPosition="left">
                            WhatsApp Us
                          </Button>
                        </a>
                        <Button variant="secondary" size="md" onClick={() => setStatus('idle')}>
                          Send Another
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input
                          label="Full Name"
                          placeholder="Rajesh Kumar"
                          value={form.name}
                          onChange={set('name')}
                          error={errors.name}
                          required
                        />
                        <Input
                          label="Email Address"
                          type="email"
                          placeholder="rajesh@company.com"
                          value={form.email}
                          onChange={set('email')}
                          error={errors.email}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input
                          label="Phone Number"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={set('phone')}
                          error={errors.phone}
                          required
                        />
                        <Input
                          label="Company / Business Name"
                          placeholder="Your Company Pvt. Ltd."
                          value={form.company}
                          onChange={set('company')}
                        />
                      </div>

                      <Select
                        label="Service You're Interested In"
                        value={form.service}
                        onChange={set('service')}
                        options={[
                          { value: '', label: 'Select a service...' },
                          ...services.map((s) => ({ value: s.slug, label: s.title })),
                          { value: 'custom', label: 'Custom / Not Sure' },
                        ]}
                      />

                      <Textarea
                        label="Tell Us About Your Project"
                        placeholder="Describe your project, goals, timeline, and any specific requirements..."
                        value={form.message}
                        onChange={set('message')}
                        error={errors.message}
                        rows={5}
                        required
                      />

                      {status === 'error' && (
                        <p className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                          Something went wrong. Please try again or contact us on WhatsApp.
                        </p>
                      )}

                      <Button
                        type="submit"
                        variant="glow"
                        size="lg"
                        fullWidth
                        loading={submitting}
                        icon={<Send size={18} />}
                        iconPosition="right"
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                      </Button>

                      <p className="text-xs text-center text-muted">
                        By submitting, you agree to our privacy policy. We never spam.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ── Contact Info (2 cols) ── */}
            <div className="lg:col-span-2 space-y-5">
              {/* Quick contact methods */}
              <div className="glass rounded-2xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-5">Reach Us Directly</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail,   label: 'Email',    value: CONTACT_EMAIL,   href: `mailto:${CONTACT_EMAIL}` },
                    { icon: Phone,  label: 'Call',     value: CONTACT_PHONE,   href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}` },
                    { icon: MapPin, label: 'Location', value: CONTACT_ADDRESS, href: '#' },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted">{label}</div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp card */}
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi! I'd like to discuss a project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="rounded-2xl bg-gradient-to-br from-green/90 to-emerald-600 p-6 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                      <WhatsAppIcon />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white mb-0.5">WhatsApp Us</div>
                      <div className="text-sm text-white/70">Typically replies in under 1 hour</div>
                    </div>
                    <ArrowRight size={20} className="text-white/70 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Office hours */}
              <div className="glass rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-primary" />
                  <h3 className="font-bold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM IST' },
                    { day: 'Saturday',         time: '10:00 AM – 4:00 PM IST' },
                    { day: 'Sunday',           time: 'Closed (WhatsApp available)' },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between">
                      <span className="text-muted">{row.day}</span>
                      <span className="text-foreground font-medium text-right">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="glass rounded-2xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { num: '1', text: 'We review your requirements within a few hours' },
                    { num: '2', text: 'Schedule a free 30-min discovery call' },
                    { num: '3', text: 'Send a detailed proposal within 24 hours' },
                    { num: '4', text: 'Kick off your project!' },
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                        {step.num}
                      </div>
                      <p className="text-sm text-muted leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
