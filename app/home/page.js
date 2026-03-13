"use client";
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import Link from 'next/link';

import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

// تمام ڈیٹا یہاں سے امپورٹ ہو رہا ہے
import { 
  welcomeData, 
  honorsData, 
  navCardsData, 
  projectSectionData, 
  legendsData, 
  booksData, 
  servicesData 
} from '../homeData'; 

const getYouTubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// CSS اینیمیشنز کو یہاں برقرار رکھا گیا ہے تاکہ ڈیزائن خراب نہ ہو
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
  .responsive-video-container {
    position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; width: 100%;
    background: black; border-radius: 12px; box-shadow: 0 0 30px rgba(212,175,55,0.4); border: 2px solid #D4AF37;
  }
  .responsive-video-container iframe, .responsive-video-container video {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  }
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
    <>
      <main className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden">      
        <Navbar />
        <HeroSlider />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="islamic-pattern rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] p-6 md:p-12 text-center max-w-5xl mx-auto bg-white">
            <div className="space-y-6">
              <h2 className="font-amiri text-[#0f4c75] text-lg md:text-xl font-extrabold">{welcomeData?.bismillah}</h2>
              <p className="text-sm md:text-lg font-extrabold text-[#0b314d] urdu-text leading-loose" dir="rtl">
                <span className="text-[#D4AF37] text-xl md:text-2xl ml-2 font-extrabold">{welcomeData?.greeting}</span> 
                {welcomeData?.description}
              </p>
              <div className="text-center pt-3">
                <span className="text-[#0f4c75] text-xl md:text-3xl border-b-4 border-[#D4AF37] pb-1 px-8 urdu-text font-extrabold">
                  {welcomeData?.name}
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 border-t-2 border-[#D4AF37]/20 pt-8">
                {honorsData?.map((btn, i) => (
                  <Link key={i} href={btn.link} className={`group relative inline-flex items-center ${btn.direction === 'left' ? 'flex-row-reverse pl-2 pr-4' : 'pr-2 pl-4'} gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] py-2 rounded-full w-full md:w-[340px]`}>
                    <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border-2 border-white animate-ripple bg-white p-0.5">
                      <img src={btn.gif} alt={btn.title} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="block text-xl md:text-2xl font-extrabold font-amiri text-[#4a0000]">{btn.title}</span>
                      <span className="block text-[11px] text-[#4a0000]/80 font-bold">تفصیلات کے لیے کلک کریں</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <section className="container mx-auto px-4 py-2 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {navCardsData?.map((card, i) => (
              <Link key={i} href={card.link}>
                <NavCard icon={card.icon} title={card.title} />
              </Link>
            ))}
          </div>
        </section>

        {/* Legends Section */}
        <section className="bg-[#1a1a1a] py-10 border-y-4 border-[#D4AF37]">
          <h2 className="text-lg md:text-3xl font-bold text-[#D4AF37] text-center urdu-text mb-8 w-full">نامور شخصیات کا میرے بارے اظہار خیال</h2>
          <div className="relative w-full overflow-hidden" dir="ltr">
            <div className="flex gap-6 w-max animate-scroll-left pause-on-hover px-4">
              {infiniteLegends?.map((item, i) => (
                <CinematicCard key={i} img={item.img} video={item.video} name={item.name} setVideo={setActiveVideo} />
              ))}
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="container mx-auto px-4 py-10 relative z-10">
          <h2 className="text-xl md:text-3xl font-bold text-[#0f4c75] text-center urdu-text mb-8">حاجی شبیر احمد شگری کی تصانیف</h2>
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-[#D4AF37]/20 overflow-hidden" dir="ltr">
            <div className="flex gap-8 w-max animate-scroll-right pause-on-hover px-4">
              {infiniteBooks?.map((item, i) => (
                <BookCinematicCard key={i} img={item.img} title={item.title} link={item.link} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gradient-to-b from-white to-[#f8f9fa] py-16 border-t-2 border-[#D4AF37]/20 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f4c75] text-center urdu-text mb-12">خدمت کے 45 سال</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {servicesData?.map((item, i) => (
                <JourneyCard key={i} icon={item.icon} title={item.title} desc={item.desc} link={item.link} />
              ))}
            </div>
          </div>
        </section>

        <Footer year="2026" />
      </main>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md z-[99999]">
          <div className="w-full max-w-4xl flex flex-col items-center">
            <button onClick={() => setActiveVideo(null)} className="mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B38728] px-5 py-2 rounded-full font-bold">
              <span className="urdu-text">واپس جائیں</span>
            </button>
            <div className="responsive-video-container">
              {activeVideo.includes('youtu') ? (
                <iframe src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`} allowFullScreen></iframe>
              ) : (
                <video src={activeVideo} controls autoPlay className="w-full h-full object-contain"></video>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Components
function NavCard({ icon, title }) {
  return (
    <div className="bg-white border border-[#D4AF37]/20 p-5 rounded-2xl shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-all cursor-pointer h-full">
      <div className="text-3xl text-[#D4AF37] mb-3">{icon}</div>
      <h3 className="text-gray-800 text-sm md:text-lg urdu-text font-bold">{title}</h3>
    </div>
  );
}

function CinematicCard({ img, video, name, setVideo }) {
  return (
    <div className="min-w-[200px] md:min-w-[260px] h-[150px] relative rounded-xl overflow-hidden cursor-pointer border-2 border-[#D4AF37]/60 group shadow-lg" onClick={() => setVideo(video)}>
      <img src={img} alt={name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-all">
        <div className="bg-[#D4AF37]/80 p-3 rounded-full border-2 border-white group-hover:scale-125 transition-all">
          <FaPlay size={18} className="text-white pl-1" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-black/90 p-3 text-center text-sm text-[#D4AF37] urdu-text font-bold">{name}</div>
    </div>
  );
}

function BookCinematicCard({ img, title, link }) {
  return (
    <Link href={link || "#"} className="block min-w-[140px] md:min-w-[180px] h-[220px] md:h-[260px] relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/50 group">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
      <div className="absolute bottom-0 w-full p-4 text-center">
        <div className="text-sm md:text-base text-[#D4AF37] urdu-text font-bold leading-tight">{title}</div>
      </div>
    </Link>
  );
}

function JourneyCard({ icon, title, desc, link }) {
  return (
    <Link href={link || "#"} className="block group h-full" dir="rtl">
      <div className="relative bg-white rounded-2xl p-6 border-2 border-transparent hover:border-[#D4AF37] hover:shadow-xl transition-all duration-500 h-full text-right">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-[#0f4c75] text-white rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] transition-all">
            {icon}
          </div>
          <h3 className="font-bold text-[#0f4c75] text-xl font-amiri">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}