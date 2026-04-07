"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { getDictionary } from "../lib/i18n";
import {
  FaHeart, FaRegHeart, FaEye, FaShareAlt, FaWhatsapp, FaFacebookF,
  FaTelegramPlane, FaEnvelope
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function engagementTextClass(locale) {
  if (locale === "en") return "font-hero-en";
  if (locale === "fa") return "font-persian";
  return "urdu-text";
}

export default function GlobalEngagementBox() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const dict = getDictionary(locale);
  const eg = /** @type {{ shareOptions: string; morePlatforms: string; shareArticle: string; sharePage: string }} */ (dict.engagement);
  const ect = engagementTextClass(locale);
  const [isMounted, setIsMounted] = useState(false);
  const [likes, setLikes] = useState({});
  const [views, setViews] = useState({});

  const pageKey = useMemo(() => pathname || "/", [pathname]);

  // Landing page پر یہ سیکشن نہ دکھائیں
  if (pathname === "/") return null;

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedLikes = JSON.parse(localStorage.getItem("globalPageLikes") || "{}");
      const storedViews = JSON.parse(localStorage.getItem("globalPageViews") || "{}");
      setLikes(storedLikes);

      const seenKey = `seen-${pageKey}`;
      const nextViews = { ...storedViews };
      if (!sessionStorage.getItem(seenKey)) {
        nextViews[pageKey] = (nextViews[pageKey] || 0) + 1;
        sessionStorage.setItem(seenKey, "1");
        localStorage.setItem("globalPageViews", JSON.stringify(nextViews));
      }
      setViews(nextViews);
    } catch {
      setLikes({});
      setViews({});
    }
  }, [pageKey]);

  const baseViews = 80 + (pageKey.length * 9);
  const totalViews = baseViews + (views[pageKey] || 0);
  const totalLikes = 10 + (pageKey.length % 7) + (likes[pageKey] ? 1 : 0);

  const toggleLike = () => {
    const updated = { ...likes, [pageKey]: !likes[pageKey] };
    setLikes(updated);
    localStorage.setItem("globalPageLikes", JSON.stringify(updated));
  };

  const shareCurrentPage = async (platform) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const pageTitle = typeof document !== "undefined" ? document.title : "";
    const customMessage = pageKey.startsWith("/article")
      ? `${eg.shareArticle}: ${pageTitle}`
      : eg.sharePage;
    const text = `${pageTitle} — ${customMessage}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    const links = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      email: `mailto:shigriinfo@gmail.com?subject=${encodeURIComponent(pageTitle)}&body=${encodedText}%0A%0A${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };

    if (platform === "native" && navigator.share) {
      try {
        await navigator.share({ title: document.title, text, url });
      } catch {
        return;
      }
      return;
    }

    if (platform === "telegram" && typeof window !== "undefined") {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        const tgAppUrl = `tg://msg_url?url=${encodedUrl}&text=${encodedText}`;
        window.location.href = tgAppUrl;
        setTimeout(() => {
          window.open(links.telegram, "_blank", "noopener,noreferrer,width=700,height=700");
        }, 800);
        return;
      }
    }

    const target = links[platform];
    if (target) window.open(target, "_blank", "noopener,noreferrer,width=700,height=700");
  };

  return (
    <section className="w-full border-y border-[#D4AF37]/15 bg-[#f7f8fb]">
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Likes اور Views - Center میں ساتھ ساتھ */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={toggleLike}
              className="inline-flex items-center gap-2 rounded-full bg-[#fff7e0] text-[#b65d4c] px-3 py-2 text-xs md:text-sm font-semibold shadow-sm hover:bg-[#fff1d0] transition"
            >
              {likes[pageKey] ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-red-500" />} {totalLikes}
            </button>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e7f2ff] text-[#1f5a9f] px-3 py-2 text-xs md:text-sm font-semibold shadow-sm">
              <FaEye /> {totalViews}
            </span>
          </div>

          {/* Sharing Buttons - Center میں */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => shareCurrentPage("whatsapp")}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#0b314d] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0b314d] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
              title="Share on WhatsApp"
            >
              <FaWhatsapp />
            </button>
            <button
              type="button"
              onClick={() => shareCurrentPage("facebook")}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#0b314d] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0b314d] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
              title="Share on Facebook"
            >
              <FaFacebookF />
            </button>
            <button
              type="button"
              onClick={() => shareCurrentPage("telegram")}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#0b314d] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0b314d] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
              title="Share on Telegram"
            >
              <FaTelegramPlane />
            </button>
            <button
              type="button"
              onClick={() => shareCurrentPage("email")}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#0b314d] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0b314d] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
              title="Share by Email"
            >
              <FaEnvelope />
            </button>
            <button
              type="button"
              onClick={() => shareCurrentPage("x")}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#0b314d] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0b314d] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
              title="Share on X"
            >
              <FaXTwitter />
            </button>
            <button
              type="button"
              onClick={() => isMounted && shareCurrentPage("native")}
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0b314d] px-4 py-3 font-semibold shadow-lg hover:bg-[#d0a83b] transition"
              title="More share options"
            >
              <FaShareAlt /> <span className={ect}>{eg.morePlatforms}</span>
            </button>
          </div>

          {/* Share Text - تمام Pages پر */}
          <span className={`${ect} text-[#0b314d] text-xs md:text-sm font-semibold`}>
            {locale === "fa" ? "این صفحه را با دوستان و گروه‌های خود به اشتراک بگذارید" : locale === "en" ? "Share this page with friends and groups" : "یہ صفحہ دوستوں اور گروپس میں شیئر کریں"}
          </span>
        </div>
      </div>
    </section>
  );
}

