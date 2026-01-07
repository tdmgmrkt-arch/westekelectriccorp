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
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/constants'

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
    <footer className="bg-navy-900 text-white relative z-10">
      {/* Trust Bar */}
      <div className="border-b border-navy-700/50">
        <div className="container-wide py-5 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-navy-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-electric-400" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-white">Licensed & Insured</p>
                <p className="text-xs text-navy-300 truncate">CA License #C10-1100272</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-navy-800 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-electric-400" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-white">24/7 Emergency</p>
                <p className="text-xs text-navy-300">Always Available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-navy-800 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-electric-400" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-white">15+ Years</p>
                <p className="text-xs text-navy-300">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-navy-800 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-electric-400" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-white">4.9 Star Rating</p>
                <p className="text-xs text-navy-300">127+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/westek.logo.webp"
                alt="Westek Electric Corp."
                width={160}
                height={50}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted electrical contractors serving Lake Elsinore, Temecula, Murrieta,
              and all of Southern California. Quality work, honest pricing,
              guaranteed satisfaction.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-lg bg-navy-800 flex items-center justify-center hover:bg-electric-500 active:bg-electric-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-lg bg-navy-800 flex items-center justify-center hover:bg-electric-500 active:bg-electric-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-lg bg-navy-800 flex items-center justify-center hover:bg-electric-500 active:bg-electric-600 transition-colors"
                aria-label="Yelp"
              >
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-base uppercase tracking-wide mb-4 pb-2 border-b border-navy-700">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href as never}
                    className="text-navy-200 hover:text-electric-400 active:text-electric-300 transition-colors text-sm py-1 block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-base uppercase tracking-wide mb-4 pb-2 border-b border-navy-700">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {SERVICE_AREAS.slice(0, 10).map((area) => (
                <li key={area}>
                  <span className="text-navy-200 text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-electric-400 text-sm font-semibold">
              & Surrounding Areas
            </p>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-base uppercase tracking-wide mb-4 pb-2 border-b border-navy-700">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start gap-3 text-navy-200 hover:text-electric-400 active:text-electric-300 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shrink-0 group-hover:bg-electric-500 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{BUSINESS_INFO.phone}</p>
                    <p className="text-xs text-electric-400">24/7 Emergency Available</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-3 text-navy-200 hover:text-electric-400 active:text-electric-300 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shrink-0 group-hover:bg-electric-500 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm break-all">{BUSINESS_INFO.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-navy-200">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <address className="not-italic text-sm">
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                  </address>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-navy-200">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-sm">
                    <p>Mon-Fri: {BUSINESS_INFO.hours.weekdays}</p>
                    <p>Sat-Sun: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700/50 bg-navy-950">
        <div className="container-wide py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm text-center md:text-left">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 md:gap-6">
              <Link
                href="/privacy"
                className="text-navy-400 hover:text-white active:text-electric-400 transition-colors text-sm px-2 py-2 min-h-[44px] flex items-center"
              >
                Privacy Policy
              </Link>
              <span className="text-navy-600 hidden md:inline">|</span>
              <Link
                href="/terms"
                className="text-navy-400 hover:text-white active:text-electric-400 transition-colors text-sm px-2 py-2 min-h-[44px] flex items-center"
              >
                Terms of Service
              </Link>
              <span className="text-navy-600 hidden md:inline">|</span>
              <a
                href="/sitemap.xml"
                className="text-navy-400 hover:text-white active:text-electric-400 transition-colors text-sm px-2 py-2 min-h-[44px] flex items-center"
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
