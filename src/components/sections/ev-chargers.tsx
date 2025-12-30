'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BatteryCharging, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { EV_CHARGER_BRANDS, BUSINESS_INFO } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const evBenefits = [
  'Professional panel assessment',
  'All permits handled',
  'Utility rebate assistance',
  'Same-day installations available',
]

// Map brand IDs to image filenames
const brandImages: Record<string, string> = {
  tesla: '/images/Tesla-Charger.webp',
  ford: '/images/Ford-EV-Charger.webp',
  chevrolet: '/images/Chevy-Volt-Charger.webp',
  rivian: '/images/rivian.charger.webp',
}

export function EVChargersSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-100 to-transparent" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-electric-100 rounded-lg flex items-center justify-center">
                <BatteryCharging className="w-5 h-5 text-electric-500" />
              </div>
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider">
                EV Charger Installation
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6">
              EV Charger Installation in Murrieta & Temecula
            </h2>

            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              Ready to charge your electric vehicle at home? Our certified electricians specialize
              in Level 2 EV charger installation for all makes and models. We handle everything from
              electrical panel upgrades to permitting and final inspection.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {evBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0" />
                  <span className="text-charcoal-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/ev-chargers">
                  <Zap className="w-5 h-5" />
                  Get EV Charger Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  Call {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Brand Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {EV_CHARGER_BRANDS.map((brand) => (
              <motion.div key={brand.id} variants={itemVariants}>
                <Card className="h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1 group">
                  <CardContent className="p-5">
                    {/* Brand Image */}
                    <div className="aspect-[4/3] rounded-xl bg-white mb-4 flex items-center justify-start overflow-hidden relative border border-accent-200">
                      <Image
                        src={brandImages[brand.id]}
                        alt={`${brand.brand} EV Charger`}
                        fill
                        className="object-contain object-left p-2"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-navy-900 mb-1 group-hover:text-electric-600 transition-colors">
                      {brand.brand}
                    </h3>

                    <p className="text-xs text-electric-500 font-medium mb-2">
                      {brand.models}
                    </p>

                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {brand.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 lg:mt-16 bg-navy-900 rounded-2xl p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-electric-500 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-1">
                  Not Sure Which Charger You Need?
                </h3>
                <p className="text-navy-200">
                  We&apos;ll assess your electrical system and recommend the best solution for your vehicle and budget.
                </p>
              </div>
            </div>
            <Button asChild variant="outline-white" size="lg" className="shrink-0">
              <Link href="/contact">
                Schedule Free Assessment
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
