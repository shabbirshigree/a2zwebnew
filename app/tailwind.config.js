/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*/.{js,ts,jsx,tsx,mdx}",
    "./components/*/.{js,ts,jsx,tsx,mdx}",
    "./app/*/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // یہ ہے وہ شاہی گولڈن اور نیلا رنگ جو آپ نے مانگا
        shigriGold: "#C5A059", // اصلی سونے والا کلر
        shigriBlue: "#0F4C75", // گہرا نیلا
        shigriDark: "#1B262C",
      },
      fontFamily: {
        // نستعلیق فونٹ کی سیٹنگ
        urdu: ['"Jameel Noori Nastaleeq"', '"Noto Nastaliq Urdu"', 'serif'],
      },
      animation: {
        'marquee-rtl': 'marqueeRTL 25s linear infinite', // دائیں سے بائیں
        'marquee-ltr': 'marqueeLTR 25s linear infinite', // بائیں سے دائیں
      },
      keyframes: {
        marqueeRTL: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeLTR: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};