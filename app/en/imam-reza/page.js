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
      const title = `${video.title} | Servant of Imam Reza (A.S)`;
      const description = `Special video about the Holy Shrine of Imam Reza (A.S): ${video.title}. Service of Haji Shabbir Ahmed Shigri.`;
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
    title: "Servant of Imam Reza (A.S) | Haji Shabbir Ahmed Shigri",
    description: "The spiritual journey and mission of Haji Shabbir Ahmed Shigri at the Holy Shrine of Imam Reza (A.S).",
  };
}

export default function ImamRezaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37]">Loading...</div>}>
      <ImamRezaClient />
    </Suspense>
  );
}
