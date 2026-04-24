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
            const title = `${video.title} | Noor Productions`;
            const description = `Noor Productions Special Presentation: ${video.title}. Click to watch now.`;
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
        title: 'Electronic Media & Talk Shows | Haji Shabbir Ahmed Shigri',
        description: 'A collection of various talk shows, interviews, and informative videos produced under Noor Productions.',
    };
}

export default function Page() {
    return <TalkshowsClient />;
}
