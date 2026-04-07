// app/fa/talkshows/data-fa.js

import { FaYoutube, FaFacebook, FaGlobe } from 'react-icons/fa';

export const talkshowIntro = {
  title: "رسانه‌های الکترونیکی",
  subtitle: "افشای حقایق پنهان به دور از چشم (پیشنهاد نور پروداکشنز)",
  quote: `"پس از گذراندن دوره‌های طولانی‌ای موفق‌آمیز در حوزه خبرنگاری و روزنامه‌نگاری، به شدت احساس کردم که رسانه‌های الکترونیکی بر روی موضوعات مهم و حساسی ساکت بوده‌اند. برای رساندن این حقایق پنهان به مردم و بیدار کردن شعور عمومی، من را به میدان برنامه‌های تلویزیونی تک‌شو کشانید."`,

  noorProductionIntro: {
    title: "نور پروداکشنز: شروع دور‌اندیشانه و سفر ساخت‌تاریخ",
    text1: "درخشان‌ترین فصل تمام این سفر رسانه‌ای، 'نور پروداکشنز' است. دلیل نام‌گذاری این نهاد، آن آیه عظیم قرآن مجید است: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ' (خدا نور آسمان‌ها و زمین است). با بهره‌برداری از این نور مقدس، بنیان این موسسه گذارده شد. نور پروداکشنز رسماً در سال 2008 بنیان یافت، همانجا که یوتیوب خود در مراحل ابتدایی خود (2007) قرار داشت. تشخیص این قدرت رسانه‌ای نوظهور و نیاز زمان، تصمیمی بود که راه‌های آینده را مشخص کرد.",
    text2: "اگرچه فرهنگستان خانه جمهوری اسلامی ایران به علت مشغولیت‌های فراوان، نتوانست در ابتدا بر روی آن کار مستمری انجام دهد، اما بنیان آن بسیار محکم بود. اولین و تاریخی کار آن در سال‌های 2001-2002 با عنوان 'ضریح نور' ظاهر شد، که در آن منظره‌های روحانی تهیه ضریح مبارک امام رضا علیه‌السلام را محفوظ کرد.",
    text3: "توجه و تلاش مستمری طی سال‌های گذشته، این کانال را به درختی تناور تبدیل کرده است. امروزه الحمدلله حدود 45,000 مشترک دارد و بازدیدها در میلیون‌ها رقم خورده‌اند. زیباترین و روحانی‌ترین نمونه موفقیت آن، منقبتی است که به شأن حضرت سیده فاطمه زهرا سلام‌الله علیها به نام 'یا زهرا' ارائه شد، که توسط بیش از یک و نیم میلیون نفر دیده شده است. همچنین ویدیوهای فارسی نیز دارای میلیون‌ها بازدید هستند. امروزه این کانال به مرکز دیجیتالی بزرگی برای علوم تعلیمی، اسلامی، فرهنگی، گردشگری و قرآنی تبدیل شده است."
  },

  features: [
    {
      title: "مسئله فلسطین و صدای حق",
      desc: `اولین مورد از این موضوعات مهم، "مسئله فلسطین" بود. اگرچه این مسئله قدیمی جهان اسلام است، ما طی 25 سال گذشته به طور مستمر بر آن صدا بلند کرده‌ایم. وابستگی به فرهنگستان و پیگیری فرمان امام خمینی برای تبلیغ پیام "روز قدس"، را من با پر کردن خلای برنامه‌های تلویزیونی انجام دادم.`
    },
    {
      title: "مرحوم ظهیرالدین بابر و تلویزیون ستاره آسیا",
      desc: `نقش مالک تلویزیون 'ستاره آسیا' و دوست مهربان من، مرحوم ظهیرالدین بابر، در موفقیت این مأموریت فراموش‌ناپذیر است. با تشویق وی، ما برنامه‌های تک‌شو و اطلاعاتی منظمی را بر روی این موضوعات نو آغاز کردیم.`
    },
    {
      title: "آغاز گرایش جدید",
      desc: `این اقدام ما بنیاد تفکری نو در رسانه‌ها نهاد. امروزه الحمدلله، چه مسئله فلسطین و چه سایر موضوعات مهم اسلامی، در رسانه‌های ملی کشور بیش‌تر و بیش‌تر مورد بحث قرار می‌گیرند. این سلسله آگاهی و شعور است که ما آن را آغاز کردیم.`
    }
  ]
};

