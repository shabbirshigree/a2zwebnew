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
  // یہ حصہ پرانے /project لنک کو خود بخود /noor-ul-quran پر بھیج دے گا
  async redirects() {
    return [
      {
        source: '/project',
        destination: '/noor-ul-quran',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;