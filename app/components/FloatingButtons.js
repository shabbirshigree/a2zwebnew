"use client";
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

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

  const handleWhatsapp = () => {
    window.open('https://wa.me/923334491715', '_blank');
  };

  return (
    <>
      {/* Left - WhatsApp Button */}
      <button
        onClick={handleWhatsapp}
        className="fixed left-6 bottom-20 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-green-600"
        title="WhatsApp پر رابطہ کریں"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>

      {/* Right - Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-20 z-40 bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] text-[#D4AF37] p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          title="اوپر جائیں"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={28} />
        </button>
      )}
    </>
  );
}