'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, Clock, Settings, ShieldCheck, FileText, CheckCircle2, Timer, CreditCard, ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { UniversalQuoteForm } from '@/components/forms/universal-quote-form'
import { BUSINESS_INFO } from '@/lib/constants'

const financingBenefits = [
  {
    icon: DollarSign,
    title: 'Affordable Payments',
    description: 'Spread your costs into manageable monthly payments that fit your budget.',
  },
  {
    icon: Clock,
    title: 'Quick & Easy Application',
    description: 'Apply for financing online in minutes with fast approval.',
  },
  {
    icon: Settings,
    title: 'Custom Plans',
    description: 'Choose the payment plan that works best for your financial situation.',
  },
  {
    icon: ShieldCheck,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no hidden charges or surprises.',
  },
]

const howItWorks = [
  {
    step: 1,
    icon: FileText,
    title: 'Get an Estimate',
    description: 'Contact Westek Electric for a free estimate on your electrical project.',
  },
  {
    step: 2,
    icon: CreditCard,
    title: 'Apply for Financing',
    description: "Through Wisetack's secure online portal, complete your financing application in just a few easy steps.",
  },
  {
    step: 3,
    icon: Timer,
    title: 'Approval in Minutes',
    description: 'Most applications are approved within minutes, allowing you to move forward without delay.',
  },
  {
    step: 4,
    icon: CheckCircle2,
    title: 'Flexible Options',
    description: 'Once approved, select the payment plan that fits your needs and we\'ll get started on your project.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FinancingContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/westek.logo.webp"
                  alt="Westek Electric Corp."
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold text-charcoal-400">+</span>
                <Image
                  src="/images/wistack-logo.webp"
                  alt="Wisetack"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6">
                Financing with{' '}
                <span className="text-electric-500">Westek & Wisetack</span>
              </h1>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                At Westek Electric Corp, we understand that electrical work can be an unexpected expense.
                That&apos;s why we&apos;ve partnered with Wisetack to provide flexible financing solutions
                that fit your needs and make our services more accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {BUSINESS_INFO.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Get Free Estimate
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative hexagon */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-electric-500/10 hexagon" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-navy-900/10 hexagon" />

                {/* Phone Image */}
                <div className="relative z-10">
                  <Image
                    src="/images/westek.wistackphone.webp"
                    alt="Wisetack Financing App on Phone"
                    width={400}
                    height={500}
                    className="object-contain mx-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Finance Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Flexible Payment Options
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Finance with Westek & Wisetack?
            </h2>
            <p className="text-lg text-charcoal-600">
              Get the electrical work you need now with payment plans that work for your budget.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {financingBenefits.map((benefit) => {
              const IconComponent = benefit.icon
              return (
                <motion.div key={benefit.title} variants={itemVariants}>
                  <Card className="h-full text-center hover:shadow-medium transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-electric-100 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-electric-500" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-charcoal-600">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-accent-100">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-charcoal-600">
              Getting financing for your electrical project is quick and easy.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {howItWorks.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div key={step.title} variants={itemVariants} className="relative">
                  {/* Connector Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-electric-200" />
                  )}

                  <div className="relative bg-white rounded-2xl p-6 shadow-soft">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-2 w-10 h-10 bg-electric-500 rounded-full flex items-center justify-center text-white font-bold shadow-medium">
                      {step.step}
                    </div>

                    <div className="pt-4">
                      <div className="w-14 h-14 mb-4 bg-navy-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-navy-900" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-charcoal-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/10 hexagon transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-electric-500/10 hexagon transform -translate-x-1/2 translate-y-1/2" />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Take the Stress Out of Paying for Electrical Work
              </h2>
              <p className="text-lg text-navy-200 mb-6">
                With Wisetack and Westek Electric Corp, you can get the high-quality service you need
                with a payment plan that works for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                    Call {BUSINESS_INFO.phone}
                  </a>
                </Button>
                <Button asChild variant="outline-white" size="lg">
                  <Link href="/contact">
                    Request Free Quote
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/westek.wistack.webp"
                alt="Westek and Wisetack Partnership"
                width={500}
                height={300}
                className="rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financing Form Section */}
      <section className="section-padding bg-gradient-to-br from-white via-accent-50 to-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Secure Flexible Financing for Your Electrical Project
              </h2>
              <p className="text-lg text-charcoal-600 mb-8">
                We understand that electrical projects can come with unexpected costs, but that shouldn&apos;t
                stop you from getting the work done. Whether it&apos;s a commercial, residential, or industrial
                project, we make it easy to apply and get approved in minutes.
              </p>

              {/* Financing Image */}
              <div className="mb-8 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-medium">
                <Image
                  src="/images/secure.financing.webp"
                  alt="Secure Financing for Your Electrical Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-electric-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-900">All Project Types Welcome</h4>
                    <p className="text-sm text-charcoal-600">Residential, commercial, and industrial electrical work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-electric-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Competitive Rates</h4>
                    <p className="text-sm text-charcoal-600">Affordable financing options to fit your budget</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-electric-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-900">No Obligation Quote</h4>
                    <p className="text-sm text-charcoal-600">Get your free estimate with no commitment required</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-6 border-t border-accent-200">
                <div className="text-center">
                  <p className="text-3xl font-bold text-electric-500">15+</p>
                  <p className="text-xs text-charcoal-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-electric-500">5,000+</p>
                  <p className="text-xs text-charcoal-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-electric-500">127+</p>
                  <p className="text-xs text-charcoal-600">5-Star Reviews</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-strong border-0">
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                      Request Financing Information
                    </h3>
                    <p className="text-charcoal-600">
                      Fill out the form below and we&apos;ll contact you about financing options for your project.
                    </p>
                  </div>
                  <UniversalQuoteForm
                    formSource="Financing Page Quote Form"
                    webhookUrl="https://services.leadconnectorhq.com/hooks/cTWvxYzUkVhbvkctrFto/webhook-trigger/1cfa2fb9-7202-4cd7-9a01-017afb98b6b6"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our financing options and get a free estimate for your electrical project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                Call {BUSINESS_INFO.phone}
              </a>
            </Button>
            <Button asChild variant="outline-white" size="lg">
              <Link href="/contact">
                Request Free Estimate
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
