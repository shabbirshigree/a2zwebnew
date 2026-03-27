"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaHeart, FaRegHeart, FaEye, FaShareAlt, FaWhatsapp, FaFacebookF,
  FaTelegramPlane, FaEnvelope
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function GlobalEngagementBox() {
  const pathname = usePathname();
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
    const pageTitle = typeof document !== "undefined" ? document.title : "ویب پیج";
    const customMessage = pageKey.startsWith("/article")
      ? `حاجی شبیر احمد شگری کی یہ تحریر شیئر کریں: ${pageTitle}`
      : "یہ صفحہ اپنے دوستوں اور گروپس میں شیئر کریں";
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
    <section className="w-full border-y border-[#D4AF37]/25 bg-gradient-to-r from-[#fffef8] via-white to-[#f7fbff]">
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3">
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto whitespace-nowrap">
          <p className="urdu-text text-[#0b314d] text-sm md:text-base font-bold ml-1">شیئرنگ آپشنز:</p>
          <button
            type="button"
            onClick={toggleLike}
            className="px-3 py-1.5 inline-flex items-center justify-center gap-1.5 rounded-full bg-rose-50 text-rose-600 hover:scale-[1.02] transition-transform text-xs"
          >
            {likes[pageKey] ? <FaHeart className="animate-pulse" /> : <FaRegHeart />} {totalLikes}
          </button>
          <span className="px-3 py-1.5 inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-50 text-blue-700 text-xs">
            <FaEye /> {totalViews}
          </span>
          <button type="button" onClick={() => shareCurrentPage("whatsapp")} className="p-2 rounded-full bg-green-100 text-green-700 hover:scale-110 transition-transform"><FaWhatsapp /></button>
          <button type="button" onClick={() => shareCurrentPage("facebook")} className="p-2 rounded-full bg-blue-100 text-blue-700 hover:scale-110 transition-transform"><FaFacebookF /></button>
          <button type="button" onClick={() => shareCurrentPage("telegram")} className="p-2 rounded-full bg-sky-100 text-sky-700 hover:scale-110 transition-transform"><FaTelegramPlane /></button>
          <button type="button" onClick={() => shareCurrentPage("email")} className="p-2 rounded-full bg-gray-100 text-gray-700 hover:scale-110 transition-transform"><FaEnvelope /></button>
          <button type="button" onClick={() => shareCurrentPage("x")} className="p-2 rounded-full bg-slate-100 text-slate-700 hover:scale-110 transition-transform"><FaXTwitter /></button>
          <button
            type="button"
            onClick={() => isMounted && shareCurrentPage("native")}
            className="text-xs px-2.5 py-1.5 rounded-full bg-[#0b314d] text-white inline-flex items-center gap-1.5 hover:bg-[#0f4c75]"
          >
            <FaShareAlt /> دوسرے پلیٹ فارمز
          </button>
        </div>
      </div>
    </section>
  );
}

