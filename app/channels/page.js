"use client";
import { useState, useEffect } from 'react';
import { FaSearch, FaYoutube, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { CHANNELS } from './channelsData'; // 🟢 ڈیٹا دوسری فائل سے آ رہا ہے

export default function ChannelsPage() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(CHANNELS);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) return setFiltered(CHANNELS);
    setFiltered(CHANNELS.filter(c => 
      (c.title + ' ' + c.handle + ' ' + c.desc).toLowerCase().includes(q)
    ));
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      
      {/* 1. ہیڈر اور سلائیڈر */}
      <Navbar />
      <HeroSlider />

      {/* 2. مین ٹائٹل سیکشن */}
      <section className="bg-white py-10 md:py-12 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c75] urdu-text mb-2 drop-shadow-sm">میڈیا مراکز</h1>
        <div className="w-20 md:w-24 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 text-base md:text-xl urdu-text">ہمارے تمام آفیشل چینلز اور سوشل میڈیا پلیٹ فارمز</p>
      </section>

      {/* 3. سرچ بار */}
      <section className="container mx-auto px-4 -mt-6 relative z-20 mb-10 md:mb-12">
        <div className="flex items-center bg-white border border-[#D4AF37]/50 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg max-w-xl mx-auto hover:shadow-xl transition-shadow">
          <FaSearch size={18} className="text-[#D4AF37] ml-2 md:ml-3" />
          <input 
            type="text" 
            placeholder="چینل تلاش کریں..." 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            className="flex-1 outline-none text-right px-2 bg-transparent text-[#0f4c75] urdu-text text-sm md:text-base" 
          />
        </div>
      </section>

      {/* 4. چینلز گرڈ */}
      <section className="container mx-auto px-4 pb-12 md:pb-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {filtered.map((channel, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              
              {/* کارڈ ہیڈر (تصویر) */}
              <div className={`h-32 md:h-40 bg-gradient-to-br ${channel.color} relative flex items-center justify-center overflow-hidden`}>
                <img src={channel.img} alt={channel.title} className="absolute w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-500" />
                <div className="relative z-10 bg-white/20 p-3 md:p-4 rounded-full backdrop-blur-md shadow-lg text-white group-hover:scale-110 transition duration-300">
                   {channel.icon}
                </div>
              </div>

              {/* کارڈ باڈی */}
              <div className="p-5 md:p-6 text-right" dir="rtl">
                {/* 🟢 اردو کلاس کا استعمال */}
                <h2 className="text-lg md:text-2xl font-bold text-[#0f4c75] urdu-text mb-1 leading-tight">{channel.title}</h2>
                <p className="text-[#D4AF37] text-xs md:text-sm font-bold mb-3 tracking-wide font-sans" dir="ltr">{channel.handle}</p>
                <p className="text-gray-600 text-sm md:text-base h-16 line-clamp-2 mb-4 leading-relaxed urdu-text text-justify md:text-right">{channel.desc}</p>
                
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-[#0f4c75] to-[#1e6091] text-white text-center py-2 md:py-3 rounded-xl font-bold hover:from-[#D4AF37] hover:to-[#B8860B] transition-all text-sm md:text-base shadow-md font-sans">
                  {channel.button}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {filtered.length === 0 && (
            <div className="text-center text-gray-500 mt-10 urdu-text text-lg">کوئی چینل نہیں ملا۔</div>
        )}
      </section>

      {/* 5. سوشل میڈیا لنکس (نیچے والا حصہ) */}
      <section className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0f4c75] to-[#0a314d] rounded-3xl p-8 md:p-12 text-white border-2 md:border-4 border-[#D4AF37] shadow-2xl text-center relative overflow-hidden">
          {/* بیک گراؤنڈ پیٹرن */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 urdu-text text-[#D4AF37]">ہمیں فالو کریں</h2>
            <p className="text-sm md:text-xl mb-8 opacity-90 urdu-text">تمام نئی اپڈیٹس اور خصوصی مواد کے لیے سوشل میڈیا پر ہمارے ساتھ جڑیں</p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
              <a href="https://wa.me/923334491715" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaWhatsapp className="text-xl md:text-3xl text-white group-hover:text-[#25D366]" /></a>
              <a href="https://www.youtube.com/@noorproduction" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaYoutube className="text-xl md:text-3xl text-white group-hover:text-[#FF0000]" /></a>
              <a href="https://www.facebook.com/shigri51214/" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaFacebook className="text-xl md:text-3xl text-white group-hover:text-[#1877F2]" /></a>
              <a href="https://t.me/+923334491715" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaTelegram className="text-xl md:text-3xl text-white group-hover:text-[#0088cc]" /></a>
              <a href="https://x.com/shigri41215" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaXTwitter className="text-xl md:text-3xl text-white group-hover:text-black" /></a>
              <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="bg-white/10 p-3 md:p-4 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaTiktok className="text-xl md:text-3xl text-white group-hover:text-black" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. فوٹر */}
      <Footer />
    </main>
  );
}