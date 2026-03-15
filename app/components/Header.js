"use client";
import { useState, useEffect, useRef } from 'react';
import { 
  FaHome, FaBookOpen, FaPhoneAlt, FaUserAlt, 
  FaImages, FaNewspaper, FaTv, FaBriefcase,
  FaYoutube, FaFacebook, FaWhatsapp, FaTwitter, FaTiktok, 
  FaSearch, FaGlobe, FaAward,
  FaHandshake, FaLandmark, FaUsers, FaPalette, FaMicrophone, FaStop 
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// 🔴 1. ٹاپ بار (برابر سائز کے لینگویج بٹنز کے ساتھ)
export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState('ur'); 
  const router = useRouter(); 
  const recognitionRef = useRef(null);

  // مائیکروفون سیٹ اپ
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'ur-PK';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setSearchQuery(transcript);
          router.push(`/search?q=${encodeURIComponent(transcript)}`);
        };

        recognition.onerror = (event) => {
          console.error("Mic Error:", event.error);
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, [router]);

  // مائیکروفون کو ایکٹیویٹ کرنے کا طریقہ
  const toggleListening = async () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(track => track.stop());
        setTimeout(() => {
          recognitionRef.current.start();
        }, 150);
      } catch (err) {
        alert("براہ کرم براؤزر کی سیٹنگ سے مائیک کی اجازت دیں");
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-[#0b314d] text-[#D4AF37] px-2 md:px-6 border-b border-[#D4AF37]/30 relative z-50 flex items-center justify-between h-[45px]">
      <style>{`
        @keyframes wave-grow { 0%, 100% { height: 4px; } 50% { height: 14px; } }
        .wave-bar { width: 2px; background-color: #ef4444; margin: 0 1px; border-radius: 2px; animation: wave-grow 1s infinite ease-in-out; }
      `}</style>

      {/* 🔍 سرچ اور مائیک */}
      <div className="flex items-center">
        <form onSubmit={handleSearch} className="relative flex items-center rounded-full border border-[#D4AF37]/40 bg-[#0f4c75]/50 w-[120px] md:w-[280px] h-[30px]" dir="rtl">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isListening ? "سن رہا ہوں..." : "تلاش..."} 
            className="w-full bg-transparent text-white text-[12px] pr-8 pl-10 outline-none"
          />
          <FaSearch className="absolute right-2 text-[12px]" />
          <button type="button" onClick={toggleListening} className="absolute left-2 text-[#D4AF37]">
            {isListening ? (
              <div className="flex items-center">
                <div className="wave-bar"></div>
                <div className="wave-bar" style={{animationDelay:'0.2s'}}></div>
                <FaStop className="text-red-500 ml-1" />
              </div>
            ) : <FaMicrophone />}
          </button>
        </form>
      </div>

      {/* 🕋 ماشاءاللہ */}
      <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <span className="text-[11px] md:text-[18px] font-bold text-white whitespace-nowrap">
          مَاشَاءَ اللّٰہُ لَا قُوَّۃَ اِلَّا بِاللّٰہِ
        </span>
      </div>

      {/* 🌐 انگلش اور فارسی کے آپشنز (دونوں بالکل برابر سائز میں) */}
      <div className="flex items-center gap-1.5 z-10" dir="ltr">
        <button 
          onClick={() => setLanguage('en')} 
          className={`w-[45px] md:w-[55px] text-[10px] md:text-[12px] py-0.5 rounded border transition-colors font-bold text-center ${language === 'en' ? 'bg-[#D4AF37] text-[#0b314d] border-[#D4AF37]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0b314d]'}`}
        >
          ENG
        </button>
        <button 
          onClick={() => setLanguage('fa')} 
          className={`w-[45px] md:w-[55px] text-[10px] md:text-[12px] py-0.5 rounded border transition-colors font-bold text-center ${language === 'fa' ? 'bg-[#D4AF37] text-[#0b314d] border-[#D4AF37]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0b314d]'}`}
        >
          فارسی
        </button>
      </div>
    </div>
  );
}

