import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePageContent } from '@/components/sections/service-page-content'
import {
  getCommercialServiceById,
  getAllCommercialServiceIds,
  COMMERCIAL_SERVICE_DETAILS,
} from '@/lib/service-details'
import { COMMERCIAL_SERVICES } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/seo'

interface PageProps {
  params: { slug: string }
}

// Generate static paths for all commercial services
export async function generateStaticParams() {
  const serviceIds = getAllCommercialServiceIds()
  return serviceIds.map((slug) => ({ slug }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getCommercialServiceById(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.fullTitle} | Commercial Electrical`,
    description: service.longDescription.slice(0, 160),
    alternates: {
      canonical: `/services/commercial/${params.slug}`,
    },
    openGraph: {
      title: `${service.fullTitle} | Westek Electric Corp.`,
      description: service.description,
      images: [service.image],
    },
  }
}

export default function CommercialServicePage({ params }: PageProps) {
  const service = getCommercialServiceById(params.slug)

  if (!service) {
    notFound()
  }

  // Get related services (excluding current one)
  const relatedServices = COMMERCIAL_SERVICES
    .filter((s) => s.id !== params.slug)
    .slice(0, 4)
    .map((s) => ({
      id: s.id,
      title: s.title,
      category: s.category,
      href: s.href,
    }))

  const serviceSchema = generateServiceSchema({
    name: service.fullTitle,
    description: service.longDescription,
    url: `/services/commercial/${params.slug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ServicePageContent
        service={service}
        serviceType="business"
        relatedServices={relatedServices}
      />
    </>
  )
}
