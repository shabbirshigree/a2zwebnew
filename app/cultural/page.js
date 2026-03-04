"use client";
import { useState } from 'react';
import {
    FaGlobe, FaHandshake, FaMosque, FaLanguage, FaFilm,
    FaPlay, FaTimes, FaQuoteRight, FaMedal, FaUsers, FaBookReader
} from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

// 🔴 ڈیٹا فائل سے سارا مواد امپورٹ کر رہے ہیں
import {
    pageIntro, diplomaticServicesList, anjumanData, unityData,
    persianServicesData, festivalsData, galleries, culturalVideos
} from './data';

const getYouTubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function CulturalServicesPage() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-gray-800 font-sans overflow-x-hidden">
            <Navbar />
            <HeroSlider />

            {/* 🌟 1. روح پرور ہیڈر */}
            <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-16 md:py-20 text-center relative border-b-8 border-[#D4AF37] shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-6 urdu-text tracking-wide leading-tight">
                        {pageIntro.title}
                    </h1>
                    <h2 className="text-xl md:text-3xl text-[#fff7cc] font-light urdu-text tracking-widest mb-8">
                        {pageIntro.subtitle}
                    </h2>

                    <div className="max-w-4xl mx-auto bg-black/20 p-8 md:p-10 rounded-[2rem] border border-[#D4AF37]/30 backdrop-blur-sm relative mt-10">
                        <FaQuoteRight className="absolute -top-6 -right-6 text-[#D4AF37] text-5xl opacity-50" />
                        <p className="text-lg md:text-2xl leading-relaxed text-justify urdu-text font-light italic">
                            {pageIntro.quote}
                        </p>
                    </div>
                </div>
            </section>

            {/* 🏛️ 2. ثقافتی و سفارتی خدمات (Diplomacy) */}
            <section className="container mx-auto px-4 py-16 md:py-24" dir="rtl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] urdu-text mb-4 flex justify-center items-center gap-3">
                        <FaGlobe className="text-[#D4AF37]" /> خانہ فرہنگ اور سفارتی خدمات
                    </h2>
                    <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {diplomaticServicesList.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#0b314d] hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 group">
                            <h3 className="text-xl font-bold text-[#0b314d] group-hover:text-[#D4AF37] mb-4 urdu-text transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed urdu-text text-justify">{service.text}</p>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-bold text-[#0b314d] mb-6 urdu-text text-center">سفارتی گیلری</h3>
                <ImageGallery images={galleries.diplomacy} />
            </section>

            {/* 🕊️ 3. وحدتِ امت (Unity) - Special Dark Section */}
            <section className="bg-gradient-to-br from-[#0a1f30] via-[#112a40] to-[#0a1f30] text-white py-16 md:py-24 border-y-8 border-[#D4AF37] relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mosque.png')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10" dir="rtl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] urdu-text mb-4 flex justify-center items-center gap-3">
                            <FaMosque className="text-white" /> وحدتِ امت کا تاریخی مشن
                        </h2>
                        <p className="text-xl text-gray-300 urdu-text max-w-3xl mx-auto">بین المسالک و بین المذاہب ہم آہنگی اور قلوب کو جوڑنے کا 25 سالہ سفر</p>
                    </div>

                    {/* Efforts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {unityData.efforts.map((effort, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors backdrop-blur-sm">
                                <h4 className="text-[#D4AF37] font-bold text-xl mb-3 urdu-text">{effort.title}</h4>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify urdu-text">{effort.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Chadar Poshi Big Box */}
                    <div className="bg-gradient-to-l from-emerald-900 to-[#0b314d] p-8 md:p-12 rounded-[3rem] border-4 border-[#D4AF37] shadow-2xl mb-16">
                        <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-6 urdu-text flex items-center gap-3">
                            <FaMedal /> {unityData.chadarPoshi.title}
                        </h3>
                        <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify font-light italic urdu-text">
                            {unityData.chadarPoshi.desc}
                        </p>

                        <div className="bg-black/30 p-6 md:p-8 rounded-3xl">
                            <h4 className="text-xl font-bold text-[#D4AF37] mb-6 urdu-text border-b border-[#D4AF37]/30 pb-2 inline-block">تقریب میں شریک جید علمائے کرام اور معزز شخصیات:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {unityData.chadarPoshi.scholars.map((scholar, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="text-[#D4AF37] mt-1">✨</span>
                                        <p className="text-sm md:text-base urdu-text font-light text-[#fff7cc]">{scholar}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Embassy & Ahnaf */}
                    <div className="bg-white text-[#0b314d] p-8 md:p-12 rounded-[3rem] shadow-xl text-center max-w-4xl mx-auto mb-16">
                        <FaHandshake className="text-6xl text-[#D4AF37] mx-auto mb-6" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 urdu-text">{unityData.embassy.title}</h3>
                        <p className="text-lg leading-relaxed text-gray-700 text-justify urdu-text">{unityData.embassy.desc}</p>
                    </div>

                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-6 urdu-text text-center">وحدت اور ملاقاتوں کی گیلری</h3>
                    <ImageGallery images={galleries.unity} />
                </div>
            </section>

            {/* 🗣️ 4. فارسی زبان کی خدمات (AZFA & Syed Noor) - Special Callout */}
            <section className="py-16 md:py-24 bg-[#fffdf5]" dir="rtl">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 urdu-text mb-4 flex justify-center items-center gap-3">
                            <FaLanguage className="text-[#D4AF37]" /> {persianServicesData.title}
                        </h2>
                        <p className="text-lg md:text-xl text-emerald-700 urdu-text max-w-4xl mx-auto leading-relaxed">{persianServicesData.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Project 1: Syed Noor */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-emerald-700 hover:shadow-2xl transition-all">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                <div className="bg-emerald-100 p-4 rounded-full"><FaFilm className="text-3xl text-emerald-700" /></div>
                                <h3 className="text-2xl font-bold text-[#0b314d] urdu-text">{persianServicesData.projects[0].title}</h3>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8 urdu-text">{persianServicesData.projects[0].desc}</p>
                            <a href={persianServicesData.projects[0].playlistLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-3 rounded-full font-bold hover:bg-[#D4AF37] transition-colors shadow-lg">
                                <FaPlay /> پلے لسٹ دیکھیں
                            </a>
                        </div>

                        {/* Project 2: AZFA */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-[#D4AF37] hover:shadow-2xl transition-all">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                <div className="bg-[#fff7cc] p-4 rounded-full"><FaBookReader className="text-3xl text-[#D4AF37]" /></div>
                                <h3 className="text-2xl font-bold text-[#0b314d] urdu-text">{persianServicesData.projects[1].title}</h3>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8 urdu-text">{persianServicesData.projects[1].desc}</p>

                            <div className="grid grid-cols-2 gap-4">
                                {persianServicesData.projects[1].playlists.map((pl, idx) => (
                                    <a key={idx} href={pl.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-[#0b314d] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#D4AF37] transition-colors shadow-md text-sm md:text-base">
                                        <FaPlay className="text-xs" /> {pl.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🤝 5. انجمن دوستی و فیسٹیولز */}
            <section className="py-16 md:py-24 bg-white border-t border-gray-200" dir="rtl">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Anjuman Section */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0b314d] mb-6 urdu-text flex items-center gap-3">
                                <FaUsers className="text-[#D4AF37]" /> انجمن دوستی پاکستان و ایران
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify mb-6">{anjumanData.intro}</p>
                            <div className="bg-gray-50 p-6 rounded-2xl border-r-4 border-[#0b314d] mb-6">
                                <ul className="space-y-4">
                                    {anjumanData.servicesList.map((item, i) => (
                                        <li key={i} className="text-gray-700"><strong className="text-[#D4AF37]">{item.title}</strong> {item.desc}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify mb-6">{anjumanData.websiteDesc}</p>
                            <a href="https://pakiranfriendship.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0b314d] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#D4AF37] transition-all">پاک ایران ویب سائٹ وزٹ کریں</a>
                        </div>

                        {/* Festivals Section */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0b314d] mb-6 urdu-text flex items-center gap-3">
                                <FaFilm className="text-[#D4AF37]" /> ثقافتی فیسٹیولز اور نمائشیں
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify mb-6">{festivalsData.desc}</p>
                            <div className="space-y-6">
                                {festivalsData.events.map((event, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#D4AF37] hover:shadow-md transition-all">
                                        <h4 className="text-xl font-bold text-[#0b314d] mb-2 urdu-text">{event.title}</h4>
                                        <p className="text-gray-600 text-sm md:text-base text-justify">{event.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-[#0b314d] mb-6 urdu-text text-center">فیسٹیولز اور تقریبات کی گیلری</h3>
                        <ImageGallery images={galleries.festivals} />
                    </div>
                </div>
            </section>

            {/* 🎥 6. ویڈیو گیلری */}
            <section className="bg-gray-100 py-16 md:py-24 border-t border-[#D4AF37]/30">
                <div className="container mx-auto px-4" dir="rtl">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] mb-12 text-center urdu-text">🎥 سفارتی اور ثقافتی ویڈیوز</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {culturalVideos.map((vid, i) => (
                            <VideoCard key={i} url={vid.url} title={vid.title} setActiveVideo={setActiveVideo} isCloudinary={vid.isCloudinary} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔴 ویڈیو ماڈل (Modal) */}
            {activeVideo && (
                <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
                    <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[1001]"><FaTimes /></button>
                    <div className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.6)] border-4 border-[#D4AF37]">
                        {activeVideo.includes('youtu') ? (
                            <iframe
                                className="w-full h-[50vh] md:h-[70vh]"
                                src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1&rel=0`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        ) : (
                            <video className="w-full h-[50vh] md:h-[70vh] bg-black" src={activeVideo} controls autoPlay playsInline></video>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

// 🎨 ہیلپر کمپوننٹس (Gallery & Video)

function ImageGallery({ images }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 aspect-[4/3] bg-black">
                    <img src={img} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            ))}
        </div>
    );
}

function VideoCard({ url, title, setActiveVideo, isCloudinary = false }) {
    const videoId = !isCloudinary ? getYouTubeId(url) : null;
    // کلاؤڈ نری کے لیے ویڈیو کی پہلی جھلک نکالنے کا طریقہ
    const thumbnailUrl = isCloudinary
        ? url.replace('.mp4', '.jpg')
        : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div className="relative group rounded-xl overflow-hidden border-2 border-[#0b314d]/30 hover:border-[#D4AF37] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-black aspect-video" onClick={() => setActiveVideo(url)}>
            <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="bg-[#D4AF37] p-3 md:p-4 rounded-full border-2 border-white shadow-[0_0_15px_rgba(212,175,55,0.8)] transform group-hover:scale-110 transition-transform">
                    <FaPlay className="text-white pl-1 text-xl" />
                </div>
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-center">
                <h4 className="text-white font-bold text-xs md:text-sm urdu-text drop-shadow-md">{title}</h4>
            </div>
        </div>
    );
}