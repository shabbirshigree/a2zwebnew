"use client";
import { useState } from 'react';
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { contactMethods, socialLinks } from './contactData'; // 🟢 ڈیٹا دوسری فائل سے آ رہا ہے

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      {/* Page Title */}
      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-12 md:py-16 text-center relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37] urdu-text mb-2">رابطہ کریں</h1>
        <p className="text-white text-lg md:text-xl urdu-text opacity-90">ہم سے براہ راست رابطہ کریں</p>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactMethods.map((method, i) => (
            <a key={i} href={method.link} className="bg-white border-2 border-[#D4AF37]/50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 group text-center">
              <div className="text-[#D4AF37] mb-4 flex justify-center group-hover:scale-110 transition duration-300">{method.icon}</div>
              <h3 className="text-xl font-bold text-[#0f4c75] urdu-text mb-2">{method.title}</h3>
              <p className="text-gray-600 font-sans text-sm md:text-base break-words" dir="ltr">{method.info}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0f4c75] to-[#0a314d] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border-4 border-[#D4AF37] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-5"></div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-8 urdu-text text-center relative z-10">براہ کرم اپنا پیغام بھیجیں</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-500 text-white rounded-xl text-center urdu-text font-bold animate-bounce relative z-10">
                ✅ شکریہ! آپ کا پیغام کامیابی سے بھیجا گیا۔ ہم جلد رابطہ کریں گے۔
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10" dir="rtl">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <input type="text" name="name" placeholder="آپ کا نام" value={formData.name} onChange={handleChange} required className="bg-white/10 border-2 border-white/20 rounded-xl px-4 md:px-6 py-3 text-white placeholder-gray-300 focus:border-[#D4AF37] focus:outline-none urdu-text w-full" />
                <input type="email" name="email" placeholder="آپ کی ای میل" value={formData.email} onChange={handleChange} required className="bg-white/10 border-2 border-white/20 rounded-xl px-4 md:px-6 py-3 text-white placeholder-gray-300 focus:border-[#D4AF37] focus:outline-none w-full text-right" />
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <input type="tel" name="phone" placeholder="فون نمبر (اختیاری)" value={formData.phone} onChange={handleChange} className="bg-white/10 border-2 border-white/20 rounded-xl px-4 md:px-6 py-3 text-white placeholder-gray-300 focus:border-[#D4AF37] focus:outline-none w-full text-right" />
                <input type="text" name="subject" placeholder="پیغام کا موضوع" value={formData.subject} onChange={handleChange} required className="bg-white/10 border-2 border-white/20 rounded-xl px-4 md:px-6 py-3 text-white placeholder-gray-300 focus:border-[#D4AF37] focus:outline-none urdu-text w-full" />
              </div>

              <textarea name="message" placeholder="آپ کا پیغام یہاں لکھیں..." value={formData.message} onChange={handleChange} required rows="5" className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 md:px-6 py-3 text-white placeholder-gray-300 focus:border-[#D4AF37] focus:outline-none urdu-text resize-none" />

              <button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0f4c75] font-bold py-3 md:py-4 rounded-xl hover:shadow-xl transition transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg md:text-2xl urdu-text">
                <FaPaperPlane className="transform -rotate-45" /> پیغام بھیجیں
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f4c75] urdu-text mb-10 border-b-2 border-[#D4AF37] inline-block pb-2">سوشل میڈیا پر جڑیں</h2>
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          {socialLinks.map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className={`text-4xl md:text-5xl text-[#D4AF37] transition duration-300 hover:scale-125 ${social.color} drop-shadow-md`} title={social.name}>{social.icon}</a>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12 md:py-16 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f4c75] text-center urdu-text mb-8 md:mb-12">ہمارا مقام</h2>
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105844.24944111383!2d75.56847844007886!3d35.30232470162594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e46300438676bb%3A0x7d253f9380df1155!2sSkardu!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-[#0f4c75] rounded-3xl p-8 md:p-12 text-white border-2 md:border-4 border-[#D4AF37] shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 urdu-text text-[#D4AF37]">کیا آپ کے ذہن میں کوئی سوال ہے؟</h2>
          <p className="text-base md:text-xl mb-8 urdu-text opacity-90">بلا جھجھک ہم سے رابطہ کریں۔ ہم آپ کی رہنمائی کے لیے ہمہ وقت موجود ہیں۔</p>
          <a href="https://wa.me/923334491715" target="_blank" className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full hover:shadow-lg transition transform hover:scale-105 text-lg md:text-xl urdu-text">
            <FaWhatsapp size={24} /> ابھی واٹس ایپ کریں
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}