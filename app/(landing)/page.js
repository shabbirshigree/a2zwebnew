"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { landingData, planetItems } from './landingData'; 

export default function LandingPage() {
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

  useEffect(() => {
    setIsMounted(true); 
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);
    
    const generatedParticles = Array.from({ length: 110 }).map(() => ({
      left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
      animationDuration: `${2.5 + Math.random() * 3}s`, 
      delay: `${Math.random() * 5}s`,
      size: Math.random() > 0.8 ? '2.5px' : '1.2px',
      glow: Math.random() > 0.7 ? '0 0 10px rgba(255,255,255,0.8)' : '0 0 4px rgba(255,255,255,0.3)'
    }));
    setParticles(generatedParticles);
    setTimeout(() => setFontsLoaded(true), 500);

    if (typeof window !== "undefined") {
      welcomeAudioRef.current = new Audio("https://res.cloudinary.com/dtqrziupt/video/upload/v1771964858/khush_amdeed_rhdcfr.mp3");
      hoverAudioRef.current = new Audio();
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (appState !== 'MAIN' || !isMounted) return;
    const animateOrbit = () => {
      if (hoveredIndex === null) setRotation(prev => prev + 0.0006); 
      animationRef.current = requestAnimationFrame(animateOrbit);
    };
    animationRef.current = requestAnimationFrame(animateOrbit);
    return () => cancelAnimationFrame(animationRef.current);
  }, [appState, hoveredIndex, isMounted]);

  const handleEnterClick = () => {
    setAppState('MAIN');
    welcomeAudioRef.current?.play().catch(e => console.log(e));
  };

  const handlePlanetHover = (key, audioUrl) => {
    setHoveredIndex(key);
    if (hoverAudioRef.current && audioUrl) {
      hoverAudioRef.current.pause();
      hoverAudioRef.current.src = audioUrl;
      hoverAudioRef.current.play().catch(e => console.log(e));
    }
  };

  const getPlanetPos = (index) => {
    const ring = index % 3; 
    const isMob = windowSize.w < 768;
    const rx = (isMob ? windowSize.w * 0.30 : windowSize.w * 0.20) + (ring * (isMob ? 30 : 70));
    const ry = (isMob ? windowSize.h * 0.15 : windowSize.h * 0.12) + (ring * (isMob ? 25 : 45));
    const angle = rotation + (index * ((Math.PI * 2) / planetItems.length));
    return { x: Math.cos(angle) * rx, y: Math.sin(angle) * ry, depth: Math.sin(angle) };
  };

  return (
    <div className={`relative min-h-screen bg-black overflow-hidden text-white transition-opacity duration-1000 ${fontsLoaded ? 'opacity-100' : 'opacity-0'}`}>

      {/* ماشاءاللہ */}
      <div className="fixed top-4 w-full text-center z-[150] opacity-40 pointer-events-none">
        <p className="text-[#D4AF37] text-[10px] md:text-xs arabic-text tracking-widest">
          مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّه
        </p>
      </div>

      {/* ستارے */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {isMounted && particles.map((p, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-twinkle" 
               style={{ 
                 left: p.left, top: p.top, width: p.size, height: p.size, 
                 boxShadow: p.glow,
                 animationDuration: p.animationDuration, animationDelay: p.delay 
               }}></div>
        ))}
      </div>

      {/* چاند */}
      {isMounted && (
        <div className="fixed top-[8%] left-[8%] z-10 pointer-events-none animate-pulse-slow">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/600px-FullMoon2010.jpg" 
            alt="Full Moon" 
            className="w-16 md:w-24 rounded-full opacity-90" 
          />
        </div>
      )}

      {/* 🌍 زمین (گلوب) - دوبارہ شامل کر دیا گیا */}
      <div className="fixed -right-40 md:-right-60 top-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-20">
        <div className="relative w-[450px] h-[450px] md:w-[700px] md:h-[700px]">
          <div className="w-full h-full rounded-full bg-cover bg-center animate-spin-slow shadow-[inset_-40px_0_120px_rgba(0,0,0,1)] border border-white/10"
               style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg')` }}>
          </div>
        </div>
      </div>

      {/* START SCREEN */}
      <div className={`absolute inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-1000 ${appState === 'START' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="text-center max-w-2xl px-8 flex flex-col items-center">
          <h1 className="text-sm md:text-lg text-[#D4AF37] font-bold mb-5 arabic-text tracking-[0.3em]">{landingData.bismillah}</h1>
          <h2 className="text-base md:text-2xl text-white/95 font-medium arabic-text mb-6 leading-relaxed" dir="rtl">{landingData.ayat}</h2>
          <p className="text-[#fde68a]/70 text-sm md:text-xl urdu-nastaliq px-10 leading-[2.1] mb-12" dir="rtl">"{landingData.translation}"</p>
          <button onClick={handleEnterClick} className="px-10 py-2 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full text-base md:text-lg urdu-nastaliq hover:bg-[#D4AF37]/10 transition-all duration-700">
            خدمات کی دنیا میں داخل ہوں
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={`absolute inset-0 z-[50] transition-opacity duration-[2000ms] ${appState === 'MAIN' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[300] w-full flex justify-center pointer-events-none">
          <div className="bg-black/40 backdrop-blur-md border border-[#D4AF37]/30 flex flex-col items-center px-8 py-2 rounded-full">
            <h2 className="text-[#D4AF37] font-bold text-base md:text-xl urdu-nastaliq mb-1" dir="rtl">{landingData.welcomeTitle}</h2>
            <p className="text-[#fff7cc] text-xs md:text-sm urdu-nastaliq" dir="rtl">{landingData.welcomeSubtitle}</p>
          </div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* بنفشی کہکشاں کا ہالہ */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[750px] md:h-[750px] opacity-40 z-[10] pointer-events-none animate-spin-super-slow">
            <img src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-full blur-[40px]" alt="Galaxy" />
          </div>

          {/* 🔴 تبدیلی: مدار کی لائنوں کو سفید اور زیادہ واضح کر دیا گیا ہے */}
          {isMounted && [0, 1, 2].map((ring) => {
             const isMob = windowSize.w < 768;
             const rx = (isMob ? windowSize.w * 0.30 : windowSize.w * 0.20) + (ring * (isMob ? 30 : 70));
             const ry = (isMob ? windowSize.h * 0.15 : windowSize.h * 0.12) + (ring * (isMob ? 25 : 45));
             return <div key={ring} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/25 rounded-[50%] pointer-events-none z-[20]" style={{ width: rx * 2, height: ry * 2 }}></div>
          })}

          {/* مرکزی تصویر */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[150] group">
            <Link href="/home" onMouseEnter={() => handlePlanetHover('home', landingData.homeAudio)} onMouseLeave={() => setHoveredIndex(null)}>
                <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-[#fde68a] shadow-[0_0_40px_10px_rgba(139,92,246,0.5)] transition-all duration-700 group-hover:scale-105">
                    <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/channels4_profile_fz4ga1.jpg" className="w-full h-full object-cover rounded-full" alt="Main" />
                </div>
            </Link>
          </div>

          {/* سیارے */}
          <div className="absolute inset-0 z-[200] pointer-events-none">
            {isMounted && planetItems.map((item, index) => {
              const { x, y, depth } = getPlanetPos(index);
              const isH = hoveredIndex === index;
              return (
                <div key={index} className="absolute left-1/2 top-1/2 pointer-events-auto transition-all duration-700 ease-out" 
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isH ? 1.4 : 0.85 + (depth * 0.15)})`, zIndex: isH ? 999 : Math.floor(depth * 100) + 150, opacity: isH ? 1 : (depth < -0.4 ? 0.4 : 1) }}
                  onMouseEnter={() => handlePlanetHover(index, item.audio)} onMouseLeave={() => setHoveredIndex(null)}>
                  <Link href={item.link}>
                    <div className={`w-14 h-14 md:w-18 md:h-18 rounded-full overflow-hidden border-2 transition-all duration-500 ${isH ? 'border-white shadow-[0_0_30px_#D4AF37]' : 'border-white/30'}`}>
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* معلومات */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[300] w-full flex justify-center pointer-events-none">
          {hoveredIndex !== null && (
            <div className="bg-black/80 backdrop-blur-md px-6 py-2 rounded-full border border-[#D4AF37]/40 flex flex-col md:flex-row items-center gap-2" dir="rtl">
               <span className="text-sm md:text-base font-bold text-[#D4AF37] urdu-nastaliq">
                 {hoveredIndex === 'home' ? "مرکزی ہوم پیج" : planetItems[hoveredIndex].title}
               </span>
               <span className="text-[#fff7cc] text-xs md:text-sm urdu-nastaliq">
                 {hoveredIndex === 'home' ? "ہوم پیج کے لئے یہاں کلک کریں" : planetItems[hoveredIndex].desc}
               </span>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;700&family=Noto+Nastaliq+Urdu:wght@400;500&display=swap');
        
        @font-face {
          font-family: 'Jameel Noori Nastaleeq';
          src: local('Jameel Noori Nastaleeq'), url('https://fonts.cdnfonts.com/s/72855/Jameel_Noori_Nastaleeq.woff') format('woff');
        }

        body { background: #000; margin: 0; padding: 0; overflow: hidden; }
        .arabic-text { font-family: 'Noto Naskh Arabic', serif !important; }
        .urdu-nastaliq { font-family: 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif !important; }
        
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.9; } }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }

        @keyframes pulse-slow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite ease-in-out; }

        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 220s linear infinite; }

        @keyframes spin-super-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-super-slow { animation: spin-super-slow 180s linear infinite; }
      `}</style>
    </div>
  );
}