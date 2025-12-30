'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BLOG_POSTS_PREVIEW } from '@/lib/constants'

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

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function BlogPreviewSection() {
  return (
    <section className="section-padding bg-accent-50">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
            Resources & Tips
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-4">
            Electrical Insights & News
          </h2>
          <p className="text-lg text-charcoal-600">
            Stay informed with expert tips, industry news, and helpful guides from our
            licensed electricians. Learn how to keep your home or business safe and efficient.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BLOG_POSTS_PREVIEW.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <Card className="h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1 overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-white/60 p-4">
                      <div className="w-16 h-16 mx-auto mb-2 border-2 border-white/30 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-xs">Blog Post Image</p>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="electric" className="bg-electric-500 text-white border-0">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Meta Info */}
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
                    <h3 className="text-lg font-heading font-semibold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

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
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
