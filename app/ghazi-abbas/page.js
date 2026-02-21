"use client";
import React from 'react';
// FaHome کو بھی شامل کیا گیا ہے نئے بٹن کے لیے
import { FaAward, FaVideo, FaBullhorn, FaArrowLeft, FaNewspaper, FaImages, FaQuoteRight, FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { Navbar } from '../components/Header';
import Footer from '../components/Footer';
import { ghaziData } from './ghaziData';

export default function SadayEGhaziPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden rtl" dir="rtl">
      <style>{`
        /* فونٹس کی امپورٹ */
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap');
        
        /* ہیڈنگ کے فونٹ کو لاک کر دیا گیا ہے تاکہ وہ حد سے زیادہ نہ پھیلے */
        .font-heading {
          font-family: 'Amiri', serif !important;
        }
        
        /* تحریر کی الائنمنٹ دونوں طرف سے برابر (Justify) */
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

        /* لہروں والا اینیمیشن (Ripple Effect) */
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

      {/* 1. ہیرو سیکشن */}
      <section className="relative h-[380px] md:h-[420px] hero-gradient flex items-center justify-center text-white pb-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] opacity-20"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto -mt-4">

          <div className="h-28 w-28 md:h-36 md:w-36 mx-auto rounded-full border-4 gold-border bg-white animate-ripple mb-8 relative">
            <img src={ghaziData.intro.profileGif} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#D4AF37] drop-shadow-lg mb-4">صدائے غازیؑ ایوارڈ</h1>

          <p className="text-sm sm:text-base md:text-xl lg:text-2xl opacity-95 font-bold leading-normal md:leading-relaxed px-2 lg:whitespace-nowrap">
            حاجی شبیر احمد شگری ۔ اعزاز یافتہ خادم و محافظ حرم حضرت عباس علمدار علیہ السلام
          </p>
        </div>
      </section>

      {/* 2. خوش آمدید نوٹ (اب اس کا سائز بالکل متوازن رہے گا) */}
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

      {/* 3. صدائے غازی ایوارڈ ویڈیو */}
      <section className="py-16 bg-[#3a0000] text-white relative">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-center text-[#D4AF37] mb-12 flex items-center justify-center gap-4">
            <FaVideo /> صدائے غازی ایوارڈ
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-8 bg-black">
              <video src={ghaziData.award.video} controls className="w-full aspect-video" />
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

      {/* 4. خبر اور ویڈیو کا حصہ */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="bg-[#8b0000] text-white px-5 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2 shadow-md">
                <FaBullhorn /> خصوصی خبر
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#4a0000] leading-normal">
                {ghaziData.news.headline}
              </h3>
              <p className="text-body text-gray-700">{ghaziData.news.paragraph1}</p>
              <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-800 my-6">
                <p className="text-body text-gray-800">{ghaziData.news.paragraph2}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 gold-border bg-black">
              <video src={ghaziData.news.video} controls className="w-full aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. ایوارڈ کی تصاویر */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-[#4a0000] text-center mb-10 flex items-center justify-center gap-3">
            <FaImages className="text-[#D4AF37]" /> اعزاز کی تصاویر
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ghaziData.award.images.map((img, i) => (
              <div key={i} className="h-48 md:h-64 overflow-hidden rounded-xl shadow-lg border border-gray-300 hover:scale-105 transition-transform">
                <img src={img} className="w-full h-full object-cover" alt="Award Ceremony" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. گیلری تصاویر */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-[#4a0000] text-center mb-10 flex items-center justify-center gap-3">
            <FaImages className="text-[#D4AF37]" /> گیلری
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {ghaziData.gallery.map((img, i) => (
              <div key={i} className="h-56 md:h-72 overflow-hidden rounded-xl shadow-md border-2 border-slate-100 hover:border-[#D4AF37] transition-all">
                <img src={img} className="w-full h-full object-cover" alt="Gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. میڈیا کوریج تصاویر */}
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-[#8b0000] text-center mb-10 flex items-center justify-center gap-3">
            <FaNewspaper className="text-[#D4AF37]" /> میڈیا کوریج اور اخبارات
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {ghaziData.news.mediaImages.map((img, i) => (
              <div key={i} className="bg-white p-3 shadow-lg rounded-lg border border-gray-200 hover:-translate-y-2 transition-transform">
                <img src={img} className="h-48 md:h-64 object-contain" alt="Media Coverage" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. روح پرور مناظر اور زیارات */}
      <section className="py-20 bg-[#2a0000] text-white border-t-8 gold-border">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-center text-[#D4AF37] mb-12 flex items-center justify-center gap-4">
            <FaVideo /> روح پرور مناظر اور زیارات
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ghaziData.ziyaratVideos.map((vid, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-2xl border-2 gold-border bg-black hover:scale-105 transition-transform flex flex-col">
                <video src={vid.url} controls className="w-full aspect-video bg-black" />
                <div className="p-4 bg-black/90 text-center text-[#D4AF37] font-bold text-lg md:text-xl font-heading border-t border-[#D4AF37]/30 flex-grow flex items-center justify-center">
                  {vid.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* امام رضا پیج والے گول فلوٹنگ بٹنز */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        {/* پیچھے جانے والا سفید بٹن (Back Arrow) */}
        <button onClick={() => window.history.back()} className="w-12 h-12 md:w-14 md:h-14 bg-white text-[#D4AF37] rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-[#D4AF37]">
          <FaArrowLeft className="text-xl md:text-2xl" />
        </button>
        {/* ہوم پیج پر جانے والا گولڈن بٹن (Home Icon) */}
        <Link href="/" className="w-12 h-12 md:w-14 md:h-14 bg-[#D4AF37] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white">
          <FaHome className="text-xl md:text-2xl" />
        </Link>
      </div>
    </main>
  );
}