// ہم نے آئیکنز بھی یہیں منگوا لیے ہیں تاکہ مین پیج ہلکا رہے
import { FaYoutube, FaBookOpen, FaHandshake, FaGlobe, FaMicrophone, FaNewspaper, FaTv, FaPlane } from "react-icons/fa";

// 🔴 1. ویلکم سیکشن کا ڈیٹا
export const welcomeData = {
  bismillah: "بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ",
  greeting: "السلام علیکم!",
  description: "میں آپ کو اپنی آفیشل ویب سائٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے 'نور القرآن ویژول' جیسے عظیم پروجیکٹ کی تفصیلات کے ساتھ میرے کالمز، مضامین، سفرنامے، ڈاکومنٹریز، اور دیگر خدمات کا مجموعہ ملے گا۔ بالخصوص میری تحاریر پر گوگل کے خصوصی اور دلچسپ تجزیے آڈیو پوڈکاسٹ اور ویڈیو کی شکل میں سن اور دیکھ سکتے ہیں۔",
  name: "حاجی شبیر احمد شگری"
};

// 🔴 2. اہم اعزازات (بٹنز)
export const honorsData = [
  { title: "خادمِ امام رضاؑ", link: "/imam-reza", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif", direction: "right" },
  { title: "خادمِ غازی عباسؑ", link: "/ghazi-abbas", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif", direction: "left" }
];

// 🔴 3. نیویگیشن کارڈز کا ڈیٹا
export const navCardsData = [
  { title: "نور القرآن", link: "/project", target: "_self", icon: <FaBookOpen /> },
  { title: "نور پروڈکشنز", link: "https://www.youtube.com/@noorproduction?sub_confirmation=1", target: "_blank", icon: <FaYoutube /> },
  { title: "پاک ایران دوستی", link: "https://pakiiranassociation.wixsite.com/pira", target: "_blank", icon: <FaHandshake /> },
  { title: "ویب سائٹ", link: "/", target: "_self", icon: <FaGlobe /> }
];

// homeData.js کے اندر اس حصے کو دیکھیں
export const projectSectionData = {
  title: "📖 Noor-ul-Quran Project",
  description: "نورالقرآن ویژول کا مقصد قرآن مجید کی آیات کو بصری انداز میں پیش کرنا ہے۔",
  btnText: "تفصیلات دیکھیں",
  link: "/library#book-noor", // 👈 یہاں لائبریری کا مخصوص لنک لگا دیں
  image: "https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png"
};

// 🔴 5. حاجی شبیر احمد شگری کی تمام 8 کتب کا مکمل ڈیٹا
export const booksData = [
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png", title: "سکون کی تلاش", author: "حاجی شبیر احمد شگری", year: "2015", link: "/library#book-sakoon" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png", title: "بوئے بہشت", author: "حاجی شبیر احمد شگری", year: "2018", link: "/library#book-booy" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png", title: "روح کی معراج", author: "حاجی شبیر احمد شگری", year: "2012", link: "/library#book-rooh" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png", title: "کنجی بہشت", author: "حاجی شبیر احمد شگری", year: "2019", link: "/library#book-kunji" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png", title: "سیاحت ایران", author: "حاجی شبیر احمد شگری", year: "2016", link: "/library#book-iran" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Book_Khorasan-e-Razavi_b9nqdb.bmp", title: "انیس النفوس", author: "حاجی شبیر احمد شگری", year: "2020", link: "/library#book-anees" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png", title: "مجلہ فرھنگستان", author: "حاجی شبیر احمد شگری", year: "2017", link: "/library#book-farhang" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png", title: "نورالقرآن", author: "حاجی شبیر احمد شگری", year: "2021", link: "/library#book-noor" } 
];

// 🔴 6. نامور شخصیات کے تمام 9 انٹرویوز کا مکمل ڈیٹا (Cloudinary MP4 Links)
export const legendsData = [
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4", 
    name: "Mian Manzoor Watoo", 
    role: "Ex-Chief Minister" 
  },
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.mp4", 
    name: "Pir Usman Shah Noori", 
    role: "Peace Committee" 
  },
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525530/5.Pir_Burhan_ud_Deen_Usmani_bxhkzp.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525530/5.Pir_Burhan_ud_Deen_Usmani_bxhkzp.mp4", 
    name: "Pir Burhanuddin Usmani", 
    role: "Usmani Foundation" 
  },
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.mp4", 
    name: "Dr. M. Sadaqat Ali", 
    role: "Religious Scholar" 
  },
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.mp4", 
    name: "Pir Maoom H. Naqvi", 
    role: "Senior Scholar" 
  },
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525528/8.Sardar_Sikandar_Singh_yg3tn9.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525528/8.Sardar_Sikandar_Singh_yg3tn9.mp4", 
    name: "Sardar Sikandar Singh", 
    role: "Sikh Leader" 
  },
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", 
    name: "Hafiz A.G. Roparhi", 
    role: "Jamia Ahle Hadith" 
  },
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.mp4", 
    name: "Molana M. Khan Laghari", 
    role: "Ahle Sunnat Scholar" 
  },
  { 
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.jpg", 
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.mp4", 
    name: "Pir G. Rasool Awesi", 
    role: "Spiritual Leader" 
  }
];

// 🔴 7. حاجی شبیر احمد شگری کی 45 سالہ خدمات کا ڈیٹا (آئیکنز کے ساتھ)
export const journeyData = [
  { title: "Radio Pakistan", desc: "Start of Career at Radio Pakistan Skardu.", icon: <FaMicrophone /> },
  { title: "Journalism (45 Years)", desc: "Deputy Editor: Daily Havi, Akath & Prachar.", icon: <FaNewspaper /> },
  { title: "TV Talk Shows", desc: "Host & Guest on National & International TV.", icon: <FaTv /> },
  { title: "Cultural Diplomacy", desc: "Ex-PRO & In-charge at Khana Farhang Iran.", icon: <FaHandshake /> },
  { title: "Books & Author", desc: "Author of 9+ books including 'Booy-e-Bahisht'.", icon: <FaBookOpen /> },
  { title: "Tourism Pioneer", desc: "Launched First Cultural Tourism to Iran.", icon: <FaPlane /> }
];