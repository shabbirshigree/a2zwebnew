"use client";
import { useState } from 'react';
import { FaLanguage, FaFilm, FaPlay, FaBookReader, FaUsers, FaTimes, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; 
import { Navbar, HeroSlider } from '../components/Header'; 
import Footer from '../components/Footer'; 

import { 
  pageIntro, diplomaticServicesList, anjumanData, pakIranWebsiteData, 
  safarNamaData, tipsData, videoGallery, mainServicesGallery, anjumanGallery, 
  travelGallery, firstFestivalGallery, secondFestivalGallery, surSangeetGallery, 
  ewanIqbalGallery, globalWomenGallery, tourismExhibitionGallery, bookFairGallery,
  globalWomenMediaData, persianServicesData
} from './data'; 

const getYouTubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function DiplomaticServices() {
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
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans">
      <Navbar />
      <HeroSlider />

      {/* 🌟 مین ہیڈنگ */}
      <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-12 md:py-16 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-4 urdu-text tracking-wide leading-tight">
              {pageIntro.title}
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
         </div>
      </section>

      {/* 📖 سیکشن 1: بنیادی تعارف */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#D4AF37] p-8 md:p-12 mb-12 relative overflow-hidden">
           <p className="text-xl md:text-2xl text-[#0b314d] leading-loose urdu-text text-justify drop-shadow-sm" dir="rtl">
             {pageIntro.description}
           </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center urdu-text border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto w-full">میری نمایاں ثقافتی و سفارتی خدمات</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir="rtl">
          {diplomaticServicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 urdu-text flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0b314d]"></span> {service.title}
              </h3>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed urdu-text text-justify">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ImageGallery images={mainServicesGallery} openLightbox={openLightbox} />
        </div>
      </section>

      {/* 🤝 سیکشن 2: انجمن دوستی اور ویب سائٹ */}
      <section className="bg-[#0b314d] text-white py-16 md:py-20 border-y-4 border-[#D4AF37] relative">
        <div className="container mx-auto px-4 relative z-10" dir="rtl">
          <div className="text-center mb-12">
             <FaUsers className="text-6xl text-[#D4AF37] mx-auto mb-4" />
             <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-4 urdu-text drop-shadow-md">انجمنِ دوستی پاکستان و ایران</h2>
             <p className="text-xl md:text-2xl text-[#fff7cc] urdu-text">بانی و صدر کا تاریخی اعزاز اور پاک ایران ویب سائٹ</p>
          </div>
          
          <div className="bg-white/10 p-8 md:p-12 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm mb-10">
            <p className="text-lg md:text-xl leading-relaxed urdu-text text-justify mb-8">{anjumanData.intro}</p>
            
            <h3 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-6 urdu-text">خدمات کا وسیع دائرہ کار:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-xl urdu-text text-[#fff7cc] mb-10">
              {anjumanData.servicesList.map((item, i) => (
                <li key={i} className="bg-black/30 p-6 rounded-xl border border-white/10"><strong className="text-[#D4AF37] block mb-2 text-xl">{item.title}</strong> {item.desc}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4 urdu-text">خواب کی تکمیل اور پاک ایران ویب سائٹ:</h3>
            <p className="text-lg md:text-xl leading-relaxed urdu-text text-justify mb-8">{anjumanData.conclusion}</p>
            
            <div className="bg-white text-[#0b314d] p-8 md:p-10 rounded-xl shadow-lg">
               <ul className="space-y-5 text-lg md:text-xl urdu-text">
                 {pakIranWebsiteData.map((item, i) => (
                   <li key={i} className="flex flex-col md:flex-row gap-2 md:gap-4"><strong className="text-[#0b314d] font-bold text-xl">{item.title}</strong> <span className="text-gray-700">{item.desc}</span></li>
                 ))}
               </ul>
            </div>
          </div>

          <ImageGallery images={anjumanGallery} openLightbox={openLightbox} />
          
          <div className="text-center mt-12">
            <a href="https://pakiranassociation.wixsite.com/pira" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#D4AF37] text-[#0b314d] font-bold px-12 py-5 rounded-full hover:bg-white hover:text-[#0b314d] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.5)] text-xl urdu-text">
              انجمن کی ویب سائٹ وزٹ کریں
            </a>
          </div>
        </div>
      </section>

      {/* 🗣️ سیکشن 3: فارسی زبان کی خدمات */}
      <section className="py-16 md:py-24 bg-[#fffdf5] border-b border-gray-200" dir="rtl">
        <div className="container mx-auto px-4">
           <div className="text-center mb-14">
             <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 urdu-text mb-6 flex justify-center items-center gap-4">
               <FaLanguage className="text-[#D4AF37]" /> {persianServicesData.title}
             </h2>
             <p className="text-xl md:text-2xl text-emerald-700 urdu-text max-w-5xl mx-auto leading-relaxed">{persianServicesData.desc}</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-emerald-700 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-5">
                   <div className="bg-emerald-100 p-5 rounded-full"><FaFilm className="text-4xl text-emerald-700" /></div>
                   <h3 className="text-3xl font-bold text-[#0b314d] urdu-text">{persianServicesData.projects[0].title}</h3>
                </div>
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-10 urdu-text">{persianServicesData.projects[0].desc}</p>
                <a href={persianServicesData.projects[0].playlistLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-700 text-white px-10 py-4 rounded-full font-bold hover:bg-[#D4AF37] transition-colors shadow-lg text-lg urdu-text">
                   <FaPlay /> پلے لسٹ دیکھیں
                </a>
             </div>

             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#D4AF37] hover:shadow-2xl transition-all">
                <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-5">
                   <div className="bg-[#fff7cc] p-5 rounded-full"><FaBookReader className="text-4xl text-[#D4AF37]" /></div>
                   <h3 className="text-3xl font-bold text-[#0b314d] urdu-text">{persianServicesData.projects[1].title}</h3>
                </div>
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify mb-10 urdu-text">{persianServicesData.projects[1].desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                   {persianServicesData.projects[1].playlists.map((pl, idx) => (
                      <a key={idx} href={pl.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-3 bg-[#0b314d] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#D4AF37] transition-colors shadow-md text-lg urdu-text">
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
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f4c75] mb-10 text-center urdu-text drop-shadow-sm">🌍 سیاحت اور ثقافتی تبادلہ: پاک ایران تعلقات کا نیا باب</h2>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-l-8 border-[#D4AF37] mb-14">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 urdu-text text-justify mb-6">
              "سفر وسیلہ ظفر ہے، اور جب سفر کا مقصد زیارت کے ساتھ ساتھ دو برادر ممالک کی ثقافتوں کو ملانا ہو، تو اس کی اہمیت مزید بڑھ جاتی ہے۔ ماضی میں پاکستان سے ایران کا سفر زیادہ تر مقاماتِ مقدسہ کی روح پرور زیارات یا پھر تجارتی اور کاروباری مقاصد تک ہی محدود تصور کیا جاتا تھا۔"
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 urdu-text text-justify mb-6">
              "اسی خلا کو محسوس کرتے ہوئے، میں نے اپنی سفارتی اور فرہنگی خدمات کے دوران پہلی مرتبہ باقاعدہ 'پاک ایران ثقافتی سیاحت (Pak-Iran Cultural Tourism)' کا ایک منفرد اور نیا سلسلہ متعارف کروایا۔ اس اقدام کا بنیادی مقصد یہ تھا کہ زائرین صرف مخصوص شہروں تک محدود نہ رہیں، بلکہ زیارات کے ساتھ ساتھ ایران کے تاریخی محلات، دلکش قدرتی مناظر، باغات اور قدیم تہذیب کا بھی مشاہدہ کریں۔"
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 urdu-text text-justify">
              "الحمدللہ، میری اس ادنیٰ سی کاوش کو عوامی اور سفارتی، دونوں سطحوں پر بے حد پذیرائی ملی۔ ذیل میں پیش کیا گیا 'ایران کا پہلا زیارتی و سیاحتی سفرنامہ' اسی تاریخی سلسلے کی ایک جھلک ہے۔"
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6 text-center bg-[#0b314d] inline-block px-10 py-3 rounded-full mx-auto shadow-md urdu-text">🇮🇷 ایران: پہلا زیارتی، سیاحتی و معلوماتی سفر</h3>
          <p className="text-center text-gray-700 mb-10 text-xl font-bold urdu-text">تحریر: شبیر احمد شگری (صدر، انجمن دوستی پاکستان و ایران)</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            {safarNamaData.map((item, i) => (
              <div key={i} className={i === 4 ? "lg:col-span-2" : ""}>
                <TravelCard title={item.title} desc={item.desc} list={item.list} />
              </div>
            ))}
          </div>

          {/* 💡 مشورے */}
          <div className="bg-[#0b314d] text-white p-10 md:p-12 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] rounded-full blur-[100px] opacity-40"></div>
             <h3 className="text-3xl font-bold text-[#D4AF37] mb-8 urdu-text flex items-center gap-3"><span className="text-4xl">💡</span> زائرین و سیاحوں کے لیے میرے اہم مشورے</h3>
             <ul className="space-y-4 text-lg md:text-xl urdu-text">
               {tipsData.map((tip, i) => (
                 <li key={i}><strong className="text-[#D4AF37] text-xl">{tip.title}</strong> {tip.desc}</li>
               ))}
             </ul>
          </div>

          {/* 🎥 ویڈیوز */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center urdu-text border-b-2 border-[#D4AF37] pb-4 inline-block mx-auto">سیاحت، انٹرویوز اور خبریں (ویڈیوز)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {videoGallery.map((vid, i) => (
              <VideoCard key={i} url={vid.url} title={vid.title} setActiveVideo={setActiveVideo} isCloudinary={vid.isCloudinary} />
            ))}
          </div>

          <h2 className="text-3xl font-bold text-[#0b314d] mb-8 text-center urdu-text">سفر اور ملاقاتوں کی جھلکیاں</h2>
          <ImageGallery images={travelGallery} openLightbox={openLightbox} />
        </div>
      </section>

      {/* 🎭 سیکشن 5: ثقافتی خدمات */}
      <section className="container mx-auto px-4 py-16 md:py-24 border-t-4 border-[#D4AF37]" dir="rtl">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] mb-12 text-center urdu-text drop-shadow-sm">🎭 ثقافتی خدمات اور بین الاقوامی فیسٹیولز</h2>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 mb-16">
          <p className="text-xl md:text-2xl text-[#0f4c75] font-bold mb-8 urdu-text text-justify leading-relaxed">
            "خانہ فرہنگ ایران (لاہور) میں اپنی سفارتی اور ثقافتی ذمہ داریوں کے دوران، مجھے دونوں برادر ممالک کے آرٹ، ادب اور ثقافت کو ایک دوسرے کے قریب لانے کا شاندار موقع ملا۔"
          </p>
          <div className="space-y-8">
             <div>
               <h4 className="text-2xl font-bold text-[#D4AF37] urdu-text mb-3">بین الاقوامی فلم اور میوزک فیسٹیولز:</h4>
               <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify urdu-text">ان ثقافتی پروگرامز میں انٹرنیشنل فلم فیسٹیولز اور میوزک فیسٹیولز کا انعقاد خاص طور پر قابلِ ذکر ہے۔ ان شاندار تقریبات میں شرکت کے لیے ایران اور پاکستان کے نامور اور بین الاقوامی شہرت یافتہ فلم میکرز، مایہ ناز پروڈیوسرز اور مشہور فلمی ستاروں نے لاہور کا دورہ کیا۔</p>
             </div>
             <div>
               <h4 className="text-2xl font-bold text-[#D4AF37] urdu-text mb-3">کتب میلے اور علمی نمائشیں:</h4>
               <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify urdu-text">فنونِ لطیفہ کے علاوہ علم و ادب کے فروغ کے لیے عظیم الشان بین الاقوامی کتب میلوں (Book Fairs) اور مختلف موضوعات پر مبنی ثقافتی نمائشوں کا انعقاد بھی مسلسل کیا جاتا رہا۔</p>
             </div>
          </div>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold text-white bg-[#0b314d] inline-block px-10 py-4 rounded-t-3xl mb-0 urdu-text">🎬 لاہور میں دو عظیم الشان 'ایرانی فلم فیسٹیولز'</h3>
        <div className="bg-[#0b314d] p-8 md:p-12 rounded-b-3xl rounded-tl-3xl shadow-2xl mb-16 text-white border-b-8 border-[#D4AF37]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div className="bg-white/10 p-8 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm">
               <h4 className="text-[#D4AF37] font-bold text-2xl mb-4 border-b border-[#D4AF37]/30 pb-3 urdu-text">پہلا بین الاقوامی فلم فیسٹیول اور حوزہ ہنری کی شرکت</h4>
               <p className="text-lg md:text-xl mb-6 leading-relaxed urdu-text text-justify">پہلا عظیم الشان فلم فیسٹیول خانہ فرہنگ ایران اور معروف پاکستانی میڈیا پرسنالٹی کی 'مبشر لقمان پروڈکشنز' کے باہمی اشتراک سے لاہور کے معروف مقام 'رائل پام' میں منعقد کیا گیا۔</p>
               <ul className="list-disc list-inside text-lg space-y-2 text-[#fff7cc] urdu-text">
                 <li>ایک ہفتے کا میلہ</li>
                 <li>بین الاقوامی وفود کی شرکت</li>
                 <li>عوامی پذیرائی اور فری انٹری</li>
               </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm">
               <h4 className="text-[#D4AF37] font-bold text-2xl mb-4 border-b border-[#D4AF37]/30 pb-3 urdu-text">دوسرا بین الاقوامی فلم فیسٹیول</h4>
               <p className="text-lg md:text-xl mb-6 leading-relaxed urdu-text text-justify">پہلے فیسٹیول کی شاندار کامیابی کے بعد، دوسرا فلم فیسٹیول بھی اسی شان و شوکت کے ساتھ منعقد کیا گیا۔ پاکستانی شائقین کی سہولت کے لیے تمام فلمیں 'انگلش سب ٹائٹلز' کے ساتھ پیش کی گئیں۔</p>
               <ul className="list-disc list-inside text-lg space-y-2 text-[#fff7cc] urdu-text">
                 <li>انگلش سب ٹائٹلز (English Subtitles)</li>
                 <li>جوق در جوق عوامی شرکت</li>
               </ul>
            </div>
          </div>
        </div>

        <h4 className="text-3xl font-bold text-[#0b314d] text-center mb-6 urdu-text">پہلے فلم فیسٹیول کی گیلری</h4>
        <ImageGallery images={firstFestivalGallery} openLightbox={openLightbox} />

        <h4 className="text-3xl font-bold text-[#0b314d] text-center mt-14 mb-6 urdu-text">دوسرے فلم فیسٹیول کی گیلری</h4>
        <ImageGallery images={secondFestivalGallery} openLightbox={openLightbox} />
      </section>

      {/* 🎶 سیکشن 6: سُر سنگیت */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] mb-10 text-center urdu-text drop-shadow-sm">🎶 پاک ایران 'سُر سنگیت' اور بین الاقوامی میوزک فیسٹیولز</h2>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-lg border-r-8 border-[#D4AF37] mb-14">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-justify urdu-text">
              میری ثقافتی سفارت کاری کا ایک انتہائی اہم باب دونوں ممالک کے عوام کو فن اور موسیقی کے ذریعے قریب لانا ہے۔ اس سلسلے میں ایک یادگار موقع 'پاک ایران سُر سنگیت' پروگرام تھا۔
            </p>
            <h4 className="text-2xl font-bold text-[#D4AF37] mb-4 urdu-text">ایرانی 'کوک بینڈ' (Kook Band) کی پاکستان آمد:</h4>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-justify urdu-text">
              میں نے خانہ فرہنگ ایران، والڈ سٹی اتھارٹی اور الحمرا کے اشتراک سے ایران کے عالمی شہرت یافتہ کلاسیکل میوزک گروپ "کوک بینڈ" کو مدعو کیا۔
            </p>
            
            <h4 className="text-2xl font-bold text-[#D4AF37] mb-4 urdu-text">تاریخی مقامات پر پرفارمنسز:</h4>
            <ul className="list-disc list-inside text-gray-800 text-lg md:text-xl space-y-4 mb-6 urdu-text leading-relaxed">
              <li><strong className="text-[#0b314d] text-xl">شاہی حمام (دہلی گیٹ):</strong> ایرانی کلاسیکل موسیقی کی سحر انگیز محفل، جس میں قوال شیر میانداد نے بھی فن کا مظاہرہ کیا۔</li>
              <li><strong className="text-[#0b314d] text-xl">الحمرا آرٹس کونسل:</strong> کوک بینڈ کی پاکستانی فنکاروں کے ساتھ مشترکہ پرفارمنس۔</li>
            </ul>
          </div>

          <ImageGallery images={surSangeetGallery} openLightbox={openLightbox} />
        </div>
      </section>

      {/* 🏛️ سیکشن 7: ایوانِ اقبال */}
      <section className="bg-gray-100 py-16 md:py-24 border-t-2 border-[#D4AF37]/50">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] mb-12 text-center urdu-text drop-shadow-sm">🏛️ ایوانِ اقبال کی تاریخی نمائش اور صحافتی کوریج</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#0b314d] hover:shadow-2xl transition-all">
               <h4 className="text-2xl font-bold text-[#D4AF37] mb-6 urdu-text border-b pb-3">صحافتی اعتراف (Media Coverage):</h4>
               <ul className="list-disc list-inside text-gray-800 text-lg md:text-xl space-y-4 urdu-text leading-relaxed">
                 <li><strong className="text-[#0b314d] text-xl">روزنامہ 'افلاک':</strong> ثقافتی اور ہنری نمائش کی شاندار کوریج۔</li>
                 <li><strong className="text-[#0b314d] text-xl">روزنامہ 'پاکستان':</strong> میری خصوصی تحریر "انقلابِ اسلامی ایران کے ثمرات" شائع ہوئی۔</li>
               </ul>
             </div>
             
             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#D4AF37] hover:shadow-2xl transition-all">
               <h4 className="text-2xl font-bold text-[#0b314d] mb-6 urdu-text border-b pb-3">فن اور ہنر کی عالمی سرپرستی:</h4>
               <p className="text-gray-800 text-lg md:text-xl text-justify urdu-text leading-relaxed">ایران سے آئے ہوئے مرصع کاری، کندہ کاری (قلم زنی) اور ملبوسات کے ماہر اساتذہ (رمضان معمر، سیدہ فہیمہ کاظمی) کی نمائش کا اہتمام میرے ذمے تھا۔</p>
             </div>
          </div>

          <ImageGallery images={ewanIqbalGallery} openLightbox={openLightbox} />
        </div>
      </section>

      {/* 🛡️ سیکشن 8: گلوبل وومن میڈیا */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] mb-10 text-center urdu-text drop-shadow-sm">🛡️ گلوبل وومن میڈیا: نظریاتی آئیڈیا سے عملی حقیقت تک</h2>
          
          <div className="bg-pink-50 p-8 md:p-12 rounded-3xl shadow-lg border-r-8 border-pink-500 mb-14">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-justify urdu-text font-bold">
              "گلوبل وومن میڈیا" کا قیام پاک ایران ثقافتی و ابلاغی تعلقات میں ایک سنگِ میل ہے۔
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {globalWomenMediaData.map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
                  <h4 className="text-pink-600 font-bold text-xl md:text-2xl mb-3 urdu-text">{item.title}</h4>
                  <p className="text-gray-700 text-lg leading-relaxed urdu-text text-justify">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 md:p-8 bg-pink-100 rounded-2xl text-center border border-pink-200">
              <strong className="text-pink-700 text-2xl urdu-text">مشن کا خلاصہ:</strong>
              <p className="text-gray-800 text-lg md:text-xl mt-4 urdu-text leading-relaxed">یہ تنظیم ثابت کرتی ہے کہ شریعت کے دائرے میں رہ کر خواتین ہر میدان میں مردوں کے شانہ بشانہ کامیابیاں حاصل کر سکتی ہیں۔</p>
            </div>
          </div>

          <ImageGallery images={globalWomenGallery} openLightbox={openLightbox} />
        </div>
      </section>

      {/* 🌍 سیکشن 9: بین الاقوامی ٹورازم اور کتب میلے */}
      <section className="bg-[#0b314d] text-white py-16 md:py-24 border-t-8 border-[#D4AF37]">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-14 text-center urdu-text drop-shadow-lg">🌍 بین الاقوامی ٹورازم نمائش اور کتاب میلے</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8 text-center border-b border-white/20 pb-4 urdu-text">ٹورازم نمائش کے مناظر</h3>
              <ImageGallery images={tourismExhibitionGallery} openLightbox={openLightbox} />
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8 text-center border-b border-white/20 pb-4 urdu-text">بین الاقوامی کتاب میلہ</h3>
              <ImageGallery images={bookFairGallery} openLightbox={openLightbox} />
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 ویڈیو ماڈل */}
      {activeVideo && (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[1001]">&times;</button>
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

      {/* 🟡 امیج گیلری ماڈل (گولڈن فریم Lightbox) */}
      {lightboxOpen && currentGallery.length > 0 && (
        <div className="fixed inset-0 z-[2000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-lg">
          <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[2001] drop-shadow-md">
            <FaTimes />
          </button>
          
          <button onClick={prevImage} className="absolute left-6 text-[#D4AF37] text-5xl hover:text-white transition-all z-[2001] drop-shadow-md">
            <FaArrowLeft />
          </button>
          <button onClick={nextImage} className="absolute right-6 text-[#D4AF37] text-5xl hover:text-white transition-all z-[2001] drop-shadow-md mt-24 md:mt-0">
            <FaArrowRight />
          </button>

          <div className="relative border-[10px] border-[#D4AF37] p-2 bg-[#1a1a1a] rounded-xl shadow-[0_0_80px_rgba(212,175,55,0.7)] max-w-5xl w-full flex justify-center items-center">
            <img src={currentGallery[currentImageIndex]} alt="Enlarged Gallery Image" className="max-w-full max-h-[80vh] object-contain rounded" />
          </div>
        </div>
      )}

      <Footer year="2026" />
    </div>
  );
}

// 🎨 ہیلپر کمپوننٹس

function TravelCard({ title, desc, list }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300">
      <h4 className="text-2xl font-bold text-[#0b314d] mb-4 border-b border-gray-100 pb-3 urdu-text">{title}</h4>
      {desc && <p className="text-gray-800 text-lg mb-5 leading-relaxed text-justify urdu-text">{desc}</p>}
      <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 leading-relaxed urdu-text">
        {list.map((item, idx) => {
          const parts = item.split(':');
          if (parts.length > 1) {
            return (
              <li key={idx}>
                <strong className="text-[#D4AF37] text-xl">{parts[0]}:</strong> {parts.slice(1).join(':')}
              </li>
            );
          }
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

function ImageGallery({ images, openLightbox }) {
  if (!images || images.length === 0) return null;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((img, idx) => (
        <div 
          key={idx} 
          onClick={() => openLightbox(images, idx)}
          className="relative group cursor-pointer rounded-2xl overflow-hidden border-4 border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-500 aspect-[4/3] bg-black"
        >
          <img src={img} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-transform duration-700 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white text-lg font-bold urdu-text drop-shadow-lg">بڑا کر کے دیکھیں</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoCard({ url, title, setActiveVideo, isCloudinary = false }) {
  const videoId = !isCloudinary ? getYouTubeId(url) : null;
  const thumbnailUrl = isCloudinary 
    ? "https://res.cloudinary.com/dtqrziupt/image/upload/v1771764306/cebc75ab-1339-4d7e-a3c4-bf90e240a7e4.png" 
    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative group rounded-2xl overflow-hidden border-4 border-[#0b314d]/30 hover:border-[#D4AF37] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-black aspect-video" onClick={() => setActiveVideo(url)}>
      <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" />
      
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-[#D4AF37] p-2 md:p-3 rounded-full border-2 border-white shadow-[0_0_15px_rgba(212,175,55,0.9)] transform group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
          <FaPlay className="text-white text-sm md:text-base pl-1" />
        </div>
      </div>

      <div className="absolute top-0 w-full bg-gradient-to-b from-black/90 to-transparent p-4 text-right">
        <h4 className="text-white font-bold text-sm md:text-lg urdu-text drop-shadow-md">{title}</h4>
      </div>
    </div>
  );
}