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
        // domains: ['is3-ssl.mzstatic.com'],
      },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig

