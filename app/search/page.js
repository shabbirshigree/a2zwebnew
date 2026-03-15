"use client";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { FaSearch, FaArrowLeft, FaEye, FaFolderOpen } from 'react-icons/fa';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

// تمام امپورٹس
import { articlesData } from '../article/articlesData'; 
import { imamRezaImages } from '../imam-reza/data'; 
import { BOOKS_DATA } from '../library/libraryData';
import { quranVideos } from '../project/projectData';
import { SERVICES_DATA } from '../services/servicesData';
import { talkshowIntro } from '../talkshows/data';
import { unityIntro } from '../unity/data'; 
import { founderItems, mediaRoles, radioHistory, services as aboutServices } from '../about/aboutData'; 
import { CHANNELS } from '../channels/channelsData';
import { diplomaticServicesList } from '../diplomatic-services/data';
import { GALLERY_ITEMS } from '../gallery/galleryData';
import { culturalVideos } from '../cultural/data'; 
import { ghaziData } from '../ghazi-abbas/ghaziData';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const searchWord = query.toLowerCase();

      // 🔴 انتہائی ایڈوانسڈ ڈیٹا ایکسٹریکٹر (جو ہر قسم کا چھپا ہوا ڈیٹا نکال لائے گا)
      const getSafeData = (data, url, name) => {
        if (!data) return [];
        let extractedArray = [];
        
        if (Array.isArray(data)) {
          extractedArray = data;
        } else if (typeof data === 'object') {
          // Object کی ہر ویلیو کو چیک کریں
          Object.values(data).forEach(val => {
            if (Array.isArray(val)) {
              extractedArray = [...extractedArray, ...val]; // اگر اندر کوئی لسٹ ہے تو اسے نکال لیں
            } else if (val && typeof val === 'object') {
              extractedArray.push(val); // اگر اندر کوئی اور Object (جیسے کوئی کتاب یا ویڈیو) ہے تو اسے بھی ڈال لیں
            }
          });
          
          // اگر یہ خود ہی ایک سنگل ڈیٹا ہے تو اسے بھی شامل کر لیں
          if (extractedArray.length === 0 && (data.title || data.name || data.desc || data.description)) {
             extractedArray.push(data);
          }
        }
        
        // صرف درست ڈیٹا آگے بھیجیں اور اس پر لنک لگا دیں
        return extractedArray
          .filter(item => item && typeof item === 'object' && !Array.isArray(item))
          .map(item => ({ ...item, sectionUrl: url, sectionName: name }));
      };

      // پوری ویب سائٹ کا ڈیٹا اکٹھا کریں
      const allWebsiteData = [
        ...getSafeData(articlesData, '/article', 'کالمز'),
        ...getSafeData(imamRezaImages, '/imam-reza', 'امام رضا'),
        ...getSafeData(BOOKS_DATA, '/library', 'لائبریری'),
        ...getSafeData(quranVideos, '/project', 'نورالقرآن پروجیکٹ'),
        ...getSafeData(SERVICES_DATA, '/services', 'خدمات'),
        ...getSafeData(talkshowIntro, '/talkshows', 'ٹاک شوز'),
        ...getSafeData(unityIntro, '/unity', 'اتحاد امت'),
        ...getSafeData(CHANNELS, '/channels', 'چینلز'),
        ...getSafeData(diplomaticServicesList, '/diplomatic-services', 'سفارتی خدمات'),
        ...getSafeData(GALLERY_ITEMS, '/gallery', 'گیلری'),
        ...getSafeData(culturalVideos, '/cultural', 'ثقافتی خدمات'),
        ...getSafeData(ghaziData, '/ghazi-abbas', 'غازی عباس'),
        ...getSafeData(founderItems, '/about', 'تعارف'),
        ...getSafeData(mediaRoles, '/about', 'تعارف'),
        ...getSafeData(aboutServices, '/about', 'تعارف'),
        ...getSafeData(radioHistory, '/about', 'تعارف')
      ];

      // سرچ کی فلٹریشن
      const filtered = allWebsiteData.filter(item => {
        // ڈیٹا کے تمام ٹیکسٹ کو ایک String بنا کر چیک کریں تاکہ کوئی لفظ مس نہ ہو
        const allText = Object.values(item)
          .map(val => (val && typeof val !== 'object' ? String(val).toLowerCase() : ''))
          .join(' ');
          
        return allText.includes(searchWord);
      });

      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-[#f8f9fa]" dir="rtl">
      <div className="container mx-auto px-4 py-12 min-h-[50vh]">
        <div className="flex items-center justify-between mb-8 border-b-2 border-[#D4AF37]/30 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b314d] flex items-center gap-3 urdu-text">
            <FaSearch className="text-[#D4AF37]" /> تلاش کا نتیجہ: <span className="text-[#D4AF37]">"{query}"</span>
          </h2>
          <Link href="/" className="bg-gray-100 text-[#0b314d] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#D4AF37] hover:text-white transition-all text-sm font-bold urdu-text">
            <FaArrowLeft /> واپس ہوم
          </Link>
        </div>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-right">
            {results.map((item, index) => {
              // امیج اور ٹائٹل کے لیے محفوظ طریقہ تاکہ کوئی چیز خالی نہ رہے
              const displayTitle = item.title || item.name || item.heading || item.caption || item.bookName || 'بغیر عنوان';
              const displayDesc = item.excerpt || item.desc || item.description || item.detail || item.text || item.content || '';
              const displayImage = typeof item.image === 'string' ? item.image : (typeof item.img === 'string' ? item.img : (typeof item.thumbnail === 'string' ? item.thumbnail : (typeof item.cover === 'string' ? item.cover : 'https://via.placeholder.com/400x300?text=No+Image')));

              return (
                <Link href={item.sectionUrl} key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden bg-gray-100 relative">
                    <img src={displayImage} alt={displayTitle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 right-3 bg-[#0b314d] text-[#D4AF37] text-[10px] font-bold px-3 py-1 rounded-full shadow-md border border-[#D4AF37]/30 urdu-text">
                      <FaFolderOpen className="inline ml-1" /> {item.sectionName}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[#0b314d] mb-2 urdu-text line-clamp-2 leading-snug">{displayTitle}</h3>
                    <p className="text-gray-600 text-sm urdu-text line-clamp-3 mb-4">{displayDesc}</p>
                    <div className="mt-auto pt-3 border-t border-gray-100 text-left">
                      <span className="text-[#0f4c75] font-bold text-xs flex items-center justify-end gap-1 urdu-text">مزید دیکھیں <FaEye /></span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-2xl text-gray-500 urdu-text">کوئی نتیجہ نہیں ملا!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      <HeroSlider />
      <Suspense fallback={<div className="text-center py-20 text-xl urdu-text">لوڈنگ...</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </div>
  );
}