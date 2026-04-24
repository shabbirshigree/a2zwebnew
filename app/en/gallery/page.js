import GalleryClient from './GalleryClient';
import { GALLERY_ITEMS } from '../../gallery/galleryData';

export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const itemId = params.i;
    
    if (itemId) {
        const item = GALLERY_ITEMS.find(it => it.id === itemId);
        if (item) {
            const title = `${item.tag} | Gallery`;
            const description = item.desc;
            let imageUrl = item.src;
            
            if (item.type === 'yt') {
                imageUrl = `https://img.youtube.com/vi/${item.id_yt}/maxresdefault.jpg`;
            } else if (item.type === 'video') {
                imageUrl = item.poster;
            }
            
            return {
                title,
                description,
                openGraph: {
                    title,
                    description,
                    images: [{ url: imageUrl }],
                    type: item.type === 'img' ? 'article' : 'video.other',
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
        title: 'Photo Gallery | Haji Shabbir Ahmed Shigri',
        description: 'Photo and video highlights of 45 years of service by Haji Shabbir Ahmed Shigri.',
    };
}

export default function Page() {
    return <GalleryClient />;
}
