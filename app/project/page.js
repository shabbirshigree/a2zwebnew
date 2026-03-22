"use client";
import { useState, useEffect } from 'react';
import { FaPlay, FaTimes, FaChevronDown, FaYoutube, FaMobileAlt, FaInfoCircle, FaCheckCircle, FaBookOpen, FaImages, FaPodcast, FaGlobe, FaFilm, FaHeadphones, FaShareAlt } from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { quranVideos } from './projectData';

export default function ProjectPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [localVideoUrl, setLocalVideoUrl] = useState('');
  const [isLocalVideoOpen, setIsLocalVideoOpen] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  // 🟢 کتابچے کے پاپ اپ کے لیے اسٹیٹ
  const [showBooklet, setShowBooklet] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🟢 لائبریری ڈیزائن کے لیے زبان کا اسٹیٹ (اردو / انگلش)
  const [langTab, setLangTab] = useState('ur');

  // 🟢 گوگل اے آئی کا ڈیٹا
  const AUTHOR_REVIEW = {
    videoUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1772101147/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_cbttlt.mp4",
    audioUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1772101123/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_%D8%A2%DA%88%DB%8C%D9%88_xo4oym.mp4"
  };

  const handlePlayLocalVideo = (url) => {
    if (url) { setLocalVideoUrl(url); setIsLocalVideoOpen(true); }
  };

  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.share) {
      navigator.share({ title: "نورالقرآن پراجیکٹ", url: url }).catch(() => { });
    } else {
      navigator.clipboard.writeText(url);
      alert('لنک کاپی ہو گیا ہے');
    }
  };

  // 🟢 آپ کی تیار کردہ سلائیڈز
  const projectSlides = [
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/1_algrfv.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/2_o9hs4u.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043095/3_ydbdnt.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/4_q8dd11.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/5_a3qcti.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/6_wiuaoz.jpg"
  ];

  // 🟢 سلائیڈر آٹو پلے
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectSlides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [projectSlides.length]);

  // --- 🎥 میچور ویڈیو کارڈ ---
  const VideoCard = ({ video }) => (
    <div
      onClick={() => setSelectedVideo(video)}
      className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer group border border-[#D4AF37]/50 flex flex-col h-full"
    >
      <div className="relative aspect-video bg-black overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
          <div className="bg-[#D4AF37] rounded-full p-2.5 shadow-[0_0_10px_rgba(212,175,55,0.6)] transform scale-90 group-hover:scale-110 transition-transform duration-300">
            <FaPlay className="text-[#0b314d] text-xs ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-2.5 border-t border-[#D4AF37]/30 flex-grow flex items-center justify-center bg-gradient-to-b from-[#111] to-black">
        <p className="text-[#D4AF37] font-semibold urdu-text text-[13px] md:text-sm leading-snug text-center" dir="rtl">{video.title}</p>
      </div>
    </div>
  );

  // --- 🔽 ویڈیو گرڈ ---
  const VideoGrid = ({ title, videos, id, initialCount = 8 }) => {
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const showMore = () => setVisibleCount(prev => Math.min(prev + 8, videos.length));

    return (
      <section id={id} className="py-8 md:py-12 relative z-10 px-4 border-t border-white/5">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="inline-block bg-[#0b314d] text-[#D4AF37] px-6 py-2 rounded-full border border-[#D4AF37]/50 urdu-text text-lg md:text-xl font-bold shadow-lg">
            {title}
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {(videos || []).slice(0, visibleCount).map((video, index) => <VideoCard key={`${video.id}-${index}`} video={video} />)}
        </div>
        {visibleCount < (videos?.length || 0) && (
          <div className="text-center mt-6">
            <button onClick={showMore} className="bg-transparent border border-[#D4AF37] text-[#D4AF37] px-5 py-1.5 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-[#0b314d] transition-all duration-300 inline-flex items-center justify-center gap-2 urdu-text">
              مزید دیکھیں <FaChevronDown size={12} />
            </button>
          </div>
        )}
      </section>
    );
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans">
      <Navbar />
      <HeroSlider />

      {/* 🌟 ہیڈر */}
      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f2a40] via-[#050505] to-[#000000] py-12 md:py-16 text-center relative border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] urdu-text mb-3 tracking-wide">
            نور القرآن پراجیکٹ
          </h1>
          <h2 className="text-base md:text-xl text-white/80 font-sans tracking-widest mb-3">
            (The Visual Quran)
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-sm md:text-lg text-[#fff7cc] urdu-text font-light max-w-2xl mx-auto leading-relaxed border-t border-b border-[#D4AF37]/30 py-3">
            "قرآن مجید کو چوم کر صرف اونچے طاق میں رکھ دینا ہی اس کا احترام نہیں، بلکہ اسے سمجھ کر پڑھنا اور اس پر عمل کرنا ہی اس کا حقیقی احترام ہے۔"
          </p>
        </div>
      </section>

      {/* 📖 مین سیکشن (فریمز) */}
      <section className="container mx-auto px-4 pt-10 pb-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#0a0a0a] rounded-[2.5rem] p-6 md:p-12 border border-[#D4AF37]/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative">

          {/* 🖼️📱 سلائیڈز اور موبائل فریمز */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* 📝 پوسٹر سلائیڈز فریم */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-full mb-3 text-sm font-bold border border-[#D4AF37]/30 urdu-text shadow-inner">
                <FaImages /> پراجیکٹ کی جھلکیاں
              </div>
              <div className="w-[300px] md:w-[330px] h-[400px] md:h-[430px] border-[6px] border-[#D4AF37] rounded-xl overflow-hidden relative shadow-[0_0_20px_rgba(212,175,55,0.4)] bg-black">
                {projectSlides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* 📱 موبائل فریم */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-full mb-3 text-sm font-bold border border-[#D4AF37]/30 urdu-text shadow-inner">
                <FaMobileAlt /> آج کا قرآنی کلپ
              </div>
              <div className="w-[220px] md:w-[240px] h-[400px] md:h-[430px] border-[10px] border-gray-800 rounded-[2rem] overflow-hidden relative shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-black">
                <div className="absolute top-0 w-24 h-4 bg-gray-800 rounded-b-lg z-20 left-1/2 transform -translate-x-1/2"></div>
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PLVLSFOIjQLcKg6NISQO33OXnk8JyOJET-"
                  className="w-full h-full absolute inset-0 z-10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🔴 پروجیکٹ کی تفصیل */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 bg-[#0a0a0a] border border-gray-800 hover:border-[#D4AF37]/50 rounded-[2.5rem] p-6 md:p-10 shadow-2xl transition-all duration-500 group relative overflow-hidden">

          <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

          {/* بائیں طرف: تصویر اور بٹنز */}
          <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6 relative z-10">
            <img
              src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png"
              alt="نور القرآن"
              className="w-full h-auto rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-[#D4AF37]/50 object-cover"
            />

            {/* بٹنز کا پینل */}
            <div className="space-y-3">
              {/* 🔴 اب یہاں کلک کرنے پر فلپ بک پاپ اپ میں کھلے گی 🔴 */}
              <div className="flex rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => setShowBooklet(true)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition-colors">
                  <FaBookOpen className="ml-2" /> تفصیل پڑھیں
                </button>
                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 border-r-0 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
              </div>

              {/* گوگل آڈیو پوڈکاسٹ */}
              <div className="flex rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.audioUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-[#0b314d] hover:shadow-lg transition-all">
                  <FaHeadphones className="ml-2" /> آڈیو پوڈکاسٹ سنیں
                </button>
                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-[#D4AF37] text-[#0b314d] border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
              </div>

              {/* گوگل ویڈیو تجزیہ */}
              <div className="flex rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.videoUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-gradient-to-r from-red-700 to-red-900 text-white hover:shadow-lg transition-all">
                  <FaFilm className="ml-2" /> ویڈیو تجزیہ دیکھیں
                </button>
                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-red-800 text-white border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
              </div>
            </div>
          </div>

          {/* دائیں طرف: زبان کے بٹن اور تحریر */}
          <div className="flex-1 text-right relative z-10" dir="rtl">

            <div className="flex flex-wrap justify-between items-center mb-6 gap-4 border-b border-gray-800 pb-4">
              <div className="flex gap-2">
                <button onClick={() => setLangTab('ur')} className={`px-5 py-1.5 rounded-full text-sm font-bold transition ${langTab === 'ur' ? 'bg-[#D4AF37] text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10'}`}>اردو</button>
                <button onClick={() => setLangTab('en')} className={`px-5 py-1.5 rounded-full text-sm font-bold transition ${langTab === 'en' ? 'bg-[#D4AF37] text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10'}`}>English</button>
              </div>
              <span className="bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-lg text-[10px] md:text-xs font-bold font-sans uppercase tracking-widest border border-[#D4AF37]/30">
                پراجیکٹ
              </span>
            </div>

            {/* تفصیلی تحریر */}
            {langTab === 'ur' ? (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 urdu-text">دنیا کا پہلا "ویژول قرآن" پراجیکٹ</h2>
                <p className="text-gray-300 text-base md:text-lg leading-[2.2] text-justify urdu-text font-light mb-6">
                  اللہ کے فضل و کرم سے "نورالقرآن پراجیکٹ" کا آغاز ایک خواب کی تعبیر ہے۔ اس خواب کے پیچھے 25 سال کی اسلامی میڈیا کی خدمات کارفرما ہے۔ اس پراجیکٹ کا اصل مقصد یہ ہے کہ قرآن کریم کو جدید سمعی و بصری انداز میں پیش کیا جائے تاکہ نوجوان نسل اور عام انسان قرآن کو صرف پڑھنے نہیں بلکہ دل کی آنکھ سے دیکھنے اور سمجھنے لگیں۔
                  <br /><br />
                  میری خواہش ہے کہ اس پراجیکٹ کے ذریعے قرآن ہر کسی کے دل میں اتر جائے، اور دل نورِ قرآن سے منور ہوجائیں۔ اور اگر قرآن کو صحیح معنوں میں سمجھ لیا جائے اور عملی زندگی میں اس کے احکامات کو نافذ کردیا جائے تو سب مسائل ختم ہوجائیں کیونکہ یہ کتاب ہماری ہدایت کے لئے نازل ہوا ہے اور بہترین ظابطہ حیات ہے۔
                </p>
                <button onClick={() => setShowFullText(!showFullText)} className="inline-flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded-full font-bold urdu-text hover:bg-[#D4AF37] hover:text-black transition-colors">
                  <FaInfoCircle /> {showFullText ? "تفصیلات بند کریں" : "پراجیکٹ کے مراحل پڑھیں"}
                </button>
              </div>
            ) : (
              <div className="font-sans text-left" dir="ltr">
                <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-6">The First "Visual Quran" Project</h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify font-light">
                  By the grace of Allah, the launch of the "Noor Al-Quran Project" is the realization of a lifelong dream, backed by 25 years of experience in Islamic media. The core objective is to present the Holy Quran in a modern audio-visual format, enabling the younger generation not just to read it, but to truly visualize and comprehend its divine message.
                </p>
              </div>
            )}

            {/* پراجیکٹ کے مراحل (Dropdown) */}
            {showFullText && langTab === 'ur' && (
              <div className="pt-6 mt-6 border-t border-gray-800 animate-in fade-in slide-in-from-top-4 duration-500 text-right">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-gray-800 hover:border-[#D4AF37]/50 transition-colors">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><FaCheckCircle className="text-[#D4AF37] text-sm" /> پہلا اور دوسرا مرحلہ</h4>
                    <p className="text-sm text-gray-300 text-justify">مکمل قرآن مجید کو 30 پاروں کی ویڈیو شکل (عربی و اردو) میں تیار کیا گیا۔ اس میں مشہور قاری استاد پرہیزگار کی تلاوت، شیخ محسن علی نجفیؒ کا مستند اردو ترجمہ اور میری آواز میں اردو وائس اوور شامل ہے۔</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-gray-800 hover:border-[#D4AF37]/50 transition-colors">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><FaCheckCircle className="text-[#D4AF37] text-sm" /> تیسرا مرحلہ (اسٹینڈرڈ ویژول)</h4>
                    <p className="text-sm text-gray-300 text-justify">اس وقت شارٹس کی شکل میں ہم کامیاب تجربہ کر چکے ہیں۔ اگلا مرحلہ مکمل قرآن پاک کو اسٹینڈرڈ سائز (16:9) میں ہائی ریزولوشن اور سینماٹک ویژولز کے ساتھ تیار کرنا ہے۔</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 🤝 باوقار تعاون کی اپیل */}
      <section className="bg-gradient-to-b from-black to-[#0b314d] py-16 md:py-20 border-y-4 border-[#D4AF37]/50">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto bg-white/5 p-8 md:p-12 rounded-3xl border border-[#D4AF37]/30 text-center shadow-[0_0_40px_rgba(212,175,55,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[80px] opacity-20"></div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] urdu-text mb-6">نورالقرآن پراجیکٹ: عظیم صدقہ جاریہ</h2>
            <p className="text-white/90 text-base md:text-xl leading-relaxed urdu-text font-light mb-6 text-justify md:text-center">
              یہ کوئی عام پراجیکٹ نہیں، بلکہ آنے والی نسلوں کے لیے ایک عظیم روحانی انقلاب ہے۔ قرآن پاک کو جدید اور عالمی معیار کے اسٹینڈرڈ سینماٹک ویژولز میں ڈھالنے کے اس وسیع منصوبے کو پایہ تکمیل تک پہنچانے کے لیے ہمیں بھرپور وسائل کی ضرورت ہے۔
            </p>
            <p className="text-[#fff7cc] text-base md:text-lg urdu-text mb-8 leading-relaxed font-semibold">
              اگر آپ اس عالمی صدقہ جاریہ میں حصہ ڈالنا چاہتے ہیں اور اس عظیم مشن کے لیے مالی معاونت یا وسائل کی فراہمی کے خواہشمند ہیں تو ہم سے رابطہ فرمائیں۔
            </p>
            <a href="/contact" className="inline-block bg-[#D4AF37] text-[#0b314d] px-10 py-3 rounded-full font-bold text-lg hover:bg-white transition-all shadow-md urdu-text">
              رابطہ اور تفصیلات
            </a>
          </div>
        </div>
      </section>

      {/* 🎬 افتتاحی ویڈیوز */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10 border-t border-white/5 mt-4">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-[#111] border border-[#D4AF37]/30 rounded-xl p-5 md:p-6 shadow-lg">
            <h3 className="text-lg md:text-2xl font-bold text-[#D4AF37] text-center urdu-text mb-3">✨ اردو ترجمے کے ساتھ مکمل قرآن پاک کا افتتاح ✨</h3>
            <p className="text-center text-gray-400 urdu-text mb-4 text-xs md:text-sm">یکم رمضان المبارک کو علامہ شیخ محسن علی نجفیؒ کی قبر مطہر پر (جامعہ کوثر اسلام آباد) میں اس تاریخی پروجیکٹ کا افتتاح۔</p>
            <div className="aspect-video rounded-lg overflow-hidden border border-[#D4AF37]/50">
              <iframe src="https://www.youtube.com/embed/ah0OXlnDw2k" allowFullScreen className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 📺 ویڈیو لسٹنگ سیکشنز */}
      <div className="bg-black">
        <VideoGrid title="قرآنی ویڈیوز (عربی) - 30 پارے" videos={quranVideos.parat_arabic} id="parat-arabic" initialCount={8} />
        <VideoGrid title="اردو ٹیکسٹ و ترجمہ - 30 پارے" videos={quranVideos.parat_urdu} id="parat-urdu" initialCount={8} />
        <VideoGrid title="منتخب سورتیں (Selected Surahs)" videos={quranVideos.surahs} id="surahs" initialCount={8} />
        <VideoGrid title="بصری قرآنی واقعات (Stories)" videos={quranVideos.stories} id="stories" initialCount={8} />
        <VideoGrid title="تلاوت، نعت اور معجزہ قرآن" videos={quranVideos.tilawat} id="tilawat" initialCount={8} />
      </div>

      {/* 🎦 YouTube پاپ اپ پلیئر */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-xs md:text-sm font-bold transition-all shadow-md border border-white z-50 urdu-text" onClick={() => setSelectedVideo(null)}>
              <FaTimes /> بند کریں
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)] border border-[#D4AF37] relative">
              <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`} allowFullScreen className="w-full h-full absolute inset-0"></iframe>
            </div>
          </div>
        </div>
      )}

      {/* 🎦 Google ویڈیو/پوڈکاسٹ کا پاپ اپ پلیئر */}
      {isLocalVideoOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsLocalVideoOpen(false)}>
          <div className="w-full max-w-4xl relative flex flex-col items-center animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold transition-all shadow-md border border-white z-50 urdu-text" onClick={() => setIsLocalVideoOpen(false)}>
              <FaTimes /> بند کریں
            </button>
            <video src={localVideoUrl} controls autoPlay className="w-full rounded-2xl border-4 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.4)] bg-black" />
          </div>
        </div>
      )}

      {/* 📖 فلپ بک کا پاپ اپ */}
      {showBooklet && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowBooklet(false)}>
          <div className="w-full max-w-5xl h-[85vh] relative" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold border border-white z-50 urdu-text" onClick={() => setShowBooklet(false)}>
              <FaTimes /> بند کریں
            </button>
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.4)]">
              {/* یہاں Heyzine کا لنک ہٹا کر ڈیٹا فائل کا لنک لگا دیا ہے */}
              <iframe src={quranVideos.intro.actions[0].link} className="w-full h-full border-none"></iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}