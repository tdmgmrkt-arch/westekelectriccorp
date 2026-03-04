import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Phone, ShieldCheck, Clock, Star, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getAllServiceAreas } from '@/lib/service-areas'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Service Areas | Licensed Electrician in Southern California',
  description:
    'Westek Electric Corp. serves Temecula, Murrieta, Menifee, Lake Elsinore, Corona, Riverside, and surrounding Southern California communities. Licensed C-10 electrical contractor.',
  alternates: {
    canonical: '/service-areas',
  },
}

export default function ServiceAreasPage() {
  const areas = getAllServiceAreas()

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(229,57,53,0.3),transparent_50%)]" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="text-electric-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              <MapPin className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Southern California Coverage
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Our Service Areas
            </h1>
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-10">
              Westek Electric Corp. provides licensed residential and commercial electrical
              services across Southern California. From the Inland Empire to northern San Diego
              County, we&apos;re your trusted local electricians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
              <Button asChild variant="outline-white" size="lg">
                <Link href="/contact">
                  Request Free Estimate
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b">
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, label: 'Licensed & Insured', sub: 'CA License #C10-1100272' },
              { icon: Clock, label: '24/7 Emergency', sub: 'Always Available' },
              { icon: Award, label: '15+ Years', sub: 'Experience' },
              { icon: Star, label: '4.9 Star Rating', sub: '127+ Reviews' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                  <badge.icon className="w-5 h-5 text-electric-500" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-navy-900">{badge.label}</p>
                  <p className="text-xs text-charcoal-500">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding bg-accent-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Cities We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Find Your Local Electrician
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Click on your city to learn more about our electrical services in your area,
              see local FAQs, and request a free estimate.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center group-hover:bg-electric-500 transition-colors">
                        <MapPin className="w-6 h-6 text-electric-500 group-hover:text-white transition-colors" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-charcoal-400 group-hover:text-electric-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-navy-900 mb-1 group-hover:text-electric-500 transition-colors">
                      {area.name}, CA
                    </h3>
                    <p className="text-charcoal-500 text-sm mb-3">{area.county}</p>
                    <p className="text-charcoal-600 text-sm line-clamp-2">
                      {area.heroDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {area.zipCodes.map((zip) => (
                        <span
                          key={zip}
                          className="text-xs bg-navy-50 text-navy-600 px-2 py-0.5 rounded"
                        >
                          {zip}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Don&apos;t See Your City Listed?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            We serve all of Southern California. If your city isn&apos;t listed above, give us a
            call — we likely cover your area too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </a>
            </Button>
            <Button asChild variant="outline-white" size="lg">
              <Link href="/contact">
                Contact Us Online
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
