'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Building2, Factory, PenTool, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SERVICE_CATEGORIES } from '@/lib/constants'

const iconMap = {
  Home,
  Building2,
  Factory,
  PenTool,
}

const categoryImages: Record<string, string> = {
  residential: '/images/residential.webp',
  commercial: '/images/Commercial.webp',
  industrial: '/images/industrial.webp',
  design: '/images/Electrical-Design.webp',
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

export function ServiceCategoriesSection() {
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
            Full-Service Electrical
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-4">
            Electrical Solutions for Every Need
          </h2>
          <p className="text-lg text-charcoal-600">
            Whether you&apos;re a homeowner, business owner, or facility manager, we have the
            expertise to handle your electrical needs with precision and professionalism.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {SERVICE_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap]

            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Link
                  href={`/services/${category.id}` as never}
                  className="block group"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row">
                        {/* Icon/Visual Side */}
                        <div className="lg:w-1/3 relative overflow-hidden">
                          {categoryImages[category.id] && (
                            <Image
                              src={categoryImages[category.id]}
                              alt={category.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-800/80 group-hover:from-electric-500/80 group-hover:to-electric-600/80 transition-all duration-300" />
                          <div className="relative p-6 lg:p-8 flex items-center justify-center min-h-[120px] lg:min-h-full">
                            <div className="w-20 h-20 hexagon bg-white/20 flex items-center justify-center backdrop-blur-sm">
                              <IconComponent className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:w-2/3 p-6 lg:p-8">
                          <h3 className="text-xl font-heading font-semibold text-navy-900 mb-2 group-hover:text-electric-600 transition-colors">
                            {category.title}
                          </h3>

                          <p className="text-charcoal-600 text-sm mb-4">
                            {category.description}
                          </p>

                          {/* Service List */}
                          <ul className="space-y-2 mb-4">
                            {category.services.slice(0, 4).map((service, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-sm text-charcoal-700"
                              >
                                <CheckCircle2 className="w-4 h-4 text-electric-500 shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>

                          <span className="inline-flex items-center gap-2 text-navy-900 font-medium text-sm group-hover:text-electric-500 transition-colors">
                            View All Services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
