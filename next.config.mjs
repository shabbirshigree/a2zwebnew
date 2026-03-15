/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔴 تصاویر کے لیے کلاؤڈنری کی اجازت
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  /* سیکیورٹی ہیڈرز کا اضافہ */
  async headers() {
    return [
      {
        source: '/(.*)', 
        headers: [
          {
            key: 'Content-Security-Policy',
            // یہ ہیکرز کو غلط اسکرپٹس چلانے سے روکتا ہے
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: res.cloudinary.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://vitals.vercel-insights.com;",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', 
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', 
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', 
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', 
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', 
          }
        ],
      },
    ]
  },
};

// Next.js کے نئے ورژن میں export default کا استعمال صحیح ہے
export default nextConfig;