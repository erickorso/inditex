/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'is**',
          },
        ],
      },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig

