import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceAreaContent } from '@/components/sections/service-area-content'
import {
  getServiceAreaBySlug,
  getAllServiceAreaSlugs,
  getNearbyCities,
} from '@/lib/service-areas'
import {
  generateServiceAreaSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllServiceAreaSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const area = getServiceAreaBySlug(params.slug)

  if (!area) {
    return { title: 'Service Area Not Found' }
  }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
    },
  }
}

export default function ServiceAreaPage({ params }: PageProps) {
  const area = getServiceAreaBySlug(params.slug)

  if (!area) {
    notFound()
  }

  const nearbyCities = getNearbyCities(params.slug).map((city) => ({
    slug: city.slug,
    name: city.name,
    county: city.county,
  }))

  const serviceAreaSchema = generateServiceAreaSchema({
    cityName: area.name,
    state: 'CA',
    county: area.county,
    coordinates: area.coordinates,
    url: `/service-areas/${area.slug}`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: area.name, url: `/service-areas/${area.slug}` },
  ])

  const faqSchema = area.faqs.length ? generateFAQSchema(area.faqs) : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      <ServiceAreaContent area={area} nearbyCities={nearbyCities} />
    </>
  )
}
