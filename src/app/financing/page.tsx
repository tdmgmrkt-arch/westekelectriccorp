import { Metadata } from 'next'
import { FinancingContent } from '@/components/sections/financing-content'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Financing - Flexible Payment Options',
  description:
    'Flexible financing for electrical projects in Temecula & Southern California. Wisetack partnership for easy approval, affordable payments, and no hidden fees.',
  alternates: {
    canonical: '/financing',
  },
  openGraph: {
    title: 'Financing Options | Westek Electric Corp.',
    description:
      'Flexible financing for electrical projects through Wisetack. Easy approval, affordable monthly payments, and no hidden fees.',
  },
}

export default function FinancingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Financing', url: '/financing' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <FinancingContent />
    </>
  )
}
