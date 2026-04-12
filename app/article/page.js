"use client";
import { useState, useEffect } from 'react';
import {
  FaArrowLeft, FaCalendar, FaNewspaper, FaEye, FaSearch, FaPenNib, FaBookOpen, FaMedal,
  FaHeart, FaRegHeart, FaShareAlt, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope, FaCommentDots
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { useLocale } from '../components/LocaleProvider';

// ✅ تمام فائلوں کا ڈیٹا یہاں سے امپورٹ ہو رہا ہے
import { allArticles } from './index';

export default function ArticlesPage() {
  const { locale } = useLocale();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedArticles, setLikedArticles] = useState({});
  const [articleViews, setArticleViews] = useState({});
  const [articleComments] = useState({});

  // ✅ 'urdu' سیٹ کرنے سے پیج لوڈ ہوتے ہی اردو کالم نظر آئیں گے
  const [filterCategory, setFilterCategory] = useState('column');
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
    if (typeof window === 'undefined') return;
    const readId = new URLSearchParams(window.location.search).get('read');
    if (!readId) return;
    const matched = (allArticles || []).find((item) => String(item.id) === String(readId));
    if (!matched) return;
    const key = `${matched.id}-${matched.title}`;
    const updatedViews = { ...articleViews, [key]: (articleViews[key] || 0) + 1 };
    setArticleViews(updatedViews);
    localStorage.setItem('articleViews', JSON.stringify(updatedViews));
    setSelectedArticle(matched);
  }, [mounted, selectedArticle, articleViews]);

  if (!mounted) return null;

  // 🔴 یہاں سے آپ کا باقی پرانا کوڈ (filteredArticles وغیرہ) شروع ہوگا

  // 🔴 فلٹرنگ اور سورٹنگ (Sorting) کا مکمل کوڈ
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
    .sort((a, b) => b.id - a.id); // 🌟 یہ وہ نئی لائن ہے جو سب سے نئے (بڑی ID والے) کالم کو اوپر لائے گی!

  const categories = [
    { id: 'column', label: '✍️ اردو' }, // 👈 یہاں دوبارہ 'column' کر دیں
    { id: 'punjabi', label: '📖 پنجابی' },
    { id: 'english', label: '🅰️ English' },
    { id: 'special', label: '⭐ سپیشل ایڈیشن' },
    { id: 'islamic_unity', label: '🤝 اسلامی وحدت' },
    { id: 'international', label: '🌍 انٹرنیشنل' },
    { id: 'all', label: '🔍 تمام' }
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
  };

  const toggleArticleLike = (article) => {
    const key = getArticleKey(article);
    const updatedLikes = { ...likedArticles, [key]: !likedArticles[key] };
    setLikedArticles(updatedLikes);
    localStorage.setItem('articleLikes', JSON.stringify(updatedLikes));
  };

  const getArticleUrl = (article) => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}/article?read=${encodeURIComponent(article.id)}`;
  };

  const shareArticle = async (article, platform) => {
    const url = getArticleUrl(article);
    const text = `حاجی شبیر احمد شگری کی یہ تحریر شیئر کریں: ${article.title}`;
    const imageLine = article.image ? `\nتصویر: ${article.image}` : '';
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(`${text}${imageLine}`);

    const links = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      email: `mailto:shigriinfo@gmail.com?subject=${encodeURIComponent(article.title)}&body=${encodedText}%0A%0A${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };

    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({ title: article.title, text: `${text}${imageLine}`, url });
      } catch {
        return;
      }
      return;
    }

    if (platform === 'telegram' && typeof window !== 'undefined') {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        const tgAppUrl = `tg://msg_url?url=${encodedUrl}&text=${encodedText}`;
        window.location.href = tgAppUrl;
        setTimeout(() => {
          window.open(links.telegram, '_blank', 'noopener,noreferrer,width=700,height=700');
        }, 800);
        return;
      }
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
          {/* 🌟 مین ہیڈنگ */}
          <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-10 md:py-14 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-4 urdu-text tracking-wide">
                صحافت کے 45 سال
              </h1>
              <h2 className="text-lg md:text-xl text-[#fff7cc] font-light urdu-text tracking-widest">
                ننھے لکھاری سے گولڈ میڈلسٹ تک کا شاندار سفر
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
            </div>
          </section>

          {/* 📖 45 سالہ صحافتی سفر کا تعارف */}
          <section className="container mx-auto px-4 py-12" dir="rtl">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[80px] opacity-20"></div>

              <div className="bg-[#0b314d] text-white p-8 md:p-10 border-b-4 border-[#D4AF37]">
                <p className="text-lg md:text-2xl leading-relaxed urdu-text font-light text-justify italic">
                  "شاید قدرت نے مجھے صحافت اور ادب کے لیے ہی تخلیق کیا تھا۔ بچپن ہی سے مجھے لکھنے، ڈرائنگ اور آرٹ سے جنون کی حد تک لگاؤ تھا۔ ریڈیو پاکستان کے پروگراموں میں شرکت کی بدولت اسکول اور معاشرے میں ایک خاص پہچان بن چکی تھی۔ اسکول کے دور میں، میں 'بزمِ ادب' اور ڈراموں کی جان ہوا کرتا تھا۔ ڈرائنگ میں ہمیشہ اول آتا اور تعلیمی میدان میں بھی نمایاں پوزیشن حاصل کرتا۔ گویا، فرہنگ اور صحافت کی صلاحیتیں کم عمری ہی سے میری روح میں رچی بسی تھیں۔"
                </p>
              </div>

              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-[#0b314d] text-4xl mb-4 flex justify-center"><FaPenNib /></div>
                  <h3 className="text-xl font-bold text-[#0f4c75] mb-3 urdu-text text-center border-b border-gray-200 pb-2">ابتدائی جدوجہد اور سکردو کا کٹھن دور</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed urdu-text text-justify">
                    میں نے بہت چھوٹی عمر میں روزنامہ 'نوائے وقت' کے بچوں کے مقبول رسالے 'پھول اور کلیاں' کے لیے لکھنا شروع کر دیا تھا۔ یہ وہ دور تھا جب سکردو کا رابطہ اسلام آباد سے صرف پی آئی اے کے 'فوکر طیارے' کے ذریعے ہوتا تھا، اور وہ بھی مکمل طور پر موسم کا محتاج تھا۔ کبھی پندرہ بیس دن تک پرواز نہ ہوتی تو اخبارات کی شکل تک دیکھنے کو نہ ملتی۔ ان کٹھن حالات میں، میں اپنی تحریریں، لطیفے، اقوالِ زریں اور کارٹون اخبار کو بھیجتا اور پھر ان کے شائع ہو کر مجھ تک پہنچنے کا ہفتوں انتظار کرتا۔ پاکستان کے انتہائی شمال میں رہ کر اخبار تک رسائی اور اس میں اپنی تحریر چھپوانا واقعی 'جوئے شیر لانے' کے مترادف تھا۔
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-[#0b314d] text-4xl mb-4 flex justify-center"><FaBookOpen /></div>
                  <h3 className="text-xl font-bold text-[#0f4c75] mb-3 urdu-text text-center border-b border-gray-200 pb-2">'چلتی پھرتی لائبریری' سے باقاعدہ مصنف تک</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed urdu-text text-justify">
                    دوستوں کی محفلوں میں مجھے 'لطیفوں کا بادشاہ' کہا جاتا تھا۔ کہانیوں اور مطالعے کا اس قدر شوق تھا کہ میں اپنی کلاس فیلوز کے لیے ایک 'چلتی پھرتی لائبریری' بن چکا تھا، جو انہیں پڑھنے کے لیے کتابیں فراہم کرتا تھا۔ درحقیقت، یہی مطالعے کا جنون تھا جس نے مجھے آگے چل کر ایک باقاعدہ مصنف بنا دیا۔ اس وقت کون جانتا تھا کہ یہ ننھا لکھاری ایک دن پاکستان کی صحافت میں اپنے نام اور کمالِ فن کے جھنڈے گاڑے گا! ملکی و غیر ملکی اداروں کے روزناموں، ہفت روزوں اور مجلات میں نہ صرف لکھے گا بلکہ ان کا معزز ایڈیٹر بھی بنے گا۔
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-[#0b314d] text-4xl mb-4 flex justify-center"><FaMedal /></div>
                  <h3 className="text-xl font-bold text-[#0f4c75] mb-3 urdu-text text-center border-b border-gray-200 pb-2">منفرد موضوعات اور 45 سالہ قلمی ریکارڈ</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed urdu-text text-justify">
                    اپنی بے لوث خدمات کے اعتراف میں 'گولڈ میڈل' کا حقدار ٹھہرنا محض میرے مالک کے کرم کی انتہا ہے۔ میری ہمیشہ کوشش رہی ہے کہ ان منفرد اور اچھوتے موضوعات پر قلم اٹھاؤں جن پر لکھنے کی اشد ضرورت ہوتی ہے مگر عام لکھاری ان سے گریز کرتے ہیں۔ آج الحمدللہ، میرے پاس موجود ریکارڈ کے مطابق میرے شائع شدہ کالمز، مضامین اور سفرناموں کی تعداد 300 سے تجاوز کر چکی ہے، جبکہ 80 سے زائد 'اسپیشل ایڈیشنز' شائع ہو چکے ہیں۔ یہ سب میرے قارئین کی محبت اور حوصلہ افزائی کا ثمر ہے۔
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <div className="container mx-auto px-4 pb-16 pt-4">
        {!selectedArticle ? (
          <>
            {/* 🔍 سرچ بار اور فلٹرز (International Level Design) */}
            <section className="-mt-10 md:-mt-12 mb-12 relative z-20">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-[#D4AF37]/20">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-1/2 group">
                    <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37] group-focus-within:scale-110 transition-transform" />
                    <input
                      type="text"
                      placeholder="تحریر تلاش کریں... (Search Articles)"
                      className="w-full pr-12 pl-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#D4AF37] focus:ring-0 outline-none transition-all urdu-text text-lg font-bold"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center w-full md:w-1/2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setFilterCategory(cat.id)}
                        className={`px-6 py-3 rounded-full urdu-text text-base font-bold transition-all shadow-md hover:shadow-lg ${
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

            {/* 📚 آرٹیکلز گرڈ */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" dir="rtl">
                {filteredArticles.map((article, index) => (
                  <div
                    key={`${article.id}-${index}`}
                    onClick={() => handleOpenArticle(article)}
                    className="group relative bg-white rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_20px_50px_rgba(15,76,117,0.15)] transition-all duration-500 border border-gray-100 flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* تصویر اور بیج */}
                    <div className="h-56 overflow-hidden bg-gray-100 relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b314d]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0b314d] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-[#D4AF37]/30">
                        {categories.find(c => c.id === (Array.isArray(article.category) ? article.category[0] : article.category))?.label.replace(/[^a-zA-Zآ-ی]/g, '').trim()}
                      </div>
                    </div>

                    {/* مواد (Content) */}
                    <div className="p-6 flex flex-col flex-grow relative">
                      <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold mb-3">
                        <FaCalendar /> {article.date}
                      </div>
                      <h3 className="text-xl font-bold text-[#0b314d] mb-3 urdu-text leading-tight group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm urdu-text line-clamp-3 mb-6 flex-grow leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* انٹرایکشن بار */}
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
                          <FaArrowLeft className={locale === 'en' ? 'rotate-180' : ''} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500 urdu-text">اس خانے میں کوئی کالم موجود نہیں۔</p>
              </div>
            )}
          </>
        ) : (

          /* 📖 سنگل آرٹیکل ویو (پڑھنے والا صفحہ) */
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 rounded-3xl shadow-2xl border-t-8 border-[#D4AF37]">
            <button
              onClick={() => setSelectedArticle(null)}
              className="bg-[#0b314d] text-[#D4AF37] px-6 py-2.5 rounded-full mb-8 flex items-center gap-2 hover:bg-[#D4AF37] hover:text-[#0b314d] transition-all shadow-md font-bold"
            >
              <FaArrowLeft /> واپس کالمز پر جائیں
            </button>

            <div className="text-right" dir={selectedArticle.category === 'english' || (Array.isArray(selectedArticle.category) && selectedArticle.category.includes('english')) ? 'ltr' : 'rtl'}>
              <h1 className="text-3xl md:text-5xl text-[#0b314d] mb-6 font-bold leading-tight" style={{ fontFamily: selectedArticle.category === 'english' || (Array.isArray(selectedArticle.category) && selectedArticle.category.includes('english')) ? 'sans-serif' : "'Jameel Noori Nastaleeq', serif" }}>
                {selectedArticle.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-600 mb-8 pb-6 border-b border-gray-200">
                <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full"><FaCalendar className="text-[#D4AF37]" /> {selectedArticle.date}</span>
                <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full"><FaNewspaper className="text-[#D4AF37]" /> {selectedArticle.paper}</span>
              </div>

              <div className="mb-8 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#fffef8] to-[#f8fbff] p-4 md:p-5 shadow-sm">
                <div className="flex flex-wrap gap-2 md:gap-3 items-center justify-between">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-sm">
                    <button
                      type="button"
                      onClick={() => toggleArticleLike(selectedArticle)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 hover:scale-105 transition-transform"
                    >
                      {likedArticles[getArticleKey(selectedArticle)] ? <FaHeart className="animate-pulse" /> : <FaRegHeart />}
                      <span>{getStats(selectedArticle).likes} لائکس</span>
                    </button>
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700"><FaEye /> {getStats(selectedArticle).views} ویوز</span>
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700"><FaCommentDots /> {getStats(selectedArticle).comments} کمنٹس</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button type="button" onClick={() => shareArticle(selectedArticle, 'whatsapp')} className="social-icon-btn social-whatsapp"><FaWhatsapp /></button>
                    <button type="button" onClick={() => shareArticle(selectedArticle, 'facebook')} className="social-icon-btn social-facebook"><FaFacebookF /></button>
                    <button type="button" onClick={() => shareArticle(selectedArticle, 'telegram')} className="social-icon-btn social-telegram"><FaTelegramPlane /></button>
                    <button type="button" onClick={() => shareArticle(selectedArticle, 'email')} className="social-icon-btn social-email"><FaEnvelope /></button>
                    <button type="button" onClick={() => shareArticle(selectedArticle, 'x')} className="social-icon-btn social-twitter"><FaXTwitter /></button>
                    <button type="button" onClick={() => shareArticle(selectedArticle, 'native')} className="share-btn"><FaShareAlt /> دوسرے پلیٹ فارمز</button>
                  </div>
                </div>
              </div>

              <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg border-2 border-[#D4AF37]/20">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-auto object-cover" />
              </div>

              <div
                className="article-content text-lg md:text-xl leading-loose text-gray-800 text-justify"
                style={{ fontFamily: selectedArticle.category === 'english' || (Array.isArray(selectedArticle.category) && selectedArticle.category.includes('english')) ? 'sans-serif' : "'Jameel Noori Nastaleeq', serif" }}
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}