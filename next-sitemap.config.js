/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://chef24catering.in',
  generateRobotsTxt: true,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
};
