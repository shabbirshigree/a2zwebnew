"use client";
import React, { useState, useEffect } from 'react';
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { rezaviData } from './data'; // یقینی بنائیں کہ data.js کا پاتھ درست ہو

export default function RezaviSection() {
  const [rezaviSlide, setRezaviSlide] = useState(0);

  // 🛍️ آٹو سلائیڈر
  useEffect(() => {
    if (rezaviData?.images?.length > 0) {
        const interval = setInterval(() => {
            setRezaviSlide((prev) => (prev === rezaviData.images.length - 1 ? 0 : prev + 1));
        }, 3000); 
        return () => clearInterval(interval);
    }
  }, []);

  if (!rezaviData) return null;

  return (
    <div id="rezavi" className="relative z-10 container mx-auto px-4 py-12 bg-white border-y-4 border-[#D4AF37] mt-8 mb-8">
        <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0f4c75] border-b-4 border-[#D4AF37] inline-block pb-2">{rezaviData.title}</h2>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center" dir="rtl">
            {/* 🖼️ سلائیڈر */}
            <div className="w-full md:w-1/2 h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37] bg-gray-50">
                {rezaviData.images?.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt="Rezavi Product" 
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === rezaviSlide ? "opacity-100" : "opacity-0"}`} 
                    />
                ))}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-1 rounded-full text-xs font-bold">متبرک اشیاء</div>
            </div>

            {/* 📝 متن اور لنکس */}
            <div className="w-full md:w-1/2 space-y-6 text-justify">
                <div className="text-lg md:text-xl leading-loose font-bold text-gray-800 whitespace-pre-line font-amiri">
                    {rezaviData.desc}
                </div>
                <div className="bg-[#f8f9fa] p-4 rounded-xl border-r-4 border-[#D4AF37] shadow-sm">
                    <strong className="text-[#0f4c75] text-lg md:text-xl block text-center animate-pulse">{rezaviData.punchline}</strong>
                </div>
                
                {/* لنکس */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {rezaviData.youtube && (
                        <a href={rezaviData.youtube} target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 text-white py-3 rounded-xl shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 font-bold text-lg">
                            <FaYoutube size={28} /> یوٹیوب چینل
                        </a>
                    )}
                    {rezaviData.facebook && (
                        <a href={rezaviData.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 text-white py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-bold text-lg">
                            <FaFacebook size={28} /> فیس بک صفحہ
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}