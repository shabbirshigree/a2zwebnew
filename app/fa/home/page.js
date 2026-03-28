"use client";

import { useEffect } from "react";
import { useLocale } from "../../components/LocaleProvider";
import { HomeContent } from "../../home/HomeContent";

export default function FarsiHome() {
  const { setLocale } = useLocale();
  useEffect(() => {
    setLocale("fa");
  }, [setLocale]);
  return <HomeContent />;
}
