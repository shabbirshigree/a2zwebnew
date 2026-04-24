"use client";

import { useEffect, Suspense } from "react";
import { useLocale } from "../components/LocaleProvider";
import { HomeContent } from "./HomeContent";

export default function Home() {
  const { setLocale } = useLocale();
  useEffect(() => {
    setLocale("ur");
  }, [setLocale]);
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-[#D4AF37]">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
