export const metadata = {
  title: 'نورالقرآن پراجیکٹ | دنیا کا پہلا ویژول قرآن',
  description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
  icons: {
    icon: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
  },
  openGraph: {
    title: 'نورالقرآن پراجیکٹ (The Visual Quran)',
    description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
    url: 'https://www.shigri.info/noor-ul-quran',
    images: [
      {
        url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png',
        width: 1200,
        height: 630,
        alt: 'Noor-ul-Quran Visual Project Cover',
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
    title: 'نورالقرآن پراجیکٹ | The Visual Quran',
    description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
    images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
  },
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
