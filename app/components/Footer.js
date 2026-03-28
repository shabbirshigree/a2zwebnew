"use client";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GlobalEngagementBox from "./GlobalEngagementBox";
import { useLocale } from "./LocaleProvider";
import { getDictionary } from "../lib/i18n";

export default function Footer() {
  const { locale } = useLocale();
  const dict = getDictionary(locale);

  const userEmail = "shigriinfo@gmail.com";
  const welcomeText =
    locale === "fa"
      ? "سلام علیکم، خوش آمدید. ان‌شاءالله به‌زودی با شما تماس گرفته می‌شود.\nحاجی شبیر احمد شگری"
      : locale === "en"
        ? "Assalamu alaikum, welcome. In sha Allah we will contact you soon.\nHaji Shabbir Ahmed Shigri"
        : "وعلیکم السلام، خوش آمدید۔ ان شااللہ جلد ہی آپ سے رابطہ کیا جائے گا۔\nحاجی شبیر احمد شگری";

  const waMessage = encodeURIComponent(
    locale === "fa"
      ? `السلام علیکم، از وب‌سایت شما آمده‌ام و می‌خواهم در خبرنامه عضو شوم.\n\nپاسخ:\n${welcomeText}`
      : locale === "en"
        ? `Assalamu alaikum, I came from your website and would like to subscribe to the newsletter.\n\nReply:\n${welcomeText}`
        : `السلام علیکم، میں آپ کی ویب سائٹ سے آیا ہوں اور نیوز لیٹر سبسکرائب کرنا چاہتا ہوں۔\n\nجواب:\n${welcomeText}`
  );
  const waLink = `https://wa.me/923334491715?text=${waMessage}`;

  const socialLinks = [
    { icon: <FaWhatsapp />, url: waLink, name: "WhatsApp", color: "hover:text-green-500" },
    { icon: <FaYoutube />, url: "https://youtube.com/@noorproduction", name: "YouTube", color: "hover:text-red-500" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@noorproductions786", name: "TikTok", color: "hover:text-pink-500" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/1GkBRptjDz/", name: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaXTwitter />, url: "https://x.com/shigri41215", name: "X", color: "hover:text-white" },
  ];

  const footerDir = locale === "en" ? "ltr" : "rtl";

  return (
    <>
      <GlobalEngagementBox />
      <footer
        dir={footerDir}
        className="bg-gradient-to-r from-[#0f4c75] via-[#0a3552] to-[#0f4c75] text-white pt-10 pb-6 border-t-4 border-[#D4AF37] relative z-10 mt-0"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#25D366] text-white px-5 py-2.5 text-xs md:text-sm rounded-full font-bold hover:bg-white hover:text-[#25D366] transition-all shadow-lg flex items-center gap-2 ring-2 ring-white/10 hover:ring-[#25D366]/50 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <FaWhatsapp size={18} className="relative z-10" />
              <span className="relative z-10">{dict.footer.subscribe}</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 mb-6">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <p
                className="text-sm font-sans tracking-wider group-hover:text-[#D4AF37] transition-colors"
                dir="ltr"
              >
                +92 333 4491715
              </p>
              <FaWhatsapp
                size={20}
                className="text-[#D4AF37] group-hover:scale-125 transition-transform"
              />
            </a>

            <a
              href={`mailto:${userEmail}`}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <p
                className="text-sm font-sans tracking-wide group-hover:text-[#D4AF37] transition-colors"
                dir="ltr"
              >
                {userEmail}
              </p>
              <div className="text-[#D4AF37] transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-125">
                <FaEnvelope size={20} />
              </div>
            </a>
          </div>

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

          <div className="text-center flex flex-col items-center gap-1">
            <p
              dir="ltr"
              className="text-xs text-gray-300 font-sans tracking-wide"
            >
              © 2026 Haji Shabbir Ahmed Shigri. {dict.footer.rights}
            </p>
            <p
              className={`text-[#D4AF37] text-[10px] md:text-[11px] font-medium tracking-wide ${
                locale === "en" ? "uppercase" : locale === "fa" ? "font-persian" : "urdu-text"
              }`}
            >
              {dict.footer.developed}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
