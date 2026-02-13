"use client";
import { useState, useEffect } from 'react';
import { FaSearch, FaPlay } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { GALLERY_ITEMS, CATEGORIES } from './galleryData'; // 🟢 ڈیٹا دوسری فائل سے آ رہا ہے

export default function GalleryPage() {
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
  const currentItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  const goNext = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % filtered.length);
  };

  const goPrev = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex(selectedIndex === 0 ? filtered.length - 1 : selectedIndex - 1);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!currentItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, currentItem, filtered.length]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-12 md:py-16 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif mb-2 urdu-text">گیلری</h1>
        <p className="text-white text-lg md:text-xl urdu-text">یادوں کے جھروکوں سے</p>
      </section>

      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center bg-white border-2 border-[#D4AF37] rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg max-w-2xl mx-auto">
          <FaSearch size={18} className="text-[#0f4c75] ml-2 md:ml-4" />
          <input
            type="text"
            placeholder="تصویریں تلاش کریں..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 outline-none text-gray-800 bg-transparent text-right urdu-text text-sm md:text-base"
          />
        </div>
      </section>

      <section className="container mx-auto px-2 md:px-4 py-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 md:px-5 py-2 rounded-full font-bold transition duration-300 whitespace-nowrap urdu-text text-sm md:text-base ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] text-white shadow-lg'
                  : 'bg-gradient-to-r from-[#D4AF37] to-[#c8a165] text-[#0f4c75] hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                {item.type === 'video' ? (
                  <div className="relative w-full bg-black aspect-video">
                    <video poster={item.poster} className="w-full h-full object-cover" onClick={e => e.stopPropagation()}>
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <FaPlay size={30} className="text-white drop-shadow-lg" />
                    </div>
                  </div>
                ) : item.type === 'yt' ? (
                  <div className="relative w-full bg-black aspect-video flex items-center justify-center">
                    <FaPlay size={30} className="text-white absolute z-10 drop-shadow-lg" />
                    <iframe src={`https://www.youtube.com/embed/${item.id}`} className="w-full h-full rounded" allowFullScreen />
                  </div>
                ) : (
                  <img src={item.src} alt={item.desc} className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition duration-500" />
                )}
                
                <div className="p-4 text-right" dir="rtl">
                  <span className="inline-block bg-[#0f4c75] text-white px-3 py-1 rounded-full text-xs font-bold mb-2 urdu-text shadow-sm">
                    {item.tag}
                  </span>
                  <p className="text-[#0f4c75] font-semibold text-sm md:text-base line-clamp-2 urdu-text leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl md:text-2xl text-gray-600 urdu-text">کوئی تصویر نہیں ملی</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {currentItem && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-2 md:p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition z-[60]">
            <FaXmark size={30} className="md:w-10 md:h-10" />
          </button>

          <button onClick={goPrev} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] hover:from-[#D4AF37] hover:to-[#c8a165] hover:text-[#0f4c75] p-3 md:p-6 rounded-full z-[60] text-3xl md:text-5xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300">
            ‹
          </button>

          <button onClick={goNext} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] hover:from-[#D4AF37] hover:to-[#c8a165] hover:text-[#0f4c75] p-3 md:p-6 rounded-full z-[60] text-3xl md:text-5xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300">
            ›
          </button>

          <div className="flex-1 flex items-center justify-center w-full max-w-5xl mt-8 md:mt-0">
            {currentItem.type === 'img' && (
              <img src={currentItem.src} alt={currentItem.desc} className="max-h-[60vh] md:max-h-[75vh] max-w-full rounded-lg border-2 md:border-4 border-[#D4AF37] shadow-2xl" onClick={e => e.stopPropagation()} />
            )}
            {currentItem.type === 'video' && (
              <video autoPlay controls src={currentItem.src} className="max-h-[60vh] md:max-h-[75vh] w-full rounded-lg border-2 md:border-4 border-[#D4AF37] shadow-2xl" onClick={e => e.stopPropagation()} />
            )}
            {currentItem.type === 'yt' && (
              <iframe src={`https://www.youtube.com/embed/${currentItem.id}?autoplay=1`} className="w-full max-w-5xl aspect-video rounded-lg border-2 md:border-4 border-[#D4AF37] shadow-2xl" allowFullScreen />
            )}
          </div>

          <div className="mt-4 md:mt-6 text-center text-white w-full px-12">
            <div className="text-[#D4AF37] font-bold urdu-text text-base md:text-xl">{currentItem.tag}</div>
            <div className="mt-1 md:mt-2 urdu-text text-sm md:text-lg" dir="rtl">{currentItem.desc}</div>
            <div className="text-xs md:text-sm mt-2 text-white/70 font-sans">{selectedIndex + 1} of {filtered.length}</div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}