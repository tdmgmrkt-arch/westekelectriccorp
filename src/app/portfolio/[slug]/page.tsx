import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PORTFOLIO_PROJECTS } from '@/lib/constants'
import { PortfolioProjectContent } from '@/components/sections/portfolio-project-content'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.id}`,
    },
  }
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  // Find previous and next projects
  const currentIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === slug)
  const prevProject = currentIndex > 0 ? PORTFOLIO_PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < PORTFOLIO_PROJECTS.length - 1 ? PORTFOLIO_PROJECTS[currentIndex + 1] : null

  return (
    <PortfolioProjectContent
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  )
}
