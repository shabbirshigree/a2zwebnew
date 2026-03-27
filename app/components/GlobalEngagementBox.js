"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaShareAlt, FaWhatsapp, FaFacebookF,
  FaTelegramPlane, FaEnvelope
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function GlobalEngagementBox() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const pageKey = useMemo(() => pathname || "/", [pathname]);

  // Landing page پر یہ سیکشن نہ دکھائیں
  if (pathname === "/") return null;

  useEffect(() => {
    setIsMounted(true);
  }, [pageKey]);

  const shareCurrentPage = async (platform) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const pageTitle = typeof document !== "undefined" ? document.title : "ویب پیج";
    const customMessage = pageKey.startsWith("/article")
      ? 'یہ کالم "نگینہِ ہرمز" اپنے دوستوں اور گروپس میں شیئر کریں'
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

    const target = links[platform];
    if (target) window.open(target, "_blank", "noopener,noreferrer,width=700,height=700");
  };

  return (
    <section className="w-full border-y border-[#D4AF37]/25 bg-gradient-to-r from-[#fffef8] via-white to-[#f7fbff]">
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3">
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto whitespace-nowrap">
          <p className="urdu-text text-[#0b314d] text-sm md:text-base font-bold ml-1">شیئرنگ آپشنز:</p>
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