export const TALKSHOW_CHANNELS = [
  {
    title: 'نور القرآن',
    handle: '@noorullquraan',
    desc: 'اولین پروژه قرآن بصری دنیا. ترجمه بصری آیات و روش منحصر به فرد تعلیمات قرآنی.',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorullquraan',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705133/NoorulQuran_normal_jpeg_eq5n6u.jpg',
    color: 'from-emerald-500 to-green-600',
    type: 'youtube'
  },
  {
    title: 'نور پروداکشنز',
    handle: '@noorproduction',
    desc: 'مرکز فیلم‌های فرهنگی اسلامی، زیارت‌ها و ویدیوهای بر پایه مستند‌نویسی.',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-700 to-indigo-800',
    type: 'youtube'
  },
  {
    title: 'کودکان نور',
    handle: '@tiflan-e-noor',
    desc: 'کانالی منحصر به فرد برای کودکان با ویدیوهای اسلامی، اخلاقی، آموزشی و سرگرم‌کننده به زبان اردو.',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@TiflaneNoor',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/tiflan_jlzaog.jpg',
    color: 'from-blue-700 to-indigo-800',
    type: 'youtube'
  },
  {
    title: 'شبکه خبری بلتستان (BNN)',
    handle: '@Baltistan News Network',
    desc: 'خبر و اطلاعات از سراسر بلتستان.',
    button: 'Follow',
    href: 'https://www.youtube.com/@Bnnskardu',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1773921624/bnn_logo_globe_copy_xlcxoa.png',
    color: 'from-red-600 to-red-800',
    type: 'youtube'
  },
  {
    title: 'نور پروداکشنز (فیس‌بوک)',
    handle: '@noorproductionchannel',
    desc: 'صفحه رسمی نور پروداکشنز در فیس‌بوک. فیلم‌های فرهنگی و زیارت‌ها.',
    button: 'Follow',
    href: 'https://www.facebook.com/noorproductionchannel',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-600 to-blue-800',
    type: 'facebook'
  },
  {
    title: 'آپارات (نور پروداکشنز)',
    handle: 'aparat.com/noorproduction',
    desc: 'کانال فارسی نور پروداکشنز',
    button: 'Follow Channel',
    href: 'https://www.aparat.com/noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/aparat_gvp8hp.png',
    color: 'from-pink-500 to-rose-600',
    type: 'website'
  },
  {
    title: 'حاجی شبیر احمد شگری',
    handle: '@shabbirahmed1103',
    desc: 'کانال شخصی رسمی. ویلاگ‌ها، تک‌شو‌ها، تجزیه‌های نظری و فعالیت‌های روزمره.',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@shabbirahmed1103',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/channels4_profile_fz4ga1.jpg',
    color: 'from-cyan-500 to-blue-500',
    type: 'youtube'
  },

  {
    title: 'رضوی آنلاین',
    handle: '@Rezavi Islamic Products',
    desc: 'محصولات فرهنگی و اسلامی.',
    button: 'Follow',
    href: 'https://www.youtube.com/@RezaviOnline',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1773921471/9e5b66dc-aaa8-4379-84e6-a1ce4037acf1.png',
    color: 'from-blue-600 to-blue-800',
    type: 'facebook'
  }
];

