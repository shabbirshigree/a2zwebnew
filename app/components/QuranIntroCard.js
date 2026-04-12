import React from 'react';
import { FaYoutube, FaPlay, FaStar, FaBookOpen } from 'react-icons/fa';

const QuranIntroCard = ({ lang = 'ur', phase = 1 }) => {
  const content = {
    0: {
      ur: {
        title: "نور القرآن ویژول (بصری) پراجیکٹ",
        body: "قرآن کریم کو صرف چوم کر اونچے طاقوں میں رکھ دینا اس کا اصل احترام نہیں ہے، بلکہ کلامِ مجید کو پڑھنا، سمجھنا اور اس پر عمل کرنا ہی اصل حقِ بندگی ہے۔ اس مقصد کے لیے ہم نے ایک منفرد کوشش کی ہے کہ مکمل قرآن کریم کو بصری (Video) انداز میں پیش کیا جائے۔\nاس پراجیکٹ میں آیاتِ مبارکہ کو متعلقہ مناظر کی شکل میں پیش کرنے کی کوشش کی جائے گی، جس سے آیات کے مفہوم کو سمجھنے میں نہایت آسانی پیدا ہو جائے گی۔ اس سلسلے میں ہم \"شارٹس ویڈیوز\" کی شکل میں قرآنی کلپس پہلے ہی شیئر کر رہے ہیں، جن میں عوام کی بے پناہ دلچسپی نے یہ ثابت کیا کہ لوگ قرآن کو سمجھنا چاہتے ہیں۔ اب ہم \"نور القرآن پراجیکٹ\" کے تحت مکمل قرآن مجید کو ان شاء اللہ ہائی کوالٹی ویڈیوز کی شکل میں پیش کریں گے۔",
        cta: "روزانہ کے قرآنی کلپس حاصل کرنے کے لئے سبسکرائب کریں",
        link: "https://wa.me/923334491715",
        ceo: "حاجی شبیر احمد شگری (سی ای او نور القرآن پراجیکٹ)",
        dir: "rtl"
      },
      en: {
        title: "Noor-ul-Quran Visual Project",
        body: "True respect for the Holy Quran is not just about kissing it and placing it on high shelves, but reading, understanding, and acting upon it is the true essence of devotion. For this purpose, we have made a unique and pioneering effort to present the complete Quran in a visual (video) format.\nIn this project, the blessed verses will be presented through relevant scenes, making it extremely easy for the reader to understand the meanings. We are already sharing Quranic clips in the form of Short videos, and the immense public interest proves that people want to understand the Quran. Now, under the Noor-ul-Quran Project, we will Insha'Allah present the complete Quran in high-quality standard videos.",
        cta: "Subscribe to receive daily Quranic clips",
        link: "https://wa.me/923334491715",
        ceo: "Haji Shabbir Ahmed Shigri (CEO Noor-ul-Quran Project)",
        dir: "ltr"
      },
      fa: {
        title: "پروژه بصری (تصویری) نورالقرآن",
        body: "احترام واقعی به قرآن کریم تنها در بوسیدن و نهادن آن بر طاقچه‌های بلند نیست، بلکه خواندن، فهمیدن و عمل به آن، حق بندگی است. ما با این هدف، تلاشی منحصر به فرد و پیشگامانه انجام داده‌ایم تا کل قرآن کریم را به صورت تصویری (ویدیو) ارائه دهیم.\nدر این پروژه، آیات مبارک از طریق صحنه‌های مرتبط ارائه می‌شوند تا درک مفاهیم برای مخاطب بسیار آسان شود. ما در حال حاضر کلیپ‌های قرآنی را در قالب ویدیوهای کوتاه (Shorts) به اشتراک می‌گذاریم و استقبال پرشور مردم ثابت کرد که همگان تشنه درک قرآن هستند. اکنون تحت پروژه نورالقرآن، کل قرآن را ان‌شاءالله در قالب ویدیوهایی استاندارد و با کیفیت ارائه خواهیم داد.",
        cta: "برای دریافت روزانه کلیپ‌های قرآنی سابسکرایب کنید",
        link: "https://wa.me/923334491715",
        ceo: "حاجی شبیر احمد شگری (مدیر پروژه نورالقرآن)",
        dir: "rtl"
      }
    },
    1: {
      ur: {
        title: "نور القرآن (مکمل): مرحلہ اول (عربی – اردو)",
        body: "پروجیکٹ کی تفصیل: پہلے مرحلے میں مکمل قرآن مجید کو 30 سپاروں اور 30 ویڈیوز کی شکل میں ایک منفرد اور جدید جدت کے ساتھ تیار کیا گیا ہے۔ روایتی انداز سے ہٹ کر اس میں بصری و سماعتی (Audio-Visual) معیار کا خاص خیال رکھا گیا ہے تاکہ تلاوت اور فہمِ قرآن کا ایک نیا تجربہ پیش کیا جا سکے۔\nاہم خصوصیات: قرأتِ مبارکہ: بین الاقوامی شہرت یافتہ قاری، استاد پرہیزگار کی مسحور کن آواز اور سکرین پر واضح عربی متن۔\nاردو ترجمہ: مفسرِ قرآن علامہ شیخ محسن علی نجفی (مرحوم) کا مستند ترجمہ اور اردو متن۔\nاردو صداکاری: اردو ترجمہ پیش کرنے کی سعادت خاکسار حاجی شبیر احمد شگری نے حاصل کی ہے۔\nپیشکش: یہ قرآنی ویڈیوز انتہائی خوبصورت فریمز اور اعلیٰ معیار کی پروڈکشن کے ساتھ تیار کی گئی ہیں، جو نور پروڈکشنز کا ایک خاص اعزاز ہے۔",
        cta: "چینل سبسکرائب کرنے کے لئے یہاں کلک کریں",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "حاجی شبیر احمد شگری (سی ای او نور القرآن پراجیکٹ)",
        dir: "rtl"
      },
      en: {
        title: "Noor-ul-Quran (Complete): Phase I (Arabic – Urdu)",
        body: "Project Description: In the first phase, the complete Quran has been prepared in 30 parts and 30 videos with a unique and modern innovation. Moving away from traditional methods, special attention has been given to audio-visual standards to present a new experience of recitation and understanding of the Quran.\nKey Features:\nDivine Recitation: The soul-stirring voice of internationally renowned Qari, Ustad Parhizgar, and clear Arabic text on screen.\nUrdu Translation: Authentic translation and Urdu text by the commentator of the Quran, Allama Sheikh Mohsin Ali Najafi (Late).\nUrdu Voice-over: The honor of presenting the Urdu translation has been achieved by Haji Shabbir Ahmed Shigri.\nPresentation: These Quranic videos are prepared with extremely beautiful frames and high-quality production, which is a special pride of Noor Productions.",
        cta: "Click here to subscribe to the channel",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "Haji Shabbir Ahmed Shigri (CEO Noor-ul-Quran Project)",
        dir: "ltr"
      },
      fa: {
        title: "نورالقرآن (کامل): مرحله اول (عربی – اردو)",
        body: "جزئیات پروژه: در مرحله اول، کل قرآن کریم در قالب ۳۰ جزء و ۳۰ ویدیو با نوآوری خاص و مدرن تهیه شده است. فراتر از سبک‌های سنتی، در این اثر بر استانداردهای بصری و شنیداری (Audio-Visual) تمرکز شده است تا تجربه‌ای تازه از تلاوت و فهم قرآن ارائه گردد.\nویژگی‌های کلیدی:\nقرائت مبارک: صدای دلنشین قاری بین‌المللی، استاد پرهیزگار و متن واضح عربی بر روی صفحه.\nترجمه اردو: ترجمه معتبر و متن اردو از مفسر قرآن، علامه شیخ محسن علی نجفی (ره).\nصداپیشگی اردو: افتخار ارائه ترجمه اردو نصیب اینجانب، حاجی شبیر احمد شگری شده است.\nارائه: این ویدیوهای قرآنی در قاب‌های بسیار زیبا و با تولید باکیفیت تهیه شده‌اند که افتخاری ویژه برای نور پروداکشنز محسوب می‌شود.",
        cta: "برای سابسکرایب کانال اینجا کلیک کنید",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "حاجی شبیر احمد شگری (مدیر پروژه نورالقرآن)",
        dir: "rtl"
      }
    },
    2: {
      ur: {
        title: "نور القرآن (مکمل): مرحلہ دوم (اردو)",
        body: "پروجیکٹ کی تفصیل: دوسرے مرحلے میں مکمل قرآن مجید کو 30 سپاروں اور 30 ویڈیوز کی شکل میں اردو زبان میں تیار کیا گیا ہے۔ اس مرحلے میں صرف اردو ترجمہ اور اردو تلاوت شامل ہے تاکہ اردو بولنے والے سامعین کو قرآن کریم کی سمجھ میں آسانی پیدا ہو۔\nاہم خصوصیات: اردو تلاوت: بین الاقوامی شہرت یافتہ قاری، استاد پرہیزگار کی اردو میں تلاوت۔\nاردو ترجمہ: مفسرِ قرآن علامہ شیخ محسن علی نجفی (مرحوم) کا مستند ترجمہ۔\nاردو صداکاری: اردو ترجمہ پیش کرنے کی سعادت خاکسار حاجی شبیر احمد شگری نے حاصل کی ہے۔\nپیشکش: یہ قرآنی ویڈیوز انتہائی خوبصورت فریمز اور اعلیٰ معیار کی پروڈکشن کے ساتھ تیار کی گئی ہیں۔",
        cta: "چینل سبسکرائب کرنے کے لئے یہاں کلک کریں",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "حاجی شبیر احمد شگری (سی ای او نور القرآن پراجیکٹ)",
        dir: "rtl"
      },
      en: {
        title: "Noor-ul-Quran (Complete): Phase II (Urdu)",
        body: "Project Description: In the second phase, the complete Quran has been prepared in 30 parts and 30 videos in Urdu language. This phase includes only Urdu translation and Urdu recitation to make it easier for Urdu-speaking listeners to understand the Quran.\nKey Features: Urdu Recitation: Urdu recitation by internationally renowned Qari, Ustad Parhizgar.\nUrdu Translation: Authentic translation by the commentator of the Quran, Allama Sheikh Mohsin Ali Najafi (Late).\nUrdu Voice-over: The honor of presenting the Urdu translation has been achieved by Haji Shabbir Ahmed Shigri.\nPresentation: These Quranic videos are prepared with extremely beautiful frames and high-quality production.",
        cta: "Click here to subscribe to the channel",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "Haji Shabbir Ahmed Shigri (CEO Noor-ul-Quran Project)",
        dir: "ltr"
      },
      fa: {
        title: "نورالقرآن (کامل): مرحله دوم (اردو)",
        body: "جزئیات پروژه: در مرحله دوم، کل قرآن کریم در قالب ۳۰ جزء و ۳۰ ویدیو به زبان اردو تهیه شده است. این مرحله تنها شامل ترجمه و تلاوت اردو است تا درک قرآن برای مخاطبان اردوزبان آسان‌تر شود.\nویژگی‌های کلیدی: تلاوت اردو: تلاوت به زبان اردو توسط قاری بین‌المللی، استاد پرهیزگار.\nترجمه اردو: ترجمه معتبر از مفسر قرآن، علامه شیخ محسن علی نجفی (ره).\nصداپیشگی اردو: افتخار ارائه ترجمه اردو نصیب اینجانب، حاجی شبیر احمد شگری شده است.\nارائه: این ویدیوهای قرآنی در قاب‌های بسیار زیبا و با تولید باکیفیت تهیه شده‌اند.",
        cta: "برای سابسکرایب کانال اینجا کلیک کنید",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "حاجی شبیر احمد شگری (مدیر پروژه نورالقرآن)",
        dir: "rtl"
      }
    },
    3: {
      ur: {
        title: "نورِ قصص القرآن",
        body: "قرآن مجید ہماری ہدایت کا سرچشمہ ہے اور اس میں بیان کیے گئے واقعات ہمارے لیے بہترین سبق آموز درس رکھتے ہیں۔ یہ صرف قصے نہیں بلکہ عملی زندگی کے لیے مشعلِ راہ ہیں۔ اسی مقصد کے پیشِ نظر ہم نے \"نورِ قصص القرآن\" کے نام سے قرآنی قصوں کی ویڈیوز بنانے کا سلسلہ شروع کیا ہے۔\nان ویڈیوز میں قرآن کریم کے مشہور واقعات کو بصری مناظر (Visuals) کی شکل میں پیش کیا گیا ہے۔ ہماری کوشش ہے کہ ان شاء اللہ قرآن کریم کے تمام اہم واقعات کو اسی طرح ویڈیوز کی صورت میں محفوظ کیا جائے۔ یہاں ہماری تیار کی گئی چند جھلکیاں ملاحظہ فرمائیں:",
        cta: "چینل سبسکرائب کرنے کے لئے یہاں کلک کریں",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcKg6NISQO33OXnk8JyOJET-",
        ceo: "حاجی شبیر احمد شگری (سی ای او نور القرآن پراجیکٹ)",
        dir: "rtl"
      },
      en: {
        title: "Noor-e-Qisas-ul-Quran",
        body: "The Holy Quran is the source of our guidance, and the stories mentioned in it hold great moral lessons for us. These are not just stories but a roadmap for practical life. With this goal, we have started the series of producing videos of Quranic stories named Noor-e-Qisas-ul-Quran.\nIn this series, we have prepared videos of several famous events from the Quran where these stories are presented through visuals. Insha'Allah, the aim is to prepare videos for all stories of the Holy Quran. Watch some of our produced videos here.",
        cta: "Click here to subscribe to the channel",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcKg6NISQO33OXnk8JyOJET-",
        ceo: "Haji Shabbir Ahmed Shigri (CEO Noor-ul-Quran Project)",
        dir: "ltr"
      },
      fa: {
        title: "نورِ قصص القرآن",
        body: "قرآن کریم چشمه هدایت ماست و داستان‌های بیان شده در آن درس‌های بسیار آموزنده‌ای برای ما دارد. این‌ها فقط قصه نیستند، بلکه الگویی برای زندگی عملی هستند. با همین هدف، ما مجموعه‌ای از ویدیوهای داستان‌های قرآنی را با نام \"نورِ قصص القرآن\" آغاز کرده‌ایم.\nدر این سلسله، ویدیوهای چندین واقعه مشهور قرآنی را تهیه کرده‌ایم که در آن‌ها داستان‌ها به صورت تصویری ارائه شده‌اند. ان‌شاءالله تلاش ما این است که ویدیوهای تمام داستان‌های قرآن کریم را آماده کنیم. چند نمونه از ویدیوهای ما را اینجا ملاحظه فرمایید.",
        cta: "برای سابسکرایب کانال اینجا کلیک کنید",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcKg6NISQO33OXnk8JyOJET-",
        ceo: "حاجی شبیر احمد شگری (مدیر پروژه نورالقرآن)",
        dir: "rtl"
      }
    },
    2: {
      ur: {
        title: "نور القرآن (مکمل): مرحلہ دوم (صرف اردو)",
        body: "پروجیکٹ کی تفصیل: دوسرے مرحلے میں مکمل قرآن مجید کو 30 سپاروں اور 30 ویڈیوز کی شکل میں، ایک منفرد انداز میں صرف اردو ترجمے کی صورت میں تیار کیا گیا ہے۔ عوامی فرمائش پر تیار کی گئی ان ویڈیوز کے ذریعے فہمِ قرآن کا ایک نیا تجربہ پیش کیا جا رہا ہے۔ یہ ان لوگوں کے لیے ہیں جو قرآن کریم کو صرف پڑھنا یا سننا نہیں بلکہ گہرائی سے سمجھنا چاہتے ہیں۔\nاہم خصوصیات: اردو ترجمہ و متن: مفسرِ قرآن علامہ شیخ محسن علی نجفی (مرحوم) کا مستند ترجمہ اور واضح اردو متن۔\nاردو صداکاری: اردو ترجمے کو آواز کی شکل میں پیش کرنے کی سعادت خاکسار حاجی شبیر احمد شگری نے حاصل کی ہے۔\nپیشکش: یہ قرآنی ویڈیوز انتہائی خوبصورت فریمز اور اعلیٰ معیار کی پروڈکشن کے ساتھ تیار کی گئی ہیں، جو نور پروڈکشنز کا ایک خاص اعزاز ہے۔",
        cta: "چینل سبسکرائب کرنے کے لئے یہاں کلک کریں",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "حاجی شبیر احمد شگری (سی ای او نور القرآن پراجیکٹ)",
        dir: "rtl"
      },
      en: {
        title: "Noor-ul-Quran (Complete): Phase II (Urdu Only)",
        body: "Project Description: In the second phase, the complete Quran has been prepared in 30 parts and 30 videos in a unique format featuring only Urdu translation. Created in response to public demand, these videos present a new experience of understanding the Quran. These are for those who not only want to read or listen to the Quran, but wish to understand it deeply.\nKey Features:\nUrdu Translation & Text: Authentic translation and clear Urdu text by the commentator of the Quran, Allama Sheikh Mohsin Ali Najafi (Late).\nUrdu Voice-over: The honor of presenting the Urdu translation in audio form has been achieved by Haji Shabbir Ahmed Shigri.\nPresentation: These Quranic videos are prepared with extremely beautiful frames and high-quality production, which is a special pride of Noor Productions.",
        cta: "Click here to subscribe to the channel",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "Haji Shabbir Ahmed Shigri (CEO Noor-ul-Quran Project)",
        dir: "ltr"
      },
      fa: {
        title: "نورالقرآن (کامل): مرحله دوم (فقط اردو)",
        body: "جزئیات پروژه: در مرحله دوم، کل قرآن کریم در قالب ۳۰ جزء و ۳۰ ویدیو به شکل منحصر بفرد، تنها با ترجمه اردو تهیه شده است. این ویدیوها به درخواست عمومی ساخته شده‌اند و تجربه‌ای تازه از فهم قرآن را ارائه می‌دهند. این برای کسانی است که نه‌تنها می‌خواهند قرآن را بخوانند یا بشنوند، بلکه می‌خواهند آن را عمیقاً بفهمند.\nویژگی‌های کلیدی:\nترجمه و متن اردو: ترجمه معتبر و متن واضح اردو از مفسر قرآن، علامه شیخ محسن علی نجفی (ره).\nصداپیشگی اردو: افتخار ارائه ترجمه اردو به شکل صوتی نصیب آقای حاجی شبیر احمد شگری شده است.\nارائه: این ویدیوهای قرآنی با فریم‌های بسیار زیبا و تولید با کیفیت بالا تهیه شده‌اند که افتخار خاصی برای نور پروداکشنز محسوب می‌شود.",
        cta: "برای سابسکرایب کانال اینجا کلیک کنید",
        link: "https://youtube.com/playlist?list=PLVLSFOIjQLcIo1bliZt6g6Vzh1kmurEyp",
        ceo: "حاجی شبیر احمد شگری (مدیر پروژه نورالقرآن)",
        dir: "rtl"
      }
    }
  };

  const data = content[phase] && content[phase][lang] ? content[phase][lang] : content[1][lang];

  // Determine CEO name alignment based on language
  const ceoAlign = lang === 'en' ? 'right' : 'left';

  return (
    <div style={{ direction: data.dir, margin: '20px auto', maxWidth: '900px' }}>
      <div style={{
        background: 'linear-gradient(145deg, #fef7e0, #f5e6a3, #fef7e0)',
        border: '3px solid #D4AF37',
        borderRadius: '20px',
        padding: '35px',
        boxShadow: '0 15px 40px rgba(212, 175, 55, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.8)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 25px 60px rgba(212, 175, 55, 0.4), inset 0 2px 15px rgba(255, 255, 255, 0.9)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.8)';
      }}
      >
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, #D4AF37, transparent)',
          borderRadius: '50%',
          opacity: '0.3'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-15px',
          left: '-15px',
          width: '40px',
          height: '40px',
          background: 'radial-gradient(circle, #1a472a, transparent)',
          borderRadius: '50%',
          opacity: '0.2'
        }}></div>

        {/* ہیڈنگ */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <div style={{
            background: 'linear-gradient(45deg, #D4AF37, #b8860b)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
          }}>
            <FaBookOpen style={{ color: 'white', fontSize: '20px' }} />
          </div>
          <h2 style={{
            color: '#1a472a',
            borderBottom: '3px solid #D4AF37',
            paddingBottom: '12px',
            margin: '0',
            fontSize: '28px',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            {data.title}
          </h2>
        </div>

        {/* مواد */}
        <p style={{
          whiteSpace: 'pre-line',
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#2d3748',
          marginBottom: '25px',
          textAlign: 'justify',
          textShadow: '0 1px 1px rgba(0,0,0,0.05)'
        }}>
          {data.body}
        </p>

        {/* لنک اور فوٹر */}
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a href={data.link} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '15px 30px',
            background: 'linear-gradient(45deg, #1a472a, #2d5a3d)',
            color: '#fff',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginBottom: '20px',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(26, 71, 42, 0.4)',
            border: '2px solid #D4AF37'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(26, 71, 42, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(26, 71, 42, 0.4)';
          }}
          >
            <FaYoutube />
            {data.cta}
            <FaPlay style={{ fontSize: '12px' }} />
          </a>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: ceoAlign === 'right' ? 'flex-end' : 'flex-start',
            gap: '10px',
            marginTop: '15px'
          }}>
            <FaStar style={{ color: '#D4AF37', fontSize: '16px' }} />
            <p style={{
              fontWeight: 'bold',
              color: '#1a472a',
              margin: '0',
              fontSize: '16px',
              textShadow: '0 1px 1px rgba(0,0,0,0.1)'
            }}>
              {data.ceo}
            </p>
            <FaStar style={{ color: '#D4AF37', fontSize: '16px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranIntroCard;