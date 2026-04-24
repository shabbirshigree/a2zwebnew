"use client";

import { useEffect, Suspense } from "react";
import { useLocale } from "../../components/LocaleProvider";
import { HomeContent } from "../../home/HomeContent";

export default function EnglishHome() {
  const { setLocale } = useLocale();
  useEffect(() => {
    setLocale("en");
  }, [setLocale]);
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-[#D4AF37]">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
