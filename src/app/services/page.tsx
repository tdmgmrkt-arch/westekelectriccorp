import { Metadata } from 'next'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { ServicesContent } from '@/components/sections/services-content'

export const metadata: Metadata = {
  title: 'Electrical Services | Residential & Commercial',
  description:
    'Comprehensive electrical services in Southern California. Residential & commercial wiring, breakers, lighting, code corrections. Licensed & insured.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Electrical Services | Westek Electric Corp.',
    description:
      'Full-service residential and commercial electrical contractor in Southern California. Wiring, lighting, breakers, code corrections, and new construction.',
  },
}

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ])

  const serviceSchemas = [
    generateServiceSchema({
      name: 'Residential Electrical Services',
      description: 'Comprehensive home power solutions by our experienced team, ensuring safety, reliability, and tailored excellence for all your household electrical needs.',
      url: '/services/residential',
    }),
    generateServiceSchema({
      name: 'Commercial Electrical Services',
      description: 'Professional commercial electrical services for businesses of all sizes. Expert installation, repairs, and maintenance.',
      url: '/services/commercial',
    }),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ServicesContent />
    </>
  )
}
