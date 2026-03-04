/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://socalelectricpros.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  additionalPaths: async () => {
    const blogSlugs = [
      'ev-charger-installation-guide-temecula',
      'signs-you-need-panel-upgrade',
      'led-lighting-benefits-energy-savings',
      'whole-house-rewiring-what-to-expect',
      'smart-home-electrical-requirements',
      'outdoor-lighting-installation-tips',
    ]
    const serviceAreaSlugs = [
      'temecula', 'murrieta', 'menifee', 'lake-elsinore',
      'wildomar', 'winchester', 'french-valley', 'fallbrook',
      'hemet', 'san-jacinto', 'corona', 'riverside',
    ]

    const blogPaths = blogSlugs.map((slug) => ({
      loc: `/news/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    }))

    const serviceAreaPaths = serviceAreaSlugs.map((slug) => ({
      loc: `/service-areas/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    }))

    return [
      ...blogPaths,
      { loc: '/service-areas', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.9 },
      ...serviceAreaPaths,
    ]
  },
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
