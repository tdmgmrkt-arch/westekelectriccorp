'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Send, CheckCircle2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '@/lib/constants'

const quoteFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectScope: z.string().min(1, 'Please select a project type'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  message: z.string().min(10, 'Please describe your project in more detail'),
})

type QuoteFormData = z.infer<typeof quoteFormSchema>

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

export interface UniversalQuoteFormProps {
  initialProjectScope?: 'residential' | 'business' | 'reconstruction'
  initialServices?: string[]
  onSuccess?: () => void
}

export function UniversalQuoteForm({
  initialProjectScope,
  initialServices = [],
  onSuccess,
}: UniversalQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>(initialServices)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      projectScope: initialProjectScope || '',
      services: initialServices,
    },
  })

  const projectScope = watch('projectScope')

  // Get available services based on project scope
  const availableServices = projectScope === 'residential'
    ? residentialServiceOptions
    : projectScope === 'business' || projectScope === 'reconstruction'
    ? commercialServiceOptions
    : []

  // Update form value when selectedServices changes
  useEffect(() => {
    setValue('services', selectedServices)
  }, [selectedServices, setValue])

  // Reset services when project scope changes (but keep initial if matching)
  useEffect(() => {
    if (initialProjectScope && projectScope === initialProjectScope) {
      setSelectedServices(initialServices)
    } else if (projectScope && projectScope !== initialProjectScope) {
      setSelectedServices([])
    }
  }, [projectScope, initialProjectScope, initialServices])

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const removeService = (serviceId: string) => {
    setSelectedServices((prev) => prev.filter((id) => id !== serviceId))
  }

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    // In production, this would be a server action or API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Quote form data:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setSelectedServices([])

    // Call success callback
    if (onSuccess) {
      setTimeout(() => {
        onSuccess()
      }, 2000)
    }

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We&apos;ve received your quote request and will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div>
        <label
          htmlFor="quote-name"
          className="block text-sm font-medium text-charcoal-700 mb-1.5"
        >
          Full Name <span className="text-electric-500">*</span>
        </label>
        <Input
          id="quote-name"
          placeholder="John Smith"
          {...register('name')}
          className={cn(errors.name && 'border-electric-500 focus-visible:ring-electric-500')}
        />
        {errors.name && (
          <p className="text-sm text-electric-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label
          htmlFor="quote-email"
          className="block text-sm font-medium text-charcoal-700 mb-1.5"
        >
          Email Address <span className="text-electric-500">*</span>
        </label>
        <Input
          id="quote-email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          className={cn(errors.email && 'border-electric-500 focus-visible:ring-electric-500')}
        />
        {errors.email && (
          <p className="text-sm text-electric-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="quote-phone"
          className="block text-sm font-medium text-charcoal-700 mb-1.5"
        >
          Phone Number <span className="text-electric-500">*</span>
        </label>
        <Input
          id="quote-phone"
          type="tel"
          placeholder="(951) 555-0123"
          {...register('phone')}
          className={cn(errors.phone && 'border-electric-500 focus-visible:ring-electric-500')}
        />
        {errors.phone && (
          <p className="text-sm text-electric-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Project Scope */}
      <div>
        <label
          htmlFor="quote-scope"
          className="block text-sm font-medium text-charcoal-700 mb-1.5"
        >
          Project Scope <span className="text-electric-500">*</span>
        </label>
        <select
          id="quote-scope"
          {...register('projectScope')}
          className={cn(
            'flex h-12 w-full rounded-xl border border-accent-300 bg-white px-4 py-2 text-base text-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
            errors.projectScope && 'border-electric-500 focus-visible:ring-electric-500'
          )}
        >
          <option value="">Select project type...</option>
          {projectScopeOptions.map((scope) => (
            <option key={scope.value} value={scope.value}>
              {scope.label}
            </option>
          ))}
        </select>
        {errors.projectScope && (
          <p className="text-sm text-electric-500 mt-1">{errors.projectScope.message}</p>
        )}
      </div>

      {/* Service Needed (Multi-select) */}
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
                  className="inline-flex items-center gap-1 bg-electric-100 text-electric-700 px-3 py-1 rounded-full text-sm"
                >
                  {service.label}
                  <button
                    type="button"
                    onClick={() => removeService(serviceId)}
                    className="hover:text-electric-900 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )
            })}
          </div>
        )}

        {/* Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
            disabled={!projectScope}
            className={cn(
              'flex h-12 w-full items-center justify-between rounded-xl border border-accent-300 bg-white px-4 py-2 text-base text-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
              !projectScope && 'opacity-50 cursor-not-allowed',
              errors.services && 'border-electric-500 focus-visible:ring-electric-500'
            )}
          >
            <span className={cn(!projectScope && 'text-charcoal-400')}>
              {!projectScope
                ? 'Select project scope first...'
                : selectedServices.length === 0
                ? 'Select services (select all that apply)...'
                : `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`}
            </span>
            <svg
              className={cn(
                'w-5 h-5 text-charcoal-400 transition-transform',
                isServiceDropdownOpen && 'rotate-180'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isServiceDropdownOpen && projectScope && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-accent-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
              {availableServices.map((service) => (
                <label
                  key={service.value}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-accent-50 cursor-pointer border-b border-accent-100 last:border-b-0"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.value)}
                    onChange={() => toggleService(service.value)}
                    className="w-4 h-4 rounded border-accent-300 text-electric-500 focus:ring-electric-500"
                  />
                  <span className="text-sm text-charcoal-700">{service.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Hidden input for form validation */}
        <input type="hidden" {...register('services')} />
        {errors.services && (
          <p className="text-sm text-electric-500 mt-1">{errors.services.message}</p>
        )}
      </div>

      {/* Project Details */}
      <div>
        <label
          htmlFor="quote-message"
          className="block text-sm font-medium text-charcoal-700 mb-1.5"
        >
          Project Details <span className="text-electric-500">*</span>
        </label>
        <Textarea
          id="quote-message"
          placeholder="Tell us about your electrical project..."
          rows={4}
          {...register('message')}
          className={cn(errors.message && 'border-electric-500 focus-visible:ring-electric-500')}
        />
        {errors.message && (
          <p className="text-sm text-electric-500 mt-1">{errors.message.message}</p>
        )}
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

      <p className="text-xs text-charcoal-500 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-navy-700 hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll never share your information.
      </p>
    </form>
  )
}
