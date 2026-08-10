"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaPlay, FaTimes, FaChevronDown, FaMobileAlt, FaInfoCircle, FaCheckCircle, FaBookOpen, FaImages, FaFilm, FaHeadphones, FaShareAlt, FaHeart, FaRegHeart, FaEye, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import QuranIntroCard from '../components/QuranIntroCard';
import ClipViewsCounter from '../components/ClipViewsCounter';
import { quranVideos } from './noor-ul-quran-data';

export default function ProjectPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
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
    try {
      const storedLikes = JSON.parse(localStorage.getItem('noor-ul-quran-likes') || '{}');
      const storedViews = JSON.parse(localStorage.getItem('noor-ul-quran-views') || '{}');
      setPopupLikes(storedLikes);
      setPopupViews(storedViews);
    } catch (e) {}

    const videoId = searchParams.get('v');
    const localType = searchParams.get('type');
    
    if (videoId) {
      const allVideos = [...quranVideos.parat_arabic, ...quranVideos.parat_urdu, ...quranVideos.surahs, ...quranVideos.stories, ...quranVideos.tilawat];
      const found = allVideos.find(v => v.id === videoId);
      if (found) setSelectedVideo(found);
    } else if (localType === 'audio') {
      handlePlayLocalVideo(AUTHOR_REVIEW.audioUrl);
    } else if (localType === 'video-analysis') {
      handlePlayLocalVideo(AUTHOR_REVIEW.videoUrl);
    }

    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % projectSlides.length), 9000);
    return () => clearInterval(timer);
  }, [searchParams]);

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

  const shareItem = (platform, key, title = '') => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
    let shareUrl = baseUrl;
    
    if (key.startsWith('yt-')) {
      shareUrl += `?v=${key.replace('yt-', '')}`;
    } else if (key.includes('audio')) {
      shareUrl += `?type=audio`;
    } else if (key.includes('video-analysis')) {
      shareUrl += `?type=video-analysis`;
    }

    const itemTitle = title ? `${title} - شبیر احمد شگری کے نورالقرآن کے بارے میں خیالات` : 'نورالقرآن پراجیکٹ - شبیر احمد شگری';
    const text = `نورالقرآن پراجیکٹ: ${itemTitle} ویب سائٹ پر دیکھیں۔`;
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(text);
    
    const links = {
      whatsapp: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      email: `mailto:shigriinfo@gmail.com?subject=Noor ul Quran - شبیر احمد شگری&body=${encodedText}%0A%0A${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };

    if (platform === 'native' && navigator.share) {
      navigator.share({ title: "نورالقرآن پراجیکٹ - شبیر احمد شگری", text, url: shareUrl }).catch(() => {});
    } else if (links[platform]) {
      window.open(links[platform], "_blank", "noopener,noreferrer,width=700,height=700");
    }
  };

  const VideoCard = ({ video }) => (
    <div className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer group border border-[#D4AF37]/50 flex flex-col h-full relative">
      <div onClick={() => handleOpenYoutubeVideo(video)} className="relative aspect-video bg-black overflow-hidden">
        <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" />
        <div className="absolute inset-0 flex items-end justify-start p-2.5 bg-black/10 group-hover:bg-transparent transition-all">
          <div className="bg-[#D4AF37]/90 w-8 h-8 rounded-full border-2 border-white shadow-[0_0_10px_rgba(212,175,55,0.4)] flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
            <FaPlay className="text-black text-[10px] ml-0.5" />
          </div>
        </div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); shareItem('whatsapp', `yt-${video.id}`, video.title); }} className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-[#0f4c75] opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:scale-110 z-10"><FaShareAlt size={10} /></button>
      <div onClick={() => handleOpenYoutubeVideo(video)} className="p-3 flex-grow flex flex-col justify-center">
        <h4 className="text-[#D4AF37] font-semibold text-center urdu-text text-sm md:text-base leading-snug group-hover:text-white transition-colors">{video.title}</h4>
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
          <p className="text-lg md:text-2xl text-[#fff7cc] urdu-text font-light max-w-3xl mx-auto leading-relaxed border-t border-b border-[#D4AF37]/30 py-6 !text-center">"قرآن مجید کو چوم کر صرف اونچے طاق میں رکھ دینا ہی اس کا احترام نہیں، بلکہ اسے سمجھ کر پڑھنا اور اس پر عمل کرنا ہی اس کا حقیقی احترام ہے۔"</p>
        </div>
      </section>

      <section className="py-12 bg-black border-y border-[#D4AF37]/20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-[#0a0a0a] rounded-[2rem] p-6 md:p-10 border border-[#D4AF37]/30 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
            <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="space-y-6 text-right">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] urdu-text leading-tight drop-shadow-sm">بانیِ نور القرآن، حاجی شبیر احمد شگری کا پیغام</h3>
                  <div className="h-1 w-20 bg-[#D4AF37] rounded-full"></div>
                  <div className="space-y-4 text-gray-200 urdu-text text-base md:text-lg leading-relaxed text-justify">
                    <p className="font-bold text-[#fff7cc]">بانیِ نور القرآن، حاجی شبیر احمد شگری کا صرف تین منٹ کا یہ پیغام آپ کی دنیا و آخرت دونوں سنوار سکتا ہے!</p>
                    <p>قرآن پاک کی دعوت کا ایک بالکل نیا اور انوکھا انداز — دنیا کا پہلا 8K بصری قرآن! 📖✨</p>
                    <p className="italic text-[#D4AF37]/90 text-sm md:text-base bg-white/5 p-4 rounded-xl border-r-4 border-[#D4AF37]">
                      (ذرا تصور کریں کہ ایک عام انسان بھی آسانی کے ساتھ قرآن کریم کو سمجھنے لگے تو اس کے اندر کیسا انقلاب آئے گا، اس کا کردار اور اخلاق کیسے بدل جائے گا؟۔۔۔۔)
                    </p>
                    <p className="font-bold">السلام علیکم ورحمۃ اللہ وبرکاتہ!</p>
                    <p>ایک ایسے دور میں جب ہماری نوجوان نسل اور دنیا بھر کے لوگوں کی توجہ سکرینز اور ڈیجیٹل میڈیا پر ہے، اور قرآن فہمی کے لیے ہمارے پاس کوئی موثر ذریعہ موجود نہیں ہے جس سے عام افراد مستفید ہو سکیں۔ اس لیے ہم نے قرآن پاک کے آفاقی پیغام کو دلوں میں اتارنے کے لیے ایک بالکل منفرد اور تاریخی قدم اٹھایا ہے۔</p>
                    <p>ہم "نورالقرآن ویژول پراجیکٹ" کے تحت دنیا کا پہلا سینیمیٹک (بصری) قرآن تیار کر رہے ہیں۔ جس میں مکمل قرآن پاک کو آیت بہ آیت ویڈیو کی شکل میں تیار کیا جائے گا۔ اس انداز میں کہ ترجمے کو ساتھ سنتے اور مناظر کو دیکھتے ہوئے آسانی سے قرآنی آیات کے مطالب سمجھ میں آ جائیں۔ جو تاریخ میں واقعی پہلی مرتبہ ہے اور ایک انقلابی قدم ہے۔</p>
                    <p>یہ کوئی عام ویڈیو سیریز نہیں ہے! ہم جدید ترین AI ٹیکنالوجی کا استعمال کرتے ہوئے قرآنی واقعات، انبیاء کے قصے اور تاریخی مقامات کو بالکل حقیقت پسندانہ انداز میں بصری (Visual) شکل دے رہے ہیں۔</p>
                    <p>ہم چاہتے ہیں کہ اس پروجیکٹ کی روشنی دنیا کے ہر کونے تک پہنچ سکے۔</p>
                    <p className="text-[#D4AF37] font-bold text-xl">ہمیں آپ کے ساتھ اور تعاون کی ضرورت کیوں ہے؟</p>
                    <p>اس قدر اعلیٰ معیار کی ویڈیوز بنانے، ریسرچ کرنے اور ایک عالمی ڈیجیٹل لائبریری چلانے کے لیے مہنگے سافٹ ویئرز اور طاقتور کلاؤڈ سسٹمز اور سٹوڈیو کے اخراجات کی ضرورت ہے۔</p>
                    <p>میں آپ سب کو دعوت دیتا ہوں کہ اس عظیم صدقہ جاریہ میں ہمارا ساتھ دیں۔ جب تک دنیا کا کوئی بھی انسان ان ویڈیوز کو دیکھ کر قرآن پاک کو سمجھے گا، ہمارے مرنے کے بعد بھی جب ہم ایک ایک نیکی کو ترسیں گے، اس کا ثواب ہمارے نامہ اعمال میں لکھا جاتا رہے گا۔ میرا خیال ہے عقلمند ہے وہ انسان جو ابھی اس بارے میں سوچ لے۔</p>
                    <p>آپ کا تھوڑا سا تعاون اس بصری قرآن کو لاکھوں دلوں تک پہنچانے کا ذریعہ بنے گا۔ براہِ کرم اس میسج کو اپنے دوستوں اور اہل خانہ کے ساتھ ضرور شیئر کریں۔ جزاک اللہ!</p>
                  </div>
                  
                  <div className="pt-8 border-t border-[#D4AF37]/20">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-1 space-y-3 text-right w-full">
                        <h4 className="text-[#D4AF37] font-bold text-lg urdu-text">اس عظیم پروجیکٹ میں اپنا حصہ ڈالنے کے لیے رابطہ کریں:</h4>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-mono text-sm md:text-base space-y-1 text-white">
                          <p><span className="text-gray-400">IBAN:</span> PK09ABPA0010031602830015</p>
                          <p><span className="text-gray-400">Title:</span> Shabbir Ahmad</p>
                          <p><span className="text-gray-400">Allied Bank:</span> 05300010031602830015</p>
                          <p><span className="text-gray-400">Jazz/Easy/Sada:</span> 03334491715</p>
                        </div>
                      </div>
                      <div className="w-32 h-32 bg-white p-2 rounded-xl shadow-lg border-2 border-[#D4AF37]">
                        <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1779700074/6f0a48b4-871e-45ed-98f3-68389302d250.png" alt="Donation QR Code" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all">
                  <iframe 
                    src="https://www.youtube.com/embed/qfC_wgt_Dtk?rel=0" 
                    className="absolute inset-0 w-full h-full" 
                    allowFullScreen
                    title="Noor-ul-Quran Message"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <Link href="/noor-ul-quran" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors urdu-text font-bold">
                    <span>ہمارے کام کی جھلک (ٹیزر) یہاں دیکھیں!</span>
                    <FaChevronDown className="-rotate-90" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-gradient-to-b from-[#000] via-[#051525] to-[#000] relative overflow-hidden" dir="rtl">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex justify-center items-center gap-4 mb-8">
              <div className="h-[2px] w-12 md:w-32 bg-gradient-to-l from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#D4AF37] urdu-text tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">خوش خبری</h2>
              <div className="h-[2px] w-12 md:w-32 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="bg-[#0a0a0a]/80 border-2 border-[#D4AF37]/30 p-8 md:p-12 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative mx-auto inline-block w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white urdu-text leading-relaxed font-bold !text-center">الحمداللہ! بین الحرمین کربلا اور حرم امام علی ابن موسیٰ الرضا علیہ السلام میں <span className="text-[#D4AF37]">نورالقرآن پراجیکٹ</span> کا افتتاح کردیا گیا۔</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
            {[
              { name: "شیخ صالح علی نوری کربلائی", desc: "افتتاحی تقریب بین الحرمین کربلا عراق", video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840008/Iftitah--NoorulQuran-Karbala_tpwvtf.mp4", thumb: "https://res.cloudinary.com/drlg0dr9y/image/upload/v1777267536/79e376e3-a5e6-4481-a917-eb1ff9280702.png" },
              { name: "شیخ اکرم جبار", desc: "مبلغ شعبہ تبلیغات، حرم امام حسین علیہ السلام", video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1777263262/Shiekh_Ikram_Jabar_Karbala_compressed_zshkqv.mp4", thumb: "https://res.cloudinary.com/drlg0dr9y/image/upload/v1777265902/0b065f01-e6b8-42b3-a1a6-036d71e905f4.png" },
              { name: "مولانا عبدالخالق جعفری", desc: "خطیب و خادم حرم مطهر امام رضا علیہ السلام", video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841560/Ag_jaffari_t487zc.mp4", thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_5/v1776841560/Ag_jaffari_t487zc.jpg" },
              { name: "نجف علی سعادتی", desc: "قاری و خادم زائرین امام علی ابن موسیٰ الرضا علیہ السلام", video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841527/Najaf_Ali_Saadati_dsemnc.mp4", thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_8/v1776841527/Najaf_Ali_Saadati_dsemnc.jpg" },
              { name: "مولانا محمد حسین اکبر", desc: "سربراہ ادارہ منھاج الحسین ،لاہور", video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840084/Molana-Akbar-about-NoorulQuran_ucs1ho.mp4", thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_15/v1776840084/Molana-Akbar-about-NoorulQuran_ucs1ho.jpg" },
              { name: "سہیل احمد رضا", desc: "ڈائریکٹر انٹرفیتھ ریلیشنز منہاج القرآن انٹرنیشنل", video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840121/Suhail-Ahmed-about-NoorulQran_hbt50r.mp4", thumb: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_25/v1776840121/Suhail-Ahmed-about-NoorulQran_hbt50r.jpg" }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="bg-[#0a0a0a] border border-[#D4AF37]/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-[#D4AF37]/10 transition-all group w-full max-w-[380px] relative">
                <div className="aspect-video relative bg-black overflow-hidden">
                  <img src={item.thumb} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100" />
                  <div className="absolute inset-0 flex items-end justify-start p-4 bg-black/10 group-hover:bg-black/40 transition-all cursor-pointer" onClick={() => handlePlayLocalVideo(item.video)}>
                    <div className="w-10 h-10 bg-[#D4AF37]/70 group-hover:bg-[#D4AF37]/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all z-10 opacity-60 group-hover:opacity-100"><FaPlay className="text-[#000] text-sm ml-0.5" /></div>
                  </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); shareItem('whatsapp', `local-${item.video}`, item.name); }} className="absolute top-2 right-2 w-8 h-8 bg-white/70 group-hover:bg-white/90 rounded-full flex items-center justify-center text-[#0f4c75] opacity-60 group-hover:opacity-100 transition-all shadow-md hover:scale-110 z-20 border-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37]">
                  <FaShareAlt size={12} />
                </button>
                <div className="p-6 text-center bg-black"><h4 className="text-[#D4AF37] text-xl font-bold urdu-text mb-2">{item.name}</h4><p className="text-gray-400 urdu-text text-sm leading-relaxed h-10 flex items-center justify-center px-4">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-10 pb-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#0a0a0a] rounded-[2.5rem] p-6 md:p-12 border border-[#D4AF37]/20 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-full mb-3 text-sm font-bold border border-[#D4AF37]/30 urdu-text shadow-inner"><FaImages /> پراجیکٹ کی جھلکیاں</div>
              <div className="w-[300px] md:w-[330px] h-[400px] md:h-[430px] border-[6px] border-[#D4AF37] rounded-xl overflow-hidden relative shadow-[0_0_20px_rgba(212,175,55,0.4)] bg-black">
                {projectSlides.map((slide, index) => (
                  <img key={index} src={slide} alt={`Slide ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-full mb-3 text-sm font-bold border border-[#D4AF37]/30 urdu-text shadow-inner"><FaMobileAlt /> آج کا قرآنی کلپ</div>
              <div className="w-[220px] md:w-[240px] h-[400px] md:h-[430px] border-[10px] border-gray-800 rounded-[2rem] overflow-hidden relative shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-black">
                <div className="absolute top-0 w-24 h-4 bg-gray-800 rounded-b-lg z-20 left-1/2 transform -translate-x-1/2"></div>
                <iframe 
                   src="https://www.youtube.com/embed/videoseries?list=PLv2RK6Z1UOXc2OPbBzV_h1BclLmgYNGM2" 
                   className="w-full h-full absolute inset-0 z-10" 
                   allowFullScreen
                   loading="lazy"
                   title="Daily Quranic Clip Playlist"
                 ></iframe>
              </div>
              <ClipViewsCounter lang="ur" />
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
                <Link href="/library#Quran" className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-[#1a1a1a] text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition-colors shadow-sm"><FaBookOpen className="ml-2" /> تفصیل پڑھیں</Link>
                <button onClick={() => shareItem('whatsapp', '', 'نورالقرآن پراجیکٹ تفصیل')} className="px-4 flex items-center justify-center bg-[#1a1a1a] text-white border border-[#D4AF37]/50 border-r-0 hover:bg-[#D4AF37] hover:text-black transition-colors"><FaShareAlt size={14} /></button>
              </div>
              <div className="flex rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.audioUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-[#0b314d] hover:shadow-lg transition-all"><FaHeadphones className="ml-2" /> آڈیو پوڈکاسٹ سنیں</button>
                <button onClick={() => shareItem('whatsapp', 'audio', 'نورالقرآن آڈیو پوڈکاسٹ')} className="px-4 flex items-center justify-center bg-[#D4AF37] text-[#0b314d] border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
              </div>
              <div className="flex rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => handlePlayLocalVideo(AUTHOR_REVIEW.videoUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-gradient-to-r from-red-700 to-red-900 text-white hover:shadow-lg transition-all"><FaFilm className="ml-2" /> ویڈیو تجزیہ دیکھیں</button>
                <button onClick={() => shareItem('whatsapp', 'video-analysis', 'نورالقرآن ویڈیو تجزیہ')} className="px-4 flex items-center justify-center bg-red-800 text-white border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14} /></button>
              </div>
            </div>
          </div>
          <div className="flex-1 text-right relative z-10" dir="rtl"><QuranIntroCard lang={langTab} phase={0} /><p className="text-sm text-gray-300 text-justify">اس وقت شارٹس کی شکل میں ہم کامیاب تجربہ کر چکے ہیں۔ اگلا مرحلہ مکمل قرآن پاک کو اسٹینڈرڈ سائز (16:9) میں ہائی ریزولوشن اور سینماٹک ویژولز کے ساتھ تیار کرنا ہے۔</p></div>
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

      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10 border-t border-white/5 mt-4">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-[#111] border border-[#D4AF37]/30 rounded-xl p-5 md:p-6 shadow-lg">
            <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37] text-center urdu-text mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">✨ اردو ترجمے کے ساتھ مکمل قرآن پاک کا افتتاح ✨</h3>
            <p className="text-center text-gray-300 urdu-text mb-6 text-sm md:text-lg !text-center">یکم رمضان المبارک کو علامہ شیخ محسن علی نجفیؒ کی قبر مطہر پر (جامعہ کوثر اسلام آباد) میں اس تاریخی پروجیکٹ کا افتتاح۔</p>
            <div className="aspect-video rounded-lg overflow-hidden border border-[#D4AF37]/50 relative">
              <iframe 
                src="https://www.youtube.com/embed/ah0OXlnDw2k?rel=0&modestbranding=1&showinfo=0" 
                allowFullScreen 
                className="w-full h-full" 
                title="Noor ul Quran Project Launch Video"
                loading="lazy"
              ></iframe>
              <button onClick={() => shareItem('whatsapp', 'yt-ah0OXlnDw2k', 'نورالقرآن پراجیکٹ افتتاحی ویڈیو')} className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-[#0f4c75] shadow-lg hover:scale-110 transition-all z-10"><FaShareAlt size={16} /></button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black">
        <QuranIntroCard lang={langTab} />
        <section id="arabic" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <h3 className="bg-[#0b314d] text-[#D4AF37] px-8 py-4 rounded-full border-2 border-[#D4AF37]/50 urdu-text text-3xl md:text-5xl font-bold text-center mb-12 shadow-[0_0_20px_rgba(212,175,55,0.2)]">قرآنی ویڈیوز (عربی) - 30 پارے</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{quranVideos.parat_arabic.slice(0, counts.arabic).map((v, i) => <VideoCard key={i} video={v} />)}</div>
          {counts.arabic < quranVideos.parat_arabic.length && <div className="text-center mt-6"><button onClick={() => setCounts({ ...counts, arabic: counts.arabic + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button></div>}
        </section>
        <div className="py-8"><QuranIntroCard lang={langTab} phase={2} /></div>
        <section id="urdu" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{quranVideos.parat_urdu.slice(0, counts.urdu).map((v, i) => <VideoCard key={i} video={v} />)}</div>
          {counts.urdu < quranVideos.parat_urdu.length && <div className="text-center mt-6"><button onClick={() => setCounts({ ...counts, urdu: counts.urdu + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button></div>}
        </section>
        <section id="surahs" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <h3 className="bg-[#0b314d] text-[#D4AF37] px-8 py-4 rounded-full border-2 border-[#D4AF37]/50 urdu-text text-3xl md:text-5xl font-bold text-center mb-12 shadow-[0_0_20px_rgba(212,175,55,0.2)]">منتخب سورتیں</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{quranVideos.surahs.slice(0, counts.surahs).map((v, i) => <VideoCard key={i} video={v} />)}</div>
          {counts.surahs < quranVideos.surahs.length && <div className="text-center mt-6"><button onClick={() => setCounts({ ...counts, surahs: counts.surahs + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button></div>}
        </section>
        <section id="stories" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <QuranIntroCard lang={langTab} phase={3} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">{quranVideos.stories.slice(0, counts.stories).map((v, i) => <VideoCard key={i} video={v} />)}</div>
          {counts.stories < quranVideos.stories.length && <div className="text-center mt-6"><button onClick={() => setCounts({ ...counts, stories: counts.stories + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button></div>}
        </section>
        <section id="tilawat" className="py-8 px-4 border-t border-white/5 max-w-6xl mx-auto">
          <h3 className="bg-[#0b314d] text-[#D4AF37] px-8 py-4 rounded-full border-2 border-[#D4AF37]/50 urdu-text text-3xl md:text-5xl font-bold text-center mb-12 shadow-[0_0_20px_rgba(212,175,55,0.2)]">تلاوت، نعت اور معجزہ قرآن</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{quranVideos.tilawat.slice(0, counts.tilawat).map((v, i) => <VideoCard key={i} video={v} />)}</div>
          {counts.tilawat < quranVideos.tilawat.length && <div className="text-center mt-6"><button onClick={() => setCounts({ ...counts, tilawat: counts.tilawat + 8 })} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all urdu-text flex items-center gap-2 mx-auto">مزید دیکھیں <FaChevronDown /></button></div>}
        </section>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
            <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
              <button className="absolute -top-12 right-0 bg-red-600 text-white px-3 py-1.5 rounded-full flex items-center gap-2" onClick={() => setSelectedVideo(null)}><FaTimes /> بند کریں</button>
              <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`} allowFullScreen className="w-full aspect-video rounded-lg shadow-2xl border border-[#D4AF37]"></iframe>
              <div className="mt-4 bg-[#0d0d0d] border border-[#D4AF37]/40 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => togglePopupLike(`yt-${selectedVideo.id}`)} className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs flex items-center gap-1.5">{popupLikes[`yt-${selectedVideo.id}`] ? <FaHeart /> : <FaRegHeart />} {popupLikes[`yt-${selectedVideo.id}`] ? 1 : 0}</button>
                  <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1.5"><FaEye /> {popupViews[`yt-${selectedVideo.id}`] || 1}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button type="button" onClick={() => shareItem('whatsapp', `yt-${selectedVideo.id}`, selectedVideo.title)} className="share-btn"><FaShareAlt /> شیئر</button>
                  <button onClick={() => shareItem('facebook', `yt-${selectedVideo.id}`, selectedVideo.title)} className="social-icon-btn social-facebook"><FaFacebookF /></button>
                  <button onClick={() => shareItem('telegram', `yt-${selectedVideo.id}`, selectedVideo.title)} className="social-icon-btn social-telegram"><FaTelegramPlane /></button>
                  <button onClick={() => shareItem('email', `yt-${selectedVideo.id}`, selectedVideo.title)} className="social-icon-btn social-email"><FaEnvelope /></button>
                  <button onClick={() => shareItem('x', `yt-${selectedVideo.id}`, selectedVideo.title)} className="social-icon-btn social-twitter"><FaXTwitter /></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLocalVideoOpen && (
          <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsLocalVideoOpen(false)}>
            <div className="w-full max-w-4xl relative mt-10" onClick={e => e.stopPropagation()}>
              <button className="absolute -top-14 right-0 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold shadow-xl transition-all z-[110] flex items-center gap-2" onClick={() => setIsLocalVideoOpen(false)}><FaTimes /> بند کریں</button>
              <div className="rounded-2xl overflow-hidden border-4 border-[#D4AF37] bg-black shadow-[0_0_50px_rgba(212,175,55,0.3)]"><video src={localVideoUrl} controls autoPlay className="w-full max-h-[75vh]" /></div>
              <div className="mt-6 bg-[#0d0d0d] border border-[#D4AF37]/40 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => togglePopupLike(`local-${localVideoUrl}`)} className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs flex items-center gap-1.5">{popupLikes[`local-${localVideoUrl}`] ? <FaHeart /> : <FaRegHeart />} {popupLikes[`local-${localVideoUrl}`] ? 1 : 0}</button>
                  <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center gap-1.5"><FaEye /> {popupViews[`local-${localVideoUrl}`] || 1}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button type="button" onClick={() => shareItem('whatsapp', `local-${localVideoUrl}`, 'پراجیکٹ ویڈیو')} className="share-btn"><FaShareAlt /> شیئر</button>
                  <button onClick={() => shareItem('whatsapp', `local-${localVideoUrl}`, 'پراجیکٹ ویڈیو')} className="social-icon-btn social-whatsapp"><FaWhatsapp /></button>
                  <button onClick={() => shareItem('facebook', `local-${localVideoUrl}`, 'پراجیکٹ ویڈیو')} className="social-icon-btn social-facebook"><FaFacebookF /></button>
                  <button onClick={() => shareItem('telegram', `local-${localVideoUrl}`, 'پراجیکٹ ویڈیو')} className="social-icon-btn social-telegram"><FaTelegramPlane /></button>
                  <button onClick={() => shareItem('email', `local-${localVideoUrl}`, 'پراجیکٹ ویڈیو')} className="social-icon-btn social-email"><FaEnvelope /></button>
                  <button onClick={() => shareItem('x', `local-${localVideoUrl}`, 'پراجیکٹ ویڈیو')} className="social-icon-btn social-twitter"><FaXTwitter /></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}
