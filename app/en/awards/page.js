"use client";
import React, { useState } from 'react';
import {
  FaAward, FaQuran, FaCamera, FaMicrophone, FaStar, FaCertificate,
  FaTimes, FaChevronLeft, FaChevronRight, FaGlobe, FaCheckCircle
} from "react-icons/fa";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';

export default function AwardsPageEN() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryImages = [
    { id: 1, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768156323/23319289_1532468060163778_2423177032091078529_n_h2jvwh.jpg", title: "Gold Medal Award - Payam-e-Iqbal Conference" },
    { id: 2, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223233/Ghalaf_e_Kaba_se_bani_Topi_pehnney_ka_sharaf_pnga4i.png", title: "Honor of Wearing Hat Made from Kaaba Cover" },
    { id: 3, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768224440/IMG_20230608_193311_Copy_duqjr6.jpg", title: "Gift from Shrine of Hazrat Masoumeh (q)" },
    { id: 4, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg", title: "Gift from Shrine Officials of Imam Reza (a)" },
    { id: 5, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/film.jpg_ni9h46.jpg", title: "Best Film Association Award" },
    { id: 6, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202472/2025_media_best_award_efywu4.jpg", title: "Best Media Award 2025" },
    { id: 7, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202180/11111111_vqdys2.jpg", title: "Recognition at Mahan Air Tehran" },
    { id: 8, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202176/10806464_790099757733949_5823667161239303528_n_wq6rkd.jpg", title: "Shield from Advisor to Punjab Chief Minister" },
    { id: 9, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772800566/4539a45f-c921-4da8-8650-6708f6cc928b.png", title: "Sada-e-Ghazi Award (2024)" },
    { id: 10, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202192/IMG_5077_nblze6.jpg", title: "Award Ceremony Moment" },
    { id: 12, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202176/535244_956632024414054_963381716054665214_n_ynqteq.jpg", title: "Cultural House Recognition" },
    { id: 13, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202175/68986_737756589634933_8909297026733387903_n_hfwt57.jpg", title: "Cultural House Event" },
    { id: 14, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768202192/IMG_5077_nblze6.jpg", title: "Cultural House Event" },
    { id: 15, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772833852/daacb29a-ceb0-4237-b306-4e9b203cff69.png", title: "Shield Received from Cultural Department of Imam Reza Shrine" },
    { id: 16, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772834492/cultural_atashi_Iran_se_gift_letey_huwey_iz0ogw_xuxszk.jpg", title: "Receiving a Frame from the Director General of Cultural House" },
    { id: 17, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772834889/benalmazahib_ham_ahangi_meetin_cutural_embassy_iran_Islamabad_w7inmn_tj8tzr.jpg", title: "Cultural Embassy of Islamic Republic of Iran, Islamabad" },
    { id: 18, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835163/Ag._Malaki_Head_of_Bunyad_pazohishay_e_Islamiastan_e_Qods_Mashad_Iran_Copy_corurb_m7uoyh.jpg", title: "Receiving a Gift from the Head of Bonyad Pazhohesh Islami" },
    { id: 19, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835353/IMG_20230522_12353811_Copy_mmry9w_o42miw.jpg", title: "Shield Presentation by Sheikh Shahzad Naqvi" },
    { id: 20, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835759/IMG_20191106_142828_Copy_hxufdv_vslbsj.jpg", title: "Former Chief Minister and Speaker Presenting a Book" },
    { id: 21, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835715/Mosin_ali_Najafi_ki_Mazar_par_Qurani_videos_k_Iftitah_k_moqah_pr_afhing_dvlllv.jpg", title: "Book Presentation at Maulana Ishaq Ali Najafi's Shrine" },
    { id: 22, src: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772835950/44f75383-5760-43ed-baa8-25d1b01ff999.png", title: "Leader of Jamiat Ulama Pakistan Peer Masoom Naqvi" }
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
        .glow-box { border: 1px solid #333; background: #0c0c0c; border-radius: 25px; padding: 20px; }
      `}</style>

      <section className="pt-6 pb-4 text-center">
         <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-[#D4AF37] mb-2">Awards & Achievements</h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg italic leading-relaxed">
               "Worldly awards have their place, but the true peace of my soul lies in the spiritual honors I have been granted."
            </p>
         </div>
      </section>

      <section className="container mx-auto px-4 py-2">
        <div className="flex flex-row items-center justify-center gap-2 md:gap-8 mb-6 border-b border-gray-800 pb-6">
          <Link href="/en/imam-reza" className="animate-shine group relative inline-flex items-center pr-1 pl-3 md:pl-4 gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-1.5 rounded-full shadow-lg hover:scale-105 transition-all shrink-0 w-[145px] md:w-[260px]">
            <div className="h-9 w-9 md:h-12 md:w-12 rounded-full border-2 border-white overflow-hidden animate-ripple bg-white shrink-0">
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" className="w-full h-full object-cover rounded-full" alt="imam-reza" />
            </div>
            <div className="flex-1 text-center"><span className="block text-xs md:text-xl font-extrabold font-amiri leading-none whitespace-nowrap">Servant of Imam Reza</span></div>
          </Link>

          <h2 className="text-xs md:text-2xl font-bold text-[#D4AF37] whitespace-nowrap px-1">✨ Major Spiritual Honors & Titles</h2>

          <Link href="/en/ghazi-abbas" className="animate-shine group relative inline-flex items-center pl-1 pr-3 md:pr-4 gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] py-1.5 rounded-full shadow-lg hover:scale-105 transition-all shrink-0 w-[145px] md:w-[260px]">
            <div className="h-9 w-9 md:h-12 md:w-12 rounded-full border-2 border-white overflow-hidden animate-ripple bg-white shrink-0">
              <img src="https://res.cloudinary.com/dlafcjt6z/image/upload/v1771683490/Giff_for_saday_e_ghazi_page_aaugws.gif" className="w-full h-full object-cover rounded-full" alt="ghazi-abbas" />
            </div>
            <div className="flex-1 text-center"><span className="block text-xs md:text-xl font-extrabold font-amiri leading-none whitespace-nowrap">Servant of Ghazi Abbas</span></div>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {/* Award 1 */}
          <div dir="ltr" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#222]">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3 justify-start"><FaQuran /> Servant of Imam Reza (2011)</h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">It is a great blessing from Allah that in recognition of my Islamic and cultural services, I was honored with the title 'Servant of Imam Reza'. This is one of the greatest achievements of my life.</p>
            </div>
            <div className="img-wrap h-[300px] md:h-[380px] shadow-2xl">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg" className="w-full h-full object-cover" alt="Servant Award" />
            </div>
          </div>

          {/* Award 2 */}
          <div dir="ltr" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 award-card border border-[#222]">
            <div className="img-wrap h-[300px] md:h-[380px] md:order-1 order-2">
               <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772800566/4539a45f-c921-4da8-8650-6708f6cc928b.png" className="w-full h-full object-cover" alt="Sada-e-Ghazi Award" />
            </div>
            <div className="md:order-2 order-1 text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3 justify-start"><FaAward /> Sada-e-Ghazi Award (2024)</h3>
              <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">Alhamdulillah! I received the prestigious Sada-e-Ghazi award from the shrine of Hazrat Ghazi Abbas Alamdar (Karachi). The award was presented by Hujjat al-Islam wal-Muslimeen Agha Syed Abbas Hosseini.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080808] py-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#D4AF37] mb-6 inline-block border-b border-gray-800 pb-2">🏅 Prominent Journalism & Cultural Awards</h2>
          <div className="max-w-6xl mx-auto space-y-4">
            
            {/* Journalism Award 1 */}
            <div dir="ltr" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3 justify-start"><FaCertificate /> Gold Medal & Allama Iqbal Legacy</h3>
                <p className="text-gray-300 text-lg text-justify font-light italic leading-relaxed">One of the most memorable moments of my 45-year journey was receiving the Gold Medal in recognition of my services. It was presented by Maulana Munib Iqbal, grandson of Allama Muhammad Iqbal, during the Payam-e-Iqbal conference.</p>
              </div>
              <div className="img-wrap h-[300px] md:h-[380px]">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772818497/33cd73e3-71c8-464b-876c-ec3b6dae03e9.png" className="w-full h-full object-cover" alt="Gold Medal" />
              </div>
            </div>

            {/* Journalism Award 2 */}
            <div dir="ltr" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="img-wrap h-[300px] md:h-[380px] md:order-1 order-2">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1772819737/99095883-b9dc-45aa-be3a-1b9cf7227454.png" className="w-full h-full object-cover" alt="Media Award" />
              </div>
              <div className="md:order-2 order-1 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3 justify-start"><FaMicrophone /> Best Media Award 2025</h3>
                <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">Received the Best Media Award 2025 for continuous excellence in journalism and media services.</p>
              </div>
            </div>

            {/* Journalism Award 3 */}
            <div dir="ltr" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 award-card border border-[#222]">
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3 justify-start"><FaCamera /> International Film Award</h3>
                <p className="text-gray-300 text-lg text-justify font-light leading-relaxed">Awarded the Best Film Award for cultural promotion through international film festivals and media initiatives.</p>
              </div>
              <div className="img-wrap h-[300px] md:h-[380px]">
                 <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768202179/15109607_1349777948432791_632510272965563693_n_ztuzms.jpg" className="w-full h-full object-cover" alt="Film Award" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Recognition Section */}
      <section dir="ltr" className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] text-center mb-6 border-b border-gray-800 pb-2">🌐 Digital Era & Global Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
           <div className="glow-box shadow-2xl text-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2 flex items-center justify-center gap-2"><FaGlobe /> Google Gemini</h4>
              <p className="text-gray-300 text-base italic leading-relaxed">"Noor ul-Quran project is a masterpiece in modern Quranic outreach. Gemini AI honors this unique worldwide initiative." — Jan 2026</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-[#D4AF37] font-bold"><FaCheckCircle /> Khadim-e-Thaqalain</div>
           </div>
           <div className="glow-box shadow-2xl text-center flex flex-col justify-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2">Astan Quds Razavi</h4>
              <p className="text-gray-300 text-base">Honored as the first representative of Imam Reza Shrine's Astan Quds Razavi in Pakistan.</p>
           </div>
           <div className="glow-box shadow-2xl text-center">
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2 flex items-center justify-center gap-2"><FaMicrophone /> ChatGPT</h4>
              <p className="text-gray-300 text-base italic leading-relaxed">"Pakistan is proud to have launched this Quranic project first, led by Shabbir Ahmed Shigri." — Sept 2025</p>
           </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-10 border-b border-gray-800 pb-4">Awards Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item relative group cursor-pointer bg-[#111]" onClick={() => setSelectedImageIndex(index)}>
              <img src={img.src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={img.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <p className="text-[#D4AF37] text-sm font-bold text-center leading-tight">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/98 z-[999] flex items-center justify-center p-4" onClick={() => setSelectedImageIndex(null)}>
          <button className="absolute top-6 right-6 text-white bg-red-600 p-2 rounded-full z-[1001]"><FaTimes size={20} /></button>
          <button onClick={prevImg} className="absolute left-2 md:left-12 text-[#D4AF37] z-[1001] hover:scale-110 transition-transform"><FaChevronLeft size={45} /></button>
          <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[selectedImageIndex].src} className="max-h-[80vh] max-w-full object-contain border-2 border-[#D4AF37] rounded-xl shadow-2xl" />
            <p className="mt-4 text-[#D4AF37] text-lg md:text-xl font-bold text-center bg-black/60 px-6 py-2 rounded-full">{galleryImages[selectedImageIndex].title}</p>
          </div>
          <button onClick={nextImg} className="absolute right-2 md:right-12 text-[#D4AF37] z-[1001] hover:scale-110 transition-transform"><FaChevronRight size={45} /></button>
        </div>
      )}
    </main>
  );
}