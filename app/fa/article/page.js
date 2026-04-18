"use client";
import { useState, useEffect } from 'react';
import {
  FaArrowLeft, FaCalendar, FaNewspaper, FaEye, FaSearch, FaPenNib, FaBookOpen, FaMedal,
  FaHeart, FaRegHeart, FaShareAlt, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope, FaCommentDots
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';

// ✅ فقط داده‌های فارسی را برای این صفحه وارد کنید
import { farsiArticles } from '../../article/index';
import FarsiArticleDetail from './data';

export default function FarsiArticlesPage() {

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
    if (!mounted || selectedArticle) return;
    const readId = new URLSearchParams(window.location.search).get('read');
    if (!readId) return;
    const matched = (farsiArticles || []).find((item) => String(item.id) === String(readId));
    if (!matched) return;
    const key = `${matched.id}-${matched.title}`;
    const updatedViews = { ...articleViews, [key]: (articleViews[key] || 0) + 1 };
    setArticleViews(updatedViews);
    localStorage.setItem('articleViews', JSON.stringify(updatedViews));
    setSelectedArticle(matched);
  }, [mounted, selectedArticle, articleViews]);

  if (!mounted) return null;

  const filteredArticles = (farsiArticles || [])
    .filter(article => {
      const title = article.title ? article.title.toLowerCase() : '';
      const matchesSearch = title.includes(searchTerm.toLowerCase());

      const isMultiCategory = Array.isArray(article.category);
      const matchesCategory = filterCategory === 'all' ||
        (isMultiCategory
          ? article.category.includes(filterCategory)
          : article.category === filterCategory);

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => b.id - a.id);

  const categories = [
    { id: 'all', label: '🔍 تمام' },
    { id: 'column', label: '✍️ فارسی' },
    { id: 'special', label: '⭐ نسخه‌های ویژه' },
    { id: 'international', label: '🌍 بین‌المللی' }
  ];

  const getArticleKey = (article) => `${article.id}-${article.title}`;
  const getBaseViews = (article) => 120 + ((Number(article.id) || 1) * 7);
  const getBaseLikes = (article) => 15 + ((Number(article.id) || 1) * 2);
  const getBaseComments = (article) => 3 + ((Number(article.id) || 1) % 9);

  const getStats = (article) => {
    const key = getArticleKey(article);
    return {
      views: getBaseViews(article) + (articleViews[key] || 0),
      likes: getBaseLikes(article) + (likedArticles[key] ? 1 : 0),
      comments: getBaseComments(article) + (articleComments[key] || 0),
    };
  };

  const handleOpenArticle = (article) => {
    const key = getArticleKey(article);
    const updatedViews = { ...articleViews, [key]: (articleViews[key] || 0) + 1 };
    setArticleViews(updatedViews);
    localStorage.setItem('articleViews', JSON.stringify(updatedViews));
    setSelectedArticle(article);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleArticleLike = (article) => {
    const key = getArticleKey(article);
    const updatedLikes = { ...likedArticles, [key]: !likedArticles[key] };
    setLikedArticles(updatedLikes);
    localStorage.setItem('articleLikes', JSON.stringify(updatedLikes));
  };

  const getArticleUrl = (article) => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}/fa/article?read=${encodeURIComponent(article.id)}`;
  };

  const shareArticle = async (article, platform) => {
    const url = getArticleUrl(article);
    const text = `این مقاله از حاجی شبیر احمد شگری را بخوانید: ${article.title}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    const links = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      email: `mailto:shigriinfo@gmail.com?subject=${encodeURIComponent(article.title)}&body=${encodedText}%0A%0A${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };

    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({ title: article.title, text: text, url });
      } catch { return; }
      return;
    }

    const shareLink = links[platform];
    if (shareLink) window.open(shareLink, '_blank', 'noopener,noreferrer', 'width=700,height=700');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans" dir="rtl">
      <Navbar />
      <HeroSlider />

      {!selectedArticle && (
        <>
          <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-10 md:py-14 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-4 tracking-wide">
                ۴۵ سال روزنامه نگاری
              </h1>
              <h2 className="text-lg md:text-xl text-[#fff7cc] font-light tracking-widest uppercase">
                سفری از یک نویسنده جوان تا دارنده مدال طلا
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
            </div>
          </section>
        </>
      )}

      <div className="container mx-auto px-4 pb-16 pt-4">
        {!selectedArticle ? (
          <>
            {/* 🔍 نوار جستجو و فیلترها (طراحی سطح بین المللی) */}
            <section className="-mt-10 md:-mt-12 mb-12 relative z-20">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-[#D4AF37]/20">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-1/2 group">
                    <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:scale-110 transition-transform" />
                    <input
                      type="text"
                      placeholder="جستجوی مقالات... (Search Articles)"
                      className="w-full pr-12 pl-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#D4AF37] focus:ring-0 outline-none transition-all text-lg font-bold"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center w-full md:w-1/2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setFilterCategory(cat.id)}
                        className={`px-3 md:px-6 py-1.5 md:py-3 rounded-full text-[11px] md:text-base font-bold transition-all shadow-sm md:shadow-md hover:shadow-lg ${
                          filterCategory === cat.id
                            ? 'bg-[#D4AF37] text-white scale-105 border-2 border-white'
                            : 'bg-white text-[#0f4c75] border-2 border-gray-100 hover:border-[#D4AF37]/30'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 📚 گرڈ مقالات */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredArticles.map((article, index) => (
                  <div
                    key={`${article.id}-${index}`}
                    onClick={() => handleOpenArticle(article)}
                    className="group relative bg-white rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_20px_50px_rgba(15,76,117,0.15)] transition-all duration-500 border border-gray-100 flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* تصویر و نشان */}
                    <div className="h-56 overflow-hidden bg-gray-100 relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b314d]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0b314d] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-[#D4AF37]/30">
                        {categories.find(c => c.id === (Array.isArray(article.category) ? article.category[0] : article.category))?.label}
                      </div>
                    </div>

                    {/* محتوا */}
                    <div className="p-6 flex flex-col flex-grow relative text-right">
                      <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold mb-3">
                        <FaCalendar /> {article.date}
                      </div>
                      <h3 className="text-xl font-bold text-[#0b314d] mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed whitespace-pre-line text-justify line-clamp-3">
                        {article.body || article.excerpt}
                      </p>

                      {/* نوار تعامل */}
                      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5 text-rose-500 font-bold text-sm">
                            <FaHeart /> {getStats(article).likes}
                          </span>
                          <span className="flex items-center gap-1.5 text-blue-500 font-bold text-sm">
                            <FaEye /> {getStats(article).views}
                          </span>
                        </div>
                        <span className="w-10 h-10 rounded-full bg-[#0f4c75]/5 flex items-center justify-center text-[#0f4c75] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500 shadow-sm">
                          <FaArrowLeft />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500">هیچ مقاله ای در این دسته یافت نشد.</p>
              </div>
            )}
          </>
        ) : (
          <div>
            <button
              onClick={() => setSelectedArticle(null)}
              className="bg-[#0b314d] text-[#D4AF37] px-6 py-2.5 rounded-full mb-8 flex items-center gap-2 font-bold mx-auto block w-fit"
            >
              <FaArrowLeft /> بازگشت به مقالات
            </button>
            <FarsiArticleDetail article={selectedArticle} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
