import {
  FaHeart, FaHandshake, FaTrophy, FaGlobe, FaQuran, FaAward, FaMedal,
  FaMicrophone, FaTv, FaVideo, FaNewspaper, FaBriefcase, FaUser,
  FaPenNib
} from "react-icons/fa";

export const founderItems = [
  { icon: <FaQuran />, title: "پروجیکٹ نور القرآن", desc: "دنیا کا پہلا بصری قرآن", link: "/project" },
  { icon: <FaTv />, title: "نور پروڈکشن", desc: "اسلامی میڈیا نیٹ ورک", link: "https://www.youtube.com/@noorproduction" },
  { icon: <FaHandshake />, title: "پاک ایران دوستی انجمن", desc: "دوستی کا فورم", link: "/diplomatic-services#anjuman" },
  { icon: <FaGlobe />, title: "پاک ایران ویب سائٹ", desc: "اردو/فارسی ویب پورٹل", link: "https://pakiiranassociation.wixsite.com/pira" },
  { icon: <FaGlobe />, title: "تجارت و ثقافت فیڈریشن", desc: "ثقافتی اور تجارتی اتحاد", link: "/diplomatic-services#tourism" },
  { icon: <FaTrophy />, title: "بانی: پاک ایران سیاحت", desc: "پاکستان میں پہلی بار", link: "/diplomatic-services#tourism" },
  { icon: <FaTv />, title: "آپارات چینل (فارسی)", desc: "عارضی طور پر دستیاب نہیں", link: "https://www.aparat.com" },
  { icon: <FaQuran />, title: "طفلانِ نور چینل", desc: "بچوں کے لیے تفریحی ویڈیوز", link: "https://www.youtube.com/results?search_query=Tiflan+e+Noor" }
];

export const mediaRoles = [
  { icon: <FaMicrophone />, title: "ریڈیو ہوسٹ", desc: "ریڈیو پاکستان سکردو (بھائی جان)" },
  { icon: <FaTv />, title: "ٹی وی اینکر", desc: "سٹار ایشیا (پروگرام گائیڈ)" },
  { icon: <FaVideo />, title: "پروڈیوسر", desc: "2000+ دستاویزی فلمیں اور ویڈیوز" },
  { icon: <FaNewspaper />, title: "صحافی", desc: "45 سال کا صحافتی تجربہ" }
];

export const services = [
  {
    icon: <FaUser />,
    title: 'میڈیا کا واحد سپاہی',
    items: [
      "45 سال کا تجربہ: اسکرپٹنگ، فلم بندی، ایڈیٹنگ میں ماہر.",
      "شروع: 8 سال کی عمر میں ریڈیو پاکستان سکردو (آواز کا فنکار).",
      "سب ایڈیٹر: روزنامہ اخبار اور رسائل میں مہارت."
    ]
  },
  {
    icon: <FaPenNib />,
    title: "صحافت و کتابیں",
    items: [
      "300+ مضامین اور 80+ اشاعتی شمارے: بین الاقوامی طور پر شائع.",
      "سردبیر: روزنامہ حاوی، پرچار، اکٹھ میں ڈپٹی ایڈیٹر.",
      "مصنف: مدینۃ الاہلبیتؑ، انیس النفوس، بوئے بہشت"
    ]
  },
  {
    icon: <FaMedal />,
    title: "ایوارڈز و اعزازات",
    items: [
      "گولڈ میڈل: ثقافتی و ادبی خدمات کے لیے.",
      "امن سفیر: بین المذاہب ہم آہنگی کو فروغ.",
      "نور القرآن: بصری قرآن کے پہلے رہنما."
    ],
    color: "red"
  }
];
