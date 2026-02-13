"use client";
import { useState, useEffect } from 'react';
import { 
  FaHome, FaBookOpen, FaPhoneAlt, FaUserAlt, 
  FaImages, FaNewspaper, FaTv, FaBriefcase,
  FaYoutube, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaSearch
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 1. سب سے اوپر والی بار (صرف آیت مبارکہ)
export function Navbar() {
  return (
    <div className="bg-[#0b314d] text-[#D4AF37] text-center py-1 text-[10px] md:text-sm font-serif italic tracking-widest border-b border-[#D4AF37]/30 relative z-50">
      مَاشَاءَ اللّٰہُ لَا قُوَّۃَ اِلَّا بِاللّٰہِ الْعَلِیِّ الْعَظِیْمِ
    </div>
  );
}

// 2. ہیرو سلائیڈر + نام + سوشل + مینو
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
    { name: "گھر", link: "/", icon: <FaHome /> },
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
    { icon: <FaYoutube />, link: "#", color: "text-red-600" },
    { icon: <FaFacebook />, link: "#", color: "text-blue-500" },
    { icon: <FaWhatsapp />, link: "#", color: "text-green-500" },
    { icon: <FaInstagram />, link: "#", color: "text-pink-500" },
    { icon: <FaTwitter />, link: "#", color: "text-sky-400" },
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
      <div className="relative w-full bg-black">
        {slides.map((s, i) => (
          <div key={i} className={`transition-opacity duration-1000 ease-in-out ${i === current ? 'block' : 'hidden'}`}>
            <img src={s.img} alt="Slide" className="w-full h-auto object-contain block" />
          </div>
        ))}
      </div>

      {/* نام اور ٹائٹل */}
      <div className="bg-[#0f4c75] py-3 px-2 text-center border-t border-[#D4AF37]/50 relative z-10 flex flex-col items-center justify-center gap-2">
        <h1 className="text-xl md:text-4xl font-bold text-[#D4AF37] font-serif tracking-wide drop-shadow-md leading-none">
          Haji Shabbir Ahmed Shigri
        </h1>
        
        <p className="text-white/90 text-[10px] md:text-sm tracking-wide font-light">
          Senior Journalist | Cultural Expert | Chief Executive Noor Productions
        </p>
        
        {/* سوشل آئیکنز */}
        <div className="flex gap-3 mt-1">
          {socialLinks.map((s, i) => (
            <Link key={i} href={s.link} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all shadow-sm">
              <span className={`text-base md:text-xl ${s.color}`}>{s.icon}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* مینو بار */}
      <div className="bg-[#0b314d] py-2 px-1 border-t border-[#D4AF37]/20">
        <nav className="flex flex-wrap justify-center gap-1 md:gap-4" dir="rtl">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.link} className={`flex flex-col items-center justify-center p-1 rounded-lg transition-all duration-300 w-[20%] md:w-auto hover:-translate-y-1 ${isActive(item.link) ? 'bg-[#D4AF37] text-[#0f4c75] shadow-sm font-bold scale-105' : 'bg-white/5 text-white/90 hover:bg-white/10'}`}>
              <span className="text-lg md:text-xl mb-0.5">{item.icon}</span>
              <span className="text-[9px] md:text-xs whitespace-nowrap">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}