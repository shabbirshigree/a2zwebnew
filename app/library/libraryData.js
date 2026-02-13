// app/library/libraryData.js

export const BOOKS_DATA = [
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

export const SLIDER_BOOKS = [
  { name: 'بوئے بہشت', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png', id: 'book-booy' },
  { name: 'نور القرآن', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png', id: 'book-noor' },
  { name: 'انیس النفوس', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Anees-an-nafoos_vb0ljq.png', id: 'book-anees' },
  { name: 'روح کی معراج', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png', id: 'book-rooh' },
  { name: 'سکون کی تلاش', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png', id: 'book-sakoon' },
  { name: 'سیاحت ایران', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png', id: 'book-iran' },
  { name: 'کنجی بہشت', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png', id: 'book-kunji' },
  { name: 'مجلہ فرھنگستان', image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png', id: 'book-farhang' },
];