// 🔴 2. مین ہیڈر اور سلائیڈر
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
    { icon: <FaYoutube />, link: "https://youtube.com/@noorproduction", color: "hover:text-red-500" },
    { icon: <FaFacebook />, link: "https://facebook.com/shigri51214", color: "hover:text-blue-600" },
    { icon: <FaWhatsapp />, link: "https://wa.me/923334491715", color: "hover:text-green-500" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@noorproductions786?_r=1&_t=ZS-947NqSEZDCZ", color: "hover:text-pink-500" },
    { icon: <FaTwitter />, link: "https://x.com/shigri41215", color: "hover:text-sky-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col w-full bg-[#0b314d] overflow-hidden relative">
      
      {/* 📸 سلائیڈر */}
      <div className="relative w-full aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5.5] overflow-hidden bg-[#0b314d]">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${i === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
            <img src={s.img} alt="Slide" className="w-full h-full object-fill block" />
          </div>
        ))}
      </div>

      {/* 🔹 مرکزی سیکشن */}
      <div className="bg-[#0f4c75] py-2 px-2 text-center border-t border-[#D4AF37]/30 relative z-40 flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        
        {/* قرآن لوگو اینیمیشن */}
        <div className="relative z-10 mt-1 animate-shrink-enter">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#D4AF37] blur-[30px] opacity-30 animate-pulse"></div>
           <div className="relative text-[#D4AF37] text-2xl md:text-3xl drop-shadow-md animate-breath">
             <FaBookOpen />
           </div>
        </div>

        <div className="relative z-10">
          <p className="font-amiri text-white text-[9px] md:text-[12px] font-bold tracking-wide mt-1">
              اَللّٰهُ نُوْرُ السَّمٰوٰتِ وَالْاَرْضِ
          </p>
        </div>

        <div className="flex flex-col items-center mt-2">
          <h1 className="text-xl md:text-3xl font-bold text-[#D4AF37] tracking-wider uppercase drop-shadow-lg leading-tight">
            Haji Shabbir Ahmed Shigri
          </h1>
          <p className="text-white text-[8px] md:text-[11px] font-semibold tracking-tight border-t border-[#D4AF37]/30 pt-1 mt-1 uppercase flex flex-row-reverse flex-wrap justify-center gap-x-2 md:gap-x-3" dir="rtl">
            <span>Founder Noor-ul-Quran Project</span>
            <span className="opacity-50">|</span>
            <span>CEO Noor Productions</span>
            <span className="opacity-50">|</span>
            <span>Senior Journalist</span>
            <span className="opacity-50">|</span>
            <span>Gold Medalist</span>
          </p>
        </div>

        <div className="flex gap-4 mt-2 justify-center z-50">
          {socialLinks.map((s, i) => (
            <Link key={i} href={s.link} target="_blank" className="text-white transition-all duration-500 hover:rotate-[360deg] hover:scale-125">
              <span className={`text-base md:text-lg block drop-shadow-md ${s.color}`}>{s.icon}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 🧭 مینو بار */}
      <div className="bg-[#0b314d] py-3 px-2 border-t border-[#D4AF37]/30 shadow-md relative z-40">
        <nav className="flex flex-wrap justify-center gap-x-2 md:gap-x-3.5 gap-y-2.5 items-center" dir="rtl">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.link} className={`group relative flex flex-row items-center gap-1.5 px-1.5 md:px-2 py-1 transition-all duration-500 ${pathname === item.link ? 'text-[#D4AF37]' : 'text-white/80 hover:text-white'}`}>
              <span className="text-xs md:text-sm transition-all duration-500 group-hover:scale-[1.3] group-hover:-translate-y-1 group-hover:rotate-[360deg] group-hover:text-[#D4AF37] z-10">
                {item.icon}
              </span>
              <span className="urdu-text text-[10px] md:text-[12px] font-bold">
                {item.name}
              </span>
              <div className={`absolute bottom-0 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 ${pathname === item.link ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
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
          50% { transform: scale(1.1); }
        }
        .animate-breath {
          animation: breath 3s infinite ease-in-out;
        }
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