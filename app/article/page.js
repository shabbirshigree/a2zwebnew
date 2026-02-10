"use client";
import { useState, useEffect } from 'react';
import { articlesData } from '../article-data';
import { FaArrowLeft, FaShare, FaEye, FaCalendar, FaTag, FaNewspaper, FaTimes, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';

// Global styles with animations
const styleSheet = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .article-card {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const styleEl = document.createElement('style');
    styleEl.textContent = styleSheet;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  // Filter articles based on search and category
  const filteredArticles = articlesData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured articles (first 3)
  const featuredArticles = articlesData.slice(0, 3);

  // Get unique categories
  const categories = ['all', ...new Set(articlesData.map(a => a.category))];

  const shareArticle = (article) => {
    const text = `${article.title} - ${article.paper}`;
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: text,
        url: url
      });
    }
  };

  const estimateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)', paddingTop: '80px' }}>
      {/* Main site header (Navbar + Slider) */}
      <Navbar />
      <HeroSlider />

      <div className="bg-[#0f4c75] border-y-4 border-[#D4AF37] py-8 text-center shadow-xl relative z-20 mt-10" style={{marginTop: '0'}}>
        <h1 style={{ fontSize: 'clamp(1.8em, 4vw, 3em)', margin: '0 0 10px 0', fontFamily: "'Jameel Noori Nastaleeq', serif", color: '#D4AF37' }}>Haji Shabbir Ahmed Shigri</h1>
        <p style={{ margin: 0, fontSize: '1em', color: 'white', fontWeight: '500' }}>Senior Journalist | Cultural Expert | Founder Noor-ul-Quran Project</p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '30px 20px' }}>
        
        {!selectedArticle ? (
          <>
            {/* Featured Articles Section */}
            {mounted && filteredArticles.length > 0 && filterCategory === 'all' && searchTerm === '' && (
              <div style={{ marginBottom: '50px' }}>
                <h2 style={{
                  fontSize: '1.8em',
                  color: '#0f4c75',
                  marginBottom: '20px',
                  fontFamily: "'Jameel Noori Nastaleeq', serif",
                  textAlign: 'right',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: 'flex-end'
                }}>
                  <FaNewspaper style={{ color: '#D4AF37' }} />
                  مشہور مضامین
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px'
                }}>
                  {featuredArticles.map((article, index) => (
                    <div
                      key={article.id}
                      className="article-card"
                      onClick={() => setSelectedArticle(article)}
                      style={{
                        background: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        border: '2px solid transparent',
                        boxShadow: '0 4px 15px rgba(15, 76, 117, 0.1)',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(15, 76, 117, 0.25)';
                        e.currentTarget.style.borderColor = '#D4AF37';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 76, 117, 0.1)';
                        e.currentTarget.style.borderColor = 'transparent';
                      }}
                    >
                      {/* Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'linear-gradient(135deg, #D4AF37, #ffd700)',
                        color: '#0f4c75',
                        padding: '8px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8em',
                        fontWeight: 'bold',
                        zIndex: 10,
                        boxShadow: '0 4px 10px rgba(212, 175, 55, 0.3)'
                      }}>
                        ⭐ مشہور
                      </div>

                      {/* Image */}
                      <div style={{ 
                        height: '200px', 
                        overflow: 'hidden',
                        position: 'relative',
                        background: 'linear-gradient(135deg, #0f4c75, #1a6a96)'
                      }}>
                        <img
                          src={article.image}
                          alt={article.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease'
                          }}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200?text=Article';
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div style={{ padding: '20px' }}>
                        <h3 style={{
                          margin: '0 0 10px 0',
                          color: '#0f4c75',
                          fontSize: '1.1em',
                          fontWeight: 'bold',
                          direction: 'rtl',
                          textAlign: 'right',
                          minHeight: '50px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {article.title}
                        </h3>

                        <div style={{
                          display: 'flex',
                          gap: '10px',
                          marginBottom: '10px',
                          fontSize: '0.8em',
                          color: '#666',
                          justifyContent: 'flex-end',
                          direction: 'rtl',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <FaCalendar /> {article.date}
                          </span>
                        </div>

                        <p style={{
                          margin: '10px 0',
                          color: '#555',
                          fontSize: '0.9em',
                          direction: 'rtl',
                          textAlign: 'right',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          {article.excerpt}
                        </p>

                        <div style={{
                          borderTop: '1px solid #eee',
                          paddingTop: '10px',
                          marginTop: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <span style={{ fontSize: '0.8em', color: '#999' }}>
                            📰 {article.category === 'column' ? 'کالم' : 'پنجابی'}
                          </span>
                          <span style={{
                            background: '#0f4c75',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.75em',
                            fontWeight: 'bold'
                          }}>
                            پڑھیں →
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Search and Filter Section */}
            <div style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(15, 76, 117, 0.1)',
              marginBottom: '30px',
              border: '2px solid #f0f0f0',
              transition: 'all 0.3s ease'
            }}>
              
              {/* Search Bar */}
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <FaSearch style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#0f4c75',
                  fontSize: '1.1em'
                }} />
                <input
                  type="text"
                  placeholder="مضمون یا کالم تلاش کریں... Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 15px 14px 45px',
                    border: '2px solid #0f4c75',
                    borderRadius: '8px',
                    fontSize: '1em',
                    direction: 'rtl',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(15, 76, 117, 0.05)',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#D4AF37';
                    e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#0f4c75';
                    e.target.style.boxShadow = '0 2px 8px rgba(15, 76, 117, 0.05)';
                  }}
                />
              </div>

              {/* Category Filter */}
              <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                justifyContent: 'flex-end'
              }}>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    style={{
                      padding: '10px 18px',
                      background: filterCategory === category 
                        ? 'linear-gradient(135deg, #0f4c75, #1a6a96)' 
                        : '#f0f0f0',
                      color: filterCategory === category ? 'white' : '#0f4c75',
                      border: filterCategory === category ? '2px solid #D4AF37' : '2px solid transparent',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '0.95em',
                      transition: 'all 0.3s ease',
                      boxShadow: filterCategory === category ? '0 4px 12px rgba(15, 76, 117, 0.2)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (filterCategory !== category) {
                        e.target.style.backgroundColor = '#e0e0e0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (filterCategory !== category) {
                        e.target.style.backgroundColor = '#f0f0f0';
                      }
                    }}
                  >
                    {category === 'all' ? '🔍 تمام' : category === 'column' ? '✍️ کالمز' : '📖 پنجابی'}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div style={{ marginBottom: '30px' }}>
              {filteredArticles.length > 0 && (
                <h2 style={{
                  fontSize: '1.6em',
                  color: '#0f4c75',
                  marginBottom: '20px',
                  fontFamily: "'Jameel Noori Nastaleeq', serif",
                  textAlign: 'right'
                }}>
                  {filterCategory === 'all' && searchTerm === '' ? 'تمام مضامین' : 'تلاش کے نتائج'}
                  <span style={{ marginRight: '10px', fontSize: '0.8em', color: '#666' }}>
                    ({filteredArticles.length})
                  </span>
                </h2>
              )}
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '20px'
              }}>
                {filteredArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="article-card"
                    onClick={() => setSelectedArticle(article)}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(15, 76, 117, 0.08)',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      border: '2px solid transparent',
                      transformOrigin: 'center center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(15, 76, 117, 0.15)';
                      e.currentTarget.style.borderColor = '#D4AF37';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 76, 117, 0.08)';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    {/* Image Container */}
                    <div style={{ 
                      height: '180px', 
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'linear-gradient(135deg, #0f4c75, #1a6a96)'
                    }}>
                      <img
                        src={article.image}
                        alt={article.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x200?text=Article';
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                      {/* Category Badge */}
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(15, 76, 117, 0.9)',
                        color: '#D4AF37',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8em',
                        fontWeight: 'bold',
                        backdropFilter: 'blur(10px)'
                      }}>
                        {article.category === 'column' ? '✍️' : '📖'} {article.category === 'column' ? 'کالم' : 'پنجابی'}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '18px' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px',
                        fontSize: '0.8em',
                        color: '#999'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <FaCalendar /> {article.date}
                        </span>
                      </div>

                      <h3 style={{
                        margin: '8px 0',
                        color: '#0f4c75',
                        fontSize: '1.05em',
                        fontWeight: 'bold',
                        direction: 'rtl',
                        textAlign: 'right',
                        minHeight: '45px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {article.title}
                      </h3>

                      <p style={{
                        margin: '8px 0',
                        color: '#666',
                        fontSize: '0.85em',
                        direction: 'rtl',
                        textAlign: 'right',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.5'
                      }}>
                        {article.excerpt}
                      </p>

                      <div style={{
                        borderTop: '1px solid #f0f0f0',
                        paddingTop: '10px',
                        marginTop: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.8em'
                      }}>
                        <span style={{ color: '#999' }}>
                          📰 {article.paper.substring(0, 20)}...
                        </span>
                        <span style={{
                          color: '#0f4c75',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <FaEye /> پڑھیں
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {filteredArticles.length === 0 && (
              <div style={{ 
                textAlign: 'center', 
                padding: '60px 20px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(15, 76, 117, 0.1)'
              }}>
                <p style={{ fontSize: '1.3em', color: '#0f4c75', marginBottom: '10px' }}>
                  😔 کوئی مضمون نہیں مل رہا
                </p>
                <p style={{ fontSize: '0.95em', color: '#999' }}>
                  براہ کرم اپنی تلاش میں تبدیلی کریں یا دوسرا زمرہ منتخب کریں
                </p>
              </div>
            )}
          </>
        ) : (
          // Single Article View
          <div style={{ animation: 'fadeInUp 0.5s ease-out' }}>
            {/* Back Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #0f4c75, #1a6a96)',
                color: 'white',
                border: '2px solid transparent',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '30px',
                fontSize: '1em',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(15, 76, 117, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 76, 117, 0.3)';
                e.currentTarget.style.borderColor = '#D4AF37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 76, 117, 0.2)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <FaArrowLeft /> واپس جائیں
            </button>

            {/* Article Content */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '40px 30px',
              boxShadow: '0 8px 30px rgba(15, 76, 117, 0.12)',
              marginBottom: '30px',
              border: '2px solid #f0f0f0'
            }}>
              {/* Header */}
              <div style={{ 
                borderBottom: '3px solid #D4AF37',
                paddingBottom: '25px',
                marginBottom: '30px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '15px'
                }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #0f4c75, #1a6a96)',
                      color: '#D4AF37',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9em',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 10px rgba(15, 76, 117, 0.2)'
                    }}>
                      {selectedArticle.category === 'column' ? '✍️ کالم' : '📖 پنجابی'}
                    </span>
                    <span style={{ 
                      fontSize: '0.95em', 
                      color: '#666',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <FaCalendar style={{ color: '#D4AF37' }} />
                      {selectedArticle.date}
                    </span>
                  </div>
                  <button
                    onClick={() => shareArticle(selectedArticle)}
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #ffd700)',
                      color: '#0f4c75',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 175, 55, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.2)';
                    }}
                  >
                    <FaShare style={{ marginLeft: '8px' }} /> شیئر کریں
                  </button>
                </div>

                <h1 style={{
                  color: '#0f4c75',
                  fontSize: 'clamp(1.8em, 5vw, 2.8em)',
                  margin: '0 0 15px 0',
                  fontFamily: "'Jameel Noori Nastaleeq', serif",
                  direction: 'rtl',
                  textAlign: 'right',
                  lineHeight: '1.4'
                }}>
                  {selectedArticle.title}
                </h1>

                <p style={{
                  color: '#666',
                  fontSize: '1.05em',
                  margin: '10px 0 0 0',
                  direction: 'rtl',
                  textAlign: 'right',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  justifyContent: 'flex-end'
                }}>
                  <FaNewspaper style={{ color: '#D4AF37' }} />
                  {selectedArticle.paper}
                </p>
              </div>

              {/* Featured Image */}
              {selectedArticle.image && (
                <div style={{ 
                  marginBottom: '30px', 
                  borderRadius: '10px', 
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(15, 76, 117, 0.15)',
                  border: '3px solid #D4AF37'
                }}>
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '500px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400?text=Article';
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div
                style={{
                  fontSize: '1.15em',
                  lineHeight: '2',
                  color: '#333',
                  direction: 'rtl',
                  textAlign: 'justify',
                  fontFamily: "'Jameel Noori Nastaleeq', serif"
                }}
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

              {/* Share at End */}
              <div style={{
                marginTop: '40px',
                paddingTop: '30px',
                borderTop: '2px solid #D4AF37',
                textAlign: 'center'
              }}>
                <p style={{ color: '#666', marginBottom: '15px', fontSize: '1.1em' }}>
                  کیا یہ مضمون مفید تھا؟ اپنے دوستوں کے ساتھ شیئر کریں!
                </p>
                <button
                  onClick={() => shareArticle(selectedArticle)}
                  style={{
                    background: 'linear-gradient(135deg, #0f4c75, #1a6a96)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1em',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 76, 117, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FaShare style={{ marginLeft: '8px' }} /> شیئر کریں
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
