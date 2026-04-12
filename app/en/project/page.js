"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlay, FaTimes, FaChevronDown, FaMobileAlt, FaInfoCircle, FaCheckCircle, FaBookOpen, FaImages, FaFilm, FaHeadphones, FaShareAlt, FaHeart, FaRegHeart, FaEye, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import QuranIntroCard from '../../components/QuranIntroCard';
import { quranVideos } from '../../project/projectData';

export default function EnglishProjectPage() {
    const router = useRouter();
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [localVideoUrl, setLocalVideoUrl] = useState('');
    const [isLocalVideoOpen, setIsLocalVideoOpen] = useState(false);
    const [showFullText, setShowFullText] = useState(false);
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

    const handleLanguageChange = (lang) => {
        if (lang === 'fa') {
            router.push('/fa/project');
        } else if (lang === 'ur') {
            router.push('/project');
        } else {
            router.push('/en/project');
        }
    };

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
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projectSlides.length);
        }, 9000);
        return () => clearInterval(timer);
    }, [projectSlides.length]);

    const handlePlayLocalVideo = (url) => {
        if (url) {
            const key = `local-${url}`;
            const nextViews = { ...popupViews, [key]: (popupViews[key] || 0) + 1 };
            setPopupViews(nextViews);
            setLocalVideoUrl(url);
            setIsLocalVideoOpen(true);
        }
    };

    const handleOpenYoutubeVideo = (video) => {
        const key = `yt-${video.id}`;
        const nextViews = { ...popupViews, [key]: (popupViews[key] || 0) + 1 };
        setPopupViews(nextViews);
        setSelectedVideo(video);
    };

    const togglePopupLike = (key) => {
        const nextLikes = { ...popupLikes, [key]: !popupLikes[key] };
        setPopupLikes(nextLikes);
    };

    const shareFromPopup = (key) => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        const text = `Noor Al-Quran Project Video (${key})`;
        const encodedUrl = encodeURIComponent(url);
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/?text=${encodedText}%20${encodedUrl}`, "_blank");
    };

    const shareToPlatform = (platform, key) => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        const text = `Noor Al-Quran Project Video (${key})`;
        const encodedUrl = encodeURIComponent(url);
        const encodedText = encodeURIComponent(text);
        const links = {
            whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
            email: `mailto:shigriinfo@gmail.com?subject=${encodeURIComponent("Noor al Quran")}&body=${encodedText}%0A%0A${encodedUrl}`,
            x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
        };
        const target = links[platform];
        if (target) window.open(target, "_blank", "noopener,noreferrer,width=700,height=700");
    };

    const handleShare = () => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        if (navigator.share) {
            navigator.share({ title: "Noor Al-Quran Project", url: url }).catch(() => { });
        } else {
            navigator.clipboard.writeText(url);
            alert('Link copied');
        }
    };

    const getYouTubeId = (url) => {
        if (!url) return '';
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const VideoCard = ({ video }) => (
        <div onClick={() => handleOpenYoutubeVideo(video)} className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer group border border-[#D4AF37]/50 flex flex-col h-full">
            <div className="relative aspect-video bg-black overflow-hidden">
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                    <div className="bg-[#D4AF37] rounded-full p-2.5 shadow-[0_0_10px_rgba(212,175,55,0.6)] transform scale-90 group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-[#0b314d] text-xs ml-0.5" />
                    </div>
                </div>
            </div>
            <div className="p-2.5 border-t border-[#D4AF37]/30 flex-grow flex items-center justify-center bg-gradient-to-b from-[#111] to-black">
                <p className="text-[#D4AF37] font-semibold text-[13px] md:text-sm leading-snug text-center" dir="ltr">{video.title}</p>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans" dir="ltr">
            <Navbar />
            <HeroSlider />

            <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f2a40] via-[#050505] to-[#000000] py-12 md:py-16 text-center relative border-b border-[#D4AF37]/20">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] mb-3 tracking-wide">Noor Al-Quran Project</h1>
                    <h2 className="text-base md:text-xl text-white/80 font-sans tracking-widest mb-3">(The Visual Quran)</h2>
                    <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>
                    <p className="text-sm md:text-lg text-[#fff7cc] font-light max-w-2xl mx-auto leading-relaxed border-t border-b border-[#D4AF37]/30 py-3">
                        "True respect for the Quran is not merely placing it on a high shelf, but understanding it, reading it, and acting upon its teachings."
                    </p>
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
                                <iframe src="https://www.youtube.com/embed/videoseries?list=PLVLSFOIjQLcKg6NISQO33OXnk8JyOJET-" className="w-full h-full absolute inset-0 z-10" allowFullScreen></iframe>
                            </div>
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
                                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-[#1a1a1a] text-white border border-[#D4AF37]/50 border-r-0 hover:bg-[#D4AF37] hover:text-black transition-colors">
                                    <FaShareAlt size={14} />
                                </button>
                            </div>
                            <div className="flex rounded-xl overflow-hidden shadow-sm">
                                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.audioUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-[#0b314d] hover:shadow-lg transition-all">
                                    <FaHeadphones className="ml-2" /> Listen to Podcast
                                </button>
                                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-[#D4AF37] text-[#0b314d] border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
                            </div>
                            <div className="flex rounded-xl overflow-hidden shadow-sm">
                                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.videoUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm bg-gradient-to-r from-red-700 to-red-900 text-white hover:shadow-lg transition-all">
                                    <FaFilm className="ml-2" /> Watch Video Analysis
                                </button>
                                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-red-800 text-white border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
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

                {/* Phase 2 Card */}
                <div className="py-8">
                    <QuranIntroCard lang='en' phase={2} />
                </div>

                {/* Urdu Videos */}
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
                <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4" onClick={() => setIsLocalVideoOpen(false)}>
                    <div className="w-full max-w-4xl relative" onClick={e => e.stopPropagation()}>
                        <button className="absolute -top-12 right-0 bg-red-600 text-white px-4 py-2 rounded-full" onClick={() => setIsLocalVideoOpen(false)}><FaTimes /> Close</button>
                        <video src={localVideoUrl} controls autoPlay className="w-full rounded-2xl border-4 border-[#D4AF37] bg-black" />
                        <div className="mt-4 bg-[#0d0d0d] border border-[#D4AF37]/40 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
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
