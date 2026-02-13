"use client";
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaCalendar, FaNewspaper, FaEye } from 'react-icons/fa';
// 👇 ہیڈر یہاں امپورٹ ہونا چاہیے
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
// 👇 ڈیٹا اسی فولڈر میں ہے، اس لیے یہ یہاں کام کرے گا
import { articlesData } from './articlesData'; 

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const Articles = (articlesData || []).filter(article => {
    const title = article.title ? article.title.toLowerCase() : '';
    const matchesSearch = title.includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'column', label: '✍️ کالمز' },
    { id: 'punjabi', label: '📖 پنجابی' },
    { id: 'english', label: '🅰️ English' },
    { id: 'international', label: '🌍 انٹرنیشنل' },
    { id: 'special', label: '⭐ سپیشل ایڈیشن' },
    { id: 'all', label: '🔍 تمام' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f4f7f6' }}>
      <Navbar />
      <HeroSlider />
      
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        {!selectedArticle ? (
          <>
            {/* سرچ بار */}
            <div className="bg-white p-5 rounded-xl shadow-sm mb-8 text-center border border-gray-200">
              <input 
                type="text" 
                placeholder="مضمون تلاش کریں..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-lg p-3 rounded-lg border border-[#0f4c75] mb-4 text-right outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => setFilterCategory(cat.id)}
                    style={{ 
                      padding: '8px 16px', 
                      background: filterCategory === cat.id ? '#0f4c75' : '#fff', 
                      color: filterCategory === cat.id ? '#D4AF37' : '#0f4c75', 
                      border: '1px solid #0f4c75', 
                      borderRadius: '50px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      transition: '0.3s'
                    }}>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* آرٹیکلز گرڈ */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {filteredArticles.map(article => (
<div key={article.id || Math.random()} onClick={() => setSelectedArticle(article)}
                  className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onError={(e) => e.target.src='https://via.placeholder.com/300x200?text=No+Image'} />
                  </div>
                  <div className="p-4 text-right">
                    <h3 className="text-lg font-bold text-[#0f4c75] mb-2 h-14 overflow-hidden font-serif leading-tight">{article.title}</h3>
                    <div className="flex justify-between text-xs text-gray-500 mt-2 border-t pt-2">
                       <span>{article.date}</span>
                       <span className="text-[#0f4c75] font-bold flex items-center gap-1">پڑھیں <FaEye /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* سنگل آرٹیکل ویو */
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-gray-100">
            <button onClick={() => setSelectedArticle(null)} className="bg-[#0f4c75] text-white px-4 py-2 rounded-lg mb-6 flex items-center gap-2 hover:bg-[#0a2e47]"> 
              <FaArrowLeft /> واپسی 
            </button>
            <div className="text-right" dir="rtl">
              <h1 className="text-2xl md:text-4xl text-[#0f4c75] mb-4 font-serif font-bold leading-relaxed">{selectedArticle.title}</h1>
              <p className="text-gray-500 mb-6 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1"><FaCalendar className="text-[#D4AF37]"/> {selectedArticle.date}</span> 
                <span className="flex items-center gap-1"><FaNewspaper className="text-[#D4AF37]"/> {selectedArticle.paper}</span>
              </p>
              <div className="w-full mb-8 rounded-lg overflow-hidden shadow-md">
                 <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-auto max-h-[600px] object-contain bg-gray-50" />
              </div>
              <div className="text-lg md:text-xl leading-loose text-gray-800 font-serif text-justify" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}