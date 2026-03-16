/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // اگر آپ موبائل پر ٹیسٹ کر رہے ہیں تو یہ لائن رہنے دیں، ورنہ اسے بھی ہٹا سکتے ہیں
  experimental: {
    allowedDevOrigins: ["192.168.1.5", "localhost:3000"]
  }
};

export default nextConfig;