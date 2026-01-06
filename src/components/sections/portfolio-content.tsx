'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PORTFOLIO_PROJECTS, BUSINESS_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

const categoryColors: Record<string, string> = {
  Commercial: 'bg-electric-500',
  Residential: 'bg-green-500',
  Industrial: 'bg-orange-500',
}

function ProjectCard({ project }: { project: typeof PORTFOLIO_PROJECTS[number] }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const handleIndicatorClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage(index)
  }

  return (
    <Link href={`/portfolio/${project.id}`} className="block group">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        {/* Image Carousel */}
        <div className="relative aspect-[4/3] bg-accent-100">
          <Image
            src={project.images[currentImage]}
            alt={`${project.title} - Image ${currentImage + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-navy-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-navy-900" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => handleIndicatorClick(e, index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    index === currentImage ? 'bg-white' : 'bg-white/50'
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <CardContent className="p-5">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={cn(
                'w-3 h-3 rounded-full',
                categoryColors[project.category] || 'bg-gray-500'
              )}
            />
            <span className="text-sm font-medium text-charcoal-600">
              {project.category}
            </span>
            <span className="text-charcoal-400">•</span>
            <span className="text-sm text-charcoal-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-semibold text-navy-900 mb-2 group-hover:text-electric-500 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-charcoal-600 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Services Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.services.map((service) => (
              <span
                key={service}
                className="bg-accent-100 text-charcoal-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA */}
          <span className="inline-flex items-center text-electric-500 font-semibold text-sm group-hover:text-electric-600 transition-colors">
            View Project
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

export function PortfolioContent() {
  const [filter, setFilter] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(PORTFOLIO_PROJECTS.map((p) => p.category)))]

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Explore our completed projects showcasing quality electrical work across
              residential, commercial, and industrial settings throughout Southern California.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  'px-5 py-2 rounded-full font-medium text-sm transition-colors',
                  filter === category
                    ? 'bg-navy-900 text-white'
                    : 'bg-accent-100 text-charcoal-700 hover:bg-accent-200'
                )}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            Whether residential or commercial, we bring the same dedication and expertise
            to every job. Contact us for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                Call {BUSINESS_INFO.phone}
              </a>
            </Button>
            <Button asChild variant="outline-white" size="lg">
              <Link href="/contact">
                Request Estimate
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
