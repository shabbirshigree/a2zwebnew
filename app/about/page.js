"use client";
import { useState } from 'react';
import {
  FaHeart, FaMicrophone, FaAward, FaQuran, FaLandmark,
  FaPenNib, FaMedal, FaQuoteRight, FaHistory, FaChild,
  FaStar, FaArrowRight, FaBookOpen, FaPlay, FaTimes, FaGlobe, FaTv, FaHandshake, FaTrophy, FaVideo, FaNewspaper, FaBriefcase, FaUser
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

// 🔴 ڈیٹا امپورٹس
import { founderItems, mediaRoles, services } from './aboutData';
import { legendsData } from '@/app/home/homeData';
import { BOOKS_DATA } from '../library/libraryData';

export default function UltimateAboutPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showCulturePopup, setShowCulturePopup] = useState(false);

  const getYouTubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // 🔴 میڈیا اور الیکٹرانک جرنلزم کے لنکس
  const getMediaLink = (title) => {
    if (title.includes("Radio")) return "#radio-section";
    if (title.includes("Journalist")) return "/article";
    if (title.includes("TV Anchor") || title.includes("Producer")) return "/talkshows";
    return "#";
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] overflow-x-hidden font-sans">

      {/* 🎨 کسٹم اینیمیشنز */}
      <style>{`
        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.8), 0 0 0 0 rgba(255, 255, 255, 0.8); }
          100% { box-shadow: 0 0 0 20px rgba(212, 175, 55, 0), 0 0 0 40px rgba(255, 255, 255, 0); }
        }
        .animate-ripple { 
          animation: ripple 2.5s infinite linear; 
          border-radius: 50%; 
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-shine { position: relative; overflow: hidden; }
        .animate-shine::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent);
          transform: skewX(-25deg);
          animation: shine 3s infinite;
        }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />
      <HeroSlider />

      {/* 🌟 1. روح پرور ہیڈر */}
      <section className="relative bg-gradient-to-r from-[#0b314d] via-[#0f4c75] to-[#0b314d] py-16 text-center border-b-4 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="relative z-10 px-4">
          <div className="relative inline-block mb-8 mt-4">
            <div className="animate-ripple bg-white p-1 rounded-full">
              <img
                src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768008780/757657567_xgnsri.png"
                alt="Haji Shabbir Ahmed Shigri"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#D4AF37] object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 urdu-text drop-shadow-lg">حاجی شبیر احمد شگری</h1>
          <p className="text-white text-lg md:text-2xl font-light opacity-90 urdu-text">خادمِ ثقلین | صحافی، محقق، براڈکاسٹر اور ثقافتی ماہر</p>
        </div>
      </section>

      {/* 👑 2. زندگی کے عظیم ترین روحانی اعزازات */}
      <section className="container mx-auto px-4 py-12 relative z-20 -mt-8" dir="rtl">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0f4c75] mb-8 urdu-text">زندگی کا کل سرمایہ اور عظیم ترین اعزازات</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* خادم امام رضاؑ */}
          <Link href="/imam-reza" className="group">
            <div className="animate-shine bg-gradient-to-bl from-emerald-900 to-emerald-700 rounded-3xl p-8 shadow-2xl border-4 border-[#D4AF37] hover:scale-105 transition-all duration-500 flex flex-col items-center text-center h-full">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 relative z-10" alt="Imam Reza" />
              <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] urdu-text relative z-10 mb-2 drop-shadow-md">خادمِ امام رضا علیہ السلام</h3>
              <p className="text-white font-bold urdu-text text-lg relative z-10 border-b border-emerald-500 pb-2 mb-4">آستان قدس رضوی (مشہد مقدس)</p>
              <p className="text-emerald-50 urdu-text text-base leading-relaxed relative z-10">جہاں بادشاہ اور حاکم جھاڑو دینے کے لیے مہینوں انتظار کرتے ہیں، اس عظیم دربارِ شاہِ خراسان کی باقاعدہ خدمت کا پروانہ 2011 میں عطا ہوا۔</p>
              <div className="mt-6 inline-flex items-center bg-white text-emerald-800 px-6 py-2 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-white transition-colors relative z-10 shadow-md">تفصیلات و زیارات <FaArrowRight className="mr-2 rotate-180" /></div>
            </div>
          </Link>

          {/* خادم غازی عباسؑ */}
          <Link href="/ghazi-abbas" className="group">
            <div className="animate-shine bg-gradient-to-bl from-red-900 to-red-700 rounded-3xl p-8 shadow-2xl border-4 border-[#D4AF37] hover:scale-105 transition-all duration-500 flex flex-col items-center text-center h-full">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771683490/Giff_for_saday_e_ghazi_page_aaugws.gif" className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 relative z-10" alt="Ghazi Abbas" />
              <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] urdu-text relative z-10 mb-2 drop-shadow-md">محافظ و خادمِ حرم غازی عباسؑ</h3>
              <p className="text-white font-bold urdu-text text-lg relative z-10 border-b border-red-500 pb-2 mb-4">اعزاز: صدائے غازیؑ (کربلا معلیٰ)</p>
              <p className="text-red-50 urdu-text text-base leading-relaxed relative z-10">جشنِ ولادت امام زمانہ (عج) 2024 کے پرمسرت موقع پر حرمِ حضرت غازی عباس علمدارؑ کی جانب سے 'محافظِ حرم' کا عظیم تمغہ اور اعزاز عطا ہوا۔</p>
              <div className="mt-6 inline-flex items-center bg-white text-red-800 px-6 py-2 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-white transition-colors relative z-10 shadow-md">تفصیلات و زیارات <FaArrowRight className="mr-2 rotate-180" /></div>
            </div>
          </Link>

        </div>
      </section>

      {/* 🧩 3. بانی اور سرپرست */}
      <section className="container mx-auto px-4 py-10 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0f4c75] mb-8 urdu-text border-b-2 border-[#D4AF37] inline-block pb-2 mx-auto flex justify-center">بانی اور سرپرست</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-6xl mx-auto">
          {founderItems.map((item, i) => {
            const title = item.title || "";
            const linkHref = item.link || "#";

            const CardContent = (
              <div className="bg-gradient-to-br from-[#0a1f30] to-[#1c3b57] border border-[#D4AF37]/50 rounded-2xl p-3 md:p-6 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] transition duration-300 group transform hover:scale-105 shadow-lg flex flex-col items-center justify-center h-full min-h-[145px] md:min-h-[220px] w-full">
                <div className="text-4xl text-[#D4AF37] mb-4 group-hover:text-[#0a1f30] transition">{item.icon}</div>
                <h3 className="urdu-text font-bold text-white group-hover:text-[#0a1f30] text-[11px] md:text-base mb-1 md:mb-2 leading-tight text-center w-full break-words">{title}</h3>
                <p
                  dir="ltr"
                  className="hidden md:block text-gray-400 group-hover:text-[#0a1f30]/90 text-[10px] md:text-xs uppercase tracking-wide font-sans text-center w-full max-w-[95%] mx-auto leading-snug px-1"
                >
                  {item.desc}
                </p>
              </div>
            );

            // 🟢 1. کلچر اینڈ ٹریڈ (پاپ اپ) - اب یہ بالکل پرفیکٹ کھلے گا
            if (title.includes("کلچر") || title.includes("ٹریڈ")) {
              return <button key={i} onClick={() => setShowCulturePopup(true)} className="w-full h-full block text-center">{CardContent}</button>;
            }
            // 🔵 2. انجمن دوستی
            if (title.includes("انجمن")) {
              return <Link href="/diplomatic-services#anjuman" key={i} className="w-full h-full block">{CardContent}</Link>;
            }
            // 🟡 3. ٹورزم (یہاں اسپیلنگ ٹورزم کر دی ہے تاکہ میچ ہو جائے)
            if (title.includes("ٹورازم") || title.includes("سیاحت") || title.includes("ٹورزم")) {
              return <Link href="/diplomatic-services#tourism" key={i} className="w-full h-full block">{CardContent}</Link>;
            }
            // 🌐 4. ویب سائٹ
            if (title.includes("ویب") || title.includes("سائیٹ")) {
              return <a href="https://pakiiranassociation.wixsite.com/pira" key={i} target="_blank" rel="noopener noreferrer" className="w-full h-full block">{CardContent}</a>;
            }
            // 🎥 5. نور پروڈکشن
            if (title.includes("نورپروڈکشن") || title.includes("نور پروڈکشن")) {
              return <a href="https://www.youtube.com/@noorproduction" key={i} target="_blank" rel="noopener noreferrer" className="w-full h-full block">{CardContent}</a>;
            }
            // 👶 6. طفلان نور
            if (title.includes("طفلان نور") || title.includes("طفلانِ نور")) {
              return <a href="https://www.youtube.com/results?search_query=Tiflan+e+Noor" key={i} target="_blank" rel="noopener noreferrer" className="w-full h-full block">{CardContent}</a>;
            }
            // 📖 7. نورالقرآن
            if (title.includes("نورالقرآن") || title.includes("نور القرآن")) {
              return <Link href="/project" key={i} className="w-full h-full block">{CardContent}</Link>;
            }

            // ⚪ باقی سب کے لیے (جیسے آپارات کا پرانا اوریجنل لنک)
            return <Link href={linkHref} key={i} className="w-full h-full block">{CardContent}</Link>;
          })}
        </div>
      </section>

      {/* 📺 4. میڈیا، ریڈیو اور ٹی وی کیریئر */}
      <section className="bg-gradient-to-r from-[#0a1f30] to-[#163b55] py-12 relative z-10 border-y-4 border-[#D4AF37]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-10 urdu-text">میڈیا اور الیکٹرانک جرنلزم</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mediaRoles.map((role, i) => {
              const mediaLink = getMediaLink(role.title);
              const isExternal = mediaLink.startsWith("http");

              return (
                <Link href={mediaLink} key={i} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : ""}>
                  <div className="bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-4 md:p-6 hover:bg-[#D4AF37] transition duration-300 group shadow-lg h-full cursor-pointer text-center flex flex-col items-center">
                    <div className="text-4xl text-[#D4AF37] mb-4 group-hover:text-[#0a1f30] flex justify-center">{role.icon}</div>
                    <h3
                      dir="ltr"
                      className="text-white group-hover:text-[#0a1f30] font-bold text-base md:text-lg mb-2 font-sans text-center w-full max-w-full px-1 leading-tight break-words"
                    >
                      {role.title}
                    </h3>
                    <p className="hidden md:block text-gray-300 group-hover:text-[#0a1f30]/90 text-sm urdu-text text-center w-full">{role.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 📖 5. تفصیلی آپ بیتی */}
      <section className="container mx-auto px-3 md:px-4 py-12 md:py-16 relative z-10" dir="rtl">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border-t-8 border-[#0b314d] p-4 md:p-16">
          <div className="text-center mb-12">
            <span className="bg-[#D4AF37] text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-lg font-bold tracking-wide md:tracking-widest urdu-text shadow-md whitespace-nowrap inline-block">ایک عہد، ایک تاریخ، ایک داستان</span>
            <h2 className="text-2xl md:text-6xl font-bold text-[#0b314d] urdu-text mt-5 md:mt-6 mb-4">کوہساروں سے میناروں تک</h2>
            <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-sm md:text-lg font-bold">از قلم: حاجی شبیر احمد شگری (خادمِ ثقلین)</p>
          </div>

          <div className="prose max-w-none urdu-text text-gray-800 text-base md:text-2xl leading-8 md:leading-[2.6] text-justify space-y-6 md:space-y-12">

            {/* پیش لفظ - ہلکا نیلا */}
            <div className="bg-blue-50/70 p-4 md:p-8 rounded-2xl md:rounded-3xl border-r-8 border-[#0b314d]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-4">پیش لفظ: حیات، جہدِ مسلسل کا استعارہ</h3>
              <p>زندگی محض سانسوں کی آمد و رفت یا دنوں کے بیت جانے کا نام نہیں، بلکہ یہ تو ایک ایسا طویل، صبر آزما اور پُر مشقت سفر ہے جو انسان کو کچے راستوں کی دھول سے اٹھا کر تجربات کی بھٹی میں کندن بنا دیتا ہے۔ میری پیشہ ورانہ زندگی کا یہ سفر نصف صدی کے وسیع و عریض محیط پر پھیلا ہوا ہے۔ یہ پچاس برس محض ہندسوں کی کہانی نہیں ہے، بلکہ یہ لمحہ بہ لمحہ کی وہ ریاضتیں ہیں جس میں، میں نے اپنی ذات کو فراموش کر کے خود کو دین، دنیا اور مخلوقِ خدا کی بھلائی کے لیے وقف کر رکھا ہے۔ انسان کی تخلیق کا مقصد ہی خدمت اور اطاعت ہے، اور میں نے اپنی کمزور ناتواں کوششوں سے اسی مقصد کو پانے کی سعی کی ہے۔</p>
              <p className="mt-4">جب میں پلٹ کر اپنے ماضی کے دریچوں میں جھانکتا ہوں تو مجھے سکردو کی یخ بستہ ہواؤں سے لے کر لاہور کی گرم جوش فضاؤں تک، ایک مسلسل جدوجہد دکھائی دیتی ہے۔ یہ داستان ایک ایسے مسافر کی ہے جس نے سخت اور کٹھن حالات میں آنکھ کھولی، مگر محنت، صبر اور استقامت کو اپنا زادِ راہ بنایا۔ میں نے اپنی پوری زندگی میں شعوری طور پر یہ کوشش کی کہ میری ذات سے کسی ذی روح کو آزار نہ پہنچے اور میرا ہر عمل، ہر قدم اور ہر تحریر انسانیت کی فلاح اور دینِ مبین کی سربلندی کا سبب بنے۔ میری زندگی کی گزشتہ تین دہائیاں اس لحاظ سے خصوصی اہمیت کی حامل ہیں کہ میں نے ایک محب وطن پاکستانی اور ایک دردِ دل رکھنے والے مسلمان کے طور پر اسلامی ثقافت کے فروغ، بین المسالک و بین المذاہب ہم آہنگی اور پاک ایران دوستی کی مضبوطی اور اسلامک میڈیا کے لیے خود کو وقف کیے رکھا۔ یہ سفر ابھی تمام نہیں ہوا، بلکہ یہ تو ایک نئے عزم کا نقطہ آغاز ہے۔</p>
            </div>

            {/* باب اول - ہلکا سنہرا */}
            <div className="bg-yellow-50/60 p-4 md:p-8 rounded-2xl md:rounded-3xl border-r-8 border-[#D4AF37]">
              <h3 className="text-2xl md:text-4xl font-bold text-[#0f4c75] mb-4 border-b pb-2">بابِ اول: وادیِ سکردو، اجداد اور ابتدائی نقوش</h3>
              <p>میری زندگی کا آغاز 24 جون 1971ء کو پاکستان کے انتہائی شمالی اور حسین و جمیل خطے سکردو (گلگت بلتستان) میں ہوا۔ یہ قدرت کا شاہکار علاقہ جہاں پہاڑوں کی ہیبت، بہتے جھرنوں کی خوبصورتی، جھیلوں کا سکون اور آبشاروں کا ترنم انسان کو فطرت کے قریب کر دیتا ہے۔ انہی پہاڑوں کے دامن میں، میں نے زندگی کا پہلا سانس لیا اور انہی کی سختی اور حسن میری طبیعت کا حصہ بن گئے۔</p>
              <p className="mt-4">میرے والدِ گرامی، ڈاکٹر محمد رضا، ایک انتہائی باخبر، شفیق اور درویش صفت اور ہر دل عزیز انسان تھے۔ انسانیت کی خدمت کا جذبہ مجھے انھی سے ورثے میں ملا ہے۔ ان کی پیدائش اگرچہ تستے (برالدو) شگر کی تھی، لیکن وہ اپنے بچپن میں ہی شملہ (ہندوستان) چلے گئے تھے، جہاں انہوں نے اپنی جوانی کے ایام گزارے وہاں انھوں نے ڈاک کے محکمے میں بھی ملازمت کی۔ قیامِ پاکستان کے وقت جب ہجرت کا سلسلہ شروع ہوا تو وہ بھی اپنے خوابوں کی سرزمین پاکستان چلے آئے۔</p>
              <p className="mt-4 font-bold text-[#0f4c75]">والد صاحب کی انوکھی ایجاد (Small Box):</p>
              <p>بلتستان کے دشوار گزار پہاڑی راستوں، جہاں زندگی موت کے سائے میں چلتی ہے، وہاں میرے والد صاحب کی طبی خدمات ایک سنہرا باب ہیں۔ یہ 1950ء کے بعد کا زمانہ تھا جب جدید سہولیات کا نام و نشان نہ تھا۔ چونکہ اس دور میں سڑکیں نہ ہونے کی وجہ سے پیدل ہی پہاڑ کی چوٹیوں، پہاڑی دروں اور نالوں میں سفر طے کرنا پڑتا تھا، ایسے کٹھن حالات میں انہوں نے ایک انوکھی ایجاد کی۔ وہ "سمال باکس" (Small Box) اپنے ہاتھ میں لے کر ان دشوار گزار راستوں پر چلتے۔ اس باکس میں ویکسینیشن، مرہم پٹی اور ضروری ادویات محفوظ ہوتیں تاکہ دور دراز کے مریضوں تک علاج پہنچایا جا سکے۔ یہ ان کی ذہانت اور دردِ دل کا منہ بولتا ثبوت تھا کہ جہاں گاڑیاں نہیں جا سکتی تھیں، وہاں وہ اپنا یہ "شفائی بکس" لے کر پہنچتے تھے۔</p>
              <p className="mt-4">میری والدہ محترمہ کی پیدائش شملہ (دیرہ دون) کی ہے۔ میرے نانا ایک صاحبِ ثروت اور معزز جاگیردار تھے، جنہیں تقسیمِ ہند کے خونی ہنگاموں میں بلوائیوں نے وہیں شہید کر دیا تھا۔ میری نانی، والدہ اور دیگر اہلِ خانہ لٹے پٹے قافلوں کے ساتھ ہجرت کر کے پاکستان آئے۔ بعد ازاں راولپنڈی میں ان دو "شملہ پلٹ" خاندانوں کا ملاپ ہوا اور میرے والد اور والدہ رشتہ ازدواج میں منسلک ہو کر سکردو آباد ہو گئے۔</p>
              <p className="mt-4 font-bold text-[#0f4c75]">والدہ کی تربیت اور اردو زبان کا اثر:</p>
              <p>بلتستان جیسے دور دراز علاقے میں، جہاں مقامی زبان "بلتی" بولی جاتی ہے اور اس زمانے میں اردو سمجھنے والے خال خال تھے، وہاں میری اردو دانی اور ادبی ذوق کا سہرا میری والدہ کے سر ہے۔ چونکہ وہ اہلِ زبان تھیں، اس لیے گھر کا ماحول خالص اردو کا تھا۔ انہوں نے نہ صرف مجھے بلکہ تمام بہن بھائیوں کو اردو زبان کی صحت، تلفظ اور لغت پر سختی سے کاربند رکھا۔ یہ ایک مشکل امر تھا مگر ان کی شفقت اور سختی نے ہمیں زبان کا شناسا بنا دیا۔ آج اگر میری تحریروں میں روانی اور گفتگو میں شیرینی ہے، اور لوگ میری اردو کی تعریف کرتے ہیں، تو یہ اسی عظیم ماں کی تربیت کا ثمر ہے جس نے برف پوش پہاڑوں کے درمیان اردو کا دیا جلائے رکھا۔</p>
            </div>

            {/* باب دوم - ہلکا سرمئی */}
            <div id="radio-section" className="bg-slate-50 p-8 rounded-3xl border-r-8 border-gray-500">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-4 flex items-center gap-3"><FaMicrophone className="text-[#D4AF37]" /> بابِ دوم: ریڈیو پاکستان، میرا پہلا مکتب</h3>
              <p>میری زندگی میں شعور اور آگہی کا دروازہ "ریڈیو پاکستان" کے ذریعے کھلا۔ مجھے اچھی طرح یاد ہے جب میں محض آٹھ نو سال کا تھا تو سکردو میں ریڈیو پاکستان کی میڈیم ویو آزمائشی نشریات کا آغاز ہوا۔ اس دور میں جب ٹی وی اور انٹرنیٹ کا تصور بھی محال تھا، ریڈیو ہی دنیا سے رابطے کا واحد ذریعہ تھا۔ فضاؤں میں گونجتے "اے مردِ مجاہد جاگ ذرا، اب وقتِ شہادت ہے آیا" اور اسی طرح کے دوسے ملی نغمے مجھ سمیت اہالیان سکردو کے لہو کو گرما دیتے تھے۔ ان اور اسی طرح کے دوسرے ملی نغموں کی گونج اس لیے بھی زیادہ تھی کہ ہمارا علاقہ پاک فوج کے جوانوں کا مسکن تھا۔</p>
              <p className="mt-4">میں سکردو کے ان چند خوش نصیب بچوں میں شامل تھا جنہیں ریڈیو پاکستان سکردو میں بچوں کے مشہور پروگرام "چاند تارے" میں شرکت کا موقع ملا۔ یہیں سے میرے اندر کا چھپا ہوا فنکار بیدار ہوا۔ میں نے وہاں "بھائی جان" کے روپ میں میزبانی (Hosting) کے فرائض انجام دیے۔ ریڈیو کا ایک سخت اصول تھا کہ "اسکرپٹ کے بغیر ایک لفظ نہیں بولنا"۔ اس اصول نے مجھے بچپن ہی سے لکھنے کی مشق کروا دی۔ پروڈیوسرز اکثر حیران ہوتے تھے کہ اتنا چھوٹا بچہ اتنے پختہ اور ادبی اسکرپٹ کیسے لکھ لیتا ہے۔ یہ ریڈیو کی دنیا ہی تھی جس نے مجھے اعتماد بخشا اور بولنے کا سلیقہ سکھایا。</p>
              <p className="mt-4">وقت کے ساتھ ساتھ میرا یہ سفر پروان چڑھتا گیا۔ لڑکپن میں، میں نے نوجوانوں کے پروگرام "عزمِ جواں" کی کمپئیرنگ سنبھالی۔ ریڈیو کے متعدد ڈراموں میں صداکاری کے جوہر دکھائے۔ پھر اللہ نے مجھے یہ عزت بخشی کہ میں بلتی زبان میں دو گھنٹے کی براہِ راست نشریات (سہ پہر 3 سے شام 5 بجے تک) کرنے لگا۔ سکردو میں صبح کی آزمائشی نشریات کے آغاز کا اعزاز بھی میرے حصے میں آیاہے۔ یہ 1989-90ء کا زمانہ تھا، مجھے یاد ہے کہ پروگرام کا معاوضہ 750 روپے کا چیک ملتا تھا، جو اس وقت ایک طالب علم کے لیے بہت بڑی رقم تھی، مگر اصل کمائی وہ عزت اور اعتماد تھا جو مائیکروفون کے سامنے بیٹھ کر حاصل ہوا، جس کی وجہ سے کلاس فیلوز میں بھی ایک دھاک بیٹھ گئی تھی۔</p>
            </div>

            {/* باب سوم - ہلکا گلابی */}
            <div className="bg-pink-50/60 p-8 rounded-3xl border-r-8 border-pink-400">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-4 border-b pb-2">بابِ سوم: ننھا صحافی اور قلم کی حرمت</h3>
              <p>شاید قدرت نے مجھے صحافت اور ادب کے لیے ہی تخلیق کیا تھا، کیونکہ بچپن ہی سے مجھے لکھنے، ڈیزائننگ اور آرٹ سے جنون کی حد تک لگاؤ تھا۔ میں اسکول کے زمانے میں بزمِ ادب اور ڈراموں کی جان ہوا کرتا تھا۔ ڈرائنگ میں ہمیشہ فرسٹ آتا، کلاس میں اچھی پوزیشن لیتا تھا۔</p>
              <p className="mt-4">میں نے بہت چھوٹی عمر میں روزنامہ نوائے وقت کے بچوں کے رسالے "پھول اور کلیاں" میں لکھنا شروع کر دیا تھا۔ یہ وہ دور تھا جب سکردو کا رابطہ اسلام آباد سے صرف پی آئی اے کے "فوکر طیارے" کے ذریعے ہوتا تھا، اور وہ بھی موسم کا محتاج۔ کبھی کبھی پندرہ بیس دن تک پرواز نہ ہوتی تو اخبار بھی نہ آتے۔ ایسے میں، میں اپنی تحریریں، لطیفے، اقوالِ زریں اور کارٹون بنا کر بھیجتا اور پھر ہفتوں انتظار کرتا۔ جب ہفتوں بعد اخبار آتا اور اس میں اپنا نام چھپا ہوا دیکھتا تو انوکھی خوشی ہوتی۔ اسکول میں دوست مجھے "لطیفوں کا بادشاہ" کہتے اور میں ان کے لیے ایک چلتی پھرتی لائبریری تھا، کیونکہ میں کہانیاں پڑھنے کا شوقین تھا اور دوستوں کو کہانی کی کتابیں فراہم بھی کرتا تھا۔ یہ مطالعے کا شوق ہی تھا جس نے مجھے آج مصنف بنا دیا۔</p>
            </div>

            {/* باب چہارم - ہلکا سرخ */}
            <div className="bg-red-50/60 p-8 rounded-3xl border-r-8 border-red-700">
              <h3 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">بابِ چہارم: والد کی جدائی، آتشزدگی اور ہجرت کا کرب</h3>
              <p>میٹرک کے زمانے میں زندگی نے مجھے پہلا اور سب سے گہرا زخم دیا۔ میرے والدِ محترم، جو نہ صرف میرے باپ تھے بلکہ میرا کل اثاثہ تھے، اچانک داغِ مفارقت دے گئے۔ ان کے ساتھ دکان پر وقت گزارنا، ان کی خدمت کرنا، اور ان سے دنیا جہان کی باتیں سننا میرا معمول تھا۔ ان کے جانے سے میری دنیا ویران ہو گئی۔ ابھی اس غم سے سنبھلا نہیں تھا کہ ایک اور آزمائش آ پڑی۔ سکردو میں میرا الیکٹرانکس کا اچھا خاصا کاروبار تھا جو ایک ہولناک آتشزدگی کی نذر ہو گیا۔ والد کا سایہ سر سے اٹھ جانا اور معاشی طور پر تباہ ہو جانا، یہ دو ایسے صدمے تھے جنہوں نے مجھے توڑ کر رکھ دیا۔ گویا قدرت مجھے کسی بڑے مقصد کے لیے تیار کر رہی تھی، اور یہ آزمائشیں اسی تربیت کا حصہ تھیں۔</p>
              <p className="mt-4">تب میں نے سنتِ نبویؐ اور حکمِ الٰہی پر عمل کرتے ہوئے "ہجرت" کا فیصلہ کیا۔ اپنے آبائی گھر، اپنی گلیوں اور یادوں کو خیرباد کہہ کر میں راولپنڈی آ گیا۔ یہاں میرے ماموں محمد علی رہتے تھے مرحوم مجھ سے بے پناہ محبت کرتے تھے، لیکن میری غیرت اور خودداری نے گوارا نہ کیا کہ میں کسی پر بوجھ بنوں۔ وہاں سے میں مظفر آباد (آزاد کشمیر) چلا گیا، وہاں دوبارہ الیکٹرانکس کا کام شروع کیا مگر شاید آب و ہوا راس نہ آئی اور میں مسلسل بیمار رہنے لگا۔ بالآخر، قسمت کی دیوی مجھے لاہور لے آئی۔</p>
              <p className="mt-4 font-bold text-red-800">لاہور اور عملی زندگی کی جنگ:</p>
              <p>اکثر لاہور آنے والا یہیں کا ہوکر رہ جاتا ہے میرے ساتھ بھی ایسا ہی ہوا۔ لاہور آ کر میں نے زندگی نئے طرز سے شروع کی۔ شروع میں یہاں بھی الیکٹرانکس کا کام شروع کیا بعدازاں گاڑیوں کے اسپیئر پارٹس کی ایک کمپنی میں "سیلز ایگزیکٹو" کی ملازمت اختیار کی۔ یہ ملازمت بھی تجربوں سے لبریز تھی۔ اس ملازمت کے دوران مجھے پاکستان کے 44 بڑے شہروں میں گھومنے اور مارکیٹنگ کرنے کا موقع ملا۔ سفر انسان کو بہت کچھ سکھاتا ہے، اور میں نے ان اسفار کے دوران پاکستان کے کلچر، لوگوں کے رویوں اور کاروباری دنیا کے رموز کو قریب سے دیکھا۔ اسی دوران میں نے ملتان کے ایک ادارے سے بزنس ایڈمنسٹریشن کا ڈپلومہ بھی حاصل کیا۔</p>
            </div>

            {/* باب پنجم - ہلکا سبز */}
            <div className="bg-emerald-50/60 p-8 rounded-3xl border-r-8 border-emerald-600">
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 flex items-center gap-3"><FaLandmark className="text-emerald-600" /> بابِ پنجم: خانہ فرہنگ ایران اور ثقافتی سفارت کاری کا عروج</h3>
              <p>اکیسویں صدی کا سورج طلوع ہو رہا تھا اور میری زندگی بھی ایک نئے دور میں داخل ہو رہی تھی۔ شادی کے بعد میں نے "خانہ فرہنگ قونصلیٹ اسلامی جمہوریہ ایران، لاہور" میں ملازمت اختیار کی۔ یہ میرے کیریئر کا سب سے اہم، یادگار اور طویل باب ہے۔</p>
              <p className="mt-4 font-bold text-emerald-800">شعبہ سمعی و بصری کی تجدید:</p>
              <p>ابتدا میں، یہاں میں نے سمعی و بصری (Audio/Visual) شعبے کی ذمہ داری سنبھالی۔ یہ وہ دور تھا جب V.H.S کیسٹس اور ریلوں کا رواج تھا۔ میں نے خانہ فرہنگ میں موجود نصف صدی کے قیمتی تاریخی ریکارڈ کو جدید ٹیکنالوجی سے ہم آہنگ کر کے ڈیجیٹل فارمیٹ میں محفوظ کیا، جو بذاتِ خود ایک تاریخی کارنامہ ہے۔ یہ کام محض ڈیوٹی نہیں تھی، بلکہ تاریخ کو محفوظ کرنے کا مشن تھا۔</p>
              <p className="mt-4 font-bold text-emerald-800">پبلک ریلیشنز اور بین الاقوامی خدمات:</p>
              <p>بعد ازاں مجھے پبلک ریلیشنز آفیسر (PRO) کی اہم ذمہ داری سونپی گئی۔ سفارتی ادارے اور ڈپلومیٹک ماحول میں، میں نے پاکستان اور ایران کے درمیان دوستی اور ثقافت کا ایک مضبوط پل تعمیر کیا۔ وحدتِ بین المسلمین اور بین المذاہب ہم آہنگی کے لیے ان تھک کوششیں کیں۔ تمام مکاتب فکر کے جید علمائے کرام کو ایک میز پر بٹھایا، سیمینارز اور کانفرنسز کا انعقاد کیا اور نفرتوں کو محبتوں میں بدلنے کی سعی کی۔ الحمداللہ اس میں بہت کامیابی نصیب ہوئی۔ آج جگہ جگہ وحدت المسلمین کے نظارے دیکھنے کو ملتے ہیں جب سب کو اکٹھے بیٹھے دیکھتا ہوں تو دل کو خوشی محسوس ہوتی ہے کہ اس میں تھوڑا بہت کردار میرا بھی ہے۔ اس کے علاوہ بے شمار بین الاقوامی ثقافتی و ادبی پروگراموں، نمائشوں اور فیسٹیولز کا انعقاد کیا۔ ایکسپو سینٹر لاہور میں منعقد ہونے والے بین الاقوامی کتب میلے ہوں یا ایرانی فلم فیسٹیولز، یا ثقافتی وفود کے تبادلے ان کی کامیاب تنظیم سازی میری ذمہ داری رہی۔ مجھے ملکی و غیر ملکی وفود کی قیادت کا شرف بھی حاصل رہا۔</p>
              <p className="mt-4 font-bold text-emerald-800">انجمن دوستی پاکستان ایران اور سیاحت:</p>
              <p>میری خدمات کو مد نظر رکھتے ہوئے ایرانی قونصل خانے کی جانب سے مجھے انجمن دوستی پاکستان و ایران کا صدر منتخب کیا گیا جس کا میں بانی بھی تھا۔ اس سے پہلے پاک ایران ٹریڈ اینڈ کلچر کا بانی ہونے کا بھی اعزاز حاصل ہے۔ پہلے زیادہ تر لوگ زیارات اور کاروباری سلسلے میں ایران جاتے تھے۔ لیکن پہلی مرتبہ پاک ایران سیاحتی سلسلہ شروع کیا، جو بہت کامیاب رہا۔</p>
              <p className="mt-4 font-bold text-emerald-800">اعزازات و پاک ایران ویب سائٹ:</p>
              <p>ادبی و ثقافتی خدمات کے اعتراف میں مجھے "کارشناسِ فرہنگی" (Cultural Expert) کا خطاب اور گولڈ میڈل سے نوازا گیا۔ میری ثقافتی تربیت میں ایرانی ذمہ داران (آقا محمد سعید معیزالدین، آقا عباس فاموری، آقا عبدالرضا سلطانی اور آقا اکبر برخورداری) کا بڑا ہاتھ ہے۔ پاکستان اور ایران کی عوام کے درمیان دوستی اور معلومات کے فروغ کے لئے ایک انتہائی اہم ویب سائٹ بنائی جو دو زبانوں اردو اور فارسی میں ہے۔</p>
            </div>

            {/* باب ششم - ہلکا ارغوانی */}
            <div className="bg-purple-50/60 p-8 rounded-3xl border-r-8 border-purple-500">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 border-b pb-2 border-purple-300">بابِ ششم: صحافت کا میدان (ادارت اور کالم نگاری)</h3>
              <p>میری صحافتی خدمات محض لکھنے تک محدود نہیں ہیں بلکہ میں نے عملی طور پر اخبارات کی ادارت (Editing) بھی سنبھالی ہے۔ میں نے صحافت کو کبھی کاروبار نہیں سمجھا بلکہ اسے اصلاحِ معاشرہ کا ذریعہ جانا۔ جن اخبارات اور رسائل میں بطور ڈپٹی ایڈیٹر اور ایڈیٹر خدمات انجام دیں، ان کی تفصیل یہ ہے:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-xl mr-6 text-purple-900">
                <li>ایران شناسی (مجلہ خانہ فرہنگ): بطور ایڈیٹر</li>
                <li>شاخ نبات (میگزین خانہ فرہنگ): بطور ایڈیٹر</li>
                <li>روزنامہ "حاوی" (اردو): بطور ڈپٹی ایڈیٹر</li>
                <li>"پرچار" (اردو): بطور ڈپٹی ایڈیٹر</li>
                <li>"اکٹھ" (پنجابی): بطور ڈپٹی ایڈیٹر</li>
                <li>کتابی ادارت: رہبرِ معظم کے فتوے پر مبنی کتاب "وحدت" کی ایڈیٹنگ۔</li>
                <li>ڈیزائننگ: ایرانی کتاب "خراسان رضوی" (باتصویر) کی ڈیزائننگ۔</li>
              </ul>
              <p className="mt-4">میرے قلم کی سیاہی کبھی خشک نہیں ہوئی۔ اب تک میرے 300 سے زائد کالم، مضامین، فیچرز اور سفرنامے ملکی و غیر ملکی اخبارات (جنگ، نوائے وقت، پاکستان، افلاک، مشرق، ابتک، الشرق، دی نیشن، ڈیلی ٹائمز، ریپڈ نیوز، اسلام ٹائمز، سیاسیات، 5 سی این) اور مختلف ویب سائٹس پر شائع ہو چکے ہیں۔</p>
            </div>

            {/* باب ہفتم - ہلکا فیروزی */}
            <div className="bg-teal-50/60 p-8 rounded-3xl border-r-8 border-teal-600">
              <h3 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4 border-b pb-2 border-teal-300">بابِ ہفتم: تصنیف و تالیف (علمی ورثہ)</h3>
              <p>صحافت کے ساتھ ساتھ میں نے تصنیف و تالیف کے میدان میں بھی طبع آزمائی کی اور چند ایسی کتابیں مرتب کیں جو زیر طبع ہیں اور میری بخشش کا سامان ہیں۔ یہ کتابیں پی ڈی ایف فارمیٹ میں بھی دستیاب ہیں:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-xl mr-6 text-teal-900">
                <li><strong>سیاحتِ ایران:</strong> اردو زبان میں ایران پر ایک انتہائی منفرد، باتصویر اور معلوماتی کتاب۔</li>
                <li><strong>بوئے بہشت:</strong> خاتونِ جنت حضرت فاطمۃ الزہرا (سلام اللہ علیہا) کی سیرت پر ایک انوکھی کاوش۔</li>
                <li><strong>مدینۃ الاہلبیتؑ:</strong> حج کے دوران مرتب کی گئی اہلبیتؑ سے متعلق مقاماتِ مقدسہ کی اہم کتاب۔</li>
                <li><strong>انیس النفوس:</strong> امام رضا علیہ السلام کے حرم کی مکمل تحریری و تصویری تفصیل۔</li>
                <li><strong>روح کی معراج:</strong> اخلاقیات کی عظیم کتاب "معراج السعادۃ" (ملا احمد نراقی) کا اردو ترجمہ و تلخیص۔</li>
                <li><strong>کنجی بہشت:</strong> انمول دعاؤں اور وظائف کا مجموعہ۔</li>
                <li><strong>سکون کی تلاش:</strong> تعلیماتِ آئمہؑ کی روشنی میں انسانی ضمیر اور روح کے سکون پر کتاب۔</li>
                <li><strong>رہنمائے خراسان رضوی:</strong> پہلی ایرانی کتاب جسے پاکستان میں ڈیزائن کرنے کا اعزاز حاصل ہوا۔</li>
              </ul>
            </div>

            {/* باب ہشتم - گہرا نیلا (نور پروڈکشن) */}
            <div className="bg-blue-50/70 text-[#0b314d] p-4 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border-r-8 border-[#0b314d]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] rounded-full blur-[80px] opacity-30"></div>
              <h3 className="text-2xl md:text-4xl font-bold text-[#0b314d] mb-4 flex items-center gap-3 relative z-10"><FaTv className="text-[#0b314d]" /> بابِ ہشتم: نور پروڈکشن اور اسلامی میڈیا کا انقلاب</h3>
              <p className="relative z-10"><strong>"نور پروڈکشن" اور زندگی کا رخ بدل دینے والا لمحہ:</strong> میڈیا کی چکا چوند میں میری سمت کا تعین میرے شفیق استاد ماسٹر بشیر صاحب (سکردو) کی ایک نصیحت نے کیا۔ جب میری دکان پر گانوں کی کیسٹس موجود تھیں تو انہوں نے بڑے پیار سے سمجھایا: "بیٹے! اگر تم ان گانوں کی جگہ تلاوت اور اسلامی کیسٹس رکھتے تو کیا ہی اچھا ہوتا۔" یہ جملہ میرے دل کی گہرائیوں میں اتر گیا اور یہیں سے "اسلامک میڈیا" کا سفر شروع ہوا۔ میں نے "نور پروڈکشن پاکستان" کی بنیاد رکھی۔ میرا مقصد میڈیا کو ہتھیار بنا کر دین کی خدمت کرنا تھا۔</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-xl relative z-10 mr-6">
                <li><strong>ضریحِ نور (2002):</strong> میری پہلی ڈاکومنٹری جو امام رضاؑ کی ضریح کی تعمیر پر تھی۔</li>
                <li><strong>علامہ اقبالؒ سیریز:</strong> ایران کی جانب سے علامہ اقبالؒ پر بنائی گئی بین الاقوامی فلم سیریز میں پاکستان میں پروڈکشن مینیجر کی حیثیت سے کام کیا۔ یہ 11 اقساط پر مبنی شاہکار ہے۔</li>
                <li><strong>یوٹیوب چینل:</strong> 2008 میں قائم کیا، جس پر آج 2000 سے زائد ویڈیوز اور 45,000 کا خاندان (Subscribers) موجود ہے۔</li>
              </ul>
              <p className="mt-4 font-bold text-[#0b314d] relative z-10">ہمارے دیگر اہم چینلز اور پلیٹ فارمز:</p>
              <ul className="list-disc list-inside space-y-2 text-xl relative z-10 mr-6">
                <li><strong>نور القرآن:</strong> قرآنی تعلیمات کے لئے بنایا گیا ہے۔</li>
                <li><strong>طفلانِ نور:</strong> بچوں کے لئے اسلامی، اخلاقی، تربیتی اور تفریحی ویڈیوز۔</li>
                <li><strong>نور پروڈکشنز (فارسی) آپارات:</strong> پاکستان کے بارے میں معلوماتی چینل فارسی زبان میں۔</li>
                <li><strong>بی این این (BNN):</strong> بلتستان نیوز نیٹ ورک۔</li>
                <li><strong>ٹی وی اینکرنگ:</strong> "سٹار ایشیا" کے پروگرام "راہنما" میں بہت سے کامیاب نیشنل اور انٹرنیشنل پروگرامز کیے۔ ظہیر الدین بابر مرحوم کی محبتوں نے پہلی مرتبہ ٹی وی اینکر کے طور پر مجھے متعارف کرایا۔</li>
              </ul>
            </div>

            {/* باب نہم - گولڈن (نور القرآن) */}
            <div className="bg-yellow-50/60 text-[#0b314d] p-4 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border-r-8 border-[#D4AF37]">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-3"><FaQuran /> بابِ نہم: خادمِ ثقلین کا خطاب اور "نور القرآن پراجیکٹ"</h3>
              <p className="font-bold text-2xl mb-2">نور القرآن پراجیکٹ (The Visual Quran):</p>
              <p>یہ میری زندگی کا سب سے بڑا سرمایہ، میری محنت کا حاصل اور میری آخرت کا توشہ ہے۔ "نور القرآن" دنیا کا پہلا منفرد ویژول قرآن (Visual Quran) پراجیکٹ ہے۔ اس پراجیکٹ کی خاص بات یہ ہے کہ اس میں قرآنِ مجید کو روایتی انداز سے ہٹ کر جدید بصری (Visual) ٹیکنالوجی، اینیمیشن اور منظر کشی کے ذریعے پیش کیا جا رہا ہے تاکہ دیکھنے والا آیت کے مفہوم کو آنکھوں سے دیکھے اور دل میں اتارے۔ اس میں ایک عام شخص تلاوت کو اردو میں سنتے ہوئے اس کا منظر بھی اپنے موبائل یا کمپیوٹر سکرین پر ساتھ ساتھ دیکھ سکے گا۔</p>
              <p className="mt-4 italic font-bold">"قرآن کو چوم کر اونچے طاق میں رکھ دینا اس کا احترام نہیں، بلکہ اسے سمجھ کر، اس پر عمل کرنا ہی اس کا حقیقی احترام ہے۔"</p>
              <p className="mt-4 font-bold text-2xl">پراجیکٹ کے مراحل:</p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-xl mr-6">
                <li><strong>قرآن مجید کے 30 سپارے ویڈیو شکل میں (عربی/اردو):</strong> پہلے مرحلے میں مکمل قرآن مجید کو جدید انداز میں تیار کیا گیا۔ اس میں استاد پرہیزگار کی تلاوت، شیخ محسن علی نجفیؒ کا مستند اردو ترجمہ، اور میری (شبیر احمد شگری) کی آواز (Voiceover) ہے۔</li>
                <li><strong>قرآن مجید کے 30 سپارے ویڈیو شکل میں (اردو):</strong> دوسرے مرحلے میں ترجمہ سُن کر قرآن سمجھنے کے لیے ویڈیوز تیار کی گئیں۔</li>
                <li><strong>نورالقرآن پراجیکٹ (ویژول):</strong> تیسرے مرحلے میں پورے قرآن مجید کو ویڈیو مناظر کے ساتھ پیش کیا جائے گا (پہلے اردو، پھر دیگر زبانوں میں)۔</li>
                <li><strong>ڈیلی قرآنی پیغام:</strong> روزانہ ایک منٹ کا قرآنی ویژول کلپ، اردو ترجمے اور "تفسیرالمیزان" سے لی گئی تفسیر کے ساتھ۔</li>
                <li><strong>اصلاح نفس کے پیغام:</strong> قرآنی کلپس کے ساتھ روزانہ میری کتاب "روح کی معراج" اور "خودسازی" سے پیغامات شیئر کیے جاتے ہیں۔</li>
                <li><strong>قصص القرآن:</strong> قرآنی قصوں کو ویڈیو مناظر کے ساتھ پیش کیا جا رہا ہے۔</li>
              </ul>
            </div>

            {/* باب دہم - سفید اور گولڈن */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-lg border-2 border-[#D4AF37]/30 border-r-8 border-[#0f4c75]">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-6 flex items-center gap-3"><FaMedal className="text-[#D4AF37]" /> بابِ دہم: اعزازات اور حاصلِ زیست</h3>
              <p>دنیاوی ایوارڈز اور عہدے اپنی جگہ، لیکن میری روح کی تسکین ان دو روحانی اعزازات میں ہے:</p>
              <ul className="list-disc list-inside mt-4 space-y-3 text-xl mr-6 text-[#0b314d]">
                <li><strong>خادمِ امام رضا علیہ السلام (2011):</strong> اسلامی فرہنگی خدمات پر خادم امام رضا علیہ السلام منتخب ہونے کا شرف ملا۔</li>
                <li><strong>صدائے غازی ایوارڈ (2024):</strong> خادم حرم کا ایوارڈ جو حرمِ حضرت غازی عباس علمدار علیہ السلام (کربلا) کی جانب سے عطا ہوا۔</li>
                <li><strong>آستانِ قدس رضوی کی پاکستان میں پہلی نمائندگی:</strong> پاکستان میں حرم امام رضا علیہ السلام کا پہلا نمائندہ ہونے کا اعزاز۔</li>
                <li><strong>گولڈ میڈل:</strong> ادبی و فرہنگی خدمات پر۔</li>
                <li><strong>بیسٹ میڈیا ایوارڈ 2025:</strong> بہترین صحافتی خدمات پر۔</li>
                <li><strong>انٹرنیشنل فلم ایوارڈ:</strong> بیسٹ فلم ایوارڈ برائے انٹرنیشنل فلم فیسٹیول۔</li>
              </ul>

              <h4 className="mt-8 font-bold text-2xl text-blue-700">جیمینائی (گوگل) کا خراج تحسین (Certificate of Excellence):</h4>
              <p className="italic bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mt-2">"نور القرآن پراجیکٹ دورِ جدید میں تبلیغ قرآن کا ایک شاہکار ہے۔ جیمینائی (Gemini AI) اس عالمی معیار کی منفرد کاوش کو سلام پیش کرتا ہے۔" — Google Gemini (January 2026)</p>

              <h4 className="mt-6 font-bold text-2xl text-emerald-700">چیٹ جی پی ٹی کی تعریفی سند:</h4>
              <p className="italic bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-500 mt-2">"یہ اعزاز صرف پاکستان کو حاصل ہے کہ دنیا میں سب سے پہلے قرآن کے اس تاریخی ویژول پراجیکٹ کا آغاز ایک پاکستانی (شبیر احمد شگری) نے کیا ہے۔" — ChatGPT (September 03, 2025)</p>

              <h4 className="mt-6 font-bold text-2xl text-[#D4AF37]">خادمِ ثقلین کا خطاب:</h4>
              <p className="bg-[#fffdf5] p-4 rounded-xl border-l-4 border-[#D4AF37] mt-2">نور القرآن پراجیکٹ اور دیگر مذہبی خدمات پر جیمینائی کی جانب سے "خادمِ ثقلین" کا خطاب دیا گیا۔ اس کے علاوہ بے شمار ملکی اور غیر ملکی ایوارڈز میری خدمات کی قدر دانی کے طور پر موجود ہیں۔</p>
            </div>

            {/* حرفِ آخر */}
            <div className="border-t-4 border-[#D4AF37] pt-10 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#0b314d]">حرفِ آخر</p>
              <p className="italic mt-4 leading-relaxed text-2xl">"میں خود کو ایک درویش صفت انسان سمجھتا ہوں۔ آج اگر میں کسی مقام پر ہوں تو یہ میرے والدین کی دعاؤں اور میرے اساتذہ کی شفقت کا نتیجہ ہے۔ میری زندگی کا مقصد صرف یہ ہے کہ اپنی صلاحیتوں، اپنے قلم اور اپنے کیمرے کو دینِ اسلام، اتحادِ امت اور انسانیت کی بھلائی کے لیے استعمال کروں اور "نور القرآن" کا نور ہر دل تک پہنچاؤں۔"</p>
              <p className="mt-6 text-[#D4AF37] font-bold text-2xl">— حاجی شبیر احمد شگری (خادمِ ثقلین) — ❤️</p>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 6. نامور شخصیات کا اعتراف (Legends Section) */}
      <section className="bg-[#1a1a1a] py-16 border-y-4 border-[#D4AF37]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] text-center urdu-text mb-12">نامور شخصیات کا میرے بارے میں اظہار خیال</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" dir="ltr">
            {legendsData.map((item, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-[#D4AF37] transition-all text-center group cursor-pointer" onClick={() => setActiveVideo(item.video)}>
                <div className="relative">
                  <img src={item.img} className="w-full h-48 object-cover rounded-xl mb-4 grayscale group-hover:grayscale-0 transition-all" alt={item.name} />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                    <div className="bg-[#D4AF37] text-black p-4 rounded-full"><FaPlay /></div>
                  </div>
                </div>
                <h4 className="text-[#D4AF37] font-bold urdu-text text-xl">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📚 7. تصانیف کا گوشہ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] urdu-text mb-12">میری تصانیف و تالیفات</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto" dir="rtl">
            {BOOKS_DATA.map((book, i) => {

              let manualLink = "/library";
              if (book.title.includes("بوئے بہشت")) manualLink = "/library#book-booy";
              else if (book.title.includes("شاخ نبات")) manualLink = "/library#shakh-e-nabaat";
              else if (book.title.includes("انیس النفوس")) manualLink = "/library#book-anees";
              else if (book.title.includes("سفرنامہ")) manualLink = "/library#book-safarnama";
              else if (book.title.includes("سیاحت")) manualLink = "/library#book-sayahat-parts";
              else if (book.title.includes("روح کی معراج")) manualLink = "/library#book-rooh";
              else if (book.title.includes("سکون کی تلاش")) manualLink = "/library#book-sakoon";
              else if (book.title.includes("کنجی بہشت")) manualLink = "/library#book-dua";
              else if (book.title.includes("خراسان")) manualLink = "/library#book-khorasan";
              else if (book.title.includes("فتوے")) manualLink = "/library#book-fatwa";
              else if (book.title.includes("فرھنگستان")) manualLink = "/library#book-farhang";
              else if (book.title.includes("انقلاب")) manualLink = "/library#book-inqilab";
              else if (book.title.includes("نورالقرآن") || book.title.includes("قرآن")) manualLink = "/library#Quran";

              const finalHref = book.link || manualLink;

              return (
                <Link
                  href={finalHref}
                  key={i}
                  className="group flex flex-col items-center"
                >
                  <div className="relative w-full aspect-[3/4] bg-white rounded-lg shadow-md border-2 border-transparent group-hover:border-[#D4AF37] transition-all overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={book.img || book.image}
                      className="max-w-full max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                      alt={book.title}
                    />
                  </div>

                  <h3 className="mt-4 text-[#0b314d] urdu-text font-bold text-sm md:text-base group-hover:text-[#D4AF37] text-center leading-tight">
                    {book.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* 🌟 پاک ایران کلچر اینڈ ٹریڈ کا پاپ اپ (اب یہ بالکل محفوظ اور باہر ہے) */}
      {showCulturePopup && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-[9999] p-4 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] max-w-xl w-full p-8 md:p-10 relative shadow-[0_0_40px_rgba(212,175,55,0.3)] border-2 border-[#D4AF37]/50">
            <button onClick={() => setShowCulturePopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold">&times;</button>
            <div className="text-center flex flex-col items-center">
              <div className="w-36 h-36 mb-6 rounded-full p-3 bg-white shadow-lg border-4 border-[#0b314d]">
                <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1774428398/3929eb58-af72-466f-89fc-98380b8abe4c.png" alt="Culture and Trade Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f4c75] mb-4 urdu-text border-b-2 border-[#D4AF37] pb-3">پاک ایران کلچر اینڈ ٹریڈ کا قیام</h3>
              <p className="text-gray-700 leading-relaxed urdu-text text-center text-lg mt-4 font-light text-justify">
                خانہ فرہنگ اسلامی جمہوریہ ایران کے تعاون سے پاک ایران کلچر اینڈ ٹریڈ کا قیام عمل میں لایا گیا۔ اس فورم کے بانی شبیر احمد شگری ہیں۔ اس فورم کا مقصد پاکستان اور ایران کے درمیان کلچر کا فروغ اور تجارت کے لئے دونوں ممالک کے درمیان روابط میں اضافہ کرنا تھا۔
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🔴 ویڈیو ماڈل */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[101]"><FaTimes /></button>
          <div className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.6)] border-4 border-[#D4AF37]">
            {activeVideo.includes('youtu') ? (
              <iframe
                className="w-full h-[50vh] md:h-[70vh]"
                src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1&rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            ) : (
              <video className="w-full h-[50vh] md:h-[70vh] bg-black" src={activeVideo} controls autoPlay playsInline></video>
            )}
          </div>
        </div>
      )}

    </main>
  );
}