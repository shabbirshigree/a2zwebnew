import { HomeContent } from "../../home/HomeContent";
import { legendsDataEn, booksData } from "../../home/homeData";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const videoId = params.v;
  const bookTitle = params.book;
  const type = params.type;

  if (videoId) {
    if (videoId === 'pod-video') {
      return {
        title: 'Noor-ul-Quran Project: Video Podcast | Haji Shabbir Ahmed Shigri',
        description: 'Watch special video podcast about Noor-ul-Quran project.',
        openGraph: {
          images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
        }
      };
    }
    if (videoId === 'pod-audio') {
      return {
        title: 'Noor-ul-Quran Project: Audio Podcast | Haji Shabbir Ahmed Shigri',
        description: 'Listen to special audio podcast about Noor-ul-Quran project.',
        openGraph: {
          images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
        }
      };
    }
    
    const legend = legendsDataEn.find(l => l.video.includes(videoId));
    if (legend) {
      return {
        title: `Reflections of ${legend.name} | Haji Shabbir Ahmed Shigri`,
        description: `Thoughts of ${legend.name} (${legend.role}) about Haji Shabbir Ahmed Shigri.`,
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
        title: `${book.title} | Publications of Haji Shabbir Ahmed Shigri`,
        description: `Publication of Haji Shabbir Ahmed Shigri: ${book.title}. Click for details.`,
        openGraph: {
          images: [book.img],
        }
      };
    }
  }

  if (type === 'noor-ul-quran') {
    return {
      title: 'Noor-ul-Quran Project | World\'s First Visual Quran',
      description: 'A unique initiative to present the translations and concepts of the Holy Quran through visual narratives.',
      openGraph: {
        images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
      }
    };
  }

  return {
    title: 'Home | Haji Shabbir Ahmed Shigri',
    description: 'Official portal of Haji Shabbir Ahmed Shigri\'s 45 years of service in journalism, culture, and religion.',
  };
}

export default function Home() {
  return <HomeContent />;
}
