'use client';
import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page } from 'react-pdf';
import { FaShareAlt, FaExpand, FaTimes } from 'react-icons/fa';

// PDF worker stylesheets
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

export default function UrduFlipBook({ pdfUrl, title, onClose, isLandscape }) {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const bookRef = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    // ورژن کے تضاد کو ختم کرنے کے لیے خودکار ورژن کا استعمال
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }, []);

  const bookWidth = isLandscape ? 450 : 300;
  const bookHeight = isLandscape ? 300 : 450;

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
          url: shareUrl,
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
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14L4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" /></svg>
  );

  const CurvedArrowRight = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14l5-5-5-5" /><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" /></svg>
  );

  const CustomLoader = ({ message }) => (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050505] text-[#D4AF37] p-6 text-center">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
      </div>
      <h3 className="urdu-text text-xl font-bold mb-1">انتظار فرمائیے...</h3>
      <p className="urdu-text text-sm opacity-80">حاجی شبیر احمد شگری</p>
    </div>
  );

  return (
    <div ref={containerRef} className="flex flex-col w-full h-full bg-[#050505] overflow-hidden rounded-xl">
      <div className="flex justify-between items-center px-4 py-2 bg-[#111] border-b border-[#D4AF37]/30 shrink-0">
        <div className="flex items-center gap-3">
          {onClose && (
            <button onClick={onClose} className="text-white bg-red-600 hover:bg-red-700 p-1.5 rounded-full"><FaTimes size={14} /></button>
          )}
          <button onClick={toggleFullscreen} className="text-[#D4AF37] bg-black/60 p-1.5 rounded-full border border-[#D4AF37]/30"><FaExpand size={14} /></button>
        </div>
        <h2 className="text-[#D4AF37] text-lg font-bold urdu-text flex-1 text-center">{title || "کتاب پڑھیں"}</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full px-2 overflow-hidden relative">
        {pdfUrl ? (
          error ? (
            <div className="text-red-500 urdu-text">{error}</div>
          ) : (
            <Document 
              file={pdfUrl} 
              onLoadSuccess={({ numPages }) => { setNumPages(numPages); setError(null); }} 
              onError={() => setError('کتاب لوڈ کرنے میں مسئلہ۔')}
              loading={<CustomLoader message="کتاب لوڈ ہو رہی ہے..." />}
            >
              {numPages && (
                <HTMLFlipBook width={bookWidth} height={bookHeight} size="fixed" onFlip={playFlipSound} direction="ltr" showCover={true} ref={bookRef} className="mx-auto">
                  {[...Array(numPages).keys()].map((pNum) => (
                    <div key={pNum} className="bg-[#0a0a0a] w-full h-full flex items-center justify-center">
                      <Page pageNumber={pNum + 1} width={bookWidth} height={bookHeight} renderAnnotationLayer={true} renderTextLayer={true} />
                    </div>
                  ))}
                </HTMLFlipBook>
              )}
            </Document>
          )
        ) : (
          <div className="urdu-text p-4 text-red-500">کتاب کا لنک نہیں ملا...</div>
        )}
      </div>

      <div className="flex justify-between items-center w-full px-4 py-3 bg-[#111] border-t border-[#D4AF37]/30 shrink-0">
        <button onClick={() => bookRef.current?.pageFlip().flipPrev()} className="text-[#D4AF37]"><CurvedArrowRight /></button>
        <button onClick={handleShare} className="flex items-center gap-1.5 bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/50 px-4 py-2 rounded-full font-bold text-xs"><FaShareAlt /> شیئر کریں</button>
        <button onClick={() => bookRef.current?.pageFlip().flipNext()} className="text-[#D4AF37]"><CurvedArrowLeft /></button>
      </div>
    </div>
  );
}