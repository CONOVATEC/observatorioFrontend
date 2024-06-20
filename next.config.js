/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS;
const isProduction = process.env.ENVIROMENT_SLUG === 'production';
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = isProduction
    ? 'perudev'
    : process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = isProduction ? '/perudev' : `/${repo}`;
}

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: assetPrefix === '' ? undefined : assetPrefix,
  basePath,
  trailingSlash: true,
};

module.exports = nextConfig;
