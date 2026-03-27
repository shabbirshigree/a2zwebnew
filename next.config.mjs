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
  // ہم نے 'turbo' والا حصہ یہاں سے نکال دیا ہے کیونکہ آپ کا ورژن اسے نہیں مان رہا
  experimental: {
    serverActions: {
      allowedOrigins: ["192.168.1.5", "localhost:3000"],
    },
  },
};

export default nextConfig;