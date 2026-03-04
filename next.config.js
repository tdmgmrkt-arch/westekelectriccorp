/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.placeholder.com',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: '/about-me',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/news/latest-posts-three-columns',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/footer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
