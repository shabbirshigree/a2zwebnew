"use client";
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaYoutube, FaTiktok, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Navbar, HeroSlider } from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp size={32} />,
      title: "واٹس ایپ",
      info: "+923334491715",
      link: "https://wa.me/923334491715"
    },
    {
      icon: <FaEnvelope size={32} />,
      title: "ای میل",
      info: "shigri51214@gmail.com",
      link: "mailto:shigri51214@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt size={32} />,
      title: "مقام",
      info: "Skardu, Gilgit Baltistan, Pakistan",
      link: "#"
    },
    {
      icon: <FaPhone size={32} />,
      title: "فون",
      info: "+923334491715",
      link: "tel:+923334491715"
    }
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, url: "https://wa.me/923334491715", name: "WhatsApp", color: "hover:text-green-500" },
    { icon: <FaYoutube />, url: "https://youtube.com/@noorproduction", name: "YouTube", color: "hover:text-red-500" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@noorproductions786", name: "TikTok", color: "hover:text-pink-500" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/1GkBRptjDz/", name: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaXTwitter />, url: "https://x.com/shigri41215", name: "X", color: "hover:text-white" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      <HeroSlider />

      {/* Page Title */}
      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-16 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif mb-4">رابطہ کریں</h1>
        <p className="text-white text-lg md:text-xl">ہم سے براہ راست رابطہ کریں</p>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, i) => (
            <a 
              key={i}
              href={method.link}
              className="bg-white border-3 border-[#D4AF37] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 group text-center"
            >
              <div className="text-[#D4AF37] mb-4 flex justify-center group-hover:scale-125 transition duration-500">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f4c75] mb-2">{method.title}</h3>
              <p className="text-gray-700 flex items-center justify-center gap-1" dir={method.title === "واٹس ایپ" || method.title === "فون" ? "ltr" : "auto"}>
                {method.info}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#0f4c75] to-[#1a6a96] rounded-3xl p-8 md:p-12 border-4 border-[#D4AF37] shadow-2xl">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 font-serif text-center">براہ کرم اپنا پیغام بھیجیں</h2>
            
            {submitted && (
              <div className="mb-6 p-6 bg-green-500/20 border-2 border-green-500 rounded-2xl text-white text-center font-bold animate-fadeInUp">
                ✅ شکریہ! آپ کا پیغام کامیابی سے بھیجا گیا۔ جلد ہی ہم آپ سے رابطہ کریں گے۔
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text"
                  name="name"
                  placeholder="آپ کا نام"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-2 border-white/30 rounded-xl px-6 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37] focus:bg-white/20 transition duration-300"
                />
                <input 
                  type="email"
                  name="email"
                  placeholder="آپ کی ای میل"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-2 border-white/30 rounded-xl px-6 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37] focus:bg-white/20 transition duration-300"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="tel"
                  name="phone"
                  placeholder="آپ کا فون نمبر"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border-2 border-white/30 rounded-xl px-6 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37] focus:bg-white/20 transition duration-300"
                />
                <input 
                  type="text"
                  name="subject"
                  placeholder="موضوع"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-2 border-white/30 rounded-xl px-6 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37] focus:bg-white/20 transition duration-300"
                />
              </div>

              <textarea 
                name="message"
                placeholder="آپ کا پیغام یہاں لکھیں..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-white/10 border-2 border-white/30 rounded-xl px-6 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37] focus:bg-white/20 transition duration-300 resize-none"
              />

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:shadow-xl text-[#0f4c75] font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
              >
                <FaPaperPlane /> پیغام بھیجیں
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-[#0f4c75] text-center mb-12 font-serif">ہمیں فالو کریں</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {socialLinks.map((social, i) => (
            <a 
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-5xl text-[#D4AF37] transition duration-300 hover:scale-125 ${social.color} drop-shadow-lg`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-r from-[#0f4c75]/10 to-[#D4AF37]/10 py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0f4c75] text-center mb-12 font-serif">ہمارا مقام</h2>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.5551157919006!2d75.57453632346028!3d35.29505597246394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e02ccde5dc9c8f%3A0x1234567890abcdef!2sSkardu%2C%20Gilgit-Baltistan!5e0!3m2!1sen!2s!4v1234567890123" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] rounded-3xl p-8 md:p-12 text-white border-4 border-[#D4AF37] shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">سوالات؟</h2>
          <p className="text-lg mb-8">براہ کرم ہمیں رابطہ کریں۔ ہم آپ سے جلد ہی بات کریں گے۔</p>
          <a 
            href="https://wa.me/923334491715"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#0f4c75] font-bold py-4 px-8 rounded-full hover:shadow-lg transition duration-300 transform hover:scale-105 text-lg"
          >
            <FaWhatsapp size={24} /> واٹس ایپ پر رابطہ کریں
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0f4c75] via-[#0a3552] to-[#0f4c75] text-white pt-16 pb-10 border-t-4 border-[#D4AF37] relative z-10 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <p className="text-base flex items-center gap-1" dir="ltr">+923334491715</p>
            <FaWhatsapp size={20} className="text-[#D4AF37]" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <p className="text-base">shigri51214@gmail.com</p>
            <FaEnvelope size={20} className="text-[#D4AF37]" />
          </div>
          
          {/* Social Icons in Footer */}
          <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-blue-700/50">
            {socialLinks.map((social, i) => (
              <a 
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-[#D4AF37] transition duration-300 hover:scale-125 ${social.color} drop-shadow-lg`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-sm opacity-75">
            <p>© 2025 Haji Shabbir Ahmed Shigri. All Rights Reserved.</p>
            <p className="mt-2 text-[#D4AF37] text-xs font-medium">Developed with ❤️ by Noor Productions</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
