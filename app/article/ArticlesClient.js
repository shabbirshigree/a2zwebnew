"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  FaArrowLeft, FaCalendar, FaNewspaper, FaEye, FaSearch, FaPenNib, FaBookOpen, FaMedal,
  FaHeart, FaRegHeart, FaShareAlt, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope, FaCommentDots, FaTimes
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { useLocale } from '../components/LocaleProvider';
import { allArticles } from './index.js';

function ArticlesContent() {
  const { locale } = useLocale();
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
    const matched = (allArticles || []).find((item) => String(item.id) === String(readId));
    if (!matched) return;

    const key = getArticleKey(matched);
    setArticleViews(prev => {
      const updated = { ...prev, [key]: (prev[key] || 0) + 1 };
      localStorage.setItem('articleViews', JSON.stringify(updated));
      return updated;
    });
    setSelectedArticle(matched);
  }, [mounted, searchParams, allArticles]);

  if (!mounted) return null;

  const filteredArticles = (allArticles || [])
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
    { id: 'all', label: locale === 'en' ? 'All Articles 🔍' : locale === 'fa' ? 'همه مقالات 🔍' : 'تمام 🔍' },
    { id: 'special', label: locale === 'en' ? 'Special Edition ⭐' : locale === 'fa' ? 'نسخہ ھای ویژہ ⭐' : 'سپیشل ایڈیشن ⭐' },
    { id: 'english', label: 'English 🅰️' },
    { id: 'punjabi', label: locale === 'en' ? 'Punjabi 📖' : locale === 'fa' ? 'پنجابی 📖' : 'پنجابی 📖' },
    { id: 'column', label: locale === 'en' ? 'Urdu ✍️' : locale === 'fa' ? 'اردو ✍️' : 'اردو ✍️' },
    { id: 'islamic_unity', label: locale === 'en' ? 'Islamic Unity 🤝' : locale === 'fa' ? 'وحدت اسلامی 🤝' : 'اسلامی وحدت 🤝' },
    { id: 'international', label: locale === 'en' ? 'International 🌍' : locale === 'fa' ? 'بین المللی 🌍' : 'انٹرنیشنل 🌍' }
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
    router.push(`?read=${article.id}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleArticleLike = (article) => {
    const key = getArticleKey(article);
    setLikedArticles(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem('articleLikes', JSON.stringify(updated));
      return updated;
    });
  };

  const getArticleUrl = (article) => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}/article?read=${encodeURIComponent(article.id)}`;
  };

  const shareArticle = async (article, platform) => {
    const url = getArticleUrl(article);
    const text = `حاجی شبیر احمد شگری کی یہ تحریر ویب سائٹ پر پڑھیں: *${article.title}*`;
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
      } catch {
        return;
      }
      return;
    }

    const shareLink = links[platform];
    if (shareLink) window.open(shareLink, '_blank', 'noopener,noreferrer,width=700,height=700');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans">
      <Navbar />
      <HeroSlider />

      {!selectedArticle && (
        <>
          <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-10 md:py-14 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
                        <div className="container mx-auto px-4 relative z-10">
                            <h1 className={`text-3xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-4 tracking-wide ${locale === 'ur' ? 'urdu-text' : ''}`}>
                                {locale === 'en' ? '45 Years of Journalism' : locale === 'fa' ? '۴۵ سال فعالیت در مطبوعات' : 'صحافت کے 45 سال'}
                            </h1>
                            <h2 className={`text-lg md:text-xl text-[#fff7cc] font-light tracking-widest ${locale === 'ur' ? 'urdu-text' : ''}`}>
                                {locale === 'en' ? 'A Splendid Journey from a Child Writer to a Gold Medalist' : locale === 'fa' ? 'سفری درخشان از یک نویسنده کودک تا دریافت کننده مدال طلا' : 'ننھے لکھاری سے گولڈ میڈلسٹ تک کا شاندار سفر'}
                            </h2>
                            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
                        </div>
                    </section>

          <section className="container mx-auto px-4 py-12" dir="rtl">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[80px] opacity-20"></div>

              <div className="bg-[#0b314d] text-white p-8 md:p-10 border-b-4 border-[#D4AF37]">
                <p className="text-lg md:text-2xl leading-relaxed urdu-text font-light text-justify italic">
                  "شاید قدرت نے مجھے صحافت اور ادب کے لیے ہی تخلیق کیا تھا۔ بچپن ہی سے مجھے لکھنے، ڈرائنگ اور آرٹ سے جنون کی حد تک لگاؤ تھا۔ ریڈیو پاکستان کے پروگراموں میں شرکت کی بدولت اسکول اور معاشرے میں ایک خاص پہچان بن چکی تھی۔ اسکول کے دور میں، میں 'بزمِ ادب' اور ڈراموں کی جان ہوا کرتا تھا۔ ڈرائنگ میں ہمیشہ اول آتا اور تعلیمی میدان میں بھی نمایاں پوزیشن حاصل کرتا۔ گویا، فرہنگ اور صحافت کی صلاحیتیں کم عمری ہی سے میری روح میں رچی بسی تھیں۔"
                </p>
              </div>

              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-[#0b314d] shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-[#0b314d] text-4xl mb-4 flex justify-center"><FaPenNib /></div>
                  <h3 className="text-xl font-bold text-[#0f4c75] mb-3 urdu-text text-center border-b border-gray-200 pb-2">ابتدائی جدوجہد اور سکردو کا کٹھن دور</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed urdu-text text-justify">
                    میں نے بہت چھوٹی عمر میں روزنامہ 'نوائے وقت' کے بچوں کے مقبول رسالے 'پھول اور کلیاں' کے لیے لکھنا شروع کر دیا تھا۔ یہ وہ دور تھا جب سکردو کا رابطہ اسلام آباد سے صرف پی آئی اے کے 'فوکر طیارے' کے ذریعے ہوتا تھا، اور وہ بھی مکمل طور پر موسم کا محتاج تھا۔ کبھی پندرہ بیس دن تک پرواز نہ ہوتی تو اخبارات کی شکل تک دیکھنے کو نہ ملتی۔ ان کٹھن حالات میں، میں اپنی تحریریں، لطیفے، اقوال زریں اور کارٹون اخبار کو بھیجتا اور پھر ان کے شائع ہو کر مجھ تک پہنچنے کا ہفتوں انتظار کرتا۔ پاکستان کے انتہائی شمال میں رہ کر اخبار تک رسائی اور اس میں اپنی تحریر چھپوانا واقعی 'جوئے شیر لانے' کے مترادف تھا۔
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-[#0b314d] text-4xl mb-4 flex justify-center"><FaMedal /></div>
                  <h3 className="text-xl font-bold text-[#0f4c75] mb-3 urdu-text text-center border-b border-gray-200 pb-2">گولڈ میڈل</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed urdu-text text-justify">
                    علمی ادبی و فرہنگی خدمات کے اعتراف میں مجھے گولڈ میڈل سے نوازا گیا۔ حضرت اقبال ؒ کی زندگی پر ایران کی جانب سے بین الاقوامی فلم سیریز میں بنائی گئی۔ اور مجھے اس کا پروڈکشن مینیجر ہونے کا اعزاز حاصل ہوا۔ اس سیریز میں حضرت اقبالؒ کی پوری زندگی کے واقعات بتائے گئے ہیں۔ یہ گولڈ میڈل حضرت اقبالؒ کے پوتے منیب اقبال نے ایک تقریب میں اپنے ہاتھوں سے پہنایا۔
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-[#0b314d] shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-[#0b314d] text-4xl mb-4 flex justify-center"><FaBookOpen /></div>
                  <h3 className="text-xl font-bold text-[#0f4c75] mb-3 urdu-text text-center border-b border-gray-200 pb-2">نصف صدی کا سفر</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed urdu-text text-justify">
                    آج جب میں پیچھے مڑ کر دیکھتا ہوں تو یہ 45 سال کا طویل سفر ایک خواب معلوم ہوتا ہے۔ میں نے ملک کے بڑے اخبارات بشمول 'نوائے وقت'، 'جنگ'، 'اوصاف' اور 'پاکستان' کے لیے کالم لکھے۔ میری تحریریں محض الفاظ نہیں بلکہ میرے مشاہدات، تجربات اور معاشرے کی اصلاح کا ایک ذریعہ رہی ہیں۔ صحافت میرے لیے کبھی پیشہ نہیں بلکہ ایک مشن رہا ہے، اور ان شاء اللہ قلم کا یہ سفر آخری سانس تک جاری رہے گا۔
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
              <div className="relative w-full md:w-1/3 group">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0b314d] transition-colors" />
                <input
                                            type="text"
                                            placeholder={locale === 'en' ? 'Search topics...' : locale === 'fa' ? 'جستجوی موضوعات...' : 'موضوع تلاش کریں...'}
                                            className={`w-full bg-white border-2 border-gray-100 rounded-2xl py-4 px-12 text-right focus:outline-none focus:border-[#0b314d] focus:ring-4 focus:ring-[#0b314d]/5 transition-all shadow-sm ${locale === 'ur' ? 'urdu-text' : ''}`}
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
              </div>

              <div className="flex flex-wrap justify-center gap-3" dir="rtl">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setFilterCategory(cat.id)}
                    className={`px-6 py-2.5 rounded-xl font-bold urdu-text text-sm transition-all duration-300 ${filterCategory === cat.id
                      ? 'bg-[#0b314d] text-white shadow-lg shadow-[#0b314d]/20 scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredArticles.map((article) => {
                const stats = getStats(article);
                return (
                  <div
                    key={article.id}
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
                        <span className="flex items-center gap-1"><FaCalendar className="text-[#D4AF37]" /> {article.date || 'شبیر شگری'}</span>
                        <span className="flex items-center gap-1"><FaEye className="text-[#D4AF37]" /> {stats.views}</span>
                      </div>

                      <h3 className={`text-sm md:text-base font-bold text-[#0f4c75] text-center line-clamp-2 leading-tight group-hover:text-[#D4AF37] transition-colors ${locale === 'ur' ? 'urdu-text' : ''}`}>
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
        <section className="container mx-auto px-4 py-12 md:py-20 animate-fadeIn" dir="rtl">
          <button
                                onClick={() => {
                                    setSelectedArticle(null);
                                    router.push(window.location.pathname, { scroll: false });
                                }}
                                className={`flex items-center gap-3 text-[#0b314d] font-bold mb-10 hover:gap-5 transition-all bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 ${locale === 'ur' ? 'urdu-text' : ''}`}
                            >
                                <FaArrowLeft className="rotate-180" /> {locale === 'en' ? 'Back to all articles' : locale === 'fa' ? 'بازگشت به همه مقالات' : 'تمام مضامین پر واپس جائیں'}
                            </button>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative aspect-video">
                <img
                  src={selectedArticle.image || 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80'}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b314d] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 right-10 left-10">
                  <h1 className={`text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg ${locale === 'ur' ? 'urdu-text' : ''}`}>
                    {selectedArticle.title}
                  </h1>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-12 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#0b314d]/5 flex items-center justify-center">
                        <FaCalendar className="text-[#D4AF37]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">{locale === 'en' ? 'Date' : locale === 'fa' ? 'تاریخ' : 'تاریخ تحریر'}</span>
                        <span className={`text-[#0b314d] font-bold ${locale === 'ur' ? 'urdu-text' : ''}`}>{selectedArticle.date || 'شبیر شگری'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#0b314d]/5 flex items-center justify-center">
                        <FaEye className="text-[#D4AF37]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">{locale === 'en' ? 'Views' : locale === 'fa' ? 'بازدید' : 'مشاہدات'}</span>
                        <span className={`text-[#0b314d] font-bold ${locale === 'ur' ? 'urdu-text' : ''}`}>{getStats(selectedArticle).views}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => toggleArticleLike(selectedArticle)} 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${likedArticles[getArticleKey(selectedArticle)] ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                    >
                      {likedArticles[getArticleKey(selectedArticle)] ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button onClick={() => shareArticle(selectedArticle, 'whatsapp')} className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#25D366]/20"><FaWhatsapp /></button>
                    <button onClick={() => shareArticle(selectedArticle, 'facebook')} className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#1877F2]/20"><FaFacebookF /></button>
                    <button onClick={() => shareArticle(selectedArticle, 'x')} className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-black/20"><FaXTwitter /></button>
                    <button onClick={() => shareArticle(selectedArticle, 'telegram')} className="w-10 h-10 rounded-full bg-[#0088cc] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#0088cc]/20"><FaTelegramPlane /></button>
                    <button onClick={() => shareArticle(selectedArticle, 'native')} className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#D4AF37]/20"><FaShareAlt /></button>
                  </div>
                </div>

                <div
                  className="urdu-text text-lg md:text-xl leading-[2.2] text-gray-700 text-justify space-y-8 article-content"
                  dangerouslySetInnerHTML={{
                    __html: selectedArticle.content?.includes('<p')
                      ? selectedArticle.content
                      : selectedArticle.content?.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('')
                  }}
                />

                <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 rounded-full border-4 border-[#D4AF37] p-1 mb-4 shadow-xl">
                                                <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772598628/shabbir_ahmed_shigri_bgzwvt.png" className="w-full h-full rounded-full object-cover" alt="Author" />
                                            </div>
                                            <h4 className={`text-2xl font-bold text-[#0b314d] mb-2 ${locale === 'ur' ? 'urdu-text' : ''}`}>
                                                {locale === 'en' ? 'Haji Shabbir Ahmed Shigri' : locale === 'fa' ? 'حاجی شبیر احمد شگری' : 'حاجی شبیر احمد شگری'}
                                            </h4>
                                            <p className={`text-gray-400 max-w-md ${locale === 'ur' ? 'urdu-text' : ''}`}>
                                                {locale === 'en' ? 'Gold Medalist Journalist, Columnist and Socio-Cultural Activist' : locale === 'fa' ? 'روزنامه‌نگار برنده مدال طلا، ستون‌نویس و فعال اجتماعی و فرهنگی' : 'گولڈ میڈلسٹ صحافی، کالم نگار اور سماجی و ثقافتی کارکن'}
                                            </p>
                                        </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticlesContent />
    </Suspense>
  );
}
