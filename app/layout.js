import { Gulzar, Noto_Naskh_Arabic } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import FloatingButtons from './components/FloatingButtons';

// 🔴 آپ کا نیا سیکیورٹی گارڈ یہاں امپورٹ ہو گیا ہے
import SecurityLock from './components/SecurityLock';

// اردو نستعلیق فونٹ - جھٹکا ختم کرنے کے لیے 'block' استعمال کیا گیا ہے
const nastaliq = Gulzar({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-nastaliq",
  display: "block",
});

// اردو نسخ فونٹ
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-naskh",
  display: "block",
});

// ویب سائٹ کی مکمل ایس ای او (SEO) سیٹنگ
export const metadata = {
  title: "حاجی شبیر احمد شگری | آفیشل ویب سائٹ",
  description: "حاجی شبیر احمد شگری کے کالمز، آپ بیتی اور اسلامی و سیاسی موضوعات پر علمی و فکری تحاریر کا مجموعہ۔",
  openGraph: {
    title: "حاجی شبیر احمد شگری | کالم نگار، اینکر، پروڈیوسر",
    description: "45 سالہ صحافتی و ادبی خدمات کا ڈیجیٹل مجموعہ۔",
    url: "https://shabbirshigri.com",
    siteName: "Shabbir Shigri",
    locale: "ur_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "حاجی شبیر احمد شگری",
    description: "صحافت اور ادب کے میدان میں ایک معتبر نام۔",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl" suppressHydrationWarning>
      <body className={`${nastaliq.variable} ${naskh.variable} bg-gray-50 text-gray-800 font-sans antialiased`}>

        {/* 🔴 یہ رہا آپ کا سیکیورٹی گارڈ جو پوری ویب سائٹ کو رائٹ کلک اور کاپی سے بچائے گا */}
        <SecurityLock />

        {/* فلوٹنگ بٹنز اب باڈی کے اندر محفوظ طریقے سے کام کریں گے */}
        <FloatingButtons />

        <main>{children}</main>

        {/* گوگل اینالیٹکس آئی ڈی */}
        <GoogleAnalytics gaId="G-YSSSMV99G6" />
      </body>
    </html>
  );
}