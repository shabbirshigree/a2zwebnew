"use client";

import { useEffect } from "react";
import { useLocale } from "../components/LocaleProvider";
import { HomeContent } from "./HomeContent";

export default function Home() {
  const { setLocale } = useLocale();
  useEffect(() => {
    setLocale("ur");
  }, [setLocale]);
  return <HomeContent />;
}
