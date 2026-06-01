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
import Image from "next/image";
import CldImage from "./CldImage";
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

// 🖼️ سلائیڈر کی تصاویر (Cloudinary)
const SLIDES = [
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1776476592/5_stvhcf.jpg" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1776476591/2_seh6lj.jpg" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1776476591/3_lsnc0p.jpg" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1776476592/6_ikke94.jpg" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1776476591/1_jo1rdp.jpg" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1776476592/4_tpy60y.jpg" }
];

const SOCIAL_LINKS = [
  { icon: <FaYoutube />, link: "https://youtube.com/@noorproduction", color: "hover:text-red-500", label: "YouTube" },
    { icon: <FaFacebook />, link: "https://facebook.com/shigri51214", color: "hover:text-blue-600", label: "Facebook" },
    { icon: <FaWhatsapp />, link: "https://wa.me/923334491715", color: "hover:text-green-500", label: "WhatsApp" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@noorproductions786?_r=1&_t=ZS-947NqSEZDCZ", color: "hover:text-pink-500", label: "TikTok" },
    { icon: <FaTwitter />, link: "https://x.com/shigri41215", color: "hover:text-sky-400", label: "Twitter" },
  ];

const MENU_CONFIG = [
  { key: "home", link: "/home", icon: FaHome },
  { key: "about", link: "/about", icon: FaUserAlt },
  { key: "project", link: "/noor-ul-quran", icon: FaBookOpen },
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
  const [isMobile, setIsMobile] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        .font-kufi { font-family: var(--font-kufi), 'Reem Kufi', sans-serif !important; }
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
            aria-label={isListening ? dict.nav.listening : dict.nav.searchPlaceholder}
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

      {/* زبانیں: Cloudinary والے لہراتے پرچم + فاصلہ */}
      <div
        className="flex flex-row items-center gap-2 md:gap-3 z-10 shrink-0"
        dir="ltr"
        role="group"
        aria-label={dict.nav.languagesLabel}
      >
        <span className="text-[13px] sm:text-[14px] md:text-lg font-bold text-[#fef3c7] whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] pr-0.5 leading-tight" title={dict.nav.languagesLabel}>
          {dict.nav.languagesLabel}
        </span>
        <div className="flex items-center justify-center gap-2 md:gap-3">
          {[
            {
              code: "ur",
              src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776121608/pak-flag_sj8vdp.webp",
              label: "Urdu",
            },
            {
              code: "fa",
              src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776121608/iran-flag_jjfv2w.webp",
              label: "فارسی",
            },
            {
              code: "en",
              src: "https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1776121608/england-flag_clc1jb.webp",
              label: "English",
            },
          ].map(({ code, src, label }) => {
            const active = locale === code;
            return (
              <button
                key={code}
                type="button"
                title={label}
                aria-label={`${label} — ${dict.nav.languagesLabel}`}
                onClick={() => {
                  const newPath = getLocalizedPath(pathname, code);
                  router.push(newPath);
                }}
                className={`
                  relative flex shrink-0 items-center justify-center rounded-[2px] bg-transparent
                  h-[14px] min-h-[14px] w-[26px] min-w-[26px] md:h-[16px] md:min-h-[16px] md:w-[30px] md:min-w-[30px]
                  transition-transform duration-200 hover:scale-110 hover:z-10
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fde68a] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0b314d]
                  ${active ? "lang-flag-active-ring z-[1]" : "opacity-95 hover:opacity-100"}
                `}
              >
                <Image
                  src={src}
                  alt={label}
                  width={30}
                  height={16}
                  className="object-cover rounded-[1px]"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* سوشل میڈیا لنکس: موبائل پر غائب، ڈیسک ٹاپ پر ظاہر */}
      {!isMobile && (
        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          {SOCIAL_LINKS.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`text-[#D4AF37] transition-all duration-200 hover:scale-125 ${item.color} flex items-center justify-center p-1 md:p-1.5`}
            >
              <span className="text-[14px] md:text-lg drop-shadow-md">{item.icon}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function HeroSlider() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const dict = getDictionary(locale);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navDir = locale === "en" ? "ltr" : "rtl";
  const rolesLine = [dict.hero.role1, dict.hero.role2, dict.hero.role3, dict.hero.role4, dict.hero.role5];

  return (
    <div className="flex flex-col w-full bg-[#0b314d] overflow-hidden relative">
      <div className="relative w-full h-[6.5rem] md:h-[15rem] lg:h-[20rem] overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-in-out ${i === current ? "opacity-100 z-20 scale-100" : "opacity-0 z-10"
              }`}
          >
            <CldImage
              src={s.img}
              alt={`Slide ${i + 1}`}
              fill
              sizes="100vw"
              className="object-fill object-center block"
              style={{ filter: i === current ? 'brightness(1.04) saturate(1.08)' : 'brightness(0.88) saturate(0.95)' }}
              priority={i === 0}
            />
          </div>
        ))}
        <div className="absolute inset-x-0 top-0 z-[25] pointer-events-none flex justify-center pt-0.5 px-1">
          <p
            className={`${isMobile ? "text-[3px]" : "text-[5px] md:hero-header-tight md:hero-mashallah"} font-kufi text-[#f3e5bc] font-normal opacity-30 md:opacity-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]`}
            dir="rtl"
          >
            {HERO_MASHALLAH_AR}
          </p>
        </div>
      </div>

      <div className="py-0.5 md:py-2 bg-[#0f4c75] md:bg-[#0f4c75]/80 px-1.5 text-center border-t border-[#D4AF37]/20 relative z-40 flex flex-col items-center justify-center">
        <p className={`${isMobile ? "text-[6px]" : "text-[7px] md:text-base"} hero-ayah font-kufi text-[#ffffff] font-normal tracking-wide stars-effect brightness-150 px-0.5 leading-none md:leading-normal`}>
          {HERO_NUR_AYAH_AR}
        </p>

        <div className="relative z-10 animate-shrink-enter leading-none mt-0.5 md:mt-1">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 bg-[#D4AF37] blur-[16px] opacity-20 animate-pulse" />
          <div className="relative text-[#D4AF37] text-[1rem] md:text-[1.15rem] animate-breath leading-none">
            <FaBookOpen />
          </div>
        </div>

        <div className="flex flex-col items-center gap-0.5 md:gap-1 mt-0.5">
          <h1
            className={`text-fluid-reset text-[#D4AF37] tracking-tight leading-tight font-black ${locale === "ur"
                ? `urdu-text ${isMobile ? "text-[32px]" : "text-[24px]"} md:text-[1.5rem] lg:text-[1.7rem] whitespace-nowrap`
                : locale === "fa"
                  ? `${isMobile ? "text-[1.8rem]" : "text-[1.3rem]"} font-pers text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] max-w-[92vw]`
                  : `${isMobile ? "text-[1.8rem]" : "text-[1.3rem]"} font-hero-en md:text-[1.4rem] lg:text-[1.5rem]`
              }`}
          >
            {dict.hero.name}
          </h1>
          <p
            className={`hero-header-tight hero-roles text-white/90 font-normal tracking-tight border-t border-[#D4AF37]/25 pt-0.5 md:pt-1 mt-0.5 md:mt-1 flex flex-wrap justify-center content-center gap-x-0.5 gap-y-0 max-w-[40rem] px-0.5 ${locale === "en"
                ? `font-hero-en max-w-[34rem] ${isMobile ? "text-[6px]" : "text-[10px]"}`
                : locale === "fa"
                  ? `font-persian ${isMobile ? "text-[8px]" : "text-[13px]"}`
                  : `urdu-header-roles ${isMobile ? "text-[8px]" : "text-[13px]"}`
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
      </div>

      <div className="bg-[#0b314d] py-2 px-1 md:py-2 border-t border-[#D4AF37]/30 shadow-lg relative z-40">
        <nav
          className={`${isMobile
              ? "grid grid-cols-4 gap-x-1 gap-y-2 px-1"
              : "flex flex-wrap justify-center gap-x-1.5 gap-y-1 items-center"
            } max-w-6xl mx-auto`}
          dir={navDir}
        >
          {(isMobile
            ? [
              MENU_CONFIG.find((i) => i.key === "home"),
              MENU_CONFIG.find((i) => i.key === "about"),
              MENU_CONFIG.find((i) => i.key === "articles"),
              MENU_CONFIG.find((i) => i.key === "library"),
              ...MENU_CONFIG.filter((i) => !["home", "about", "articles", "library"].includes(i.key)),
            ]
            : MENU_CONFIG
          ).map((item) => {
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
                className={`group relative flex ${isMobile ? "flex-col justify-center py-1 active:scale-105 active:bg-[#D4AF37] active:text-[#0b314d] active:z-50" : "flex-row px-3 py-1.5"
                  } items-center gap-1 rounded-xl transition-all duration-300 ${isMobile ? "bg-gradient-to-br from-[#0f4c75]/30 to-[#0b314d]/50 border border-[#D4AF37]/10 backdrop-blur-sm" : "hover:bg-[#0f4c75]/55 hover:-translate-y-1"
                  } ${active
                    ? "text-[#D4AF37] bg-[#0f4c75]/80 border-[#D4AF37]/40 shadow-sm"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                <span className={`${isMobile ? "text-[12px] group-active:rotate-[360deg] transition-transform duration-700" : "text-[14px] lg:text-[16px]"
                  } transition-all duration-500 group-hover:scale-110 group-hover:text-[#D4AF37] z-10`}>
                  <Icon />
                </span>
                <span
                  className={`${isMobile ? "text-[10px] font-bold" : "text-[13px] md:text-[14px] lg:text-[15px]"
                    } leading-none tracking-tight text-center ${locale === "en"
                      ? "font-sans"
                      : locale === "fa"
                        ? "font-persian"
                        : "urdu-text"
                    }`}
                >
                  {name}
                </span>
                {!isMobile && (
                  <div
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 ${active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap');
        .font-amiri { font-family: 'Amiri', serif; }
        .font-kufi { font-family: 'Reem Kufi', sans-serif !important; }
        .hero-mashallah, .hero-ayah { font-family: 'Reem Kufi', sans-serif !important; }
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
        @keyframes slide-glow {
          0% { transform: scale(0.98); opacity: 0.92; }
          50% { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); opacity: 0.96; }
        }
        .animate-slide-glow { animation: slide-glow 6s ease-in-out infinite alternate; }
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
