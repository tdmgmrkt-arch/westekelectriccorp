import Link from 'next/link'
import { ArrowRight, Home, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BUSINESS_INFO } from '@/lib/constants'

export default function NotFound() {
  return (
    <>
      <section className="pt-40 pb-20 bg-gradient-to-br from-accent-100 via-white to-accent-50 min-h-[60vh] flex items-center">
        <div className="container-wide text-center">
          <p className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Error 404
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-navy-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Our Services
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                <Phone className="w-5 h-5" />
                Call {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
