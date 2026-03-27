"use client";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GlobalEngagementBox from "./GlobalEngagementBox";

export default function Footer() {
  // نئی ای میل اور واٹس ایپ میسج کی ترتیب
  const userEmail = "shigriinfo@gmail.com";
  const welcomeText = "وعلیکم السلام، خوش آمدید۔ ان شااللہ جلد ہی آپ سے رابطہ کیا جائے گا۔\nحاجی شبیر احمد شگری";
  const waMessage = encodeURIComponent(`السلام علیکم، میں آپ کی ویب سائٹ سے آیا ہوں اور نیوز لیٹر سبسکرائب کرنا چاہتا ہوں۔\n\nجواب:\n${welcomeText}`);
  const waLink = `https://wa.me/923334491715?text=${waMessage}`;

  const socialLinks = [
    { icon: <FaWhatsapp />, url: waLink, name: "WhatsApp", color: "hover:text-green-500" },
    { icon: <FaYoutube />, url: "https://youtube.com/@noorproduction", name: "YouTube", color: "hover:text-red-500" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@noorproductions786", name: "TikTok", color: "hover:text-pink-500" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/1GkBRptjDz/", name: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaXTwitter />, url: "https://x.com/shigri41215", name: "X", color: "hover:text-white" }
  ];

  return (
    <>
    <GlobalEngagementBox />
    <footer className="bg-gradient-to-r from-[#0f4c75] via-[#0a3552] to-[#0f4c75] text-white pt-10 pb-6 border-t-4 border-[#D4AF37] relative z-10 mt-0">
      <div className="container mx-auto px-4 text-center">
        
        {/* صرف سبسکرائب بٹن (بغیر بڑے باکس اور ٹیکسٹ کے) */}
        <div className="mb-8 flex justify-center">
          <a href={waLink} target="_blank" className="bg-[#25D366] text-white px-5 py-2 text-xs rounded-full font-bold hover:bg-white hover:text-[#25D366] transition-all shadow-md flex items-center gap-2 animate-pulse">
            <FaWhatsapp size={16} /> سبسکرائب کریں
          </a>
        </div>

        {/* رابطہ کی معلومات */}
        <div className="flex flex-col items-center gap-4 mb-6">
          
          {/* فون نمبر + واٹس ایپ لنک */}
          <a href={waLink} target="_blank" className="flex items-center gap-2 group cursor-pointer">
            <p className="text-sm font-sans tracking-wider group-hover:text-[#D4AF37] transition-colors" dir="ltr">+92 333 4491715</p>
            <FaWhatsapp size={20} className="text-[#D4AF37] group-hover:scale-125 transition-transform" />
          </a>

          {/* نئی ای میل + اینیمیشن */}
          <a href={`mailto:${userEmail}`} className="flex items-center gap-2 group cursor-pointer">
            <p className="text-sm font-sans tracking-wide group-hover:text-[#D4AF37] transition-colors" dir="ltr">{userEmail}</p>
            <div className="text-[#D4AF37] transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-125">
               <FaEnvelope size={20} />
            </div>
          </a>
        </div>
        
        {/* سوشل میڈیا آئیکنز */}
        <div className="flex justify-center gap-6 mb-5 pb-5 border-b border-blue-700/50">
          {socialLinks.map((social, i) => (
            <a 
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-[#D4AF37] transition duration-300 hover:scale-125 hover:-translate-y-2 ${social.color} drop-shadow-md`}
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
    </>
  );
}