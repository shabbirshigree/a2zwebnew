import GalleryClient from './GalleryClient';
import { GALLERY_ITEMS } from '../../gallery/galleryData';

export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const itemId = params.i;
    
    if (itemId) {
        const item = GALLERY_ITEMS.find(it => it.id === itemId);
        if (item) {
            const title = `${item.tag} | گالری`;
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
        title: 'گالری تصاویر | حاجی شبیر احمد شگری',
        description: 'نکات برجسته تصویری و ویدیویی از ۴۵ سال خدمت حاجی شبیر احمد شگری.',
    };
}

export default function Page() {
    return <GalleryClient />;
}
