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
      const title = `${legend.name} کے خیالات | حاجی شبیر احمد شگری`;
      const description = `${legend.name} (${legend.role}): "${legend.quote || 'حاجی شبیر احمد شگری کی خدمات کے بارے میں اظہارِ خیال'}"۔ ویب سائٹ پر ویڈیو دیکھیں۔`;
      return {
        title,
        description,
        openGraph: {
          title,
          description,
          images: [{
            url: legend.img,
            width: 800,
            height: 450,
            alt: legend.name,
          }],
          type: 'video.other',
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
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
    title: 'حاجی شبیر احمد شگری | آفیشل ویب سائٹ',
    description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
    openGraph: {
      title: 'حاجی شبیر احمد شگری | آفیشل ویب سائٹ',
      description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
      images: [{
        url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png',
        width: 1200,
        height: 630,
        alt: 'حاجی شبیر احمد شگری - نور القرآن پراجیکٹ',
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'حاجی شبیر احمد شگری | آفیشل ویب سائٹ',
      description: 'دنیا کے پہلے ویژول(بصری)قرآن پراجیکٹ اور اس کے بانی حاجی شبیر احمد شگری کی 45 سالہ خدمات کے بارے میں جانئے',
      images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
    }
  };
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
