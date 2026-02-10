'use client';
import { FaSearch, FaYoutube, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

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
    title: 'نور پروڈکشنز',
    handle: '@noorproductionchannel',
    desc: 'اسلامی ثقافتی فلمیں، زیارات، اور ڈاکومنٹریزپر مبنی ویڈیوز کا مرکز۔ نورپروڈکشنز کا آفیشل فیس بک پیج',
    button: 'Follow',
    href: 'https://www.facebook.com/noorproductionchannel',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: 'شبیر احمد شگری',
    handle: '@ shigri51214',
    desc: 'آفیشل فیس بک پیج',
    button: 'Follow',
    href: 'https://www.facebook.com/shigri51214',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770707458/487493285_9544644078946096_10991846377360083_n_cs9b50.jpg',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    title: 'شبیر احمد شگری',
    handle: '@ shigriscolumns',
    desc: 'صحافت کا فیس بک پیج',
    button: 'Follow',
    href: 'https://www.facebook.com/shigriscolumns',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770708318/540713080_817592917282661_6674004481211856716_n_trjp0h.jpg',
    color: 'from-slate-700 to-slate-900'
  }
];

export default function ChannelsPage() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(CHANNELS);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) return setFiltered(CHANNELS);
    setFiltered(
      CHANNELS.filter(c => 
        (c.title + ' ' + c.handle + ' ' + c.desc).toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      <HeroSlider />

      {/* Page Title */}
      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-16 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif mb-4">میڈیا مراکز</h1>
        <p className="text-white text-lg md:text-xl">ہمارے میڈیا مراکز کو فالو کریں</p>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center bg-white border-2 border-[#D4AF37] rounded-full px-6 py-3 shadow-lg max-w-xl mx-auto">
          <FaSearch size={20} className="text-[#0f4c75] mr-4" />
          <input
            type="text"
            placeholder="چینلز تلاش کریں..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 outline-none text-gray-800 placeholder-gray-500 bg-transparent"
          />
        </div>
      </section>

      {/* Channels Grid */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {filtered.map((channel, i) => (
              <a
                key={i}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${channel.color} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border-4 border-white/30 group`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-black/30 flex items-center justify-center">
                  <img
                    src={channel.img}
                    alt={channel.title}
                    className="w-full h-full object-cover opacity-30 group-hover:scale-125 transition duration-500"
                  />
                  <FaYoutube size={50} className="text-white/50 absolute" />
                </div>

                {/* Content */}
                <div className="bg-white/95 backdrop-blur-sm p-6">
                  <h2 className="text-2xl font-bold text-[#0f4c75] mb-1 font-serif">{channel.title}</h2>
                  <p className="text-sm text-[#D4AF37] font-medium mb-3">{channel.handle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{channel.desc}</p>
                  <button className="w-full bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] text-white font-bold py-2 rounded-lg hover:shadow-lg transition duration-300 text-sm">
                    {channel.button}
                  </button>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">کوئی چینل نہیں ملا</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] rounded-3xl p-12 text-white border-4 border-[#D4AF37] shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">ہمیں فالو کریں</h2>
          <p className="text-base md:text-lg mb-8">تمام نئی اپڈیٹس اور خصوصی مواد کے لیے ہمیں فالو کریں</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <a href="https://wa.me/923334491715" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300" title="WhatsApp">
              <FaWhatsapp size={40} className="text-[#25D366]" />
            </a>
            <a href="https://www.youtube.com/@noorproduction" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300" title="YouTube">
              <FaYoutube size={40} className="text-[#FF0000]" />
            </a>
            <a href="https://www.facebook.com/shigri51214/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300" title="Facebook">
              <FaFacebook size={40} className="text-[#1877F2]" />
            </a>
            <a href="https://t.me/+923334491715" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300" title="Telegram">
              <FaTelegram size={40} className="text-[#0088cc]" />
            </a>
            <a href="https://x.com/shigri41215" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300" title="X">
              <FaXTwitter size={40} className="text-[#000000]" />
            </a>
            <a href="https://www.tiktok.com/@noorproductions786" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300" title="TikTok">
              <FaTiktok size={40} className="text-[#000000]" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
