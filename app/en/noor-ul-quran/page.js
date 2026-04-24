import { Suspense } from 'react';
import EnglishProjectPageClient from './EnglishProjectPageClient';

export const metadata = {
    title: 'Noor Al-Quran Project | A2Z Web',
    description: 'The Complete Holy Quran with English translation and descriptive videos.',
    openGraph: {
        title: 'Noor Al-Quran Project | A2Z Web',
        description: 'The Complete Holy Quran with English translation and descriptive videos.',
        images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png'],
    },
};

export default function EnglishProjectPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37]">Loading...</div>}>
            <EnglishProjectPageClient />
        </Suspense>
    );
}
