"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlay, FaTimes, FaChevronDown, FaMobileAlt, FaInfoCircle, FaCheckCircle, FaBookOpen, FaImages, FaFilm, FaHeadphones, FaShareAlt, FaHeart, FaRegHeart, FaEye, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import QuranIntroCard from '../components/QuranIntroCard';
import { quranVideos } from './noor-ul-quran-data';
export default function ProjectPage() {
  const router = useRouter();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [localVideoUrl, setLocalVideoUrl] = useState('');
  const [isLocalVideoOpen, setIsLocalVideoOpen] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [langTab, setLangTab] = useState('ur');
  const [popupLikes, setPopupLikes] = useState({});
  const [popupViews, setPopupViews] = useState({});

  const [counts, setCounts] = useState({
    arabic: 8,
    urdu: 8,
    surahs: 8,
    stories: 8,
    tilawat: 8
  });

  const handleLanguageChange = (lang) => {
    if (lang === 'fa') {
      router.push('/fa/home');
    } else if (lang === 'ur') {
      router.push('/home');
    } else {
      router.push('/home');
    }
  };

  // ✅ یہاں لنکس بالکل درست کر دیے گئے ہیں
  // ✅ یہاں لنکس کو Cloudinary کے ورکنگ لنکس سے بدل دیا گیا ہے
  const AUTHOR_REVIEW = {
    videoUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_qfyz0i.mp4",
    audioUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_wdodfp.mp4"
  };

  const projectSlides = [
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/1_algrfv.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/2_o9hs4u.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043095/3_ydbdnt.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/4_q8dd11.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/5_a3qcti.jpg",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772043094/6_wiuaoz.jpg"
  ];

  useEffect(() => {
    // لائکس اور ویوز کو لوکل اسٹوریج سے لوڈ کریں
    try {
      const storedLikes = JSON.parse(localStorage.getItem('noor-ul-quran-likes') || '{}');
      const storedViews = JSON.parse(localStorage.getItem('noor-ul-quran-views') || '{}');
      setPopupLikes(storedLikes);
      setPopupViews(storedViews);
    } catch (e) {
      console.error("Error loading stats:", e);
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectSlides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [projectSlides.length]);

  const handlePlayLocalVideo = (url) => {
    if (url) {
      const key = `local-${url}`;
      const nextViews = { ...popupViews, [key]: (popupViews[key] || 0) + 1 };
      setPopupViews(nextViews);
      localStorage.setItem('noor-ul-quran-views', JSON.stringify(nextViews));
      setLocalVideoUrl(url);
      setIsLocalVideoOpen(true);
    }
  };

  const handleOpenYoutubeVideo = (video) => {
    const key = `yt-${video.id}`;
    const nextViews = { ...popupViews, [key]: (popupViews[key] || 0) + 1 };
    setPopupViews(nextViews);
    localStorage.setItem('noor-ul-quran-views', JSON.stringify(nextViews));
    setSelectedVideo(video);
  };

  const togglePopupLike = (key) => {
    const nextLikes = { ...popupLikes, [key]: !popupLikes[key] };
    setPopupLikes(nextLikes);
    localStorage.setItem('noor-ul-quran-likes', JSON.stringify(nextLikes));
  };

  const shareFromPopup = (key) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = `نورالقرآن پراجیکٹ: دنیا کا پہلا ویژول قرآن۔ ویب سائٹ پر مکمل ویڈیو دیکھیں:`;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encodedText}%20${encodedUrl}`, "_blank");
  };

  const shareToPlatform = (platform, key) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = `نورالقرآن پراجیکٹ: دنیا کا پہلا ویژول قرآن۔ ویب سائٹ پر مکمل ویڈیو دیکھیں:`;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    const links = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      email: `mailto:shigriinfo@gmail.com?subject=${encodeURIComponent("Noor ul Quran")}&body=${encodedText}%0A%0A${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };
    const target = links[platform];
    if (target) window.open(target, "_blank", "noopener,noreferrer,width=700,height=700");
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

  const getYouTubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const VideoCard = ({ video }) => (
    <div onClick={() => handleOpenYoutubeVideo(video)} className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer group border border-[#D4AF37]/50 flex flex-col h-full">
      <div className="relative aspect-video bg-black overflow-hidden">
        <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" />
        <div className="absolute inset-0 flex items-end justify-start p-2.5 bg-black/10 group-hover:bg-transparent transition-all">
          <div className="bg-[#D4AF37]/90 w-8 h-8 rounded-full border-2 border-white shadow-[0_0_10px_rgba(212,175,55,0.4)] flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
            <FaPlay className="text-black text-[10px] ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-2.5 border-t border-[#D4AF37]/30 flex-grow flex items-center justify-center bg-gradient-to-b from-[#111] to-black">
        <p className="text-[#D4AF37] font-semibold urdu-text text-[13px] md:text-sm leading-snug text-center" dir="rtl">{video.title}</p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans">
      <Navbar />
      <HeroSlider />

      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f2a40] via-[#050505] to-[#000000] py-10 md:py-14 text-center relative border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-8xl font-extrabold text-[#D4AF37] mb-4 tracking-wide urdu-text drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">نورالقرآن پراجیکٹ</h1>
          <h2 className="text-lg md:text-3xl text-white/90 font-sans tracking-widest mb-4">(The Visual Quran)</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg md:text-2xl text-[#fff7cc] urdu-text font-light max-w-3xl mx-auto leading-relaxed border-t border-b border-[#D4AF37]/30 py-6 !text-center">
            "قرآن مجید کو چوم کر صرف اونچے طاق میں رکھ دینا ہی اس کا احترام نہیں، بلکہ اسے سمجھ کر پڑھنا اور اس پر عمل کرنا ہی اس کا حقیقی احترام ہے۔"
          </p>
        </div>
      </section>

      {/* 🌟 خوش خبری سیکشن */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-[#000] via-[#051525] to-[#000] relative overflow-hidden" dir="rtl">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex justify-center items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 md:w-32 bg-gradient-to-l from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#D4AF37] urdu-text tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">خوش خبری</h2>
              <div className="h-[2px] w-12 md:w-32 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-[#0a0a0a]/80 border-2 border-[#D4AF37]/30 p-8 md:p-12 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative mx-auto inline-block w-full"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-white urdu-text leading-relaxed font-bold !text-center">
                الحمداللہ! بین الحرمین کربلا اور حرم امام علی ابن موسیٰ الرضا علیہ السلام میں <span className="text-[#D4AF37]">نورالقرآن پراجیکٹ</span> کا افتتاح کردیا گیا۔
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
            {[
              {
                name: "شیخ علی نوری نجفی",
                desc: "افتتاحی تقریب بین الحرمین کربلا عراق",
                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840008/Iftitah--NoorulQuran-Karbala_tpwvtf.mp4",
                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_10/v1776840008/Iftitah--NoorulQuran-Karbala_tpwvtf.jpg"
              },
              {
                name: "مولانا عبدالخالق جعفری",
                desc: "خطیب و خادم حرم مطهر امام رضا علیہ السلام",
                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841560/Ag_jaffari_t487zc.mp4",
                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_5/v1776841560/Ag_jaffari_t487zc.jpg"
              },
              {
                name: "نجف علی سعادتی",
                desc: "قاری و خادم زائرین امام علی ابن موسیٰ الرضا علیہ السلام",
                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841527/Najaf_Ali_Saadati_dsemnc.mp4",
                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_8/v1776841527/Najaf_Ali_Saadati_dsemnc.jpg"
              },
              {
                name: "مولانا محمد حسین اکبر",
                desc: "سربراہ ادارہ منھاج الحسین ،لاہور",
                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840084/Molana-Akbar-about-NoorulQuran_ucs1ho.mp4",
                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_15/v1776840084/Molana-Akbar-about-NoorulQuran_ucs1ho.jpg"
              },
              {
                name: "سہیل احمد رضا",
                desc: "ڈائریکٹر انٹرفیتھ ریلیشنز منہاج القرآن انٹرنیشنل",
                video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840121/Suhail-Ahmed-about-NoorulQran_hbt50r.mp4",
                thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_25/v1776840121/Suhail-Ahmed-about-NoorulQran_hbt50r.jpg"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-[#0a0a0a] border border-[#D4AF37]/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-[#D4AF37]/10 transition-all group w-full max-w-[380px]"
              >
                <div className="aspect-video relative bg-black overflow-hidden">
                  <img 
                    src={item.thumb} 
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 flex items-end justify-start p-4 bg-black/10 group-hover:bg-black/5 transition-all cursor-pointer" onClick={() => handlePlayLocalVideo(item.video)}>
                    <div className="w-10 h-10 bg-[#D4AF37]/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all z-10">
                      <FaPlay className="text-[#000] text-sm ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center bg-black">
                  <h4 className="text-[#D4AF37] text-xl font-bold urdu-text mb-2">{item.name}</h4>
                  <p className="text-gray-400 urdu-text text-sm leading-relaxed h-10 flex items-center justify-center px-4">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-10 pb-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#0a0a0a] rounded-[2.5rem] p-6 md:p-12 border border-[#D4AF37]/20 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-full mb-3 text-sm font-bold border border-[#D4AF37]/30 urdu-text shadow-inner">
                <FaImages /> پراجیکٹ کی جھلکیاں
              </div>
              <div className="w-[300px] md:w-[330px] h-[400px] md:h-[430px] border-[6px] border-[#D4AF37] rounded-xl overflow-hidden relative shadow-[0_0_20px_rgba(212,175,55,0.4)] bg-black">
                {projectSlides.map((slide, index) => (
                  <img key={index} src={slide} alt={`Slide ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-full mb-3 text-sm font-bold border border-[#D4AF37]/30 urdu-text shadow-inner">
                <FaMobileAlt /> آج کا قرآنی کلپ
              </div>
              <div className="w-[220px] md:w-[240px] h-[400px] md:h-[430px] border-[10px] border-gray-800 rounded-[2rem] overflow-hidden relative shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-black">
                <div className="absolute top-0 w-24 h-4 bg-gray-800 rounded-b-lg z-20 left-1/2 transform -translate-x-1/2"></div>
                <iframe src="https://www.youtube.com/embed/videoseries?list=PLVLSFOIjQLcKg6NISQO33OXnk8JyOJET-" className="w-full h-full absolute inset-0 z-10" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 bg-[#0a0a0a] border border-gray-800 hover:border-[#D4AF37]/50 rounded-[2.5rem] p-6 md:p-10 shadow-2xl transition-all duration-500 group relative overflow-hidden">
          <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6 relative z-10">
            <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png" alt="نور القرآن" className="w-full h-auto rounded-2xl shadow-lg border border-[#D4AF37]/50" />
            <div className="space-y-3">
              <div className="flex rounded-xl overflow-hidden shadow-sm">
                <Link href="/library#Quran" className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-[#1a1a1a] text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition-colors shadow-sm">
                  <FaBookOpen className="ml-2" /> تفصیل پڑھیں
                </Link>
                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-[#1a1a1a] text-white border border-[#D4AF37]/50 border-r-0 hover:bg-[#D4AF37] hover:text-black transition-colors">
                  <FaShareAlt size={14} />
                </button>
              </div>
              <div className="flex rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.audioUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-[#0b314d] hover:shadow-lg transition-all">
                  <FaHeadphones className="ml-2" /> آڈیو پوڈکاسٹ سنیں
                </button>
                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-[#D4AF37] text-[#0b314d] border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
              </div>
              <div className="flex rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.videoUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-gradient-to-r from-red-700 to-red-900 text-white hover:shadow-lg transition-all">
                  <FaFilm className="ml-2" /> ویڈیو تجزیہ دیکھیں
                </button>
                <button onClick={handleShare} className="px-4 flex items-center justify-center bg-red-800 text-white border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
              </div>
            </div>
          </div>

          <div className="flex-1 text-right relative z-10" dir="rtl">
            <QuranIntroCard lang={langTab} phase={0} />
            <p className="text-sm text-gray-300 text-justify">اس وقت شارٹس کی شکل میں ہم کامیاب تجربہ کر چکے ہیں۔ اگلا مرحلہ مکمل قرآن پاک کو اسٹینڈرڈ سائز (16:9) میں ہائی ریزولوشن اور سینماٹک ویژولز کے ساتھ تیار کرنا ہے۔</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-[#0b314d] py-16 md:py-20 border-y-4 border-[#D4AF37]/50">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto bg-white/5 p-8 md:p-12 rounded-3xl border border-[#D4AF37]/30 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[80px] opacity-20"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] urdu-text mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">نورالقرآن پراجیکٹ: عظیم صدقہ جاریہ</h2>
            <p className="text-white/90 text-lg md:text-2xl leading-relaxed urdu-text font-light mb-8 !text-center">اگر آپ اس عالمی صدقہ جاریہ میں حصہ ڈالنا چاہتے ہیں تو ہم سے رابطہ فرمائیں۔</p>
            <Link href="/contact" className="inline-block bg-[#D4AF37] text-[#0b314d] px-10 py-3 rounded-full font-bold text-lg hover:bg-white transition-all shadow-md urdu-text">رابطہ اور تفصیلات</Link>
          </div>
        </div>
      </section>

      {/* 🎬 افتتاحی ویڈیو */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10 border-t border-white/5 mt-4">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-[#111] border border-[#D4AF37]/30 rounded-xl p-5 md:p-6 shadow-lg">
            <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37] text-center urdu-text mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">✨ اردو ترجمے کے ساتھ مکمل قرآن پاک کا افتتاح ✨</h3>
            <p className="text-center text-gray-300 urdu-text mb-6 text-sm md:text-lg !text-center">یکم رمضان المبارک کو علامہ شیخ محسن علی نجفیؒ کی قبر مطہر پر (جامعہ کوثر اسلام آباد) میں اس تاریخی پروجیکٹ کا افتتاح۔</p>
            <div className="aspect-video rounded-lg overflow-hidden border border-[#D4AF37]/50">
              {/* لنک میں ?rel=0&modestbranding=1&showinfo=0 کا اضافہ کیا گیا ہے */}
              <iframe
                src="https://www.youtube.com/embed/ah0OXlnDw2k?rel=0&modestbranding=1&showinfo=0"
                allowFullScreen
                className="w-full h-full"
                title="Noor ul Quran Project Launch"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 📺 ویڈیوز کی لسٹ */}
      <div className="bg-black">
        <QuranIntroCard lang={langTab} />

        {/* عربی پارے */}
        <section id="arabic" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <h3 className="bg-[#0b314d] text-[#D4AF37] px-8 py-4 rounded-full border-2 border-[#D4AF37]/50 urdu-text text-3xl md:text-5xl font-bold text-center mb-12 shadow-[0_0_20px_rgba(212,175,55,0.2)]">قرآنی ویڈیوز (عربی) - 30 پارے</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quranVideos.parat_arabic.slice(0, counts.arabic).map((v, i) => <VideoCard key={i} video={v} />)}
          </div>
          {counts.arabic < quranVideos.parat_arabic.length && (
            <div className="text-center mt-6">
              <button onClick={() => setCounts({ ...counts, arabic: counts.arabic + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button>
            </div>
          )}
        </section>

        {/* 📺 مرحلہ دوم - کارڈ */}
        <div className="py-8">
          <QuranIntroCard lang={langTab} phase={2} />
        </div>

        {/* اردو پارے - ویڈیوز */}
        <section id="urdu" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quranVideos.parat_urdu.slice(0, counts.urdu).map((v, i) => <VideoCard key={i} video={v} />)}
          </div>
          {counts.urdu < quranVideos.parat_urdu.length && (
            <div className="text-center mt-6">
              <button onClick={() => setCounts({ ...counts, urdu: counts.urdu + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button>
            </div>
          )}
        </section>

        {/* منتخب سورتیں */}
        <section id="surahs" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <h3 className="bg-[#0b314d] text-[#D4AF37] px-8 py-4 rounded-full border-2 border-[#D4AF37]/50 urdu-text text-3xl md:text-5xl font-bold text-center mb-12 shadow-[0_0_20px_rgba(212,175,55,0.2)]">منتخب سورتیں</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quranVideos.surahs.slice(0, counts.surahs).map((v, i) => <VideoCard key={i} video={v} />)}
          </div>
          {counts.surahs < quranVideos.surahs.length && (
            <div className="text-center mt-6">
              <button onClick={() => setCounts({ ...counts, surahs: counts.surahs + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button>
            </div>
          )}
        </section>

        <section id="stories" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <QuranIntroCard lang={langTab} phase={3} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {quranVideos.stories.slice(0, counts.stories).map((v, i) => <VideoCard key={i} video={v} />)}
          </div>
          {counts.stories < quranVideos.stories.length && (
            <div className="text-center mt-6">
              <button onClick={() => setCounts({ ...counts, stories: counts.stories + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button>
            </div>
          )}
        </section>

        {/* تلاوت */}
        <section id="tilawat" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <h3 className="bg-[#0b314d] text-[#D4AF37] px-8 py-4 rounded-full border-2 border-[#D4AF37]/50 urdu-text text-3xl md:text-5xl font-bold text-center mb-12 shadow-[0_0_20px_rgba(212,175,55,0.2)]">تلاوت، نعت اور معجزہ قرآن</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quranVideos.tilawat.slice(0, counts.tilawat).map((v, i) => <VideoCard key={i} video={v} />)}
          </div>
          {counts.tilawat < quranVideos.tilawat.length && (
            <div className="text-center mt-6">
              <button onClick={() => setCounts({ ...counts, tilawat: counts.tilawat + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button>
            </div>
          )}
        </section>
      </div>

      {/* 🎦 YouTube پاپ اپ */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 text-white px-3 py-1.5 rounded-full flex items-center gap-2" onClick={() => setSelectedVideo(null)}><FaTimes /> بند کریں</button>
            <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`} allowFullScreen className="w-full aspect-video rounded-lg shadow-2xl border border-[#D4AF37]"></iframe>
            <div className="mt-4 bg-[#0d0d0d] border border-[#D4AF37]/40 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => togglePopupLike(`yt-${selectedVideo.id}`)} className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs flex items-center gap-1.5">
                  {popupLikes[`yt-${selectedVideo.id}`] ? <FaHeart /> : <FaRegHeart />} {popupLikes[`yt-${selectedVideo.id}`] ? 1 : 0}
                </button>
                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1.5"><FaEye /> {popupViews[`yt-${selectedVideo.id}`] || 1}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button type="button" onClick={() => shareFromPopup(`yt-${selectedVideo.id}`)} className="share-btn"><FaShareAlt /> شیئر</button>
                <button onClick={() => shareToPlatform("whatsapp", `yt-${selectedVideo.id}`)} className="social-icon-btn social-whatsapp"><FaWhatsapp /></button>
                <button onClick={() => shareToPlatform("facebook", `yt-${selectedVideo.id}`)} className="social-icon-btn social-facebook"><FaFacebookF /></button>
                <button onClick={() => shareToPlatform("telegram", `yt-${selectedVideo.id}`)} className="social-icon-btn social-telegram"><FaTelegramPlane /></button>
                <button onClick={() => shareToPlatform("email", `yt-${selectedVideo.id}`)} className="social-icon-btn social-email"><FaEnvelope /></button>
                <button onClick={() => shareToPlatform("x", `yt-${selectedVideo.id}`)} className="social-icon-btn social-twitter"><FaXTwitter /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🎦 کلاؤڈنری (Local) پاپ اپ - آڈیو/ویڈیو تجزیہ کے لیے */}
      {isLocalVideoOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsLocalVideoOpen(false)}>
          <div className="w-full max-w-4xl relative mt-10" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-14 right-0 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold shadow-xl transition-all z-[110] flex items-center gap-2" 
              onClick={() => setIsLocalVideoOpen(false)}
            >
              <FaTimes /> بند کریں
            </button>
            <div className="rounded-2xl overflow-hidden border-4 border-[#D4AF37] bg-black shadow-[0_0_50px_rgba(212,175,55,0.3)]">
              <video src={localVideoUrl} controls autoPlay className="w-full max-h-[75vh]" />
            </div>
            <div className="mt-6 bg-[#0d0d0d] border border-[#D4AF37]/40 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => togglePopupLike(`local-${localVideoUrl}`)} className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs flex items-center gap-1.5">
                  {popupLikes[`local-${localVideoUrl}`] ? <FaHeart /> : <FaRegHeart />} {popupLikes[`local-${localVideoUrl}`] ? 1 : 0}
                </button>
                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1.5"><FaEye /> {popupViews[`local-${localVideoUrl}`] || 1}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button type="button" onClick={() => shareFromPopup(`local-${localVideoUrl}`)} className="share-btn"><FaShareAlt /> شیئر</button>
                <button onClick={() => shareToPlatform("whatsapp", `local-${localVideoUrl}`)} className="social-icon-btn social-whatsapp"><FaWhatsapp /></button>
                <button onClick={() => shareToPlatform("facebook", `local-${localVideoUrl}`)} className="social-icon-btn social-facebook"><FaFacebookF /></button>
                <button onClick={() => shareToPlatform("telegram", `local-${localVideoUrl}`)} className="social-icon-btn social-telegram"><FaTelegramPlane /></button>
                <button onClick={() => shareToPlatform("email", `local-${localVideoUrl}`)} className="social-icon-btn social-email"><FaEnvelope /></button>
                <button onClick={() => shareToPlatform("x", `local-${localVideoUrl}`)} className="social-icon-btn social-twitter"><FaXTwitter /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
} 