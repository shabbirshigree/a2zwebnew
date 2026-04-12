// app/services/servicesData.js
import {
  FaQuran, FaHeart, FaChild, FaKaaba, FaNewspaper,
  FaMicrophoneAlt, FaYoutube, FaWhatsapp, FaFacebookF, FaShoppingBag, FaGlobeAmericas, FaClock
} from 'react-icons/fa';

export const SERVICES_DATA = [
  {
    icon: <FaQuran />,
    title: "روزانہ قرآنی کلپ (نور القرآن)",
    link: "/noor-ul-quran",
    // 👇 آپ کی ہدایت کے مطابق روزانہ کی خدمت کا ذکر
    desc: "نور القرآن پروجیکٹ کے تحت روزانہ ایک منٹ کا خصوصی قرآنی کلپ (Shorts) شیئر کیا جاتا ہے، جس میں منتخب آیات کی تلاوت کے ساتھ ساتھ ان کی مختصر اور جامع تفسیر بھی بصری شکل میں پیش کی جاتی ہے۔",
    socials: [
      { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@noorullquraan", color: "text-red-600" },
      { icon: <FaWhatsapp size={20} />, url: "https://wa.me/923334491715", color: "text-green-600" }
    ]
  },
  {
    icon: <FaHeart />,
    title: "اصلاحِ نفس (روزانہ پیغام)",
    link: "/library#book-rooh",
    desc: "انسانی کردار کی تعمیر اور تزکیہ نفس کے لیے روزانہ کی بنیاد پر 'اصلاحِ نفس' کا پیغام شیئر کیا جاتا ہے۔ یہ پیغامات دراصل میری تالیف 'روح کی معراج' (جو کہ علامہ احمد نراقی کی ضخیم کتاب کا آسان خلاصہ اور ترجمہ ہے) سے اخذ کیے جاتے ہیں۔",
    socials: [
      { icon: <FaFacebookF size={18} />, url: "https://facebook.com/madrasanoorequran", color: "text-blue-600" },
      { icon: <FaWhatsapp size={20} />, url: "https://wa.me/923334491715", color: "text-green-600" }
    ]
  },
  {
    icon: <FaShoppingBag />,
    title: "رضوی آن لائن",
    link: "https://youtube.com/@rezavionline",
    desc: "اسلامی و ثقافتی مصنوعات کا مرکز۔ جہاں آپ کو تبرکات، مستند اسلامی کتب اور دیگر ثقافتی اشیاء باآسانی دستیاب ہوں گی۔ یہ آپ کی دینی و روحانی ضروریات کا معتبر مرکز ہے۔",
    socials: [
      { icon: <FaYoutube size={20} />, url: "https://youtube.com/@rezavionline", color: "text-red-600" }
    ],
    isFeatured: true
  },
  {
    icon: <FaChild />,
    title: "طفلانِ نور",
    link: "https://www.youtube.com/@TiflaneNoor",
    desc: "بچوں کی اخلاقی حفاظت کا مشن۔ اینیمیشن اور کارٹونز کے ذریعے بچوں کو قرآن اور اخلاقی کہانیاں سکھا کر انہیں موبائل کے منفی اثرات سے بچانا اور بہترین اسلامی تربیت فراہم کرنا۔",
    socials: [
      { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@TiflaneNoor", color: "text-red-600" }
    ]
  },
  {
    icon: <FaGlobeAmericas />,
    title: "زیارات و سیاحت",
    link: "/cultural",
    desc: "ایران، عراق اور شام کی زیارات کے لیے بااعتماد قافلوں کی تشکیل اور بین الاقوامی سفارتی و ثقافتی سیاحت کا فروغ۔ ہم زائرین کے لیے مکمل سفری و انتظامی سہولیات فراہم کرتے ہیں۔",
    socials: [
      { icon: <FaWhatsapp size={20} />, url: "https://wa.me/923334491715", color: "text-green-600" }
    ]
  },
  {
    icon: <FaNewspaper />,
    title: "میڈیا و صحافت",
    link: "/article",
    desc: "45 سالہ صحافتی تجربے کی روشنی میں کالم نگاری، سیاسی تجزیہ کاری اور دستاویزی فلموں کے ذریعے معاشرتی مسائل کا حل تلاش کرنا اور حقائق کو دنیا کے سامنے لانا۔",
    socials: [
      { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@noorproduction", color: "text-red-600" }
    ]
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "مذہبی پروڈکشنز",
    link: "https://www.youtube.com/@noorproduction",
    desc: "نشستیں، سیمینارز اور آن لائن تربیتی پروگرامز کا انعقاد۔ نور پروڈکشنز کے زیرِ اہتمام علمی، ادبی اور مذہبی موضوعات پر اعلیٰ معیار کی ویڈیوز اور ڈاکومنٹریز کی تیاری۔",
    socials: [
      { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@noorproduction", color: "text-red-600" }
    ]
  }
];