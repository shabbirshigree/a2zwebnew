"use client";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { icon: <FaWhatsapp />, url: "https://wa.me/923334491715", name: "WhatsApp", color: "hover:text-green-500" },
    { icon: <FaYoutube />, url: "https://youtube.com/@noorproduction", name: "YouTube", color: "hover:text-red-500" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@noorproductions786", name: "TikTok", color: "hover:text-pink-500" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/1GkBRptjDz/", name: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaXTwitter />, url: "https://x.com/shigri41215", name: "X", color: "hover:text-white" }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0f4c75] via-[#0a3552] to-[#0f4c75] text-white pt-10 pb-6 border-t-4 border-[#D4AF37] relative z-10 mt-20">
      <div className="container mx-auto px-4 text-center">
        
        {/* 🔴 نیوز لیٹر سبسکرپشن (اب ایک ہی لائن میں اور بہت سمارٹ ہے) */}
        <div className="max-w-2xl mx-auto mb-8 bg-[#0a3552]/40 p-2 md:p-3 rounded-full border border-[#D4AF37]/50 shadow-sm flex flex-col md:flex-row items-center justify-center gap-3 backdrop-blur-sm">
          <h3 className="text-xs md:text-sm font-bold text-[#D4AF37] whitespace-nowrap urdu-text">تازہ ترین اپڈیٹس:</h3>
          <div className="flex w-full md:w-auto flex-1 gap-2" dir="ltr">
            <input 
              type="email" 
              placeholder="Enter email..." 
              className="w-full px-3 py-1.5 text-xs rounded-full bg-white text-gray-900 placeholder-gray-500 border border-transparent focus:outline-none focus:border-[#D4AF37] transition-all"
            />
            <button className="bg-[#D4AF37] text-[#0f4c75] px-4 py-1.5 text-xs rounded-full font-bold hover:bg-white transition-all shadow-md whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* رابطہ کی معلومات */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-sm flex items-center gap-1 font-sans tracking-wider" dir="ltr">+92 333 4491715</p>
          <FaWhatsapp size={16} className="text-[#D4AF37]" />
        </div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <p className="text-sm font-sans tracking-wide" dir="ltr">shigri51214@gmail.com</p>
          <FaEnvelope size={16} className="text-[#D4AF37]" />
        </div>
        
        {/* سوشل میڈیا آئیکنز */}
        <div className="flex justify-center gap-5 mb-5 pb-5 border-b border-blue-700/50">
          {socialLinks.map((social, i) => (
            <a 
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl text-[#D4AF37] transition duration-300 hover:scale-125 hover:-translate-y-1 ${social.color} drop-shadow-md`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* کاپی رائٹ */}
        <div className="text-center flex flex-col items-center">
          <p dir="ltr" className="text-xs text-gray-300 font-sans tracking-wide">© 2026 Haji Shabbir Ahmed Shigri. All Rights Reserved.</p>
          <p className="mt-1 text-[#D4AF37] text-[10px] font-medium tracking-widest uppercase">Developed with ❤️ by Noor Productions</p>
        </div>
      </div>
    </footer>
  );
}