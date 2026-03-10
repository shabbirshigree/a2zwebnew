"use client";
import { useState, useEffect } from 'react';
import { FaShareAlt, FaBook, FaHeadphones, FaFilm, FaSearch, FaTimes, FaWhatsapp, FaFacebook, FaTelegram, FaTwitter, FaLinkedin } from 'react-icons/fa';
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
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1000);
      }
    }
  }, []);

  const handlePlayMedia = (e, url) => { 
    if(e) e.stopPropagation(); 
    if(url) { setMediaUrl(url); setVideoModalOpen(true); }
    else { alert("اس کتاب کا میڈیا دستیاب نہیں ہے۔"); }
  };
  
  const handleOpenBook = (url, title, orientation) => { 
    if (url) { 
      setBookUrl(url); 
      setBookOrientation(orientation || 'portrait');
      setActiveBookTitle(title);
      setBookModalOpen(true); 
    } 
  };

  const openShareMenu = (e, book) => {
    e.stopPropagation();
    setSelectedBook(book);
    setShareModalOpen(true);
  };

  const getShareLink = (book) => `${window.location.origin}${window.location.pathname}#${book.id}`;

  const shareSocial = (platform) => {
    const link = getShareLink(selectedBook);
    const text = `*${selectedBook.title}*\n✍️ مصنف: حاجی شبیر احمد شگری\n\nکتاب پڑھنے کے لیے لنک پر کلک کریں 👇\n${link}`;
    
    const urls = {
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`
    };
    window.open(urls[platform], '_blank');
    setShareModalOpen(false);
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
        {BOOKS_DATA.filter(b => b.title.includes(searchQuery)).map((book) => (
          <div key={book.id} id={book.id} dir="rtl" className="mb-12 bg-[#0a0a0a] border border-gray-800 rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-56 flex-shrink-0">
              <img src={book.image} alt={book.title} className="w-full h-auto rounded-xl shadow-lg" />
            </div>

            <div className="flex-1 text-right">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-1 rounded-full text-[10px] font-bold border border-[#D4AF37]/30">{book.badge}</span>
                <button onClick={(e) => openShareMenu(e, book)} className="text-[#D4AF37] hover:text-white p-2 border border-[#D4AF37]/30 rounded-full transition-all">
                  <FaShareAlt size={20} />
                </button>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 urdu-text">{book.title}</h2>
              <p className="text-gray-300 text-sm md:text-lg leading-[2.2] urdu-text mb-8">{book.descUrdu}</p>
              
              {/* 🔴 بٹنز کی وہی پرانی خوبصورت لائن */}
              <div className="flex flex-wrap gap-4">
                {book.actions.map((action, idx) => (
                  <button 
                    key={idx}
                    onClick={(e) => {
                      if (action.type === 'read') handleOpenBook(action.url, book.title, book.orientation);
                      else handlePlayMedia(e, action.url);
                    }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold urdu-text transition-all ${
                      action.type === 'read' ? 'bg-[#D4AF37] text-black hover:bg-yellow-500' : 
                      action.type === 'video' ? 'bg-red-700 text-white hover:bg-red-600' : 'bg-blue-800 text-white hover:bg-blue-700'
                    }`}
                  >
                    {action.type === 'read' ? <FaBook /> : action.type === 'video' ? <FaFilm /> : <FaHeadphones />}
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 🔴 سوشل میڈیا شیئرنگ مینیو (واٹس ایپ، فیس بک، ٹیلی گرام وغیرہ) */}
      {shareModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShareModalOpen(false)}>
          <div className="bg-[#111] border-2 border-[#D4AF37] rounded-3xl p-8 max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
            <h3 className="text-[#D4AF37] urdu-text text-xl mb-6">دوستوں کے ساتھ شیئر کریں</h3>
            <div className="grid grid-cols-3 gap-6">
              <button onClick={() => shareSocial('whatsapp')} className="flex flex-col items-center gap-2 text-green-500 hover:scale-110 transition-transform"><FaWhatsapp size={40} /><span className="text-xs text-white">واٹس ایپ</span></button>
              <button onClick={() => shareSocial('facebook')} className="flex flex-col items-center gap-2 text-blue-600 hover:scale-110 transition-transform"><FaFacebook size={40} /><span className="text-xs text-white">فیس بک</span></button>
              <button onClick={() => shareSocial('telegram')} className="flex flex-col items-center gap-2 text-sky-500 hover:scale-110 transition-transform"><FaTelegram size={40} /><span className="text-xs text-white">ٹیلی گرام</span></button>
              <button onClick={() => shareSocial('twitter')} className="flex flex-col items-center gap-2 text-gray-400 hover:scale-110 transition-transform"><FaTwitter size={40} /><span className="text-xs text-white">ٹویٹر (X)</span></button>
              <button onClick={() => shareSocial('linkedin')} className="flex flex-col items-center gap-2 text-blue-400 hover:scale-110 transition-transform"><FaLinkedin size={40} /><span className="text-xs text-white">لنکڈ ان</span></button>
            </div>
            <button onClick={() => setShareModalOpen(false)} className="mt-8 text-red-500 urdu-text border border-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all">بند کریں</button>
          </div>
        </div>
      )}

      {/* موڈلز (فلپ بک اور میڈیا) */}
      {bookModalOpen && (
        <div className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-2" onClick={() => setBookModalOpen(false)}>
          <div className="w-full max-w-6xl h-full flex flex-col" onClick={e => e.stopPropagation()}>
             <UrduFlipBook pdfUrl={bookUrl} title={activeBookTitle} onClose={() => setBookModalOpen(false)} isLandscape={bookOrientation === 'landscape'} />
          </div>
        </div>
      )}

      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
           <div className="w-full max-w-3xl relative">
              <button className="absolute -top-12 right-0 text-white bg-red-600 px-4 py-1 rounded-full" onClick={() => setVideoModalOpen(false)}>بند کریں</button>
              {mediaUrl.includes('.mp3') ? <audio src={mediaUrl} controls autoPlay className="w-full" /> : <video src={mediaUrl} controls autoPlay className="w-full rounded-2xl border-4 border-[#D4AF37]" />}
           </div>
        </div>
      )}
      <Footer />
    </main>
  );
}