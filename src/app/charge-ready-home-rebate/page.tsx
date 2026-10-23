import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
  ShieldCheck,
  ClipboardList,
  DollarSign,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'SCE Charge Ready Home Rebate - Panel Upgrades',
  description:
    'Get up to $4,200 toward your home electric panel upgrade through the SCE Charge Ready Home program. Westek Electric Corp. is an in-network contractor serving Riverside County.',
  alternates: {
    canonical: '/charge-ready-home-rebate',
  },
  openGraph: {
    title: 'Up to $4,200 Toward Your Panel Upgrade | Westek Electric Corp.',
    description:
      'The SCE Charge Ready Home program helps qualifying Southern California Edison customers upgrade their electric panel. Westek Electric Corp. is an in-network contractor.',
    images: ['/images/charge-ready/charge-ready-6.jpeg'],
  },
}

// Rebate amounts and eligibility criteria per the SCE Charge Ready Home program.
// Verify against evhome.sce.com before changing — these are program terms, not our numbers.
const rebateTiers = [
  {
    amount: '$4,200',
    label: 'Income-qualified households',
    description:
      'For qualified low-income households, or households enrolled in at least one qualifying public assistance program.',
  },
  {
    amount: '$2,100',
    label: 'Disadvantaged communities',
    description:
      'For qualified households located in an area designated by the state as a disadvantaged community (DAC).',
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Apply with SCE',
    description:
      'Complete the application online at evhome.sce.com. SCE reviews your eligibility — not us.',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Choose your contractor',
    description:
      'Pick your own licensed electrician, or select from the program list of eligible contractors in your area. Westek Electric Corp. is in-network.',
    icon: ClipboardList,
  },
  {
    step: 3,
    title: 'We do the upgrade',
    description:
      'We complete the panel upgrade start to finish and work with you to submit the rebate paperwork.',
    icon: Zap,
  },
  {
    step: 4,
    title: 'Receive your rebate',
    description: 'SCE issues your rebate electronically or by mail once the work is complete.',
    icon: DollarSign,
  },
]

const projectPhotos = [
  {
    src: '/images/charge-ready/charge-ready-1.jpeg',
    alt: 'Original electrical panel removed and the exterior wall opened up for a panel upgrade',
    caption: 'The old panel comes out and the wall is opened up.',
  },
  {
    src: '/images/charge-ready/charge-ready-2.jpeg',
    alt: 'New 200-amp electrical panel set into the wall opening with circuits being landed',
    caption: 'The new panel is set and circuits are landed one at a time.',
  },
  {
    src: '/images/charge-ready/charge-ready-3.jpeg',
    alt: 'Interior of a new residential electrical panel with every branch circuit neatly landed on the bus',
    caption: 'Every existing circuit re-landed on the new bus.',
  },
  {
    src: '/images/charge-ready/charge-ready-4.jpeg',
    alt: 'New residential electrical panel and meter main installed on an exterior stucco wall',
    caption: 'New panel and meter main in place.',
  },
  {
    src: '/images/charge-ready/charge-ready-5.jpeg',
    alt: 'Finished electrical panel with labeled breakers including a dedicated solar circuit',
    caption: 'Labeled and ready for inspection — solar circuit included.',
  },
  {
    src: '/images/charge-ready/charge-ready-6.jpeg',
    alt: 'Completed electrical panel upgrade with the cover on and the stucco wall restored',
    caption: 'Cover on, wall closed back up, job done.',
  },
]

const chargeReadyFAQs = [
  {
    question: 'What is the SCE Charge Ready Home program?',
    answer:
      'It is a rebate program from Southern California Edison that helps eligible residential customers pay for an electric panel upgrade on their home. Panel upgrades are often necessary before you can install a Level 2 EV charger, particularly if your existing panel is less than 200 amps. The program is administered by the Center for Sustainable Energy on behalf of SCE.',
  },
  {
    question: 'How much is the rebate?',
    answer:
      'Up to $4,200 for qualified low-income households or households enrolled in at least one qualifying public assistance program, and up to $2,100 for qualified households located in a disadvantaged community. SCE determines which amount you qualify for, if any.',
  },
  {
    question: 'Who decides if I qualify?',
    answer:
      'Southern California Edison does. Eligibility is determined entirely by SCE through the application at evhome.sce.com. We cannot approve, pre-approve, or guarantee a rebate for anyone.',
  },
  {
    question: 'Do I have to use Westek Electric Corp.?',
    answer:
      'No. The program lets you choose your own licensed contractor or select from a list of eligible contractors in your area. Westek Electric Corp. is an in-network contractor for the program, so you can choose us if you would like.',
  },
  {
    question: 'Does my home need to be a single-family residence?',
    answer:
      'The program is directed at single-family residences. Check the current eligibility requirements at evhome.sce.com, since program terms can change.',
  },
  {
    question: 'What does the panel upgrade itself involve?',
    answer:
      'We replace your existing panel with a new 200-amp service — pulling the permit, confirming the meter spot, scheduling the disconnect and reconnect with Edison, re-landing and labeling every circuit, meeting the inspector, and repairing and color matching the wall when we are finished.',
  },
]

