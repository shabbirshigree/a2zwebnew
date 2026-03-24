"use client"; // 👈 نمبر 1: یہ سب سے اوپر ہونی چاہیے
import { useState, useEffect } from 'react'; // 👈 نمبر 2: یہ لائن یہاں غائب تھی، اسے لازمی ڈالیں
import Link from 'next/link'; // 👈 یہ لائن بٹنز کو کام کرنے کے قابل بنائے گی
import {
  FaHeart, FaMicrophone, FaAward, FaQuran, FaLandmark,
  FaPenNib, FaMedal, FaQuoteRight, FaHistory, FaChild,
  FaStar, FaArrowRight, FaArrowLeft, FaBookOpen, FaPlay, FaTimes,
  FaGlobe, FaTv, FaHandshake, FaTrophy, FaVideo, FaNewspaper,
  FaBriefcase, FaUser, FaHeadphones, FaBook
} from "react-icons/fa";

// باقی ڈیٹا امپورٹ ویسے ہی رہے گا جیسے آپ نے بھیجا ہے
import {
  welcomeData,
  honorsData,
  navCardsData,
  projectSectionData,
  booksData,
  legendsData,
  journeyData
} from './homeData';
// 🟢 یہ لائن 'Navbar' اور 'HeroSlider' کو جوڑنے کے لیے ہے
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

const getYouTubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// 🎨 گلوبل اسٹائلز
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
  .font-amiri { font-family: 'Amiri', serif; }
  
  @keyframes shine { 0% { left: -100%; } 100% { left: 200%; } }
  .animate-shine { position: relative; overflow: hidden; }
  .animate-shine::after {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-20deg); animation: shine 3s infinite;
  }

  @keyframes ripple {
    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.8), 0 0 0 0 rgba(212, 175, 55, 0.6), 0 0 0 0 rgba(212, 175, 55, 0.4); }
    100% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0), 0 0 0 30px rgba(212, 175, 55, 0), 0 0 0 45px rgba(212, 175, 55, 0); }
  }
  .animate-ripple { animation: ripple 2.5s infinite linear; border-radius: 50%; }

  @keyframes patternMove { 0% { background-position: 0 0; } 100% { background-position: -60px 0; } }
  .islamic-pattern { 
    background: repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.25) 20px, rgba(212, 175, 55, 0.25) 40px);
    animation: patternMove 20s linear infinite; 
  }
  .card-lift { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .card-lift:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 20px 30px rgba(0,0,0,0.1); }
  .animate-scroll-left { animation: scrollLeft 150s linear infinite; }
  .animate-scroll-right { animation: scrollRight 150s linear infinite; }
  @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
  .pause-on-hover:hover { animation-play-state: paused; }
  .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
