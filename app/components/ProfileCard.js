"use client";

import { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative z-20 transition-all duration-1500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <div className="relative group">
          {/* Wikipedia Style Card Container */}
          <div className="relative bg-white border-4 border-[#D4AF37] shadow-[0_20px_60px_rgba(212,175,55,0.3)] overflow-hidden transition-all duration-1000 hover:shadow-[0_30px_80px_rgba(212,175,55,0.4)]">
            
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B38728] p-4 text-white">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold urdu-text" style={{fontFamily: 'Jameel Noori Nastaleeq, serif'}}>
                  Haji Shabbir Ahmed Shigri
                </h1>
                <div className="mt-2 text-lg urdu-text" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                  (Senior Journalist, Researcher, Author & Producer)
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Side - Profile Image */}
              <div className="lg:w-1/3 p-6 bg-gray-50 border-r-2 border-[#D4AF37]/20">
                <div className="relative">
                  <div className="w-full max-w-xs mx-auto">
                    <div className="relative rounded-lg overflow-hidden border-4 border-[#D4AF37] shadow-lg">
                      <img 
                        src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1768281422/555555-pica_Copy_kawpaf.png" 
                        alt="Haji Shabbir Ahmed Shigri" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    
                    {/* Quick Info Box */}
                    <div className="mt-4 bg-white border-2 border-[#D4AF37]/30 rounded-lg p-4 shadow-md">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-bold text-[#1a472a] urdu-text"> births:</span>
                          <span className="urdu-text">Skardu</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold text-[#1a472a] urdu-text"> nationality:</span>
                          <span className="urdu-text">Pakistani</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold text-[#1a472a] urdu-text"> occupation:</span>
                          <span className="urdu-text">Journalist</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold text-[#1a472a] urdu-text"> years active:</span>
                          <span className="urdu-text">45 years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-2/3 p-6">
                
                {/* Summary Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#1a472a] mb-3 urdu-text border-b-2 border-[#D4AF37]/30 pb-2">
                    Haji Shabbir Ahmed Shigri (Urdu: حاجی شبیر احمد شگری)
                  </h2>
                  <p className="text-gray-700 leading-relaxed urdu-text text-lg" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                    Haji Shabbir Ahmed Shigri is a prominent Pakistani journalist, researcher, author, and producer with 45 years of distinguished service in media, cultural diplomacy, and Islamic scholarship. He is recognized as the first official representative of Astan Quds Razvi (Mashhad, Iran) in Pakistan.
                  </p>
                </div>

                {/* Early Life and Education */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1a472a] mb-3 urdu-text border-b border-[#D4AF37]/20 pb-1">
                    early life and education
                  </h3>
                  <p className="text-gray-700 leading-relaxed urdu-text" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                    Born in Skardu, Haji Shabbir Ahmed Shigri completed his early education at Government Degree College Skardu. He holds an MBA degree and a Diploma in Electronics, demonstrating a diverse educational background that has contributed to his multifaceted career.
                  </p>
                </div>

                {/* Career */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1a472a] mb-3 urdu-text border-b border-[#D4AF37]/20 pb-1">
                    career
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-lg text-[#1a472a] urdu-text mb-2">journalism and media</h4>
                      <p className="text-gray-700 leading-relaxed urdu-text" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                        With over 300 columns, articles, and travelogues published in leading newspapers like Daily Nawa-e-Waqt Pakistan and Mashriq, Shigri has established himself as a respected voice in Pakistani journalism. He has also served as a senior radio broadcaster, TV anchor person, and producer.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-[#1a472a] urdu-text mb-2">cultural diplomacy</h4>
                      <p className="text-gray-700 leading-relaxed urdu-text" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                        As an expert in cultural affairs with 25 years of service at Khana Farhang Iran Lahore, Shigri has played a crucial role in promoting Pakistan-Iran cultural relations. He is the founder and president of the Pakistan Iran Friendship Association.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-[#1a472a] urdu-text mb-2">religious services</h4>
                      <p className="text-gray-700 leading-relaxed urdu-text" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                        Recognized as Khadim-e-Imam Reza (Mashhad, Iran) and Khadim-e-Haram-e-Abbas (Karbala, Iraq), Shigri has dedicated his life to religious service. He founded the Noor-ul-Quran Project, the world's first visual Quran initiative.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Publications */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1a472a] mb-3 urdu-text border-b border-[#D4AF37]/20 pb-1">
                    publications
                  </h3>
                  <p className="text-gray-700 leading-relaxed urdu-text" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                    Author of 7+ scholarly and literary books, Shigri has also served as editor for international academic journals and newspapers including Havi, Akth Punjabi, and Prachar.
                  </p>
                </div>

                {/* Awards and Recognition */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1a472a] mb-3 urdu-text border-b border-[#D4AF37]/20 pb-1">
                    awards and recognition
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 urdu-text" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                    <li>Holder of "Taqdeer Nama" (Astan Quds Razvi)</li>
                    <li>Sada-e-Ghazi Award recipient</li>
                    <li>Gold Medalist</li>
                    <li>50+ national and international awards</li>
                  </ul>
                </div>

                {/* Personal Life */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1a472a] mb-3 urdu-text border-b border-[#D4AF37]/20 pb-1">
                    personal life
                  </h3>
                  <p className="text-gray-700 leading-relaxed urdu-text" style={{fontFamily: 'Noto Naskh Arabic, serif'}}>
                    Shigri is known as Khadim-e-Saqalain and continues to serve as a cultural expert, promoting unity and Islamic solidarity through his various initiatives and projects.
                  </p>
                </div>

                {/* References Section */}
                <div className="mt-8 pt-6 border-t-2 border-[#D4AF37]/20">
                  <h3 className="text-xl font-bold text-[#1a472a] mb-3 urdu-text">references</h3>
                  <div className="text-sm text-gray-600 urdu-text">
                    <p>1. Official Website: www.shabbirshigri.com</p>
                    <p>2. Email: shigri51214@gmail.com</p>
                    <p>3. Astan Quds Razvi Records</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 p-4 text-center border-t-2 border-[#D4AF37]/20">
              <p className="text-sm text-gray-600 urdu-text">
                Last updated: 2025 | This article is about a living person
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
