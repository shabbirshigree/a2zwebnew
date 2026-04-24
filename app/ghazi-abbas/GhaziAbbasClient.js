"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar, HeroSlider } from "../components/Header";
import Footer from "../components/Footer";
import { FaYoutube, FaVideo, FaShareAlt, FaPlay, FaTimes } from "react-icons/fa";
import { ghaziData } from "./ghaziData";

function GhaziAbbasContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const vidId = searchParams.get("v");
    if (vidId) {
      let found = null;
      const allVids = [
        ...ghaziData.ziyaratVideos,
        ...ghaziData.extraVideos,
        ...ghaziData.shorts,
        { id: 'news-vid', title: ghaziData.news.headline, url: ghaziData.news.video },
        { id: 'award-vid', title: "صدائے غازی ایوارڈ", url: ghaziData.award.video }
      ];
      found = allVids.find(v => v.id === vidId);
      if (found) {
        setActiveVideo(found);
      }
    }
  }, [searchParams]);

  const handleShare = (e, video) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}?v=${video.id}`;
    const shareText = `*${video.title}*\n\nحرم حضرت عباس علمدار علیہ السلام کے حوالے سے یہ خصوصی ویڈیو دیکھیں 👇\n\n${shareUrl}`;

    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: shareText,
        url: shareUrl,
      }).catch(() => {});
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
    }
  };

  const renderSection = (title, items) => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-[#0b314d] mb-8 urdu-text border-r-4 border-red-600 pr-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setActiveVideo(item);
              router.push(`?v=${item.id}`, { scroll: false });
            }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-red-600 transition-all cursor-pointer"
          >
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
               <FaVideo className="text-4xl text-white/30 group-hover:text-red-600 transition-colors" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-red-600 p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <FaPlay className="text-white ml-1" />
                  </div>
               </div>
            </div>
            <div className="p-4 flex items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-bold text-gray-800 urdu-text line-clamp-2 leading-relaxed">{item.title}</h3>
              <button 
                onClick={(e) => handleShare(e, item)}
                className="bg-gray-50 hover:bg-red-600 text-gray-400 hover:text-white p-2 rounded-lg transition-all"
              >
                <FaShareAlt size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-[#fcfcfc] font-sans" dir="rtl">
      <Navbar />
      <HeroSlider />

      <header className="bg-gradient-to-r from-red-900 to-black text-white py-16 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] urdu-text mb-4">{ghaziData.intro.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-white/80 urdu-text font-light">{ghaziData.intro.heroSubtitle}</p>
         </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                 <img src={ghaziData.intro.profileGif} alt="Profile" className="w-full rounded-2xl shadow-2xl border-4 border-[#D4AF37]" />
              </div>
              <div className="w-full md:w-2/3">
                 <h2 className="text-3xl font-bold text-[#0b314d] mb-6 urdu-text">{ghaziData.intro.welcome}</h2>
                 <p className="text-lg leading-loose text-gray-700 urdu-text text-justify">{ghaziData.intro.text}</p>
                 <div className="mt-6 font-bold text-[#0b314d] urdu-text text-xl">— {ghaziData.intro.author}</div>
              </div>
           </div>
        </section>

        {renderSection("زیارت ویڈیوز", ghaziData.ziyaratVideos)}
        {renderSection("خصوصی دستاویزی ویڈیوز", ghaziData.extraVideos)}
        {renderSection("مختصر ویڈیوز (Shorts)", ghaziData.shorts)}
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => {
            setActiveVideo(null);
            router.push(window.location.pathname, { scroll: false });
        }}>
          <button className="absolute top-5 right-5 text-white/50 hover:text-red-600 transition-all">
            <FaTimes size={40} />
          </button>
          <div className="w-full max-w-5xl bg-black rounded-3xl overflow-hidden border-2 border-red-600/50 shadow-2xl" onClick={e => e.stopPropagation()}>
            {activeVideo.url.includes('youtube.com') || activeVideo.url.includes('youtu.be') ? (
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideo.url.split('v=')[1] || activeVideo.url.split('/').pop()}?autoplay=1`}
                className="w-full aspect-video"
                allowFullScreen
              />
            ) : (
              <video src={activeVideo.url} controls autoPlay className="w-full aspect-video" />
            )}
            <div className="bg-black p-6 flex items-center justify-between border-t border-red-600/30">
               <h2 className="text-xl md:text-2xl font-bold text-white urdu-text">{activeVideo.title}</h2>
               <button 
                onClick={(e) => handleShare(e, activeVideo)}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-bold urdu-text hover:bg-white hover:text-red-600 transition-all"
               >
                 <FaShareAlt /> شیئر کریں
               </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default function GhaziAbbasPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GhaziAbbasContent />
    </Suspense>
  );
}
