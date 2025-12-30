import { Metadata } from 'next'
import { BUSINESS_INFO, SERVICE_AREAS } from './constants'

const siteUrl = 'https://socalelectricpros.com'

// Base metadata configuration
export function generateMetadata({
  title,
  description,
  path = '',
  image = '/images/og-default.jpg',
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const fullTitle = title === 'Home'
    ? `${BUSINESS_INFO.name} | Electrician in Lake Elsinore & Temecula CA`
    : `${title} | ${BUSINESS_INFO.name}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName: BUSINESS_INFO.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// JSON-LD Schema Types
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${siteUrl}/#organization`,
    name: BUSINESS_INFO.name,
    image: `${siteUrl}/images/westek.logo.webp`,
    logo: `${siteUrl}/images/westek.logo.webp`,
    url: siteUrl,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.4936,
      longitude: -117.1484,
    },
    areaServed: SERVICE_AREAS.map(area => ({
      '@type': 'City',
      name: `${area}, CA`,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Check',
    currenciesAccepted: 'USD',
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.yelp,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Electrician',
      name: BUSINESS_INFO.name,
      url: siteUrl,
    },
    areaServed: {
      '@type': 'State',
      name: 'California',
    },
    description: service.description,
    url: `${siteUrl}${service.url}`,
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${siteUrl}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image || `${siteUrl}/images/og-default.jpg`,
    author: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/westek.logo.webp`,
      },
    },
  }
}
