"use client";
import { useState, useEffect } from 'react';
import { FaShareAlt, FaBook, FaPlayCircle, FaHeadphones, FaFilm, FaMicrophone, FaSearch, FaGlobe } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { BOOKS_DATA, SLIDER_BOOKS } from './libraryData'; // 🟢 ڈیٹا دوسری فائل سے آ رہا ہے

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [bookUrl, setBookUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [langTab, setLangTab] = useState('ur');

  const filteredBooks = BOOKS_DATA.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.descUrdu.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlayVideo = (url) => { setVideoUrl(url); setVideoModalOpen(true); };
  const handleOpenBook = (url) => { if (url) { setBookUrl(url); setBookModalOpen(true); } };

  const handleShare = (title, bookId) => {
    const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/library#${bookId}`;
    if (navigator.share) {
      navigator.share({ title: title, url: url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard');
    }
  };

  const getIconComponent = (iconName) => {
    const iconMap = {
      book: <FaBook className="ml-2" />,
      play: <FaPlayCircle className="ml-2" />,
      headphones: <FaHeadphones className="ml-2" />,
      film: <FaFilm className="ml-2" />,
      microphone: <FaMicrophone className="ml-2" />,
      globe: <FaGlobe className="ml-2" />,
    };
    return iconMap[iconName];
  };

  const getColorClasses = (colorTheme) => {
    const themes = {
      'theme-read': { btn: 'bg-[#0f4c75] text-white hover:bg-[#0a2e47]', share: 'bg-[#0f4c75] text-white' },
      'theme-urdu-vid': { btn: 'bg-gradient-to-r from-[#b8860b] to-[#ffd700] text-black shadow-md', share: 'bg-gradient-to-r from-[#b8860b] to-[#ffd700] text-black' },
      'theme-urdu-aud': { btn: 'bg-[#f0f0f0] text-gray-800 border border-[#ccc]', share: 'bg-[#f0f0f0] text-gray-800 border border-[#ccc]' },
      'theme-eng-vid': { btn: 'bg-gray-800 text-white', share: 'bg-gray-800 text-white' },
      'theme-eng-aud': { btn: 'bg-gray-600 text-white', share: 'bg-gray-600 text-white' },
    };
    return themes[colorTheme];
  };

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-12 md:py-16 text-center border-b-4 border-[#D4AF37] relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37] urdu-text mb-2">خزانہِ علم و دانش</h1>
        <p className="text-white text-lg md:text-xl urdu-text">تصنیفات و تالیفات: حاجی شبیر احمد شگری</p>
      </section>

      {/* Search & Slider */}
      <section className="container mx-auto px-4 py-8 relative z-20">
        <div className="max-w-2xl mx-auto flex items-center bg-white border-2 border-[#D4AF37] rounded-full px-6 py-2 shadow-lg mb-10">
          <FaSearch className="text-[#0f4c75] mr-3" />
          <input type="text" placeholder="کتاب کا نام تلاش کریں..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 outline-none text-right urdu-text" />
        </div>

        <div className="bg-white rounded-3xl shadow-md border border-[#D4AF37]/30 p-4 md:p-6 overflow-x-auto flex gap-4 no-scrollbar">
          {SLIDER_BOOKS.map((book, idx) => (
            <a key={idx} href={`#${book.id}`} className="flex-shrink-0 w-28 md:w-36 bg-gray-50 rounded-xl p-2 border hover:border-[#D4AF37] transition transform hover:-translate-y-1">
              <img src={book.image} alt={book.name} className="h-32 md:h-44 object-contain mx-auto" />
              <p className="text-center text-[10px] md:text-xs font-bold mt-2 urdu-text line-clamp-1">{book.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-[#0f4c75] rounded-2xl p-6 md:p-8 text-center border-2 border-[#D4AF37] shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] urdu-text">حاجی شبیر احمد شگری کی تصانیف پر گوگل کے ویڈیو تجزیے اور آڈیو پوڈ کاسٹس</h2>
        </div>
      </section>

      {/* Books List */}
      <section className="container mx-auto px-4 py-12">
        {filteredBooks.map((book) => (
          <div key={book.id} id={book.id} className="mb-12 flex flex-col lg:flex-row gap-8 bg-white border border-[#D4AF37]/20 rounded-[2rem] p-6 md:p-10 shadow-lg hover:shadow-xl transition">
            <div className="lg:w-72 flex-shrink-0 flex flex-col gap-6">
              <img src={book.image} alt={book.title} className="w-full rounded-2xl shadow-lg border-2 border-[#D4AF37]/20" />
              <div className="space-y-3">
                {book.actions.map((action, idx) => {
                  const themes = getColorClasses(action.color);
                  return (
                    <div key={idx} className="flex rounded-xl overflow-hidden shadow-sm border border-gray-100">
                      <button onClick={() => action.type === 'read' ? handleOpenBook(action.url) : action.type === 'project' ? window.location.href = action.link : handlePlayVideo(action.url)} disabled={action.disabled} className={`flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text ${themes.btn} ${action.disabled ? 'opacity-50' : ''}`}>
                        {getIconComponent(action.icon)} {action.label}
                      </button>
                      <button onClick={() => handleShare(book.title, book.id)} className={`px-4 flex items-center justify-center ${themes.share} border-r border-white/20`}><FaShareAlt size={14}/></button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 text-right" dir="rtl">
              <div className="flex justify-between items-center mb-6 gap-4">
                <div className="flex gap-2">
                  <button onClick={() => setLangTab('ur')} className={`px-4 py-1 rounded-full text-sm font-bold transition ${langTab === 'ur' ? 'bg-[#0f4c75] text-white' : 'border border-[#0f4c75] text-[#0f4c75]'}`}>اردو</button>
                  <button onClick={() => setLangTab('en')} className={`px-4 py-1 rounded-full text-sm font-bold transition ${langTab === 'en' ? 'bg-[#0f4c75] text-white' : 'border border-[#0f4c75] text-[#0f4c75]'}`}>English</button>
                </div>
                <span className="bg-[#0f4c75] text-[#D4AF37] px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold font-sans uppercase tracking-widest border border-[#D4AF37]/30">{book.badge}</span>
              </div>

              {langTab === 'ur' ? (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0f4c75] mb-4 urdu-text">{book.title}</h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify urdu-text whitespace-pre-line">{book.descUrdu}</p>
                </div>
              ) : (
                <div className="font-sans text-left" dir="ltr">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0f4c75] mb-4">{book.titleEn || book.title}</h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">{book.descEn || book.descUrdu}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Modals */}
      {bookModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-2" onClick={() => setBookModalOpen(false)}>
          <div className="w-full max-w-5xl h-[90vh] bg-white rounded-xl overflow-hidden relative" onClick={e => e.stopPropagation()}>
             <button className="absolute top-2 right-4 text-black text-3xl font-bold z-10" onClick={() => setBookModalOpen(false)}>×</button>
             <iframe src={bookUrl} className="w-full h-full border-none" />
          </div>
        </div>
      )}

      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
           <div className="w-full max-w-4xl relative" onClick={e => e.stopPropagation()}>
              <button className="absolute -top-10 right-0 text-white text-4xl" onClick={() => setVideoModalOpen(false)}>×</button>
              <video src={videoUrl} controls autoPlay className="w-full rounded-xl border-2 border-[#D4AF37]" />
           </div>
        </div>
      )}

      <Footer />
    </main>
  );
}