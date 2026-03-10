"use client";
import { useState, useEffect } from 'react';
import { FaShareAlt, FaBook, FaHeadphones, FaFilm, FaSearch, FaTimes } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { BOOKS_DATA, AUTHOR_REVIEW } from './libraryData'; 
import dynamic from 'next/dynamic';

const UrduFlipBook = dynamic(() => import('./UrduFlipBook'), { 
  ssr: false,
  loading: () => <div className="text-[#D4AF37] urdu-text text-center p-20">لوڈنگ...</div>
});

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [bookUrl, setBookUrl] = useState('');
  const [bookOrientation, setBookOrientation] = useState('portrait'); 
  const [mediaUrl, setMediaUrl] = useState('');
  const [activeBookTitle, setActiveBookTitle] = useState('');

  // 🔴 اسمارٹ سکرول: شیئر کردہ لنک سے کتاب پر پہنچنا
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.style.borderColor = "#D4AF37"; 
        }, 1000);
      }
    }
  }, []);

  const filteredBooks = BOOKS_DATA.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.descUrdu.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlayMedia = (e, url) => { 
    if(e) e.stopPropagation(); 
    if(url) { setMediaUrl(url); setVideoModalOpen(true); }
  };
  
  const handleOpenBook = (url, title, orientation) => { 
    if (url) { 
      setBookUrl(url); 
      setBookOrientation(orientation || 'portrait');
      setActiveBookTitle(title);
      setBookModalOpen(true); 
    } 
  };

  const handleShare = (e, book) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}#${book.id}`;
    const shareDetails = `*${book.title}*\n\n✍️ مصنف: حاجی شبیر احمد شگری\n\nکتاب پڑھنے کے لیے لنک پر کلک کریں 👇\n\n${shareUrl}`;

    if (navigator.share) {
      navigator.share({ title: book.title, text: shareDetails }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareDetails)}`, '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />
      <HeroSlider />

      <section className="py-16 text-center border-b border-[#D4AF37]/30">
        <div className="container mx-auto px-4">
           <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] urdu-text mb-8">خزانہِ علم و دانش</h1>
           <div className="max-w-md mx-auto relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/50" />
              <input 
                type="text" 
                placeholder="کتاب یا موضوع تلاش کریں..." 
                className="w-full bg-[#111] border border-[#D4AF37]/20 rounded-full py-3 px-12 text-right urdu-text focus:outline-none focus:border-[#D4AF37]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {filteredBooks.map((book) => (
          <div 
            key={book.id} 
            id={book.id} 
            dir="rtl"
            onClick={() => {
              const readAction = book.actions.find(a => a.type === 'read');
              if(readAction) handleOpenBook(readAction.url, book.title, book.orientation);
            }}
            className="mb-12 cursor-pointer flex flex-col md:flex-row items-stretch gap-8 bg-[#0a0a0a] border border-gray-800 hover:border-[#D4AF37]/50 rounded-[2rem] p-6 md:p-8 shadow-2xl transition-all duration-300 group"
          >
            {/* تصویر کا حصہ */}
            <div className="w-full md:w-56 flex-shrink-0 flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl border border-gray-800 shadow-2xl">
                <img src={book.image} alt={book.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
              </div>
              
              {/* 🔴 "کتاب پڑھیں" اور شیئر کا بٹن اپنی جگہ پر */}
              <div className="flex rounded-xl overflow-hidden border border-[#D4AF37]/30">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const readAction = book.actions.find(a => a.type === 'read');
                    handleOpenBook(readAction.url, book.title, book.orientation);
                  }}
                  className="flex-1 bg-[#1a1a1a] text-[#D4AF37] py-3 text-xs font-bold urdu-text hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <FaBook /> کتاب پڑھیں
                </button>
                <button 
                  onClick={(e) => handleShare(e, book)}
                  className="px-4 bg-[#111] text-[#D4AF37] border-r border-[#D4AF37]/20 hover:text-white"
                >
                  <FaShareAlt size={14} />
                </button>
              </div>
            </div>

            {/* تفصیلات کا حصہ */}
            <div className="flex-1 text-right flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-1 rounded-full text-[10px] font-bold border border-[#D4AF37]/30">{book.badge}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 urdu-text">{book.title}</h2>
              <p className="text-gray-300 text-sm md:text-lg leading-[2.2] urdu-text">{book.descUrdu}</p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {book.actions.filter(a => a.type !== 'read').map((action, idx) => (
                  <button 
                    key={idx}
                    onClick={(e) => handlePlayMedia(e, action.url)}
                    className="flex items-center gap-2 bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-2 rounded-full text-xs urdu-text hover:bg-[#D4AF37] hover:text-black transition-all"
                  >
                    {action.type === 'video' ? <FaFilm /> : <FaHeadphones />} {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {bookModalOpen && (
        <div className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-2" onClick={() => setBookModalOpen(false)}>
          <div className="w-full max-w-6xl h-full flex flex-col" onClick={e => e.stopPropagation()}>
             <UrduFlipBook pdfUrl={bookUrl} title={activeBookTitle} onClose={() => setBookModalOpen(false)} isLandscape={bookOrientation === 'landscape'} />
          </div>
        </div>
      )}

      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
           <div className="w-full max-w-3xl relative" onClick={e => e.stopPropagation()}>
              <button className="absolute -top-12 right-0 text-white bg-red-600 px-4 py-1 rounded-full" onClick={() => setVideoModalOpen(false)}>بند کریں</button>
              <video src={mediaUrl} controls autoPlay className="w-full rounded-2xl border-4 border-[#D4AF37]" />
           </div>
        </div>
      )}
      <Footer />
    </main>
  );
}