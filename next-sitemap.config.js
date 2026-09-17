/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.westekelectriccorp.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  // Blog posts (/news/[slug]), service areas (/service-areas/[slug]), and service
  // pages are statically generated, so next-sitemap discovers them automatically
  // from the build output. Do NOT hardcode those slugs here — a stale list silently
  // drops new pages from the sitemap. Only non-route files need listing below.
  additionalPaths: async () => [
    {
      loc: '/ai-actions.json',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.5,
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
}
