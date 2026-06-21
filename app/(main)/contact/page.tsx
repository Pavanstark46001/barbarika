import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { ContactPageContent } from '@/components/sections/contact/ContactPageContent'

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_NAME}`,
  description:
    'Get in touch with Barbarika. Start your project with a free consultation. We respond within 24 hours.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `Contact Us — ${SITE_NAME}`,
    description: 'Start your project with a free consultation. Response in 24 hours.',
    url: `${SITE_URL}/contact`,
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
