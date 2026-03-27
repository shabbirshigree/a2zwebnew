"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

// امپورٹس
import { CHANNELS } from '../channels/channelsData';
import { contactMethods } from '../contact/contactData';
import { quranVideos } from '../project/projectData';
import { BOOKS_DATA } from '../library/libraryData';
import { allArticles } from '../article';
import { founderItems, mediaRoles } from '../about/aboutData';
import { SERVICES_DATA } from '../services/servicesData';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // 🟢 پراجیکٹ ڈیٹا چونکہ Object ہے، اس لیے ہم اس کے تمام حصوں کو ایک لسٹ میں جمع کریں گے
  const projectItems = [
    ...(quranVideos?.parat_arabic || []),
    ...(quranVideos?.parat_urdu || []),
    ...(quranVideos?.surahs || []),
    ...(quranVideos?.stories || []),
    ...(quranVideos?.tilawat || [])
  ].map(item => ({
    title: item.title,
    description: "نور القرآن پروجیکٹ - ویڈیو",
    category: 'پراجیکٹس',
    link: '/project'
  }));

  // تمام ڈیٹا کو ایک جگہ جمع کرنا
  const masterSearchData = [
    ...(Array.isArray(allArticles) ? allArticles : []).map(item => ({ title: item.title, description: item.excerpt || item.paper, category: 'کالمز', link: `/article?read=${item.id}` })),
    ...(Array.isArray(CHANNELS) ? CHANNELS : []).map(item => ({ title: item.title, description: item.desc, category: 'چینلز', link: '/channels' })),
    ...(Array.isArray(BOOKS_DATA) ? BOOKS_DATA : []).map(item => ({ title: item.title, description: item.author, category: 'لائبریری', link: '/library' })),
    ...(Array.isArray(contactMethods) ? contactMethods : []).map(item => ({ title: item.title, description: item.info, category: 'رابطہ', link: '/contact' })),
    ...(Array.isArray(founderItems) ? founderItems : []).map(item => ({ title: item.title, description: item.desc, category: 'اباؤٹ', link: '/about' })),
    ...(Array.isArray(mediaRoles) ? mediaRoles : []).map(item => ({ title: item.title, description: item.desc, category: 'اباؤٹ', link: '/about' })),
    ...(Array.isArray(SERVICES_DATA) ? SERVICES_DATA : []).map(item => ({ title: item.title, description: item.desc, category: 'خدمات', link: '/services' })),
    ...projectItems // پراجیکٹ کا ڈیٹا یہاں شامل ہو گیا
  ];

  const filteredData = masterSearchData.filter(item =>
    (item.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.description || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      <HeroSlider />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-right">سرچ</h1>
        <input
          type="text"
          placeholder="تلاش کریں..."
          className="w-full p-4 border rounded-xl mb-6 text-right shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="space-y-4">
          {filteredData.map((item, index) => (
            <Link key={index} href={item.link} className="block bg-white p-4 rounded-lg shadow-sm border-r-4 border-blue-600 hover:shadow-md transition">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded mt-2 inline-block">{item.category}</span>
            </Link>
          ))}
          {filteredData.length === 0 && (
            <p className="text-center text-gray-400 mt-10">کوئی نتیجہ نہیں ملا</p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}