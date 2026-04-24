import EnglishArticlesClient from './EnglishArticlesClient';
import { englishArticles } from '../../article/index';

export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const readId = params.read;
    
    if (readId) {
        const article = (englishArticles || []).find((item) => String(item.id) === String(readId));
        if (article) {
            const title = `${article.title} | Articles & Columns`;
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
        title: 'Journalistic Services & Articles | Haji Shabbir Ahmed Shigri',
        description: 'A collection of columns and intellectual articles by Haji Shabbir Ahmed Shigri published in various national and international newspapers.',
    };
}

export default function Page() {
    return <EnglishArticlesClient />;
}
