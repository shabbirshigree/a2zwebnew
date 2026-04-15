import React from 'react';

const FarsiArticleDetail = ({ article }) => {
  const defaultColumnData = {
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
        name: "روزنامه مشرق (Mashriq)", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152000/daily_mashriq_2026-04-09_d5ay1j.jpg",
        onlineUrl: "https://mashriqakhbar.com.pk/page/p4/2026-04-09/1" 
      },
      { 
        name: "روزنامہ زمانہ (Zamana News)", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152000/daily_zamana_news_2026-04-09_wlvent.jpg",
        onlineUrl: "" 
      }
    ],

    body: `در ستون قبلی، من جامعه و سیاست‌های ایران را در آینه بازی مورد علاقه ایرانیان، یعنی شطرنج، بررسی کرده بودم. امروز دیدیم کہ چگونه ایران مهره‌های خود را بر صفحه شطرنج چید؛ برخی از مهره‌های خود را فدا کرد اما حریف را به خانه‌ای کشاند کہ راه بازگشتی از آن نبود، جایی کہ او خود در دام نقشه‌های ایرانی گرفتار شد و امروز مهره‌هایش به سختی شکست خورده‌اند۔ مدتی بود کہ با دامن زدن بہ اختلافات کوچک، ادعای "تغییر نظام" در ایران مطرح می‌شد۔ با مردم ایران ابراز همدردی بزرگی صورت گرفت و چند روز بعد بہ همان مردم حملہ شد؛ بہ کودکان در مدارس، اماکن مذهبی و فرهنگی اور حتی بہ عبادتگاه‌های یهودیان حملہ کردند۔ قصد دشمن ایجاد شرایطی بود کہ اختلافات، پایه‌های ایران را سست کند، اما ملت ایران متحد گشت اور تمام رویاهای دشمن را در ایک لحظہ درہم شکست۔

ادعاهای بزرگی مطرح شد کہ سیستم دفاعی یہجا تنها چند لحظہ دوام می‌آورده و یہ ملت را بہ "عصر حجر" بازمی‌گردانند تا مسیر تاریخ را عوض کنند۔ رویاهای تغییر نظام در ایران، نابودی تاسیسات دفاعی، اجبار بہ تسلیم بی‌قید و شرط و منزوی کردن از نظر اقتصادی و دیپلماتیک را دیدند، اما کاملاً برعکس، خود دشمن مجبور بہ خروج از منطقه شد اور مجبور گشت از پایگاه‌های مهم خود در منطقه دست بکشد۔ یہ شکست بزرگی برای دشمن ہے کہ نتوانست از پایگاه‌های ساخته خود محافظت کرے اور ایران در جای خود نہ تنها ثابت‌قدم ماند، بلکه یہ اخراج دشمن، نقش منطقه‌ای ایران را بیش از پیش قدرتمندتر کرد۔ انسداد تنگہ ہرمز ایک استراتژی بہت اہم ایران بود کہ بہ اقتصاد کل جهان شوک وارد کرد۔ برای بازگشایی آن بہ تهدید متوسل شدند اما ایران در یہاں هم اہمیت و برتری خود را بہ دنیا ثابت کرد۔

وقتی سعی کردند مردم ایران را بترسانند، طی چندین روز گذشته بخش بزرگی از مردم ایران در خیابان‌ها حضور داشتند۔ خانواده‌هایی کہ بہ جای پنهان شدن در پناهگاه‌ها از ترس، در فضای باز بیرون آمدند، زیرا رهبرشان یہ راه را انتخاب کرده بود۔ رہبران نامور ایران تهدید شدند اور برای سرهایشان جایزه تعیین شد، اما همان رہبران در جلسات عمومی بدون هیچ امنیتی در میان مردم دیده شدند اور یہ پیام را دادند کہ شهادت آرزوی آن‌هاست۔

و زمانی کہ تهدید بہ حملات بہت خطرناک شد اور بہ خصوص اعلام شد کہ پل‌های مهم و تاسیسات حساس ایران مورد ہدف قرار می‌گیرند، مردم در اطراف همان پل‌ها و تاسیسات جمع شدند۔ آن ملتی کہ سعی شده بود بہ نام گرانی فریب داده شود، ثابت کرد کہ در موضوع مداخله خارجی، مانند دیواری پولادین است۔

در طول یہ کشمکش، بزرگترین تغییری کہ مشاهده شد، تجمع جهان اسلام و انسانیت در حمایت از ایران بر روی ایک نقطہ واحد است۔ دشمن کہ رویای انزوای ایران را در سر داشت، در حالی کہ خودش در یہ شطرنج تنها ماند اور ایران از سراسر جهان حمایت اخلاقی و دیپلماتیک دریافت کرد۔ از آنجا کہ یہ جنگ بر ایران تحمیل شده بود، تمام دنیا یہ تجاوز را شناخت۔ یہ صورتحال ثابت کرد کہ امت مسلمان اکنون بیدار شده است۔ مسلمانان سراسر جهان و حتی پیروان سایر ادیان نیز با ایران ابراز همدردی و همبستگی کردند۔

در این موقعیت، نقش کشور عزیزمان پاکستان نیز مثبت بود کہ ایران نیز از آن ابراز تشکر کرده است۔ و مردم پاکستان آن شور و اشتیاقی را نشان دادند کہ در تاریخ یاد خواهد شد۔ یہ دریای محبتی بود کہ ہر کوئی برای سهیم شدن در آن بیتاب تھا۔ اتفاقات احساسی بسیاری دیده شد۔ زنان دارایی تمام عمر خود، گوشواره‌های طلا اور حتی خانه‌های خود را برای ایران پیشکش کردند۔ کشاورزان دام‌های خود، جوانان خودروها، دوچرخه‌هایشان اور مردم ہر چیز خاص اور مورد نیاز خود را وقف ایران کردند۔ ماجرای آن کودک خردسال گلگت-بلتستان تاریخی شده است کہ دوچرخه کوچک سه چرخه‌اش را هدیه کرد، کہ شاید از نظر مالی بہت ناچیز تھا اما بر اساس انگیزه و احساس، بسیار گران‌بها بود۔ قیمت آن در حراج تاکنون بہ میلیون‌ها رسیده است کہ برای حمایت از ایران تقدیم شد۔ یہ صرف ایک دوچرخه نہ تھا، یہ "تمام دارایی" آن کودک بود کہ بہ نام برادرانش زد۔ یہ ابراز همبستگی بی‌نظیر و احساسی مردم پاکستان پیامی برای جهان است کہ روابط ما محتاج مرزها اور قراردادها نہیں، بلکہ یہ تپش قلب‌هاست کہ با هم می‌زند۔

امروز دشمنی کہ برای منزوی کردن ایران آمده بود، خود بہ چنان شخصیت تنہائی تبدیل شده است کہ کوئی حامی نہ ملا۔ الحمدللہ ایران با حرکت در راه حسینیت چنان راهبردی نشان داد کہ دشمن مجبور بہ عقب‌نشینی و پس‌روی شد اور یہ بہ معنای واقعی کلمه پیروزی جهان اسلام است۔ یہ پیروزی ایران صرف پیروزی مرزها نہیں است، بلکہ پیروزی آن میلیون‌ها قلبی است کہ با هم می‌تپند۔ امروز جهان اسلام به چنان قدرت تبدیل شده است کہ دیگر هیچ دشمنی نخواهد توانست رویای منزوی کردن و پایمال کردن آن را در سر بپروراند۔ یہ نقش ایران در صفحات تاریخ با کلمات طلایی نوشته خواهد شد۔`,
  };
  const columnData = {
    ...defaultColumnData,
    ...(article || {}),
    newspapers: Array.isArray(article?.newspapers) && article.newspapers.length > 0 ? article.newspapers : defaultColumnData.newspapers,
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
                  {news.onlineUrl ? (
                    <a 
                      href={news.onlineUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto bg-blue-900 text-white text-center py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-md"
                    >
                      آن لائن پڑھیں (خوانش آنلاین)
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="mt-auto bg-slate-400 text-white text-center py-3 rounded-xl font-bold opacity-70 cursor-not-allowed"
                    >
                      لنک دستیاب نہیں
                    </button>
                  )}
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