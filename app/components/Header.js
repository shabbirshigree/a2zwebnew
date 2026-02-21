"use client";
import { useState, useEffect } from 'react';
import { 
  FaHome, FaBookOpen, FaPhoneAlt, FaUserAlt, 
  FaImages, FaNewspaper, FaTv, FaBriefcase,
  FaYoutube, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter,
  FaSearch
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 🔴 1. ٹاپ بار (باریک پٹی، 3 بٹن اور چھوٹی سرچ بار کے ساتھ)
export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('ur');

  return (
    <div className="bg-[#0b314d] text-[#D4AF37] px-2 md:px-4 border-b border-[#D4AF37]/30 relative z-50 flex flex-row items-center justify-between h-[28px] md:h-[34px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer pointer-events-none"></div>
      
      {/* بائیں طرف (Left): چھوٹی سرچ بار */}
      <div className="relative flex items-center w-[75px] md:w-[120px] z-10">
        <input 
          type="text" 
          placeholder="تلاش..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/10 text-white placeholder-gray-400 text-[8px] md:text-[10px] rounded-full py-0.5 pr-5 pl-2 border border-[#D4AF37]/30 focus:outline-none focus:border-[#D4AF37] transition-all h-[18px] md:h-[22px]"
          dir="rtl"
        />
        <FaSearch className="absolute right-1.5 text-[#D4AF37] text-[8px] md:text-[10px] pointer-events-none" />
      </div>

      {/* درمیان (Center): عربی ٹیکسٹ */}
      <div className="flex-1 text-center px-1 z-10 flex items-center justify-center">
        <span className="text-[9px] md:text-[13px] font-bold arabic-text tracking-widest whitespace-nowrap hover:text-white transition-colors mt-0.5">
          مَاشَاءَ اللّٰہُ لَا قُوَّۃَ اِلَّا بِاللّٰہِ الْعَلِیِّ الْعَظِیْمِ
        </span>
      </div>

      {/* دائیں طرف (Right): 3 لینگویج بٹن */}
      <div className="flex items-center gap-0.5 md:gap-1 z-10" dir="ltr">
        <button 
          onClick={() => setLanguage('en')} 
          className={`text-[8px] md:text-[10px] px-1.5 py-[2px] rounded border border-[#D4AF37]/30 font-bold transition-all ${language === 'en' ? 'bg-[#D4AF37] text-[#0b314d]' : 'bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/20'}`}>
          ENG
        </button>
        <button 
          onClick={() => setLanguage('fa')} 
          className={`text-[8px] md:text-[10px] px-1.5 py-[2px] rounded border border-[#D4AF37]/30 font-bold urdu-text transition-all ${language === 'fa' ? 'bg-[#D4AF37] text-[#0b314d]' : 'bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/20'}`}>
          فارسی
        </button>
        <button 
          onClick={() => setLanguage('ur')} 
          className={`text-[8px] md:text-[10px] px-1.5 py-[2px] rounded border border-[#D4AF37]/30 font-bold urdu-text transition-all ${language === 'ur' ? 'bg-[#D4AF37] text-[#0b314d]' : 'bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/20'}`}>
          اردو
        </button>
      </div>

    </div>
  );
}

