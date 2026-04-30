"use client";
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  FaArrowRight, FaPlay, FaTimes, FaHome, FaImages, FaVideo, FaGift, FaFilm, 
  FaCalendarAlt, FaMicrophone, FaPenNib, FaBook, FaYoutube, FaChevronRight, 
  FaChevronLeft, FaLaptop, FaClock, FaCalendarCheck, FaMosque, FaShoppingBag, FaShareAlt
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar } from '../components/Header';
import Footer from '../components/Footer';
import { useLocale } from '../components/LocaleProvider';

// Import the separate page sections (components)
import BooksSection from './BooksSection';
import ArticlesSection from './ArticlesSection';
import RezaviSection from './RezaviSection';
import AstanAppreciationComponent from './AstanAppreciationComponent';
import AIArtGallery from './AIArtGallery';

import { imamRezaImages, allData, boxes } from './data'; 

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

const getIcon = (name) => {
  switch (name) {
    case "FaVideo": return <FaVideo />;
    case "FaGift": return <FaGift />;
    case "FaFilm": return <FaFilm />;
    case "FaCalendarAlt": return <FaCalendarAlt />;
    case "FaMicrophone": return <FaMicrophone />;
    case "FaPenNib": return <FaPenNib />;
    case "FaMosque": return <FaMosque />;
    case "FaBook": return <FaBook />;
    case "FaImages": return <FaImages />;
    case "FaShoppingBag": return <FaShoppingBag />;
    default: return null;
  }
};

