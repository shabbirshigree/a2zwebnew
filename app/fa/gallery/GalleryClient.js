"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaSearch, FaPlay, FaChevronLeft, FaChevronRight, FaVideo, FaShareAlt } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocale } from '../../components/LocaleProvider';
import { GALLERY_ITEMS, CATEGORIES } from '../../gallery/galleryData';

const CATEGORY_LABELS = {
  all: "همه",
  reza: "خادم امام رضا",
  abbas: "خادم حضرت عباس",
  "pak-iran": "دوستی ایران و پاکستان",
  awards: "جوایز",
  diplomacy: "روابط دیپلماتیک",
  culture: "فرهنگ",
  media: "رسانه",
  meetings: "ملاقات‌ها",
  places: "زیارت‌ها",
  unity: "اتحاد اسلامی",
  video: "ویدیوها",
};

const TAG_TRANSLATIONS = {
  ویڈیو: "ویدیو",
  یوٹیوب: "یوتیوب",
  "خادمِ رضا": "خادم امام رضا",
  "خادمِ عباس": "خادم حضرت عباس",
  دوستی: "دوستی",
  اعزاز: "افتخار",
  سفارت: "دیپلماسی",
  ثقافت: "فرهنگ",
  میڈیا: "رسانه",
  ملاقات: "دیدار",
  زیارت: "زیارت",
  سفر: "سفر",
  اتحاد: "اتحاد",
};

const DESC_TRANSLATIONS = {
  "قونصل جنرل ایران کی الوداعی ملاقات۔": "دیدار خداحافظی با کنسول عمومی ایران.",
  "محافظ حرم حضرت عباسؑ ہونے کا اعزاز۔": "افتخار محافظت از حرم حضرت عباس علیه‌السلام.",
  "مشہد مقدس میں حاضری۔": "زیارت مشهد مقدس.",
  "حرم مطہر میں خدمت۔": "خدمت در حرم مطهر.",
  "آستان قدس رضوی۔": "آستان قدس رضوی.",
  "خدمت کا شرف۔": "افتخار خدمت.",
  "خادم حرم۔": "خادم حرم.",
  "مشہد یادگار۔": "یادگار مشهد.",
  "صحن حرم۔": "صحن حرم.",
  "اعزاز۔": "افتخار.",
  "زیارت۔": "زیارت.",
  "خادم حرم حضرت عباسؑ۔": "خادم حرم حضرت عباس علیه‌السلام.",
  "کربلا معلیٰ۔": "کربلا معلی.",
  "حرم کا اندرونی منظر۔": "نمای داخلی حرم.",
  "ڈیوٹی کے دوران۔": "در حین انجام خدمت.",
  "ضریح مبارک۔": "ضریح مبارک.",
  "علمدارؑ کا در۔": "درگاه علمدار علیه‌السلام.",
  "کربلا حاضری۔": "حضور در کربلا.",
  "پاک ایران دوستی۔": "دوستی ایران و پاکستان.",
  "دوستی تقریب۔": "مراسم دوستی.",
  "وفد کے ساتھ۔": "با اعضای هیئت.",
  "یادگار لمحہ۔": "لحظه ماندگار.",
  "ملاقات۔": "دیدار.",
  "گروپ فوٹو۔": "عکس گروهی.",
  "سیمینار۔": "سمینار.",
  "تقریب۔": "مراسم.",
  "کانفرنس۔": "کنفرانس.",
  "شرکاء۔": "شرکت‌کنندگان.",
  "دوستی۔": "دوستی.",
  "زندہ باد۔": "زنده باد.",
  "مشترکہ تجارتی نمائش۔": "نمایشگاه تجاری مشترک.",
  "بیسٹ میڈیا ایوارڈ 2025۔": "بهترین جایزه رسانه ۲۰۲۵.",
  "غلاف کعبہ ٹوپی کا تحفہ۔": "هدیه کلاه با جلد کعبه.",
  "ایوارڈ وصولی۔": "دریافت جایزه.",
  "اعزازات۔": "افتخارات.",
  "دستار بندی۔": "دستار بندی.",
  "خصوصی اعزاز۔": "افتخار ویژه.",
  "ثقافتی قونصلر کے ساتھ۔": "با رایزن فرهنگی.",
  "سفیر ایران سے ملاقات۔": "دیدار با سفیر ایران.",
  "سفارت خانہ۔": "سفارتخانه.",
  "تحفہ وصولی۔": "دریافت هدیه.",
  "قونصلیٹ۔": "کنسولگری.",
  "میٹنگ۔": "جلسه.",
  "سفارتی امور۔": "امور دیپلماتیک.",
  "رائزن فرہنگی۔": "رایزن فرهنگی.",
  "قونصل جنرل۔": "کنسول عمومی.",
  "وفد۔": "هیئت.",
  "پبلک ریلیشنز آفیسر۔": "افسر روابط عمومی.",
  "پی آر او (لاہور)۔": "PRO (لاهور).",
  "ثقافتی نمائش۔": "نمایشگاه فرهنگی.",
  "کلچرل ہال۔": "سالن فرهنگی.",
  "پروگرام آرگنائزر۔": "مجری برنامه.",
  "ایرانی آرٹ۔": "هنر ایرانی.",
  "گروپ فوٹو۔": "عکس گروهی.",
  "PRO Services": "خدمات PRO.",
  "ریڈیو پاکستان (FM 93)۔": "رادیو پاکستان (FM 93).",
  "ٹی وی ٹاک شو۔": "برنامه گفتگو تلویزیونی.",
  "میڈیا ڈسکشن۔": "بحث رسانه‌ای.",
  "لائیو پروگرام۔": "پروگرام زنده.",
  "اسٹوڈیو۔": "استودیو.",
  "گفتگو۔": "گفتگو.",
  "ریکارڈنگ۔": "ضبط.",
  "پروگرام۔": "برنامه.",
  "میزبانی۔": "مجریگری.",
  "چینل۔": "کانال.",
  "وزیر بیت المال۔": "وزیر بیت المال.",
  "سیکرٹری اوقاف۔": "دبیر اوقاف.",
  "حسن عسکری۔": "حسن عسکری.",
  "منظور وٹو۔": "منظور وٹو.",
  "سابق وزیر تعلیم۔": "وزیر سابق آموزش.",
  "محسن نجفی مزار۔": "مزار محسن نجفی.",
  "اسپیکر جی بی۔": "سخنگوی GB.",
  "حج بیت اللہ۔": "حج بیت‌الله.",
  "مدینہ منوره۔": "مدینه منوره.",
  "ایران کا سفر۔": "سفر ایران.",
  "تاریخی مقام۔": "مکان تاریخی.",
  "سیاحت۔": "گردشگری.",
  "خوبصورت نظارہ۔": "منظره‌ای زیبا.",
  "رات کا منظر۔": "نمای شب.",
  "امام خمینیؒ ہاؤس۔": "خانه امام خمینی.",
  "طبیعت پل۔": "پل طبیعت.",
  "اقبالؒ کی جائے پیدائش۔": "محل تولد اقبال.",
  "بین المذاہب ہم آہنگی۔": "هماهنگی بین مذاهب.",
  "وحدت میٹنگ۔": "جلسه وحدت.",
  "بین المسالک اتحاد۔": "اتحاد بین المذاهب.",
  "میلاد مصطفیٰؐ۔": "میلاد مصطفی.",
  "علمائے کرام کا اتحاد۔": "اتحاد علمای کرام.",
};

