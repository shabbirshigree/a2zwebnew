"use client";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { SERVICES_DATA } from './servicesData'; // 🟢 ڈیٹا یہاں سے آ رہا ہے

export default function ServicesPage() {
  
  const ServiceCard = ({ item }) => (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-[#D4AF37] group h-full flex flex-col items-center text-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl md:text-4xl text-[#0f4c75] mb-6 transform group-hover:-translate-y-3 group-hover:bg-[#0f4c75] group-hover:text-[#D4AF37] transition-all duration-300 shadow-inner">
        {item.icon}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-[#0f4c75] mb-3 urdu-text leading-tight">{item.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed urdu-text text-sm md:text-base text-justify md:text-center">
        {item.desc}
      </p>

      <div className="w-full flex flex-col gap-3">
        <Link href={item.link || "#"} className="bg-[#0f4c75] text-white py-2 rounded-xl font-bold hover:bg-[#D4AF37] hover:text-[#0f4c75] transition-all flex items-center justify-center gap-2 text-sm md:text-base urdu-text group-hover:shadow-md">
          تفصیلات دیکھیں <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
        </Link>
        <div className="flex gap-4 justify-center mt-1">
          {item.socials?.map((soc, idx) => (
            <a key={idx} href={soc.url} target="_blank" className={`${soc.color} hover:scale-125 transition-transform`}>{soc.icon}</a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      <section className="py-10 md:py-16 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c75] urdu-text mb-2">ہماری خدمات</h1>
        <div className="w-20 md:w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 text-base md:text-xl urdu-text italic">دین و ملت کی خدمت کے روشن سفر کا ایک عکس</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_DATA.map((service, i) => (
            <ServiceCard key={i} item={service} />
          ))}
        </div>

        {/* رابطہ باکس */}
        <div className="mt-16 md:mt-24 bg-white border border-[#D4AF37]/30 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 islamic-pattern opacity-5"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#0f4c75] urdu-text">کیا آپ ہمارے ساتھ تعاون کرنا چاہتے ہیں؟</h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-sm md:text-xl urdu-text leading-relaxed">دینِ مبین کی خدمت کے اس سفر میں آپ کی رائے اور شمولیت ہمارے لیے اعزاز ہوگی۔</p>
            
            <a 
              href="https://wa.me/923334491715" 
              target="_blank"
              className="text-white px-8 md:px-14 py-3 rounded-full font-bold text-base md:text-xl transition-all inline-flex items-center justify-center gap-3 shadow-lg hover:scale-105 w-full md:w-auto urdu-text"
              style={{ backgroundColor: '#25D366' }}
            >
              <FaWhatsapp size={24} /> رابطہ کرنے کے لیے کلک کریں
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}