"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaLanguage, FaFilm, FaPlay, FaBookReader, FaUsers, FaTimes, FaArrowRight, FaArrowLeft, FaBookOpen, FaHeadphones } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';

import {
    pageIntro, diplomaticServicesList, anjumanData, pakIranWebsiteData,
    safarNamaData, persianServicesData, tipsData, videoGallery,
    mainServicesGallery, anjumanGallery, travelGallery, firstFestivalGallery, secondFestivalGallery, surSangeetGallery, ewanIqbalGallery, globalWomenMediaData, globalWomenGallery, tourismExhibitionGallery, bookFairGallery
} from './data';

function TravelCard({ title, desc, list }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md border-r-4 border-[#D4AF37] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4">{title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">{desc}</p>
            <ul className="space-y-3">
                {list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-[#D4AF37] font-bold">•</span>
                        <p className="text-lg text-justify">{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function VideoCard({ url, title, setActiveVideo }) {
    const thumbnail = getVideoThumbnail(url);
    return (
        <div
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group transform hover:scale-105 transition-transform duration-300"
            onClick={() => setActiveVideo({ url, title })}
        >
            {thumbnail && (
                <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaPlay className="text-[#D4AF37] text-4xl" />
            </div>
            <div className="p-3 bg-blue-900">
                <p className="text-white text-sm font-semibold line-clamp-2">{title}</p>
            </div>
        </div>
    );
}

function ImageGallery({ images, openLightbox }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    onClick={() => openLightbox(images, index)}
                >
                    <img
                        src={image}
                        alt={`Gallery item ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    );
}

function Lightbox({ isOpen, images, currentIndex, onClose, onNext, onPrev }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white bg-red-600 hover:bg-red-700 rounded-full p-2 z-60"
            >
                <FaTimes size={24} />
            </button>

            <button
                onClick={onPrev}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-900 rounded-full p-3 transition"
            >
                <FaArrowLeft size={24} />
            </button>

            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="max-w-4xl max-h-[80vh] object-contain rounded-lg"
            />

            <button
                onClick={onNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-900 rounded-full p-3 transition"
            >
                <FaArrowRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold bg-black/70 px-4 py-2 rounded">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}

const getYouTubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const getVideoThumbnail = (url) => {
    if (!url) return null;
    const ytId = getYouTubeId(url);
    if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;

    try {
        const cloudinaryMatch = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+)\/video\/upload\/(.+?)\.(mp4|mov|webm)(\?.*)?$/i);
        if (cloudinaryMatch) {
            const base = cloudinaryMatch[1];
            const publicPath = cloudinaryMatch[2];
            return `${base}/video/upload/so_0,w_640,h_360,c_fill/${publicPath}.jpg`;
        }
    } catch (e) {
        return null;
    }

    return null;
};

export default function DiplomaticServicesEN() {
    const [activeVideo, setActiveVideo] = useState(null);
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
        <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans" dir="ltr">
            <Navbar />
            <HeroSlider />

            {/* Main Heading */}
            <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-12 md:py-16 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-2xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-4 tracking-wide leading-tight">
                        {pageIntro.title}
                    </h1>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
                </div>
            </section>

            {/* Section 1: Basic Introduction */}
            <section className="container mx-auto px-4 py-12 md:py-20">
                <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#D4AF37] p-8 md:p-12 mb-12 relative overflow-hidden">
                    <p className="text-lg md:text-xl text-[#0b314d] leading-loose text-justify drop-shadow-sm">
                        {pageIntro.description}
                    </p>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto w-full">My Notable Cultural and Diplomatic Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {diplomaticServicesList.map((service, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg md:text-2xl font-bold text-[#D4AF37] mb-4 text-center leading-tight">
                                <span className="w-3 h-3 rounded-full bg-[#0b314d] inline-block mr-2"></span> {service.title}
                            </h3>
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify">{service.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-14">
                    <h3 className="text-2xl font-bold text-[#0b314d] mb-8 text-center">Main Services Gallery</h3>
                    <ImageGallery images={mainServicesGallery} openLightbox={openLightbox} />
                </div>
            </section>

            {/* Section 2: Anjuman Dosti and Website */}
            <section className="bg-[#0b314d] text-white py-16 md:py-20 border-y-4 border-[#D4AF37] relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <FaUsers className="text-6xl text-[#D4AF37] mx-auto mb-4" />
                        <h2 className="text-2xl md:text-5xl font-bold text-[#D4AF37] mb-4 drop-shadow-md">Pakistan-Iran Friendship Society</h2>
                        <p className="text-base md:text-2xl text-[#fff7cc]">Historic Honor as Founder and Chairman</p>
                    </div>

                    <div className="bg-white/10 p-8 md:p-12 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm mb-10">
                        <p className="text-base md:text-lg leading-relaxed text-justify mb-8">{anjumanData.intro}</p>

                        <h3 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-6">Comprehensive Range of Services:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-[#fff7cc] mb-10">
                            {anjumanData.servicesList.map((item, i) => (
                                <li key={i} className="bg-black/30 p-6 rounded-xl border border-white/10"><strong className="text-[#D4AF37] block mb-2 text-lg">{item.title}</strong> {item.desc}</li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Dream Realization and Pakistan-Iran Website:</h3>
                        <p className="text-base md:text-lg leading-relaxed text-justify mb-8">{anjumanData.conclusion}</p>

                        <div className="bg-white text-[#0b314d] p-8 md:p-10 rounded-xl shadow-lg">
                            <ul className="space-y-5 text-lg">
                                {pakIranWebsiteData.map((item, i) => (
                                    <li key={i}><strong className="text-[#0b314d] font-bold text-lg">{item.title}</strong> <span className="text-gray-700">{item.desc}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center">Partnership Gallery</h3>
                        <ImageGallery images={anjumanGallery} openLightbox={openLightbox} />
                    </div>

                    {/* Website Button */}
                    <div className="text-center mt-12">
                        <a
                            href="https://pakiiranassociation.wixsite.com/pira"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#D4AF37] text-[#0b314d] font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#0b314d] hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] text-lg border-2 border-transparent hover:border-[#D4AF37]"
                        >
                            Visit Society Website
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 3: Persian Language Services */}
            <section className="py-16 md:py-24 bg-[#fffdf5] border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-6 flex justify-center items-center gap-4">
                            <FaLanguage className="text-[#D4AF37]" /> {persianServicesData.title}
                        </h2>
                        <p className="text-lg md:text-xl text-emerald-700 max-w-5xl mx-auto leading-relaxed">{persianServicesData.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-emerald-700 hover:shadow-2xl transition-all">
                            <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-5">
                                <div className="bg-emerald-100 p-5 rounded-full"><FaFilm className="text-4xl text-emerald-700" /></div>
                                <h3 className="text-3xl font-bold text-[#0b314d]">{persianServicesData.projects[0].title}</h3>
                            </div>
                            <p className="text-gray-800 text-lg leading-relaxed text-justify mb-10">{persianServicesData.projects[0].desc}</p>
                            <a href={persianServicesData.projects[0].playlistLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-700 text-white px-10 py-4 rounded-full font-bold hover:bg-[#D4AF37] hover:text-emerald-700 transition-colors shadow-lg text-lg">
                                <FaPlay /> Watch Playlist
                            </a>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#D4AF37] hover:shadow-2xl transition-all">
                            <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-5">
                                <div className="bg-[#fff7cc] p-5 rounded-full"><FaBookReader className="text-4xl text-[#D4AF37]" /></div>
                                <h3 className="text-3xl font-bold text-[#0b314d]">{persianServicesData.projects[1].title}</h3>
                            </div>
                            <p className="text-gray-800 text-lg leading-relaxed text-justify mb-10">{persianServicesData.projects[1].desc}</p>

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

            {/* Section 4: Tourism and Cultural Exchange */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-200 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-5xl font-bold text-[#0f4c75] mb-10 text-center drop-shadow-sm">🌍 Tourism & Cultural Exchange: New Chapter in Pakistan-Iran Relations</h2>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-l-8 border-[#D4AF37] mb-14">
                        <p className="text-lg leading-relaxed text-gray-800 text-justify mb-6">
                            "Travel is the means of victory, and when the purpose of travel is pilgrimage combined with bringing the cultures of two sister nations closer, its importance increases even more."
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800 text-justify mb-6">
                            "Feeling this gap, for the first time during my diplomatic and cultural services, I introduced the series 'Pakistan-Iran Cultural Tourism'. The main objective of this initiative was to enable pilgrims to visit not just specific cities, but also historical sites, scenic views, gardens, and ancient civilizations of Iran."
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800 text-justify">
                            "Alhamdulillah, this humble effort was very well received at both public and diplomatic levels. The 'First Pilgrimage and Tourism Travelogue of Iran' presented below is a glimpse into this historic series."
                        </p>
                    </div>

                    <h3 className="text-xl md:text-3xl font-bold text-[#D4AF37] mb-6 text-center bg-[#0b314d] inline-block px-6 md:px-10 py-3 rounded-full mx-auto shadow-md">Iran: First Pilgrimage, Tourism and Information Journey</h3>
                    <p className="text-center text-gray-700 mb-10 text-xl font-bold">Author: Shabir Ahmad Shagri (Chairman, Pakistan-Iran Friendship Society)</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
                        {safarNamaData.map((item, i) => (
                            <div key={i} className={i === 4 ? "lg:col-span-2" : ""}>
                                <TravelCard title={item.title} desc={item.desc} list={item.list} />
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow-xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center">Travel Diary Photo Gallery</h2>
                        <ImageGallery images={travelGallery} openLightbox={openLightbox} />
                    </div>

                    <div className="bg-[#0b314d] text-white p-10 rounded-3xl shadow-2xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center">Important Travel Tips for Pilgrims and Tourists</h2>
                        <ul className="space-y-4 text-lg">
                            {tipsData.map((tip, i) => (
                                <li key={i} className="bg-white/10 p-5 rounded-2xl border border-[#D4AF37]/30">
                                    <strong className="text-[#D4AF37] block mb-2 text-xl">{tip.title}</strong>
                                    <span>{tip.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Video Gallery */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center">Travel Videos and Conversations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videoGallery.map((vid, i) => (
                                <VideoCard key={i} url={vid.url} title={vid.title} setActiveVideo={setActiveVideo} />
                            ))}
                        </div>
                    </div>

                    {/* Travelogue Book Section */}
                    <div className="bg-[#0b314d] rounded-3xl shadow-2xl overflow-hidden mb-16 border-2 border-[#D4AF37] hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-shadow duration-300 relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>
                        <div className="flex flex-col lg:flex-row relative z-10">
                            <div className="lg:w-1/3 p-8 flex justify-center items-center relative border-b lg:border-b-0 lg:border-r border-[#D4AF37]/30 bg-black/20">
                                <img
                                    src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772651728/eb2e1ccd-e669-4453-8ca7-10f38cf13a50.png"
                                    alt="Iran Travelogue"
                                    className="w-48 md:w-full max-w-[220px] rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.6)] border border-[#D4AF37]/50"
                                />
                            </div>
                            <div className="lg:w-2/3 p-8 md:p-12 text-left">
                                <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-5">
                                    Iran Travelogue: Journey to the Land of Love
                                </h2>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                                    Hajji Shabir Ahmad Shagri's book is not merely a travelogue, but a comprehensive review of Iran's historical, religious and cultural sites. Along with pilgrimages, this travelogue also contains detailed descriptions of Iran's tourist attractions. It is a beautiful illustrated travelogue written during the first pilgrimage and tourism journey of Iran.
                                    <br /><br />
                                    <strong className="text-[#D4AF37] font-bold">Author:</strong> Hajji Shabir Ahmad Shagri
                                </p>

                                {/* Button Panel */}
                                <div className="flex flex-wrap gap-3 justify-start">

                                    {/* Library Link */}
                                    <Link
                                        href="/library#book-safarnama"
                                        className="px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 bg-[#D4AF37] text-[#0b314d] hover:bg-white transition-all shadow-md"
                                    >
                                        <FaBookOpen /> Read in Library
                                    </Link>

                                    {/* Video Podcast (Currently Disabled) */}
                                    <button
                                        disabled
                                        className="px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 bg-[#0f4c75] opacity-50 text-white cursor-not-allowed transition-all shadow-md"
                                    >
                                        <FaFilm /> Video (Coming Soon)
                                    </button>

                                    {/* Audio Podcast (Opens in your existing video modal) */}
                                    <button
                                        onClick={() => setActiveVideo({ url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1772594033/Ziarati-syahati-safarnama-audeo-podcast_qqjiwy.mp3', title: 'Audio Podcast' })}
                                        className="px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all"
                                    >
                                        <FaHeadphones /> Audio Podcast
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5.5: Cultural Festivals */}
            <section className="bg-white py-16 md:py-24 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-5xl font-bold text-[#0b314d] mb-12 text-center drop-shadow-sm">🎭 Cultural Services and International Festivals</h2>

                    <div className="bg-blue-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 mb-16">
                        <p className="text-xl md:text-2xl text-[#0f4c75] font-bold mb-8 text-justify leading-relaxed">
                            "During my diplomatic and cultural responsibilities at Khana-e-Farhangi Iran (Lahore), I had the wonderful opportunity to bring the art, literature and culture of both sister nations closer to each other."
                        </p>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-2xl font-bold text-[#D4AF37] mb-3">International Film and Music Festivals:</h4>
                                <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify">Among these cultural programs, the organization of international film festivals and music festivals is particularly noteworthy. For participation in these splendid events, renowned filmmakers, renowned producers and famous film stars from Iran and Pakistan visited Lahore.</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-[#D4AF37] mb-3">Book Fairs and Academic Exhibitions:</h4>
                                <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify">In addition to the fine arts, magnificent international book fairs and various cultural exhibitions were regularly organized to promote learning and literature.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-white bg-[#0b314d] inline-block px-10 py-4 rounded-t-3xl mb-0">🎬 Two Grand Iranian Film Festivals in Lahore</h3>
                    <div className="bg-[#0b314d] p-8 md:p-12 rounded-b-3xl rounded-tl-3xl shadow-2xl mb-16 text-white border-b-8 border-[#D4AF37]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                            <div className="bg-white/10 p-8 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm">
                                <h4 className="text-[#D4AF37] font-bold text-2xl mb-4 border-b border-[#D4AF37]/30 pb-3">First International Film Festival and Howza-e-Honari</h4>
                                <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">The first grand film festival was organized jointly by Khana-e-Farhangi Iran and producer 'Mubashir Luqman Productions' at 'Royal Palm' in Lahore.</p>
                                <ul className="list-disc list-inside text-lg space-y-2 text-[#fff7cc]">
                                    <li>Week-long exhibition</li>
                                    <li>International delegations participation</li>
                                    <li>Public reception and free entry</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-8 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm">
                                <h4 className="text-[#D4AF37] font-bold text-2xl mb-4 border-b border-[#D4AF37]/30 pb-3">Second International Film Festival</h4>
                                <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">Following the tremendous success of the first festival, a second film festival was organized with the same grandeur. All films were presented with English subtitles for the convenience of Pakistani audiences.</p>
                                <ul className="list-disc list-inside text-lg space-y-2 text-[#fff7cc]">
                                    <li>English subtitles provided</li>
                                    <li>Unprecedented public participation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h4 className="text-3xl font-bold text-[#0b314d] text-center mb-6">First Film Festival Gallery</h4>
                    <ImageGallery images={firstFestivalGallery} openLightbox={openLightbox} />

                    <h4 className="text-3xl font-bold text-[#0b314d] text-center mt-14 mb-6">Second Film Festival Gallery</h4>
                    <ImageGallery images={secondFestivalGallery} openLightbox={openLightbox} />
                </div>
            </section>

            {/* Section 5.6: Sur Sangeet */}
            <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-5xl font-bold text-[#0b314d] mb-10 text-center drop-shadow-sm">🎶 Pakistan-Iran Sur Sangeet and International Music Festivals</h2>

                    <div className="bg-blue-50 p-8 md:p-12 rounded-3xl shadow-lg border-l-8 border-[#D4AF37] mb-14">
                        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-justify">
                            An extremely important chapter of my cultural diplomacy is bringing the peoples of both nations closer through art and music. In this series, a memorable opportunity was the 'Pakistan-Iran Sur Sangeet' program.
                        </p>
                        <h4 className="text-2xl font-bold text-[#D4AF37] mb-4">Arrival of Iranian 'Kook Band':</h4>
                        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-justify">
                            I invited Iran's world-renowned classical music group "Kook Band" in collaboration with Khana-e-Farhangi Iran, Walled City Authority and Al-Hamra.
                        </p>

                        <h4 className="text-2xl font-bold text-[#D4AF37] mb-4">Performances at Historic Venues:</h4>
                        <ul className="list-disc list-inside text-gray-800 text-lg md:text-xl space-y-4 mb-6 leading-relaxed">
                            <li><strong className="text-[#0b314d] text-xl">Shahi Hamam (Delhi Gate):</strong> A mesmerizing evening of Iranian classical music, where renowned qawwal Shir Miandad also demonstrated his art.</li>
                            <li><strong className="text-[#0b314d] text-xl">Al-Hamra Arts Council:</strong> Joint performance of Kook Band with Pakistani artists.</li>
                        </ul>
                    </div>

                    <ImageGallery images={surSangeetGallery} openLightbox={openLightbox} />
                </div>
            </section>

            {/* Section 5.7: Ewan Iqbal */}
            <section className="bg-gray-100 py-16 md:py-24 border-t-2 border-[#D4AF37]/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-5xl font-bold text-[#0b314d] mb-12 text-center drop-shadow-sm">🏛️ Ewan Iqbal Historical Exhibition and Media Coverage</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#0b314d] hover:shadow-2xl transition-all">
                            <h4 className="text-2xl font-bold text-[#D4AF37] mb-6 border-b pb-3">Media Recognition:</h4>
                            <ul className="list-disc list-inside text-gray-800 text-lg md:text-xl space-y-4 leading-relaxed">
                                <li><strong className="text-[#0b314d] text-xl">Newspaper 'Aflak':</strong> Excellent coverage of the cultural and artistic exhibition.</li>
                                <li><strong className="text-[#0b314d] text-xl">Newspaper 'Pakistan':</strong> My special article "Fruits of the Islamic Revolution of Iran" was published.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#D4AF37] hover:shadow-2xl transition-all">
                            <h4 className="text-2xl font-bold text-[#0b314d] mb-6 border-b pb-3">Global Patronage of Art and Craft:</h4>
                            <p className="text-gray-800 text-lg md:text-xl text-justify leading-relaxed">Supervision of exhibitions from Iran featuring masters of Marquetry (Khatam), Engraving (Qalamzani) and traditional garments by renowned experts from Iran.</p>
                        </div>
                    </div>

                    <ImageGallery images={ewanIqbalGallery} openLightbox={openLightbox} />
                </div>
            </section>

            {/* Section 5: Event Galleries */}
            <section className="container mx-auto px-4 py-16 md:py-20">
                <div className="space-y-16">
                    {/* Global Women Media */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-6 text-center">Global Women in Media</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {globalWomenMediaData.map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF37]">
                                    <h4 className="text-lg font-bold text-[#D4AF37] mb-2">{item.title}</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <ImageGallery images={globalWomenGallery} openLightbox={openLightbox} />
                    </div>

                    {/* Tourism Exhibition */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-8 text-center">Tourism Exhibition</h3>
                        <ImageGallery images={tourismExhibitionGallery} openLightbox={openLightbox} />
                    </div>

                    {/* Book Fair */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-8 text-center">International Book Fair</h3>
                        <ImageGallery images={bookFairGallery} openLightbox={openLightbox} />
                    </div>
                </div>
            </section>

            {/* Video Player Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full p-2"
                    >
                        <FaTimes size={28} />
                    </button>

                    <div className="w-full max-w-4xl">
                        {getYouTubeId(activeVideo.url) ? (
                            <iframe
                                width="100%"
                                height="500"
                                src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.url)}`}
                                title={activeVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : activeVideo.url.includes('.mp3') ? (
                            <audio width="100%" controls className="w-full">
                                <source src={activeVideo.url} type="audio/mpeg" />
                                Your browser does not support the audio tag.
                            </audio>
                        ) : (
                            <video width="100%" height="500" controls>
                                <source src={activeVideo.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            )}

            <Lightbox
                isOpen={lightboxOpen}
                images={currentGallery}
                currentIndex={currentImageIndex}
                onClose={() => setLightboxOpen(false)}
                onNext={nextImage}
                onPrev={prevImage}
            />

            <Footer />
        </div>
    );
}
