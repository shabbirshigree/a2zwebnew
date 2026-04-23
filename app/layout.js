
import { Gulzar, Noto_Naskh_Arabic, Vazirmatn, Amiri, Reem_Kufi } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import FloatingButtons from './components/FloatingButtons';
import LocaleProvider from './components/LocaleProvider';

// 🔴 آپ کا نیا سیکیورٹی گارڈ یہاں امپورٹ ہو گیا ہے
import SecurityLock from './components/SecurityLock';

// اردو نستعلیق فونٹ — swap تاکہ صفحہ جلد دکھے، موبائل پر ناگوار "روک" کم ہو
const nastaliq = Gulzar({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-nastaliq",
  display: "swap",
});

// اردو نسخ فونٹ
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-naskh",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const kufi = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kufi",
  display: "swap",
});

// ویب سائٹ کی مکمل ایس ای او (SEO) سیٹنگ
export const metadata = {
  title: 'حاجی شبیر احمد شگری | آفیشل ویب سائٹ',
  description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
  keywords: 'Shabbir Ahmed Shigri, Noor-ul-Quran, Visual Quran, Islamic Scholar, Journalist, Pakistan, Iran, Unity of Ummah',
  icons: {
    icon: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
    shortcut: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
    apple: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
  },
  alternates: {
    canonical: 'https://www.shigri.info',
  },
  openGraph: {
    title: 'نورالقرآن پراجیکٹ | حاجی شبیر احمد شگری',
    description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
    url: 'https://www.shigri.info',
    siteName: 'Haji Shabbir Ahmed Shigri',
    images: [
      {
        url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png',
        width: 1200,
        height: 630,
        alt: 'Noor-ul-Quran Project Cover',
      },
      {
        url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
        width: 800,
        height: 800,
        alt: 'Noor-ul-Quran Logo',
      },
    ],
    locale: 'ur_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نورالقرآن پراجیکٹ | حاجی شبیر احمد شگری',
    description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
    images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
  },
  whatsapp: {
    title: 'نورالقرآن پراجیکٹ | آفیشل ویب سائٹ',
    description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
    status: 'online',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl" suppressHydrationWarning>
      <body
        className={`${nastaliq.variable} ${naskh.variable} ${vazirmatn.variable} ${amiri.variable} ${kufi.variable} bg-gray-50 text-gray-800 font-sans antialiased`}
      >

        <LocaleProvider>
          {/* 🔴 یہ رہا آپ کا سیکیورٹی گارڈ جو پوری ویب سائٹ کو رائٹ کلک اور کاپی سے بچائے گا */}
          <SecurityLock />

          {/* فلوٹنگ بٹنز اب باڈی کے اندر محفوظ طریقے سے کام کریں گے */}
          <FloatingButtons />

          <main>{children}</main>

          {/* گوگل اینالیٹکس آئی ڈی */}
          <GoogleAnalytics gaId="G-YSSSMV99G6" />
        </LocaleProvider>
      </body>
    </html>
  );
}