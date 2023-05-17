const isInProd = process.env.NODE_ENV === 'production'
const plugins = []

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isInProd
})

plugins.push(withPWA)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads'
      }
    ],
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost']
  }
}

module.exports = plugins.reduce((acc, current) => current(acc), nextConfig)
