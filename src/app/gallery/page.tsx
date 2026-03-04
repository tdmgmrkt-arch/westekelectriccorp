'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'

const galleryImages = [
  '/images/gallery/Work1-640x640.webp',
  '/images/gallery/Work3-640x853.webp',
  '/images/gallery/Work4-640x520.webp',
  '/images/gallery/Work5-640x861.webp',
  '/images/gallery/Work6-640x607.webp',
  '/images/gallery/Work8-640x586.webp',
  '/images/gallery/Work9-640x738.webp',
  '/images/gallery/Work10-640x700.webp',
  '/images/gallery/Work11.webp',
  '/images/gallery/Work12-640x716.webp',
  '/images/gallery/Work13-640x935.webp',
  '/images/gallery/Work14-640x713.webp',
  '/images/gallery/Work15.webp',
  '/images/gallery/Work16-640x853.webp',
  '/images/gallery/Work17-640x874.webp',
  '/images/gallery/Work18-640x853.webp',
  '/images/gallery/Work19-640x612.webp',
  '/images/gallery/Work20.webp',
  '/images/gallery/Work21-640x853.webp',
  '/images/gallery/Work23-640x853.webp',
  '/images/gallery/Work24.webp',
  '/images/gallery/Work25.webp',
  '/images/gallery/IMG_0323-copy-640x853.webp',
  '/images/gallery/IMG_0479-640x853.webp',
  '/images/gallery/IMG_0729-640x853.webp',
  '/images/gallery/IMG_5327-copy-640x853.webp',
  '/images/gallery/IMG_5336-640x853.webp',
  '/images/gallery/IMG_5453-copy-640x853.webp',
  '/images/gallery/IMG_5454-copy-640x853.webp',
  '/images/gallery/IMG_5652-copy-640x853.webp',
]

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goToPrevious = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1)
  }

  const goToNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide text-center">
          <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6">
            Project Gallery
          </h1>
          <p className="text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            Browse photos from our residential and commercial electrical projects across
            Southern California. Quality craftsmanship on every job.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                onClick={() => openLightbox(index)}
                className="block w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-shadow duration-300 group break-inside-avoid"
              >
                <div className="relative">
                  <Image
                    src={src}
                    alt={`Westek Electric project photo ${index + 1}`}
                    width={640}
                    height={640}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Like What You See?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your next electrical project.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center rounded-xl bg-electric-500 px-8 py-4 text-lg font-semibold text-white shadow-medium hover:bg-electric-600 transition-colors"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious() }}
            className="absolute left-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex]}
              alt={`Westek Electric project photo ${lightboxIndex + 1}`}
              width={1200}
              height={1200}
              className="max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            className="absolute right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  )
}
