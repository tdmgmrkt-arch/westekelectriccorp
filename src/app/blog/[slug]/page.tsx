import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BLOG_POSTS_PREVIEW, BUSINESS_INFO } from '@/lib/constants'
import { generateArticleSchema } from '@/lib/seo'

// This would normally come from a CMS or MDX files
const blogPostContent = {
  'ev-charger-installation-guide-temecula': {
    title: 'Complete Guide to EV Charger Installation in Temecula',
    excerpt: 'Everything Temecula homeowners need to know about installing a Level 2 EV charger, from electrical requirements to permits and rebates.',
    date: '2024-12-10',
    category: 'EV Chargers',
    readTime: '8 min read',
    content: `
      <p>If you've recently purchased an electric vehicle or are considering one, installing a home EV charger is one of the best investments you can make. While public charging stations are becoming more common in Temecula and the surrounding areas, nothing beats the convenience of charging at home overnight.</p>

      <h2>Why Install a Level 2 EV Charger at Home?</h2>
      <p>Most EVs come with a Level 1 charger that plugs into a standard 120V outlet. While this works in a pinch, it only provides about 3-5 miles of range per hour of charging. For most EV owners, this simply isn't practical for daily use.</p>
      <p>A Level 2 charger, which uses a 240V circuit (like your dryer or oven), can provide 25-30 miles of range per hour. This means you can fully charge most EVs overnight, even if you come home with a nearly empty battery.</p>

      <h2>Electrical Requirements</h2>
      <p>Before installing a Level 2 EV charger, you'll need to ensure your home's electrical system can handle the additional load. Here's what to consider:</p>
      <ul>
        <li><strong>Panel Capacity:</strong> Most Level 2 chargers require a 40-50 amp dedicated circuit. Your electrical panel needs sufficient capacity to add this circuit.</li>
        <li><strong>Panel Upgrade:</strong> Many older Temecula homes have 100-amp panels, which may need to be upgraded to 200 amps to accommodate an EV charger.</li>
        <li><strong>Circuit Distance:</strong> The distance from your panel to the charging location affects installation cost and may require a subpanel.</li>
      </ul>

      <h2>Permits and Inspections</h2>
      <p>In Temecula and throughout California, EV charger installation requires a permit and inspection. At Westek Electric Corp., we handle all permitting as part of our installation service, ensuring your charger meets all local codes and safety requirements.</p>

      <h2>Available Rebates and Incentives</h2>
      <p>California offers several incentives for EV charger installation:</p>
      <ul>
        <li>Federal Tax Credit: Up to $1,000 for residential charger installation</li>
        <li>SCE Rebates: Southern California Edison offers rebates for qualifying installations</li>
        <li>Clean Vehicle Rebate Project: Additional rebates for income-qualified households</li>
      </ul>

      <h2>Choosing the Right Charger</h2>
      <p>There are many EV chargers on the market, from basic units to smart chargers with WiFi connectivity. We recommend considering:</p>
      <ul>
        <li>Charging speed (measured in kW or amps)</li>
        <li>Cable length for your parking situation</li>
        <li>Smart features like scheduling and energy monitoring</li>
        <li>Warranty and brand reputation</li>
      </ul>

      <h2>Get Started Today</h2>
      <p>Ready to install an EV charger at your Temecula home? Contact Westek Electric Corp. for a free assessment. We'll evaluate your electrical system, recommend the best charger for your needs, and provide a detailed quote. Call us today at (909) 996-6678.</p>
    `,
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = BLOG_POSTS_PREVIEW.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS_PREVIEW.find((p) => p.slug === params.slug)
  const content = blogPostContent[params.slug as keyof typeof blogPostContent]

  if (!post) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold text-navy-900 mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-electric-500 hover:underline">
          Return to Blog
        </Link>
      </div>
    )
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${params.slug}`,
    datePublished: post.date,
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-narrow">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-charcoal-600 hover:text-navy-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <Badge variant="electric" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-charcoal-600">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Westek Electric Corp.
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image Placeholder */}
      <section className="pb-8">
        <div className="container-narrow">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
            <div className="text-center text-white/60">
              <p className="text-sm">Featured Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container-narrow">
          <article
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-p:text-charcoal-700 prose-a:text-electric-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-900 prose-ul:text-charcoal-700"
            dangerouslySetInnerHTML={{
              __html: content?.content || '<p>Full article content would be loaded here from CMS or MDX files.</p>',
            }}
          />
        </div>
      </section>

      {/* Author Box */}
      <section className="pb-16">
        <div className="container-narrow">
          <div className="bg-accent-100 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center shrink-0">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-navy-900 mb-2">
                  Westek Electric Corp.
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Our team of licensed electricians has been serving Lake Elsinore, Temecula, Murrieta, and
                  Southern California since 2010. We share our expertise through these articles
                  to help homeowners make informed decisions about their electrical systems.
                </p>
                <Button asChild size="sm">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-accent-50">
        <div className="container-wide">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS_PREVIEW.filter((p) => p.slug !== params.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow group"
                >
                  <Badge variant="default" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-navy-900 mb-2 group-hover:text-electric-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-charcoal-500">{relatedPost.readTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Need Electrical Help?
          </h2>
          <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
            Our team is ready to help with any electrical project, large or small.
            Contact us for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                Call {BUSINESS_INFO.phone}
              </a>
            </Button>
            <Button asChild variant="outline-white" size="lg">
              <Link href="/contact">
                Request Estimate
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
