import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { AboutPageContent } from '@/components/sections/about/AboutPageContent'

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME}`,
  description:
    'Meet the team behind Barbarika. 30+ specialists in software development, design, AI, and digital marketing on a mission to make world-class technology accessible to every business.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About Us — ${SITE_NAME}`,
    description: 'Meet the team. Learn our story. Understand our values.',
    url: `${SITE_URL}/about`,
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
