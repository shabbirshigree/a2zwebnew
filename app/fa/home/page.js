"use client";

import { useEffect, Suspense } from "react";
import { useLocale } from "../../components/LocaleProvider";
import { HomeContent } from "../../home/HomeContent";

export default function FarsiHome() {
  const { setLocale } = useLocale();
  useEffect(() => {
    setLocale("fa");
  }, [setLocale]);
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-[#D4AF37]">در حال بارگذاری...</div>}>
      <HomeContent />
    </Suspense>
  );
}
