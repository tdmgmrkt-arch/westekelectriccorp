'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FooterAccordionProps {
  title: string
  children: React.ReactNode
}

export function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Mobile: clickable accordion header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full flex items-center justify-between text-white font-bold text-base uppercase tracking-wide pb-2 border-b border-navy-700"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 text-navy-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {/* Desktop: static heading */}
      <h3 className="hidden md:block text-white font-bold text-base uppercase tracking-wide mb-4 pb-2 border-b border-navy-700">
        {title}
      </h3>
      {/* Mobile: collapsible content / Desktop: always visible */}
      <div
        className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 md:!mt-0 ${
          isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
