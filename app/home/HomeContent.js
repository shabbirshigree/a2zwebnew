"use client";
import { useState, useEffect, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams, useRouter } from 'next/navigation';
import { useLocale } from "../components/LocaleProvider";
import { getDictionary, getLocalizedPath } from "../lib/i18n";
import {
  FaHeart, FaMicrophone, FaAward, FaQuran, FaLandmark,
  FaPenNib, FaMedal, FaQuoteRight, FaHistory, FaChild,
  FaStar, FaArrowRight, FaArrowLeft, FaBookOpen, FaPlay, FaTimes,
  FaGlobe, FaTv, FaHandshake, FaTrophy, FaVideo, FaNewspaper,
  FaBriefcase, FaUser, FaHeadphones, FaBook,
  FaBullhorn, FaQuoteLeft, FaInfoCircle, FaChevronLeft, FaChevronRight,
  FaPlayCircle, FaShareAlt, FaRegHeart, FaEye, FaWhatsapp, FaFacebookF,
  FaTelegramPlane, FaEnvelope
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// باقی ڈیٹا امپورٹ ویسے ہی رہے گا جیسے آپ نے بھیجا ہے
import {
  welcomeData,
  welcomeDataEn,
  welcomeDataFa,
  honorsData,
  honorsDataEn,
  honorsDataFa,
  navCardsData,
  navCardsDataEn,
  navCardsDataFa,
  projectSectionData,
  booksData,
  booksTitlesEn,
  booksTitlesFa,
  legendsData,
  legendsDataEn,
  legendsDataFa,
  journeyData,
  journeyDataEn,
  journeyDataFa
} from "./homeData";
import { farsiData } from "../article/farsi-data";
import { Navbar, HeroSlider } from "../components/Header";
import Footer from "../components/Footer";
import MobileProfileCard from "../components/MobileProfileCard";
import EnglishProfileCard from "../components/EnglishProfileCard";
import FarsiProfileCard from "../components/FarsiProfileCard";
import CldImage from "../components/CldImage";

/** فارسی / انگریزی / اردو کے لیے مرکزی متن کلاس */
function bodyFont(locale) {
  if (locale === "en") return "font-hero-en";
  if (locale === "fa") return "font-persian";
  return "urdu-text";
}

const getYouTubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// 🎨 گلوبل اسٹائلز (Moved to globals.css for performance)
const globalStyles = "";

export function HomeContent() {
  const { locale } = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();

  const { bismillah, welcome, honors, navCards, legends, books, journey, labels } =
    useMemo(() => {
      const dict = getDictionary(locale);
      if (locale === "ur") {
        return {
          bismillah: welcomeData.bismillah,
          welcome: {
            greeting: welcomeData.greeting,
            description: welcomeData.description,
            name: welcomeData.name,
            honorsHint: dict.home.honorsHint,
          },
          honors: honorsData.map(h => ({ ...h, link: getLocalizedPath(h.link, locale) })),
          navCards: navCardsData.map(c => ({ ...c, link: c.link.startsWith('http') ? c.link : getLocalizedPath(c.link, locale) })),
          legends: legendsData,
          books: booksData.map(b => ({ ...b, link: getLocalizedPath(b.link, locale) })),
          journey: journeyData.map(j => ({ ...j, link: getLocalizedPath(j.link, locale) })),
          labels: {
            projBadge: "WORLD'S FIRST VISUAL QURAN",
            projTitle: "نور القرآن پراجیکٹ: دنیا کا پہلا ویژول قرآن",
            projDesc: "یہ حاجی شبیر احمد شگری کا ایک جدید اور منفرد منصوبہ ہے۔ اس پروجیکٹ کا بنیادی مقصد جدید ٹیکنالوجی اور مصنوعی ذہانت (AI) کے ذریعے قرآن مجید کے ترجمے اور مفاہیم کو بصری اور فلمی انداز میں پیش کرنا ہے۔",
            btnRead: "تفصیل پڑھیں",
            btnVideo: "ویڈیو پوڈکاسٹ",
            btnAudio: "آڈیو پوڈکاسٹ",
            legendsHead: "نامور شخصیات کا میرے بارے اظہار خیال",
            booksHead: "حاجی شبیر احمد شگری کی تصانیف",
            booksHint: "تفصیلات کے لیے کلک کریں",
            journeyHead: "خدمت کے 45 سال",
            journeyView: "تفصیل دیکھیں",
            btnBack: "واپس جائیں",
            btnClose: "بند کریں"
          }
        };
      }

      const isEn = locale === "en";
      const currentWelcome = isEn ? welcomeDataEn : welcomeDataFa;
      const bookTitles = isEn ? booksTitlesEn : booksTitlesFa;

      return {
        bismillah: welcomeData.bismillah,
        welcome: {
          greeting: currentWelcome.greeting,
          description: currentWelcome.description,
          name: currentWelcome.name,
          honorsHint: dict.home.honorsHint,
        },
        honors: (isEn ? honorsDataEn : honorsDataFa).map(h => ({ ...h, link: getLocalizedPath(h.link, locale) })),
        navCards: (isEn ? navCardsDataEn : navCardsDataFa).map(c => ({ ...c, link: c.link.startsWith('http') ? c.link : getLocalizedPath(c.link, locale) })),
        legends: isEn ? legendsDataEn : legendsDataFa,
        books: booksData.map((b, i) => ({
          ...b,
          title: bookTitles[i] ?? b.title,
          link: getLocalizedPath(b.link, locale)
        })),
        journey: (isEn ? journeyDataEn : journeyDataFa).map(j => ({ ...j, link: getLocalizedPath(j.link, locale) })),
        labels: isEn ? {
          projBadge: "WORLD'S FIRST VISUAL QURAN",
          projTitle: "Noor-ul-Quran Project: World's First Visual Quran",
          projDesc: "This is a state-of-the-art and unique initiative by Haji Shabbir Ahmed Shigri. The primary objective is to leverage modern technology and Artificial Intelligence (AI) to present the translations and concepts of the Holy Quran through immersive visual and cinematic narratives.",
          btnRead: "Read More",
          btnVideo: "Video Podcast",
          btnAudio: "Audio Podcast",
          legendsHead: "Reflections from Distinguished Personalities",
          booksHead: "Publications of Haji Shabbir Ahmed Shigri",
          booksHint: "Click for details",
          journeyHead: "45 Years of Dedicated Service",
          journeyView: "View Details",
          btnBack: "Go Back",
          btnClose: "Close"
        } : {
          projBadge: "اولین قرآن تصویری جهان",
          projTitle: "پروژه نورالقرآن: اولین قرآن تصویری جهان",
          projDesc: "این یک طرح مدرن و منحصر به فرد از حاجی شبیر احمد شگری است. هدف اصلی این پروژه استفاده از فناوری‌های روز و هوش مصنوعی (AI) برای ارائه مفاهیم قرآن کریم در قالب‌های تصویری و سینمایی است.",
          btnRead: "جزئیات بیشتر",
          btnVideo: "پادکست ویدئویی",
          btnAudio: "پادکست صوتی",
          legendsHead: "اظهار نظر شخصیت‌های برجسته در مورد من",
          booksHead: "تالیفات حاجی شبیر احمد شگری",
          booksHint: "برای جزئیات کلیک کنید",
          journeyHead: "۴۵ سال خدمت مخلصانه",
          journeyView: "مشاهده جزئیات",
          btnBack: "بازگشت",
          btnClose: "بستن"
        }
      };
    }, [locale]);

  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedHomeVideo, setSelectedHomeVideo] = useState(null);
  const [showHomeBooklet, setShowHomeBooklet] = useState(false);

  // ✅ ڈیپ لنکنگ اور آٹو اوپن فنکشنلٹی
  useEffect(() => {
    const videoUrl = searchParams.get('v');
    const type = searchParams.get('type');
    const bookTitle = searchParams.get('book');

    if (videoUrl) {
      // چیک کریں کہ آیا یہ نامور شخصیات کی ویڈیو ہے
      const foundLegend = legends.find(l => l.video.includes(videoUrl) || videoUrl.includes(l.name));
      if (foundLegend) {
        setActiveVideo(foundLegend.video);
      } else if (videoUrl === 'pod-video') {
        setSelectedHomeVideo('video');
      } else if (videoUrl === 'pod-audio') {
        setSelectedHomeVideo('audio');
      }
    } else if (bookTitle) {
      // اسکرول ٹو بکس سیکشن
      const el = document.getElementById('books-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'noor-ul-quran') {
      // اسکرول ٹو پروجیکٹ سیکشن
      const el = document.getElementById('noor-ul-quran-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams, legends]);

  const handleShareItem = (item, type = 'video') => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
    let shareUrl = baseUrl;
    
    if (type === 'video') {
      const videoId = item.video.split('/').pop().split('.')[0];
      shareUrl += `?v=${videoId}`;
    } else if (type === 'book') {
      shareUrl += `?book=${encodeURIComponent(item.title)}`;
    } else if (type === 'pod-video') {
      shareUrl += `?v=pod-video`;
    } else if (type === 'pod-audio') {
      shareUrl += `?v=pod-audio`;
    }

    let text = "";
    if (type === 'video') {
      text = `*نامور شخصیت:* ${item.name}\n*عہدہ:* ${item.role}\n\n*حاجی شبیر احمد شگری کے بارے میں اظہارِ خیال:*\n"${item.quote || 'ویڈیو دیکھیں'}"\n\nویب سائٹ پر ویڈیو دیکھنے کے لیے لنک پر کلک کریں:`;
    } else if (type === 'book') {
      text = `حاجی شبیر احمد شگری کی تصنیف *"${item.title}"* کے بارے میں جانئے:`;
    } else {
      text = `نورالقرآن پراجیکٹ کے بارے میں جانئے:`;
    }

    if (navigator.share) {
      navigator.share({ title: "حاجی شبیر احمد شگری", text, url: shareUrl }).catch(() => { });
    } else {
      const encodedUrl = encodeURIComponent(shareUrl);
      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`, "_blank");
    }
  };

  const mainDir = locale === "en" ? "ltr" : "rtl";

  const welcomePaddingClass = " py-6 md:py-8";

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('custom-animations')) {
      const style = document.createElement('style');
      style.id = 'custom-animations';
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, []); // 👈 یہاں یہ ختم ہو رہا ہے

  // اس کے بعد باقی کوڈ...

  const repeatCount = 8;
  const infiniteLegends = Array(repeatCount).fill(legends || []).flat();
  const infiniteBooks = Array(repeatCount).fill(books || []).flat();

  const welcomeTextClass =
    locale === "fa"
      ? "font-persian text-[#0b314d] text-sm md:text-base font-normal leading-relaxed"
      : locale === "en"
        ? "font-hero-en text-[#0b314d] text-sm md:text-lg font-normal leading-relaxed"
        : "urdu-text text-[#0b314d] text-sm md:text-lg font-semibold leading-loose";

  const nameClass =
    locale === "fa"
      ? "font-persian text-[#0f4c75] text-lg md:text-xl border-b-2 border-[#D4AF37] pb-0.5 px-4 md:px-5 font-semibold inline-block leading-snug"
      : locale === "en"
        ? "font-hero-en text-[#0f4c75] text-lg md:text-xl border-b-2 border-[#D4AF37] pb-0.5 px-4 md:px-5 font-semibold inline-block"
        : "urdu-text text-[#0f4c75] text-lg md:text-xl border-b-2 border-[#D4AF37] pb-0.5 px-5 md:px-6 font-semibold hover:text-[#D4AF37] transition-colors cursor-default inline-block leading-snug";

  const honorTitleClass =
    locale === "fa"
      ? "font-persian font-semibold"
      : locale === "en"
        ? "font-hero-en font-semibold"
        : "urdu-text font-semibold";

  return (
    <>
      <main
        dir={mainDir}
        className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden iranian-bg"
      >
        <Navbar />

        <div className="block w-full p-0 m-0 border-none outline-none overflow-hidden relative">
          <HeroSlider />
        </div>

        <div className={`container mx-auto px-3 md:px-4 relative z-10 animate-fade-in-up ${welcomePaddingClass}`}>
          <div className="glass-card rounded-[3rem] shadow-[0_30px_60px_rgba(212,175,55,0.15)] border-2 border-[#D4AF37]/30 p-8 md:p-16 text-center max-w-6xl mx-auto relative overflow-hidden group">
            
            {/* 🎨 آرائشی پیٹرن (Decorative Pattern) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern"></div>
            
            <div className="space-y-6 md:space-y-8 relative z-10">
              <h2 className="font-kufi text-[#0f4c75] text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-80 leading-tight max-w-[min(100%,25rem)] mx-auto border-b border-[#D4AF37]/20 pb-4">
                {bismillah}
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <span className="text-[#D4AF37] welcome-heading drop-shadow-sm">
                  {welcome.greeting}
                </span>
                <p className={`${welcomeTextClass} welcome-text mt-2 text-[#0b314d]/90`}>
                  {welcome.description}
                </p>
              </div>

              <div className="text-center pt-2">
                <span className={`${nameClass} text-2xl md:text-3xl py-2 px-8 rounded-full bg-white/50 backdrop-blur-sm shadow-inner`}>
                  {welcome.name}
                </span>
              </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-8 w-full border-t border-[#D4AF37]/10 pt-10">
                {honors?.map((btn, i) => (
                  <div key={i} className="w-full md:w-auto flex justify-center">
                    <Link
                      href={btn.link}
                      aria-label={`صفحہ دیکھیں: ${btn.title}`}
                      className="group relative inline-flex items-center gap-4 gold-gradient text-[#4a0000] rounded-2xl shadow-xl hover:scale-105 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all duration-500 w-full max-w-[340px] md:w-[320px] px-4 py-2.5 border border-white/50 overflow-hidden"
                    >
                      {/* ✨ شائن ایفیکٹ */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine-effect z-0 pointer-events-none"></div>
                      
                    <div className="relative h-14 w-14 rounded-xl border-2 border-white shadow-lg overflow-hidden flex-shrink-0 z-10 bg-white p-0.5">
                        <CldImage 
                          src={btn.gif} 
                          alt={`اعزاز: ${btn.title}`} 
                          width={56} 
                          height={56} 
                          className="w-full h-full object-cover rounded-lg" 
                          unoptimized={true} 
                        />
                      </div>
                      <div className="flex-1 text-center flex flex-col justify-center gap-0.5 min-h-0 py-0.5 relative z-10">
                        <span className={`block leading-tight text-lg md:text-xl font-bold drop-shadow-sm ${honorTitleClass}`}>
                          {btn.title}
                        </span>
                        <span className="block text-[10px] md:text-xs text-[#4a0000]/70 font-bold uppercase tracking-wider">
                          {welcome.honorsHint}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

{/* 🌟 4 اہم پروجیکٹس / نیویگیشن کارڈز کا سیکشن (پریمیم ڈیزائن) */}
        <section className="w-full px-3 md:px-4 py-10 md:py-12 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {navCards?.map((card, i) => (
              <Link 
                key={i} 
                href={card.link || '#'} 
                aria-label={`سیکشن دیکھیں: ${card.title}`}
                className="group relative bg-white rounded-[1.65rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-7 md:p-9 border-2 border-[#D4AF37]/20 text-center flex flex-col items-center justify-center min-h-0 shadow-lg sm:shadow-xl hover:shadow-[0_30px_60px_rgba(15,76,117,0.1)] hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-500 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* ✨ بیک گراؤنڈ ایفیکٹ */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fcf8e8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#D4AF37]/5 rounded-full group-hover:scale-[3] transition-transform duration-1000"></div>

                {/* آئیکن: موبائل پر کارڈ کے ساتھ بہتر تناسب */}
                <div className="w-[4.85rem] h-[4.85rem] sm:w-[5.25rem] sm:h-[5.25rem] md:w-24 md:h-24 min-w-[4.85rem] min-h-[4.85rem] sm:min-w-[5.25rem] sm:min-h-[5.25rem] bg-white shadow-[0_12px_28px_rgba(212,175,55,0.22)] rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-5 md:mb-7 group-hover:bg-[#0f4c75] transition-all duration-700 relative z-10 border border-[#D4AF37]/15">
                  <span className="text-[#D4AF37] group-hover:text-white transition-all duration-500 flex items-center justify-center [&>svg]:w-[2.35rem] [&>svg]:h-[2.35rem] sm:[&>svg]:w-[2.55rem] sm:[&>svg]:h-[2.55rem] md:[&>svg]:w-14 md:[&>svg]:h-14 group-hover:scale-105">
                    {card.icon}
                  </span>
                </div>

                {/* ٹائٹل */}
                <h3 className={`font-extrabold text-[#0f4c75] text-lg sm:text-xl md:text-2xl ${bodyFont(locale)} group-hover:text-[#D4AF37] transition-colors duration-300 relative z-10 leading-snug px-0.5`}>
                  {card.title}
                </h3>
                
                {/* 🔽 انڈیکیٹر */}
                <div className="mt-6 w-12 h-1.5 bg-[#D4AF37]/20 rounded-full overflow-hidden relative z-10">
                  <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 🚀 نور القرآن پراجیکٹ سیکشن (عالمی معیار کا ڈیزائن) */}
        <section id="noor-ul-quran-section" className="container mx-auto px-3 md:px-4 py-16 relative z-10">
          <div className="max-w-6xl mx-auto rounded-[3.5rem] p-8 md:p-16 shadow-[0_12px_48px_rgba(15,76,117,0.12)] relative overflow-hidden group border-2 border-[#b8860b]/50 bg-gradient-to-br from-[#fdf6e3] via-[#e8d5a0] to-[#c9a227]">
            
            {/* ہلکے hilights */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/25 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0f4c75]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center relative z-10">

              {/* 🖼️ ویژول امیج */}
              <div className="lg:w-2/5 relative animate-fade-in-up">
                <div className="absolute -top-6 -right-6 gold-gradient text-[#0b314d] text-xs font-black px-6 py-2 rounded-full z-20 shadow-2xl tracking-widest uppercase">
                  {labels.projBadge}
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-[#0f4c75]/25 shadow-[0_20px_50px_rgba(11,49,77,0.2)] group-hover:border-[#0f4c75]/45 transition-all duration-700">
                  <CldImage
                    src="https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png"
                    alt="نور القرآن پراجیکٹ کا کور امیج - حاجی شبیر احمد شگری"
                    width={800}
                    height={450}
                    className="w-full h-auto transition-transform group-hover:scale-105 duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b314d]/50 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>

                {/* مواد اور بٹنز — سنہری پس‌منظر پر گہرا متن */}
                <div className={`lg:w-3/5 ${locale === 'en' ? 'text-left' : 'text-right'}`} dir={mainDir}>
                  <h1 className={`text-3xl md:text-5xl font-black text-[#0b314d] mb-8 ${bodyFont(locale)} leading-tight tracking-tight text-center lg:text-inherit drop-shadow-sm`}>
                    {labels.projTitle}
                  </h1>
                  <p className={`text-[#2a2310] text-base md:text-lg leading-relaxed ${bodyFont(locale)} mb-10 font-normal ${locale === 'fa' ? 'text-justify' : ''} text-center lg:text-inherit`}>
                    {labels.projDesc}
                  </p>

                  <div className="flex flex-wrap gap-4 md:gap-5 justify-center lg:justify-start">
                    <Link
                      href={getLocalizedPath(projectSectionData?.bookletUrl || "/library#Quran", locale)}
                      className="px-7 md:px-9 py-3 md:py-3.5 rounded-2xl font-bold bg-[#0f4c75] text-white border-2 border-[#0a3a5c] shadow-md hover:scale-[1.03] hover:shadow-lg hover:bg-[#134b7a] transition-all flex items-center gap-3 text-sm md:text-base"
                    >
                      <FaBookOpen className="text-lg text-[#fde68a]" /> {labels.btnRead}
                    </Link>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedHomeVideo('https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_qfyz0i.mp4')}
                        className="px-6 md:px-8 py-3 md:py-3.5 rounded-2xl font-bold bg-[#9f1239] text-white border-2 border-[#7f0d2d] shadow-md hover:scale-[1.03] hover:shadow-lg hover:bg-[#be123c] transition-all flex items-center gap-3 text-sm md:text-base"
                      >
                        <FaPlay className="text-lg text-white" /> {labels.btnVideo}
                      </button>
                      <button 
                        onClick={() => handleShareItem({}, 'pod-video')} 
                        aria-label="Share Video"
                        className="bg-white text-[#9f1239] p-3 rounded-2xl border-2 border-[#9f1239] hover:bg-[#9f1239] hover:text-white transition-all shadow-md"
                      >
                        <FaShareAlt />
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedHomeVideo('https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_wdodfp.mp4')}
                        className="px-6 md:px-8 py-3 md:py-3.5 rounded-2xl font-bold bg-[#047857] text-white border-2 border-[#065f46] shadow-md hover:scale-[1.03] hover:shadow-lg hover:bg-[#059669] transition-all flex items-center gap-3 text-sm md:text-base"
                      >
                        <FaHeadphones className="text-lg text-[#d1fae5]" /> {labels.btnAudio}
                      </button>
                      <button 
                        onClick={() => handleShareItem({}, 'pod-audio')} 
                        aria-label="Share Audio"
                        className="bg-white text-[#047857] p-3 rounded-2xl border-2 border-[#047857] hover:bg-[#047857] hover:text-white transition-all shadow-md"
                      >
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </section>


        {/* 🎥 شخصیات گیلری (نامور شخصیات کے خیالات) */}
        <section className="bg-[#0a0a0a] py-12 md:py-20 relative overflow-hidden border-y-4 border-[#D4AF37]">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className={`text-2xl md:text-5xl font-bold text-[#D4AF37] text-center ${bodyFont(locale)} mb-12 border-b-2 border-[#D4AF37]/30 pb-4 inline-block mx-auto leading-snug px-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]`}>
              {labels.legendsHead}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
              {legends?.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer border-2 border-[#D4AF37]/40 bg-black shadow-2xl transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-2 mb-3"
                    onClick={() => setActiveVideo(item.video)}
                    role="button"
                    aria-label={`${item.name} کی ویڈیو چلائیں`}
                  >
                    <CldImage 
                      src={item.img} 
                      alt={`${item.name} کا حاجی شبیر احمد شگری کے بارے میں اظہار خیال`} 
                      width={400}
                      height={225}
                      className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 flex items-end justify-between p-3 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {/* پلے بٹن (Dim by default) */}
                      <div className="bg-[#D4AF37] w-9 h-9 rounded-full border-2 border-white shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 pointer-events-auto" onClick={() => setActiveVideo(item.video)}>
                        <FaPlay size={12} className="text-black ml-0.5" />
                      </div>
                      {/* شیئر بٹن (Dim by default) */}
                      <div className="bg-white w-9 h-9 rounded-full border-2 border-[#D4AF37] shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer" 
                        aria-label="Share"
                        onClick={(e) => { e.stopPropagation(); handleShareItem(item, 'video'); }}>
                        <FaShareAlt size={12} className="text-[#0f4c75]" />
                      </div>
                    </div>

                    {/* ڈیفالٹ میں ہلکے نظر آنے والے بٹنز (Dimmed state) */}
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between pointer-events-none group-hover:opacity-0 transition-opacity">
                      <div className="w-7 h-7 rounded-full bg-[#D4AF37]/30 border border-white/30 flex items-center justify-center">
                        <FaPlay size={8} className="text-black/50" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/30 border border-[#D4AF37]/30 flex items-center justify-center">
                        <FaShareAlt size={8} className="text-[#0f4c75]/50" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center px-2">
                    <div className={`text-[#D4AF37] text-sm md:text-base ${bodyFont(locale)} font-bold leading-tight drop-shadow-md group-hover:text-white transition-colors duration-300`}>
                      {item.name}
                    </div>
                    <div className={`text-gray-400 text-[10px] md:text-xs mt-1 ${bodyFont(locale)} font-medium leading-relaxed`}>
                      {item.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 📚 تصانیف سلائیڈر */}
        <section id="books-section" className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-10">
            <h2 className={`text-2xl md:text-5xl font-bold text-[#0f4c75] text-center ${bodyFont(locale)} mb-4 border-b-2 border-[#D4AF37]/30 pb-4 inline-block mx-auto leading-snug px-4`}>{labels.booksHead}</h2>
          </div>
          <div className="bg-white p-8 rounded-[3rem] shadow-2xl border-2 border-[#D4AF37]/20 overflow-hidden" dir="ltr">
            <div className="flex gap-8 w-max animate-scroll-right pause-on-hover px-4">
              {infiniteBooks?.map((item, i) => (
                <div key={i} className="card-lift relative group/book">
                  <Link href={item.link || "#"} className="block min-w-[140px] md:min-w-[180px] h-[220px] md:h-[260px] relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/50 bg-white shadow-lg group hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all cursor-pointer">
                    <CldImage 
                      src={item.img} 
                      alt={`کتاب کا ٹائٹل: ${item.title} - حاجی شبیر احمد شگری`} 
                      width={180} 
                      height={260} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 w-full p-4 text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <div className={`text-xs md:text-sm text-[#D4AF37] ${bodyFont(locale)} font-semibold drop-shadow-md leading-snug`}>{item.title}</div>
                      <div className="text-[10px] md:text-xs text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{labels.booksHint}</div>
                    </div>
                  </Link>
                  {/* Share button for book */}
                  <button 
                    onClick={(e) => { e.preventDefault(); handleShareItem(item, 'book'); }}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-[#0f4c75] opacity-0 group-hover/book:opacity-100 transition-opacity shadow-md hover:scale-110 z-20"
                  >
                    <FaShareAlt size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⏳ خدمت کے 45 سال (مکمل RTL ترتیب کے ساتھ) */}
        <section
          className="bg-gradient-to-b from-[#fdfbfb] to-[#f3f4f6] py-16 border-t-2 border-[#D4AF37]/20 relative z-10"
          dir={mainDir}
        >
          <div className="container mx-auto px-4 max-w-7xl">

          <div className="text-center mb-12 relative">
            <h2
              className={`text-2xl md:text-3xl font-bold text-[#0f4c75] ${bodyFont(locale)} mb-3 leading-snug px-2`}
            >
                <span
                  className="inline-block"
                  dir={locale === "en" ? "ltr" : "rtl"}
                >
                  {labels.journeyHead}
                </span>
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full shadow-md"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
              {journey?.map((item, i) => (
                <Link key={i} href={item.link || '#'} aria-label={`خدمت کی تفصیل: ${item.title}`} className="flex group relative">

                  <div className={`relative bg-white rounded-2xl p-4 md:p-5 border-2 border-[#D4AF37]/30 shadow-sm transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(212,175,55,0.25)] w-full h-full flex flex-col items-start group-hover:bg-[#0f4c75] group-hover:border-[#D4AF37] cursor-pointer`} dir={locale === 'ur' ? mainDir : locale === 'en' ? 'ltr' : 'rtl'}>

                    {/* آئیکن + عنوان: EN بائیں→دائیں، اردو/فارسی دائیں→بائیں */}
                    <div
                      className={`flex w-full items-center gap-2 mb-3 ${locale === "en" ? "flex-row" : "flex-row"
                        }`}
                    >
                      <div className="relative flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#0f4c75] to-[#1e6091] text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-700 ease-in-out group-hover:from-[#D4AF37] group-hover:to-[#B38728] group-hover:text-[#0f4c75] group-hover:rotate-[360deg] group-hover:scale-110">
                        {item.icon}
                      </div>

                      <h3 className={`font-bold text-[#0f4c75] text-sm md:text-base ${bodyFont(locale)} w-full group-hover:text-white transition-colors duration-300 leading-snug break-words ${locale === "en" ? "text-left" : "text-right"}`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* تفصیل (Description) */}
                    <p className={`text-gray-600 group-hover:text-gray-200 text-xs leading-snug font-normal transition-colors duration-300 flex-grow w-full ${bodyFont(locale)} ${locale === "en" ? "text-left" : "text-right"} whitespace-normal`}>
                      {item.desc}
                    </p>

                    {/* نچلی پٹی */}
                    <div className="mt-3 pt-2 border-t border-gray-100 w-full group-hover:border-white/20 transition-colors">
                      <div className={`flex items-center justify-between w-full ${locale === 'en' ? 'flex-row' : 'flex-row'}`}>
                        <span className={`text-xs text-[#0f4c75] group-hover:text-white font-semibold ${bodyFont(locale)} ${locale === "en" ? "text-left" : "text-right"}`}>{labels.journeyView}</span>
                        {locale === 'en' ? <FaArrowRight className="text-[#D4AF37] group-hover:text-white text-xs -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" /> : <FaArrowLeft className="text-[#D4AF37] group-hover:text-white text-xs translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />}
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        
        <Footer />
      </main>

      {/* 🎬 ویڈیو ماڈل */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md z-[99999]">
          <div className="w-full max-w-3xl flex flex-col items-center">
            <button onClick={() => setActiveVideo(null)} className="mb-4 flex items-center justify-center gap-2 bg-[#D4AF37] text-black px-5 py-2 rounded-full font-bold">
              {locale === 'en' ? <FaArrowRight className="rotate-180" /> : <FaArrowLeft size={14} />} {labels.btnBack}
            </button>
            <div className="responsive-video-container w-full">
              {activeVideo.includes('youtu') ? (
                <iframe 
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`} 
                  frameBorder="0" 
                  allowFullScreen
                  loading="lazy"
                  title="YouTube Video Player"
                ></iframe>
              ) : (
                <video src={activeVideo} controls autoPlay className="w-full h-full object-contain max-h-[60vh]"></video>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 🟢 پاپ اپس (ویڈیو اور بکلیٹ) */}
      {selectedHomeVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedHomeVideo(null)}>
          <div className="relative w-full max-w-3xl" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 text-white px-4 py-2 rounded-full font-bold" onClick={() => setSelectedHomeVideo(null)}>
              <FaTimes /> {labels.btnClose}
            </button>
            <video src={selectedHomeVideo} controls autoPlay className="w-full rounded-2xl border-4 border-[#D4AF37] max-h-[60vh]" />
          </div>
        </div>
      )}

      {showHomeBooklet && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowHomeBooklet(null)}>
          <div className="relative w-full max-w-4xl h-[70vh]" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 text-white px-4 py-2 rounded-full font-bold" onClick={() => setShowHomeBooklet(null)}>
              <FaTimes /> {labels.btnClose}
            </button>
            <iframe 
              src="https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/noorulquran-proj-without.exp.pdf" 
              className="w-full h-full bg-white rounded-2xl border-4 border-[#D4AF37]"
              loading="lazy"
              title="Noor-ul-Quran Booklet PDF"
            ></iframe>
          </div>
        </div>
      )}

    </>
  );
}