function GalleryContentFA() {
  const { setLocale } = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState(GALLERY_ITEMS);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setLocale("fa");
  }, [setLocale]);

  useEffect(() => {
    let result = GALLERY_ITEMS;
    if (activeCategory !== "all") {
      result = result.filter((item) => item.category.split(" ").includes(activeCategory));
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (item) =>
          item.desc.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [query, activeCategory]);

  useEffect(() => {
    const itemId = searchParams.get('i');
    if (itemId) {
      const index = filtered.findIndex(item => item.id === itemId);
      if (index !== -1) {
        setSelectedIndex(index);
      }
    }
  }, [searchParams, filtered]);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    const item = filtered[index];
    if (item) {
      router.push(`?i=${item.id}`, { scroll: false });
    }
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    router.push(window.location.pathname, { scroll: false });
  };

  const currentItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  const goNext = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      const nextIndex = (selectedIndex + 1) % filtered.length;
      setSelectedIndex(nextIndex);
      router.push(`?i=${filtered[nextIndex].id}`, { scroll: false });
    }
  };

  const goPrev = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      const prevIndex = selectedIndex === 0 ? filtered.length - 1 : selectedIndex - 1;
      setSelectedIndex(prevIndex);
      router.push(`?i=${filtered[prevIndex].id}`, { scroll: false });
    }
  };

  const handleShare = (e, item) => {
    e.stopPropagation();
    const tag = TAG_TRANSLATIONS[item.tag] || item.tag;
    const desc = DESC_TRANSLATIONS[item.desc] || item.desc;
    const shareUrl = `${window.location.origin}${window.location.pathname}?i=${item.id}`;
    const shareText = `*${tag}*\n\n${desc}\n\nبرای مشاهده این عکس/ویدیو خاطره انگیز روی لینک زیر کلیک کنید 👇\n\n${shareUrl}`;

    if (navigator.share) {
      navigator.share({
        title: tag,
        text: shareText,
        url: shareUrl
      }).catch(() => {});
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f7f9] overflow-x-hidden font-sans" dir="rtl">
      <Navbar />
      <HeroSlider />

      <section className="bg-[#0b314d] py-16 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0b314d]/50" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#D4AF37] mb-4">سفر تصویری مستند</h1>
          <p className="text-white/80 text-xl md:text-2xl font-light tracking-widest max-w-3xl">گوشه‌ای از ۴۵ سال خدمت در قاب خاطرات</p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="flex items-center bg-white border-b-4 border-[#D4AF37] rounded-2xl px-6 py-4 shadow-2xl max-w-3xl mx-auto backdrop-blur-md bg-white/90">
          <FaSearch size={22} className="text-[#0b314d] mr-4 opacity-50" />
          <input
            type="text"
            placeholder="جستجو در خاطرات..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 outline-none text-gray-800 bg-transparent text-right text-lg md:text-xl placeholder:text-gray-400"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-500 text-base md:text-lg border-2 ${
                activeCategory === cat.value
                  ? 'bg-[#0b314d] text-[#D4AF37] border-[#0b314d] shadow-[0_10px_20px_rgba(11,49,77,0.3)] scale-105'
                  : 'bg-white text-[#0b314d] border-gray-200 hover:border-[#D4AF37] hover:shadow-lg'
              }`}
            >
              {CATEGORY_LABELS[cat.value] || cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-6 inline-block w-full max-w-full align-top group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 cursor-pointer border border-gray-100"
              onClick={() => openLightbox(i)}
            >
              <div className="relative overflow-hidden">
                {item.type === 'video' || item.type === 'yt' ? (
                  <div className="aspect-video bg-black flex items-center justify-center">
                    <img src={item.poster || `https://img.youtube.com/vi/${item.id_yt}/hqdefault.jpg`} className="w-full h-full object-cover opacity-60" alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#D4AF37] p-5 rounded-full shadow-2xl group-hover:scale-125 transition-transform duration-500">
                        <FaPlay size={25} className="text-[#0b314d] ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={item.src} alt={item.desc} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b314d] via-transparent to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex flex-col justify-end p-6">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-[#D4AF37] text-[#0b314d] px-3 py-1 rounded-md text-xs font-bold shadow-lg">
                          {TAG_TRANSLATIONS[item.tag] || item.tag}
                        </span>
                        <button 
                          onClick={(e) => handleShare(e, item)}
                          className="bg-white/20 hover:bg-white text-white hover:text-[#0b314d] p-2 rounded-full transition-all"
                        >
                          <FaShareAlt size={14} />
                        </button>
                      </div>
                      <p className="text-white font-bold text-lg leading-tight">
                        {DESC_TRANSLATIONS[item.desc] || item.desc}
                      </p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {currentItem && (
        <div className="fixed inset-0 z-[100] bg-[#0b314d]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 animate-in fade-in" onClick={closeLightbox}>
          
          <div className="absolute top-6 left-6 flex items-center gap-4">
            <button 
              onClick={(e) => handleShare(e, currentItem)}
              className="text-white/50 hover:text-[#D4AF37] transition-all p-2"
            >
              <FaShareAlt size={24} />
            </button>
            <button className="text-white/50 hover:text-[#D4AF37] transition-all p-2 hover:rotate-90 duration-500" onClick={closeLightbox}>
              <FaXmark size={40} />
            </button>
          </div>

          <button onClick={goPrev} className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-white p-2 md:p-4 z-50">
            <FaChevronLeft size={34} />
          </button>
          <button onClick={goNext} className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-white p-2 md:p-4 z-50">
            <FaChevronRight size={34} />
          </button>

          <div className="w-full max-w-6xl h-[70vh] flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
            {currentItem.type === 'img' && (
              <img src={currentItem.src} className="max-h-full max-w-full rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.4)] border-4 border-white/10" />
            )}
            {currentItem.type === 'video' && (
              <video autoPlay controls src={currentItem.src} className="max-h-full w-full rounded-xl shadow-2xl" />
            )}
            {currentItem.type === 'yt' && (
              <iframe src={`https://www.youtube.com/embed/${currentItem.id_yt}?autoplay=1`} className="w-full h-full rounded-xl shadow-2xl" allowFullScreen />
            )}
          </div>

          <div className="mt-8 text-center text-white px-10 max-w-3xl">
            <h3 className="text-[#D4AF37] font-bold text-2xl md:text-3xl mb-2">
              {TAG_TRANSLATIONS[currentItem.tag] || currentItem.tag}
            </h3>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              {DESC_TRANSLATIONS[currentItem.desc] || currentItem.desc}
            </p>
            <p className="mt-4 text-white/30 font-mono text-sm">{selectedIndex + 1} / {filtered.length}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default function FarsiGalleryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GalleryContentFA />
    </Suspense>
  );
}
