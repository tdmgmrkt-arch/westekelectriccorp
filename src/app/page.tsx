import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero'
import { CoreServicesSection } from '@/components/sections/core-services'
import { TrustAboutSection } from '@/components/sections/trust-about'
import { EVChargersSection } from '@/components/sections/ev-chargers'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ServiceCategoriesSection } from '@/components/sections/service-categories'
import { ContactSection } from '@/components/sections/contact-section'
import { BlogPreviewSection } from '@/components/sections/blog-preview'
import { generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Electrician in Lake Elsinore & Temecula | 24/7 Service',
  description:
    'Top-rated electricians in Lake Elsinore, Temecula & Murrieta. Residential, commercial, EV chargers, panel upgrades. Licensed C10 contractor. Free estimates.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Westek Electric Corp. | Licensed Electricians in Southern California',
    description:
      'Top-rated electricians in Lake Elsinore, Temecula & Murrieta. Residential, commercial, EV charger installation, panel upgrades. Free estimates.',
  },
}

// FAQ data for schema
const homepageFAQs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Temecula, Murrieta, Menifee, Lake Elsinore, Wildomar, Winchester, French Valley, Fallbrook, Hemet, San Jacinto, Corona, Riverside, and surrounding Southern California communities.',
  },
  {
    question: 'Do you offer 24/7 emergency electrical service?',
    answer:
      'Yes, we offer 24/7 emergency electrical service for urgent issues like power outages, electrical fires, or safety hazards. Call us anytime at (909) 996-6678.',
  },
  {
    question: 'Are your electricians licensed and insured?',
    answer:
      'Yes, all our electricians are fully licensed by the State of California (Westek Electric Corp. | License #C10-1100272) and carry comprehensive liability insurance for your protection.',
  },
  {
    question: 'How much does EV charger installation cost?',
    answer:
      'EV charger installation typically costs between $500-$2,500 depending on your electrical panel capacity, charger type, and installation location. We provide free estimates and can help you identify available rebates.',
  },
  {
    question: 'Do you provide free estimates?',
    answer:
      'Yes, we provide free, no-obligation estimates for all electrical projects. Contact us to schedule your free assessment.',
  },
]

export default function HomePage() {
  const faqSchema = generateFAQSchema(homepageFAQs)

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Core Services Overview */}
      <CoreServicesSection />

      {/* Trust / About Section */}
      <TrustAboutSection />

      {/* EV Charger Services */}
      <EVChargersSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Service Categories */}
      <ServiceCategoriesSection />

      {/* Contact / Lead Form Section */}
      <ContactSection />

      {/* Blog Preview */}
      <BlogPreviewSection />
    </>
  )
}
