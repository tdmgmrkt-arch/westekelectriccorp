import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - Our Electrical Work',
  description:
    'Browse photos of our completed electrical projects in Temecula, Murrieta, Lake Elsinore & Southern California. Residential and commercial electrical work by Westek Electric Corp.',
  alternates: {
    canonical: '/gallery',
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
