"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useLocale } from "../components/LocaleProvider";
import { getDictionary } from "../lib/i18n";
import {
  FaHeart, FaMicrophone, FaAward, FaQuran, FaLandmark,
  FaPenNib, FaMedal, FaQuoteRight, FaHistory, FaChild,
  FaStar, FaArrowRight, FaArrowLeft, FaBookOpen, FaPlay, FaTimes,
  FaGlobe, FaTv, FaHandshake, FaTrophy, FaVideo, FaNewspaper,
  FaBriefcase, FaUser, FaHeadphones, FaBook
} from "react-icons/fa";

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
import { Navbar, HeroSlider } from "../components/Header";
import Footer from "../components/Footer";
import MobileProfileCard from "../components/MobileProfileCard";
import FarsiProfileCard from "../components/FarsiProfileCard";
import EnglishProfileCard from "../components/EnglishProfileCard";

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

// 🎨 گلوبل اسٹائلز
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
  .font-amiri { font-family: 'Amiri', serif; }
  
  @keyframes shine { 0% { left: -100%; } 100% { left: 200%; } }
  .animate-shine { position: relative; overflow: hidden; }
  .animate-shine::after {
    content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-20deg); animation: shine 3s infinite;
  }

  @keyframes ripple {
    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.8), 0 0 0 0 rgba(212, 175, 55, 0.6), 0 0 0 0 rgba(212, 175, 55, 0.4); }
    100% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0), 0 0 0 30px rgba(212, 175, 55, 0), 0 0 0 45px rgba(212, 175, 55, 0); }
  }
  .animate-ripple { animation: ripple 2.5s infinite linear; border-radius: 50%; }

  @keyframes patternMove { 0% { background-position: 0 0; } 100% { background-position: -60px 0; } }
  .islamic-pattern { 
    background: repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.25) 20px, rgba(212, 175, 55, 0.25) 40px);
    animation: patternMove 20s linear infinite; 
  }
  .card-lift { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .card-lift:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 20px 30px rgba(0,0,0,0.1); }
  .animate-scroll-left { animation: scrollLeft 150s linear infinite; }
  .animate-scroll-right { animation: scrollRight 150s linear infinite; }
  @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
  .pause-on-hover:hover { animation-play-state: paused; }
  .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
