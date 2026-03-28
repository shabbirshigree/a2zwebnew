"use client";

import { useEffect } from "react";
import { useLocale } from "../../components/LocaleProvider";
import { HomeContent } from "../../home/HomeContent";

export default function EnglishHome() {
  const { setLocale } = useLocale();
  useEffect(() => {
    setLocale("en");
  }, [setLocale]);
  return <HomeContent />;
}
