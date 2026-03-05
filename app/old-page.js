"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function NizamEIlmiLanding() {
  const [appState, setAppState] = useState('START');
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [rotation, setRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowSize, setWindowSize] = useState({ w: 1000, h: 800 });
  const [particles, setParticles] = useState([]);

  const welcomeAudioRef = useRef(null);
  const hoverAudioRef = useRef(null);
  const animationRef = useRef(null);

  const gridItems = [
    { title: "نور القرآن", desc: "قرآن پاک کی بصری تفسیر اور آیاتِ الٰہی کا نورانی سفر", link: "/project", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1770705133/NoorulQuran_normal_jpeg_eq5n6u.jpg", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771964333/Noor_ul_Quran_mcl9nr.mp3" },
    { title: "سفارتی خدمات", desc: "پاک ایران دوستی، سیاحت اور 45 سالہ سفارتی جدوجہد", link: "/services", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771967182/97969070-b550-4706-9afa-7ffe8ad8d8d1.png", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771964333/Safarati_khidmaat_z7qish.mp3" },
    { title: "وحدتِ امت", desc: "بین المذاہب و بین المسالک ہم آہنگی کے لیے میری خدمات", link: "/unity", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771967725/90ed66c3-21a7-441b-9f52-833a4b93fbc3.png", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771964334/wahdat_e_umat_xh9eiw.mp3" },
    { title: "صحافت و ابلاغ", desc: "ریڈیو پاکستان سے انٹرنیشنل کالم نگاری تک کا سفر", link: "/article", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771967123/884f7f35-560c-4343-a7c4-d795a712902a.png", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771964332/sahafat_o_iblagh_ziwj9f.mp3" },
    { title: "ثقافت و آرٹ", desc: "بین الاقوامی نمائشیں اور دنیا بھر میں پاکستان کی ثقافت کا فروغ", link: "/culture", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771967632/88b96e93-84c6-4429-8708-c0cc68894a49.png", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771965497/saqafati_w_hunari_pxiibg.mp3" },
    { title: "اعزازات", desc: "خدمات کے اعتراف میں ملنے والے گولڈ میڈلز اور عالمی ایوارڈز", link: "/awards", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811020/11401574_859776040766320_758770002635701209_n_xoqmge.jpg", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771964330/ezazaat_w0b2lp.mp3" },
    { title: "تصنیف و تالیف", desc: "علم کو سمیٹتی ہوئی میری تحریریں، کتابیں اور سفرنامے", link: "/library", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1770707458/487493285_9544644078946096_10991846377360083_n_cs9b50.jpg", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771964332/tasaneef_jasbjd.mp3" },
    { title: "تعارف", desc: "ایک ننھے لکھاری سے انٹرنیشنل صحافی تک کا مکمل سوانحی سفر", link: "/about", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771967008/0cd9a104-d5d2-4d30-b631-65f917fbc44a.png", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771965497/merey_barey_men_bdrf2g.mp3" },
    { title: "گیلری", desc: "اہم شخصیات کے ساتھ تاریخی ملاقاتیں اور یادگار لمحات", link: "/gallery", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771968004/f7954abc-75f6-4298-8a6e-7248d39ab950.png", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771964343/gallery_og7tbk.mp3" },
    { title: "رابطہ", desc: "میرے پروجیکٹس کا حصہ بننے کے لیے مجھ سے جڑیے", link: "/contact", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1767584262/1000036860.png_mte3cw.jpg", audio: "https://res.cloudinary.com/dtqrziupt/video/upload/v1771964335/rabtaa_qq98dj.mp3" }
  ];

  useEffect(() => {
    setIsMounted(true); 
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);

    const generatedParticles = Array.from({ length: 80 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 20}s`,
      opacity: 0.2 + Math.random() * 0.8,
      size: Math.random() > 0.8 ? '3px' : '1.5px'
    }));
    setParticles(generatedParticles);
    setTimeout(() => setFontsLoaded(true), 300);

    if (typeof window !== "undefined") {
      welcomeAudioRef.current = new Audio("https://res.cloudinary.com/dtqrziupt/video/upload/v1771964858/khush_amdeed_rhdcfr.mp3");
      hoverAudioRef.current = new Audio();
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (appState !== 'MAIN' || !isMounted) return;
    const animateOrbit = () => {
      if (hoveredIndex === null) {
        setRotation(prev => prev + 0.0025); 
      }
      animationRef.current = requestAnimationFrame(animateOrbit);
    };
    animationRef.current = requestAnimationFrame(animateOrbit);
    return () => cancelAnimationFrame(animationRef.current);
  }, [appState, hoveredIndex, isMounted]);

  const handleEnterClick = () => {
    setAppState('MAIN');
    if (welcomeAudioRef.current) {
      welcomeAudioRef.current.currentTime = 0;
      welcomeAudioRef.current.play().catch(e => console.log("Audio Play Error:", e));
    }
  };

  const handlePlanetHover = (indexOrKey, audioUrl) => {
    setHoveredIndex(indexOrKey);
    if (hoverAudioRef.current && audioUrl) {
      hoverAudioRef.current.pause();
      hoverAudioRef.current.src = audioUrl;
      hoverAudioRef.current.load();
      hoverAudioRef.current.play().catch(e => console.log("Hover Audio Error:", e));
    }
  };

  const handlePlanetLeave = () => {
    setHoveredIndex(null);
    if (hoverAudioRef.current) {
      hoverAudioRef.current.pause();
      hoverAudioRef.current.currentTime = 0;
    }
  };

  const getRingParams = (ringIndex, isMobile) => {
    const baseRx = isMobile ? windowSize.w * 0.28 : windowSize.w * 0.16;
    const baseRy = isMobile ? windowSize.h * 0.15 : windowSize.h * 0.12;
    const stepX = isMobile ? 35 : 100;
    const stepY = isMobile ? 25 : 65;
    return { rx: baseRx + ringIndex * stepX, ry: baseRy + ringIndex * stepY };
  };

  const getPlanetPos = (index) => {
    const ringIndex = index % 3; 
    const isMobile = windowSize.w < 768;
    const { rx, ry } = getRingParams(ringIndex, isMobile);

    const angleOffset = index * ((Math.PI * 2) / gridItems.length);
    const angle = rotation + angleOffset;

    const x = Math.cos(angle) * rx;
    const y = Math.sin(angle) * ry;
    const depth = Math.sin(angle); 
    
    return { x, y, depth, ringIndex };
  };

  return (
    <div className={`relative min-h-screen bg-[#020205] overflow-hidden text-white transition-opacity duration-1000 ${fontsLoaded ? 'opacity-100' : 'opacity-0'}`}>

      {/* مَا شَاءَ اللَّهُ (برکت کے لیے سب سے اوپر فکسڈ) */}
      <div className="fixed top-2 left-0 w-full text-center z-[500] pointer-events-none">
        <span className="text-[#D4AF37] text-[10px] md:text-sm font-bold urdu-text opacity-70">مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ</span>
      </div>

      {/* 🌌 کائنات کا بیک گراؤنڈ */}
      <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none transition-all duration-[2000ms] ${appState === 'START' ? 'opacity-100' : 'opacity-40'}`}>
        {/* چاند/دنیا کی سائیڈ پوزیشن */}
        <img 
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop" 
          alt="Solar System Background" 
          className={`absolute inset-0 w-full h-full object-cover animate-slow-drift scale-110 mix-blend-screen transition-transform duration-[3000ms] ${appState === 'START' ? 'translate-x-[25%] scale-150' : 'translate-x-0'}`}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        {particles.map((p, i) => (
          <div key={i} className="absolute bg-white rounded-full shadow-[0_0_8px_#fff]" style={{ left: p.left, top: p.top, width: p.size, height: p.size, animation: `twinkle ${p.animationDuration} infinite linear` }}></div>
        ))}
      </div>

      {/* ================== START SCREEN ================== */}
      <div className={`absolute inset-0 z-[50] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${appState === 'START' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none scale-110 blur-sm'}`}>
        <div className="relative text-center flex flex-col items-center max-w-2xl px-4 md:mr-[30%] transition-all duration-1000">
          <h1 className="text-xl md:text-2xl text-[#D4AF37] mb-3 tracking-wider drop-shadow-lg urdu-text" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
          <h2 className="text-2xl md:text-4xl text-[#fff7cc] font-bold mb-3 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] urdu-text" dir="rtl">وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ</h2>
          <p className="text-[#fde68a]/90 text-sm md:text-lg mb-10 font-light tracking-wide drop-shadow-md urdu-text" dir="rtl">
            "اور (اے اللہ) تو جسے چاہے عزت دے اور جسے چاہے ذلت دے"
          </p>
          <button 
            onClick={handleEnterClick} 
            className="group px-10 py-3 border border-[#D4AF37]/50 text-[#D4AF37] text-sm md:text-base rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-sm"
          >
            <span className="font-bold urdu-text">میری خدمات کی دنیا میں داخلے کے لیے کلک کریں</span>
          </button>
        </div>
      </div>

      {/* ================== MAIN CONTENT ================== */}
      <div className={`absolute inset-0 z-[100] transition-opacity duration-[2000ms] delay-300 ${appState === 'MAIN' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-[300] w-full text-center pointer-events-none animate-fade-in-up">
          <div className="bg-black/40 backdrop-blur-md border border-[#D4AF37]/30 inline-block px-4 py-2 md:px-8 md:py-3 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <h2 className="text-[#D4AF37] font-bold text-xs md:text-lg urdu-text tracking-wide mb-1" dir="rtl">
              السلام علیکم۔ شبیر احمد شِگری کے ڈیجیٹل پیج پر خوش آمدید
            </h2>
            <p className="text-[#fff7cc] text-[10px] md:text-sm font-light urdu-text tracking-wider" dir="rtl">
              براہ کرم اپنے پسندیدہ موضوع والے سیارے پر کلک کریں
            </p>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* 🪐 مدار کی لائنیں */}
          {isMounted && [0, 1, 2].map((ringIndex) => {
            const isMobile = windowSize.w < 768;
            const { rx, ry } = getRingParams(ringIndex, isMobile);
            return (
              <div key={ringIndex} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-[50%] pointer-events-none" style={{ width: `${rx * 2}px`, height: `${ry * 2}px` }}></div>
            );
          })}

          {/* ☀️ مرکز (ہوم پیج آڈیو اور واٹر ریپل کے ساتھ) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[150] flex flex-col items-center justify-center pointer-events-auto">
            <Link href="/home" onMouseEnter={() => handlePlanetHover('home', 'https://res.cloudinary.com/dtqrziupt/video/upload/v1771964337/hompage_dcscup.wav')} onMouseLeave={() => setHoveredIndex(null)}>
                <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#fde68a] shadow-[0_0_40px_rgba(212,175,55,0.8)] z-20 group transition-all duration-500 hover:scale-110">
                    <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/channels4_profile_fz4ga1.jpg" alt="Profile" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity animate-ripple"></div>
                </div>
                <div className="absolute inset-0 bg-[#D4AF37] w-36 h-36 md:w-56 md:h-56 -translate-x-6 md:-translate-x-10 -translate-y-6 md:-translate-y-10 rounded-full blur-[60px] opacity-40 animate-pulse-slow z-10"></div>
            </Link>
          </div>

          {/* 🌍 مکھن جیسے ہموار سیارے */}
          <div className="absolute inset-0 z-[200] pointer-events-none">
            {gridItems.map((item, index) => {
              const { x, y, depth } = getPlanetPos(index);
              const isH = hoveredIndex === index;
              const scale = isH ? 1.4 : 0.8 + (depth * 0.2); 

              return (
                <div 
                  key={index}
                  className="absolute left-1/2 top-1/2 pointer-events-auto flex flex-col items-center justify-center transition-all duration-500 ease-out"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                    zIndex: isH ? 999 : Math.floor(depth * 100) + 150,
                    opacity: isH ? 1 : (depth < -0.4 ? 0.4 : 1),
                    willChange: 'transform'
                  }}
                  onMouseEnter={() => handlePlanetHover(index, item.audio)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link href={item.link} className="relative group block">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border transition-all duration-300 ${isH ? 'border-[#fde68a] shadow-[0_0_30px_#D4AF37]' : 'border-white/30 shadow-lg'}`}>
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 rounded-full shadow-[inset_-8px_-8px_15px_rgba(0,0,0,0.6)]"></div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* 📝 معلومات کا ٹیکسٹ ایریا */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[300] w-[90%] text-center min-h-[80px] flex items-center justify-center pointer-events-none">
          {hoveredIndex === 'home' ? (
            <div className="animate-fade-in-up bg-black/60 px-8 py-3 rounded-2xl border border-[#D4AF37]/40 shadow-xl" dir="rtl">
               <h2 className="text-xl md:text-3xl font-extrabold text-[#D4AF37] urdu-text mb-1 drop-shadow-md">مرکزی ہوم پیج</h2>
               <p className="text-[#fff7cc] text-sm md:text-lg urdu-text font-bold">ہوم پیج کے لئے یہاں کلک کریں</p>
            </div>
          ) : hoveredIndex !== null && (
            <div className="animate-fade-in-up bg-black/60 px-8 py-3 rounded-2xl border border-[#D4AF37]/20 shadow-xl" dir="rtl">
              <h2 className="text-xl md:text-3xl font-extrabold text-[#D4AF37] urdu-text mb-1 tracking-wide">{gridItems[hoveredIndex].title}</h2>
              <p className="text-[#fff7cc] text-xs md:text-base urdu-text font-medium max-w-2xl mx-auto">{gridItems[hoveredIndex].desc}</p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap');
        body { background: #000; margin: 0; padding: 0; overflow: hidden; }
        .urdu-text { font-family: 'Noto Naskh Arabic', serif; }

        @keyframes ripple { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }
        .animate-ripple { animation: ripple 2s infinite ease-out; }

        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
        .animate-slow-drift { animation: drift 150s infinite linear; }
        @keyframes drift { 0% { object-position: 0% 50%; } 100% { object-position: 100% 50%; } }
        .animate-pulse-slow { animation: pulse 4s infinite ease-in-out; }
        @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        .animate-fade-in-up { animation: fade-in-up 0.4s ease-out forwards; }
        @keyframes fade-in-up { from { opacity: 0; transform: translate(-50%, 15px); } to { opacity: 1; transform: translate(-50%, 0); } }
      `}</style>
    </div>
  );
}