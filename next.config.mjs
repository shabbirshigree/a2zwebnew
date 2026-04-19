/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["192.168.1.5", "localhost:3000"],
    },
  },
  allowedDevOrigins: ["192.168.1.5", "localhost:3000"],
};

export default nextConfig;