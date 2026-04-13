"use client";
import React, { useState } from 'react';
import {
  FaAward, FaQuran, FaCamera, FaMicrophone, FaStar, FaCertificate,
  FaTimes, FaChevronLeft, FaChevronRight, FaGlobe, FaCheckCircle
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import { galleryImages } from './data-fa';

export default function AwardsPortfolioFinal() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const nextImg = (e) => { e.stopPropagation(); setSelectedImageIndex((i) => (i + 1) % galleryImages.length); };
  const prevImg = (e) => { e.stopPropagation(); setSelectedImageIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length); };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#ffd700] selection:text-black" dir="rtl">
      <Navbar />
      <HeroSlider />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&family=Amiri:wght@400;700&display=swap');
        .urdu-text { font-family: 'Noto Nastaliq Urdu', serif; line-height: 2.2; }
        .persian-text { font-family: 'Amiri', serif; line-height: 2.0; }

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

        .award-card { position: relative; transition: all 0.5s ease; border: 1px solid #222; background: #0a0a0a; border-radius: 40px; margin-bottom: 1.5rem; min-width: 0; overflow: hidden; }
        .img-wrap { display: block; position: relative; width: 100%; max-width: 420px; margin-inline: auto; border-radius: 20px; overflow: hidden; border: 2px solid #222; aspect-ratio: 16 / 10; min-height: 180px; }
        .img-wrap img { display: block; width: 100%; height: 100%; }
        .gallery-item { position: relative; aspect-ratio: 16 / 10; width: 100%; overflow: hidden; border-radius: 20px; border: 1px solid #333; }
        .gallery-img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .glow-box { border: 1px solid #333; background: #0c0c0c; border-radius: 25px; padding: 20px; }
      `}</style>

      {/* ہیڈر سیکشن */}
      <section className="pt-6 pb-4 text-center">
         <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-[#D4AF37] persian-text mb-2">افتخارات و دستاوردهای زندگی</h1>
            <p className="text-gray-400 max-w-3xl mx-auto persian-text text-base md:text-lg italic leading-relaxed">
               "جوایز دنیوی جایگاه خود را دارند، اما آرامش روح من در این افتخارات عظیم روحانی نهفته است که به این ناچیز عطا شده است."
            </p>
         </div>
      </section>

      {/* 🏅 عظیم روحانی اعزازات کا بار (تازہ ترین GIF لنکس کے ساتھ) */}
      <section className="container mx-auto px-4 py-2">
        <div className="flex flex-row items-center justify-center gap-2 md:gap-8 mb-6 border-b border-gray-800 pb-6">

          {/* بٹن 1: خادم امام رضاؑ */}
          <Link href="/fa/imam-reza" className="animate-shine group relative inline-flex items-center pr-1 pl-3 md:pl-4 gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-1.5 rounded-full shadow-lg hover:scale-105 transition-all shrink-0 w-[145px] md:w-[260px]">
            <div className="h-9 w-9 md:h-12 md:w-12 rounded-full border-2 border-white overflow-hidden animate-ripple bg-white shrink-0">
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" className="w-full h-full object-cover rounded-full" alt="imam-reza" />
            </div>
            <div className="flex-1 text-center"><span className="block text-xs md:text-xl font-extrabold persian-text leading-none whitespace-nowrap">خادم امام رضا</span></div>
          </Link>

          <h2 className="text-xs md:text-2xl font-bold text-[#D4AF37] persian-text whitespace-nowrap px-1">✨ افتخارات و مناصب روحانی عظیم</h2>

          {/* بٹن 2: خادم غازی عباسؑ */}
          <Link href="/fa/ghazi-abbas" className="animate-shine group relative inline-flex items-center flex-row-reverse pl-1 pr-3 md:pr-4 gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-1.5 rounded-full shadow-lg hover:scale-105 transition-all shrink-0 w-[145px] md:w-[260px]">
            <div className="h-9 w-9 md:h-12 md:w-12 rounded-full border-2 border-white overflow-hidden animate-ripple bg-white shrink-0">
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771683490/Giff_for_saday_e_ghazi_page_aaugws.gif" className="w-full h-full object-cover rounded-full" alt="ghazi-abbas" />
            </div>
            <div className="flex-1 text-center"><span className="block text-xs md:text-xl font-extrabold persian-text leading-none whitespace-nowrap">خادم غازی عباس</span></div>
          </Link>
        </div>

        {/* باقی تمام کارڈز اور تحریریں جوں کی توں موجود ہیں */}
        <div className="max-w-6xl mx-auto space-y-8" dir="rtl">
          
          {/* International Recognition Section */}
          <div className="text-center mb-10 pt-10 border-t-2 border-[#D4AF37]/20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] tracking-wider">قدردانی بین‌المللی</h2>
            <p className="text-[#D4AF37]/80 text-xl mt-2 font-light">International Recognition</p>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"></div>
          </div>

          {/* هدیه یادبود اختصاصی (New Entry) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#D4AF37]/30 bg-gradient-to-b from-[#0a0a0a] to-[#111] shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <div className="persian-text text-right">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3 leading-snug">
                <FaAward className="shrink-0" /> لوح تقدیر و هدیه یادبود اختصاصی
              </h3>
              <div className="space-y-4 text-gray-300 text-lg text-justify font-light leading-relaxed">
                <p>
                  هدیه یادبود و نشانی از سوی جناب آقای سید محمد علی حسینی، سفیر جمهوری اسلامی ایران در پاکستان، که به پاس عملکرد درخشان و خدمات علمی جناب آقای شبیر احمد شگری به ایشان تقدیم شده است. این اثر نفیس نمادی از قدردانی نسبت به تلاش‌های پژوهشی و نقش ارزنده ایشان در تقویت پیوندهای فرهنگی است.
                </p>
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <p className="text-[#D4AF37] font-bold text-base md:text-lg">سفیر جمهوری اسلامی ایران در پاکستان</p>
                </div>
              </div>
            </div>
            <div className="img-wrap h-[350px] md:h-[550px] shadow-2xl border-2 border-[#D4AF37]/20 rounded-xl overflow-hidden group relative">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776029658/iranian_safeer_gift.2png_slqrkw.png" className="w-full h-full object-contain bg-black/50 group-hover:scale-105 transition-transform duration-500" alt="Special Commemorative Award from Iranian Ambassador" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>

          {/* نامه سفیر (Updated Entry) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#D4AF37]/30 bg-gradient-to-b from-[#0a0a0a] to-[#111] shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <div className="persian-text text-right">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3 leading-snug">
                <FaCertificate className="animate-pulse shrink-0" /> تجلیلِ شایانِ تقدیرِ سفیرِ جمہوری اسلامی ایران در پاکستان از جناب آقای حاجی شبیر احمد شگری
              </h3>
              <div className="space-y-4 text-gray-300 text-lg text-justify font-light leading-relaxed">
                <p>
                  در این نامہ رسمی، سفیر محترم ایران از تلاش‌ ہای ارزشمند و گرانقدر جناب آقای حاجی شبیر احمد شگری در راستای جلوگیری از فراموشیِ آرمان‌ ہای اصیل اسلامی و مسئلہ فلسطین، صمیمانہ قدردانی نمودند۔ ایشان خاطرنشان کردند کہ «جہادِ قلم» در حمایت از ملت مظلوم فلسطین و محکومیت رژیم غاصب صہیونیستی، نزد خداوند متعال دارای پاداشی ویژہ است و امید بہ آیندہ‌ ای روشن را در دل‌ ہای مستضعفان زندہ نگہ می‌ دارد۔
                </p>
                <p>
                  ہمچنین دعا و آرزو شد کہ با نصرت الہی و بہ واسطہ مجاہدت‌ ہای اندیشمندانی چون شما، در سایہ اتحاد و ہمدلی امت اسلامی، بہ زودی شاہد آزادی قبلہ اول مسلمانان، قدس شریف باشیم۔
                </p>
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <p className="text-[#D4AF37] font-bold">سید محمد علی حسینی</p>
                  <p className="text-sm">سفیر جمہوری اسلامی ایران در پاکستان</p>
                  <p className="text-xs opacity-60">۹ خرداد ۱۳۹۹ (۲۹ می ۲۰۲۰)</p>
                </div>
              </div>
            </div>
            <div className="img-wrap h-[350px] md:h-[550px] shadow-2xl border-2 border-[#D4AF37]/20 rounded-xl overflow-hidden group relative">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776027986/CamScanner_02-12-2022_14.42_99_rhufo2.jpg" className="w-full h-full object-contain bg-black/50 group-hover:scale-105 transition-transform duration-500" alt="Ambassador's Letter of Appreciation" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>

          {/* تقدیرنامه آستان قدس رضوی */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#D4AF37]/30 bg-gradient-to-b from-[#0a0a0a] to-[#111] shadow-[0_0_30px_rgba(212,175,55,0.05)]">
            <div className="persian-text text-right">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                <FaCertificate /> تقدیرنامه آستان قدس رضوی
              </h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">
                این لوح سپاس از سوی آستان قدس رضوی (مشهد مقدس) به پاس همکاری‌های علمی و برگزاری موفق و مدیریت محافل معنوی و فکری توسط جناب حاجی شبیر احمد شگری به ایشان اهدا شده است. در این مکتوب از تلاش‌های ایشان در راستای ترویج معارف اسلامی و ارزش‌های انسانی قدردانی شده و برای ایشان در پناه حضرت امام رضا (ع) آرزوی توفیق روزافزون گشته است.
              </p>
            </div>
            <div className="img-wrap h-[300px] md:h-[450px] shadow-2xl border-2 border-[#D4AF37]/20 rounded-xl overflow-hidden group relative">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1776068815/d7363b70-ea09-4604-949c-68c6dc2e2672.png" className="w-full h-full object-contain bg-black/50 group-hover:scale-105 transition-transform duration-500" alt="Astan Quds Razavi Certificate" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#D4AF37]/30 bg-gradient-to-b from-[#0a0a0a] to-[#111] shadow-[0_0_30px_rgba(212,175,55,0.08)]">
            <div className="persian-text text-right">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                <FaGlobe /> یک افتخار تاریخی و سفرِ یادگار
              </h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">
                به مناسبت بیست و ششمین سالگرد ارتحال حضرت امام خمینی (ره)، ریاست هیئت اعزامی پاکستان در سفر رسمی به ایران برای اینجانب افتخار و سعادت بزرگی بود. این کارت یادبودی از آن سفر پربار و دیدارهای دیپلماتیک و فرهنگی در سراسر ایران است.
              </p>
            </div>
            <div className="img-wrap h-[300px] md:h-[450px] shadow-2xl border-2 border-[#D4AF37]/20 rounded-xl overflow-hidden group relative">
              <img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776070812/d722682c-1c06-47f5-9192-9f174216a0d7.png" className="w-full h-full object-contain bg-black/50 group-hover:scale-105 transition-transform duration-500" alt="کارت یادبود سفر رسمی به ایران (بیست و ششمین سالگرد ارتحال امام خمینی)" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#222]">
            <div className="persian-text">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaQuran /> خادم امام رضا علیه‌السلام (2011)</h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">رحمت خاص الهی است که در اعتراف به خدمات اسلامی و فرهنگی، از سوی حرم امام رضا علیه‌السلام این شرف عظیم انتخاب شدن به عنوان "خادم امام رضا علیه‌السلام" به من عطا شد. این بزرگترین موفقیت زندگی من و بزرگترین افتخار است.</p>
            </div>
            <div className="img-wrap shadow-2xl">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg" className="w-full h-full object-cover" alt="Award" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#222]">
            <div className="img-wrap md:order-1 order-2">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772800566/4539a45f-c921-4da8-8650-6708f6cc928b.png" className="w-full h-full object-cover" alt="Award" />
            </div>
            <div className="persian-text md:order-2 order-1">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaAward /> جایزه صدای غازی (2024)</h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">الحمدالله! این جایزه باوقار خادم و محافظ حرم (جایزه صدای غازی) از سوی حرم حضرت غازی عباس علمدار علیه‌السلام (کربلا) به من عطا شد. این جایزه در جشن امام زمان (عج) توسط حجت‌الاسلام والمسلمین آقای سید عباس حسینی بر سینه من نصب شد.</p>
            </div>
          </div>
        </div>
      </section>

      {/* صحافتی و میڈیا ایوارڈز */}
      <section className="bg-[#080808] py-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#D4AF37] persian-text mb-6 inline-block border-b border-gray-800 pb-2">🏅 جوایز برجسته مطبوعاتی و فرهنگی</h2>
          <div className="max-w-6xl mx-auto space-y-4" dir="rtl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="persian-text text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaCertificate /> مدال طلا و میراث اندیش پاکستان</h3>
                <p className="text-gray-300 text-lg text-justify font-light italic leading-relaxed">"یکی از لحظات به‌یادماندنی سفر 45 ساله من این بود که به پاس خدماتم با 'مدال طلا' تقدیر شدم. این مدال توسط نوه اندیش پاکستان علامه محمد اقبال، جناب منیب اقبال در 'کنفرانس پیام اقبال' بر سینه من نصب شد."</p>
              </div>
              <div className="img-wrap">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772818497/33cd73e3-71c8-464b-876c-ec3b6dae03e9.png" className="w-full h-full object-cover" alt="Gold Medal" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="img-wrap md:order-1 order-2">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772819737/99095883-b9dc-45aa-be3a-1b9cf7227454.png" className="w-full h-full object-cover" alt="Media Award" />
              </div>
              <div className="persian-text md:order-2 order-1 text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaMicrophone /> جایزه بهترین رسانه 2025</h3>
                <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">به پاس خدمات مستمر و بهترین در حوزه خبرنگاری، جایزه بهترین رسانه سال 2025 را کسب کردم.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="persian-text text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaCamera /> جایزه فیلم بین‌المللی</h3>
                <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">به پاس برگزاری موفق جشنواره فیلم بین‌المللی و ترویج فرهنگی پاکستان و سایر کشورها، جایزه 'بهترین فیلم' را کسب کردم.</p>
              </div>
              <div className="img-wrap">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768202179/15109607_1349777948432791_632510272965563693_n_ztuzms.jpg" className="w-full h-full object-cover" alt="Film Award" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="persian-text text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3"><FaCertificate /> نمایشگاه بین‌المللی طیور (IPEX) ۲۰۱۵</h3>
                <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">گواهی‌نامه قدردانی و شرکت در نمایشگاه بین‌المللی طیور ۲۰۱۵ (IPEX) به پاس خدمات ارزنده. این لوح تقدیر نشان‌دهنده تعهد و حضور فعال اینجانب در عرصه‌های مختلف حرفه‌ای و توسعه فعالیت‌های اقتصادی و اجتماعی است.</p>
              </div>
              <div className="img-wrap">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776071942/5f527bd4-a2d5-4bda-9626-239d4581b809.png" className="w-full h-full object-contain bg-black/50" alt="IPEX 2015 Certificate" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ڈیجیٹل دور */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] persian-text text-center mb-6 border-b border-gray-800 pb-2">🌐 عصر دیجیتال و تقدیر جهانی (AI)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" dir="rtl">
           <div className="glow-box shadow-2xl persian-text text-center flex flex-col justify-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2 flex items-center justify-center gap-2"><FaGlobe /> گواهی گوگل جمینی</h4>
              <p className="text-gray-300 text-base leading-relaxed">"پروژه نور قرآن در عصر مدرن یک شاهکار تبلیغ قرآن است. جمینی (Gemini AI) به این کاوش منحصر به فرد در سطح جهانی سلام می‌گوید." — (ژانویه 2026)</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-[#D4AF37] font-bold"><FaCheckCircle /> عنوان خادم ثقلین</div>
           </div>
           <div className="glow-box shadow-2xl persian-text text-center flex flex-col justify-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2">آستان قدس رضوی</h4>
              <p className="text-gray-300 text-base">افتخار منحصر به فرد نمایندگی اولین حرم امام رضا علیه‌السلام "آستان قدس رضوی" (مشہد) در پاکستان به من عطا شد.</p>
           </div>
           <div className="glow-box shadow-2xl persian-text text-center flex flex-col justify-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2 flex items-center justify-center gap-2"><FaMicrophone /> چت جی‌پی‌ٹی</h4>
              <p className="text-gray-300 text-base leading-relaxed">"یہ افتخار تنها نصیب پاکستان شده که اولین آغاز یہ پروژه قرآنی در دنیا توسط شبیر احمد شگری انجام شده است." — (3 سپتامبر 2025)</p>
           </div>
        </div>
      </section>

      {/* ایوارڈز گیلری */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-3xl font-bold text-center text-white persian-text mb-10 border-b border-gray-800 pb-4">گالری جوایز</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item relative group cursor-pointer bg-[#111]" onClick={() => setSelectedImageIndex(index)}>
              <img src={img.src} className="gallery-img transition-transform duration-500 group-hover:scale-105" alt={img.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <p className="text-[#D4AF37] persian-text text-sm font-bold text-center leading-tight">{img.title}</p>
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
            <p className="mt-4 text-[#D4AF37] persian-text text-lg md:text-xl font-bold text-center bg-black/60 px-6 py-2 rounded-full">{galleryImages[selectedImageIndex].title}</p>
          </div>
          <button onClick={nextImg} className="absolute right-2 md:right-12 text-[#D4AF37] z-[1001] hover:scale-110 transition-transform"><FaChevronRight size={45} /></button>
        </div>
      )}
    </main>
  );
}
