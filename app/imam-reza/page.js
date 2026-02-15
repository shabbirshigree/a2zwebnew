"use client";
import { useState, useEffect } from 'react';
import { 
  FaArrowLeft, FaPlay, FaTimes, FaHome, FaImages, FaHandHoldingHeart, 
  FaMosque, FaGift, FaVideo, FaFilm, FaCalendarAlt, FaMicrophone, FaPenNib, 
  FaBook, FaYoutube, FaDownload, FaChevronRight, FaChevronLeft, FaHeadphones, FaBookOpen 
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar } from '../components/Header';
import Footer from '../components/Footer';
import { imamRezaImages, allData, boxes } from './data'; 

// 🎨 گلوبل اسٹائلز
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
  .font-amiri { font-family: 'Amiri', serif; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-float { animation: float 3s ease-in-out infinite; }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 200%; }
  }
  .animate-shine {
    position: relative;
    overflow: hidden;
  }
  .animate-shine::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-20deg);
    animation: shine 3s infinite;
  }
  
  /* 🔥 طاقتور لہریں */
  @keyframes ripple {
    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
    100% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
  }
  .animate-ripple { animation: ripple 2s infinite linear; border-radius: 50%; }
  
  html { scroll-behavior: smooth; }
  
  /* ایکسٹرا بولڈ کلاس */
  .font-extra-bold {
      font-weight: 800 !important;
  }
