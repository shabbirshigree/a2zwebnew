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
  { icon: <FaMicrophone />, title: "Radio Host", desc: "ریڈیو پاکستان سکردو (FM 93)" },
  { icon: <FaTv />, title: "TV Anchor", desc: "سٹار ایشیا (پروگرام رہنما)" },
  { icon: <FaVideo />, title: "Producer", desc: "ڈاکومنٹریز و علامہ اقبال سیریل" },
  { icon: <FaNewspaper />, title: "Journalist", desc: "45 سالہ صحافتی تجربہ" }
];

export const services = [
  {
    icon: <FaUser />,
    title: 'Media "One Man Army"',
    items: [
      "45 Years Experience: Scripting, Filming, Editing expert.",
      "Start: Journey began at age 8 with Kids Magazine & Radio Pakistan.",
      "Skillset: Mastered traditional media to modern AI Technology."
    ]
  },
  {
    icon: <FaPenNib />,
    title: "Journalism & Books",
    items: [
      "300+ Articles & 80+ Editions: Published internationally.",
      "Editor: Deputy Editor of Daily Havi, Parchar, Akath.",
      "Author of Books: مدینۃ الاہلبیتؑ، انیس النفوس، بوئے بہشت، سکون کی تلاش"
    ]
  },
  {
    icon: <FaLandmark />,
    title: "Cultural Diplomat",
    items: [
      "Retired as PRO: Cultural Center of Iran (Lahore) - 25 Years.",
      "Head of Depts: IT, Website, Audio/Visual & Public Relations.",
      "Editor: Magazines 'Shakh-e-Nabat' & 'Iran Shanasi'."
    ]
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate Strategist",
    items: [
      "Sales Executive: Private Sector Leadership.",
      "Marketing Guru: Practical experience in 40+ Cities.",
      "Event Organizer: Managed Int'l Seminars & Exhibitions."
    ],
    color: "green"
  },
  {
    icon: <FaMedal />,
    title: "Awards & Titles",
    items: [
      "Gold Medal: For Cultural & Literary Services.",
      "Peace Ambassador: (امن کا سفیر) & Harmony Promoter.",
      "Representative: First Rep of Astan Quds Razavi in Pakistan.",
      "Media Excellence Award: 2025 (Lahore)."
    ],
    color: "red"
  }
];