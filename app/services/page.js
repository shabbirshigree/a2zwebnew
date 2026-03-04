"use client";
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaArrowLeft, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { SERVICES_DATA } from './servicesData';

export default function ServicesPage() {
  
  const ServiceCard = ({ item }) => (
    <div className={`relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border-2 ${item.isFeatured ? 'border-[#D4AF37]' : 'border-transparent'} hover:border-[#D4AF37] group flex flex-col items-center text-center`}>
      
      {item.isFeatured && (
        <div className="absolute top-5 left-5 text-[#D4AF37] animate-pulse">
          <FaStar size={20} />
        </div>
      )}

      <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center text-5xl text-[#0b314d] mb-6 transform group-hover:-translate-y-4 group-hover:bg-[#0b314d] group-hover:text-[#D4AF37] transition-all duration-500 shadow-inner ring-8 ring-transparent group-hover:ring-[#D4AF37]/10">
        {item.icon}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-4 urdu-text group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
      <p className="text-gray-600 mb-8 flex-grow leading-[2] urdu-text text-base md:text-xl text-justify px-2">
        {item.desc}
      </p>

      <div className="w-full space-y-4">
        <Link href={item.link || "#"} className="w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 text-lg urdu-text bg-[#0b314d] text-white hover:bg-[#D4AF37] hover:text-[#0b314d] shadow-lg group-hover:scale-[1.02]">
          {item.title === "رضویہ آن لائن" ? "آن لائن شاپنگ" : "مزید معلومات"} 
          {item.isFeatured ? <FaExternalLinkAlt size={16} /> : <FaArrowLeft size={16} />}
        </Link>
        
        <div className="flex gap-6 justify-center py-2">
          {item.socials?.map((soc, idx) => (
            <a key={idx} href={soc.url} target="_blank" className={`${soc.color} hover:scale-150 transition-transform duration-300 drop-shadow-md text-2xl`}>
              {soc.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fcfdfe] overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      {/* 🌟 پرشکوہ ہیڈر */}
      <section className="bg-[#0b314d] py-20 md:py-28 text-center relative overflow-hidden border-b-8 border-[#D4AF37]">
         <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0b314d] to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#D4AF37] urdu-text mb-6 drop-shadow-2xl">دینی، علمی و ثقافتی خدمات</h1>
            <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"></div>
            <p className="text-[#fff7cc] text-xl md:text-3xl urdu-text font-light italic opacity-90">"مسائل اور وسائل کو نہیں، ہم نے صرف رسائل کو دیکھا ہے"</p>
         </div>
      </section>

      {/* 🛠️ سروسز گرڈ */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES_DATA.map((service, i) => (
            <ServiceCard key={i} item={service} />
          ))}
        </div>

        {/* 💬 رابطہ کا دعوت نامہ */}
        <div className="mt-24 md:mt-36 bg-white rounded-[3.5rem] p-10 md:p-20 shadow-2xl border border-gray-100 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37] rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-all duration-700"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#0b314d] urdu-text leading-tight">انسانیت کی خدمت کے اس سفر میں <br/> ہمارا ساتھ دیں</h2>
            <p className="text-gray-500 mb-12 max-w-3xl mx-auto text-lg md:text-2xl urdu-text leading-relaxed font-light">
              آپ کی تجاویز، دعائیں اور شمولیت ہمارے مشن کو مزید تقویت بخشیں گی۔ آئیے مل کر اس نور کو عام کریں۔
            </p>
            
            <a 
              href="https://wa.me/923334491715" 
              target="_blank"
              className="group bg-[#25D366] text-white px-12 md:px-24 py-5 rounded-full font-bold text-xl md:text-2xl transition-all inline-flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:shadow-[0_25px_50px_rgba(37,211,102,0.5)] hover:-translate-y-2 urdu-text"
            >
              <FaWhatsapp size={35} className="group-hover:rotate-12 transition-transform" /> واٹس ایپ پر رابطہ کریں
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}