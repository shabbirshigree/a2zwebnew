"use client";
import { useState, useEffect } from 'react';
import { FaPlay, FaSearch, FaTimes, FaHeart, FaQuran } from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

const quranVideos = {
  parat_arabic: [
    { id: 'TgdJjEBGv14', title: 'پارہ 01: الم' },
    { id: 'iaYHJQZZlFs', title: 'پارہ 02: سیقول' },
    { id: 'MrZcGjmszJQ', title: 'پارہ 03: تلک الرسل' },
    { id: 'v-MDso4vH6s', title: 'پارہ 04: لن تنالوا' },
    { id: '4TEgDWQ0YC0', title: 'پارہ 05: والمحصنات' },
    { id: '91W-X-nY6KY', title: 'پارہ 06: لا یحب اللہ' },
    { id: 'teM93m37_gk', title: 'پارہ 07: و اذا سمعوا' },
    { id: 'bn9ErmKWbAg', title: 'پارہ 08: ولو اننا' },
    { id: 'ABV127-qCd0', title: 'پارہ 09: قال الملاء' },
    { id: 'vqKDs8xZtgs', title: 'پارہ 10: واعلموا' },
    { id: '9_ECxDNWuEo', title: 'پارہ 11: یعتذرون' },
    { id: '8LrovxVGtSU', title: 'پارہ 12: وما من دابة' },
    { id: 'fKcBvKlghHM', title: 'پارہ 13: وما ابری' },
    { id: 'UTRKmI_Zd4g', title: 'پارہ 14: ربما' },
    { id: 'U1lIbVE8Z9I', title: 'پارہ 15: سبحان الذی' },
    { id: 'h738xPhuUgg', title: 'پارہ 16: قال الم' },
    { id: 'K_KwLFXcEl4', title: 'پارہ 17: اقترب' },
    { id: '-tsNsaN3A98', title: 'پارہ 18: قد افلح' },
    { id: 'VM_yJRRUlc8', title: 'پارہ 19: وقال الذین' },
    { id: 'RGxAJglrHCs', title: 'پارہ 20: امن خلق' },
    { id: 'K5_BTX7Lv8Q', title: 'پارہ 21: اتل ما اوحی' },
    { id: 'OTIEm6gT9C0', title: 'پارہ 22: ومن یقنت' },
    { id: '9vApN5JEcTs', title: 'پارہ 23: وما لی' },
    { id: '_ocCCmZOJeg', title: 'پارہ 24: فمن اظلم' },
    { id: 'bpjr0WE7As8', title: 'پارہ 25: الیہ یرد' },
    { id: '9Tx8O95X1Lk', title: 'پارہ 26: حٰم' },
    { id: 'laekLukPMNk', title: 'پارہ 27: قال فما خطبکم' },
    { id: 'uh-baMZcKS8', title: 'پارہ 28: قد سمع اللہ' },
    { id: '38M88d-qkDw', title: 'پارہ 29: تبارک الذی' },
    { id: 'm6DHuIVQCzo', title: 'پارہ 30: عم یتساءلون' },
  ],
  parat_urdu: [
    { id: 'ZrGcJPjwXhw', title: 'پارہ 01 (اردو)' },
    { id: 'GZdtLqFTavo', title: 'پارہ 02 (اردو)' },
    { id: 'YVUkuXJFxjE', title: 'پارہ 03 (اردو)' },
    { id: 'zPJ2z2-XEbc', title: 'پارہ 04 (اردو)' },
    { id: 'h5oNM1AuDzs', title: 'پارہ 05 (اردو)' },
    { id: '5X4fdP25EVY', title: 'پارہ 06 (اردو)' },
    { id: 'MrF8iHx0p9U', title: 'پارہ 07 (اردو)' },
    { id: 'BGSIS3YcdEI', title: 'پارہ 08 (اردو)' },
    { id: 'HTOzK8Gs83o', title: 'پارہ 09 (اردو)' },
    { id: 'X-u4e0qeuNg', title: 'پارہ 10 (اردو)' },
    { id: '3rIAlEhPfn8', title: 'پارہ 11 (اردو)' },
    { id: 'uAXhsNX-8c8', title: 'پارہ 12 (اردو)' },
    { id: 'kxdpnUQ1Poo', title: 'پارہ 13 (اردو)' },
    { id: 'pYuGNdbQtDQ', title: 'پارہ 14 (اردو)' },
    { id: 'AaXs9zZvE6g', title: 'پارہ 15 (اردو)' },
    { id: 'Eltjca6lcbY', title: 'پارہ 16 (اردو)' },
    { id: 'anBs0WX8k1w', title: 'پارہ 17 (اردو)' },
    { id: 'xid8p73BOBE', title: 'پارہ 18 (اردو)' },
    { id: 'ABVRrEJixvk', title: 'پارہ 19 (اردو)' },
    { id: 'xeI4br7AgLE', title: 'پارہ 20 (اردو)' },
    { id: 'U0yhPiEZr5o', title: 'پارہ 21 (اردو)' },
    { id: 'R437GwtRLfQ', title: 'پارہ 22 (اردو)' },
    { id: 'BYrakL2GP5w', title: 'پارہ 23 (اردو)' },
    { id: 'jHu6YUGPjFY', title: 'پارہ 24 (اردو)' },
    { id: '9sOEwY3P0wY', title: 'پارہ 25 (اردو)' },
    { id: '9O3_uDPdu-c', title: 'پارہ 26 (اردو)' },
    { id: 'I2ipUGe8CpY', title: 'پارہ 27 (اردو)' },
    { id: 'xlyiLvJ7qzg', title: 'پارہ 28 (اردو)' },
    { id: 'cnZzqD6leFM', title: 'پارہ 29 (اردو)' },
    { id: 'TUz9yNkHEVM', title: 'پارہ 30 (اردو)' },
  ],
  surahs: [
    { id: 'ujMnOuW_hAU', title: 'سورہ رحمٰن' },
    { id: 'XcVR7Jix3BI', title: 'سورہ یوسفؑ' },
    { id: 'uzEnbSZQLSc', title: 'سورہ یٰسین' },
    { id: '-cbrF85SOnI', title: 'آیت الکرسی' },
    { id: 'mvDz9xe76Mo', title: 'سورہ مزمل' },
    { id: 'L2ca0YF1QYc', title: 'سورہ نور' },
    { id: 'LZjnlwDEjBA', title: 'سورہ جمعہ' },
    { id: 'uLZ_-0RTkdU', title: 'سورہ ناس' },
  ],
  stories: [
    { id: 'WZsQIRCFYPE', title: 'چشمہ حیات (حضرت خضرؑ)' },
    { id: 'hAY5a3diWD4', title: 'حضرت سلیمانؑ اور ملکہ سبا' },
    { id: 'J_gY7lZ7K8A', title: 'اصحاب کہف' },
    { id: 'ZgOxnRGzDLs', title: 'ابلیس نے سجدہ کیوں نہ کیا' },
    { id: 'UaQIT_z9rYU', title: 'حضرت عزیرؑ کا قصہ' },
    { id: 'y9O9BTPEBcw', title: 'The Fountain of Life (Eng)' },
  ],
  tilawat: [
    { id: '0JwnkfZHeUM', title: 'تواشیع گروپ' },
    { id: 'rKHMB03R6b0', title: 'دعائے امام زمانہ (عج)' },
    { id: 'JZ826oJFbik', title: 'خوبصورت قرات' },
    { id: 'dqBsTyfe2I8', title: 'ھمخوانی (گروپ 1)' },
    { id: '4hnD3Xq-ca4', title: 'ھمخوانی (گروپ 2)' },
    { id: 'yc-eU4HGxho', title: 'شاہ مدینہ (نعت)' },
    { id: 'VVaZhe0UGsY', title: 'معجزہ قرآن حصہ 1' },
    { id: '5PkniIJXZQo', title: 'معجزہ قرآن حصہ 2' },
  ],
};

