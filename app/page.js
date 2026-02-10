"use client";
import { useState, useEffect, useRef } from 'react';
import { FaYoutube, FaFacebookF, FaWhatsapp, FaBookOpen, FaHandshake, FaGlobe, FaMedal, FaTrophy, FaMicrophone, FaNewspaper, FaTv, FaPlay, FaEnvelope, FaMapMarkerAlt, FaTimes, FaBars, FaPlane, FaArrowUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6"; 
import { BiSolidMoviePlay } from "react-icons/bi";

// --- ٹاپ نیویگیشن مینو ---
// --- ٹاپ نیویگیشن مینو (اپ ڈیٹڈ لنکس کے ساتھ) ---
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // یہاں ہم نے نام کے ساتھ لنک بھی بتا دیا ہے
  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "LANGUAGE", link: "#" }, // فی الحال اسے ہیش رکھا ہے
    { name: "NOOR-UL-QURAN", link: "/noor-ul-quran" },
    { name: "ABOUT ME", link: "/about" },
    { name: "CHANNELS", link: "/channels" },
    { name: "GALLERY", link: "/gallery" },
    { name: "LIBRARY", link: "/library" },
    { name: "ARTICLES & COLUMNS", link: "/article" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "/contact" }
  ];

  return (
    <nav className="bg-[#0f4c75] text-white border-b-4 border-[#D4AF37] sticky top-0 z-50 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="md:hidden font-bold text-[#D4AF37]">Haji Shabbir Shigri</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 w-full justify-center">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.link} // یہاں لنک سیٹ ہو رہا ہے
                className="text-xs lg:text-sm font-semibold hover:text-[#D4AF37] transition duration-300 border-b-2 border-transparent hover:border-[#D4AF37] pb-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#D4AF37] focus:outline-none">
            <FaBars size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a3552] p-4 space-y-2 border-t border-[#D4AF37]">
          {menuItems.map((item, index) => (
            <a key={index} href={item.link} className="block text-sm hover:text-[#D4AF37] py-1">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// --- ہیڈر سلائیڈر ---
function HeroSlider() {
  const slides = [
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/5_s7hgrb.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/3_fm3ja9.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104582/6_oqageq.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden shadow-2xl bg-[#D4AF37] border-b-4 border-[#D4AF37]">
      <div className="absolute top-2 left-0 w-full z-20 flex justify-center">
        <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-1 border border-[#D4AF37]/50">
          <p className="text-white text-[10px] md:text-xs font-bold opacity-90 tracking-widest shadow-sm">
            ✨ مَا شَآءَ اللّٰهُۙ - لَا قُوَّةَ اِلَّا بِاللّٰهِ ✨
          </p>
        </div>
      </div>
      {slides.map((slide, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-[#D4AF37] mix-blend-overlay opacity-20 z-10"></div>
          <img src={slide} alt="Header" className="w-full h-full object-cover object-top" />
        </div>
      ))}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f4c75]/90 to-transparent z-10"></div>
    </div>
  );
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
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [showScroll]);

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  // --- DATA ARRAYS ---
  const books = [
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png", title: "سکون کی تلاش" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png", title: "بوئے بہشت" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png", title: "روح کی معراج" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png", title: "کنجی بہشت" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png", title: "سیاحت ایران" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Book_Khorasan-e-Razavi_b9nqdb.bmp", title: "خراسان رضوی" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png", title: "مجلہ فرھنگستان" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png", title: "مدینۃ الاہلبیتؑ" } 
  ];

  // --- LEGENDS ---
  const legends = [
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4", name: "Mian Manzoor Watoo", role: "Ex-Chief Minister" },
    { img: "https://img.youtube.com/vi/OXyJA7IoUwY/hqdefault.jpg", video: "https://youtu.be/OXyJA7IoUwY", name: "Pir Usman Shah Noori", role: "Peace Committee" },
    { img: "https://img.youtube.com/vi/l1qwlEN1gQo/hqdefault.jpg", video: "https://youtu.be/l1qwlEN1gQo", name: "Pir Burhanuddin Usmani", role: "Usmani Foundation" },
    { img: "https://img.youtube.com/vi/6O5tyMv4Ahg/hqdefault.jpg", video: "https://youtu.be/6O5tyMv4Ahg", name: "Dr. M. Sadaqat Ali", role: "Religious Scholar" },
    
    // CENTER
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.mp4", name: "Pir Maoom H. Naqvi", role: "Senior Scholar" },

    { img: "https://img.youtube.com/vi/fW648rFweyM/hqdefault.jpg", video: "https://youtu.be/fW648rFweyM", name: "Sardar Sikandar Singh", role: "Sikh Leader" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", name: "Hafiz A.G. Roparhi", role: "Jamia Ahle Hadith" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.mp4", name: "Molana M. Khan Laghari", role: "Ahle Sunnat Scholar" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.mp4", name: "Pir G. Rasool Awesi", role: "Spiritual Leader" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-gray-800 font-sans relative">
      <Navbar />

      {/* Video Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 z-50 transition duration-300"><FaTimes /></button>
          <div className="w-full max-w-5xl bg-black rounded-none overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.5)] border-4 border-[#D4AF37]">
            {activeVideo.includes('youtu') ? (
               <iframe 
                 className="w-full h-[50vh] md:h-[70vh]" 
                 src={`https://www.youtube.com/embed/${activeVideo.split('/').pop().split('?')[0]}?autoplay=1`} 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
            ) : (
               <video controls autoPlay className="w-full h-auto max-h-[85vh]"><source src={activeVideo} type="video/mp4" /></video>
            )}
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <a href="https://wa.me/923334491715" target="_blank" className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 animate-bounce">
        <FaWhatsapp size={30} />
      </a>
      <button onClick={scrollTop} className={`fixed bottom-6 right-6 z-50 bg-[#0f4c75] text-[#D4AF37] p-3 rounded-full shadow-2xl hover:bg-[#D4AF37] hover:text-[#0f4c75] transition duration-300 border-2 border-[#D4AF37] ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <FaArrowUp size={24} />
      </button>

      <HeroSlider />

      {/* نام اور ٹائٹل */}
      <div className="bg-[#0f4c75] border-y-4 border-[#D4AF37] py-8 text-center shadow-xl relative z-20 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-2 font-serif drop-shadow-md">Haji Shabbir Ahmed Shigri</h1>
        <p className="text-xs md:text-lg text-white font-medium px-2 tracking-wide">Senior Journalist | Cultural Expert | Founder Noor-ul-Quran Project</p>
      </div>

      {/* --- سوشل میڈیا پٹی --- */}
      <div className="bg-[#0a2a42] text-white py-3 shadow-xl relative z-30 border-b-2 border-[#D4AF37]">
        <div className="container mx-auto px-4 flex justify-center gap-6 text-xl md:text-2xl">
           <a href="https://wa.me/923334491715" target="_blank" className="hover:text-[#25D366] transition transform hover:scale-110"><FaWhatsapp /></a>
           <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="hover:text-[#ff0050] transition transform hover:scale-110"><FaTiktok /></a>
           <a href="https://youtube.com/@noorproduction" target="_blank" className="hover:text-[#FF0000] transition transform hover:scale-110"><FaYoutube /></a>
           <a href="https://x.com/shigri41215" target="_blank" className="hover:text-white transition transform hover:scale-110"><FaXTwitter /></a>
           <a href="https://www.facebook.com/share/1GkBRptjDz/" target="_blank" className="hover:text-[#1877F2] transition transform hover:scale-110"><FaFacebookF /></a>
        </div>
      </div>

      {/* خوش آمدید */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="islamic-pattern rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border-4 border-[#D4AF37] p-8 md:p-12 text-center max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-[#D4AF37]/30">
            <h2 className="text-2xl font-bold text-[#0f4c75] mb-4">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
            <p className="text-lg md:text-xl leading-[2.8rem] text-gray-800 text-right font-serif font-medium" dir="rtl">
              السلام علیکم! میں آپ کو اپنے آفیشل ویب سائیٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے 'نور القرآن ویژول' جیسے عظیم پروجیکٹ سے لے کر میرے صحافتی کیریئر، فرھنگی خدمات، سوشل مصروفیات، ادبی کتب، میڈیا اور دستاویزی فلموں کا آن لائن مجموعہ ملے گا۔ میرا عزم دین خدا اور مخلوق خدا کی خدمت، محبت، امن اور آشتی کا فروغ ہے۔ میرا مقصد قلم، کیمرے اور اسکرین کی طاقت کو دین اسلام اور انسانیت کی بھلائی کے لیے استعمال کرنا ہے۔ امید ہے اس ویب سائٹ کے ذریعے علم و آگہی کے چراغ روشن کیے جا سکیں گے۔ امید ہے آپ ان کاوشوں کے بارے میں اپنی تجاویز سے حوصلہ افزائی فرمائیں گے اور اپنی دعاؤں میں یاد رکھیں گے۔
            </p>
            <div className="mt-8 text-center">
               <span className="text-[#0f4c75] font-bold text-2xl border-b-2 border-[#D4AF37] pb-1 font-serif">حاجی شبیر احمد شگری</span>
            </div>
          </div>
        </div>
      </div>

      {/* نیویگیشن */}
      <section className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
            <h2 className="text-center text-3xl font-bold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2 px-6 rounded-b-lg">Quick Navigation</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NavCard icon={<FaBookOpen/>} title="نور القرآن" desc="Visual Quran" />
          <NavCard icon={<FaYoutube/>} title="نور پروڈکشنز" desc="Media Network" />
          <NavCard icon={<FaHandshake/>} title="پاک ایران دوستی" desc="Friendship" />
          <NavCard icon={<FaGlobe/>} title="ویب سائٹ" desc="Web Portal" />
        </div>
      </section>

      {/* نور القرآن ہائی لائٹ */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-[#0f4c75] to-[#1e6091] rounded-2xl p-1 shadow-2xl border-2 border-[#D4AF37]">
          <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start w-full">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md mb-2 animate-pulse">WORLD'S FIRST</span>
              <h3 className="text-2xl md:text-4xl font-bold text-[#0f4c75] mt-2 mb-2">📖 Noor-ul-Quran Project</h3>
              <p className="text-gray-600 mb-4 italic">A historic milestone: The world's first verse-by-verse Visual Quran translation.</p>
              <p className="text-[#B8860B] text-lg font-bold mb-6 text-right w-full leading-relaxed" dir="rtl">نورالقرآن ویژول کا مقصد قرآن مجید کو سن کر اور دیکھ کر قرآنی آیات کو سمجھنا ہے۔ ان شاء اللہ</p>
              <div className="w-full flex justify-center md:justify-center">
                  <button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white font-bold py-3 px-12 rounded-full shadow-lg transition transform hover:scale-105 border-2 border-white">Visit Project</button>
              </div>
            </div>
            <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png" alt="Quran Logo" className="w-32 md:w-48 rounded-lg shadow-xl border-4 border-[#D4AF37] order-1 md:order-2" />
          </div>
        </div>
      </section>

      {/* اعزازات */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-center text-3xl font-bold mb-8 text-[#0f4c75]">Distinguished Honors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white p-6 rounded-xl shadow-lg transform hover:scale-105 cursor-pointer relative overflow-hidden group border border-white/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition duration-700"></div>
              <h3 className="text-xl font-bold flex items-center"><FaMedal className="mr-2 text-white"/> Khadim-e-Imam Reza (A.S)</h3>
              <p className="mt-2 text-sm opacity-90">Honorary Servant at<br/><strong>Holy Shrine, Mashhad</strong></p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white p-6 rounded-xl shadow-lg transform hover:scale-105 cursor-pointer relative overflow-hidden group border border-white/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition duration-700"></div>
              <h3 className="text-xl font-bold flex items-center"><FaTrophy className="mr-2 text-white"/> Khadim-e-Ghazi Abbas (A.S)</h3>
              <p className="mt-2 text-sm opacity-90">Honorary Servant at<br/><strong>Holy Shrine, Karbala</strong></p>
            </div>
        </div>
      </section>

      {/* --- LEGENDS (UPDATED: Landscape Size & Clear Text) --- */}
      <section className="bg-black py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-6 bg-repeat-x border-b-2 border-gray-800" style={{backgroundImage: 'linear-gradient(to right, #000 50%, #333 50%)', backgroundSize: '20px 100%'}}></div>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-repeat-x border-t-2 border-gray-800" style={{backgroundImage: 'linear-gradient(to right, #000 50%, #333 50%)', backgroundSize: '20px 100%'}}></div>

        <div className="container mx-auto px-4 relative z-10 my-6">
          <div className="text-center mb-12">
             <h2 className="text-4xl font-bold text-[#D4AF37] font-serif tracking-wide inline-block border-b-2 border-[#D4AF37] pb-3 drop-shadow-md">
                نامور شخصیات کے تأثرات
             </h2>
             <p className="text-gray-400 mt-2 text-sm">Impressions of Renowned Personalities</p>
          </div>
          
          <div className="relative max-w-[95%] mx-auto">
            <button onClick={() => scrollContainer(legendScrollRef, 'left')} className="absolute -left-5 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37]/80 hover:bg-[#D4AF37] text-black p-4 rounded-full shadow-lg transition active:scale-90"><FaChevronLeft size={24} /></button>
            <button onClick={() => scrollContainer(legendScrollRef, 'right')} className="absolute -right-5 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37]/80 hover:bg-[#D4AF37] text-black p-4 rounded-full shadow-lg transition active:scale-90"><FaChevronRight size={24} /></button>

            <div ref={legendScrollRef} className="flex overflow-x-auto gap-8 scrollbar-hide px-4 py-6 snap-x scroll-smooth items-start">
                {legends.map((item, i) => (
                    <CinematicCard key={i} img={item.img} video={item.video} name={item.name} role={item.role} setVideo={setActiveVideo} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BOOKS --- */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold mb-10 text-[#0f4c75] border-b-2 border-[#D4AF37] inline-block pb-2">Featured Books</h2>
        <div className="bg-gradient-to-r from-[#fffbf0] via-[#fff5d6] to-[#fffbf0] p-8 rounded-2xl shadow-xl border border-[#D4AF37] relative">
           <button onClick={() => scrollContainer(bookScrollRef, 'left')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] text-white p-2 rounded-full shadow-md hover:bg-[#0f4c75] transition"><FaChevronLeft size={16} /></button>
           <button onClick={() => scrollContainer(bookScrollRef, 'right')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] text-white p-2 rounded-full shadow-md hover:bg-[#0f4c75] transition"><FaChevronRight size={16} /></button>
           <div ref={bookScrollRef} className="flex overflow-x-auto gap-6 scrollbar-hide px-8 py-4 snap-x scroll-smooth">
                {books.map((item, i) => (
                    <BookCinematicCard key={i} img={item.img} title={item.title} />
                ))}
           </div>
        </div>
      </section>

      {/* سفر */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f4c75]">Professional Journey</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <JourneyCard icon={<FaMicrophone/>} title="Radio Pakistan" desc="Start of Career at Radio Pakistan Skardu. The Golden Voice of GB." />
             <JourneyCard icon={<FaNewspaper/>} title="Journalism (45 Years)" desc="Deputy Editor: Daily Havi, Akath & Prachar. 300+ Articles published." />
             <JourneyCard icon={<FaTv/>} title="TV Talk Shows" desc="Host & Guest on numerous National & International TV Talk Shows." />
             <JourneyCard icon={<FaHandshake/>} title="Cultural Diplomacy" desc="Ex-PRO & In-charge of Other Departments at Khana Farhang Iran." />
             <JourneyCard icon={<FaBookOpen/>} title="Books & Author" desc="Author of 9+ books including 'Booy-e-Bahisht' and 'Khorasan-e-Razavi'." />
             <JourneyCard icon={<FaPlane/>} title="Tourism Pioneer" desc="Launched First Cultural Tourism to Iran. Author of 'Siahat-e-Iran'." />
          </div>
        </div>
      </section>

      {/* فوٹر */}
      <footer className="bg-[#0f4c75] text-white pt-12 pb-6 border-t-8 border-[#D4AF37]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Contact Info - FIXED */}
            <div className="flex flex-col items-start text-left order-1" dir="ltr">
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37] border-b-2 border-[#D4AF37] inline-block pb-1">Contact Info</h3>
              <ul className="list-none p-0 m-0 space-y-4 text-sm w-full text-left">
                <li className="flex items-center gap-4">
                    <div className="w-8 flex justify-center flex-shrink-0"><FaMapMarkerAlt className="text-[#D4AF37] text-xl" /></div> 
                    <span className="text-left font-medium">Skardu, Pakistan</span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-8 flex justify-center flex-shrink-0"><FaWhatsapp className="text-[#D4AF37] text-xl" /></div> 
                    <span className="text-left font-medium">+92 333 4491715</span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-8 flex justify-center flex-shrink-0"><FaEnvelope className="text-[#D4AF37] text-xl" /></div> 
                    <span className="text-left font-medium">shigri@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="text-left md:pl-10 order-2">
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37] border-b-2 border-[#D4AF37] inline-block pb-1">Quick Links</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline hover:text-[#D4AF37]">Home</a></li>
                <li><a href="#" className="hover:underline hover:text-[#D4AF37]">Noor-ul-Quran Project</a></li>
                <li><a href="#" className="hover:underline hover:text-[#D4AF37]">My Books</a></li>
                <li><a href="#" className="hover:underline hover:text-[#D4AF37]">Contact Me</a></li>
              </ul>
            </div>

            {/* About */}
            <div className="text-left order-3">
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37] font-serif border-b-2 border-[#D4AF37] inline-block pb-1">Haji Shabbir Ahmed Shigri</h3>
              <p className="text-sm opacity-80 leading-relaxed mb-4">A lifetime dedicated to Journalism, Cultural Diplomacy, and the service of Quran & Ahlulbayt (A.S).</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-12 mb-6">
             <a href="https://www.facebook.com/share/1GkBRptjDz/" target="_blank" className="text-2xl hover:text-[#D4AF37] transition transform hover:scale-110"><FaFacebookF /></a>
             <a href="https://youtube.com/@noorproduction" target="_blank" className="text-2xl hover:text-[#D4AF37] transition transform hover:scale-110"><FaYoutube /></a>
             <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="text-2xl hover:text-[#D4AF37] transition transform hover:scale-110"><FaTiktok /></a>
             <a href="https://x.com/shigri41215" target="_blank" className="text-2xl hover:text-[#D4AF37] transition transform hover:scale-110"><FaXTwitter /></a>
             <a href="https://wa.me/923334491715" target="_blank" className="text-2xl hover:text-[#D4AF37] transition transform hover:scale-110"><FaWhatsapp /></a>
          </div>

          <div className="border-t border-blue-800 mt-2 pt-6 text-center text-sm opacity-70">
            <p>© 2025 Haji Shabbir Ahmed Shigri. All Rights Reserved.</p>
            <p className="mt-1 text-[#D4AF37] text-xs">Developed with ❤️ by Noor Productions</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- Cinematic Card (FIXED LANDSCAPE SIZE 16:9) ---
function CinematicCard({ img, video, name, role, setVideo }) {
    return (
      <div 
        // Fixed dimensions: Wide Landscape (280px x 180px)
        style={{ minWidth: '280px', width: '280px', height: '180px' }}
        className="flex-shrink-0 relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 hover:z-50 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] group border-[3px] border-black hover:border-[#D4AF37] snap-center bg-black"
        onClick={() => setVideo(video)}
      >
        <img src={img} alt={name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500" />
        
        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-10">
            <div className="bg-[#D4AF37] text-black rounded-full p-3 shadow-xl transform scale-50 group-hover:scale-100 transition duration-500"><FaPlay size={16} /></div>
        </div>

        {/* Text Overlay (Small & Clear) */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pb-2 px-1 text-center z-20">
            <h3 className="text-[#D4AF37] font-bold text-xs md:text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,1)] tracking-wide leading-tight">{name}</h3>
            <p className="text-gray-300 text-[10px] mt-0.5 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,1)] uppercase tracking-wider">{role}</p>
        </div>
      </div>
    );
}

// --- Book Cinematic Card ---
function BookCinematicCard({ img, title }) {
    return (
      <div className="min-w-[140px] h-[220px] relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 hover:z-50 hover:shadow-2xl group border-2 border-[#D4AF37] snap-center bg-white">
         <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0f4c75] to-transparent p-2 text-center opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-xs font-bold font-naskh">{title}</p>
         </div>
      </div>
    );
}

// --- دیگر کمپوننٹس ---

function NavCard({ icon, title, desc }) {
  return (
    <div className="bg-white border-2 border-[#D4AF37] p-4 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer group hover:bg-[#D4AF37] hover:border-[#0f4c75]">
      <div className="text-3xl text-[#D4AF37] mb-3 group-hover:scale-110 transition group-hover:text-[#0f4c75]">{icon}</div>
      <h3 className="font-bold text-gray-800 group-hover:text-[#0f4c75] transition">{title}</h3>
      <span className="text-xs text-gray-500 mt-1 group-hover:text-[#0f4c75]/80 font-medium">{desc}</span>
    </div>
  );
}

function JourneyCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 border-2 border-[#D4AF37] group hover:bg-[#D4AF37] hover:border-[#0f4c75]">
      <div className="bg-gray-50 p-4 flex items-center gap-3 border-b border-gray-200 group-hover:bg-[#D4AF37] transition group-hover:border-[#0f4c75]">
        <div className="bg-[#D4AF37] text-white p-2 rounded-full shadow-sm group-hover:bg-[#0f4c75] group-hover:text-[#D4AF37] transition">{icon}</div>
        <h3 className="font-bold text-[#0f4c75] group-hover:text-[#0f4c75]">{title}</h3>
      </div>
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-[#0f4c75] font-medium">{desc}</p>
      </div>
    </div>
  );
}

function BookCard({ img, title }) {
  return (
    <div className="min-w-[140px] md:min-w-[160px] flex flex-col items-center group cursor-pointer mx-3">
      <div className="w-full h-48 md:h-56 overflow-hidden rounded-lg shadow-md border-2 border-[#D4AF37] relative group-hover:border-[#0f4c75]">
         <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
      </div>
      <p className="mt-3 text-[#0f4c75] font-bold text-center group-hover:text-[#B8860B] transition font-naskh">{title}</p>
    </div>
  );
}