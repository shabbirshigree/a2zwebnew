"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaLanguage, FaFilm, FaPlay, FaBookReader, FaUsers, FaTimes, FaArrowRight, FaArrowLeft, FaBookOpen, FaHeadphones } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../../components/Header'; 
import Footer from '../../components/Footer'; 

import { 
  pageIntro, diplomaticServicesList, anjumanData, pakIranWebsiteData, 
  safarNamaData, persianServicesData, tipsData, videoGalleryFa
} from './data-fa'; 
import { mainServicesGallery, anjumanGallery, travelGallery, firstFestivalGallery, secondFestivalGallery, surSangeetGallery, ewanIqbalGallery, globalWomenMediaData, globalWomenGallery, tourismExhibitionGallery, bookFairGallery } from '../../diplomatic-services/data'; 

const getYouTubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const getVideoThumbnail = (url) => {
  if (!url) return null;
  const ytId = getYouTubeId(url);
  if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;

  try {
    const cloudinaryMatch = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+)\/video\/upload\/(.+?)\.(mp4|mov|webm)(\?.*)?$/i);
    if (cloudinaryMatch) {
      const base = cloudinaryMatch[1];
      const publicPath = cloudinaryMatch[2];
      return `${base}/video/upload/so_0,w_640,h_360,c_fill/${publicPath}.jpg`;
    }
  } catch (e) {
    return null;
  }

  return null;
};

