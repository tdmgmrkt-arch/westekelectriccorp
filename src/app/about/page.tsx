import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-navy-900 to-navy-800 text-white px-5 py-3 rounded-xl shadow-medium mb-8">
                <div className="w-10 h-10 bg-electric-500 rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-navy-200">Licensed & Insured</p>
                  <p className="font-semibold text-white">{BUSINESS_INFO.license}</p>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
              <Image
                src="/images/westek.trusted.service.webp"
                alt="Westek Electric Corp. - Your Trusted Local Electricians"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
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
          <div className="text-center mb-8">
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">
              Our Story
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-charcoal-600">
            <div className="bg-accent-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-electric-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-heading font-semibold text-navy-900 mb-3">The Beginning</h3>
              <p>
                Westek Electric Corp. was founded in 2010 with a simple mission: provide honest,
                high-quality electrical services to homeowners and businesses in the Lake Elsinore and Temecula Valley areas.
                What started as a one-man operation has grown into a team of skilled, licensed
                electricians serving all of Southern California.
              </p>
            </div>
            <div className="bg-accent-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-electric-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-heading font-semibold text-navy-900 mb-3">Our Values</h3>
              <p>
                As a family-owned business, we understand the importance of trust when inviting
                someone into your home or business. That&apos;s why we focus on clear communication,
                transparent pricing, and treating every property as if it were our own.
              </p>
            </div>
            <div className="bg-accent-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-electric-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-heading font-semibold text-navy-900 mb-3">Today</h3>
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

      {/* Meet the Owner */}
      <section className="section-padding bg-gradient-to-br from-white via-accent-50 to-white">
        <div className="container-wide">
          <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
            Meet the Owner
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Westek Owner - Ryan Reese
          </h2>

          <div className="text-charcoal-600 leading-relaxed">
              {/* Floating Image */}
              <div className="float-right ml-6 mb-4 md:ml-8 md:mb-6">
                <div className="relative">
                  <div className="absolute -top-2 -right-2 w-48 h-56 md:w-64 md:h-72 bg-electric-500/10 hexagon" />
                  <div className="relative w-48 h-56 md:w-64 md:h-72 hexagon overflow-hidden shadow-strong">
                    <Image
                      src="/images/Ryan-Reese.webp"
                      alt="Ryan Reese - Owner of Westek Electric Corp."
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 192px, 256px"
                    />
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-navy-900 text-white px-4 py-2 rounded-lg shadow-medium">
                    <p className="text-xl font-bold text-electric-400">18+</p>
                    <p className="text-xs text-navy-200">Years Experience</p>
                  </div>
                </div>
              </div>

              <p className="text-lg mb-4">
                Ryan Reese is an accomplished electrician with over 18 years of experience in
                the field of electrical work. Since he began his career in 2003, Ryan has honed
                his skills and expertise in all aspects of electrical systems, including
                installation, maintenance, and repair.
              </p>
              <p className="mb-4">
                In 2016, Ryan founded Westek Electric Corp, a reputable electrical contracting
                company that has since served countless residential and commercial clients.
                Under Ryan&apos;s leadership, Westek Electric Corp has earned a reputation for
                delivering top-quality electrical services, employing the latest industry
                techniques and tools to ensure that all work is completed efficiently and
                effectively.
              </p>
              <p className="mb-4">
                Ryan is known for his exceptional attention to detail and commitment to
                customer satisfaction. His dedication to his craft and passion for delivering
                top-notch electrical services have made him a sought-after electrician in the
                industry. Whether it&apos;s troubleshooting electrical issues, installing new
                electrical systems, or performing routine maintenance, Ryan&apos;s knowledge and
                experience make him a valuable asset to any project.
              </p>
              <p className="text-charcoal-500 italic">
                When Ryan is not on the job, he enjoys spending time with his family, racing
                RC cars, and engaging in outdoor activities.
              </p>
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
