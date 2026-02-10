"use client";
import { useState, useEffect } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "گھر", link: "/" },
    { name: "نور القرآن", link: "/project" },
    { name: "مِری بابت", link: "/about" },
    { name: "چینلز", link: "/channels" },
    { name: "گیلری", link: "/gallery" },
    { name: "لائبریری", link: "/library" },
    { name: "کالمز", link: "/article" },
    { name: "رابطہ", link: "/contact" }
  ];

  const isActive = (link) => {
    if (link === '/') return pathname === '/';
    return pathname?.startsWith(link);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-[#0f4c75]/85 border-b-4 border-[#D4AF37] shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* SS Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#B8860B] flex items-center justify-center shadow-lg border-2 border-white/20 hover:shadow-xl transition-all">
                <div className="text-center">
                  <div className="text-[#0f4c75] font-black text-xl leading-none tracking-tighter">SS</div>
                  <div className="text-[#0f4c75] font-black text-[8px] leading-none">شگری</div>
                </div>
              </div>
            </Link>

            {/* Desktop Menu - Compact */}
            <nav className="hidden md:flex gap-2 items-center flex-1 justify-center px-6">
              {menuItems.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.link} 
                  className={`text-xs font-bold px-2.5 py-1.5 rounded transition-all duration-200 whitespace-nowrap ${
                    isActive(item.link) 
                      ? 'text-[#0f4c75] bg-[#D4AF37] shadow-md' 
                      : 'text-white hover:text-[#D4AF37] hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search toggle */}
              <button onClick={() => setShowSearch(s => !s)} aria-label="Search" className="text-white hover:text-[#D4AF37] p-2 transition-colors">
                <FaSearch size={18} />
              </button>

              {/* Mobile menu button */}
              <button onClick={() => setIsOpen(true)} className="md:hidden text-white p-2">
                <FaBars size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Search input overlay */}
        {showSearch && (
          <div className="container mx-auto px-4 py-3 border-t border-white/10">
            <div className="max-w-2xl mx-auto">
              <input autoFocus className="w-full p-2.5 rounded text-sm border border-[#D4AF37]/30 bg-white/5 text-white placeholder-white/70 focus:outline-none focus:border-[#D4AF37]" placeholder="مضمون تلاش کریں... Search articles..." />
            </div>
          </div>
        )}
      </div>

      {/* Mobile off-canvas menu */}
      <div aria-hidden={!isOpen} className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        <div onClick={() => setIsOpen(false)} className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
        <aside className={`fixed right-0 top-0 h-full w-72 bg-gradient-to-b from-[#0f4c75] to-[#0a3552] p-6 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Mobile menu">
          <div className="flex items-center justify-between mb-8">
            <div className="text-white font-bold text-lg">مینو</div>
            <button onClick={() => setIsOpen(false)} className="text-[#D4AF37] p-2 hover:bg-white/10 rounded" aria-label="Close menu"><FaTimes size={20} /></button>
          </div>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link} 
                className={`text-sm font-bold py-3 px-4 rounded transition-all ${
                  isActive(item.link) 
                    ? 'bg-[#D4AF37] text-[#0f4c75] shadow-md' 
                    : 'text-white hover:bg-white/10 hover:text-[#D4AF37]'
                }`} 
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}

export function HeroSlider() {
  const slides = [
    {
      img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/5_s7hgrb.png",
      title: 'نورِ ہدایت',
      subtitle: 'نورِ القرآن ویژول'
    },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png", title: 'قلم و کیمرا', subtitle: 'صحافت اور ثقافت' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/3_fm3ja9.png", title: 'خدمتِ انسانیت', subtitle: 'محبت، امن اور آشتی' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104582/6_oqageq.png", title: 'ثقافتی سفر', subtitle: 'سیاحتِ ایران و مطالعہ' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png", title: 'کتبِ علمی', subtitle: 'اشاعتِ فکر' },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png", title: 'رہِ بصیرت', subtitle: 'دینی و اخلاقی رہنمائی' }
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Inject slider-specific keyframes once
    if (typeof document !== 'undefined' && !document.getElementById('hero-slider-styles')) {
      const s = document.createElement('style');
      s.id = 'hero-slider-styles';
      s.innerHTML = `
        @keyframes kenburns { 0% { transform: scale(1.08) translateY(6px); } 100% { transform: scale(1) translateY(0); } }
        @keyframes captionIn { 0% { opacity: 0; transform: translateY(20px) scale(.98); } 100% { opacity:1; transform: translateY(0) scale(1);} }
        .ken { animation: kenburns 12s ease-in-out both; transform-origin: center; }
        .caption-anim { animation: captionIn 900ms cubic-bezier(.2,.9,.2,1) both; }
      `;
      document.head.appendChild(s);
    }

    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  const go = (i) => setCurrent(i);
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));

  return (
    <div className="relative w-full h-[320px] md:h-[520px] overflow-hidden shadow-2xl border-b-4 border-[#D4AF37]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Ambient badge */}
      <div className="absolute top-4 left-4 z-30">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-2 border border-[#D4AF37]/40">
          <p className="text-white text-xs md:text-sm font-bold opacity-95 tracking-wider">✨ مَا شَآءَ اللّٰهِ - Noor Productions ✨</p>
        </div>
      </div>

      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <div className="absolute inset-0 overflow-hidden">
            <img src={s.img} alt={s.title} className={`w-full h-full object-cover object-center ken`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d45]/85 to-transparent mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-black/15"></div>
          </div>

          {/* Caption Card */}
          <div className="absolute left-6 md:left-12 bottom-8 md:bottom-16 z-30 max-w-xl">
            <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 text-right text-white shadow-2xl caption-anim">
              <h3 className="text-lg md:text-2xl font-bold tracking-tight text-[#D4AF37]">{s.title}</h3>
              <p className="text-sm md:text-base text-white/90 mt-1">{s.subtitle}</p>
              <div className="mt-3 flex gap-3">
                <a href="/article" className="inline-block bg-[#D4AF37] text-[#0f4c75] font-bold px-4 py-2 rounded-full text-xs md:text-sm shadow transition transform hover:scale-105">Discover</a>
                <a href="/noor-ul-quran" className="inline-block bg-transparent border border-white/20 text-white text-xs md:text-sm px-4 py-2 rounded-full hover:bg-white/6 transition">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left/Right Arrows */}
      <button aria-label="Prev" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition transform hover:scale-105">
        ‹
      </button>
      <button aria-label="Next" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition transform hover:scale-105">
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => go(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-[#D4AF37] scale-125' : 'bg-white/40'}`} aria-label={`Go to slide ${idx+1}`} />
        ))}
      </div>
    </div>
  );
}
