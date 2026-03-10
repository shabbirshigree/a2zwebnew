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
        // تبدیلیاں: موبائل پر سائز تھوڑا چھوٹا (p-3) اور شفافیت (opacity-80) تاکہ تحریر نظر آئے
        className="fixed left-4 bottom-6 md:left-8 md:bottom-10 z-50 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg opacity-80 hover:opacity-100 hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-green-600 focus:outline-none"
        title="WhatsApp پر رابطہ کریں"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl md:text-2xl" />
      </button>

      {/* Right - Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          // تبدیلیاں: موبائل پر پوزیشن اور سائز کو متوازن کیا گیا ہے
          className="fixed right-4 bottom-6 md:right-8 md:bottom-10 z-50 bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] text-[#D4AF37] p-3 md:p-4 rounded-full shadow-lg opacity-80 hover:opacity-100 hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none"
          title="اوپر جائیں"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl md:text-2xl" />
        </button>
      )}
    </>
  );
}