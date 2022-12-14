/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['127.0.0.1'],
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    }
    return config
  }
}

module.exports = nextConfig