export default function ChargeReadyHomeRebatePage() {
  const serviceSchema = generateServiceSchema({
    name: 'Electrical Panel Upgrades — SCE Charge Ready Home Program',
    description:
      'Residential electrical panel upgrades for Southern California Edison customers participating in the Charge Ready Home rebate program.',
    url: '/charge-ready-home-rebate',
  })

  const faqSchema = generateFAQSchema(chargeReadyFAQs)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'SCE Charge Ready Home Rebate', url: '/charge-ready-home-rebate' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-electric-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-electric-400" />
                </div>
                <span className="text-electric-400 font-semibold text-sm uppercase tracking-wider">
                  SCE Charge Ready Home Program
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Get up to $4,200 toward your panel upgrade
              </h1>

              <p className="text-lg text-navy-200 leading-relaxed mb-4">
                Southern California Edison offers rebates to qualifying residential customers who
                need to upgrade their home&apos;s electric panel. If your panel is under 200 amps and
                you want to charge an EV at home, this is the program that helps pay for it.
              </p>

              <p className="text-lg text-navy-200 leading-relaxed mb-8">
                Westek Electric Corp. is an in-network contractor for the program. We have been doing
                panel upgrades across Riverside County since {BUSINESS_INFO.founded}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Zap className="w-5 h-5" />
                    Get a Free Estimate
                  </Link>
                </Button>
                <Button asChild variant="outline-white" size="lg">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                    <Phone className="w-5 h-5" />
                    Call {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
              <Image
                src="/images/charge-ready/charge-ready-6.jpeg"
                alt="Completed 200-amp residential electrical panel upgrade on a Southern California home"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rebate Tiers */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              How much is the rebate?
            </h2>
            <p className="text-lg text-charcoal-600">
              The program has two rebate levels. Southern California Edison determines which one you
              qualify for when you apply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rebateTiers.map((tier) => (
              <Card key={tier.amount} className="border-2 border-accent-200">
                <CardContent className="p-8">
                  <p className="text-5xl font-heading font-bold text-electric-500 mb-2">
                    {tier.amount}
                  </p>
                  <p className="font-semibold text-navy-900 mb-3">{tier.label}</p>
                  <p className="text-charcoal-600 leading-relaxed">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-charcoal-500 mt-8 max-w-2xl mx-auto">
            Rebate amounts shown are set by the program, not by Westek Electric Corp. Eligibility and
            final rebate amounts are determined by Southern California Edison.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-accent-100">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              How the program works
            </h2>
            <p className="text-lg text-charcoal-600">
              Four steps, and you start with SCE — not with us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.step} className="bg-white h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-electric-100 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-electric-500" />
                      </div>
                      <span className="text-sm font-bold text-charcoal-400">
                        STEP {item.step}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <a href="https://evhome.sce.com" target="_blank" rel="noopener noreferrer">
                Apply at evhome.sce.com
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why upgrade */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Why your panel probably needs it
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Most homes around here were built with a 100-amp service. That was plenty when the
                biggest load in the house was a dryer. It is not plenty once you add central air, an
                electric range, a heat pump, and a car you want to charge overnight. If you are
                planning a Level 2 EV charger and your panel is under 200 amps, an upgrade is usually
                required before the charger can go in at all.
              </p>
              <ul className="space-y-3">
                {[
                  'Your panel is 100 amps or smaller',
                  'There are no open breaker spaces left',
                  'You see rust, corrosion, or scorching in the enclosure',
                  'Breakers trip when large appliances run together',
                  'You are planning an EV charger, heat pump, or electric range',
                ].map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-electric-500 shrink-0 mt-0.5" />
                    <span className="text-charcoal-600">{sign}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/services/residential/panel-upgrade">
                    More on panel upgrades
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-strong">
              <Image
                src="/images/charge-ready/charge-ready-1.jpeg"
                alt="Old undersized electrical panel removed from an exterior wall during a service upgrade"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real job gallery */}
      <section className="section-padding bg-accent-100">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              What the work actually looks like
            </h2>
            <p className="text-lg text-charcoal-600">
              A panel upgrade we completed on a Southern California home, start to finish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectPhotos.map((photo) => (
              <figure key={photo.src} className="bg-white rounded-xl overflow-hidden shadow-soft">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="p-4 text-sm text-charcoal-600">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/portfolio/200-amp-panel-upgrade">
                See the full project
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Westek */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 bg-electric-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-6 h-6 text-electric-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              An in-network contractor you can actually reach
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              Westek Electric Corp. is an in-network contractor for the SCE Charge Ready Home
              program. We handle the permit, the meter spot, the scheduled disconnect and reconnect
              with Edison, the inspection, and the rebate paperwork alongside you.
            </p>
            <p className="text-charcoal-600 leading-relaxed">
              And we repair the wall when we are done — patched, texture matched, and painted back to
              the original color. {BUSINESS_INFO.license}
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-accent-100">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-10 text-center">
              Common questions
            </h2>

            <div className="space-y-4">
              {chargeReadyFAQs.map((faq) => (
                <Card key={faq.question} className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-navy-900 mb-2">{faq.question}</h3>
                    <p className="text-charcoal-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Thinking about a panel upgrade?
            </h2>
            <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
              Apply for the rebate through SCE, then give us a call. We will walk your panel, tell you
              what your home actually needs, and give you a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                  <Phone className="w-5 h-5 mr-2" />
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
        </div>
      </section>

      {/* Program disclaimer */}
      <section className="pb-16 bg-white">
        <div className="container-wide">
          <p className="max-w-3xl mx-auto text-xs text-charcoal-500 leading-relaxed text-center">
            The SCE Charge Ready Home Program is a Southern California Edison rebate program,
            administered by the Center for Sustainable Energy on behalf of SCE. Westek Electric Corp.
            is an independent licensed contractor and is not Southern California Edison, the Center
            for Sustainable Energy, or an agent of either. We do not administer the program and cannot
            determine or guarantee eligibility. Program terms, rebate amounts, and eligibility
            requirements are set by SCE and are subject to change — confirm current details and apply
            at evhome.sce.com.
          </p>
        </div>
      </section>
    </>
  )
}
