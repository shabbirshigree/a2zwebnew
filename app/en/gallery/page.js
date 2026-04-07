"use client";
import { useState, useEffect } from 'react';
import { FaSearch, FaPlay, FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import { GALLERY_ITEMS } from '../../gallery/galleryData';

const TAG_TRANSLATIONS = {
  ویڈیو: "Video",
  یوٹیوب: "YouTube",
  "خادمِ رضا": "Servant of Imam Reza",
  "خادمِ عباس": "Servant of Abbas",
  دوستی: "Friendship",
  اعزاز: "Honor",
  سفارت: "Diplomacy",
  ثقافت: "Culture",
  میڈیا: "Media",
  ملاقات: "Meeting",
  زیارت: "Pilgrimage",
  سفر: "Journey",
  اتحاد: "Unity",
};

const DESC_TRANSLATIONS = {
  "قونصل جنرل ایران کی الوداعی ملاقات۔": "Farewell meeting with Consul General of Iran.",
  "محافظ حرم حضرت عباسؑ ہونے کا اعزاز۔": "Honor of being the guardian of Imam Abbas shrine.",
  "مشہد مقدس میں حاضری۔": "Presence in holy Mashhad.",
  "حرم مطہر میں خدمت۔": "Service in the sacred shrine.",
  "آستان قدس رضوی۔": "Astan Quds Razavi.",
  "خدمت کا شرف۔": "Honor of service.",
  "خادم حرم۔": "Shrine servant.",
  "مشہد یادگار۔": "Memorable Mashhad.",
  "صحن حرم۔": "Shrine courtyard.",
  "اعزاز۔": "Honor.",
  "زیارت۔": "Pilgrimage.",
  "خادم حرم حضرت عباسؑ۔": "Servant of Imam Abbas shrine.",
  "کربلا معلیٰ۔": "Holy Karbala.",
  "حرم کا اندرونی منظر۔": "Interior view of the shrine.",
  "ڈیوٹی کے دوران۔": "During duty.",
  "ضریح مبارک۔": "Blessed shrine.",
  "علمدارؑ کا در۔": "Gate of the flag bearer.",
  "کربلا حاضری۔": "Presence in Karbala.",
  "پاک ایران دوستی۔": "Pak-Iran friendship.",
  "دوستی تقریب۔": "Friendship ceremony.",
  "وفد کے ساتھ۔": "With the delegation.",
  "یادگار لمحہ۔": "Memorable moment.",
  "ملاقات۔": "Meeting.",
  "گروپ فوٹو۔": "Group photo.",
  "سیمینار۔": "Seminar.",
  "تقریب۔": "Ceremony.",
  "کانفرنس۔": "Conference.",
  "شرکاء۔": "Participants.",
  "دوستی۔": "Friendship.",
  "زندہ باد۔": "Long live.",
  "مشترکہ تجارتی نمائش۔": "Joint trade exhibition.",
  "بیسٹ میڈیا ایوارڈ 2025۔": "Best Media Award 2025.",
  "غلاف کعبہ ٹوپی کا تحفہ۔": "Gift of Kaaba cover cap.",
  "ایوارڈ وصولی۔": "Receiving award.",
  "اعزازات۔": "Honors.",
  "دستار بندی۔": "Turban tying.",
  "خصوصی اعزاز۔": "Special honor.",
  "ثقافتی قونصلر کے ساتھ۔": "With cultural counselor.",
  "سفیر ایران سے ملاقات۔": "Meeting with Iranian ambassador.",
  "سفارت خانہ۔": "Embassy.",
  "تحفہ وصولی۔": "Receiving gift.",
  "قونصلیٹ۔": "Consulate.",
  "میٹنگ۔": "Meeting.",
  "سفارتی امور۔": "Diplomatic affairs.",
  "رائزن فرہنگی۔": "Cultural counselor.",
  "قونصل جنرل۔": "Consul General.",
  "وفد۔": "Delegation.",
  "پبلک ریلیشنز آفیسر۔": "Public Relations Officer.",
  "پی آر او (لاہور)۔": "PRO (Lahore).",
  "ثقافتی نمائش۔": "Cultural exhibition.",
  "کلچرل ہال۔": "Cultural hall.",
  "پروگرام آرگنائزر۔": "Program organizer.",
  "ایرانی آرٹ۔": "Iranian art.",
  "گروپ فوٹو۔": "Group photo.",
  "PRO Services": "PRO Services.",
  "ریڈیو پاکستان (FM 93)۔": "Radio Pakistan (FM 93).",
  "ٹی وی ٹاک شو۔": "TV talk show.",
  "میڈیا ڈسکشن۔": "Media discussion.",
  "لائیو پروگرام۔": "Live program.",
};

export default function GalleryPageEN() {
  // Fixed CATEGORIES definition inside component
  const CATEGORIES = [
    { value: 'all', label: 'All' },
    { value: 'reza', label: 'Servant of Imam Reza' },
    { value: 'abbas', label: 'Servant of Abbas' },
    { value: 'pak-iran', label: 'Pak-Iran Friendship' },
    { value: 'awards', label: 'Awards' },
    { value: 'diplomacy', label: 'Diplomacy' },
    { value: 'culture', label: 'Culture & PR' },
    { value: 'media', label: 'Media' },
    { value: 'meetings', label: 'Meetings' },
    { value: 'places', label: 'Pilgrimage & Travel' },
    { value: 'unity', label: 'Unity' },
    { value: 'video', label: 'Video' }
  ];

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filtered, setFiltered] = useState(GALLERY_ITEMS);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    let result = GALLERY_ITEMS;
    if (activeCategory !== 'all') {
      result = result.filter(item => item.category.split(' ').includes(activeCategory));
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(item => 
        item.desc.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [query, activeCategory]);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = (e) => { e?.stopPropagation(); if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % filtered.length); };
  const goPrev = (e) => { e?.stopPropagation(); if (selectedIndex !== null) setSelectedIndex(selectedIndex === 0 ? filtered.length - 1 : selectedIndex - 1); };

  return (
    <main className="min-h-screen bg-[#f4f7f9] overflow-x-hidden font-sans" dir="ltr">
      <Navbar />
      <HeroSlider />

      <section className="bg-[#0b314d] py-16 md:py-24 relative overflow-hidden" dir="ltr">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0b314d]/50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#D4AF37] mb-4 drop-shadow-2xl">Gallery of Service, Culture & Pilgrimage</h1>
          <p className="text-white/80 text-xl md:text-2xl font-light max-w-3xl mx-auto tracking-wide">Explore a visual archive of official visits, cultural programs, awards and humanitarian journeys spanning 45 years of dedicated service.</p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-10 relative z-20" dir="ltr">
        <div className="flex items-center bg-white border-b-4 border-[#D4AF37] rounded-2xl px-6 py-4 shadow-2xl max-w-3xl mx-auto backdrop-blur-md bg-white/95">
          <FaSearch size={22} className="text-[#0b314d] mr-4 opacity-50" />
          <input
            type="text"
            placeholder="Search memories..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 outline-none text-gray-800 text-lg md:text-xl placeholder:text-gray-400"
          />
        </div>
      </section>

      {/* 🏷️ فلٹرز (Categorization) */}
      <section className="container mx-auto px-4 py-12 relative z-10" dir="ltr">
        <div className="flex flex-nowrap md:flex-wrap justify-center gap-3 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-500 border-2 ${
                activeCategory === cat.value
                  ? 'bg-[#0b314d] text-[#D4AF37] border-[#0b314d] shadow-[0_10px_20px_rgba(11,49,77,0.3)] scale-105'
                  : 'bg-white text-[#0b314d] border-gray-200 hover:border-[#D4AF37] hover:shadow-lg'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 🖼️ گیلری گرڈ (Modern Masonry Style) */}
      <section className="container mx-auto px-4 py-8 relative z-10" dir="ltr">
        {/* inline-block + w-full: Safari/iOS میں multi-column کے ساتھ تصاویر کا غائب ہونا کم ہوتا ہے */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-6 inline-block w-full max-w-full align-top group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 cursor-pointer border border-gray-100"
              onClick={() => openLightbox(i)}
            >
              <div className="relative overflow-hidden">
                {item.type === 'video' || item.type === 'yt' ? (
                  <div className="aspect-video bg-black flex items-center justify-center">
                    <img src={item.poster || `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} className="w-full h-full object-cover opacity-60" alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#D4AF37] p-5 rounded-full shadow-2xl group-hover:scale-125 transition-transform duration-500">
                        <FaPlay size={25} className="text-[#0b314d] ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={item.src} alt={item.desc} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" />
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b314d] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="bg-[#D4AF37] text-[#0b314d] px-3 py-1 rounded-md text-xs font-bold mb-2 inline-block shadow-lg">{TAG_TRANSLATIONS[item.tag] || item.tag}</span>
                      <p className="text-white font-bold text-lg leading-tight">{DESC_TRANSLATIONS[item.desc] || item.desc}</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌌 لائٹ باکس (Full Screen Experience) */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-[#0b314d]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 animate-in fade-in" onClick={closeLightbox} dir="ltr">

          <button className="absolute top-6 right-6 text-white/50 hover:text-[#D4AF37] transition-all p-2 hover:rotate-90 duration-500" onClick={closeLightbox}>
            <FaTimes size={40} />
          </button>

          {/* Navigation Arrows */}
          <button onClick={goPrev} className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-white p-2 md:p-4 z-50">
            <FaChevronLeft size={34} />
          </button>
          <button onClick={goNext} className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-white p-2 md:p-4 z-50">
            <FaChevronRight size={34} />
          </button>

          {/* Image/Video Display */}
          <div className="w-full max-w-6xl h-[70vh] flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
            {filtered[selectedIndex].type === 'img' && (
              <img src={filtered[selectedIndex].src} className="max-h-full max-w-full rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.4)] border-4 border-white/10" />
            )}
            {filtered[selectedIndex].type === 'video' && (
              <video autoPlay controls src={filtered[selectedIndex].src} className="max-h-full w-full rounded-xl shadow-2xl" />
            )}
            {filtered[selectedIndex].type === 'yt' && (
              <iframe src={`https://www.youtube.com/embed/${filtered[selectedIndex].id}?autoplay=1`} className="w-full h-full rounded-xl shadow-2xl" allowFullScreen />
            )}
          </div>

          {/* Info Text */}
          <div className="mt-8 text-center text-white px-10 max-w-3xl">
            <h3 className="text-[#D4AF37] font-bold text-2xl md:text-3xl mb-2">{TAG_TRANSLATIONS[filtered[selectedIndex].tag] || filtered[selectedIndex].tag}</h3>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">{DESC_TRANSLATIONS[filtered[selectedIndex].desc] || filtered[selectedIndex].desc}</p>
            <p className="mt-4 text-white/30 font-mono text-sm">{selectedIndex + 1} / {filtered.length}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
