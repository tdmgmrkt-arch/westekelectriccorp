import { Metadata } from 'next'
import { FinancingContent } from '@/components/sections/financing-content'

export const metadata: Metadata = {
  title: 'Financing - Flexible Payment Options',
  description:
    'Flexible financing options for electrical projects in Temecula & Southern California. Partner with Wisetack for easy approval, affordable payments, and no hidden fees.',
  alternates: {
    canonical: '/financing',
  },
}

export default function FinancingPage() {
  return <FinancingContent />
}
