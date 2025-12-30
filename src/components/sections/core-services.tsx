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
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-4">
            Comprehensive Electrical Services
          </h2>
          <p className="text-lg text-charcoal-600">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CORE_SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={service.href as never} className="block h-full group">
                  <Card className="h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border-2 border-transparent hover:border-electric-100">
                    <CardContent className="p-6">
                      {/* Hexagon Icon Container */}
                      <div className="relative mb-5">
                        <div className="w-16 h-16 hexagon bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center group-hover:from-electric-500 group-hover:to-electric-600 transition-all duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-heading font-semibold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <span className="inline-flex items-center gap-2 text-navy-900 font-medium text-sm group-hover:text-electric-500 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-electric-500 transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
