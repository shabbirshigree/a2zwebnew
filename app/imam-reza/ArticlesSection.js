"use client";
import React from 'react';
import { allData } from './data';

export default function ArticlesSection({ setSelectedArticle }) {
  const displayArticles = allData?.articles || [];

  return (
    <div id="articles" className="relative z-10 container mx-auto px-4 py-10 bg-[#fdfdfd]">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">اسپیشل ایڈیشنز / مضامین</h2></div>
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
                     <button className="bg-[#0f4c75] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-[#D4AF37] transition-colors">مزید پڑھیں</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
  );
}