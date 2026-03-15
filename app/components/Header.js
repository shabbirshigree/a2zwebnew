"use client";
import { useState, useEffect } from 'react';
import { 
  FaHome, FaBookOpen, FaPhoneAlt, FaUserAlt, 
  FaImages, FaNewspaper, FaTv, FaBriefcase,
  FaYoutube, FaFacebook, FaWhatsapp, FaTwitter, FaTiktok, 
  FaSearch, FaGlobe, FaAward,
  FaHandshake, FaLandmark, FaUsers, FaPalette, FaMicrophone, FaStop 
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// 🔴 1. ٹاپ بار (سرچ، مائیک اور سینٹرڈ ماشاءاللہ)
export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const router = useRouter(); 

  const startListening = () => {
    // براؤزر کمپیٹیبلٹی چیک
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("معذرت، مائیک سپورٹڈ نہیں ہے۔ برائے مہربانی کروم یا ایج براؤزر استعمال کریں۔");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ur-PK';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      router.push(`/search?q=${encodeURIComponent(transcript)}`);
    };
    recognition.start();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-[#0b314d] text-[#D4AF37] px-2 md:px-6 border-b border-[#D4AF37]/30 relative z-50 flex items-center justify-between h-[45px] overflow-hidden">
      
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .shimmer-effect::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.15), transparent);
          animation: shimmer 3s infinite linear; pointer-events: none; z-index: 0;
        }
        @keyframes wave-grow { 0%, 100% { height: 4px; } 50% { height: 14px; } }
        .wave-bar { width: 2px; background-color: #ef4444; margin: 0 1px; border-radius: 2px; animation: wave-grow 1s infinite ease-in-out; }
      `}</style>

      {/* 🔍 سرچ بار */}
      <div className="flex items-center">
        <form 
          onSubmit={handleSearch} 
          className="relative flex items-center overflow-hidden rounded-full border border-[#D4AF37]/40 bg-[#0f4c75]/50 shimmer-effect w-[100px] sm:w-[130px] md:w-[280px] h-[28px] md:h-[32px] transition-all duration-500"
          dir="rtl"
        >
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isListening ? "سن رہا ہوں..." : "تلاش..."} 
            className="w-full bg-transparent text-white placeholder-gray-400 text-[10px] md:text-[13px] py-1 pr-7 pl-12 md:pl-16 outline-none urdu-text"
          />
          <button type="submit" aria-label="Search" className="absolute right-2 text-[#D4AF37] hover:scale-110">
            <FaSearch className="text-[10px] md:text-[13px]" />
          </button>
          
          <div className="absolute left-1 flex items-center h-full">
            {isListening && (
              <div className="flex items-center mr-1">
                <div className="wave-bar"></div><div className="wave-bar" style={{animationDelay:'0.2s'}}></div>
              </div>
            )}
            <button 
              type="button" 
              onClick={startListening} 
              aria-label="Voice Search"
              className={`p-1.5 rounded-full transition-all ${isListening ? 'text-red-500 bg-white/10' : 'text-[#D4AF37] hover:text-white'}`}
            >
              {isListening ? <FaStop className="text-[9px] md:text-[11px]" /> : <FaMicrophone className="text-[10px] md:text-[13px]" />}
            </button>
          </div>
        </form>
      </div>

      {/* 🕋 ماشاءاللہ - مکمل سینٹر */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <span className="text-[11px] md:text-[18px] font-bold arabic-text text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap block">
          مَاشَاءَ اللّٰہُ لَا قُوَّۃَ اِلَّا بِاللّٰہِ
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button className="text-[8px] md:text-[11px] font-bold px-2 py-[2px] rounded border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all">
          اردو
        </button>
      </div>
    </div>
  );
}

// 🔴 2. ہیرو سلائیڈر اور مینو
export function HeroSlider() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(0);

  const slides = [
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/5_s7hgrb.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/3_fm3ja9.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104582/6_oqageq.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png" }
  ];

  const menuItems = [
    { name: "ہوم", link: "/home", icon: <FaHome /> },
    { name: "نورالقرآن", link: "/project", icon: <FaBookOpen /> },
    { name: "تعارف", link: "/about", icon: <FaUserAlt /> }, 
    { name: "سفارتی خدمات", link: "/diplomatic-services", icon: <FaHandshake /> },
    { name: "ثقافتی خدمات", link: "/cultural", icon: <FaLandmark /> },
    { name: "اتحادِامت", link: "/unity", icon: <FaUsers /> },
    { name: "کالمز", link: "/article", icon: <FaNewspaper /> },
    { name: "لائبریری", link: "/library", icon: <FaBookOpen /> },
    { name: "ٹالک شوز", link: "/talkshows", icon: <FaMicrophone /> },
    { name: "چینلز", link: "/channels", icon: <FaTv /> },
    { name: "ایوارڈز", link: "/awards", icon: <FaAward /> },
    { name: "آرٹ و ہنر", link: "/design", icon: <FaPalette /> },
    { name: "گیلری", link: "/gallery", icon: <FaImages /> },
    { name: "خدمات", link: "/services", icon: <FaBriefcase /> }, 
    { name: "رابطہ", link: "/contact", icon: <FaPhoneAlt /> }
  ];

  const socialLinks = [
    { name: "YouTube", icon: <FaYoutube />, link: "https://youtube.com/@noorproduction", color: "hover:text-red-500" },
    { name: "Facebook", icon: <FaFacebook />, link: "https://facebook.com/shigri51214", color: "hover:text-blue-600" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/923334491715", color: "hover:text-green-500" },
    { name: "TikTok", icon: <FaTiktok />, link: "https://www.tiktok.com/@noorproductions786?_r=1&_t=ZS-947NqSEZDCZ", color: "hover:text-pink-500" },
    { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/shigri41215", color: "hover:text-sky-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col w-full bg-[#0b314d] overflow-hidden relative">
      <div className="relative w-full aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5.5] overflow-hidden bg-[#0b314d]">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${i === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
            {/* Added alt tag and loading attribute for better performance */}
            <img src={s.img} alt={`Slide ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} className="w-full h-full object-fill block" />
          </div>
        ))}
      </div>

      <div className="bg-[#0f4c75] py-2 px-2 text-center border-t border-[#D4AF37]/30 relative z-40 flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <p className="font-amiri text-white text-[9px] md:text-[12px] font-bold tracking-wide mt-1 animate-pulse">اَللّٰهُ نُوْرُ السَّمٰوٰتِ وَالْاَرْضِ</p>
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-xl md:text-4xl font-bold text-[#D4AF37] tracking-wider uppercase drop-shadow-lg leading-tight">Haji Shabbir Ahmed Shigri</h1>
          <p className="text-white text-[8px] md:text-[12px] font-semibold tracking-tight border-t border-[#D4AF37]/30 pt-1 mt-1 uppercase flex flex-row-reverse flex-wrap justify-center gap-x-2 md:gap-x-3" dir="rtl">
            <span>Founder Noor-ul-Quran Project</span><span className="opacity-50">|</span><span>CEO Noor Productions</span><span className="opacity-50">|</span><span>Senior Journalist</span><span className="opacity-50">|</span><span>Gold Medalist</span>
          </p>
        </div>
        <div className="flex gap-4 mt-2 justify-center z-50">
          {socialLinks.map((s, i) => (
            <Link key={i} href={s.link} target="_blank" aria-label={s.name} className="text-white transition-all duration-500 hover:rotate-[360deg] hover:scale-125">
              <span className={`text-base md:text-xl block drop-shadow-md ${s.color}`}>{s.icon}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#0b314d] py-3 px-2 border-t border-[#D4AF37]/30 shadow-md relative z-40">
        <nav className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-2 items-center" dir="rtl">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.link} className={`group relative flex flex-row items-center gap-1.5 px-2 py-1 transition-all duration-300 hover:scale-110 ${pathname === item.link ? 'text-[#D4AF37]' : 'text-white/80 hover:text-white'}`}>
              <span className="text-xs md:text-sm transition-all duration-500 group-hover:text-[#D4AF37]">{item.icon}</span>
              <span className="urdu-text text-[13px] md:text-[16px] font-bold">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        .font-amiri { font-family: 'Amiri', serif; }
        .arabic-text { font-family: 'Amiri', serif; }
      `}</style>
    </div>
  );
}

export default function Header() {
  return (
    <>
      <Navbar />
      <HeroSlider />
    </>
  );
}