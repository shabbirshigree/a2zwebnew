"use client";
import React from 'react';
import { FaBookOpen, FaPlay } from "react-icons/fa";

export default function BooksSection({ books, setActiveVideo }) {
  const bookList = books || [];

  return (
    <div id="books" className="relative z-10 container mx-auto px-4 py-10 bg-white border-t-8 border-[#D4AF37]">
         <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">کتب و انتشارات</h2></div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" dir="rtl">
            {bookList.map((book, idx) => (
               <div key={idx} className="bg-gray-50 p-6 rounded-3xl border-2 border-[#D4AF37]/50 shadow-xl flex flex-col md:flex-row items-center gap-6 group">
                   <img src={book.image} alt={book.title} className="w-32 h-auto rounded-lg shadow-md border group-hover:scale-105 transition-transform" />
                   <div className="text-center md:text-right flex-1">
                       <h3 className="text-xl font-bold text-[#0f4c75] mb-2">{book.title}</h3>
                       <p className="text-gray-700 text-sm mb-4 font-bold font-amiri">{book.desc}</p>
                       <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          {book.actions?.map((action, i) => (
                             <button key={i} disabled={action.disabled} onClick={() => action.url ? (action.type === 'read' ? window.open(action.url, '_blank') : setActiveVideo(action.url)) : null} className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm transition-all ${action.disabled ? 'bg-gray-400 cursor-not-allowed' : (action.type === 'read' ? 'bg-[#0f4c75] text-white hover:bg-[#D4AF37]' : 'bg-red-600 text-white hover:bg-red-700')}`}>
                               {action.type === 'read' ? <FaBookOpen /> : <FaPlay />} {action.label}
                             </button>
                          ))}
                       </div>
                   </div>
               </div>
            ))}
         </div>
      </div>
  );
}