"use client";
import { useState } from 'react';
import { FaLanguage, FaFilm, FaPlay, FaBookReader, FaUsers } from 'react-icons/fa'; // نئے آئکنز شامل کیے
import { Navbar, HeroSlider } from '../components/Header'; 
import Footer from '../components/Footer'; 

// 🔴 ڈیٹا فائل سے سارا مواد امپورٹ کر رہے ہیں (بشمول فارسی خدمات)
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
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#D4AF37] p-6 md:p-10 mb-12 relative overflow-hidden">
           <p className="text-lg md:text-2xl text-[#0b314d] leading-loose urdu-text font-medium text-justify drop-shadow-sm" dir="rtl">
             {pageIntro.description}
           </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-8 text-center urdu-text border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto w-full">میری نمایاں ثقافتی و سفارتی خدمات</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir="rtl">
          {diplomaticServicesList.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3 urdu-text flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0b314d]"></span> {service.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed urdu-text text-justify">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <ImageGallery images={mainServicesGallery} />
        </div>
      </section>

      {/* 🤝 سیکشن 2: انجمن دوستی اور ویب سائٹ (نمایاں کر کے) */}
      <section className="bg-[#0b314d] text-white py-12 md:py-16 border-y-4 border-[#D4AF37] relative">
        <div className="container mx-auto px-4 relative z-10" dir="rtl">
          <div className="text-center mb-10">
             <FaUsers className="text-5xl text-[#D4AF37] mx-auto mb-4" />
             <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-4 urdu-text drop-shadow-md">انجمنِ دوستی پاکستان و ایران</h2>
             <p className="text-xl text-[#fff7cc] urdu-text">بانی و صدر کا تاریخی اعزاز اور پاک ایران ویب سائٹ</p>
          </div>
          
          <div className="bg-white/10 p-6 md:p-10 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm mb-8">
            <p className="text-sm md:text-lg leading-relaxed urdu-text font-light text-justify">{anjumanData.intro}</p>
            
            <h3 className="text-xl font-bold text-[#D4AF37] mt-8 mb-4 urdu-text">خدمات کا وسیع دائرہ کار:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base urdu-text font-light text-[#fff7cc] mb-8">
              {anjumanData.servicesList.map((item, i) => (
                <li key={i} className="bg-black/20 p-4 rounded-lg"><strong className="text-[#D4AF37] block mb-1">{item.title}</strong> {item.desc}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-[#D4AF37] mt-8 mb-3 urdu-text">خواب کی تکمیل اور پاک ایران ویب سائٹ:</h3>
            <p className="text-sm md:text-base leading-relaxed urdu-text font-light text-justify mb-6">{anjumanData.conclusion}</p>
            
            <div className="bg-white text-[#0b314d] p-6 rounded-xl">
               <ul className="space-y-4 text-sm md:text-base urdu-text">
                 {pakIranWebsiteData.map((item, i) => (
                   <li key={i}><strong className="text-[#0b314d] font-bold">{item.title}</strong> {item.desc}</li>
                 ))}
               </ul>
            </div>
          </div>

          <ImageGallery images={anjumanGallery} />
          
          <div className="text-center mt-10">
            <a href="https://pakiranassociation.wixsite.com/pira" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#D4AF37] text-[#0b314d] font-bold px-10 py-4 rounded-full hover:bg-white hover:text-[#0b314d] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.5)] text-lg">
              انجمن کی ویب سائٹ وزٹ کریں
            </a>
          </div>
        </div>
      </section>

      {/* 🗣️ 🔴 نیا اضافہ: فارسی زبان کی خدمات (AZFA & Syed Noor) */}
      <section className="py-16 md:py-20 bg-[#fffdf5] border-b border-gray-200" dir="rtl">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 urdu-text mb-4 flex justify-center items-center gap-3">
               <FaLanguage className="text-[#D4AF37]" /> {persianServicesData.title}
             </h2>
             <p className="text-lg md:text-xl text-emerald-700 urdu-text max-w-4xl mx-auto leading-relaxed">{persianServicesData.desc}</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Project 1: Syed Noor */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-emerald-700 hover:shadow-2xl transition-all">
                 <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                    <div className="bg-emerald-100 p-4 rounded-full"><FaFilm className="text-3xl text-emerald-700" /></div>
                    <h3 className="text-2xl font-bold text-[#0b314d] urdu-text">{persianServicesData.projects[0].title}</h3>
                 </div>
                 <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8 urdu-text">{persianServicesData.projects[0].desc}</p>
                 <a href={persianServicesData.projects[0].playlistLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-3 rounded-full font-bold hover:bg-[#D4AF37] transition-colors shadow-lg">
                    <FaPlay /> پلے لسٹ دیکھیں
                 </a>
              </div>

              {/* Project 2: AZFA */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-[#D4AF37] hover:shadow-2xl transition-all">
                 <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                    <div className="bg-[#fff7cc] p-4 rounded-full"><FaBookReader className="text-3xl text-[#D4AF37]" /></div>
                    <h3 className="text-2xl font-bold text-[#0b314d] urdu-text">{persianServicesData.projects[1].title}</h3>
                 </div>
                 <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8 urdu-text">{persianServicesData.projects[1].desc}</p>
                 
                 <div className="grid grid-cols-2 gap-4">
                    {persianServicesData.projects[1].playlists.map((pl, idx) => (
                       <a key={idx} href={pl.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-[#0b314d] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#D4AF37] transition-colors shadow-md text-sm md:text-base">
                          <FaPlay className="text-xs" /> {pl.name}
                       </a>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 🌍 سیکشن 4: سیاحت اور ثقافتی تبادلہ (ایران کا پہلا سفرنامہ) */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0f4c75] mb-6 text-center urdu-text drop-shadow-sm">🌍 سیاحت اور ثقافتی تبادلہ: پاک ایران تعلقات کا ایک نیا باب</h2>
          
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border-l-4 border-[#D4AF37] mb-12">
            <p className="text-sm md:text-lg leading-relaxed text-gray-700 urdu-text text-justify mb-4">
              "سفر وسیلہ ظفر ہے، اور جب سفر کا مقصد زیارت کے ساتھ ساتھ دو برادر ممالک کی ثقافتوں کو ملانا ہو، تو اس کی اہمیت مزید بڑھ جاتی ہے۔ ماضی میں پاکستان سے ایران کا سفر زیادہ تر مقاماتِ مقدسہ کی روح پرور زیارات یا پھر تجارتی اور کاروباری مقاصد تک ہی محدود تصور کیا جاتا تھا۔"
            </p>
            <p className="text-sm md:text-lg leading-relaxed text-gray-700 urdu-text text-justify mb-4">
              "اسی خلا کو محسوس کرتے ہوئے، میں نے اپنی سفارتی اور فرہنگی خدمات کے دوران پہلی مرتبہ باقاعدہ 'پاک ایران ثقافتی سیاحت (Pak-Iran Cultural Tourism)' کا ایک منفرد اور نیا سلسلہ متعارف کروایا۔ اس اقدام کا بنیادی مقصد یہ تھا کہ زائرین صرف مخصوص شہروں تک محدود نہ رہیں، بلکہ زیارات کے ساتھ ساتھ ایران کے تاریخی محلات، دلکش قدرتی مناظر، باغات اور قدیم تہذیب کا بھی مشاہدہ کریں۔"
            </p>
            <p className="text-sm md:text-lg leading-relaxed text-gray-700 urdu-text text-justify">
              "الحمدللہ، میری اس ادنیٰ سی کاوش کو عوامی اور سفارتی، دونوں سطحوں پر بے حد پذیرائی ملی۔ ذیل میں پیش کیا گیا 'ایران کا پہلا زیارتی و سیاحتی سفرنامہ' اسی تاریخی سلسلے کی ایک جھلک ہے۔.."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#D4AF37] mb-6 text-center bg-[#0b314d] inline-block px-8 py-2 rounded-full mx-auto shadow-md">🇮🇷 ایران: پہلا زیارتی، سیاحتی و معلوماتی سفر</h3>
          <p className="text-center text-gray-600 mb-8 font-bold">تحریر: شبیر احمد شگری (صدر، انجمن دوستی پاکستان و ایران)</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {safarNamaData.map((item, i) => (
              <div key={i} className={i === 4 ? "lg:col-span-2" : ""}>
                <TravelCard title={item.title} desc={item.desc} list={item.list} />
              </div>
            ))}
          </div>

          {/* 💡 مشورے */}
          <div className="bg-[#0b314d] text-white p-8 rounded-2xl shadow-xl mb-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[80px] opacity-30"></div>
             <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 urdu-text flex items-center gap-2"><span className="text-3xl">💡</span> زائرین و سیاحوں کے لیے میرے اہم مشورے</h3>
             <ul className="space-y-3 font-light text-sm md:text-base">
               {tipsData.map((tip, i) => (
                 <li key={i}><strong className="text-[#D4AF37]">{tip.title}</strong> {tip.desc}</li>
               ))}
             </ul>
          </div>

          {/* 🎥 ویڈیوز */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-6 text-center urdu-text border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto">سیاحت، انٹرویوز اور خبریں (ویڈیوز)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {videoGallery.map((vid, i) => (
              <VideoCard key={i} url={vid.url} title={vid.title} setActiveVideo={setActiveVideo} isCloudinary={vid.isCloudinary} />
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-[#0b314d] mb-6 text-center urdu-text">سفر اور ملاقاتوں کی جھلکیاں</h2>
          <ImageGallery images={travelGallery} />
        </div>
      </section>

      {/* 🎭 سیکشن 5: ثقافتی خدمات اور فیسٹیولز */}
      <section className="container mx-auto px-4 py-12 md:py-16 border-t-4 border-[#D4AF37]" dir="rtl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] mb-8 text-center urdu-text drop-shadow-sm">🎭 ثقافتی خدمات اور بین الاقوامی فیسٹیولز</h2>
        
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-200 mb-12">
          <p className="text-lg md:text-xl text-[#0f4c75] font-bold italic mb-6">
            "خانہ فرہنگ ایران (لاہور) میں اپنی سفارتی اور ثقافتی ذمہ داریوں کے دوران، مجھے دونوں برادر ممالک کے آرٹ، ادب اور ثقافت کو ایک دوسرے کے قریب لانے کا شاندار موقع ملا۔"
          </p>
          <div className="space-y-6">
             <div>
               <h4 className="text-xl font-bold text-[#D4AF37]">بین الاقوامی فلم اور میوزک فیسٹیولز:</h4>
               <p className="text-gray-700 mt-2 text-justify">ان ثقافتی پروگرامز میں انٹرنیشنل فلم فیسٹیولز اور میوزک فیسٹیولز کا انعقاد خاص طور پر قابلِ ذکر ہے۔ ان شاندار تقریبات میں شرکت کے لیے ایران اور پاکستان کے نامور اور بین الاقوامی شہرت یافتہ فلم میکرز، مایہ ناز پروڈیوسرز اور مشہور فلمی ستاروں نے لاہور کا دورہ کیا۔</p>
             </div>
             <div>
               <h4 className="text-xl font-bold text-[#D4AF37]">کتب میلے اور علمی نمائشیں:</h4>
               <p className="text-gray-700 mt-2 text-justify">فنونِ لطیفہ کے علاوہ علم و ادب کے فروغ کے لیے عظیم الشان بین الاقوامی کتب میلوں (Book Fairs) اور مختلف موضوعات پر مبنی ثقافتی نمائشوں کا انعقاد بھی مسلسل کیا جاتا رہا۔</p>
             </div>
          </div>
        </div>

        {/* 🎬 ایرانی فلم فیسٹیولز */}
        <h3 className="text-2xl md:text-3xl font-bold text-white bg-[#0b314d] inline-block px-8 py-3 rounded-t-2xl mb-0">🎬 لاہور میں دو عظیم الشان 'ایرانی فلم فیسٹیولز'</h3>
        <div className="bg-[#0b314d] p-6 md:p-10 rounded-b-2xl rounded-tl-2xl shadow-2xl mb-12 text-white border-b-4 border-[#D4AF37]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 p-6 rounded-xl border border-[#D4AF37]/40 backdrop-blur-sm">
               <h4 className="text-[#D4AF37] font-bold text-xl mb-3 border-b border-[#D4AF37]/30 pb-2">پہلا بین الاقوامی فلم فیسٹیول اور حوزہ ہنری کی شرکت</h4>
               <p className="font-light text-sm mb-4">پہلا عظیم الشان فلم فیسٹیول خانہ فرہنگ ایران اور معروف پاکستانی میڈیا پرسنالٹی کی 'مبشر لقمان پروڈکشنز' کے باہمی اشتراک سے لاہور کے معروف مقام 'رائل پام' میں منعقد کیا گیا۔</p>
               <ul className="list-disc list-inside text-sm font-light space-y-1 text-[#fff7cc]">
                 <li>ایک ہفتے کا میلہ</li>
                 <li>بین الاقوامی وفود کی شرکت</li>
                 <li>عوامی پذیرائی اور فری انٹری</li>
               </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-[#D4AF37]/40 backdrop-blur-sm">
               <h4 className="text-[#D4AF37] font-bold text-xl mb-3 border-b border-[#D4AF37]/30 pb-2">دوسرا بین الاقوامی فلم فیسٹیول</h4>
               <p className="font-light text-sm mb-4">پہلے فیسٹیول کی شاندار کامیابی کے بعد، دوسرا فلم فیسٹیول بھی اسی شان و شوکت کے ساتھ منعقد کیا گیا۔ پاکستانی شائقین کی سہولت کے لیے تمام فلمیں 'انگلش سب ٹائٹلز' کے ساتھ پیش کی گئیں۔</p>
               <ul className="list-disc list-inside text-sm font-light space-y-1 text-[#fff7cc]">
                 <li>انگلش سب ٹائٹلز (English Subtitles)</li>
                 <li>جوق در جوق عوامی شرکت</li>
               </ul>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-[#0b314d] text-center mb-4">پہلے فلم فیسٹیول کی گیلری</h4>
        <ImageGallery images={firstFestivalGallery} />

        <h4 className="text-xl font-bold text-[#0b314d] text-center mt-10 mb-4">دوسرے فلم فیسٹیول کی گیلری</h4>
        <ImageGallery images={secondFestivalGallery} />
      </section>

      {/* 🎶 سیکشن 6: سُر سنگیت */}
      <section className="bg-white py-12 md:py-16 border-t border-gray-200">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl font-bold text-[#0b314d] mb-6 text-center urdu-text">🎶 پاک ایران 'سُر سنگیت' اور بین الاقوامی میوزک فیسٹیولز</h2>
          
          <div className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-md border-r-4 border-[#D4AF37] mb-10">
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              میری ثقافتی سفارت کاری کا ایک انتہائی اہم باب دونوں ممالک کے عوام کو فن اور موسیقی کے ذریعے قریب لانا ہے۔ اس سلسلے میں ایک یادگار موقع 'پاک ایران سُر سنگیت' پروگرام تھا۔
            </p>
            <h4 className="text-xl font-bold text-[#D4AF37] mb-2">ایرانی 'کوک بینڈ' (Kook Band) کی پاکستان آمد:</h4>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              میں نے خانہ فرہنگ ایران، والڈ سٹی اتھارٹی اور الحمرا کے اشتراک سے ایران کے عالمی شہرت یافتہ کلاسیکل میوزک گروپ "کوک بینڈ" کو مدعو کیا۔
            </p>
            
            <h4 className="text-xl font-bold text-[#D4AF37] mb-2">تاریخی مقامات پر پرفارمنسز:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong className="text-[#0b314d]">شاہی حمام (دہلی گیٹ):</strong> ایرانی کلاسیکل موسیقی کی سحر انگیز محفل، جس میں قوال شیر میانداد نے بھی فن کا مظاہرہ کیا۔</li>
              <li><strong className="text-[#0b314d]">الحمرا آرٹس کونسل:</strong> کوک بینڈ کی پاکستانی فنکاروں کے ساتھ مشترکہ پرفارمنس۔</li>
            </ul>
          </div>

          <ImageGallery images={surSangeetGallery} />
        </div>
      </section>

      {/* 🏛️ سیکشن 7: ایوانِ اقبال */}
      <section className="bg-gray-100 py-12 md:py-16 border-t-2 border-[#D4AF37]/50">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-8 text-center urdu-text">🏛️ ایوانِ اقبال کی تاریخی نمائش اور صحافتی کوریج</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
             <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#0b314d]">
               <h4 className="text-lg font-bold text-[#D4AF37] mb-2">صحافتی اعتراف (Media Coverage):</h4>
               <ul className="list-disc list-inside text-gray-700 space-y-2">
                 <li><strong className="text-[#0b314d]">روزنامہ 'افلاک':</strong> ثقافتی اور ہنری نمائش کی شاندار کوریج۔</li>
                 <li><strong className="text-[#0b314d]">روزنامہ 'پاکستان':</strong> میری خصوصی تحریر "انقلابِ اسلامی ایران کے ثمرات" شائع ہوئی۔</li>
               </ul>
             </div>
             
             <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#D4AF37]">
               <h4 className="text-lg font-bold text-[#0b314d] mb-2">فن اور ہنر کی عالمی سرپرستی:</h4>
               <p className="text-gray-700 text-justify">ایران سے آئے ہوئے مرصع کاری، کندہ کاری (قلم زنی) اور ملبوسات کے ماہر اساتذہ (رمضان معمر، سیدہ فہیمہ کاظمی) کی نمائش کا اہتمام میرے ذمے تھا۔</p>
             </div>
          </div>

          <ImageGallery images={ewanIqbalGallery} />
        </div>
      </section>

      {/* 🛡️ سیکشن 8: گلوبل وومن میڈیا */}
      <section className="bg-white py-12 md:py-16 border-t border-gray-200">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-6 text-center urdu-text">🛡️ گلوبل وومن میڈیا: نظریاتی آئیڈیا سے عملی حقیقت تک</h2>
          
          <div className="bg-pink-50 p-6 md:p-10 rounded-2xl shadow-md border-r-4 border-pink-500 mb-10">
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              "گلوبل وومن میڈیا" کا قیام پاک ایران ثقافتی و ابلاغی تعلقات میں ایک سنگِ میل ہے۔
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {globalWomenMediaData.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-pink-600 font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-pink-100 rounded-lg text-center">
              <strong className="text-pink-700">مشن کا خلاصہ:</strong>
              <p className="text-gray-700 mt-2">یہ تنظیم ثابت کرتی ہے کہ شریعت کے دائرے میں رہ کر خواتین ہر میدان میں مردوں کے شانہ بشانہ کامیابیاں حاصل کر سکتی ہیں۔</p>
            </div>
          </div>

          <ImageGallery images={globalWomenGallery} />
        </div>
      </section>

      {/* 🌍 سیکشن 9: بین الاقوامی ٹورازم اور کتب میلے */}
      <section className="bg-[#0b314d] text-white py-12 md:py-16 border-t-4 border-[#D4AF37]">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-8 text-center urdu-text">🌍 بین الاقوامی ٹورازم نمائش اور کتاب میلے</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4 text-center border-b border-white/20 pb-2">ٹورازم نمائش کے مناظر</h3>
              <ImageGallery images={tourismExhibitionGallery} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4 text-center border-b border-white/20 pb-2">بین الاقوامی کتاب میلہ</h3>
              <ImageGallery images={bookFairGallery} />
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

      <Footer year="2026" />
    </div>
  );
}

// 🎨 ہیلپر کمپوننٹس

function TravelCard({ title, desc, list }) {
  return (
    <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border border-gray-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300">
      <h4 className="text-xl font-bold text-[#0b314d] mb-3 border-b border-gray-100 pb-2">{title}</h4>
      {desc && <p className="text-gray-700 text-sm mb-3 leading-relaxed text-justify">{desc}</p>}
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
        {list.map((item, idx) => {
          const parts = item.split(':');
          if (parts.length > 1) {
            return (
              <li key={idx}>
                <strong className="text-[#D4AF37]">{parts[0]}:</strong> {parts.slice(1).join(':')}
              </li>
            );
          }
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, idx) => (
        <div key={idx} className="relative group rounded-xl overflow-hidden border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 aspect-[4/3] bg-black">
          <img src={img} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    <div className="relative group rounded-xl overflow-hidden border-2 border-[#0b314d]/30 hover:border-[#D4AF37] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-black aspect-video" onClick={() => setActiveVideo(url)}>
      <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
        <div className="bg-[#D4AF37] p-3 md:p-4 rounded-full border-2 border-white shadow-[0_0_15px_rgba(212,175,55,0.8)] transform group-hover:scale-110 transition-transform">
          <FaPlay className="text-white pl-1" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-center">
        <h4 className="text-white font-bold text-xs md:text-sm urdu-text drop-shadow-md">{title}</h4>
      </div>
    </div>
  );
}