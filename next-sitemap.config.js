/** @type {import('next-sitemap').IConfig} */
const isProduction = process.env.ENVIROMENT_SLUG === 'production';
const siteUrl = isProduction
  ? 'https://observatoriojovenperu.com.pe/peru/'
  : 'https://observatoriojovenperu.com.pe/perudev/';
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
};
