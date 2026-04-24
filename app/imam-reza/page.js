import ImamRezaClient from "./ImamRezaClient";
import { allData } from "./data";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const vidId = params.v;

  if (vidId) {
    let video = null;
    for (const cat in allData) {
      video = allData[cat].find((v) => v.id === vidId);
      if (video) break;
    }

    if (video) {
      const title = `${video.title} | خادمِ سلطانِ خراسانؑ`;
      const description = `حرم امام رضا علیہ السلام کے حوالے سے خصوصی ویڈیو: ${video.title}۔ حاجی شبیر احمد شگری کی خدمات۔`;
      // Default image for Imam Reza page
      const imageUrl = "https://res.cloudinary.com/dtqrziupt/image/upload/v1768225146/IMG_20230517_042122_Copy_dqbcon.jpg";

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
    title: "خادمِ سلطانِ خراسانؑ | حاجی شبیر احمد شگری",
    description: "حاجی شبیر احمد شگری کی حرم امام رضا علیہ السلام میں بطور خادم انجام دی جانے والی خدمات کا مجموعہ۔",
  };
}

export default function Page() {
  return <ImamRezaClient />;
}
