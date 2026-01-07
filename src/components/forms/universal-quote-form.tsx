'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import { Loader2, Send, CheckCircle2, ChevronDown, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES, SERVICE_CATEGORIES } from '@/lib/constants'

const RECAPTCHA_SITE_KEY = '6LfdVUIsAAAAAEkutqurevpauvNgCikqQwCQchET'

// Declare grecaptcha for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void
        execute: (siteKey: string, options: { action: string }) => Promise<string>
      }
    }
  }
}

const projectScopeOptions = [
  { value: 'residential', label: 'Residential' },
  { value: 'business', label: 'Business' },
  { value: 'reconstruction', label: 'Reconstruction' },
]

// Map services to dropdown options
const residentialServiceOptions = RESIDENTIAL_SERVICES.map((s) => ({
  value: s.id,
  label: `${s.category} - ${s.title}`,
}))

const commercialServiceOptions = COMMERCIAL_SERVICES.map((s) => ({
  value: s.id,
  label: `${s.category} - ${s.title}`,
}))

// EV Charger options
const evChargerOptions = [
  { value: 'ev-charger-tesla', label: 'EV Charger - Tesla Wall Connector' },
  { value: 'ev-charger-ford', label: 'EV Charger - Ford Charge Station' },
  { value: 'ev-charger-chevrolet', label: 'EV Charger - Chevrolet/GM' },
  { value: 'ev-charger-rivian', label: 'EV Charger - Rivian' },
  { value: 'ev-charger-universal', label: 'EV Charger - Universal Level 2' },
]

// Industrial services
const industrialCategory = SERVICE_CATEGORIES.find((c) => c.id === 'industrial')
const industrialServiceOptions = industrialCategory
  ? industrialCategory.services.map((service, index) => ({
      value: `industrial-${index}`,
      label: `Industrial - ${service}`,
    }))
  : []

// Design & Planning services
const designCategory = SERVICE_CATEGORIES.find((c) => c.id === 'design')
const designServiceOptions = designCategory
  ? designCategory.services.map((service, index) => ({
      value: `design-${index}`,
      label: `Design & Planning - ${service}`,
    }))
  : []

// Default webhook URL
const DEFAULT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/cTWvxYzUkVhbvkctrFto/webhook-trigger/5bdcae9d-6735-4842-b2b7-ef8abc4c0eee'

// Get services for a scope
function getServicesForScope(scope: string) {
  if (scope === 'residential') {
    return [...residentialServiceOptions, ...evChargerOptions, ...designServiceOptions]
  }
  if (scope === 'business') {
    return [...commercialServiceOptions, ...evChargerOptions, ...industrialServiceOptions, ...designServiceOptions]
  }
  if (scope === 'reconstruction') {
    return [...commercialServiceOptions, ...residentialServiceOptions, ...industrialServiceOptions, ...designServiceOptions]
  }
  return []
}

export interface UniversalQuoteFormProps {
  initialProjectScope?: 'residential' | 'business' | 'reconstruction'
  initialServices?: string[]
  onSuccess?: () => void
  webhookUrl?: string
  formSource?: string
}

