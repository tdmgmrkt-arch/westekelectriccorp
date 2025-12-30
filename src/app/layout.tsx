import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { QuoteModalProvider } from '@/components/forms/quote-modal'
import { generateLocalBusinessSchema } from '@/lib/seo'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Westek Electric Corp. | Electrician in Lake Elsinore & Temecula CA',
    template: '%s | Westek Electric Corp.',
  },
  description:
    'Licensed electricians serving Lake Elsinore, Temecula, Murrieta & Southern California. Residential, commercial, EV charger installation, panel upgrades. 24/7 emergency service. Free estimates.',
  keywords: [
    'electrician Lake Elsinore',
    'electrician Temecula',
    'electrician Murrieta',
    'electrical contractor',
    'EV charger installation',
    'panel upgrade',
    'residential electrician',
    'commercial electrician',
    'Southern California electrician',
  ],
  authors: [{ name: 'Westek Electric Corp.' }],
  creator: 'Westek Electric Corp.',
  publisher: 'Westek Electric Corp.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://socalelectricpros.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Westek Electric Corp. | Electrician in Lake Elsinore & Temecula CA',
    description:
      'Licensed electricians serving Lake Elsinore, Temecula, Murrieta & Southern California. Residential, commercial, EV charger installation, panel upgrades. 24/7 emergency service.',
    url: 'https://socalelectricpros.com',
    siteName: 'Westek Electric Corp.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Westek Electric Corp. - Licensed Electricians',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Westek Electric Corp. | Electrician in Lake Elsinore & Temecula CA',
    description:
      'Licensed electricians serving Lake Elsinore, Temecula, Murrieta & Southern California. Residential, commercial, EV charger installation. 24/7 emergency service.',
    images: ['/images/og-default.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B3C5D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <QuoteModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  )
}