export const talkshowVideos = [
  // تک‌شو‌ها
  { title: "تک‌شوی ویژه در مورد مسئله فلسطین", url: "https://youtu.be/-nwGiL02p8U", category: "تک‌شو‌ها" },
  { title: "تک‌شو در مورد غزه و خاک و خون", url: "https://youtu.be/fVe9fr4XgO4", category: "تک‌شو‌ها" },
  { title: "تک‌شوی ویژه در روز قدس", url: "https://youtu.be/mb-ph5NXbcw", category: "تک‌شو‌ها" },
  { title: "تک‌شوی ویژه در مورد حالات زندگی امام خمینی", url: "https://youtu.be/-17ji3vQRnE", category: "تک‌شو‌ها" },
  { title: "شوی ویژه در سالگرد انقلاب ایران", url: "https://youtu.be/mbivPMbARck", category: "تک‌شو‌ها" },
  { title: "تک‌شوی ویژه در رابطه با شهادت امیرالمؤمنین", url: "https://youtu.be/iQajjLPxuH0", category: "تک‌شو‌ها" },
  { title: "امام مهدی و عقیده ادیان دیگر نسبت به او", url: "https://youtu.be/VjsUpKw7mJg", category: "تک‌شو‌ها" },
  { title: "تک‌شو در مورد سالگرد انقلاب اسلامی ایران", url: "https://youtu.be/EWU6sLiF95c", category: "تک‌شو‌ها" },
  { title: "شهادت دانشمند ایرانی و وضعیت منطقه", url: "https://youtu.be/wXnBLpHBUmI", category: "تک‌شو‌ها" },
  { title: "بلتستان پاسخ سختی به هند داد (بخش 1)", url: "https://youtu.be/KjKgcUM_Wlk", category: "تک‌شو‌ها" },
  { title: "بلتستان پاسخ سختی به هند داد (بخش 2)", url: "https://youtu.be/y3CFui8_CDo", category: "تک‌شو‌ها" },
  { title: "بلتستان پاسخ سختی به هند داد (بخش 3)", url: "https://youtu.be/1mqC9xZCWMw", category: "تک‌شو‌ها" },
  { title: "تلاش برای افزایش منفورانگی دینی در پاکستان بهانه کرونا (بخش 1)", url: "https://youtu.be/R7PUyW43br0", category: "تک‌شو‌ها" },
  { title: "تلاش برای افزایش منفورانگی دینی در پاکستان بهانه کرونا (بخش 3)", url: "https://youtu.be/LT25Ftixsqw", category: "تک‌شو‌ها" },

  // مصاحبه‌ها
  { title: "مصاحبه ویژه با فرزند حضرت اقبال جاوید اقبال", url: "https://youtu.be/hvxyDD6OV_0", category: "مصاحبه‌ها" },
  { title: "مصاحبه ویژه کانال یوکی تی وی در مورد امام خمینی", url: "https://youtu.be/h6txjU2BmOo", category: "مصاحبه‌ها" },
  { title: "برنامه ویژه رمضان با قاریان ایرانی", url: "https://youtu.be/8dzF3AAjx88", category: "مصاحبه‌ها" },
  { title: "گفتگوی ویژه درمورد خدمات شبیر احمد شگری", url: "https://youtu.be/cU5tfXmF1Qs", category: "مصاحبه‌ها" },
  { title: "گفتگوی ویژه با کنسولگر کل سریلانکا یاسین جویا", url: "https://youtu.be/UhXOlB875Zc", category: "مصاحبه‌ها" },
  { title: "گفتگو با وزیر سابق آموزش و پرورش ابراهیم ثنایی بخش 1", url: "https://youtu.be/2sBuxdec0y4", category: "مصاحبه‌ها" },
  { title: "گفتگو با وزیر سابق آموزش و پرورش ابراهیم ثنایی بخش 2", url: "https://youtu.be/f9zhqeV84g8", category: "مصاحبه‌ها" },
  { title: "گفتگو با عامر حسین هاشمی", url: "https://youtu.be/_0H7ACco2o0", category: "مصاحبه‌ها" },
  { title: "گفتگو با مولانا قاضی محمد افضل ایمانی", url: "https://youtu.be/p00yZhZG80M", category: "مصاحبه‌ها" },
  { title: "برنامه ملاقات. گفتگو با سید نوبهار شاه", url: "https://youtu.be/HfhK0rzEdWA", category: "مصاحبه‌ها" },

  // اطلاعاتی و فرهنگی
  { title: "آیا واقعاً در ایران مسلمانان مسلح مساجد ندارند؟", url: "https://youtu.be/lzs9np9tDKw", category: "اطلاعاتی و فرهنگی" },
  { title: "تاریخ منحصر به فرد جلوس تعزیه در بلتستان", url: "https://youtu.be/vU0L3-iE3I8", category: "اطلاعاتی و فرهنگی" },
  { title: "تو و تمام چیز تو متعلق به پدر تو است", url: "https://youtu.be/OxDiki06udw", category: "اطلاعاتی و فرهنگی" },

  // گردشگری و سفرنامه
  { title: "گفتگو با رسانه در مورد گردشگری ایران", url: "https://youtu.be/fB6LYEwTiUM", category: "گردشگری و سفرنامه" },
  { title: "گفتگوی رسانه‌ای با مدیرکل فرهنگستان خانه ایران جعفر روناس", url: "https://youtu.be/kUyQNPGS3GU", category: "گردشگری و سفرنامه" },
  { title: "بیان نظرات گروه گردشگری ایران", url: "https://youtu.be/qgSYJw0GsRI", category: "گردشگری و سفرنامه" },
  { title: "مسجد النبی (سفرنامه مدینه اهل‌بیت)", url: "https://youtu.be/-6LbvhLDt-U", category: "گردشگری و سفرنامه" },
  { title: "مسجد نور، چاه حضرت علی علیه‌السلام", url: "https://youtu.be/gVj1hSZcXBQ", category: "گردشگری و سفرنامه" },
  { title: "بیت‌السبایا مدینه (زیارت اهل‌بیت)", url: "https://youtu.be/b45G9T1F2Mo", category: "گردشگری و سفرنامه" },
  { title: "کوه احد", url: "https://youtu.be/AXXHkcqdtaE", category: "گردشگری و سفرنامه" },
  { title: "مکانی که در آن ذوالفقار از آسمان نازل شد", url: "https://youtu.be/gd1TrAM6SlI", category: "گردشگری و سفرنامه" },
  { title: "ملک حضرت مسلم بن عقیل هنوز موجود است", url: "https://youtu.be/x5pR3O2Wi-M", category: "گردشگری و سفرنامه" },
  { title: "روز ویرانشدگی جنت البقیع", url: "https://youtu.be/fF9frA6ntfA", category: "گردشگری و سفرنامه" },
  { title: "مسجد مباهله یا مسجد اجابه", url: "https://youtu.be/N8AtjkPiWDU", category: "گردشگری و سفرنامه" },
  { title: "مسجد جمکران، قم ایران", url: "https://youtu.be/UOT9U9Pd9K0", category: "گردشگری و سفرنامه" },
  { title: "اصفهان نصف جهان", url: "https://youtu.be/cURR_wkIXjE", category: "گردشگری و سفرنامه" },
  { title: "اولین تور فرهنگی ایران", url: "https://youtu.be/MhJhFb_jaLw", category: "گردشگری و سفرنامه" },
  { title: "دیو سائی. بلندترین دشت زیبای دنیا", url: "https://youtu.be/cAYx-K8XbBo", category: "گردشگری و سفرنامه" },
  { title: "قلعه خرپوچو", url: "https://youtu.be/ugpEKKWrk3c", category: "گردشگری و سفرنامه" },
  { title: "خانقاه تاریخی معلیٰ. شگر", url: "https://youtu.be/3bsh2X6kA4Q", category: "گردشگری و سفرنامه" },
  { title: "زیباترین مکان دنیا دیو سائی-سکاردو", url: "https://youtu.be/KEAYWurTv9M", category: "گردشگری و سفرنامه" },
  { title: "دریاچه سدپاره پراری مناظر طبیعی", url: "https://youtu.be/OkE-AnWiH2o", category: "گردشگری و سفرنامه" },
  { title: "بهشت گردشگران سکاردو", url: "https://youtu.be/N3oxergwGb4", category: "گردشگری و سفرنامه" },
  { title: "بهشت روی زمین. شگر", url: "https://youtu.be/tNeJK1F005g", category: "گردشگری و سفرنامه" },
  { title: "دره کے تو", url: "https://youtu.be/7qpUJWqXt48", category: "گردشگری و سفرنامه" },
  { title: "دریاچه کور. شگر", url: "https://youtu.be/BgZ0pFMKI5U", category: "گردشگری و سفرنامه" },
  { title: "بیابان سرد جهان. کت‌پنه سکاردو", url: "https://youtu.be/gJX5nfzDXWI", category: "گردشگری و سفرنامه" },
  { title: "شنقریلا. زیباترین مرکز گردشگری", url: "https://youtu.be/JyldoxmbQzQ", category: "گردشگری و سفرنامه" },
  { title: "بیابان سرد و دریاچه کت‌پنه (انگلیسی)", url: "https://youtu.be/sFnCwZBuhKg", category: "گردشگری و سفرنامه" },
  { title: "دیو سائی 'سرزمین پری‌ها' (انگلیسی)", url: "https://youtu.be/tXCgiLPe2Bc", category: "گردشگری و سفرنامه" }
];

