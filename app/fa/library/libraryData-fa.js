export const AUTHOR_REVIEW = {
  title: "تجزیه حیات و خدمات حاجی شبیر احمد شگری",
  desc: "تجزیه جامع و بی‌طرفانه خدمات صحافی، فرهنگی و دینی من که برای پنجاه سال و بیش‌تر است، که توسط هوش مصنوعی گوگل تدوین شده‌است. لطفاً آن را بشنویدید و ببینید.",
  videoUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1772595268/%D8%B3%D9%81%D8%B1%D9%90_%D9%86%D9%88%D8%B1__%DA%A9%D9%88%DB%81%D8%B3%D8%A7%D8%B1%D9%88%DA%BA_%D8%B3%DB%92_%D9%85%DB%8C%D9%86%D8%A7%D8%B1%D9%88%DA%BA_%D8%AA%DA%A9_xhax6w.mp4",
  audioUrl: "https://res.cloudinary.com/dtqrziupt/video/upload/v1774473007/khudnawisht-shabbir-shigri_jkdrao.mp3",
  image: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772598628/shabbir_ahmed_shigri_bgzwvt.png"
};

export const BOOKS_DATA = [
  {
    id: 'book-booy',
    title: 'سیره فاطمه زهرا (س): بوی بهشت',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png',
    badge: 'سیره فاطمه',
    orientation: 'portrait',
    descUrdu: `این کتاب آن رویه حیات طیب خاتون الجنّه حضرت فاطمه زهرا (س) را ارائه می‌دهد که برای مؤمنان چراغ راه است. نام کتاب خود شاهد بویای آن است امید است که هنگام خواندن این کتاب قلب و روح شما معطّر گردد.
نویسنده: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', label: 'کتاب را بخوانید', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772638934/boey-behesht..compressed_qan3jl.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1772587962/boey-behisht-audeo-podcast_ynq9uq.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'book-anees',
    title: 'انیس النفوس',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Anees-an-nafoos_vb0ljq.png',
    badge: 'حرم امام رضا (ع)',
    orientation: 'portrait',
    descUrdu: 'این کتاب من خزانه‌ای از اطلاعات درباره تاریخ حرم امام رضا (ع) و حرم کنونی است.',
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب را بخوانید', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476152/anees-an-nafoos_dqugjy.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027471/%D8%A7%D9%86%DB%8C%D8%B3_%D8%A7%D9%84%D9%86%D9%81%D9%88%D8%B3_%D9%BE%D9%88%DA%88%DA%A9%D8%A7%D8%B3%D9%B9_later_y4pzhy.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769034308/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%A7%D9%86%DB%8C%D8%B3_%D8%A7%D9%84%D9%86%D9%81%D9%88%D8%B3_%DA%A9%D8%A7_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%AC%D8%B2%DB%8C%DB%81_hlzsne.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-safarnama',
    title: 'سفرنامه ایران: سفر به سرزمین عشق',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772651728/eb2e1ccd-e669-4453-8ca7-10f38cf13a50.png',
    badge: 'سفرنامه',
    orientation: 'portrait',
    descUrdu: `این کتاب شبیر احمد شگری محض یک سفرنامه نیست، بلکه تجزیه جامعی از مقامات تاریخی، مذهبی و فرهنگی ایران است. در این سفرنامه علاوه بر زیارتها، توضیح تفصیلی از مقامات گردشگری ایران وجود دارد. این یک سفرنامه زیبای مصور است که در فرصت اولین سفر زیاراتی و گردشگری ایران نوشته شده است.
نویسنده: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب را بخوانید', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476142/book-safarnama_compressed_mytrkp.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1772594033/Ziarati-syahati-safarnama-audeo-podcast_qqjiwy.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'book-rooh',
    title: 'معراج روح',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772599153/39144cf5-3156-4054-85a3-bbfd54106240.png',
    badge: 'اصلاح نفس',
    orientation: 'portrait',
    descUrdu: `چگونه معراج روح را به دست آوریم. تصنیف ارزشمندی درباره ترقی روحانی انسان، رموز عبادات و معراج روح. این کتاب من از کتاب فارسی مشهور "معراج السعادة" ملا احمد نراقی خلاصه و ترجمه شده است. که برای شما به صورت ساده در زبان اردو ارائه شده است.
نویسنده: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب را بخوانید', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772591868/rooh-ki-meraj_compressed_nnc8g5.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027651/%D8%B1%D9%88%D8%AD_%DA%A9%DB%8C_%D9%85%D8%B9%D8%B1%D8%A7%D8%AC_later_e01erq.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'book-sakoon',
    title: 'در جستجوی آرامش',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772651897/e56ab798-14ec-4aaf-a0b3-a205a1aae1f4.png',
    badge: 'کلید آرامش',
    orientation: 'portrait',
    descUrdu: `اصول اسلامی و روحانی برای رسیدن به آرامش قلبی و روانی در این عصر سرشار از تنش.
امروزه انسان ممکن است هر چیز داشته باشد اما فاقد آرامش است این خود قصور انسان است. من در این کتاب بر اساس فرامین ائمه طاهرین (ع) روش‌های رسیدن به آرامش را بیان کرده‌ام. زیرا حیات ائمه طاهرین (ع) برای ما چراغ راه است.
نویسنده: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب را بخوانید', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772591868/Sakoon-ki-talash_compressed_xpb8li.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027789/%D8%B3%DA%A9%D9%88%D9%86_%DA%A9%DB%8C_%D8%AA%D9%84%D8%A7%D8%B4__later_yolrcy.mp3', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769027819/%D8%B3%DA%A9%D9%88%D9%86_%DA%A9%DB%8C_%D8%AA%D9%84%D8%A7%D8%B4_tgzvni.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-sayahat-parts',
    title: 'سفر به ایران (بخش اول و دوم)',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png',
    badge: 'گردشگری ایران',
    orientation: 'portrait',
    descUrdu: `این کتاب من شامل تمام نوع اطلاعات درباره ایران است. قبل از سفر به ایران خواندن این کتاب برای هر زائر و گردشگر سکون قلبی و روحی را به ارمغان می‌آورد. سیر فرهنگی و جغرافیایی مکمل ایران.
نویسنده: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', label: 'بخش اول را بخوانید', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/sayahat-e-iran1_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'read', label: 'بخش دوم را بخوانید', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/sayahat-e-iran2_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769065454/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86_%DA%A9%DB%8C_%D9%85%D8%B2%D8%A7%D8%AD%D9%85%D8%AA_%D8%A7%D9%88%D8%B1_%D9%85%D8%B4%DB%81%D8%AF_%DA%A9%D8%A7_%D8%B3%D9%81%D8%B1_giowyp.mp4', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769034696/%D8%B3%DB%8C%D8%A7%D8%AD%D8%AA%D9%90_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86_%D9%88%DA%88%DB%8C%D9%88_%D8%AA%D8%AC%D8%B2%DB%8C%DB%81_tctlnm.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-dua',
    title: 'کلید بهشت: مجموعه دعاها',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png',
    badge: 'وظایف',
    orientation: 'landscape',
    descUrdu: `دعاهای زیبا برای وظایف. این کتاب من مجموعه‌ای از دعاهای بسیار مجرب برای ترقی روحانی و حل مشکلات است که در آن نادر و حیرت‌انگیز دعاهای مؤثر گرد آوری شده‌اند.`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب را بخوانید', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476147/Book-Dua_compressed_htejmo.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769071406/%DA%AF%D9%86%D8%AC%D9%90_%D8%A8%DB%81%D8%B4%D8%AA_%D8%A7%D9%88%D8%B1_%D8%AF%D8%B9%D8%A7_%DA%A9%DB%8C_%D8%AD%DB%8C%D8%B1%D8%A7%D9%86_%DA%A9%D9%86_%D8%B7%D8%A7%D9%82%D8%AA_rrgyiz.mp4', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769071400/%DA%AF%D9%86%D8%AC%D9%90_%D8%A8%DB%81%D8%B4%D8%AA__%D8%A7%DB%8C%DA%A9_%D9%88%D8%B6%D8%A7%D8%AD%D8%AA_p2by8k.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-khorasan',
    title: 'خراسان رضوی (بخش اول و دوم)',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772111272/65878faa-2f99-4af6-8216-ad9009adc747.png',
    badge: 'خراسان رضوی',
    orientation: 'portrait',
    descUrdu: `این یک کتاب تصویری شاندار است که طراحی آن توسط من انجام شده است. در آن مقامات تاریخی خراسان به صورت فنی ارائه شده است. این اولین کتاب ایرانی است که در پاکستان طراحی شده است و من افتخار داشته‌ام. این کتاب توسط من طراحی شده و در ایران منتشر شده است که بر روی کاغذ نفیس چاپ شده است.
طراحی: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', source: 'supabase', label: 'بخش اول را بخوانید', icon: 'book', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/khorasan-razavi-1_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'read', source: 'supabase', label: 'بخش دوم را بخوانید', icon: 'book', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/khorasan-razavi-2_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076045/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_ctn2j6.mp4', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769076063/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_%D8%B1%D8%B6%D9%88%DB%8C_%D9%BE%D8%A7%D8%B1%D9%B9_1_unp6gj.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-fatwa',
    title: 'فتاواي رهبر (بخش اول و دوم)',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772597583/e1511aec-3b7d-44d3-9bd1-4cdfbeecb9c3.png',
    badge: 'فتاوای رهبر',
    orientation: 'portrait',
    descUrdu: `مجموعه معتبر فتاواي رهبر معظم آیت‌الله سید علی خامنه‌ای، که برای راهنمایی شرعی روزمره مؤمنین تنظیم شده است. نظرات برتری علمای جهان نیز در این کتاب گنجانده شده است. این یک هدیه بسیار زیبا برای وحدت مسلمانان است. این کتاب توسط خانه فرهنگ ایران چاپ شده و من افتخار ویرایش و طراحی آن را دارم.
ویرایش و طراحی: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', label: 'بخش اول را بخوانید', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/rehbar-k-fatawa1_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'read', label: 'بخش دوم را بخوانید', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/rehbar-k-fatawa2_compressed.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', url: '', color: 'theme-urdu-aud', disabled: true },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'shakh-e-nabaat',
    title: 'شاخ نبات (بخش اول و دوم)',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1773673146/0125d4e5-ab4f-43f0-961b-b05c3cd8b420.png',
    badge: 'نشریه فرهنگی',
    orientation: 'portrait',
    descUrdu: `نشریه خانه فرهنگ ایران لاهور که داشتن این شرف ویرائش آن برایم افتخار است.`,
    actions: [
      { type: 'read', label: 'بخش اول را بخوانید', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/shakh-e-nabaat-part1.pdf', color: 'theme-read', disabled: false },
      { type: 'read', label: 'بخش دوم را بخوانید', url: 'https://bktkwypcufsmdpvueotw.supabase.co/storage/v1/object/public/books/shakh-e-nabaat-part2.pdf', color: 'theme-read', disabled: false }
    ]
  },
  {
    id: 'book-farhang',
    title: 'نشریه فرهنگستان',
    image: 'https://res.cloudinary.com/dtqrzyupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png',
    badge: 'نشریه فرهنگی',
    orientation: 'portrait',
    descUrdu: `این سند بر اساس نشریه ماهانه "فرهنگستان" منتشر شده از لاهور است، که امانتدار فرهنگ پاک-ایران است.
سردبیر: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب را بخوانید', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476145/farhangistan_compressed_kr5t8k.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769068853/%D9%81%D8%B1%DA%BE%D9%86%DA%AF%D8%B3%D8%AA%D8%A7%D9%86_%D9%BE%D9%88%DA%88%DA%A9%D8%A7%D8%B3%D9%B9_px9gbk.mp4', color: 'theme-urdu-aud', disabled: false },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769068850/%D9%81%D8%B1%DB%81%D9%86%DA%AF%D8%B3%D8%AA%D8%A7%D9%86__%D9%85%D8%AD%D8%B1%D9%85_%D8%B4%D9%85%D8%A7%D8%B1%DB%81_dnv6u9.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  },
  {
    id: 'book-inqilab',
    title: 'نشریه انقلاب',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772598044/95eeeeb5-067e-4fcb-b4c6-ed952d52af89.png',
    badge: 'نشریه اسلامی',
    orientation: 'portrait',
    descUrdu: `نشریه خصوصی که جنبه‌های فکری و فرهنگی انقلاب اسلامی را روشن می‌کند.
سردبیر: حاجی شبیر احمد شگری`,
    actions: [
      { type: 'read', source: 'cloudinary', label: 'کتاب را بخوانید', icon: 'book', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772476186/Inqlab-majala_compressed_vjziqn.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', icon: 'headphones', url: '', color: 'theme-urdu-aud', disabled: true },
      { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: '', color: 'theme-urdu-vid', disabled: true }
    ]
  },
  {
    id: 'Quran',
    title: 'پروژه نور القرآن',
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png',
    badge: 'نور القرآن',
    orientation: 'portrait',
    descUrdu: `توضیح پروژه نور القرآن`,
    actions: [
       { type: 'read', label: 'کتاب را بخوانید', url: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1776454789/noorulquran-compressed_umdyg3.pdf', color: 'theme-read', disabled: false },
      { type: 'audio', label: 'پادکاست صوتی گوگل', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_wdodfp.mp4', color: 'theme-urdu-aud', disabled: false },
            { type: 'video', label: 'پادکاست ویدیویی گوگل', icon: 'film', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_qfyz0i.mp4', color: 'theme-urdu-vid', disabled: false }
    ]
  }
];

export const SLIDER_BOOKS = [...BOOKS_DATA];