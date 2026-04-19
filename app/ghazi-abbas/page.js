"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ghaziData } from './ghaziData';
import { FaQuran, FaMosque, FaVideo, FaBookOpen, FaArrowLeft, FaArrowRight, FaTimes, FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import urduFonts from '../urduFonts';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GhaziAbbasPage = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [isSticky, setIsSticky] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const navRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      const headerOffset = navRef.current ? navRef.current.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        setIsSticky(window.pageYOffset > navRef.current.offsetTop);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const openVideoPlayer = (video) => {
    setCurrentVideo(video);
    setVideoPlayerOpen(true);
  };

  const closeVideoPlayer = () => {
    setVideoPlayerOpen(false);
    setCurrentVideo(null);
  };

  const images = ghaziData.gallery.map(item => ({
    src: item.src,
    caption: item.caption
  }));

  return (
    <div className={`bg-gradient-to-b from-[#1a0000] to-[#000] text-white ${urduFonts.alvi.className}`}>
      {/* Header */}
      <header className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1716893284/roza-ghazi-abbas-as_a2zweb_online_shia-library_a3a1x0.svg"
          alt="Shrine of Ghazi Abbas (a.s)"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold text-[#D4AF37] leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            {ghaziData.name}
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-gray-200">
            {ghaziData.title}
          </p>
        </div>
      </header>

      {/* Sticky Navigation */}
      <nav ref={navRef} className={`bg-[#1a0000] border-b-2 border-[#D4AF37] transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'}`}>
        <div className="container mx-auto px-4">
          <ul className="flex justify-center items-center space-x-2 md:space-x-6 overflow-x-auto py-3">
            {Object.keys(ghaziData.sections).map((key) => (
              <li key={key}>
                <button
                  onClick={() => handleTabClick(key)}
                  className={`whitespace-nowrap text-lg md:text-xl font-semibold pb-2 border-b-4 transition-colors duration-300 ${activeTab === key ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-white border-transparent hover:text-[#D4AF37] hover:border-[#D4AF37]'}`}
                >
                  {ghaziData[key].title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8">
        {/* Introduction */}
        <section id="introduction" className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] mb-8">{ghaziData.introduction.title}</h2>
          <div className="bg-black/30 p-6 rounded-lg shadow-lg border border-[#D4AF37]/30">
            {ghaziData.introduction.content.map((paragraph, index) => (
              <p key={index} className="text-xl md:text-2xl leading-relaxed text-right mb-6 text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Ziyarat */}
        <section id="ziyarat" className="py-12 bg-black/20 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] mb-8">{ghaziData.ziyarat.title}</h2>
          <div className="bg-black/30 p-6 rounded-lg shadow-lg border border-[#D4AF37]/30">
            <div className="text-center mb-8">
              <Link href="/library/ziarat-ghazi-abbas-alamdar" className="inline-block bg-[#D4AF37] text-black font-bold py-3 px-8 rounded-lg text-xl hover:bg-yellow-300 transition-colors duration-300">
                <FaBookOpen className="inline-block ml-3" />
                خواندن زیارت
              </Link>
            </div>
            <div className="space-y-6 text-right">
              {ghaziData.ziyarat.content.map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-[#D4AF37] mb-2">{item.arabic}</h3>
                  <p className="text-xl text-gray-300">{item.persian}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section id="history" className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] mb-8">{ghaziData.history.title}</h2>
          <div className="bg-black/30 p-6 rounded-lg shadow-lg border border-[#D4AF37]/30">
            {ghaziData.history.content.map((paragraph, index) => (
              <p key={index} className="text-xl md:text-2xl leading-relaxed text-right mb-6 text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Virtues */}
        <section id="virtues" className="py-12 bg-black/20 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] mb-8">{ghaziData.virtues.title}</h2>
          <div className="bg-black/30 p-6 rounded-lg shadow-lg border border-[#D4AF37]/30">
            <ul className="space-y-4 text-right">
              {ghaziData.virtues.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D4AF37] text-2xl ml-4 mt-1">✦</span>
                  <p className="text-xl md:text-2xl text-gray-300 flex-1">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Image Gallery */}
        <section id="gallery" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-center text-[#D4AF37] mb-12">گالری تصاویر</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {ghaziData.gallery.map((item, index) => (
                <div key={index} className="group relative cursor-pointer" onClick={() => openLightbox(index)}>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center p-2">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {lightboxOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            imageCaption={images[photoIndex].caption}
            reactModalStyle={{ overlay: { zIndex: 1050 } }}
          />
        )}

        {/* 6. Video Gallery */}
        <section className="py-16 bg-gradient-to-b from-[#1a0000] to-[#3a0000] text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-center text-[#D4AF37] mb-12 flex items-center justify-center gap-3">
              <FaVideo /> <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">گالری ویدئو</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {ghaziData.ziyaratVideos.map((video, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/60 bg-black hover:scale-105 transition-transform flex flex-col cursor-pointer touch-manipulation group"
                  onClick={() => openVideoPlayer(video)}
                >
                  <div className="relative aspect-video bg-black">
                    <img
                      src={video.url.includes('cloudinary') ? video.url.replace('/video/upload/', '/image/upload/f_auto,q_auto/') + '.jpg' : `https://img.youtube.com/vi/${video.url.split('youtu.be/')[1]?.split('?')[0]}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/640x360/1a0000/D4AF37?text=Video'; }}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaPlay className="text-[#D4AF37] text-6xl" />
                    </div>
                  </div>
                  <div className="p-5 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-xl font-bold text-right text-[#D4AF37] group-hover:text-yellow-300 transition-colors">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {videoPlayerOpen && currentVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[1100]">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl mx-4">
              <button
                onClick={closeVideoPlayer}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-10 bg-[#D4AF37] text-black rounded-full p-2 hover:bg-yellow-300 transition-transform hover:scale-110"
                aria-label="Close video player"
              >
                <FaTimes size={24} />
              </button>
              {currentVideo.url.includes('cloudinary') ? (
                <video controls autoPlay className="w-full h-full rounded-lg" src={currentVideo.url}>
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${currentVideo.url.split('youtu.be/')[1]?.split('?')[0]}?autoplay=1&rel=0`}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GhaziAbbasPage;