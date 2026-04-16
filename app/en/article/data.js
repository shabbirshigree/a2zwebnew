import React from 'react';
const defaultColumnData = {
    id: "122-EN",
    title: "The Strategic Chess Pieces of the Iranian War",
    author: "By: Haji Shabbir Ahmed Shigri",
    date: "April 4, 2026",
    production: "Noor Productions",
    category: "column",
    titleImage: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1775227089/198abd81-25e2-4119-ac16-84096c7f7e1d.png",
    
    newspapers: [
      { 
        name: "Islam Times", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1776303515/Islamtimes_2026-04-04_udu4a3.jpg",
        onlineUrl: "https://www.islamtimes.com/ur/article/1272433/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-%D8%AC%D9%86%DA%AF-%DA%A9%DB%92-%D8%B4%D8%B7%D8%B1%D9%86%D8%AC%DB%8C-%D9%85%DB%81%D8%B1%DB%92" 
      },
      { 
        name: "Daily Mashriq", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1776303516/aily_Mashriq_2026-04-06_toqc06.jpg",
        onlineUrl: "https://mashriqakhbar.com.pk/page/p4/2026-04-04/1" 
      },
      { 
        name: "Daily Zamana", 
        imgUrl: "https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto/f_auto/v1776303545/59dddbf1-557f-448e-83be-7dcab797adc0.png",
        onlineUrl: "Enter Article Link Here" 
      }
    ],

    body: `Today, memories of the market in the ancient city of Kerman, Iran, were revived, where amidst the clinking of copper, the aroma of spices, and the clamor of traders of other goods, our Pakistani delegation, under my leadership, was wandering through this historical bazaar. The sight of two elderly shopkeepers leaning over a chessboard in front of a shop flashed before my eyes. Therefore, I have attempted to present the current Iranian war-game board in the context of the Iranians' favorite game, "Chess," which will certainly help in understanding the invincible Iranian strategy.

In Iran, chess is not played merely as a pastime; it is a continuation of that ancient cultural heritage deeply embedded in Iran's essence. Chess arrived at the Sassanid court from India as a gift in the sixth century AD. Subsequently, the Iranians adopted this game, named it "Chatrang," and integrated its principles into their lives, trade, and war psychology as if it were their own invention. In the context of this game, we can see how Iranians use it as more than just a game—in strategy, life, culture, and even war philosophy. Iranians did not learn from chess how to win, but rather how to compel the opponent to lose.

Just as on a chessboard, one must make the 'Knight's' crooked move to save the 'Bishop,' Iranian history reflects this very strategy. Whether it was the era after the Battle of Qadisiyah or modern-day proxies, their war philosophy has remained the same: keep an eye on every move of the enemy until they themselves commit a mistake. Instead of a direct confrontation, make such a move that every piece of the enemy is weakened by its own strength. Just as in chess all pieces fight for one goal—the protection of the King—Iran's internal and external policies also revolve around this axis.
Today, when any country assesses Iran's military power, it counts their missiles or drones, but forgets that it is contending with a nation that has been making moves for its survival on the "Chatrang" (Chess) board for centuries.
Iran's military history shows that this nation has never entered the field solely on the basis of "blind power." From Alexander the Great to the Mongol invasions, Iran has repeatedly suffered physical defeats, but with its "strategic chess moves," it has colored the conquerors in its own hue. For them, defeat is a lesson and victory is a preparation. In their war psychology, "patience" holds the same place as that of a player waiting for their turn in chess. This is not merely a game of technology, but a practical expression of that ancient thinking in which, instead of a direct confrontation, the enemy is kept under such nerve-wracking pressure that they get trapped in their own moves.

The event of Karbala holds a central position in Iranian history, and particularly in the school of Shi'ism, where the fear of death vanishes for an ordinary soldier because he grants it the status of "martyrdom." Iran has shown in its military history that when a nation stops fearing death, no modern weapon in the world can make it bow down.
The map of Iran is a natural fortress surrounded by mountains. Mountain ranges like the Zagros and Alborz can prove to be graveyards for any foreign army. The harshest sanctions of the past four decades have made Iranians an "inventive nation." When the world stopped giving them spare parts, they built their own drones, missiles, and submarines. They are not dependent on any superpower, and this self-reliance is their greatest military success. To wage war with Iran is not to conquer a country, but to put one's hand into the beehive of a strong civilization where every bee is a soldier.

When we look at today's global chessboard, we see that Iran has defeated the enemy not just with weapons but with "nerve chess." From the waves of the Strait of Hormuz to the awakening consciousness of the region, every move is so calculated that America, which was once called the "King" of this region, is today entangled in its own moves, facing continuous defeat and standing near "checkmate." There is a term in chess for when an opponent gets into a position where whatever move they make results in their own loss; this is Iran's "chess victory," where it is forcing the enemy to retreat without fighting.

To understand Iran, one must look not only at its military bases but also at its civilization. Look at those streets where centuries of history breathe in every curve of calligraphy, at the colors of miniatures scattered in those bazaars which are the splendor of their lives, and at those chessboards which are a symbol of their intellectual depth. The Iranian nation has preserved its art, its music, its poetry, and its skill like a soul. And a nation whose soul is so fertile is impossible to defeat. Any confrontation against Iran is actually colliding with a nation whose every skill, every word, and every color bears witness to its invincibility. Iran's power lies not in its weapons, but is hidden in that cultural soul which stands like a rock before the storms of every era.`,
  };
const EnglishArticleDetail = ({ article }) => {
  // Use default data if article prop is not provided
  const columnData = article || defaultColumnData;

  return (
    <div className="min-h-screen bg-[#fafaf9] py-12 px-4 md:px-8" dir="ltr">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="bg-[#1e293b] p-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-70">Archive ID</span>
            <span className="text-xl font-mono font-bold text-yellow-400">{columnData.id}</span>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <h2 className="text-2xl font-bold">{columnData.production}</h2>
            <span className="inline-flex items-center rounded-full bg-[#d4af37]/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#f8f3e8]">
              {columnData.category ? String(columnData.category).charAt(0).toUpperCase() + String(columnData.category).slice(1) : 'Column'}
            </span>
          </div>
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
