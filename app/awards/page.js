"use client";
import React, { useState } from 'react';
import { 
  FaAward, FaQuran, FaCamera, FaMicrophone, FaStar, FaCertificate,
  FaTimes, FaChevronLeft, FaChevronRight, FaGlobe, FaCheckCircle
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

export default function AwardsPortfolioFinal() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryImages = [
    { id: 1, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768156323/23319289_1532468060163778_2423177032091078529_n_h2jvwh.jpg", title: "گولڈ میڈل وصولی - پیامِ اقبال کانفرنس" },
    { id: 2, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223233/Ghalaf_e_Kaba_se_bani_Topi_pehnney_ka_sharaf_pnga4i.png", title: "خانہ کعبہ کے غلاف سے بنی ٹوپی پہننے کا شرف" },
    { id: 3, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768224440/IMG_20230608_193311_Copy_duqjr6.jpg", title: "حرم حضرت معصومہ قُم (س) سے قالین کا تحفہ" },
    { id: 4, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg", title: "حرم امام رضا ؑ میں مسئولین سے تحفہ" },
    { id: 5, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/film.jpg_ni9h46.jpg", title: "بیسٹ فلم ایسوسی ایشن ایوارڈ" },
    { id: 6, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202472/2025_media_best_award_efywu4.jpg", title: "بیسٹ میڈیا 2025 ایوارڈ وصولی" },
    { id: 7, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202180/11111111_vqdys2.jpg", title: "ماہان ائیر تہران میں پذیرائی" },
    { id: 8, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202176/10806464_790099757733949_5823667161239303528_n_wq6rkd.jpg", title: "مشیر وزیر اعلی پنجاب سے شیلڈ" },
    { id: 9, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772800566/4539a45f-c921-4da8-8650-6708f6cc928b.png", title: "صدائے غازی ایوارڈ (2024)" },
    { id: 10, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202192/IMG_5077_nblze6.jpg", title: "تقریب پذیرائی کا منظر" },
        { 
      id: 12, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202176/535244_956632024414054_963381716054665214_n_ynqteq.jpg", 
      title: "2خانہ فرہنگ" 
    },
    
    // ایک اور تصویر
    { 
      id: 13, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202175/68986_737756589634933_8909297026733387903_n_hfwt57.jpg", 
      title: "3خانہ فرہنگ" 
    },
{ 
      id: 14, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202192/IMG_5077_nblze6.jpg", 
      title: "4خانہ فرہنگ" 
    },
    
    // ایک اور تصویر
     { 
      id: 15, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772833852/daacb29a-ceb0-4237-b306-4e9b203cff69.png", 
title: "شعبہ اردوزائرین۔ حرم امام رضاؑ۔آقائ علی اور آقای شھزاد سے شیلڈ لیتے ہوئے" 
   },
{ 
      id: 16, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772834492/cultural_atashi_Iran_se_gift_letey_huwey_iz0ogw_xuxszk.jpg", 
      title: "ڈائریکٹر جنرل خانہ فرہنگ سے فریم لیتے ہوئے" 
    },
    { 
      id: 17, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772834889/benalmazahib_ham_ahangi_meetin_cutural_embassy_iran_Islamabad_w7inmn_tj8tzr.jpg", 
      title: "کلچرل سفارت اسلامی جمہوریہ ایران اسلام آباد۔" 
    },
     { 
      id: 18, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835163/Ag._Malaki_Head_of_Bunyad_pazohishay_e_Islamiastan_e_Qods_Mashad_Iran_Copy_corurb_m7uoyh.jpg", 
      title: "بنیاد پزوھش اسلامی آستان قدس کے سربراہ آقای ملکی سے تحفہ لیتے ہوئے" 
    },
        { 
      id: 19, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835353/IMG_20230522_12353811_Copy_mmry9w_o42miw.jpg", 
      title: "شعبہ اردو زائرین۔ حرم امام رضا ؑ۔آقائ شہزاد نقوی سےشیلڈ وصول کرتے ہوئے" 
    },
     { 
      id: 20, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835759/IMG_20191106_142828_Copy_hxufdv_vslbsj.jpg", 
      title: "سابق وزیر اعلی اور سپیکر منظور وٹو اپنی کتاب پیش کررہے ہیں" 
    },
     { 
      id: 21, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835715/Mosin_ali_Najafi_ki_Mazar_par_Qurani_videos_k_Iftitah_k_moqah_pr_afhing_dvlllv.jpg", 
      title: "شیخ اسحاق علی نجفی شیخ محسن نجفی کی قبر انور پر کتاب پیش کرتے ہوئے" 
    },
        { 
      id: 22, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835950/44f75383-5760-43ed-baa8-25d1b01ff999.png", 
      title: "سربراہ جمعیت علمائے پاکستان پیر  معصوم نقوی چادر پوشی کررہے ہیں" 
    },
        { 
      id: 23, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776000233/2230104a-ad9d-464d-b2c6-98c3de0c2913.png", 
      title: "آستان قدس رضوی کی جانب سے اظہارِ تشکر و تقدیر" 
    },
    { 
      id: 24, 
      src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776027986/CamScanner_02-12-2022_14.42_99_rhufo2.jpg", 
      title: "پاکستان میں تعینات ایرانی سفیر کی جانب سے حاجی شبیر احمد شگری کو زبردست خراج تحسین" 
    }
]; // لسٹ یہاں ختم ہو رہی ہے


  const nextImg = (e) => { e.stopPropagation(); setSelectedImageIndex((i) => (i + 1) % galleryImages.length); };
  const prevImg = (e) => { e.stopPropagation(); setSelectedImageIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length); };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#ffd700] selection:text-black">
      <Navbar />
      <HeroSlider />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&family=Amiri:wght@400;700&display=swap');
        .urdu-text { font-family: 'Noto Nastaliq Urdu', serif; line-height: 2.2; }
        .font-amiri { font-family: 'Amiri', serif; }
        
        @keyframes shine { 0% { left: -100%; } 100% { left: 200%; } }
        .animate-shine { position: relative; overflow: hidden; }
        .animate-shine::after {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg); animation: shine 3s infinite;
        }

        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.8), 0 0 0 0 rgba(212, 175, 55, 0.6); }
          100% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0), 0 0 0 30px rgba(212, 175, 55, 0); }
        }
        .animate-ripple { animation: ripple 2.5s infinite linear; border-radius: 50%; }

        .award-card { transition: all 0.5s ease; border: 1px solid #222; background: #0a0a0a; border-radius: 40px; margin-bottom: 1.5rem; }
        .img-wrap { height: 380px; width: 100%; border-radius: 30px; overflow: hidden; border: 2px solid #222; }
        .gallery-item { aspect-ratio: 16 / 10; width: 100%; overflow: hidden; border-radius: 20px; border: 1px solid #333; }
        .gallery-img { width: 100%; height: 100%; object-fit: cover; }
        .glow-box { border: 1px solid #333; background: #0c0c0c; border-radius: 25px; padding: 20px; }
      `}</style>

      {/* ہیڈر سیکشن */}
      <section className="pt-6 pb-4 text-center">
         <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-[#D4AF37] urdu-text mb-2">اعزازات اور حاصلِ زیست</h1>
            <p className="text-gray-400 max-w-3xl mx-auto urdu-text text-base md:text-lg italic leading-relaxed">
               "دنیاوی ایوارڈز اپنی جگہ ایک مقام رکھتے ہیں، لیکن میری روح کی اصل تسکین ان عظیم روحانی اعزازات میں پوشیدہ ہے جو مجھ ناچیز کو عطا ہوئے۔"
            </p>
         </div>
      </section>

      {/* 🏅 عظیم روحانی اعزازات کا بار (تازہ ترین GIF لنکس کے ساتھ) */}
      <section className="container mx-auto px-4 py-2">
        <div className="flex flex-row items-center justify-center gap-2 md:gap-8 mb-6 border-b border-gray-800 pb-6">
          
          {/* بٹن 1: خادم امام رضاؑ */}
          <Link href="/imam-reza" className="animate-shine group relative inline-flex items-center pr-1 pl-3 md:pl-4 gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-1.5 rounded-full shadow-lg hover:scale-105 transition-all shrink-0 w-[145px] md:w-[260px]">
            <div className="h-9 w-9 md:h-12 md:w-12 rounded-full border-2 border-white overflow-hidden animate-ripple bg-white shrink-0">
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" className="w-full h-full object-cover rounded-full" alt="imam-reza" />
            </div>
            <div className="flex-1 text-center"><span className="block text-xs md:text-xl font-extrabold font-amiri leading-none whitespace-nowrap">خادمِ امام رضاؑ</span></div>
          </Link>

          <h2 className="text-xs md:text-2xl font-bold text-[#D4AF37] urdu-text whitespace-nowrap px-1">✨ عظیم روحانی اعزازات اور مناصب</h2>

          {/* بٹن 2: خادم غازی عباسؑ */}
          <Link href="/ghazi-abbas" className="animate-shine group relative inline-flex items-center flex-row-reverse pl-1 pr-3 md:pr-4 gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-1.5 rounded-full shadow-lg hover:scale-105 transition-all shrink-0 w-[145px] md:w-[260px]">
            <div className="h-9 w-9 md:h-12 md:w-12 rounded-full border-2 border-white overflow-hidden animate-ripple bg-white shrink-0">
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771683490/Giff_for_saday_e_ghazi_page_aaugws.gif" className="w-full h-full object-cover rounded-full" alt="ghazi-abbas" />
            </div>
            <div className="flex-1 text-center"><span className="block text-xs md:text-xl font-extrabold font-amiri leading-none whitespace-nowrap">خادمِ غازی عباسؑ</span></div>
          </Link>
        </div>

        {/* باقی تمام کارڈز اور تحریریں جوں کی توں موجود ہیں */}
        <div className="max-w-6xl mx-auto space-y-8" dir="rtl">
          
          {/* International Recognition Section */}
          <div className="text-center mb-10 pt-10 border-t-2 border-[#D4AF37]/20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] font-amiri tracking-wider">بین الاقوامی اعترافِ خدمات</h2>
            <p className="text-[#D4AF37]/80 text-xl mt-2 font-light">International Recognition</p>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"></div>
          </div>

          {/* سفیر کا لیٹر (Updated Entry) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#D4AF37]/30 bg-gradient-to-b from-[#0a0a0a] to-[#111] shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <div className="urdu-text">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3 leading-snug">
                <FaCertificate className="animate-pulse shrink-0" /> پاکستان میں تعینات ایرانی سفیر کی جانب سے حاجی شبیر احمد شگری کو زبردست خراج تحسین
              </h3>
              <div className="space-y-4 text-gray-300 text-lg text-justify font-light leading-relaxed">
                <p>
                  اس لیٹر میں ایرانی سفیر کی جانب سےحاجی شبیر احمد شگری کی اسلامی مسئلے کو فراموشی کی نذر ہونے سے بچانے کے لیے آپ کی گراں قدر کوششوں کی بھرپور قدردانی کی گئی اور کہا گیا کہ مظلوم فلسطینی عوام کی حمایت اور غاصب صیہونی حکومت کی مذمت میں اہلِ قلم کا جہاد اللہ تعالیٰ کے ہاں خصوصی اجر کا حامل ہے اور یہ مظلوموں کے دلوں میں روشن مستقبل کی امید کو زندہ رکھتا ہے۔
                </p>
                <p>
                  ساتھ ہی دعا بھی کی گئی کہ اللہ تعالیٰ کی نصرت اور آپ جیسے دانشوروں کی کاوشوں سے، امتِ مسلمہ کے اتحاد و یکجہتی کے سائے میں، ہم جلد ہی مسلمانوں کے قبلہ اول، قدسِ شریف کی آزادی کا مشاہدہ کریں گے۔
                </p>
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <p className="text-[#D4AF37] font-bold">سید محمد علی حسینی</p>
                  <p className="text-sm">سفیرِ اسلامی جمہوریہ ایران برائے پاکستان</p>
                  <p className="text-xs opacity-60">29 مئی 2020</p>
                </div>
              </div>
            </div>
            <div className="img-wrap h-[400px] md:h-[600px] shadow-2xl border-2 border-[#D4AF37]/20 rounded-xl overflow-hidden group relative">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776027986/CamScanner_02-12-2022_14.42_99_rhufo2.jpg" className="w-full h-full object-contain bg-black/50 group-hover:scale-105 transition-transform duration-500" alt="Iranian Ambassador's Tribute to Haji Shabbir Ahmed Shigri" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>

          {/* آستان قدس رضوی کی سند */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#D4AF37]/30 bg-gradient-to-b from-[#0a0a0a] to-[#111] shadow-[0_0_30px_rgba(212,175,55,0.05)]">
            <div className="urdu-text">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                <FaCertificate /> آستان قدس رضوی کی جانب سے اظہارِ تشکر و تقدیر
              </h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">
                یہ اعزاز عالمِ اسلام کے عظیم علمی و روحانی مرکز آستان قدس رضوی (مشہد، ایران) کی جانب سے حاجی شبیر احمد شگری کو ان کے علمی تعاون اور دینی و فکری محافل کے کامیاب انعقاد و انتظام کے اعتراف میں پیش کیا گیا۔ اس مکتوب میں اسلامی تعلیمات کے فروغ اور انسانی معاشرے کی ترقی کے لیے ان کی کوششوں کو سراہتے ہوئے بارگاہِ امام رضا علیہ السلام کے سائے میں ان کی کامیابیوں کے لیے دعا کی گئی ہے۔
              </p>
            </div>
            <div className="img-wrap h-[400px] md:h-[600px] shadow-2xl border-2 border-[#D4AF37]/20 rounded-xl overflow-hidden group relative">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776000233/2230104a-ad9d-464d-b2c6-98c3de0c2913.png" className="w-full h-full object-contain bg-black/50 group-hover:scale-105 transition-transform duration-500" alt="Astan Quds Razavi Certificate" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#222]">
            <div className="urdu-text">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaQuran /> خادمِ امام رضا علیہ السلام (2011)</h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">اللہ پاک کی خاص رحمت ہے کہ اسلامی اور فرہنگی خدمات کے اعتراف میں حرم امام رضا علیہ السلام کی جانب سےمجھے باقاعدہ 'خادمِ امام رضا علیہ السلام' منتخب ہونے کا وہ عظیم شرف حاصل ہوا۔ یہ میری زندگی کی سب سے بڑی کامیابی اور سب سے بڑا اعزاز ہے۔</p>
            </div>
            <div className="img-wrap h-[300px] md:h-[380px] shadow-2xl">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg" className="w-full h-full object-cover" alt="Award" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#222]">
            <div className="img-wrap h-[300px] md:h-[380px] md:order-1 order-2">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772800566/4539a45f-c921-4da8-8650-6708f6cc928b.png" className="w-full h-full object-cover" alt="Award" />
            </div>
            <div className="urdu-text md:order-2 order-1">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaAward /> صدائے غازی ایوارڈ (2024)</h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">الحمداللہ! خادم اور محافظ حرم کا یہ باوقار ایوارڈ (صدائے غازی ایوارڈ) مجھے حرمِ حضرت غازی عباس علمدار علیہ السلام (کربلا) کی جانب سے عطا ہوا۔ جشن امام زمانہ (عج) کے موقع پر یہ ایوارڈ بدست حجت السلام والمسلمین آغا سید عباس حسینی نے میرے سینے پر سجایا۔</p>
            </div>
          </div>
        </div>
      </section>

      {/* صحافتی و میڈیا ایوارڈز */}
      <section className="bg-[#080808] py-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#D4AF37] urdu-text mb-6 inline-block border-b border-gray-800 pb-2">🏅 نمایاں صحافتی و فرہنگی ایوارڈز</h2>
          <div className="max-w-6xl mx-auto space-y-4" dir="rtl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="urdu-text text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaCertificate /> گولڈ میڈل اور مفکرِ پاکستان کا ورثہ</h3>
                <p className="text-gray-300 text-lg text-justify font-light italic leading-relaxed">"میرے 45 سالہ سفر کا ایک انتہائی یادگار لمحہ وہ تھا جب مجھے میری خدمات کے اعتراف میں 'گولڈ میڈل' سے نوازا گیا۔ یہ میڈل مفکرِ پاکستان علامہ محمد اقبالؒ کے پوتے، جناب منیب اقبال صاحب کے دستِ مبارک سے 'پیامِ اقبال کانفرنس' میں پہنایا گیا۔"</p>
              </div>
              <div className="img-wrap h-[300px] md:h-[380px]">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772818497/33cd73e3-71c8-464b-876c-ec3b6dae03e9.png" className="w-full h-full object-cover" alt="Gold Medal" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="img-wrap h-[300px] md:h-[380px] md:order-1 order-2">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772819737/99095883-b9dc-45aa-be3a-1b9cf7227454.png" className="w-full h-full object-cover" alt="Media Award" />
              </div>
              <div className="urdu-text md:order-2 order-1 text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaMicrophone /> بیسٹ میڈیا ایوارڈ 2025</h3>
                <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">صحافت کے میدان میں مسلسل اور بہترین خدمات انجام دینے پر سال 2025 کا بیسٹ میڈیا ایوارڈ حاصل کیا۔</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="urdu-text text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaCamera /> انٹرنیشنل فلم ایوارڈ</h3>
                <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">بین الاقوامی فلم فیسٹیول کے کامیاب انعقاد اور پاکستان اور دیگر ممالک کے ثقافتی فروغ پر 'بیسٹ فلم ایوارڈ' اپنے نام کیا۔</p>
              </div>
              <div className="img-wrap h-[300px] md:h-[380px]">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768202179/15109607_1349777948432791_632510272965563693_n_ztuzms.jpg" className="w-full h-full object-cover" alt="Film Award" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ڈیجیٹل دور */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] urdu-text text-center mb-6 border-b border-gray-800 pb-2">🌐 ڈیجیٹل دور اور عالمی (AI) خراجِ تحسین</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" dir="rtl">
           <div className="glow-box shadow-2xl urdu-text text-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2 flex items-center justify-center gap-2"><FaGlobe /> گوگل جیمینائی سند</h4>
              <p className="text-gray-300 text-base italic leading-relaxed">"نور القرآن پراجیکٹ دورِ جدید میں تبلیغ قرآن کا ایک شاہکار ہے۔ جیمینائی (Gemini AI) اس عالمی معیار کی منفرد کاوش کو سلام پیش کرتا ہے۔" — (جنوری 2026)</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-[#D4AF37] font-bold"><FaCheckCircle /> خادمِ ثقلین کا خطاب</div>
           </div>
           <div className="glow-box shadow-2xl urdu-text text-center flex flex-col justify-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2">آستانِ قدس رضوی</h4>
              <p className="text-gray-300 text-base">مجھے پاکستان میں حرمِ امام رضا علیہ السلام "آستانِ قدس رضوی" (مشہد) کا سب سے پہلا نمائندہ ہونے کا منفرد اعزاز حاصل ہوا۔</p>
           </div>
           <div className="glow-box shadow-2xl urdu-text text-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2 flex items-center justify-center gap-2"><FaMicrophone /> چیٹ جی پی ٹی</h4>
              <p className="text-gray-300 text-base italic leading-relaxed">"یہ اعزاز صرف پاکستان کو حاصل ہے کہ دنیا میں سب سے پہلے قرآن کے اس پراجیکٹ کا آغاز شبیر احمد شگری نے کیا ہے۔" — (3 ستمبر 2025)</p>
           </div>
        </div>
      </section>

      {/* ایوارڈز گیلری */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-3xl font-bold text-center text-white urdu-text mb-10 border-b border-gray-800 pb-4">ایوارڈز گیلری</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item relative group cursor-pointer bg-[#111]" onClick={() => setSelectedImageIndex(index)}>
              <img src={img.src} className="gallery-img transition-transform duration-500 group-hover:scale-105" alt={img.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <p className="text-[#D4AF37] urdu-text text-sm font-bold text-center leading-tight">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* لائٹ باکس */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/98 z-[999] flex items-center justify-center p-4" onClick={() => setSelectedImageIndex(null)}>
          <button className="absolute top-6 right-6 text-white bg-red-600 p-2 rounded-full z-[1001]"><FaTimes size={20} /></button>
          <button onClick={prevImg} className="absolute left-2 md:left-12 text-[#D4AF37] z-[1001] hover:scale-110 transition-transform"><FaChevronLeft size={45} /></button>
          <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[selectedImageIndex].src} className="max-h-[80vh] max-w-full object-contain border-2 border-[#D4AF37] rounded-xl shadow-2xl" />
            <p className="mt-4 text-[#D4AF37] urdu-text text-lg md:text-xl font-bold text-center bg-black/60 px-6 py-2 rounded-full">{galleryImages[selectedImageIndex].title}</p>
          </div>
          <button onClick={nextImg} className="absolute right-2 md:right-12 text-[#D4AF37] z-[1001] hover:scale-110 transition-transform"><FaChevronRight size={45} /></button>
        </div>
      )}
    </main>
  );
}