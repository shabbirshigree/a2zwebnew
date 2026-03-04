// app/about/aboutData.js
import { FaHeart, FaHandshake, FaTrophy, FaGlobe, FaQuran, FaAward, FaMedal, FaMicrophone, FaTv, FaVideo, FaNewspaper, FaBriefcase, FaUser, FaPenNib, FaLandmark } from "react-icons/fa";

export const founderItems = [
  { icon: <FaQuran />, title: "نور القرآن پراجیکٹ", desc: "World's First Visual Quran" },
  { icon: <FaTv />, title: "نور پروڈکشنز", desc: "Islamic Media Network" },
  { icon: <FaHandshake />, title: "انجمن دوستی پاک ایران", desc: "Friendship Association" },
  { icon: <FaGlobe />, title: "پاک ایران ویب سائٹ", desc: "Web Portal (Urdu/Farsi)" },
  { icon: <FaGlobe />, title: "ٹریڈ اینڈ کلچر فیڈریشن", desc: "Federation of Culture & Trade" },
  { icon: <FaTrophy />, title: "بانی: پاک ایران ٹورزم", desc: "First Time in Pakistan" },
  { icon: <FaTv />, title: "آپارات چینل (فارسی)", desc: "Temporarily Unavailable" },
  { icon: <FaQuran />, title: "طفلانِ نور چینل", desc: "Kids Entertainment Channel" }
];

export const mediaRoles = [
  { icon: <FaMicrophone />, title: "Radio Host", desc: "ریڈیو پاکستان سکردو (بھائی جان)" },
  { icon: <FaTv />, title: "TV Anchor", desc: "سٹار ایشیا (پروگرام رہنما)" },
  { icon: <FaVideo />, title: "Producer", desc: "2000+ ڈاکومنٹریز و ویڈیوز" },
  { icon: <FaNewspaper />, title: "Journalist", desc: "45 سالہ صحافتی تجربہ" }
];

// 🔴 ریڈیو پاکستان کا خصوصی مواد
export const radioHistory = {
  title: "ریڈیو پاکستان: میرا پہلا مکتب",
  image: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771722020/pbcs_Copy_xlljiu.png",
  quote: "شعور اور آگہی کا پہلا باقاعدہ دروازہ ریڈیو پاکستان کے ذریعے کھلا۔",
  text: [
    "مجھے آج بھی اچھی طرح یاد ہے جب میں محض آٹھ یا نو سال کا تھا تو سکردو میں ریڈیو پاکستان کی میڈیم ویو (Medium Wave) آزمائشی نشریات کا آغاز ہوا۔ اس دور میں جب ٹی وی اور انٹرنیٹ کا تصور بھی محال تھا، ریڈیو ہی دنیا سے رابطے کا واحد ذریعہ ہوا کرتا تھا۔",
    "میں سکردو کے ان چند خوش نصیب بچوں میں شامل تھا جنہیں 'چاند تارے' پروگرام میں شرکت کا موقع ملا۔ جلد ہی میں نے 'بھائی جان' کے روپ میں میزبانی شروع کر دی۔ ریڈیو کے سخت اصول 'اسکرپٹ کے بغیر نہیں بولنا' نے مجھے پختہ تحریر کا عادی بنا دیا۔",
    "وقت کے ساتھ ساتھ میں نے 'عزمِ جواں' کی کمپیئرنگ سنبھالی اور بلتی زبان میں دو گھنٹے کی طویل براہِ راست نشریات کرنے لگا۔ سکردو میں صبح کی آزمائشی نشریات کا آغاز بھی میرے ہاتھوں ہوا۔ 1989-90 میں 750 روپے کا وہ چیک میری پہلی کمائی نہیں بلکہ اس عزت کا اعتراف تھا جو مائیکروفون نے مجھے دی تھی۔"
  ]
};

export const services = [
  {
    icon: <FaUser />,
    title: 'Media "One Man Army"',
    items: [
      "45 Years Experience: Scripting, Filming, Editing expert.",
      "Start: Age 8 with Radio Pakistan Skardu (Voice Artist).",
      "Sub-Editor: Expertise in Daily Newspapers & Magazines."
    ]
  },
  {
    icon: <FaPenNib />,
    title: "Journalism & Books",
    items: [
      "300+ Articles & 80+ Editions: Published internationally.",
      "Editor: Deputy Editor of Daily Havi, Parchar, Akath.",
      "Author: مدینۃ الاہلبیتؑ، انیس النفوس، بوئے بہشت"
    ]
  },
  {
    icon: <FaMedal />,
    title: "Awards & Titles",
    items: [
      "Gold Medal: For Cultural & Literary Services.",
      "Peace Ambassador: Promoting Inter-faith Harmony.",
      "Visual Quran: Pioneer of Visual Quran Methodology."
    ],
    color: "red"
  }
];