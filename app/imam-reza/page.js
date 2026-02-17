"use client";
import { useState, useEffect } from 'react';
// 👇 تمام امپورٹس مکمل (FaBookOpen سمیت)
import { 
  FaArrowLeft, FaPlay, FaTimes, FaHome, FaImages, FaVideo, FaGift, FaFilm, 
  FaCalendarAlt, FaMicrophone, FaPenNib, FaBook, FaYoutube, FaChevronRight, 
  FaChevronLeft, FaLaptop, FaClock, FaCalendarCheck, FaFacebook, FaShoppingBag, 
  FaBookOpen 
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar } from '../components/Header';
import Footer from '../components/Footer';

// 👇 ڈیٹا امپورٹ 
import { imamRezaImages, allData, boxes, rezaviData } from './data'; 

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
  .font-amiri { font-family: 'Amiri', serif; }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  .animate-float { animation: float 3s ease-in-out infinite; }
  @keyframes ripple { 
    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.9), 0 0 0 0 rgba(212, 175, 55, 0.6); } 
    100% { box-shadow: 0 0 0 60px rgba(212, 175, 55, 0), 0 0 0 120px rgba(212, 175, 55, 0); } 
  }
  .animate-ripple { animation: ripple 2s infinite linear; border-radius: 50%; }
  html { scroll-behavior: smooth; }
  .font-extra-bold { font-weight: 800 !important; }