export default function DiplomaticServicesFA() {
  const [activeVideo, setActiveVideo] = useState(null);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images, index) => {
    setCurrentGallery(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans" dir="rtl">
      <Navbar />
      <HeroSlider />

      {/* 🌟 مین ہیڈنگ */}
      <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-12 md:py-16 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-2xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-4 tracking-wide leading-tight">
              {pageIntro.title}
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
         </div>
      </section>

      {/* 📖 سیکشن 1: بنیادی تعارف */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#D4AF37] p-8 md:p-12 mb-12 relative overflow-hidden">
           <p className="text-xl md:text-2xl text-[#0b314d] leading-loose text-justify drop-shadow-sm">
             {pageIntro.description}
           </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto w-full">خدمات برجسته فرهنگی و دیپلماتیک من</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diplomaticServicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg md:text-2xl font-bold text-[#D4AF37] mb-4 text-center leading-tight">
                <span className="w-3 h-3 rounded-full bg-[#0b314d]"></span> {service.title}
              </h3>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-8 text-center">نمونه‌هایی از کارهای فرهنگی و دیپلماتیک</h2>
          <ImageGallery images={mainServicesGallery} openLightbox={openLightbox} />
        </div>
      </section>

{/* 🤝 سیکشن 2: انجمن دوستی اور ویب سائٹ */}
      <section className="bg-[#0b314d] text-white py-16 md:py-20 border-y-4 border-[#D4AF37] relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
             <FaUsers className="text-6xl text-[#D4AF37] mx-auto mb-4" />
             <h2 className="text-2xl md:text-5xl font-bold text-[#D4AF37] mb-4 drop-shadow-md">انجمن دوستی پاکستان و ایران</h2>
             <p className="text-base md:text-2xl text-[#fff7cc]">افتخار بنیانگذاری و ریاست و وب‌سایت پاک ایران</p>
          </div>
          
          <div className="bg-white/10 p-8 md:p-12 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm mb-10">
            <p className="text-lg md:text-xl leading-relaxed text-justify mb-8">{anjumanData.intro}</p>
            
            <h3 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-6">دامنه گسترده خدمات:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-xl text-[#fff7cc] mb-10">
              {anjumanData.servicesList.map((item, i) => (
                <li key={i} className="bg-black/30 p-6 rounded-xl border border-white/10"><strong className="text-[#D4AF37] block mb-2 text-xl">{item.title}</strong> {item.desc}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">تحقق رویا و وب‌سایت پاک ایران:</h3>
            <p className="text-lg md:text-xl leading-relaxed text-justify mb-8">{anjumanData.conclusion}</p>
            
            <div className="bg-white text-[#0b314d] p-8 md:p-10 rounded-xl shadow-lg">
               <ul className="space-y-5 text-lg md:text-xl">
                 {pakIranWebsiteData.map((item, i) => (
                   <li key={i} className="flex flex-col md:flex-row gap-2 md:gap-4"><strong className="text-[#0b314d] font-bold text-xl">{item.title}</strong> <span className="text-gray-700">{item.desc}</span></li>
                 ))}
               </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">نمایش عکس‌های انجمن دوستی</h3>
            <ImageGallery images={anjumanGallery} openLightbox={openLightbox} />
          </div>

        {/* 🔴 سلم اور خوبصورت ویب سائٹ کا بٹن */}
          <div className="text-center mt-12">
            <a 
              href="https://pakiiranassociation.wixsite.com/pira" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#D4AF37] text-[#0b314d] font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#0b314d] hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] text-lg border-2 border-transparent hover:border-[#D4AF37]"
            >
              وب‌سایت انجمن را بازدید کنید
            </a>
          </div>
          
        </div>
      </section>

      {/* 🗣️ سیکشن 3: فارسی زبان کی خدمات */}
      <section className="py-16 md:py-24 bg-[#fffdf5] border-b border-gray-200">
        <div className="container mx-auto px-4">
           <div className="text-center mb-14">
             <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-6 flex justify-center items-center gap-4">
               <FaLanguage className="text-[#D4AF37]" /> {persianServicesData.title}
             </h2>
             <p className="text-xl md:text-2xl text-emerald-700 max-w-5xl mx-auto leading-relaxed">{persianServicesData.desc}</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-emerald-700 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-5">
                   <div className="bg-emerald-100 p-5 rounded-full"><FaFilm className="text-4xl text-emerald-700" /></div>
                   <h3 className="text-3xl font-bold text-[#0b314d]">{persianServicesData.projects[0].title}</h3>
                </div>
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-10">{persianServicesData.projects[0].desc}</p>
                <a href={persianServicesData.projects[0].playlistLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-700 text-white px-10 py-4 rounded-full font-bold hover:bg-[#D4AF37] transition-colors shadow-lg text-lg">
                   <FaPlay /> لیست پخش را ببینید
                </a>
             </div>

             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#D4AF37] hover:shadow-2xl transition-all">
                <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-5">
                   <div className="bg-[#fff7cc] p-5 rounded-full"><FaBookReader className="text-4xl text-[#D4AF37]" /></div>
                   <h3 className="text-3xl font-bold text-[#0b314d]">{persianServicesData.projects[1].title}</h3>
                </div>
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-10">{persianServicesData.projects[1].desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                   {persianServicesData.projects[1].playlists.map((pl, idx) => (
                      <a key={idx} href={pl.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-3 bg-[#0b314d] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#D4AF37] transition-colors shadow-md text-lg">
                         <FaPlay className="text-sm" /> {pl.name}
                      </a>
                   ))}
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 🌍 سیکشن 4: سیاحت اور ثقافتی تبادلہ */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-200 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-5xl font-bold text-[#0f4c75] mb-10 text-center drop-shadow-sm">🌍 گردشگری و تبادل فرهنگی: فصل جدیدی در روابط پاک ایران</h2>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-l-8 border-[#D4AF37] mb-14">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-justify mb-6">
              "سفر وسیله ظفر است، و وقتی هدف سفر زیارت همراه با نزدیک کردن فرهنگ‌های دو کشور برادر باشد، اهمیت آن بیشتر می‌شود."
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-justify mb-6">
              "با احساس این خلأ، در طول خدمات دیپلماتیک و فرهنگی خود برای اولین بار سری 'گردشگری فرهنگی پاک ایران (Pak-Iran Cultural Tourism)' را معرفی کردم. هدف اصلی این اقدام این بود که زائران نه تنها به شهرهای خاص محدود شوند، بلکه همراه با زیارت، اماکن تاریخی، مناظر طبیعی دلپذیر، باغ‌ها و تمدن باستانی ایران را نیز مشاهده کنند."
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-justify">
              "الحمدالله، این تلاش ناچیز در سطح عمومی و دیپلماتیک بسیار مورد استقبال قرار گرفت. 'اولین سفرنامه زیارتی و گردشگری ایران' که در زیر ارائه شده، نمایی از این سری تاریخی است."
            </p>
          </div>

          <h3 className="text-xl md:text-3xl font-bold text-[#D4AF37] mb-6 text-center bg-[#0b314d] inline-block px-6 md:px-10 py-3 rounded-full mx-auto shadow-md">ایران: اولین سفر زیارتی، گردشگری و اطلاعاتی</h3>
          <p className="text-center text-gray-700 mb-10 text-xl font-bold">نویسنده: شبیر احمد شگری (رئیس، انجمن دوستی پاکستان و ایران)</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            {safarNamaData.map((item, i) => (
              <div key={i} className={i === 4 ? "lg:col-span-2" : ""}>
                <TravelCard title={item.title} desc={item.desc} list={item.list} />
              </div>
            ))}
          </div>

          <div className="bg-[#0b314d] rounded-3xl shadow-2xl overflow-hidden mb-16 border-2 border-[#D4AF37] hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-shadow duration-300 relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row relative z-10">
              <div className="lg:w-1/3 p-8 flex justify-center items-center relative border-b lg:border-b-0 lg:border-l border-[#D4AF37]/30 bg-black/20">
                <Link href="/library#book-safarnama" className="cursor-pointer block transform hover:scale-105 transition-transform duration-500 relative z-10" title="کتاب سفرنامه ایران را بخوانید">
                  <img 
                    src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772651728/eb2e1ccd-e669-4453-8ca7-10f38cf13a50.png" 
                    alt="سفرنامه ایران" 
                    className="w-48 md:w-full max-w-[220px] rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.6)] border border-[#D4AF37]/50" 
                  />
                </Link>
              </div>
              <div className="lg:w-2/3 p-8 md:p-12 text-right">
                <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-5">
                  سفرنامه ایران: سفری به دیار عشق و زیارت
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  سفرنامه ایران نوشته حاجی شبیر احمد شگری، بیش از یک گزارش سفر، شرحی از دیدارهای مذهبی، فرهنگی و تاریخی ایران است. این اثر سفر زیارتی و گردشگری را با جزئیات و تصاویر توضیح می‌دهد و تجربه نوینی از گردشگری پاک ایران ارائه می‌کند.
                  <br/><br/>
                  <strong className="text-[#D4AF37] font-bold">نویسنده:</strong> حاجی شبیر احمد شگری
                </p>
                <div className="flex flex-wrap gap-3 justify-start">
                  <Link
                    href="/library#book-safarnama"
                    className="px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 bg-[#D4AF37] text-[#0b314d] hover:bg-white transition-all shadow-md"
                  >
                    <FaBookOpen /> کتاب را بخوانید
                  </Link>
                  <button
                    disabled
                    className="px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 bg-[#0f4c75] opacity-50 text-white cursor-not-allowed transition-all shadow-md"
                  >
                    <FaFilm /> ویدیو به زودی
                  </button>
                  <button
                    onClick={() => setActiveVideo('https://res.cloudinary.com/dtqrziupt/video/upload/v1772594033/Ziarati-syahati-safarnama-audeo-podcast_qqjiwy.mp3')}
                    className="px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all"
                  >
                    <FaHeadphones /> پادکست صوتی
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center">ویدیوهای سفر و گفتگوها</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoGalleryFa.map((vid, i) => (
                <VideoCard key={i} url={vid.url} title={vid.title} setActiveVideo={setActiveVideo} />
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center">لحظات تصویری سفرها</h2>
            <ImageGallery images={travelGallery} openLightbox={openLightbox} />
          </div>

          <div className="bg-[#0b314d] text-white p-10 rounded-3xl shadow-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center">نکات مهم سفر برای زائران و گردشگران</h2>
            <ul className="space-y-4 text-lg md:text-xl">
              {tipsData.map((tip, i) => (
                <li key={i} className="bg-white/10 p-5 rounded-2xl border border-[#D4AF37]/30">
                  <strong className="text-[#D4AF37] block mb-2 text-xl">{tip.title}</strong>
                  <span>{tip.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <section className="container mx-auto px-4 py-16 md:py-24 border-t-4 border-[#D4AF37]" dir="rtl">
            <h2 className="text-2xl md:text-5xl font-bold text-[#0b314d] mb-12 text-center">🎭 خدمات فرهنگی و جشنواره‌های بین‌المللی</h2>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 mb-16">
              <p className="text-xl md:text-2xl text-[#0f4c75] font-bold mb-8 text-justify leading-relaxed">
                در دوره مسئولیت فرهنگی خود در خانه فرهنگ ایران (لاهور)، فرصت بسیار مهمی برای نزدیک کردن هنر، ادبیات و فرهنگ دو کشور برادر فراهم شد.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold text-[#D4AF37] mb-3">جشنواره‌های بین‌المللی فیلم و موسیقی:</h4>
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify">
                    این برنامه‌ها شامل برگزاری جشنواره فیلم و موسیقی بین‌المللی بود که فیلم‌سازان برجسته ایران و پاکستان، تهیه‌کنندگان مطرح و هنرمندان شناخته‌شده در آن حضور داشتند.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#D4AF37] mb-3">نمایشگاه‌های کتاب و علمی:</h4>
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify">
                    علاوه بر هنری، جشنواره‌ها برنامه‌های علمی و نمایشگاه‌های کتاب نیز برگزار شد تا فرهنگ و آگاهی عمومی نیز توسعه یابد.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0b314d] p-8 md:p-12 rounded-3xl shadow-2xl mb-16 text-white border-b-8 border-[#D4AF37]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div className="bg-white/10 p-8 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm">
                  <h4 className="text-[#D4AF37] font-bold text-2xl mb-4">اولین جشنواره بین‌المللی فیلم</h4>
                  <p className="text-gray-100 text-lg leading-relaxed mb-6 text-justify">
                    اولین جشنواره بزرگ فیلم در همکاری خانه فرهنگ ایران و یک تولیدکننده مشهور پاکستانی در لاهور برگزار شد و با استقبال گسترده مردم همراه شد.
                  </p>
                  <ul className="list-disc list-inside text-[#fff7cc] space-y-2">
                    <li>یک هفته رویداد</li>
                    <li>حضور هیئت‌های بین‌المللی</li>
                    <li>حضور عمومی با ورودی رایگان</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm">
                  <h4 className="text-[#D4AF37] font-bold text-2xl mb-4">دومین جشنواره بین‌المللی فیلم</h4>
                  <p className="text-gray-100 text-lg leading-relaxed mb-6 text-justify">
                    پس از موفقیت نخستین دوره، دومین جشنواره نیز با کیفیت بالاتر برگزار شد و فیلم‌ها با زیرنویس انگلیسی برای تماشاگران بین‌المللی نمایش داده شدند.
                  </p>
                  <ul className="list-disc list-inside text-[#fff7cc] space-y-2">
                    <li>زیرنویس انگلیسی</li>
                    <li>شرکت گسترده علاقه‌مندان</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-3xl font-bold text-[#D4AF37] text-center mb-6">گالری جشنواره فیلم اول</h4>
              <ImageGallery images={firstFestivalGallery} openLightbox={openLightbox} />

              <h4 className="text-3xl font-bold text-[#D4AF37] text-center mt-14 mb-6">گالری جشنواره فیلم دوم</h4>
              <ImageGallery images={secondFestivalGallery} openLightbox={openLightbox} />
            </div>
          </section>

          <section className="bg-white py-16 md:py-24 border-t border-gray-200" dir="rtl">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-5xl font-bold text-[#0b314d] mb-10 text-center">🎶 جشنواره موسیقی پاک ایران 'سُر سنگیت'</h2>
              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-lg border-r-8 border-[#D4AF37] mb-14">
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-justify">
                  یکی از فصل‌های مهم سفارت فرهنگی من، آوردن هنر و موسیقی ایرانی به مردم پاکستان بود. 'سُر سنگیت' برنامه‌ای بود که روح هنر و آوا را به دو ملت نزدیک کرد.
                </p>
                <h4 className="text-2xl font-bold text-[#D4AF37] mb-4">استقبال از گروه موسیقی 'کوک بند' ایران:</h4>
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-8">
                  با همکاری خانه فرهنگ ایران، شهرداری و مجموعه الحمرا، گروه مشهور موسیقی ایرانی 'کوک بند' به لاهور دعوت شدند و در مکان‌های تاریخی اجرا داشتند.
                </p>
                <h4 className="text-2xl font-bold text-[#D4AF37] mb-4">اجرا در مکان‌های تاریخی:</h4>
                <ul className="list-disc list-inside text-gray-800 text-lg md:text-xl space-y-4 urdu-text leading-relaxed">
                  <li><strong className="text-[#0b314d]">حمام قدیم دهلی دروازه:</strong> محفل موسیقی کلاسیک ایرانی با اجرای استادان برجسته.</li>
                  <li><strong className="text-[#0b314d]">الحمرا آرتس کونسل:</strong> اجرای مشترک هنرمندان ایرانی و پاکستانی.</li>
                </ul>
              </div>
              <ImageGallery images={surSangeetGallery} openLightbox={openLightbox} />
            </div>
          </section>

          <section className="bg-gray-100 py-16 md:py-24 border-t-2 border-[#D4AF37]/50" dir="rtl">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-5xl font-bold text-[#0b314d] mb-12 text-center">🏛️ نمایشگاه ایوان اقبال و پوشش خبری</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#0b314d]">
                  <h4 className="text-2xl font-bold text-[#D4AF37] mb-6">پوشش رسانه‌ای:</h4>
                  <ul className="list-disc list-inside text-gray-800 text-lg md:text-xl space-y-4 leading-relaxed">
                    <li><strong className="text-[#0b314d]">روزنامه افلاک:</strong> پوشش ویژه نمایشگاه فرهنگی و هنری.</li>
                    <li><strong className="text-[#0b314d]">روزنامه پاکستان:</strong> انتشار ویژه‌نامه و مقاله «ثمرات انقلاب اسلامی ایران».</li>
                  </ul>
                </div>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#D4AF37]">
                  <h4 className="text-2xl font-bold text-[#0b314d] mb-6">سرپرستی هنری جهانی:</h4>
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify">
                    این نمایشگاه صنایعی مانند مرصع‌کاری، قلم‌زنی و پوشاک سنتی را با حضور استادان ایرانی معرفی کرد و زمینه تبادل فرهنگی بیشتری را فراهم آورد.
                  </p>
                </div>
              </div>
              <ImageGallery images={ewanIqbalGallery} openLightbox={openLightbox} />
            </div>
          </section>

          <section className="bg-white py-16 md:py-24 border-t border-gray-200" dir="rtl">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-5xl font-bold text-[#0b314d] mb-10 text-center">🛡️ رسانه جهانی زنان (Global Women Media)</h2>
              <div className="bg-pink-50 p-8 md:p-12 rounded-3xl shadow-lg border-r-8 border-pink-500 mb-14">
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-justify font-bold">
                  ایجاد Global Women Media نقطه عطفی در روابط فرهنگی و رسانه‌ای پاک ایران بود.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {globalWomenMediaData.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
                      <h4 className="text-pink-600 font-bold text-xl mb-3">{item.title}</h4>
                      <p className="text-gray-700 text-lg leading-relaxed text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 md:p-8 bg-pink-100 rounded-2xl text-center border border-pink-200">
                  <strong className="text-pink-700 text-2xl">خلاصه ماموریت:</strong>
                  <p className="text-gray-800 text-lg md:text-xl mt-4 leading-relaxed text-justify">
                    این پلتفرم نشان داد که زنان می‌توانند در چارچوب شرعی و فرهنگی، در همه عرصه‌ها به موفقیت‌های برابر دست یابند.
                  </p>
                </div>
              </div>
              <ImageGallery images={globalWomenGallery} openLightbox={openLightbox} />
            </div>
          </section>

          <section className="bg-[#0b314d] text-white py-16 md:py-24 border-t-8 border-[#D4AF37]" dir="rtl">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-5xl font-bold text-[#D4AF37] mb-14 text-center">🌍 نمایشگاه گردشگری و نمایشگاه کتاب بین‌المللی</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-xl md:text-3xl font-bold text-[#D4AF37] mb-8 text-center">نمایشگاه گردشگری</h3>
                  <ImageGallery images={tourismExhibitionGallery} openLightbox={openLightbox} large />
                </div>
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-xl md:text-3xl font-bold text-[#D4AF37] mb-8 text-center">نمایشگاه بین‌المللی کتاب</h3>
                  <ImageGallery images={bookFairGallery} openLightbox={openLightbox} large />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
      
      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">ویدیو</h3>
              <button onClick={() => setActiveVideo(null)} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="aspect-video">
              {activeVideo.includes('youtube.com') || activeVideo.includes('youtu.be') ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}`}
                  className="w-full h-full rounded"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls className="w-full h-full rounded">
                  <source src={activeVideo} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 text-white text-2xl z-10">
              <FaTimes />
            </button>
            <img src={currentGallery[currentImageIndex]} alt="" className="w-full h-auto max-h-[80vh] object-contain rounded" />
            {currentGallery.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
                  <FaArrowLeft />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
                  <FaArrowRight />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// TravelCard Component
function TravelCard({ title, desc, list }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#D4AF37]/30 hover:shadow-xl transition-all">
      <h4 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4">{title}</h4>
      {desc && <p className="text-gray-700 mb-4">{desc}</p>}
      <ul className="space-y-2 text-gray-800">
        {list.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#D4AF37] mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// VideoCard Component
function VideoCard({ url, title, setActiveVideo }) {
  const thumbnail = getVideoThumbnail(url);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <button
        type="button"
        onClick={() => setActiveVideo(url)}
        className="relative aspect-video overflow-hidden bg-gray-200"
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-3xl">
            <FaPlay />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <FaPlay className="text-white text-4xl" />
        </div>
      </button>
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
}

// ImageGallery Component
function ImageGallery({ images, openLightbox }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => openLightbox(images, i)}
        />
      ))}
    </div>
  );
}