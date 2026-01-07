'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Building2, PlugZap, Lightbulb, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CORE_SERVICES } from '@/lib/constants'

const iconMap = {
  Home,
  Building2,
  PlugZap,
  Lightbulb,
}

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

export function CoreServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16"
        >
          <span className="text-electric-500 font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3 block">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-3 md:mb-4">
            Comprehensive Electrical Services
          </h2>
          <p className="text-base md:text-lg text-charcoal-600">
            From simple repairs to complex installations, our licensed electricians deliver
            quality workmanship for residential and commercial properties throughout Southern California.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {CORE_SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={service.href as never} className="block h-full group">
                  <Card className="h-full transition-all duration-300 hover:shadow-medium active:shadow-medium hover:-translate-y-1 border-2 border-transparent hover:border-electric-100 active:border-electric-100">
                    <CardContent className="p-4 md:p-6">
                      {/* Hexagon Icon Container */}
                      <div className="relative mb-3 md:mb-5">
                        <div className="w-12 h-12 md:w-16 md:h-16 hexagon bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center group-hover:from-electric-500 group-hover:to-electric-600 group-active:from-electric-500 group-active:to-electric-600 transition-all duration-300">
                          <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-white" />
                        </div>
                      </div>

                      <h3 className="text-base md:text-xl font-heading font-semibold text-navy-900 mb-2 md:mb-3 group-hover:text-electric-600 group-active:text-electric-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-charcoal-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">
                        {service.description}
                      </p>

                      <span className="inline-flex items-center gap-1.5 md:gap-2 text-navy-900 font-medium text-xs md:text-sm group-hover:text-electric-500 group-active:text-electric-500 transition-colors">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-electric-500 active:text-electric-500 transition-colors py-3 px-4 -m-3 min-h-[48px]"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
