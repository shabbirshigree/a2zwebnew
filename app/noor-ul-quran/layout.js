export const metadata = {
  title: 'نورالقرآن پراجیکٹ | دنیا کا پہلا ویژول قرآن',
  description: 'حاجی شبیر احمد شگری کا منفرد منصوبہ: جدید ٹیکنالوجی اور اے آئی کے ذریعے قرآن مجید کا بصری ترجمہ و تفہیم۔',
  icons: {
    icon: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
  },
  openGraph: {
    title: 'نورالقرآن پراجیکٹ (The Visual Quran)',
    description: 'قرآن مجید کو سمجھ کر پڑھنے اور عمل کرنے کے لیے ایک جدید بصری کاوش۔',
    url: 'https://www.shigri.info/noor-ul-quran',
    images: [
      {
        url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
        width: 800,
        height: 800,
        alt: 'Noor-ul-Quran Logo',
      },
      {
        url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png',
        width: 1200,
        height: 630,
        alt: 'Noor-ul-Quran Visual Project',
      },
    ],
    locale: 'ur_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نورالقرآن پراجیکٹ | The Visual Quran',
    description: 'دنیا کا پہلا ویژول قرآن پراجیکٹ - حاجی شبیر احمد شگری کی پیشکش۔',
    images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png'],
  },
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
