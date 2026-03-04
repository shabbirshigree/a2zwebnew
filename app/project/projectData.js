// app/project/projectData.js

export const quranVideos = {
  // نور القرآن پروجیکٹ کا تعارفی اور مقاصد والا حصہ
  intro: {
    id: 'book-noor',
    title: 'نور القرآن پروجیکٹ: تعارف اور مقاصد',
    // نئی تصویر (لوگو) کا لنک اپڈیٹ کر دیا گیا ہے
    image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1772106162/fe64b922-ae4d-4243-b541-9849b90c34df.png',
    badge: "WORLD'S FIRST VISUAL QURAN",
    descUrdu: 'یہ حاجی شبیر احمد شگری کا ایک جدید اور منفرد منصوبہ ہے۔ اس پروجیکٹ کا بنیادی مقصد جدید ٹیکنالوجی اور مصنوعی ذہانت (AI) کے ذریعے قرآن مجید کے ترجمے اور مفاہیم کو بصری اور فلمی انداز میں پیش کرنا ہے۔\n\nویژول قرآن: تلاوت کے ساتھ اردو ترجمہ اور متعلقہ مناظر، تاکہ نوجوان نسل اسے آسانی سے سمجھ سکے۔',
    
    // فلپ بک کا آن لائن کوڈ (Iframe) شامل کر دیا گیا ہے
    flipbookIframe: '<iframe allowfullscreen="allowfullscreen" allow="clipboard-write" scrolling="no" class="fp-iframe" src="https://heyzine.com/flip-book/e92a02b4a9.html" style="border: 1px solid lightgray; width: 100%; height: 400px;"></iframe>',
    
    actions: [
      // لیبل کو 'کتابچہ دیکھیں' کی بجائے 'تفصیل پڑھیں' کر دیا گیا ہے اور فلپ بک کا لنک دیا گیا ہے
      { type: 'project', label: 'تفصیل پڑھیں', icon: 'book', link: 'https://heyzine.com/flip-book/e92a02b4a9.html', color: 'theme-read' },
      { type: 'video-urdu', label: 'ویڈیو تبصرہ', icon: 'play', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1772101147/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_cbttlt.mp4', color: 'theme-urdu-vid' },
      { type: 'audio-urdu', label: 'آڈیو پوڈکاسٹ', icon: 'headphones', url: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1772101123/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D9%B9_%D8%A2%DA%88%DB%8C%D9%88_xo4oym.mp4', color: 'theme-urdu-aud' },
    ]
  },

  // عربی پارہ جات
  parat_arabic: [
    { id: 'TgdJjEBGv14', title: 'پارہ 01: الم' }, { id: 'iaYHJQZZlFs', title: 'پارہ 02: سیقول' },
    { id: 'MrZcGjmszJQ', title: 'پارہ 03: تلک الرسل' }, { id: 'v-MDso4vH6s', title: 'پارہ 04: لن تنالوا' },
    { id: '4TEgDWQ0YC0', title: 'پارہ 05: والمحصنات' }, { id: '91W-X-nY6KY', title: 'پارہ 06: لا یحب اللہ' },
    { id: 'teM93m37_gk', title: 'پارہ 07: و اذا سمعوا' }, { id: 'bn9ErmKWbAg', title: 'پارہ 08: ولو اننا' },
    { id: 'ABV127-qCd0', title: 'پارہ 09: قال الملاء' }, { id: 'vqKDs8xZtgs', title: 'پارہ 10: واعلموا' },
    { id: '9_ECxDNWuEo', title: 'پارہ 11: یعتذرون' }, { id: '8LrovxVGtSU', title: 'پارہ 12: وما من دابة' },
    { id: 'fKcBvKlghHM', title: 'پارہ 13: وما ابری' }, { id: 'UTRKmI_Zd4g', title: 'پارہ 14: ربما' },
    { id: 'U1lIbVE8Z9I', title: 'پارہ 15: سبحان الذی' }, { id: 'h738xPhuUgg', title: 'پارہ 16: قال الم' },
    { id: 'K_KwLFXcEl4', title: 'پارہ 17: اقترب' }, { id: '-tsNsaN3A98', title: 'پارہ 18: قد افلح' },
    { id: 'VM_yJRRUlc8', title: 'پارہ 19: وقال الذین' }, { id: 'RGxAJglrHCs', title: 'پارہ 20: امن خلق' },
    { id: 'K5_BTX7Lv8Q', title: 'پارہ 21: اتل ما اوحی' }, { id: 'OTIEm6gT9C0', title: 'پارہ 22: ومن یقنت' },
    { id: '9vApN5JEcTs', title: 'پارہ 23: وما لی' }, { id: '_ocCCmZOJeg', title: 'پارہ 24: فمن اظلم' },
    { id: 'bpjr0WE7As8', title: 'پارہ 25: الیہ یرد' }, { id: '9Tx8O95X1Lk', title: 'پارہ 26: حٰم' },
    { id: 'laekLukPMNk', title: 'پارہ 27: قال فما خطبکم' }, { id: 'uh-baMZcKS8', title: 'پارہ 28: قد سمع اللہ' },
    { id: '38M88d-qkDw', title: 'پارہ 29: تبارک الذی' }, { id: 'm6DHuIVQCzo', title: 'پارہ 30: عم یتساءلون' },
  ],

  // اردو ترجمہ پارہ جات
  parat_urdu: [
    { id: 'ZrGcJPjwXhw', title: 'پارہ 01 (اردو)' }, { id: 'GZdtLqFTavo', title: 'پارہ 02 (اردو)' },
    { id: 'YVUkuXJFxjE', title: 'پارہ 03 (اردو)' }, { id: 'zPJ2z2-XEbc', title: 'پارہ 04 (اردو)' },
    { id: 'h5oNM1AuDzs', title: 'پارہ 05 (اردو)' }, { id: '5X4fdP25EVY', title: 'پارہ 06 (اردو)' },
    { id: 'MrF8iHx0p9U', title: 'پارہ 07 (اردو)' }, { id: 'BGSIS3YcdEI', title: 'پارہ 08 (اردو)' },
    { id: 'HTOzK8Gs83o', title: 'پارہ 09 (اردو)' }, { id: 'X-u4e0qeuNg', title: 'پارہ 10 (اردو)' },
    { id: '3rIAlEhPfn8', title: 'پارہ 11 (اردو)' }, { id: 'uAXhsNX-8c8', title: 'پارہ 12 (اردو)' },
    { id: 'kxdpnUQ1Poo', title: 'پارہ 13 (اردو)' }, { id: 'pYuGNdbQtDQ', title: 'پارہ 14 (اردو)' },
    { id: 'AaXs9zZvE6g', title: 'پارہ 15 (اردو)' }, { id: 'Eltjca6lcbY', title: 'پارہ 16 (اردو)' },
    { id: 'anBs0WX8k1w', title: 'پارہ 17 (اردو)' }, { id: 'xid8p73BOBE', title: 'پارہ 18 (اردو)' },
    { id: 'ABVRrEJixvk', title: 'پارہ 19 (اردو)' }, { id: 'xeI4br7AgLE', title: 'پارہ 20 (اردو)' },
    { id: 'U0yhPiEZr5o', title: 'پارہ 21 (اردو)' }, { id: 'R437GwtRLfQ', title: 'پارہ 22 (اردو)' },
    { id: 'BYrakL2GP5w', title: 'پارہ 23 (اردو)' }, { id: 'jHu6YUGPjFY', title: 'پارہ 24 (اردو)' },
    { id: '9sOEwY3P0wY', title: 'پارہ 25 (اردو)' }, { id: '9O3_uDPdu-c', title: 'پارہ 26 (اردو)' },
    { id: 'I2ipUGe8CpY', title: 'پارہ 27 (اردو)' }, { id: 'xlyiLvJ7qzg', title: 'پارہ 28 (اردو)' },
    { id: 'cnZzqD6leFM', title: 'پارہ 29 (اردو)' }, { id: 'TUz9yNkHEVM', title: 'پارہ 30 (اردو)' },
  ],

  // منتخب سورتیں
  surahs: [
    { id: 'ujMnOuW_hAU', title: 'سورہ رحمٰن' }, { id: 'XcVR7Jix3BI', title: 'سورہ یوسفؑ' },
    { id: 'uzEnbSZQLSc', title: 'سورہ یٰسین' }, { id: '-cbrF85SOnI', title: 'آیت الکرسی' },
    { id: 'mvDz9xe76Mo', title: 'سورہ مزمل' }, { id: 'L2ca0YF1QYc', title: 'سورہ نور' },
    { id: 'LZjnlwDEjBA', title: 'سورہ جمعہ' }, { id: 'uLZ_-0RTkdU', title: 'سورہ ناس' },
  ],

  // قرآنی قصص
  stories: [
    { id: 'WZsQIRCFYPE', title: 'چشمہ حیات (حضرت خضرؑ)' }, { id: 'hAY5a3diWD4', title: 'حضرت سلیمانؑ اور ملکہ سبا' },
    { id: 'J_gY7lZ7K8A', title: 'اصحاب کہف' }, { id: 'ZgOxnRGzDLs', title: 'ابلیس نے سجدہ کیوں نہ کیا' },
    { id: 'UaQIT_z9rYU', title: 'حضرت عزیرؑ کا قصہ' }, { id: 'y9O9BTPEBcw', title: 'The Fountain of Life (Eng)' },
  ],

  // تلاوت اور حمد و نعت
  tilawat: [
    { id: '0JwnkfZHeUM', title: 'تواشیع گروپ' }, { id: 'rKHMB03R6b0', title: 'دعائے امام زمانہ (عج)' },
    { id: 'JZ826oJFbik', title: 'خوبصورت قرات' }, { id: 'dqBsTyfe2I8', title: 'ھمخوانی (گروپ 1)' },
    { id: '4hnD3Xq-ca4', title: 'ھمخوانی (گروپ 2)' }, { id: 'yc-eU4HGxho', title: 'شاہ مدینہ (نعت)' },
    { id: 'VVaZhe0UGsY', title: 'معجزہ قرآن حصہ 1' }, { id: '5PkniIJXZQo', title: 'معجزہ قرآن حصہ 2' },
  ],
};