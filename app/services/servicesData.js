// app/services/servicesData.js
import { FaQuran, FaHeart, FaChild, FaKaaba, FaNewspaper, FaMicrophoneAlt, FaYoutube, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

export const SERVICES_DATA = [
  { 
    icon: <FaQuran />, 
    title: "نور القرآن ویژول", 
    link: "/project", 
    desc: "جدید ٹیکنالوجی اور گرافکس کے ذریعے قرآن مجید کے تصوراتی خاکوں کی تیاری اور عالمی تشہیر۔",
    socials: [
      { icon: <FaYoutube size={20}/>, url: "https://www.youtube.com/@noorullquraan", color: "text-red-600" },
      { icon: <FaWhatsapp size={20}/>, url: "https://wa.me/923334491715", color: "text-green-600" }
    ]
  },
  { 
    icon: <FaHeart />, 
    title: "اصلاحِ نفس", 
    link: "/article", 
    desc: "کتاب 'روح کی معراج' کی روشنی میں انسانی زندگی کی اخلاقی اور روحانی تربیت کے پیغامات۔",
    socials: [
      { icon: <FaFacebookF size={18}/>, url: "https://facebook.com/madrasanoorequran", color: "text-blue-600" }
    ]
  },
  { 
    icon: <FaChild />, 
    title: "طفلانِ نور", 
    link: "/project", 
    desc: "بچوں کی دینی تربیت کے لیے کارٹون، کہانیاں اور اینیمیشنز پر مشتمل خصوصی پروجیکٹ۔",
    socials: [
      { icon: <FaYoutube size={20}/>, url: "https://www.youtube.com/@TiflaneNoor", color: "text-red-600" }
    ]
  },
  { 
    icon: <FaKaaba />, 
    title: "زیارات و سیاحت", 
    link: "/contact", 
    desc: "ایران، عراق اور شام کی زیارات کے لیے بااعتماد قافلوں کی تشکیل اور مکمل سفری سہولیات۔" 
  },
  { 
    icon: <FaNewspaper />, 
    title: "میڈیا و صحافت", 
    link: "/article", 
    desc: "کالم نگاری، تجزیہ کاری اور دستاویزی فلموں کے ذریعے معاشرتی و مذہبی مسائل کا حل۔",
    socials: [
      { icon: <FaYoutube size={20}/>, url: "https://www.youtube.com/@noorproduction", color: "text-red-600" }
    ]
  },
  { 
    icon: <FaMicrophoneAlt />, 
    title: "مذہبی پروڈکشنز", 
    link: "/contact", 
    desc: "نشستیں، سیمینارز اور آن لائن تربیتی پروگرامز کا انعقاد اور ایصالِ ثواب کے لیے ویڈیوز کی تیاری۔" 
  }
];