export default function Project() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const [headerImageIndex, setHeaderImageIndex] = useState(0);

  const headerImages = [
    'https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png',
    'https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderImageIndex((prev) => (prev + 1) % headerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowScroll(window.scrollY > 300);
    });
  }, []);



  const VideoCard = ({ video }) => (
    <div onClick={() => setSelectedVideo(video)} className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer group">
      <div className="relative aspect-video bg-gray-900">
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:opacity-75 transition"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition">
          <div className="bg-[#D4AF37] rounded-full p-4 group-hover:scale-110 transition">
            <FaPlay className="text-white text-2xl" />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-3 text-center">
        <p className="text-white font-serif text-sm leading-relaxed text-right">{video.title}</p>
      </div>
    </div>
  );

const VideoGrid = ({ title, videos, id }) => {
    return (
      <section id={id} className="py-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#0f4c75] text-[#D4AF37] px-8 py-3 rounded-full border-2 border-[#D4AF37] font-serif font-bold text-lg">
            {title}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* اب یہاں کوئی فلٹر نہیں، سیدھی ویڈیوز دکھا رہے ہیں */}
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />
      <HeroSlider />

 
      {/* Founder Message */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border-4 border-[#D4AF37] p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#0f4c75] text-center font-serif mb-6">بانی پراجیکٹ کا پیغام</h2>
          
          <div className="bg-yellow-50 border-4 border-[#c8a165] rounded-lg p-6 mb-8">
            <p className="text-center font-serif text-lg font-bold text-gray-800" dir="rtl">
              "قرآن کو اونچے طاق میں رکھ دینا اس کا احترام نہیں، بلکہ اسے سمجھ کر، غوروفکر کر کے اس پر عمل کرنا ہی اس کا حقیقی احترام ہے۔"
            </p>
          </div>

          <div className="text-right space-y-6 font-serif" dir="rtl">
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>السلام علیکم و رحمۃ اللہ وبرکاتہ!</strong>
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              ہمارے پیارے نبی ﷺ نے فرمایا: <span className="text-[#b8860b] font-bold">"میں تمہارے درمیان دو چیزیں چھوڑے جا رہا ہوں: کتاب اللہ اور میری عترت۔"</span>
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              اللہ کے فضل و کرم سے <strong>"نورالقرآن پراجیکٹ"</strong> کا آغاز ایک خواب کی تعبیر ہے۔ میں اس توفیق پر شکر گزار ہوں کہ اللہ تعالیٰ نے یہ منفرد خدمت میرے حصے میں ڈالی ہے۔
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              اس پراجیکٹ کا مقصد یہ ہے کہ قرآن کریم کو جدید <strong>سمعی و بصری (Audio-Visual)</strong> انداز میں پیش کیا جائے تاکہ نوجوان نسل اور عام انسان قرآن کو صرف پڑھنے نہیں بلکہ <strong>دل کی آنکھ سے دیکھنے اور سمجھنے لگیں۔</strong>
            </p>
            <div className="bg-yellow-100 border-l-4 border-[#c8a165] p-4">
              <p className="text-gray-800 font-bold text-lg">
                یہ محض ایک تخلیقی آئیڈیا نہیں بلکہ <strong>خلوصِ نیت</strong> سے اٹھایا ہوا عملی قدم ہے، جو ان شاء اللہ جدید ٹیکنالوجی کے ذریعے قرآن کو سمجھنے کا نیا انداز دنیا کے سامنے لائے گا۔
              </p>
            </div>
            <p className="text-[#0f4c75] font-bold text-lg text-left">
              حاجی شبیر احمد شگری (بانی)
            </p>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#ffd700] rounded-2xl shadow-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-[#0f4c75] text-center font-serif mb-4">✨ نور القرآن پروجیکٹ کا باقاعدہ افتتاح ✨</h3>
          <p className="text-center text-gray-800 font-serif mb-6 text-lg">
            یکم رمضان المبارک کو <strong>علامہ شیخ محسن علی نجفیؒ</strong> کی قبر مطہر پر (جامعہ کوثر اسلام آباد) میں اس تاریخی پروجیکٹ کا افتتاح۔
          </p>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/ah0OXlnDw2k"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/zNVKoP23oiI"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="font-serif font-bold text-gray-800 text-center">دنیا و آخرت کی کامیابی کے لئے قرآن سے رشتہ مضبوط کریں</h4>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/-3F1RdF0oFQ"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="font-serif font-bold text-gray-800 text-center">قرآن پاک کی آڈیو ویڈیو جدید انداز میں</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grids */}
      <section className="container mx-auto px-4 pb-12 relative z-10">
        <VideoGrid title="قرآنی ویڈیوز (عربی) - مکمل 30 پارے" videos={quranVideos.parat_arabic} id="parat-arabic" />
        <VideoGrid title="اردو ٹیکسٹ - مکمل 30 پارے" videos={quranVideos.parat_urdu} id="parat-urdu" />
        <VideoGrid title="منتخب سورتیں (Selected Surahs)" videos={quranVideos.surahs} id="surahs" />
        <VideoGrid title="قرآنی واقعات (Stories)" videos={quranVideos.stories} id="stories" />
        <VideoGrid title="تلاوت، نعت اور معجزہ قرآن" videos={quranVideos.tilawat} id="tilawat" />
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div onClick={() => setSelectedVideo(null)} className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 -right-10 text-white hover:text-[#D4AF37] transition text-4xl"
            >
              <FaTimes />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <p className="text-white text-center mt-4 font-serif">{selectedVideo.title}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}