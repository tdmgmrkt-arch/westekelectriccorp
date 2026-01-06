'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-soft'
          : 'bg-white/95 backdrop-blur-md'
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/westek.logo.webp"
              alt="Westek Electric Corp."
              width={180}
              height={60}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-electric-500',
                  isScrolled ? 'text-charcoal-700' : 'text-charcoal-700'
                )}
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
          <div className="flex lg:hidden items-center gap-3">
            <Button size="sm" asChild className="hidden sm:inline-flex">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                <Phone className="w-4 h-4" />
                Call
              </a>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                isScrolled
                  ? 'text-navy-900 hover:bg-navy-100'
                  : 'text-navy-900 hover:bg-navy-100'
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-accent-100 shadow-medium"
          >
            <div className="container-wide py-6">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-charcoal-800 hover:text-electric-500 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="border-accent-200 my-2" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-3 text-lg font-semibold text-navy-900"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Button asChild size="lg" className="w-full mt-2">
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
  )
}
