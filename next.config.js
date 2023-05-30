/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
        protocol: 'https',
      },
    ],
  },
}

module.exports = nextConfig
