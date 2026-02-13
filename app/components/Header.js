"use client";
import { useState, useEffect } from 'react';
import { 
  FaHome, FaBookOpen, FaPhoneAlt, FaUserAlt, 
  FaImages, FaNewspaper, FaTv, FaBriefcase,
  FaYoutube, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 1. سب سے اوپر والی بار
export function Navbar() {
  return (
    <div className="bg-[#0b314d] text-[#D4AF37] text-center py-1.5 text-[11px] md:text-sm arabic-text tracking-widest border-b border-[#D4AF37]/30 relative z-50">
      مَاشَاءَ اللّٰہُ لَا قُوَّۃَ اِلَّا بِاللّٰہِ الْعَلِیِّ الْعَظِیْمِ
    </div>
  );
}

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
    { icon: <FaYoutube />, link: "https://youtube.com/@noorproduction", color: "text-red-600" },
    { icon: <FaFacebook />, link: "https://facebook.com/shigri51214", color: "text-blue-500" },
    { icon: <FaWhatsapp />, link: "https://wa.me/923334491715", color: "text-green-500" },
    { icon: <FaInstagram />, link: "#", color: "text-pink-500" },
    { icon: <FaTwitter />, link: "https://x.com/shigri41215", color: "text-sky-400" },
  ];

  const isActive = (link) => pathname === link;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col w-full shadow-lg bg-[#0b314d]">
      
      {/* سلائیڈر */}
      <div className="relative w-full bg-black overflow-hidden group">
        {slides.map((s, i) => (
          <div key={i} className={`transition-opacity duration-1000 ease-in-out ${i === current ? 'block' : 'hidden'}`}>
            <img src={s.img} alt="Slide" className="w-full h-auto object-contain block transform group-hover:scale-105 transition duration-700" />
          </div>
        ))}
      </div>

      {/* نام اور ٹائٹل */}
      <div className="bg-[#0f4c75] py-3 px-2 text-center border-t border-[#D4AF37]/50 relative z-10 flex flex-col items-center justify-center gap-1 overflow-hidden">
        <h1 className="text-xl md:text-4xl font-bold text-[#D4AF37] tracking-wide drop-shadow-md leading-none font-serif hover:scale-105 transition duration-500 cursor-default">
          Haji Shabbir Ahmed Shigri
        </h1>
        
        <p className="text-white/90 text-[10px] md:text-sm tracking-widest font-light uppercase">
          Senior Journalist | Cultural Expert | Chief Executive Noor Productions
        </p>
        
        {/* سوشل آئیکنز - سائز تھوڑا کم کر دیا گیا ہے */}
        <div className="flex gap-3 mt-1">
          {socialLinks.map((s, i) => (
            <Link key={i} href={s.link} target="_blank" className="bg-white/10 p-1.5 md:p-2 rounded-full hover:bg-white hover:scale-110 hover:rotate-[360deg] transition-all duration-500 shadow-sm">
              <span className={`text-sm md:text-lg ${s.color}`}>{s.icon}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* مینو بار - ڈیسک ٹاپ کے لیے سائز ایڈجسٹ کر دیا گیا ہے */}
      <div className="bg-[#0b314d] py-2 px-1 border-t border-[#D4AF37]/20">
        <nav className="flex flex-wrap justify-center gap-1.5 md:gap-3" dir="rtl">
          {menuItems.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.link} 
              className={`flex flex-col items-center justify-center p-1.5 md:p-2 rounded-xl transition-all duration-300 min-w-[65px] md:min-w-[80px] 
                hover:z-20 group relative
                ${isActive(item.link) 
                  ? 'bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-[#0f4c75] shadow-lg scale-105' 
                  : 'bg-white/5 text-white/90 hover:bg-[#D4AF37] hover:text-[#0f4c75] hover:scale-110 hover:-translate-y-1'}`}
            >
              {/* آئیکن کا سائز یہاں کم کیا گیا ہے (text-lg سے text-2xl تک) */}
              <span className="text-lg md:text-2xl mb-1 transition-transform duration-500 group-hover:rotate-[12deg] group-hover:scale-115">
                {item.icon}
              </span>
              
              <span className="urdu-text text-[10px] md:text-xs whitespace-nowrap font-bold">
                {item.name}
              </span>

              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"></div>
            </Link>
          ))}
        </nav>
      </div>

      <style jsx global>{`
        @keyframes open-book {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-15deg); }
        }
        .group:hover .fa-book-open {
          animation: open-book 0.5s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}