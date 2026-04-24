import { Suspense } from 'react';
import FarsiProjectPageClient from './FarsiProjectPageClient';

export const metadata = {
  title: 'پروژه نورالقرآن | A2Z Web',
  description: 'قرآن کامل با ترجمه فارسی و ویدئوهای تشریحی.',
  openGraph: {
    title: 'پروژه نورالقرآن | A2Z Web',
    description: 'قرآن کامل با ترجمه فارسی و ویدئوهای تشریحی.',
    images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png'],
  },
};

export default function FarsiProjectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37]">در حال بارگذاری...</div>}>
      <FarsiProjectPageClient />
    </Suspense>
  );
}
