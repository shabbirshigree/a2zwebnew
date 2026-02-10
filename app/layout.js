import { Gulzar, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import FloatingButtons from './components/FloatingButtons';

// اردو نستعلیق فونٹ (خوبصورت سرخیوں کے لیے)
const nastaliq = Gulzar({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-nastaliq",
  display: "swap",
});

// اردو نسخ فونٹ (عام لکھائی کے لیے)
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-naskh",
  display: "swap",
});

export const metadata = {
  title: "Haji Shabbir Ahmed Shigri",
  description: "Official Website of Haji Shabbir Ahmed Shigri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl" suppressHydrationWarning>
      <body className={`${nastaliq.variable} ${naskh.variable} bg-gray-50 text-gray-800 font-sans`}>
        <FloatingButtons />
        {children}
      </body>
    </html>
  );
}