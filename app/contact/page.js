"use client";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { contactMethods, socialLinks } from './contactData'; 

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fcfdfe] overflow-x-hidden font-sans">
      <Navbar />
      <HeroSlider />

      {/* 🌟 شاندار پیج ٹائٹل */}
      <section className="bg-[#0b314d] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0b314d] to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#D4AF37] urdu-text mb-4 drop-shadow-2xl">رابطہ کریں</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-[#fff7cc] text-xl md:text-2xl urdu-text font-light tracking-widest opacity-90">ہم سے براہ راست رابطہ قائم کریں</p>
        </div>
      </section>

      {/* 📞 رابطہ کے ذرائع (Cards with Golden Border) */}
      <section className="container mx-auto px-4 py-12 md:py-20 relative z-10 -mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {contactMethods.map((method, i) => (
            <a key={i} href={method.link} target={method.title === "مقام" ? "_blank" : "_self"} 
               className="bg-white border-2 border-[#D4AF37] rounded-3xl p-8 shadow-[0_10px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:-translate-y-2 transition-all duration-500 group text-center relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37] rounded-bl-full opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
              
              <div className="text-[#0b314d] bg-[#f4f7f9] border border-[#D4AF37]/30 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0b314d] group-hover:text-[#D4AF37] transition-all duration-500 shadow-inner">
                {method.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#0b314d] urdu-text mb-3">{method.title}</h3>
              <p className="text-gray-600 font-sans text-sm md:text-base font-semibold tracking-wide">{method.info}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ✉️ فارم اور نقشہ (Side by Side) */}
      <section className="container mx-auto px-4 py-12 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* 📝 رابطہ فارم (FormSubmit.co کے ساتھ فعال) */}
          <div className="bg-[#0b314d] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border-t-8 border-b-8 border-[#D4AF37]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 urdu-text text-center relative z-10 drop-shadow-md">براہ کرم اپنا پیغام بھیجیں</h2>
            
            <form action="https://formsubmit.co/shigri51214@gmail.com" method="POST" className="space-y-6 relative z-10" dir="rtl">
              <input type="hidden" name="_subject" value="New Message from Website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="آپ کا نام" required className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none urdu-text transition-all" />
                <input type="email" name="email" placeholder="آپ کی ای میل" required className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none font-sans text-right transition-all" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" name="phone" placeholder="فون نمبر (اختیاری)" className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none font-sans text-right transition-all" />
                <input type="text" name="subject" placeholder="پیغام کا موضوع" required className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none urdu-text transition-all" />
              </div>

              <textarea name="message" placeholder="آپ کا پیغام یہاں لکھیں..." required rows="5" className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none urdu-text resize-none transition-all" />

              <button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0b314d] font-bold py-4 rounded-2xl hover:shadow-[0_10px_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-xl md:text-2xl urdu-text">
                <FaPaperPlane className="transform -rotate-45" /> پیغام بھیجیں
              </button>
            </form>
          </div>

          {/* 🗺️ نقشہ (Google Map) */}
          <div className="h-full min-h-[400px] lg:min-h-[600px] bg-white rounded-[3rem] shadow-2xl border-4 border-[#D4AF37] overflow-hidden relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102148.64966675097!2d75.55396593976378!3d35.29828551469145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e463229b0a1d4b%3A0xc34a413d9db2f5da!2sSkardu%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                className="w-full h-full border-0 absolute inset-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>
        </div>
      </section>

      {/* 🌐 سوشل میڈیا پر جڑیں (Golden Theme) */}
      <section className="bg-gray-50 py-16 border-y border-[#D4AF37]/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b314d] urdu-text mb-12 border-b-2 border-[#D4AF37] inline-block pb-3">سوشل میڈیا پر ہمارے ساتھ جڑیں</h2>
          
          <div className="flex justify-center gap-6 md:gap-12 flex-wrap">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" 
                 className="w-16 h-16 md:w-20 md:h-20 bg-[#0b314d] border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-3xl md:text-4xl text-[#D4AF37] shadow-[0_5px_15px_rgba(212,175,55,0.2)] transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(212,175,55,0.5)] hover:bg-[#D4AF37] hover:text-[#0b314d] group" 
                 title={social.name}>
                 <span className="transition-transform duration-300 group-hover:scale-110">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}