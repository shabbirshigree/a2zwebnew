import { Suspense } from 'react';
import ImamRezaClient from './ImamRezaClient';
import { allData } from './data';

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const videoId = params.v;

  if (videoId) {
    const allVideos = [
      ...allData.documentaries,
      ...allData.manqabats,
      ...allData.programs,
      ...allData.liveParticipations,
      ...allData.tabarrukat
    ];
    const video = allVideos.find(v => v.id === videoId);

    if (video) {
      const title = `${video.title} | خادم امام رضا (ع)`;
      const description = `ویدیو ویژه درباره حرم مطهر امام رضا (ع): ${video.title}. خدمت حاجی شبیر احمد شگری.`;
      const imageUrl = "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif";

      return {
        title,
        description,
        openGraph: {
          title,
          description,
          images: [{ url: imageUrl }],
          type: "video.other",
        },
        twitter: {
          card: "summary_large_image",
          title,
          description,
          images: [imageUrl],
        },
      };
    }
  }

  return {
    title: "خادم امام رضا (ع) | حاجی شبیر احمد شگری",
    description: "سفر معنوی و رسالت حاجی شبیر احمد شگری در آستان قدس رضوی.",
  };
}

export default function ImamRezaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37]">در حال بارگذاری...</div>}>
      <ImamRezaClient />
    </Suspense>
  );
}
