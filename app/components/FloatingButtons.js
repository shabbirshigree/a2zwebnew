"use client";
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp, FaHome, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    window.history.back();
  };

  const handleWhatsapp = () => {
    window.open('https://wa.me/923334491715', '_blank');
  };

  return (
    <>
      {/* 🟢 بائیں جانب: واٹس ایپ بٹن */}
      <button
        onClick={handleWhatsapp}
        className="fixed left-4 bottom-6 md:left-6 md:bottom-8 z-[9999] bg-green-500 text-white p-3 rounded-full shadow-lg opacity-70 backdrop-blur-sm hover:opacity-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none"
        title="WhatsApp پر رابطہ کریں"
      >
        <FaWhatsapp className="text-xl" />
      </button>

      {/* 🔵 دائیں جانب: بٹنز */}
      <div className="fixed right-4 bottom-6 md:right-6 md:bottom-8 z-[9999] flex flex-col gap-2 w-28 md:w-32">

        {/* 1. ہوم پیج (درست شدہ لنک) */}
        <Link
          href="/home"
          prefetch={false}
          className="w-full bg-[#D4AF37] text-white px-3 py-1.5 rounded-full shadow-md opacity-70 backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-between focus:outline-none"
        >
          <span className="text-xs md:text-sm font-bold font-amiri">ہوم پیج</span>
          <FaHome className="text-sm" />
        </Link>

        {/* 2. واپس جائیں */}
        <button
          onClick={goBack}
          className="w-full bg-white/90 text-[#0f4c75] border border-[#0f4c75] px-3 py-1.5 rounded-full shadow-md opacity-70 backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-between focus:outline-none"
        >
          <span className="text-xs md:text-sm font-bold font-amiri">واپس جائیں</span>
          <FaArrowLeft className="text-sm" />
        </button>

        {/* 3. اوپر جائیں */}
        <button
          onClick={scrollToTop}
          className={`w-full bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] text-[#D4AF37] px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-500 flex items-center justify-between focus:outline-none
            ${showScrollTop ? 'opacity-70 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible pointer-events-none'}`}
        >
          <span className="text-xs md:text-sm font-bold font-amiri">اوپر جائیں</span>
          <FaArrowUp className="text-sm" />
        </button>

      </div>
    </>
  );
}