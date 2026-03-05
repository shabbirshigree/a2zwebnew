"use client";
import { useState, useEffect } from 'react';
import { FaSearch, FaYoutube, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { CHANNELS } from './channelsData'; // ✅ Data sahi file se aa raha hai

export default function ChannelsPage() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(CHANNELS);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setFiltered(CHANNELS);
    } else {
      setFiltered(CHANNELS.filter(c => 
        (c.title + ' ' + c.handle + ' ' + c.desc).toLowerCase().includes(q)
      ));
    }
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      <section className="bg-white py-10 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c75] urdu-text mb-2">میڈیا مراکز</h1>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 text-base urdu-text">ہمارے تمام آفیشل چینلز اور سوشل میڈیا پلیٹ فارمز</p>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 -mt-6 relative z-20 mb-10">
        <div className="flex items-center bg-white border border-[#D4AF37]/50 rounded-full px-4 py-2 shadow-lg max-w-xl mx-auto">
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
      <section className="container mx-auto px-4 pb-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((channel, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-2xl transition duration-300">
              <div className={`h-32 bg-gradient-to-br ${channel.color} relative flex items-center justify-center`}>
                <div className="relative z-10 bg-white/20 p-3 rounded-full backdrop-blur-md text-white">
                   {channel.icon}
                </div>
              </div>
              <div className="p-5 text-right" dir="rtl">
                <h2 className="text-lg font-bold text-[#0f4c75] urdu-text mb-1">{channel.title}</h2>
                <p className="text-[#D4AF37] text-xs font-bold mb-3 font-sans" dir="ltr">{channel.handle}</p>
                <p className="text-gray-600 text-sm h-16 line-clamp-2 mb-4 urdu-text">{channel.desc}</p>
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#0f4c75] text-white text-center py-2 rounded-xl font-bold hover:bg-[#D4AF37] transition-all">
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