`;

export default function Home() {
  // 1. تمام اسٹیٹس (States) یہاں ایک ساتھ رکھیں
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedHomeVideo, setSelectedHomeVideo] = useState(null);
  const [showHomeBooklet, setShowHomeBooklet] = useState(false);

  // 2. اس کے بعد useEffect والا حصہ آئے گا
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('custom-animations')) {
      const style = document.createElement('style');
      style.id = 'custom-animations';
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, []); // 👈 یہاں یہ ختم ہو رہا ہے

  // اس کے بعد باقی کوڈ...

  const repeatCount = 8;
  const infiniteLegends = Array(repeatCount).fill(legendsData || []).flat();
  const infiniteBooks = Array(repeatCount).fill(booksData || []).flat();

  return (
    <>
      <main className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden">
        <Navbar />

        <div className="block w-full p-0 m-0 border-none outline-none overflow-hidden relative">
          <HeroSlider />
        </div>

        {/* 🏠 خوش آمدید سیکشن */}
        <div className="container mx-auto px-3 md:px-4 py-8 relative z-10">
          <div className="islamic-pattern rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] p-6 md:p-12 text-center max-w-5xl mx-auto bg-white hover:border-[#b89628] transition-all duration-700">
            <div className="space-y-6 relative z-10">
              <h2 className="font-amiri text-[#0f4c75] text-lg md:text-xl font-extrabold tracking-wider opacity-90">{welcomeData?.bismillah}</h2>
              <p className="text-sm md:text-lg font-extrabold text-[#0b314d] text-justify md:text-center urdu-text leading-loose tracking-wide mt-3" dir="rtl">
                <span className="text-[#D4AF37] text-xl md:text-2xl ml-2 font-extrabold drop-shadow-sm">{welcomeData?.greeting}</span>
                {welcomeData?.description}
              </p>
              <div className="text-center pt-3">
                <span className="text-[#0f4c75] text-xl md:text-3xl border-b-4 border-[#D4AF37] pb-1 px-8 urdu-text font-extrabold hover:text-[#D4AF37] transition-colors cursor-default inline-block">
                  {welcomeData?.name}
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 w-full border-t-2 border-[#D4AF37]/20 pt-8">
                {honorsData?.map((btn, i) => (
                  <div key={i} className="w-full md:w-auto flex justify-center">
                    <Link href={btn.link} className={`group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-2 md:py-3 rounded-full shadow-xl border-2 border-white hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all duration-300 w-full md:w-[340px] px-4`}>
                      <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full border-2 border-white shadow-lg overflow-hidden flex-shrink-0 animate-ripple z-10 bg-white p-0.5">
                        <img src={btn.gif} alt={btn.title} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div className="flex-1 text-center flex flex-col justify-center">
                        <span className="block text-xl md:text-2xl font-extrabold font-amiri leading-none whitespace-nowrap drop-shadow-md">{btn.title}</span>
                        <span className="block text-[11px] md:text-xs text-[#4a0000]/80 font-bold mt-1 tracking-wider">تفصیلات کے لیے کلک کریں</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

{/* 🌟 4 اہم پروجیکٹس / نیویگیشن کارڈز کا سیکشن (نیا ڈیزائن) */}
        <section className="w-full px-3 md:px-4 py-8 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {navCardsData?.map((card, i) => (
              <Link key={i} href={card.link || '#'} className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#D4AF37]/30 text-center flex flex-col items-center justify-center shadow-lg hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden">
                
                {/* ✨ شائن ایفیکٹ (جب ماؤس اوپر آئے گا تو چمک پیدا ہوگی) */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine z-0 pointer-events-none"></div>

                {/* 🟡 گولڈن آئیکن (اوپر کی طرف) */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B38728] text-white rounded-full flex items-center justify-center mb-6 group-hover:from-[#0f4c75] group-hover:to-[#1e6091] transition-all duration-700 shadow-[0_10px_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_10px_20px_rgba(15,76,117,0.4)] group-hover:rotate-[360deg] group-hover:scale-110 relative z-10">
                  <span className="text-3xl drop-shadow-md">{card.icon}</span> 
                </div>

                {/* 🔵 نیلا ٹائٹل (نیچے کی طرف) */}
                <h3 className="font-extrabold text-[#0f4c75] text-xl md:text-2xl urdu-text group-hover:text-[#D4AF37] transition-colors duration-300 relative z-10">
                  {card.title}
                </h3>
                
              </Link>
            ))}
          </div>
        </section>

     {/* 🚀 نور القرآن پراجیکٹ سیکشن (نیا اور پروفیشنل ڈیزائن) */}
        <section className="container mx-auto px-3 md:px-4 py-8 relative z-10">
          <div className="max-w-6xl mx-auto bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden group">

            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center relative z-10">

              {/* 🖼️ تصویر اور بیج */}
              <div className="lg:w-1/3 relative">
                <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#0b314d] text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                  WORLD'S FIRST VISUAL QURAN
                </div>
                <img
                  src="https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png"
                  alt="نور القرآن پراجیکٹ"
                  className="w-full h-auto rounded-2xl border-2 border-[#D4AF37]/50 shadow-2xl transition-transform group-hover:scale-105 duration-500"
                />
              </div>

              {/* 📝 تحریر اور بٹنز */}
              <div className="lg:w-2/3 text-right" dir="rtl">
                <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-5 urdu-text">
                  نور القرآن پراجیکٹ: دنیا کا پہلا ویژول قرآن
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed urdu-text mb-8">
                  یہ حاجی شبیر احمد شگری کا ایک جدید اور منفرد منصوبہ ہے۔ اس پروجیکٹ کا بنیادی مقصد جدید ٹیکنالوجی اور مصنوعی ذہانت (AI) کے ذریعے قرآن مجید کے ترجمے اور مفاہیم کو بصری اور فلمی انداز میں پیش کرنا ہے۔
                </p>

                {/* 🔘 بٹن پینل (جو اب سیدھا فلپ بک لائبریری میں لے جائے گا) */}
                <div className="flex flex-wrap gap-3 justify-start">
                  
                  {/* 🟢 یہ بٹن اب سیدھا لائبریری جائے گا */}
                  <Link
                    href={projectSectionData?.bookletUrl || "/library#Quran"}
                    className="px-6 py-2.5 rounded-xl font-bold urdu-text flex items-center gap-2 bg-[#D4AF37] text-[#0b314d] hover:bg-white transition-all shadow-md"
                  >
                    <FaBookOpen /> تفصیل پڑھیں
                  </Link>

                  <button
                    onClick={() => setSelectedHomeVideo('https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_qfyz0i.mp4')}
                    className="px-5 py-2.5 rounded-xl font-bold urdu-text flex items-center gap-2 bg-[#0f4c75] text-white hover:bg-[#1b6ca8] transition-all shadow-md"
                  >
                    <FaPlay /> ویڈیو پوڈکاسٹ
                  </button>

                  <button
                    onClick={() => setSelectedHomeVideo('https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_wdodfp.mp4')}
                    className="px-5 py-2.5 rounded-xl font-bold urdu-text flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all"
                  >
                    <FaHeadphones /> آڈیو پوڈکاسٹ
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 🎥 شخصیات سلائیڈر */}
        <section className="bg-[#1a1a1a] py-10 relative overflow-hidden border-y-4 border-[#D4AF37]">
          <div className="container mx-auto px-2 relative z-10 text-center">
            <h2 className="text-lg md:text-3xl font-bold text-[#D4AF37] text-center urdu-text mb-8 border-b border-[#D4AF37]/30 pb-2 inline-block mx-auto">نامور شخصیات کا میرے بارے اظہار خیال</h2>
            <div className="relative w-full overflow-hidden" dir="ltr">
              <div className="flex gap-6 w-max animate-scroll-left pause-on-hover px-4">
                {infiniteLegends?.map((item, i) => (
                  <div key={i} className="card-lift" onClick={() => setActiveVideo(item.video)}>
                    <div className="min-w-[200px] md:min-w-[260px] h-[150px] relative rounded-xl overflow-hidden cursor-pointer border-2 border-[#D4AF37]/60 bg-black group shadow-lg">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-all">
                        <div className="bg-[#D4AF37]/80 p-3 rounded-full border-2 border-white group-hover:scale-125 transition-all shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                          <FaPlay size={18} className="text-white pl-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-3 text-center text-sm text-[#D4AF37] urdu-text font-bold tracking-wide">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 📚 تصانیف سلائیڈر */}
        <section className="container mx-auto px-2 py-10 relative z-10">
          <h2 className="text-xl md:text-3xl font-bold text-[#0f4c75] text-center urdu-text mb-8 border-b-2 border-[#D4AF37]/30 pb-2 inline-block mx-auto w-full">حاجی شبیر احمد شگری کی تصانیف</h2>
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-[#D4AF37]/20 overflow-hidden" dir="ltr">
            <div className="flex gap-8 w-max animate-scroll-right pause-on-hover px-4">
              {infiniteBooks?.map((item, i) => (
                <div key={i} className="card-lift">
                  <Link href={item.link || "#"} className="block min-w-[140px] md:min-w-[180px] h-[220px] md:h-[260px] relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/50 bg-white shadow-lg group hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all cursor-pointer">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 w-full p-4 text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm md:text-base text-[#D4AF37] urdu-text font-bold drop-shadow-md leading-tight">{item.title}</div>
                      <div className="text-[10px] md:text-xs text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">تفصیلات کے لیے کلک کریں</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⏳ خدمت کے 45 سال (مکمل RTL ترتیب کے ساتھ) */}
        <section className="bg-gradient-to-b from-[#fdfbfb] to-[#f3f4f6] py-16 border-t-2 border-[#D4AF37]/20 relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">

            <div className="text-center mb-12 relative">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f4c75] urdu-text mb-3">خدمت کے 45 سال</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full shadow-md"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
              {journeyData?.map((item, i) => (
                <Link key={i} href={item.link || '#'} className="flex group relative">

                  <div className="relative bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/30 shadow-sm transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(212,175,55,0.25)] w-full h-full text-right flex flex-col items-end group-hover:bg-[#0f4c75] group-hover:border-[#D4AF37] cursor-pointer" dir="rtl">

                    {/* 🟢 آئیکن اور ٹائٹل کی ترتیب (RTL) */}
                    <div className="flex flex-row-reverse items-center justify-between w-full mb-5 gap-3">
                      {/* آئیکن اب بائیں طرف (RTL کے مطابق) نظر آئے گا */}
                      <div className="relative flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0f4c75] to-[#1e6091] text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-700 ease-in-out group-hover:from-[#D4AF37] group-hover:to-[#B38728] group-hover:text-[#0f4c75] group-hover:rotate-[360deg] group-hover:scale-110">
                        {item.icon}
                      </div>

                      {/* ٹائٹل اب دائیں طرف سے شروع ہوگا */}
                      <h3 className="font-bold text-[#0f4c75] text-lg md:text-xl font-amiri group-hover:text-white transition-colors duration-300 text-right flex-grow">
                        {item.title}
                      </h3>
                    </div>

                    {/* تفصیل (Description) */}
                    <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed font-medium transition-colors duration-300 flex-grow text-right w-full">
                      {item.desc}
                    </p>

                    {/* نچلی پٹی */}
                    <div className="mt-5 pt-3 border-t border-gray-100 w-full group-hover:border-white/20 transition-colors">
                      <div className="flex flex-row-reverse items-center justify-between">
                        <span className="text-xs text-[#0f4c75] group-hover:text-white font-bold urdu-text">تفصیل دیکھیں</span>
                        <FaArrowLeft className="text-[#D4AF37] group-hover:text-white text-xs translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer year="2026" />
      </main>

      {/* 🎬 ویڈیو ماڈل */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md z-[99999]">
          <div className="w-full max-w-4xl flex flex-col items-center">
            <button onClick={() => setActiveVideo(null)} className="mb-4 flex items-center justify-center gap-2 bg-[#D4AF37] text-black px-5 py-2 rounded-full font-bold">
              <FaArrowLeft size={14} /> واپس جائیں
            </button>
            <div className="responsive-video-container w-full">
              {activeVideo.includes('youtu') ? (
                <iframe src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
              ) : (
                <video src={activeVideo} controls autoPlay className="w-full h-full object-contain"></video>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 🟢 پاپ اپس (ویڈیو اور بکلیٹ) */}
      {selectedHomeVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedHomeVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 text-white px-4 py-2 rounded-full font-bold" onClick={() => setSelectedHomeVideo(null)}>
              <FaTimes /> بند کریں
            </button>
            <video src={selectedHomeVideo} controls autoPlay className="w-full rounded-2xl border-4 border-[#D4AF37]" />
          </div>
        </div>
      )}

      {showHomeBooklet && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowHomeBooklet(false)}>
          <div className="relative w-full max-w-5xl h-[85vh]" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 text-white px-4 py-2 rounded-full font-bold" onClick={() => setShowHomeBooklet(false)}>
              <FaTimes /> بند کریں
            </button>
            <iframe src="https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/noorulquran-proj-without.exp.pdf" className="w-full h-full bg-white rounded-2xl border-4 border-[#D4AF37]"></iframe>
          </div>
        </div>
      )}

    </> // 👈 یہاں مین فریگمنٹ بند ہو رہا ہے
  ); // 👈 یہاں ریٹرن بند ہو رہا ہے
} // 👈 یہاں ہوم فنکشن بند ہو رہا ہے