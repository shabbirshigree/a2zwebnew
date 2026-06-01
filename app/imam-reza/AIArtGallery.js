"use client";
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLocale } from '../components/LocaleProvider';
import { dictionaries } from '../lib/i18n';
import CldImage from '../components/CldImage';

const aiArtImages = [
  "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776010421/84935d36-b673-4e7f-8b13-acadd76cf260.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776011597/108cb4e8-3e24-4ee6-941d-1b7678626bd7.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776010496/c3bb5a75-b994-4408-89fd-9f6879377f9f.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776010603/56e5009b-643c-4689-ab4b-ad57c43fddba.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776011638/344130e4-dcc6-43db-8237-e7b815f4921c.png"
];

export default function AIArtGallery() {
  const { locale } = useLocale();
  const t = dictionaries[locale]?.aiArtGallery || dictionaries.ur.aiArtGallery;
  const isRtl = locale === 'ur' || locale === 'fa';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % aiArtImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % aiArtImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + aiArtImages.length) % aiArtImages.length);

  return (
    <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-[2.5rem] shadow-2xl border-2 border-[#D4AF37]/30 overflow-hidden">
        <div className={`flex flex-col lg:flex-row ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content Section */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-[#fcf8e8]">
            <div className={`flex items-center gap-3 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <h2 className={`text-2xl md:text-3xl font-extrabold text-[#0f4c75] leading-tight ${isRtl ? 'text-right' : 'text-left'}`}>
                {t.title}
              </h2>
            </div>
            
            <div className={`w-20 h-1 bg-[#D4AF37] mb-8 ${isRtl ? 'ml-auto' : 'mr-auto'}`}></div>
            
            <p className={`text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-medium ${isRtl ? 'text-right' : 'text-left'}`}>
              {t.description}
            </p>
            
            <div className={`flex mt-auto ${isRtl ? 'justify-end' : 'justify-start'}`}>
              <div className="px-4 md:px-5 py-1.5 md:py-2 border border-[#D4AF37] text-[#0f4c75] rounded-full text-xs md:text-sm font-semibold leading-tight whitespace-nowrap">
                International Competition
              </div>
            </div>
          </div>

          {/* Slider Section */}
          <div 
            className="lg:w-1/2 relative h-[400px] md:h-[600px] bg-black group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {aiArtImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                }`}
              >
                <CldImage 
                  src={img} 
                  alt={`AI Art ${idx + 1}`} 
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-[#D4AF37] transition-all z-20 opacity-0 group-hover:opacity-100"
            >
              <FaChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-[#D4AF37] transition-all z-20 opacity-0 group-hover:opacity-100"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {aiArtImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}