export const interviewsImages = [
  { title: "مصاحبه قاری ایرانی", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811440/1149239_512655122145082_1918311803_o_qllhb6.jpg" },
  { title: "مصاحبه فریدپرچه", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811442/29694855_1680457202031529_8486306020814967638_n_giamyi.jpg" },
  { title: "مصاحبه قاضی نیاز مرحوم", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811444/29791095_1680455938698322_1208721538213886912_n_jde4kb.jpg" },
  { title: "پیر سید علی رضا گیلانی", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811442/29790427_1680456065364976_2220801775673776535_n_wqsl1i.jpg" },
  { title: "مولانا عبدالوهاب روپڑی", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811448/29791414_1680456558698260_2050965162931755239_n_ubh0eg.jpg" },
  { title: "پیر معصوم حسین نقوی", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811452/29791703_1680456115364971_4191998705137614837_n_gjscjx.jpg" },
  { title: "مفتی مشہدی جامعه احناف", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811441/29790115_1680456545364928_1296070976998805962_n_dmyvj9.jpg" },
  { title: "گروه فرهنگی ایرانی", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811437/photo_2018-02-24_19-56-04_bjhzgv.jpg" },
  { title: "آماده‌سازی مصاحبه جی سی لاهور", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811454/G.c_Alla_Iqbal_documentry2_bqowl0.jpg" }
];

export const generalGallery = [
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768224081/28168087_1638285129582070_8467778963583414144_n_Copy_z1eghy.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223895/492331562_9705931722817330_1854499131416978681_n_nnm1ro.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223721/Screenshot_2026-01-12_173201_a7dtvw.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223720/Screenshot_2026-01-12_172609_nb96q9.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223720/Screenshot_2026-01-12_173038_hr9jfn.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223718/Untitled-1_Copy_xd53cr.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223718/WhatsApp_Image_2018-05-27_at_12.06.56_1_Copy_vkjvgt.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223350/IMG-20180530-WA0025_Copy_lwoczg.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223348/IMG_20190213_195100_Copy_frq8eu.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223346/IMG_20190213_194625_Copy_shfrwe.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223344/IMG_20210209_180402_Copy_za3wfc.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223341/IMG_20190213_194900_Copy_sjezqh.jpg"
];
