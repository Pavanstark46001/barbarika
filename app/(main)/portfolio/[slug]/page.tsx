import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { projects, getProjectBySlug } from '@/data/portfolio'
import { ProjectDetailContent } from '@/components/sections/portfolio/ProjectDetailContent'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: `${project.title} — Case Study | ${SITE_NAME}`,
    description: project.longDescription,
    alternates: { canonical: `${SITE_URL}/portfolio/${slug}` },
    openGraph: {
      title: `${project.title} — Case Study | ${SITE_NAME}`,
      description: project.description,
      url: `${SITE_URL}/portfolio/${slug}`,
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const sameCategory = projects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3)

  const related =
    sameCategory.length >= 3
      ? sameCategory
      : [
          ...sameCategory,
          ...projects
            .filter((p) => p.slug !== slug && p.category !== project.category)
            .slice(0, 3 - sameCategory.length),
        ]

  return <ProjectDetailContent project={project} related={related} />
}
