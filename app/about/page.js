"use client";
import { useState } from 'react';
import { FaHeart, FaHandshake, FaTrophy, FaGlobe, FaQuran, FaAward, FaMedal, FaMicrophone, FaTv, FaVideo, FaNewspaper, FaBriefcase, FaUser, FaPenNib, FaLandmark } from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const founderItems = [
    { icon: <FaQuran />, title: "نور القرآن پراجیکٹ", desc: "World's First Visual Quran" },
    { icon: <FaTv />, title: "نور پروڈکشنز", desc: "Islamic Media Network" },
    { icon: <FaHandshake />, title: "انجمن دوستی پاک ایران", desc: "Friendship Association" },
    { icon: <FaGlobe />, title: "پاک ایران ویب سائٹ", desc: "Web Portal (Urdu/Farsi)" },
    { icon: <FaGlobe />, title: "ٹریڈ اینڈ کلچر فیڈریشن", desc: "Federation of Culture & Trade" },
    { icon: <FaTrophy />, title: "بانی: پاک ایران ٹورزم", desc: "First Time in Pakistan" },
    { icon: <FaTv />, title: "آپارات چینل (فارسی)", desc: "Temporarily Unavailable" },
    { icon: <FaQuran />, title: "طفلانِ نور چینل", desc: "Kids Entertainment Channel" }
  ];

  const mediaRoles = [
    { icon: <FaMicrophone />, title: "Radio Host", desc: "ریڈیو پاکستان سکردو (FM 93)" },
    { icon: <FaTv />, title: "TV Anchor", desc: "سٹار ایشیا (پروگرام رہنما)" },
    { icon: <FaVideo />, title: "Producer", desc: "ڈاکومنٹریز و علامہ اقبال سیریل" },
    { icon: <FaNewspaper />, title: "Journalist", desc: "45 سالہ صحافتی تجربہ" }
  ];

  const services = [
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      <HeroSlider />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-16 text-center relative z-10 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10">
          <p className="text-[#D4AF37] text-lg md:text-xl mb-4 font-serif italic">مَا شَآءَ اللّٰهُۙ - لَا قُوَّةَ اِلَّا بِاللّٰهِۚ</p>
          <img 
            src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768008780/757657567_xgnsri.png" 
            alt="Haji Shabbir Ahmed Shigri"
            className="w-32 h-32 rounded-full border-4 border-[#D4AF37] shadow-2xl mx-auto mb-6 object-cover hover:scale-110 transition duration-500"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif mb-4">Haji Shabbir Ahmed Shigri</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">International Journalist | Cultural Expert | Peace Ambassador</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 border-2 border-[#D4AF37] text-white px-6 py-2 rounded-full font-serif text-sm md:text-base">خادمِ غازی عباس علمدار علیہ السلام</span>
            <span className="bg-white/20 border-2 border-[#D4AF37] text-white px-6 py-2 rounded-full font-serif text-sm md:text-base">خادمِ امام رضا علیہ السلام</span>
          </div>
        </div>
      </section>

      {/* Founder Grid */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0f4c75] mb-10 font-serif">بانی اور سرپرست</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {founderItems.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-[#0a1f30] to-[#1c3b57] border-2 border-[#D4AF37] rounded-xl p-6 text-center hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] transition duration-300 group transform hover:scale-105 shadow-lg hover:shadow-2xl">
              <div className="text-4xl text-[#D4AF37] mb-3 group-hover:text-[#0a1f30] transition flex justify-center">{item.icon}</div>
              <h3 className="font-serif font-bold text-white group-hover:text-[#0a1f30] text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-gray-300 group-hover:text-[#0a1f30]/70 text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border-4 border-[#D4AF37] p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c75] text-center font-serif mb-2">سفرِ نور: کوہساروں سے میناروں تک</h2>
          <p className="text-center text-gray-600 font-serif mb-8 italic">(ایک عہد، ایک تاریخ، ایک داستان)</p>
          
          <div className="prose max-w-none text-right" dir="rtl">
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
              <strong>پیش لفظ: حیات، جہدِ مسلسل کا استعارہ</strong><br/>
              زندگی محض سانسوں کی آمد و رفت یا دنوں کے بیت جانے کا نام نہیں، بلکہ یہ تو ایک ایسا طویل، صبر آزما اور پُر مشقت سفر ہے جو انسان کو کچے راستوں کی دھول سے اٹھا کر تجربات کی بھٹی میں کندن بنا دیتا ہے۔ میری پیشہ ورانہ زندگی کا یہ سفر نصف صدی کے وسیع و عریض محیط پر پھیلا ہوا ہے۔ یہ پچاس برس محض ہندسوں کی کہانی نہیں ہے، بلکہ یہ لمحہ بہ لمحہ کی وہ ریاضتیں ہیں جس میں، میں نے اپنی ذات کو فراموش کر کے خود کو دین، دنیا اور مخلوقِ خدا کی بھلائی کے لیے وقف کر رکھا ہے۔
            </p>

            <h3 className="text-xl font-bold text-[#0f4c75] mt-8 mb-4 border-b-2 border-[#D4AF37] pb-2">بابِ اول: وادیِ سکردو، اجداد اور ابتدائی نقوش</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              میری زندگی کا آغاز 24 جون 1971ء کو پاکستان کے انتہائی شمالی اور حسین و جمیل خطے <strong>سکردو (گلگت بلتستان)</strong> میں ہوا۔ یہ قدرت کا شاہکار علاقہ جہاں پہاڑوں کی ہیبت، بہتے جھرنوں کی خوبصورتی، جھیلوں کا سکون اور آبشاروں کا ترنم انسان کو فطرت کے قریب کر دیتا ہے۔ انہی پہاڑوں کے دامن میں، میں نے زندگی کا پہلا سانس لیا۔
            </p>

            <h3 className="text-xl font-bold text-[#0f4c75] mt-8 mb-4 border-b-2 border-[#D4AF37] pb-2">بابِ دوم: ریڈیو پاکستان، میرا پہلا مکتب</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              میری زندگی میں شعور اور آگہی کا دروازہ <strong>"ریڈیو پاکستان"</strong> کے ذریعے کھلا۔ مجھے اچھی طرح یاد ہے جب میں محض آٹھ نو سال کا تھا تو سکردو میں ریڈیو پاکستان کی آزمائشی نشریات کا آغاز ہوا۔ میں سکردو کے ان چند خوش نصیب بچوں میں شامل تھا جنہیں ریڈیو پاکستان سکردو میں بچوں کے مشہور پروگرام <strong>"چاند تارے"</strong> میں شرکت کا موقع ملا۔
            </p>

            <h3 className="text-xl font-bold text-[#0f4c75] mt-8 mb-4 border-b-2 border-[#D4AF37] pb-2">بابِ سوم: ننھا صحافی اور قلم کی حرمت</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              شاید قدرت نے مجھے صحافت اور ادب کے لیے ہی تخلیق کیا تھا، کیونکہ بچپن ہی سے مجھے لکھنے، ڈیزائننگ اور آرٹ سے جنون کی حد تک لگاؤ تھا۔ میں اسکول کے زمانے میں بزمِ ادب اور ڈراموں کی جان ہوا کرتا تھا۔ میں نے بہت چھوٹی عمر میں روزنامہ نوائے وقت کے بچوں کے رسالے <strong>"پھول اور کلیاں"</strong> میں لکھنا شروع کر دیا تھا۔
            </p>

            <h3 className="text-xl font-bold text-[#0f4c75] mt-8 mb-4 border-b-2 border-[#D4AF37] pb-2">بابِ پنجم: خانہ فرہنگ ایران اور ثقافتی سفارت کاری</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              اکیسویں صدی کا سورج طلوع ہو رہا تھا اور میری زندگی بھی ایک نئے دور میں داخل ہو رہی تھی۔ شادی کے بعد میں نے "خانہ فرہنگ قونصلیٹ اسلامی جمہوریہ ایران، لاہور" میں ملازمت اختیار کی۔ یہ میرے کیریئر کا سب سے اہم، یادگار اور طویل باب ہے۔
            </p>

            <h3 className="text-xl font-bold text-[#0f4c75] mt-8 mb-4 border-b-2 border-[#D4AF37] pb-2">بابِ ہشتم: نور پروڈکشن اور اسلامی میڈیا</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              میڈیا کی چکا چوند میں میری سمت کا تعین میرے شفیق استاد ماسٹر بشیر صاحب (سکردو) کی ایک نصیحت نے کیا۔ میں نے <strong>"نور پروڈکشن پاکستان"</strong> کی بنیاد رکھی۔ میرا مقصد میڈیا کو ہتھیار بنا کر دین کی خدمت کرنا تھا۔
            </p>

            <h3 className="text-xl font-bold text-[#0f4c75] mt-8 mb-4 border-b-2 border-[#D4AF37] pb-2">بابِ نہم: نور القرآن - میرا عظیم ترین منصوبہ</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"نور القرآن پراجیکٹ"</strong> یہ میری زندگی کا سب سے بڑا سرمایہ، میری محنت کا حاصل اور میری آخرت کا توشہ ہے۔ "نور القرآن" دنیا کا پہلا منفرد ویژول قرآن (Visual Quran) پراجیکٹ ہے۔
            </p>

            <p className="text-center font-serif text-[#0f4c75] mt-10 text-lg font-bold">
              (تحریر: حاجی شبیر احمد شگری) ❤️
            </p>
          </div>
        </div>
      </section>

      {/* Media Roles */}
      <section className="bg-gradient-to-r from-[#0a1f30] to-[#163b55] py-12 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-[#D4AF37] mb-12 font-serif">میڈیا، ریڈیو اور ٹی وی کیریئر</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mediaRoles.map((role, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-xl p-6 text-center hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] transition duration-300 group">
                <div className="text-4xl text-[#D4AF37] mb-4 group-hover:text-white flex justify-center">{role.icon}</div>
                <h3 className="text-white group-hover:text-[#0f4c75] font-bold text-lg mb-2">{role.title}</h3>
                <p className="text-gray-300 group-hover:text-[#0f4c75]/80 text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-center text-3xl font-bold text-[#0f4c75] mb-12 font-serif">خدمات اور کامیابیاں</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 ${service.color === 'green' ? 'border-green-500' : service.color === 'red' ? 'border-red-500' : 'border-[#D4AF37]'}`}>
              <div className={`${service.color === 'green' ? 'bg-green-50' : service.color === 'red' ? 'bg-red-50' : 'bg-blue-50'} p-6 flex items-center gap-4`}>
                <div className={`text-3xl ${service.color === 'green' ? 'text-green-600' : service.color === 'red' ? 'text-red-600' : 'text-[#0f4c75]'}`}>
                  {service.icon}
                </div>
                <h3 className={`font-bold text-lg font-serif ${service.color === 'green' ? 'text-green-700' : service.color === 'red' ? 'text-red-700' : 'text-[#0f4c75]'}`}>
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                      <span className={`flex-shrink-0 font-bold ${service.color === 'green' ? 'text-green-600' : service.color === 'red' ? 'text-red-600' : 'text-[#D4AF37]'}`}>➤</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] rounded-3xl p-12 text-white border-4 border-[#D4AF37] shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 font-serif flex items-center gap-3"><FaHeart className="text-[#D4AF37]" /> میرا مقصد</h2>
          <p className="text-lg leading-relaxed text-right" dir="rtl">
            دین، تہذیب اور انسانیت کی خدمت کے ذریعے عالمی امن اور بھائی چارے کا فروغ دینا۔ میڈیا، قلم اور تصویری فن کو اسلام اور انسانیت کی ترقی کے لیے استعمال کرنا۔ "نور القرآن" کا نور ہر دل تک پہنچانا۔
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}