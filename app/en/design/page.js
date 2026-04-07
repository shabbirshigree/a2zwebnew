"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaPaintBrush, FaPalette, FaCubes, FaBookOpen, FaFilm, FaShareAlt, FaGlobe, FaStar, FaLightbulb, FaLaptopCode, FaCheckCircle, FaMosque, FaTree, FaLandmark, FaTimes, FaChevronLeft, FaChevronRight, FaHeadphones } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';

const galleryImages = [
  { id: 1, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772075728/FIL3526-Picsart-AiImageEnhancer_fclosx.jpg', title: 'Masjid Nabawi Model Build' },
  { id: 2, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772075727/FIL3513-Picsart-AiImageEnhancer_xlbvid.jpg', title: 'Masjid Nabawi Model Detail' },
  { id: 3, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772075724/FIL3514-Picsart-AiImageEnhancer_pizdrd.jpg', title: 'Masjid Nabawi Model Installation' },
  { id: 4, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772075722/FIL3501-Picsart-AiImageEnhancer_muujyx.jpg', title: 'Model Installed at Event' },
  { id: 5, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772075722/FIL3500-Picsart-AiImageEnhancer_txdisi.jpg', title: 'Masjid Nabawi event showcase' },
  { id: 6, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772075727/FIL3502-Picsart-AiImageEnhancer_mj5f8w.jpg', title: '3D model presentation' },
  { id: 7, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076123/FIL3491-Picsart-AiImageEnhancer_x9kyyy.jpg', title: 'Noorani Tree Model' },
  { id: 8, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076275/FIL3515-Picsart-AiImageEnhancer_l5crkz.jpg', title: 'Calligraphy Oil Painting' },
  { id: 9, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076279/FIL3496-Picsart-AiImageEnhancer_mkhz93.jpg', title: 'Nawar-e-Rustom Sculpture' },
  { id: 10, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076276/FIL3504-Picsart-AiImageEnhancer_swyypy.jpg', title: 'Art installation on stage' },
  { id: 11, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076280/FIL3511-Picsart-AiImageEnhancer_xadkvu.jpg', title: 'Program performance scene' },
  { id: 12, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076595/FIL3490_hwleco.jpg', title: 'Imam Ali Shrine Model' },
  { id: 13, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076595/FIL3493_tdsqer.jpg', title: 'Imam Ali Model Closeup' },
  { id: 14, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076596/FIL3489_z7y1fu.jpg', title: 'Model showcased at event' },
  { id: 15, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076594/FIL3518_trass8.jpg', title: 'Ceremony at Imam Ali model' },
  { id: 16, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3527_oaz56i.jpg', title: 'Nawar-e-Rustom installation' },
  { id: 17, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772077214/FIL3527-Picsart-AiImageEnhancer_c6fxsf.jpg', title: 'Mechanical sculpture detail' },
  { id: 18, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076947/FIL3498_fn6mic.jpg', title: 'Work in progress at exhibition' },
  { id: 19, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3499_hamxq0.jpg', title: 'Exhibition installation' },
  { id: 20, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772076948/FIL3528_ptwcws.jpg', title: 'Artist with project' },
  { id: 21, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772077437/FIL3550_n9odsm.jpg', title: 'Alhamra Banner masterpiece' },
  { id: 22, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772077439/FIL3542_nh6fu8.jpg', title: 'Alhamra wall detail' },
  { id: 23, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772077857/FIL3609_hpkrkd.jpg', title: 'Quranic 3D model' },
  { id: 24, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772077767/FIL3519_auclv8.jpg', title: 'Thermofoam Ahl al-Bayt display' },
  { id: 25, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772077755/FIL3610_cnczkz.jpg', title: 'Thermofoam event installation' },
  { id: 26, src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772077745/FIL3608_jeycmp.jpg', title: 'Thermofoam model showcase' },
];

export default function DesignPageEN() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const khurasanBook = {
    id: 'book-khurasan',
    title: 'Khurasan Razavi',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772111272/65878faa-2f99-4af6-8216-ad9009adc747.png',
    descEn: 'A magnificent pictorial book completely designed (Graphics & Layout) by the designer. It was the first Iranian book designed in Pakistan, later published in Iran with the highest quality standards. This volume beautifully presents the historical, cultural, and spiritual sites of Khurasan and Mashhad with thousands of carefully curated photographs.',
    libraryUrl: '/library#book-khorasan',
    videoUrl: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076063/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_unp6gj.mp4',
    audioUrl: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076045/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_ctn2j6.mp4',
  };

  const handlePlayVideo = (url) => {
    setVideoUrl(url);
    setVideoModalOpen(true);
  };

  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.share) {
      navigator.share({ title: khurasanBook.title, url }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard');
    }
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <main dir="ltr" className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      <section className="relative bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_45%)] pt-20 pb-12 md:pt-28 md:pb-24" dir="ltr">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6 text-[#D4AF37]">
            <FaPaintBrush size={32} />
            <span className="text-sm uppercase tracking-[0.35em]">Design & Creative Direction</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Creative Design for Books, Events and Cultural Projects</h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            Powerful visual storytelling across printed works, event branding and immersive 3D installations crafted with meticulous attention to cultural significance.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-16" dir="ltr">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-[2.5rem] border border-[#222] bg-[#0b0b0b] p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] shadow-lg"><FaBookOpen size={28} /></div>
              <div className="text-left" dir="ltr">
                <h2 className="text-3xl font-bold text-[#D4AF37]">Signature Book Design</h2>
                <p className="text-gray-300 mt-2">Complete layout, typography and visual storytelling for premium cultural and educational publications.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-left" dir="ltr">Designed major flagship publications including the prestigious Farsi magazine "Shakh-e-Nabat" and the landmark Khurasan Razavi pictorial book with elegant typography, curated imagery and strong visual identity reflecting cultural heritage.</p>
          </div>

          <div className="rounded-[2.5rem] border border-[#222] bg-[#0b0b0b] p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] shadow-lg"><FaPalette size={28} /></div>
              <div className="text-left" dir="ltr">
                <h2 className="text-3xl font-bold text-[#D4AF37]">Event & Brand Design</h2>
                <p className="text-gray-300 mt-2">Large-scale installations, stage environments and premium promotional materials for cultural and religious ceremonies.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-left" dir="ltr">From monumental murals to intricate 3D thermofoam models, each design delivers polished and profound presence. Installations include hand-painted 100-foot banners, mechanical sculptures and luminous spiritual installations that enhance cultural gatherings.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16" dir="ltr">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[2.5rem] bg-[#111] border border-[#222] p-10 shadow-2xl" dir="ltr">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 text-left">Khurasan Razavi Book</h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-left">{khurasanBook.descEn}</p>
            <div className="grid gap-4">
              <Link href={khurasanBook.libraryUrl} className="w-full rounded-2xl bg-[#D4AF37] text-black py-3 font-bold transition hover:bg-[#b38610] text-center flex items-center justify-center gap-2">
                <FaBookOpen /> Read the Book Online
              </Link>
              <button onClick={() => handlePlayVideo(khurasanBook.videoUrl)} className="w-full rounded-2xl bg-[#0b314d] border border-[#D4AF37] text-[#D4AF37] py-3 font-bold transition hover:bg-[#D4AF37] hover:text-black flex items-center justify-center gap-2">
                <FaFilm /> Watch Video Commentary
              </button>
              <button onClick={() => handlePlayVideo(khurasanBook.audioUrl)} className="w-full rounded-2xl bg-[#111] border border-[#D4AF37] text-[#D4AF37] py-3 font-bold transition hover:bg-[#D4AF37]/20 flex items-center justify-center gap-2">
                <FaHeadphones /> Listen to Audio Podcast
              </button>
              <button onClick={handleShare} className="w-full rounded-2xl bg-black border border-[#D4AF37] text-[#D4AF37] py-3 font-bold transition hover:bg-[#D4AF37]/20 flex items-center justify-center gap-2">
                <FaShareAlt /> Share This Page
              </button>
            </div>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden border border-[#222] shadow-2xl">
            <img src={khurasanBook.image} alt="Khurasan Razavi" className="w-full h-full object-cover min-h-[420px]" />
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-12 md:py-16" dir="ltr">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">Major Design Projects</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">Landmark installations and publications created over 25 years, combining traditional craftsmanship with modern creative excellence for cultural institutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300" dir="ltr">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaGlobe size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-left">Farsi Magazine "Shakh-e-Nabat"</h3>
              <p className="text-gray-300 leading-relaxed text-left">Complete layout and design direction for Iran's most prestigious cultural publication featuring Persian poetry, philosophy, art and literary commentary. Successfully matched and exceeded international publication standards with meticulous typography and visual hierarchy.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300" dir="ltr">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaLandmark size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-left">100-Foot Alhamra Mural</h3>
              <p className="text-gray-300 leading-relaxed text-left">Monumental hand-painted mural created for Alhamra Lahore celebrating Iran's Islamic Revolution. Featured intricate panoramic depictions of Tehran's Freedom Square with revolutionary symbolism, visible from impressive distances and becoming a beloved cultural landmark.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300" dir="ltr">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaMosque size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-left">Sacred Architecture Models</h3>
              <p className="text-gray-300 leading-relaxed text-left">Large-scale thermofoam architectural models of Masjid Nabawi and Imam Ali shrine created for major religious and cultural events. These installations combined reverence with advanced sculptural techniques for powerful visual presentations honoring Islamic heritage with dignity.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300" dir="ltr">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaFilm size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-left">Nawar-e-Rustom Sculpture</h3>
              <p className="text-gray-300 leading-relaxed text-left">A monumental mechanical VHS cassette sculpture featuring motorized reels and synchronized lighting effects. Named "Nawar-e-Rustom" (legendary epic hero) by Iranian officials, it became the commanding visual centerpiece of the exhibition with functional mechanical elements.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300" dir="ltr">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaTree size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-left">Noorani Ahl al-Bayt Tree</h3>
              <p className="text-gray-300 leading-relaxed text-left">Spiritually-designed luminous installation featuring the sacred names and titles of the Islamic holy family engraved on illuminated leaves. Sequential lighting effects activated during ceremonies created a profound meditative and reverential atmosphere for spiritual gatherings.</p>
            </div>

            <div className="rounded-[2rem] border border-[#303030] bg-[#111] p-8 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300" dir="ltr">
              <div className="w-16 h-16 mb-6 rounded-3xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center"><FaStar size={28} /></div>
              <h3 className="text-2xl font-bold text-white mb-3 text-left">Premium Craftsmanship</h3>
              <p className="text-gray-300 leading-relaxed text-left">Every project combines traditional artistic techniques with modern media technology and design innovation. Results are installations and publications that educate, inspire and honor cultural and spiritual heritage with meticulous craftsmanship and attention to every detail.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10" dir="ltr">
          <span className="inline-block bg-[#D4AF37] text-black px-5 py-2 rounded-full font-bold uppercase tracking-[0.15em] text-sm mb-4">Visual Portfolio</span>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Design Gallery Archive</h3>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed text-center">A comprehensive visual collection of major design projects and installations from 25 years of creative work for cultural institutions, exhibitions and media campaigns across Pakistan and Iran.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" dir="ltr">
          {galleryImages.map((work, index) => (
            <div 
              key={work.id} 
              className="rounded-[2rem] overflow-hidden border border-[#222] shadow-2xl bg-[#111] transition hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer hover:border-[#D4AF37]/50"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img src={work.src} alt={work.title} className="h-56 w-full object-cover transition-transform hover:scale-105" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2 text-left">{work.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImageIndex(null)} dir="ltr">
          <button className="absolute top-6 right-6 text-white bg-red-600 hover:bg-red-700 p-3 rounded-full transition z-[110]" onClick={() => setSelectedImageIndex(null)}><FaTimes size={24} /></button>
          <button onClick={prevImage} className="absolute left-4 text-[#D4AF37] hover:text-white hover:scale-110 transition"><FaChevronLeft size={40} /></button>
          <div className="relative max-w-6xl w-full h-[85vh] bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[selectedImageIndex].src} alt={galleryImages[selectedImageIndex].title} className="w-full h-full object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-center text-lg text-left">{galleryImages[selectedImageIndex].title}</p>
            </div>
          </div>
          <button onClick={nextImage} className="absolute right-4 text-[#D4AF37] hover:text-white hover:scale-110 transition"><FaChevronRight size={40} /></button>
        </div>
      )}

      <section className="bg-[#0b0b0b] py-16 border-t border-[#222]" dir="ltr">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">Ready for Your Next Project?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">Let's bring your cultural, religious or educational vision to life with premium design direction, visual storytelling and world-class execution that honors your heritage.</p>
          <Link href="/en/contact" className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-[#b38610] transition-colors">
            Contact the Design Team <FaShareAlt />
          </Link>
        </div>
      </section>

      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setVideoModalOpen(false)} dir="ltr">
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-3 rounded-full transition z-[110]" onClick={() => setVideoModalOpen(false)}><FaTimes size={24} /></button>
            <video src={videoUrl} controls autoPlay className="w-full h-full max-h-[80vh] object-contain bg-black" />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
