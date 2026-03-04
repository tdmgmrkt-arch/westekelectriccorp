import { Metadata } from 'next'
import { ServicePageContent } from '@/components/sections/service-page-content'
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import type { ServiceDetail } from '@/lib/service-details'

const service: ServiceDetail = {
  id: 'led-lighting',
  category: 'Lighting',
  title: 'LED Lighting',
  fullTitle: 'LED Lighting Installation & Upgrades',
  description:
    'Energy-efficient LED upgrades, recessed lighting, and custom lighting designs to transform your space.',
  longDescription:
    'LED lighting is the most energy-efficient and long-lasting lighting technology available today. Whether you want to upgrade your home, office, or commercial property, our licensed electricians design and install LED lighting systems that reduce your energy bills by up to 75% while delivering superior light quality. From recessed can lights and under-cabinet LEDs to commercial troffer retrofits and outdoor LED flood lights, Westek Electric handles every aspect of your LED lighting project.',
  image: '/images/Indoor_Lighting-Service-Image.webp',
  features: [
    'Recessed LED can light installation',
    'LED troffer and panel retrofits for offices',
    'Under-cabinet LED lighting for kitchens',
    'Outdoor LED flood and security lighting',
    'LED dimmer switch compatibility setup',
    'Color-tunable and smart LED systems',
    'LED landscape and accent lighting',
    'Commercial parking lot LED upgrades',
  ],
  benefits: [
    'Cut lighting energy costs by up to 75%',
    'LED bulbs last 25,000–50,000 hours vs. 1,000 for incandescent',
    'Better light quality with no flickering or warm-up time',
    'Qualify for utility rebates and incentives in California',
    'Reduce maintenance costs with longer-lasting fixtures',
  ],
  process: [
    {
      step: 1,
      title: 'Lighting Consultation',
      description:
        'We assess your current lighting, discuss your goals, and recommend the best LED solutions for your space and budget.',
    },
    {
      step: 2,
      title: 'Custom Design',
      description:
        'Our team creates a lighting plan with fixture placement, color temperature selection, and dimming controls tailored to your needs.',
    },
    {
      step: 3,
      title: 'Professional Installation',
      description:
        'Our electricians install all fixtures, wiring, and controls with clean workmanship and full code compliance.',
    },
    {
      step: 4,
      title: 'Final Walkthrough',
      description:
        'We test every fixture, set dimmer levels, and walk you through the controls so you get the most from your new lighting.',
    },
  ],
  faqs: [
    {
      question: 'How much can I save by switching to LED lighting?',
      answer:
        'Most homeowners save 50–75% on lighting energy costs after switching to LED. A typical home replacing 30 incandescent or CFL bulbs with LEDs can save $100–$200 per year on electricity. Commercial properties often see even larger savings.',
    },
    {
      question: 'Can you install recessed LED lights in an existing ceiling?',
      answer:
        'Yes. We specialize in retrofit recessed lighting installation. We use remodel-style housings that install through a small hole in the ceiling without needing attic access in most cases. No major construction required.',
    },
    {
      question: 'Do LED lights work with dimmer switches?',
      answer:
        'LED lights require LED-compatible dimmer switches. Older dimmers designed for incandescent bulbs can cause flickering or buzzing with LEDs. We install the correct dimmers to ensure smooth, flicker-free dimming.',
    },
    {
      question: 'What color temperature should I choose for LED lights?',
      answer:
        'Warm white (2700K–3000K) is ideal for living rooms and bedrooms. Neutral white (3500K–4000K) works well in kitchens and bathrooms. Cool white (5000K+) is best for garages, workshops, and commercial spaces. We help you choose the right temperature for each room.',
    },
    {
      question: 'Are there rebates available for LED upgrades in California?',
      answer:
        'Yes. Many California utility companies offer rebates for LED upgrades, especially for commercial properties. We can help you identify available rebates and incentives in your area to offset the cost of your LED project.',
    },
  ],
}

export const metadata: Metadata = {
  title: `${service.fullTitle} | Westek Electric Corp.`,
  description: service.longDescription.slice(0, 160),
  alternates: {
    canonical: '/services/led-lighting',
  },
  openGraph: {
    title: `${service.fullTitle} | Westek Electric Corp.`,
    description:
      'Energy-efficient LED upgrades, recessed lighting, and custom lighting designs for homes and businesses. Save up to 75% on energy costs.',
    images: [service.image],
  },
}

export default function LEDLightingPage() {
  const relatedServices = [
    ...RESIDENTIAL_SERVICES.filter((s) =>
      ['indoor-lighting', 'outdoor-lighting', 'landscape-lighting'].includes(s.id)
    ),
    ...COMMERCIAL_SERVICES.filter((s) =>
      ['indoor-lighting', 'outdoor-lighting', 'office-lighting'].includes(s.id)
    ),
  ]
    .slice(0, 4)
    .map((s) => ({
      id: s.id,
      title: s.title,
      category: s.category,
      href: s.href,
      image: s.image,
    }))

  const serviceSchema = generateServiceSchema({
    name: service.fullTitle,
    description: service.longDescription,
    url: '/services/led-lighting',
  })

  const faqSchema = generateFAQSchema(service.faqs)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'LED Lighting', url: '/services/led-lighting' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <ServicePageContent
        service={service}
        serviceType="residential"
        relatedServices={relatedServices}
      />
    </>
  )
}
