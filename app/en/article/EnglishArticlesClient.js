"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  FaArrowLeft, FaCalendar, FaNewspaper, FaEye, FaSearch, FaPenNib, FaBookOpen, FaMedal,
  FaHeart, FaRegHeart, FaShareAlt, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope, FaCommentDots
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import { englishArticles } from '../../article/index';

function EnglishArticlesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedArticles, setLikedArticles] = useState({});
  const [articleViews, setArticleViews] = useState({});
  const [articleComments] = useState({});

  const [filterCategory, setFilterCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const storedLikes = JSON.parse(localStorage.getItem('articleLikes') || '{}');
      const storedViews = JSON.parse(localStorage.getItem('articleViews') || '{}');
      setLikedArticles(storedLikes);
      setArticleViews(storedViews);
    } catch {
      setLikedArticles({});
      setArticleViews({});
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const readId = searchParams.get('read');
    if (!readId) {
      setSelectedArticle(null);
      return;
    }
    const matched = (englishArticles || []).find((item) => String(item.id) === String(readId));
    if (!matched) return;
    
    const key = `${matched.id}-${matched.title}`;
    const updatedViews = { ...articleViews, [key]: (articleViews[key] || 0) + 1 };
    setArticleViews(updatedViews);
    localStorage.setItem('articleViews', JSON.stringify(updatedViews));
    setSelectedArticle(matched);
  }, [mounted, searchParams]);

  if (!mounted) return null;

  const filteredArticles = (englishArticles || [])
    .filter(article => {
      const title = article.title ? article.title.toLowerCase() : '';
      const matchesSearch = title.includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => b.id - a.id);

  const categories = [
    { id: 'english', label: 'English' },
    { id: 'all', label: 'All' }
  ];

  const getArticleKey = (article) => `${article.id}-${article.title}`;
  const getStats = (article) => {
    const key = getArticleKey(article);
    return {
      views: 100 + (articleViews[key] || 0),
      likes: 10 + (likedArticles[key] ? 1 : 0),
    };
  };

  const handleOpenArticle = (article) => {
    router.push(`?read=${article.id}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleArticleLike = (article) => {
    const key = getArticleKey(article);
    const newLiked = { ...likedArticles, [key]: !likedArticles[key] };
    setLikedArticles(newLiked);
    localStorage.setItem('articleLikes', JSON.stringify(newLiked));
  };

  const shareArticle = async (article, platform) => {
    const url = `${window.location.origin}/en/article?read=${article.id}`;
    const text = `Read this article by Haji Shabbir Ahmed Shigri: *${article.title}*`;
    
    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({ title: article.title, text, url });
      } catch { return; }
      return;
    }

    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    const links = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };

    if (links[platform]) window.open(links[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans">
      <Navbar />
      <HeroSlider />

      {!selectedArticle && (
        <>
          <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-14 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] mb-4">45 Years of Journalism</h1>
              <h2 className="text-lg md:text-xl text-[#fff7cc] font-light">From a Young Writer to a Gold Medalist</h2>
            </div>
          </section>

          <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
              <div className="relative w-full md:w-1/3">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-12 focus:outline-none focus:border-[#0b314d] transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => {
                const stats = getStats(article);
                return (
                  <div key={article.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                    <div className="relative aspect-video cursor-pointer" onClick={() => handleOpenArticle(article)}>
                      <img src={article.image || 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80'} alt={article.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                        <span className="flex items-center gap-1.5"><FaCalendar /> {article.date || 'By Shabbir Shigri'}</span>
                        <span className="flex items-center gap-1.5"><FaEye /> {stats.views}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0f4c75] mb-4 hover:text-[#D4AF37] transition-colors cursor-pointer" onClick={() => handleOpenArticle(article)}>{article.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1">{article.content?.replace(/<[^>]*>/g, '').substring(0, 150)}...</p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <button onClick={() => handleOpenArticle(article)} className="text-[#0b314d] font-bold text-sm flex items-center gap-2">Read More <FaArrowLeft className="rotate-180" /></button>
                        <div className="flex items-center gap-4">
                          <button onClick={() => toggleArticleLike(article)} className={`transition-all ${likedArticles[getArticleKey(article)] ? 'text-red-500' : 'text-gray-300'}`}>{likedArticles[getArticleKey(article)] ? <FaHeart /> : <FaRegHeart />}</button>
                          <button onClick={() => shareArticle(article, 'native')} className="text-gray-300 hover:text-[#0b314d]"><FaShareAlt /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}

      {selectedArticle && (
        <section className="container mx-auto px-4 py-12 md:py-20 animate-fadeIn">
          <button onClick={() => { setSelectedArticle(null); router.push(window.location.pathname, { scroll: false }); }} className="flex items-center gap-3 text-[#0b314d] font-bold mb-10 bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
            <FaArrowLeft /> Back to all articles
          </button>
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="relative aspect-video">
              <img src={selectedArticle.image || 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80'} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b314d] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{selectedArticle.title}</h1>
              </div>
            </div>
            <div className="p-8 md:p-12">
               <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-8">
                     <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase font-bold">Date</span>
                        <span className="text-[#0b314d] font-bold">{selectedArticle.date || 'Shabbir Shigri'}</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase font-bold">Views</span>
                        <span className="text-[#0b314d] font-bold">{getStats(selectedArticle).views}</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => shareArticle(selectedArticle, 'whatsapp')} className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center"><FaWhatsapp /></button>
                    <button onClick={() => shareArticle(selectedArticle, 'facebook')} className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center"><FaFacebookF /></button>
                    <button onClick={() => shareArticle(selectedArticle, 'native')} className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center"><FaShareAlt /></button>
                  </div>
               </div>
               <div className="text-lg md:text-xl leading-[2] text-gray-700 text-justify space-y-8" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default function EnglishArticlesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnglishArticlesContent />
    </Suspense>
  );
}
