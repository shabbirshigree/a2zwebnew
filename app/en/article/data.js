import React from 'react';

const EnglishArticleDetail = ({ article }) => {
  // Use default data if article prop is not provided
  const columnData = article || {
    id: "EN-123",
    title: "Victory of Hussainiyat",
    author: "Writer: Haji Shabbir Ahmed Shigri",
    date: "14 April 2026",
    production: "Noor Productions",
    titleImage: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152729/images_lwhvar.jpg",
    
    // Newspapers and their links
    newspapers: [
      { 
        name: "Islam Times", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152000/Islamtimes_2026-04-11_xjpgnk.png",
        onlineUrl: "https://www.islamtimes.com/ur/article/1273482/%D8%AD%D8%B3%DB%8C%D9%86%DB%8C%D8%AA-%DA%A9%DB%8C-%D9%81%D8%AA%D8%AD" 
      },
      { 
        name: "Daily Mashriq", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152000/daily_mashriq_2026-04-09_d5ay1j.jpg",
        onlineUrl: "https://mashriqakhbar.com.pk/page/p4/2026-04-09/1" 
      },
      { 
        name: "Zamana News", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1776152000/daily_zamana_news_2026-04-09_wlvent.jpg",
        onlineUrl: "" 
      }
    ],

    body: `In the previous column, I had analyzed Iranian society and politics through the mirror of Iranians' favorite game, chess. Today we saw how Iran arranged its pieces on the chessboard; it sacrificed some of its pieces but led the opponent to a house from which there was no return, where he himself got caught in the trap of Iranian moves and today his pieces have been severely defeated. For some time, by fueling small differences, the claim of "regime change" in Iran was being made. Great sympathy was expressed with the people of Iran and a few days later attacks were made on the same people; children in schools, religious and cultural places and even Jewish places of worship were attacked. The enemy's intention was to create conditions that would weaken Iran's foundations, but the Iranian nation united and shattered all the enemy's dreams in a single moment.

Great claims were made that this defense system would last only a few moments and that this nation would be returned to the "Stone Age" to change the course of history. They saw dreams of regime change in Iran, the destruction of defense installations, forcing unconditional surrender and economic and diplomatic isolation, but on the contrary, the enemy himself was forced to withdraw from the region and was forced to withdraw his hands from his important bases in the region. This is a great defeat for the enemy who could not protect his own established bases, and Iran remained steadfast in its place, but this expulsion of the enemy has made Iran's regional role even more powerful. The closure of the Strait of Hormuz was a very important strategy of Iran that shocked the entire world economy. They resorted to threats to open it, but Iran also proved its importance and superiority to the world here.

When they tried to frighten the people of Iran, for several days past a large part of the Iranian people were present on the streets. Families who, instead of hiding in shelters from fear, came out in the open air, because their leader had chosen this path. Prominent Iranian leaders were threatened and bounties were placed on their heads, but the same leaders were seen among the people in public meetings without any security and gave the message that martyrdom is their desire.

And when threats of very dangerous attacks were made and it was specifically announced that important bridges and sensitive installations of Iran would be targeted, people gathered around the same bridges and installations. That nation which was tried to be deceived in the name of inflation, proved that in the matter of foreign intervention, it is like a steel wall.

During this conflict, the biggest change that was observed was the gathering of the Islamic world and humanity in support of Iran on a single point. The enemy who was dreaming of isolating Iran, while he himself remained alone in this chessboard and Iran received moral and diplomatic support from all over the world. Since this war was imposed on Iran, the whole world recognized this aggression. This situation proved that the Muslim Ummah is now awake. Muslims from all over the world and even followers of other religions also expressed sympathy and solidarity with Iran.

In this situation, the role of our dear country Pakistan was also positive, for which Iran has also expressed thanks. And the people of Pakistan showed that enthusiasm and passion which will be remembered in history. This was an ocean of love in which everyone was eager to share their part. Many emotional events were seen. Women dedicated their lifelong earnings, gold earrings and even their homes for Iran. Farmers dedicated their animals, young people their cars, their bicycles and people dedicated their every special and needed thing for Iran. The incident of that small child from Gilgit-Baltistan has become historical, who dedicated his small three-wheeled bicycle, which was perhaps very negligible financially but was very precious on the basis of motivation and emotion. Its price in auction has reached millions, which was presented in support of Iran. This was not just a bicycle, this was the "entire wealth" of that child which he gave in the name of his brothers. This unparalleled and emotional expression of solidarity of the Pakistani people is a message for the world that our relationships are not dependent on borders and agreements, but this is the heartbeat of hearts that beat together.

Today, the enemy who came to isolate Iran has become such a lonely personality that he has not found any supporter. Praise be to Allah, Iran by moving on the path of Hussainiyat showed such a strategy that the enemy was forced to retreat and retreat, and this is truly the victory of the Islamic world. This victory of Iran is not just the victory of borders, but the victory of those millions of hearts that beat together. Today the Islamic world has become such a power that no enemy will now be able to dream of isolating and crushing it. This role of Iran will be written in the pages of history with golden words.`
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] py-12 px-4 md:px-8" dir="ltr">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="bg-[#1e293b] p-6 text-white flex justify-between items-center shadow-md">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-70">Archive ID</span>
            <span className="text-xl font-mono font-bold text-yellow-400">{columnData.id}</span>
          </div>
          <h2 className="text-2xl font-bold">{columnData.production}</h2>
        </div>

        {/* Article Body */}
        <div className="p-8 md:p-16">
          {columnData.titleImage && (
            <div className="mb-8">
              <img 
                src={columnData.titleImage} 
                alt={columnData.title} 
                className="w-full h-auto rounded-2xl shadow-xl border-2 border-gray-200"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight font-vazir">
            {columnData.title}
          </h1>
          
          <div className="flex items-center gap-6 mb-12 pb-8 border-b border-gray-200">
            <div className="h-20 w-20 bg-blue-900 rounded-3xl flex items-center justify-center text-white font-bold text-4xl shadow-2xl">
              S
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800">{columnData.author}</p>
              <p className="text-gray-500 text-xl mt-1">{columnData.date}</p>
            </div>
          </div>

          <div className="text-2xl md:text-3xl leading-[2.5] text-gray-800 text-justify whitespace-pre-line font-vazir mb-16">
            {columnData.body}
          </div>

          {/* Newspaper Links Section */}
          <div className="mt-20 pt-12 border-t-2 border-dashed border-gray-200">
            <h3 className="text-3xl font-bold text-slate-800 mb-10 text-center">Newspaper Clippings / Online Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {columnData.newspapers.map((news, index) => (
                <div key={index} className="bg-white p-5 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full">
                  <p className="text-center font-bold text-lg mb-4 text-blue-950 h-14 flex items-center justify-center">
                    {news.name}
                  </p>
                  <div className="overflow-hidden rounded-2xl border-2 border-gray-100 mb-6 bg-gray-50">
                    <img 
                      src={news.imgUrl} 
                      alt={news.name} 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {news.onlineUrl ? (
                    <a 
                      href={news.onlineUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto bg-blue-900 text-white text-center py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-md"
                    >
                      Read Online
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="mt-auto bg-slate-400 text-white text-center py-3 rounded-xl font-bold opacity-70 cursor-not-allowed"
                    >
                      Link unavailable
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 p-12 text-center text-white">
          <p className="text-xl font-medium opacity-90"> 2026 {columnData.production} | all rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default EnglishArticleDetail;
