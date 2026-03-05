'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronDown,
  ShieldCheck,
  Clock,
  Star,
  Award,
  MapPin,
} from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useQuoteModal } from '@/components/forms/quote-modal'
import { BUSINESS_INFO, CORE_SERVICES } from '@/lib/constants'
import type { ServiceAreaData } from '@/lib/service-areas'

const serviceImageMap: Record<string, string> = {
  residential: '/images/residential.webp',
  commercial: '/images/Commercial.webp',
  'switches-outlets': '/images/Dedicated-Circuit-Service-Image.webp',
  'led-lighting': '/images/Indoor_Lighting-Service-Image.webp',
}

interface ServiceAreaContentProps {
  area: ServiceAreaData
  nearbyCities: { slug: string; name: string; county: string }[]
}

export function ServiceAreaContent({ area, nearbyCities }: ServiceAreaContentProps) {
  const { openQuoteModal } = useQuoteModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleQuoteClick = () => {
    openQuoteModal({
      serviceTitle: `Electrical Services in ${area.name}`,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src={area.heroImage}
          alt={`Electrical services in ${area.name}, CA`}
          fill
          className="object-cover"
          priority
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-900/90" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-electric-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              <MapPin className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Serving {area.name}, CA &mdash; {area.county}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {area.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-10">
              {area.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleQuoteClick} size="lg">
                Request Free Quote
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button asChild variant="outline-white" size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b">
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, label: 'Licensed & Insured', sub: 'CA License #C10-1100272' },
              { icon: Clock, label: '24/7 Emergency', sub: 'Always Available' },
              { icon: Award, label: '15+ Years', sub: 'Experience' },
              { icon: Star, label: '4.9 Star Rating', sub: '127+ Reviews' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                  <badge.icon className="w-5 h-5 text-electric-500" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-navy-900">{badge.label}</p>
                  <p className="text-xs text-charcoal-500">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              About Our Service in {area.name}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8">
              Licensed Electricians Serving {area.name}, CA
            </h2>
            <div className="prose prose-lg text-charcoal-600 max-w-none">
              {area.introduction.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-accent-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Electrical Services in {area.name}
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              We provide a full range of residential and commercial electrical services throughout {area.name} and {area.county}.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SERVICES.map((service) => {
              const serviceImage = serviceImageMap[service.id]
              return (
                <Link key={service.id} href={service.href as never} className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                    {serviceImage && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={serviceImage}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-5">
                      <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2 group-hover:text-electric-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-charcoal-600 text-sm mb-3">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-sm text-electric-500 group-hover:text-electric-600">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Common Electrical Needs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Local Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Common Electrical Needs in {area.name}
              </h2>
              <ul className="space-y-4">
                {area.commonElectricalNeeds.map((need, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0 mt-0.5" />
                    <span className="text-charcoal-700">{need}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Why {area.name} Trusts Westek Electric
              </h2>
              <div className="space-y-4">
                {area.highlights.map((highlight, index) => (
                  <Card key={index} className="border-l-4 border-l-electric-500">
                    <CardContent className="p-4">
                      <p className="text-charcoal-700 font-medium">{highlight}</p>
                    </CardContent>
                  </Card>
                ))}
                <Card className="border-l-4 border-l-electric-500">
                  <CardContent className="p-4">
                    <p className="text-charcoal-700 font-medium">Licensed C-10 Electrical Contractor #1100272</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-electric-500">
                  <CardContent className="p-4">
                    <p className="text-charcoal-700 font-medium">4.9-star rating with 127+ verified reviews</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-electric-500">
                  <CardContent className="p-4">
                    <p className="text-charcoal-700 font-medium">Free estimates on all projects</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZIP Codes Served */}
      <section className="bg-accent-50 py-8">
        <div className="container-wide">
          <p className="text-charcoal-600 text-center">
            <span className="font-semibold text-navy-900">ZIP codes served in {area.name}:</span>{' '}
            {area.zipCodes.join(', ')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
                Frequently Asked Questions About Electrical Service in {area.name}
              </h2>
            </div>
            <div className="space-y-4">
              {area.faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-accent-50 transition-colors"
                  >
                    <span className="font-semibold text-navy-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-charcoal-500 shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-charcoal-600">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      {nearbyCities.length > 0 && (
        <section className="section-padding bg-accent-50">
          <div className="container-wide">
            <div className="text-center mb-10">
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Nearby Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">
                We Also Serve These Communities
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nearbyCities.map((city) => (
                <Link key={city.slug} href={`/service-areas/${city.slug}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <MapPin className="w-8 h-8 text-electric-500 mb-3" />
                      <h3 className="text-lg font-heading font-semibold text-navy-900 group-hover:text-electric-500 transition-colors">
                        {city.name}, CA
                      </h3>
                      <p className="text-charcoal-500 text-sm mt-1">{city.county}</p>
                      <span className="inline-flex items-center text-sm text-electric-500 mt-3 group-hover:text-electric-600">
                        View Area
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/service-areas">
                  View All Service Areas
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Need an Electrician in {area.name}?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate. Our licensed electricians
            are ready to help with any residential or commercial electrical project in {area.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleQuoteClick} size="lg">
              Request Free Quote
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button asChild variant="outline-white" size="lg">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                Call Now: {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
