import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { ServicesSection } from '@/components/sections/home/ServicesSection'
import { IndustriesSection } from '@/components/sections/home/IndustriesSection'
import { PortfolioSection } from '@/components/sections/home/PortfolioSection'
import { WhyChooseUsSection } from '@/components/sections/home/WhyChooseUsSection'
import { TechStackSection } from '@/components/sections/home/TechStackSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { PricingSection } from '@/components/sections/home/PricingSection'
import { FAQSection } from '@/components/sections/home/FAQSection'
import { ContactCTA } from '@/components/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: `${SITE_NAME} — Premium Software & Digital Marketing Agency`,
  description:
    'We build world-class websites, web apps, mobile apps, and AI solutions for hospitals, schools, e-commerce, restaurants, and enterprises across India.',
  keywords: [
    'software development agency',
    'digital marketing agency',
    'web development India',
    'mobile app development',
    'AI agent development',
    'SEO services India',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — Premium Software & Digital Marketing Agency`,
    description:
      'Transforming businesses through exceptional digital experiences. Web, Mobile, AI, and Marketing.',
    url: SITE_URL,
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <TechStackSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactCTA />
    </>
  )
}
