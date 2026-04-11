'use client';
import React, { useState, useEffect } from 'react';
import { FaHandshake, FaLandmark, FaUsers, FaBook, FaPenNib, FaTv, FaMicrophone, FaTrophy, FaImages, FaHandHoldingHeart, FaQuran } from "react-icons/fa";
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';
import MobileProfileCard from '@/components/MobileProfileCard';
import EnglishProfileCard from '@/components/EnglishProfileCard';
import FarsiProfileCard from '@/components/FarsiProfileCard';
import { welcomeData, welcomeDataEn, welcomeDataFa, honorsData, honorsDataEn, honorsDataFa, projectSectionData, journeyData, journeyDataEn, journeyDataFa, booksData, navCardsData, navCardsDataEn, navCardsDataFa } from './homeData';
import BookSlider from '@/components/BookSlider';
import NavCards from '@/components/NavCards';
import JourneySection from '@/components/JourneySection';
import ProjectSection from '@/components/ProjectSection';
import HonorsSection from '@/components/HonorsSection';
import LegendsSection from '@/components/LegendsSection';
import { legendsData, legendsDataEn, legendsDataFa } from './homeData';

const HomeContent = () => {
  const locale = useLocale();
  const t = useTranslations('home');
  const [welcomePaddingClass, setWelcomePaddingClass] = useState('pt-8');
  const [welcomeTextClass, setWelcomeTextClass] = useState('text-sm md:text-base');
  const [nameClass, setNameClass] = useState('text-lg md:text-xl font-bold text-[#1a472a]');
  const [honorTitleClass, setHonorTitleClass] = useState('text-sm md:text-base font-semibold');

  // Dynamic classes based on locale
  useEffect(() => {
    if (locale === 'en') {
      setWelcomePaddingClass('pt-8');
      setWelcomeTextClass('text-sm md:text-base');
      setNameClass('text-lg md:text-xl font-bold text-[#1a472a]');
      setHonorTitleClass('text-sm md:text-base font-semibold');
    } else if (locale === 'fa') {
      setWelcomePaddingClass('pt-8');
      setWelcomeTextClass('text-sm md:text-base');
      setNameClass('text-lg md:text-xl font-bold text-[#1a472a]');
      setHonorTitleClass('text-sm md:text-base font-semibold');
    } else {
      setWelcomePaddingClass('pt-8');
      setWelcomeTextClass('text-sm md:text-base');
      setNameClass('text-lg md:text-xl font-bold text-[#1a472a]');
      setHonorTitleClass('text-sm md:text-base font-semibold');
    }
  }, [locale]);

  // Dynamic data based on locale
  const getWelcomeData = () => {
    switch (locale) {
      case 'en':
        return welcomeDataEn;
      case 'fa':
        return welcomeDataFa;
      default:
        return welcomeData;
    }
  };

  const getHonorsData = () => {
    switch (locale) {
      case 'en':
        return honorsDataEn;
      case 'fa':
        return honorsDataFa;
      default:
        return honorsData;
    }
  };

  const getJourneyData = () => {
    switch (locale) {
      case 'en':
        return journeyDataEn;
      case 'fa':
        return journeyDataFa;
      default:
        return journeyData;
    }
  };

  const getNavCardsData = () => {
    switch (locale) {
      case 'en':
        return navCardsDataEn;
      case 'fa':
        return navCardsDataFa;
      default:
        return navCardsData;
    }
  };

  const getLegendsData = () => {
    switch (locale) {
      case 'en':
        return legendsDataEn;
      case 'fa':
        return legendsDataFa;
      default:
        return legendsData;
    }
  };

  const welcome = getWelcomeData();
  const honors = getHonorsData();
  const journey = getJourneyData();
  const navCards = getNavCardsData();
  const legends = getLegendsData();

  return (
    <div 
      className="min-h-screen bg-[#f8f9fa] text-gray-800 relative overflow-hidden"
    >
      <Navbar />

      <div className="block w-full p-0 m-0 border-none outline-none overflow-hidden relative">
        <HeroSlider />
      </div>

      {/* Profile Card Section */}
      {locale === "ur" && <MobileProfileCard />}
      {locale === "fa" && <FarsiProfileCard />}
      {locale === "en" && <EnglishProfileCard />}

      <div className={`container mx-auto px-3 md:px-4 relative z-10${welcomePaddingClass}`}>
        <div className="islamic-pattern rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] p-6 md:p-12 text-center max-w-5xl mx-auto bg-white hover:border-[#b89628] transition-all duration-700">
          <div className="space-y-4 md:space-y-5 relative z-10">
            <h2 className="font-kufi text-[#D4AF37] text-[12px] sm:text-[14px] md:text-[16px] font-bold tracking-wide opacity-100 leading-tight max-w-[min(100%,20rem)] mx-auto">
              {welcome.bismillah}
            </h2>
            <p
              className={`${welcomeTextClass} text-justify md:text-center mt-1 md:mt-2 max-w-4xl mx-auto`}
              dir={locale === "en" ? "ltr" : "rtl"}
            >
              <span
                className={`text-[#D4AF37] text-base md:text-xl font-semibold drop-shadow-sm block sm:inline mb-1 sm:mb-0 ${locale === "en" ? "sm:mr-2" : "sm:ml-2"
                  }`}
              >
                {welcome.greeting}
              </span>{" "}
              {welcome.description}
            </p>
            <div className="text-center pt-1 md:pt-2">
              <span className={nameClass}>{welcome.name}</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7 mt-4 w-full border-t-2 border-[#D4AF37]/20 pt-6">
              {honors?.map((btn, i) => (
                <div key={i} className="w-full md:w-auto flex justify-center">
                  <Link
                    href={btn.link}
                    className={`group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#4a0000] rounded-full shadow-lg hover:scale-[1.03] hover:shadow-[0_0_22px_rgba(212,175,55,0.65)] transition-all duration-300 w-full max-w-[320px] md:w-[300px] px-2.5 md:px-3 py-1.5 border border-white`}
                  >
                    <div className="relative h-11 w-11 md:h-12 md:w-12 rounded-full border border-white shadow-md overflow-hidden flex-shrink-0 animate-ripple z-10 bg-white p-0.5">
                      <img src={btn.gif} alt={btn.title} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="flex-1 text-center flex flex-col justify-center gap-0.5 min-h-0 py-0.5">
                      <span
                        className={`block leading-tight sm:whitespace-nowrap drop-shadow-sm text-sm sm:text-[0.95rem] md:text-base ${honorTitleClass}`}
                      >
                        {btn.title}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <ProjectSection projectSectionData={projectSectionData} locale={locale} />

      {/* Journey Section */}
      <JourneySection journey={journey} locale={locale} />

      {/* Books Section */}
      <BookSlider books={booksData} locale={locale} />

      {/* Legends Section */}
      <LegendsSection legends={legends} locale={locale} />

      {/* Navigation Cards */}
      <NavCards navCards={navCards} locale={locale} />

      <Footer />
    </div>
  );
};

export default HomeContent;
