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
import { farsiArticles } from '../../article/index';

function FarsiArticlesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedArticles, setLikedArticles] = useState({});
  const [articleViews, setArticleViews] = useState({});

  const [filterCategory, setFilterCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const storedLikes = JSON.parse(localStorage.getItem('articleLikesV2') || '{}');
      const storedViews = JSON.parse(localStorage.getItem('articleViewsV2') || '{}');
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
    const matched = (farsiArticles || []).find((item) => String(item.id) === String(readId));
    if (!matched) return;
    
    const key = getArticleKey(matched);
    setArticleViews(prev => {
      const updated = { ...prev, [key]: (prev[key] || 0) + 1 };
      localStorage.setItem('articleViewsV2', JSON.stringify(updated));
      return updated;
    });
    setSelectedArticle(matched);
  }, [mounted, searchParams]);

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
    .sort((a, b) => {
      // Extract numeric part of ID for sorting if it's a string like "202F"
      const idA = typeof a.id === 'string' ? parseInt(a.id) : a.id;
      const idB = typeof b.id === 'string' ? parseInt(b.id) : b.id;
      return idB - idA;
    });

  // اپڈیٹ شدہ کیٹیگریز (فارسی ڈراپ ڈاؤن کے ساتھ)
  const categories = [
    { id: 'all', label: 'همه مقالات 🔍' },
    { 
      id: 'islamic_writings', 
      label: 'نوشته‌های اسلامی',
      subcategories: [
        { id: 'islamic_writings', label: 'موضوعات اسلامی' },
        { id: 'aimah_ahle_bait', label: 'ائمه و اهل بیت' },
        { id: 'munasibat', label: 'مناسبت‌ها' },
        { id: 'palestine', label: 'فلسطین' },
        { id: 'islamic_unity', label: 'وحدت اسلامی 🤝' }
      ]
    },
    { 
      id: 'pak_iran_relations', 
      label: 'روابط پاکستان و ایران',
      subcategories: [
        { id: 'pak_iran_friendship', label: 'دوستی پاکستان و ایران' },
        { id: 'pak_iran_general', label: 'روابط عمومی' },
        { id: 'pak_iran_trade', label: 'تجارت پاکستان و ایران' }
      ]
    },
    { 
      id: 'personalities', 
      label: 'شخصیت‌ها',
      subcategories: [
        { id: 'imam_khomeini', label: 'امام خمینی (ره)' },
        { id: 'rahbar_moazzam', label: 'رهبر معظم خامنه‌ای' },
        { id: 'other_personalities', label: 'دیگر شخصیت‌ها' }
      ]
    },
    { id: 'culture_columns', label: 'فرهنگ' },
    { id: 'pakistan_columns', label: 'پاکستان' },
    { 
      id: 'iran', 
      label: 'ایران',
      subcategories: [
        { id: 'islamic_revolution', label: 'انقلاب اسلامی' },
        { id: 'iran_war_conditions', label: 'شرایط جنگی ایران' },
        { id: 'iran_others', label: 'دیگر موضوعات ایران' }
      ]
    },
    { id: 'special', label: 'نسخه ویژه ⭐' },
    { id: 'column', label: 'فارسی ✍️' },
    { id: 'punjabi', label: 'پنجابی 📖' },
    { id: 'international', label: 'بین‌المللی 🌍' }
  ];

  const getArticleKey = (article) => `${article.id}-${article.title}`;
  
  // Consistent pseudo-random generator for varied but fixed views/likes per article
  const seededRandom = (seed) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash % 10000) / 10000;
  };

  const getBaseViews = (article) => {
    const seed = `${article.id}-${article.title}`;
    const rand = seededRandom(seed);
    // Base views between 200 and 2000
    return Math.floor(200 + rand * 1800);
  };

  const getBaseLikes = (article) => {
    const seed = `${article.id}-${article.title}-likes`;
    const rand = seededRandom(seed);
    // Base likes between 20 and 200
    return Math.floor(20 + rand * 180);
  };
  
  const getStats = (article) => {
    const key = getArticleKey(article);
    return {
      views: getBaseViews(article) + (articleViews[key] || 0),
      likes: getBaseLikes(article) + (likedArticles[key] ? 1 : 0),
    };
  };

  const handleOpenArticle = (article) => {
    router.push(`?read=${article.id}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleArticleLike = (article) => {
    const key = getArticleKey(article);
    setLikedArticles(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem('articleLikesV2', JSON.stringify(updated));
      return updated;
    });
  };

  const shareArticle = async (article, platform) => {
    const url = `${window.location.origin}/fa/article?read=${article.id}`;
    const text = `این مطلب حاجی شبیر احمد شگری را بخوانید: *${article.title}*`;
    
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
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans" dir="rtl">
      <Navbar />
      <HeroSlider />

      {!selectedArticle && (
        <>
          <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-14 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] mb-4">۴۵ سال روزنامه‌نگاری</h1>
              <h2 className="text-lg md:text-xl text-[#fff7cc] font-light">از یک نویسنده جوان تا مدال آور طلا</h2>
            </div>
          </section>

          <section className="container mx-auto px-4 py-12 relative z-50">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
              <div className="relative w-full md:w-1/3">
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="جستجوی موضوع..."
                  className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-12 focus:outline-none focus:border-[#0b314d] transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map(cat => {
                  const isActiveCategory = filterCategory === cat.id || (cat.subcategories && cat.subcategories.some(sub => sub.id === filterCategory));
                  return (
                    <div key={cat.id} className="relative group hover:z-50 focus-within:z-50">
                      <button
                        onClick={() => setFilterCategory(cat.id)}
                        className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                          isActiveCategory
                            ? 'bg-[#0b314d] text-white shadow-lg scale-105'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                        }`}
                      >
                        {cat.label}
                        {cat.subcategories && (
                          <span className="text-[10px] opacity-70">▼</span>
                        )}
                      </button>

                      {cat.subcategories && (
                        <div className="absolute mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 flex flex-col py-2 z-50 right-0">
                          {cat.subcategories.map(sub => (
                            <button
                              key={sub.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setFilterCategory(sub.id);
                              }}
                              className={`px-5 py-3 text-sm transition-colors hover:bg-gray-50 border-b border-gray-50 last:border-0 text-right ${
                                filterCategory === sub.id ? 'text-[#D4AF37] font-bold bg-gray-50' : 'text-gray-700'
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
              {filteredArticles.map((article, index) => {
                const stats = getStats(article);
                return (
                  <div
                    key={article.id || index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full cursor-pointer"
                    dir="rtl"
                    onClick={() => handleOpenArticle(article)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={article.image || 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80'}
                        alt={article.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-3 flex flex-col flex-1">
                      <div className="flex items-center justify-between text-[10px] text-gray-400 mb-2">
                        <span className="flex items-center gap-1"><FaCalendar className="text-[#D4AF37]" /> {article.date || 'نویسنده: شبیر شگری'}</span>
                        <span className="flex items-center gap-1"><FaEye className="text-[#D4AF37]" /> {stats.views}</span>
                      </div>

                      <h3 className="text-sm md:text-base font-bold text-[#0f4c75] text-center line-clamp-2 leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {article.title}
                      </h3>
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
            <FaArrowLeft className="rotate-180" /> بازگشت به تمام مطالب
          </button>
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="relative aspect-video">
              <img src={selectedArticle.image || 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80'} alt={selectedArticle.title} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b314d] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 right-10 left-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{selectedArticle.title}</h1>
              </div>
            </div>
            <div className="p-8 md:p-12">
               <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-8">
                     <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase font-bold">تاریخ</span>
                        <span className="text-[#0b314d] font-bold">{selectedArticle.date || 'شبیر شگری'}</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase font-bold">بازدید</span>
                        <span className="text-[#0b314d] font-bold">{getStats(selectedArticle).views}</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => toggleArticleLike(selectedArticle)} 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${likedArticles[getArticleKey(selectedArticle)] ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                    >
                      {likedArticles[getArticleKey(selectedArticle)] ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button onClick={() => shareArticle(selectedArticle, 'whatsapp')} className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center"><FaWhatsapp /></button>
                    <button onClick={() => shareArticle(selectedArticle, 'facebook')} className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center"><FaFacebookF /></button>
                    <button onClick={() => shareArticle(selectedArticle, 'native')} className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center"><FaShareAlt /></button>
                  </div>
               </div>
               <div className="text-lg md:text-xl leading-[2.2] text-gray-700 text-justify space-y-8" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default function FarsiArticlesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FarsiArticlesContent />
    </Suspense>
  );
}