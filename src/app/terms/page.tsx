import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Westek Electric Corp. Read our terms and conditions for using our electrical services.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Terms of Service
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
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by {BUSINESS_INFO.name} (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>

            <h2>Services</h2>
            <p>
              {BUSINESS_INFO.name} provides residential, commercial, and industrial electrical
              services in Southern California. Our services include, but are not limited to:
            </p>
            <ul>
              <li>Electrical installations and repairs</li>
              <li>Panel upgrades and replacements</li>
              <li>EV charger installation</li>
              <li>Lighting installation and design</li>
              <li>Code corrections and inspections</li>
              <li>Emergency electrical services</li>
            </ul>

            <h2>Estimates and Pricing</h2>
            <p>
              We provide free estimates for most electrical projects. Estimates are based on the
              information provided and our initial assessment. Final pricing may vary based on:
            </p>
            <ul>
              <li>Actual scope of work discovered during the project</li>
              <li>Changes requested by the customer</li>
              <li>Unforeseen conditions or complications</li>
              <li>Required permits and inspections</li>
              <li>Material cost fluctuations</li>
            </ul>
            <p>
              Any changes to the original estimate will be communicated and approved before
              additional work is performed.
            </p>

            <h2>Scheduling and Access</h2>
            <p>
              You agree to provide reasonable access to your property for scheduled service
              appointments. If you need to reschedule, please provide at least 24 hours notice.
              Repeated no-shows or last-minute cancellations may result in a service fee.
            </p>

            <h2>Permits and Inspections</h2>
            <p>
              Certain electrical work requires permits and inspections per California law. We handle
              permit applications and coordinate inspections as part of our service. You are
              responsible for ensuring access for required inspections.
            </p>

            <h2>Warranties and Guarantees</h2>
            <p>
              We stand behind our work. Our services include:
            </p>
            <ul>
              <li>Workmanship warranty on labor performed</li>
              <li>Manufacturer warranties on installed equipment and materials</li>
              <li>Satisfaction guarantee on completed projects</li>
            </ul>
            <p>
              Warranty terms vary by service type and will be provided in writing upon project
              completion. Warranties do not cover damage caused by misuse, neglect, or unauthorized
              modifications.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment is due upon completion of services unless other arrangements have been made.
              For larger projects, we may require a deposit before work begins. We accept various
              payment methods, and financing options are available through our partner, Wisetack.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {BUSINESS_INFO.name} shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising from or
              related to our services. Our total liability shall not exceed the amount paid for the
              services in question.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {BUSINESS_INFO.name}, its officers,
              employees, and agents from any claims, damages, losses, or expenses arising from your
              breach of these terms or misuse of our services.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and images, is the
              property of {BUSINESS_INFO.name} and is protected by copyright laws. You may not
              reproduce, distribute, or use our content without written permission.
            </p>

            <h2>Website Use</h2>
            <p>When using our website, you agree not to:</p>
            <ul>
              <li>Use the site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Submit false or misleading information</li>
              <li>Collect or harvest user information</li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              content or privacy practices of these sites. Your use of third-party websites is at
              your own risk.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of California. Any
              disputes arising from these terms or our services shall be resolved in the courts of
              Riverside County, California.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective immediately upon posting to our website. Your continued use of our services
              constitutes acceptance of any modified terms.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              shall continue in full force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
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
