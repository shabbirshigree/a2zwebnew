"use client";
import React, { useState } from 'react';
import { CHANNELS } from '../channels/channelsData';
import { contactMethods } from '../contact/contactData';
import { quranVideos } from '../project/projectData';
import { BOOKS_DATA } from '../library/libraryData';

// 🟢 یہاں وہ تمام ڈیٹا ایک ہی جگہ جمع ہے، کسی الگ فائل کی ضرورت نہیں
const masterSearchData = [
  ...(CHANNELS || []).map(item => ({ title: item.title, description: item.desc, category: 'چینلز', link: '/channels' })),
  ...(contactMethods || []).map(item => ({ title: item.title, description: item.info, category: 'رابطہ', link: '/contact' })),
  ...(quranVideos || []).map(item => ({ title: item.title, description: item.description, category: 'پراجیکٹس', link: '/project' })),
  ...(BOOKS_DATA || []).map(item => ({ title: item.title, description: item.author, category: 'لائبریری', link: '/library' })),
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = masterSearchData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-right">تلاش کریں</h1>
        <input
          type="text"
          placeholder="یہاں لکھیں..."
          className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-right"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mt-8 space-y-4">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border-r-4 border-blue-500">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}