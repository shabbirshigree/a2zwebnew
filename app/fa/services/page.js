"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Navbar, HeroSlider } from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaArrowLeft, FaExternalLinkAlt, FaStar, FaQuran, FaHeart, FaChild, FaShoppingBag, FaGlobeAmericas, FaNewspaper, FaMicrophoneAlt } from "react-icons/fa";

const SERVICES_DATA_FA = [
  {
    icon: <FaQuran />,
    title: "کلیپ قرآنی روزانه (نور القرآن)",
    link: "/project",
    desc: "در پروژه نور القرآن هر روز یک کلیپ یک دقیقه‌ای قرآن منتشر می‌شود که تلاوت منتخب آیات و تفسیر کوتاه و روان آن را در قالب تصویری ارائه می‌دهد.",
    socials: [
      { icon: <FaWhatsapp size={20} />, url: "https://wa.me/923334491715", color: "text-green-600" },
      { icon: <FaExternalLinkAlt size={18} />, url: "https://www.youtube.com/@noorullquraan", color: "text-red-600" },
    ],
  },
  {
    icon: <FaHeart />,
    title: "اصلاح نفس (پیام روزانه)",
    link: "https://heyzine.com/flip-book/efa19771fc.html",
    desc: "برای تربیت اخلاقی و تزکیه نفس، پیام‌های روزانه \"اصلاح نفس\" به اشتراک گذاشته می‌شود؛ این پیام‌ها برگرفته از تالیفات عرفانی و خلاصه‌ای از معارف اسلامی هستند.",
    socials: [
      { icon: <FaWhatsapp size={20} />, url: "https://wa.me/923334491715", color: "text-green-600" },
      { icon: <FaExternalLinkAlt size={18} />, url: "https://facebook.com/madrasanoorequran", color: "text-blue-600" },
    ],
  },
  {
    icon: <FaShoppingBag />,
    title: "رضوی آنلاین",
    link: "https://youtube.com/@rezavionline",
    desc: "مرکز محصولات اسلامی و فرهنگی که در آن تبرکات، کتب معتبر و اقلام فرهنگی با کیفیت فراهم می‌شود؛ محلی برای نیازهای دینی و معنوی شما.",
    socials: [
      { icon: <FaExternalLinkAlt size={18} />, url: "https://youtube.com/@rezavionline", color: "text-red-600" },
    ],
    isFeatured: true,
  },
  {
    icon: <FaChild />,
    title: "طفلان نور",
    link: "https://www.youtube.com/@TiflaneNoor",
    desc: "پروژه حفاظت اخلاقی کودکان؛ با انیمیشن و قصه‌های تربیتی، کودکان را با معارف قرآن و سبک زندگی اسلامی آشنا می‌کنیم.",
    socials: [
      { icon: <FaExternalLinkAlt size={18} />, url: "https://www.youtube.com/@TiflaneNoor", color: "text-red-600" },
    ],
  },
  {
    icon: <FaGlobeAmericas />,
    title: "زیارت و سیاحت",
    link: "/cultural",
    desc: "ارتقای گردشگری زیارتی و فرهنگی در ایران، عراق و شام با کاروان‌های مطمئن و خدمات کامل سفر برای زائران گرامی.",
    socials: [
      { icon: <FaWhatsapp size={20} />, url: "https://wa.me/923334491715", color: "text-green-600" },
    ],
  },
  {
    icon: <FaNewspaper />,
    title: "رسانه و روزنامه‌نگاری",
    link: "/article",
    desc: "با تجربه ۴۵ سال در رسانه، تحلیل سیاسی، نگارش مقاله و تولید مستند برای روشن کردن مسائل اجتماعی و بیان حقایق.",
    socials: [
      { icon: <FaExternalLinkAlt size={18} />, url: "https://www.youtube.com/@noorproduction", color: "text-red-600" },
    ],
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "تولیدات دینی",
    link: "https://www.youtube.com/@noorproduction",
    desc: "برگزاری نشست‌ها، سمینارها و برنامه‌های آموزشی آنلاین به همراه تولید ویدیوهای علمی، ادبی و مذهبی با کیفیت بالا.",
    socials: [
      { icon: <FaExternalLinkAlt size={18} />, url: "https://www.youtube.com/@noorproduction", color: "text-red-600" },
    ],
  },
];

