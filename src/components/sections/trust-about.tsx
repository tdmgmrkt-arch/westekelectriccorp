'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShieldCheck, ThumbsUp, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BUSINESS_INFO } from '@/lib/constants'

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Fully licensed California electrical contractor with comprehensive liability coverage.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee on every project.',
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'We respect your time with prompt arrivals and efficient, professional service.',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'Every job meets or exceeds code requirements with attention to detail.',
  },
]

const benefits = [
  'Free, no-obligation estimates',
  'Upfront, transparent pricing',
  'Clean and respectful technicians',
  'Same-day service available',
  'All work guaranteed',
  'Background-checked employees',
]

export function TrustAboutSection() {
  return (
    <section className="section-padding bg-accent-100">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
              {/* Placeholder for About Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                <div className="text-center text-white/60 p-8">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-white/30 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">About Section Image</p>
                  <p className="text-xs mt-1 text-white/40">Professional team / Quality electrical work</p>
                </div>
              </div>
            </div>

            {/* License Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-medium p-5 border border-accent-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">California Licensed</p>
                  <p className="text-sm text-charcoal-500">{BUSINESS_INFO.license}</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 left-8 bg-electric-500 text-white rounded-xl px-5 py-3 shadow-medium"
            >
              <p className="text-2xl font-bold">Since {BUSINESS_INFO.founded}</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6">
              Reliable & Honest Electricians You Can Trust
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              For over 15 years, Westek Electric Corp. has been the trusted choice for homeowners
              and businesses throughout Lake Elsinore, Temecula, Murrieta, and the surrounding areas. Our
              commitment to quality workmanship, honest pricing, and exceptional customer
              service sets us apart from the competition.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0" />
                  <span className="text-charcoal-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  Call {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Trust Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24"
        >
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-soft border border-accent-100"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="font-heading font-semibold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
