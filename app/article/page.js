"use client";
import { useState, useEffect } from 'react';
import { 
  FaArrowLeft, FaCalendar, FaNewspaper, FaEye, FaSearch, 
  FaPenNib, FaBookOpen, FaMedal, FaShareAlt 
} from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import Image from '../components/CldImage';
import { articlesData } from './articlesData';

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { 
    setMounted(true); 
    // واٹس ایپ لنک سے آنے والے قاری کو پہچاننا
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const articleId = urlParams.get('id');
      if (articleId && articlesData) {
        const foundArticle = articlesData.find(a => a.id.toString() === articleId);
        if (foundArticle) setSelectedArticle(foundArticle);
      }
    }
  }, []);

  // جیسے ہی کالم کھلے، اوپر ایڈریس بار میں اس کی آئی ڈی دکھانا
  useEffect(() => {
    if (selectedArticle && typeof window !== 'undefined') {
      const newUrl = `${window.location.origin}${window.location.pathname}?id=${selectedArticle.id}`;
      window.history.pushState({ id: selectedArticle.id }, '', newUrl);
    }
  }, [selectedArticle]);

  if (!mounted) return null;

  const filteredArticles = (articlesData || []).filter(article => {
    const title = article.title ? article.title.toLowerCase() : '';
    const matchesSearch = title.includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'column', label: '✍️ اردو' }, { id: 'punjabi', label: '📖 پنجابی' },
    { id: 'english', label: '🅰️ English' }, { id: 'special', label: '⭐ سپیشل ایڈیشن' },
    { id: 'international', label: '🌍 انٹرنیشنل' }, { id: 'all', label: '🔍 تمام' }
  ];

  // 🔴 شیئرنگ کا وہ فنکشن جو اب ہر حال میں نیلا لنک دکھائے گا
  const handleUniversalShare = async () => {
    const articleUrl = window.location.href; // یہ اب موجودہ لنک (id کے ساتھ) اٹھائے گا
    
    // 🔴 لنک کو سب سے آخر میں رکھا گیا ہے تاکہ یہ نیلا ہو جائے
    const shareDetails = `*${selectedArticle.title}*\n\n✍️ قلمکار: حاجی شبیر احمد شگری\n(معروف کالم نگار، اینکر اور پروڈیوسر)\n\n"${selectedArticle.excerpt}"\n\n🌐 مکمل کالم پڑھنے کے لیے لنک پر کلک کریں 👇\n\n${articleUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedArticle.title,
          text: shareDetails,
        });
      } catch (error) {
        console.log('شیئرنگ کینسل ہو گئی');
      }
    } else {
      // متبادل طریقہ اگر براؤزر سپورٹ نہ کرے
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareDetails)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans select-none">
      <Navbar />
      <HeroSlider />

      {!selectedArticle ? (
        <div className="container mx-auto px-4 pb-16 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" dir="rtl">
              {filteredArticles.map(article => (
                <div key={article.id} onClick={() => setSelectedArticle(article)} className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full group">
                  <div className="h-48 overflow-hidden relative">
                    <Image src={article.image} alt={article.title} width={400} height={250} isColumn={true} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex flex-col flex-grow text-right">
                    <h3 className="text-lg font-bold text-[#0b314d] mb-2 urdu-text line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm urdu-text line-clamp-3 mb-4">{article.excerpt}</p>
                    <div className="mt-auto flex justify-between items-center text-xs text-gray-400 border-t pt-3">
                      <span className="flex items-center gap-1"><FaCalendar /> {article.date}</span>
                      <span className="text-[#0f4c75] font-bold">پڑھیں <FaEye /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 rounded-3xl shadow-2xl border-t-8 border-[#D4AF37]">
            <button onClick={closeArticle} className="bg-[#0b314d] text-[#D4AF37] px-6 py-2 rounded-full mb-8 flex items-center gap-2 font-bold"><FaArrowLeft /> واپس جائیں</button>
            <div className="text-right" dir="rtl">
              <h1 className="text-3xl md:text-5xl text-[#0b314d] mb-6 font-bold urdu-text leading-tight">{selectedArticle.title}</h1>
              <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-lg border-2 border-[#D4AF37]/10">
                <Image src={selectedArticle.image} alt={selectedArticle.title} width={1200} height={600} isColumn={true} className="w-full h-auto" />
              </div>
              <div className="article-content text-lg md:text-xl leading-loose text-gray-800 text-justify mb-10 urdu-text" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm mt-10">
                <div className="text-right">
                  <h3 className="font-bold text-[#0b314d] urdu-text text-xl">تحریر شیئر کریں</h3>
                  <p className="text-gray-500 text-sm urdu-text">اس لنک پر کلک کرنے والا سیدھا اسی کالم پر آئے گا</p>
                </div>
                <button onClick={handleUniversalShare} className="flex items-center gap-2 bg-[#D4AF37] text-[#0b314d] px-8 py-3 rounded-full hover:bg-[#0b314d] hover:text-[#D4AF37] shadow-lg font-bold text-lg urdu-text">
                  <FaShareAlt /> شیئر کریں
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}