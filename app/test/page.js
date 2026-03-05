"use client";
import React, { useEffect, useState } from 'react';

const SpaceLandingPage = () => {
  const [stars, setStars] = useState([]);

  // ستاروں کو صرف کلائنٹ سائیڈ پر جنریٹ کریں
  useEffect(() => {
    const generatedStars = [...Array(100)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3}px`,
      duration: `${Math.random() * 3 + 2}s`,
      opacity: Math.random(),
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-sans text-white">
      
      {/* 1. ستاروں کا منظر - اب یہ ہائیڈریشن ایرر نہیں دے گا */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* 2. گھومتی ہوئی زمین */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-10">
        <div 
          className="w-full h-full rounded-full bg-cover bg-center shadow-[inset_-50px_0_100px_rgba(0,0,0,0.9),0_0_50px_rgba(59,130,246,0.3)] animate-[spin_100s_linear_infinite]"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg')`,
          }}
        ></div>
      </div>

      {/* 3. چاند */}
      <div className="absolute right-[350px] md:right-[500px] top-1/4 w-16 h-16 md:w-20 md:h-20 z-20">
        <div 
          className="w-full h-full rounded-full bg-gray-300 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.8)]"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/200px-FullMoon2010.jpg')`,
            backgroundSize: 'cover'
          }}
        ></div>
      </div>

      {/* 4. مواد (Text) */}
      <main className="relative z-30 flex flex-col items-start justify-center min-h-screen px-10 md:px-20 w-full md:w-1/2">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 leading-tight">
          کائنات <br /> <span className="text-blue-500">کا سفر</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-md mb-8">
          ستاروں سے آگے جہاں اور بھی ہیں۔ نیکسٹ جے ایس کے ساتھ اپنی ویب سائٹ کو کہکشاں کی طرح چمکائیں۔
        </p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50">
          مزید جانیے
        </button>
      </main>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SpaceLandingPage;