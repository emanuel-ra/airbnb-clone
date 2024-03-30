/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unavatar.io',
        port: '',
        pathname: '/github/**',
      },
    ],
  },
};

export default nextConfig;
