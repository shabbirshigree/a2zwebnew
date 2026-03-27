"use client";
import React, { useState, useEffect } from 'react';
// تمام آئیکنز صرف 'fa' سے لیے گئے ہیں تاکہ کوئی لائبریری کا مسئلہ نہ آئے
import { FaSearch, FaYoutube, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { CHANNELS } from './channelsData'; 

export default function ChannelsPage() {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  // ہائیڈریشن ایرر سے بچنے کے لیے ماؤنٹ چیک
  useEffect(() => {
    setMounted(true);
    setFiltered(CHANNELS);
  }, []);

  // سرچ فلٹر کا لاجک
  useEffect(() => {
    if (!mounted) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      setFiltered(CHANNELS);
    } else {
      setFiltered(CHANNELS.filter(c => 
        (c.title + ' ' + (c.handle || '')).toLowerCase().includes(q)
      ));
    }
  }, [query, mounted]);

  // جب تک کلائنٹ پر لوڈ نہ ہو، کچھ رینڈر نہ کریں (Hydration Fix)
  if (!mounted) return null;

  return (
    <main suppressHydrationWarning className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      {/* ٹائٹل سیکشن */}
      <section className="bg-white py-10 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c75] urdu-text mb-2">میڈیا مراکز</h1>
        <div className="w-20 md:w-24 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
      </section>

      {/* سرچ بار */}
      <section className="container mx-auto px-4 -mt-6 relative z-20 mb-10">
        <div className="flex items-center bg-white border border-[#D4AF37]/50 rounded-full px-4 py-2 shadow-lg max-w-xl mx-auto">
          <FaSearch size={18} className="text-[#D4AF37] ml-2" />
          <input 
            type="text" 
            placeholder="تلاش کریں..." 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            className="flex-1 outline-none text-right px-2 bg-transparent text-[#0f4c75] urdu-text" 
          />
        </div>
      </section>

      {/* چینلز گرڈ */}
      <section className="container mx-auto px-4 pb-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((channel, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-2xl transition duration-300">
              <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`h-32 bg-gradient-to-br ${channel.color} relative flex items-center justify-center`}>
                  <img src={channel.img} alt={channel.title} className="absolute w-full h-full object-cover opacity-30" />
                  <div className="relative z-10 bg-white/20 p-3 rounded-full backdrop-blur-md text-white">
                    {channel.icon}
                  </div>
                </div>
              </a>

              <div className="p-5 text-right" dir="rtl">
                <h2 className="text-xl font-bold text-[#0f4c75] urdu-text mb-1">{channel.title}</h2>
                <p className="text-[#D4AF37] text-xs font-bold mb-3 font-sans" dir="ltr">{channel.handle}</p>
                <p className="text-gray-600 text-sm h-12 line-clamp-2 mb-4 urdu-text">{channel.desc}</p>
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#0f4c75] text-white text-center py-2 rounded-xl font-bold shadow-md">
                  {channel.button || 'Subscribe'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* فالو کارڈ سیکشن */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto bg-[#0f4c75] rounded-3xl p-8 text-white border-2 border-[#D4AF37] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl md:text-4xl font-bold mb-3 urdu-text text-[#D4AF37] text-center">ہمیں فالو کریں</h2>
            <p className="text-sm md:text-xl mb-8 opacity-90 urdu-text text-center">سوشل میڈیا پر ہمارے ساتھ جڑیں</p>
            <div className="flex flex-nowrap justify-center gap-4 md:gap-6 items-center overflow-x-auto scrollbar-hide">
              <a href="https://wa.me/923334491715" target="_blank" className="hover:scale-110 transition"><FaWhatsapp size={30} /></a>
              <a href="https://www.youtube.com/@noorproduction" target="_blank" className="hover:scale-110 transition"><FaYoutube size={30} /></a>
              <a href="https://www.facebook.com/shigri51214/" target="_blank" className="hover:scale-110 transition"><FaFacebook size={30} /></a>
              <a href="https://t.me/+923334491715" target="_blank" className="hover:scale-110 transition"><FaTelegram size={30} /></a>
              <a href="https://x.com/shigri41215" target="_blank" className="hover:scale-110 transition"><FaTwitter size={30} /></a>
              <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="hover:scale-110 transition"><FaTiktok size={30} /></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}