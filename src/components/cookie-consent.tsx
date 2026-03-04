'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Delay slightly so it doesn't flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container-wide">
        <div className="bg-navy-900 text-white rounded-2xl shadow-strong p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 text-sm text-navy-200 leading-relaxed">
            We use cookies to improve your experience on our site. By continuing to browse, you agree to our{' '}
            <Link href="/privacy" className="text-electric-400 hover:text-electric-300 underline">
              Privacy Policy
            </Link>
            .
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm text-navy-300 hover:text-white transition-colors min-h-[44px]"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-5 py-2 bg-electric-500 hover:bg-electric-600 text-white text-sm font-semibold rounded-lg transition-colors min-h-[44px]"
            >
              Accept
            </button>
            <button
              onClick={declineCookies}
              aria-label="Close cookie notice"
              className="p-2 text-navy-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center sm:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
