"use client";
import { useState, useEffect } from 'react';
import { FaYoutube, FaBookOpen, FaHandshake, FaGlobe, FaMedal, FaTrophy, FaMicrophone, FaNewspaper, FaTv, FaPlay, FaTimes, FaPlane, FaArrowLeft, FaHandPointLeft, FaMosque } from "react-icons/fa";
import Link from 'next/link';
import { Navbar, HeroSlider } from './components/Header';
import Footer from './components/Footer';
import { booksData, legendsData } from './homeData'; 

// 🎨 گلوبل اسٹائلز
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
  .font-amiri { font-family: 'Amiri', serif; }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 200%; }
  }
  .animate-shine {
    position: relative;
    overflow: hidden;
  }
  .animate-shine::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-20deg);
    animation: shine 3s infinite;
  }

  /* 🔥 پانی کی لہروں کا ایفیکٹ (اب 3 تہیں ہیں) */
  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8),
                  0 0 0 0 rgba(255, 255, 255, 0.6),
                  0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    100% {
      box-shadow: 0 0 0 15px rgba(255, 255, 255, 0),
                  0 0 0 30px rgba(255, 255, 255, 0),
                  0 0 0 45px rgba(255, 255, 255, 0);
    }
  }
  .animate-ripple {
    animation: ripple 2s infinite linear;
    border-radius: 50%; /* دائرہ یقینی بنانے کے لیے */
  }

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
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('custom-animations')) {
      const style = document.createElement('style');
      style.id = 'custom-animations';
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, []);

  const repeatCount = 8; 
  const safeLegends = legendsData || [];
  const safeBooks = booksData || [];
  const infiniteLegends = Array(repeatCount).fill(safeLegends).flat();
  const infiniteBooks = Array(repeatCount).fill(safeBooks).flat();

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden">      
      <Navbar />
      
      {/* 🔴 1. سلائیڈر سیکشن */}
      <div className="block w-full p-0 m-0 border-none outline-none overflow-hidden relative">
        <HeroSlider />
      </div>

      {/* 🔴 2. خوش آمدید + اعزازات (بٹن) */}
      <div className="container mx-auto px-3 md:px-4 py-8 relative z-10">
        <div className="islamic-pattern rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] p-6 md:p-12 text-center max-w-5xl mx-auto bg-white hover:border-[#b89628] transition-all duration-700">
          <div className="space-y-6 relative z-10">
            
            {/* بسم اللہ اور ویلکم نوٹ (ایکسٹرا بولڈ) */}
            <div>
              <h2 className="font-amiri text-[#0f4c75] text-lg md:text-xl font-extrabold tracking-wider opacity-90">بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ</h2>
              
              <p className="text-sm md:text-lg font-extrabold text-[#0b314d] text-justify md:text-center urdu-text leading-loose tracking-wide mt-3" dir="rtl">
                <span className="text-[#D4AF37] text-xl md:text-2xl ml-2 font-extrabold drop-shadow-sm">السلام علیکم!</span> 
                میں آپ کو اپنی آفیشل ویب سائٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے <span className="text-[#D4AF37] border-b-2 border-[#D4AF37]">'نور القرآن ویژول'</span> جیسے عظیم پروجیکٹ کی تفصیلات کے ساتھ میرے کالمز، مضامین، سفرنامے، ڈاکومنٹریز، اور دیگر خدمات کا مجموعہ ملے گا۔ بالخصوص میری تحاریر پر گوگل کے خصوصی اور دلچسپ تجزیے آڈیو پوڈکاسٹ اور ویڈیو کی شکل میں سن اور دیکھ سکتے ہیں۔
              </p>
              
              <div className="text-center pt-3">
                 <span className="text-[#0f4c75] text-xl md:text-3xl border-b-4 border-[#D4AF37] pb-1 px-8 urdu-text font-extrabold hover:text-[#D4AF37] transition-colors cursor-default inline-block">
                   حاجی شبیر احمد شگری
                 </span>
              </div>
            </div>

            {/* 🔥 اہم اعزازات (بٹن) - ویلکم نوٹ کے فوراً نیچے */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full border-t-2 border-[#D4AF37]/20 pt-6">
                 
                 {/* 🕌 بٹن 1: خادم امام رضاؑ */}
                 <div className="w-full md:w-auto flex justify-center">
                    <Link href="/imam-reza" className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#AA771C] via-[#BF953F] to-[#FBF5B7] text-black pr-2 pl-6 py-2 rounded-full shadow-lg border border-white/60 hover:scale-[1.02] transition-transform w-full md:w-[320px]">
                        
                        {/* GIF (بائیں طرف) - 3 لہروں کے ساتھ */}
                        <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full border border-white shadow-md overflow-hidden flex-shrink-0 animate-ripple z-10">
                          <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" alt="Reza" className="w-full h-full object-cover" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 text-left flex flex-col justify-center">
                           <span className="block text-sm md:text-lg font-bold font-amiri leading-none text-black whitespace-nowrap">خادمِ امام رضاؑ</span>
                           <span className="block text-[10px] md:text-xs text-black/90 font-bold mt-1">تفصیلات کے لیے کلک کریں</span>
                        </div>
                    </Link>
                 </div>

                 {/* 🚩 بٹن 2: خادم غازی عباسؑ */}
                 <div className="w-full md:w-auto flex justify-center">
                    <Link href="#" className="group relative inline-flex items-center flex-row-reverse gap-3 bg-gradient-to-l from-[#AA771C] via-[#BF953F] to-[#FBF5B7] text-black pl-2 pr-6 py-2 rounded-full shadow-lg border border-white/60 hover:scale-[1.02] transition-transform w-full md:w-[320px]">
                        
                        {/* GIF (دائیں طرف) - 3 لہروں کے ساتھ */}
                        <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full border border-white shadow-md overflow-hidden flex-shrink-0 animate-ripple z-10">
                          <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif" alt="Abbas" className="w-full h-full object-cover" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 text-right flex flex-col justify-center">
                           <span className="block text-sm md:text-lg font-bold font-amiri leading-none text-black whitespace-nowrap">خادمِ غازی عباسؑ</span>
                           <span className="block text-[10px] md:text-xs text-black/90 font-bold mt-1">تفصیلات کے لیے کلک کریں</span>
                        </div>
                    </Link>
                 </div>

            </div>

          </div>
        </div>
      </div>

      {/* 🔴 3. نیویگیشن کارڈز */}
      <section className="container mx-auto px-3 md:px-4 py-2 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          <Link href="/project"><NavCard icon={<FaBookOpen/>} title="نور القرآن" /></Link>
          <NavCard icon={<FaYoutube/>} title="نور پروڈکشنز" />
          <NavCard icon={<FaHandshake/>} title="پاک ایران دوستی" />
          <NavCard icon={<FaGlobe/>} title="ویب سائٹ" />
        </div>
      </section>

      {/* 🔴 4. نور القرآن پروجیکٹ سیکشن */}
      <section className="container mx-auto px-3 md:px-4 py-6 relative z-10">
        <div className="bg-gradient-to-r from-[#0f4c75] to-[#1e6091] rounded-3xl p-1 shadow-xl border-2 border-[#D4AF37] hover:shadow-[0_0_50px_rgba(15,76,117,0.3)] transition-all duration-500">
          <div className="bg-white rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-right order-2 md:order-1">
              <h3 className="text-xl md:text-3xl font-bold text-[#0f4c75] mb-3 font-serif">📖 Noor-ul-Quran Project</h3>
              <div className="bg-blue-50 p-4 rounded-xl border border-[#D4AF37]/30 shadow-inner group transition-all mb-4">
                <p className="text-[#0f4c75] font-bold text-sm md:text-lg urdu-text group-hover:scale-[1.01] transition-transform leading-relaxed" dir="rtl">
                  نورالقرآن ویژول کا مقصد قرآن مجیدکی آیات کو بصری انداز میں پیش کرنا ہے۔
                </p>
              </div>
              <div className="flex justify-center md:justify-end mt-5">
                <Link href="/project" className="group relative inline-flex items-center gap-3 px-8 py-2 rounded-full border-2 border-[#D4AF37] text-[#0f4c75] text-lg font-bold overflow-hidden transition-all duration-300 hover:text-white hover:bg-[#D4AF37] shadow-md hover:shadow-lg hover:-translate-y-1">
                  <span className="urdu-text relative z-10">تفصیلات دیکھیں</span>
                  <FaArrowLeft className="relative z-10 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png" alt="Quran Logo" className="w-32 md:w-48 rounded-2xl shadow-lg border-4 border-[#D4AF37] order-1 md:order-2 quran-glow" />
          </div>
        </div>
      </section>

      {/* 🔴 5. ٹیسٹیمونیلز & کتب & سفر */}
      <section className="bg-[#1a1a1a] py-10 relative overflow-hidden border-y-4 border-[#D4AF37]">
        <div className="container mx-auto px-2 relative z-10">
          <h2 className="text-lg md:text-3xl font-bold text-[#D4AF37] text-center urdu-text mb-8 border-b border-[#D4AF37]/30 pb-2 inline-block mx-auto">نامور شخصیات کا میرے بارے اظہار خیال</h2>
          <div className="relative w-full overflow-hidden" dir="ltr">
            <div className="flex gap-6 w-max animate-scroll-left pause-on-hover px-4">
                {infiniteLegends.map((item, i) => (
                    <div key={i} className="card-lift">
                      <CinematicCard img={item.img} video={item.video} name={item.name} setVideo={setActiveVideo} />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 py-10 relative z-10">
        <h2 className="text-xl md:text-3xl font-bold text-[#0f4c75] text-center urdu-text mb-8 border-b-2 border-[#D4AF37]/30 pb-2 inline-block mx-auto w-full">حاجی شبیر احمد شگری کی تصانیف</h2>
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-[#D4AF37]/20 overflow-hidden" dir="ltr">
             <div className="flex gap-8 w-max animate-scroll-right pause-on-hover px-4">
                 {infiniteBooks.map((item, i) => (
                     <div key={i} className="card-lift">
                        <BookCinematicCard img={item.img} title={item.title} />
                     </div>
                 ))}
             </div>
        </div>
      </section>

      <section className="bg-white py-10 border-t border-[#D4AF37]/20 relative z-10 shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0f4c75] text-center urdu-text mb-10 underline decoration-[#D4AF37] underline-offset-8">خدمت کے 45 سال</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <JourneyCard icon={<FaMicrophone/>} title="Radio Pakistan" desc="Start of Career at Radio Pakistan Skardu." />
             <JourneyCard icon={<FaNewspaper/>} title="Journalism (45 Years)" desc="Deputy Editor: Daily Havi, Akath & Prachar." />
             <JourneyCard icon={<FaTv/>} title="TV Talk Shows" desc="Host & Guest on National & International TV." />
             <JourneyCard icon={<FaHandshake/>} title="Cultural Diplomacy" desc="Ex-PRO & In-charge at Khana Farhang Iran." />
             <JourneyCard icon={<FaBookOpen/>} title="Books & Author" desc="Author of 9+ books including 'Booy-e-Bahisht'." />
             <JourneyCard icon={<FaPlane/>} title="Tourism Pioneer" desc="Launched First Cultural Tourism to Iran." />
          </div>
        </div>
      </section>

      <Footer />
      
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[101]"><FaTimes /></button>
          <div className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.6)] border-4 border-[#D4AF37] animate-fadeInUp">
            <iframe className="w-full h-[50vh] md:h-[70vh]" src={`https://www.youtube.com/embed/${activeVideo.split('/').pop()}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </main>
  );
}

// 🔴 ہیلپر کمپوننٹس
function CinematicCard({ img, video, name, setVideo }) {
    return (
      <div className="min-w-[200px] md:min-w-[260px] h-[150px] relative rounded-xl overflow-hidden cursor-pointer border-2 border-[#D4AF37]/60 bg-black group shadow-lg" onClick={() => setVideo(video)}>
        <img src={img} alt={name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-all">
            <div className="bg-[#D4AF37]/80 p-3 rounded-full border-2 border-white group-hover:scale-125 transition-all shadow-[0_0_20px_rgba(212,175,55,0.6)]">
              <FaPlay size={18} className="text-white pl-1" />
            </div>
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-3 text-center text-sm text-[#D4AF37] urdu-text font-bold tracking-wide">{name}</div>
      </div>
    );
}
function BookCinematicCard({ img, title }) {
    return (
      <div className="min-w-[140px] md:min-w-[180px] h-[220px] md:h-[260px] relative rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-white shadow-md group">
         <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
         <div className="absolute bottom-0 w-full bg-[#0f4c75]/95 p-3 text-center text-sm text-white urdu-text font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300">{title}</div>
      </div>
    );
}
function NavCard({ icon, title }) {
  return (
    <div className="bg-white border border-[#D4AF37]/20 p-5 rounded-2xl shadow-sm flex flex-col items-center text-center hover:bg-[#fffbf0] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
      <div className="text-3xl text-[#D4AF37] mb-3 group-hover:scale-125 transition-transform drop-shadow-sm">{icon}</div>
      <h3 className="text-gray-800 text-sm md:text-lg urdu-text font-bold group-hover:text-[#0f4c75]">{title}</h3>
    </div>
  );
}
function JourneyCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-50 rounded-2xl shadow-sm p-6 border border-gray-200 transition-all duration-300 hover:border-[#D4AF37] hover:bg-white hover:shadow-lg group">
      <div className="flex items-center gap-4 mb-3">
        <div className="text-[#D4AF37] p-3 bg-white rounded-xl border border-gray-100 group-hover:scale-110 transition-all shadow-sm">{icon}</div>
        <h3 className="font-bold text-[#0f4c75] text-xl">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  );
}