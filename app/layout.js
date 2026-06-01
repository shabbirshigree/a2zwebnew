import localFont from "next/font/local"; // گوگل فونٹ کی جگہ لوکل فونٹ امپورٹ کیا
import { Noto_Naskh_Arabic, Vazirmatn, Amiri, Reem_Kufi, Gulzar } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import FloatingButtons from './components/FloatingButtons';
import LocaleProvider from './components/LocaleProvider';
import SecurityLock from './components/SecurityLock';

// جمیل نوری نستعلیق کو مقامی طور پر سیٹ کرنے کی کوشش
// نوٹ: اگر آپ کے پاس JameelNooriNastaleeq.woff2 فائل public/fonts/ میں موجود ہے 
// تو یہ خود بخود اسے استعمال کرے گا، ورنہ گوگل فونٹ 'گلزار' متبادل کے طور پر چلے گا
const jameelNoori = Gulzar({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-jameel",
  display: "swap",
});

// اگر آپ مقامی فانٹ فائل استعمال کرنا چاہتے ہیں تو اس سیکشن کو ان کمنٹ کریں 
// لیکن یقینی بنائیں کہ فائل 10MB سے زیادہ سائز کی ہو (14 bytes والی فائل ایرر دے گی)
/*
const jameelNooriLocal = localFont({
  src: '../public/fonts/JameelNooriNastaleeq.woff2',
  variable: '--font-jameel',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});
*/

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-naskh",
  display: "swap",
});

const nastaliq = Gulzar({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-nastaliq",
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

export const metadata = {
  metadataBase: new URL('https://www.shigri.info'),
  title: {
    default: 'حاجی شبیر احمد شگری | آفیشل ویب سائٹ',
    template: '%s | حاجی شبیر احمد شگری'
  },
  description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
  keywords: ['حاجی شبیر احمد شگری', 'نورالقرآن پراجیکٹ', 'بصری قرآن', 'صحافی', 'گلگت بلتستان', 'اتحاد امت', 'Shabbir Ahmed Shigri', 'Noor-ul-Quran', 'Visual Quran', 'Islamic Scholar', 'Journalist'],
  icons: {
    icon: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
    shortcut: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
    apple: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      'ur-PK': '/',
      'en-US': '/en',
      'fa-IR': '/fa',
    },
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
  verification: {
     google: 'uAYKUlFgUW167XqUGrBpdq3444sAWJ4jPeLBgpgh9GU',
   }
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Haji Shabbir Ahmed Shigri",
    "alternateName": ["حاجی شبیر احمد شگری", "Shabbir Ahmed Shigri"],
    "url": "https://www.shigri.info",
    "image": "https://res.cloudinary.com/dtqrziupt/image/upload/v1772598628/shabbir_ahmed_shigri_bgzwvt.png",
    "jobTitle": "Journalist and Islamic Scholar",
    "description": "Founder of Noor-ul-Quran Project, with 45 years of service in journalism and Islamic research.",
    "sameAs": [
      "https://www.facebook.com/shabbirahmed.shigri",
      "https://twitter.com/shabbirshigri",
      "https://www.youtube.com/@shigriinfo"
    ]
  };

  return (
    <html lang="ur" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jameelNoori.variable} ${nastaliq.variable} ${naskh.variable} ${vazirmatn.variable} ${amiri.variable} ${kufi.variable} bg-gray-50 text-gray-800 font-sans antialiased`}
      >
        <LocaleProvider>
          <SecurityLock />
          <FloatingButtons />
          <main>{children}</main>
          <GoogleAnalytics gaId="G-YSSSMV99G6" />
        </LocaleProvider>
      </body>
    </html>
  );
}