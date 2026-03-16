export const AUTHOR_REVIEW = {
  title: "حاجی شبیر احمد شگری کی حیات و خدمات پر تجزیہ",
  desc: "میری نصف صدی پر محیط صحافتی، ثقافتی اور دینی خدمات کا ایک جامع اور غیر جانبدارانہ ڈیجیٹل تجزیہ جو گوگل اے آئی (Google AI) نے ترتیب دیا ہے۔ اسے ضرور سنیں اور دیکھیں۔",
  videoUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1772595268/%D8%B3%D9%81%D8%B1%D9%90_%D9%86%D9%88%D8%B1__%DA%A9%D9%88%DB%81%D8%B3%D8%A7%D8%B1%D9%88%DA%BA_%D8%B3%DB%92_%D9%85%DB%8C%D9%86%D8%A7%D8%B1%D9%88%DA%BA_%D8%AA%DA%A9_xhax6w.mp4",
  audioUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1772595285/%D8%B3%DA%A9%D9%88%D9%86_%DA%A9%DB%8C_%D8%AA%D9%84%D8%A7%D8%B4_tgzvni.mp4",
  image: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772598628/shabbir_ahmed_shigri_bgzwvt.png"
};

export const BOOKS_DATA = [
  {
    id: 'book-booy',
    title: 'سیرتِ فاطمہ زہراؑ: بوئے بہشت',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png',
    badge: 'SEERAT-E-FATIMA (S.A)',
    orientation: 'portrait',
    descUrdu: `یہ کتاب خاتونِ جنت حضرت فاطمہ زہراؑ کی حیاتِ طیبہ کا وہ رخ پیش کرتی ہے جو مومنین کے لیے مشعل راہ ہے۔ کتاب کا نام ہی اس کی خوشبو کی گواہی دیتا ہےامید ہے میری یہ کتاب پڑھتے ہوئے آپ کے قلب و روح معطر ہوجائیں گے۔
مصنف: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', label: 'کتاب پڑھیں', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772638934/boey-behesht..compressed_qan3jl.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1772587962/boey-behisht-audeo-podcast_ynq9uq.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'book-anees',
    title: 'انیس النفوس',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Anees-an-nafoos_vb0ljq.png',
    badge: 'حرم امام رضاؑ',
    orientation: 'portrait',
    descUrdu: 'میری یہ کتاب حرم امام رضا علیہ السلام کی تاریخ اور موجودہ حرم کے بارے میں معلومات کا خزانہ ہے ۔',
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب پڑھیں', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476152/anees-an-nafoos_dqugjy.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027471/%D8%A7%D9%86%DB%8C%D8%B3_%D8%A7%D9%84%D9%86%D9%81%D9%88%D8%B3_%D9%BE%D9%88%DA%88%DA%A9%D8%A7%D8%B3%D9%B9_later_y4pzhy.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769034308/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%A7%D9%86%DB%8C%D8%B3_%D8%A7%D9%84%D9%86%D9%81%D9%88%D8%B3_%DA%A9%D8%A7_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%AC%D8%B2%DB%8C%DB%81_hlzsne.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-safarnama',
    title: 'سفرنامہ ایران: دیارِ عشق کا سفر',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772651728/eb2e1ccd-e669-4453-8ca7-10f38cf13a50.png',
    badge: 'سفرنامہ',
    orientation: 'portrait',
    descUrdu: `حاجی شبیر احمد شگری کی یہ کتاب محض ایک سفرنامہ نہیں، بلکہ ایران کے تاریخی، مذہبی اور ثقافتی مقامات کا ایک جامع جائزہ ہے۔اس سفرنامے میں زیارات کے ساتھ ساتھ ایران کے سیاحتی مقامات کا بھی تفصیل سے ذکر ہے۔ یہ ایک خوبصورت باتصویر سفرنامہ ہے جو ایران کے پہلے زیارتی و سیاحتی سفر کے موقع پر لکھا گیا ہے
مصنف: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب پڑھیں', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476142/book-safarnama_compressed_mytrkp.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1772594033/Ziarati-syahati-safarnama-audeo-podcast_qqjiwy.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', icon: 'film', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'book-rooh',
    title: 'روح کی معراج',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772599153/39144cf5-3156-4054-85a3-bbfd54106240.png',
    badge: 'اصلاح نفس',
    orientation: 'portrait',
    descUrdu: `روح کی معراج کو کیسے حاصل کیا جائے ۔انسان کی روحانی ترقی، عبادات کے اسرار اور روح کی معراج کے حوالے سے ایک گراں قدر تصنیف۔میری یہ کتاب ملا احمد نراقی کی شہرہ آفاق فارسی کتاب"معراج السعادۃ" سے تلخیص و ترجمہ کی گئی ہے۔ جسے اردو زبان میں آپ کے لئے آسان انداز میں پیش کیا گیا ہے
مصنف: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب پڑھیں', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772591868/rooh-ki-meraj_compressed_nnc8g5.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027651/%D8%B1%D9%88%D8%AD_%DA%A9%DB%8C_%D9%85%D8%B9%D8%B1%D8%A7%D8%AC_later_e01erq.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', icon: 'film', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'book-sakoon',
    title: 'سکون کی تلاش',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772651897/e56ab798-14ec-4aaf-a0b3-a205a1aae1f4.png',
    badge: 'سکون کی چابی',
    orientation: 'portrait',
    descUrdu: `آج کے پرفتن اور بے سکون دور میں قلبی اور ذہنی سکون حاصل کرنے کے اسلامی اور روحانی اصول۔آج انسان کے پاس بو شک سب کچھ ہو لیکن سکون کی کمی ہے اس میں خود انسان کا اپنا قصور ہے میں نے اس کتان میں آئمہ طاہرین کے فرامین کے مطابق سکون حاصل کرنے کے چریقے بیان کئے ہیں ۔ کیونکہ آئمہ طاہرین علیھم السلام کی زندگی ہی ہمارے لئے مشعل راہ ہے۔
مصنف: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب پڑھیں', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772591868/Sakoon-ki-talash_compressed_xpb8li.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027789/%D8%B3%DA%A9%D9%88%D9%86_%DA%A9%DB%8C_%D8%AA%D9%84%D8%A7%D8%B4__later_yolrcy.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027819/%D8%B3%DA%A9%D9%88%D9%86_%DA%A9%DB%8C_%D8%AA%D9%84%D8%A7%D8%B4_tgzvni.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-sayahat-parts',
    title: 'سیاحتِ ایران (حصہ اول و دوم)',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png',
    badge: 'ایران کی سیاحت',
    orientation: 'portrait',
    descUrdu: `میری اس کتاب ایران کے بارے میں ہر قسم کی معلومات درج ہیں۔ ایران جانے سے ہلے اس کتاب کو پڑھنا میرے خیال میں ایک زائر اور سیاح کے قلب و روح کو حقیقی سکون عطا کرے گا۔ایران کی مکمل ثقافتی اور جغرافیائی سیر۔
مصنف: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', label: 'حصہ اول پڑھیں', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/sayahat-e-iran1_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'read', label: 'حصہ دوم پڑھیں', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/sayahat-e-iran2_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769065454/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86_%DA%A9%DB%8C_%D9%85%D8%B2%D8%A7%D8%AD%D9%85%D8%AA_%D8%A7%D9%88%D8%B1_%D9%85%D8%B4%DB%81%D8%AF_%DA%A9%D8%A7_%D8%B3%D9%81%D8%B1_giowyp.mp4', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769034696/%D8%B3%DB%8C%D8%A7%D8%AD%D8%AA%D9%90_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86_%D9%88%DA%88%DB%8C%D9%88_%D8%AA%D8%AC%D8%B2%DB%8C%DB%81_tctlnm.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-dua',
    title: 'کنجی بہشت: دعاؤں کا مجموعہ',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png',
    badge: 'وضائف',
    orientation: 'landscape',
    descUrdu: `وضائف کے لئے خوبسورت دعائیں۔ میری یہ کتاب روحانی ترقی اور مشکلات کے حل کے لیے انتہائی مجرب دعاؤں کا مجموعہ ہے جس میں نایاب اور حیرت انگیز اثرات والی دعاؤن کے انتخاب کو شامل کیا گیا ہے۔
مرتبہ: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب پڑھیں', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476147/Book-Dua_compressed_htejmo.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769071406/%DA%AF%D9%86%D8%AC%D9%90_%D8%A8%DB%81%D8%B4%D8%AA_%D8%A7%D9%88%D8%B1_%D8%AF%D8%B9%D8%A7_%DA%A9%DB%8C_%D8%AD%DB%8C%D8%B1%D8%A7%D9%86_%DA%A9%D9%86_%D8%B7%D8%A7%D9%82%D8%AA_rrgyiz.mp4', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769071400/%DA%AF%D9%86%D8%AC%D9%90_%D8%A8%DB%81%D8%B4%D8%AA__%D8%A7%DB%8C%DA%A9_%D9%88%D8%B6%D8%A7%D8%AD%D8%AA_p2by8k.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-khorasan',
    title: 'خراسان رضوی (حصہ اول و دوم)',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772111272/65878faa-2f99-4af6-8216-ad9009adc747.png',
    badge: 'خراسان رضوی',
    orientation: 'portrait',
    descUrdu: `یہ ایک شاندار تصویری کتاب ہے جس کی مکمل ڈیزائننگ خاکسار نے کی ہے۔ اس میں خراسان کے تاریخی مقامات کو پیش کیا گیا ہے۔یہ پہلی ایرانی کتاب ہے جسے پاکستان میں ڈیزائن کیا گیا اور مجھے یہ اعزاز حاصل ہوا۔میری ڈیزائن کردہ یہ کتاب ایران میں شائع کی گئی جو نفیس کاغذ پر پرنٹ کی گئی ہے۔
ڈیزائن: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', source: 'supabase', label: 'حصہ اول پڑھیں', icon: 'book', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/khorasan-razavi-1_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'read', source: 'supabase', label: 'حصہ دوم پڑھیں', icon: 'book', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/khorasan-razavi-2_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076045/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_ctn2j6.mp4', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076063/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_unp6gj.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-fatwa',
    title: 'رہبر کے فتوے (حصہ اول و دوم)',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772597583/e1511aec-3b7d-44d3-9bd1-4cdfbeecb9c3.png',
    badge: 'رہبر کا فتوٰی',
    orientation: 'portrait',
    descUrdu: `رہبرِ معظم آیت اللہ سید علی خامنہ ای کے اہم فتاویٰ کا مستند مجموعہ، جو مومنین کی روزمرہ شرعی رہنمائی کے لیے ترتیب دیا گیا ہے۔پوری دنیا کے جید علما کے خیالات کو بھی اس کتاب میں شامل کیا گیا ہے۔مسلمانوں کے درمیان وحدت کے لئے انتہائی خوبسورت تحفہ۔یہ کتاب خانہ فرہنگ ایران کی جانب سے چھاپی گئی اس کے ایڈیٹنگ کا اعزاز مجھے حاصل ہوا۔
ایڈٹ اور ڈیزائن: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', label: 'حصہ اول پڑھیں', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/rehbar-k-fatawa1_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'read', label: 'حصہ دوم پڑھیں', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/rehbar-k-fatawa2_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', url: '', color: 'theme-urdu-aud', disabled: true },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'shakh-e-nabaat',
    title: 'شاخ نبات(حصہ اول و دوم)',
    // میں نے یہاں مستقل پبلک لنک ڈال دیا ہے جو ایکسپائر نہیں ہوگا
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1773673146/0125d4e5-ab4f-43f0-961b-b05c3cd8b420.png',
    badge: 'فرہنگی مجلہ',
    orientation: 'portrait',
    descUrdu: 'خانہ فرہنگ ایران لاہور کا مجلہ جس کا ایڈیٹر ہونے کا اعزاز حاصل رہا۔',
    actions: [
      { type: 'read', label: 'حصہ اول پڑھیں', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/shakh-e-nabaat-part1.pdf', color: 'theme-read', disabled: false },
      { type: 'read', label: 'حصہ دوم پڑھیں', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/shakh-e-nabaat-part2.pdf', color: 'theme-read', disabled: false }
    ]
  },
  {
    id: 'book-farhang',
    title: 'مجلہ فرھنگستان',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png',
    badge: 'فرہنگی مجلہ',
    orientation: 'portrait',
    descUrdu: `یہ دستاویز لاہور سے شائع ہونے والے ماہنامہ "فرهنگستان" پر مبنی ہے، جو پاک ایران ثقافت کا امین ہے۔
مدیر: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب پڑھیں', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476145/farhangistan_compressed_kr5t8k.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769068853/%D9%81%D8%B1%DA%BE%D9%86%DA%AF%D8%B3%D8%AA%D8%A7%D9%86_%D9%BE%D9%88%DA%88%DA%A9%D8%A7%D8%B3%D9%B9_px9gbk.mp4', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769068850/%D9%81%D8%B1%DB%81%D9%86%DA%AF%D8%B3%D8%AA%D8%A7%D9%86__%D9%85%D8%AD%D8%B1%D9%85_%D8%B4%D9%85%D8%A7%D8%B1%DB%81_dnv6u9.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-inqilab',
    title: 'مجلہ انقلاب',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772598044/95eeeeb5-067e-4fcb-b4c6-ed952d52af89.png',
    badge: 'اسلامی مجلہ',
    orientation: 'portrait',
    descUrdu: `انقلابِ اسلامی کی فکری اور ثقافتی جہتوں کو اجاگر کرنے والا خصوصی مجلہ۔
مدیر: حاجی شبیراحمدشگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب پڑھیں', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476186/Inqlab-majala_compressed_vjziqn.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'گوگل آڈیو پوڈکاسٹ', icon: 'headphones', url: '', color: 'theme-urdu-aud', disabled: true },
      { type: 'video', label: 'گوگل ویڈیو پوڈکاسٹ', icon: 'film', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  }
];

export const SLIDER_BOOKS = [...BOOKS_DATA];