// 🔴 2. مین ہیڈر اور سلائیڈر (یہ بالکل آپ کے پرانے ڈیزائن پر ہے تاکہ پیج نیچے نہ جائے)
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
    { name: "ہوم", link: "/", icon: <FaHome /> },
    { name: "نور القرآن", link: "/project", icon: <FaBookOpen /> },
    { name: "تعارف", link: "/about", icon: <FaUserAlt /> }, 
    { name: "چینلز", link: "/channels", icon: <FaTv /> },
    { name: "گیلری", link: "/gallery", icon: <FaImages /> },
    { name: "لائبریری", link: "/library", icon: <FaBookOpen /> },
    { name: "کالمز", link: "/article", icon: <FaNewspaper /> },
    { name: "خدمات", link: "/services", icon: <FaBriefcase /> }, 
    { name: "رابطہ", link: "/contact", icon: <FaPhoneAlt /> }
  ];

  const socialLinks = [
    { icon: <FaYoutube />, link: "https://youtube.com/@noorproduction", color: "hover:text-red-500" },
    { icon: <FaFacebook />, link: "https://facebook.com/shigri51214", color: "hover:text-blue-600" },
    { icon: <FaWhatsapp />, link: "https://wa.me/923334491715", color: "hover:text-green-500" },
    { icon: <FaInstagram />, link: "#", color: "hover:text-pink-500" },
    { icon: <FaTwitter />, link: "https://x.com/shigri41215", color: "hover:text-sky-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col w-full bg-[#0b314d] m-0 p-0 overflow-hidden relative">
      
      {/* سلائیڈر سیکشن */}
      <div className="relative w-full aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5.5] overflow-hidden m-0 p-0 bg-[#0b314d]">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${i === current ? 'z-20 opacity-100' : 'z-10 opacity-0'}`}>
            <img src={s.img} alt="Slide" className="w-full h-full object-fill block m-0 p-0" />
            <div className="absolute inset-0 w-full h-full grid grid-cols-10 grid-rows-5 pointer-events-none z-30">
              {[...Array(50)].map((_, index) => (
                <div key={index} className="bg-[#0b314d] transition-all duration-[800ms] ease-in-out"
                  style={{ transitionDelay: i === current ? `${index * 20}ms` : '0ms', opacity: i === current ? 0 : 1, transform: i === current ? 'scale(0.95)' : 'scale(1)' }}>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* مرکزی سیکشن (ہیڈر کے نیچے) */}
      <div className="bg-[#0f4c75] py-2 px-2 text-center border-t border-[#D4AF37]/40 relative z-40 flex flex-col items-center justify-center gap-1 overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none animate-pulse-slow"></div>

        <div className="relative z-10 mt-1 animate-shrink-enter">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#D4AF37] blur-[30px] opacity-30 animate-pulse"></div>
           <div className="relative text-[#D4AF37] text-4xl md:text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-breath">
             <FaBookOpen />
           </div>
        </div>

        <div className="relative z-10 -mt-0.5">
          <p className="font-amiri text-white text-[10px] md:text-xs font-bold tracking-wide drop-shadow-md opacity-80 pt-1">
            اَللّٰهُ نُوْرُ السَّمٰوٰتِ وَالْاَرْضِ
          </p>
        </div>

        <div className="flex flex-col items-center z-10 mt-1">
          <h1 className="text-lg md:text-2xl font-bold text-[#D4AF37] tracking-wider uppercase drop-shadow-lg leading-tight">
            Haji Shabbir Ahmed Shigri
          </h1>
          <p className="text-white/70 text-[9px] md:text-xs tracking-[0.2em] font-light uppercase border-b border-[#D4AF37]/30 pb-1 mt-1">
             CEO Noor Productions | Senior Journalist
          </p>
        </div>

        <div className="flex gap-4 mt-2 justify-center z-50">
          {socialLinks.map((s, i) => (
            <Link key={i} href={s.link} target="_blank" className="text-white transition-all duration-500 hover:rotate-[360deg] hover:scale-125">
              <span className={`text-lg md:text-xl block drop-shadow-md ${s.color}`}>{s.icon}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* مینو بار */}
      <div className="bg-[#0b314d] py-2 px-2 border-t border-[#D4AF37]/30 shadow-md relative z-40">
        <nav className="flex flex-wrap justify-center gap-2 md:gap-5 items-center" dir="rtl">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.link} className={`group relative flex flex-row items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-500 ${pathname === item.link ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30' : 'text-gray-400 hover:text-white'}`}>
              <span className="text-lg md:text-xl transition-all duration-500 group-hover:scale-[1.5] group-hover:rotate-12 group-hover:text-[#D4AF37] z-10">
                {item.icon}
              </span>
              <span className="urdu-text text-[11px] md:text-xs font-bold relative z-10 transition-all duration-300 group-hover:translate-x-1">
                {item.name}
              </span>
              <div className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-500 ${pathname === item.link ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
            </Link>
          ))}
        </nav>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');

        .font-amiri { font-family: 'Amiri', serif; }

        @keyframes shrink-enter {
          0% { transform: scale(3); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-shrink-enter {
          animation: shrink-enter 1.5s ease-out forwards;
        }

        @keyframes breath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); } 
        }
        .animate-breath {
          animation: breath 3s infinite ease-in-out;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}