/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "images.unsplash.com",
      "tinder.com",
      "lh3.googleusercontent.com"
    ]
  }
}

module.exports = nextConfig
