import { Suspense } from "react";
import { HomeContent } from "./HomeContent";
import { legendsData, booksData } from "./homeData";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const videoId = params.v;
  const bookTitle = params.book;
  const type = params.type;

  if (videoId) {
    if (videoId === 'pod-video') {
      return {
        title: 'نور القرآن پراجیکٹ: ویڈیو پوڈکاسٹ | حاجی شبیر احمد شگری',
        description: 'نور القرآن پراجیکٹ کے بارے میں خصوصی ویڈیو پوڈکاسٹ دیکھیں۔',
        openGraph: {
          images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
        }
      };
    }
    if (videoId === 'pod-audio') {
      return {
        title: 'نور القرآن پراجیکٹ: آڈیو پوڈکاسٹ | حاجی شبیر احمد شگری',
        description: 'نور القرآن پراجیکٹ کے بارے میں خصوصی آڈیو پوڈکاسٹ سنیں۔',
        openGraph: {
          images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
        }
      };
    }
    
    const legend = legendsData.find(l => l.video.includes(videoId));
    if (legend) {
      return {
        title: `${legend.name} کے خیالات | حاجی شبیر احمد شگری`,
        description: `${legend.name} (${legend.role}) کے حاجی شبیر احمد شگری کے بارے میں تاثرات۔`,
        openGraph: {
          images: [legend.img],
        }
      };
    }
  }

  if (bookTitle) {
    const book = booksData.find(b => b.title === bookTitle);
    if (book) {
      return {
        title: `${book.title} | تصانیف حاجی شبیر احمد شگری`,
        description: `حاجی شبیر احمد شگری کی تصنیف: ${book.title}۔ مزید تفصیلات کے لیے کلک کریں۔`,
        openGraph: {
          images: [book.img],
        }
      };
    }
  }

  if (type === 'noor-ul-quran') {
    return {
      title: 'نور القرآن پراجیکٹ | دنیا کا پہلا ویژول قرآن',
      description: 'جدید ٹیکنالوجی اور مصنوعی ذہانت کے ذریعے قرآن مجید کے ترجمے اور مفاہیم کو بصری انداز میں پیش کرنے کا منفرد منصوبہ۔',
      openGraph: {
        images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
      }
    };
  }

  return {
    title: 'ہوم | حاجی شبیر احمد شگری',
    description: 'حاجی شبیر احمد شگری کی 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا آفیشل پورٹل۔',
  };
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
