"use client";
import { useState } from 'react';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
// 🔴 سوشل میڈیا کے تمام آئکنز
import { FaYoutube, FaChevronDown, FaGlobe, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { talkshowIntro, talkshowVideos, interviewsImages, generalGallery, TALKSHOW_CHANNELS as otherChannels } from './data';

const getYouTubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function TalkshowsPage() {
    const [activeVideo, setActiveVideo] = useState(null);
    const [filter, setFilter] = useState('all');
    const [visibleVideosCount, setVisibleVideosCount] = useState(8);

    const categories = [...new Set(talkshowVideos.map(v => v.category))];

    const handleFilterChange = (cat) => {
        setFilter(cat);
        setVisibleVideosCount(8);
    }

    const renderVideos = (videosArray) => {
        return videosArray.map((vid, i) => {
            const videoId = getYouTubeId(vid.url);
            return (
                <div key={i} className="relative group rounded-xl overflow-hidden border-2 border-white/20 hover:border-[#D4AF37] shadow-lg cursor-pointer bg-black aspect-video" onClick={() => setActiveVideo(videoId)}>
                    <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={vid.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaYoutube className="text-5xl text-white/80 group-hover:text-[#ff0000] transition-colors drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-center">
                        <h4 className="text-white font-bold text-xs md:text-sm urdu-text leading-tight">{vid.title}</h4>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans">
            <Navbar />
            <HeroSlider />

            {/* 🌟 مین ہیڈنگ */}
            <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-12 md:py-16 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="bg-[#D4AF37] text-[#0b314d] font-bold px-4 py-1 rounded-full text-sm md:text-base mb-4 inline-block shadow-lg">نور پروڈکشنز کی تاریخی پیشکش</span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-4 urdu-text tracking-wide leading-tight">
                        {talkshowIntro.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-[#fff7cc] font-light urdu-text tracking-widest mb-4">
                        {talkshowIntro.subtitle}
                    </h2>
                </div>
            </section>

            {/* 🌟 ہمارے دیگر پلیٹ فارمز (صرف یہ حصہ اپڈیٹ کیا گیا ہے) */}
            <section className="container mx-auto px-4 py-16" dir="rtl">
                <h2 className="text-2xl md:text-4xl font-bold text-[#0b314d] mb-12 text-center urdu-text">ہمارے دیگر پلیٹ فارمز / چینلز</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {otherChannels.map((channel, idx) => (
                        <div key={idx} className="relative transition-all duration-300 hover:-translate-y-2 h-full">
                            <a href={channel.url || channel.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-30 cursor-pointer"></a>
                            <div className="bg-white rounded-[2rem] p-6 shadow-lg border-2 border-[#D4AF37] h-full flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${channel.color}`} />
                                <div className="relative w-20 h-20 mx-auto mb-4 mt-2">
                                    <div className="w-full h-full rounded-2xl p-1 bg-white shadow-md ring-1 ring-gray-100 overflow-hidden">
                                        <img src={channel.img} alt={channel.title} className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-lg shadow-sm border border-gray-50">
                                        {channel.iconType === 'youtube' ? <FaYoutube className="text-[#ff0000]" size={16} /> : <FaGlobe className="text-[#0b314d]" size={16} />}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1 urdu-text leading-tight group-hover:text-[#0b314d]">{channel.title}</h3>
                                <p className="text-[10px] font-bold text-blue-500 mb-3 opacity-70 tracking-tighter uppercase">{channel.handle || '@noorproduction'}</p>
                                <p className="text-gray-500 text-xs leading-relaxed mb-6 urdu-text line-clamp-2">{channel.desc}</p>
                                <div className={`mt-auto w-full py-2.5 rounded-xl font-bold text-white text-sm shadow-md bg-gradient-to-r ${channel.color} transition-transform group-hover:scale-105`}>وزٹ کریں</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🌟 نور پروڈکشنز کا خصوصی تعارف */}
            <section className="container mx-auto px-4 py-12" dir="rtl">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                    <div className="bg-gradient-to-l from-[#D4AF37] to-[#e6c875] p-6 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#0b314d] urdu-text">{talkshowIntro.noorProductionIntro.title}</h2>
                    </div>
                    <div className="p-8 md:p-12 text-gray-700 text-lg md:text-xl leading-loose urdu-text text-justify font-medium space-y-6">
                        <p>{talkshowIntro.noorProductionIntro.text1}</p>
                        <p className="bg-gray-50 p-4 border-r-4 border-[#0b314d] rounded-lg italic text-[#0f4c75]">
                            {talkshowIntro.noorProductionIntro.text2}
                        </p>
                        <p>{talkshowIntro.noorProductionIntro.text3}</p>
                    </div>
                </div>
            </section>

            {/* 📖 سیکشن 1: دیگر ٹاک شوز کا تعارف */}
            <section className="container mx-auto px-4 pb-12" dir="rtl">
                <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#D4AF37] p-6 md:p-10 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37] rounded-full blur-[60px] opacity-20"></div>
                    <p className="text-lg md:text-xl text-[#0b314d] leading-relaxed urdu-text font-light text-justify drop-shadow-sm italic">
                        {talkshowIntro.quote}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {talkshowIntro.features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-b-4 border-[#0b314d] hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-[#0f4c75] mb-4 urdu-text border-b border-gray-100 pb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed urdu-text text-justify font-light">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🎥 سیکشن 2: ویڈیو گیلری */}
            <section className="bg-[#0b314d] py-12 md:py-16 relative border-y-4 border-[#D4AF37]">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 urdu-text">🎬 نور پروڈکشنز ویڈیو گیلری</h2>

                        {/* فلٹرز */}
                        <div className="flex flex-wrap justify-center gap-3" dir="rtl">
                            <button
                                onClick={() => handleFilterChange('all')}
                                className={`px-4 py-2 rounded-full font-bold urdu-text text-sm transition-all duration-300 ${filter === 'all' ? 'bg-[#D4AF37] text-[#0b314d] shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                تمام ویڈیوز
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => handleFilterChange(cat)}
                                    className={`px-4 py-2 rounded-full font-bold urdu-text text-sm transition-all duration-300 ${filter === cat ? 'bg-[#D4AF37] text-[#0b314d] shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div dir="rtl">
                        {filter === 'all' ? (
                            categories.map(cat => {
                                const catVideos = talkshowVideos.filter(v => v.category === cat);
                                const videosToShow = catVideos.slice(0, visibleVideosCount);
                                if (videosToShow.length === 0) return null;

                                return (
                                    <div key={cat} className="mb-12">
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6 border-b-2 border-white/20 pb-2 inline-block urdu-text pl-6">
                                            {cat}
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                            {renderVideos(videosToShow)}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                                {renderVideos(talkshowVideos.filter(v => v.category === filter).slice(0, visibleVideosCount))}
                            </div>
                        )}
                    </div>

                    {/* 🔴 Load More Button */}
                    <div className="flex justify-center mt-8 mb-10">
                        <button
                            onClick={() => setVisibleVideosCount(prev => prev + 8)}
                            className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0b314d] font-bold urdu-text px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg"
                        >
                            مزید ویڈیوز دیکھیں <FaChevronDown />
                        </button>
                    </div>

                    {/* 🔴 Main Channel Link Button */}
                    <div className="flex justify-center mt-8 border-t border-white/20 pt-8">
                        <a
                            href="https://www.youtube.com/@noorproduction"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold urdu-text px-6 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-105 text-sm md:text-xl text-center"
                        >
                            <FaYoutube className="text-3xl" />
                            مکمل ویڈیوز کے لیے نور پروڈکشنز کا یوٹیوب چینل وزٹ کریں
                        </a>
                    </div>

                </div>
            </section>

            {/* 📸 سیکشن 3: انٹرویوز اور شخصیات */}
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#0f4c75] mb-10 text-center urdu-text">🎙️ اہم شخصیات کے انٹرویوز</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {interviewsImages.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group hover:shadow-xl transition-all">
                                <div className="h-40 md:h-48 overflow-hidden bg-gray-200 relative">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-3 bg-[#0f4c75] text-center border-t-2 border-[#D4AF37]">
                                    <p className="text-white font-bold text-sm md:text-base urdu-text">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📸 سیکشن 4: دیگر تصویری جھلکیاں */}
            <section className="container mx-auto px-4 py-12 border-t border-gray-200">
                <h2 className="text-2xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center urdu-text">📸 یادگار لمحات</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {generalGallery.map((img, idx) => (
                        <div key={idx} className="relative group rounded-lg overflow-hidden border border-gray-200 hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300 aspect-square bg-black">
                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </section>

            {/* 🌟 5. ہمیں فالو کریں (سوشل میڈیا) */}
            <section className="container mx-auto px-4 pb-16 pt-10">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0b314d] to-[#0f4c75] rounded-3xl p-8 md:p-12 text-white border-2 border-[#D4AF37] shadow-2xl text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-bold mb-3 urdu-text text-[#D4AF37]">ہمیں فالو کریں</h2>
                        <p className="text-sm md:text-xl mb-8 opacity-90 urdu-text font-light">تمام نئی اپڈیٹس اور خصوصی مواد کے لیے سوشل میڈیا پر ہمارے ساتھ جڑیں</p>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
                            <a href="https://wa.me/923334491715" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group shadow-lg"><FaWhatsapp className="text-2xl md:text-4xl text-white group-hover:text-[#25D366]" /></a>
                            <a href="https://www.youtube.com/@noorproduction" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group shadow-lg"><FaYoutube className="text-2xl md:text-4xl text-white group-hover:text-[#FF0000]" /></a>
                            <a href="https://www.facebook.com/shigri51214/" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group shadow-lg"><FaFacebook className="text-2xl md:text-4xl text-white group-hover:text-[#1877F2]" /></a>
                            <a href="https://t.me/+923334491715" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group shadow-lg"><FaTelegram className="text-2xl md:text-4xl text-white group-hover:text-[#0088cc]" /></a>
                            <a href="https://x.com/shigri41215" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group shadow-lg"><FaXTwitter className="text-2xl md:text-4xl text-white group-hover:text-black" /></a>
                            <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group shadow-lg"><FaTiktok className="text-2xl md:text-4xl text-white group-hover:text-black" /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔴 یوٹیوب ویڈیو پلے کرنے والا ماڈل */}
            {activeVideo && (
                <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setActiveVideo(null)}>
                    <button className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[1001]">&times;</button>
                    <div className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.6)] border-4 border-[#D4AF37]" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            className="w-full h-[50vh] md:h-[75vh]"
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}