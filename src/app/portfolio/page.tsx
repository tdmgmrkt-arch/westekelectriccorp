import { Metadata } from 'next'
import { PortfolioContent } from '@/components/sections/portfolio-content'

export const metadata: Metadata = {
  title: 'Portfolio - Our Electrical Projects',
  description:
    'View our portfolio of completed electrical projects in Temecula, Murrieta & Southern California. Residential, commercial, and industrial electrical work.',
  alternates: {
    canonical: '/portfolio',
  },
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