export default function FarsiServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ServiceCard = ({ item }) => (
    <div className={`relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border-2 ${item.isFeatured ? 'border-[#D4AF37]' : 'border-transparent'} hover:border-[#D4AF37] group flex flex-col items-center text-center`}>
      {item.isFeatured && (
        <div className="absolute top-5 left-5 text-[#D4AF37] animate-pulse">
          <FaStar size={20} />
        </div>
      )}

      <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center text-5xl text-[#0b314d] mb-6 transform group-hover:-translate-y-4 group-hover:bg-[#0b314d] group-hover:text-[#D4AF37] transition-all duration-500 shadow-inner ring-8 ring-transparent group-hover:ring-[#D4AF37]/10">
        {item.icon}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-4 mb-4 transition-colors">{item.title}</h3>
      <p className="text-gray-600 mb-8 flex-grow leading-[2] text-base md:text-xl text-justify px-2">
        {item.desc}
      </p>

      <div className="w-full space-y-4">
        <Link href={item.link || '#'} className="w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 text-lg bg-[#0b314d] text-white hover:bg-[#D4AF37] hover:text-[#0b314d] shadow-lg group-hover:scale-[1.02]">
          {item.title === 'رضوی آنلاین' ? 'فروشگاه آنلاین' : 'اطلاعات بیشتر'}
          {item.isFeatured ? <FaExternalLinkAlt size={16} /> : <FaArrowLeft size={16} />}
        </Link>
        <div className="flex gap-6 justify-center py-2">
          {item.socials?.map((soc, idx) => (
            <a key={idx} href={soc.url} target="_blank" rel="noreferrer" className={`${soc.color} hover:scale-150 transition-transform duration-300 drop-shadow-md text-2xl`}>
              {soc.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fcfdfe] overflow-x-hidden" dir="rtl">
      <Navbar />
      <HeroSlider />

      <section className="bg-[#0b314d] py-20 md:py-28 text-center relative overflow-hidden border-b-8 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0b314d] to-transparent" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#D4AF37] mb-6">خدمات دینی، علمی و فرهنگی</h1>
          <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"></div>
          <p className="text-base md:text-2xl font-light italic opacity-90 max-w-3xl">
            "ما مسائل و منابع را هدف نگرفتیم، بلکه فقط خدمت و پیام را دنبال کردیم"
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES_DATA_FA.map((service, i) => (
            <ServiceCard key={i} item={service} />
          ))}
        </div>

        <div className="mt-24 md:mt-36 bg-white rounded-[3.5rem] p-10 md:p-20 shadow-2xl border border-gray-100 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37] rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-all duration-700"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#0b314d] leading-tight">
              در این مسیر خدمت به انسانیت
              <br />
              همراه ما باشید
            </h2>
            <p className="text-gray-500 mb-12 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed font-light">
              پیشنهادها، دعاها و مشارکت شما به تقویت رسالت ما کمک می‌کند. بیایید این نور را با هم گسترش دهیم.
            </p>
            <a
              href="https://wa.me/923334491715"
              target="_blank"
              rel="noreferrer"
              className="group bg-[#25D366] text-white px-8 md:px-16 py-3.5 rounded-full font-bold text-base md:text-xl transition-all inline-flex items-center justify-center gap-3 shadow-[0_12px_24px_rgba(37,211,102,0.25)] hover:shadow-[0_16px_32px_rgba(37,211,102,0.35)] hover:-translate-y-1"
            >
              <FaWhatsapp size={24} className="group-hover:rotate-12 transition-transform" /> ارتباط واتساپ
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
