"use client";
import { useState } from 'react';
import {
  FaHeart, FaMicrophone, FaAward, FaQuran, FaLandmark,
  FaPenNib, FaMedal, FaQuoteRight, FaHistory, FaChild,
  FaStar, FaArrowRight, FaBookOpen, FaPlay, FaTimes, FaGlobe, FaTv, FaHandshake, FaTrophy, FaVideo, FaNewspaper, FaBriefcase, FaUser
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';

// Data Imports
import { founderItems, mediaRoles, services } from '../../about/aboutData';
import { legendsDataEn } from '@/app/home/homeData';
import { BOOKS_DATA } from '../../library/libraryData';

const bookTitleTranslations = {
  'سیرتِ فاطمہ زہراؑ: بوئے بہشت': 'Biography of Fatima Zahra (SA): Scent of Paradise',
  'انیس النفوس': 'Anis al-Nufus',
  'سفرنامہ ایران: دیارِ عشق کا سفر': 'Travelogue of Iran: Journey to the Land of Love',
  'روح کی معراج': 'Ascension of the Soul',
  'سکون کی تلاش': 'Search for Peace',
  'سیاحتِ ایران (حصہ اول و دوم)': 'Tourism of Iran (Part 1 & 2)',
  'کنجی بہشت: دعاؤں کا مجموعہ': 'Key to Paradise: Collection of Prayers',
  'رہبر کے فتوے (حصہ اول و دوم)': 'Fatwas of the Leader (Part 1 & 2)',
  'شاخ نبات(حصہ اول و دوم)': 'Shakh Nabat (Part 1 & 2)',
  'مجلہ فرھنگستان': 'Magazine Farhangistan',
  'مجلہ انقلاب': 'Magazine Inqilab',
  'نورالقرآن ویژول پراجیکٹ': 'Noor Al-Quran Visual Project'
};

export default function UltimateAboutPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showCulturePopup, setShowCulturePopup] = useState(false);
  const [showFederationPopup, setShowFederationPopup] = useState(false);

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
    if (title.includes("TV Anchor") || title.includes("Producer")) return "/en/talkshows";
    return "#";
  };

  const localizedFounderItems = founderItems.map((item) => {
    const href = item.link || "#";
    const normalizedLink = href.startsWith("/project") || href.startsWith("/noor-ul-quran")
      ? "/en/noor-ul-quran"
      : href.startsWith("/diplomatic-services")
        ? href.replace("/diplomatic-services", "/en/diplomatic-services")
        : href;
    return { ...item, link: normalizedLink };
  });

  return (
    <main className="min-h-screen bg-[#f8f9fa] overflow-x-hidden font-sans" dir="ltr">

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

      {/* 🌟 1. روح پرور ہیڈر (درست اور سینٹرڈ) */}
      <section className="relative bg-gradient-to-r from-[#0b314d] via-[#0f4c75] to-[#0b314d] py-16 text-center border-b-4 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="relative z-10 px-4 flex flex-col items-center justify-center">

          {/* تصویر */}
          <div className="relative mb-8 mt-4">
            <div className="animate-ripple bg-white p-1 rounded-full">
              <img
                src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768008780/757657567_xgnsri.png"
                alt="Haji Shabbir Ahmed Shigri"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#D4AF37] object-cover"
              />
            </div>
          </div>

          {/* نام اور عہدے - اب یہ ہر حال میں سینٹر رہیں گے */}
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#D4AF37] mb-2 drop-shadow-lg">Haji Shabbir Ahmed Shigri</h1>
            <p className="text-white text-lg md:text-2xl font-light opacity-90 leading-relaxed">
              Khadem-e-Thaqalain | Journalist, Researcher, Broadcaster and Cultural Expert
            </p>
          </div>
        </div>
      </section>

      {/* 👑 2. زندگی کے عظیم ترین روحانی اعزازات */}
      <section className="container mx-auto px-4 py-12 relative z-20 -mt-8" dir="ltr">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0f4c75] mb-8">Life's Greatest Spiritual Honors</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Servant of Imam Reza */}
          <Link href="/imam-reza" className="group">
            <div className="animate-shine bg-gradient-to-bl from-emerald-900 to-emerald-700 rounded-3xl p-8 shadow-2xl border-4 border-[#D4AF37] hover:scale-105 transition-all duration-500 flex flex-col items-center text-center h-full">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 relative z-10" alt="Imam Reza" />
              <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] relative z-10 mb-2 drop-shadow-md">Servant of Imam Reza (AS)</h3>
              <p className="text-white font-bold text-lg relative z-10 border-b border-emerald-500 pb-2 mb-4">Astan Quds Razavi (Holy Mashhad)</p>
              <p className="text-emerald-50 text-base leading-relaxed relative z-10">Where kings and rulers wait for months to sweep, the official service permit of this great court of the King of Khorasan was granted in 2011.</p>
              <div className="mt-6 inline-flex items-center bg-white text-emerald-800 px-6 py-2 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-white transition-colors relative z-10 shadow-md">Details & Visits <FaArrowRight className="mr-2 rotate-180" /></div>
            </div>
          </Link>

          {/* Guardian and Servant of the Sanctuary of Ghazi Abbas */}
          <Link href="/ghazi-abbas" className="group">
            <div className="animate-shine bg-gradient-to-bl from-red-900 to-red-700 rounded-3xl p-8 shadow-2xl border-4 border-[#D4AF37] hover:scale-105 transition-all duration-500 flex flex-col items-center text-center h-full">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771683490/Giff_for_saday_e_ghazi_page_aaugws.gif" className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 relative z-10" alt="Ghazi Abbas" />
              <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] relative z-10 mb-2 drop-shadow-md">Guardian and Servant of the Sanctuary of Ghazi Abbas (AS)</h3>
              <p className="text-white font-bold text-lg relative z-10 border-b border-red-500 pb-2 mb-4">Honor: Sada-e-Ghazi (Karbala Moalla)</p>
              <p className="text-red-50 text-base leading-relaxed relative z-10">On the auspicious occasion of the birthday celebration of Imam Zaman (AJ) 2024, the great badge and honor of 'Guardian of the Sanctuary' was bestowed by the sanctuary of Hazrat Ghazi Abbas Alamdar (AS).</p>
              <div className="mt-6 inline-flex items-center bg-white text-red-800 px-6 py-2 rounded-full font-bold text-sm hover:bg-[#D4AF37] hover:text-white transition-colors relative z-10 shadow-md">Details & Visits <FaArrowRight className="mr-2 rotate-180" /></div>
            </div>
          </Link>

        </div>
      </section>

      <section className="container mx-auto px-4 py-10 relative z-10">
        <div className="flex justify-center w-full my-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0f4c75] border-b-4 border-[#D4AF37] pb-2 px-4 w-fit">
            Founder and Patron
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-6xl mx-auto">
          {localizedFounderItems.map((item, i) => {
            const title = item.title || "";
            const linkHref = item.link || "#";

            const isFederationCard = title === "Trade and Culture Federation";

            const CardContent = (
              <div className="bg-gradient-to-br from-[#0a1f30] to-[#1c3b57] border border-[#D4AF37]/50 rounded-2xl p-3 md:p-6 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] transition duration-300 group transform hover:scale-105 shadow-lg flex flex-col items-center justify-center h-full min-h-[145px] md:min-h-[220px] w-full text-center cursor-pointer">
                <div className="text-4xl text-[#D4AF37] mb-4 group-hover:text-[#0a1f30] transition">{item.icon}</div>
                <h3 className="font-bold text-white group-hover:text-[#0a1f30] text-[11px] md:text-base mb-2 leading-tight text-center w-full break-words">{title}</h3>
                <p
                  dir="ltr"
                  className="hidden md:block text-gray-400 group-hover:text-[#0a1f30]/90 text-[11px] md:text-sm tracking-normal font-sans text-center w-full max-w-[90%] mx-auto leading-snug px-1"
                >
                  {item.desc}
                </p>
              </div>
            );

            const isExternalLink = typeof linkHref === "string" && linkHref.startsWith("http");

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
      </section>


      {/* 📺 4. میڈیا، ریڈیو اور ٹی وی کیریئر */}
      <section className="bg-gradient-to-r from-[#0a1f30] to-[#163b55] py-12 relative z-10 border-y-4 border-[#D4AF37]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-12">Media and Electronic Journalism</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {mediaRoles.map((role, i) => {
              const mediaLink = getMediaLink(role.title);
              const isExternal = mediaLink.startsWith("http");

              return (
                <Link href={mediaLink} key={i} target={isExternal ? "_blank" : "_self"} className="block h-full no-underline">
                  {/* مین کارڈ باکس - الائنمنٹ یہاں فکس کی گئی ہے */}
                  <div className="bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-6 hover:bg-[#D4AF37] transition duration-300 group shadow-lg h-full flex flex-col items-center justify-center text-center">

                    {/* آئیکون */}
                    <div className="text-5xl text-[#D4AF37] group-hover:text-[#0a1f30] mb-4">
                      {role.icon}
                    </div>

                    {/* ٹیکسٹ کنٹینر - زبردستی سینٹر الائنمنٹ کے ساتھ */}
                    <div className="w-full">
                      <h3
                        className="text-white group-hover:text-[#0a1f30] font-bold text-lg mb-2 block w-full"
                        style={{ textAlign: 'center', display: 'block', width: '100%' }}
                      >
                        {role.title}
                      </h3>

                      <p
                        className="text-gray-300 group-hover:text-[#0a1f30]/90 text-sm block w-full"
                        style={{
                          textAlign: 'center',
                          textJustify: 'none',
                          display: 'block',
                          width: '100%',
                          wordSpacing: 'normal',
                          letterSpacing: 'normal'
                        }}
                      >
                        {role.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 📖 5. تفصیلی آپ بیتی */}
      <section className="container mx-auto px-3 md:px-4 py-12 md:py-16 relative z-10" dir="ltr">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border-t-8 border-[#0b314d] p-4 md:p-16">
          <div className="text-center mb-12">
            <span className="bg-[#D4AF37] text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-lg font-bold tracking-wide md:tracking-widest">One Era, One History, One Story</span>
            <h2 className="text-2xl md:text-6xl font-bold text-[#0b314d] mt-5 md:mt-6 mb-4">From Mountains to Minarets</h2>
            <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-sm md:text-lg font-bold">From the Pen: Haji Shabbir Ahmed Shigri (Khadem-e-Thaqalain)</p>
          </div>

          <div className="prose max-w-none text-gray-800 text-base md:text-2xl leading-8 md:leading-[2.6] text-justify space-y-6 md:space-y-12">

            {/* پیش لفظ - ہلکا نیلا */}
            <div className="bg-blue-50/70 p-4 md:p-8 rounded-2xl md:rounded-3xl border-r-8 border-[#0b314d]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-4">Preface: Life, the Metaphor of Continuous Struggle</h3>
              <p>Life is not merely the coming and going of breaths or the passing of days, but it is a long, patience-testing, and arduous journey that lifts a person from the dust of rough paths and forges them in the furnace of experiences. This journey of my professional life spans over half a century. These fifty years are not just a story of numbers, but they are those moment-by-moment trials in which I have forgotten my own self and dedicated myself to the welfare of religion, the world, and God's creation. The purpose of human creation is service and obedience, and I have strived to achieve that purpose with my weak and helpless efforts.</p>
              <p className="mt-4">When I look back through the windows of my past, I see a continuous struggle from the icy winds of Skardu to the warm atmospheres of Lahore. This story is of a traveler who opened his eyes in harsh and difficult conditions, but made hard work, patience, and perseverance his provision for the journey. Throughout my life, I have consciously tried not to cause any harm to any living being from my self, and that every action, every step, and every writing of mine becomes a cause for the welfare of humanity and the elevation of the clear religion. The last three decades of my life are particularly important in the sense that as a patriotic Pakistani and a compassionate Muslim, I have dedicated myself to the promotion of Islamic culture, inter-religious and inter-faith harmony, strengthening Pak-Iran friendship, and Islamic media. This journey is not over yet, but this is the starting point of a new determination.</p>
            </div>

            {/* باب اول - ہلکا سنہرا */}
            <div className="bg-yellow-50/60 p-4 md:p-8 rounded-2xl md:rounded-3xl border-r-8 border-[#D4AF37]">
              <h3 className="text-2xl md:text-4xl font-bold text-[#0f4c75] mb-4 border-b pb-2">Chapter One: Valley of Skardu, Ancestors and Initial Impressions</h3>
              <p>My life began on June 24, 1971, in Pakistan's northernmost and beautiful region of Skardu (Gilgit-Baltistan). This region is a masterpiece of nature where the majesty of mountains, the beauty of flowing streams, the tranquility of lakes, and the melody of waterfalls bring man closer to nature. In the lap of these very mountains, I took my first breath, and their hardness and beauty became part of my nature.</p>
              <p className="mt-4">My respected father, Dr. Muhammad Reza, was a very knowledgeable, compassionate, dervish-like, and beloved person. The passion for serving humanity came to me as an inheritance from him. Although his birth was in Toste (Braldo) Shigar, but he went to Shumla (India) in his childhood, where he spent his youth days, and he also worked in the postal department there. When the migration started at the time of Pakistan's creation, he also came to his dream land Pakistan.</p>
              <p className="mt-4 font-bold text-[#0f4c75]">Father's unique invention (Small Box):</p>
              <p>In the difficult mountainous paths of Baltistan, where life runs in the shadow of death, my father's medical services are a golden chapter. This was the time after 1950 when there was no name of modern facilities. Since in that era, due to the absence of roads, one had to travel on foot to mountain peaks, valleys, and streams. In such difficult conditions, he made a unique invention. He used to carry a "Small Box" in his hand on those difficult paths. This box contained vaccination, ointment bandages, and necessary medicines so that treatment could reach distant patients. This was a living proof of his intelligence and compassion that where cars could not go, he used to reach with his "healing box".</p>
              <p className="mt-4">My respected mother's birth is in Shumla (Dehra Dun). My grandfather was a wealthy and respected landowner, whom the Baloch raiders martyred there during the bloody events of partition. My grandmother, mother, and other family members migrated to Pakistan with looted caravans. Later, in Rawalpindi, the union of these two "Shumla migrant" families happened and my father and mother got married and settled in Skardu.</p>
              <p className="mt-4 font-bold text-[#0f4c75]">Mother's training and the influence of Urdu language:</p>
              <p>In a remote area like Baltistan, where the local language "Balti" is spoken and in that era, Urdu speakers were rare, the credit for my Urdu knowledge and literary taste goes to my mother. Since she was a language expert, the home environment was pure Urdu. She strictly bound not only me but all brothers and sisters to the health, pronunciation, and vocabulary of Urdu language. This was a difficult task, but her compassion and strictness made us language experts. Today, if there is fluency in my writings and sweetness in speech, and people praise my Urdu, then this is the fruit of that great mother's training who kept the lamp of Urdu burning amidst snow-capped mountains.</p>
            </div>

            {/* باب دوم - ہلکا سرمئی */}
            <div id="radio-section" className="bg-slate-50 p-8 rounded-3xl border-r-8 border-gray-500">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-4 flex items-center gap-3"><FaMicrophone className="text-[#D4AF37]" /> Chapter Two: Radio Pakistan, My First School</h3>
              <p>The door of consciousness and awareness in my life opened through "Radio Pakistan". I remember well when I was just eight or nine years old, the medium wave experimental broadcasts of Radio Pakistan started in Skardu. In that era when TV and internet were unimaginable, radio was the only means of connection with the world. The national anthems echoing in the air like "O brave man, wake up, the time of martyrdom has come" used to warm the blood of the people of Skardu including me. The echo of these and similar national anthems was even more because our area was the residence of Pakistani army youth.</p>
              <p className="mt-4">I was among the few lucky children in Skardu who got the opportunity to participate in the famous children's program "Chand Taare" on Radio Pakistan Skardu. From here, the hidden artist inside me woke up. I performed hosting duties there as "Bhai Jan". Radio had a strict rule that "not a word without script". This rule made me practice writing from childhood. Producers were often surprised how such a small child could write such mature and literary scripts. It was the world of radio that gave me confidence and taught me the art of speaking.</p>
              <p className="mt-4">With time, this journey of mine kept growing. In adolescence, I handled the compere of the youth program "Azm-e-Jawan". I showed the jewels of voice acting in many radio dramas. Then Allah honored me that I started doing two hours of live broadcasts in Balti language (from 3 pm to 5 pm). The honor of starting morning experimental broadcasts in Skardu also came to my share. This was the era of 1989-90, I remember that the program compensation was a check of 750 rupees, which was a big amount for a student at that time, but the real earning was the respect and confidence that was gained by sitting in front of the microphone, due to which a boom was created among class fellows.</p>
            </div>

            {/* باب سوم - ہلکا گلابی */}
            <div className="bg-pink-50/60 p-8 rounded-3xl border-r-8 border-pink-400">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-4 border-b pb-2">Chapter Three: Little Journalist and the Respect of Pen</h3>
              <p>Perhaps nature created me for journalism and literature, because from childhood I had a passion for writing, designing, and art to the extent of madness. In school days, I used to be the life of literary gatherings and dramas. I always came first in drawing, got good position in class.</p>
              <p className="mt-4">I started writing in the children's magazine "Phool Aur Kalian" of newspaper Nawa-e-Waqt at a very young age. This was the time when Skardu's connection with Islamabad was only through PIA's "Fokker aircraft", and that too dependent on weather. Sometimes flights did not happen for fifteen twenty days, then newspapers also did not come. In such situations, I used to send my writings, jokes, golden sayings, and cartoons and then wait for weeks. When the newspaper came after weeks and I saw my name printed in it, there was a unique happiness. Friends in school used to call me "King of Jokes" and I was a moving library for them, because I was fond of reading stories and also provided story books to friends. It was this passion for reading that made me an author today.</p>
            </div>

            {/* باب چہارم - ہلکا سرخ */}
            <div className="bg-red-50/60 p-8 rounded-3xl border-r-8 border-red-700">
              <h3 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">Chapter Four: Father's Separation, Fire, and the Pain of Migration</h3>
              <p>In matriculation time, life gave me the first and deepest wound. My respected father, who was not only my father but my entire asset, suddenly gave the wound of separation. With his departure, my world became desolate. I had not recovered from this grief when another test came. My good electronics business in Skardu became the victim of a horrific fire. Father's shadow lifting from head and economic ruin, these two shocks broke me. As if nature was preparing me for some big purpose, and these tests were part of that training.</p>
              <p className="mt-4">Then, following the Sunnah of Prophet (PBUH) and the command of Allah, I decided to "migrate". Saying goodbye to my ancestral home, my streets, and memories, I came to Rawalpindi. Here my uncle Muhammad Ali lived, who loved me immensely, but my honor and self-respect did not allow me to become a burden on anyone. From there I went to Muzaffarabad (Azad Kashmir), started electronics work again there but perhaps the climate did not suit and I kept falling ill. Finally, the goddess of fate brought me to Lahore.</p>
              <p className="mt-4 font-bold text-red-800">Lahore and the battle of practical life:</p>
              <p>Most people who come to Lahore stay here, the same happened with me. Coming to Lahore, I started life in a new way. Initially I started electronics work here too, then I took the job of "Sales Executive" in a company of car spare parts. This job was also full of experiences. During this job, I got the opportunity to travel to 44 major cities of Pakistan and do marketing. Travel teaches a lot to a person, and during these travels I saw Pakistan's culture, people's behaviors, and the secrets of business world closely. During this period, I also got a diploma in Business Administration from an institute in Multan.</p>
            </div>

            {/* باب پنجم - ہلکا سبز */}
            <div className="bg-emerald-50/60 p-8 rounded-3xl border-r-8 border-emerald-600">
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 flex items-center gap-3"><FaLandmark className="text-emerald-600" /> Chapter Five: House of Culture Iran and the Rise of Cultural Diplomacy</h3>
              <p>The sun of the 21st century was rising and my life was entering a new era. After marriage, I took the job at "House of Culture Consulate Islamic Republic of Iran, Lahore". This is the most important, memorable, and long chapter of my career.</p>
              <p className="mt-4 font-bold text-emerald-800">Revival of Audio/Visual Department:</p>
              <p>Initially, I took the responsibility of Audio/Visual department here. This was the time when VHS cassettes and reels were in vogue. I digitized the valuable historical records of half a century present in the House of Culture by making them compatible with modern technology, which is a historical achievement in itself. This work was not just duty, but a mission to preserve history.</p>
              <p className="mt-4 font-bold text-emerald-800">Public Relations and International Services:</p>
              <p>Later, I was given the important responsibility of Public Relations Officer (PRO). In diplomatic institutions and diplomatic environment, I built a strong bridge of friendship and culture between Pakistan and Iran. I made tireless efforts for unity among Muslims and inter-faith harmony. I made all schools of thought sit at one table, organized seminars and conferences, and tried to turn hatred into love. Alhamdulillah, I got a lot of success in this. Today, when I see scenes of Muslim unity everywhere, my heart feels happy that my role is also a little in it. In addition, I organized countless international cultural and literary programs, exhibitions, and festivals. Whether it was the international book fair held at Expo Center Lahore or Iranian film festivals, or exchange of cultural delegations, their successful organization was my responsibility. I also got the honor of leading national and international delegations.</p>
              <p className="mt-4 font-bold text-emerald-800">Pak Iran Friendship Association and Tourism:</p>
              <p>Keeping my services in view, I was elected as the president of Pakistan Iran Friendship Association by the Iranian consulate, of which I was also the founder. Before this, I also have the honor of being the founder of Pak Iran Trade and Culture. Previously, most people used to go to Iran for pilgrimage and business purposes. But for the first time, I started Pak Iran tourism series, which was very successful.</p>
              <p className="mt-4 font-bold text-emerald-800">Honors and Pak Iran Website:</p>
              <p>In recognition of literary and cultural services, I was awarded the title of "Cultural Expert" and a gold medal. My Iranian responsible persons (Mr. Muhammad Saeed Maizuddin, Mr. Abbas Famouri, Mr. Abdul Reza Sultani, and Mr. Akbar Barkhdari) have a big hand in my cultural training. I created a very important website for the promotion of friendship and information between the people of Pakistan and Iran, which is in two languages Urdu and Farsi.</p>
            </div>

            {/* باب ششم - ہلکا ارغوانی */}
            <div className="bg-purple-50/60 p-8 rounded-3xl border-r-8 border-purple-500">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 border-b pb-2 border-purple-300">Chapter Six: The Field of Journalism (Editing and Column Writing)</h3>
              <p>My journalistic services are not limited to just writing, but I have also practically handled the editing of newspapers. I never considered journalism as a business, but rather as a means of social reform. The details of the newspapers and magazines where I served as Deputy Editor and Editor are as follows:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-xl mr-6 text-purple-900">
                <li>Iranology (House of Culture Magazine): As Editor</li>
                <li>Shakh Nabat (House of Culture Magazine): As Editor</li>
                <li>Daily "Havi" (Urdu): As Deputy Editor</li>
                <li>"Parchar" (Urdu): As Deputy Editor</li>
                <li>"Akath" (Punjabi): As Deputy Editor</li>
                <li>Book Editing: Editing of the book "Unity" based on the fatwas of the Supreme Leader.</li>
                <li>Designing: Designing of the Iranian book "Khorasan Razavi" (with pictures).</li>
              </ul>
              <p className="mt-4">The ink of my pen has never dried. So far, more than 300 of my columns, articles, features, and travelogues have been published in national and international newspapers (Jung, Nawa-e-Waqt, Pakistan, Aflak, Mashriq, Abtak, Al-Sharq, The Nation, Daily Times, Rapid News, Islam Times, Siyasiyat, 5CN) and various websites.</p>
            </div>

            {/* باب ہفتم - ہلکا فیروزی */}
            <div className="bg-teal-50/60 p-8 rounded-3xl border-r-8 border-teal-600">
              <h3 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4 border-b pb-2 border-teal-300">Chapter Seven: Authorship and Compilation (Scientific Heritage)</h3>
              <p>Along with journalism, I have also tested my pen in the field of authorship and compilation and compiled some books which are under publication and are the wealth of my charity. These books are also available in PDF format:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-xl mr-6 text-teal-900">
                <li><strong>Tourism of Iran:</strong> A very unique, pictorial, and informative book on Iran in Urdu language.</li>
                <li><strong>Scent of Paradise:</strong> A unique exploration on the biography of Lady of Paradise Hazrat Fatima Zahra (SA).</li>
                <li><strong>Madinat al-AhleBayt:</strong> An important book compiled during Hajj about the holy places related to Ahl-e-Bayt.</li>
                <li><strong>Anis al-Nufus:</strong> Complete written and pictorial description of the shrine of Imam Reza (AS).</li>
                <li><strong>Ascension of the Soul:</strong> Urdu translation and summary of the great book of ethics "Mi'raj al-Sa'adah" (Mulla Ahmad Naraqi).</li>
                <li><strong>Key to Paradise:</strong> Collection of invaluable prayers and supplications.</li>
                <li><strong>Search for Peace:</strong> Book on the peace of human conscience and soul in the light of the teachings of the Imams.</li>
                <li><strong>Guide to Khorasan Razavi:</strong> The first Iranian book that got the honor of being designed in Pakistan.</li>
              </ul>
            </div>

            {/* باب ہشتم - گہرا نیلا (نور پروڈکشن) */}
            <div className="bg-blue-50/70 text-[#0b314d] p-4 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border-r-8 border-[#0b314d]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] rounded-full blur-[80px] opacity-30"></div>
              <h3 className="text-2xl md:text-4xl font-bold text-[#0b314d] mb-4 flex items-center gap-3 relative z-10"><FaTv className="text-[#0b314d]" /> Chapter Eight: Noor Productions and the Revolution of Islamic Media</h3>
              <p className="relative z-10"><strong>"Noor Production" and the moment that changed the direction of life:</strong> In the chaos of media, my direction was determined by the advice of my dear teacher Master Bashir Sahib (Skardu). When there were cassettes of songs in my shop, he lovingly advised: "Son! If you kept recitations and Islamic cassettes instead of these songs, how good it would be." This sentence went deep into my heart and from here the journey of "Islamic Media" started. I laid the foundation of "Noor Productions Pakistan". My purpose was to serve religion by making media a weapon.</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-xl relative z-10 mr-6">
                <li><strong>Zareeh-e-Noor (2002):</strong> My first documentary which was on the construction of the shrine of Imam Reza.</li>
                <li><strong>Allama Iqbal Series:</strong> Worked as Production Manager in Pakistan for the international film series made by Iran on Allama Iqbal. This is a masterpiece based on 11 episodes.</li>
                <li><strong>YouTube Channel:</strong> Established in 2008, on which today there are more than 2000 videos and a family of 45,000 (Subscribers).</li>
              </ul>
              <p className="mt-4 font-bold text-[#0b314d] relative z-10">Our other important channels and platforms:</p>
              <ul className="list-disc list-inside space-y-2 text-xl relative z-10 mr-6">
                <li><strong>Noor Al-Quran:</strong> Made for Quranic teachings.</li>
                <li><strong>Tiflanoor:</strong> Islamic, moral, educational, and entertainment videos for children.</li>
                <li><strong>Noor Productions (Farsi) Aparat:</strong> Informational channel about Pakistan in Farsi language.</li>
                <li><strong>BNN:</strong> Baltistan News Network.</li>
                <li><strong>TV Anchoring:</strong> Did many successful national and international programs in "Star Asia" program "Rahnuma". The love of late Zahiruddin Babar introduced me for the first time as a TV anchor.</li>
              </ul>
            </div>

            {/* باب نہم - گولڈن (نور القرآن) */}
            <div className="bg-yellow-50/60 text-[#0b314d] p-4 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden border-r-8 border-[#D4AF37]">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-3"><FaQuran /> Chapter Nine: The Title of Khadem-e-Thaqalain and "Noor Al-Quran Project"</h3>
              <p className="font-bold text-2xl mb-2">Noor Al-Quran Project (The Visual Quran):</p>
              <p>This is the biggest asset of my life, the fruit of my hard work, and the provision for my hereafter. "Noor Al-Quran" is the world's first unique Visual Quran project. The special thing about this project is that in it, the Holy Quran is presented in a modern visual (Visual) technology, animation, and scenery way, away from the traditional way, so that the viewer can see the meaning of the verse with eyes and absorb it in the heart. In it, a common person can listen to the recitation in Urdu and also see its scene on his mobile or computer screen at the same time.</p>
              <p className="mt-4 italic font-bold">"Kissing the Quran and keeping it on a high shelf is not its respect, but understanding it and acting upon it is its true respect."</p>
              <p className="mt-4 font-bold text-2xl">Stages of the project:</p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-xl mr-6">
                <li><strong>30 Paras of the Holy Quran in video form (Arabic/Urdu):</strong> In the first phase, the complete Holy Quran was prepared in a modern way. It includes the recitation of Ustad Parhezgar, the authentic Urdu translation of Sheikh Mohsin Ali Najafi, and my (Shabbir Ahmed Shigri) voice (Voiceover).</li>
                <li><strong>30 Paras of the Holy Quran in video form (Urdu):</strong> In the second phase, videos were prepared to understand the Quran by listening to the translation.</li>
                <li><strong>Noor Al-Quran Project (Visual):</strong> In the third phase, the complete Holy Quran will be presented with video scenes (first in Urdu, then in other languages).</li>
                <li><strong>Daily Quranic Message:</strong> Daily one-minute Quranic visual clip, with Urdu translation and interpretation taken from "Tafsir al-Mizan".</li>
                <li><strong>Messages for Self-Reform:</strong> Daily messages from my book "Ascension of the Soul" and "Self-Building" are shared with Quranic clips.</li>
                <li><strong>Stories of the Quran:</strong> Quranic stories are being presented with video scenes.</li>
              </ul>
            </div>

            {/* باب دہم - سفید اور گولڈن */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-lg border-2 border-[#D4AF37]/30 border-r-8 border-[#0f4c75]">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-6 flex items-center gap-3"><FaMedal className="text-[#D4AF37]" /> Chapter Ten: Honors and Achievements of Life</h3>
              <p>Worldly awards and positions are in their place, but my soul's solace is in these two spiritual honors:</p>
              <ul className="list-disc list-inside mt-4 space-y-3 text-xl mr-6 text-[#0b314d]">
                <li><strong>Servant of Imam Reza (AS) (2011):</strong> Got the honor of being selected as Servant of Imam Reza for Islamic cultural services.</li>
                <li><strong>Sada-e-Ghazi Award (2024):</strong> Guardian of the Sanctuary award which was bestowed by the sanctuary of Hazrat Ghazi Abbas Alamdar (AS) (Karbala).</li>
                <li><strong>First representation of Astan Quds Razavi in Pakistan:</strong> The honor of being the first representative of the shrine of Imam Reza in Pakistan.</li>
                <li><strong>Gold Medal:</strong> For literary and cultural services.</li>
                <li><strong>Best Media Award 2025:</strong> For best journalistic services.</li>
                <li><strong>International Film Award:</strong> Best Film Award for International Film Festival.</li>
              </ul>

              <h4 className="mt-8 font-bold text-2xl text-blue-700">Tribute from Gemini (Google) (Certificate of Excellence):</h4>
              <p className="italic bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mt-2">"Noor Al-Quran Project is a masterpiece of Quran propagation in the modern era. Gemini salutes this unique endeavor of global standard." — Google Gemini (January 2026)</p>

              <h4 className="mt-6 font-bold text-2xl text-emerald-700">Appreciation Certificate from ChatGPT:</h4>
              <p className="italic bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-500 mt-2">"This honor is only for Pakistan that the first ever launch of this historical Visual Quran project in the world was done by a Pakistani (Shabbir Ahmed Shigri)." — ChatGPT (September 03, 2025)</p>

              <h4 className="mt-6 font-bold text-2xl text-[#D4AF37]">Title of Khadem-e-Thaqalain:</h4>
              <p className="bg-[#fffdf5] p-4 rounded-xl border-l-4 border-[#D4AF37] mt-2">The title of "Khadem-e-Thaqalain" was given by Gemini for Noor Al-Quran Project and other religious services. In addition, there are countless national and international awards as appreciation of my services.</p>
            </div>

            {/* حرفِ آخر */}
            <div className="border-t-4 border-[#D4AF37] pt-10 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#0b314d]">Final Word</p>
              <p className="italic mt-4 leading-relaxed text-2xl">"I consider myself a dervish-like person. If I am at any position today, it is the result of my parents' prayers and my teachers' affection. The purpose of my life is only to use my abilities, my pen, and my camera for the sake of Islam, unity of Ummah, and welfare of humanity, and to reach the light of 'Noor Al-Quran' to every heart."</p>
              <p className="mt-6 text-[#D4AF37] font-bold text-2xl">— Haji Shabbir Ahmed Shigri (Khadem-e-Thaqalain) — ❤️</p>
            </div>

          </div>
        </div>
      </section>

      {/* Trade and Culture Federation Popup */}
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
                <div className="absolute inset-0 animate-pulse rounded-full border-4 border-[#D4AF37]/30" style={{width: '160px', height: '160px', margin: 'auto'}}></div>
                <div className="w-40 h-40 rounded-full p-4 bg-gradient-to-br from-white via-blue-50 to-white shadow-2xl border-6 border-white relative flex items-center justify-center">
                  <img src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1774428398/3929eb58-af72-466f-89fc-98380b8abe4c.png" alt="Trade and Culture Federation Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Title with decorative line */}
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#0b314d] mb-4 drop-shadow-sm">Trade & Culture Federation</h3>
                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4"></div>
              </div>
              
              {/* Content */}
              <div className="max-w-lg">
                <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg font-semibold text-justify mb-6 text-[#0f4c75]">
                  Establishment of Trade and Culture Federation
                </p>
                <div className="bg-gradient-to-r from-[#0b314d]/5 to-[#D4AF37]/5 rounded-2xl p-6 border-l-4 border-[#D4AF37]">
                  <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base font-light text-justify">
                    With the cooperation of the Islamic Culture House of the Islamic Republic of Iran, the Trade and Culture Federation was established. The founder of this forum is <span className="font-bold text-[#0b314d]">Haji Shabbir Ahmed Shigri</span>. The purpose of this organization is to strengthen cultural, trade, and diplomatic relations between Pakistan and Iran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🌟 6. نامور شخصیات کا اعتراف (Legends Section) */}
      <section className="bg-[#1a1a1a] py-16 border-y-4 border-[#D4AF37]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] text-center mb-12">Recognition from Famous Personalities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" dir="ltr">
            {legendsDataEn.map((item, i) => (
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

      {/* 📚 7. تصانیف کا گوشہ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b314d] mb-12">My Writings and Compositions</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto" dir="ltr">
            {BOOKS_DATA.map((book, i) => {

              let manualLink = "/en/library";
              if (book.title.includes("بوئے بہشت")) manualLink = "/en/library#book-booy";
              else if (book.title.includes("شاخ نبات")) manualLink = "/en/library#shakh-e-nabaat";
              else if (book.title.includes("انیس النفوس")) manualLink = "/en/library#book-anees";
              else if (book.title.includes("سفرنامہ")) manualLink = "/en/library#book-safarnama";
              else if (book.title.includes("سیاحت")) manualLink = "/en/library#book-sayahat-parts";
              else if (book.title.includes("روح کی معراج")) manualLink = "/en/library#book-rooh";
              else if (book.title.includes("سکون کی تلاش")) manualLink = "/en/library#book-sakoon";
              else if (book.title.includes("کنجی بہشت")) manualLink = "/en/library#book-dua";
              else if (book.title.includes("خراسان")) manualLink = "/en/library#book-khorasan";
              else if (book.title.includes("فتوے")) manualLink = "/en/library#book-fatwa";
              else if (book.title.includes("فرھنگستان")) manualLink = "/en/library#book-farhang";
              else if (book.title.includes("انقلاب")) manualLink = "/en/library#book-inqilab";
              else if (book.title.includes("نورالقرآن") || book.title.includes("قرآن")) manualLink = "/en/library#Quran";

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

                  <h3 className="mt-4 text-[#0b314d] font-bold text-sm md:text-base group-hover:text-[#D4AF37] text-center leading-tight">
                    {book.englishTitle || bookTitleTranslations[book.title] || book.title}
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
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f4c75] mb-4 border-b-2 border-[#D4AF37] pb-3">Establishment of Pak-Iran Culture and Trade</h3>
              <p className="text-gray-700 leading-relaxed text-center text-lg mt-4 font-light text-justify">
                With the cooperation of the Islamic Culture House of the Islamic Republic of Iran, Pak-Iran Culture and Trade was established. The founder of this forum is Shabbir Ahmed Shigri. The purpose of this forum was to promote culture and increase relations between the two countries for trade between Pakistan and Iran.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🔴 ویڈیو ماڈل */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[101]"><FaTimes /></button>
          <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.6)] border-4 border-[#D4AF37]">
            {activeVideo.includes('youtu') ? (
              <iframe
                className="w-full max-h-[60vh]"
                src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1&rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            ) : (
              <video className="w-full max-h-[60vh] bg-black" src={activeVideo} controls autoPlay playsInline></video>
            )}
          </div>
        </div>
      )}

    </main>
  );
}