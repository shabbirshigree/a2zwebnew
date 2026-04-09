"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaPaintBrush, FaPalette, FaMosque, FaTree, FaFilm, FaImage, FaBookOpen, FaBook, FaNewspaper, FaCheckCircle, FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight, FaShareAlt, FaGlobe, FaHeadphones, FaLandmark, FaStar } from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

export default function DesignPortfolio() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [langTab, setLangTab] = useState('ur');

  // 🟢 خراسان رضوی کتاب کا ڈیٹا
  const khurasanBook = {
    id: 'book-khurasan',
    title: 'خراسان رضوی',
    titleEn: 'Khurasan Razavi',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772111272/65878faa-2f99-4af6-8216-ad9009adc747.png',
    badge: 'ڈیزائن و لے آؤٹ',
    descUrdu: 'یہ ایک شاندار تصویری کتاب ہے جس کی مکمل ڈیزائننگ (Graphics & Layout) خاکسار نے کی۔ یہ پاکستان میں ڈیزائن ہونے والی پہلی ایرانی کتاب تھی، جو بعد ازاں ایران سے اعلیٰ ترین معیار پر شائع ہوئی۔ اس کتاب میں خراسان اور مشہدِ مقدس کے تاریخی، ثقافتی اور روحانی مقامات کو انتہائی خوبصورتی سے پیش کیا گیا ہے۔ اس میں ایران کی تاریخی عمارات، مزاریں، اور ثقافتی میراث کے ہزاروں تصویریں شامل ہیں جو خصوصی جمع و ترتیب کے ساتھ تیار کی گئی ہیں۔', 
    descEn: 'A magnificent pictorial book completely designed (Graphics & Layout) by the author. It was the first Iranian book designed in Pakistan, later published in Iran with the highest quality standards. This book beautifully presents the historical, cultural, and spiritual sites of Khurasan and Mashhad. It contains thousands of carefully selected and curated photographs of Iran\'s historical buildings, shrines, and cultural heritage.',
    libraryUrl: '/library#book-khorasan',
    videoUrl: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076063/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_unp6gj.mp4',
    audioUrl: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076045/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_ctn2j6.mp4'
  };

  // 🔴 ویڈیو یا آڈیو چلانے کا فنکشن
  const handlePlayVideo = (e, url) => {
    e.preventDefault();
    if (url) {
      setVideoUrl(url);
      setVideoModalOpen(true);
    }
  };

  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.share) {
      navigator.share({ title: khurasanBook.title, url: url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      alert('لنک کاپی ہو گیا ہے');
    }
  };

  const galleryImages = [
    // --- مسجد نبوی کے 3D ماڈل ---
    { id: 1, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075728/FIL3526-Picsart-AiImageEnhancer_fclosx.jpg", title: "مسجد نبوی کا منظر: 3D ماڈل کی تیاری" },
    { id: 2, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075727/FIL3513-Picsart-AiImageEnhancer_xlbvid.jpg", title: "مسجد نبوی کا منظر: 3D ماڈل کی تیاری" },
    { id: 3, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075724/FIL3514-Picsart-AiImageEnhancer_pizdrd.jpg", title: "مسجد نبوی کا منظر: 3D ماڈل کی تیاری" },
    { id: 4, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075722/FIL3501-Picsart-AiImageEnhancer_muujyx.jpg", title: "مسجد نبوی کا منظر: پروگرام میں تنصیب" },
    { id: 5, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075722/FIL3500-Picsart-AiImageEnhancer_txdisi.jpg", title: "مسجد نبوی کا منظر: پروگرام میں تنصیب" },
    { id: 6, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075727/FIL3502-Picsart-AiImageEnhancer_mj5f8w.jpg", title: "مسجد نبوی کا منظر: پروگرام میں تنصیب" },
    
    // --- شجر طیبہ ---
    { id: 7, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076123/FIL3491-Picsart-AiImageEnhancer_x9kyyy.jpg", title: "جناب سیدہ (س) کے القابات پر مشتمل شجر طیبہ ماڈل" },
    
    // --- آئل پینٹنگ خطاطی ---
    { id: 8, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076275/FIL3515-Picsart-AiImageEnhancer_l5crkz.jpg", title: "یا ابا صالح المھدی (عج): آئل پینٹنگ خطاطی کی تیاری" },
    { id: 9, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076279/FIL3496-Picsart-AiImageEnhancer_mkhz93.jpg", title: "یا ابا صالح المھدی (عج): آئل پینٹنگ خطاطی" },
    { id: 10, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076276/FIL3504-Picsart-AiImageEnhancer_swyypy.jpg", title: "یا ابا صالح المھدی (عج): اسٹیج پر تنصیب" },
    { id: 11, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076280/FIL3511-Picsart-AiImageEnhancer_xadkvu.jpg", title: "یا ابا صالح المھدی (عج): پروگرام کے دوران" },
    
    // --- روضہ امام علی ؑ ---
    { id: 12, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076595/FIL3490_hwleco.jpg", title: "روضہ امام علی ؑ کا تھرموپور ماڈل کی تیاری" },
    { id: 13, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076595/FIL3493_tdsqer.jpg", title: "روضہ امام علی ؑ کا تھرموپور ماڈل" },
    { id: 14, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076596/FIL3489_z7y1fu.jpg", title: "روضہ امام علی ؑ کا ماڈل اور 13 رجب کا مشاعرہ" },
    { id: 15, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076594/FIL3518_trass8.jpg", title: "روضہ امام علی ؑ کا ماڈل اور 13 رجب کا مشاعرہ" },
    
    // --- نوار رستم ---
    { id: 16, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3527_oaz56i.jpg", title: "نوارِ رستم: وی ایچ ایس کیسٹ کا دیوہیکل ماڈل" },
    { id: 17, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077214/FIL3527-Picsart-AiImagehEnhancer_c6fxsf.jpg", title: "نوارِ رستم کا ٹیکنیکل شاہکار" },
    { id: 18, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076947/FIL3498_fn6mic.jpg", title: "نوارِ رستم: نمائش میں تیاری کے مراحل" },
    { id: 19, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3499_hamxq0.jpg", title: "نوارِ رستم: نمائش کی زینت" },
    { id: 20, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3528_ptwcws.jpg", title: "نوارِ رستم کے ساتھ آرٹسٹ کی یادگار تصویر" },
    
    // --- الحمرا بینر ---
    { id: 21, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077437/FIL3550_n9odsm.jpg", title: "الحمرا بینر: 100 فٹ اونچا ہاتھ سے پینٹ کیا گیا شاہکار" },
    { id: 22, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077439/FIL3542_nh6fu8.jpg", title: "میدانِ آزادی ایران کا تاریخی منظر (الحمرا دیوار)" },
    
    // --- قرآنی 3D ماڈل ---
    { id: 23, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077857/FIL3609_hpkrkd.jpg", title: "قرآنی پروگرام کے لئے قد آدم 3D ماڈل" },
    
    // --- مزید شاہکار ---
    { id: 24, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077767/FIL3519_auclv8.jpg", title: "آئمہ طاہرینؑ کے پروگرامز کے لئے تھرموپور شاہکار" },
    { id: 25, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077755/FIL3610_cnczkz.jpg", title: "آئمہ طاہرینؑ کے پروگرامز کے لئے تھرموپور شاہکار" },
    { id: 26, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077745/FIL3608_jeycmp.jpg", title: "آئمہ طاہرینؑ کے پروگرامز کے لئے تھرموپور شاہکار" }
  ];

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const openImageByTitle = (title) => {
    const index = galleryImages.findIndex((img) => img.title.includes(title));
    if (index !== -1) {
      setSelectedImageIndex(index);
    } else {
      setSelectedImageIndex(15);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans">
      <Navbar />
      <HeroSlider />

      {/* 🌟 آرٹسٹک ہیڈر */}
      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1005] via-[#050505] to-[#000000] py-16 md:py-24 text-center relative border-b border-[#D4AF37]/30 overflow-hidden">
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-6 text-[#D4AF37] opacity-80 animate-bounce">
                <FaPalette size={50} />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] urdu-text mb-4 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] tracking-wide">
              آرٹسٹ اور ڈیزائنر
            </h1>
            <h2 className="text-base md:text-xl text-white/80 urdu-text tracking-widest mb-6">
              فن، تخلیق اور ڈیزائننگ کا یادگار سفر
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
            <p className="text-base md:text-xl text-[#fff7cc] urdu-text font-light max-w-3xl mx-auto leading-relaxed italic">
              "جب اللہ کا کرم اور آئمہ طاہرینؑ کی عنایت ہو تو ایک انسان کے فن اور صلاحیتوں کی کوئی حد نہیں ہوتی۔"
            </p>
         </div>
      </section>

      {/* 🎨 بچپن کا شوق اور خانہ فرہنگ کا سفر */}
      <section className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="bg-[#111] p-8 md:p-12 rounded-[2rem] border-l-8 border-[#D4AF37] shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/80 transition-all">
            <div className="absolute -top-10 -right-10 text-gray-800 opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <FaPaintBrush size={150} />
            </div>
            <div className="relative z-10 text-right urdu-text" dir="rtl">
              <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">بچپن کے شوق سے شاہکاروں تک</h3>
              <p className="text-gray-300 leading-relaxed text-lg text-justify" dir="rtl">
                "بچپن ہی سے مجھے لکھنے، آرٹ اور ڈیزائننگ سے جنون کی حد تک لگاؤ تھا۔ اسکول کے زمانے میں بزمِ ادب کی سرگرمیاں ہوں یا اسٹیج ڈرامے، میں ہمیشہ ان کی جان ہوا کرتا تھا۔ ڈرائنگ کے مقابلوں میں ہمیشہ اول پوزیشن حاصل کرنا اور کلاس میں نمایاں رہنا میرے اس تخلیقی سفر کی پہلی سیڑھی تھی۔ نوائے وقت کے بچوں کے رسالوں تک میرے کارٹون چھپا کرتے تھے۔"
              </p>
            </div>
          </div>

          <div className="text-right urdu-text" dir="rtl">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b border-gray-800 pb-4 inline-block">خانہ فرہنگ ایران: تخلیقی میدان</h2>
             <p className="text-gray-300 leading-[2.2] text-lg text-justify mb-6" dir="rtl">
               خانہ فرہنگ ایران (لاہور) میں اپنی سفارتی اور ابلاغی خدمات کے دوران، 'شعبہ ڈیزائننگ اور آڈیو/ویڈیو' کی ذمہ داری بھی میرے پاس تھی۔ اس نے مجھے اپنے اندر چھپے آرٹسٹ کو باہر لانے کا ایک شاندار موقع فراہم کیا۔
             </p>
             <ul className="space-y-4 text-gray-400">
               <li className="flex items-center justify-end gap-3"><span className="text-white">مختلف ثقافتی و مذہبی پروگرامز کے بینرز</span> <FaCheckCircle className="text-[#D4AF37]" /></li>
               <li className="flex items-center justify-end gap-3"><span className="text-white">کتابوں اور مجلات کے دیدہ زیب ٹائٹلز (سرورق)</span> <FaBookOpen className="text-[#D4AF37]" /></li>
               <li className="flex items-center justify-end gap-3"><span className="text-white">دعوت نامے اور اسٹیج کی مکمل تھری ڈی ڈیزائننگ</span> <FaPalette className="text-[#D4AF37]" /></li>
             </ul>
          </div>

        </div>
      </section>

      {/* 🏛️ گرافک ڈیزائننگ اور تھری ڈی شاہکار */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#111] py-16 md:py-24 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] urdu-text mb-6">آرٹ، گرافک ڈیزائننگ اور 3D شاہکار</h2>
            <p className="text-gray-400 text-lg md:text-xl urdu-text max-w-4xl mx-auto font-light leading-relaxed" dir="rtl">
              آج سے 25 سال قبل، جب ڈیجیٹل فلیکس (Flex) پرنٹنگ یا کمپیوٹر گرافکس کا کوئی خاص تصور نہیں تھا، میں نے اپنی تخلیقی صلاحیتوں کی بدولت ایسے شاہکار تخلیق کیے جو آج بھی یادگار ہیں۔
            </p>
          </div>

          {/* 🟢 خراسان رضوی کتاب کا تفصیلی سیکشن جس میں اب آڈیو اور ویڈیو بھی شامل ہیں */}
          <div className="mb-16 flex flex-col lg:flex-row gap-8 bg-[#050505] border border-gray-800 hover:border-[#D4AF37]/50 rounded-[2.5rem] p-6 md:p-10 shadow-2xl transition-all duration-500 group relative overflow-hidden max-w-6xl mx-auto">
            
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

            {/* بائیں طرف: تصویر اور چاروں بٹنز */}
            <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6 relative z-10">
              <img src={khurasanBook.image} alt={khurasanBook.title} className="w-full rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-gray-800 object-cover group-hover:border-[#D4AF37]/30 transition-colors" />
              
              <div className="flex flex-col gap-3">
                {/* 🔴 کتاب پڑھیں - لائبریری میں کھولیں */}
                <div className="flex rounded-xl overflow-hidden shadow-sm">
                  <Link href={khurasanBook.libraryUrl} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition-colors">
                    <FaBook className="ml-2" /> کتاب پڑھیں (آن لائن)
                  </Link>
                  <button onClick={handleShare} className="px-4 flex items-center justify-center bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14}/></button>
                </div>

                {/* 🔴 ویڈیو تبصرہ کا بٹن */}
                <div className="flex rounded-xl overflow-hidden shadow-sm">
                  <button onClick={(e) => handlePlayVideo(e, khurasanBook.videoUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-gradient-to-r from-red-700 to-red-900 text-white border border-red-500/30 hover:scale-[1.02] transition-transform shadow-md">
                    <FaFilm className="ml-2" /> ویڈیو تبصرہ
                  </button>
                  <button onClick={handleShare} className="px-4 flex items-center justify-center bg-red-800 text-white border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14}/></button>
                </div>

                {/* 🔴 آڈیو پوڈکاسٹ کا بٹن */}
                <div className="flex rounded-xl overflow-hidden shadow-sm">
                  <button onClick={(e) => handlePlayVideo(e, khurasanBook.audioUrl)} className="flex-1 py-3 px-2 font-bold flex items-center justify-center text-xs md:text-sm urdu-text bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-[#0b314d] border border-[#D4AF37]/50 hover:scale-[1.02] transition-transform shadow-md">
                    <FaHeadphones className="ml-2" /> آڈیو پوڈکاسٹ
                  </button>
                  <button onClick={handleShare} className="px-4 flex items-center justify-center bg-[#D4AF37] text-[#0b314d] border-r border-black/20 hover:opacity-80 transition"><FaShareAlt size={14}/></button>
                </div>
              </div>
            </div>

            {/* دائیں طرف: تفصیل */}
            <div className="flex-1 text-right relative z-10" dir="rtl">
              <div className="flex flex-wrap justify-between items-center mb-6 gap-4 border-b border-gray-800 pb-4">
                <div className="flex gap-2">
                  <button onClick={() => setLangTab('ur')} className={`px-5 py-1.5 rounded-full text-sm font-bold transition ${langTab === 'ur' ? 'bg-[#D4AF37] text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10'}`}>اردو</button>
                  <button onClick={() => setLangTab('en')} className={`px-5 py-1.5 rounded-full text-sm font-bold transition ${langTab === 'en' ? 'bg-[#D4AF37] text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10'}`}>English</button>
                </div>
                <span className="bg-[#111] text-[#D4AF37] px-4 py-1.5 rounded-lg text-[10px] md:text-xs font-bold font-sans uppercase tracking-widest border border-[#D4AF37]/30">{khurasanBook.badge}</span>
              </div>

              {langTab === 'ur' ? (
                <div dir="rtl">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 urdu-text">{khurasanBook.title}</h2>
                  <p className="text-gray-300 text-base md:text-lg leading-[2.2] text-justify urdu-text font-light">{khurasanBook.descUrdu}</p>
                </div>
              ) : (
                <div className="font-sans text-left" dir="ltr">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-6">{khurasanBook.titleEn}</h2>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed text-left font-light">{khurasanBook.descEn}</p>
                </div>
              )}
            </div>

          </div>

          {/* پروجیکٹس کے شاہکار - کارڈز */}
          <div className="text-center mb-12 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] urdu-text">پروجیکٹس کے شاہکار</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed urdu-text" dir="rtl">25 سال کی تخلیقی محنت سے تیار کردہ شاہکار اور نصب تعادل جو ایران اور پاکستان کے فرہنگی اداروں، نمائشوں اور مختلف پروگراموں کے لیے بنائے گئے۔</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" dir="rtl">
            
            <div className="bg-[#050505] p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] relative overflow-hidden">
               <div className="absolute -bottom-6 -left-6 text-[#D4AF37] opacity-5 group-hover:scale-110 transition-transform duration-500"><FaPalette size={120}/></div>
               <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] text-2xl mb-6 border border-[#D4AF37]/30"><FaPalette /></div>
               <h3 className="text-2xl font-bold text-white mb-4 urdu-text text-right">فارسی مجلہ 'شاخِ نبات'</h3>
               <p className="text-gray-400 text-base leading-relaxed urdu-text text-justify" dir="rtl">
                 ایران کے مشہور ترین اور ڈیزائن سے بھرپور فارسی مجلے 'شاخِ نبات' کے تمام صفحات کی مکمل ڈیزائننگ اور لے آؤٹ کا اعزاز مجھے حاصل ہوا۔ اس مجلے میں ایرانی ثقافت، شاعری، اور فنونِ لطیفہ کی بہترین مثالیں ہوتی تھیں۔ ایرانی قوم آرٹ اور ڈیزائننگ میں انتہائی ترقی یافتہ ہے، اور ان کے اعلیٰ معیارات پر پورا اترنا میرے لیے ایک بہت بڑا اعزاز اور چیلنج تھا۔
               </p>
            </div>

            <div className="bg-[#050505] p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] relative overflow-hidden">
               <div className="absolute -bottom-6 -left-6 text-[#D4AF37] opacity-5 group-hover:scale-110 transition-transform duration-500"><FaLandmark size={120}/></div>
               <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] text-2xl mb-6 border border-[#D4AF37]/30"><FaLandmark /></div>
               <h3 className="text-2xl font-bold text-white mb-4 urdu-text text-right">الحمرا دیوار - 100 فٹ پینٹنگ</h3>
               <p className="text-gray-400 text-base leading-relaxed urdu-text text-justify" dir="rtl">
                 انقلابِ اسلامی ایران کی سالگرہ کی تقریب میں، الحمرا لاہور کی بیرونی دیوار کے لیے تقریباً 100 فٹ کی طویل ترین دیوار پر ہاتھ سے پینٹنگ کی۔ اس میں 'میدانِ آزادی' تہران کا تفصیلی منظر اور ایرانی انقلاب کی علامات موجود تھیں۔ یہ شاہکار دور دور سے شہر بھر میں نظر آتا تھا۔
               </p>
            </div>

            <div className="bg-[#050505] p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] relative overflow-hidden">
               <div className="absolute -bottom-6 -left-6 text-[#D4AF37] opacity-5 group-hover:scale-110 transition-transform duration-500"><FaMosque size={120}/></div>
               <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] text-2xl mb-6 border border-[#D4AF37]/30"><FaMosque /></div>
               <h3 className="text-2xl font-bold text-white mb-4 urdu-text text-right">مسجدِ نبوی اور روضہ امام علی - تھرموپور شاہکار</h3>
               <p className="text-gray-400 text-base leading-relaxed urdu-text text-justify" dir="rtl">
                 ایک بہت بڑی ثقافتی و مذہبی تقریب کے لیے تھرموپور (Thermofoam) سے مسجدِ نبوی ﷺ کا ایک شاندار اور تفصیلی قدِ آدم ماڈل تیار کیا۔ ساتھ ہی، روضہ امام علی علیہ السلام کا ایک بہت ہی خوبصورت اور معماری لحاظ سے درست ماڈل بھی تیار کیا۔ ان ماڈلز میں لائٹنگ اور تفصیلات انتہائی شاندار تھیں۔
               </p>
            </div>

            <div onClick={() => openImageByTitle('نوارِ رستم')} role="button" tabIndex={0} className="bg-[#050505] p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] relative overflow-hidden cursor-pointer">
               <div className="absolute -bottom-6 -left-6 text-[#D4AF37] opacity-5 group-hover:scale-110 transition-transform duration-500"><FaFilm size={120}/></div>
               <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] text-2xl mb-6 border border-[#D4AF37]/30"><FaFilm /></div>
               <h3 className="text-2xl font-bold text-white mb-4 urdu-text text-right">نوارِ رستم - دیوہیکل مکینیکل VHS کیسٹ</h3>
               <p className="text-gray-400 text-base leading-relaxed urdu-text text-justify" dir="rtl">
                 میں نے ایک عظیم الشان دیوہیکل VHS کیسٹ کا ماڈل تیار کیا جو حقیقی کیسٹ کے مقابلے میں زیادہ بڑا تھا۔ اس میں ریل اندر سے باقاعدہ گھومتی تھی اور اردگرد لگی خصوصی لائٹس کی مدد سے فلم چلتی ہوئی دکھائی دیتی تھی۔ ایرانی حکام نے اسے 'نوارِ رستم' کا نام دیا۔
               </p>
            </div>

            <div className="bg-[#050505] p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] relative overflow-hidden">
               <div className="absolute -bottom-6 -left-6 text-[#D4AF37] opacity-5 group-hover:scale-110 transition-transform duration-500"><FaTree size={120}/></div>
               <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] text-2xl mb-6 border border-[#D4AF37]/30"><FaTree /></div>
               <h3 className="text-2xl font-bold text-white mb-4 urdu-text text-right">شجرِ اہلِ بیت ؑ - نورانی روحانی درخت</h3>
               <p className="text-gray-400 text-base leading-relaxed urdu-text text-justify" dir="rtl">
                 میں نے ایک منفرد اور روحانی نوعیت کا درخت ڈیزائن کیا جو شجرِ اہلِ بیت علیہم السلام کی نمائندگی کرتا تھا۔ اس درخت کے پتوں پر حضرت محمد ﷺ اور آئمہ اہلِ بیتؑ کے نام اور القابات خوبصورتی سے کندہ تھے۔ درخت میں خصوصی لائٹنگ سسٹم نصب تھا جو تقریب کے دوران ایک ایک پتا روشن ہو جاتا تھا۔
               </p>
            </div>

            <div className="bg-[#050505] p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] relative overflow-hidden">
               <div className="absolute -bottom-6 -left-6 text-[#D4AF37] opacity-5 group-hover:scale-110 transition-transform duration-500"><FaStar size={120}/></div>
               <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] text-2xl mb-6 border border-[#D4AF37]/30"><FaStar /></div>
               <h3 className="text-2xl font-bold text-white mb-4 urdu-text text-right">عمدہ صنعتگری</h3>
               <p className="text-gray-400 text-base leading-relaxed urdu-text text-justify" dir="rtl">
                 ہر پروجیکٹ روایتی فن کی تکنیکوں اور جدید میڈیا ٹیکنولوجی کا امتزاج ہے۔ نتیجہ وہ نصب تعادلیں اور اشاعتیں ہیں جو معنویت، تعلیم اور ہماری ثقافتی و روحانی میراث کی عزت کے ساتھ بولتی ہیں۔
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🖼️ تصویری گیلری کا سیکشن */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center mb-12">
           <div className="inline-block bg-[#D4AF37] text-black px-6 py-2 rounded-full font-bold urdu-text text-sm mb-4">26 سال قبل کے شاہکار</div>
           <h2 className="text-2xl md:text-4xl font-bold text-white urdu-text mb-4">تاریخی تصویری گیلری</h2>
           <p className="text-gray-400 text-base md:text-lg urdu-text max-w-3xl mx-auto" dir="rtl">
             جب کمپیوٹر اور اے آئی کا دور نہیں تھا، یہ ان دنوں کی دستی محنت اور تخلیق کی جیتی جاگتی تصاویر ہیں۔ یہ تمام شاہکار تھرموپور، آئل پینٹنگز اور مکینیکل آرٹ کا بہترین نمونہ ہیں۔
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((img, index) => (
            <div 
              key={img.id} 
              className="relative group rounded-xl overflow-hidden border border-gray-800 hover:border-[#D4AF37] shadow-lg cursor-pointer bg-black aspect-square"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-4">
                <FaSearchPlus className="text-[#D4AF37] mb-2 opacity-90" size={24} />
                <p className="text-[#fff7cc] urdu-text text-center text-xs md:text-sm font-semibold drop-shadow-md">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎦 لائٹ باکس (تصویر بڑی کرنے والا پاپ اپ) */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 md:p-10 backdrop-blur-sm" 
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-all z-[110]" 
            onClick={() => setSelectedImageIndex(null)}
          >
            <FaTimes size={24} />
          </button>

          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            
            <button 
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#111]/80 hover:bg-[#D4AF37] text-white hover:text-black p-3 rounded-full shadow-lg transition-all z-[110]"
              onClick={prevImage}
            >
              <FaChevronLeft size={24} />
            </button>

            <button 
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#111]/80 hover:bg-[#D4AF37] text-white hover:text-black p-3 rounded-full shadow-lg transition-all z-[110]"
              onClick={nextImage}
            >
              <FaChevronRight size={24} />
            </button>

            <img 
              src={galleryImages[selectedImageIndex].src} 
              alt={galleryImages[selectedImageIndex].title} 
              className="max-h-[80vh] w-auto object-contain border-[4px] border-[#D4AF37] rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            />
            
            <div className="mt-4 bg-[#111] border border-[#D4AF37]/50 px-6 py-3 rounded-full shadow-lg">
               <p className="text-[#D4AF37] urdu-text text-lg md:text-xl font-bold text-center">
                 {galleryImages[selectedImageIndex].title}
               </p>
            </div>
            
            <p className="text-gray-400 urdu-text text-sm mt-2">
              تصویر {selectedImageIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}

      {/* 📚 🔴 ویڈیو / آڈیو کا پاپ اپ 🔴 */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={() => setVideoModalOpen(false)}>
           <div className="w-full max-w-4xl relative flex flex-col items-center animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
              <button className="absolute -top-12 right-0 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold transition-all shadow-md border border-white z-50 urdu-text" onClick={() => setVideoModalOpen(false)}>
                <FaTimes /> بند کریں
              </button>
              <video src={videoUrl} controls autoPlay className="w-full rounded-2xl border-4 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.4)] bg-black" />
           </div>
        </div>
      )}

      <Footer />
    </main>
  );
}