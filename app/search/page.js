"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Navbar, HeroSlider } from "../components/Header";
import Footer from "../components/Footer";

// امپورٹس
import { CHANNELS } from "../channels/channelsData";
import { contactMethods } from "../contact/contactData";
import { quranVideos } from "../project/projectData";
import { BOOKS_DATA } from "../library/libraryData";
import { allArticles } from "../article";
import { founderItems, mediaRoles } from "../about/aboutData";
import { SERVICES_DATA } from "../services/servicesData";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 220);
    return () => clearTimeout(t);
  }, [searchQuery]);

  const isSearchPending = searchQuery !== debouncedQuery;

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
      link: "/project",
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

  const filteredData = useMemo(() => {
    const q = (debouncedQuery || "").toLowerCase().trim();
    if (!q) return masterSearchData;
    return masterSearchData.filter(
      (item) =>
        (item.title || "").toLowerCase().includes(q) ||
        (item.description || "").toLowerCase().includes(q)
    );
  }, [masterSearchData, debouncedQuery]);

  const showLoading =
    isSearchPending && (searchQuery || "").trim().length > 0;

  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      <HeroSlider />
      <div className="max-w-3xl mx-auto p-6 relative">
        <h1 className="text-2xl font-bold mb-4 text-right">سرچ</h1>
        <input
          type="text"
          placeholder="تلاش کریں..."
          className="w-full p-4 border rounded-xl mb-6 text-right shadow-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {showLoading && (
          <div
            className="flex flex-col items-center justify-center py-12 gap-4 text-[#B8860B]"
            aria-live="polite"
            aria-busy="true"
          >
            <div
              className="h-14 w-14 rounded-full border-4 border-[#D4AF37]/25 border-t-[#D4AF37] animate-spin shadow-[0_0_20px_rgba(212,175,55,0.35)]"
              role="status"
            />
            <p className="text-lg md:text-xl font-extrabold text-[#D4AF37] drop-shadow-sm urdu-text">
              انتظار فرمائیے
            </p>
            <p className="text-sm md:text-base font-semibold text-[#B8860B] tracking-wide">
              شبیر احمد شگری
            </p>
          </div>
        )}

        <div className={`space-y-4 ${showLoading ? "opacity-40 pointer-events-none" : ""}`}>
          {!showLoading &&
            filteredData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block bg-white p-4 rounded-lg shadow-sm border-r-4 border-[#0f4c75] hover:shadow-md hover:border-[#D4AF37] transition"
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <span className="text-xs bg-amber-50 text-[#0f4c75] px-2 py-1 rounded mt-2 inline-block">{item.category}</span>
              </Link>
            ))}
          {!showLoading &&
            filteredData.length === 0 &&
            (debouncedQuery || "").trim().length > 0 && (
              <p className="text-center text-gray-400 mt-10">کوئی نتیجہ نہیں ملا</p>
            )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
