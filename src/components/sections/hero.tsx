'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Calendar, ShieldCheck, Clock, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BUSINESS_INFO } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50 overflow-hidden">
      <div className="container-wide">
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
              <Image
                src="/images/westek.home.hero.webp"
                alt="Westek Electric Corp. - Professional Electrical Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
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
    </section>
  )
}
