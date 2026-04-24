import TalkshowsClient from './TalkshowsClient';
import { talkshowVideos } from './data';

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
            const title = `${video.title} | نور پروڈکشنز`;
            const description = `نور پروڈکشنز کی خصوصی پیشکش: ${video.title}۔ ابھی دیکھنے کے لیے کلک کریں۔`;
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
        title: 'الیکٹرانک میڈیا اور ٹاک شوز | حاجی شبیر احمد شگری',
        description: 'نور پروڈکشنز کے تحت تیار کردہ مختلف ٹاک شوز، انٹرویوز اور معلوماتی ویڈیوز کا مجموعہ۔',
    };
}

export default function Page() {
    return <TalkshowsClient />;
}
