/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  sw: 'service-worker.js',
  // cacheOnFrontEndNav: true,
  fallbacks: {
    document: '/_offline',
    image: '/android-chrome-512x512.png',
    font: '/fonts/fallback.woff2',
    audio: '',
    video: ''
  }
});

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  async headers () {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
});
