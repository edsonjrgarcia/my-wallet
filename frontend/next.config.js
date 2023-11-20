/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler:{
    styledComponents: true,
  }
}

module.exports = nextConfig
module.exports = {
  pageExtensions: ['page.api.ts','page.api.js','page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}