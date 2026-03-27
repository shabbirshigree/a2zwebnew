"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaHeart, FaRegHeart, FaEye, FaShareAlt, FaWhatsapp, FaFacebookF,
  FaTelegramPlane, FaEnvelope, FaCopy
} from "react-icons/fa";

export default function GlobalEngagementBox() {
  const pathname = usePathname();
  const [likes, setLikes] = useState({});
  const [views, setViews] = useState({});

  const pageKey = useMemo(() => pathname || "/", [pathname]);

  useEffect(() => {
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
    const text = "یہ صفحہ دیکھیے - بہت مفید مواد";
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    const links = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      email: `mailto:?subject=${encodeURIComponent("Interesting page")}&body=${encodedText}%0A%0A${encodedUrl}`,
    };

    if (platform === "native" && navigator.share) {
      try {
        await navigator.share({ title: document.title, text, url });
      } catch {
        return;
      }
      return;
    }

    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(url);
        alert("لنک کاپی ہو گیا");
      } catch {
        alert("لنک کاپی نہیں ہو سکا");
      }
      return;
    }

    const target = links[platform];
    if (target) window.open(target, "_blank", "noopener,noreferrer,width=700,height=700");
  };

  return (
    <div className="fixed bottom-4 left-4 z-[60] w-[92vw] max-w-xs rounded-2xl border border-[#D4AF37]/40 bg-white/95 backdrop-blur-md shadow-2xl p-3">
      <div className="flex items-center justify-between mb-2.5">
        <p className="urdu-text text-[#0b314d] text-sm font-bold">پیج انگیجمنٹ</p>
        <button
          type="button"
          onClick={() => shareCurrentPage("native")}
          className="text-xs px-2.5 py-1 rounded-full bg-[#0b314d] text-white flex items-center gap-1.5 hover:bg-[#0f4c75]"
        >
          <FaShareAlt /> شیئر
        </button>
      </div>

      <div className="flex items-center gap-2 mb-2.5 text-xs">
        <button
          type="button"
          onClick={toggleLike}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-full bg-rose-50 text-rose-600 hover:scale-[1.02] transition-transform"
        >
          {likes[pageKey] ? <FaHeart className="animate-pulse" /> : <FaRegHeart />} {totalLikes}
        </button>
        <span className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-full bg-blue-50 text-blue-700">
          <FaEye /> {totalViews}
        </span>
      </div>

      <div className="flex items-center justify-between gap-1.5">
        <button type="button" onClick={() => shareCurrentPage("whatsapp")} className="p-2 rounded-full bg-green-100 text-green-700 hover:scale-110 transition-transform"><FaWhatsapp /></button>
        <button type="button" onClick={() => shareCurrentPage("facebook")} className="p-2 rounded-full bg-blue-100 text-blue-700 hover:scale-110 transition-transform"><FaFacebookF /></button>
        <button type="button" onClick={() => shareCurrentPage("telegram")} className="p-2 rounded-full bg-sky-100 text-sky-700 hover:scale-110 transition-transform"><FaTelegramPlane /></button>
        <button type="button" onClick={() => shareCurrentPage("email")} className="p-2 rounded-full bg-gray-100 text-gray-700 hover:scale-110 transition-transform"><FaEnvelope /></button>
        <button type="button" onClick={() => shareCurrentPage("copy")} className="p-2 rounded-full bg-violet-100 text-violet-700 hover:scale-110 transition-transform"><FaCopy /></button>
      </div>
    </div>
  );
}

