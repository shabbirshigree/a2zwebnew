"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaPalette,
  FaPaintBrush,
  FaBook,
  FaFilm,
  FaHeadphones,
  FaShareAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImage,
  FaCheckCircle,
  FaGlobe,
  FaLandmark,
  FaMosque,
  FaTree,
  FaStar,
} from "react-icons/fa";
import { Navbar, HeroSlider } from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocale } from "../../components/LocaleProvider";

const khurasanBook = {
  id: "book-khurasan-fa",
  title: "خراسان رضوی",
  titleEn: "Khurasan Razavi",
  image:
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1772111272/65878faa-2f99-4af6-8216-ad9009adc747.png",
  badge: "طراحی و صفحه‌آرایی",
  descFa:
    "این یک کتاب تصویری زیبا و شاهکار است که به طور کامل توسط نگارنده طراحی و صفحه‌آرایی شده است. این کتاب اولین اثر ایرانی طراحی شده در پاکستان بود و پس از آن در ایران با بالاترین استانداردها منتشر شد.",
  descEn:
    "A magnificent pictorial book completely designed (Graphics & Layout) by the author. It was the first Iranian book designed in Pakistan, later published in Iran with the highest quality standards.",
  libraryUrl: "/fa/library#book-khorasan",
  videoUrl:
    "https://res.cloudinary.com/dtqrziupt/video/upload/v1769076063/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%9D_1_unp6gj.mp4",
  audioUrl:
    "https://res.cloudinary.com/dtqrziupt/video/upload/v1769076045/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%9D_1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%9A_ctn2j6.mp4",
};

