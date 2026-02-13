"use client";
import { useState, useEffect } from 'react';
import { 
  FaBars, FaSearch, FaHome, FaBookOpen, 
  FaPhoneAlt, FaUserAlt, FaImages, FaNewspaper, FaTv, FaBriefcase 
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  // مینو آئٹمز - آپ کی ہدایات کے مطابق لاک کر دیے گئے ہیں
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
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* 1. بابرکت آیتِ مبارکہ - لاکڈ */}
      <div className="bg-[#0b314d] text-[#D4AF37] text-center py-1.5 text-[10px] md:text-sm font-serif italic tracking-widest border-b border-[#D4AF37]/30">
        مَاشَاءَ اللّٰہُ لَا قُوَّۃَ اِلَّا بِاللّٰہِ الْعَلِیِّ الْعَظِیْمِ
      </div>

      <div className="backdrop-blur-md bg-[#0f4c75]/95 border-b-2 border-[#D4AF37]">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center relative">
          
          {/* 2. سرچ باکس - بائیں طرف لاکڈ */}
          <div className="flex items-center gap-2 order-first min-w-[120px]">
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
                placeholder="تلاش کریں..." 
                className="bg-white/10 border border-[#D4AF37] text-white text-xs px-2 py-1 rounded outline-none w-24 md:w-40 animate-in fade-in slide-in-from-left-2 duration-300"
              />
            )}
          </div>

          {/* 3. مینو لنکس - دائیں طرف اور زوم ایفیکٹ کے ساتھ لاکڈ */}
          <nav className="hidden md:flex gap-1 items-center justify-end flex-1" dir="rtl">
            {menuItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link} 
                className={`group flex items-center gap-1.5 px-2 py-1.5 rounded-md transition-all duration-500 ${
                  isActive(item.link) ? 'bg-[#D4AF37] text-[#0f4c75]' : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                <span className="text-xl transition-all duration-500 group-hover:scale-150 group-hover:rotate-[10deg] group-hover:brightness-125">
                  {item.icon}
                </span>
                <span className="text-[10px] lg:text-[11px] font-bold whitespace-nowrap">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* موبائل مینو بٹن */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            <FaBars size={22} />
          </button>
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
    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden bg-black border-b-4 border-[#D4AF37]">
      {slides.map((s, i) => (
        <div 
          key={i} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.img} alt={s.title} className="w-full h-full object-contain mx-auto" />
          <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-10 px-4">
            <div className="text-white text-center bg-[#0f4c75]/70 px-6 py-4 rounded-xl backdrop-blur-md border-t-2 border-[#D4AF37]">
              <h2 className="text-2xl md:text-5xl font-bold mb-1 drop-shadow-2xl">{s.title}</h2>
              <p className="text-xs md:text-xl opacity-90 tracking-widest">{s.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}