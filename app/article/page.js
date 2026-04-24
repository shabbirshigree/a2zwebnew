import ArticlesClient from './ArticlesClient';
import { allArticles } from './index.js';

export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const readId = params.read;
    
    if (readId) {
        const article = (allArticles || []).find((item) => String(item.id) === String(readId));
        if (article) {
            const title = `${article.title} | مضامین و کالمز`;
            const description = article.content?.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
            const imageUrl = article.image || 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772598628/shabbir_ahmed_shigri_bgzwvt.png';
            
            return {
                title,
                description,
                openGraph: {
                    title,
                    description,
                    images: [{ url: imageUrl }],
                    type: 'article',
                },
                twitter: {
                    card: 'summary_large_image',
                    title,
                    description,
                    images: [imageUrl],
                },
            };
        }
    }

    return {
        title: 'صحافتی خدمات اور مضامین | حاجی شبیر احمد شگری',
        description: 'حاجی شبیر احمد شگری کے مختلف قومی و بین الاقوامی اخبارات میں شائع ہونے والے کالمز اور فکری مضامین کا مجموعہ۔',
    };
}

export default function Page() {
    return <ArticlesClient />;
}
