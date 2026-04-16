import React from 'react';

const FarsiArticleDetail = ({ article }) => {
  const defaultColumnData = {
    id: "122-FA",
    title: "مهره‌های شطرنج جنگ ایران",
    author: "نویسنده: حاجی شبیر احمد شگری",
    date: "04 آوریل 2026",
    production: "Noor Productions",
    titleImage: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1775227089/198abd81-25e2-4119-ac16-84096c7f7e1d.png",
    
    newspapers: [
      { 
        name: "اسلام ٹائمز (Islam Times)", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1776303515/Islamtimes_2026-04-04_udu4a3.jpg",
        onlineUrl: "https://www.islamtimes.com/ur/article/1272433/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-%D8%AC%D9%86%DA%AF-%DA%A9%DB%92-%D8%B4%D8%B7%D8%B1%D9%86%D8%AC%DB%8C-%D9%85%DB%81%D8%B1%DB%92" 
      },
      { 
        name: "روزنامه مشرق (Mashriq)", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1776303516/aily_Mashriq_2026-04-06_toqc06.jpg",
        onlineUrl: "https://mashriqakhbar.com.pk/page/p4/2026-04-04/1" 
      },
      { 
        name: "روزنامه زمانہ (Zamana News)", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1776303545/59dddbf1-557f-448e-83be-7dcab797adc0.png",
        onlineUrl: "" 
      }
    ],

    body: `امروز خاطرات بازار شهر باستانی کرمان در ایران زنده شد، جایی که در میان صدای فلز مس، عطر ادویه‌ها و هیاهوی تجارِ سایر اشیاء، هیئت پاکستانی ما به رهبری من در این بازار تاریخی قدم می‌زد. منظره دو پیرمرد کاسب که بر صفحه شطرنج در مقابل یک مغازه خم شده بودند، در مقابل چشمانم جان گرفت. از این رو، تلاش کرده‌ام صفحه شطرنج جنگی کنونی ایران را در پرتو بازی محبوب ایرانیان یعنی "شطرنج" ارائه دهم که قطعاً به درک استراتژی شکست‌ناپذیر ایران کمک خواهد کرد.
در ایران، شطرنج تنها برای گذران وقت بازی نمی‌شود، بلکه تداوم آن میراث تمدنی کهن است که در سرشت ایران نهفته است. شطرنج در قرن ششم میلادی از هند به عنوان هدیه به دربار ساسانی رسید. پس از آن ایرانیان این بازی را پذیرفتند، نام آن را "چترنگ" گذاشتند و اصول آن را چنان در زندگی، تجارت و روان‌شناسی جنگی خود آمیختند که گویی اختراع خودشان است. در چارچوب این بازی، می‌توانیم ببینیم که ایرانیان چگونه از آن فراتر از یک بازی، در استراتژی، زندگی، فرهنگ و حتی فلسفه جنگ استفاده می‌کنند. ایرانیان از شطرنج یاد نگرفتند که چگونه پیروز شوند، بلکه یاد گرفتند که چگونه حریف را مجبور به شکست کنند.
همان‌طور که در صفحه شطرنج برای نجات "فیل" باید حرکت مورب و پیچیده "اسب" را انجام داد، تاریخ ایران نیز آینه همین استراتژی است. چه دوران پس از جنگ قادسیه باشد و چه جنگ‌های نیابتی دوران مدرن، فلسفه جنگی آنان بر این بوده است که مراقب هر حرکت دشمن باشند تا زمانی که خود دشمن مرتکب اشتباه شود. به جای رویارویی مستقیم، چنان حرکتی انجام می‌دهند که هر مهره دشمن با قدرت خودش تضعیف شود. همان‌طور که در شطرنج تمام مهره‌ها برای یک هدف یعنی حفاظت از پادشاه می‌جنگند، سیاست داخلی و خارجی ایران نیز حول همین 
محور می‌چرخد.
امروز وقتی کشوری قدرت جنگی ایران را ارزیابی می‌کند، موشک‌ها یا پهپادهای آن‌ها را می‌شمارد، اما فراموش می‌کند که با ملتی پنجه نرم می‌کند که قرن‌هاست در صفحه "چترنگ" (شطرنج)، حرکت‌های بقای خود را انجام می‌دهد.
تاریخ جنگی ایران نشان می‌دهد که این ملت هرگز تنها با تکیه بر "قدرت کور" وارد میدان نشده است. از اسکندر مقدونی گرفته تا تهاجم مغول‌ها، ایران بارها شکست‌های فیزیکی را متحمل شده، اما با "حرکت‌های شطرنجی" خود، فاتحان را در رنگ و فرهنگ خود ذوب کرده است. برای آن‌ها شکست یک درس است و پیروزی یک آمادگی. در روان‌شناسی جنگی آنان، "صبر" همان جایگاهی را دارد که یک بازیکن شطرنج در انتظار نوبت خود دارد. این تنها بازیِ تکنولوژی نیست، بلکه تجلی عملی آن تفکر باستانی است که در آن به جای تقابل مستقیم، دشمن چنان در معرض فشار عصبی قرار می‌گیرد که در حرکت‌های خودش گرفتار شود.

در تاریخ ایران و به ویژه در مکتب تشیع، واقعه کربلا جایگاهی مرکزی دارد، جایی که ترس از مرگ برای یک سرباز عادی از بین می‌رود زیرا او آن را مقام "شهادت" می‌نامد. ایران در تاریخ جنگی خود نشان داده است که وقتی ملتی ترس از مرگ را رها کند، هیچ سلاح مدرنی در جهان نمی‌تواند آن را تسلیم کند.
جغرافیای ایران مانند یک قلعه طبیعی است که توسط کوه‌ها محاصره شده است. رشته‌کوه‌هایی مانند زاگرس و البرز می‌توانند برای هر ارتش خارجی به قبرستان تبدیل شوند. سخت‌ترین تحریم‌های چهار دهه اخیر، ایرانیان را به یک "ملت مخترع" تبدیل کرده است. وقتی دنیا دادن قطعات را به آن‌ها متوقف کرد، آن‌ها پهپادها، موشک‌ها و زیردریایی‌های خود را ساختند. آن‌ها محتاج هیچ ابرقدرتی نیستند و همین خودکفایی، بزرگترین موفقیت جنگی آنان است. جنگ با ایران، فتح یک کشور نیست، بلکه دست بردن در کندوی عسلِ یک تمدن استوار است که هر زنبور آن یک سرباز است.

امروز وقتی به صفحه شطرنج جهانی نگاه می‌کنیم، می‌بینیم که ایران دشمن را نه تنها با سلاح، بلکه با "شطرنج اعصاب" مات کرده است. از امواج تنگه هرمز گرفته تا بیداری شعور در منطقه، هر حرکت چنان حساب‌شده است که آمریکا، که زمانی "شاه" این منطقه نامیده می‌شد، امروز در حرکت‌های خود سردرگم شده و در حال شکست مداوم و در آستانه "مات" قرار دارد. در شطرنج اصطلاحی وجود دارد که حریف در موقعیتی قرار می‌گیرد که هر حرکتی انجام دهد، به ضرر خودش باشد؛ این همان "پیروزی شطرنجی" ایران است که بدون جنگ، دشمن را مجبور به عقب‌نشینی می‌کند.

برای درک ایران نباید فقط به پایگاه‌های نظامی آن، بلکه باید به تمدن آن نیز نگریست. به آن کوچه‌هایی که تاریخ قرن‌ها در پیچ و خم خطاطی‌هایش نفس می‌کشد، به رنگ‌های مینیاتوری پراکنده در بازارها که مایه زیبایی زندگی آنان است، و به آن صفحه‌های شطرنج که نماد عمق فکری آنان است. ملت ایران هنر، موسیقی، شعر و مهارت خود را مانند روح حفظ کرده است. و ملتی که روحش چنین بارور باشد، شکست‌ناپذیر است. هرگونه تقابل با ایران، در واقع برخورد با ملتی است که هر هنر، هر حرف و هر رنگ آن گواهی بر تسخیرناپذیری‌اش می‌دهد. قدرت ایران در سلاح‌هایش نیست، بلکه در آن روح فرهنگی نهفته است که در برابر طوفان‌های هر عصر، مانند صخره‌ای ایستاده است.`,
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
                      className="mt-auto bg-blue-900 text-white text-center py-4 rounded-xl font-bold text-base md:text-lg hover:bg-slate-800 transition shadow-md"
                    >
                      آن لائن پڑھیں (خوانش آنلاین)
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="mt-auto bg-slate-400 text-white text-center py-4 rounded-xl font-bold text-base md:text-lg opacity-70 cursor-not-allowed"
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