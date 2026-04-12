"use client";
import React from 'react';

export default function ArticlesSection({ articles, setSelectedArticle }) {
  const displayArticles = articles || [];

  return (
    <div id="articles" className="relative z-10 container mx-auto px-4 py-10 bg-[#fdfdfd]">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">مقالات ویژه</h2>
      </div>

      {displayArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" dir="rtl">
          {displayArticles.map((art, idx) => (
            <div key={idx} onClick={() => setSelectedArticle(art)} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="relative h-48 overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">{art.date}</div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-[#0f4c75] mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">{art.title}</h3>
                <p className="text-gray-500 text-xs mb-4 font-bold">{art.paper || art.newspaper || art.source}</p>
                <button className="bg-[#0f4c75] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-[#D4AF37] transition-colors">بیشتر بخوانید</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto text-center py-16 px-6 bg-white rounded-3xl shadow-lg border border-gray-200">
          <h3 className="text-xl md:text-2xl font-bold text-[#0f4c75] mb-4">مقالات فارسی به زودی منتشر می‌شوند</h3>
          <p className="text-gray-600 text-base md:text-lg">ما در حال آماده‌سازی مقالات فارسی برای این صفحه هستیم. برای مشاهده داستان‌های جاری لطفاً به بخش‌های دیگر مراجعه کنید.</p>
        </div>
      )}
    </div>
  );
}
