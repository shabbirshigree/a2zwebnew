import {
  FaHandshake, FaLandmark, FaUsers, FaBook, FaPenNib,
  FaTv, FaMicrophone, FaTrophy, FaImages, FaHandHoldingHeart,
  FaYoutube, FaBookOpen, FaGlobe, FaNewspaper, FaPlane, FaUsers as FaUsersGroup,
  FaQuran
} from "react-icons/fa";

// 🔴 1. ویلکم سیکشن کا ڈیٹا
export const welcomeData = {
  bismillah: "بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ",
  greeting: "السلام علیکم!",
  description: "میں آپ کو اپنی آفیشل ویب سائٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے 'نور القرآن ویژول' جیسے عظیم پروجیکٹ کی تفصیلات کے ساتھ میرے کالمز، مضامین، سفرنامے، ڈاکومنٹریز، اور دیگر خدمات کا مجموعہ ملے گا۔ بالخصوص میری تحاریر پر گوگل کے خصوصی اور دلچسپ تجزیے آڈیو پوڈکاسٹ اور ویڈیو کی شکل میں سن اور دیکھ سکتے ہیں۔",
  name: "حاجی شبیر احمد شگری"
};

export const welcomeDataEn = {
  bismillah: "In the name of Allah, the Most Gracious, the Most Merciful",
  greeting: "Peace be upon you!",
  description: "I welcome you to my official website. This platform serves as a humble reflection of my 45-year journey in journalism, culture, and religious service. Here, you will find comprehensive details of the 'Noor-ul-Quran Visual' project, alongside a curated collection of my editorials, travelogues, and documentaries. Explore exclusive AI-driven analyses of my literary works, available in both audio and video formats.",
  name: "Haji Shabbir Ahmed Shigri"
};

export const welcomeDataFa = {
  bismillah: "بسم الله الرحمن الرحیم",
  greeting: "السلام علیکم!",
  description: "به وب‌سایت رسمی من خوش آمدید. این وب‌سایت بازتابی فروتنانه از ۴۵ سال خدمات روزنامه‌نگاری، فرهنگی، اجتماعی و دینی من است. در اینجا جزئیات پروژه‌های بزرگی مانند «نورالقرآن ویژوال» را به همراه مجموعه‌ای از ستون‌ها، مقالات، سفرنامه‌ها و مستندهای من خواهید یافت. به‌ویژه می‌توانید تحلیل‌های اختصاصی هوش مصنوعی در مورد نوشته‌های من را به صورت پادکست صوتی و ویدئویی مشاهده کنید.",
  name: "حاجی شبیر احمد شگری"
};