export function UniversalQuoteForm({
  initialProjectScope,
  initialServices = [],
  onSuccess,
  webhookUrl = DEFAULT_WEBHOOK_URL,
  formSource = 'Website Quote Form',
}: UniversalQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [projectScope, setProjectScope] = useState(initialProjectScope || '')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>(initialServices)
  const formRef = useRef<HTMLFormElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const availableServices = getServicesForScope(projectScope)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  // Reset services when project scope changes
  useEffect(() => {
    if (projectScope !== initialProjectScope) {
      setSelectedServices([])
    }
  }, [projectScope, initialProjectScope])

  const handleServiceToggle = (serviceValue: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceValue)
        ? prev.filter(s => s !== serviceValue)
        : [...prev, serviceValue]
    )
  }

  const removeService = (serviceValue: string) => {
    setSelectedServices(prev => prev.filter(s => s !== serviceValue))
  }

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const scope = formData.get('projectScope') as string
    const message = formData.get('message') as string

    if (!name || name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    if (!email || !email.includes('@')) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!phone || phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!scope) {
      newErrors.projectScope = 'Please select a project type'
    }
    if (selectedServices.length === 0) {
      newErrors.services = 'Please select at least one service'
    }
    // Message is optional now

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    if (!validateForm(formData)) {
      return
    }

    setIsSubmitting(true)

    try {
      // Get reCAPTCHA token
      let recaptchaToken = ''
      if (typeof window !== 'undefined' && window.grecaptcha?.enterprise) {
        try {
          await new Promise<void>((resolve) => {
            window.grecaptcha.enterprise.ready(() => resolve())
          })
          recaptchaToken = await window.grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, { action: 'SUBMIT_FORM' })
        } catch (recaptchaError) {
          console.error('reCAPTCHA error:', recaptchaError)
          // Continue without token if reCAPTCHA fails
        }
      }

      const serviceLabels = selectedServices.map((serviceId) => {
        const service = availableServices.find((s) => s.value === serviceId)
        return service ? service.label : serviceId
      })

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          projectScope: formData.get('projectScope'),
          services: serviceLabels,
          message: formData.get('message') || '',
          source: formSource,
          timestamp: new Date().toISOString(),
          recaptchaToken,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      formRef.current?.reset()
      setProjectScope('')
      setSelectedServices([])

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000)
      }

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setIsSubmitted(true)
      formRef.current?.reset()
      setProjectScope('')
      setSelectedServices([])
      setTimeout(() => setIsSubmitted(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-6 md:p-8 text-center">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
          <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8 text-green-600" />
        </div>
        <h3 className="text-lg md:text-xl font-heading font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 text-sm md:text-base">
          We&apos;ve received your quote request and will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="quote-name" className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Full Name <span className="text-electric-500">*</span>
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          placeholder="John Smith"
          className={cn(
            'flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-base text-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
            errors.name ? 'border-electric-500' : 'border-accent-300'
          )}
        />
        {errors.name && <p className="text-sm text-electric-500 mt-1">{errors.name}</p>}
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="quote-email" className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Email Address <span className="text-electric-500">*</span>
        </label>
        <input
          id="quote-email"
          name="email"
          type="email"
          placeholder="john@example.com"
          className={cn(
            'flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-base text-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
            errors.email ? 'border-electric-500' : 'border-accent-300'
          )}
        />
        {errors.email && <p className="text-sm text-electric-500 mt-1">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="quote-phone" className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Phone Number <span className="text-electric-500">*</span>
        </label>
        <input
          id="quote-phone"
          name="phone"
          type="tel"
          placeholder="(951) 555-0123"
          className={cn(
            'flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-base text-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
            errors.phone ? 'border-electric-500' : 'border-accent-300'
          )}
        />
        {errors.phone && <p className="text-sm text-electric-500 mt-1">{errors.phone}</p>}
      </div>

      {/* Project Scope */}
      <div>
        <label htmlFor="quote-scope" className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Project Scope <span className="text-electric-500">*</span>
        </label>
        <select
          id="quote-scope"
          name="projectScope"
          value={projectScope}
          onChange={(e) => setProjectScope(e.target.value)}
          className={cn(
            'flex h-12 w-full rounded-xl border bg-white px-4 py-2 text-base text-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
            errors.projectScope ? 'border-electric-500' : 'border-accent-300'
          )}
        >
          <option value="">Select project type...</option>
          {projectScopeOptions.map((scope) => (
            <option key={scope.value} value={scope.value}>
              {scope.label}
            </option>
          ))}
        </select>
        {errors.projectScope && <p className="text-sm text-electric-500 mt-1">{errors.projectScope}</p>}
      </div>

      {/* Service Needed */}
      <div>
        <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Service Needed <span className="text-electric-500">*</span>
        </label>

        {/* Selected Services Tags */}
        {selectedServices.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedServices.map((serviceId) => {
              const service = availableServices.find((s) => s.value === serviceId)
              if (!service) return null
              return (
                <span
                  key={serviceId}
                  className="inline-flex items-center gap-1 bg-electric-100 text-electric-700 pl-3 pr-1 py-1 rounded-full text-sm"
                >
                  {service.label}
                  <button
                    type="button"
                    onClick={() => removeService(serviceId)}
                    className="hover:text-electric-900 active:text-electric-900 transition-colors p-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              )
            })}
          </div>
        )}

        {projectScope ? (
          <div ref={dropdownRef} className="relative">
            {/* Dropdown Toggle Button */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={cn(
                'flex h-12 w-full items-center justify-between rounded-xl border bg-white px-4 py-2 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
                errors.services ? 'border-electric-500' : 'border-accent-300',
                selectedServices.length > 0 ? 'text-charcoal-800' : 'text-charcoal-400'
              )}
            >
              <span>
                {selectedServices.length > 0
                  ? `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`
                  : 'Select services...'}
              </span>
              <ChevronDown className={cn(
                'w-5 h-5 text-charcoal-400 transition-transform',
                isDropdownOpen && 'rotate-180'
              )} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-50 mt-1 w-full bg-white border border-accent-300 rounded-xl shadow-lg max-h-60 md:max-h-48 overflow-y-auto">
                {availableServices.map((service) => (
                  <div
                    key={service.value}
                    className="flex items-center gap-3 px-3 py-3.5 md:py-3 hover:bg-accent-50 active:bg-accent-100 cursor-pointer min-h-[48px]"
                    onClick={() => handleServiceToggle(service.value)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.value)}
                      onChange={() => {}}
                      className="w-5 h-5 md:w-4 md:h-4 rounded border-charcoal-300 text-electric-500 focus:ring-electric-500 pointer-events-none shrink-0"
                    />
                    <span className="text-sm text-charcoal-700">{service.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-12 w-full items-center rounded-xl border border-accent-300 bg-white px-4 py-2 text-base text-charcoal-400 opacity-50">
            Select project scope first...
          </div>
        )}

        {errors.services && <p className="text-sm text-electric-500 mt-1">{errors.services}</p>}
      </div>

      {/* Project Details (Optional) */}
      <div>
        <label htmlFor="quote-message" className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Project Details <span className="text-charcoal-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="quote-message"
          name="message"
          placeholder="Tell us about your electrical project..."
          rows={4}
          className="flex w-full rounded-xl border border-accent-300 bg-white px-4 py-3 text-base text-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Request Free Estimate
          </>
        )}
      </Button>

      <p className="text-xs text-charcoal-500 text-center leading-relaxed">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-navy-700 hover:underline active:text-electric-500 py-1">
          Privacy Policy
        </a>
        . We&apos;ll never share your information.
      </p>
    </form>
  )
}
