"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaShareAlt, FaBook, FaPlayCircle, FaHeadphones, FaFilm, FaSearch, FaTimes } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import { BOOKS_DATA, AUTHOR_REVIEW } from './libraryData-fa';
import dynamic from 'next/dynamic';

const UrduFlipBook = dynamic(() => import('../../library/UrduFlipBook'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center p-20 gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37]"></div>
      <div className="text-[#D4AF37] text-center text-xl">لطفاً منتظر بمانید...</div>
      <div className="text-[#D4AF37] text-sm opacity-80">حاجی شبیر احمد شگری</div>
    </div>
  )
});

function LibraryContentFA() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const [bookUrl, setBookUrl] = useState('');
  const [bookOrientation, setBookOrientation] = useState('portrait');
  const [mediaUrl, setMediaUrl] = useState('');
  const [activeBookTitle, setActiveBookTitle] = useState('');

  useEffect(() => {
    const bookId = searchParams.get('b');
    const hash = window.location.hash;

    if (bookId) {
      const book = BOOKS_DATA.find(b => b.id === bookId);
      if (book) {
        const readAction = book.actions.find(a => a.type === 'read');
        if (readAction) {
          handleOpenBook(readAction.url, book.title, book.orientation);
        }
        setTimeout(() => {
          const element = document.getElementById(bookId);
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    } else if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 800);
      }
    }
  }, [searchParams]);

  const filteredBooks = BOOKS_DATA.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.descUrdu.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlayMedia = (url) => {
    if (url) {
      setMediaUrl(url);
      setVideoModalOpen(true);
    } else {
      alert("رسانه برای این کتاب در دسترس نیست.");
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

  const handleShare = async (book, action) => {
    let shareUrl = `${window.location.origin}${window.location.pathname}?b=${book.id}`;
    let shareDetails = '';

    if (action.type === 'read') {
      shareDetails = `*${book.title}*\n\n✍️ نویسنده: حاجی شبیر احمد شگری\n\nبرای خواندن این کتاب فوق‌العاده روی لینک زیر کلیک کنید 👇\n\n${shareUrl}`;
    } else if (action.type === 'video') {
      shareDetails = `*${book.title}*\n\nمشاهده "تحلیل ویدیویی" عالی 👇\n\n${shareUrl}`;
    } else if (action.type === 'audio') {
      shareDetails = `*${book.title}*\n\nشنیدن "تحلیل صوتی" عالی 👇\n\n${shareUrl}`;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: book.title,
          text: shareDetails,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareDetails)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

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
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans" dir="rtl">
      <Navbar />
      <HeroSlider />

      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1005] via-[#050505] to-[#000000] py-16 text-center border-b border-[#D4AF37]/30">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] mb-4 drop-shadow-md">گنجینه علم و دانش</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full shadow-lg"></div>

          <div className="max-w-md mx-auto relative group">
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/50 group-focus-within:text-[#D4AF37] transition-colors" />
            <input
              type="text"
              placeholder="جستجوی کتاب یا موضوع..."
              className="w-full bg-[#111] border border-[#D4AF37]/20 rounded-full py-3 px-12 text-right focus:outline-none focus:border-[#D4AF37] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Author's Review Section */}
      <section className="container mx-auto px-4 mt-12 mb-6">
        <div className="bg-[#0a0a0a] rounded-3xl p-6 shadow-2xl border border-[#D4AF37]/30 max-w-4xl mx-auto relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 flex-shrink-0">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-20"></div>
            <img src={AUTHOR_REVIEW.image} className="w-full h-full rounded-full object-cover relative z-10 border-4 border-[#D4AF37]" alt="Author" />
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3">{AUTHOR_REVIEW.title}</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{AUTHOR_REVIEW.desc}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <button onClick={() => handlePlayMedia(AUTHOR_REVIEW.videoUrl)} className="flex items-center gap-2 bg-red-700 text-white px-6 py-2 rounded-full font-bold text-xs hover:bg-red-600 transition-all"><FaFilm /> مشاهده ویدیو</button>
              <button onClick={() => handlePlayMedia(AUTHOR_REVIEW.audioUrl)} className="flex items-center gap-2 bg-[#D4AF37] text-black px-6 py-2 rounded-full font-bold text-xs hover:bg-yellow-500 transition-all"><FaHeadphones /> شنیدن پادکست</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            id={book.id}
            onClick={() => {
                const readAction = book.actions.find(a => a.type === 'read');
                if(readAction) {
                  handleOpenBook(readAction.url, book.title, book.orientation);
                  router.push(`?b=${book.id}`, { scroll: false });
                }
            }}
            className="mb-12 flex flex-col md:flex-row items-stretch gap-8 bg-[#0a0a0a] border border-gray-800 hover:border-[#D4AF37]/40 rounded-[2rem] p-6 md:p-8 shadow-2xl transition-all duration-500 cursor-pointer group"
          >
            <div className="w-full md:w-56 flex-shrink-0 flex flex-col gap-4">
              <div className="relative h-[320px] overflow-hidden rounded-lg border border-gray-800 shadow-2xl bg-black">
                <img src={book.image} alt={book.title} className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="space-y-2">
                {book.actions.map((action, idx) => {
                  const themes = getColorClasses(action.color, action.disabled);
                  const Icon = action.type === 'read' ? FaBook : action.type === 'video' ? FaFilm : FaHeadphones;
                  return (
                    <div key={idx} className="flex rounded-xl overflow-hidden shadow-lg border border-white/5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (action.disabled) return;
                          if (action.type === 'read') {
                            handleOpenBook(action.url, book.title, book.orientation);
                            router.push(`?b=${book.id}`, { scroll: false });
                          }
                          else handlePlayMedia(action.url);
                        }}
                        disabled={action.disabled}
                        className={`flex-1 py-3 px-2 font-bold flex items-center justify-center gap-2 text-[11px] ${themes.btn}`}
                      >
                        <Icon /> <span>{action.label}</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if(!action.disabled) handleShare(book, action);
                        }}
                        className={`px-4 flex items-center justify-center ${themes.share} border-l border-black/20`}
                      >
                        <FaShareAlt size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 text-right flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-1 rounded-full text-[10px] font-bold tracking-widest border border-[#D4AF37]/30 uppercase">{book.badge}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#D4AF37] group-hover:translate-x-[-10px] transition-transform duration-500">{book.title}</h3>
              </div>
              <p className="text-gray-400 text-sm md:text-lg leading-loose text-justify font-light opacity-80 group-hover:opacity-100 transition-opacity">
                {book.descUrdu}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Book Modal (FlipBook) */}
      {bookModalOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-[#D4AF37]/20 bg-black/50">
            <button 
              onClick={() => {
                setBookModalOpen(false);
                router.push(window.location.pathname, { scroll: false });
              }}
              className="text-[#D4AF37] hover:text-white transition-colors"
            >
              <FaTimes size={30} />
            </button>
            <h2 className="text-[#D4AF37] text-xl font-bold">{activeBookTitle}</h2>
            <div className="w-8"></div>
          </div>
          <div className="flex-1 overflow-hidden">
            <UrduFlipBook pdfUrl={bookUrl} orientation={bookOrientation} />
          </div>
        </div>
      )}

      {/* Video/Audio Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
          <button className="absolute top-5 left-5 text-[#D4AF37] hover:text-white transition-colors">
            <FaTimes size={40} />
          </button>
          <div className="w-full max-w-4xl bg-black rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.3)]" onClick={e => e.stopPropagation()}>
            <video src={mediaUrl} controls autoPlay className="w-full aspect-video" />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default function LibraryPageFA() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LibraryContentFA />
    </Suspense>
  );
}
