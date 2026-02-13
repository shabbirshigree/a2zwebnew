"use client";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { 
  FaQuran, FaPlayCircle, FaHeart, FaChild, FaMosque, 
  FaMicrophoneAlt, FaKaaba, FaNewspaper, FaYoutube, 
  FaFacebookF, FaWhatsapp, FaPaperPlane, FaArrowLeft
} from 'react-icons/fa';

export default function ServicesPage() {
  
  // سروس کارڈ کا فنکشن (اینیمیشن اور چھلانگ کے ساتھ)
  const ServiceCard = ({ icon, title, desc, link, delay, children }) => (
    <div 
      className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-b-8 border-transparent hover:border-[#D4AF37] group h-full flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8"
      style={{ animationDelay: delay }}
    >
      {/* چھلانگ لگانے والا آئیکن */}
      <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-4xl text-[#0f4c75] mb-6 transform group-hover:-translate-y-4 group-hover:scale-110 group-hover:bg-[#0f4c75] group-hover:text-[#D4AF37] transition-all duration-300 ease-out shadow-inner">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#0f4c75] mb-4 font-serif">{title}</h3>
      <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-serif text-sm text-center">
        {desc}
      </p>

      <div className="w-full flex flex-col gap-3">
        {/* تفصیلات کا بٹن */}
        <Link href={link || "#"} className="bg-[#0f4c75] text-white py-2 rounded-xl font-bold hover:bg-[#D4AF37] hover:text-[#0f4c75] transition-all flex items-center justify-center gap-2 text-sm group-hover:shadow-md">
          تفصیلات دیکھیں <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
        </Link>
        <div className="flex gap-2 justify-center mt-2">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <HeroSlider />

      {/* ہیڈنگ سیکشن */}
      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f4c75] font-serif mb-3">ہماری خدمات</h1>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 text-lg font-serif italic text-center px-4">دین و ملت کی خدمت کے روشن سفر کا ایک عکس</p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* خدمات کا گرڈ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <ServiceCard icon={<FaQuran />} title="نور القرآن ویژول" link="/project" delay="0ms" desc="جدید ٹیکنالوجی اور گرافکس کے ذریعے قرآن مجید کے تصوراتی خاکوں کی تیاری اور عالمی تشہیر۔">
            <a href="https://www.youtube.com/@noorullquraan" target="_blank" className="text-red-600 hover:scale-125 transition-transform"><FaYoutube size={22}/></a>
            <a href="https://wa.me/923334491715" target="_blank" className="text-green-600 hover:scale-125 transition-transform"><FaWhatsapp size={22}/></a>
          </ServiceCard>

          <ServiceCard icon={<FaHeart />} title="اصلاحِ نفس" link="/article" delay="100ms" desc="کتاب 'روح کی معراج' کی روشنی میں انسانی زندگی کی اخلاقی اور روحانی تربیت کے پیغامات۔">
            <a href="https://facebook.com/madrasanoorequran" target="_blank" className="text-blue-600 hover:scale-125 transition-transform"><FaFacebookF size={20}/></a>
          </ServiceCard>

          <ServiceCard icon={<FaChild />} title="طفلانِ نور" link="/project" delay="200ms" desc="بچوں کی دینی تربیت کے لیے کارٹون، کہانیاں اور اینیمیشنز پر مشتمل خصوصی پروجیکٹ۔">
            <a href="https://www.youtube.com/@TiflaneNoor" target="_blank" className="text-red-600 hover:scale-125 transition-transform"><FaYoutube size={22}/></a>
          </ServiceCard>

          <ServiceCard icon={<FaKaaba />} title="زیارات و سیاحت" link="/contact" delay="300ms" desc="ایران، عراق اور شام کی زیارات کے لیے بااعتماد قافلوں کی تشکیل اور مکمل سفری سہولیات۔" />

          <ServiceCard icon={<FaNewspaper />} title="میڈیا و صحافت" link="/article" delay="400ms" desc="کالم نگاری، تجزیہ کاری اور دستاویزی فلموں کے ذریعے معاشرتی و مذہبی مسائل کا حل۔">
            <a href="https://www.youtube.com/@noorproduction" target="_blank" className="text-red-600 hover:scale-125 transition-transform"><FaYoutube size={22}/></a>
          </ServiceCard>

          <ServiceCard icon={<FaMicrophoneAlt />} title="مذہبی پروڈکشنز" link="/contact" delay="500ms" desc="نشستیں، سیمینارز اور آن لائن تربیتی پروگرامز کا انعقاد اور ایصالِ ثواب کے لیے ویڈیوز کی تیاری۔" />

        </div>

        {/* رابطہ باکس (پتلا اور چوڑا واٹس ایپ بٹن) */}
        <div className="mt-20 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-xl text-center relative overflow-hidden group">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0f4c75] font-serif">کیا آپ ہمارے ساتھ تعاون کرنا چاہتے ہیں؟</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm md:text-base text-center">دینِ مبین کی خدمت کے اس سفر میں آپ کی رائے اور شمولیت ہمارے لیے اعزاز ہوگی۔</p>
          
          <a 
            href="https://wa.me/923334491715" 
            target="_blank"
            className="text-white px-6 md:px-12 py-2 rounded-full font-bold text-sm md:text-base transition-all inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-105 w-full md:w-auto"
            style={{ backgroundColor: '#25D366' }} // سبز رنگ
          >
            <FaWhatsapp size={18} /> رابطہ کرنے کے لیے کلک کریں
          </a>
        </div>

      </div>

      <Footer />
    </main>
  );
}