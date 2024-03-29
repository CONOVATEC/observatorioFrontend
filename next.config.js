/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS
const isProduction = process.env.ENVIROMENT_SLUG === 'production'
let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = isProduction ? 'peru' : process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
 
  assetPrefix = `/${repo}/`
  basePath =  isProduction ? '/peru' : `/${repo}`
}

const nextConfig = {
  images:{
    unoptimized : true
  },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix,
  basePath,
  trailingSlash: true
}

module.exports = nextConfig
