import LibraryClient from './LibraryClient';
import { BOOKS_DATA } from './libraryData';

export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const bookId = params.b;
    
    if (bookId) {
        const book = BOOKS_DATA.find(b => b.id === bookId);
        if (book) {
            const title = `${book.title} | لائبریری`;
            const description = `${book.descUrdu.substring(0, 150)}...`;
            const imageUrl = book.image;
            
            return {
                title,
                description,
                openGraph: {
                    title,
                    description,
                    images: [{ url: imageUrl, width: 800, height: 1200 }],
                    type: 'book',
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
        title: 'لائبریری | حاجی شبیر احمد شگری',
        description: 'حاجی شبیر احمد شگری کی تحریر کردہ کتب، مقالات اور دیگر علمی مواد کا مجموعہ۔',
    };
}

export default function Page() {
    return <LibraryClient />;
}
