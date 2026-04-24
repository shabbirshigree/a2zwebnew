import LibraryClient from './LibraryClient';
import { BOOKS_DATA } from './data';

export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const bookId = params.b;
    
    if (bookId) {
        const book = BOOKS_DATA.find(b => b.id === bookId);
        if (book) {
            const title = `${book.title} | Library`;
            const description = `${book.descEn.substring(0, 150)}...`;
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
        title: 'Library | Haji Shabbir Ahmed Shigri',
        description: 'A collection of books, articles, and other scholarly materials written by Haji Shabbir Ahmed Shigri.',
    };
}

export default function Page() {
    return <LibraryClient />;
}
