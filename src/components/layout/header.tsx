'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, ArrowRight, Home, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NAV_LINKS,
  MOBILE_NAV_LINKS,
  BUSINESS_INFO,
  RESIDENTIAL_SERVICES,
  COMMERCIAL_SERVICES,
} from '@/lib/constants'
import { cn } from '@/lib/utils'

type DropdownType = 'services' | null

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = useCallback((dropdown: DropdownType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(dropdown)
  }, [])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-electric-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-soft'
            : 'bg-white/95 backdrop-blur-md'
        )}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group min-h-[44px]">
              <Image
                src="/images/westek.logo.webp"
                alt="Westek Electric Corp."
                width={180}
                height={60}
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Services Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={cn(
                    'font-medium transition-colors hover:text-electric-500 inline-flex items-center gap-1 py-2',
                    activeDropdown === 'services' ? 'text-electric-500' : 'text-charcoal-700'
                  )}
                >
                  Services
                  <ChevronDown className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  )} />
                </Link>
              </div>

              {/* Regular Nav Links */}
              {NAV_LINKS.filter(l => l.label !== 'Home').map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium transition-colors hover:text-electric-500 text-charcoal-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Button asChild size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button size="sm" asChild className="min-h-[44px] min-w-[44px] px-3">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="ml-1 text-sm font-semibold leading-none">Call Now</span>
                </a>
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'p-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center',
                  isScrolled
                    ? 'text-navy-900 hover:bg-navy-100 active:bg-navy-200'
                    : 'text-navy-900 hover:bg-navy-100 active:bg-navy-200'
                )}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* ===== SERVICES MEGA MENU ===== */}
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="hidden lg:block absolute left-0 right-0 bg-white shadow-2xl border-t border-accent-200"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container-wide py-8">
                {/* Top Row: Residential + Commercial side by side with 2-col sub-grids */}
                <div className="grid grid-cols-2 gap-12">

                  {/* Residential */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-accent-200">
                      <div className="w-8 h-8 rounded-lg bg-electric-50 flex items-center justify-center">
                        <Home className="w-4 h-4 text-electric-500" />
                      </div>
                      <h3 className="font-bold text-navy-900 text-sm">Residential Services</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                      {RESIDENTIAL_SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          className="text-charcoal-600 hover:text-electric-500 hover:bg-accent-50 transition-colors text-[13px] py-1.5 px-2.5 rounded-lg block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services#residential"
                      className="inline-flex items-center text-electric-500 text-xs font-semibold mt-3 ml-2.5 hover:text-electric-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      All Residential Services
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>

                  {/* Commercial */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-accent-200">
                      <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-navy-600" />
                      </div>
                      <h3 className="font-bold text-navy-900 text-sm">Commercial Services</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                      {COMMERCIAL_SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          className="text-charcoal-600 hover:text-electric-500 hover:bg-accent-50 transition-colors text-[13px] py-1.5 px-2.5 rounded-lg block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services#commercial"
                      className="inline-flex items-center text-electric-500 text-xs font-semibold mt-3 ml-2.5 hover:text-electric-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      All Commercial Services
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>

                </div>

                {/* Bottom Row: Specialty services + CTA */}
                <div className="mt-6 pt-6 border-t border-accent-200">
                  <div className="grid grid-cols-4 gap-4">
                    <Link
                      href="/ev-chargers"
                      className="flex items-center gap-3 p-3 rounded-xl bg-accent-50 hover:bg-accent-100 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-900 group-hover:text-electric-500 transition-colors">EV Chargers</p>
                        <p className="text-xs text-charcoal-400">Level 2 home & commercial</p>
                      </div>
                    </Link>
                    <Link
                      href="/services/switches-outlets"
                      className="flex items-center gap-3 p-3 rounded-xl bg-accent-50 hover:bg-accent-100 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-900 group-hover:text-electric-500 transition-colors">Switches & Outlets</p>
                        <p className="text-xs text-charcoal-400">Install, repair & upgrades</p>
                      </div>
                    </Link>
                    <Link
                      href="/services/led-lighting"
                      className="flex items-center gap-3 p-3 rounded-xl bg-accent-50 hover:bg-accent-100 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center shrink-0 group-hover:bg-sky-200 transition-colors">
                        <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-900 group-hover:text-electric-500 transition-colors">LED Lighting</p>
                        <p className="text-xs text-charcoal-400">Energy-efficient upgrades</p>
                      </div>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 p-3 rounded-xl bg-navy-900 hover:bg-navy-800 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-electric-500 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Get Free Estimate</p>
                        <p className="text-xs text-navy-300">{BUSINESS_INFO.phone}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-accent-100 shadow-medium"
            >
              <div className="container-wide py-4">
                <div className="flex flex-col gap-1">
                  {MOBILE_NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium text-charcoal-800 hover:text-electric-500 active:bg-accent-100 transition-colors py-3 px-2 -mx-2 rounded-lg min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <hr className="border-accent-200 my-3" />
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center gap-3 text-base font-semibold text-navy-900 py-3 px-2 -mx-2 rounded-lg min-h-[44px] active:bg-accent-100"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                  <Button asChild size="lg" className="w-full mt-3 min-h-[48px]">
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                      Call Now for Free Estimate
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
