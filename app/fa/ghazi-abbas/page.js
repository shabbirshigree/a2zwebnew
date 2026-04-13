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

  // تابع باز کردن لایت باکس (موبایل فرینڈلی)
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
    <main className="min-h-screen bg-slate-50 overflow-x-hidden rtl" dir={ghaziData.dir}>
      <Navbar />

      {/* 1. ہیرو سیکشن */}
      <section className="relative h-[380px] md:h-[420px] hero-gradient flex items-center justify-center text-white pb-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] opacity-20"></div>
        <div className="relative z-10 px-4 w-full max-w-5xl mx-auto -mt-4 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-28 w-28 md:h-36 md:w-36 mx-auto rounded-full border-4 gold-border bg-white animate-ripple mb-8 relative">
              <img src={ghaziData.intro.profileGif} alt="پروفایل" className="w-full h-full object-cover rounded-full" />
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#D4AF37] drop-shadow-lg mb-4">
              {ghaziData.intro.heroTitle}
            </h1>

            <p className="text-body text-center max-w-3xl text-sm sm:text-base md:text-xl lg:text-2xl opacity-95 font-bold leading-normal md:leading-relaxed px-2 mx-auto">
              {ghaziData.intro.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. خوش آمدید نوٹ */}
      <section className="container mx-auto px-4 -mt-10 relative z-20 pb-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-12 border-t-8 gold-border">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-[#8b0000] mb-8 text-center">
            <FaAward className="text-5xl md:text-6xl text-[#D4AF37] shrink-0" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2">{ghaziData.intro.welcome}</h2>
          </div>
          <div className="text-body text-gray-800 text-right md:text-justify">
            {ghaziData.intro.text}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end md:justify-end">
            <p className="text-xl md:text-2xl font-bold text-[#8b0000] text-right">{ghaziData.intro.author}</p>
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
              <p className="text-body text-gray-100 leading-relaxed text-right md:text-justify">
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
                <FaBullhorn /> خبر ویژه
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#4a0000] leading-normal">
                {ghaziData.news.headline}
              </h3>
              <p className="text-body text-gray-700 text-right md:text-justify">{ghaziData.news.paragraph1}</p>
              <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-800 my-6">
                <p className="text-body text-gray-800 text-right md:text-justify">{ghaziData.news.paragraph2}</p>
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

      {/* 5. ایوارڈ کی تصاویر */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-[#4a0000] text-center mb-10 flex items-center justify-center gap-3">
            <FaImages className="text-[#D4AF37]" /> تصاویر افتخار
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ghaziData.award.images.map((img, i) => (
              <div
                key={i}
                className="h-48 md:h-64 overflow-hidden rounded-xl shadow-lg border border-gray-300 hover:scale-105 transition-transform cursor-pointer touch-manipulation"
                onClick={() => openLightbox(i, ghaziData.award.images)}
              >
                <img src={img} className="w-full h-full object-cover" alt="مراسم اعطای جایزه" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#3a0000] text-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-[#D4AF37]/40 shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-heading font-bold text-center text-[#D4AF37] mb-6 flex items-center justify-center gap-3">
              <FaVideo /> نورِ کربلا — لیست پخش
            </h3>
            <p className="text-body text-gray-100 leading-relaxed text-right md:text-justify mb-8">
              مجموعه مستند «نورِ کربلا» اثری ماندگار از «نور پروداکشنز» به تهیه‌کنندگی حاجی شبیر احمد شگری است. این مجموعه برای نخستین بار با نگاهی جامع به معرفی مقامات کربلا و جزئیات تاریخی آن‌ها پرداخته است. این پروژه منحصربه‌فرد، برگ زرینی در کارنامه نور پروداکشنز محسوب می‌شود که لیست پخش آن در ادامه قابل مشاهده است.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/60 bg-black">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/videoseries?list=PLVLSFOIjQLcI6nu3X2SSXqkMot1dPP1qr"
                title="Noor-e-Karbala Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href="https://youtube.com/playlist?list=PLVLSFOIjQLcI6nu3X2SSXqkMot1dPP1qr&si=CQ2DcDEhObZJlAW7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all border border-white/30"
              >
                <FaPlay className="text-lg" />
                برای مشاهده تمام ویدئوهای نورِ کربلا روی لیست پخش کلیک کنید
              </a>
            </div>
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
              <div
                key={i}
                className="h-56 md:h-72 overflow-hidden rounded-xl shadow-md border-2 border-slate-100 hover:border-[#D4AF37] transition-all cursor-pointer touch-manipulation"
                onClick={() => openLightbox(i, ghaziData.gallery)}
              >
                <img src={img} className="w-full h-full object-cover" alt="گالری" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. میڈیا کوریج تصاویر */}
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-[#8b0000] text-center mb-10 flex items-center justify-center gap-3">
            <FaNewspaper className="text-[#D4AF37]" /> پوشش رسانه‌ای و روزنامه‌ها
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {ghaziData.news.mediaImages.map((img, i) => (
              <div
                key={i}
                className="bg-white p-3 shadow-lg rounded-lg border border-gray-200 hover:-translate-y-2 transition-transform cursor-pointer touch-manipulation"
                onClick={() => openLightbox(i, ghaziData.news.mediaImages)}
              >
                <img src={img} className="h-48 md:h-64 object-contain" alt="پوشش رسانه‌ای" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. لحظات مبارک شاه وفادار */}
      <section className="py-20 bg-[#2a0000] text-white border-t-8 gold-border">
        <div className="container mx-auto px-4">
          <h3 className="text-xl md:text-3xl font-heading font-bold text-center text-[#D4AF37] mb-12 max-w-4xl mx-auto leading-relaxed">
            شاه وفادار غازی عباس علیه‌السلام حرم چند لحظه مبارک و یادگاری، از چشم دوربین حاجی شبیر احمد شگری
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

      {/* 🔴 لائٹ باکس (بڑی تصویر/ویڈیو اور ایروز) 🔴 */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* دکمه بستن */}
          <button className="absolute top-6 right-6 text-white text-5xl z-[10000]" onClick={closeLightbox}>
            <FaTimes />
          </button>

          {/* فلش راست */}
          {activeMediaList.length > 1 && (
            <button className="absolute left-4 md:left-10 text-[#D4AF37] text-5xl md:text-7xl z-[10000] hover:scale-110 transition-transform" onClick={prevMedia}>
              <FaArrowLeft />
            </button>
          )}

          {/* نمایش اصلی */}
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
                alt="بزرگ شده"
              />
            )}
          </div>

          {/* فلش چپ */}
          {activeMediaList.length > 1 && (
            <button className="absolute right-4 md:right-10 text-[#D4AF37] text-5xl md:text-7xl z-[10000] hover:scale-110 transition-transform" onClick={nextMedia}>
              <FaArrowRight />
            </button>
          )}
        </div>
      )}

      {/* دکمه‌های شناور */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        <button onClick={() => window.history.back()} className="w-12 h-12 md:w-14 md:h-14 bg-white text-[#D4AF37] rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-[#D4AF37]">
          <FaArrowLeft className="text-xl md:text-2xl" />
        </button>
        <Link href="/fa/" className="w-12 h-12 md:w-14 md:h-14 bg-[#D4AF37] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white">
          <FaHome className="text-xl md:text-2xl" />
        </Link>
      </div>
    </main>
  );
}
