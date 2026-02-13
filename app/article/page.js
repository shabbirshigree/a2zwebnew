"use client";
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaShare, FaCalendar, FaNewspaper, FaSearch, FaEye, FaBookOpen } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { articlesData } from './articlesData'; 

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const filteredArticles = (articlesData || []).filter(article => {
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
      
      {/* ہیڈر سیکشن */}
      <div className="bg-[#0f4c75] border-y-4 border-[#D4AF37] py-10 text-center mt-10 shadow-2xl">
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#D4AF37', fontFamily: "'Jameel Noori Nastaleeq', serif", textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Haji Shabbir Ahmed Shigri</h1>
        <p className="text-white text-lg font-light tracking-wide">Senior Journalist | Founder Noor-ul-Quran Project</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        {!selectedArticle ? (
          <>
            {/* کنٹرول پینل: سرچ اور گولڈن بٹن */}
            <div style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '40px', border: '1px solid #eef2f3' }}>
              <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto 25px auto' }}>
                <input type="text" placeholder="تحریر تلاش کریں..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '2px solid #0f4c75', textAlign: 'right', fontSize: '1.1rem', outline: 'none' }} />
                <FaSearch style={{ position: 'absolute', left: '15px', top: '15px', color: '#0f4c75' }} />
              </div>

              {/* ✨ خوبصورت گولڈن بٹن ایفیکٹ کے ساتھ ✨ */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {categories.map(cat => (
                  <button 
                    key={cat.id} 
                    onClick={() => setFilterCategory(cat.id)}
                    style={{ 
                      padding: '10px 24px', 
                      background: filterCategory === cat.id ? 'linear-gradient(145deg, #0f4c75, #0a2e47)' : 'linear-gradient(145deg, #D4AF37, #B8860B)', 
                      color: filterCategory === cat.id ? '#D4AF37' : '#fff', 
                      border: 'none',
                      borderRadius: '50px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      transform: filterCategory === cat.id ? 'scale(1.05)' : 'scale(1)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-5px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(184, 134, 11, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = filterCategory === cat.id ? 'scale(1.05)' : 'scale(1)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* تحریروں کا گرڈ */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
              {filteredArticles.map(article => (
                <div key={article.id} onClick={() => setSelectedArticle(article)} 
                  className="article-card"
                  style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', border: '1px solid #eee', transition: '0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D4AF37'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#eee'}
                >
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img src={article.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.src='https://via.placeholder.com/400x250?text=Article'} />
                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(15, 76, 117, 0.8)', color: '#D4AF37', padding: '4px 12px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 'bold', backdropFilter: 'blur(5px)' }}>
                       {categories.find(c => c.id === article.category)?.label.split(' ')[1]}
                    </div>
                  </div>
                  <div style={{ padding: '20px', textAlign: 'right' }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#0f4c75', marginBottom: '12px', fontFamily: "'Jameel Noori Nastaleeq', serif", height: '2.8rem', overflow: 'hidden' }}>{article.title}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#777', borderTop: '1px solid #f9f9f9', paddingTop: '15px' }}>
                       <span><FaCalendar style={{ marginLeft: '5px', color: '#D4AF37' }} /> {article.date}</span>
                       <span style={{ color: '#0f4c75', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>مطالعہ کریں <FaBookOpen style={{ marginRight: '8px' }} /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* تحریر کا مکمل ویو */
          <div className="article-card" style={{ background: 'white', padding: '40px', borderRadius: '25px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '1px solid #eef2f3' }}>
            <button onClick={() => setSelectedArticle(null)} 
              style={{ background: '#0f4c75', color: '#D4AF37', padding: '12px 25px', borderRadius: '12px', border: 'none', cursor: 'pointer', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(15, 76, 117, 0.2)' }}> 
              <FaArrowLeft /> فہرست میں واپس جائیں 
            </button>
            <div style={{ textAlign: 'right', direction: 'rtl' }}>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#0f4c75', marginBottom: '15px', fontFamily: "'Jameel Noori Nastaleeq', serif", lineHeight: '1.4' }}>{selectedArticle.title}</h1>
              <div style={{ display: 'flex', gap: '20px', color: '#666', marginBottom: '30px', fontSize: '0.95rem' }}>
                <span><FaCalendar style={{ color: '#D4AF37' }} /> {selectedArticle.date}</span>
                <span><FaNewspaper style={{ color: '#D4AF37' }} /> {selectedArticle.paper}</span>
              </div>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <img src={selectedArticle.image} style={{ width: '100%', maxWidth: '800px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
              <div 
                style={{ fontSize: '1.4rem', lineHeight: '2.2', color: '#333', fontFamily: "'Jameel Noori Nastaleeq', serif", textAlign: 'justify' }} 
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