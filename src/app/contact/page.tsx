import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { UniversalQuoteForm } from '@/components/forms/universal-quote-form'
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Westek Electric Corp. for electrical services in Lake Elsinore, Temecula & Murrieta. Call (909) 996-6678 for free estimates. 24/7 emergency service available.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Ready to start your electrical project? Have a question? We&apos;re here to help.
              Contact us today for a free, no-obligation estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-electric-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-electric-500 transition-colors">
                    <Phone className="w-6 h-6 text-electric-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Phone</h3>
                    <p className="text-charcoal-600">{BUSINESS_INFO.phone}</p>
                    <p className="text-sm text-electric-500">24/7 Emergency Available</p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-navy-900 transition-colors">
                    <Mail className="w-6 h-6 text-navy-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Email</h3>
                    <p className="text-charcoal-600">{BUSINESS_INFO.email}</p>
                    <p className="text-sm text-charcoal-500">We respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Address</h3>
                    <address className="not-italic text-charcoal-600">
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Business Hours</h3>
                    <div className="text-charcoal-600">
                      <p>Monday - Friday: {BUSINESS_INFO.hours.weekdays}</p>
                      <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                      <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-accent-100 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-navy-900 mb-4">
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="bg-white px-3 py-1 rounded-full text-sm text-charcoal-700 border border-accent-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-medium">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                    Request a Free Estimate
                  </h2>
                  <p className="text-charcoal-600 mb-6">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                  <UniversalQuoteForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-accent-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-charcoal-500">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <p className="font-medium">Google Maps Embed</p>
            <p className="text-sm">Replace with actual map integration</p>
          </div>
        </div>
      </section>
    </>
  )
}
