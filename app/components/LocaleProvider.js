"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";

/** @typedef {'ur' | 'fa' | 'en'} SiteLocale */

const STORAGE_KEY = "site-locale";

/** راستہ ـ ہوم پر زبان طے کرتا ہے (localStorage بعد میں اسے اووررائڈ نہ کرے) */
function localeFromPathname(pathname) {
  if (pathname === "/en" || pathname === "/en/home" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/fa" || pathname === "/fa/home" || pathname.startsWith("/fa/")) return "fa";
  if (pathname === "/" || pathname === "/home") return "ur";
  return null;
}

const LocaleContext = createContext(
  /** @type {{ locale: SiteLocale; setLocale: (l: SiteLocale) => void }} */ ({
    locale: "ur",
    setLocale: () => {},
  })
);

export function LocaleProvider({ children }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState(/** @type {SiteLocale} */ ("ur"));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fromPath = localeFromPathname(pathname);
    try {
      if (fromPath) {
        setLocaleState(fromPath);
        localStorage.setItem(STORAGE_KEY, fromPath);
      } else {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "ur" || saved === "fa" || saved === "en") {
          setLocaleState(saved);
        }
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, [pathname]);

  const setLocale = useCallback((l) => {
    if (l !== "ur" && l !== "fa" && l !== "en") return;
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!ready || typeof document === "undefined") return;
    const html = document.documentElement;
    html.lang = locale === "en" ? "en" : locale === "fa" ? "fa" : "ur";
    html.dir = locale === "en" ? "ltr" : "rtl";
  }, [locale, ready]);

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
