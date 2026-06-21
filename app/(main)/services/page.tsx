import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { services } from '@/data/services'
import { ServicesPageContent } from '@/components/sections/services/ServicesPageContent'

export const metadata: Metadata = {
  title: `Services — ${SITE_NAME}`,
  description:
    'Explore our full range of software development and digital marketing services — website development, web apps, mobile apps, AI agents, SEO, UI/UX, and social media marketing.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Services — ${SITE_NAME}`,
    description: 'Full-stack software & digital marketing services to grow your business.',
    url: `${SITE_URL}/services`,
  },
}

export default function ServicesPage() {
  return <ServicesPageContent services={services} />
}
