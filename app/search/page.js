"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { masterSearchData } from './searchData';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    if (masterSearchData.length > 0) {
      const fuse = new Fuse(masterSearchData, {
        keys: ['title', 'description', 'category'], // ان فیلڈز میں تلاش ہوگی
        threshold: 0.3, // تھوڑا کم رکھا ہے تاکہ رزلٹس زیادہ درست ہوں
        distance: 100,
        ignoreLocation: true,
      });

      const searchResult = fuse.search(query);
      setResults(searchResult.map(r => r.item));
    }
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto p-6 text-right mb-20" dir="rtl">
      <h1 className="text-3xl font-bold font-jameel text-[#0f4c75] border-b-2 border-[#D4AF37] pb-4 mb-8">
        تلاش کے نتائج برائے: <span className="text-black">"{query}"</span>
      </h1>

      {results.length > 0 ? (
        <div className="grid gap-6">
          {results.map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md border-r-4 border-[#0f4c75] hover:border-[#D4AF37] transition-all rounded-l-lg">
              <span className="inline-block px-3 py-1 bg-gray-100 text-[#D4AF37] text-xs font-bold rounded mb-2">
                {item.category}
              </span>
              <Link href={item.link || '#'}>
                <h2 className="text-2xl font-bold text-[#0f4c75] hover:text-[#D4AF37] transition mt-1 font-jameel">
                  {item.title}
                </h2>
              </Link>
              <p className="text-gray-600 mt-3 line-clamp-3 font-light leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4">
                <Link href={item.link || '#'} className="text-sm font-bold text-[#D4AF37] hover:underline italic">
                  مزید پڑھیں ←
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-2xl text-gray-400 font-jameel">معذرت، اس لفظ سے متعلق کوئی مواد نہیں ملا۔</p>
          <Link href="/" className="bg-[#0f4c75] text-white px-6 py-2 rounded-full font-bold mt-6 inline-block hover:bg-[#D4AF37] transition">
            ہوم پیج پر واپس جائیں
          </Link>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center p-20 font-jameel text-xl text-[#0f4c75]">تلاش جاری ہے...</div>}>
      <SearchContent />
    </Suspense>
  );
}