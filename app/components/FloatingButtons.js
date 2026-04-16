"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp, FaHome, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { getDictionary, getHomePath } from "../lib/i18n";

function floatLabelClass(locale) {
  if (locale === "en") return "font-sans font-semibold";
  if (locale === "fa") return "font-persian font-semibold";
  return "urdu-text font-semibold";
}

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
  const { locale } = useLocale();
  const dict = getDictionary(locale);
  const f = /** @type {{ scrollTop: string; back: string; home: string; waTitle: string }} */ (dict.float);
  const lbl = floatLabelClass(locale);
  const homeHref = getHomePath(locale);
  const isLandingOrHomeFlow =
    pathname === "/" ||
    pathname === "/home" ||
    pathname === "/en/home" ||
    pathname === "/fa/home";
  const hideBackButton = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    window.history.back();
  };

  const handleWhatsapp = () => {
    window.open("https://wa.me/923334491715", "_blank");
  };

  return (
    <>
      <button
        onClick={handleWhatsapp}
        className="fixed left-4 bottom-6 md:left-6 md:bottom-8 z-[9999] bg-green-500 text-white p-3 rounded-full shadow-lg opacity-70 backdrop-blur-sm hover:opacity-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none"
        title={f.waTitle}
      >
        <FaWhatsapp className="text-xl" />
      </button>

      {isLandingOrHomeFlow ? (
        <div className="fixed right-3 bottom-3 md:right-5 md:bottom-5 z-[9999] flex flex-col gap-2 w-auto max-w-[240px]">
          <button
            onClick={scrollToTop}
            className={`w-full min-w-[110px] bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] text-[#D4AF37] px-3 py-2 rounded-full shadow-md backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-500 flex items-center justify-between gap-2 focus:outline-none
              ${showScrollTop ? "opacity-70 translate-y-0 visible" : "opacity-0 translate-y-10 invisible pointer-events-none"}`}
          >
            <span className={`text-[10px] sm:text-[11px] md:text-sm ${lbl} whitespace-nowrap`}>{f.scrollTop}</span>
            <FaArrowUp className="text-[11px] sm:text-[12px] md:text-sm shrink-0" />
          </button>

          {!hideBackButton && (
            <button
              onClick={goBack}
              className="w-full min-w-[110px] bg-white/90 text-[#0f4c75] border border-[#0f4c75] px-3 py-2 rounded-full shadow-md opacity-70 backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-between gap-2 focus:outline-none"
            >
              <span className={`text-[10px] sm:text-[11px] md:text-sm ${lbl.replace('font-semibold', 'font-medium')} whitespace-nowrap`}>{f.back}</span>
              <FaArrowLeft className="text-[11px] sm:text-[12px] md:text-sm shrink-0" />
            </button>
          )}

          <Link
            href={homeHref}
            prefetch={false}
            className="w-full min-w-[110px] bg-[#D4AF37] text-white px-3 py-2 rounded-full shadow-md opacity-75 backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-between gap-2 focus:outline-none"
          >
            <span className={`text-[10px] sm:text-[11px] md:text-sm ${lbl} whitespace-nowrap`}>{f.home}</span>
            <FaHome className="text-[11px] sm:text-[12px] md:text-sm shrink-0" />
          </Link>
        </div>
      ) : (
        <div className="fixed right-4 bottom-6 md:right-6 md:bottom-8 z-[9999] flex flex-col gap-2 w-28 md:w-32">
          <Link
            href={homeHref}
            prefetch={false}
            className="w-full bg-[#D4AF37] text-white px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-full shadow-md opacity-70 backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-between focus:outline-none"
          >
            <span className={`text-[10px] md:text-sm ${lbl}`}>{f.home}</span>
            <FaHome className="text-xs md:text-sm shrink-0" />
          </Link>

          <button
            onClick={goBack}
            className="w-full bg-white/90 text-[#0f4c75] border border-[#0f4c75] px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-full shadow-md opacity-70 backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-between focus:outline-none"
          >
            <span className={`text-[10px] md:text-sm ${lbl.replace('font-semibold', 'font-medium')}`}>{f.back}</span>
            <FaArrowLeft className="text-xs md:text-sm shrink-0" />
          </button>

          <button
            onClick={scrollToTop}
            className={`w-full bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] text-[#D4AF37] px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-full shadow-md backdrop-blur-sm hover:opacity-100 hover:scale-105 transition-all duration-500 flex items-center justify-between focus:outline-none
              ${showScrollTop ? "opacity-70 translate-y-0 visible" : "opacity-0 translate-y-10 invisible pointer-events-none"}`}
          >
            <span className={`text-[10px] md:text-sm ${lbl}`}>{f.scrollTop}</span>
            <FaArrowUp className="text-xs md:text-sm shrink-0" />
          </button>
        </div>
      )}
    </>
  );
}
