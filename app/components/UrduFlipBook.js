'use client';
import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// استاد جی، اب ہم نے اس میں 'audioUrl' کا آپشن بھی رکھ دیا ہے تاکہ ہر کتاب کی الگ آڈیو لگ سکے
export default function UrduFlipBook({ pdfUrl, audioUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const bookRef = useRef();
  const podcastRef = useRef(null);

  // آڈیو کا لوکل پبلک فولڈر والا راستہ (ورق پلٹنے کی آواز)
  const playFlipSound = () => {
    const audio = new Audio('/page-flip.mp3'); 
    audio.volume = 1.0;
    audio.play().catch(e => console.log("آڈیو پلے نہیں ہو سکی"));
  };

  // شیئر کرنے کا جدید فنکشن (موبائل کا اپنا شیئر مینو کھولے گا)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'کتاب پڑھیں',
          text: 'یہ شاندار کتاب یہاں پڑھیں:',
          url: window.location.href, // جس پیج پر ہوں گے، اسی کا لنک شیئر ہوگا
        });
      } catch (error) {
        console.log('شیئر کرنے میں مسئلہ ہوا', error);
      }
    } else {
      // اگر کمپیوٹر پر ہیں تو لنک کاپی ہو جائے گا
      navigator.clipboard.writeText(window.location.href);
      alert("کتاب کا لنک کاپی ہو گیا ہے! اب آپ اسے کہیں بھی پیسٹ کر سکتے ہیں۔");
    }
  };

  // پاڈکاسٹ (آڈیو) کو چلانے یا روکنے کا فنکشن
  const togglePodcast = () => {
    if (podcastRef.current) {
      if (isPlaying) {
        podcastRef.current.pause();
      } else {
        podcastRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else if (!audioUrl) {
      alert("اس کتاب کی آڈیو ابھی شامل نہیں کی گئی۔");
    }
  };

  // آئیکونز (Icons)
  const CurvedArrowLeft = () => (
    <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
      <path d="M9 14L4 9l5-5"/>
      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
    </svg>
  );

  const CurvedArrowRight = () => (
    <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
      <path d="M15 14l5-5-5-5"/>
      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"/>
    </svg>
  );

  const ShareIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  );

  const PodcastIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="22"></line>
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center py-5 bg-[#f5f3ef] min-h-screen">
      
      {/* نظر نہ آنے والا پاڈکاسٹ آڈیو پلیئر */}
      {audioUrl && <audio ref={podcastRef} src={audioUrl} />}

      <div className="flex flex-col items-center w-full max-w-md mx-auto px-4">
        
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<div className="font-urdu p-10 text-xl text-stone-600 animate-pulse">کتاب کے اوراق تیار ہو رہے ہیں...</div>}
        >
          {numPages && (
            <HTMLFlipBook 
              width={340} 
              height={520} 
              size="fixed" 
              onFlip={playFlipSound} 
              direction="ltr" 
              showCover={true}
              flippingTime={900}
              useMouseEvents={true}
              ref={bookRef}
              className="shadow-[0_0_30px_rgba(0,0,0,0.3)] bg-white"
            >
              {[...Array(numPages).keys()].map((pNum) => (
                <div key={pNum} className="bg-white overflow-hidden w-full h-full flex items-center justify-center">
                  <Page 
                    pageNumber={pNum + 1} 
                    width={340} 
                    height={520} 
                    renderAnnotationLayer={false} 
                    renderTextLayer={false}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          )}
        </Document>

        {/* کنٹرول بٹنز کی مکمل اور شاندار بار */}
        <div className="flex justify-between items-center w-full mt-6 px-2">
          
          {/* بایاں بٹن (Right Button - پچھلا صفحہ) */}
          <button 
            onClick={() => bookRef.current.pageFlip().flipPrev()} 
            className="text-stone-600 hover:text-amber-900 transition-all hover:-translate-x-1 active:scale-90"
            title="پچھلا صفحہ"
          >
            <CurvedArrowRight />
          </button>

          {/* درمیانی بٹن (شیئر اور پاڈکاسٹ) */}
          <div className="flex gap-4">
            {/* پاڈکاسٹ بٹن */}
            <button 
              onClick={togglePodcast}
              className={`p-3 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 ${isPlaying ? 'bg-amber-900 text-white' : 'bg-white text-stone-600 hover:text-amber-900'}`}
              title="آڈیو پاڈکاسٹ سنیں"
            >
              <PodcastIcon />
            </button>
            
            {/* شیئر بٹن */}
            <button 
              onClick={handleShare}
              className="bg-white p-3 rounded-full text-stone-600 shadow-md hover:text-amber-900 transition-all active:scale-95 flex items-center gap-2"
              title="کتاب شیئر کریں"
            >
              <ShareIcon />
            </button>
          </div>

          {/* دایاں بٹن (Left Button - اگلا صفحہ) */}
          <button 
            onClick={() => bookRef.current.pageFlip().flipNext()} 
            className="text-stone-600 hover:text-amber-900 transition-all hover:translate-x-1 active:scale-90"
            title="کتاب کھولیں / اگلا صفحہ"
          >
            <CurvedArrowLeft />
          </button>

        </div>

      </div>
    </div>
  );
}
