'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useQuoteModal } from '@/components/forms/quote-modal'
import { BUSINESS_INFO } from '@/lib/constants'
import type { ServiceDetail } from '@/lib/service-details'

interface ServicePageContentProps {
  service: ServiceDetail
  serviceType: 'residential' | 'business'
  relatedServices: { id: string; title: string; category: string; href: string }[]
}

export function ServicePageContent({ service, serviceType, relatedServices }: ServicePageContentProps) {
  const { openQuoteModal } = useQuoteModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleQuoteClick = () => {
    openQuoteModal({
      projectScope: serviceType,
      services: [service.id],
      serviceTitle: `${service.category} - ${service.title}`,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(229,57,53,0.3),transparent_50%)]" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-electric-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                {serviceType === 'residential' ? 'Residential' : 'Commercial'} Services / {service.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                {service.fullTitle}
              </h1>
              <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-10">
                {service.longDescription}
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.fullTitle}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Service Features
              </h2>
              <p className="text-charcoal-600 mb-8">
                Our {service.title.toLowerCase()} services include everything you need for a safe, efficient, and code-compliant installation.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0 mt-0.5" />
                    <span className="text-charcoal-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <Card key={index} className="border-l-4 border-l-electric-500">
                    <CardContent className="p-4">
                      <p className="text-charcoal-700 font-medium">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-accent-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Our Process
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is completed safely, efficiently, and to your complete satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <Card key={step.step} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-electric-500 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-accent-50">
          <div className="container-wide">
            <div className="text-center mb-10">
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Explore More
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">
                Related Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.slice(0, 4).map((related) => (
                <Link
                  key={related.id}
                  href={related.href as never}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-5">
                      <span className="text-electric-500 text-xs font-semibold uppercase tracking-wider">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-heading font-semibold text-navy-900 mt-2 group-hover:text-electric-500 transition-colors">
                        {related.title}
                      </h3>
                      <span className="inline-flex items-center text-sm text-electric-500 mt-3 group-hover:text-electric-600">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate on your {service.title.toLowerCase()} project.
            Our licensed electricians are ready to help.
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
