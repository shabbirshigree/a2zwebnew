"use client";
import { useState, useEffect } from 'react';
import { FaYoutube, FaBookOpen, FaHandshake, FaGlobe, FaMedal, FaTrophy, FaMicrophone, FaNewspaper, FaTv, FaPlay, FaTimes, FaPlane, FaArrowLeft, FaHandPointLeft, FaMosque } from "react-icons/fa";
import Link from 'next/link';
import { Navbar, HeroSlider } from './components/Header';
import Footer from './components/Footer';
import { booksData, legendsData } from './homeData'; 

// 🎨 گلوبل اسٹائلز (اینیمیشن اور فونٹس)
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
  .font-amiri { font-family: 'Amiri', serif; }
  
  /* بٹن پر نور کی لہر (Shine Effect) */
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
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
    transform: skewX(-20deg);
    animation: shine 3s infinite;
  }

  /* ہلتا ہوا ہاتھ (Pointing Finger Animation) */
  @keyframes point {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-5px); }
  }
  .animate-point {
    animation: point 1.5s ease-in-out infinite;
  }

  /* باقی اسٹائلز */
  @keyframes patternMove { 0% { background-position: 0 0; } 100% { background-position: -60px 0; } }
  .islamic-pattern { 
    background: repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.25) 20px, rgba(212, 175, 55, 0.25) 40px);
    animation: patternMove 20s linear infinite; 
  }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
  .animate-scroll-left { animation: scrollLeft 150s linear infinite; }
  .animate-scroll-right { animation: scrollRight 150s linear infinite; }
  .pause-on-hover:hover { animation-play-state: paused; }
  .quran-glow:hover { filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.8)); transform: scale(1.05) rotate(2deg); transition: all 0.5s ease; }
  .card-lift { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .card-lift:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 20px 30px rgba(0,0,0,0.1); }
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
        
        {/* 🔥 بٹنوں کا نیا "میگنیٹک" سیکشن (سلائیڈر کے اوپر) */}
        <div className="absolute bottom-10 left-0 w-full z-20 flex flex-col items-center justify-center space-y-4 px-4">
           
           <h2 className="text-white text-xl md:text-2xl font-bold font-amiri drop-shadow-md bg-black/40 px-6 py-2 rounded-full border border-[#D4AF37]/50 backdrop-blur-sm mb-2">
             👇 زیارت و خدمات کا انتخاب کریں 👇
           </h2>

           <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto justify-center">
             
             {/* 🕌 بٹن 1: خادم امام رضاؑ (گولڈن + شائن) */}
             <Link href="/imam-reza" className="w-full md:w-auto group">
               <button className="relative animate-shine flex items-center justify-center gap-4 w-full md:w-auto bg-gradient-to-b from-[#FBF5B7] via-[#BF953F] to-[#AA771C] text-black px-8 py-4 rounded-full hover:scale-110 transition-transform duration-300 font-bold text-xl shadow-[0_0_40px_rgba(212,175,55,0.8)] border-2 border-[#fff]">
                 <span className="bg-white/20 p-2 rounded-full"><FaMosque size={24}/></span>
                 <div className="text-right">
                    <span className="block text-xs font-normal opacity-80">شاہِ خراسان</span>
                    <span className="font-bold font-amiri text-2xl">خادمِ امام رضاؑ</span>
                 </div>
                 <FaHandPointLeft className="animate-point text-2xl text-white drop-shadow-md" />
               </button>
             </Link>

             {/* 🚩 بٹن 2: خادم غازی عباسؑ (سلور + شائن) */}
             <Link href="#" className="w-full md:w-auto group">
               <button className="relative animate-shine flex items-center justify-center gap-4 w-full md:w-auto bg-gradient-to-b from-[#E0E0E0] via-[#9E9E9E] to-[#616161] text-white px-8 py-4 rounded-full hover:scale-110 transition-transform duration-300 font-bold text-xl shadow-[0_0_40px_rgba(192,192,192,0.6)] border-2 border-[#fff]">
                 <span className="bg-black/20 p-2 rounded-full"><FaTrophy size={24}/></span>
                 <div className="text-right">
                    <span className="block text-xs font-normal opacity-90">وفا کے پیکر</span>
                    <span className="font-bold font-amiri text-2xl">خادمِ غازی عباسؑ</span>
                 </div>
                 <FaHandPointLeft className="animate-point text-2xl text-black/50 drop-shadow-md" />
               </button>
             </Link>

           </div>
        </div>
      </div>

      {/* 🔴 2. خوش آمدید سیکشن */}
      <div className="container mx-auto px-3 md:px-4 py-8 relative z-10">
        <div className="islamic-pattern rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] p-6 md:p-12 text-center max-w-5xl mx-auto bg-white hover:border-[#b89628] transition-all duration-700">
          <div className="space-y-5 relative z-10">
            <h2 className="font-amiri text-[#0f4c75] text-lg md:text-xl font-bold tracking-wider opacity-90">بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ</h2>
            <p className="text-sm md:text-lg font-bold text-[#0b314d] text-justify md:text-center urdu-text leading-loose tracking-wide" dir="rtl">
              <span className="text-[#D4AF37] text-xl md:text-2xl ml-2 font-extrabold drop-shadow-sm">السلام علیکم!</span> 
              میں آپ کو اپنی آفیشل ویب سائٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔
            </p>
            <div className="text-center pt-2">
               <span className="text-[#0f4c75] text-xl md:text-3xl border-b-4 border-[#D4AF37] pb-1 px-8 urdu-text font-bold hover:text-[#D4AF37] transition-colors cursor-default inline-block">
                 حاجی شبیر احمد شگری
               </span>
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

      {/* 🔴 5. اعزازات */}
      <section className="container mx-auto px-3 md:px-4 py-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <Link href="/imam-reza" className="block transform transition-transform duration-300 hover:scale-105">
               <HonorsCard icon={<FaMedal/>} title="Khadim-e-Imam Reza (A.S)" desc="Honorary Servant at Holy Shrine, Mashhad" />
            </Link>
            <div className="block cursor-pointer transform transition-transform duration-300 hover:scale-105">
               <HonorsCard icon={<FaTrophy/>} title="Khadim-e-Ghazi Abbas (A.S)" desc="Honorary Servant at Holy Shrine, Karbala" />
            </div>
        </div>
      </section>

      {/* 🔴 6. ٹیسٹیمونیلز & کتب & سفر (باقی کوڈ وہی ہے) */}
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
function HonorsCard({ icon, title, desc }) {
  return (
    <div className="bg-gradient-to-br from-[#D4AF37] to-[#996D00] text-white p-6 rounded-2xl shadow-lg flex items-center gap-5 transition-all duration-500 hover:scale-105 hover:brightness-110 group border-2 border-white/20 h-full">
      <div className="text-5xl opacity-80 group-hover:rotate-[360deg] transition-transform duration-1000">{icon}</div>
      <div><h3 className="text-lg md:text-2xl font-bold">{title}</h3><p className="text-xs md:text-sm font-medium opacity-90">{desc}</p></div>
    </div>
  );
}
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