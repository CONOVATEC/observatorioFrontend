/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  console.log("🚀 ~ file: next.config.js:11 ~ repo", repo)

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix,
  basePath
}
module.exports = nextConfig
