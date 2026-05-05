"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { usePathname } from "next/navigation";

function localeFromPathname(pathname) {
  if (pathname.startsWith("/en/")) return "en";
  if (pathname.startsWith("/fa/")) return "fa";
  return "ur";
}

const LocaleContext = createContext({
  locale: "ur",
  setLocale: () => {},
});

export function LocaleProvider({ children }) {
  const pathname = usePathname();
  
  const locale = useMemo(() => {
    return localeFromPathname(pathname);
  }, [pathname]);

  const setLocale = useCallback((l) => {
    // صرف localStorage میں سیٹ کر دیں، state کی ضرورت نہیں
    try {
      localStorage.setItem("site-locale", l);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    html.lang = locale === "en" ? "en" : locale === "fa" ? "fa" : "ur";
    html.dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  return ctx;
}

export default LocaleProvider;
