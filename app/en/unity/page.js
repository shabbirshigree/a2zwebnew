"use client";
import { useState } from 'react';
import { Navbar, HeroSlider } from '../../components/Header';
import Footer from '../../components/Footer';

import {
  unityIntro, unityEfforts, chadarPoshiData,
  embassyMeetingData, ahnafConferenceData, unityGallery, unityVideos
} from './data';

const getYouTubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function UnityOfUmmah() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans">
      <Navbar />
      <HeroSlider />

      <section className="bg-gradient-to-b from-[#0b314d] to-[#0f4c75] text-white py-12 md:py-16 text-center relative border-b-4 border-[#D4AF37] shadow-xl">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-4 tracking-wide leading-tight">
              {unityIntro.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-[#fff7cc] font-light tracking-widest">
              {unityIntro.subtitle}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
         </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#D4AF37] p-6 md:p-10 mb-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37] rounded-full blur-[60px] opacity-20"></div>
           <p className="text-lg md:text-2xl text-[#0b314d] leading-loose font-medium text-justify drop-shadow-sm italic">
             {unityIntro.quote}
           </p>
        </div>

        <div className="space-y-8">
          {unityEfforts.map((effort, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-r-4 border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#0b314d] mb-3">
                {effort.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed text-justify font-light">
                {effort.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0b314d] text-white py-12 md:py-16 border-y-4 border-[#D4AF37] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center drop-shadow-md">
            {chadarPoshiData.title}
          </h2>
          <div className="bg-white/10 p-6 md:p-10 rounded-2xl border border-[#D4AF37]/50 backdrop-blur-sm mb-10">
            <p className="text-sm md:text-lg leading-relaxed font-light text-justify italic mb-8">
              {chadarPoshiData.desc}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] border-b border-[#D4AF37]/30 pb-2 mb-6 inline-block">
              {chadarPoshiData.scholarsIntro}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chadarPoshiData.scholarsList.map((scholar, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-black/20 p-4 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
                  <span className="text-[#D4AF37] mt-1">✨</span>
                  <p className="text-sm md:text-base font-light text-[#fff7cc]">{scholar}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-6 border-b-2 border-[#D4AF37] pb-3 inline-block">
              {embassyMeetingData.title}
            </h2>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed text-justify mb-8 font-light">
              {embassyMeetingData.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {embassyMeetingData.points.map((point, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border-t-4 border-[#0b314d] shadow-sm">
                  <h4 className="text-lg font-bold text-[#D4AF37] mb-3">{point.title}</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-12 border-r-8 border-r-[#D4AF37]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b314d] mb-6">
              {ahnafConferenceData.title}
            </h2>
            <div className="space-y-4 text-gray-700 text-sm md:text-lg leading-relaxed text-justify font-light">
              <p>{ahnafConferenceData.desc1}</p>
              <p>{ahnafConferenceData.desc2}</p>
              <p className="font-bold text-[#0b314d] bg-blue-50 p-4 rounded-lg border border-blue-100 italic">{ahnafConferenceData.desc3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🎥 🔴 New Section: Video Gallery */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center border-b-2 border-[#D4AF37] pb-3 inline-block mx-auto w-full">🎥 Unity of Ummah (Videos and Coverage)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {unityVideos.map((vid, i) => (
            vid.url && !vid.url.includes("یہاں_") && (
              <VideoCard key={i} url={vid.url} title={vid.title} setActiveVideo={setActiveVideo} isCloudinary={vid.isCloudinary} />
            )
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 border-t border-[#D4AF37]/30">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0b314d] mb-10 text-center">📸 Glimpses of Unity of Ummah and Meetings</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {unityGallery.map((img, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 aspect-[4/3] bg-black">
              <img src={img} alt={`Unity Gallery ${idx + 1}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {activeVideo && (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 text-[#D4AF37] text-5xl hover:text-red-500 transition-all z-[1001]">&times;</button>
          <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.6)] border-4 border-[#D4AF37]">
            {activeVideo.includes('youtu') ? (
              <iframe
                className="w-full max-h-[60vh]"
                src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1&rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            ) : (
              <video className="w-full max-h-[60vh] bg-black" src={activeVideo} controls autoPlay playsInline></video>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

// 🎨 Helper Component (Video Card)
function VideoCard({ url, title, setActiveVideo, isCloudinary = false }) {
  const videoId = !isCloudinary ? getYouTubeId(url) : null;

  // 🔴 Magic Trick: Automatically convert Cloudinary video (.mp4) link to image (.jpg)
  const thumbnailUrl = isCloudinary
    ? url.replace('.mp4', '.jpg')
    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative group rounded-xl overflow-hidden border-2 border-[#0b314d]/30 hover:border-[#D4AF37] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-black aspect-video" onClick={() => setActiveVideo(url)}>
      <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
        <div className="bg-[#D4AF37] p-3 md:p-4 rounded-full border-2 border-white shadow-[0_0_15px_rgba(212,175,55,0.8)] transform group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white pl-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-center">
        <h4 className="text-white font-bold text-xs md:text-sm drop-shadow-md">{title}</h4>
      </div>
    </div>
  );
}