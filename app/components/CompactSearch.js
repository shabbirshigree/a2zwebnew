"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaMicrophone } from 'react-icons/fa';

export default function CompactSearch() {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const router = useRouter();

  // مائیک کا فنکشن
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("آپ کا براؤزر مائیک سپورٹ نہیں کرتا۔");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'ur-PK';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      router.push(`/search?q=${transcript}`);
    };
    recognition.start();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${query}`);
  };

  return (
    <div className="relative w-full max-w-[180px] md:max-w-[300px] mx-auto">
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .shimmer-effect::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.1), transparent);
          animation: shimmer 3s infinite linear; pointer-events: none;
        }
      `}</style>
      
      <form onSubmit={handleSearch} className="relative flex items-center overflow-hidden rounded-full border border-[#D4AF37]/30 bg-white shimmer-effect" dir="rtl">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isListening ? "سن رہا ہوں..." : "تلاش..."} 
          className="w-full py-1.5 md:py-2 pr-3 md:pr-4 pl-14 md:pl-16 text-gray-700 bg-transparent outline-none urdu-text text-[11px] md:text-sm"
        />
        
        <div className="absolute left-1 flex items-center gap-1">
          <button type="button" onClick={startListening} className={`p-1 md:p-1.5 rounded-full ${isListening ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-[#D4AF37]'}`}>
            <FaMicrophone className="text-[10px] md:text-sm" />
          </button>
          <button type="submit" className="p-1 md:p-1.5 text-[#0b314d] hover:text-[#D4AF37]">
            <FaSearch className="text-[10px] md:text-sm" />
          </button>
        </div>
      </form>
    </div>
  );
}