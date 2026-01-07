'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
        {/* Mobile Section Header - Content Interleaving: Shows header first on mobile */}
        <div className="block lg:hidden mb-6">
          <span className="text-electric-500 font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900">
            Reliable & Honest Electricians You Can Trust
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-strong">
              <Image
                src="/images/whychooseus.webp"
                alt="Westek Electric Corp. - Reliable & Honest Electricians"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* License Badge - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden md:block absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-medium p-4 lg:p-5 border border-accent-200"
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-navy-900 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm lg:text-base">California Licensed</p>
                  <p className="text-xs lg:text-sm text-charcoal-500">{BUSINESS_INFO.license}</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Badge - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden md:block absolute -top-4 left-8 bg-electric-500 text-white rounded-xl px-4 lg:px-5 py-2 lg:py-3 shadow-medium"
            >
              <p className="text-xl lg:text-2xl font-bold">Since {BUSINESS_INFO.founded}</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Desktop Section Header - Hidden on mobile (shown above grid instead) */}
            <span className="hidden lg:block text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="hidden lg:block text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6">
              Reliable & Honest Electricians You Can Trust
            </h2>
            <p className="text-base md:text-lg text-charcoal-600 leading-relaxed mb-6 md:mb-8">
              For over 15 years, Westek Electric Corp. has been the trusted choice for homeowners
              and businesses throughout Lake Elsinore, Temecula, Murrieta, and the surrounding areas. Our
              commitment to quality workmanship, honest pricing, and exceptional customer
              service sets us apart from the competition.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2 py-1"
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-electric-500 shrink-0" />
                  <span className="text-charcoal-700 text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button asChild size="lg" className="min-h-[48px] w-full sm:w-auto">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] w-full sm:w-auto">
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-10 md:mt-16 lg:mt-24"
        >
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-soft border border-accent-100"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-navy-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-navy-900" />
                </div>
                <h3 className="font-heading font-semibold text-navy-900 mb-1.5 md:mb-2 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-charcoal-600 leading-relaxed">
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
