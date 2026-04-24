import { HomeContent } from "../../home/HomeContent";
import { legendsDataFa, booksData } from "../../home/homeData";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const videoId = params.v;
  const bookTitle = params.book;
  const type = params.type;

  if (videoId) {
    if (videoId === 'pod-video') {
      return {
        title: 'پروژه نورالقرآن: پادکست ویدئویی | حاجی شبیر احمد شگری',
        description: 'پادکست ویدئویی ویژه درباره پروژه نورالقرآن را تماشا کنید.',
        openGraph: {
          images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
        }
      };
    }
    if (videoId === 'pod-audio') {
      return {
        title: 'پروژه نورالقرآن: پادکست صوتی | حاجی شبیر احمد شگری',
        description: 'پادکست صوتی ویژه درباره پروژه نورالقرآن را بشنوید.',
        openGraph: {
          images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
        }
      };
    }
    
    const legend = legendsDataFa.find(l => l.video.includes(videoId));
    if (legend) {
      return {
        title: `نظرات ${legend.name} | حاجی شبیر احمد شگری`,
        description: `نظرات ${legend.name} (${legend.role}) درباره حاجی شبیر احمد شگری.`,
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
        title: `${book.title} | تالیفات حاجی شبیر احمد شگری`,
        description: `تالیف حاجی شبیر احمد شگری: ${book.title}. برای جزئیات کلیک کنید.`,
        openGraph: {
          images: [book.img],
        }
      };
    }
  }

  if (type === 'noor-ul-quran') {
    return {
      title: 'پروژه نورالقرآن | اولین قرآن تصویری جهان',
      description: 'یک ابتکار منحصر به فرد برای ارائه ترجمه و مفاهیم قرآن کریم از طریق روایت‌های تصویری.',
      openGraph: {
        images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
      }
    };
  }

  return {
    title: 'خانه | حاجی شبیر احمد شگری',
    description: 'پورتال رسمی ۴۵ سال خدمات حاجی شبیر احمد شگری در زمینه‌های روزنامه‌نگاری، فرهنگی و مذهبی.',
  };
}

export default function Home() {
  return <HomeContent />;
}
