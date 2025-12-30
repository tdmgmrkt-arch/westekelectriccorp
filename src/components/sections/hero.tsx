'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Calendar, ShieldCheck, Clock, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BUSINESS_INFO } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-accent-100 via-white to-accent-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-500/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Badge variant="default" className="gap-2 py-2 px-4">
                <ShieldCheck className="w-4 h-4" />
                Licensed & Insured • Serving Southern California
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-tight mb-6">
              Trusted{' '}
              <span className="relative">
                <span className="relative z-10">Electricians</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-electric-500/20 -z-0" />
              </span>{' '}
              in Temecula & Murrieta
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8 max-w-xl">
              Expert residential and commercial electrical services with 15+ years of experience.
              From panel upgrades to EV charger installation, we deliver quality work with honest pricing.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-charcoal-700">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-700">
                <Clock className="w-5 h-5 text-navy-600" />
                <span className="font-medium">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-700">
                <ShieldCheck className="w-5 h-5 text-navy-600" />
                <span className="font-medium">Free Estimates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  <Phone className="w-5 h-5" />
                  Call Now: {BUSINESS_INFO.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/contact">
                  <Calendar className="w-5 h-5" />
                  Request Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
              {/* Placeholder for Hero Image - Electrical Panel/Professional Work */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                <div className="text-center text-white/60 p-8">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-white/30 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">Hero Image Placeholder</p>
                  <p className="text-xs mt-1 text-white/40">Professional electrician at work / Modern electrical panel</p>
                </div>
              </div>
            </div>

            {/* Floating Badge - Years of Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-medium p-4 border border-accent-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-electric-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">15+</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Years</p>
                  <p className="text-sm text-charcoal-500">Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge - Reviews */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-medium p-4 border border-accent-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-navy-900">127+</p>
                  <p className="text-sm text-charcoal-500">5-Star Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
          fill="currentColor"
        >
          <path d="M0 22L60 16.7C120 11 240 1.00001 360 0.700012C480 1.00001 600 11 720 16.7C840 22 960 22 1080 19.8C1200 17 1320 11 1380 8.50001L1440 5.70001V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" />
        </svg>
      </div>
    </section>
  )
}
