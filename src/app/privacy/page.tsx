import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Westek Electric Corp. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl prose prose-lg prose-navy">
            <h2>Introduction</h2>
            <p>
              {BUSINESS_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
              committed to protecting your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website or
              use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out a contact form or request a quote</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via phone, email, or social media</li>
              <li>Schedule a service appointment</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Street address</li>
              <li>Project details and service requirements</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your
              device and usage, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Process and fulfill service requests</li>
              <li>Send you quotes, invoices, and service-related communications</li>
              <li>Improve our website and services</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties
              except in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist us in operating our website and business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your consent</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our
              website. You can control cookies through your browser settings, but disabling them may
              affect website functionality.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2>California Privacy Rights</h2>
            <p>
              California residents have additional rights under the California Consumer Privacy Act
              (CCPA), including the right to know what personal information we collect and how it is
              used, and the right to request deletion of personal information.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please
              contact us:
            </p>
            <ul>
              <li>Phone: {BUSINESS_INFO.phone}</li>
              <li>Email: {BUSINESS_INFO.email}</li>
              <li>
                Address: {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city},{' '}
                {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-accent-200">
              <Link href="/contact" className="text-electric-500 hover:text-electric-600 font-medium">
                Contact Us With Questions &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
