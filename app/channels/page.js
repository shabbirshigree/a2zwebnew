"use client";
import { useState, useEffect } from 'react';
import { FaSearch, FaYoutube, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { CHANNELS } from './channelsData'; 

export default function ChannelsPage() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(CHANNELS);
  const [mounted, setMounted] = useState(false);

  // ✅ Hydration error khatam karne ke liye
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const q = query.trim().toLowerCase();
    if (!q) return setFiltered(CHANNELS);
    setFiltered(CHANNELS.filter(c => 
      (c.title + ' ' + (c.handle || '') + ' ' + (c.desc || '')).toLowerCase().includes(q)
    ));
  }, [query, mounted]);

  // Jab tak page load na ho, kuch render na karein (Hydration Fix)
  if (!mounted) return null;

  return (
    <main suppressHydrationWarning className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      <section className="bg-white py-10 md:py-12 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c75] urdu-text mb-2">میڈیا مراکز</h1>
        <div className="w-20 md:w-24 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 text-base md:text-xl urdu-text">ہمارے تمام آفیشل چینلز اور سوشل میڈیا پلیٹ فارمز</p>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 -mt-6 relative z-20 mb-10 md:mb-12">
        <div className="flex items-center bg-white border border-[#D4AF37]/50 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg max-w-xl mx-auto">
          <FaSearch size={18} className="text-[#D4AF37] ml-2" />
          <input 
            type="text" 
            placeholder="چینل تلاش کریں..." 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            className="flex-1 outline-none text-right px-2 bg-transparent text-[#0f4c75] urdu-text" 
          />
        </div>
      </section>

      {/* Channels Grid */}
      <section className="container mx-auto px-4 pb-12 md:pb-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {filtered.map((channel, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              
              {/* 🟢 Logo Section par Link lag gaya hai */}
              <a href={channel.href} target="_blank" rel="noopener noreferrer" className="cursor-pointer block">
                <div className={`h-32 md:h-40 bg-gradient-to-br ${channel.color} relative flex items-center justify-center overflow-hidden`}>
                  <img src={channel.img} alt={channel.title} className="absolute w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-500" />
                  <div className="relative z-10 bg-white/20 p-3 md:p-4 rounded-full backdrop-blur-md shadow-lg text-white group-hover:scale-125 transition duration-300">
                    {channel.icon}
                  </div>
                </div>
              </a>

              <div className="p-5 md:p-6 text-right" dir="rtl">
                <h2 className="text-lg md:text-2xl font-bold text-[#0f4c75] urdu-text mb-1">{channel.title}</h2>
                <p className="text-[#D4AF37] text-xs md:text-sm font-bold mb-3 font-sans" dir="ltr">{channel.handle}</p>
                <p className="text-gray-600 text-sm md:text-base h-16 line-clamp-2 mb-4 urdu-text">{channel.desc}</p>
                
                {/* 🟢 Subscribe Button Link */}
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-[#0f4c75] to-[#1e6091] text-white text-center py-2 md:py-3 rounded-xl font-bold hover:from-[#D4AF37] hover:to-[#B8860B] transition-all shadow-md">
                  {channel.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}