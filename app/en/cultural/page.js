"use client";
import { useState } from 'react';
import {
    FaGlobe, FaHandshake, FaMosque, FaLanguage, FaFilm,
    FaPlay, FaTimes, FaQuoteRight, FaMedal, FaUsers, FaBookReader, FaArrowRight, FaArrowLeft
} from "react-icons/fa";
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';

// 🔴 Importing all data from data file
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

    // 🟡 State for Gallery (Lightbox)
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentGallery, setCurrentGallery] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (images, index) => {
        setCurrentGallery(images);
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans overflow-x-hidden">
            <Navbar />
            <HeroSlider />

            {/* 🌟 1. Soulful Header */}
            <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-16 md:py-24 text-center relative border-b-8 border-[#D4AF37] shadow-2xl">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-6 tracking-wide leading-tight">
                        {pageIntro.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-[#fff7cc] font-light tracking-widest mb-10">
                        {pageIntro.subtitle}
                    </h2>

                    <div className="max-w-4xl mx-auto bg-[#0b314d]/60 p-8 md:p-12 rounded-[2rem] border-2 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.2)] backdrop-blur-md relative mt-12">
                        <FaQuoteRight className="absolute -top-6 -right-6 text-[#D4AF37] text-5xl md:text-6xl opacity-80" />
                        <p className="text-lg md:text-2xl leading-loose text-justify text-[#fffdf5]">
                            {pageIntro.quote}
                        </p>
                    </div>
                </div>
            </section>

            {/* 🏛️ 2. Cultural and Diplomatic Services (Diplomacy) */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] mb-6 flex justify-center items-center gap-4">
                        <FaGlobe className="text-[#D4AF37]" /> Consulate General and Diplomatic Services
                    </h2>
                    <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {diplomaticServicesList.map((service, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-t-8 border-[#0b314d] hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 group">
                            <h3 className="text-2xl font-bold text-[#0b314d] group-hover:text-[#D4AF37] mb-5 transition-colors border-b pb-3 border-gray-100">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">{service.text}</p>
                        </div>
                    ))}
                </div>

                <h3 className="text-3xl font-bold text-[#0b314d] mb-8 text-center border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto w-full text-center">Diplomatic Gallery</h3>
                <ImageGallery images={galleries.diplomacy} openLightbox={openLightbox} />
            </section>

            {/* 🕊️ 3. Unity of Ummah (Unity) - Special Dark Section */}
            <section className="bg-[#0a1f30] text-white py-16 md:py-24 border-y-8 border-[#D4AF37] relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-6 flex justify-center items-center gap-4 drop-shadow-lg">
                            <FaMosque className="text-white" /> Historical Mission of Unity of Ummah
                        </h2>
                    </div>

                    <p className="text-xl md:text-2xl text-[#e2e8f0] max-w-4xl mx-auto leading-relaxed mb-12 text-center">25-year journey of inter-sectarian and inter-religious harmony and connecting hearts</p>

                    {/* Efforts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {unityData.efforts.map((effort, i) => (
                            <div key={i} className="bg-[#112a40] p-8 md:p-10 rounded-3xl border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-lg transition-colors">
                                <h4 className="text-[#D4AF37] font-bold text-2xl mb-4 border-b border-[#D4AF37]/20 pb-3">{effort.title}</h4>
                                <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-justify">{effort.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Chadar Poshi Big Box */}
                    <div className="bg-gradient-to-br from-emerald-900 to-[#0b314d] p-8 md:p-14 rounded-[3rem] border-4 border-[#D4AF37] shadow-[0_15px_40px_rgba(0,0,0,0.5)] mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 flex items-center gap-4 border-b border-[#D4AF37]/30 pb-4">
                            <FaMedal className="text-4xl" /> {unityData.chadarPoshi.title}
                        </h3>
                        <p className="text-lg md:text-xl leading-relaxed mb-10 text-justify text-white">
                            {unityData.chadarPoshi.desc}
                        </p>

                        <div className="bg-[#0a1f30]/60 p-8 md:p-10 rounded-3xl border border-emerald-700/50">
                            <h4 className="text-2xl font-bold text-[#D4AF37] mb-6 border-b border-[#D4AF37]/30 pb-3 inline-block">Eminent scholars and respected personalities participating in the ceremony:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {unityData.chadarPoshi.scholars.map((scholar, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="text-[#D4AF37] mt-1 text-lg">✨</span>
                                        <p className="text-lg md:text-xl text-[#fff7cc]">{scholar}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Embassy & Ahnaf */}
                    <div className="bg-white text-[#0b314d] p-8 md:p-14 rounded-[3rem] shadow-[0_10px_30px_rgba(212,175,55,0.3)] text-center max-w-4xl mx-auto mb-16 border-b-8 border-[#D4AF37]">
                        <FaHandshake className="text-6xl md:text-7xl text-[#D4AF37] mx-auto mb-8" />
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">{unityData.embassy.title}</h3>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-justify">{unityData.embassy.desc}</p>
                    </div>

                    <h3 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto w-full">Unity and Meetings Gallery</h3>
                    <ImageGallery images={galleries.unity} openLightbox={openLightbox} />
                </div>
            </section>

            {/* 🗣️ 4. Persian Language Services (AZFA & Syed Noor) */}
            <section className="py-16 md:py-24 bg-[#fffdf5] border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-6 flex justify-center items-center gap-4">
                            <FaLanguage className="text-[#D4AF37]" /> {persianServicesData.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-emerald-700 max-w-5xl mx-auto leading-relaxed">{persianServicesData.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Project 1: Syed Noor */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-emerald-700 hover:shadow-2xl transition-all">
                            <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-5">
                                <div className="bg-emerald-100 p-5 rounded-full"><FaFilm className="text-4xl text-emerald-700" /></div>
                                <h3 className="text-3xl font-bold text-[#0b314d]">{persianServicesData.projects[0].title}</h3>
                            </div>
                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-10">{persianServicesData.projects[0].desc}</p>
                            <a href={persianServicesData.projects[0].playlistLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-700 text-white px-10 py-4 rounded-full font-bold hover:bg-[#D4AF37] transition-colors shadow-lg text-lg">
                                <FaPlay /> View Playlist
                            </a>
                        </div>

                        {/* Project 2: AZFA */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#D4AF37] hover:shadow-2xl transition-all">
                            <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-5">
                                <div className="bg-[#fff7cc] p-5 rounded-full"><FaBookReader className="text-4xl text-[#D4AF37]" /></div>
                                <h3 className="text-3xl font-bold text-[#0b314d]">{persianServicesData.projects[1].title}</h3>
                            </div>
                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-10">{persianServicesData.projects[1].desc}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {persianServicesData.projects[1].playlists.map((pl, idx) => (
                                    <a key={idx} href={pl.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-3 bg-[#0b314d] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#D4AF37] hover:text-[#0b314d] transition-colors shadow-md text-lg">
                                        <FaPlay className="text-sm" /> {pl.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🤝 5. Friendship Association and Festivals */}
            <section className="py-16 md:py-24 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

                        {/* Anjuman Section */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-lg border-r-8 border-[#0b314d]">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-8 flex items-center gap-4">
                                <FaUsers className="text-[#D4AF37]" /> Pakistan-Iran Friendship Association
                            </h2>
                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-8">{anjumanData.intro}</p>

                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 mb-8">
                                <ul className="space-y-5 text-lg md:text-xl">
                                    {anjumanData.servicesList.map((item, i) => (
                                        <li key={i} className="text-gray-800"><strong className="text-[#D4AF37] block mb-1 text-xl">{item.title}</strong> {item.desc}</li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-8">{anjumanData.websiteDesc}</p>
                            <a href="https://pakiiranassociation.wixsite.com/pira" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0b314d] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#D4AF37] hover:text-[#0b314d] transition-all text-lg">
                                Visit Pak-Iran Website
                            </a>
                        </div>

                        {/* Festivals Section */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-lg border-l-8 border-[#D4AF37]">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-8 flex items-center gap-4">
                                <FaFilm className="text-[#D4AF37]" /> Cultural Festivals and Exhibitions
                            </h2>
                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-8">{festivalsData.desc}</p>
                            <div className="space-y-6">
                                {festivalsData.events.map((event, idx) => (
                                    <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition-all">
                                        <h4 className="text-2xl font-bold text-[#0b314d] mb-3 border-b pb-2">{event.title}</h4>
                                        <p className="text-gray-700 text-lg leading-relaxed text-justify">{event.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="mt-16">
                        <h3 className="text-3xl font-bold text-[#0b314d] mb-8 text-center border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto w-full text-center">Festivals and Events Gallery</h3>
                        <ImageGallery images={galleries.festivals} openLightbox={openLightbox} />
                    </div>
                </div>
            </section>

            {/* 🎥 6. Video Gallery */}
            <section className="bg-gray-100 py-16 md:py-24 border-t-4 border-[#D4AF37]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] mb-12 text-center drop-shadow-sm">🎥 Diplomatic and Cultural Videos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {culturalVideos.map((vid, i) => (
                            <VideoCard key={i} url={vid.url} title={vid.title} setActiveVideo={setActiveVideo} isCloudinary={vid.isCloudinary} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔴 Video Modal */}
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

            {/* 🟡 Image Gallery Modal (Golden Frame Lightbox) */}
            {lightboxOpen && currentGallery.length > 0 && (
                <div className="fixed inset-0 z-[2000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-lg">
                    <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[2001] drop-shadow-md">
                        <FaTimes />
                    </button>

                    <button onClick={prevImage} className="absolute left-6 text-[#D4AF37] text-5xl hover:text-white transition-all z-[2001] drop-shadow-md">
                        <FaArrowLeft />
                    </button>
                    <button onClick={nextImage} className="absolute right-6 text-[#D4AF37] text-5xl hover:text-white transition-all z-[2001] drop-shadow-md mt-24 md:mt-0">
                        <FaArrowRight />
                    </button>

                    <div className="relative border-[10px] border-[#D4AF37] p-2 bg-[#1a1a1a] rounded-xl shadow-[0_0_80px_rgba(212,175,55,0.7)] max-w-5xl w-full flex justify-center items-center">
                        <img src={currentGallery[currentImageIndex]} alt="Enlarged Gallery Image" className="max-w-full max-h-[80vh] object-contain rounded" />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

// 🎨 Helper Components (Gallery & Video)

function ImageGallery({ images, openLightbox }) {
    if (!images || images.length === 0) return null;
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    onClick={() => openLightbox(images, idx)}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden border-4 border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-500 aspect-[4/3] bg-black"
                >
                    <img src={img} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-transform duration-700 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white text-lg font-bold drop-shadow-lg">Click to enlarge</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

function VideoCard({ url, title, setActiveVideo, isCloudinary = false }) {
    const videoId = !isCloudinary ? getYouTubeId(url) : null;
    // Method to extract first glimpse of video for Cloudinary
    const thumbnailUrl = isCloudinary
        ? url.replace('.mp4', '.jpg')
        : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div className="relative group rounded-2xl overflow-hidden border-4 border-[#0b314d]/30 hover:border-[#D4AF37] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-black aspect-video" onClick={() => setActiveVideo(url)}>
            <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" />

            {/* 🔴 Play button made smaller and placed in bottom-left corner so thumbnail is visible */}
            <div className="absolute bottom-4 left-4 z-10">
                <div className="bg-[#D4AF37] p-2 md:p-3 rounded-full border-2 border-white shadow-[0_0_15px_rgba(212,175,55,0.9)] transform group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                    <FaPlay className="text-white text-sm md:text-base pl-1" />
                </div>
            </div>

            <div className="absolute top-0 w-full bg-gradient-to-b from-black/90 to-transparent p-4 text-left">
                <h4 className="text-white font-bold text-sm md:text-lg drop-shadow-md">{title}</h4>
            </div>
        </div>
    );
}