`;

export function HomeContent() {
  const { locale } = useLocale();

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
          honors: honorsData,
          navCards: navCardsData,
          legends: legendsData,
          books: booksData,
          journey: journeyData,
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
        /* تینوں زبانوں میں ویلکم باکس: عربی بسم اللہ */
        bismillah: welcomeData.bismillah,
        welcome: {
          greeting: currentWelcome.greeting,
          description: currentWelcome.description,
          name: currentWelcome.name,
          honorsHint: dict.home.honorsHint,
        },
        honors: isEn ? honorsDataEn : honorsDataFa,
        navCards: isEn ? navCardsDataEn : navCardsDataFa,
        legends: isEn ? legendsDataEn : legendsDataFa,
        books: booksData.map((b, i) => ({
          ...b,
          title: bookTitles[i] ?? b.title,
        })),
        journey: isEn ? journeyDataEn : journeyDataFa,
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
        className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden"
      >
        <Navbar />

        <div className="block w-full p-0 m-0 border-none outline-none overflow-hidden relative">
          <HeroSlider />
        </div>

        {/* Profile Card Section */}
        {locale === "ur" && <MobileProfileCard />}
        {locale === "fa" && <FarsiProfileCard />}
        {locale === "en" && <EnglishProfileCard />}

        <div className={`container mx-auto px-3 md:px-4 relative z-10${welcomePaddingClass}`}>
          <div className="islamic-pattern rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] p-6 md:p-12 text-center max-w-5xl mx-auto bg-white hover:border-[#b89628] transition-all duration-700">
            <div className="space-y-4 md:space-y-5 relative z-10">
              <h2 className="font-kufi text-[#D4AF37] text-[12px] sm:text-[14px] md:text-[16px] font-bold tracking-wide opacity-100 leading-tight max-w-[min(100%,20rem)] mx-auto">
                {bismillah}
              </h2>
              <p
                className={`${welcomeTextClass} text-justify md:text-center mt-1 md:mt-2 max-w-4xl mx-auto`}
                dir={locale === "en" ? "ltr" : "rtl"}
              >
                <span
                  className={`text-[#D4AF37] text-base md:text-xl font-semibold drop-shadow-sm block sm:inline mb-1 sm:mb-0 ${locale === "en" ? "sm:mr-2" : "sm:ml-2"
                    }`}
                >
                  {welcome.greeting}
                </span>{" "}
                {welcome.description}
              </p>
              <div className="text-center pt-1 md:pt-2">
                <span className={nameClass}>{welcome.name}</span>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7 mt-4 w-full border-t-2 border-[#D4AF37]/20 pt-6">
                {honors?.map((btn, i) => (
                  <div key={i} className="w-full md:w-auto flex justify-center">
                    <Link
                      href={btn.link}
                      className={`group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] rounded-full shadow-lg hover:scale-[1.03] hover:shadow-[0_0_22px_rgba(212,175,55,0.65)] transition-all duration-300 w-full max-w-[320px] md:w-[300px] px-2.5 md:px-3 py-1.5 border border-white`}
                    >
                      <div className="relative h-11 w-11 md:h-12 md:w-12 rounded-full border border-white shadow-md overflow-hidden flex-shrink-0 animate-ripple z-10 bg-white p-0.5">
                        <img src={btn.gif} alt={btn.title} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div className="flex-1 text-center flex flex-col justify-center gap-0.5 min-h-0 py-0.5">
                        <span
                          className={`block leading-tight sm:whitespace-nowrap drop-shadow-sm text-sm sm:text-[0.95rem] md:text-base ${honorTitleClass}`}
                        >
                          {btn.title}
                        </span>
                        <span className="block text-[9px] md:text-[10px] text-[#4a0000]/75 font-medium leading-tight">
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

{/* 🌟 4 اہم پروجیکٹس / نیویگیشن کارڈز کا سیکشن (نیا ڈیزائن) */}
        <section className="w-full px-3 md:px-4 py-8 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {navCards?.map((card, i) => (
              <Link 
                key={i} 
                href={i === 2 ? (locale === "fa" ? "https://pakiiranassociation.wixsite.com/farsee/main" : "https://pakiiranassociation.wixsite.com/pira") : (card.link || '#')} 
                className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#D4AF37]/30 text-center flex flex-col items-center justify-center shadow-lg hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
              >
                {/* ✨ شائن ایفیکٹ */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine z-0 pointer-events-none"></div>

                {/* 🟡 گولڈن آئیکن */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B38728] text-white rounded-full flex items-center justify-center mb-6 group-hover:from-[#0f4c75] group-hover:to-[#1e6091] transition-all duration-700 shadow-[0_10px_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_10px_20px_rgba(15,76,117,0.4)] group-hover:rotate-[360deg] group-hover:scale-110 relative z-10">
                  <span className="text-3xl drop-shadow-md">{card.icon}</span>
                </div>

                {/* 🔵 نیلا ٹائٹل */}
                <h3 className={`font-bold text-[#0f4c75] text-lg md:text-xl ${bodyFont(locale)} group-hover:text-[#D4AF37] transition-colors duration-300 relative z-10 leading-snug`}>
                  {card.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
        {/* 🚀 نور القرآن پراجیکٹ سیکشن (نیا اور پروفیشنل ڈیزائن) */}
        <section className="container mx-auto px-3 md:px-4 py-8 relative z-10">
          <div className="max-w-6xl mx-auto bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden group">

            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center relative z-10">

              {/* 🖼️ تصویر اور بیج */}
              <div className="lg:w-1/3 relative">
                <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#0b314d] text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                  {labels.projBadge}
                </div>
                <img
                  src="https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png"
                  alt={labels.projTitle}
                  className="w-full h-auto rounded-2xl border-2 border-[#D4AF37]/50 shadow-2xl transition-transform group-hover:scale-105 duration-500"
                />
              </div>

              {/* 📝 تحریر اور بٹنز */}
              <div className={`lg:w-2/3 ${locale === 'en' ? 'text-left' : 'text-right'}`} dir={mainDir}>
                <h2 className={`text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4 ${bodyFont(locale)} leading-snug`}>
                  {labels.projTitle}
                </h2>
                <p className={`text-gray-300 text-sm md:text-base leading-relaxed ${bodyFont(locale)} mb-6 font-normal ${locale === 'fa' ? 'text-justify' : ''}`}>
                  {labels.projDesc}
                </p>

                {/* 🔘 بٹن پینل (جو اب سیدھا فلپ بک لائبریری میں لے جائے گا) */}
                <div className={`flex flex-wrap gap-3 justify-start`}>

                  {/* 🟢 یہ بٹن اب سیدھا لائبریری جائے گا */}
                  <Link
                    href={projectSectionData?.bookletUrl || "/library#Quran"}
                    className={`px-6 py-2.5 rounded-xl font-semibold ${bodyFont(locale)} flex items-center gap-2 bg-[#D4AF37] text-[#0b314d] hover:bg-white transition-all shadow-md text-sm md:text-base`}
                  >
                    <FaBookOpen /> {labels.btnRead}
                  </Link>

                  <button
                    onClick={() => setSelectedHomeVideo('https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_qfyz0i.mp4')}
                    className={`px-5 py-2.5 rounded-xl font-semibold ${bodyFont(locale)} flex items-center gap-2 bg-[#0f4c75] text-white hover:bg-[#1b6ca8] transition-all shadow-md text-sm md:text-base`}
                  >
                    <FaPlay /> {labels.btnVideo}
                  </button>

                  <button
                    onClick={() => setSelectedHomeVideo('https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_wdodfp.mp4')}
                    className={`px-5 py-2.5 rounded-xl font-semibold ${bodyFont(locale)} flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all text-sm md:text-base`}
                  >
                    <FaHeadphones /> {labels.btnAudio}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 🎥 شخصیات سلائیڈر */}
        <section className="bg-[#1a1a1a] py-10 relative overflow-hidden border-y-4 border-[#D4AF37]">
          <div className="container mx-auto px-2 relative z-10 text-center">
            <h2 className={`text-lg md:text-2xl font-bold text-[#D4AF37] text-center ${bodyFont(locale)} mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block mx-auto leading-snug px-2`}>{labels.legendsHead}</h2>
            <div className="relative w-full overflow-hidden" dir="ltr">
              <div className="flex gap-6 w-max animate-scroll-left pause-on-hover px-4">
                {infiniteLegends?.map((item, i) => (
                  <div key={i} className="card-lift" onClick={() => setActiveVideo(item.video)}>
                    <div className="min-w-[200px] md:min-w-[260px] h-[150px] relative rounded-xl overflow-hidden cursor-pointer border-2 border-[#D4AF37]/60 bg-black group shadow-lg">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-all">
                        <div className="bg-[#D4AF37]/80 p-3 rounded-full border-2 border-white group-hover:scale-125 transition-all shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                          <FaPlay size={18} className="text-white pl-1" />
                        </div>
                      </div>
                      <div className={`absolute bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-2.5 text-center text-xs md:text-sm text-[#D4AF37] ${bodyFont(locale)} font-semibold tracking-wide leading-tight`}>{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 📚 تصانیف سلائیڈر */}
        <section className="container mx-auto px-2 py-10 relative z-10">
          <h2 className={`text-lg md:text-2xl font-bold text-[#0f4c75] text-center ${bodyFont(locale)} mb-6 border-b-2 border-[#D4AF37]/30 pb-2 inline-block mx-auto w-full leading-snug px-2`}>{labels.booksHead}</h2>
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-[#D4AF37]/20 overflow-hidden" dir="ltr">
            <div className="flex gap-8 w-max animate-scroll-right pause-on-hover px-4">
              {infiniteBooks?.map((item, i) => (
                <div key={i} className="card-lift">
                  <Link href={item.link || "#"} className="block min-w-[140px] md:min-w-[180px] h-[220px] md:h-[260px] relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/50 bg-white shadow-lg group hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all cursor-pointer">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 w-full p-4 text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <div className={`text-xs md:text-sm text-[#D4AF37] ${bodyFont(locale)} font-semibold drop-shadow-md leading-snug`}>{item.title}</div>
                      <div className="text-[10px] md:text-xs text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{labels.booksHint}</div>
                    </div>
                  </Link>
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
                <Link key={i} href={item.link || '#'} className="flex group relative">

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
                <iframe src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
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
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowHomeBooklet(false)}>
          <div className="relative w-full max-w-4xl h-[70vh]" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 bg-red-600 text-white px-4 py-2 rounded-full font-bold" onClick={() => setShowHomeBooklet(false)}>
              <FaTimes /> {labels.btnClose}
            </button>
            <iframe src="https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/noorulquran-proj-without.exp.pdf" className="w-full h-full bg-white rounded-2xl border-4 border-[#D4AF37]"></iframe>
          </div>
        </div>
      )}

    </>
  );
}