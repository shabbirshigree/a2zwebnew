/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // 👈 یہاں ڈبل سٹار ضروری ہے
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",     // اگر آپ کا کوڈ src فولڈر میں ہے
  ],
  theme: {
    extend: {
      colors: {
        shigriGold: "#C5A059",
        shigriBlue: "#0F4C75",
        shigriDark: "#1B262C",
      },
      fontFamily: {
        urdu: ['"Jameel Noori Nastaleeq"', '"Noto Nastaliq Urdu"', 'serif'],
      },
      animation: {
        'marquee-rtl': 'marqueeRTL 25s linear infinite',
        'marquee-ltr': 'marqueeLTR 25s linear infinite',
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