export default function ImamRezaClient() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const videoId = searchParams.get('v');
  const { setLocale } = useLocale();

  useEffect(() => {
    setLocale('ur');
  }, [setLocale]);

  // Data
  const programVideos = allData?.programs || [];
  const manqabatVideos = allData?.manqabats || [];
  const tabarrukatVideos = allData?.tabarrukat || [];
  const documentaryVideos = allData?.documentaries || [];
  const liveParticipationVideos = allData?.liveParticipations || []; 

  useEffect(() => {
    if (videoId) {
      const allVideos = [
        ...documentaryVideos,
        ...manqabatVideos,
        ...programVideos,
        ...liveParticipationVideos,
        ...tabarrukatVideos
      ];
      const found = allVideos.find(v => v.id === videoId);
      if (found) {
        setActiveVideo(found.link);
      }
    }
  }, [videoId]);

  const handleShare = (e, vid) => {
    e.stopPropagation();
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?v=${vid.id}`;
    
    if (navigator.share) {
      navigator.share({
        title: vid.title,
        text: `یہ ویڈیو دیکھیں: ${vid.title}`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("لنک کاپی ہو گیا!");
    }
  };

  // Video player
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
    <main className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden urdu-text" dir="rtl">
      <Navbar />
      <div className="fixed inset-0 z-0 opacity-10"><img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768104581/1_shgdib.png" alt="BG" className="w-full h-full object-cover" /></div>
      
      {/* Navigation */}
      <div className="absolute top-20 md:top-24 right-4 z-[60] flex gap-3">
         <Link href="/home" className="bg-[#D4AF37] text-white p-2 rounded-full shadow-lg border-2 border-white hover:scale-110 transition-transform"><FaHome size={18} /></Link>
         <Link href="/home" className="bg-white text-[#D4AF37] p-2 rounded-full shadow-lg border-2 border-[#D4AF37] hover:scale-110 transition-transform"><FaArrowRight size={18} /></Link>
      </div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8 text-center">
        <div className="bg-white/80 backdrop-blur-md border-2 border-[#D4AF37] rounded-[2rem] p-6 md:p-10 shadow-xl max-w-5xl mx-auto animate-float">
           <div className="flex justify-center -mt-20 mb-6">
             <div className="p-2 bg-white rounded-full border-8 border-[#D4AF37] animate-ripple shadow-2xl">
                <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto,f_auto/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" alt="Reza" className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover" />
             </div>
           </div>
           <h1 className="text-2xl md:text-5xl font-extrabold text-[#0f4c75] mb-2 font-extra-bold">حاجی شبیر احمد شگری — خادمِ سلطانِ خراسانؑ</h1>
           <h2 className="text-lg md:text-2xl text-[#D4AF37] font-bold">عقیدت، خدمت اور ثقافتی فریضے کا ایک روحانی سفر</h2>
           <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-6 opacity-50"></div>
           <div className="text-gray-900 text-sm md:text-xl leading-loose text-justify md:text-center max-w-4xl mx-auto space-y-4 font-extra-bold">
             <p className="font-extrabold text-[#0f4c75] text-lg md:text-2xl">«جہاں شاہ و گدا سر جھکاتے ہیں، وہ یہ محترم دربار ہے...»</p>
             <p>آستان قدس رضوی میں میری روحانی خدمت اور مشن کے اس خصوصی صفحے پر خوش آمدید۔ یہ صفحہ حاجی شبیر احمد شگری کے اس شاندار سفر کا آئینہ دار ہے جس میں انہوں نے خوبصورت ورثے، مذہبی محبت اور ثقافتی خدمت کو دنیا کے سامنے پیش کیا۔</p>
             <p className="bg-[#f8f9fa] p-4 rounded-xl border-r-4 border-[#D4AF37] shadow-sm"><strong className="text-[#0f4c75] text-lg">پہلا نور: «ضریحِ نور» (2002)</strong><br />سال 2002 میں انہوں نے موجودہ ضریح مبارک کی تعمیر کو ڈاکومنٹ کیا۔ سال 2011 میں آستان قدس رضوی نے انہیں <strong className="text-[#D4AF37]">«خادم امام رضا»</strong> کے لقب سے نوازا۔</p>
           </div>
        </div>
      </div>

      {/* 🏛️ Astan Quds Razavi Appreciation Certificate */}
      <AstanAppreciationComponent />

      {/* 🎨 AI Art Gallery */}
      <AIArtGallery />

      {/* 11 buttons */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
           {boxes?.map((item, index) => (
             <div key={index} onClick={() => handleBoxClick(item)} className="bg-white/95 border-2 border-[#D4AF37]/20 p-5 rounded-2xl shadow-md hover:border-[#D4AF37] transition-all cursor-pointer text-center group">
                <div className="text-[#D4AF37] text-3xl mb-2 group-hover:scale-110 transition-transform">{getIcon(item.icon)}</div>
                <span className="text-[#0f4c75] font-extrabold text-sm md:text-lg">{item.title}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Documentaries */}
      <div id="docs" className="relative z-10 container mx-auto px-4 py-10">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">خصوصی ڈاکومنٹریز اور ویڈیوز</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {documentaryVideos.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white border-r-4 border-[#D4AF37] p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer hover:bg-[#fff9e6] transition-colors group relative">
                  <div className="bg-[#0f4c75] text-white p-3 rounded-full group-hover:scale-110 transition-transform"><FaPlay size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
                  <button onClick={(e) => handleShare(e, vid)} className="absolute top-2 left-2 text-gray-400 hover:text-[#D4AF37] transition-colors"><FaShareAlt size={14} /></button>
               </div>
            ))}
         </div>
      </div>

      {/* Tabarrukat */}
      <div id="tabarrukat" className="relative z-10 container mx-auto px-4 py-10 bg-[#D4AF37]/10 rounded-[3rem]">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#8a6200] border-b-4 border-white inline-block pb-2">تبرکات کی تقسیم</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tabarrukatVideos.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#D4AF37] flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-transform group text-center relative">
                  <div className="bg-[#D4AF37] text-white p-4 rounded-full animate-pulse"><FaGift size={24} /></div>
                  <span className="text-xl font-bold text-[#0f4c75]">{vid.title}</span>
                  <span className="text-sm text-gray-500 font-bold">دیکھیں</span>
                  <button onClick={(e) => handleShare(e, vid)} className="absolute top-4 left-4 text-gray-400 hover:text-[#D4AF37] transition-colors"><FaShareAlt size={18} /></button>
               </div>
            ))}
         </div>
      </div>

      {/* Shrine Programs */}
      <div id="programs" className="relative z-10 container mx-auto px-4 py-10">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">حرم کے پروگرامز اور لائیو زیارت</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programVideos.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white border-r-4 border-[#0f4c75] p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer hover:bg-[#e6f4ff] transition-colors group relative">
                  <div className="bg-[#b89628] text-white p-3 rounded-full group-hover:scale-110 transition-transform"><FaVideo size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
                  <button onClick={(e) => handleShare(e, vid)} className="absolute top-2 left-2 text-gray-400 hover:text-[#D4AF37] transition-colors"><FaShareAlt size={14} /></button>
               </div>
            ))}
         </div>
      </div>

      {/* Live Participation */}
      {liveParticipationVideos.length > 0 && (
          <div id="liveParticipations" className="relative z-10 container mx-auto px-4 py-10 bg-[#0f4c75]/5 border-y-4 border-[#D4AF37] my-8">
             <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">لائیو پروگرامز میں شرکت</h2></div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {liveParticipationVideos.map((vid, idx) => (
                   <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center gap-4 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all group text-center relative">
                      <div className="bg-red-600 text-white p-4 rounded-full group-hover:scale-110 transition-transform animate-pulse shadow-md"><FaVideo size={28} /></div>
                      <span className="text-lg font-bold text-gray-800 leading-relaxed">{vid.title}</span>
                      <span className="bg-[#D4AF37] text-white px-4 py-1 rounded-full text-xs font-bold mt-2">دیکھیں</span>
                      <button onClick={(e) => handleShare(e, vid)} className="absolute top-4 left-4 text-gray-400 hover:text-[#D4AF37] transition-colors"><FaShareAlt size={18} /></button>
                   </div>
                ))}
             </div>
          </div>
      )}

      {/* Manqabat */}
      <div id="manqabat" className="relative z-10 container mx-auto px-4 py-10">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">منقبتیں اور قصائد</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {manqabatVideos.map((vid, idx) => (
               <div key={idx} onClick={() => setActiveVideo(vid.link)} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 cursor-pointer border border-gray-200 hover:bg-[#fff9e6] transition-colors group relative">
                  <div className="bg-[#D4AF37] text-white p-3 rounded-full group-hover:scale-110 transition-transform"><FaMicrophone size={12} /></div>
                  <span className="text-base font-bold text-gray-800 leading-tight">{vid.title}</span>
                  <button onClick={(e) => handleShare(e, vid)} className="absolute top-2 left-2 text-gray-400 hover:text-[#D4AF37] transition-colors"><FaShareAlt size={14} /></button>
               </div>
            ))}
         </div>
      </div>

      {/* Books */}
      <BooksSection books={allData.books} setActiveVideo={setActiveVideo} />

      {/* Articles */}
      <ArticlesSection articles={allData.articles} setSelectedArticle={setSelectedArticle} />

      {/* Online Services & Webinars */}
      <div id="services" className="relative z-10 container mx-auto px-4 py-12 bg-white">
         <div className="text-center mb-10"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">آنلائن خدمات اور ویبنارز</h2></div>
         <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border-2 border-[#D4AF37] overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-64 md:h-auto">
               <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771275651/webinar._m4jyic.png" alt="Webinar" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">لائیو ویبنار</div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
               <h3 className="text-2xl font-extrabold text-[#0f4c75] leading-tight">راہِ حسینیؑ اور حق و باطل کا معرکہ</h3>
               <p className="text-gray-600 font-bold border-b pb-2">آستان قدس رضوی اور نور پروڈکشنز کے باہمی تعاون سے ایک خصوصی نشست۔</p>
               <div className="space-y-3 mt-2">
                  <div className="flex items-center gap-3 text-gray-700"><FaCalendarCheck className="text-[#D4AF37] text-xl" /><span className="font-bold">تاریخ: بدھ، 30 جولائی 2025</span></div>
                  <div className="flex items-center gap-3 text-gray-700"><FaClock className="text-[#D4AF37] text-xl" /><span className="font-bold">وقت: 15:30 سے 16:30</span></div>
                  <div className="flex items-center gap-3 text-gray-700"><FaLaptop className="text-[#D4AF37] text-xl" /><span className="font-bold">مقام: آنلائن (ویڈیو لنک)</span></div>
               </div>
            </div>
         </div>
      </div>

      {/* Rezavi Online Section */}
      <RezaviSection />

      {/* Final call-to-action buttons */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-center bg-[#f8f9fa] mt-10 border-t-2 border-[#D4AF37]/30">
         <h2 className="text-2xl font-bold text-[#0f4c75] mb-8 border-b-2 border-[#D4AF37] inline-block pb-2">مزید جانئے اور تلاش کریں</h2>
         <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
            <a href="https://www.youtube.com/playlist?list=PLVLSFOIjQLcLVVB_iHIoaN45MJx5xaJed" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 text-white p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 font-bold text-lg"><FaYoutube size={28} /> امام رضاؑ کی مزید ویڈیوز</a>
            <a href="https://www.youtube.com/@noorproduction?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#0f4c75] text-white p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 font-bold text-lg"><FaVideo size={28} /> نور پروڈکشن کا آفیشل چینل</a>
            <Link href="/article" className="flex-1 bg-[#D4AF37] text-white p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 font-bold text-lg">
              <FaPenNib size={28} /> تمام کالمز اور تحریریں
            </Link>
         </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => {
            setActiveVideo(null);
            router.push('/imam-reza', { scroll: false });
          }} className="absolute top-5 left-5 text-[#D4AF37] text-4xl hover:text-red-500 transition-all z-[101]"><FaTimes /></button>
          <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
             {renderVideoPlayer()}
          </div>
        </div>
      )}

      {/* Image gallery */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
           <button onClick={() => setIsGalleryOpen(false)} className="absolute top-5 left-5 text-white text-4xl hover:text-[#D4AF37] transition-all z-[101]"><FaTimes /></button>
           <div className="relative w-full max-w-4xl flex items-center justify-center">
              <button onClick={prevImage} className="absolute right-0 md:-right-12 text-white text-3xl md:text-5xl hover:text-[#D4AF37] z-50 p-2"><FaChevronRight /></button>
              <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-black">
                 <img src={imamRezaImages[currentImageIndex]} alt="Gallery" className="max-h-[80vh] w-auto object-contain" />
              </div>
              <button onClick={prevImage} className="absolute left-0 md:-left-12 text-white text-3xl md:text-5xl hover:text-[#D4AF37] z-50 p-2"><FaChevronLeft /></button>
           </div>
        </div>
      )}

      {/* Article modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
                <div className="bg-[#0f4c75] p-4 flex justify-between items-center sticky top-0 z-10 text-white">
                    <h3 className="font-bold text-lg md:text-xl truncate pl-4">{selectedArticle.title}</h3>
                    <button onClick={() => setSelectedArticle(null)} className="hover:text-red-400 transition-colors"><FaTimes size={24} /></button>
                </div>
                <div className="p-6 overflow-y-auto">
                    <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 md:h-80 object-cover rounded-xl mb-6 shadow-md" />
                    <div className="flex justify-between items-center mb-6 text-sm text-gray-500 font-bold border-b pb-4">
                        <span>📅 {selectedArticle.date}</span>
                        <span className="bg-[#f0f9ff] text-[#0f4c75] px-3 py-1 rounded-full">{selectedArticle.paper || selectedArticle.newspaper}</span>
                    </div>
                    <div className="prose max-w-none text-justify leading-loose text-gray-800 urdu-text text-lg whitespace-pre-line" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                </div>
            </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
