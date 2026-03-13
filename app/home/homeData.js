// homeData.js میں ان کو شامل کریں یا اپڈیٹ کریں

import { FaHandshake, FaLandmark, FaUsers, FaBook, FaPenNib, FaTv, FaMicrophone, FaTrophy, FaImages, FaHandHoldingHeart } from "react-icons/fa";

// 📚 کتابوں کا ڈیٹا
export const booksData = [
  {
    title: 'سیرتِ فاطمہ زہراؑ: بوئے بہشت',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png',
    link: '/library#book-booy'
  },
  {
    title: 'انیس النفوس',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Anees-an-nafoos_vb0ljq.png',
    link: '/library#book-anees'
  },
  {
    title: 'سفرنامہ ایران: دیارِ عشق کا سفر',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772651728/eb2e1ccd-e669-4453-8ca7-10f38cf13a50.png',
    link: '/library#book-safarnama'
  },
  {
    title: 'روح کی معراج',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772599153/39144cf5-3156-4054-85a3-bbfd54106240.png',
    link: '/library#book-rooh'
  },
  {
    title: 'سکون کی تلاش',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772651897/e56ab798-14ec-4aaf-a0b3-a205a1aae1f4.png',
    link: '/library#book-sakoon'
  },
  {
    title: 'سیاحتِ ایران (حصہ اول و دوم)',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png',
    link: '/library#book-sayahat-parts'
  },
  {
    title: 'کنجی بہشت: دعاؤں کا مجموعہ',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png',
    link: '/library#book-dua'
  },
  {
    title: 'خراسان رضوی (حصہ اول و دوم)',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772111272/65878faa-2f99-4af6-8216-ad9009adc747.png',
    link: '/library#book-khorasan'
  },
  {
    title: 'رہبر کے فتوے (حصہ اول و دوم)',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772597583/e1511aec-3b7d-44d3-9bd1-4cdfbeecb9c3.png',
    link: '/library#book-fatwa'
  },
  {
    title: 'مجلہ فرھنگستان',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png',
    link: '/library#book-farhang'
  },
  {
    title: 'مجلہ انقلاب',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772598044/95eeeeb5-067e-4fcb-b4c6-ed952d52af89.png',
    link: '/library#book-inqilab'
  }
];

// 🏆 45 سالہ خدمات کا ڈیٹا
export const servicesData = [
  { title: 'ڈپلومیٹک خدمات', link: '/diplomatic-services', icon: <FaHandshake size={24} />, desc: 'بین الاقوامی سطح پر سفارتی اور تعمیری کردار کی تفصیلات۔' },
  { title: 'کلچرل ڈپلومیسی', link: '/cultural', icon: <FaLandmark size={24} />, desc: 'پاک ایران ثقافتی تعلقات اور ہم آہنگی کا فروغ۔' },
  { title: 'وحدت امت', link: '/unity', icon: <FaUsers size={24} />, desc: 'مسلمانوں کے درمیان اتحاد اور بھائی چارے کی انتھک کوششیں۔' },
  { title: 'تصانیف و کتب', link: '/library', icon: <FaBook size={24} />, desc: 'علمی، ادبی اور روحانی موضوعات پر شاندار کتب کا ذخیرہ۔' },
  { title: 'جرنلزم و مضامین', link: '/article', icon: <FaPenNib size={24} />, desc: 'نصف صدی پر محیط صحافتی خدمات اور فکری مضامین۔' },
  { title: 'ٹی وی چینلز', link: '/channels', icon: <FaTv size={24} />, desc: 'مختلف بین الاقوامی ٹی وی چینلز پر دینی و سماجی خدمات۔' },
  { title: 'ٹالک شوز', link: '/talkshows', icon: <FaMicrophone size={24} />, desc: 'اہم قومی و بین الاقوامی موضوعات پر فکر انگیز انٹرویوز۔' },
  { title: 'اعزازات و ایوارڈز', link: '/awards', icon: <FaTrophy size={24} />, desc: 'قومی اور بین الاقوامی سطح پر ملنے والے اعلیٰ اعزازات۔' },
  { title: 'پکچر گیلری', link: '/gallery', icon: <FaImages size={24} />, desc: 'یادگار لمحات، شخصیات اور اہم تقریبات کی تصویری جھلکیاں۔' },
  { title: 'دیگر خدمات', link: '/services', icon: <FaHandHoldingHeart size={24} />, desc: 'سماجی، فلاحی اور دیگر اہم ملی و رفاہی خدمات۔' }
];