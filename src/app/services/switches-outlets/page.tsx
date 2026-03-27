import { Metadata } from 'next'
import { ServicePageContent } from '@/components/sections/service-page-content'
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import type { ServiceDetail } from '@/lib/service-details'

const service: ServiceDetail = {
  id: 'switches-outlets',
  category: 'Installation & Repair',
  title: 'Switches & Outlets',
  fullTitle: 'Switch & Outlet Installation and Repair',
  description:
    'Expert installation and repair of switches, outlets, and USB charging stations throughout your property.',
  longDescription:
    'Switches and outlets are the most-used components of your electrical system. Worn-out outlets, loose connections, and outdated switches are more than an inconvenience — they can be a fire hazard. Our licensed electricians install, upgrade, and repair all types of switches and outlets including GFCI and AFCI outlets, smart switches, dimmers, USB outlets, and 240V receptacles for homes and businesses across Southern California.',
  image: '/images/Dedicated-Circuit-Service-Image.webp',
  features: [
    'GFCI outlet installation for kitchens & bathrooms',
    'AFCI outlet upgrades for bedroom circuits',
    'USB outlet and charging station installation',
    'Smart switch & dimmer installation',
    'Tamper-resistant outlet upgrades',
    '240V outlet installation for appliances & EVs',
    'Outdoor weatherproof outlet installation',
    'Whole-home switch & outlet replacement',
  ],
  benefits: [
    'Eliminate fire risks from worn or faulty outlets',
    'Meet current NEC electrical code requirements',
    'Add modern convenience with USB and smart switches',
    'Improve safety with tamper-resistant and GFCI outlets',
    'Increase property value with updated electrical fixtures',
  ],
  process: [
    {
      step: 1,
      title: 'Assessment',
      description:
        'We inspect your existing switches and outlets, identify hazards, and discuss your upgrade needs.',
    },
    {
      step: 2,
      title: 'Recommendation',
      description:
        'Our electrician recommends the best outlet and switch types for each location based on code and your preferences.',
    },
    {
      step: 3,
      title: 'Installation',
      description:
        'We install your new switches and outlets with clean, code-compliant wiring and secure connections.',
    },
    {
      step: 4,
      title: 'Testing',
      description:
        'Every outlet and switch is tested for proper voltage, grounding, and GFCI/AFCI function before we leave.',
    },
  ],
  faqs: [
    {
      question: 'How do I know if my outlets need to be replaced?',
      answer:
        'Signs include loose plugs that fall out, discolored or warm outlet covers, buzzing sounds, sparking when plugging in, or two-prong outlets that lack grounding. If your home is more than 20 years old and has never had outlets updated, an inspection is recommended.',
    },
    {
      question: 'What is a GFCI outlet and where do I need them?',
      answer:
        'GFCI (Ground Fault Circuit Interrupter) outlets protect against electrical shock by cutting power when they detect a ground fault. Current code requires them in kitchens, bathrooms, garages, outdoors, laundry rooms, and anywhere near water.',
    },
    {
      question: 'Can you add outlets to a room that doesn\'t have enough?',
      answer:
        'Yes. We can add new outlets by running wiring from your electrical panel or an existing circuit, depending on the load. We ensure all new outlets meet code spacing and capacity requirements.',
    },
    {
      question: 'How much does it cost to replace switches and outlets?',
      answer:
        'Cost varies based on the type (standard, GFCI, smart, USB) and the complexity of the wiring. We provide free estimates so you know the exact cost before any work begins.',
    },
    {
      question: 'Do you install smart switches and dimmers?',
      answer:
        'Absolutely. We install all major smart switch brands including Lutron, Leviton, and TP-Link. We also verify your wiring has the neutral wire required by most smart switches.',
    },
  ],
}

export const metadata: Metadata = {
  title: service.fullTitle,
  description: service.longDescription.slice(0, 160),
  alternates: {
    canonical: '/services/switches-outlets',
  },
  openGraph: {
    title: `${service.fullTitle} | Westek Electric Corp.`,
    description:
      'Expert installation and repair of switches, outlets, GFCI, and USB charging stations for homes and businesses in Southern California.',
    images: [service.image],
  },
}

export default function SwitchesOutletsPage() {
  const relatedServices = [
    ...RESIDENTIAL_SERVICES.filter((s) =>
      ['dedicated-circuits', 'appliance-wiring', 'indoor-lighting', 'rewiring'].includes(s.id)
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
    url: '/services/switches-outlets',
  })

  const faqSchema = generateFAQSchema(service.faqs)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Switches & Outlets', url: '/services/switches-outlets' },
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
