import React from 'react';

const FarsiArticleDetail = ({ article }) => {
  // اگر article پاس نہ ہو تو ڈیفالٹ ڈیٹا استعمال کریں
  const columnData = article || {
    id: "123",
    title: "پیروزی حسینیت",
    author: "نویسنده: حاجی شبیر احمد شگری",
    date: "14 آوریل 2026",
    production: "Noor Productions",
titleImage: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1776189070/qaumiawaz_2026-03-29_gb9hewxj_iran-israel_ip5ewx.avif",
    // اخبارات اور ان کے لنکس
    newspapers: [
      { 
        name: "اسلام ٹائمز (Islam Times)", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152000/Islamtimes_2026-04-11_xjpgnk.png",
        onlineUrl: "https://www.islamtimes.com/ur/article/1273482/%D8%AD%D8%B3%DB%8C%D9%86%DB%8C%D8%AA-%DA%A9%DB%8C-%D9%81%D8%AA%D8%AD" 
      },
      { 
        name: " (Daily Mashriq)", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152000/daily_mashriq_2026-04-09_d5ay1j.jpg",
        onlineUrl: "https://www.mashriq.tv/" 
      },
      { 
        name: "روزنامہ زمانہ (Zamana News)", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152000/daily_zamana_news_2026-04-09_wlvent.jpg",
        onlineUrl: "https://zamananeuz.com" 
      }
    ],

    body: 
    `در ستون قبلی، من جامعه و سیاست‌های ایران را در آینه بازی مورد علاقه ایرانیان، یعنی شطرنج، بررسی کرده بودم. امروز دیدیم که چگونه ایران مهره‌های خود را بر صفحه شطرنج چید؛ برخی از مهره‌های خود را فدا کرد اما حریف را به خانه‌ای کشاند که راه بازگشتی از آن نبود، جایی که او خود در دام نقشه‌های ایرانی گرفتار شد و امروز مهره‌هایش به سختی شکست خورده‌اند. مدتی بود که با دامن زدن به اختلافات کوچک، ادعای "تغییر نظام" در ایران مطرح می‌شد. با مردم ایران ابراز همدردی بزرگی صورت گرفت و چند روز بعد به همان مردم حمله شد؛ به کودکان در مدارس، اماکن مذهبی و فرهنگی و حتی به عبادتگاه‌های یهودیان حمله کردند. قصد دشمن ایجاد شرایطی بود که اختلافات، پایه‌های ایران را سست کند، اما ملت ایران متحد گشت و تمام رویاهای دشمن را در یک لحظه درهم شکست.

ادعاهای بزرگی مطرح شد که سیستم دفاعی اینجا تنها چند لحظه دوام می‌اورده و این ملت را به "عصر حجر" بازمی‌گردانند تا مسیر تاریخ را عوض کنند. رویاهای تغییر نظام در ایران، نابودی تاسیسات دفاعی، اجبار به تسلیم بی‌قید و شرط و منزوی کردن از نظر اقتصادی و دیپلماتیک را دیدند، اما کاملاً برعکس، خود دشمن مجبور به خروج از منطقه شد و مجبور گشت از پایگاه‌های مهم خود در منطقه دست بکشد. این شکست بزرگی برای دشمن است که نتوانست از پایگاه‌های ساخته خود محافظت کند و ایران در جای خود نه تنها ثابت‌قدم ماند، بلکه این اخراج دشمن، نقش منطقه‌ای ایران را بیش از پیش قدرتمندتر کرد. انسداد تنگه هرمز یک استراتژی بسیار مهم ایران بود که به اقتصاد کل جهان شوک وارد کرد. برای بازگشایی آن به تهدید متوسل شدند اما ایران در اینجا هم اهمیت و برتری خود را به دنیا ثابت کرد.

وقتی سعی کردند مردم ایران را بترسانند، طی چندین روز گذشته بخش بزرگی از مردم ایران در خیابان‌ها حضور داشتند. خانواده‌هایی که به جای پنهان شدن در پناهگاه‌ها از ترس، در فضای باز بیرون آمدند، زیرا رهبرشان این راه را انتخاب کرده بود. رهبران نامور ایران تهدید شدند و برای سرهایشان جایزه تعیین شد، اما همان رهبران در جلسات عمومی بدون هیچ امنیتی در میان مردم دیده شدند و این پیام را دادند که شهادت آرزوی آن‌هاست.

و زمانی که تهدید به حملات بسیار خطرناک شد و به خصوص اعلام شد که پل‌های مهم و تاسیسات حساس ایران مورد هدف قرار می‌گیرند، مردم در اطراف همان پل‌ها و تاسیسات جمع شدند. آن ملتی که سعی شده بود به نام گرانی فریب داده شود، ثابت کرد که در موضوع مداخله خارجی، مانند دیواری پولادین است.

در طول این کشمکش، بزرگترین تغییری که مشاهده شد، تجمع جهان اسلام و انسانیت در حمایت از ایران بر روی یک نقطه واحد است. دشمن که رویای انزوای ایران را در سر داشت، در حالی که خودش در این شطرنج تنها ماند و ایران از سراسر جهان حمایت اخلاقی و دیپلماتیک دریافت کرد. از آنجا که این جنگ بر ایران تحمیل شده بود، تمام دنیا این تجاوز را شناخت. این وضعیت ثابت کرد که امت مسلمان اکنون بیدار شده است. مسلمانان سراسر جهان و حتی پیروان سایر ادیان نیز با ایران ابراز همدردی و همبستگی کردند.

در این موقعیت، نقش کشور عزیزمان پاکستان نیز مثبت بود که ایران نیز از آن ابراز تشکر کرده است. و مردم پاکستان آن شور و اشتیاقی را نشان دادند که در تاریخ یاد خواهد شد. این دریای محبتی بود که هر کسی برای سهیم شدن در آن بی‌تاب بود. اتفاقات احساسی بسیاری دیده شد. زنان دارایی تمام عمر خود، گوشواره‌های طلا و حتی خانه‌های خود را برای ایران پیشکش کردند. کشاورزان دام‌های خود، جوانان خودروها، دوچرخه‌هایشان و مردم هر چیز خاص و مورد نیاز خود را وقف ایران کردند. ماجرای آن کودک خردسال گلگت‌بلتستان تاریخی شده است که دوچرخه کوچک سه چرخه‌اش را هدیه کرد، که شاید از نظر مالی بسیار ناچیز بود اما بر اساس انگیزه و احساس، بسیار گران‌بها بود. قیمت آن در حراج تاکنون به میلیون‌ها رسیده است که برای حمایت از ایران تقدیم شد. این فقط یک دوچرخه نبود، این "تمام دارایی" آن کودک بود که به نام برادرانش زد. این ابراز همبستگی بی‌نظیر و احساسی مردم پاکستان پیامی برای جهان است که روابط ما محتاج مرزها و قراردادها نیست، بلکه این تپش قلب‌هاست که با هم می‌زند.

امروز دشمنی که برای منزوی کردن ایران آمده بود، خود به چنان شخصیت تنهایی تبدیل شده است که هیچ حامی‌ای پیدا نکرده است. الحمدلله ایران با حرکت در راه حسینیت چنان راهبردی نشان داد که دشمن مجبور به عقب‌نشینی و پس‌روی شد و این به معنای واقعی کلمه پیروزی جهان اسلام است. این پیروزی ایران تنها پیروزی مرزها نیست، بلکه پیروزی آن میلیون‌ها قلبی است که با هم می‌تپند. امروز جهان اسلام به چنان قدرتی تبدیل شده است که دیگر هیچ دشمنی نخواهد توانست رویای منزوی کردن و پایمال کردن آن را در سر بپروراند. این نقش ایران در صفحات تاریخ با کلمات طلایی نوشته خواهد شد.`
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] py-12 px-4 md:px-8" dir="rtl">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="bg-[#1e293b] p-6 text-white flex justify-between items-center shadow-md">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-70">Archive ID</span>
            <span className="text-xl font-mono font-bold text-yellow-400">{columnData.id}</span>
          </div>
          <h2 className="text-2xl font-bold">{columnData.production}</h2>
        </div>

        {/* Article Body */}
        <div className="p-8 md:p-16">
          {columnData.titleImage && (
            <div className="mb-8">
              <img 
                src={columnData.titleImage} 
                alt={columnData.title} 
                className="w-full h-auto rounded-2xl shadow-xl border-2 border-gray-200"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight font-vazir">
            {columnData.title}
          </h1>
          
          <div className="flex items-center gap-6 mb-12 pb-8 border-b border-gray-200">
            <div className="h-20 w-20 bg-blue-900 rounded-3xl flex items-center justify-center text-white font-bold text-4xl shadow-2xl">
              S
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">{columnData.author}</p>
              <p className="text-gray-500 text-xl mt-1">{columnData.date}</p>
            </div>
          </div>

          <div className="text-2xl md:text-3xl leading-[2.5] text-gray-800 text-justify whitespace-pre-line font-vazir mb-16">
            {columnData.body}
          </div>

          {/* Newspaper Links Section */}
          <div className="mt-20 pt-12 border-t-2 border-dashed border-gray-200">
            <h3 className="text-3xl font-bold text-slate-800 mb-10 text-center">'بریدہ‌های مطبوعات و خوانش آنلاین'</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {columnData.newspapers.map((news, index) => (
                <div key={index} className="bg-white p-5 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full">
                  <p className="text-center font-bold text-lg mb-4 text-blue-950 h-14 flex items-center justify-center">
                    {news.name}
                  </p>
                  <div className="overflow-hidden rounded-2xl border-2 border-gray-100 mb-6 bg-gray-50">
                    <img 
                      src={news.imgUrl} 
                      alt={news.name} 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <a 
                    href={news.onlineUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto bg-blue-900 text-white text-center py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-md"
                  >
                    آن لائن پڑھیں (خوانش آنلاین)
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 p-12 text-center text-white">
          <p className="text-xl font-medium opacity-90"> 2026 {columnData.production} | tüm haklari saklidir</p>
        </div>
      </div>
    </div>
  );
};
export default FarsiArticleDetail;