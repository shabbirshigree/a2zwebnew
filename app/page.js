"use client";
import { useState, useEffect, useRef } from 'react';
import { FaYoutube, FaFacebookF, FaWhatsapp, FaBookOpen, FaHandshake, FaGlobe, FaMedal, FaTrophy, FaMicrophone, FaNewspaper, FaTv, FaPlay, FaEnvelope, FaMapMarkerAlt, FaTimes, FaBars, FaPlane, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6"; 
import { BiSolidMoviePlay } from "react-icons/bi";
import { Navbar, HeroSlider } from './components/Header';
import Footer from './components/Footer';

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
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 10px rgba(212, 175, 55, 0.5); }
    50% { text-shadow: 0 0 20px rgba(212, 175, 55, 0.8); }
  }
  .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
  .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
  .animate-glow { animation: glow 3s ease-in-out infinite; }
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
  const [showScroll, setShowScroll] = useState(false);
  const legendScrollRef = useRef(null);
  const bookScrollRef = useRef(null);

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const { current } = ref;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){ setShowScroll(true) } 
      else if (showScroll && window.pageYOffset <= 400){ setShowScroll(false) }
    };
    window.addEventListener('scroll', checkScrollTop)
    return () => { window.removeEventListener('scroll', checkScrollTop) }
  }, [showScroll]);

  // --- DATA ARRAYS ---
  const books = [
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png", title: "سکون کی تلاش", year: "2015" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png", title: "بوئے بہشت", year: "2018" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png", title: "روح کی معراج", year: "2012" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png", title: "کنجی بہشت", year: "2019" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png", title: "سیاحت ایران", year: "2016" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Book_Khorasan-e-Razavi_b9nqdb.bmp", title: "خراسان رضوی", year: "2020" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png", title: "مجلہ فرھنگستان", year: "2017" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png", title: "مدینۃ الاہلبیتؑ", year: "2021" } 
  ];

  const legends = [
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4", name: "Mian Manzoor Watoo", role: "Ex-Chief Minister" },
    { img: "https://img.youtube.com/vi/OXyJA7IoUwY/hqdefault.jpg", video: "https://youtu.be/OXyJA7IoUwY", name: "Pir Usman Shah Noori", role: "Peace Committee" },
    { img: "https://img.youtube.com/vi/l1qwlEN1gQo/hqdefault.jpg", video: "https://youtu.be/l1qwlEN1gQo", name: "Pir Burhanuddin Usmani", role: "Usmani Foundation" },
    { img: "https://img.youtube.com/vi/6O5tyMv4Ahg/hqdefault.jpg", video: "https://youtu.be/6O5tyMv4Ahg", name: "Dr. M. Sadaqat Ali", role: "Religious Scholar" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.mp4", name: "Pir Maoom H. Naqvi", role: "Senior Scholar" },
    { img: "https://img.youtube.com/vi/fW648rFweyM/hqdefault.jpg", video: "https://youtu.be/fW648rFweyM", name: "Sardar Sikandar Singh", role: "Sikh Leader" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", name: "Hafiz A.G. Roparhi", role: "Jamia Ahle Hadith" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.mp4", name: "Molana M. Khan Laghari", role: "Ahle Sunnat Scholar" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.mp4", name: "Pir G. Rasool Awesi", role: "Spiritual Leader" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-800 font-sans relative overflow-hidden">
      
      {/* بیک گراؤنڈ ایفیکٹس */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl opacity-30"></div>
      </div>

      <Navbar />

      {/* ویڈیو پاپ اپ */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeInUp">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 z-50 transition duration-300 hover:scale-110"><FaTimes /></button>
          <div className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.5)] border-4 border-[#D4AF37] animate-slideInRight">
            {activeVideo.includes('youtu') ? (
               <iframe className="w-full h-[50vh] md:h-[70vh]" src={`https://www.youtube.com/embed/${activeVideo.split('/').pop().split('?')[0]}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            ) : (
               <video controls autoPlay className="w-full h-auto max-h-[85vh]"><source src={activeVideo} type="video/mp4" /></video>
            )}
          </div>
        </div>
      )}

      <HeroSlider />

      {/* ❌ میں نے یہاں سے 'نام' اور 'سوشل میڈیا' والے سیکشن نکال دیے ہیں کیونکہ وہ اب ہیڈر میں ہیں ❌ */}
      {/* اس سے آپ کا ڈبل نام والا مسئلہ حل ہو گیا ہے اور باقی خوبصورتی برقرار ہے */}

      {/* خوش آمدید (Enhanced Welcome Section) */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="islamic-pattern rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border-4 border-[#D4AF37] p-8 md:p-16 text-center max-w-5xl mx-auto bg-white/95 backdrop-blur-sm hover:shadow-[0_20px_80px_rgba(212,175,55,0.2)] transition duration-500 animate-fadeInUp">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-6 font-serif tracking-widest">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
            <p className="text-lg md:text-xl leading-[2.8rem] text-gray-800 text-right font-serif font-medium" dir="rtl">
              <span className="text-[#0f4c75] font-bold">السلام علیکم!</span> میں آپ کو اپنے آفیشل ویب سائیٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے 'نور القرآن ویژول' جیسے عظیم پروجیکٹ سے لے کر میرے صحافتی کیریئر، فرھنگی خدمات، سوشل مصروفیات، ادبی کتب، میڈیا اور دستاویزی فلموں کا آن لائن مجموعہ ملے گا۔ 
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full my-6"></div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
              <span className="text-[#0f4c75] font-bold">میرا عزم:</span> دین خدا اور مخلوق خدا کی خدمت، محبت، امن اور آشتی کا فروغ ہے۔
            </p>
            <div className="text-center pt-4">
               <span className="text-[#0f4c75] font-bold text-2xl border-b-4 border-[#D4AF37] pb-2 px-8 py-2 font-serif hover:text-[#D4AF37] transition duration-300">حاجی شبیر احمد شگری</span>
            </div>
          </div>
        </div>
      </div>

      {/* نیویگیشن (Quick Navigation) */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-3 px-8 rounded-lg font-serif tracking-widest animate-fadeInUp">Quick Navigation</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <NavCard icon={<FaBookOpen/>} title="نور القرآن" desc="Visual Quran" delay="0ms" />
          <NavCard icon={<FaYoutube/>} title="نور پروڈکشنز" desc="Media Network" delay="100ms" />
          <NavCard icon={<FaHandshake/>} title="پاک ایران دوستی" desc="Friendship" delay="200ms" />
          <NavCard icon={<FaGlobe/>} title="ویب سائٹ" desc="Web Portal" delay="300ms" />
        </div>
      </section>

      {/* نور القرآن ہائی لائٹ */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="bg-gradient-to-r from-[#0f4c75] to-[#1e6091] rounded-3xl p-2 shadow-2xl border-2 border-[#D4AF37] hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition duration-500 animate-fadeInUp">
          <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start w-full">
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md mb-4 animate-pulse">🌍 WORLD'S FIRST</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mt-4 mb-4 font-serif">📖 Noor-ul-Quran Project</h3>
              <p className="text-gray-600 mb-4 italic text-lg">A historic milestone: The world's first verse-by-verse Visual Quran translation.</p>
              <p className="text-[#0f4c75] text-lg font-bold mb-6 text-right w-full leading-relaxed bg-blue-50/50 p-4 rounded-lg border-2 border-[#D4AF37]/20" dir="rtl">نورالقرآن ویژول کا مقصد قرآن مجید کو سن کر اور دیکھ کر قرآنی آیات کو سمجھنا ہے۔ ان شاء اللہ</p>
              <div className="w-full flex justify-center md:justify-start">
                  <button className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:shadow-lg text-white font-bold py-4 px-12 rounded-full shadow-lg transition transform hover:scale-105 duration-300 border-2 border-white hover:border-[#0f4c75]">Visit Project</button>
              </div>
            </div>
            <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png" alt="Quran Logo" className="w-40 md:w-56 rounded-2xl shadow-2xl border-4 border-[#D4AF37] order-1 md:order-2 transform hover:scale-110 transition duration-500" />
          </div>
        </div>
      </section>

      {/* اعزازات (Honors) */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#0f4c75] font-serif animate-fadeInUp">Distinguished Honors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#996D00] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden group border-2 border-white/30 transition duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8 group-hover:scale-150 transition duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-3"><FaMedal size={28} className="text-white drop-shadow-lg"/> Khadim-e-Imam Reza</h3>
                <p className="mt-3 text-base opacity-95 leading-relaxed font-medium">Honorary Servant at<br/><strong className="text-xl">Holy Shrine, Mashhad</strong></p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#996D00] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden group border-2 border-white/30 transition duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8 group-hover:scale-150 transition duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-3"><FaTrophy size={28} className="text-white drop-shadow-lg"/> Khadim-e-Ghazi Abbas</h3>
                <p className="mt-3 text-base opacity-95 leading-relaxed font-medium">Honorary Servant at<br/><strong className="text-xl">Holy Shrine, Karbala</strong></p>
              </div>
            </div>
        </div>
      </section>

      {/* --- LEGENDS (Videos) --- */}
      <section className="bg-gradient-to-r from-black via-slate-900 to-black py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-repeat-x border-b-4 border-[#D4AF37]/30" style={{backgroundImage: 'linear-gradient(to right, #000 50%, #333 50%)', backgroundSize: '20px 100%'}}></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-repeat-x border-t-4 border-[#D4AF37]/30" style={{backgroundImage: 'linear-gradient(to right, #000 50%, #333 50%)', backgroundSize: '20px 100%'}}></div>

        <div className="container mx-auto px-4 relative z-10 my-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif tracking-widest inline-block border-b-4 border-[#D4AF37] pb-4 drop-shadow-lg animate-fadeInUp">
               نامور شخصیات کے تأثرات
             </h2>
             <p className="text-gray-400 mt-4 text-base italic">Impressions of Renowned Personalities | شہرہ آفاق شخصیات</p>
          </div>
          
          <div className="relative max-w-[98%] mx-auto">
            <button onClick={() => scrollContainer(legendScrollRef, 'left')} className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-black p-4 rounded-full shadow-2xl transition active:scale-90 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"><FaChevronLeft size={24} /></button>
            <button onClick={() => scrollContainer(legendScrollRef, 'right')} className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-black p-4 rounded-full shadow-2xl transition active:scale-90 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"><FaChevronRight size={24} /></button>

            <div ref={legendScrollRef} className="flex overflow-x-auto gap-8 scrollbar-hide px-4 py-8 snap-x scroll-smooth">
                {legends.map((item, i) => (
                    <CinematicCard key={i} img={item.img} video={item.video} name={item.name} role={item.role} setVideo={setActiveVideo} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BOOKS --- */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-4 px-8 font-serif animate-fadeInUp">Featured Books</h2>
          <p className="text-gray-600 mt-3 text-base">Explore 8+ Published Works | قابلِ مطالعہ کتب</p>
        </div>
        <div className="bg-gradient-to-r from-[#fffbf0] via-white to-[#fffbf0] p-10 rounded-3xl shadow-xl border-2 border-[#D4AF37] relative group hover:shadow-2xl transition duration-500">
           <button onClick={() => scrollContainer(bookScrollRef, 'left')} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] hover:bg-[#B8860B] text-white p-3 rounded-full shadow-lg transition hover:shadow-xl hover:scale-110"><FaChevronLeft size={20} /></button>
           <button onClick={() => scrollContainer(bookScrollRef, 'right')} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] hover:bg-[#B8860B] text-white p-3 rounded-full shadow-lg transition hover:shadow-xl hover:scale-110"><FaChevronRight size={20} /></button>
           <div ref={bookScrollRef} className="flex overflow-x-auto gap-8 scrollbar-hide px-12 py-4 snap-x scroll-smooth">
               {books.map((item, i) => (
                   <BookCinematicCard key={i} img={item.img} title={item.title} year={item.year} />
               ))}
           </div>
        </div>
      </section>

      {/* سفر (Professional Journey) */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 border-t-2 border-b-2 border-[#D4AF37] relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0f4c75] font-serif">Professional Journey</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto mt-6 rounded-full shadow-lg"></div>
            <p className="text-gray-600 mt-4 text-base">45 Years of Service | خدمت کے 45 سال</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <JourneyCard icon={<FaMicrophone/>} title="Radio Pakistan" desc="Start of Career at Radio Pakistan Skardu. The Golden Voice of GB." delay="0ms" />
             <JourneyCard icon={<FaNewspaper/>} title="Journalism (45 Years)" desc="Deputy Editor: Daily Havi, Akath & Prachar. 300+ Articles published." delay="100ms" />
             <JourneyCard icon={<FaTv/>} title="TV Talk Shows" desc="Host & Guest on numerous National & International TV Talk Shows." delay="200ms" />
             <JourneyCard icon={<FaHandshake/>} title="Cultural Diplomacy" desc="Ex-PRO & In-charge of Other Departments at Khana Farhang Iran." delay="300ms" />
             <JourneyCard icon={<FaBookOpen/>} title="Books & Author" desc="Author of 9+ books including 'Booy-e-Bahisht' and 'Khorasan-e-Razavi'." delay="400ms" />
             <JourneyCard icon={<FaPlane/>} title="Tourism Pioneer" desc="Launched First Cultural Tourism to Iran. Author of 'Siahat-e-Iran'." delay="500ms" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// --- Components (یہ بھی ساتھ ہیں) ---
function CinematicCard({ img, video, name, role, setVideo }) {
    return (
      <div style={{ minWidth: '280px', width: '280px', height: '180px' }} className="flex-shrink-0 relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-110 hover:z-50 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] group border-4 border-[#D4AF37]/50 hover:border-[#D4AF37] snap-center bg-black" onClick={() => setVideo(video)}>
        <img src={img} alt={name} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition duration-500 scale-100 group-hover:scale-110" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-10 bg-black/30">
            <div className="bg-[#D4AF37] text-black rounded-full p-4 shadow-2xl group-hover:scale-125 transition duration-500"><FaPlay size={20} /></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pb-3 px-2 text-center z-20">
            <h3 className="text-[#D4AF37] font-bold text-xs md:text-sm drop-shadow-[0_2px_3px_rgba(0,0,0,1)] tracking-wide leading-tight">{name}</h3>
            <p className="text-gray-300 text-[10px] mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,1)] uppercase tracking-wider">{role}</p>
        </div>
      </div>
    );
}

function BookCinematicCard({ img, title, year }) {
    return (
      <div className="min-w-[150px] h-[240px] relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-110 hover:z-50 hover:shadow-2xl group border-3 border-[#D4AF37] snap-center bg-white hover:border-[#B8860B]">
         <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-125 transition duration-500" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c75] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0f4c75] to-[#0f4c75]/50 p-3 text-center opacity-0 group-hover:opacity-100 transition duration-300 translate-y-4 group-hover:translate-y-0">
            <p className="text-white text-sm font-bold font-serif">{title}</p>
            {year && <p className="text-[#D4AF37] text-xs font-medium mt-1">{year}</p>}
         </div>
      </div>
    );
}

function NavCard({ icon, title, desc, delay }) {
  return (
    <div style={{ animationDelay: delay }} className="bg-white border-3 border-[#D4AF37] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition duration-500 cursor-pointer group hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B]">
      <div className="text-4xl text-[#D4AF37] mb-3 group-hover:scale-125 transition duration-500 group-hover:text-white drop-shadow-md">{icon}</div>
      <h3 className="font-bold text-gray-800 group-hover:text-white transition text-sm md:text-base">{title}</h3>
      <span className="text-xs text-gray-500 mt-2 group-hover:text-white/80 font-medium">{desc}</span>
    </div>
  );
}

function JourneyCard({ icon, title, desc, delay }) {
  return (
    <div style={{ animationDelay: delay }} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-500 border-3 border-[#D4AF37] group hover:border-[#0f4c75] animate-fadeInUp">
      <div className="bg-gradient-to-r from-[#f0f4f8] to-white p-6 flex items-center gap-4 border-b-2 border-[#D4AF37] group-hover:border-[#0f4c75] transition">
        <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white p-3 rounded-full shadow-md group-hover:scale-110 transition duration-500">{icon}</div>
        <h3 className="font-bold text-[#0f4c75] text-base md:text-lg">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-[#0f4c75] font-medium transition">{desc}</p>
      </div>
    </div>
  );
}