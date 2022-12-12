/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
 
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  images:{
    unoptimized : true
  },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix,
  basePath
}

module.exports = nextConfig
