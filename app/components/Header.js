"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaBookOpen,
  FaPhoneAlt,
  FaUserAlt,
  FaImages,
  FaNewspaper,
  FaTv,
  FaBriefcase,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTiktok,
  FaAward,
  FaHandshake,
  FaLandmark,
  FaUsers,
  FaPalette,
  FaMicrophone,
  FaStop,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { getDictionary, getHomePath, getLocalizedPath } from "../lib/i18n";

const isHomePath = (p) =>
  p === "/" || p === "/home" || p === "/en/home" || p === "/fa/home";

/** تینوں زبانوں میں ایک ہی عربی متن — خط کوفی (Reem Kufi) */
const HERO_MASHALLAH_AR =
  "مَا شَاءَ اللّٰهُ لَا قُوَّةَ إِلَّا بِاللّٰهِ";
const HERO_NUR_AYAH_AR =
  "اَللّٰهُ نُوْرُ السَّمٰوٰتِ وَالْاَرْضِ";

const MENU_CONFIG = [
  { key: "home", link: "/home", icon: FaHome },
  { key: "about", link: "/about", icon: FaUserAlt },
  { key: "project", link: "/project", icon: FaBookOpen },
  { key: "articles", link: "/article", icon: FaNewspaper },
  { key: "diplomatic", link: "/diplomatic-services", icon: FaHandshake },
  { key: "cultural", link: "/cultural", icon: FaLandmark },
  { key: "unity", link: "/unity", icon: FaUsers },
  { key: "library", link: "/library", icon: FaBookOpen },
  { key: "talkshows", link: "/talkshows", icon: FaMicrophone },
  { key: "channels", link: "/channels", icon: FaTv },
  { key: "awards", link: "/awards", icon: FaAward },
  { key: "design", link: "/design", icon: FaPalette },
  { key: "gallery", link: "/gallery", icon: FaImages },
  { key: "services", link: "/services", icon: FaBriefcase },
  { key: "contact", link: "/contact", icon: FaPhoneAlt },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, setLocale } = useLocale();
  const dict = getDictionary(locale);

  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const onSync = (e) => {
      if (typeof e.detail === "string") setSearchQuery(e.detail);
    };
    window.addEventListener("search-query-updated", onSync);
    return () => window.removeEventListener("search-query-updated", onSync);
  }, []);

  useEffect(() => {
    if (pathname !== "/search" || typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search).get("q");
    setSearchQuery(q || "");
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    const langMap = { ur: "ur-PK", fa: "fa-IR", en: "en-US" };
    recognition.lang = langMap[locale] || "ur-PK";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      router.push(`/search?q=${encodeURIComponent(transcript)}`);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      try {
        recognition.abort();
      } catch {
        /* ignore */
      }
    };
  }, [router, locale]);

  const toggleListening = async () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        stream.getTracks().forEach((track) => track.stop());
        setTimeout(() => {
          const langMap = { ur: "ur-PK", fa: "fa-IR", en: "en-US" };
          recognitionRef.current.lang = langMap[locale] || "ur-PK";
          recognitionRef.current.start();
        }, 150);
      } catch {
        alert(dict.nav.micDenied);
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navDir = locale === "en" ? "ltr" : "rtl";
  const formDir = locale === "en" ? "ltr" : "rtl";

  return (
    <div
      dir={navDir}
      className="bg-[#0b314d] text-[#D4AF37] px-2 md:px-6 border-b border-[#D4AF37]/30 relative z-50 flex items-center justify-between h-[45px]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap');
        .font-kufi { font-family: 'Reem Kufi', sans-serif; }
        @keyframes wave-grow { 0%, 100% { height: 4px; } 50% { height: 14px; } }
        .wave-bar { width: 2px; background-color: #ef4444; margin: 0 1px; border-radius: 2px; animation: wave-grow 1s infinite ease-in-out; }
        @keyframes star-out {
          0% { transform: scale(0) translate(0, 0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: scale(1.8) translate(var(--star-x), var(--star-y)); opacity: 0; }
        }
        .stars-effect { position: relative; display: inline-block; }
        .stars-effect::before,
        .stars-effect::after {
          content: '';
          position: absolute;
          width: 3px; height: 3px;
          border-radius: 50%;
          background-color: white;
          opacity: 0;
          pointer-events: none;
          animation: star-out 3s infinite ease-out;
          box-shadow: 0 0 6px white;
        }
        .stars-effect::before { top: -4px; left: 10%; --star-x: -15px; --star-y: -20px; animation-delay: 0s; }
        .stars-effect::after { bottom: -4px; right: 10%; --star-x: 15px; --star-y: 20px; animation-delay: 1.5s; }
        @keyframes lang-flag-flutter {
          0%, 100% { transform: perspective(120px) rotateY(-6deg) skewY(0.5deg); }
          50% { transform: perspective(120px) rotateY(6deg) skewY(-0.5deg); }
        }
        .lang-flag-flutter {
          transform-origin: 50% 0%;
          animation: lang-flag-flutter 2.8s ease-in-out infinite;
        }
        .lang-flag-active-ring {
          box-shadow: 0 0 0 2px #fde68a, 0 2px 8px rgba(0,0,0,0.35);
        }
      `}</style>

      <div className="flex items-center min-w-0">
        <form
          onSubmit={handleSearch}
          className="relative flex items-center rounded-full border border-[#D4AF37]/40 bg-[#0f4c75]/50 w-[120px] md:w-[280px] h-[30px]"
          dir={formDir}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isListening ? dict.nav.listening : dict.nav.searchPlaceholder
            }
            className={`w-full bg-transparent text-white text-[12px] outline-none ${locale === "en" ? "pl-8 pr-10" : "pr-8 pl-10"
              }`}
          />
          <FaSearch
            className={`absolute text-[12px] pointer-events-none opacity-70 ${locale === "en" ? "left-2" : "right-2"
              }`}
          />
          <button
            type="button"
            onClick={toggleListening}
            className={`absolute text-[#D4AF37] ${locale === "en" ? "right-2" : "left-2"
              }`}
            aria-label="Voice search"
          >
            {isListening ? (
              <div className="flex items-center">
                <div className="wave-bar" />
                <div className="wave-bar" style={{ animationDelay: "0.2s" }} />
                <FaStop className="text-red-500 ml-1" />
              </div>
            ) : (
              <FaMicrophone />
            )}
          </button>
        </form>
      </div>

      {/* زبانیں: مستطیل پرچم (PNG) + مختصر لیبل — ہر زبان میں الگ لفظ */}
      <div
        className="flex flex-row items-center gap-1.5 md:gap-2.5 z-10 shrink-0"
        dir="ltr"
        role="group"
        aria-label={dict.nav.languagesLabel}
      >
        <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-[#fef3c7] whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] pr-0.5" title={dict.nav.languagesLabel}>
          {dict.nav.languagesLabel}
        </span>
        <div className="flex items-center gap-0.5 md:gap-1">
          {[
            {
              code: "ur",
              src: "https://flagcdn.com/w40/pk.png",
              label: "Urdu",
            },
            {
              code: "fa",
              src: "https://flagcdn.com/w40/ir.png",
              label: "فارسی",
            },
            {
              code: "en",
              src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/60px-Flag_of_England.svg.png",
              label: "English",
            },
          ].map(({ code, src, label }, idx) => {
            const active = locale === code;
            return (
              <button
                key={code}
                type="button"
                title={label}
                aria-label={`${label} — ${dict.nav.languagesLabel}`}
                onClick={() => {
                  setLocale(/** @type {'ur'|'fa'|'en'} */(code));
                  const newPath = getLocalizedPath(pathname, code);
                  router.push(newPath);
                }}
                style={{ animationDelay: `${idx * 0.35}s` }}
                className={`
                  relative p-0 shrink-0 rounded-[2px] overflow-hidden
                  w-[22px] h-[15px] md:w-[26px] md:h-[17px]
                  transition-transform duration-200 hover:scale-110 hover:z-10
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fde68a] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0b314d]
                  ${active ? "lang-flag-active-ring z-[1]" : "opacity-95 hover:opacity-100 shadow-[0_1px_4px_rgba(0,0,0,0.45)]"}
                `}
              >
                <img
                  src={src}
                  alt=""
                  width={40}
                  height={27}
                  className={`block h-full w-full object-cover pointer-events-none lang-flag-flutter ${active ? "brightness-105" : ""}`}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function HeroSlider() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const dict = getDictionary(locale);
  const [current, setCurrent] = useState(0);

  const slides = [
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/5_s7hgrb.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/3_fm3ja9.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104582/6_oqageq.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png" },
    { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png" },
  ];

  const socialLinks = [
    { icon: <FaYoutube />, link: "https://youtube.com/@noorproduction", color: "hover:text-red-500" },
    { icon: <FaFacebook />, link: "https://facebook.com/shigri51214", color: "hover:text-blue-600" },
    { icon: <FaWhatsapp />, link: "https://wa.me/923334491715", color: "hover:text-green-500" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@noorproductions786?_r=1&_t=ZS-947NqSEZDCZ", color: "hover:text-pink-500" },
    { icon: <FaTwitter />, link: "https://x.com/shigri41215", color: "hover:text-sky-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const navDir = locale === "en" ? "ltr" : "rtl";
  const rolesLine = [dict.hero.role1, dict.hero.role2, dict.hero.role3, dict.hero.role4];

  return (
    <div className="flex flex-col w-full bg-[#0b314d] overflow-hidden relative">
      <div className="relative w-full aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5.5] overflow-hidden bg-[#0b314d]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${i === current ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
          >
            <img
              src={s.img}
              alt=""
              className="w-full h-full object-fill block"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={i === 0 ? "high" : "low"}
            />
          </div>
        ))}
        <div className="absolute inset-x-0 top-0 z-[25] pointer-events-none flex justify-center pt-1 md:pt-1.5 px-1">
          <p
            className="hero-header-tight hero-mashallah font-kufi text-[#f3e5bc] font-normal tracking-normal max-w-[min(100%,19rem)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
            dir="rtl"
          >
            {HERO_MASHALLAH_AR}
          </p>
        </div>
      </div>

      <div className="bg-[#0f4c75]/80 py-2 md:py-2.5 px-1.5 text-center border-t border-[#D4AF37]/30 relative z-40 flex flex-col items-center justify-center gap-2 md:gap-2">
        <p className="hero-header-tight hero-ayah font-kufi text-[#ffffff] font-normal tracking-wide stars-effect brightness-150 px-0.5 max-w-[min(100%,19rem)]">
          {HERO_NUR_AYAH_AR}
        </p>

        <div className="relative z-10 animate-shrink-enter leading-none mt-1 md:mt-1.5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 bg-[#D4AF37] blur-[18px] opacity-20 animate-pulse" />
          <div className="relative text-[#D4AF37] text-[1.1rem] md:text-[1.25rem] animate-breath leading-none">
            <FaBookOpen />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1.5 md:gap-1.5 mt-1">
          <h1
            className={`text-fluid-reset text-[#D4AF37] tracking-tight leading-tight ${locale === "ur"
                ? "urdu-text text-[22px] sm:text-[24px] md:text-[1.5rem] lg:text-[1.65rem] font-semibold whitespace-nowrap"
                : locale === "fa"
                  ? "font-persian font-semibold text-[1.15rem] sm:text-[1.25rem] md:text-[1.4rem] lg:text-[1.55rem] max-w-[92vw]"
                  : "font-hero-en font-semibold text-[1.2rem] sm:text-[1.3rem] md:text-[1.45rem] lg:text-[1.6rem]"
              }`}
          >
            {dict.hero.name}
          </h1>
          <p
            className={`hero-header-tight hero-roles text-white/90 font-normal tracking-tight border-t border-[#D4AF37]/25 pt-1 md:pt-1.5 mt-1 md:mt-1.5 flex flex-wrap justify-center content-center gap-x-0.5 gap-y-0 max-w-[40rem] px-0.5 ${locale === "en"
                ? "font-hero-en max-w-[34rem]"
                : locale === "fa"
                  ? "font-persian"
                  : "urdu-header-roles"
              }`}
            dir={locale === "en" ? "ltr" : "rtl"}
          >
            {rolesLine.map((r, i) => (
              <span key={i} className="inline-flex items-center gap-x-0.5">
                {i > 0 && <span className="opacity-40 px-0.5">|</span>}
                <span>{r}</span>
              </span>
            ))}
          </p>
        </div>

        <div className="flex gap-4 md:gap-5 mt-1.5 md:mt-1.5 justify-center z-50">
          {socialLinks.map((s, i) => (
            <Link
              key={i}
              href={s.link}
              target="_blank"
              className="text-white transition-all duration-700 hover:rotate-[360deg] hover:-translate-y-2 hover:scale-125"
            >
              <span className={`text-sm md:text-base block drop-shadow-md ${s.color}`}>
                {s.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#0b314d] py-2 px-1.5 md:py-2.5 border-t border-[#D4AF37]/30 shadow-md relative z-40">
        <nav
          className="flex flex-wrap justify-center gap-x-1.5 md:gap-x-2 gap-y-1 md:gap-y-1 items-center max-w-6xl mx-auto"
          dir={navDir}
        >
          {MENU_CONFIG.map((item) => {
            const Icon = item.icon;
            const name = dict.menu[item.key];
            const href =
              item.key === "home"
                ? getHomePath(locale)
                : getLocalizedPath(item.link, locale);
            const active = pathname === href;
            return (
              <Link
                key={item.key}
                href={href}
                className={`group relative flex flex-row items-center gap-1 rounded-lg px-1.5 md:px-2 py-1 md:py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f4c75]/55 ${active
                    ? "text-[#D4AF37] bg-[#0f4c75]/35"
                    : "text-white/80 hover:text-white"
                  }`}
              >
                <span className="text-[10px] md:text-[11px] transition-all duration-500 group-hover:scale-110 group-hover:text-[#D4AF37] z-10 [&>svg]:block">
                  <Icon />
                </span>
                <span
                  className={`text-[9px] md:text-[10px] leading-tight ${locale === "en"
                      ? "font-sans font-medium"
                      : locale === "fa"
                        ? "font-persian font-semibold"
                        : "urdu-text font-bold"
                    }`}
                >
                  {name}
                </span>
                <div
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 ${active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap');
        .font-amiri { font-family: 'Amiri', serif; }
        .font-kufi { font-family: 'Reem Kufi', sans-serif; }
        @keyframes shrink-enter {
          0% { transform: scale(3); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-shrink-enter { animation: shrink-enter 1.5s ease-out forwards; }
        @keyframes breath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-breath { animation: breath 3s infinite ease-in-out; }
      `}</style>
    </div>
  );
}

export default function Header() {
  return (
    <>
      <Navbar />
      <HeroSlider />
    </>
  );
}
