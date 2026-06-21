import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { projects } from '@/data/portfolio'
import { PortfolioPageContent } from '@/components/sections/portfolio/PortfolioPageContent'

export const metadata: Metadata = {
  title: `Portfolio — ${SITE_NAME}`,
  description:
    'Browse our portfolio of 150+ projects across healthcare, education, finance, e-commerce, AI, construction, and more. Real clients, real results.',
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: `Portfolio — ${SITE_NAME}`,
    description: 'Real clients, real results. 150+ projects across 8+ industries.',
    url: `${SITE_URL}/portfolio`,
  },
}

export default function PortfolioPage() {
  return <PortfolioPageContent projects={projects} />
}