// 🔴 2. اہم اعزازات
export const honorsData = [
  { title: "خادمِ امام رضاؑ", link: "/imam-reza", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" },
  { title: "خادمِ غازی عباسؑ", link: "/ghazi-abbas", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif" }
];

export const honorsDataEn = [
  { title: "Servant of Imam Reza (a.s)", link: "/imam-reza", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" },
  { title: "Servant of Ghazi Abbas (a.s)", link: "/ghazi-abbas", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif" }
];

export const honorsDataFa = [
  { title: "خادم امام رضا (ع)", link: "/imam-reza", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" },
  { title: "خادم غازی عباس (ع)", link: "/ghazi-abbas", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif" }
];

// 🔴 3. نور القرآن پراجیکٹ ڈیٹا
export const projectSectionData = {
  id: 'visual-quran-main-2026',
  title: 'نور القرآن پراجیکٹ: دنیا کا پہلا ویژول قرآن',
  image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png',
  badge: "WORLD'S FIRST VISUAL QURAN",
  descUrdu: 'یہ حاجی شبیر احمد شگری کا ایک جدید اور منفرد منصوبہ ہے۔ اس پروجیکٹ کا بنیادی مقصد جدید ٹیکنالوجی اور مصنوعی ذہانت (AI) کے ذریعے قرآن مجید کے ترجمے اور مفاہیم کو بصری اور فلمی انداز میں پیش کرنا ہے۔ ویژول قرآن: تلاوت کے ساتھ اردو ترجمہ اور متعلقہ مناظر، تاکہ نوجوان نسل اسے آسانی سے سمجھ سکے۔',
  videoUrl: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_qfyz0i.mp4',
  audioUrl: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_wdodfp.mp4',
  bookletUrl: '/library#Quran' // 👈 ڈائریکٹ PDF کی بجائے، سیدھا لائبریری کا لنک لگا دیا
};

// 🔴 4. 45 سالہ خدمات (journeyData)
export const journeyData = [
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

export const journeyDataEn = [
  { title: 'Diplomatic Services', link: '/diplomatic-services', icon: <FaHandshake size={24} />, desc: 'In-depth analysis of international diplomatic and constructive engagements.' },
  { title: 'Cultural Diplomacy', link: '/cultural', icon: <FaLandmark size={24} />, desc: 'Promoting Pak-Iran bilateral relations through cultural exchange.' },
  { title: 'Global Unity', link: '/unity', icon: <FaUsers size={24} />, desc: 'Persistent efforts towards fostering brotherhood and harmony among the Ummah.' },
  { title: 'Literary Works', link: '/library', icon: <FaBook size={24} />, desc: 'An extensive repository of scientific, literary, and spiritual publications.' },
  { title: 'Journalism', link: '/article', icon: <FaPenNib size={24} />, desc: 'Insightful editorial contributions spanning nearly five decades of journalism.' },
  { title: 'Media Broadcasting', link: '/channels', icon: <FaTv size={24} />, desc: 'Strategic religious and social outreach across international media networks.' },
  { title: 'Intellectual Dialogues', link: '/talkshows', icon: <FaMicrophone size={24} />, desc: 'Engaging interviews on critical national and global socio-political themes.' },
  { title: 'Distinguished Awards', link: '/awards', icon: <FaTrophy size={24} />, desc: 'A record of high-profile national and international honors and recognitions.' },
  { title: 'Visual Archive', link: '/gallery', icon: <FaImages size={24} />, desc: 'A curated visual journey through historical moments and key personalities.' },
  { title: 'Social Philanthropy', link: '/services', icon: <FaHandHoldingHeart size={24} />, desc: 'Dedicated community service and welfare initiatives for the public good.' }
];

export const journeyDataFa = [
  { title: 'خدمات دیپلماتیک', link: '/diplomatic-services', icon: <FaHandshake size={24} />, desc: 'جزئیات نقش‌های دیپلماتیک و سازنده در سطح بین‌المللی.' },
  { title: 'دیپلماسی فرهنگی', link: '/cultural', icon: <FaLandmark size={24} />, desc: 'ترویج روابط فرهنگی و هماهنگی بین پاکستان و ایران.' },
  { title: 'وحدت امت', link: '/unity', icon: <FaUsers size={24} />, desc: 'تلاش‌های خستگی‌ناپذیر برای اتحاد و برادری میان مسلمانان.' },
  { title: 'تالیفات و کتاب‌ها', link: '/library', icon: <FaBook size={24} />, desc: 'مجموعه‌ای از کتاب‌های ارزشمند در موضوعات علمی، ادبی و معنوی.' },
  { title: 'روزنامه‌نگاری و مقالات', link: '/article', icon: <FaPenNib size={24} />, desc: 'خدمات روزنامه‌نگاری و مقالات فکری با سابقه نیم قرن.' },
  { title: 'شبکه‌های تلویزیونی', link: '/channels', icon: <FaTv size={24} />, desc: 'خدمات دینی و اجتماعی در شبکه‌های مختلف تلویزیونی بین‌المللی.' },
  { title: 'میزگردها', link: '/talkshows', icon: <FaMicrophone size={24} />, desc: 'مصاحبه‌های تامل‌برانگیز در مورد موضوعات مهم ملی و بین‌المللی.' },
  { title: 'افتخارات و جوایز', link: '/awards', icon: <FaTrophy size={24} />, desc: 'جوایز معتبر ملی و بین‌المللی دریافت شده.' },
  { title: 'گالری تصاویر', link: '/gallery', icon: <FaImages size={24} />, desc: 'تصاویر برگزیده از لحظات ماندگار، شخصیت‌ها و مراسم‌های مهم.' },
  { title: 'خدمات اجتماعی', link: '/services', icon: <FaHandHoldingHeart size={24} />, desc: 'خدمات اجتماعی، رفاهی و دیگر خدمات مهم ملی و مذهبی.' }
];

// 🔴 5. کتب کا مکمل ڈیٹا (Books Slider) - 100% Correct Links
export const booksData = [
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png", title: "سیرتِ فاطمہ زہراؑ: بوئے بہشت", author: "حاجی شبیر احمد شگری", year: "2018", link: "/library#book-booy" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1774382784/8d099c6f-ccec-48a3-b5cd-a24b312b44f0.png", title: "انیس النفوس-حرم امام رضا ؑکے بارے میں", author: "حاجی شبیر احمد شگری", year: "2020", link: "/library#book-anees" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772651728/eb2e1ccd-e669-4453-8ca7-10f38cf13a50.png", title: "سفرنامہ ایران: دیارِ عشق کا سفر", author: "حاجی شبیر احمد شگری", year: "2012", link: "/library#book-safarnama" }, // 👈 درست ہو گیا
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png", title: "روح کی معراج-اصلاح نفس", author: "حاجی شبیر احمد شگری", year: "2012", link: "/library#book-rooh" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png", title: "سکون کی تلاش", author: "حاجی شبیر احمد شگری", year: "2015", link: "/library#book-sakoon" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png", title: "سیاحت ایران", author: "حاجی شبیر احمد شگری", year: "2016", link: "/library#book-sayahat-parts" }, // 👈 درست ہو گیا
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772111272/65878faa-2f99-4af6-8216-ad9009adc747.png", title: "خراسان رضوی", author: "حاجی شبیر احمد شگری", year: "2019", link: "/library#book-khorasan" }, // 👈 درست ہو گیا
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772597583/e1511aec-3b7d-44d3-9bd1-4cdfbeecb9c3.png", title: "رہبر کے فتوے", author: "حاجی شبیر احمد شگری", year: "2019", link: "/library#book-fatwa" }, // 👈 درست ہو گیا
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png", title: "کنجی بہشت۔مجموعہ وضائف", author: "حاجی شبیر احمد شگری", year: "2019", link: "/library#book-dua" }, // 👈 درست ہو گیا
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1773673146/0125d4e5-ab4f-43f0-961b-b05c3cd8b420.png", title: "مجلہ شاخ نبات", author: "حاجی شبیر احمد شگری", year: "2019", link: "/library#shakh-e-nabaat" }, // 👈 درست ہو گیا
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png", title: "مجلہ فرھنگستان", author: "حاجی شبیر احمد شگری", year: "2017", link: "/library#book-farhang" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772598044/95eeeeb5-067e-4fcb-b4c6-ed952d52af89.png", title: "مجلہ انقلاب", author: "حاجی شبیر احمد شگری", year: "2017", link: "/library#book-inqilab" }, // 👈 درست ہو گیا
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png", title: "نورالقرآن", author: "حاجی شبیر احمد شگری", year: "2021", link: "/library#Quran" } // 👈 درست ہو گیا
];

/** عناوین کتاب — انگریزی (ترتیب booksData کے مطابق) */
export const booksTitlesEn = [
  "Sirat Fatima Zahra (s.a): Boi-e-Bahisht",
  "Anis al-Nufus — The Holy Shrine of Imam Reza (a.s.)",
  "Iran Travelogue: Journey of Love",
  "Ascension of the Soul — Self-Reformation",
  "In Search of Peace",
  "Iran Travelogue",
  "Razavi Khorasan",
  "Decrees of the Supreme Leader",
  "Key to Paradise — Prayers & Supplications",
  "Magazine: Shakh-e-Nabat",
  "Magazine: Farhangistan",
  "Magazine: Inqilab",
  "Noor-ul-Quran",
];

/** عناوین کتاب — فارسی */
export const booksTitlesFa = [
  "سیرت حضرت فاطمه زهرا(س): بوی بهشت",
  "انیس النفوس — حرم امام رضا(ع)",
  "سفرنامه ایران: سفر دیار عشق",
  "معراج روح — اصلاح نفس",
  "جستجوی آرامش",
  "سیاحت ایران",
  "خراسان رضوی",
  "فتاوای رهبری",
  "کلید بهشت — مجموعه وضایف",
  "مجله شاخ نبات",
  "مجله فرهنگستان",
  "مجله انقلاب",
  "نورالقرآن",
];

// 🔴 6. نامور شخصیات کا مکمل ڈیٹا
export const legendsData = [
  {
    name: "شیخ علی نوری نجفی",
    role: "بین الحرمین کربلا، عراق",
    img: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_10/v1776840008/Iftitah--NoorulQuran-Karbala_tpwvtf.jpg",
    video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776840008/Iftitah--NoorulQuran-Karbala_tpwvtf.mp4",
    quote: ""
  },
  {
    name: "مولانا عبدالخالق جعفری",
    role: "خطیب و خادم حرم مطهر امام رضا علیہ السلام",
    img: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_5/v1776841560/Ag_jaffari_t487zc.jpg",
    video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841560/Ag_jaffari_t487zc.mp4",
    quote: ""
  },
  {
    name: "نجف علی سعادتی",
    role: "قاری و خادم زائرین امام علی ابن موسیٰ الرضا علیہ السلام",
    img: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_8/v1776841527/Najaf_Ali_Saadati_dsemnc.jpg",
    video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841527/Najaf_Ali_Saadati_dsemnc.mp4",
    quote: ""
  },
  {
    name: "مولانا محمد حسین اکبر",
    role: "سربراہ ادارہ منھاج الحسین ،لاہور",
    img: "https://res.cloudinary.com/drlg0dr9y/video/upload/c_fill,g_auto,h_360,w_640,so_15/v1776841457/Molana-Akbar-about-Shigri_hwg7jg.jpg",
    video: "https://res.cloudinary.com/drlg0dr9y/video/upload/v1776841457/Molana-Akbar-about-Shigri_hwg7jg.mp4",
    quote: ""
  },
  {
    name: "جعفر روہناس",
    role: "DG خانہ فرہنگ ایران، لاہور",
    img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771770325/IMG20230623164017_Copy_ddz2fd.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1774379811/jafar-rohnas_pkmmdc.mp4", // 👈 حاجی صاحب، یہاں بس جعفر روہناس صاحب کی کلاؤڈ ویڈیو کا لنک دوبارہ ڈال دیں جو آپ نے ابھی اپلوڈ کیا تھا۔
    quote: "شبیر احمد شگری کلچرل ایکسپرٹ ہیں، انہوں نے تاریخ میں پہلی مرتبہ پاکستان اور ایران کے درمیان زیارتی و سیاحتی ٹور شروع کیا ہے۔"
  },
  {
    name: "منظور احمد وٹو",
    role: "سابق وزیراعلیٰ پنجاب",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4",
    quote: "شبیر احمد شگری کی بہت سی تحریریں ہیں، ان کو پڑھنا چاہئے، انہوں نے کلچر اور تحریروں کی وجہ سے گولڈ میڈل حاصل کیا ہے۔"
  },
  {
    name: "پیر عثمان نوری",
    role: "Peace Committee",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.mp4",
    quote: "شگری جیسے ایک دو بندے اور ہوجائیں تو شاید ایران کے ساتھ ہمارے معاملات اس طرح نہ ہوتے بلکہ وہ کہیں اور پہنچے ہوتے۔"
  },
  {
    name: "پیر غلام رسول اویسی",
    role: "مذہبی پیشوا",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.mp4",
    quote: "ماشاءاللہ! پاکستان کے تمام سیاسی، سماجی اور مذہبی حلقوں میں شبیر احمد شگری کو یکساں قدر کی نگاہ سے دیکھا جاتا ہے۔"
  },
  {
    name: "پیر عثمان الدین برہانی",
    role: "Usmani Foundation",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525530/5.Pir_Burhan_ud_Deen_Usmani_bxhkzp.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525530/5.Pir_Burhan_ud_Deen_Usmani_bxhkzp.mp4",
    quote: "شبیر شگری ہر دو کیفیتوں امت کی وحدت کی کاوش اور پاکستان اور ایران کے لوگوں کے دلوں کو آپس میں جوڑتے ہیں۔"
  },
  {
    name: "حافظ عبدالغفار روپڑی",
    role: "امیر جماعت اہلحدیث",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4",
    quote: "شبیر احمد شگری جو اس کوشش میں ہیں کہ امت کو وحدت کی لڑی میں پرو دیا جائے، ان کی یہ کاوش اور محنت بہت ہی عمدہ ہے۔"
  },
  {
    name: "سردار محمد خان لغاری",
    role: "سیاسی رہنما",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.mp4",
    quote: "حکومت پاکستان کو چاہئے کہ ان کو خصوصی میڈل دے تاکہ پاک ایران تعلقات کی خدمات پر حوصلہ افزائی ہو۔"
  },
  {
    name: "پیر معصوم نقوی",
    role: "مرکزی صدر جمیعت علمائے پاکستان",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.mp4",
    quote: "شبیر شگری نے تمام مسالک کو اکٹھا کرنے، ان کو جوڑنے اور حضور پاکؐ کی امت کو متحد رکھنے میں بڑا کردار ادا کیا ہے۔"
  },
  {
    name: "سردار سکندر سنگھ",
    role: "سکھ رہنما",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525528/8.Sardar_Sikandar_Singh_yg3tn9.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525528/8.Sardar_Sikandar_Singh_yg3tn9.mp4",
    quote: "شبیر احمد شگری کی بین المذاہب ہم آہنگی اور ایران کے کلچر کے حوالے سے بہت خدمات ہیں۔"
  },
  {
    name: "ڈاکٹر محمد صداقت علی فریدی",
    role: "مذہبی اسکالر",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.mp4",
    quote: "شبیر احمد شگری کی سرگرمیاں وحدت امت کے لیے روز افزوں ہیں اور ان کی کاوشیں قابل تحسین ہیں۔"
  }
];

const legendRolesEn = [
  "Bayn al-Haramayn, Karbala, Iraq",
  "Speaker & Servant of Imam Reza (A.S) Shrine",
  "Reciter & Servant of Pilgrims at Imam Reza (A.S) Shrine",
  "Head of Minhaj-ul-Hussain Institution, Lahore",
  "Director, Iran Culture House, Lahore",
  "Former Chief Minister of Punjab",
  "Peace Committee",
  "Religious leader",
  "Usmani Foundation",
  "Ameer, Jamaat Ahl-e-Hadith",
  "Political leader",
  "Central President, Jamiat Ulema-e-Pakistan",
  "Sikh community leader",
  "Religious scholar",
];

const legendNamesEn = [
  "Sheikh Ali Noori Najafi",
  "Maulana Abdul Khaliq Jafari",
  "Najaf Ali Saadati",
  "Maulana Muhammad Hussain Akbar",
  "Jafar Rohanas",
  "Manzoor Ahmed Watto",
  "Pir Usman Noori",
  "Pir Ghulam Rasool Owaisi",
  "Pir Burhan ud Din Usmani",
  "Hafiz Abdul Ghaffar Ropari",
  "Sardar Muhammad Khan Laghari",
  "Pir Masoom Naqvi",
  "Sardar Sikandar Singh",
  "Dr. Muhammad Sadaqat Ali Afridi",
];

const legendRolesFa = [
  "بین‌الحرمین کربلا، عراق",
  "خطیب و خادم حرم مطهر امام رضا (ع)",
  "قاری و خادم زائرین امام علی بن موسی الرضا (ع)",
  "رئیس موسسه منهاج الحسین، لاهور",
  "رایزن فرهنگی ایران، لاهور",
  "استاندار سابق پنجاب",
  "کمیته صلح",
  "رهبر مذهبی",
  "بنیاد عثمانی",
  "امیر جماعت اهل حدیث",
  "رهبر سیاسی",
  "رئیس مرکزی جمیعت علمای پاکستان",
  "رهبر جامعه سیک‌ها",
  "عالم دینی",
];

const legendNamesFa = [
  "شیخ علی نوری نجفی",
  "مولانا عبدالخالق جعفری",
  "نجف علی سعادتی",
  "مولانا محمد حسین اکبر",
  "جعفر روهناس",
  "منظور احمد وٹو",
  "پیر عثمان نوری",
  "پیر غلام رسول اویسی",
  "پیر عثمان الدین برهانی",
  "حافظ عبدالغفار روپڑی",
  "سردار محمد خان لغاری",
  "پیر معصوم نقوی",
  "سردار سکندر سنگھ",
  "دکتر محمد صداقت علی فریدی",
];

export const legendsDataEn = legendsData.map((l, i) => ({
  ...l,
  name: legendNamesEn[i] ?? l.name,
  role: legendRolesEn[i] ?? l.role,
}));

export const legendsDataFa = legendsData.map((l, i) => ({
  ...l,
  name: legendNamesFa[i] ?? l.name,
  role: legendRolesFa[i] ?? l.role,
}));

// 🔴 7. چار اہم پروجیکٹس (Nav Cards)
export const navCardsData = [
  { title: "نور القرآن پراجیکٹ", icon: <FaQuran />, link: "/noor-ul-quran" },
  { title: "نور پروڈکشنز", icon: <FaTv />, link: "https://www.youtube.com/@noorproduction" },
  { title: "انجمن دوستی پاک ایران", icon: <FaHandshake />, link: "https://pakiiranassociation.wixsite.com/pira" },
  { title: "دیگر خدمات", icon: <FaHandHoldingHeart />, link: "/services" }
];

export const navCardsDataEn = [
  { title: "Noor-ul-Quran Project", icon: <FaQuran />, link: "/noor-ul-quran" },
  { title: "Noor Productions", icon: <FaTv />, link: "https://www.youtube.com/@noorproduction" },
  { title: "Pak–Iran Friendship Association", icon: <FaHandshake />, link: "https://pakiiranassociation.wixsite.com/pira" },
  { title: "Other Services", icon: <FaHandHoldingHeart />, link: "/services" }
];

export const navCardsDataFa = [
  { title: "پروژه نورالقرآن", icon: <FaQuran />, link: "/noor-ul-quran" },
  { title: "نور پروداکشنز", icon: <FaTv />, link: "https://www.youtube.com/@noorproduction" },
  { title: "انجمن دوستی پاک و ایران", icon: <FaHandshake />, link: "https://pakiiranassociation.wixsite.com/pira" },
  { title: "سایر خدمات", icon: <FaHandHoldingHeart />, link: "/services" }
];