"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
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
  );
}