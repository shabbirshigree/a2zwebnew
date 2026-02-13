"use client";
import { useState, useEffect, useRef } from 'react';
import { FaYoutube, FaBookOpen, FaHandshake, FaGlobe, FaMedal, FaTrophy, FaMicrophone, FaNewspaper, FaTv, FaPlay, FaTimes, FaPlane, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navbar, HeroSlider } from './components/Header';
import Footer from './components/Footer';
// 🟢 آپ کی بنائی ہوئی نئی فائل سے ڈیٹا یہاں آ رہا ہے
import { booksData, legendsData } from './homeData'; 

// Global Styles for Animations
const globalStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
  .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .islamic-pattern {
    background: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,.05) 35px, rgba(212,175,55,.05) 70px);
  }
`;

if (typeof window !== 'undefined') {
  if (!document.getElementById('custom-animations')) {
    const style = document.createElement('style');
    style.id = 'custom-animations';
    style.textContent = globalStyles;
    document.head.appendChild(style);
  }
}

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);
  const legendScrollRef = useRef(null);
  const bookScrollRef = useRef(null);

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 280;
      if (direction === 'left') {
        ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-800 relative overflow-hidden">      
      <Navbar />

      {/* ویڈیو پاپ اپ */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 z-50"><FaTimes /></button>
          <div className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.5)] border-4 border-[#D4AF37]">
            {activeVideo.includes('youtu') ? (
               <iframe className="w-full h-[50vh] md:h-[70vh]" src={`https://www.youtube.com/embed/${activeVideo.split('/').pop().split('?')[0]}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
            ) : (
               <video controls autoPlay className="w-full h-auto max-h-[85vh]"><source src={activeVideo} type="video/mp4" /></video>
            )}
          </div>
        </div>
      )}

      <HeroSlider />

      {/* خوش آمدید (Welcome Section) */}
      <div className="container mx-auto px-3 md:px-4 py-8 md:py-12 relative z-10">
        <div className="islamic-pattern rounded-2xl shadow-lg border-2 md:border-4 border-[#D4AF37] p-6 md:p-12 text-center max-w-5xl mx-auto bg-white/95">
          <div className="space-y-4 md:space-y-6">
            {/* 🟢 بسم اللہ عربی فانٹ میں */}
            <h2 className="text-[1.4rem] sm:text-2xl md:text-4xl text-[#0f4c75] mb-2 md:mb-4 arabic-text">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
            
            <p className="text-sm md:text-xl text-gray-800 text-justify md:text-center urdu-text" dir="rtl">
              <span className="text-[#0f4c75] text-lg md:text-2xl ml-2">السلام علیکم!</span> میں آپ کو اپنی آفیشل ویب سائٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے 'نور القرآن ویژول' جیسے عظیم پروجیکٹ سے لے کر دستاویزی فلموں کا آن لائن مجموعہ ملے گا۔ 
            </p>
            
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full my-4"></div>
            
            <p className="text-sm md:text-xl text-gray-700 mb-6 urdu-text text-center" dir="rtl">
              <span className="text-[#0f4c75] text-lg md:text-2xl ml-2">میرا عزم:</span> دین خدا اور مخلوق خدا کی خدمت، محبت، امن اور آشتی کا فروغ ہے۔
            </p>
            
            <div className="text-center pt-2">
               <span className="text-[#0f4c75] text-xl md:text-3xl border-b-4 border-[#D4AF37] pb-2 px-6 py-2 urdu-text">حاجی شبیر احمد شگری</span>
            </div>
          </div>
        </div>
      </div>

      {/* نیویگیشن */}
      <section className="container mx-auto px-3 md:px-4 py-6 md:py-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <NavCard icon={<FaBookOpen/>} title="نور القرآن" desc="Visual Quran" />
          <NavCard icon={<FaYoutube/>} title="نور پروڈکشنز" desc="Media Network" />
          <NavCard icon={<FaHandshake/>} title="پاک ایران دوستی" desc="Friendship" />
          <NavCard icon={<FaGlobe/>} title="ویب سائٹ" desc="Web Portal" />
        </div>
      </section>

      {/* نور القرآن ہائی لائٹ */}
      <section className="container mx-auto px-3 md:px-4 py-6 md:py-10 relative z-10">
        <div className="bg-gradient-to-r from-[#0f4c75] to-[#1e6091] rounded-3xl p-2 shadow-xl border-2 border-[#D4AF37]">
          <div className="bg-white rounded-2xl p-4 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start w-full">
              <h3 className="text-2xl md:text-4xl font-bold text-[#0f4c75] mt-2 mb-3 font-serif">📖 Noor-ul-Quran Project</h3>
              <p className="text-gray-600 mb-3 italic text-sm md:text-lg">The world's first verse-by-verse Visual Quran translation.</p>
              <p className="text-[#0f4c75] text-sm md:text-xl mb-4 text-center md:text-right w-full bg-blue-50/50 p-3 rounded-lg border border-[#D4AF37]/20 urdu-text" dir="rtl">
                نورالقرآن ویژول کا مقصد قرآن مجید کو سن کر اور دیکھ کر قرآنی آیات کو سمجھنا ہے۔ ان شاء اللہ
              </p>
            </div>
            <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png" alt="Quran Logo" className="w-32 md:w-56 rounded-2xl shadow-lg border-2 md:border-4 border-[#D4AF37] order-1 md:order-2" />
          </div>
        </div>
      </section>

      {/* اعزازات (Honors) */}
      <section className="container mx-auto px-3 md:px-4 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#996D00] text-white p-5 md:p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg md:text-2xl font-bold flex items-center gap-2 mb-2"><FaMedal size={24}/> Khadim-e-Imam Reza</h3>
                <p className="text-xs md:text-base font-medium">Honorary Servant at Holy Shrine, Mashhad</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#996D00] text-white p-5 md:p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg md:text-2xl font-bold flex items-center gap-2 mb-2"><FaTrophy size={24}/> Khadim-e-Ghazi Abbas</h3>
                <p className="text-xs md:text-base font-medium">Honorary Servant at Holy Shrine, Karbala</p>
            </div>
        </div>
      </section>

      {/* --- LEGENDS (Videos) --- */}
      <section className="bg-gradient-to-r from-black via-slate-900 to-black py-10 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-2 md:px-4 relative z-10 my-4">
          <div className="text-center mb-8 md:mb-12">
             <h2 className="text-2xl md:text-5xl text-[#D4AF37] urdu-text inline-block border-b-2 border-[#D4AF37] pb-2">نامور شخصیات کے تأثرات</h2>
          </div>
          <div className="relative max-w-[98%] mx-auto">
            <button onClick={() => scrollContainer(legendScrollRef, 'left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] text-black p-2 md:p-4 rounded-full shadow-lg"><FaChevronLeft /></button>
            <button onClick={() => scrollContainer(legendScrollRef, 'right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] text-black p-2 md:p-4 rounded-full shadow-lg"><FaChevronRight /></button>
            <div ref={legendScrollRef} className="flex overflow-x-auto gap-4 md:gap-8 scrollbar-hide px-6 py-4 snap-x scroll-smooth">
                {/* 🟢 ڈیٹا میپنگ یہاں ہو رہی ہے */}
                {legendsData.map((item, i) => (
                    <CinematicCard key={i} img={item.img} video={item.video} name={item.name} role={item.role} setVideo={setActiveVideo} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BOOKS --- */}
      <section className="container mx-auto px-2 md:px-4 py-10 md:py-16 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c75] border-b-2 border-[#D4AF37] inline-block pb-2 urdu-text">قابلِ مطالعہ کتب</h2>
        </div>
        <div className="bg-gradient-to-r from-[#fffbf0] via-white to-[#fffbf0] p-5 md:p-10 rounded-3xl shadow-lg border border-[#D4AF37] relative">
           <button onClick={() => scrollContainer(bookScrollRef, 'left')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] text-white p-2 rounded-full"><FaChevronLeft /></button>
           <button onClick={() => scrollContainer(bookScrollRef, 'right')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] text-white p-2 rounded-full"><FaChevronRight /></button>
           <div ref={bookScrollRef} className="flex overflow-x-auto gap-4 md:gap-8 scrollbar-hide px-6 md:px-8 py-2 snap-x scroll-smooth">
               {/* 🟢 ڈیٹا میپنگ یہاں ہو رہی ہے */}
               {booksData.map((item, i) => (
                   <BookCinematicCard key={i} img={item.img} title={item.title} year={item.year} />
               ))}
           </div>
        </div>
      </section>

      {/* سفر (Professional Journey) */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-10 md:py-16 border-t border-[#D4AF37] relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0f4c75] urdu-text border-b-2 border-[#D4AF37] inline-block pb-2">خدمت کے 45 سال</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
             <JourneyCard icon={<FaMicrophone/>} title="Radio Pakistan" desc="Start of Career at Radio Pakistan Skardu. The Golden Voice of GB." />
             <JourneyCard icon={<FaNewspaper/>} title="Journalism (45 Years)" desc="Deputy Editor: Daily Havi, Akath & Prachar. 300+ Articles published." />
             <JourneyCard icon={<FaTv/>} title="TV Talk Shows" desc="Host & Guest on numerous National & International TV Talk Shows." />
             <JourneyCard icon={<FaHandshake/>} title="Cultural Diplomacy" desc="Ex-PRO & In-charge of Other Departments at Khana Farhang Iran." />
             <JourneyCard icon={<FaBookOpen/>} title="Books & Author" desc="Author of 9+ books including 'Booy-e-Bahisht'." />
             <JourneyCard icon={<FaPlane/>} title="Tourism Pioneer" desc="Launched First Cultural Tourism to Iran. Author of 'Siahat-e-Iran'." />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// --- Components ---
function CinematicCard({ img, video, name, role, setVideo }) {
    return (
      <div style={{ minWidth: '240px', height: '160px' }} className="flex-shrink-0 relative rounded-xl overflow-hidden cursor-pointer border-2 border-[#D4AF37]/50 snap-center bg-black" onClick={() => setVideo(video)}>
        <img src={img} alt={name} className="w-full h-full object-cover opacity-85" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-[#D4AF37] text-black rounded-full p-3"><FaPlay size={16} /></div>
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent pt-6 pb-2 px-2 text-center">
            <h3 className="text-[#D4AF37] font-bold text-xs">{name}</h3>
        </div>
      </div>
    );
}

function BookCinematicCard({ img, title, year }) {
    return (
      <div className="min-w-[130px] h-[190px] relative rounded-xl overflow-hidden cursor-pointer border-2 border-[#D4AF37] snap-center bg-white">
         <img src={img} alt={title} className="w-full h-full object-cover" />
         <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0f4c75] to-[#0f4c75]/80 p-2 text-center">
            <p className="text-white text-sm urdu-text">{title}</p>
         </div>
      </div>
    );
}

function NavCard({ icon, title, desc }) {
  return (
    <div className="bg-white border-2 border-[#D4AF37] p-3 md:p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
      <div className="text-3xl text-[#D4AF37] mb-2">{icon}</div>
      <h3 className="text-gray-800 text-base md:text-lg urdu-text">{title}</h3>
    </div>
  );
}

function JourneyCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#D4AF37]">
      <div className="bg-[#f0f4f8] p-3 md:p-4 flex items-center gap-3 border-b border-[#D4AF37]">
        <div className="bg-[#D4AF37] text-white p-2 rounded-full">{icon}</div>
        <h3 className="font-bold text-[#0f4c75] text-sm md:text-base">{title}</h3>
      </div>
      <div className="p-3 md:p-4"><p className="text-gray-600 text-xs md:text-sm">{desc}</p></div>
    </div>
  );
}