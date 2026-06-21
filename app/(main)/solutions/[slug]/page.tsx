import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { solutions, getSolutionBySlug } from '@/data/solutions'
import { SolutionDetailContent } from '@/components/sections/solutions/SolutionDetailContent'

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) return {}

  return {
    title: `${solution.title} — ${SITE_NAME}`,
    description: solution.description,
    alternates: { canonical: `${SITE_URL}/solutions/${slug}` },
    openGraph: {
      title: `${solution.title} — ${SITE_NAME}`,
      description: solution.shortDescription,
      url: `${SITE_URL}/solutions/${slug}`,
    },
  }
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) notFound()

  const related = solutions
    .filter((s) => s.slug !== slug && s.industry === solution.industry)
    .slice(0, 3)

  return <SolutionDetailContent solution={solution} related={related} />
}
