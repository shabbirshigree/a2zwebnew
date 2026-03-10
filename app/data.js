"use client";
import { useState, useEffect, useRef } from 'react';
import {
  FaYoutube, FaFacebookF, FaWhatsapp, FaBookOpen, FaHandshake, FaGlobe,
  FaMedal, FaTrophy, FaMicrophone, FaNewspaper, FaTv, FaPlay,
  FaEnvelope, FaMapMarkerAlt, FaTimes, FaBars, FaPlane, FaChevronLeft, FaChevronRight
} from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { BiSolidMoviePlay } from "react-icons/bi";
import { Navbar, HeroSlider } from './components/Header';
import Footer from './components/Footer';

// 🔴 آپ کا تیز رفتار امیج کمپوننٹ ہوم پیج پر بھی آ گیا
import Image from './components/CldImage';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const legendScrollRef = useRef(null);
  const bookScrollRef = useRef(null);

  // اینیمیشن اور ڈیزائن کے اسٹائلز
  useEffect(() => {
    const globalStyles = `
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes glow { 0%, 100% { text-shadow: 0 0 10px rgba(212, 175, 55, 0.5); } 50% { text-shadow: 0 0 20px rgba(212, 175, 55, 0.8); } }
      .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      .animate-glow { animation: glow 3s ease-in-out infinite; }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .islamic-pattern { background: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,.05) 35px, rgba(212,175,55,.05) 70px); }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = globalStyles;
    document.head.appendChild(styleSheet);
  }, []);

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // --- آپ کا تمام ڈیٹا (Books & Legends) ---
  const books = [
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png", title: "سکون کی تلاش", year: "2015" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png", title: "بوئے بہشت", year: "2018" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png", title: "روح کی معراج", year: "2012" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png", title: "کنجی بہشت", year: "2019" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png", title: "سیاحت ایران", year: "2016" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Book_Khorasan-e-Razavi_b9nqdb.bmp", title: "خراسان رضوی", year: "2020" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png", title: "مجلہ فرھنگستان", year: "2017" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png", title: "مدینۃ الاہلبیتؑ", year: "2021" }
  ];

  const legends = [
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4", name: "Mian Manzoor Watoo", role: "Ex-Chief Minister" },
    { img: "https://img.youtube.com/vi/OXyJA7IoUwY/hqdefault.jpg", video: "https://youtu.be/OXyJA7IoUwY", name: "Pir Usman Shah Noori", role: "Peace Committee" },
    { img: "https://img.youtube.com/vi/l1qwlEN1gQo/hqdefault.jpg", video: "https://youtu.be/l1qwlEN1gQo", name: "Pir Burhanuddin Usmani", role: "Usmani Foundation" },
    { img: "https://img.youtube.com/vi/6O5tyMv4Ahg/hqdefault.jpg", video: "https://youtu.be/6O5tyMv4Ahg", name: "Dr. M. Sadaqat Ali", role: "Religious Scholar" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.mp4", name: "Pir Maoom H. Naqvi", role: "Senior Scholar" },
    { img: "https://img.youtube.com/vi/fW648rFweyM/hqdefault.jpg", video: "https://youtu.be/fW648rFweyM", name: "Sardar Sikandar Singh", role: "Sikh Leader" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", name: "Hafiz A.G. Roparhi", role: "Jamia Ahle Hadith" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.mp4", name: "Molana M. Khan Laghari", role: "Ahle Sunnat Scholar" },
    { img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.jpg", video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.mp4", name: "Pir G. Rasool Awesi", role: "Spiritual Leader" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      {/* نام کا نیلا باکس (سلائیڈر کے نیچے) */}
      <section className="bg-[#0f4c75] border-y-4 border-[#D4AF37] py-12 text-center shadow-2xl relative z-20 mt-10">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-2 font-serif animate-glow">Haji Shabbir Ahmed Shigri</h1>
        <p className="text-white text-sm md:text-lg opacity-80 tracking-widest">Senior Journalist | Cultural Expert | Founder Noor-ul-Quran Project</p>
      </section>

      {/* سوشل میڈیا */}
      <div className="bg-[#0a2a42] text-white py-5 shadow-xl border-b-2 border-[#D4AF37]">
        <div className="container mx-auto flex justify-center gap-8 text-2xl">
          <a href="https://wa.me/923334491715" target="_blank" className="hover:text-[#25D366] transition transform hover:scale-125"><FaWhatsapp /></a>
          <a href="https://youtube.com/@noorproduction" target="_blank" className="hover:text-[#FF0000] transition transform hover:scale-125"><FaYoutube /></a>
          <a href="https://www.facebook.com/share/1GkBRptjDz/" target="_blank" className="hover:text-[#1877F2] transition transform hover:scale-125"><FaFacebookF /></a>
        </div>
      </div>

      {/* خوش آمدید سیکشن */}
      <section className="container mx-auto px-4 py-16 animate-fadeInUp">
        <div className="bg-white rounded-2xl shadow-xl border-4 border-[#D4AF37] p-8 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0f4c75] mb-6">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
          <p className="text-lg md:text-xl leading-relaxed text-right font-serif" dir="rtl">
            السلام علیکم! میں آپ کو اپنے آفیشل ویب سائیٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ خدمات کا عکس ہے۔
          </p>
        </div>
      </section>

      {/* ویڈیوز اور کتابوں کا حصہ (Legends & Books) */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl text-[#D4AF37] mb-12 font-serif">نامور شخصیات کے تأثرات</h2>
          <div className="flex overflow-x-auto gap-6 scrollbar-hide py-4" ref={legendScrollRef}>
            {legends.map((item, i) => (
              <div key={i} className="min-w-[280px] bg-black rounded-xl border-2 border-[#D4AF37] cursor-pointer" onClick={() => setActiveVideo(item.video)}>
                {/* 🔴 پرانے img ٹیگ کی جگہ نیا Image ٹیگ لگا دیا گیا ہے */}
                <Image src={item.img} alt={item.name} width={300} height={200} className="w-full h-40 object-cover" />
                <div className="p-3 text-center"><h3 className="text-[#D4AF37] text-sm">{item.name}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ویڈیو پاپ اپ */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-4xl"><FaTimes /></button>
          <iframe className="w-full max-w-4xl aspect-video border-4 border-[#D4AF37]" src={activeVideo.includes('youtu') ? `https://www.youtube.com/embed/${activeVideo.split('/').pop()}` : activeVideo} allowFullScreen></iframe>
        </div>
      )}

      <Footer />
    </main>
  );
}