import FarsiArticlesClient from './FarsiArticlesClient';
import { farsiArticles } from '../../article/index';

export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const readId = params.read;
    
    if (readId) {
        const article = (farsiArticles || []).find((item) => String(item.id) === String(readId));
        if (article) {
            const title = `${article.title} | مقالات و ستون‌ها`;
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
        title: 'خدمات روزنامه‌نگاری و مقالات | حاجی شبیر احمد شگری',
        description: 'مجموعه‌ای از ستون‌ها و مقالات فکری حاجی شبیر احمد شگری که در روزنامه‌های مختلف ملی و بین‌المللی منتشر شده است.',
    };
}

export default function Page() {
    return <FarsiArticlesClient />;
}
