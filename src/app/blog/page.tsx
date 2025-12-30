import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BLOG_POSTS_PREVIEW } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog | Electrical Tips & News',
  description:
    'Expert electrical tips, guides, and industry news from Westek Electric Corp. Learn about EV chargers, panel upgrades, LED lighting, and electrical safety.',
  alternates: {
    canonical: '/blog',
  },
}

// Extended blog posts for the blog index page
const blogPosts = [
  ...BLOG_POSTS_PREVIEW,
  {
    slug: 'whole-house-rewiring-what-to-expect',
    title: 'Whole House Rewiring: What Homeowners Need to Know',
    excerpt: 'Planning a whole house rewire? Learn about the process, timeline, costs, and what to expect during this major electrical project.',
    date: '2024-11-20',
    category: 'Home Improvement',
    readTime: '7 min read',
  },
  {
    slug: 'smart-home-electrical-requirements',
    title: 'Smart Home Electrical Requirements: A Complete Guide',
    excerpt: 'Thinking about upgrading to a smart home? Here\'s what you need to know about electrical requirements for smart devices and automation.',
    date: '2024-11-15',
    category: 'Smart Home',
    readTime: '6 min read',
  },
  {
    slug: 'outdoor-lighting-installation-tips',
    title: 'Outdoor Lighting Installation: Design Tips for Curb Appeal',
    excerpt: 'Transform your outdoor spaces with professional lighting design. Learn about landscape lighting, security lights, and pathway illumination.',
    date: '2024-11-08',
    category: 'Lighting',
    readTime: '5 min read',
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-accent-100 via-white to-accent-50">
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
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <Card className="h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1 overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative">
                    <div className="text-center text-white/60 p-4">
                      <div className="w-12 h-12 mx-auto mb-2 border-2 border-white/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-xs">Blog Image</p>
                    </div>
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
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-xl border border-accent-300 focus:outline-none focus:ring-2 focus:ring-navy-500"
              />
              <button
                type="submit"
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
