'use client';
import { useState, useEffect } from 'react';
import { 
  FaSearch, FaYoutube, FaWhatsapp, FaFacebook, 
  FaTelegram, FaTiktok, FaEnvelope 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar } from '../components/Header';
import Footer from '../components/Footer';

const CHANNELS = [
  {
    title: 'نورُ القرآن',
    handle: '@noorullquraan',
    desc: 'دنیا کا پہلا ویژول قرآن پروجیکٹ۔ آیات کا بصری ترجمہ، قرآنی تعلیمات کا منفرد انداز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorullquraan',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705133/NoorulQuran_normal_jpeg_eq5n6u.jpg',
    color: 'from-emerald-500 to-green-600'
  },
  {
    title: 'نور پروڈکشنز',
    handle: '@noorproduction',
    desc: 'اسلامی ثقافتی فلمیں، زیارات، اور ڈاکومنٹریزپر مبنی ویڈیوز کا مرکز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-700 to-indigo-800'
  },
  {
    title: 'طفلانِ نور',
    handle: '@TiflaneNoor',
    desc: 'بچوں کی دینی تربیت، اسلامی کہانیاں اور اخلاقی تربیت کا مرکز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@TiflaneNoor',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/tiflan_jlzaog.jpg',
    color: 'from-orange-400 to-yellow-500'
  },
  {
    title: 'آپارات (نور پروڈکشنز)',
    handle: 'aparat.com/noorproduction',
    desc: 'نورپروڈکشنز کا فارسی چینل',
    button: 'Follow Channel',
    href: 'https://www.aparat.com/noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/aparat_gvp8hp.png',
    color: 'from-pink-500 to-rose-600'
  },
  {
    title: 'حاجی شبیر احمد شگری',
    handle: '@shabbirahmed1103',
    desc: 'آفیشل پرسنل چینل۔ وی لاگز، ٹالک شوز، تجزیے اور روزمرہ کی مصروفیات۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@shabbirahmed1103',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/channels4_profile_fz4ga1.jpg',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'نور پروڈکشنز (FB)',
    handle: '@noorproductionchannel',
    desc: 'نورپروڈکشنز کا آفیشل فیس بک پیج۔ ثقافتی فلمیں اور زیارات۔',
    button: 'Follow',
    href: 'https://www.facebook.com/noorproductionchannel',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-600 to-blue-800'
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
      {/* ہیڈر */}
      <Navbar />

      {/* مین ٹائٹل سیکشن */}
      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-20 pt-32 text-center border-b-4 border-[#D4AF37] relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif mb-4">میڈیا مراکز</h1>
        <p className="text-white text-lg opacity-90">ہمارے تمام آفیشل چینلز اور صفحات</p>
      </section>

      {/* سرچ بار */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="flex items-center bg-white border-2 border-[#D4AF37] rounded-full px-6 py-3 shadow-2xl max-w-xl mx-auto">
          <FaSearch size={20} className="text-[#0f4c75] ml-3" />
          <input 
            type="text" 
            placeholder="چینل تلاش کریں..." 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            className="flex-1 outline-none text-right px-2 bg-transparent" 
          />
        </div>
      </section>

      {/* چینلز گریڈ */}
      <section className="container mx-auto px-4 py-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((channel, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition duration-300">
              <div className={`h-40 bg-gradient-to-br ${channel.color} relative flex items-center justify-center overflow-hidden`}>
                <img src={channel.img} alt="" className="absolute w-full h-full object-cover opacity-30 group-hover:scale-110 transition duration-500" />
                <FaYoutube size={40} className="text-white relative z-10" />
              </div>
              <div className="p-5 text-right" dir="rtl">
                <h2 className="text-xl font-bold text-[#0f4c75] font-serif">{channel.title}</h2>
                <p className="text-[#D4AF37] text-xs font-bold mb-3">{channel.handle}</p>
                <p className="text-gray-600 text-xs h-12 line-clamp-2 mb-4 leading-relaxed">{channel.desc}</p>
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#0f4c75] text-white text-center py-2 rounded-lg font-bold hover:bg-[#D4AF37] hover:text-[#0f4c75] transition-all text-sm">
                  {channel.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* سوشل میڈیا لنکس والا باکس (تصویر کے مطابق) */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] rounded-3xl p-10 text-white border-4 border-[#D4AF37] shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif">ہمیں فالو کریں</h2>
          <p className="text-sm md:text-base mb-8 opacity-90">تمام نئی اپڈیٹس اور خصوصی مواد کے لیے ہمیں فالو کریں</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
            <a href="https://wa.me/923334491715" target="_blank" className="hover:scale-125 transition duration-300"><FaWhatsapp size={40} className="text-[#25D366]" /></a>
            <a href="https://www.youtube.com/@noorproduction" target="_blank" className="hover:scale-125 transition duration-300"><FaYoutube size={40} className="text-[#FF0000]" /></a>
            <a href="https://www.facebook.com/shigri51214/" target="_blank" className="hover:scale-125 transition duration-300"><FaFacebook size={40} className="text-[#1877F2]" /></a>
            <a href="https://t.me/+923334491715" target="_blank" className="hover:scale-125 transition duration-300"><FaTelegram size={40} className="text-[#0088cc]" /></a>
            <a href="https://x.com/shigri41215" target="_blank" className="hover:scale-125 transition duration-300"><FaXTwitter size={40} className="text-white" /></a>
            <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="hover:scale-125 transition duration-300"><FaTiktok size={40} className="text-white" /></a>
          </div>
        </div>
      </section>

      {/* فوٹر */}
      <Footer />
    </main>
  );
}