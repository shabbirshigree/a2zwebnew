"use client";
import { useState, useEffect } from 'react';
import { 
  FaBars, FaSearch, FaHome, FaBookOpen, FaTimes,
  FaPhoneAlt, FaUserAlt, FaImages, FaNewspaper, FaTv, FaBriefcase 
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

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

  const isActive = (link) => pathname === link;

  return (
    <header className="sticky top-0 z-[100] shadow-2xl">
      {/* 1. بابرکت آیتِ مبارکہ */}
      <div className="bg-[#0b314d] text-[#D4AF37] text-center py-1.5 text-[9px] md:text-sm font-serif italic tracking-widest border-b border-[#D4AF37]/30 px-2">
        مَاشَاءَ اللّٰہُ لَا قُوَّۃَ اِلَّا بِاللّٰہِ الْعَلِیِّ الْعَظِیْمِ
      </div>

      <div className="backdrop-blur-md bg-[#0f4c75]/95 border-b-2 border-[#D4AF37]">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center relative">
          
          {/* موبائل مینو بٹن (بائیں طرف) */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 order-first">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* 2. سرچ باکس */}
          <div className="flex items-center gap-2 md:order-first">
            <button 
              onClick={() => setShowSearch(!showSearch)} 
              className="text-white hover:text-[#D4AF37] p-2 transition-colors"
            >
              <FaSearch size={18} />
            </button>
            {showSearch && (
              <input 
                type="text" 
                autoFocus
                placeholder="تلاش..." 
                className="bg-white/10 border border-[#D4AF37] text-white text-xs px-2 py-1 rounded outline-none w-20 md:w-40"
              />
            )}
          </div>

          {/* 3. پی سی مینو (ڈیسک ٹاپ) */}
          <nav className="hidden md:flex gap-1 items-center justify-end flex-1" dir="rtl">
            {menuItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link} 
                className={`group flex items-center gap-1.5 px-2 py-1.5 rounded-md transition-all duration-500 ${
                  isActive(item.link) ? 'bg-[#D4AF37] text-[#0f4c75]' : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                <span className="text-xl transition-all duration-500 group-hover:scale-150 group-hover:rotate-[10deg]">
                  {item.icon}
                </span>
                <span className="text-[10px] lg:text-[11px] font-bold whitespace-nowrap">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* لوگو یا نام (موبائل پر نظر آئے گا) */}
          <div className="md:hidden text-[#D4AF37] font-bold text-sm font-serif">
             H.A. SHIGRI
          </div>
        </div>
      </div>

      {/* 4. موبائل مینو (Side Drawer) */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)}>
        <div 
          className={`fixed right-0 top-0 h-full w-64 bg-[#0f4c75] shadow-2xl border-l-4 border-[#D4AF37] transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 flex flex-col gap-4" dir="rtl">
            <div className="flex justify-between items-center border-b border-[#D4AF37]/30 pb-4 mb-2">
              <span className="text-[#D4AF37] font-bold">مینو</span>
              <button onClick={() => setIsOpen(false)} className="text-white"><FaTimes size={20}/></button>
            </div>
            {menuItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link} 
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                  isActive(item.link) ? 'bg-[#D4AF37] text-[#0f4c75]' : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-bold">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export function HeroSlider() {
  const slides = [
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/5_s7hgrb.png", title: 'نورِ ہدایت', subtitle: 'نورِ القرآن ویژول' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png", title: 'قلم و کیمرا', subtitle: 'صحافت اور ثقافت' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/3_fm3ja9.png", title: 'خدمتِ انسانیت', subtitle: 'محبت، امن اور آشتی' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104582/6_oqageq.png", title: 'ثقافتی سفر', subtitle: 'سیاحتِ ایران و مطالعہ' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png", title: 'کتبِ علمی', subtitle: 'اشاعتِ فکر' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png", title: 'رہِ بصیرت', subtitle: 'دینی و اخلاقی رہنمائی' }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[220px] md:h-[450px] overflow-hidden bg-black border-b-4 border-[#D4AF37]">
      {slides.map((s, i) => (
        <div 
          key={i} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.img} alt={s.title} className="w-full h-full object-contain mx-auto" />
          <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-6 md:pb-10 px-4">
            <div className="text-white text-center bg-[#0f4c75]/70 px-4 py-2 md:px-6 md:py-4 rounded-xl backdrop-blur-md border-t-2 border-[#D4AF37]">
              <h2 className="text-lg md:text-5xl font-bold mb-1 drop-shadow-2xl">{s.title}</h2>
              <p className="text-[10px] md:text-xl opacity-90 tracking-widest">{s.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}