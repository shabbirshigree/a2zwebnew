import { Suspense } from "react";
import GhaziAbbasClient from "./GhaziAbbasClient";
import { ghaziData } from "./ghaziData";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const vidId = params.v;

  if (vidId) {
    const allVids = [
      ...ghaziData.ziyaratVideos,
      ...ghaziData.extraVideos,
      ...ghaziData.shorts,
      { id: 'news-vid', title: ghaziData.news.headline, url: ghaziData.news.video },
      { id: 'award-vid', title: "صدائے غازی ایوارڈ", url: ghaziData.award.video }
    ];
    const video = allVids.find(v => v.id === vidId);

    if (video) {
      const title = `${video.title} | صدائے غازیؑ ایوارڈ`;
      const description = `حرم حضرت عباس علمدار علیہ السلام کے حوالے سے خصوصی ویڈیو: ${video.title}۔ حاجی شبیر احمد شگری کی خدمات۔`;
      const imageUrl = "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771399594/IMG_20240224_165237_Copy_dmzd6p.jpg";

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
    title: "صدائے غازیؑ ایوارڈ | حاجی شبیر احمد شگری",
    description: "حاجی شبیر احمد شگری کو حرم حضرت عباس علمدار علیہ السلام کی جانب سے ملنے والا خصوصی اعزاز اور ان کی خدمات کا ریکارڈ۔",
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GhaziAbbasClient />
    </Suspense>
  );
}
