// app/contact/contactData.js
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const contactMethods = [
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

export const socialLinks = [
  { icon: <FaWhatsapp />, url: "https://wa.me/923334491715", name: "WhatsApp", color: "hover:text-green-500" },
  { icon: <FaYoutube />, url: "https://youtube.com/@noorproduction", name: "YouTube", color: "hover:text-red-500" },
  { icon: <FaTiktok />, url: "https://www.tiktok.com/@noorproductions786", name: "TikTok", color: "hover:text-pink-500" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/share/1GkBRptjDz/", name: "Facebook", color: "hover:text-blue-500" },
  { icon: <FaXTwitter />, url: "https://x.com/shigri41215", name: "X", color: "hover:text-white" }
];