'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { TESTIMONIALS } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-accent-100">
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
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-charcoal-600">
            Don&apos;t just take our word for it. Here&apos;s what homeowners and businesses
            throughout Southern California have to say about our electrical services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full bg-white shadow-soft border-0">
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-electric-200" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-charcoal-700 leading-relaxed flex-grow mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-accent-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-navy-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-charcoal-500">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-electric-500 font-medium">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-soft">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <div className="h-6 w-px bg-accent-200" />
            <p className="text-charcoal-700">
              <span className="font-bold text-navy-900">4.9</span> average from{' '}
              <span className="font-semibold">127+ reviews</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
