'use client';
import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page } from 'react-pdf';
import { FaShareAlt, FaExpand, FaTimes } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function UrduFlipBook({ pdfUrl, title, onClose, isLandscape }) {
  const [numPages, setNumPages] = useState(null);
  const bookRef = useRef();
  const containerRef = useRef(null);

  const bookWidth = isLandscape ? 466 : 300;
  const bookHeight = isLandscape ? 300 : 466;

  const playFlipSound = () => {
    const audio = new Audio('/page-flip.mp3');
    audio.volume = 1.0;
    audio.play().catch(e => console.log("آڈیو پلے نہیں ہو سکی"));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareDetails = `*${title || 'کتاب پڑھیں'}*\n\n✍️ مصنف: حاجی شبیر احمد شگری\n\nیہ کتاب آن لائن پڑھنے کے لیے درج ذیل لنک پر کلک کریں 👇\n\n${shareUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title || 'کتاب پڑھیں',
          text: shareDetails,
        });
      } catch (error) {
        console.log('شیئرنگ کینسل ہو گیا');
      }
    } else {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareDetails)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const CurvedArrowLeft = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm"><path d="M9 14L4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" /></svg>
  );

  const CurvedArrowRight = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm"><path d="M15 14l5-5-5-5" /><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" /></svg>
  );

  const CustomLoader = ({ message }) => (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050505] text-[#D4AF37] p-6 text-center">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
      </div>
      <h3 className="urdu-text text-lg md:text-xl font-bold mb-2 animate-pulse">{message || "کتاب لوڈ ہو رہی ہے..."}</h3>
    </div>
  );

  return (
    <div ref={containerRef} className="flex flex-col w-full h-full bg-[#050505] overflow-hidden rounded-xl">
      <div className="flex justify-between items-center px-4 py-2 bg-[#111] border-b border-[#D4AF37]/30 shrink-0">
        <div className="flex items-center gap-3">
          {onClose && (
            <button onClick={onClose} className="text-white bg-red-600 hover:bg-red-700 p-1.5 rounded-full transition-all shadow-md">
              <FaTimes size={14} />
            </button>
          )}
          <button onClick={toggleFullscreen} className="text-[#D4AF37] hover:text-white bg-black/60 p-1.5 rounded-full border border-[#D4AF37]/30">
            <FaExpand size={14} />
          </button>
        </div>
        <h2 className="text-[#D4AF37] text-lg md:text-xl font-bold urdu-text drop-shadow-md flex-1 text-center">{title || "کتاب پڑھیں"}</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full px-2 overflow-hidden relative min-h-[400px]">
        {pdfUrl ? (
          <Document file={pdfUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)} loading={<CustomLoader message="کتاب لوڈ ہو رہی ہے..." />}>
            {numPages && (
              <HTMLFlipBook width={bookWidth} height={bookHeight} size="fixed" onFlip={playFlipSound} direction="ltr" showCover={true} flippingTime={900} useMouseEvents={true} ref={bookRef} className="shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-white rounded-md border border-[#D4AF37]/20 mx-auto">
                {[...Array(numPages).keys()].map((pNum) => (
                  <div key={pNum} className="bg-[#0a0a0a] overflow-hidden w-full h-full flex items-center justify-center">
                    <Page pageNumber={pNum + 1} width={bookWidth} height={bookHeight} renderAnnotationLayer={false} renderTextLayer={false} />
                  </div>
                ))}
              </HTMLFlipBook>
            )}
          </Document>
        ) : (
          <div className="urdu-text p-4 text-red-500">کتاب کا لنک نہیں ملا...</div>
        )}
      </div>

      <div className="flex justify-between items-center w-full px-4 py-3 bg-[#111] border-t border-[#D4AF37]/30 shrink-0">
        {/* پچھلا صفحہ */}
        <button onClick={() => bookRef.current.pageFlip().flipPrev()} className="text-[#D4AF37] hover:text-white transition-all hover:-translate-x-1 active:scale-90">
          <CurvedArrowRight />
        </button>

        <div className="flex gap-2">
          {/* 🔴 آڈیو بٹن یہاں سے ختم کر دیا گیا ہے، صرف شیئر باقی ہے */}
          <button onClick={handleShare} className="flex items-center justify-center gap-1.5 bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 px-4 py-2 rounded-full font-bold urdu-text text-xs hover:bg-[#D4AF37] hover:text-black transition-all">
            <FaShareAlt size={14} /> شیئر کریں
          </button>
        </div>

        {/* اگلا صفحہ */}
        <button onClick={() => bookRef.current.pageFlip().flipNext()} className="text-[#D4AF37] hover:text-white transition-all hover:translate-x-1 active:scale-90">
          <CurvedArrowLeft />
        </button>
      </div>
    </div>
  );
}