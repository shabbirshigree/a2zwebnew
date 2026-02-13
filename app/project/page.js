"use client";
import { useState } from 'react';
import { FaPlay, FaTimes } from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { quranVideos } from './projectData'; // 🟢 ڈیٹا دوسری فائل سے آ رہا ہے

export default function ProjectPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // --- ویڈیو کارڈ (Video Card) ---
  const VideoCard = ({ video }) => (
    <div onClick={() => setSelectedVideo(video)} className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer group border border-gray-800">
      <div className="relative aspect-video bg-gray-900">
        <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:opacity-75 transition" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition">
          <div className="bg-[#D4AF37] rounded-full p-4 group-hover:scale-110 transition shadow-lg"><FaPlay className="text-white text-xl" /></div>
        </div>
      </div>
      <div className="bg-gray-900 p-3 text-center border-t border-gray-800">
          {/* 🟢 ویڈیو ٹائٹل پر اردو کلاس */}
          <p className="text-white urdu-text text-sm md:text-base leading-relaxed text-center" dir="rtl">{video.title}</p>
      </div>
    </div>
  );

  // --- ویڈیو گرڈ ---
  const VideoGrid = ({ title, videos, id }) => (
    <section id={id} className="py-8 md:py-12 relative z-10 px-4">
      <div className="text-center mb-8 md:mb-10">
        {/* 🟢 سیکشن ٹائٹل پر اردو کلاس */}
        <div className="inline-block bg-[#0f4c75] text-[#D4AF37] px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-[#D4AF37] urdu-text text-xl md:text-2xl shadow-lg">{title}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSlider />

      {/* --- بانی پراجیکٹ کا پیغام --- */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl border-4 border-[#D4AF37] p-6 md:p-12 text-black">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f4c75] text-center urdu-text mb-6">بانی پراجیکٹ کا پیغام</h2>
          <div className="bg-yellow-50 border-r-4 border-[#D4AF37] p-4 md:p-6 mb-6 md:mb-8 text-center urdu-text text-gray-800 text-lg md:text-xl leading-relaxed" dir="rtl">
             "قرآن کو اونچے طاق میں رکھ دینا اس کا احترام نہیں، بلکہ اسے سمجھ کر، غوروفکر کر کے اس پر عمل کرنا ہی اس کا حقیقی احترام ہے۔"
          </div>
          <div className="text-right space-y-4 urdu-text" dir="rtl">
             <p className="text-gray-700 leading-relaxed text-base md:text-lg">اللہ کے فضل و کرم سے <strong>"نورالقرآن پراجیکٹ"</strong> کا آغاز ایک خواب کی تعبیر ہے۔ اس کا مقصد یہ ہے کہ قرآن کریم کو جدید <strong>سمعی و بصری</strong> انداز میں پیش کیا جائے تاکہ نوجوان نسل قرآن کو <strong>دل کی آنکھ سے دیکھنے اور سمجھنے لگیں۔</strong></p>
             <div className="bg-blue-50 border-r-4 border-[#0f4c75] p-4 my-4">
                 <p className="text-[#0f4c75] font-bold text-base md:text-lg">یہ محض ایک تخلیقی آئیڈیا نہیں بلکہ خلوصِ نیت سے اٹھایا ہوا عملی قدم ہے۔</p>
             </div>
             <p className="text-[#0f4c75] font-bold text-lg md:text-xl text-left mt-4 border-b-2 border-[#D4AF37] inline-block pb-1">حاجی شبیر احمد شگری (بانی)</p>
          </div>
        </div>
      </section>

      {/* --- افتتاحی ویڈیوز --- */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#ffd700] rounded-2xl shadow-2xl p-6 md:p-8 mb-8 md:mb-12 text-black">
          <h3 className="text-xl md:text-3xl font-bold text-[#0f4c75] text-center urdu-text mb-4">✨ نور القرآن پروجیکٹ کا باقاعدہ افتتاح ✨</h3>
          <p className="text-center text-gray-900 urdu-text mb-6 text-base md:text-lg">یکم رمضان المبارک کو <strong>علامہ شیخ محسن علی نجفیؒ</strong> کی قبر مطہر پر (جامعہ کوثر اسلام آباد) میں اس تاریخی پروجیکٹ کا افتتاح۔</p>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-2 md:border-4 border-white"><iframe src="https://www.youtube.com/embed/ah0OXlnDw2k" allowFullScreen className="w-full h-full"></iframe></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition group border border-gray-200">
            <div className="aspect-video bg-black"><iframe src="https://www.youtube.com/embed/zNVKoP23oiI" allowFullScreen className="w-full h-full"></iframe></div>
            <div className="p-4 bg-gray-100 group-hover:bg-white transition"><h4 className="urdu-text text-[#0f4c75] text-base md:text-lg text-center">دنیا و آخرت کی کامیابی کے لئے قرآن سے رشتہ مضبوط کریں</h4></div>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition group border border-gray-200">
            <div className="aspect-video bg-black"><iframe src="https://www.youtube.com/embed/-3F1RdF0oFQ" allowFullScreen className="w-full h-full"></iframe></div>
            <div className="p-4 bg-gray-100 group-hover:bg-white transition"><h4 className="urdu-text text-[#0f4c75] text-base md:text-lg text-center">قرآن پاک کی آڈیو ویڈیو جدید انداز میں</h4></div>
          </div>
        </div>
      </section>

      {/* --- ویڈیو لسٹنگ --- */}
      <VideoGrid title="قرآنی ویڈیوز (عربی) - مکمل 30 پارے" videos={quranVideos.parat_arabic} id="parat-arabic" />
      <VideoGrid title="اردو ٹیکسٹ - مکمل 30 پارے" videos={quranVideos.parat_urdu} id="parat-urdu" />
      <VideoGrid title="منتخب سورتیں (Selected Surahs)" videos={quranVideos.surahs} id="surahs" />
      <VideoGrid title="قرآنی واقعات (Stories)" videos={quranVideos.stories} id="stories" />
      <VideoGrid title="تلاوت، نعت اور معجزہ قرآن" videos={quranVideos.tilawat} id="tilawat" />

      {/* --- ویڈیو پاپ اپ پلیئر --- */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 -right-0 text-white text-4xl hover:text-[#D4AF37] transition transform hover:rotate-90" onClick={() => setSelectedVideo(null)}>
              <FaTimes />
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border border-[#D4AF37]/30">
              <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`} allowFullScreen className="w-full h-full"></iframe>
            </div>
            {/* 🟢 پاپ اپ ٹائٹل پر اردو کلاس */}
            <p className="text-[#D4AF37] text-center mt-4 text-xl md:text-2xl urdu-text">{selectedVideo.title}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}