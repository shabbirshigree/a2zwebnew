"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch, FaYoutube, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import { CHANNELS } from './channelsData'; 

export default function ChannelsPageEN() {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  // Hydration error prevention check
  useEffect(() => {
    setMounted(true);
    setFiltered(CHANNELS);
  }, []);

  // Search filter logic
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

  // Render nothing until client is loaded (Hydration Fix)
  if (!mounted) return null;

  return (
    <main dir="ltr" suppressHydrationWarning className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      {/* Title Section */}
      <section className="bg-white py-10 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c75] mb-2">Media Centers</h1>
        <div className="w-20 md:w-24 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 -mt-6 relative z-20 mb-10">
        <div className="flex items-center bg-white border border-[#D4AF37]/50 rounded-full px-4 py-2 shadow-lg max-w-xl mx-auto">
          <FaSearch size={18} className="text-[#D4AF37] mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            className="flex-1 outline-none px-2 bg-transparent text-[#0f4c75]" 
          />
        </div>
      </section>

      {/* Channels Grid */}
      <section dir="ltr" className="container mx-auto px-4 pb-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((channel, i) => (
            <div key={i} dir="ltr" className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-2xl transition duration-300 text-left">
              <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`h-32 bg-gradient-to-br ${channel.color} relative flex items-center justify-center`}>
                  <img src={channel.img} alt={channel.title} className="absolute w-full h-full object-cover opacity-30" />
                  <div className="relative z-10 bg-white/20 p-3 rounded-full backdrop-blur-md text-white">
                    {channel.icon}
                  </div>
                </div>
              </a>

              <div className="p-5 text-left">
                <h2 className="text-xl font-bold text-[#0f4c75] mb-1">{channel.title}</h2>
                <p className="text-[#D4AF37] text-xs font-bold mb-3 font-sans">{channel.handle}</p>
                <p className="text-gray-600 text-sm h-12 line-clamp-2 mb-4">{channel.desc}</p>
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#0f4c75] text-white text-center py-2 rounded-xl font-bold shadow-md">
                  {channel.button || 'Subscribe'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Follow Card Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto bg-[#0f4c75] rounded-3xl p-8 text-white border-2 border-[#D4AF37] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl md:text-4xl font-bold mb-3 text-[#D4AF37] text-center">Follow Us</h2>
            <p className="text-sm md:text-xl mb-8 opacity-90 text-center">Connect with us on social media</p>
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
