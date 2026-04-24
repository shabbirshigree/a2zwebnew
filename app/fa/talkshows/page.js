import TalkshowsClient from './TalkshowsClient';
import { talkshowVideos } from './data-fa';

const getYouTubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const videoId = params.v;
    
    if (videoId) {
        const video = talkshowVideos.find(v => getYouTubeId(v.url) === videoId);
        if (video) {
            const title = `${video.title} | نور پروداکشنز`;
            const description = `ارائه ویژه نور پروداکشنز: ${video.title}. برای تماشا کلیک کنید.`;
            const imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            
            return {
                title,
                description,
                openGraph: {
                    title,
                    description,
                    images: [{ url: imageUrl, width: 1280, height: 720 }],
                    type: 'video.other',
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
        title: 'رسانه‌های الکترونیکی و تک‌شوها | حاجی شبیر احمد شگری',
        description: 'مجموعه‌ای از تک‌شوهای مختلف، مصاحبه‌ها و ویدیوهای اطلاعاتی تولید شده تحت عنوان نور پروداکشنز.',
    };
}

export default function Page() {
    return <TalkshowsClient />;
}
