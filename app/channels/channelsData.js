import { FaYoutube, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok } from 'react-icons/fa';

// ✅ 'export const' likhna zaroori hai taake page.js isay dhoond sakay
export const CHANNELS = [
  {
    title: "Noor Production",
    handle: "@noorproduction",
    desc: "اسلامی ویڈیوز اور دیگر معلوماتی مواد کے لیے ہمارا آفیشل یوٹیوب چینل سبسکرائب کریں۔",
    img: "/images/noor-logo.jpg", 
    icon: <FaYoutube size={30} />,
    color: "from-red-500 to-red-700",
    href: "https://www.youtube.com/@noorproduction",
    button: "سبسکرائب کریں"
  },
  {
    title: "Official WhatsApp",
    handle: "WhatsApp Group",
    desc: "تازہ ترین اپڈیٹس براہ راست اپنے واٹس ایپ پر حاصل کرنے کے لیے ہمارے گروپ میں شامل ہوں۔",
    img: "/images/whatsapp-bg.jpg", 
    icon: <FaWhatsapp size={30} />,
    color: "from-green-500 to-green-700",
    href: "https://wa.me/923334491715",
    button: "شامل ہوں"
  },
  // 💡 Aap mazeed channels yahan isi tarah add kar sakte hain...
];