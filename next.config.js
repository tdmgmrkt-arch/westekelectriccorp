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
}

module.exports = nextConfig
