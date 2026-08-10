"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaPlay, FaTimes, FaChevronDown, FaMobileAlt, FaInfoCircle, FaCheckCircle, FaBookOpen, FaImages, FaFilm, FaHeadphones, FaShareAlt, FaHeart, FaRegHeart, FaEye, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import QuranIntroCard from '../../components/QuranIntroCard';
import ClipViewsCounter from '../../components/ClipViewsCounter';
import { quranVideos } from '../../noor-ul-quran/noor-ul-quran-data';

export default function EnglishProjectPageClient() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [localVideoUrl, setLocalVideoUrl] = useState('');
    const [isLocalVideoOpen, setIsLocalVideoOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [popupLikes, setPopupLikes] = useState({});
    const [popupViews, setPopupViews] = useState({});

    const [counts, setCounts] = useState({
        arabic: 8,
        urdu: 8,
        surahs: 8,
        stories: 8,
        tilawat: 8
    });

    const AUTHOR_REVIEW = {
        videoUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_qfyz0i.mp4",
        audioUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_wdodfp.mp4"
    };

    const projectSlides = [
        "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/1_algrfv.jpg",
        "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/2_o9hs4u.jpg",
        "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043095/3_ydbdnt.jpg",
        "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/4_q8dd11.jpg",
        "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/5_a3qcti.jpg",
        "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/6_wiuaoz.jpg"
    ];

    useEffect(() => {
        try {
            const storedLikes = JSON.parse(localStorage.getItem('noor-ul-quran-likes-en') || '{}');
            const storedViews = JSON.parse(localStorage.getItem('noor-ul-quran-views-en') || '{}');
            setPopupLikes(storedLikes);
            setPopupViews(storedViews);
        } catch (e) {
            console.error("Error loading stats:", e);
        }

        const videoId = searchParams.get('v');
        const localType = searchParams.get('type');
        
        if (videoId) {
            const allVideos = [
                ...quranVideos.parat_arabic,
                ...quranVideos.parat_urdu,
                ...quranVideos.surahs,
                ...quranVideos.stories,
                ...quranVideos.tilawat
            ];
            const found = allVideos.find(v => v.id === videoId);
            if (found) {
                setSelectedVideo(found);
            }
        } else if (localType === 'audio') {
            handlePlayLocalVideo(AUTHOR_REVIEW.audioUrl);
        } else if (localType === 'video-analysis') {
            handlePlayLocalVideo(AUTHOR_REVIEW.videoUrl);
        }

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projectSlides.length);
        }, 9000);
        return () => clearInterval(timer);
    }, [projectSlides.length, searchParams]);

    const handlePlayLocalVideo = (url) => {
        if (url) {
            const key = `local-${url}`;
            const nextViews = { ...popupViews, [key]: (popupViews[key] || 0) + 1 };
            setPopupViews(nextViews);
            localStorage.setItem('noor-ul-quran-views-en', JSON.stringify(nextViews));
            setLocalVideoUrl(url);
            setIsLocalVideoOpen(true);
        }
    };

    const handleOpenYoutubeVideo = (video) => {
        const key = `yt-${video.id}`;
        const nextViews = { ...popupViews, [key]: (popupViews[key] || 0) + 1 };
        setPopupViews(nextViews);
        localStorage.setItem('noor-ul-quran-views-en', JSON.stringify(nextViews));
        setSelectedVideo(video);
    };

    const togglePopupLike = (key) => {
        const nextLikes = { ...popupLikes, [key]: !popupLikes[key] };
        setPopupLikes(nextLikes);
        localStorage.setItem('noor-ul-quran-likes-en', JSON.stringify(nextLikes));
    };

    const shareFromPopup = (key) => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
        let shareUrl = baseUrl;
        
        if (key.startsWith('yt-')) {
            shareUrl += `?v=${key.replace('yt-', '')}`;
        } else if (key.includes('audio')) {
            shareUrl += `?type=audio`;
        } else if (key.includes('video-analysis')) {
            shareUrl += `?type=video-analysis`;
        }

        const text = `Noor-ul-Quran Project by Shabbir Ahmed Shigri: The world's first Visual Quran. Watch video on website:`;
        const encodedUrl = encodeURIComponent(shareUrl);
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`, "_blank");
    };

    const shareToPlatform = (platform, key) => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
        let shareUrl = baseUrl;
        
        if (key.startsWith('yt-')) {
            shareUrl += `?v=${key.replace('yt-', '')}`;
        } else if (key.includes('audio')) {
            shareUrl += `?type=audio`;
        } else if (key.includes('video-analysis')) {
            shareUrl += `?type=video-analysis`;
        }

        const text = `Noor-ul-Quran Project by Shabbir Ahmed Shigri: The world's first Visual Quran. Watch video on website:`;
        const encodedUrl = encodeURIComponent(shareUrl);
        const encodedText = encodeURIComponent(text);
        const links = {
            whatsapp: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
            email: `mailto:shigriinfo@gmail.com?subject=${encodeURIComponent("Noor-ul-Quran Project by Shabbir Ahmed Shigri")}&body=${encodedText}%0A%0A${encodedUrl}`,
            x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
        };
        const target = links[platform];
        if (target) window.open(target, "_blank", "noopener,noreferrer,width=700,height=700");
    };

    const handleShare = (type = '') => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
        let shareUrl = baseUrl;
        if (type) shareUrl += `?type=${type}`;

        if (navigator.share) {
            navigator.share({ title: "Noor-ul-Quran Project by Shabbir Ahmed Shigri", url: shareUrl }).catch(() => { });
        } else {
            navigator.clipboard.writeText(shareUrl);
            alert('Link copied to clipboard');
        }
    };

    const VideoCard = ({ video }) => (
        <div className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer group border border-[#D4AF37]/50 flex flex-col h-full relative">
            <div onClick={() => handleOpenYoutubeVideo(video)} className="relative aspect-video bg-black overflow-hidden">
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end justify-start p-2.5 bg-black/10 group-hover:bg-transparent transition-all">
                    <div className="bg-[#D4AF37]/90 w-8 h-8 rounded-full border-2 border-white shadow-[0_0_10px_rgba(212,175,55,0.4)] flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                        <FaPlay className="text-black text-[10px] ml-0.5" />
                    </div>
                </div>
            </div>

            <button 
                onClick={(e) => { e.stopPropagation(); shareFromPopup(`yt-${video.id}`); }}
                className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-[#0f4c75] opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:scale-110 z-10"
            >
                <FaShareAlt size={10} />
            </button>

            <div onClick={() => handleOpenYoutubeVideo(video)} className="p-2.5 border-t border-[#D4AF37]/30 flex-grow flex items-center justify-center bg-gradient-to-b from-[#111] to-black">
                <p className="text-[#D4AF37] font-semibold text-[13px] md:text-sm leading-snug text-center group-hover:text-white transition-colors" dir="ltr">{video.title}</p>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans" dir="ltr">
            <Navbar />
            <HeroSlider />

            <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f2a40] via-[#050505] to-[#000000] py-12 md:py-20 text-center relative border-b border-[#D4AF37]/20">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-extrabold text-[#D4AF37] mb-4 tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">Noor Al-Quran Project</h1>
                    <h2 className="text-lg md:text-3xl text-white/90 font-sans tracking-widest mb-4">(The Visual Quran)</h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
                    <p className="text-lg md:text-2xl text-[#fff7cc] font-light max-w-3xl mx-auto leading-relaxed border-t border-b border-[#D4AF37]/30 py-6 !text-center">
                        "True respect for the Quran is not merely placing it on a high shelf, but understanding it, reading it, and acting upon its teachings."
                    </p>
                </div>
            </section>

            <section className="py-12 bg-black border-y border-[#D4AF37]/20" dir="ltr">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-[#0a0a0a] rounded-[2rem] p-6 md:p-10 border border-[#D4AF37]/30 shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
                        <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all">
                                    <iframe 
                                        src="https://www.youtube.com/embed/z3olkzvoYhA?rel=0" 
                                        className="absolute inset-0 w-full h-full" 
                                        allowFullScreen
                                        title="Noor-ul-Quran Message"
                                    ></iframe>
                                </div>
                                <div className="mt-4 text-center">
                                    <Link href="/en/noor-ul-quran" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors font-bold">
                                        <span>Watch a glimpse of our work (teaser) here!</span>
                                        <FaChevronDown className="-rotate-90" />
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="space-y-6 text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] leading-tight drop-shadow-sm">A Message from the Founder of Noor-ul-Quran</h3>
                                    <div className="h-1 w-20 bg-[#D4AF37] rounded-full"></div>
                                    <div className="space-y-4 text-gray-200 text-base md:text-lg leading-relaxed text-justify">
                                        <p className="font-bold text-[#fff7cc]">A mere three-minute message from the Founder of Noor-ul-Quran, Haji Shabbir Ahmed Shigri, can beautify both your worldly life and the Hereafter!</p>
                                        <p>Noor-ul-Quran Visual (The Visual Quran) A completely new and unique approach to the invitation of the Holy Quran — The world's first 8K Visual Quran! 📖✨</p>
                                        <p className="italic text-[#D4AF37]/90 text-sm md:text-base bg-white/5 p-4 rounded-xl border-l-4 border-[#D4AF37]">
                                            (Just imagine, if a common person begins to easily understand the Holy Quran, what kind of revolution would occur within them, how would their character and morals change?...)
                                        </p>
                                        <p className="font-bold">Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh!</p>
                                        <p>In an era where the attention of our younger generation and people worldwide is fixed on screens and digital media, we lack an effective medium for understanding the Quran that common individuals can benefit from. Therefore, to embed the universal message of the Holy Quran into hearts, we have taken a completely unique and historic step.</p>
                                        <p>Under the "Noor-ul-Quran Visual Project," we are developing the world's first cinematic (visual) Quran. In this, the entire Holy Quran will be produced verse by verse in video format. In such a way that by listening to the translation and watching the scenes simultaneously, the meanings of the Quranic verses can be easily understood. This is truly happening for the first time in history and is a revolutionary step.</p>
                                        <p>This is no ordinary video series! We are using the latest AI technology to give a completely realistic visual form to Quranic events, the stories of the Prophets, and historical places. We want the light of this project to reach every corner of the world.</p>
                                        <p className="text-[#D4AF37] font-bold text-xl">Why do we need your support and cooperation?</p>
                                        <p>To create videos of such high quality, conduct research, and run a global digital library, there is a need for expensive software, powerful cloud systems, and studio expenses.</p>
                                        <p>I invite you all to join us in this great Sadaqah Jariyah (continuous charity). As long as any person in the world understands the Holy Quran by watching these videos, even after our death when we will yearn for a single good deed, its reward will continue to be written in our book of deeds. I believe wise is the person who thinks about this now.</p>
                                        <p>Your small contribution will become a means to deliver this visual Quran to millions of hearts. Please do share this message with your friends and family. JazakAllah!</p>
                                    </div>
                                    
                                    <div className="pt-8 border-t border-[#D4AF37]/20">
                                        <div className="flex flex-col md:flex-row items-center gap-6">
                                            <div className="w-32 h-32 bg-white p-2 rounded-xl shadow-lg border-2 border-[#D4AF37]">
                                                <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1779700074/6f0a48b4-871e-45ed-98f3-68389302d250.png" alt="Donation QR Code" className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 space-y-3 text-left w-full">
                                                <h4 className="text-[#D4AF37] font-bold text-lg">To contribute (Donate) to this great project, please contact:</h4>
                                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-mono text-sm md:text-base space-y-1 text-white">
                                                    <p><span className="text-gray-400">IBAN:</span> PK09ABPA0010031602830015</p>
                                                    <p><span className="text-gray-400">Title:</span> Shabbir Ahmad</p>
                                                    <p><span className="text-gray-400">Allied Bank:</span> 05300010031602830015</p>
                                                    <p><span className="text-gray-400">Jazz/Easy/Sada:</span> 03334491715</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16 bg-gradient-to-b from-[#000] via-[#051525] to-[#000] relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex justify-center items-center gap-4 mb-8"
                        >
                            <div className="h-[2px] w-12 md:w-32 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                            <h2 className="text-5xl md:text-7xl font-bold text-[#D4AF37] tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">Good News</h2>
                            <div className="h-[2px] w-12 md:w-32 bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
                        </motion.div>

                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="bg-[#0a0a0a]/80 border-2 border-[#D4AF37]/30 p-8 md:p-12 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative mx-auto inline-block w-full"
                        >
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-bold !text-center">
                                Alhamdulillah! The Noor Al-Quran project was officially inaugurated at Bayn al-Haramayn, Karbala, and the Holy Shrine of Imam Ali ibn Musa al-Ridha (A.S).
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
                        {[
              {
                name: "Sheikh Saleh Ali Noori Karbalai",
                desc: "Opening Ceremony at Bayn al-Haramayn, Karbala, Iraq",
                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840008/Iftitah--NoorulQuran-Karbala_tpwvtf.mp4",
                thumb: "https://res.cloudinary.com/drlg0dr9y/image/upload/v1777267536/79e376e3-a5e6-4481-a917-eb1ff9280702.png"
              },
              {
                name: "Sheikh Ikram Jabar",
                desc: "Preacher of the Department of Tabligh, Shrine of Imam Hussain (A.S)",
                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1777263262/Shiekh_Ikram_Jabar_Karbala_compressed_zshkqv.mp4",
                thumb: "https://res.cloudinary.com/drlg0dr9y/image/upload/v1777265902/0b065f01-e6b8-42b3-a1a6-036d71e905f4.png"
              },
                            {
                                name: "Maulana Abdul Khaliq Jafari",
                                desc: "Speaker & Servant of Imam Reza (A.S) Shrine",
                                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841560/Ag_jaffari_t487zc.mp4",
                                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_5/v1776841560/Ag_jaffari_t487zc.jpg"
                            },
                            {
                                name: "Najaf Ali Saadati",
                                desc: "Reciter & Servant of Pilgrims at Imam Reza (A.S) Shrine",
                                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841527/Najaf_Ali_Saadati_dsemnc.mp4",
                                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_8/v1776841527/Najaf_Ali_Saadati_dsemnc.jpg"
                            },
                            {
                                name: "Maulana Muhammad Hussain Akbar",
                                desc: "Head of Minhaj-ul-Hussain Institution, Lahore",
                                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840084/Molana-Akbar-about-NoorulQuran_ucs1ho.mp4",
                                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_15/v1776840084/Molana-Akbar-about-NoorulQuran_ucs1ho.jpg"
                            },
                            {
                                name: "Sohail Ahmed Raza",
                                desc: "Director Interfaith Relations, Minhaj-ul-Quran Intl",
                                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840121/Suhail-Ahmed-about-NoorulQran_hbt50r.mp4",
                                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_25/v1776840121/Suhail-Ahmed-about-NoorulQran_hbt50r.jpg"
                            }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                whileHover={{ y: -5 }}
                                className="bg-[#0a0a0a] border border-[#D4AF37]/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-[#D4AF37]/10 transition-all group w-full max-w-[380px]"
                            >
                                <div className="aspect-video relative bg-black overflow-hidden">
                                    <img 
                                        src={item.thumb} 
                                        alt={item.name}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
                                    />
                                    <div className="absolute inset-0 flex items-end justify-start p-4 bg-black/10 group-hover:bg-black/40 transition-all cursor-pointer" onClick={() => handlePlayLocalVideo(item.video)}>
                                        <div className="w-10 h-10 bg-[#D4AF37]/70 group-hover:bg-[#D4AF37]/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all z-10 opacity-60 group-hover:opacity-100">
                                            <FaPlay className="text-[#000] text-sm ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); shareFromPopup(`local-${item.video}`); }} 
                                    className="absolute top-2 right-2 w-8 h-8 bg-white/70 group-hover:bg-white/90 rounded-full flex items-center justify-center text-[#0f4c75] opacity-60 group-hover:opacity-100 transition-all shadow-md hover:scale-110 z-20 border-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37]"
                                >
                                    <FaShareAlt size={12} />
                                </button>
                                <div className="p-6 text-center bg-black">
                                    <h4 className="text-[#D4AF37] text-xl font-bold mb-2">{item.name}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed h-10 flex items-center justify-center px-4">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 pt-10 pb-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-[#0a0a0a] rounded-[2.5rem] p-6 md:p-12 border border-[#D4AF37]/20 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                        <div className="flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-full mb-3 text-sm font-bold border border-[#D4AF37]/30 shadow-inner">
                                <FaImages /> Project Glimpse
                            </div>
                            <div className="w-[300px] md:w-[330px] h-[400px] md:h-[430px] border-[6px] border-[#D4AF37] rounded-xl overflow-hidden relative shadow-[0_0_20px_rgba(212,175,55,0.4)] bg-black">
                                {projectSlides.map((slide, index) => (
                                    <img key={index} src={slide} alt={`Slide ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-full mb-3 text-sm font-bold border border-[#D4AF37]/30 shadow-inner">
                                <FaMobileAlt /> Today's Quranic Clip
                            </div>
                            <div className="w-[220px] md:w-[240px] h-[400px] md:h-[430px] border-[10px] border-gray-800 rounded-[2rem] overflow-hidden relative shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-black">
                                <div className="absolute top-0 w-24 h-4 bg-gray-800 rounded-b-lg z-20 left-1/2 transform -translate-x-1/2"></div>
                                <iframe
                                    src="https://www.youtube.com/embed/videoseries?list=PLv2RK6Z1UOXc2OPbBzV_h1BclLmgYNGM2"
                                    className="w-full h-full absolute inset-0 z-10"
                                    allowFullScreen
                                    loading="lazy"
                                    title="Daily Quranic Clip Playlist"
                                ></iframe>
                            </div>
                            <ClipViewsCounter lang="en" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-12">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 bg-[#0a0a0a] border border-gray-800 hover:border-[#D4AF37]/50 rounded-[2.5rem] p-6 md:p-10 shadow-2xl transition-all duration-500 group relative overflow-hidden">
                    <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6 relative z-10">
                        <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png" alt="Noor Al-Quran" className="w-full h-auto rounded-2xl shadow-lg border border-[#D4AF37]/50" />
                        <div className="space-y-3">
                            <div className="flex rounded-xl overflow-hidden shadow-sm">
                                <Link href="/en/library#Quran" className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm bg-[#1a1a1a] text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition-colors shadow-sm">
                                    <FaBookOpen className="ml-2" /> Read More
                                </Link>
                                <button onClick={() => handleShare()} className="px-4 flex items-center justify-center bg-[#1a1a1a] text-white border border-[#D4AF37]/50 border-r-0 hover:bg-[#D4AF37] hover:text-black transition-colors">
                                    <FaShareAlt size={14} />
                                </button>
                            </div>
                            <div className="flex rounded-xl overflow-hidden shadow-sm">
                                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.audioUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-[#0b314d] hover:shadow-lg transition-all">
                                    <FaHeadphones className="ml-2" /> Listen to Podcast
                                </button>
                                <button onClick={() => handleShare('audio')} className="px-4 flex items-center justify-center bg-[#D4AF37] text-[#0b314d] border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
                            </div>
                            <div className="flex rounded-xl overflow-hidden shadow-sm">
                                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.videoUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm bg-gradient-to-r from-red-700 to-red-900 text-white hover:shadow-lg transition-all">
                                    <FaFilm className="ml-2" /> Watch Video Analysis
                                </button>
                                <button onClick={() => handleShare('video-analysis')} className="px-4 flex items-center justify-center bg-red-800 text-white border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-left relative z-10" dir="ltr">
                        <QuranIntroCard lang='en' phase={0} />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-black to-[#0b314d] py-16 md:py-20 border-y-4 border-[#D4AF37]/50">
                <div className="container mx-auto px-4" dir="ltr">
                    <div className="max-w-4xl mx-auto bg-white/5 p-8 md:p-12 rounded-3xl border border-[#D4AF37]/30 text-center shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[80px] opacity-20"></div>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-6">Noor Al-Quran Project: A Perpetual Charity</h2>
                        <p className="text-white/90 text-base md:text-xl leading-relaxed font-light mb-8">If you wish to contribute to this global initiative of making the Quran accessible to all, please reach out to us.</p>
                        <Link href="/en/contact" className="inline-block bg-[#D4AF37] text-[#0b314d] px-10 py-3 rounded-full font-bold text-lg hover:bg-white transition-all shadow-md">Contact & Details</Link>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-8 md:py-12 relative z-10 border-t border-white/5 mt-4">
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="bg-[#111] border border-[#D4AF37]/30 rounded-xl p-5 md:p-6 shadow-lg">
                        <h3 className="text-lg md:text-2xl font-bold text-[#D4AF37] text-center mb-3">✨ The Historic Launch of the Complete Quran with Urdu Translation ✨</h3>
                        <p className="text-center text-gray-400 mb-4 text-xs md:text-sm">The official inauguration of this groundbreaking project took place at the sacred shrine of Allama Sheikh Muhsin Ali Najafi (Jamia Kawthar Islamabad) on the first night of Ramadan.</p>
                        <div className="aspect-video rounded-lg overflow-hidden border border-[#D4AF37]/50">
                            <iframe
                                src="https://www.youtube.com/embed/ah0OXlnDw2k?rel=0&modestbranding=1&showinfo=0"
                                allowFullScreen
                                className="w-full h-full"
                                title="Noor ul Quran Project Launch"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-black">
                <QuranIntroCard lang='en' />
                <section id="arabic" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
                    <h3 className="bg-[#0b314d] text-[#D4AF37] px-6 py-2 rounded-full border border-[#D4AF37]/50 text-xl font-bold text-center mb-8">Quranic Videos (Arabic) - 30 Parts</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quranVideos.parat_arabic.slice(0, counts.arabic).map((v, i) => <VideoCard key={i} video={v} />)}
                    </div>
                    {counts.arabic < quranVideos.parat_arabic.length && (
                        <div className="text-center mt-6">
                            <button onClick={() => setCounts({ ...counts, arabic: counts.arabic + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2 mx-auto">Load More <FaChevronDown /></button>
                        </div>
                    )}
                </section>

                <div className="py-8">
                    <QuranIntroCard lang='en' phase={2} />
                </div>

                <section id="urdu" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quranVideos.parat_urdu.slice(0, counts.urdu).map((v, i) => <VideoCard key={i} video={v} />)}
                    </div>
                    {counts.urdu < quranVideos.parat_urdu.length && (
                        <div className="text-center mt-6">
                            <button onClick={() => setCounts({ ...counts, urdu: counts.urdu + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2 mx-auto">Load More <FaChevronDown /></button>
                        </div>
                    )}
                </section>

                <section id="surahs" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
                    <h3 className="bg-[#0b314d] text-[#D4AF37] px-6 py-2 rounded-full border border-[#D4AF37]/50 text-xl font-bold text-center mb-8">Selected Surahs</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quranVideos.surahs.slice(0, counts.surahs).map((v, i) => <VideoCard key={i} video={v} />)}
                    </div>
                    {counts.surahs < quranVideos.surahs.length && (
                        <div className="text-center mt-6">
                            <button onClick={() => setCounts({ ...counts, surahs: counts.surahs + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2 mx-auto">Load More <FaChevronDown /></button>
                        </div>
                    )}
                </section>

                <section id="stories" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
                    <QuranIntroCard lang="en" phase={3} />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {quranVideos.stories.slice(0, counts.stories).map((v, i) => <VideoCard key={i} video={v} />)}
                    </div>
                    {counts.stories < quranVideos.stories.length && (
                        <div className="text-center mt-6">
                            <button onClick={() => setCounts({ ...counts, stories: counts.stories + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2 mx-auto">Load More <FaChevronDown /></button>
                        </div>
                    )}
                </section>

                <section id="tilawat" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
                    <h3 className="bg-[#0b314d] text-[#D4AF37] px-6 py-2 rounded-full border border-[#D4AF37]/50 text-xl font-bold text-center mb-8">Recitation, Hymns & Quranic Miracles</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quranVideos.tilawat.slice(0, counts.tilawat).map((v, i) => <VideoCard key={i} video={v} />)}
                    </div>
                    {counts.tilawat < quranVideos.tilawat.length && (
                        <div className="text-center mt-6">
                            <button onClick={() => setCounts({ ...counts, tilawat: counts.tilawat + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2 mx-auto">Load More <FaChevronDown /></button>
                        </div>
                    )}
                </section>
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
                    <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
                        <button className="absolute -top-12 right-0 bg-red-600 text-white px-3 py-1.5 rounded-full flex items-center gap-2" onClick={() => setSelectedVideo(null)}><FaTimes /> Close</button>
                        <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`} allowFullScreen className="w-full aspect-video rounded-lg shadow-2xl border border-[#D4AF37]"></iframe>
                        <div className="mt-4 bg-[#0d0d0d] border border-[#D4AF37]/40 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <button type="button" onClick={() => togglePopupLike(`yt-${selectedVideo.id}`)} className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs flex items-center gap-1.5">
                                    {popupLikes[`yt-${selectedVideo.id}`] ? <FaHeart /> : <FaRegHeart />} {popupLikes[`yt-${selectedVideo.id}`] ? 1 : 0}
                                </button>
                                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1.5"><FaEye /> {popupViews[`yt-${selectedVideo.id}`] || 1}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <button type="button" onClick={() => shareFromPopup(`yt-${selectedVideo.id}`)} className="share-btn"><FaShareAlt /> Share</button>
                                <button onClick={() => shareToPlatform("whatsapp", `yt-${selectedVideo.id}`)} className="social-icon-btn social-whatsapp"><FaWhatsapp /></button>
                                <button onClick={() => shareToPlatform("facebook", `yt-${selectedVideo.id}`)} className="social-icon-btn social-facebook"><FaFacebookF /></button>
                                <button onClick={() => shareToPlatform("telegram", `yt-${selectedVideo.id}`)} className="social-icon-btn social-telegram"><FaTelegramPlane /></button>
                                <button onClick={() => shareToPlatform("email", `yt-${selectedVideo.id}`)} className="social-icon-btn social-email"><FaEnvelope /></button>
                                <button onClick={() => shareToPlatform("x", `yt-${selectedVideo.id}`)} className="social-icon-btn social-twitter"><FaXTwitter /></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isLocalVideoOpen && (
                <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsLocalVideoOpen(false)}>
                    <div className="w-full max-w-4xl relative mt-10" onClick={e => e.stopPropagation()}>
                        <button 
                            className="absolute -top-14 right-0 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold shadow-xl transition-all z-[110] flex items-center gap-2" 
                            onClick={() => setIsLocalVideoOpen(false)}
                        >
                            <FaTimes /> Close
                        </button>
                        <div className="rounded-2xl overflow-hidden border-4 border-[#D4AF37] bg-black shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                            <video src={localVideoUrl} controls autoPlay className="w-full max-h-[75vh]" />
                        </div>
                        <div className="mt-6 bg-[#0d0d0d] border border-[#D4AF37]/40 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <button type="button" onClick={() => togglePopupLike(`local-${localVideoUrl}`)} className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs flex items-center gap-1.5">
                                    {popupLikes[`local-${localVideoUrl}`] ? <FaHeart /> : <FaRegHeart />} {popupLikes[`local-${localVideoUrl}`] ? 1 : 0}
                                </button>
                                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1.5"><FaEye /> {popupViews[`local-${localVideoUrl}`] || 1}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <button type="button" onClick={() => shareFromPopup(`local-${localVideoUrl}`)} className="share-btn"><FaShareAlt /> Share</button>
                                <button onClick={() => shareToPlatform("whatsapp", `local-${localVideoUrl}`)} className="social-icon-btn social-whatsapp"><FaWhatsapp /></button>
                                <button onClick={() => shareToPlatform("facebook", `local-${localVideoUrl}`)} className="social-icon-btn social-facebook"><FaFacebookF /></button>
                                <button onClick={() => shareToPlatform("telegram", `local-${localVideoUrl}`)} className="social-icon-btn social-telegram"><FaTelegramPlane /></button>
                                <button onClick={() => shareToPlatform("email", `local-${localVideoUrl}`)} className="social-icon-btn social-email"><FaEnvelope /></button>
                                <button onClick={() => shareToPlatform("x", `local-${localVideoUrl}`)} className="social-icon-btn social-twitter"><FaXTwitter /></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
