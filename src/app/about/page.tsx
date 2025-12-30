import { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Award, Users, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Westek Electric Corp. - Licensed electricians serving Lake Elsinore, Temecula & Murrieta since 2010. Family-owned, 15+ years experience, 24/7 emergency service. Learn about our team.',
  alternates: {
    canonical: '/about',
  },
}

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5,000+', label: 'Projects Completed' },
  { value: '127+', label: '5-Star Reviews' },
  { value: '24/7', label: 'Emergency Service' },
]

const values = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Every installation meets or exceeds California electrical codes. Your safety is our top priority.',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'We take pride in every project, large or small. Meticulous attention to detail on every job.',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Clear communication, fair pricing, and respect for your home. We treat you like family.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'On-time arrivals, clean work areas, and projects completed as promised. We respect your time.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6">
                Your Trusted Local Electricians
              </h1>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                Since 2010, Westek Electric Corp. has been the trusted choice for electrical services
                in Lake Elsinore, Temecula, Murrieta, and throughout Southern California. As a family-owned business,
                we take pride in delivering honest, quality work to our community.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-navy-900 text-white px-4 py-2 rounded-lg">
                  <p className="font-semibold">{BUSINESS_INFO.license}</p>
                </div>
                <p className="text-charcoal-600">Licensed & Insured</p>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-strong bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
              <div className="text-center text-white/60 p-8">
                <Users className="w-20 h-20 mx-auto mb-4" />
                <p className="text-sm">Team Photo Placeholder</p>
                <p className="text-xs mt-1 text-white/40">Professional team photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-electric-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-navy-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal-600">
              <p>
                Westek Electric Corp. was founded in 2010 with a simple mission: provide honest,
                high-quality electrical services to homeowners and businesses in the Lake Elsinore and Temecula Valley areas.
                What started as a one-man operation has grown into a team of skilled, licensed
                electricians serving all of Southern California.
              </p>
              <p>
                As a family-owned business, we understand the importance of trust when inviting
                someone into your home or business. That&apos;s why we focus on clear communication,
                transparent pricing, and treating every property as if it were our own.
              </p>
              <p>
                Today, we&apos;re proud to have completed over 5,000 projects and earned the trust of
                thousands of families and businesses throughout Riverside and San Diego counties.
                Whether you need a simple outlet repair or a complete electrical system upgrade,
                we bring the same dedication and expertise to every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-accent-100">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mx-auto mb-4 bg-navy-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-navy-900" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-charcoal-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-charcoal-600">
              We proudly serve residential and commercial customers throughout
              Riverside County, San Diego County, and the surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="bg-accent-100 px-4 py-2 rounded-full text-charcoal-700 font-medium"
              >
                {area}, CA
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. We&apos;re looking forward to serving you.
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
