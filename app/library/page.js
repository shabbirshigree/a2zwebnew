'use client';
import { useState, useEffect } from 'react';
import { FaShareAlt, FaBook, FaPlayCircle, FaHeadphones, FaFilm, FaMicrophone, FaSearch, FaGlobe } from 'react-icons/fa';
import { FaTiktok, FaTwitter, FaInstagram, FaTelegram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

const BOOKS_DATA = [
  {
    id: 'book-booy',
    title: 'سیرتِ فاطمہ زہراؑ: بوئے بہشت',
    titleEn: 'The Celestial Light of Fatima (S.A)',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png',
    badge: 'SEERAT-E-FATIMA (S.A)',
    descUrdu: 'یہ کتاب خاتونِ جنت حضرت فاطمہ زہراؑ کی حیاتِ طیبہ کا وہ رخ پیش کرتی ہے جو مومنین کے لیے مشعل راہ ہے۔ کتاب کا نام ہی اس کی خوشبو کی گواہی دیتا ہے۔\n\nنورانی خلقت و مقام: آپؑ کا وہ مقام جس کے بارے میں رسول خدا ﷺ نے فرمایا کہ "فاطمہ میرا ٹکڑا ہے"۔ کتاب میں آپ کی شفاعت اور قیامت کے دن آپ کے مقام کا خاص ذکر ہے۔\nایثار کی مثال: حسنینؑ کی بیماری، تین دن کے روزے، اور افطار کے وقت مسکین و یتیم کو کھانا دے دینا۔ یہ کتاب ان واقعات کے ذریعے درس دیتی ہے کہ حقیقی سخاوت کیا ہے۔',
    descEn: 'The document titled "Booye Bahisht" (Fragrance of Heaven) is a devotional work dedicated to the life, virtues, and spiritual status of Hazrat Fatima Zahra (S.A).',
    actions: [
      { type: 'read', label: 'کتاب پڑھیں', icon: 'book', url: 'https://heyzine.com/flip-book/23d29ba2da.html', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ - اردو', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1768932679/%D8%A8%D9%88%DB%92%D8%A6_%D8%A8%DB%81%D8%B4%D8%AA__%D8%AC%D9%86%D8%AA_%DA%A9%DB%8C_%D8%AE%D9%88%D8%B4%D8%A8%D9%88_u90cly.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ - اردو', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1768935183/%D8%AD%D8%B6%D8%B1%D8%AA_%D9%81%D8%A7%D8%B7%D9%85%DB%81_%DA%A9%DB%8C_%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%86%DB%8C_%D8%AD%D9%82%DB%8C%D9%82%D8%AA_%D8%A7%D9%88%D8%B1_%D8%B4%D9%81%D8%A7%D8%B9%D8%AA_codomt.mp4', color: 'theme-urdu-aud' },
      { type: 'video-en', label: 'Video Review - English', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1768923907/Explainer_Booy-e-Behisht_edited_g2j5ju.mp4', color: 'theme-eng-vid' },
      { type: 'audio-en', label: 'Podcast - English', icon: 'microphone', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1768922962/Discution_Fatimah_Zahra_The_Scent_of_Paradise_hrtijp.mp4', color: 'theme-eng-aud' },
    ]
  },
  {
    id: 'book-noor',
    title: 'نور القرآن پروجیکٹ: تعارف اور مقاصد',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png',
    badge: "WORLD'S FIRST VISUAL QURAN",
    descUrdu: 'یہ حاجی شبیر احمد شگری کا ایک جدید اور منفرد منصوبہ ہے۔ اس پروجیکٹ کا بنیادی مقصد جدید ٹیکنالوجی اور مصنوعی ذہانت (AI) کے ذریعے قرآن مجید کے ترجمے اور مفاہیم کو بصری اور فلمی انداز میں پیش کرنا ہے۔\n\nویژول قرآن: تلاوت کے ساتھ اردو ترجمہ اور متعلقہ مناظر، تاکہ نوجوان نسل اسے آسانی سے سمجھ سکے۔',
    actions: [
      { type: 'project', label: 'پروجیکٹ دیکھیں', icon: 'globe', link: '/project', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1_%D8%A7%D8%AC%DB%8A%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8A%DA%88%DB%8A%D9%88_%D8%AA%D8%AC%D8%B2%DB%8A%DB%81_qfyz0i.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_wdodfp.mp4', color: 'theme-urdu-aud' },
    ]
  },
  {
    id: 'book-anees',
    title: 'انیس النفوس: دیارِ عشق کا سفر',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Anees-an-nafoos_vb0ljq.png',
    badge: 'HISTORY & SPIRITUALITY',
    descUrdu: 'حاجی شبیر احمد شگری کی یہ زیرِ نظر کتاب "انیس النفوس" آستان قدس رضوی اور حرمِ امام رضا علیہ السلام کے روحانی، تاریخی اور انتظامی پہلوؤں کا ایک جامع احاطہ کرتی ہے۔\n\nتاریخ اور تعمیر: مشہد مقدس میں واقع اس عظیم الشان مزار کی تعمیراتی ترقی، مختلف صحنوں اور رواقوں کی تفصیلات۔',
    actions: [
      { type: 'read', label: 'کتاب پڑھیں', icon: 'book', url: '', color: 'theme-read', disabled: true },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769034308/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%A7%D9%86%DB%8A%D8%B3_%D8%A7%D9%84%D9%86%D9%81%D9%88%D8%B3_%DA%A9%D8%A7_%D9%88%DB%8A%DA%88%DB%8A%D9%88_%D8%AA%D8%AC%D8%B2%DB%8A%DB%81_hlzsne.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027471/%D8%A7%D9%86%DB%8A%D8%B3_%D8%A7%D9%84%D9%86%D9%81%D9%88%D8%B3_%D9%BE%D9%88%DA%88%DA%A9%D8%A7%D8%B3%D9%B9_later_y4pzhy.mp3', color: 'theme-urdu-aud' },
    ]
  },
  {
    id: 'book-rooh',
    title: 'روح کی معراج: خود شناسی سے خدا تک',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png',
    badge: 'SELF PURIFICATION',
    descUrdu: 'یہ کتاب احمد نراقی کی لازوال تصنیف "معراج السعادۃ" کا نچوڑ ہے، جسے حاجی شبیر احمد شگری نے آسان اور عام فہم انداز میں پیش کیا ہے۔ یہ کتاب انسان کو اس کے اندر کی دنیا سے روشناس کراتی ہے۔',
    actions: [
      { type: 'read', label: 'کتاب پڑھیں', icon: 'book', url: 'https://heyzine.com/flip-book/efa19771fc.html', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027667/%D8%B1%D9%88%D8%AD_%DA%A9%DB%8C_%D9%85%D8%B9%D8%B1%D8%A7%D8%AC_%D9%88%DA%88%DB%8A%D9%88_%D8%AA%D8%AC%D8%B2%DB%8A%DB%81_fhkir8.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027651/%D8%B1%D9%88%D8%AD_%DA%A9%DB%8C_%D9%85%D8%B9%D8%B1%D8%A7%D8%AC_later_e01erq.mp3', color: 'theme-urdu-aud' },
    ]
  },
  {
    id: 'book-sakoon',
    title: 'سکون کی تلاش: نفسیاتی الجھنوں کا حل',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png',
    badge: 'MENTAL PEACE & ISLAM',
    descUrdu: 'آج کے دور میں ہر انسان پریشان ہے، دولت ہے مگر سکون نہیں۔ حاجی شبیر احمد شگری کی یہ تصنیف اس بھاگتی ہوئی دنیا میں "ٹھہراؤ" کا نام ہے۔\n\nخوشی کا راز: مصنف ثابت کرتے ہیں کہ حقیقی خوشی بینک بیلنس میں نہیں بلکہ تعلیماتِ آئمہ اطہارؑ میں پوشیدہ ہے۔',
    actions: [
      { type: 'read', label: 'کتاب پڑھیں', icon: 'book', url: 'https://heyzine.com/flip-book/f420e3a86f.html', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027819/%D8%B3%DA%A9%D9%88%D9%86_%DA%A9%DB%8C_%D8%AA%D9%84%D8%A7%D8%B4_tgzvni.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027789/%D8%B3%DA%A9%D9%88%D9%86_%DA%A9%DB%8C_%D8%AA%D9%84%D8%A7%D8%B4__later_yolrcy.mp3', color: 'theme-urdu-aud' },
    ]
  },
  {
    id: 'book-iran',
    title: 'سیاحتِ ایران: ایک ثقافتی سفرنامہ',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png',
    badge: 'TRAVEL & CULTURE',
    descUrdu: 'حاجی شبیر احمد شگری کی یہ کتاب "سیاحتِ ایران" محض ایک سفرنامہ نہیں، بلکہ ایران کے تاریخی، مذہبی اور ثقافتی مقامات کا ایک جامع جائزہ ہے۔ مصنف نے اس کتاب کو آٹھ مختلف موضوعات میں تقسیم کیا ہے۔',
    actions: [
      { type: 'read', label: 'کتاب پڑھیں (حصہ اول)', icon: 'book', url: 'https://heyzine.com/flip-book/ff7ba63297.html', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769034696/%D8%B3%DB%8C%D8%A7%D8%AD%D8%AA%D9%90_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86_%D9%88%DA%88%DB%8A%D9%88_%D8%AA%D8%AC%D8%B2%DB%8A%DB%81_tctlnm.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769065454/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86_%DA%A9%DB%8C_%D9%85%D8%B2%D8%A7%D8%AD%D9%85%D8%AA_%D8%A7%D9%88%D8%B1_%D9%85%D8%B4%DB%81%D8%AF_%DA%A9%D8%A7_%D8%B3%D9%81%D8%B1_giowyp.mp4', color: 'theme-urdu-aud' },
    ]
  },
  {
    id: 'book-kunji',
    title: 'کنجی بہشت: دعاؤں کا مستند مجموعہ',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png',
    badge: 'PRAYERS & SPIRITUALITY',
    descUrdu: 'یہ کتاب "کنجی بہشت" روحانی ترقی اور مشکلات کے حل کے لیے انتہائی مجرب دعاؤں کا مجموعہ ہے۔ مصنف کے مطابق دعا عبادت کی روح اور خالق و مخلوق کے درمیان رابطے کا ایک طاقتور ذریعہ ہے۔',
    actions: [
      { type: 'read', label: 'کتاب پڑھیں', icon: 'book', url: 'https://heyzine.com/flip-book/ec56c87d53.html', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769071400/%DA%AF%D9%86%D8%AC%D9%90_%D8%A8%DB%81%D8%B4%D8%AA__%D8%A7%DB%8A%DA%A9_%D9%88%D8%B6%D8%A7%D8%AD%D8%AA_p2by8k.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769071406/%DA%AF%D9%86%D8%AC%D9%90_%D8%A8%DB%81%D8%B4%D8%AA_%D8%A7%D9%88%D8%B1_%D8%AF%D8%B9%D8%A7_%DA%A9%DB%8C_%D8%AD%DB%8C%D8%B1%D8%A7%D9%86_%DA%A9%D9%86_%D8%B7%D8%A7%D9%82%D8%AA_rrgyiz.mp4', color: 'theme-urdu-aud' },
    ]
  },
  {
    id: 'book-farhang',
    title: 'مجلہ فرھنگستان: پاک ایران ثقافت کا امین',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png',
    badge: 'CULTURE & HISTORY',
    descUrdu: 'یہ دستاویز لاہور سے شائع ہونے والے ماہنامہ "فرهنگستان" کے محرم 2022 کے ایک خصوصی شمارے پر مبنی ہے، جس کا مرکزی مقصد پاکستانی اور ایرانی ثقافت کے درمیان علمی و سماجی روابط کو مستحکم کرنا ہے۔',
    actions: [
      { type: 'read', label: 'کتاب پڑھیں', icon: 'book', url: 'https://heyzine.com/flip-book/4e36b4c301.html', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769068850/%D9%81%D8%B1%DB%81%D9%86%DA%AF%D8%B3%D8%AA%D8%A7%D9%86__%D9%85%D8%AD%D8%B1%D9%85_%D8%B4%D9%85%D8%A7%D8%B1%DB%81_dnv6u9.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769068853/%D9%81%D8%B1%DA%BE%D9%86%DA%AF%D8%B3%D8%AA%D8%A7%D9%86_%D9%BE%D9%88%DA%88%DA%A9%D8%A7%D8%B3%D9%B9_px9gbk.mp4', color: 'theme-urdu-aud' },
    ]
  },
  {
    id: 'book-khorasan',
    title: 'خراسان رضوی: تاریخ و تمدن کا گہوارہ',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Book_Khorasan-e-Razavi_b9nqdb.bmp',
    badge: 'HISTORY & ARCHITECTURE',
    descUrdu: 'یہ کتاب ایران کی اسلامی تاریخ، مذہبی مقامات اور فنِ تعمیر کا ایک جامع احاطہ کرتی ہے۔ متن میں مشہد، قم اور نیشاپور جیسے تاریخی شہروں کی اہمیت کو اجاگر کیا گیا ہے۔',
    actions: [
      { type: 'read', label: 'کتاب پڑھیں (حصہ اول)', icon: 'book', url: 'https://heyzine.com/flip-book/13dc8af2e5.html', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076063/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_unp6gj.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076045/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_ctn2j6.mp4', color: 'theme-urdu-aud' },
    ]
  },
];

const SLIDER_BOOKS = [
  { name: 'بوئے بہشت', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png', id: 'book-booy' },
  { name: 'نور القرآن', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png', id: 'book-noor' },
  { name: 'انیس النفوس', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Anees-an-nafoos_vb0ljq.png', id: 'book-anees' },
  { name: 'روح کی معراج', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png', id: 'book-rooh' },
  { name: 'سکون کی تلاش', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png', id: 'book-sakoon' },
  { name: 'سیاحت ایران', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png', id: 'book-iran' },
  { name: 'کنجی بہشت', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png', id: 'book-kunji' },
  { name: 'مجلہ فرھنگستان', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png', id: 'book-farhang' },
];

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [bookUrl, setBookUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [langTab, setLangTab] = useState('ur');
  const [headerImage, setHeaderImage] = useState(0);

  const filteredBooks = BOOKS_DATA.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.descUrdu.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderImage(prev => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayVideo = (url) => {
    setVideoUrl(url);
    setVideoModalOpen(true);
  };

  const handleOpenBook = (url) => {
    if (url) {
      setBookUrl(url);
      setBookModalOpen(true);
    }
  };

  const handleShare = (title, bookId) => {
    const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/library#${bookId}`;
    if (navigator.share) {
      navigator.share({
        title: title,
        text: 'Check this out from Haji Shabbir Shigri\'s Library:',
        url: url,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard');
    }
  };

  const getIconComponent = (iconName) => {
    const iconMap = {
      book: <FaBook className="mr-2" />,
      play: <FaPlayCircle className="mr-2" />,
      headphones: <FaHeadphones className="mr-2" />,
      film: <FaFilm className="mr-2" />,
      microphone: <FaMicrophone className="mr-2" />,
      globe: <FaGlobe className="mr-2" />,
    };
    return iconMap[iconName];
  };

  const getColorClasses = (colorTheme) => {
    const themes = {
      'theme-read': { btn: 'bg-[#0f4c75] text-white hover:bg-[#0a2e47]', share: 'bg-[#0f4c75] text-white' },
      'theme-urdu-vid': { btn: 'bg-gradient-to-r from-[#b8860b] to-[#ffd700] text-black hover:shadow-lg', share: 'bg-gradient-to-r from-[#b8860b] to-[#ffd700] text-black' },
      'theme-urdu-aud': { btn: 'bg-[#f0f0f0] text-gray-800 border border-[#ccc] hover:bg-gray-100', share: 'bg-[#f0f0f0] text-gray-800 border border-[#ccc]' },
      'theme-eng-vid': { btn: 'bg-gray-800 text-white hover:bg-black', share: 'bg-gray-800 text-white' },
      'theme-eng-aud': { btn: 'bg-gray-600 text-white hover:bg-gray-700', share: 'bg-gray-600 text-white' },
    };
    return themes[colorTheme];
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      
      {/* Header Images */}
      <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-yellow-100 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 bg-gradient-to-bottom from-black/70 to-transparent">
          <p className="text-[#ffd700] text-xl md:text-2xl font-serif tracking-wider">ما شاء اللہ - لا قوة الا بالله</p>
        </div>
        <img
          src={headerImage === 0 ? 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png' : 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png'}
          alt="Header"
          className="w-full h-full object-cover transition-opacity duration-1500"
        />
      </div>

      {/* Title Section */}
      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-8 text-center border-b-4 border-[#D4AF37]">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37] font-serif mb-2">خزانہِ علم و دانش</h1>
        <p className="text-white text-lg md:text-xl">تصنیفات و تالیفات: حاجی شبیر احمد شگری</p>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto relative">
          <div className="flex items-center bg-white border-2 border-[#D4AF37] rounded-full px-6 py-3 shadow-lg">
            <FaSearch className="text-[#0f4c75] mr-4 text-xl" />
            <input
              type="text"
              placeholder="کتاب کا نام تلاش کریں..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-800 placeholder-gray-500 bg-transparent text-right"
            />
          </div>
        </div>
      </section>

      {/* Book Slider */}
      <section className="bg-yellow-50 border-b-4 border-[#0f4c75] py-8 overflow-x-auto">
        <div className="flex gap-6 px-4 animate-scroll">
          {SLIDER_BOOKS.map((book, idx) => (
            <a key={idx} href={`#${book.id}`} className="flex-shrink-0 w-40 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition group border border-gray-200">
              <img src={book.image} alt={book.name} className="w-full h-56 object-contain p-3" />
              <p className="text-center px-3 pb-3 text-[#0f4c75] font-bold text-sm line-clamp-2 group-hover:text-[#D4AF37]">{book.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Intro Banner */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-[#0f4c75] to-[#0a2e47] border-4 border-[#D4AF37] rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4">حاجی شبیر احمد شگری کی تصانیف پر ویڈیو تجذیے اور آڈیو پوڈ کاسٹس</h2>
          <p className="text-lg text-gray-100">بے لاگ تبصرے اور بولتی کتابیں</p>
        </div>
      </section>

      {/* Books Container */}
      <section className="container mx-auto px-4 py-12">
        {filteredBooks.map((book) => (
          <div key={book.id} id={book.id} className="mb-16 flex flex-col lg:flex-row gap-8 bg-gradient-to-br from-white to-yellow-50 border border-[#D4AF37]/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
            {/* Left: Image & Actions */}
            <div className="lg:w-80 flex-shrink-0">
              <img src={book.image} alt={book.title} className="w-full rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30 mb-6 hover:border-[#D4AF37] transition" />
              
              {/* Action Buttons */}
              <div className="space-y-3">
                {book.actions.map((action, idx) => {
                  const colors = getColorClasses(action.color);
                  return (
                    <div key={idx} className="flex gap-1 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                      <button
                        onClick={() => {
                          if (action.type === 'read') handleOpenBook(action.url);
                          else if (action.type === 'project') window.location.href = action.link;
                          else handlePlayVideo(action.url);
                        }}
                        disabled={action.disabled}
                        className={`flex-1 py-3 px-4 font-bold flex items-center justify-center gap-2 transition text-sm md:text-base ${colors.btn} ${action.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {getIconComponent(action.icon)}
                        {action.label}
                      </button>
                      <button
                        onClick={() => handleShare(book.title, book.id)}
                        className={`py-3 px-4 flex items-center justify-center ${colors.share} border-l border-white/30 hover:bg-opacity-80 transition`}
                      >
                        <FaShareAlt size={18} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setLangTab('ur')}
                    className={`px-4 py-2 rounded-full font-bold transition ${langTab === 'ur' ? 'bg-[#0f4c75] text-white shadow-lg' : 'border-2 border-[#0f4c75] text-[#0f4c75] hover:bg-[#0f4c75]/10'}`}
                  >
                    اردو
                  </button>
                  <button
                    onClick={() => setLangTab('en')}
                    className={`px-4 py-2 rounded-full font-bold transition ${langTab === 'en' ? 'bg-[#0f4c75] text-white shadow-lg' : 'border-2 border-[#0f4c75] text-[#0f4c75] hover:bg-[#0f4c75]/10'}`}
                  >
                    English
                  </button>
                </div>
                <span className="bg-[#0f4c75] text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold">{book.badge}</span>
              </div>

              {langTab === 'ur' ? (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4 pb-3 border-b-2 border-gray-200 text-right">{book.title}</h2>
                  <p className="text-gray-700 text-lg leading-loose text-justify whitespace-pre-line">{book.descUrdu}</p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4 pb-3 border-b-2 border-gray-200">{book.titleEn || book.title}</h2>
                  <p className="text-gray-700 text-lg leading-loose text-justify">{book.descEn || book.descUrdu}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600 font-serif">کوئی کتاب نہیں ملی</p>
          </div>
        )}
      </section>

      {/* Book Modal */}
      {bookModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={() => setBookModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-[#D4AF37] text-4xl z-60 transition"
          >
            ×
          </button>
          <iframe
            src={bookUrl}
            className="w-full max-w-5xl h-[90vh] rounded-lg border-4 border-[#D4AF37]"
            allowFullScreen
          />
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-[#D4AF37] text-4xl z-60 transition"
          >
            ×
          </button>
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full max-w-5xl max-h-[90vh] rounded-lg border-4 border-[#D4AF37]"
          />
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}
