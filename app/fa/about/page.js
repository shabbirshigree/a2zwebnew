"use client";
import React, { useState } from 'react';
import {
    FaHeart, FaMicrophone, FaAward, FaQuran, FaLandmark,
    FaPenNib, FaMedal, FaQuoteRight, FaHistory, FaChild,
    FaStar, FaArrowRight, FaBookOpen, FaPlay, FaTimes, FaGlobe, FaTv, FaHandshake, FaTrophy, FaVideo, FaNewspaper, FaBriefcase, FaUser
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import FarsiProfileCard from '../../components/FarsiProfileCard';

// 🔴 واردات داده‌ها
import { founderItems, mediaRoles, services } from './aboutData-fa';
import { legendsData } from '@/app/home/homeData';
import { BOOKS_DATA } from '../../library/libraryData';

export default function UltimateAboutPageFA() {
    const [activeVideo, setActiveVideo] = useState(null);
    const [showCulturePopup, setShowCulturePopup] = useState(false);
    const [showFederationPopup, setShowFederationPopup] = useState(false);

    const iconMap = {
        FaQuran: FaQuran,
        FaTv: FaTv,
        FaHandshake: FaHandshake,
        FaGlobe: FaGlobe,
        FaTrophy: FaTrophy,
        FaMicrophone: FaMicrophone,
        FaVideo: FaVideo,
        FaNewspaper: FaNewspaper,
        FaUser: FaUser,
        FaPenNib: FaPenNib,
        FaMedal: FaMedal,
    };

    const getYouTubeId = (url) => {
        if (!url) return '';
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const getMediaLink = (title) => {
        if (title.includes("رادیو")) return "#radio-section";
        if (title.includes("روزنامه‌نگار")) return "/article";
        if (title.includes("گوینده تلویزیون") || title.includes("تهیه‌کننده")) return "/fa/talkshows";
        return "#";
    };

    return (
        <main className="min-h-screen bg-[#f8f9fa] overflow-x-hidden font-sans" dir="rtl">

            {/* 🎨 انیمیشن‌های سفارشی */}
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

            {/* 🌟 1. سرخ سرلوحه روحانی */}
            <section className="relative bg-gradient-to-r from-[#0b314d] via-[#0f4c75] to-[#0b314d] py-16 profile-hero-wrapper text-center border-b-4 border-[#D4AF37]">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                <div className="relative z-10 px-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-8 mt-4 flex justify-center w-full">
                        <div className="animate-ripple bg-white p-1 rounded-full hero-avatar-wrapper">
                            <img
                                src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768008780/757657567_xgnsri.png"
                                alt="حاجی شبیر احمد شگری"
                                className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#D4AF37] object-cover hero-avatar"
                            />
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-[#D4AF37] mb-2 drop-shadow-lg hero-name">حاجی شبیر احمد شگری</h1>
                    <p className="text-white text-sm md:text-base font-light opacity-90 hero-subtitle">خادم ثقلین | روزنامه‌نگار، محقق، پخش‌کننده و کارشناس فرهنگی</p>
                </div>
            </section>

            {/* 👑 2. بزرگ‌ترین اعزازات روحانی زندگی */}
            <section className="container mx-auto px-4 py-12 relative z-20 -mt-8">
                <h2 className="text-center text-xl md:text-2xl font-bold text-[#0f4c75] mb-8">سرمایہ‌ی کل زندگی و بزرگ‌ترین اعزازات</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* خادم امام رضا */}
                    <Link href="/imam-reza" className="group">
                        <div className="animate-shine bg-gradient-to-bl from-emerald-900 to-emerald-700 rounded-3xl p-8 shadow-2xl border-4 border-[#D4AF37] hover:scale-105 transition-all duration-500 flex flex-col items-center text-center h-full">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                            <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 relative z-10" alt="امام رضا" />
                            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] relative z-10 mb-2 drop-shadow-md text-center">خادم امام رضا علیه‌السلام</h3>
                            <p className="text-white font-semibold text-base text-center relative z-10 border-b border-emerald-500 pb-2 mb-4">آستان قدس رضوی (مشهد مقدس)</p>
                            <p className="text-emerald-50 text-sm md:text-base leading-relaxed relative z-10">در جایی که پادشاهان و حاکمان ماه‌ها منتظر اجازه‌ی جاروکشی می‌مانند، اعزام خدمت منظم دربار فریدِ خراسان در سال 2011 میسّر گردید.</p>
                            <div className="mt-6 inline-flex items-center bg-white text-emerald-800 px-6 py-2 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-white transition-colors relative z-10 shadow-md">جزئیات و سفرها <FaArrowRight className="ml-2 rotate-180" /></div>
                        </div>
                    </Link>

                    {/* خادم غازی عباس */}
                    <Link href="/ghazi-abbas" className="group">
                        <div className="animate-shine bg-gradient-to-bl from-red-900 to-red-700 rounded-3xl p-8 shadow-2xl border-4 border-[#D4AF37] hover:scale-105 transition-all duration-500 flex flex-col items-center text-center h-full">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                            <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771683490/Giff_for_saday_e_ghazi_page_aaugws.gif" className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 relative z-10" alt="غازی عباس" />
                            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] relative z-10 mb-2 drop-shadow-md text-center">محافظ و خادم حرم غازی عباس علیه‌السلام</h3>
                            <p className="text-white font-semibold text-base text-center relative z-10 border-b border-red-500 pb-2 mb-4">اعزام: صدای غازی (کربلای معلّی)</p>
                            <p className="text-red-50 text-base leading-relaxed relative z-10">در فرصت شریف ولادت امام زمان (عج) در سال 2024، حرم مطهر حضرت غازی عباس علم‌دار علیه‌السلام اعزام «محافظ حرم» و مدالی بزرگ اهدا فرمود.</p>
                            <div className="mt-6 inline-flex items-center bg-white text-red-800 px-6 py-2 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-white transition-colors relative z-10 shadow-md">جزئیات و سفرها <FaArrowRight className="ml-2 rotate-180" /></div>
                        </div>
                    </Link>

                </div>
            </section>

            {/* 🧩 3. بنیانگذاران و سرپرستان */}
            <section className="container mx-auto px-4 py-10 relative z-10" dir="rtl">
                <div className="flex justify-center w-full mb-8">
                    <h2 className="text-center text-xl md:text-2xl font-bold text-[#0f4c75] border-b-2 border-[#D4AF37] inline-block pb-2 mx-auto">بنیانگذاران و سرپرستان</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-stretch">
                    {/* سمت راست: کارت معرفی (کارت بزرگ) */}
                    <div className="lg:w-1/3 w-full">
                        <FarsiProfileCard />
                    </div>

                    {/* سمت چپ: کارت‌های بنیانگذار و بخش رسانه */}
                    <div className="lg:w-2/3 w-full flex flex-col gap-8">
                        {/* گرید کارت‌های بنیانگذار */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                            {founderItems.map((item, i) => {
                                const title = item.title || "";
                                const linkHref = item.link || "#";
                                const isExternalLink = typeof linkHref === "string" && linkHref.startsWith("http");

                                const isFederationCard = title === "فدراسیون تجارت و فرهنگ";

                                const CardContent = (
                                    <div className="bg-gradient-to-br from-[#0a1f30] to-[#1c3b57] border border-[#D4AF37]/50 rounded-2xl p-4 md:p-5 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] transition duration-300 group transform hover:scale-105 shadow-lg flex flex-col items-center justify-center h-full min-h-[140px] md:min-h-[180px] w-full cursor-pointer">
                                        <div className="text-3xl md:text-4xl text-[#D4AF37] mb-3 group-hover:text-[#0a1f30] transition">{React.createElement(iconMap[item.icon])}</div>
                                        <h3 className="font-bold text-white group-hover:text-[#0a1f30] text-[10px] md:text-xs mb-1 leading-tight text-center w-full break-words">{title}</h3>
                                        <p
                                            dir="ltr"
                                            className="hidden md:block text-gray-400 group-hover:text-[#0a1f30]/90 text-[10px] md:text-[11px] uppercase tracking-wide font-sans text-center w-full max-w-[95%] mx-auto leading-snug px-1"
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                );

                                if (isFederationCard) {
                                    return (
                                        <div key={i} className="w-full h-full block" onClick={() => setShowFederationPopup(true)}>
                                            {CardContent}
                                        </div>
                                    );
                                }

                                if (isExternalLink) {
                                    return (
                                        <a href={linkHref} key={i} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                                            {CardContent}
                                        </a>
                                    );
                                }

                                return (
                                    <Link href={linkHref} key={i} className="w-full h-full block">
                                        {CardContent}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* 📺 رسانه و روزنامه‌نگاری الکترونیکی (اب اینجا زیر کارت‌های بنیانگذار نمایش داده می‌شود) */}
                        <div className="mt-2">
                            <h3 className="text-xl md:text-2xl font-bold text-[#0f4c75] mb-6 text-center border-b-2 border-[#D4AF37] w-fit mx-auto pb-1">رسانه و روزنامه‌نگاری الکترونیکی</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {mediaRoles.map((role, i) => {
                                    const mediaLink = getMediaLink(role.title);
                                    const isExternal = mediaLink.startsWith("http");
                                    return (
                                        <Link href={mediaLink} key={i} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : ""}>
                                            <div className="bg-gradient-to-br from-[#0a1f30] to-[#1c3b57] border border-[#D4AF37]/30 rounded-2xl p-4 hover:bg-[#D4AF37] transition duration-300 group shadow-lg h-full cursor-pointer text-center flex flex-col items-center justify-center min-h-[120px]">
                                                <div className="text-2xl text-[#D4AF37] mb-2 group-hover:text-[#0a1f30]">{React.createElement(iconMap[role.icon])}</div>
                                                <h4 dir="ltr" className="text-white group-hover:text-[#0a1f30] font-bold text-[10px] md:text-xs font-sans leading-tight break-words w-full">
                                                    {role.title}
                                                </h4>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* فدراسیون تجارت و فرهنگ Popup */}
            {showFederationPopup && (
                <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-[9999] p-4 backdrop-blur-sm">
                    <div className="bg-gradient-to-b from-white to-slate-50 rounded-[3rem] max-w-2xl w-full p-8 md:p-16 relative shadow-[0_0_80px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#0b314d]/5 rounded-full blur-3xl"></div>

                        <button onClick={() => setShowFederationPopup(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 hover:scale-125 text-3xl font-bold transition-all duration-300">&times;</button>

                        <div className="text-center flex flex-col items-center relative z-10">
                            {/* Logo with decorative ring */}
                            <div className="relative mb-8 mt-4">
                                <div className="absolute inset-0 animate-pulse rounded-full border-4 border-[#D4AF37]/30" style={{ width: '160px', height: '160px', margin: 'auto' }}></div>
                                <div className="w-40 h-40 rounded-full p-4 bg-gradient-to-br from-white via-blue-50 to-white shadow-2xl border-6 border-white relative flex items-center justify-center">
                                    <img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1774428398/3929eb58-af72-466f-89fc-98380b8abe4c.png" alt="Trade and Culture Federation Logo" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            {/* Title with decorative line */}
                            <div className="mb-6">
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#0b314d] mb-4 drop-shadow-sm text-center">فدراسیون تجارت و فرهنگ</h3>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4"></div>
                            </div>

                            {/* Content */}
                            <div className="max-w-lg">
                                <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg font-semibold text-justify mb-6 text-[#0f4c75]">
                                    تأسیس فدراسیون تجارت و فرهنگ
                                </p>
                                <div className="bg-gradient-to-r from-[#0b314d]/5 to-[#D4AF37]/5 rounded-2xl p-6 border-l-4 border-[#D4AF37]">
                                    <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base font-light text-justify">
                                        با همکاری خانه فرهنگ جمهوری اسلامی ایران، فدراسیون تجارت و فرهنگ تأسیس گردید. بنیان‌گذار این انجمن <span className="font-bold text-[#0b314d]">حاجی شبیر احمد شگری</span> است. هدف این سازمان تقویت روابط فرهنگی، تجاری و دیپلماتیکی میان پاکستان و ایران است.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 📖 5. خودداری تفصیلی */}
            <section className="container mx-auto px-3 md:px-4 py-12 md:py-16 relative z-10">
                <div className="max-w-5xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border-t-8 border-[#0b314d] p-4 md:p-16">
                    <div className="text-center mb-12">
                        <span className="bg-[#D4AF37] text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-lg font-bold tracking-wide md:tracking-widest shadow-md whitespace-nowrap inline-block">یک عهد، یک تاریخ، یک داستان</span>
                        <h2 className="text-2xl md:text-6xl font-bold text-[#0b314d] mt-5 md:mt-6 mb-4">از کوهستان‌ها تا مناره‌ها</h2>
                        <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4 text-sm md:text-lg font-bold">نوشته‌شده تحت قلم: حاجی شبیر احمد شگری (خادم ثقلین)</p>
                    </div>

                    <div className="prose max-w-none text-gray-800 text-base md:text-2xl leading-8 md:leading-[2.6] text-justify space-y-6 md:space-y-12">

                        {/* پیشگفتار - آبی روشن */}
                        <div className="bg-blue-50/70 p-4 md:p-8 rounded-2xl md:rounded-3xl border-r-8 border-[#0b314d]">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-4">پیشگفتار: زندگی، استعاره‌ی تلاش مسلسل</h3>
                            <p>زندگی تنها آوردن و رفتن هستی یا گذر روزها نیست، بلکه این یک سفر طولانی، خسته‌کننده و پرتعب است که انسان را از خاک خام راه، در کوره تجربیات، به طلای خالص تبدیل می‌کند. سفر حرفه‌ای من بر روی حوزه‌ی وسیع نیم قرنی گسترده است. این پنجاه سال تنها حساب‌ریاضی نیست، بلکه ریاضت‌هایی لحظه به لحظه‌ای است که در آن خود را فراموش کرده، خود را تقدیم خدمت دین، دنیا و مخلوقات خدا کرده‌ام. هدف خلقت انسان خدمت و اطاعت است، و من با تلاش‌های ناچیز خود سعی کرده‌ام این هدف را دستیابی کنم.</p>
                            <p className="mt-4">وقتی به عقب برگشته، از پنجره‌های ماضی خود می‌نگرم، سفری مسلسل را می‌بینم که از بادهای یخ‌بستِ سکردو تا فضاهای گرم‌دم لاهور کشیده شده. این داستان از یک مسافر است که در شرایط سخت و سختی چشم به جهان باز کرد، اما تلاش، صبر و استقامت را به سامان سفر خود کرد. به طول زندگی حکمانه تلاش کرده‌ام چیزی از تو هیچ جان‌داری را نرنج دهم و هر عمل، هر قدم و هر نوشته‌ی من علت سراسامان بنی‌بشر و بلندی دین مبین باشد. سه دهه‌ی گذشته‌ی زندگی من از این نگاه اهمیت ویژه‌ای دارند که من به عنوان وطن‌دوست پاکستانی و مسلمانی دل‌نوازی‌ام خود را در تکثیر فرهنگ اسلامی، هم‌آهنگی میان مذاهب و مسالک، تقویت دوستی پاک‌ایرانی و رسانه‌های اسلامی اختصاص داده‌ام. این سفر هنوز پایان‌نیافته، بلکه نقطه‌آغاز‌ی از عزم تازه است.</p>
                        </div>

                        {/* فصل اول - سفید و طلایی */}
                        <div className="bg-yellow-50/60 p-4 md:p-8 rounded-2xl md:rounded-3xl border-r-8 border-[#D4AF37]">
                            <h3 className="text-2xl md:text-4xl font-bold text-[#0f4c75] mb-4 border-b pb-2">فصل اول: درهِ سکردو، اجداد و نقوش نخستین</h3>
                            <p>سفر زندگی‌ام در بیست‌وچهارم ژوئن 1971 در سکردو (گلگت و بلتستان) که مناطق شمالی و بسیار خوبصورت پاکستان است، آغاز شد. این سرزمینِ شگفت‌انگیز قدرت، جایی که جلال کوه‌ها، خوبی آبشارهای جاری، آرامش دریاچه‌ها و نغمه‌ی آبشارها انسان را به فطرت نزدیک می‌کند. در دامن این کوه‌ها، من نفسِ نخست زندگی را کشیدم و سختی و زیبایی آن‌ها جزء طبع من شدند.</p>
                            <p className="mt-4">پدرم، دکتر محمد رضا، انسانی بسیار هوشیار، مهربان، درویش‌صفت و محبوب بود. احساس خدمت به بشریت از او الهام گرفتم. او اگرچه در تستی (برالدو) شگر متولد شده بود، اما از کودکی به هندوستان (شملہ) رفت و جوانی خود را در آنجا گذراند. در سال قیام پاکستان، با جریان هجرت به سرزمین خواب پاکستان آمد.</p>
                            <p className="mt-4 font-bold text-[#0f4c75]">اختراع منحصر به‌فرد پدرم (جعبه‌ی کوچک):</p>
                            <p>در راه‌های دشوار کوهستانی بلتستان، جایی که زندگی در سایه مرگ می‌رود، خدمات پزشکی پدرم صفحه‌ای طلایی است. دوره‌ای بعد از 1950، زمانی که امکانات جدید ناپیدا بود. چون جاده‌ها نبود پیاده رفتن بر روی کوه‌ها، دره‌ها و ناله‌های ضروری بود، او اختراع تراکماش کرد. وی با «جعبه‌ی کوچک» در دست، این راه‌های دشوار را طی کرد. این جعبه شامل واکسن‌زنی، پانسمان و داروهای ضروری بود تا درمان به بیماران دور دست برسد. این نمونه‌ی گویای ذکاوت و دل‌نوازی‌ام بود که جایی جایی ماشین نمی‌رفت، او این «جعبه‌ی شفای‌دهنده» برمی‌آورد.</p>
                            <p className="mt-4">مادرم متولد شملہ (دهرادون) بود. عموی من روستایی ثروتمند و معزز بود، که در خونریزی‌های تقسیم هند شهید شد. مادرم، نانی و سایر افراد خانواده در قافله‌های مورد غارت از طریق هجرت به پاکستان آمدند. بعداً در راولپنڈی، این دو خانواده‌ی «شملہ‌دار» ملاقات کردند و پدرم و مادرم با پیوند ازدواج به سکردو آمدند.</p>
                            <p className="mt-4 font-bold text-[#0f4c75]">تربیت مادری هنر ادب و اردو:</p>
                            <p>در نقطه‌ی دور افتاده‌ای همچون بلتستان، جایی که زبان محلی «بلتی» رایج است و در آن دوره اردو‌دانان کمیاب بودند، تسلط اردوی من و ذوق ادبی‌ام ثمر تربیت مادری است. چون او شناس زبان بود، محیط منزل محض اردو بود. او نه‌تنها مرا بلکه تمام برادری و خواهری را بر درستی، تلفظ و لغت اردو سخت نظارت می‌کرد. هرچند کار سختی بود لیکن مهربانی و سختگیری او ما را شناخت‌ زبان کرد. امروز اگر نوشته‌های من روان و گفتار من شیریں است، و مردم اردوی من را ستایش می‌کنند، این ثمر تربیت این مادر عظیم است که در میان کوه‌های برفانی اردو را روشن نگاه داشت.</p>
                        </div>

                        {/* فصل دوم - خاکستری */}
                        <div id="radio-section" className="bg-slate-50 p-8 rounded-3xl border-r-8 border-gray-500">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-4 flex items-center gap-3"><FaMicrophone className="text-[#D4AF37]" /> فصل دوم: رادیو پاکستان، نخستین مکتب من</h3>
                            <p>درِ شعور و آگاهی در زندگی‌ام از طریق «رادیو پاکستان» باز شد. خاطرم است که تنها هشت سال دارم، پخش موج متوسط آزمایشی رادیو پاکستان در سکردو آغاز شد. در آن دور که تلویزیون و اینترنت خیالی بود، رادیو تنها راه رابطه با جهان بود. سرود‌های ملی در موج‌های هوا پراکنده بود و همراه‌ی مردم سکردویی ما را متحرک می‌کرد. این سرود‌ها بیشتر برای رزمندگان پاکستانی منطقه‌ای بود.</p>
                            <p className="mt-4">من از آن اندک خوشنصیب‌های سکردو بودم که در برنامه‌ی معروف کودکان «ماه و ستاره» در رادیو پاکستان سهم‌گذار شدم. در اینجا هنرمند پنهان من بیدار شد. در نقش «برادر جان» برنامه‌ریزی کردم. قانون سختی رادیو داشت: «بدون اسکریپت یک لفظ هم نباید گفت». این قانون مرا جوان کاتب استوار کرد. تهیه‌کنندگان تعجب می‌کردند این بچه‌ی کوچک چطور اسکریپت‌های استحکام و ادبی می‌نویسد. دنیای رادیو بود که اعتماد و شیوه‌ی سخن گفتن را به من داد.</p>
                            <p className="mt-4">البته باتوجه به زمان برنامه‌های بعدی کودکان تا جوانی «عزم جوان» و درام‌های رادیو صدا کردم. سپس توفیق نیل شد برنامه‌های دو ساعته زبان بلتی (بعدازپاه‌سه تا شام پنج) برپا کنم. شروع نشریات صبح تجربی سکردو هم بخشی از دستاوردهای من بود. سال 1989-90، یادم است حقوق برنامه 750روپیه شک بود، آن زمان برای دانش‌آموز بسیار پول بود، لیکن درآمد واقعی آن افتخار و اعتماد بود کهدر برابر میکروفون نشسته بود، همکلاسی‌ام میان مرا در احترام بیشتری نگاه می‌کردند.</p>
                        </div>

                        {/* فصل سوم - صورتی */}
                        <div className="bg-pink-50/60 p-8 rounded-3xl border-r-8 border-pink-400">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-4 border-b pb-2">فصل سوم: روزنامه‌نگار خردسال و احترام قلم</h3>
                            <p>شاید قدرت مرا برای روزنامه‌نگاری و ادب خلق کرد، زیرا از کودکی عشق نوشتن، طراحی و هنر داشتم. دوران تحصیل قلمِ نویسنده و بازی‌های ادبی بودم. نقاشی همیشه اول بود، موقعیتی خوب در کلاس. نوشتن در مجله‌ی کودکان روزنامه نوائِ وقت «گل و شاخه» را بسیار جوان شروع کردم. دوره‌ای بود که سکردوی منحصربه‌فرد رابطه‌اش با اسلام‌آباد از طریق هواپیمای PIA تنها بود و بارانی. پس ده‌پانزده روز پرواز نمی‌شد، روزنامه‌هم بدون رسانندِ برنمی‌آمد. من نوشتار‌ها، لطیفه‌ها، ضرب‌المثل و کارتون رسم می‌کردم و می‌فرستادم و ماه‌ها انتظار می‌کشیدم. وقتی ماه بعد روزنامه می‌آمد و نام خود را چاپ‌شده می‌دیدم، خوشحالی غریب‌التالیفی داشت. در دبیرستان، دوستانم «پادشاه طنزپردازی» مرا می‌خواندند و من برایشان کتاب داستان می‌بردم زیرا عاشقِ کتاب‌خواندن بودم و دوستان را کتاب می‌رسانیدم. این عشق مطالعه همان‌ای است که امروز نویسنده شده‌ایم.</p>
                        </div>

                        {/* فصل چهارم - قرمز */}
                        <div className="bg-red-50/60 p-8 rounded-3xl border-r-8 border-red-700">
                            <h3 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">فصل چهارم: جدایی پدر، آتش‌سوزی و مهاجرت</h3>
                            <p>در دوران متوسطه، زندگی اولین زخم گہری را زد. پدرم که تنها پدر نبود بلکه تمام سرمایه‌ی من بود، ناگهان رفت. با او وقت‌های زیادی در دکان گذراندم، از او جهان یاد گرفتم و حرف‌های جهان شنیدم. رفتن او دنیای مرا ویران کرد. هنوز اندوه‌ام جا نشده بود که امتحان دیگری آمد. تجارت الکترونیک خوبی در سکردو داشتم که قربانی آتش‌ سوزی فاجعه‌ای شد. سایه‌ی پدر و ورشکستگی اقتصادیِ دو ضربه بودند که درهم‌شکستم. چون قضا و قدر الهی مرا برای مقصد بزرگی آماده می‌کرد و این تحن‌ها در تربیتِ من سهم داشت.</p>
                            <p className="mt-4">سپس تصمیم «هجرت» نیت کردم. دربار گاهِ رسالت و حکم الهی را جای آبائی، گلی‌ها و خاطره‌ها دادم و راولپنڈی رفتم. عموم‌هایم محمد علی در آنجا بودند و بسیار محبتِ غالب داشتند، لیکن غیرتِ من اجازه نمی‌داد که بار دیگری شوم. از آنجا مظفر آباد (کشمیر) رفتم و دوباره کار الکترونیک شروع کردم. لیکن آب و هوا نمی‌آمد و مسلسل بیمار می‌شدم. بالآخر نه‌ چاره، لاهور جاذب‌ام کرد.</p>
                            <p className="mt-4 font-bold text-red-800">لاهور و سخن زندگی عملی:</p>
                            <p>اغلب لاهور‌آمده‌ی هم‌وطن انجا اهل‌سکونت می‌شوند؛ من نیز این تجربه داشتم. لاهور در آمدن زندگی جدید شروع کردم. اول‌ازجا هم کار الکترونیکی را تابید، پس زمینِ تجاری قطعات یدکی گاری را درپیش‌گرفتم «بازاریاب اجراتی» شاغل شدم. این شغل تجربیات ارزشمند‌اندوخت. این دوره 44 شهر بزرگ پاکستان را تعلیم شد و بازاریابی کردم. سفر درس بسیاری می‌دهد و من در سفر‌های این دور‌ها فرهنگِ پاکستان، اخلاق مردم و رازِ بازاریابی را نزدیک دیدم. این دوره ام دیپلمِ کسب‌وکار را هم از ملتان گرفتم.</p>
                        </div>

                        {/* فصل پنجم - سبز */}
                        <div className="bg-emerald-50/60 p-8 rounded-3xl border-r-8 border-emerald-600">
                            <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 flex items-center gap-3"><FaLandmark className="text-emerald-600" /> فصل پنجم: خانه‌ی فرهنگی ایران و ستیغِ فرهنگی</h3>
                            <p>خورشید قرن بیست‌ویک طلوع می‌فروخت و زندگی من نیز دورۀ نویین وارد می‌شد. بعد از ازدواج، شغل در «خانه‌ی فرهنگ قنسولگری جمهوری اسلامی ایران» در لاهور شروع کردم. این مهم‌ترین، خاطرمایِ‌ترین و طولانی‌ترین فصل کار من است.</p>
                            <p className="mt-4 font-bold text-emerald-800">تازۀ‌سازی بخش سمعی و بصری:</p>
                            <p>ابتدا مسئولیت بخش صوت و تصویر (Audio/Visual) را عهده‌دار شدم. این دوره‌ی حاکمیت VHS و فیلم بود. سپی مستند تاریخی ارزشمند نیم‌قرنی در خانه‌ی فرهنگ را از تکنولوژی جدید هم‌آهنگ و فارمت دیجیتالی پنجره‌گذار کردم، کاری تاریخی است. این کار تنها وظیفه نبود بلکه مأموریت محفوظ‌کاری تاریخ بود.</p>
                            <p className="mt-4 font-bold text-emerald-800">روابط عام و خدمات بین‌الملل:</p>
                            <p>بعدتر مسئولیت مهمِ سخن‌گویان جمهور (PRO) را سپردند. در محیط دپلماتیک، پلِ استوار دوستی و فرهنگِ پاک‌ایران سازیدم. برای وحدتِ میان‌مسلمان و هم‌آهنگیِ میان‌اعتقادی تلاش‌های بی‌درختی کردم. علمائے کل‌ِمکاتب فکر یک میز سرِ نشاندم، سمینار و کنفرانس برپا کردم و نفرتِ را محبتِ کردم. الحمداللہ کامیابی بسیار نصیب‌شد. امروز همه‌جا تصویر وحدتِ مسلمان دیده می‌روند و منظر‌هایی از هم‌نشینی دیدار می‌کنم که دل شادی احساس کند که ریزه‌ای نقشِ من انجا هست. علاوه‌بر آن برنامه‌های فرهنگی‌وادبی، نمایش‌گاه و جشنواره‌های بسیاری برپا کردم. نمایشگاه‌های کتاب بین‌المللی اکسپو لاهور یا جشنواره‌های فیلمِ ایرانی، سازماندهی کامیاب آن‌ها بر عهده‌ی من بود. هدایتِ هیئات ملی و بین‌المللی نیز شرفِ من بود.</p>
                            <p className="mt-4 font-bold text-emerald-800">انجمن دوستیِ پاکستان ایران و گردشگری:</p>
                            <p>نظرِ خدماتِ من، قنسولخانه‌ی ایرانی مرا ریاست «انجمن دوستی پاکستان و ایران» برگزید و بنیانگذار آن هم بودم. پیش‌تر اکثر رِفتِ‌ایران برای زیارتِ و کسب‌وکار بود. اول‌بار سلسله‌ی گردشگری پاک‌ایران برپا کردم که بسیار موفق رفت.</p>
                            <p className="mt-4 font-bold text-emerald-800">اعزام‌ها و وب‌سایت پاک‌ایران:</p>
                            <p>اعتراف خدماتی ادبی در «کارشناسِ فرهنگی» (Cultural Expert) و مدال طلا شرفِ بخش‌شد. در تربیتِ فرهنگی من نقشِ بزرگ دارایِ سرپرستان ایرانی (آقا محمد سعید معیزالدین، آقا عباس فاموری، آقا عبدالرضا سلطانی و آقا اکبر برخورداری) است. برای فروغِ آگاهی دوستی میان‌مردمِ پاکستان و ایران وب‌سایت‌ی متنِ اردو و فارسی ساخت.</p>
                        </div>

                        {/* فصل ششم - بنفش */}
                        <div className="bg-purple-50/60 p-8 rounded-3xl border-r-8 border-purple-500">
                            <h3 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 border-b pb-2 border-purple-300">فصل ششم: میدانِ روزنامه‌نگاری (ریاست و نویسندگی ستون)</h3>
                            <p>خدماتِ روزنامه‌نگاری‌ام فقط نوشتن نیست بلکه هنری‌ام رادیوی مطبوعات (Editing) را ربایش دادم. روزنامه‌نگاری را هرگز کسب‌وکار نمی‌دیدم بلکه راهِ اصلاحِ جامعه دانستم. روزنامه‌ای و مجلاتِ تاریخی ریاستِ یا ریاست‌معاون‌ی (Deputy Editor) داشتم:</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 text-xl mr-6 text-purple-900">
                                <li>ایران‌شناسی (فصل‌نامه‌ی خانه‌ی فرهنگ): بطور ریاست‌کننده</li>
                                <li>شاخِ نبات (نشریه خانه‌ی فرهنگ): بطور ریاست‌کننده</li>
                                <li>روزنامه‌ی «حاوی» (اردو): بطور ریاست معاون</li>
                                <li>«پرچار» (اردو): بطور ریاست معاون</li>
                                <li>«اکاٹھ» (پنجابی): بطور ریاست معاون</li>
                                <li>ریاستِ کتاب: ریاست کتاب «وحدت» بر پایه‌ی فتوای رهبرِ معظم.</li>
                                <li>طراحی: طراحی کتاب ایرانی «خراسان رضوی» (باتصویر).</li>
                            </ul>
                            <p className="mt-4">قلمِ من هرگز خشک نشد. تاکنون 300 روپایۀ ستون، مقاله، ویژگی‌نامه و سفرنامه‌ی من در روزنامه‌های ملی و بین‌الملل (جنگ، نوائِ وقت، پاکستان، افلاک، مشرق، ابتکار، الشرق، دِی نیشن، دیلی تایمز، رپید نیوز، اسلام‌تایمز، سیاسیات، 5 سی‌ان) و سایت‌های مختلف چاپ‌شده‌اند.</p>
                        </div>

                        {/* فصل هفتم - فیروزه‌ای */}
                        <div className="bg-teal-50/60 p-8 rounded-3xl border-r-8 border-teal-600">
                            <h3 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4 border-b pb-2 border-teal-300">فصل هفتم: تالیف و نگارش (میراث علمی)</h3>
                            <p>همزمان روزنامه‌نگاری، سالِ و تالیف‌دهی را نیز تجربه کردم و کتاب‌های ارزشمندی آهاری دادم که در چاپ و فارمت PDF هستند:</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 text-xl mr-6 text-teal-900">
                                <li><strong>سیاحتِ ایران:</strong> کتاب منفردی، متن‌داری و مطلع‌کننده روی ایران در اردو.</li>
                                <li><strong>بوی بهشت:</strong> کوشش منحصر به‌فرد روی بیوگرافی حضرتِ فاطمه‌ی زهرا (سلام اللهِ علیها).</li>
                                <li><strong>مدینه‌الاهلبیت:</strong> کتاب مهمِ مقامات مقدسه‌ی اهلبیت علیها‌السلام حین هج.</li>
                                <li><strong>انیسُ‌النفوس:</strong> گذشتِ مکمل متن‌داری حرم‌ِ امام رضا علیه‌السلام.</li>
                                <li><strong>روحِ معراج:</strong> ترجمه و خلاصه‌ی اردوی کتاب عظیم اخلاق «معراج‌السعادة» (ملا احمد نراقی).</li>
                                <li><strong>کنجیِ بهشت:</strong> مجموعه‌ی دعاهای بی‌ارزش و شیوه‌های.</li>
                                <li><strong>تماشایِ آرام:</strong> کتاب روی ضمیرِ انسانی و روح‌ِ انسان در روشنی تعلیماتِ ائمه علیهم‌السلام.</li>
                                <li><strong>رهنمایِ خراسان رضوی:</strong> نخستین کتاب ایرانی که طراحی آن را در پاکستان انجام تشریف‌افزود.</li>
                            </ul>
                        </div>

                        {/* فصل هشتم - آبی تیره */}
                        <div className="bg-blue-50/70 text-[#0b314d] p-4 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border-r-8 border-[#0b314d]">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] rounded-full blur-[80px] opacity-30"></div>
                            <h3 className="text-2xl md:text-4xl font-bold text-[#0b314d] mb-4 flex items-center gap-3 relative z-10"><FaTv className="text-[#0b314d]" /> فصل هشتم: نورپروداکشن و انقلاب رسانه‌ای اسلامی</h3>
                            <p className="relative z-10"><strong>«نورپروداکشن» و لحظه‌ای که مسیرِ زندگی تبدیل شد:</strong> در فریتِ درخشان رسانه، نقشِ راه‌ام استادِ شفیقِ من (استاد بشیر سکردو) نصیحتی‌اش مشخص‌کرد. وقتی در دکانِ من کاست‌های آهنگ بودند، ایشان پیام‌شریف‌گویی دادند: «فرزند! اگر تو این آهنگ‌ها جای‌خود تلاوت و کاست‌های اسلامی بگذاری چه افتخار‌بخش بود.» این سؤال درِ عمق روحِ من فرو‌رفت و سفرِ «رسانه‌ی اسلامی» زمینه‌لایش. نورپروداکشن پاکستان را پایه‌گذاری کردم.</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 text-xl relative z-10 mr-6">
                                <li><strong>ضریحِ نور (2002):</strong> نخستین فیلم مستندِ من روی ساخت ضریح امام رضا علیه‌السلام.</li>
                                <li><strong>سری‌های علامه‌ی اقبال:</strong> کاریِ رسانه‌ای تعاونی پاکستان ایران قدیم رفتار در ایران برای سری فیلمی 11 قسما بندی (شاهکار).</li>
                                <li><strong>کانالِ یوتیوب:</strong> 2008 برپا‌شد، هزار‌بیش از 2000 ویدیو و 45 هزار دنبالِ داران (Subscribers) دارد.</li>
                            </ul>
                            <p className="mt-4 font-bold text-[#0b314d] relative z-10">کانال‌های و پلتفرم‌های مهمِ دیگرِ ما:</p>
                            <ul className="list-disc list-inside space-y-2 text-xl relative z-10 mr-6">
                                <li><strong>نورالقرآن:</strong> برای تعلیماتِ قرآنی.</li>
                                <li><strong>کودکانِ نور:</strong> برای کودکان ویدیوهای اسلامی، اخلاقی، تربیتی و سرگرمی‌دهی.</li>
                                <li><strong>نورپروداکشن (فارسی) اپارات:</strong> کانالِ اطلاع‌رسانی‌ای روی پاکستان فارسی.</li>
                                <li><strong>بی‌ان‌ان (BNN):</strong> شبکه‌های خبری بلتستان.</li>
                                <li><strong>گویندگی تلویزیون:</strong> برنامه‌های «رهبری» ستاره‌ی آسیا بسیاری ملی و بین‌الملل کردم. استاد ظهیرالدین بابر مرحوم محبتش نخستین معرفی‌ام دادند.</li>
                            </ul>
                        </div>

                        {/* فصل نهم - طلایی */}
                        <div className="bg-yellow-50/60 text-[#0b314d] p-4 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border-r-8 border-[#D4AF37]">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-3"><FaQuran /> فصل نهم: خطابِ خادمِ ثقلین و «پروژه‌ی نورالقرآن»</h3>
                            <p className="font-bold text-2xl mb-2">پروژه‌ی نورالقرآن (نخستین قرآنِ بصری جهان):</p>
                            <p>این سرمایه‌ی بزرگترِ زندگی‌ام، حاصلِ تلاشِ من و توشه‌ی آخرتم است. «نورالقرآن» نخستین پروژه‌ی منفرد قرآن‌ِ بصری (Visual Quran) دنیا است. خصوصیتِ آن آن‌است که قرآنِ مجید را از روشِ سنتی دوری پیدا، فناوری بصری (Visual)، انیمیشن و تصویری با معاصر نسخه‌ای می‌سازند تا دیدار‌نده آیتِ را معنایش دیدی ببیند و دل‌اش بپذیرد. تمام انسان تلاوت را اردو شنیدی بصورتِ منظر هم‌زمانِ در گوشی هوشمند یا رایانه‌ای ببیند.</p>
                            <p className="mt-4 italic font-bold">«قرآن را بوس کردی طاقِ بلند رکھنا احترامِ آن نیست، بلکه سمجھ کر عملِ کرنا واقع‌احترام است.»</p>
                            <p className="mt-4 font-bold text-2xl">مراحلِ پروژه:</p>
                            <ul className="list-disc list-inside mt-2 space-y-2 text-xl mr-6">
                                <li><strong>30 سپاره‌ی قرآنِ مجید ویدیویی (عربی/اردو):</strong> نخستین مرحله‌ی تمامِ قرآن‌ِ مجید به‌طریقِ معاصر. تلاوتِ استاد پرهیز کار، ترجمه‌ی اردویِ معتبرِ شیخ محسنِ علیِ نجفی رحمه‌الله و صدایِ من (Voiceover) است.</li>
                                <li><strong>30 سپاره‌ی قرآنِ مجید ویدیویی (اردو):</strong> مرحله‌ی دوم ترجمه‌شنیدنی برای فهمِ قرآن ویدیویی‌شده.</li>
                                <li><strong>پروژه‌ی نورالقرآن (بصری):</strong> مرحله‌ی سوم تمامِ قرآن‌ِ مجید با منظر ویدیویی (اول اردو، سپس دیگرِ زبان‌ها).</li>
                                <li><strong>پیام‌ِ روزانه‌ای قرآنی:</strong> روزی یک دقیقه‌ای کلیپِ قرآنی بصری، ترجمه‌ی اردویی و تفسیرِ از «تفسیرالمیزان».</li>
                                <li><strong>پیام‌های اصلاحِ نفس:</strong> کلیپ‌های قرآنی اضافه‌ی رروزانه نقل‌ی کتاب‌های از من «روحِ معراج» و «خودسازی».</li>
                                <li><strong>قصص‌ِ قرآن:</strong> قصه‌های قرآنی با منظر ویدیویی.</li>
                            </ul>
                        </div>

                        {/* فصل دهم - سفید و طلایی */}
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-lg border-2 border-[#D4AF37]/30 border-r-8 border-[#0f4c75]">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-6 flex items-center gap-3"><FaMedal className="text-[#D4AF37]" /> فصل دهم: اعزام‌ها و دریافت‌ها</h3>
                            <p>جوایز دنیاوی و پست‌های خود بی‌جا، اما آرام‌ش روحِ من در این دو اعزام‌ِ روحانی است:</p>
                            <ul className="list-disc list-inside mt-4 space-y-3 text-xl mr-6 text-[#0b314d]">
                                <li><strong>خادمِ امام رضا علیه‌السلام (2011):</strong> انتخاب به‌عنوان خادمِ امام‌رضا روی خدماتِ فرهنگی اسلامی.</li>
                                <li><strong>اعزامِ صدایِ غازی (2024):</strong> تمغه‌ی خادم حرم روی حرمِ حضرتِ غازی "عباس علم‌دار علیه‌السلام (کربلا).</li>
                                <li><strong>نخستین نماینده‌ی آستان‌ِ قدسِ رضوی در پاکستان:</strong> شرفِ نخستین نماینده‌ی حرم‌ِ امام‌رضا علیه‌السلام در پاکستان.</li>
                                <li><strong>مدال طلا:</strong> روی خدماتِ ادبی و فرهنگی.</li>
                                <li><strong>بهترینِ مدال رسانه‌ای 2025:</strong> روی خدماتِ برترِ روزنامه‌نگاری.</li>
                                <li><strong>اعزامِ فیلمِ بین‌الملی:</strong> مدال مدال فیلمِ بهتر برای جشنواره‌ی فیلمِ بین‌الملل.</li>
                            </ul>

                            <h4 className="mt-8 font-bold text-2xl text-blue-700">خراج تحسینِ جیمینائی (گوگل):</h4>
                            <p className="italic bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mt-2">«پروژه‌ی نورالقرآن شاهکارِ تبلیغِ قرآن در عصرِ پست‌مدرن است. جیمینائی (Gemini AI) این کاوشِ بی‌نظیرِ استاندارِ جهانی را سلام‌می‌رساند.» — Google Gemini (ژانویه 2026)</p>

                            <h4 className="mt-6 font-bold text-2xl text-[#D4AF37]">خطابِ خادمِ ثقلین:</h4>
                            <p className="bg-[#fffdf5] p-4 rounded-xl border-l-4 border-[#D4AF37] mt-2">روی پروژه‌ی نورالقرآن و خدماتِ دینی دیگر، خطابِ «خادمِ ثقلین» توسط جیمینائی صادر‌شد. علاوه‌بر‌این جوایزِ فراوان ملی و بین‌الملل برای ستایش خدماتِ من موجود است.</p>
                        </div>

                        {/* حرفِ پایانی */}
                        <div className="border-t-4 border-[#D4AF37] pt-10 text-center">
                            <p className="text-3xl md:text-4xl font-bold text-[#0b314d]">حرفِ آخری</p>
                            <p className="italic mt-4 leading-relaxed text-2xl">«من خود را انسانی درویش‌صفت می‌دانم. امروز اگر در جایی هستم نتیجه‌ی دعاهای پدرم و شفقتِ اساتیدم است. هدفِ زندگی‌ام تنها این‌است توانایی‌های خود، قلمِ خود و دوربینِ خود را برای دینِ اسلام، اتحادِ امتِ و بنی‌بشر اختصاص بدهم و نورِ نورالقرآن را به هر دلی برسانم.»</p>
                            <p className="mt-6 text-[#D4AF37] font-bold text-2xl">— حاجی شبیر احمد شگری (خادمِ ثقلین) — ❤️</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 🌟 6. تعریفِ شخصیات معروفِ دربارب من */}
            <section className="bg-[#1a1a1a] py-16 border-y-4 border-[#D4AF37]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] text-center mb-12">درخشان‌شخصیات درباره‌ی من</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {legendsData.map((item, i) => (
                            <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-[#D4AF37] transition-all text-center group cursor-pointer" onClick={() => setActiveVideo(item.video)}>
                                <div className="relative">
                                    <img src={item.img} className="w-full h-48 object-cover rounded-xl mb-4 grayscale group-hover:grayscale-0 transition-all" alt={item.name} />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                                        <div className="bg-[#D4AF37] text-black p-4 rounded-full"><FaPlay /></div>
                                    </div>
                                </div>
                                <h4 className="text-[#D4AF37] font-bold text-xl">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📚 7. گوشه‌ی تالیفات */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-12">تالیفات و نگارش‌های من</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {BOOKS_DATA.map((book, i) => {

                            let manualLink = "/fa/library";
                            if (book.title.includes("بوی")) manualLink = "/fa/library#book-booy";
                            else if (book.title.includes("شاخ")) manualLink = "/fa/library#shakh-e-nabaat";
                            else if (book.title.includes("انیس")) manualLink = "/fa/library#book-anees";
                            else if (book.title.includes("سفرنامه")) manualLink = "/fa/library#book-safarnama";
                            else if (book.title.includes("سیاحت")) manualLink = "/fa/library#book-sayahat-parts";
                            else if (book.title.includes("روح")) manualLink = "/fa/library#book-rooh";
                            else if (book.title.includes("سکون")) manualLink = "/fa/library#book-sakoon";
                            else if (book.title.includes("کنج")) manualLink = "/fa/library#book-dua";
                            else if (book.title.includes("خراسان")) manualLink = "/fa/library#book-khorasan";
                            else if (book.title.includes("فتو")) manualLink = "/fa/library#book-fatwa";
                            else if (book.title.includes("فرهنگ")) manualLink = "/fa/library#book-farhang";
                            else if (book.title.includes("انقلاب")) manualLink = "/fa/library#book-inqilab";
                            else if (book.title.includes("قرآن") || book.title.includes("نور")) manualLink = "/fa/library#Quran";

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

                                    <h3 className="mt-4 text-[#0b314d] font-bold text-xs md:text-[13px] group-hover:text-[#D4AF37] text-center leading-tight">
                                        {book.title}
                                    </h3>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />

            {/* 🌟 فرهنگِ و تجارتِ پاک‌ایران پاپ‌اپ */}
            {showCulturePopup && (
                <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-[9999] p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-[2rem] max-w-xl w-full p-8 md:p-10 relative shadow-[0_0_40px_rgba(212,175,55,0.3)] border-2 border-[#D4AF37]/50">
                        <button onClick={() => setShowCulturePopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold">&times;</button>
                        <div className="text-center flex flex-col items-center">
                            <div className="w-36 h-36 mb-6 rounded-full p-3 bg-white shadow-lg border-4 border-[#0b314d]">
                                <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1774428398/3929eb58-af72-466f-89fc-98380b8abe4c.png" alt="Culture and Trade Logo" className="w-full h-full object-contain rounded-full" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#0f4c75] mb-4 border-b-2 border-[#D4AF37] pb-3">تاسیسِ فدراسیونِ فرهنگ و تجارتِ پاک‌ایران</h3>
                            <p className="text-gray-700 leading-relaxed text-center text-lg mt-4 font-light text-justify">
                                با تعاونِ خانه‌ی فرهنگ جمهوری اسلامی ایران، فدراسیونِ فرهنگ و تجارتِ پاک‌ایران تاسیس‌شد. بنیانگذار این انجمن شبیر احمد شگری است. هدفِ این فورم توسعه‌ی فرهنگ میان پاکستان و ایران و تقویتِ روابط کسب و کار دو کشور است.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 🔴 ویدیو مدال */}
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