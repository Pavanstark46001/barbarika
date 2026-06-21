import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { services, getServiceBySlug } from '@/data/services'
import { ServiceDetailContent } from '@/components/sections/services/ServiceDetailContent'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: `${service.title} — ${SITE_NAME}`,
    description: service.description,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: `${service.title} — ${SITE_NAME}`,
      description: service.shortDescription,
      url: `${SITE_URL}/services/${slug}`,
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const related = services.filter((s) => s.slug !== slug).slice(0, 3)

  return <ServiceDetailContent service={service} related={related} />
}
