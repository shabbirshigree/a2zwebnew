"use client";
import { useState } from 'react';
import { FaShareAlt, FaBook, FaPlayCircle, FaHeadphones, FaFilm, FaSearch, FaTimes } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { BOOKS_DATA, AUTHOR_REVIEW } from './libraryData';
import dynamic from 'next/dynamic';

// فلپ بک کو متحرک طور پر لوڈ کرنا (تاکہ ویب سائٹ بھاری نہ ہو)
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

  // سرچنگ فلٹر 
  const filteredBooks = BOOKS_DATA.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.descUrdu.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlayMedia = (url) => {
    if (url) {
      setMediaUrl(url);
      setVideoModalOpen(true);
    } else {
      alert("اس کتاب کا میڈیا دستیاب نہیں ہے۔");
    }
  };

  const handleOpenBook = (url, title, orientation) => {
    if (url) {
      setBookUrl(url);
      setBookOrientation(orientation || 'portrait');
      setActiveBookTitle(title);
      setBookModalOpen(true);
    }
  };

  // 🔴 نیا اور جدید شیئرنگ فنکشن (نیلے لنک کے ساتھ)
  const handleShare = async (book) => {
    // یہ لنک خود بخود اس مخصوص کتاب پر سکرول (Scroll) کرے گا
    const shareUrl = `${window.location.origin}${window.location.pathname}#${book.id}`;

    const shareDetails = `*${book.title}*\n\n✍️ مصنف: حاجی شبیر احمد شگری\n(معروف کالم نگار، اینکر اور پروڈیوسر)\n\nیہ شاندار کتاب پڑھنے کے لیے درج ذیل لنک پر کلک کریں 👇\n\n${shareUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: book.title,
          text: shareDetails,
        });
      } catch (error) {
        console.log('شیئرنگ کینسل ہو گئی');
      }
    } else {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareDetails)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  // بٹنز کے رنگوں کی سیٹنگ
  const getColorClasses = (colorTheme, disabled) => {
    if (disabled) return { btn: 'bg-gray-800 text-gray-400 opacity-50 cursor-not-allowed border border-gray-700', share: 'bg-gray-800 text-gray-500' };
    const themes = {
      'theme-read': { btn: 'bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition-all', share: 'bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 hover:text-white' },
      'theme-urdu-vid': { btn: 'bg-gradient-to-r from-red-700 to-red-900 text-white shadow-sm hover:scale-[1.02] transition-all', share: 'bg-red-800 text-white hover:text-black' },
      'theme-urdu-aud': { btn: 'bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-[#0b314d] shadow-sm hover:scale-[1.02] transition-all', share: 'bg-[#D4AF37] text-[#0b314d] hover:text-white' },
    };
    return themes[colorTheme] || themes['theme-read'];
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans">
      <Navbar />
      <HeroSlider />

      {/* ہیڈر اور سرچ بار */}
      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1005] via-[#050505] to-[#000000] py-16 text-center border-b border-[#D4AF37]/30">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] urdu-text mb-4 drop-shadow-md">خزانہِ علم و دانش</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full shadow-lg"></div>

          {/* سرچ بار ڈیزائن */}
          <div className="max-w-md mx-auto relative group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/50 group-focus-within:text-[#D4AF37] transition-colors" />
            <input
              type="text"
              placeholder="کتاب یا موضوع تلاش کریں..."
              className="w-full bg-[#111] border border-[#D4AF37]/20 rounded-full py-3 px-12 text-right urdu-text focus:outline-none focus:border-[#D4AF37] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* مصنف کا تجزیہ (Author Review) */}
      <section className="container mx-auto px-4 mt-12 mb-6 text-right" dir="rtl">
        <div className="bg-[#0a0a0a] rounded-3xl p-6 shadow-2xl border border-[#D4AF37]/30 max-w-4xl mx-auto relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 flex-shrink-0">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-20"></div>
            <img src={AUTHOR_REVIEW.image} className="w-full h-full rounded-full object-cover relative z-10 border-4 border-[#D4AF37]" alt="Author" />
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] urdu-text mb-3">{AUTHOR_REVIEW.title}</h2>
            <p className="text-gray-400 text-sm mb-6 urdu-text leading-relaxed">{AUTHOR_REVIEW.desc}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <button onClick={() => handlePlayMedia(AUTHOR_REVIEW.videoUrl)} className="flex items-center gap-2 bg-red-700 text-white px-6 py-2 rounded-full font-bold urdu-text text-xs hover:bg-red-600 transition-all"><FaFilm /> ویڈیو دیکھیں</button>
              <button onClick={() => handlePlayMedia(AUTHOR_REVIEW.audioUrl)} className="flex items-center gap-2 bg-[#D4AF37] text-black px-6 py-2 rounded-full font-bold urdu-text text-xs hover:bg-yellow-500 transition-all"><FaHeadphones /> آڈیو سنیں</button>
            </div>
          </div>
        </div>
      </section>

      {/* کتابوں کی فہرست */}
      <section className="container mx-auto px-4 py-12">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} id={book.id} dir="rtl" className="mb-12 flex flex-col md:flex-row items-stretch gap-8 bg-[#0a0a0a] border border-gray-800 hover:border-[#D4AF37]/40 rounded-[2rem] p-6 md:p-8 shadow-2xl transition-all duration-500">

              {/* کتاب کا کور اور بٹنز */}
              <div className="w-full md:w-56 flex-shrink-0 flex flex-col gap-4">
                <div className="relative group overflow-hidden rounded-xl border border-gray-800 shadow-2xl">
                  <img src={book.image} alt={book.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white urdu-text text-sm bg-[#D4AF37]/80 px-4 py-1 rounded-full">تفصیل دیکھیں</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {book.actions.map((action, idx) => {
                    const themes = getColorClasses(action.color, action.disabled);
                    const Icon = action.type === 'read' ? FaBook : action.type === 'video' ? FaFilm : FaHeadphones;
                    return (
                      <div key={idx} className="flex rounded-xl overflow-hidden shadow-lg border border-white/5">
                        <button
                          onClick={() => {
                            if (action.disabled) return;
                            if (action.type === 'read') handleOpenBook(action.url, book.title + " - " + action.label, book.orientation);
                            else handlePlayMedia(action.url);
                          }}
                          disabled={action.disabled}
                          className={`flex-1 py-3 px-2 font-bold flex items-center justify-center gap-2 text-[11px] urdu-text ${themes.btn}`}
                        >
                          <Icon /> <span>{action.label}</span>
                        </button>
                        <button
                          onClick={() => !action.disabled && handleShare(book)}
                          className={`px-4 flex items-center justify-center ${themes.share} border-r border-black/20`}
                          title="یہ کتاب شیئر کریں"
                        >
                          <FaShareAlt size={14} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* کتاب کی تحریر */}
              <div className="flex-1 text-right flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-1 rounded-full text-[10px] font-bold tracking-widest border border-[#D4AF37]/30 uppercase">{book.badge}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 urdu-text leading-tight">{book.title}</h2>
                <div className="w-20 h-1 bg-[#D4AF37]/50 mb-6 rounded-full"></div>
                <p className="text-gray-300 text-sm md:text-lg leading-[2.2] text-justify urdu-text font-light">{book.descUrdu}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <h3 className="text-[#D4AF37] urdu-text text-2xl">معذرت! آپ کی تلاش کے مطابق کوئی کتاب نہیں ملی۔</h3>
          </div>
        )}
      </section>

      {/* 📖 فلپ بک موڈل (Flipbook Modal) */}
      {bookModalOpen && (
        <div className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-2 md:p-6 backdrop-blur-md" onClick={() => setBookModalOpen(false)}>
          <div className="w-full max-w-6xl h-full flex flex-col relative" onClick={e => e.stopPropagation()}>
            <UrduFlipBook
              pdfUrl={bookUrl}
              title={activeBookTitle}
              onClose={() => setBookModalOpen(false)}
              isLandscape={bookOrientation === 'landscape'}
            />
          </div>
        </div>
      )}

      {/* آڈیو/ویڈیو پوڈکاسٹ موڈل */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={() => setVideoModalOpen(false)}>
          <div className="w-full max-w-3xl relative" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-14 right-0 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-bold z-50 urdu-text shadow-xl" onClick={() => setVideoModalOpen(false)}>
              <FaTimes /> بند کریں
            </button>

            <div className="rounded-3xl border-4 border-[#D4AF37]/50 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-black">
              {mediaUrl.includes('.mp3') || mediaUrl.includes('podcast') ? (
                <div className="p-12 md:p-20 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-8">
                    <FaHeadphones className="text-5xl text-[#D4AF37] animate-bounce" />
                  </div>
                  <h3 className="text-white urdu-text text-2xl mb-8">آڈیو تجزیہ چل رہا ہے...</h3>
                  <audio src={mediaUrl} controls autoPlay className="w-full custom-audio-player" />
                </div>
              ) : (
                <video src={mediaUrl} controls autoPlay className="w-full h-auto aspect-video" />
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}