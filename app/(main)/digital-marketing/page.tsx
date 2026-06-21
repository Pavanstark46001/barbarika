import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { DigitalMarketingContent } from '@/components/sections/digital-marketing/DigitalMarketingContent'

export const metadata: Metadata = {
  title: `Digital Marketing Services — ${SITE_NAME}`,
  description:
    'Data-driven digital marketing — SEO, Google Ads, Meta Ads, social media, content marketing, and email marketing. Grow your business with measurable ROI.',
  keywords: [
    'digital marketing agency India',
    'SEO services Hyderabad',
    'Google Ads management',
    'social media marketing',
    'content marketing agency',
  ],
  alternates: { canonical: `${SITE_URL}/digital-marketing` },
  openGraph: {
    title: `Digital Marketing Services — ${SITE_NAME}`,
    description: 'Turn your digital presence into a revenue machine with data-driven marketing.',
    url: `${SITE_URL}/digital-marketing`,
  },
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingContent />
}
