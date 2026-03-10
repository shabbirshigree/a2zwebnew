/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔴 تصویروں کے لیے کلاؤڈنری کی اجازت یہاں شامل کی گئی ہے
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  /* سیکیورٹی ہیڈرز کا اضافہ یہاں کیا گیا ہے */
  async headers() {
    return [
      {
        source: '/(.*)', // یہ تمام صفحات اور فائلز پر لاگو ہوگا
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // کوئی آپ کی ویب سائٹ کو کسی اور فریم یا جعلی سائٹ میں نہیں کھول سکے گا
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // براؤزر کو مجبور کرے گا کہ وہ فائل کی ٹائپ کو تبدیل نہ کرے
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // کراس سائٹ اسکرپٹنگ (XSS) حملوں سے بچاؤ
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // ڈیٹا ٹرانسفر کو محفوظ بنائے گا
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // ویب سائٹ کو کیمرہ یا لوکیشن استعمال کرنے سے روکے گا
          }
        ],
      },
    ]
  },
};

export default nextConfig;