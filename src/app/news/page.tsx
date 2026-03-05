import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BLOG_POSTS_PREVIEW } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Electrical Tips & News',
  description:
    'Expert electrical tips, guides, and industry news from Westek Electric Corp. Learn about EV chargers, panel upgrades, LED lighting, and electrical safety.',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'Electrical Tips & News | Westek Electric Corp. Blog',
    description:
      'Expert electrical tips and guides. Learn about EV chargers, panel upgrades, LED lighting, and home electrical safety.',
  },
}

const blogPosts = BLOG_POSTS_PREVIEW

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/news' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6">
              Electrical Tips & News
            </h1>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Stay informed with expert electrical tips, industry news, and helpful guides from
              our licensed electricians. Learn how to keep your home or business safe and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="block group">
                <Card className="h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1 overflow-hidden">
                  {/* Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="electric" className="bg-electric-500 text-white border-0">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-heading font-semibold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-charcoal-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-2 text-navy-900 font-medium text-sm group-hover:text-electric-500 transition-colors">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-accent-100">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-charcoal-600 mb-6">
              Get the latest electrical tips and industry news delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                className="flex-1 h-12 px-4 rounded-xl border border-accent-300 focus:outline-none focus:ring-2 focus:ring-navy-500"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="h-12 px-6 bg-electric-500 text-white font-semibold rounded-xl hover:bg-electric-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
