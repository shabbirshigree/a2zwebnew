"use client";

import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import { Navbar } from "../components/Header";
import Footer from "../components/Footer";

import { CHANNELS } from "../channels/channelsData";
import { contactMethods } from "../contact/contactData";
import { quranVideos } from "../noor-ul-quran/noor-ul-quranData";
import { BOOKS_DATA } from "../library/libraryData";
import { allArticles } from "../article";
import { founderItems, mediaRoles } from "../about/aboutData";
import { SERVICES_DATA } from "../services/servicesData";

const DEBOUNCE_MS = 280;

function emitSearchQuery(q) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("search-query-updated", { detail: q }));
}

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qFromUrl = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(qFromUrl);
  const replaceTimer = useRef(null);

  useEffect(() => {
    setQuery(qFromUrl);
    emitSearchQuery(qFromUrl);
  }, [qFromUrl]);

  const masterSearchData = useMemo(() => {
    const projectItems = [
      ...(quranVideos?.parat_arabic || []),
      ...(quranVideos?.parat_urdu || []),
      ...(quranVideos?.surahs || []),
      ...(quranVideos?.stories || []),
      ...(quranVideos?.tilawat || []),
    ].map((item) => ({
      title: item.title,
      description: "نور القرآن پروجیکٹ - ویڈیو",
      category: "پراجیکٹس",
      link: "/noor-ul-quran",
    }));
    return [
      ...(Array.isArray(allArticles) ? allArticles : []).map((item) => ({
        title: item.title,
        description: item.excerpt || item.paper,
        category: "کالمز",
        link: `/article?read=${item.id}`,
      })),
      ...(Array.isArray(CHANNELS) ? CHANNELS : []).map((item) => ({
        title: item.title,
        description: item.desc,
        category: "چینلز",
        link: "/channels",
      })),
      ...(Array.isArray(BOOKS_DATA) ? BOOKS_DATA : []).map((item) => ({
        title: item.title,
        description: item.author,
        category: "لائبریری",
        link: "/library",
      })),
      ...(Array.isArray(contactMethods) ? contactMethods : []).map((item) => ({
        title: item.title,
        description: item.info,
        category: "رابطہ",
        link: "/contact",
      })),
      ...(Array.isArray(founderItems) ? founderItems : []).map((item) => ({
        title: item.title,
        description: item.desc,
        category: "اباؤٹ",
        link: "/about",
      })),
      ...(Array.isArray(mediaRoles) ? mediaRoles : []).map((item) => ({
        title: item.title,
        description: item.desc,
        category: "اباؤٹ",
        link: "/about",
      })),
      ...(Array.isArray(SERVICES_DATA) ? SERVICES_DATA : []).map((item) => ({
        title: item.title,
        description: item.desc,
        category: "خدمات",
        link: "/services",
      })),
      ...projectItems,
    ];
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(masterSearchData, {
        keys: [
          { name: "title", weight: 0.65 },
          { name: "description", weight: 0.35 },
        ],
        threshold: 0.42,
        ignoreLocation: true,
        minMatchCharLength: 1,
      }),
    [masterSearchData]
  );

  const filteredData = useMemo(() => {
    const q = (query || "").trim();
    if (!q) return masterSearchData;
    const fuseResults = fuse.search(q);
    if (fuseResults.length > 0) {
      return fuseResults.map((r) => r.item);
    }
    const low = q.toLowerCase();
    return masterSearchData.filter(
      (item) =>
        (item.title || "").toLowerCase().includes(low) ||
        (item.description || "").toLowerCase().includes(low)
    );
  }, [masterSearchData, fuse, query]);

  const pushUrl = useCallback(
    (next) => {
      const trimmed = (next || "").trim();
      const url = trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search";
      router.replace(url, { scroll: false });
      emitSearchQuery(trimmed);
    },
    [router]
  );

  useEffect(() => {
    return () => {
      if (replaceTimer.current) clearTimeout(replaceTimer.current);
    };
  }, []);

  const onChangeInput = (e) => {
    const v = e.target.value;
    setQuery(v);
    if (replaceTimer.current) clearTimeout(replaceTimer.current);
    replaceTimer.current = setTimeout(() => {
      pushUrl(v);
    }, DEBOUNCE_MS);
  };

  const clearSearch = () => {
    setQuery("");
    pushUrl("");
  };

  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      {/* سرچ صفحے پر بھاری HeroSlider نہیں — موبائل پر تیزی اور کم جھٹکا */}
      <div className="h-2 bg-gradient-to-l from-[#0b314d] via-[#D4AF37]/40 to-[#0b314d]" aria-hidden />

      <div className="max-w-3xl mx-auto p-4 md:p-6 relative">
        <h1 className="text-2xl font-bold mb-4 text-right">سرچ</h1>
        <p className="text-sm text-gray-600 text-right mb-3 leading-relaxed">
          تمام کالمز، لائبریری، خدمات، چینلز اور دیگر صفحات سے نتائج۔ نیوبار یا وائس سے آنے والی تلاش یہاں جاری رہے گی۔
        </p>
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            placeholder="تلاش کریں..."
            className="w-full p-4 border rounded-xl text-right shadow-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
            value={query}
            onChange={onChangeInput}
            autoComplete="off"
            enterKeyHint="search"
          />
          {query.trim().length > 0 && (
            <button
              type="button"
              onClick={clearSearch}
              className="self-end text-sm text-[#0f4c75] underline hover:text-[#D4AF37]"
            >
              تلاش صاف کریں
            </button>
          )}
        </div>

        <p className="text-xs text-gray-500 text-right mb-3">
          {query.trim()
            ? `≈ ${filteredData.length} نتیجہ`
            : `تمام اندراجات دکھائے جا رہے ہیں (${masterSearchData.length})`}
        </p>

        <div className="space-y-3">
          {filteredData.map((item, index) => (
            <Link
              key={`${item.link}-${item.title}-${index}`}
              href={item.link}
              scroll
              className="block bg-white p-4 rounded-lg shadow-sm border-r-4 border-[#0f4c75] hover:shadow-md hover:border-[#D4AF37]"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-3">{item.description}</p>
              <span className="text-xs bg-amber-50 text-[#0f4c75] px-2 py-1 rounded mt-2 inline-block">{item.category}</span>
            </Link>
          ))}
          {filteredData.length === 0 && query.trim().length > 0 && (
            <p className="text-center text-gray-400 mt-10">کوئی نتیجہ نہیں ملا — الفاظ بدل کر دیکھیں۔</p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

function SearchFallback() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
      <p className="text-[#0f4c75] urdu-text">تلاش لوڈ ہو رہی ہے…</p>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchContent />
    </Suspense>
  );
}
