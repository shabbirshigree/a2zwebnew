import { Suspense } from 'react';
import ProjectPageClient from './ProjectPageClient';

export const metadata = {
  title: 'نور القرآن پراجیکٹ | A2Z Web',
  description: 'مکمل قرآن مجید مع اردو ترجمہ اور تفسیری ویڈیوز۔',
  openGraph: {
    title: 'نور القرآن پراجیکٹ | A2Z Web',
    description: 'مکمل قرآن مجید مع اردو ترجمہ اور تفسیری ویڈیوز۔',
    images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png'],
  },
};

export default function ProjectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37]">Loading...</div>}>
      <ProjectPageClient />
    </Suspense>
  );
}
