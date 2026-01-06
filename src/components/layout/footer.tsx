import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Star,
  ShieldCheck,
  Award,
} from 'lucide-react'
import { BUSINESS_INFO, SERVICE_AREAS, NAV_LINKS } from '@/lib/constants'

const footerServices = [
  { label: 'Residential Electrical', href: '/services#residential' },
  { label: 'Commercial Electrical', href: '/services#commercial' },
  { label: 'EV Charger Installation', href: '/ev-chargers' },
  { label: 'Panel Upgrades', href: '/services/residential/breaker-replacement' },
  { label: 'Outdoor Lighting', href: '/services/residential/outdoor-lighting' },
  { label: 'New Construction', href: '/services/residential/new-construction' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      {/* Trust Bar */}
      <div className="border-b border-navy-800">
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-electric-500" />
              </div>
              <div>
                <p className="font-semibold text-sm">Licensed & Insured</p>
                <p className="text-xs text-navy-300">{BUSINESS_INFO.license}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                <Clock className="w-5 h-5 text-electric-500" />
              </div>
              <div>
                <p className="font-semibold text-sm">24/7 Emergency</p>
                <p className="text-xs text-navy-300">Always Available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                <Award className="w-5 h-5 text-electric-500" />
              </div>
              <div>
                <p className="font-semibold text-sm">15+ Years</p>
                <p className="text-xs text-navy-300">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                <Star className="w-5 h-5 text-electric-500" />
              </div>
              <div>
                <p className="font-semibold text-sm">4.9 Star Rating</p>
                <p className="text-xs text-navy-300">127+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/westek.logo.webp"
                alt="Westek Electric Corp."
                width={180}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              Your trusted electrical contractors serving Lake Elsinore, Temecula, Murrieta,
              and all of Southern California. Quality work, honest pricing,
              guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-electric-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-electric-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-electric-500 transition-colors"
                aria-label="Yelp"
              >
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href as never}
                    className="text-navy-200 hover:text-electric-400 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {SERVICE_AREAS.slice(0, 10).map((area) => (
                <li key={area}>
                  <span className="text-navy-200 text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-electric-400 text-sm font-medium">
              & Surrounding Areas
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start gap-3 text-navy-200 hover:text-electric-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{BUSINESS_INFO.phone}</p>
                    <p className="text-xs">24/7 Emergency Available</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3 text-navy-200 hover:text-electric-400 transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span className="text-sm">{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-navy-200">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <address className="not-italic text-sm">
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{' '}
                    {BUSINESS_INFO.address.zip}
                  </address>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-navy-200">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <p>Mon-Fri: {BUSINESS_INFO.hours.weekdays}</p>
                    <p>Sat: {BUSINESS_INFO.hours.saturday}</p>
                    <p>Sun: {BUSINESS_INFO.hours.sunday}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-300 text-sm text-center md:text-left">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-navy-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-navy-300 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <a
                href="/sitemap.xml"
                className="text-navy-300 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