`;

export default function ImamRezaPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // 🛍️ رضوی آنلائن سلائیڈر
  const [rezaviSlide, setRezaviSlide] = useState(0);

  // 🚀 ڈیٹا 
  const displayArticles = allData?.articles || [];
  const programVideos = allData?.programs || [];
  const manqabatVideos = allData?.manqabats || [];
  const tabarrukatVideos = allData?.tabarrukat || [];
  const documentaryVideos = allData?.documentaries || [];
  const bookList = allData?.books || [];

  // 🛠️ ویڈیو پلیئر
  const renderVideoPlayer = () => {
    if (!activeVideo) return null;
    if (activeVideo.includes('youtube.com') || activeVideo.includes('youtu.be')) {
        let videoId = activeVideo.split('v=')[1];
        const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
        if (ampersandPosition !== -1) { videoId = videoId.substring(0, ampersandPosition); }
        if (!videoId && activeVideo.includes('youtu.be')) { videoId = activeVideo.split('/').pop(); }
        return (
            <div className="relative pt-[56.25%]">
                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    } else {
        return <video className="w-full max-h-[80vh] object-contain" src={activeVideo} controls autoPlay></video>;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('custom-animations')) {
      const style = document.createElement('style');
      style.id = 'custom-animations';
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, []);

  // 🛍️ آٹو سلائیڈر
  useEffect(() => {
    if (rezaviData?.images?.length > 0) {
        const interval = setInterval(() => {
            setRezaviSlide((prev) => (prev === rezaviData.images.length - 1 ? 0 : prev + 1));
        }, 3000); 
        return () => clearInterval(interval);
    }
  }, []);

  const handleBoxClick = (item) => {
    if (item.type === "video") { setActiveVideo(item.link); }
    else if (item.type === "scroll") {
      const element = document.getElementById(item.target);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else if (item.type === "gallery") {
      setIsGalleryOpen(true);
      setCurrentImageIndex(0);
    } else if (item.link) { window.location.href = item.link; }
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev === (imamRezaImages?.length || 1) - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? (imamRezaImages?.length || 1) - 1 : prev - 1));

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden font-amiri">
      <Navbar />
      <div className="fixed inset-0 z-0 opacity-10"><img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png" alt="BG" className="w-full h-full object-cover" /></div>
      
      {/* 🔙 نیویگیشن */}
      <div className="absolute top-4 left-4 z-50 flex gap-3">
         <Link href="/" className="bg-[#D4AF37] text-white p-2 rounded-full shadow-lg border-2 border-white hover:scale-110 transition-transform"><FaHome size={18} /></Link>
         <Link href="/" className="bg-white text-[#D4AF37] p-2 rounded-full shadow-lg border-2 border-[#D4AF37] hover:scale-110 transition-transform"><FaArrowLeft size={18} /></Link>
      </div>

      {/* 🏛️ ہیڈر */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8 text-center">
        <div className="bg-white/80 backdrop-blur-md border-2 border-[#D4AF37] rounded-[2rem] p-6 md:p-10 shadow-xl max-w-5xl mx-auto animate-float">
           <div className="flex justify-center -mt-20 mb-6">
             <div className="p-2 bg-white rounded-full border-8 border-[#D4AF37] animate-ripple shadow-2xl">
                <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" alt="Reza" className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover" />
             </div>
           </div>
           <h1 className="text-2xl md:text-5xl font-extrabold text-[#0f4c75] mb-2 font-extra-bold">خادمِ دربارِ شاہِ خراسان حاجی شبیر احمد شگری</h1>
           <h2 className="text-lg md:text-2xl text-[#D4AF37] font-bold">(زندگی کا روحانی و ایمانی سفر)</h2>
           <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-6 opacity-50"></div>
           <div className="text-gray-900 text-sm md:text-xl leading-loose text-justify md:text-center max-w-4xl mx-auto space-y-4 font-extra-bold" dir="rtl">
             <p className="font-extrabold text-[#0f4c75] text-lg md:text-2xl">"جس در پہ جھکتے ہیں بادشاہ، یہ وہ دربار ہے..."</p>
             <p>میری زندگی کا حاصل، میرا کل سرمایہ اور میری بخشش کا سب سے بڑا آسرا، وہ نسبت ہے جو مجھے شاہِ خراسان، امام علی رضا علیہ السلام کے دربار سے ملی ہے۔</p>
             <p className="bg-[#f8f9fa] p-4 rounded-xl border-r-4 border-[#D4AF37] shadow-sm"><strong className="text-[#0f4c75] text-lg">نور کی پہلی کرن: "ضریحِ نور" (2002)</strong><br/>قدرت نے مجھے نور پھیلانے کے لیے منتخب کیا تو سب سے پہلا کام بھی اسی "منبعِ نور" کا سونپا۔ 2002ء میں، جب امام رضاؑ کی موجودہ ضریح مبارک کی تعمیر کے لمحات کو ڈاکومنٹری فلم "ضریح نور" میں محفوظ کیا۔ الحمداللہ 2011 میں آستان قدس رضوی کی جانب سے <strong className="text-[#D4AF37]">"خادم امام رضا علیہ السلام"</strong> کا خطاب عطا ہوا۔</p>
           </div>
        </div>
      </div>

      {/* ✨ 10 بٹنز */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto" dir="rtl">
           {boxes?.map((item, index) => (
             <div key={index} onClick={() => handleBoxClick(item)} className="bg-white/95 border-2 border-[#D4AF37]/20 p-5 rounded-2xl shadow-md hover:border-[#D4AF37] transition-all cursor-pointer text-center group">
                <div className="text-[#D4AF37] text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-[#0f4c75] font-extrabold text-sm md:text-lg">{item.title}</span>
             </div>
           ))}
        </div>
      </div>

      {/* 📹 ڈاکومنٹریز */}
      <div id="docs" className="relative z-10 container mx-auto px-4 py-10">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">ڈاکومنٹریز اور مستند ویڈیوز</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4" dir="rtl">
            {documentaryVideos.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white border-r-4 border-[#D4AF37] p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer hover:bg-[#fff9e6] transition-colors group">
                  <div className="bg-[#0f4c75] text-white p-3 rounded-full group-hover:scale-110 transition-transform"><FaPlay size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
               </div>
            ))}
         </div>
      </div>

      {/* 🎁 تبرکات */}
      <div id="tabarrukat" className="relative z-10 container mx-auto px-4 py-10 bg-[#D4AF37]/10 rounded-[3rem]">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#8a6200] border-b-4 border-white inline-block pb-2">تبرکات کی تقسیم</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" dir="rtl">
            {tabarrukatVideos.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#D4AF37] flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-transform group text-center">
                  <div className="bg-[#D4AF37] text-white p-4 rounded-full animate-pulse"><FaGift size={24} /></div>
                  <span className="text-xl font-bold text-[#0f4c75]">{vid.title}</span>
                  <span className="text-sm text-gray-500 font-bold">ویڈیو دیکھیں</span>
               </div>
            ))}
         </div>
      </div>

      {/* 🕌 پروگرامز */}
      <div id="programs" className="relative z-10 container mx-auto px-4 py-10">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">حرم کے پروگرامز اور لائیو زیارت</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
            {programVideos.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white border-l-4 border-[#0f4c75] p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer hover:bg-[#e6f4ff] transition-colors group">
                  <div className="bg-[#b89628] text-white p-3 rounded-full group-hover:scale-110 transition-transform"><FaVideo size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
               </div>
            ))}
         </div>
      </div>

      {/* 🎤 منقبت */}
      <div id="manqabat" className="relative z-10 container mx-auto px-4 py-10">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">منقبت اور قصائد</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4" dir="rtl">
            {manqabatVideos.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer border border-gray-200 hover:bg-[#fff9e6] transition-colors group">
                  <div className="bg-[#D4AF37] text-white p-3 rounded-full group-hover:scale-110 transition-transform"><FaMicrophone size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
               </div>
            ))}
         </div>
      </div>

      {/* 📚 کتب */}
      <div id="books" className="relative z-10 container mx-auto px-4 py-10 bg-white border-t-8 border-[#D4AF37]">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">کتب و رسائل</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" dir="rtl">
            {bookList.map((book, idx) => (
               <div key={idx} className="bg-gray-50 p-6 rounded-3xl border-2 border-[#D4AF37]/50 shadow-xl flex flex-col md:flex-row items-center gap-6 group">
                   <img src={book.image} alt={book.title} className="w-32 h-auto rounded-lg shadow-md border group-hover:scale-105 transition-transform" />
                   <div className="text-center md:text-right flex-1">
                       <h3 className="text-xl font-bold text-[#0f4c75] mb-2">{book.title}</h3>
                       <p className="text-gray-700 text-sm mb-4 font-bold">{book.desc}</p>
                       <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          {book.actions?.map((action, i) => (
                             <button key={i} disabled={action.disabled} onClick={() => action.url ? (action.type === 'read' ? window.open(action.url, '_blank') : setActiveVideo(action.url)) : null} className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm transition-all ${action.disabled ? 'bg-gray-400 cursor-not-allowed' : (action.type === 'read' ? 'bg-[#0f4c75] text-white hover:bg-[#D4AF37]' : 'bg-red-600 text-white hover:bg-red-700')}`}>
                               {action.type === 'read' ? <FaBookOpen /> : <FaPlay />} {action.label}
                             </button>
                          ))}
                       </div>
                   </div>
               </div>
            ))}
         </div>
      </div>

      {/* ✍️ مضامین */}
      <div id="articles" className="relative z-10 container mx-auto px-4 py-10 bg-[#fdfdfd]">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">اسپیشل ایڈیشنز / مضامین</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" dir="rtl">
            {displayArticles.map((art, idx) => (
               <div key={idx} onClick={() => setSelectedArticle(art)} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2 group">
                  <div className="relative h-48 overflow-hidden">
                     <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">{art.date}</div>
                  </div>
                  <div className="p-5 text-center">
                     <h3 className="text-lg font-bold text-[#0f4c75] mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">{art.title}</h3>
                     <p className="text-gray-500 text-xs mb-4 font-bold">{art.paper || art.newspaper || art.source}</p>
                     <button className="bg-[#0f4c75] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-[#D4AF37] transition-colors">مزید پڑھیں</button>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* 🌐 آنلائن خدمات و ویبینار */}
      <div id="services" className="relative z-10 container mx-auto px-4 py-12 bg-white">
         <div className="text-center mb-10"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">آنلائن خدمات و ویبینار</h2></div>
         <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border-2 border-[#D4AF37] overflow-hidden flex flex-col md:flex-row" dir="rtl">
            <div className="md:w-1/2 relative h-64 md:h-auto">
               <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771275651/webinar._m4jyic.png" alt="Webinar" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">لائیو ویبینار</div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
               <h3 className="text-2xl font-extrabold text-[#0f4c75] leading-tight">راہِ حسینیت اور 12 روزہ معرکہ حق و باطل</h3>
               <p className="text-gray-600 font-bold border-b pb-2">حرم امام رضا علیہ السلام کے ادارے "آستان قدس رضوی" اور "نورپروڈکشنز" کے تعاون سے خصوصی نشست۔</p>
               <div className="space-y-3 mt-2">
                  <div className="flex items-center gap-3 text-gray-700"><FaCalendarCheck className="text-[#D4AF37] text-xl" /><span className="font-bold">تاریخ: بدھ، 30 جولائی 2025</span></div>
                  <div className="flex items-center gap-3 text-gray-700"><FaClock className="text-[#D4AF37] text-xl" /><span className="font-bold">وقت: سہ پہر 15:30 تا 16:30</span></div>
                  <div className="flex items-center gap-3 text-gray-700"><FaLaptop className="text-[#D4AF37] text-xl" /><span className="font-bold">مقام: آنلائن (ویڈیو لنک)</span></div>
               </div>
            </div>
         </div>
      </div>

      {/* 🛍️ رضوی آنلائن سیکشن (اب یہاں سب سے نیچے ہے) */}
      {rezaviData && (
        <div id="rezavi" className="relative z-10 container mx-auto px-4 py-12 bg-white border-y-4 border-[#D4AF37] mt-8 mb-8">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">{rezaviData.title}</h2>
            </div>
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center" dir="rtl">
                {/* 🖼️ سلائیڈر */}
                <div className="w-full md:w-1/2 h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37] bg-gray-50">
                    {rezaviData.images?.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt="Rezavi Product" 
                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === rezaviSlide ? "opacity-100" : "opacity-0"}`} 
                        />
                    ))}
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-1 rounded-full text-xs font-bold">متبرک اشیاء</div>
                </div>

                {/* 📝 متن اور لنکس */}
                <div className="w-full md:w-1/2 space-y-6 text-justify">
                    <div className="text-lg md:text-xl leading-loose font-bold text-gray-800 whitespace-pre-line">
                        {rezaviData.desc}
                    </div>
                    <div className="bg-[#f8f9fa] p-4 rounded-xl border-r-4 border-[#D4AF37] shadow-sm">
                        <strong className="text-[#0f4c75] text-lg md:text-xl block text-center animate-pulse">{rezaviData.punchline}</strong>
                    </div>
                    
                    {/* لنکس */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {rezaviData.youtube && (
                            <a href={rezaviData.youtube} target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 text-white py-3 rounded-xl shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 font-bold text-lg">
                                <FaYoutube size={28} /> یوٹیوب (Subscribe)
                            </a>
                        )}
                        {rezaviData.facebook && (
                            <a href={rezaviData.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 text-white py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-bold text-lg">
                                <FaFacebook size={28} /> فیس بک پیج
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* 👇 آخری 3 اہم بٹن */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-center bg-[#f8f9fa] mt-10 border-t-2 border-[#D4AF37]/30">
         <h2 className="text-2xl font-bold text-[#0f4c75] mb-8 border-b-2 border-[#D4AF37] inline-block pb-2">مزید دیکھیے اور پڑھیے</h2>
         <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
            <a href="https://www.youtube.com/playlist?list=PLVLSFOIjQLcLVVB_iHIoaN45MJx5xaJed" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 text-white p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 font-bold text-lg"><FaYoutube size={28} /> امام رضاؑ کی دیگر ویڈیوز (پلے لسٹ)</a>
            <a href="https://www.youtube.com/@noorproduction?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#0f4c75] text-white p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 font-bold text-lg"><FaVideo size={28} /> آفیشل چینل (نور پروڈکشن)</a>
            <a href="https://shabbirshigri.vercel.app/article" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#D4AF37] text-white p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 font-bold text-lg"><FaPenNib size={28} /> میری تمام تحریریں اور کالمز</a>
         </div>
      </div>

      <Footer />

      {/* 📹 ویڈیو موڈل (اسمارٹ پلیئر) */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-4xl hover:text-red-500 transition-all z-[101]"><FaTimes /></button>
          <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
             {renderVideoPlayer()}
          </div>
        </div>
      )}

      {/* 🖼️ امیج گیلری */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
           <button onClick={() => setIsGalleryOpen(false)} className="absolute top-5 right-5 text-white text-4xl hover:text-[#D4AF37] transition-all z-[101]"><FaTimes /></button>
           <div className="relative w-full max-w-4xl flex items-center justify-center">
              <button onClick={prevImage} className="absolute left-0 md:-left-12 text-white text-3xl md:text-5xl hover:text-[#D4AF37] z-50 p-2"><FaChevronLeft /></button>
              <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-black">
                 <img src={imamRezaImages[currentImageIndex]} alt="Gallery" className="max-h-[80vh] w-auto object-contain" />
              </div>
              <button onClick={nextImage} className="absolute right-0 md:-right-12 text-white text-3xl md:text-5xl hover:text-[#D4AF37] z-50 p-2"><FaChevronRight /></button>
           </div>
        </div>
      )}

      {/* 📰 آرٹیکل موڈل */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
                <div className="bg-[#0f4c75] p-4 flex justify-between items-center sticky top-0 z-10 text-white">
                    <h3 className="font-bold text-lg md:text-xl truncate pr-4">{selectedArticle.title}</h3>
                    <button onClick={() => setSelectedArticle(null)} className="hover:text-red-400 transition-colors"><FaTimes size={24} /></button>
                </div>
                <div className="p-6 overflow-y-auto" dir="rtl">
                    <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 md:h-80 object-cover rounded-xl mb-6 shadow-md" />
                    <div className="flex justify-between items-center mb-6 text-sm text-gray-500 font-bold border-b pb-4">
                        <span>📅 {selectedArticle.date}</span>
                        <span className="bg-[#f0f9ff] text-[#0f4c75] px-3 py-1 rounded-full">{selectedArticle.paper || selectedArticle.newspaper}</span>
                    </div>
                    <div className="prose max-w-none text-justify leading-loose text-gray-800 font-amiri text-lg whitespace-pre-line" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                </div>
            </div>
        </div>
      )}

    </main>
  );
}