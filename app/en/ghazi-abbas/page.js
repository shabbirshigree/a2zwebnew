"use client";
import React, { useState } from 'react';
import { FaAward, FaVideo, FaBullhorn, FaArrowLeft, FaArrowRight, FaTimes, FaNewspaper, FaImages, FaQuoteRight, FaHome, FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import { Navbar } from '../../components/Header';
import Footer from '../../components/Footer';
import { ghaziData } from './ghaziData';

export default function SadayEGhaziPage() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeMediaList, setActiveMediaList] = useState([]);

  // Open the lightbox (mobile friendly)
  const openLightbox = (index, list) => {
    setActiveMediaList(list);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setCurrentIndex(null);

  const nextMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % activeMediaList.length);
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + activeMediaList.length) % activeMediaList.length);
  };

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden" dir="ltr">
      <style>{`
        /* Fonts import */
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap');
        
        /* Headings font locked */
        .font-heading {
          font-family: 'Amiri', serif !important;
        }
        
        /* Text alignment and size (customizable) */
        .text-body {
          font-family: 'Noto Naskh Arabic', 'Amiri', sans-serif;
          font-size: 1.15rem;
          line-height: 2.2;
          font-weight: 700;
          text-align: justify;
          text-justify: inter-word;
        }
        
        @media (min-width: 768px) {
          .text-body { font-size: 1.3rem; }
        }

        /* Ripple animation */
        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7), 0 0 0 0 rgba(212, 175, 55, 0.4); }
          100% { box-shadow: 0 0 0 20px rgba(212, 175, 55, 0), 0 0 0 40px rgba(212, 175, 55, 0); }
        }
        .animate-ripple { 
          animation: ripple 2.5s infinite linear; 
          border-radius: 50%; 
        }

        .hero-gradient { background: linear-gradient(135deg, #4a0000 0%, #7a0000 100%); }
        .gold-border { border-color: #D4AF37; }
      `}</style>

      <Navbar />

      {/* 1. Hero section */}
      <section className="relative h-[380px] md:h-[420px] hero-gradient flex items-center justify-center text-white pb-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] opacity-20"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto -mt-4">

          <div className="h-28 w-28 md:h-36 md:w-36 mx-auto rounded-full border-4 gold-border bg-white animate-ripple mb-8 relative">
            <img src={ghaziData.intro.profileGif} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#D4AF37] drop-shadow-lg mb-4">Sada-e-Ghazi Award</h1>

          <p className="text-sm sm:text-base md:text-xl lg:text-2xl opacity-95 font-bold leading-normal md:leading-relaxed px-2 lg:whitespace-nowrap">
            Haji Shabbir Ahmed Shigri — honored guardian and servant of the shrine of Hazrat Ghazi Abbas (AS).
          </p>
        </div>
      </section>

      {/* 2. Welcome note */}
      <section className="container mx-auto px-4 -mt-10 relative z-20 pb-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-12 border-t-8 gold-border">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-[#8b0000] mb-8 text-center md:text-right">
            <FaAward className="text-5xl md:text-6xl text-[#D4AF37] shrink-0" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2">{ghaziData.intro.welcome}</h2>
          </div>
          <div className="text-body text-gray-800">
            {ghaziData.intro.text}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            <p className="text-xl md:text-2xl font-bold text-[#8b0000]">{ghaziData.intro.author}</p>
          </div>
        </div>
      </section>

      {/* 3. Sada-e-Ghazi award video */}
      <section className="py-16 bg-[#3a0000] text-white relative">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-center text-[#D4AF37] mb-12 flex items-center justify-center gap-4">
            <FaVideo /> Sada-e-Ghazi Award
          </h3>

          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-8 bg-black cursor-pointer group relative touch-manipulation"
              onClick={() => openLightbox(0, [ghaziData.award.video])}
            >
              <video src={ghaziData.award.video} className="w-full aspect-video pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                <FaPlay className="text-6xl text-[#D4AF37] opacity-80" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#D4AF37]/50 relative">
              <FaQuoteRight className="absolute -right-3 -top-5 text-[#D4AF37] opacity-50 text-5xl md:text-6xl" />
              <p className="text-body text-gray-100 leading-relaxed">
                {ghaziData.award.videoText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. News and video section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="bg-[#8b0000] text-white px-5 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2 shadow-md">
                <FaBullhorn /> Special news
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#4a0000] leading-normal">
                {ghaziData.news.headline}
              </h3>
              <p className="text-body text-gray-700">{ghaziData.news.paragraph1}</p>
              <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-800 my-6">
                <p className="text-body text-gray-800">{ghaziData.news.paragraph2}</p>
              </div>
            </div>
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl border-4 gold-border bg-black cursor-pointer group relative touch-manipulation"
              onClick={() => openLightbox(0, [ghaziData.news.video])}
            >
              <video src={ghaziData.news.video} className="w-full aspect-video pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                <FaPlay className="text-6xl text-[#D4AF37] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Award Images */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-[#4a0000] text-center mb-10 flex items-center justify-center gap-3">
            <FaImages className="text-[#D4AF37]" /> Award Images
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ghaziData.award.images.map((img, i) => (
              <div 
                key={i} 
                className="h-48 md:h-64 overflow-hidden rounded-xl shadow-lg border border-gray-300 hover:scale-105 transition-transform cursor-pointer touch-manipulation"
                onClick={() => openLightbox(i, ghaziData.award.images)}
              >
                <img src={img} className="w-full h-full object-cover" alt="Award Ceremony" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gallery Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-[#4a0000] text-center mb-10 flex items-center justify-center gap-3">
            <FaImages className="text-[#D4AF37]" /> Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {ghaziData.gallery.map((img, i) => (
              <div 
                key={i} 
                className="h-56 md:h-72 overflow-hidden rounded-xl shadow-md border-2 border-slate-100 hover:border-[#D4AF37] transition-all cursor-pointer touch-manipulation"
                onClick={() => openLightbox(i, ghaziData.gallery)}
              >
                <img src={img} className="w-full h-full object-cover" alt="Gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Media Coverage Images */}
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-[#8b0000] text-center mb-10 flex items-center justify-center gap-3">
            <FaNewspaper className="text-[#D4AF37]" /> Media Coverage & Newspapers
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {ghaziData.news.mediaImages.map((img, i) => (
              <div 
                key={i} 
                className="bg-white p-3 shadow-lg rounded-lg border border-gray-200 hover:-translate-y-2 transition-transform cursor-pointer touch-manipulation"
                onClick={() => openLightbox(i, ghaziData.news.mediaImages)}
              >
                <img src={img} className="h-48 md:h-64 object-contain" alt="Media Coverage" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Blessed Moments of the Loyal Emperor */}
      <section className="py-20 bg-[#2a0000] text-white border-t-8 gold-border">
        <div className="container mx-auto px-4">
          <h3 className="text-xl md:text-3xl font-heading font-bold text-center text-[#D4AF37] mb-12 max-w-4xl mx-auto leading-relaxed">
            Blessed moments from the shrine of Ghazi Abbas (AS), captured by Haji Shabbir Ahmed Shigri's camera
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ghaziData.ziyaratVideos.map((vid, i) => (
              <div 
                key={i} 
                className="rounded-2xl overflow-hidden shadow-2xl border-2 gold-border bg-black hover:scale-105 transition-transform flex flex-col cursor-pointer touch-manipulation"
                onClick={() => openLightbox(i, ghaziData.ziyaratVideos.map(v => v.url))}
              >
                <video src={vid.url} className="w-full aspect-video bg-black pointer-events-none" />
                <div className="p-4 bg-black/90 text-center text-[#D4AF37] font-bold text-lg md:text-xl font-heading border-t border-[#D4AF37]/30 flex-grow flex items-center justify-center">
                  {vid.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* 🔴 Lightbox (large image/video with arrows) 🔴 */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md" 
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button className="absolute top-6 right-6 text-white text-5xl z-[10000]" onClick={closeLightbox}>
            <FaTimes />
          </button>

          {/* Previous arrow */}
          {activeMediaList.length > 1 && (
            <button className="absolute left-4 md:left-10 text-[#D4AF37] text-5xl md:text-7xl z-[10000] hover:scale-110 transition-transform" onClick={prevMedia}>
              <FaArrowLeft />
            </button>
          )}

          {/* Main display */}
          <div className="max-w-7xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {activeMediaList[currentIndex]?.includes('.mp4') || activeMediaList[currentIndex]?.includes('video') ? (
              <video 
                src={activeMediaList[currentIndex]} 
                controls 
                autoPlay 
                className="max-h-[85vh] w-auto rounded-lg border-2 border-[#D4AF37]" 
              />
            ) : (
              <img 
                src={activeMediaList[currentIndex]} 
                className="max-h-[85vh] w-auto object-contain rounded-lg border-2 border-[#D4AF37] shadow-2xl" 
                alt="Enlarged" 
              />
            )}
          </div>

          {/* Right arrow */}
          {activeMediaList.length > 1 && (
            <button className="absolute right-4 md:right-10 text-[#D4AF37] text-5xl md:text-7xl z-[10000] hover:scale-110 transition-transform" onClick={nextMedia}>
              <FaArrowRight />
            </button>
          )}
        </div>
      )}

      {/* Floating buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        <button onClick={() => window.history.back()} className="w-12 h-12 md:w-14 md:h-14 bg-white text-[#D4AF37] rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-[#D4AF37]">
          <FaArrowLeft className="text-xl md:text-2xl" />
        </button>
        <Link href="/en/" className="w-12 h-12 md:w-14 md:h-14 bg-[#D4AF37] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white">
          <FaHome className="text-xl md:text-2xl" />
        </Link>
      </div>
    </main>
  );
}