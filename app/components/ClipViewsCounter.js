'use client';
import { useState, useEffect } from 'react';
import { FaEye, FaChartLine } from 'react-icons/fa';

const LAUNCH_DATE = new Date(Date.UTC(2025, 5, 1));
const TOTAL_BASE = 1_980_000;
const DAILY_BASE_AVG = 4200;

const pad2 = (n) => String(n).padStart(2, '0');
const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
};

const hashStr = (s) => {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
};

const LABELS = {
  ur: {
    today: 'آج کے ویوز',
    total: 'کل ویوز',
  },
  en: {
    today: "Today's Views",
    total: 'Total Views',
  },
  fa: {
    today: 'بازدیدهای امروز',
    total: 'کل بازدید',
  },
};

export default function ClipViewsCounter({ lang = 'ur' }) {
  const labels = LABELS[lang] || LABELS.ur;
  const dir = lang === 'en' ? 'ltr' : 'rtl';
  const [views, setViews] = useState({ today: 0, total: 0 });

  const computeBase = () => {
    const tk = todayKey();
    const dayHash = hashStr(tk);
    const todayMin = 28500;
    const todayMax = 46800;
    const todayBase = todayMin + (dayHash % (todayMax - todayMin + 1));

    const now = new Date();
    const msInDay = 24 * 60 * 60 * 1000;
    const daysSince = Math.max(0, Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - LAUNCH_DATE.getTime()) / msInDay));
    const totalCumulative = daysSince * DAILY_BASE_AVG;

    let sessionToday = 0;
    try {
      const raw = localStorage.getItem('nuq_views');
      if (raw) {
        const data = JSON.parse(raw);
        if (data.date === tk) {
          sessionToday = data.extraToday || 0;
        }
      }
    } catch (e) {}

    const liveExtraToday = sessionToday;
    const todayFinal = todayBase + liveExtraToday;
    const totalFinal = TOTAL_BASE + totalCumulative + liveExtraToday;

    return { today: todayFinal, total: totalFinal };
  };

  const bumpAndSave = () => {
    try {
      const tk = todayKey();
      let extra = 0;
      try {
        const raw = localStorage.getItem('nuq_views');
        if (raw) {
          const data = JSON.parse(raw);
          if (data.date === tk) extra = data.extraToday || 0;
        }
      } catch (e) {}

      const add = 1 + (hashStr(`${tk}-${extra}-${Date.now()}`) % 2);
      const next = { date: tk, extraToday: extra + add };
      localStorage.setItem('nuq_views', JSON.stringify(next));
    } catch (e) {}
  };

  useEffect(() => {
    const initialVisit = () => {
      try {
        const tk = todayKey();
        const lastSeen = localStorage.getItem('nuq_last_visit');
        if (lastSeen !== tk) {
          localStorage.setItem('nuq_last_visit', tk);
          const extraBoost = 3 + (hashStr(tk + '-boost') % 3);
          try {
            const raw = localStorage.getItem('nuq_views');
            let prev = 0;
            if (raw) {
              const d = JSON.parse(raw);
              if (d.date === tk) prev = d.extraToday || 0;
            }
            localStorage.setItem('nuq_views', JSON.stringify({ date: tk, extraToday: prev + extraBoost }));
          } catch (e) {}
        }
      } catch (e) {}
    };
    initialVisit();
    setViews(computeBase());

    const tick = () => {
      bumpAndSave();
      setViews(computeBase());
    };

    const id = setInterval(tick, 60000);
    const firstId = setTimeout(tick, 25000);
    return () => {
      clearInterval(id);
      clearTimeout(firstId);
    };
  }, []);

  const formatNum = (n) => n.toLocaleString('en-US');

  return (
    <div dir={dir} className="w-full max-w-[260px] mx-auto mt-4">
      <div className="bg-gradient-to-r from-[#0b314d]/80 via-[#111] to-[#0b314d]/80 border border-[#D4AF37]/40 rounded-2xl p-3 md:p-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
        <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
            <span className="text-[10px] md:text-xs text-green-300/90 font-semibold tracking-wide">
              {lang === 'en' ? 'LIVE' : lang === 'fa' ? 'زنده' : 'لائیو'}
            </span>
          </div>
          <FaChartLine className="text-[#D4AF37]/70 text-[11px] md:text-sm" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <FaEye className="text-[#D4AF37] text-[11px] md:text-sm" />
              <span className="text-[11px] md:text-xs text-white/80 font-medium">{labels.today}</span>
            </div>
            <span className="text-[#D4AF37] font-black text-sm md:text-base tracking-tight tabular-nums">
              {formatNum(views.today)}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <FaChartLine className="text-white/70 text-[11px] md:text-sm" />
              <span className="text-[11px] md:text-xs text-white/70 font-medium">{labels.total}</span>
            </div>
            <span className="text-white font-black text-sm md:text-base tracking-tight tabular-nums drop-shadow-[0_0_6px_rgba(212,175,55,0.3)]">
              {formatNum(views.total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