const galleryImages = [
  { id: 1, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075728/FIL3526-Picsart-AiImageEnhancer_fclosx.jpg", title: "مدل سه‌بعدی مسجد نبوی" },
  { id: 2, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075727/FIL3513-Picsart-AiImageEnhancer_xlbvid.jpg", title: "جزئیات معماری مسجد نبوی" },
  { id: 3, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075724/FIL3514-Picsart-AiImageEnhancer_pizdrd.jpg", title: "ساخت و طراحی مسجد نبوی" },
  { id: 4, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075722/FIL3501-Picsart-AiImageEnhancer_muujyx.jpg", title: "نصب‌تعادل مسجد نبوی در رویداد" },
  { id: 5, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075722/FIL3500-Picsart-AiImageEnhancer_txdisi.jpg", title: "مدل مسجد نبوی در نمایشگاه" },
  { id: 6, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772075727/FIL3502-Picsart-AiImageEnhancer_mj5f8w.jpg", title: "جشن‌واره مسجد نبوی" },

  { id: 7, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076123/FIL3491-Picsart-AiImageEnhancer_x9kyyy.jpg", title: "درخت نورانی اهل‌البیت" },

  { id: 8, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076275/FIL3515-Picsart-AiImageEnhancer_l5crkz.jpg", title: "نقاشی خطاطی روغنی" },
  { id: 9, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076279/FIL3496-Picsart-AiImageEnhancer_mkhz93.jpg", title: "اثر هنری خطاطی" },
  { id: 10, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076276/FIL3504-Picsart-AiImageEnhancer_swyypy.jpg", title: "نصب‌تعادل ریختگی بر روی سن" },
  { id: 11, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076280/FIL3511-Picsart-AiImageEnhancer_xadkvu.jpg", title: "لحظه‌‌ای از رویداد فرهنگی" },

  { id: 12, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076595/FIL3490_hwleco.jpg", title: "ماکت روضه امام علی" },
  { id: 13, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076595/FIL3493_tdsqer.jpg", title: "جزئیات ماکت روضه‌ی مطهره" },
  { id: 14, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076596/FIL3489_z7y1fu.jpg", title: "مدل معماری روضه امام علی" },
  { id: 15, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076594/FIL3518_trass8.jpg", title: "نمایش روضه امام علی" },

  { id: 16, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3527_oaz56i.jpg", title: "نوار رستم - نصب‌تعادل مکانیکی" },
  { id: 17, src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1772076948/FIL3510_xgre7z.jpg", title: "شاهکار صنعتی نوار رستم" },
  { id: 18, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076947/FIL3498_fn6mic.jpg", title: "طراحی و مراحل ساخت" },
  { id: 19, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3499_hamxq0.jpg", title: "نمایش هنری نوار رستم" },
  { id: 20, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3528_ptwcws.jpg", title: "هنرمند با اثر خود" },

  { id: 21, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077437/FIL3550_n9odsm.jpg", title: "بنر الحمرا - 100 متری نقاشی دستی" },
  { id: 22, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077439/FIL3542_nh6fu8.jpg", title: "منظر میدان آزادی تهران" },

  { id: 23, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077857/FIL3609_hpkrkd.jpg", title: "مدل قرآنی سه‌بعدی" },

  { id: 24, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077767/FIL3519_auclv8.jpg", title: "نصب‌تعادل ترموفوم اهل‌البیت" },
  { id: 25, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077755/FIL3610_cnczkz.jpg", title: "نمایشگاه آئمه‌ی طاهرین" },
  { id: 26, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772077745/FIL3608_jeycmp.jpg", title: "اثر معماری ترموفوم" }
];

export default function FarsiDesignPage() {
  const { setLocale } = useLocale();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    setLocale("fa");
  }, [setLocale]);

  const handlePlayVideo = (url) => {
    setVideoUrl(url);
    setVideoModalOpen(true);
  };

  const handleShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      navigator.share({ title: khurasanBook.title, url }).catch(() => { });
    } else {
      navigator.clipboard.writeText(url);
      alert("لینک کپی شد");
    }
  };

  const openImage = (index) => setSelectedImageIndex(index);
  const closeImage = () => setSelectedImageIndex(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
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
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans" dir="rtl">
      <Navbar />
      <HeroSlider />

      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1005] via-[#050505] to-[#000000] py-16 md:py-24 text-center relative border-b border-[#D4AF37]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-6 text-[#D4AF37] opacity-80 animate-bounce">
            <FaPalette size={50} />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] tracking-wide mb-4">
            هنر و طراحی
          </h1>
          <h2 className="text-base md:text-xl text-white/80 tracking-widest mb-6">
            سفری از خلاقیت تا اجرا
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
          <p className="text-base md:text-xl text-[#fff7cc] font-light max-w-3xl mx-auto leading-relaxed italic">
            در این صفحه، برخی از کارهای طراحی گرافیک، هنر و پروژه‌های چاپی رسمی به زبان فارسی نمایش داده شده است.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-[#111] p-8 md:p-12 rounded-[2rem] border-l-8 border-[#D4AF37] shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/80 transition-all">
            <div className="absolute -top-10 -left-10 text-gray-800 opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <FaPaintBrush size={150} />
            </div>
            <div className="relative z-10 text-right" dir="rtl">
              <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">از هنر کودکانه تا حرفه‌ای</h3>
              <p className="text-gray-300 leading-relaxed text-lg text-justify" dir="rtl">
                طراحی برای من مثل نفس کشیدن است. از نقاشی‌های دوران مدرسه تا چاپ بنرهای رسمی، هر پروژه شامل ترکیب فرهنگ، دین و زیبایی‌شناسی بوده است.
              </p>
            </div>
          </div>

          <div className="text-right" dir="rtl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b border-gray-800 pb-4 inline-block">پروژه‌های برجسته طراحی</h2>
            <p className="text-gray-300 leading-[2.2] text-lg text-justify mb-6" dir="rtl">
              در این بخش چند نمونه درخشان از کارهای طراحی گرافیک و پروژه‌های چاپی نمایش داده می‌شود؛ از کتاب‌های تصویری تا بنرهای شهری و مدل‌های سه‌بعدی.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center justify-end gap-3"><span className="text-white">طراحی جلد کتاب و صفحه‌آرایی</span> <FaBook className="text-[#D4AF37]" /></li>
              <li className="flex items-center justify-end gap-3"><span className="text-white">طرح بنرها و پوسترهای مذهبی</span> <FaCheckCircle className="text-[#D4AF37]" /></li>
              <li className="flex items-center justify-end gap-3"><span className="text-white">مدل‌های سه‌بعدی و ساخت ماکت</span> <FaImage className="text-[#D4AF37]" /></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#111] py-16 md:py-24 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-6">کتاب خراسان رضوی</h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed">
              این کتاب نمونه‌ای از کار طراحی و صفحه‌آرایی گسترده است که ارتباط بین هنر ایرانی و چاپ حرفه‌ای را نشان می‌دهد.
            </p>
          </div>

          <div className="mb-16 flex flex-col lg:flex-row gap-8 bg-[#050505] border border-gray-800 rounded-[2.5rem] p-6 md:p-10 shadow-2xl transition-all duration-500 group relative overflow-hidden max-w-6xl mx-auto">
            <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6 relative z-10">
              <img src={khurasanBook.image} alt={khurasanBook.title} className="w-full rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-gray-800 object-cover" />

              <div className="flex flex-col gap-3">
                <Link href={khurasanBook.libraryUrl} className="py-3 px-4 rounded-2xl text-sm font-bold bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition inline-flex items-center justify-center gap-2">
                  <FaBook className="ml-2 inline" /> کتاب را بخوانید
                </Link>
                <button onClick={() => handlePlayVideo(khurasanBook.videoUrl)} className="py-3 px-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-red-700 to-red-900 text-white hover:opacity-90 transition inline-flex items-center justify-center gap-2">
                  <FaFilm className="ml-2 inline" /> تماشای تفسیر ویدیو
                </button>
                <button onClick={() => handlePlayVideo(khurasanBook.audioUrl)} className="py-3 px-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-black hover:opacity-90 transition inline-flex items-center justify-center gap-2">
                  <FaHeadphones className="ml-2 inline" /> گوش دهید به پادکست
                </button>
                <button onClick={() => handleShare()} className="py-3 px-4 rounded-2xl text-sm font-bold bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition inline-flex items-center justify-center gap-2">
                  <FaShareAlt className="ml-2 inline" /> اشتراک گذاری
                </button>
              </div>
            </div>

            <div className="flex-1 relative z-10 text-right">
              <span className="inline-block bg-[#111] text-[#D4AF37] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30 mb-4">
                {khurasanBook.badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">{khurasanBook.title}</h3>
              <p className="text-gray-300 text-base md:text-lg leading-[2.2] text-justify font-light">
                {khurasanBook.descFa}
              </p>
            </div>
          </div>

          <div className="text-center mb-12 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">پروژه‌های طراحی برجسته</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">نمونه‌ای از دستاوردهای 25 سال طراحی و نقاشی برای نهادهای فرهنگی، مؤسسات مذهبی و جشنواره‌های بین‌المللی در ایران و پاکستان.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16" dir="rtl">
            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaGlobe size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-right">مجلہ فارسی "شاخِ نبات"</h3>
              <p className="text-gray-300 leading-relaxed text-right">طراحی و صفحه‌آرایی کامل برای معروف‌ترین مجلهٔ فرهنگی ایران که شامل شاعری، فلسفه و هنر ایرانی است. ایجاد هویت بصری الهام‌گر و هماهنگ با سطح بین‌المللی.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaLandmark size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-right">دیوار الحمرا 100 فٹی</h3>
              <p className="text-gray-300 leading-relaxed text-right">نقاشی دستی تاریخی بر روی دیوار بزرگ الحمرا لاهور برای جشن انقلاب اسلامی ایران. بازنمایی دقیق میدان آزادی تهران با نمادهای انقلاب و نشان رفع سلاح چندین کیلومتری.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaMosque size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-right">مدل‌های معماری مقدس</h3>
              <p className="text-gray-300 leading-relaxed text-right">ساخت مدل‌های ترموفوم بزرگ‌مقیاس از مسجد النبی و روضهٔ امام علی علیه‌السلام برای مراسم فرهنگی و مذهبی. ترکیب احترام، فن و تفاصیل معماری دقیق.</p>
            </div>

            <div onClick={() => openImageByTitle('نوار رستم')} role="button" tabIndex={0} className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaFilm size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-right">مجسمهٔ نوار رستم</h3>
              <p className="text-gray-300 leading-relaxed text-right">خلق یک مجسمهٔ مکانیکی دیوهیکل کاسٹ VHS با چرخش‌های واقعی و روشنایی متحرک. ایرانیان این اثر را "نوار رستم" نام دادند، نمادی از بزرگی و اهمیت در فرهنگ ایرانی.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaTree size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-right">درخت نورانی اهل‌البیت</h3>
              <p className="text-gray-300 leading-relaxed text-right">ایجاد نصب تعادل روحانی با داشتن نام‌ها و القاب ائمه معصومین بر برگ‌های روشنایی‌دار. سیستم روشنایی ترتیبی جو معنوی و اثر الهی‌الهام‌گر ایجاد می‌کند.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaStar size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-right">صنعتگری فوق‌العاده</h3>
              <p className="text-gray-300 leading-relaxed text-right">هر پروژه ترکیبی از تکنیک‌های هنری سنتی و فناوری نوین است. نتیجه آن نصب تعادل و انتشارات‌شامل معنویت، تعلیم و احترام به میراث فرهنگی و روحانی.</p>
            </div>
          </div>

          <div className="text-center mb-10 mt-8">
            <span className="inline-block bg-[#D4AF37] text-black px-5 py-2 rounded-full font-bold uppercase tracking-[0.15em] text-sm mb-4">گالری بصری</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white">آرشیو نمایشی طراحی</h3>
            <p className="text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">مجموعهٔ فراگیر از پروژه‌های طراحی برجسته و نصب تعادل‌هایی که بیش از 25 سال برای نهادهای فرهنگی، نمایشگاه‌ها و کمپین‌های رسانه‌ای در ایران و پاکستان ایجاد شده‌اند.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
            {galleryImages.map((item) => (
              <div key={item.id} className="rounded-[2rem] overflow-hidden border border-[#222] shadow-2xl bg-[#111] transition hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer hover:border-[#D4AF37]/50"
                onClick={() => openImage(item.id - 1)}>
                <img src={item.src} alt={item.title} className="h-56 w-full object-cover transition-transform hover:scale-105" />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2 text-right">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setVideoModalOpen(false)} className="absolute top-4 right-4 z-20 text-white bg-red-600 rounded-full p-3 shadow-lg"><FaTimes size={18} /></button>
            <video src={videoUrl} controls autoPlay className="w-full h-full max-h-[80vh] object-contain bg-black p-4" />
          </div>
        </div>
      )}

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4" onClick={closeImage}>
          <button onClick={closeImage} className="absolute top-4 right-4 z-20 text-white bg-[#111] rounded-full p-3 shadow-lg"><FaTimes size={18} /></button>
          <button onClick={prevImage} className="absolute left-4 text-[#D4AF37] z-20 hover:scale-110 transition"><FaChevronLeft size={40} /></button>
          <div className="relative max-w-5xl w-full">
            <img src={galleryImages[selectedImageIndex].src} alt={galleryImages[selectedImageIndex].title} className="w-full h-[70vh] object-contain rounded-3xl shadow-2xl" />
            <p className="mt-4 text-center text-[#D4AF37] text-lg font-bold">{galleryImages[selectedImageIndex].title}</p>
          </div>
          <button onClick={nextImage} className="absolute right-4 text-[#D4AF37] z-20 hover:scale-110 transition"><FaChevronRight size={40} /></button>
        </div>
      )}
    </main>
  );
}
