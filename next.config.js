/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS;
const isProduction = process.env.ENVIROMENT_SLUG === 'production';
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = isProduction ? 'peru' : 'perudev';

  assetPrefix = `/${repo}/`;
  basePath = isProduction ? '/peru' : `/${repo}`;
}

const siteUrl = isProduction
  ? 'https://observatoriojovenperu.com.pe/peru/'
  : 'https://observatoriojovenperu.com.pe/perudev/';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: assetPrefix === '' ? undefined : assetPrefix,
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

module.exports = nextConfig;
