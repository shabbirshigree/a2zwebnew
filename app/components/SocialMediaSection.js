"use client";
import { FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocale } from "./LocaleProvider";
import { getDictionary } from "../lib/i18n";

export default function SocialMediaSection() {
  const { locale } = useLocale();
  const dict = getDictionary(locale);

  // صرف اردو اور فارسی میں دکھائیں
  if (locale !== "ur" && locale !== "fa") return null;

  const headingText = locale === "fa" ? "ما را در شبکه های اجتماعی دنبال کنید" : "سوشل میڈیا پر ہمارے ساتھ جڑیں";

  const socialLinks = [
    { icon: <FaXTwitter />, url: "https://x.com/shigri41215", name: "X" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/1GkBRptjDz/", name: "Facebook" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@noorproductions786", name: "TikTok" },
    { icon: <FaYoutube />, url: "https://youtube.com/@noorproduction", name: "YouTube" },
    { icon: <FaWhatsapp />, url: "https://wa.me/923334491715", name: "WhatsApp" },
  ];

  return (
    <section className="bg-[#f8fafb] py-16 border-b border-[#D4AF37]/20">
      <div className="container mx-auto px-4 text-center">
        <p className={`text-2xl md:text-3xl font-bold text-[#0b314d] ${locale === "fa" ? "font-persian" : "urdu-text"}`}>
          {headingText}
        </p>
        <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-[#D4AF37]"></div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D4AF37] bg-[#0b314d] text-[#D4AF37] flex items-center justify-center text-2xl shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#0b314d]"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
