import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { solutions, industries } from '@/data/solutions'
import { SolutionsPageContent } from '@/components/sections/solutions/SolutionsPageContent'

export const metadata: Metadata = {
  title: `Industry Solutions — ${SITE_NAME}`,
  description:
    'Tailored digital solutions for hospitals, schools, colleges, construction, e-commerce, restaurants, finance, real estate, and more.',
  alternates: { canonical: `${SITE_URL}/solutions` },
  openGraph: {
    title: `Industry Solutions — ${SITE_NAME}`,
    description: 'Purpose-built software solutions for every industry.',
    url: `${SITE_URL}/solutions`,
  },
}

export default function SolutionsPage() {
  return <SolutionsPageContent solutions={solutions} industries={industries} />
}