`;

export default function ImamRezaPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('custom-animations')) {
      const style = document.createElement('style');
      style.id = 'custom-animations';
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, []);

  const handleBoxClick = (item) => {
    if (item.type === "video") {
      setActiveVideo(item.link);
    } else if (item.type === "scroll") {
      const element = document.getElementById(item.target);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else if (item.type === "gallery") {
      setIsGalleryOpen(true);
      setCurrentImageIndex(0);
    } else if (item.link) {
       window.location.href = item.link;
    }
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev === imamRezaImages.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? imamRezaImages.length - 1 : prev - 1));

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden font-amiri">
      <Navbar />

      {/* 🕌 بیک گراؤنڈ تصویر */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png" 
          alt="Imam Reza Shrine" 
          className="w-full h-full object-cover md:object-center object-top opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90"></div>
      </div>

      {/* 🔙 نیویگیشن بار */}
      <div className="absolute top-4 left-4 z-50 flex gap-3">
         <Link href="/" className="bg-[#D4AF37] text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-2 border-white">
            <FaHome size={18} />
         </Link>
         <Link href="/" className="bg-white text-[#D4AF37] p-2 md:p-3 rounded-full shadow-lg border-2 border-[#D4AF37] hover:scale-110 transition-transform flex items-center justify-center">
            <FaArrowLeft size={18} />
         </Link>
      </div>

      {/* 🌟 مین ہیڈر اور تعارف */}
      <div className="relative z-10 container mx-auto px-4 pt-8 pb-4 flex flex-col items-center text-center">
        
        {/* 🏆 ٹائٹل باکس */}
        <div className="bg-white/80 backdrop-blur-md border-2 border-[#D4AF37] rounded-[2rem] p-6 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.3)] max-w-5xl w-full animate-float">
           
           {/* GIF with Multi-Ripple */}
           <div className="flex justify-center -mt-16 mb-6 relative">
              <div className="p-2 bg-white rounded-full border-4 border-[#D4AF37] shadow-xl animate-ripple relative z-10">
                 <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" alt="Reza GIF" className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover" />
              </div>
           </div>
           
           <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold text-[#0f4c75] mb-3 drop-shadow-sm leading-tight font-extra-bold">
             خادمِ دربارِ شاہِ خراسان حاجی شبیر احمد شگری
           </h1>
           <h2 className="text-lg md:text-2xl font-extrabold text-[#D4AF37] mb-4 font-extra-bold">(زندگی کا روحانی و ایمانی سفر)</h2>
           
           <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-4 opacity-70"></div>
           
           <div className="text-gray-900 text-sm md:text-xl leading-loose font-bold text-justify md:text-center max-w-4xl mx-auto space-y-4 font-extra-bold" dir="rtl">
             <p className="font-extrabold text-[#0f4c75] text-lg md:text-2xl">"جس در پہ جھکتے ہیں بادشاہ، یہ وہ دربار ہے..."</p>
             <p>
               میری زندگی کا حاصل، میرا کل سرمایہ اور میری بخشش کا سب سے بڑا آسرا، وہ نسبت ہے جو مجھے شاہِ خراسان، امام علی رضا علیہ السلام کے دربار سے ملی ہے۔ یہ محض ایک ٹائٹل نہیں، بلکہ 24 سالہ وفا اور عشق کا ایک ایسا سفر ہے جس کا آغاز سن 2002ء میں ہوا۔
             </p>
             <p className="bg-[#f8f9fa] p-4 rounded-xl border-r-4 border-[#D4AF37] shadow-sm">
               <strong className="text-[#0f4c75] text-lg">نور کی پہلی کرن: "ضریحِ نور" (2002)</strong><br/>
               قدرت نے مجھے نور پھیلانے کے لیے منتخب کیا تو سب سے پہلا کام بھی اسی "منبعِ نور" کا سونپا۔ 2002ء میں، جب امام رضاؑ کی موجودہ ضریح مبارک کی تعمیر کے لمحات کو ڈاکومنٹری فلم "ضریح نور" میں محفوظ کیا۔ الحمداللہ 2011 میں آستان قدس رضوی کی جانب سے <strong className="text-[#D4AF37]">"خادم امام رضا علیہ السلام"</strong> کا خطاب عطا ہوا۔
             </p>
           </div>

           {/* 🎥 مین ویڈیو بٹن */}
           <div className="mt-8 flex justify-center">
             <button 
               onClick={() => setActiveVideo(allData.documentaries[0].link)}
               className="group relative flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#8a6200] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-105 transition-all animate-shine border-2 border-white/30"
             >
               <FaPlay className="animate-pulse" />
               <span className="font-bold text-sm md:text-lg">ضریحِ نور ویڈیو دیکھیں</span>
             </button>
           </div>
        </div>

      </div>

      {/* ✨ 10 نیویگیشن ڈبیاں (Boxes) */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
           <h3 className="inline-block bg-[#0f4c75] text-white px-8 py-3 rounded-full shadow-md border-2 border-[#D4AF37] text-md md:text-2xl font-extrabold tracking-wide">
             خدمات اور پروگرامز کی تفصیلات
           </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto" dir="rtl">
           {boxes.map((item, index) => (
             <div 
                key={index} 
                onClick={() => handleBoxClick(item)}
                className="bg-white/95 backdrop-blur-sm border-2 border-[#D4AF37]/20 p-4 rounded-2xl shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all hover:-translate-y-2 flex flex-col items-center text-center gap-3 group cursor-pointer h-full justify-center"
             >
                <div className="bg-[#f8f9fa] p-4 rounded-full border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                    <span className="text-2xl md:text-3xl filter drop-shadow-sm">{item.icon}</span>
                </div>
                <span className="text-[#0f4c75] font-extrabold text-sm md:text-lg group-hover:text-[#D4AF37] transition-colors">{item.title}</span>
                <span className="text-[11px] text-gray-500 group-hover:text-[#D4AF37] transition-colors font-bold">کلک کریں 👇</span>
             </div>
           ))}
        </div>
      </div>

      {/* 📹 سیکشن 1: ڈاکومنٹریز اور مستند ویڈیوز */}
      <div id="docs" className="relative z-10 container mx-auto px-4 py-8 bg-white/70 backdrop-blur-md rounded-t-[3rem] border-t-4 border-[#D4AF37] mt-8">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] drop-shadow-sm border-b-4 border-[#D4AF37] inline-block pb-2">ڈاکومنٹریز اور مستند ویڈیوز</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2" dir="rtl">
            {allData.documentaries.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white border-r-4 border-[#D4AF37] p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer hover:bg-[#fff9e6] transition-colors group">
                  <div className="bg-[#0f4c75] text-white p-3 rounded-full group-hover:scale-110 transition-transform flex-shrink-0"><FaPlay size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
               </div>
            ))}
         </div>
      </div>

      {/* 🎁 سیکشن 2: تبرکات کی تقسیم */}
      <div id="tabarrukat" className="relative z-10 container mx-auto px-4 py-8 bg-[#D4AF37]/10 backdrop-blur-md border-y-2 border-white">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#8a6200] drop-shadow-sm border-b-4 border-white inline-block pb-2">تبرکات کی تقسیم</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-4xl mx-auto" dir="rtl">
            {allData.tabarrukat.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white p-5 rounded-2xl shadow-lg border-2 border-[#D4AF37] flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-transform group text-center">
                  <div className="bg-[#D4AF37] text-white p-4 rounded-full shadow-md animate-pulse"><FaGift size={24} /></div>
                  <span className="text-xl font-bold text-[#0f4c75]">{vid.title}</span>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-bold">ویڈیو دیکھنے کے لیے کلک کریں</span>
               </div>
            ))}
         </div>
      </div>

      {/* 🕌 سیکشن 3: پروگرامز اور لائیو زیارت */}
      <div id="programs" className="relative z-10 container mx-auto px-4 py-8 bg-white/70 backdrop-blur-md">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] drop-shadow-sm border-b-4 border-[#D4AF37] inline-block pb-2">حرم کے پروگرامز اور لائیو زیارت</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2" dir="rtl">
            {allData.programs.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white border-l-4 border-[#0f4c75] p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer hover:bg-[#e6f4ff] transition-colors group">
                  <div className="bg-[#b89628] text-white p-3 rounded-full group-hover:scale-110 transition-transform flex-shrink-0"><FaVideo size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
               </div>
            ))}
         </div>
      </div>

      {/* 🎤 سیکشن 4: منقبت اور قصائد */}
      <div id="manqabat" className="relative z-10 container mx-auto px-4 py-8 bg-[#f0f9ff]/90 backdrop-blur-md">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] drop-shadow-sm border-b-4 border-[#D4AF37] inline-block pb-2">منقبت اور قصائد</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2" dir="rtl">
            {allData.manqabats.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer hover:bg-[#fff9e6] transition-colors group border border-gray-200">
                  <div className="bg-[#D4AF37] text-white p-3 rounded-full group-hover:scale-110 transition-transform flex-shrink-0"><FaMicrophone size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
               </div>
            ))}
         </div>
      </div>

      {/* 📚 سیکشن 5: کتب و رسائل */}
      <div id="books" className="relative z-10 container mx-auto px-4 py-10 bg-white border-t-8 border-[#D4AF37]">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] drop-shadow-sm border-b-4 border-[#D4AF37] inline-block pb-2">کتب و رسائل</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" dir="rtl">
            {allData.books.map((book, idx) => (
               <div key={idx} className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6 rounded-3xl border-2 border-[#D4AF37]/50 shadow-xl flex flex-col md:flex-row items-center gap-6">
                   <div className="w-full md:w-1/3 flex-shrink-0">
                      <img src={book.image} alt={book.title} className="w-full h-auto rounded-lg shadow-md border border-[#D4AF37]" />
                   </div>
                   <div className="text-center md:text-right flex-1">
                       <h3 className="text-xl font-bold text-[#0f4c75] mb-2">{book.title}</h3>
                       <p className="text-gray-800 text-sm mb-4 font-bold">{book.desc}</p>
                       <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          {book.actions.map((action, i) => (
                             <button 
                               key={i} 
                               onClick={() => action.url ? (action.type === 'read' && action.disabled ? null : (action.type === 'read' ? window.open(action.url, '_blank') : setActiveVideo(action.url))) : null}
                               disabled={action.disabled}
                               className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm transition-all ${
                                 action.disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 
                                 action.type === 'read' ? 'bg-[#0f4c75] text-white hover:bg-[#D4AF37]' :
                                 action.type === 'video' ? 'bg-red-600 text-white hover:bg-red-700' :
                                 'bg-green-600 text-white hover:bg-green-700'
                               }`}
                             >
                               {action.type === 'read' && <FaBookOpen />}
                               {action.type === 'video' && <FaPlay />}
                               {action.type === 'audio' && <FaHeadphones />}
                               {action.label}
                             </button>
                          ))}
                       </div>
                   </div>
               </div>
            ))}
         </div>
      </div>

      {/* ✍️ سیکشن 6: اسپیشل ایڈیشنز / مضامین (Pop-up Active) */}
      <div id="articles" className="relative z-10 container mx-auto px-4 py-10 bg-[#fdfdfd]">
         <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] drop-shadow-sm border-b-4 border-[#D4AF37] inline-block pb-2">
                اسپیشل ایڈیشنز / مضامین
            </h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" dir="rtl">
            {allData.articles.map((art, idx) => (
               <div 
                   key={idx} 
                   onClick={() => setSelectedArticle(art)} 
                   className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer"
               >
                  <div className="relative h-48 overflow-hidden">
                     <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">{art.date}</div>
                  </div>
                  <div className="p-5 text-center">
                     <h3 className="text-lg font-bold text-[#0f4c75] mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">{art.title}</h3>
                     <p className="text-gray-500 text-xs mb-4 font-bold">{art.paper}</p>
                     <button className="bg-[#0f4c75] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-[#D4AF37] transition-colors">مزید پڑھیں</button>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* YouTube Playlist Button */}
      <div className="relative z-10 container mx-auto px-4 py-10 text-center">
         <Link href="https://youtube.com/playlist?list=PLVLSFOIjQLcLVVB_iHIoaN45MJx5xaJed&si=gWo90mz1Xo4Nrhj" target="_blank" 
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-red-700 transition-all hover:scale-105 animate-bounce">
            <FaYoutube size={28} />
            مزید ویڈیوز کے لیے یوٹیوب پلے لسٹ وزٹ کریں
         </Link>
      </div>

      <Footer />

      {/* 📹 ویڈیو پلیئر موڈل (Updated Smart Player) */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-4xl hover:text-red-500 transition-all z-[101]"><FaTimes /></button>
          <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.6)] border-2 border-[#D4AF37] animate-float">
             {/* اگر یوٹیوب لنک ہو */}
             {activeVideo.includes('youtube.com') || activeVideo.includes('youtu.be') ? (
                <div className="relative pt-[56.25%]">
                   <iframe 
                     className="absolute inset-0 w-full h-full" 
                     src={`https://www.youtube.com/embed/${activeVideo.split('/').pop()}?autoplay=1`} 
                     frameBorder="0" 
                     allowFullScreen
                   ></iframe>
                </div>
             ) : (
                /* اگر کلاؤڈنیری یا ڈائریکٹ ویڈیو ہو */
                <video 
                   className="w-full max-h-[80vh] object-contain" 
                   src={activeVideo} 
                   controls 
                   autoPlay
                ></video>
             )}
          </div>
        </div>
      )}

      {/* 🖼️ امیج گیلری موڈل */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
           <button onClick={() => setIsGalleryOpen(false)} className="absolute top-5 right-5 text-white text-4xl hover:text-[#D4AF37] transition-all z-[101]"><FaTimes /></button>
           
           <div className="relative w-full max-w-4xl flex items-center justify-center">
              <button onClick={prevImage} className="absolute left-0 md:-left-12 text-white text-3xl md:text-5xl hover:text-[#D4AF37] z-50 p-2"><FaChevronLeft /></button>
              
              <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.5)] bg-black">
                 <img src={imamRezaImages[currentImageIndex]} alt="Imam Reza Gallery" className="max-h-[80vh] w-auto object-contain" />
              </div>

              <button onClick={nextImage} className="absolute right-0 md:-right-12 text-white text-3xl md:text-5xl hover:text-[#D4AF37] z-50 p-2"><FaChevronRight /></button>
           </div>
           
           <div className="absolute bottom-10 text-white text-lg font-bold bg-black/50 px-4 py-1 rounded-full">
              {currentImageIndex + 1} / {imamRezaImages.length}
           </div>
        </div>
      )}

      {/* 📰 آرٹیکل ریڈنگ موڈل (Reading Popup) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
                <div className="bg-[#0f4c75] p-4 flex justify-between items-center sticky top-0 z-10">
                    <h3 className="text-white font-bold text-lg md:text-xl truncate pr-4">{selectedArticle.title}</h3>
                    <button onClick={() => setSelectedArticle(null)} className="text-white hover:text-[#D4AF37] transition-colors">
                        <FaTimes size={24} />
                    </button>
                </div>
                
                <div className="p-6 overflow-y-auto" dir="rtl">
                    <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 md:h-80 object-cover rounded-xl mb-6 shadow-md" />
                    
                    <div className="flex justify-between items-center mb-6 text-sm text-gray-500 font-bold border-b pb-4">
                        <span>📅 {selectedArticle.date}</span>
                        <span className="bg-[#f0f9ff] text-[#0f4c75] px-3 py-1 rounded-full">{selectedArticle.paper}</span>
                    </div>

                    <div 
                        className="prose max-w-none text-justify leading-loose text-gray-800 font-amiri text-lg"
                        dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                    />
                </div>
            </div>
        </div>
      )}

    </main>
  );
}