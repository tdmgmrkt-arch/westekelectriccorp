import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Gallery - Completed Electrical Projects',
  description:
    'Browse photos of our completed electrical projects in Temecula, Murrieta & Lake Elsinore. Residential and commercial electrical work by Westek Electric.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Project Gallery | Westek Electric Corp.',
    description:
      'Browse photos of completed electrical projects across Southern California. Residential and commercial work by Westek Electric.',
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  )
}
