"use client";
import { useState, useEffect } from 'react';
import { 
  FaSearch, FaYoutube, FaWhatsapp, FaFacebook, 
  FaTelegram, FaTiktok, FaEnvelope, FaGlobe
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
// 👇 ہیڈر اور سلائیڈر دونوں امپورٹ کر لیے
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

const CHANNELS = [
  {
    title: 'نورُ القرآن',
    handle: '@noorullquraan',
    desc: 'دنیا کا پہلا ویژول قرآن پروجیکٹ۔ آیات کا بصری ترجمہ، قرآنی تعلیمات کا منفرد انداز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorullquraan',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705133/NoorulQuran_normal_jpeg_eq5n6u.jpg',
    color: 'from-emerald-500 to-green-600',
    icon: <FaYoutube />
  },
  {
    title: 'نور پروڈکشنز',
    handle: '@noorproduction',
    desc: 'اسلامی ثقافتی فلمیں، زیارات، اور ڈاکومنٹریزپر مبنی ویڈیوز کا مرکز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-700 to-indigo-800',
    icon: <FaYoutube />
  },
  {
    title: 'طفلانِ نور',
    handle: '@TiflaneNoor',
    desc: 'بچوں کی دینی تربیت، اسلامی کہانیاں اور اخلاقی تربیت کا مرکز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@TiflaneNoor',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/tiflan_jlzaog.jpg',
    color: 'from-orange-400 to-yellow-500',
    icon: <FaYoutube />
  },
  {
    title: 'آپارات (نور پروڈکشنز)',
    handle: 'aparat.com/noorproduction',
    desc: 'نورپروڈکشنز کا فارسی چینل',
    button: 'Follow Channel',
    href: 'https://www.aparat.com/noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/aparat_gvp8hp.png',
    color: 'from-pink-500 to-rose-600',
    icon: <FaGlobe />
  },
  {
    title: 'حاجی شبیر احمد شگری',
    handle: '@shabbirahmed1103',
    desc: 'آفیشل پرسنل چینل۔ وی لاگز، ٹالک شوز، تجزیے اور روزمرہ کی مصروفیات۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@shabbirahmed1103',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/channels4_profile_fz4ga1.jpg',
    color: 'from-cyan-500 to-blue-500',
    icon: <FaYoutube />
  },
  {
    title: 'نور پروڈکشنز (FB)',
    handle: '@noorproductionchannel',
    desc: 'نورپروڈکشنز کا آفیشل فیس بک پیج۔ ثقافتی فلمیں اور زیارات۔',
    button: 'Follow',
    href: 'https://www.facebook.com/noorproductionchannel',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-600 to-blue-800',
    icon: <FaFacebook />
  }
];

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
    <main className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* 1. ہیڈر اور سلائیڈر */}
      <Navbar />
      <HeroSlider />

      {/* 2. مین ٹائٹل سیکشن */}
      <section className="bg-white py-12 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f4c75] font-serif mb-4 drop-shadow-sm">میڈیا مراکز</h1>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 text-lg">ہمارے تمام آفیشل چینلز اور سوشل میڈیا پلیٹ فارمز</p>
      </section>

      {/* 3. سرچ بار */}
      <section className="container mx-auto px-4 -mt-6 relative z-20 mb-12">
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-6 py-3 shadow-lg max-w-xl mx-auto hover:shadow-xl transition-shadow">
          <FaSearch size={20} className="text-[#D4AF37] ml-3" />
          <input 
            type="text" 
            placeholder="چینل تلاش کریں..." 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            className="flex-1 outline-none text-right px-2 bg-transparent text-[#0f4c75]" 
          />
        </div>
      </section>

      {/* 4. چینلز گرڈ */}
      <section className="container mx-auto px-4 pb-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((channel, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              
              {/* کارڈ ہیڈر (تصویر) */}
              <div className={`h-40 bg-gradient-to-br ${channel.color} relative flex items-center justify-center overflow-hidden`}>
                <img src={channel.img} alt="" className="absolute w-full h-full object-cover opacity-30 group-hover:scale-110 transition duration-500" />
                <div className="relative z-10 bg-white/20 p-4 rounded-full backdrop-blur-sm shadow-lg text-white">
                   {channel.icon}
                </div>
              </div>

              {/* کارڈ باڈی */}
              <div className="p-6 text-right" dir="rtl">
                <h2 className="text-xl font-bold text-[#0f4c75] font-serif mb-1">{channel.title}</h2>
                <p className="text-[#D4AF37] text-xs font-bold mb-3 tracking-wide">{channel.handle}</p>
                <p className="text-gray-600 text-sm h-12 line-clamp-2 mb-6 leading-relaxed">{channel.desc}</p>
                
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#0f4c75] text-white text-center py-3 rounded-xl font-bold hover:bg-[#D4AF37] hover:text-[#0f4c75] transition-all text-sm shadow-md">
                  {channel.button}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {filtered.length === 0 && (
            <div className="text-center text-gray-400 mt-10">کوئی چینل نہیں ملا۔</div>
        )}
      </section>

      {/* 5. سوشل میڈیا لنکس (نیچے والا حصہ) */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#0f4c75] rounded-3xl p-10 text-white border-4 border-[#D4AF37] shadow-2xl text-center relative overflow-hidden">
          {/* بیک گراؤنڈ پیٹرن */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif text-[#D4AF37]">ہمیں فالو کریں</h2>
            <p className="text-sm md:text-base mb-8 opacity-90">تمام نئی اپڈیٹس اور خصوصی مواد کے لیے سوشل میڈیا پر ہمارے ساتھ جڑیں</p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
              <a href="https://wa.me/923334491715" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaWhatsapp size={32} className="text-white group-hover:text-[#25D366]" /></a>
              <a href="https://www.youtube.com/@noorproduction" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaYoutube size={32} className="text-white group-hover:text-[#FF0000]" /></a>
              <a href="https://www.facebook.com/shigri51214/" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaFacebook size={32} className="text-white group-hover:text-[#1877F2]" /></a>
              <a href="https://t.me/+923334491715" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaTelegram size={32} className="text-white group-hover:text-[#0088cc]" /></a>
              <a href="https://x.com/shigri41215" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaXTwitter size={32} className="text-white group-hover:text-black" /></a>
              <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition duration-300 group"><FaTiktok size={32} className="text-white group-hover:text-black" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. فوٹر */}
      <Footer />
    </main>
  );
}