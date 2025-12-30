'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, ShieldCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { UniversalQuoteForm } from '@/components/forms/universal-quote-form'
import { BUSINESS_INFO } from '@/lib/constants'

const contactBenefits = [
  {
    icon: Phone,
    title: '24/7 Availability',
    description: 'Emergency service available around the clock',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Same-day service for most requests',
  },
  {
    icon: ShieldCheck,
    title: 'Free Estimates',
    description: 'No obligation quotes for all projects',
  },
]

export function ContactSection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content & Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-400 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Get Started?{' '}
              <span className="text-electric-400">Contact Us Today</span>
            </h2>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Whether you need a simple repair or a major electrical upgrade, our team is ready
              to help. Get a free estimate with no obligation. We&apos;ll respond within 24 hours.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {contactBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div
                    key={index}
                    className="bg-navy-800/50 rounded-xl p-4 border border-navy-700"
                  >
                    <IconComponent className="w-6 h-6 text-electric-400 mb-2" />
                    <h3 className="font-semibold text-white text-sm mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-navy-300">{benefit.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className="bg-navy-800/50 rounded-2xl p-6 border border-navy-700">
              <h3 className="font-heading font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-3 text-navy-200 hover:text-electric-400 transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">{BUSINESS_INFO.phone}</p>
                    <p className="text-xs">24/7 Emergency Available</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-navy-200">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white">{BUSINESS_INFO.address.street}</p>
                    <p className="text-sm">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{' '}
                      {BUSINESS_INFO.address.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-navy-200">
                  <Clock className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p>Mon-Fri: {BUSINESS_INFO.hours.weekdays}</p>
                    <p>Sat: {BUSINESS_INFO.hours.saturday}</p>
                    <p className="text-electric-400">{BUSINESS_INFO.hours.emergency}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="mt-8 aspect-[16/9] rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center">
                <div className="text-center text-white/60 p-8">
                  <div className="w-20 h-20 mx-auto mb-4 border-2 border-white/30 rounded-xl flex items-center justify-center">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">Service Vehicle Image</p>
                  <p className="text-xs mt-1 text-white/40">Professional work truck / Electrician van</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-strong border-0">
              <CardContent className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                    Request a Free Estimate
                  </h3>
                  <p className="text-charcoal-600">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                <UniversalQuoteForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
