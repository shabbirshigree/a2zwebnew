'use client';

import { useState } from 'react';
// خوبصورت آئیکنز امپورٹ کر رہے ہیں
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function Gallery({ title, images, isObjectArray }) {
  // یہ سٹیٹ بتائے گی کہ کونسی تصویر ابھی بڑی ہو کر کھلی ہے
  const [currentIndex, setCurrentIndex] = useState(null);

  // بڑی تصویر (ماڈل) کو بند کرنے کا فنکشن
  const closeModal = () => setCurrentIndex(null);

  // اگلی تصویر پر جانے کا فنکشن
  const nextImage = (e) => {
    e.stopPropagation(); // کلک کرنے پر ماڈل بند نہ ہو جائے
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // پچھلی تصویر پر جانے کا فنکشن
  const prevImage = (e) => {
    e.stopPropagation(); // کلک کرنے پر ماڈل بند نہ ہو جائے
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="my-16 px-4">
      {/* گیلری کا عنوان */}
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center text-[#0b314d] urdu-text border-b-2 border-[#D4AF37] pb-3 inline-block pr-6">{title}</h2>
      
      {/* گیلری کا گرڈ (جس میں تصاویر نظر آئیں گی) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => {
          // اگر ڈیٹا آبجیکٹ کی شکل میں ہے تو title اور img الگ کریں، ورنہ ڈائریکٹ لنک لیں
          const src = isObjectArray ? img.img : img;
          const alt = isObjectArray ? img.title : `Gallery Image ${index + 1}`;
          
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white group border-2 border-transparent hover:border-[#D4AF37] transition-all"
              onClick={() => setCurrentIndex(index)} // کلک کرنے پر انڈیکس سیٹ کریں
            >
              {/* تصویر کا Hover Effect (زوم ان) */}
              <img
                src={src}
                alt={alt}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* اگر تصویر کے ساتھ ٹائٹل ہے تو وہ نیچے نظر آئے گا */}
              {isObjectArray && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium urdu-text leading-tight">{img.title}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 🔴 بڑی تصویر کا فریم (Lightbox) */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeModal} // باہر کلک کرنے پر بند ہو جائے
        >
          {/* کلوز بٹن (&times;) */}
          <button
            className="absolute top-6 right-6 text-[#D4AF37] text-6xl hover:text-red-500 transition-colors z-[2001]"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* بائیں تیر کا نشان (FaChevronLeft) */}
          <button
            className="absolute left-4 md:left-10 text-white text-5xl hover:text-[#D4AF37] transition-colors z-[2001] p-2"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          {/* بڑی تصویر کا فریم */}
          <div 
            className="relative max-w-5xl w-full flex justify-center items-center" 
            onClick={(e) => e.stopPropagation()} // اس پر کلک کرنے پر ماڈل بند نہ ہو
          >
            <img
              src={isObjectArray ? images[currentIndex].img : images[currentIndex]}
              alt="Fullscreen"
              className="max-h-[85vh] rounded-lg shadow-[0_0_60px_rgba(255,255,255,0.2)] border-4 border-white/10"
            />
            {/* بڑی تصویر کا عنوان (اگر موجود ہو) */}
            {isObjectArray && (
              <div className="absolute -bottom-10 text-white text-xl font-semibold text-center w-full urdu-text">
                {images[currentIndex].title}
              </div>
            )}
          </div>

          {/* دائیں تیر کا نشان (FaChevronRight) */}
          <button
            className="absolute right-4 md:right-10 text-white text-5xl hover:text-[#D4AF37] transition-colors z-[2001] p-2"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}