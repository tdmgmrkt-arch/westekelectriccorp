'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PORTFOLIO_PROJECTS, BUSINESS_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

const categoryColors: Record<string, string> = {
  Commercial: 'bg-electric-500',
  Residential: 'bg-green-500',
  Industrial: 'bg-orange-500',
}

interface PortfolioProjectContentProps {
  project: typeof PORTFOLIO_PROJECTS[number]
  prevProject: typeof PORTFOLIO_PROJECTS[number] | null
  nextProject: typeof PORTFOLIO_PROJECTS[number] | null
}

export function PortfolioProjectContent({
  project,
  prevProject,
  nextProject,
}: PortfolioProjectContentProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const goToNextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % project.images.length)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevImage()
    if (e.key === 'ArrowRight') goToNextImage()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-12 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat" />
        </div>

        {/* Decorative Hexagons */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-electric-500/10 hexagon" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-electric-500/10 hexagon" />

        <div className="container-wide relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-navy-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </nav>

          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={cn(
                'px-3 py-1 rounded-full text-white text-sm font-medium',
                categoryColors[project.category] || 'bg-gray-500'
              )}
            >
              {project.category}
            </span>
            <span className="text-navy-300 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-navy-200 max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Services Tags */}
          <div className="flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-heading font-bold text-navy-900 mb-8">
              Project Gallery
            </h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-100">
        <div className="container-wide">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4">
              Interested in a Similar Project?
            </h2>
            <p className="text-charcoal-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate. We&apos;d love to discuss how we can help with your electrical project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Request Free Estimate
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Previous/Next Navigation */}
      <section className="py-12 bg-white border-t border-accent-200">
        <div className="container-wide">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.id}`}
                className="group flex items-center gap-4 max-w-[45%]"
              >
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center group-hover:bg-electric-100 transition-colors">
                  <ChevronLeft className="w-6 h-6 text-navy-900" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm text-charcoal-500 mb-1">Previous Project</p>
                  <p className="font-semibold text-navy-900 group-hover:text-electric-500 transition-colors line-clamp-1">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/portfolio"
              className="px-6 py-2 bg-navy-900 text-white rounded-full hover:bg-navy-800 transition-colors"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.id}`}
                className="group flex items-center gap-4 max-w-[45%] text-right"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-charcoal-500 mb-1">Next Project</p>
                  <p className="font-semibold text-navy-900 group-hover:text-electric-500 transition-colors line-clamp-1">
                    {nextProject.title}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center group-hover:bg-electric-100 transition-colors">
                  <ChevronRight className="w-6 h-6 text-navy-900" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Next Button */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh] m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.images[lightboxIndex]}
                alt={`${project.title} - Image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
              {lightboxIndex + 1} / {project.images.length}
            </div>

            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightboxIndex(index)
                    }}
                    className={cn(
                      'w-16 h-12 rounded overflow-hidden border-2 transition-colors',
                      index === lightboxIndex ? 'border-electric-500' : 'border-transparent opacity-50 hover:opacity-100'
                    )}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
