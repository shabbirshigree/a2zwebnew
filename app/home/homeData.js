import {
  FaHandshake, FaLandmark, FaUsers, FaBook, FaPenNib,
  FaTv, FaMicrophone, FaTrophy, FaImages, FaHandHoldingHeart,
  FaYoutube, FaBookOpen, FaGlobe, FaNewspaper, FaPlane, FaUsers as FaUsersGroup
} from "react-icons/fa";

// 🔴 1. ویلکم سیکشن کا ڈیٹا
export const welcomeData = {
  bismillah: "بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ",
  greeting: "السلام علیکم!",
  description: "میں آپ کو اپنی آفیشل ویب سائٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے 'نور القرآن ویژول' جیسے عظیم پروجیکٹ کی تفصیلات کے ساتھ میرے کالمز، مضامین، سفرنامے، ڈاکومنٹریز، اور دیگر خدمات کا مجموعہ ملے گا۔ بالخصوص میری تحاریر پر گوگل کے خصوصی اور دلچسپ تجزیے آڈیو پوڈکاسٹ اور ویڈیو کی شکل میں سن اور دیکھ سکتے ہیں۔",
  name: "حاجی شبیر احمد شگری"
};

// 🔴 2. اہم اعزازات
export const honorsData = [
  { title: "خادمِ امام رضاؑ", link: "/imam-reza", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" },
  { title: "خادمِ غازی عباسؑ", link: "/ghazi-abbas", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif" }
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
  bookletUrl: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/noorulquran-proj-without.exp.pdf'
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

// 🔴 5. کتب کا ڈیٹا
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

// 🔴 6. نامور شخصیات کا مکمل ڈیٹا (بشمول جعفر روہناس اور ڈاکٹر صداقت علی فریدی)
export const legendsData = [
  {
    name: "جعفر روہناس",
    role: "DG خانہ فرہنگ ایران، لاہور",
    img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771770325/IMG20230623164017_Copy_ddz2fd.jpg",
    video: "https://www.youtube.com/watch?v=Xn5wUG0lPrE",
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
  },
];