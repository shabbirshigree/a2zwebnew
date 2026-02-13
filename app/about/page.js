"use client";
import { FaHeart } from "react-icons/fa";
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';
import { founderItems, mediaRoles, services } from './aboutData'; // 🟢 ڈیٹا دوسری فائل سے آ رہا ہے

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden">
      <Navbar />
      <HeroSlider />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-12 md:py-16 text-center relative z-10 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 px-4">
          {/* 🟢 عربی فانٹ */}
          <p className="text-[#D4AF37] text-xl md:text-2xl mb-6 arabic-text">مَا شَآءَ اللّٰهُۙ - لَا قُوَّةَ اِلَّا بِاللّٰهِۚ</p>
          <img 
            src="https://res.cloudinary.com/dtqrziupt/image/upload/v1768008780/757657567_xgnsri.png" 
            alt="Haji Shabbir Ahmed Shigri"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4AF37] shadow-2xl mx-auto mb-6 object-cover hover:scale-110 transition duration-500"
          />
          {/* 🟢 نام اردو میں نمایاں */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-2 urdu-text">حاجی شبیر احمد شگری</h1>
          <p className="text-white text-sm md:text-lg max-w-3xl mx-auto tracking-wide mt-2">International Journalist | Cultural Expert | Peace Ambassador</p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <span className="bg-white/10 border border-[#D4AF37] text-white px-4 md:px-6 py-2 rounded-full urdu-text text-sm md:text-base hover:bg-[#D4AF37] hover:text-[#0f4c75] transition">خادمِ غازی عباس علمدار علیہ السلام</span>
            <span className="bg-white/10 border border-[#D4AF37] text-white px-4 md:px-6 py-2 rounded-full urdu-text text-sm md:text-base hover:bg-[#D4AF37] hover:text-[#0f4c75] transition">خادمِ امام رضا علیہ السلام</span>
          </div>
        </div>
      </section>

      {/* Founder Grid */}
      <section className="container mx-auto px-4 py-10 md:py-12 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0f4c75] mb-8 md:mb-10 urdu-text border-b-2 border-[#D4AF37] inline-block pb-2">بانی اور سرپرست</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {founderItems.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-[#0a1f30] to-[#1c3b57] border border-[#D4AF37]/50 rounded-xl p-4 md:p-6 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] transition duration-300 group transform hover:scale-105 shadow-md hover:shadow-xl flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl text-[#D4AF37] mb-3 group-hover:text-[#0a1f30] transition">{item.icon}</div>
              <h3 className="urdu-text font-bold text-white group-hover:text-[#0a1f30] text-base md:text-lg mb-1 leading-tight">{item.title}</h3>
              <p className="text-gray-400 group-hover:text-[#0a1f30]/80 text-[10px] md:text-xs mt-1 uppercase tracking-wider">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border-2 md:border-4 border-[#D4AF37] p-6 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0f4c75] urdu-text mb-2">سفرِ نور: کوہساروں سے میناروں تک</h2>
            <p className="text-gray-500 urdu-text text-lg">(ایک عہد، ایک تاریخ، ایک داستان)</p>
          </div>
          
          <div className="prose max-w-none text-right urdu-text" dir="rtl">
            <p className="text-gray-800 leading-relaxed mb-6 text-base md:text-xl text-justify md:text-right">
              <span className="text-[#0f4c75] font-bold text-xl md:text-2xl border-b border-[#D4AF37] mb-2 inline-block">پیش لفظ: حیات، جہدِ مسلسل کا استعارہ</span><br/>
              زندگی محض سانسوں کی آمد و رفت یا دنوں کے بیت جانے کا نام نہیں، بلکہ یہ تو ایک ایسا طویل، صبر آزما اور پُر مشقت سفر ہے جو انسان کو کچے راستوں کی دھول سے اٹھا کر تجربات کی بھٹی میں کندن بنا دیتا ہے۔ میری پیشہ ورانہ زندگی کا یہ سفر نصف صدی کے وسیع و عریض محیط پر پھیلا ہوا ہے۔ یہ پچاس برس محض ہندسوں کی کہانی نہیں ہے، بلکہ یہ لمحہ بہ لمحہ کی وہ ریاضتیں ہیں جس میں، میں نے اپنی ذات کو فراموش کر کے خود کو دین، دنیا اور مخلوقِ خدا کی بھلائی کے لیے وقف کر رکھا ہے۔
            </p>

            <h3 className="text-lg md:text-2xl font-bold text-[#0f4c75] mt-8 mb-3 bg-blue-50/50 inline-block p-2 rounded border-r-4 border-[#D4AF37]">بابِ اول: وادیِ سکردو، اجداد اور ابتدائی نقوش</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-xl text-justify md:text-right">
              میری زندگی کا آغاز 24 جون 1971ء کو پاکستان کے انتہائی شمالی اور حسین و جمیل خطے <strong className="text-[#0f4c75]">سکردو (گلگت بلتستان)</strong> میں ہوا۔ یہ قدرت کا شاہکار علاقہ جہاں پہاڑوں کی ہیبت، بہتے جھرنوں کی خوبصورتی، جھیلوں کا سکون اور آبشاروں کا ترنم انسان کو فطرت کے قریب کر دیتا ہے۔ انہی پہاڑوں کے دامن میں، میں نے زندگی کا پہلا سانس لیا۔
            </p>

            <h3 className="text-lg md:text-2xl font-bold text-[#0f4c75] mt-8 mb-3 bg-blue-50/50 inline-block p-2 rounded border-r-4 border-[#D4AF37]">بابِ دوم: ریڈیو پاکستان، میرا پہلا مکتب</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-xl text-justify md:text-right">
              میری زندگی میں شعور اور آگہی کا دروازہ <strong className="text-[#0f4c75]">"ریڈیو پاکستان"</strong> کے ذریعے کھلا۔ مجھے اچھی طرح یاد ہے جب میں محض آٹھ نو سال کا تھا تو سکردو میں ریڈیو پاکستان کی آزمائشی نشریات کا آغاز ہوا۔ میں سکردو کے ان چند خوش نصیب بچوں میں شامل تھا جنہیں ریڈیو پاکستان سکردو میں بچوں کے مشہور پروگرام <strong className="text-[#0f4c75]">"چاند تارے"</strong> میں شرکت کا موقع ملا۔
            </p>

            <h3 className="text-lg md:text-2xl font-bold text-[#0f4c75] mt-8 mb-3 bg-blue-50/50 inline-block p-2 rounded border-r-4 border-[#D4AF37]">بابِ سوم: ننھا صحافی اور قلم کی حرمت</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-xl text-justify md:text-right">
              شاید قدرت نے مجھے صحافت اور ادب کے لیے ہی تخلیق کیا تھا، کیونکہ بچپن ہی سے مجھے لکھنے، ڈیزائننگ اور آرٹ سے جنون کی حد تک لگاؤ تھا۔ میں اسکول کے زمانے میں بزمِ ادب اور ڈراموں کی جان ہوا کرتا تھا۔ میں نے بہت چھوٹی عمر میں روزنامہ نوائے وقت کے بچوں کے رسالے <strong className="text-[#0f4c75]">"پھول اور کلیاں"</strong> میں لکھنا شروع کر دیا تھا۔
            </p>

            <h3 className="text-lg md:text-2xl font-bold text-[#0f4c75] mt-8 mb-3 bg-blue-50/50 inline-block p-2 rounded border-r-4 border-[#D4AF37]">بابِ پنجم: خانہ فرہنگ ایران اور ثقافتی سفارت کاری</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-xl text-justify md:text-right">
              اکیسویں صدی کا سورج طلوع ہو رہا تھا اور میری زندگی بھی ایک نئے دور میں داخل ہو رہی تھی۔ شادی کے بعد میں نے "خانہ فرہنگ قونصلیٹ اسلامی جمہوریہ ایران، لاہور" میں ملازمت اختیار کی۔ یہ میرے کیریئر کا سب سے اہم، یادگار اور طویل باب ہے۔
            </p>

            <h3 className="text-lg md:text-2xl font-bold text-[#0f4c75] mt-8 mb-3 bg-blue-50/50 inline-block p-2 rounded border-r-4 border-[#D4AF37]">بابِ ہشتم: نور پروڈکشن اور اسلامی میڈیا</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-xl text-justify md:text-right">
              میڈیا کی چکا چوند میں میری سمت کا تعین میرے شفیق استاد ماسٹر بشیر صاحب (سکردو) کی ایک نصیحت نے کیا۔ میں نے <strong className="text-[#0f4c75]">"نور پروڈکشن پاکستان"</strong> کی بنیاد رکھی۔ میرا مقصد میڈیا کو ہتھیار بنا کر دین کی خدمت کرنا تھا۔
            </p>

            <h3 className="text-lg md:text-2xl font-bold text-[#0f4c75] mt-8 mb-3 bg-blue-50/50 inline-block p-2 rounded border-r-4 border-[#D4AF37]">بابِ نہم: نور القرآن - میرا عظیم ترین منصوبہ</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-xl text-justify md:text-right">
              <strong className="text-[#0f4c75]">"نور القرآن پراجیکٹ"</strong> یہ میری زندگی کا سب سے بڑا سرمایہ، میری محنت کا حاصل اور میری آخرت کا توشہ ہے۔ "نور القرآن" دنیا کا پہلا منفرد ویژول قرآن (Visual Quran) پراجیکٹ ہے۔
            </p>

            <div className="text-center mt-10">
               <p className="text-[#0f4c75] text-xl font-bold border-t border-[#D4AF37] inline-block pt-4 px-8">(تحریر: حاجی شبیر احمد شگری) ❤️</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Roles */}
      <section className="bg-gradient-to-r from-[#0a1f30] to-[#163b55] py-10 md:py-16 relative z-10 border-t-2 border-b-2 border-[#D4AF37]/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-10 urdu-text">میڈیا، ریڈیو اور ٹی وی کیریئر</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {mediaRoles.map((role, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-xl p-4 md:p-6 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B8860B] transition duration-300 group">
                <div className="text-3xl md:text-4xl text-[#D4AF37] mb-3 group-hover:text-white flex justify-center">{role.icon}</div>
                <h3 className="text-white group-hover:text-[#0f4c75] font-bold text-sm md:text-lg mb-1">{role.title}</h3>
                <p className="text-gray-400 group-hover:text-[#0f4c75]/90 text-xs md:text-sm urdu-text">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="text-center mb-10">
           <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c75] urdu-text border-b-2 border-[#D4AF37] inline-block pb-2">خدمات اور کامیابیاں</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div key={i} className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-l-4 ${service.color === 'green' ? 'border-green-500' : service.color === 'red' ? 'border-red-500' : 'border-[#D4AF37]'}`}>
              <div className={`${service.color === 'green' ? 'bg-green-50' : service.color === 'red' ? 'bg-red-50' : 'bg-blue-50'} p-4 md:p-6 flex items-center gap-3 md:gap-4`}>
                <div className={`text-2xl md:text-3xl ${service.color === 'green' ? 'text-green-600' : service.color === 'red' ? 'text-red-600' : 'text-[#0f4c75]'}`}>
                  {service.icon}
                </div>
                <h3 className={`font-bold text-base md:text-lg ${service.color === 'green' ? 'text-green-700' : service.color === 'red' ? 'text-red-700' : 'text-[#0f4c75]'}`}>
                  {service.title}
                </h3>
              </div>
              <div className="p-4 md:p-6">
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex gap-2 md:gap-3 text-gray-700 text-xs md:text-sm leading-relaxed">
                      <span className={`flex-shrink-0 font-bold ${service.color === 'green' ? 'text-green-600' : service.color === 'red' ? 'text-red-600' : 'text-[#D4AF37]'}`}>➤</span>
                      {/* 🟢 اردو کلاس */}
                      <span className="urdu-text text-sm md:text-base leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] rounded-3xl p-6 md:p-12 text-white border-2 md:border-4 border-[#D4AF37] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
             <div className="flex-1 text-center md:text-right order-2 md:order-1" dir="rtl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 urdu-text flex items-center justify-center md:justify-start gap-3"><FaHeart className="text-[#D4AF37]" /> میرا مقصد</h2>
                <p className="text-base md:text-xl leading-relaxed urdu-text text-justify md:text-right">
                  دین، تہذیب اور انسانیت کی خدمت کے ذریعے عالمی امن اور بھائی چارے کا فروغ دینا۔ میڈیا، قلم اور تصویری فن کو اسلام اور انسانیت کی ترقی کے لیے استعمال کرنا۔ "نور القرآن" کا نور ہر دل تک پہنچانا۔
                </p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}