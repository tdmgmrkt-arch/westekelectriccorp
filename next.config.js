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
      // Legacy WordPress blog post URLs
      {
        source: '/2023/03/05/benefits-to-upgrading-your-electrical-panel',
        destination: '/news/signs-you-need-panel-upgrade',
        permanent: true,
      },
      {
        source: '/2023/03/15/ryan-wolfe-appointed-eu-ceo',
        destination: '/news',
        permanent: true,
      },
      // Legacy WordPress category URLs
      {
        source: '/category/:slug',
        destination: '/services',
        permanent: true,
      },
      // Service category pages that don't exist
      {
        source: '/services/residential',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/commercial',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/industrial',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/design',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
