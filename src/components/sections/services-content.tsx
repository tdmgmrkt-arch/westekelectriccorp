'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES, BUSINESS_INFO } from '@/lib/constants'
import { useQuoteModal } from '@/components/forms/quote-modal'
import { UniversalQuoteForm } from '@/components/forms/universal-quote-form'

type ServiceType = 'residential' | 'business'

interface ServiceCardProps {
  service: {
    id: string
    category: string
    title: string
    description: string
    image: string
    href: string
  }
  serviceType: ServiceType
}

function ServiceCard({ service, serviceType }: ServiceCardProps) {
  const { openQuoteModal } = useQuoteModal()

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    openQuoteModal({
      projectScope: serviceType,
      services: [service.id],
      serviceTitle: `${service.category} - ${service.title}`,
    })
  }

  return (
    <Link
      href={service.href as never}
      className="group block h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-accent-200 hover:border-electric-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-accent-100">
          <Image
            src={service.image}
            alt={`${service.category} ${service.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 bg-electric-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {service.category}
          </span>
        </div>
        <CardContent className="p-5">
          <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2 group-hover:text-electric-500 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-charcoal-600 mb-4 line-clamp-2">
            {service.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center text-sm font-semibold text-navy-600 group-hover:text-navy-800 transition-colors">
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
            <button
              onClick={handleQuoteClick}
              className="text-sm font-semibold text-electric-500 hover:text-electric-600 transition-colors"
            >
              Get Quote
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6">
                What does Westek Electric Corp. offer?
              </h1>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                From residential repairs to commercial installations, our licensed electricians
                deliver quality workmanship for every project. Serving Temecula, Murrieta, and
                all of Southern California.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                    Call {BUSINESS_INFO.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Request Free Estimate</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
              <Image
                src="/images/Westek-Truck.webp"
                alt="Westek Electric Corp. Service Vehicle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-electric-100 rounded-2xl flex items-center justify-center">
              <Home className="w-7 h-7 text-electric-500" />
            </div>
            <div>
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider block">
                What does Westek Electric Corp. offer?
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">
                Residential Electrical Services
              </h2>
            </div>
          </div>
          <p className="text-lg text-charcoal-600 mb-10 max-w-3xl">
            Comprehensive home power solutions by our experienced team, ensuring safety,
            reliability, and tailored excellence for all your household electrical needs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {RESIDENTIAL_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} serviceType="residential" />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="section-padding bg-accent-50">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-navy-100 rounded-2xl flex items-center justify-center">
              <Building2 className="w-7 h-7 text-navy-700" />
            </div>
            <div>
              <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider block">
                What we do
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">
                Commercial Electrical Services
              </h2>
            </div>
          </div>
          <p className="text-lg text-charcoal-600 mb-10 max-w-3xl">
            Professional electrical solutions for businesses of all sizes. Our commercial team
            delivers expert installation, maintenance, and repairs to keep your operations running smoothly.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COMMERCIAL_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} serviceType="business" />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-electric-400 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Request a quote
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Get a Quote on Your Next Electrical Project
              </h2>
              <p className="text-navy-200 text-lg mb-8">
                Are you looking to get a quote on your next electrical project? Get in touch with us today!
                Our experienced electrician team is here to provide quality services for businesses and homeowners.
                We offer free quotes, so you can make sure you&apos;re getting the best deal possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-navy-100">
                  <div className="w-10 h-10 bg-electric-500/20 rounded-full flex items-center justify-center">
                    <span className="text-electric-400 font-bold">1</span>
                  </div>
                  <span>Fill out the form with your project details</span>
                </div>
                <div className="flex items-center gap-3 text-navy-100">
                  <div className="w-10 h-10 bg-electric-500/20 rounded-full flex items-center justify-center">
                    <span className="text-electric-400 font-bold">2</span>
                  </div>
                  <span>We&apos;ll review your request within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-navy-100">
                  <div className="w-10 h-10 bg-electric-500/20 rounded-full flex items-center justify-center">
                    <span className="text-electric-400 font-bold">3</span>
                  </div>
                  <span>Receive your free, no-obligation quote</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <UniversalQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-electric-500 to-electric-600">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your electrical project.
            Our team is ready to help with any size job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                Call Now: {BUSINESS_INFO.phone}
              </a>
            </Button>
            <Button asChild variant="outline-white" size="lg">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
