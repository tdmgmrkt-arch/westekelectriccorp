'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { UniversalQuoteForm } from './universal-quote-form'

export interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialProjectScope?: 'residential' | 'business' | 'reconstruction'
  initialServices?: string[]
  serviceTitle?: string
}

export function QuoteModal({
  isOpen,
  onClose,
  initialProjectScope,
  initialServices = [],
  serviceTitle,
}: QuoteModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {serviceTitle ? `Request Quote: ${serviceTitle}` : 'Request a Free Quote'}
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <UniversalQuoteForm
          initialProjectScope={initialProjectScope}
          initialServices={initialServices}
          onSuccess={onClose}
        />
      </DialogContent>
    </Dialog>
  )
}

// Context provider for global quote modal state
import { createContext, useContext, useCallback, ReactNode } from 'react'

interface QuoteModalContextType {
  openQuoteModal: (options?: {
    projectScope?: 'residential' | 'business' | 'reconstruction'
    services?: string[]
    serviceTitle?: string
  }) => void
}

const QuoteModalContext = createContext<QuoteModalContextType | null>(null)

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider')
  }
  return context
}

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOptions, setModalOptions] = useState<{
    projectScope?: 'residential' | 'business' | 'reconstruction'
    services?: string[]
    serviceTitle?: string
  }>({})

  const openQuoteModal = useCallback(
    (options?: {
      projectScope?: 'residential' | 'business' | 'reconstruction'
      services?: string[]
      serviceTitle?: string
    }) => {
      setModalOptions(options || {})
      setIsOpen(true)
    },
    []
  )

  const closeModal = useCallback(() => {
    setIsOpen(false)
    // Reset options after animation completes
    setTimeout(() => setModalOptions({}), 300)
  }, [])

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeModal}
        initialProjectScope={modalOptions.projectScope}
        initialServices={modalOptions.services}
        serviceTitle={modalOptions.serviceTitle}
      />
    </QuoteModalContext.Provider>
  )
}
