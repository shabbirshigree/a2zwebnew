"use client";
import { useState, useEffect } from 'react';
import { FaTimes, FaArrowLeft, FaPlay } from "react-icons/fa";
import Link from 'next/link';

// 🔴 یہاں راستے (Paths) ہوم فولڈر کے لحاظ سے درست کر دیے گئے ہیں
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

// 🔴 ڈیٹا فائل کا راستہ بھی درست کر دیا گیا ہے
import { welcomeData, honorsData, navCardsData, projectSectionData, booksData, legendsData, journeyData } from '../homeData'; 

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
  const infiniteLegends = Array(repeatCount).fill(legendsData || []).flat();
  const infiniteBooks = Array(repeatCount).fill(booksData || []).flat();

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden animate-fade-in-up">      
      <Navbar />
      
      {/* 🔴 1. سلائیڈر سیکشن */}
      <div className="block w-full p-0 m-0 border-none outline-none overflow-hidden relative">
        <HeroSlider />
      </div>

      {/* 🔴 2. خوش آمدید + اعزازات (بٹن) */}
      <div className="container mx-auto px-3 md:px-4 py-8 relative z-10">
        <div className="islamic-pattern rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] p-6 md:p-12 text-center max-w-5xl mx-auto bg-white hover:border-[#b89628] transition-all duration-700">
          <div className="space-y-6 relative z-10">
            
            {/* ڈائنیمک ویلکم ٹیکسٹ */}
            <div>
              <h2 className="font-amiri text-[#0f4c75] text-lg md:text-xl font-extrabold tracking-wider opacity-90">{welcomeData.bismillah}</h2>
              <p className="text-sm md:text-lg font-extrabold text-[#0b314d] text-justify md:text-center urdu-text leading-loose tracking-wide mt-3" dir="rtl">
                <span className="text-[#D4AF37] text-xl md:text-2xl ml-2 font-extrabold drop-shadow-sm">{welcomeData.greeting}</span> 
                {welcomeData.description}
              </p>
              <div className="text-center pt-3">
                 <span className="text-[#0f4c75] text-xl md:text-3xl border-b-4 border-[#D4AF37] pb-1 px-8 urdu-text font-extrabold hover:text-[#D4AF37] transition-colors cursor-default inline-block">
                   {welcomeData.name}
                 </span>
              </div>
            </div>

            {/* ڈائنیمک اعزازات بٹنز */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 w-full border-t-2 border-[#D4AF37]/20 pt-8">
                 {honorsData.map((btn, i) => (
                   <div key={i} className="w-full md:w-auto flex justify-center">
                      <Link href={btn.link} className={`group relative inline-flex items-center ${btn.direction === 'left' ? 'flex-row-reverse pl-2 pr-4' : 'pr-2 pl-4'} gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-2 md:py-3 rounded-full shadow-xl border-2 border-white hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all duration-300 w-full md:w-[340px]`}>
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

      {/* 🔴 3. نیویگیشن کارڈز */}
      <section className="container mx-auto px-3 md:px-4 py-2 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {navCardsData.map((card, i) => (
             card.target === "_blank" ? (
               <a key={i} href={card.link} target="_blank" rel="noopener noreferrer"><NavCard icon={card.icon} title={card.title} /></a>
             ) : (
               <Link key={i} href={card.link}><NavCard icon={card.icon} title={card.title} /></Link>
             )
          ))}
        </div>
      </section>

      {/* 🔴 4. نور القرآن پروجیکٹ سیکشن */}
      <section className="container mx-auto px-3 md:px-4 py-6 relative z-10">
        <div className="bg-gradient-to-r from-[#0f4c75] to-[#1e6091] rounded-3xl p-1 shadow-xl border-2 border-[#D4AF37] hover:shadow-[0_0_50px_rgba(15,76,117,0.3)] transition-all duration-500">
          <div className="bg-white rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-right order-2 md:order-1">
              <h3 className="text-xl md:text-3xl font-bold text-[#0f4c75] mb-3 font-serif">{projectSectionData.title}</h3>
              <div className="bg-blue-50 p-4 rounded-xl border border-[#D4AF37]/30 shadow-inner group transition-all mb-4">
                <p className="text-[#0f4c75] font-bold text-sm md:text-lg urdu-text group-hover:scale-[1.01] transition-transform leading-relaxed" dir="rtl">
                  {projectSectionData.description}
                </p>
              </div>
              <div className="flex justify-center md:justify-end mt-5">
                <Link href={projectSectionData.link} className="group relative inline-flex items-center gap-3 px-8 py-2 rounded-full border-2 border-[#D4AF37] text-[#0f4c75] text-lg font-bold overflow-hidden transition-all duration-300 hover:text-white hover:bg-[#D4AF37] shadow-md hover:shadow-lg hover:-translate-y-1">
                  <span className="urdu-text relative z-10">{projectSectionData.btnText}</span>
                  <FaArrowLeft className="relative z-10 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <img src={projectSectionData.image} alt="Project Logo" className="w-32 md:w-48 rounded-2xl shadow-lg border-4 border-[#D4AF37] order-1 md:order-2 quran-glow" />
          </div>
        </div>
      </section>

      {/* 🔴 5. ٹیسٹیمونیلز & کتب */}
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
                        <BookCinematicCard img={item.img} title={item.title} link={item.link} />
                      </div>
                  ))}
              </div>
        </div>
      </section>

      {/* 🔴 45 سالہ خدمات */}
      <section className="bg-white py-10 border-t border-[#D4AF37]/20 relative z-10 shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0f4c75] text-center urdu-text mb-10 underline decoration-[#D4AF37] underline-offset-8">خدمت کے 45 سال</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {journeyData.map((item, i) => (
                 <JourneyCard key={i} icon={item.icon} title={item.title} desc={item.desc} />
              ))}
          </div>
        </div>
      </section>

      <Footer year="2026" />
      
      {/* 🔴 ویڈیو ماڈل */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[101]"><FaTimes /></button>
          <div className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.6)] border-4 border-[#D4AF37] animate-fadeInUp">
            
            {activeVideo.includes('youtu') ? (
              <iframe 
                  className="w-full h-[50vh] md:h-[70vh]" 
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1&rel=0`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
              </iframe>
            ) : (
              <video 
                  className="w-full h-[50vh] md:h-[70vh] bg-black" 
                  src={activeVideo} 
                  controls 
                  autoPlay 
                  playsInline>
              </video>
            )}

          </div>
        </div>
      )}
    </main>
  );
}

// ہیلپر کمپوننٹس
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

function BookCinematicCard({ img, title, link }) {
    return (
      <a href={link || "#"} target="_blank" rel="noopener noreferrer" className="block min-w-[140px] md:min-w-[180px] h-[220px] md:h-[260px] relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/50 bg-white shadow-lg group hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all cursor-pointer">
         <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
         <div className="absolute bottom-0 w-full p-4 text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <div className="text-sm md:text-base text-[#D4AF37] urdu-text font-bold drop-shadow-md leading-tight">{title}</div>
            <div className="text-[10px] md:text-xs text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">پڑھنے کے لیے کلک کریں</div>
         </div>
      </a>
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
    <div className="bg-slate-50 rounded-2xl shadow-sm p-6 border border-gray-200 transition-all duration-300 hover:border-[#D4AF37] hover:bg-white hover:shadow-lg group text-left" dir="ltr">
      <div className="flex items-center justify-start gap-4 mb-3" dir="ltr">
        <div className="text-[#D4AF37] p-3 bg-white rounded-xl border border-gray-100 group-hover:scale-110 transition-all shadow-sm">{icon}</div>
        <h3 className="font-bold text-[#0f4c75] text-xl">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  );
}