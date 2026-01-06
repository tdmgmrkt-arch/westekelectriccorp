import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BatteryCharging, Zap, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { EV_CHARGER_BRANDS, BUSINESS_INFO } from '@/lib/constants'
import { generateServiceSchema, generateFAQSchema } from '@/lib/seo'

// Map brand IDs to image filenames
const brandImages: Record<string, string> = {
  tesla: '/images/Tesla-Charger.webp',
  ford: '/images/Ford-EV-Charger.webp',
  chevrolet: '/images/Chevy-Volt-Charger.webp',
  rivian: '/images/rivian.charger.webp',
}

export const metadata: Metadata = {
  title: 'EV Charger Installation',
  description:
    'Professional EV charger installation in Temecula & Murrieta. Tesla, Ford, Chevy, Rivian certified. Level 2 home charging. Permits included. Free estimates.',
  alternates: {
    canonical: '/ev-chargers',
  },
}

const evFAQs = [
  {
    question: 'How much does EV charger installation cost?',
    answer:
      'EV charger installation typically costs $500-$2,500 depending on your electrical panel capacity, charger type, and installation location. We provide free estimates and can help identify available rebates.',
  },
  {
    question: 'Do I need to upgrade my electrical panel for an EV charger?',
    answer:
      'Many homes need a panel upgrade to support Level 2 EV charging. We assess your current panel capacity during our free estimate and recommend the best solution for your needs.',
  },
  {
    question: 'How long does EV charger installation take?',
    answer:
      'Most residential EV charger installations take 2-4 hours. If a panel upgrade is needed, the project may take a full day. We complete most installations in a single visit.',
  },
  {
    question: 'What permits are required for EV charger installation?',
    answer:
      'Yes, electrical permits are required for EV charger installation in California. We handle all permit applications and inspections as part of our service.',
  },
]

const installationProcess = [
  {
    step: 1,
    title: 'Free Assessment',
    description: 'We evaluate your electrical panel, determine optimal charger location, and provide a detailed quote.',
  },
  {
    step: 2,
    title: 'Permit & Scheduling',
    description: 'We pull all necessary permits and schedule your installation at a convenient time.',
  },
  {
    step: 3,
    title: 'Professional Installation',
    description: 'Our licensed electricians install your charger following all codes and manufacturer specifications.',
  },
  {
    step: 4,
    title: 'Final Inspection',
    description: 'We schedule the inspection and ensure everything passes. You start charging that day.',
  },
]

export default function EVChargersPage() {
  const serviceSchema = generateServiceSchema({
    name: 'EV Charger Installation',
    description: 'Professional Level 2 EV charger installation for all electric vehicle makes and models.',
    url: '/ev-chargers',
  })

  const faqSchema = generateFAQSchema(evFAQs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema]),
        }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-electric-100 rounded-lg flex items-center justify-center">
                  <BatteryCharging className="w-5 h-5 text-electric-500" />
                </div>
                <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider">
                  EV Charger Installation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6">
                Home EV Charger Installation
              </h1>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                Charge your electric vehicle at home with a professionally installed Level 2 charger.
                Our certified electricians handle everything from panel assessment to final inspection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Zap className="w-5 h-5" />
                    Get Free Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                    Call {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
              <Image
                src="/images/EV-Chargers.webp"
                alt="Professional EV Charger Installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              We Install Chargers for All EV Brands
            </h2>
            <p className="text-lg text-charcoal-600">
              Whether you drive a Tesla, Ford, Chevy, or any other electric vehicle,
              we have the expertise to install the right charging solution for your home.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EV_CHARGER_BRANDS.map((brand) => (
              <Card key={brand.id} className="text-center hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden">
                    {brandImages[brand.id] ? (
                      <Image
                        src={brandImages[brand.id]}
                        alt={`${brand.brand} EV Charger`}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent-100 flex items-center justify-center">
                        <BatteryCharging className="w-8 h-8 text-navy-900" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-navy-900 mb-2">
                    {brand.brand}
                  </h3>
                  <p className="text-sm text-electric-500 font-medium mb-3">
                    {brand.models}
                  </p>
                  <p className="text-sm text-charcoal-600">
                    {brand.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section-padding bg-accent-100">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-charcoal-600">
              From initial assessment to final inspection, we make EV charger installation simple and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-6 h-full shadow-soft">
                  <div className="w-10 h-10 bg-electric-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {evFAQs.map((faq, index) => (
                <div key={index} className="bg-accent-50 rounded-2xl p-6">
                  <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-charcoal-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <Zap className="w-12 h-12 text-electric-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Charge at Home?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            Get a free assessment and quote for your EV charger installation.
            We&apos;ll help you find the perfect charging solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule Free Assessment
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline-white" size="lg">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                Call {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
