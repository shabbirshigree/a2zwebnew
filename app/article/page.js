"use client";
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaCalendar, FaNewspaper, FaEye, FaSearch, FaPenNib, FaBookOpen, FaMedal } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

// ✅ تمام فائلوں کا ڈیٹا یہاں سے امپورٹ ہو رہا ہے
import { allArticles } from './index';

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ 'urdu' سیٹ کرنے سے پیج لوڈ ہوتے ہی اردو کالم نظر آئیں گے
const [filterCategory, setFilterCategory] = useState('column');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { 
    setMounted(true); 
  }, []);

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
              {/* 🔍 سرچ بار اور فلٹرز */}
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border border-[#D4AF37]/30 mb-10 text-center relative overflow-hidden" dir="rtl">
                <div className="relative max-w-2xl mx-auto mb-5">
                  <input
                    type="text"
                    placeholder="مضمون کا عنوان تلاش کریں..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pr-12 rounded-full border-2 border-[#0b314d]/20 outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all text-sm md:text-lg urdu-text shadow-sm"
                  />
                  <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setFilterCategory(cat.id)}
                      className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold urdu-text text-xs md:text-sm transition-all duration-300 shadow-sm border ${filterCategory === cat.id
                          ? 'bg-[#0b314d] text-[#D4AF37] border-[#0b314d] shadow-[0_0_10px_rgba(11,49,77,0.4)]'
                          : 'bg-white text-[#0b314d] border-[#0b314d]/30 hover:border-[#D4AF37] hover:bg-gray-50'
                        }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

{/* 📚 آرٹیکلز گرڈ */}
{filteredArticles.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" dir="rtl">
    {/* ✅ یہاں (article, index) لکھیں تاکہ ہر کارڈ کی پہچان الگ ہو سکے */}
    {filteredArticles.map((article, index) => (
      <div
        key={`${article.id}-${index}`} // ✅ یہ لائن آئی ڈی کا مسئلہ حل کر دے گی
        onClick={() => setSelectedArticle(article)}
        className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group flex flex-col h-full"
      >
                      <div className="h-48 overflow-hidden bg-gray-100 relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'}
                        />
                        <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0b314d] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {categories.find(c => c.id === (Array.isArray(article.category) ? article.category[0] : article.category))?.label.replace(/[^a-zA-Zآ-ی]/g, '').trim()}
                        </div>
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-[#0b314d] mb-2 urdu-text leading-tight group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm urdu-text line-clamp-3 mb-4 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3 mt-auto">
                          <span className="flex items-center gap-1.5"><FaCalendar className="text-[#D4AF37]" /> {article.date}</span>
                          <span className="text-[#0f4c75] font-bold flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full group-hover:bg-[#0b314d] group-hover:text-white transition-colors">پڑھیں <FaEye /></span>
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