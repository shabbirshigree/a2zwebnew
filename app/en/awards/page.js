"use client";
import React, { useState } from 'react';
import { 
  FaAward, FaQuran, FaCamera, FaMicrophone, FaStar, FaCertificate,
  FaTimes, FaChevronLeft, FaChevronRight, FaGlobe, FaCheckCircle,
  FaMedal, FaHistory, FaHandHoldingHeart
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';

export default function AwardsPageEN() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryImages = [
    { id: 1, type: 'video', src: "https://res.cloudinary.com/dtqrziupt/video/upload/v1776626995/Gold_medal_video_1_fg3g20.mp4", title: "Gold Medal Award - Payam-e-Iqbal Conference" },
    { id: 2, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223233/Ghalaf_e_Kaba_se_bani_Topi_pehnney_ka_sharaf_pnga4i.png", title: "Honor of Wearing Hat Made from Kaaba Cover" },
    { id: 3, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768224440/IMG_20230608_193311_Copy_duqjr6.jpg", title: "Gift from Shrine of Hazrat Masoumeh (q)" },
    { id: 4, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg", title: "Gift from Shrine Officials of Imam Reza (a)" },
    { id: 5, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/film.jpg_ni9h46.jpg", title: "Best Film Association Award" },
    { id: 6, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202472/2025_media_best_award_efywu4.jpg", title: "Best Media Award 2025" },
    { id: 7, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202180/11111111_vqdys2.jpg", title: "Recognition at Mahan Air Tehran" },
    { id: 8, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202176/10806464_790099757733949_5823667161239303528_n_wq6rkd.jpg", title: "Shield from Advisor to Punjab Chief Minister" },
    { id: 9, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772800566/4539a45f-c921-4da8-8650-6708f6cc928b.png", title: "Sada-e-Ghazi Award (2024)" },
    { id: 10, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202192/IMG_5077_nblze6.jpg", title: "Award Ceremony Moment" },
    { id: 11, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202176/535244_956632024414054_963381716054665214_n_ynqteq.jpg", title: "Cultural House Recognition" },
    { id: 12, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202175/68986_737756589634933_8909297026733387903_n_hfwt57.jpg", title: "Cultural House Event" },
    { id: 13, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202192/IMG_5077_nblze6.jpg", title: "Cultural House Event" },
    { id: 14, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772833852/daacb29a-ceb0-4237-b306-4e9b203cff69.png", title: "Shield Received from Cultural Department of Imam Reza Shrine" },
    { id: 15, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772834492/cultural_atashi_Iran_se_gift_letey_huwey_iz0ogw_xuxszk.jpg", title: "Receiving a Frame from the Director General of Cultural House" },
    { id: 16, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772834889/benalmazahib_ham_ahangi_meetin_cutural_embassy_iran_Islamabad_w7inmn_tj8tzr.jpg", title: "Cultural Embassy of Islamic Republic of Iran, Islamabad" },
    { id: 17, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835163/Ag._Malaki_Head_of_Bunyad_pazohishay_e_Islamiastan_e_Qods_Mashad_Iran_Copy_corurb_m7uoyh.jpg", title: "Receiving a Gift from the Head of Bonyad Pazhohesh Islami" },
    { id: 18, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835353/IMG_20230522_12353811_Copy_mmry9w_o42miw.jpg", title: "Shield Presentation by Sheikh Shahzad Naqvi" },
    { id: 19, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835759/IMG_20191106_142828_Copy_hxufdv_vslbsj.jpg", title: "Former Chief Minister and Speaker Presenting a Book" },
    { id: 20, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835715/Mosin_ali_Najafi_ki_Mazar_par_Qurani_videos_k_Iftitah_k_moqah_pr_afhing_dvlllv.jpg", title: "Book Presentation at Maulana Ishaq Ali Najafi's Shrine" },
    { id: 21, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835950/44f75383-5760-43ed-baa8-25d1b01ff999.png", title: "Leader of Jamiat Ulama Pakistan Peer Masoom Naqvi" },
    { id: 22, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1776068815/d7363b70-ea09-4604-949c-68c6dc2e2672.png", title: "Letter of Appreciation from Astan Quds Razavi" },
    { id: 23, src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776027986/CamScanner_02-12-2022_14.42_99_rhufo2.jpg", title: "Grand Tribute by Ambassador of Iran" },
    { id: 24, src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776029658/iranian_safeer_gift.2png_slqrkw.png", title: "Special Commemorative Award" },
    { id: 25, src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776070812/d722682c-1c06-47f5-9192-9f174216a0d7.png", title: "Historic Imam Khomeini Card" },
    { id: 26, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772819737/99095883-b9dc-45aa-be3a-1b9cf7227454.png", title: "Best Media Award" },
    { id: 27, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202179/15109607_1349777948432791_632510272965563693_n_ztuzms.jpg", title: "International Film Award" },
    { id: 28, src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776071942/5f527bd4-a2d5-4bda-9626-239d4581b809.png", title: "IPEX Award" }
  ];

  const mainAwards = [
    {
      id: "astan-quds",
      title: "Letter of Appreciation from Astan Quds Razavi",
      icon: <FaCertificate className="text-4xl text-[#4a0000]" />,
      description: "This certificate of recognition was presented by Astan Quds Razavi (the holy shrine of Imam Reza, Mashhad, Iran) to Haji Shabbir Ahmed Shigri. It acknowledges his valuable scholarly cooperation and successful organization and management of intellectual and spiritual gatherings. The letter commends his efforts in promoting Islamic values and prays for his continued success in the light of the teachings of Imam Reza (A.S).",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/v1776068815/d7363b70-ea09-4604-949c-68c6dc2e2672.png",
      badge: "Astan Quds Honor"
    },
    {
      id: "ambassador-letter",
      title: "Grand Tribute by Ambassador of Iran",
      icon: <FaCertificate className="text-4xl text-[#4a0000] animate-pulse" />,
      description: "In this formal diplomatic letter, the Iranian Ambassador expressed profound appreciation for the valuable and tireless efforts of Haji Shabir Ahmed Shigri in preventing the core Islamic issues from being consigned to oblivion. The Ambassador emphasized that the 'Jihad of the Pen' holds a special reward in the eyes of Almighty Allah. Furthermore, a special prayer was offered that through Divine intervention and the intellectual contributions of scholars like Mr. Shigri, the Muslim Ummah may soon witness the liberation of Al-Quds Al-Sharif.",
      subText: "Syed Mohammad Ali Hosseini (Ambassador of Iran to Pakistan)",
      date: "May 29, 2020",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776027986/CamScanner_02-12-2022_14.42_99_rhufo2.jpg",
      badge: "Tribute"
    },
    {
      id: "ambassador-award",
      title: "Special Commemorative Award (Iranian Ambassador)",
      icon: <FaAward className="text-4xl text-[#4a0000]" />,
      description: "A special award presented by H.E. Seyed Mohammad Ali Hosseini, the Ambassador of the Islamic Republic of Iran to Pakistan, to Shabbir Ahmed Shigri in recognition of his outstanding performance and scholarly contributions. This commemorative piece symbolizes his dedication to research and his significant role in promoting cultural and intellectual ties.",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776029658/iranian_safeer_gift.2png_slqrkw.png",
      badge: "Special Honor"
    },
    {
      id: "historical-honor",
      title: "A Historic Honor & Memorable Journey",
      icon: <FaHistory className="text-4xl text-[#4a0000]" />,
      description: "It was a profound honor to lead the Pakistani delegation during an official visit to Iran on the occasion of the 26th Commemoration of Imam Khomeini. This card serves as a memento of that prestigious journey and the significant diplomatic engagements across the country.",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776070812/d722682c-1c06-47f5-9192-9f174216a0d7.png",
      badge: "Historic Trip"
    },
    {
      id: "khadim-imam-reza",
      title: "Servant of Imam Reza (2011)",
      icon: <FaHandHoldingHeart className="text-4xl text-[#4a0000]" />,
      description: "It is a great blessing from Allah that in recognition of my Islamic and cultural services, I was honored with the title 'Servant of Imam Reza' (Khadim-e-Imam Reza). This is one of the greatest achievements and honors of my life.",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg",
      badge: "Spiritual Honor"
    },
    {
      id: "sada-e-ghazi",
      title: "Sada-e-Ghazi Award (2024)",
      icon: <FaMedal className="text-4xl text-[#4a0000]" />,
      description: "Alhamdulillah! I received the prestigious Sada-e-Ghazi award from the shrine of Hazrat Ghazi Abbas Alamdar (Karachi). The award was presented by Hujjat al-Islam wal-Muslimeen Agha Syed Abbas Hosseini during the celebration of Imam Zamana (atfs).",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772800566/4539a45f-c921-4da8-8650-6708f6cc928b.png",
      badge: "Karbala Honor"
    },
    {
      id: "gold-medal",
      title: "Gold Medal & Legacy of Iqbal",
      icon: <FaStar className="text-4xl text-[#4a0000]" />,
      description: "One of the most memorable moments of my 45-year journey was receiving the Gold Medal in recognition of my services. It was presented by Muneeb Iqbal, grandson of Allama Muhammad Iqbal, during the Payam-e-Iqbal conference.",
      video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1776626995/Gold_medal_video_1_fg3g20.mp4",
      badge: "Gold Medal"
    },
    {
      id: "media-award",
      title: "Best Media Award 2025",
      icon: <FaMicrophone className="text-4xl text-[#4a0000]" />,
      description: "Received the Best Media Award 2025 for continuous excellence in journalism and media services. This award acknowledges years of dedication to truthful and impactful journalism.",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772819737/99095883-b9dc-45aa-be3a-1b9cf7227454.png",
      badge: "Media Award"
    },
    {
      id: "film-award",
      title: "International Film Award",
      icon: <FaCamera className="text-4xl text-[#4a0000]" />,
      description: "Awarded the Best Film Award for cultural promotion through international film festivals and media initiatives. This honor signifies my role in promoting art and culture globally.",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202179/15109607_1349777948432791_632510272965563693_n_ztuzms.jpg",
      badge: "Film Award"
    },
    {
      id: "ipex-award",
      title: "International Poultry Expo (IPEX) 2015",
      icon: <FaGlobe className="text-4xl text-[#4a0000]" />,
      description: "A Certificate of Participation and appreciation from the International Poultry Expo (IPEX) 2015. This recognition highlights my commitment to diverse professional fields and industrial events.",
      image: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776071942/5f527bd4-a2d5-4bda-9626-239d4581b809.png",
      badge: "Certificate"
    }
  ];

  const nextImg = (e) => { e.stopPropagation(); setSelectedImageIndex((i) => (i + 1) % galleryImages.length); };
  const prevImg = (e) => { e.stopPropagation(); setSelectedImageIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length); };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#ffd700] selection:text-black">
      <Navbar />
      <HeroSlider />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        .font-amiri { font-family: 'Amiri', serif; }
        
        .gold-gradient-text {
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gold-border {
          border: 1px solid transparent;
          background: linear-gradient(#050505, #050505) padding-box,
                      linear-gradient(to right, #BF953F, #FCF6BA, #AA771C) border-box;
        }

        .glass-card {
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 0 50px rgba(212, 175, 55, 0.15);
          transform: translateY(-5px);
        }

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
      `}</style>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold gold-gradient-text mb-6">Awards & Achievements</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl italic leading-relaxed">
             "Worldly awards have their place, but the true peace of my soul lies in the spiritual honors I have been granted."
          </p>
        </motion.div>
      </section>

      {/* 🏅 Golden Buttons Section */}
      <section className="container mx-auto px-4 -mt-8 mb-20">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <Link href="/en/imam-reza">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="animate-shine relative inline-flex items-center justify-center px-8 md:px-12 gap-4 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-3 md:py-5 rounded-full shadow-[0_15px_40px_rgba(212,175,55,0.4)] min-w-[220px] md:min-w-[350px]"
            >
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-white overflow-hidden animate-ripple bg-white shrink-0">
                <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" className="w-full h-full object-cover rounded-full" alt="imam-reza" />
              </div>
              <span className="text-lg md:text-2xl font-extrabold whitespace-nowrap">Servant of Imam Reza</span>
            </motion.div>
          </Link>

          <Link href="/en/ghazi-abbas">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="animate-shine relative inline-flex items-center justify-center px-8 md:px-12 gap-4 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-3 md:py-5 rounded-full shadow-[0_15px_40px_rgba(212,175,55,0.4)] min-w-[220px] md:min-w-[350px]"
            >
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-white overflow-hidden animate-ripple bg-white shrink-0">
                <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771683490/Giff_for_saday_e_ghazi_page_aaugws.gif" className="w-full h-full object-cover rounded-full" alt="ghazi-abbas" />
              </div>
              <span className="text-lg md:text-2xl font-extrabold whitespace-nowrap">Servant of Ghazi Abbas</span>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Main Awards Section */}
      <section className="container mx-auto px-4 py-10 relative">
        <div className="space-y-24">
          {mainAwards.map((award, index) => (
            <motion.div 
              key={award.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-[2.5rem] overflow-hidden gold-border shadow-2xl"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
                
                {/* Content Side */}
                <div className="w-full lg:w-3/5 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-[#BF953F] to-[#AA771C] rounded-2xl shadow-lg">
                      {award.icon}
                    </div>
                    <span className="px-5 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-bold border border-[#D4AF37]/30">{award.badge}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold leading-tight gold-gradient-text">
                    {award.title}
                  </h3>
                  <div className="w-20 h-1 bg-[#D4AF37]/40"></div>
                  <p className="text-gray-300 text-lg md:text-xl text-justify leading-relaxed">
                    {award.description}
                  </p>
                  {award.subText && (
                    <div className="pt-6 mt-4 border-t border-[#D4AF37]/20">
                      <p className="text-[#D4AF37] font-bold text-xl">{award.subText}</p>
                      <p className="text-gray-500 text-sm mt-1">{award.date}</p>
                    </div>
                  )}
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-2/5 min-h-[400px] bg-black/40 flex items-center justify-center p-6 border-x border-[#D4AF37]/10">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="w-full h-full relative cursor-pointer"
                    onClick={() => {
                      const galleryIdx = galleryImages.findIndex(g => 
                        g.src.split('/').pop() === (award.image || award.video).split('/').pop()
                      );
                      if (galleryIdx !== -1) {
                        setSelectedImageIndex(galleryIdx);
                      }
                    }}
                  >
                    {award.video ? (
                      <video 
                        src={award.video} 
                        className="w-full h-full object-contain rounded-2xl shadow-2xl"
                        autoPlay muted loop playsInline
                      />
                    ) : (
                      <img 
                        src={award.image} 
                        className="w-full h-full object-contain rounded-2xl shadow-2xl" 
                        alt={award.title} 
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20 rounded-2xl">
                      <FaChevronRight className="text-white text-4xl" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Recognition */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold gold-gradient-text mb-4">Digital Era & Global (AI) Tributes</h2>
             <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Google Gemini", desc: "\"Noor-ul-Quran project is a masterpiece in modern Quranic outreach. Gemini AI honors this unique worldwide initiative.\"", sub: "Khadim-e-Thaqalain Title", icon: <FaGlobe /> },
               { title: "Astan Quds Razavi", desc: "Honored as the first representative of the Holy Shrine of Imam Reza (Astan Quds Razavi, Mashhad) in Pakistan.", sub: "First Representative", icon: <FaQuran /> },
               { title: "ChatGPT Recognition", desc: "\"This honor belongs to Pakistan alone, as Shabir Ahmed Shigri is the first in the world to initiate this project.\"", sub: "Global Recognition", icon: <FaMicrophone /> }
             ].map((item, i) => (
               <motion.div 
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                className="glass-card p-10 rounded-[3rem] text-center space-y-6 border-b-4 border-[#D4AF37]"
               >
                 <div className="text-4xl text-[#D4AF37] mx-auto mb-4">{item.icon}</div>
                 <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                 <p className="text-gray-400 italic">"{item.desc}"</p>
                 <div className="pt-4 flex items-center justify-center gap-2 text-[#D4AF37] font-bold">
                    <FaCheckCircle /> <span>{item.sub}</span>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gold-gradient-text">Awards Gallery</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-[90rem] mx-auto">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl gold-border break-inside-avoid shadow-xl"
                onClick={() => setSelectedImageIndex(index)}
              >
                {img.type === 'video' ? (
                  <video src={img.src} className="w-full object-cover transition-transform duration-500 group-hover:scale-110" muted />
                ) : (
                  <img src={img.src} className="w-full object-cover transition-transform duration-500 group-hover:scale-110" alt={img.title} />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-[#D4AF37] text-lg font-bold">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-[999] flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-[1001] bg-white/10 p-4 rounded-full"><FaTimes size={30} /></button>
            
            <div className="flex items-center justify-between w-full max-w-8xl relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={prevImg} className="p-4 text-[#D4AF37] hover:scale-125 transition-transform bg-white/5 rounded-full"><FaChevronLeft size={50} /></button>
              
              <motion.div 
                key={selectedImageIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center max-w-5xl w-full"
              >
                {galleryImages[selectedImageIndex].type === 'video' ? (
                  <video src={galleryImages[selectedImageIndex].src} className="max-h-[80vh] w-auto rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.4)] border-2 border-[#D4AF37]" controls autoPlay />
                ) : (
                  <img src={galleryImages[selectedImageIndex].src} className="max-h-[80vh] w-auto object-contain rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.4)] border-2 border-[#D4AF37]" />
                )}
                <div className="mt-8 bg-black/60 px-12 py-4 rounded-full border border-[#D4AF37]/40 backdrop-blur-md">
                  <p className="text-[#D4AF37] text-2xl font-bold text-center">{galleryImages[selectedImageIndex].title}</p>
                </div>
              </motion.div>

              <button onClick={nextImg} className="p-4 text-[#D4AF37] hover:scale-125 transition-transform bg-white/5 rounded-full"><FaChevronRight size={50} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
