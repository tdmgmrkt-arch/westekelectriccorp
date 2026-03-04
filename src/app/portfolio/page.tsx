import { Metadata } from 'next'
import { PortfolioContent } from '@/components/sections/portfolio-content'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Portfolio - Electrical Project Showcase',
  description:
    'View our portfolio of completed electrical projects in Temecula, Murrieta & Southern California. Residential, commercial, and industrial electrical work.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio | Westek Electric Corp.',
    description:
      'Browse completed electrical projects including dealership installations, panel upgrades, and commercial lighting across Southern California.',
  },
}

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <PortfolioContent />
    </>
  )
}
