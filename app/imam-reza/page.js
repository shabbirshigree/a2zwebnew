"use client";
import { useState } from 'react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaTimes, FaYoutube, FaBookOpen, FaPenNib, FaImages, FaQuoteLeft } from "react-icons/fa";
import Link from 'next/link';

// 🔹 ہیلپر فنکشن: کلاؤڈنری ویڈیو سے خودکار تصویر (تھمب نیل) بنانا
const getThumbnail = (url) => {
  if (!url) return "";
  return url.replace('.mp4', '.jpg');
};

// 🔴 1. اسپاٹ لائٹ ویڈیو (بیک گراؤنڈ میں GIF کے ساتھ)
const spotlightVideo = {
  id: "main-doc",
  title: "ضریحِ نور (نور پروڈکشنز کا آغاز)",
  desc: '"ضریحِ نور" تقریبا 25 سال پہلے حرم امام رضاؑ کی پہلی خدمت اور نور پروڈکشنز کا آغاز ہے۔ جس میں دکھایا گیا کہ امام رضا علیہ السلام کی موجودہ ضریح لمحہ بہ لمحہ کیسے نصب کی گئی۔',
  videoUrl: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771102876/ZAREEH_E_NOOR_URDU_DOCUMENTRY_PART_1_360P_cicv4p.mp4",
  // ✅ آپ کی GIF یہاں سیٹ ہے
  thumbnail: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771115927/Imam_Reza_slide_giff_zmjbol.gif"
};

// 🔴 2. ویڈیو کیٹیگریز (تمام 34 ویڈیوز)
const categories = [
  {
    title: "مستند دستاویزی فلمیں (Documentaries - Urdu)",
    videos: [
      { id: 1, title: "مولا میں آرہا ہوں (کلامِ شاعر)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771099073/%D9%85%D9%88%D9%84%D8%A7_%D9%85%DB%8C%DA%BA_%D8%A2%D8%B1%DB%81%D8%A7_%DB%81%D9%88%DA%BA_%D9%85%D9%88%D9%84%D8%A7_%D9%85%DB%8C%DA%BA_%D8%A2%D8%B1%DB%81%D8%A7_%DB%81%D9%88%DA%BA_360P_epx4fa.mp4" },
      { id: 2, title: "مزدور کا ملکہ سے عشق", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771097150/%D9%85%D8%B2%D8%AF%D9%88%D8%B1_%DA%A9%D8%A7_%D9%85%D9%84%DA%A9%DB%81_%D8%B3%DB%92_%D8%B9%D8%B4%D9%82_II_%D8%B9%D8%B4%D9%82_%D9%85%D8%AC%D8%A7%D8%B2%DB%8C_%D8%B3%DB%92_%D8%B9%D8%B4%D9%82_%D8%AD%D9%82%DB%8C%D9%82%DB%8C_%D8%AA%DA%A9_%D8%AD%D8%B1%D9%85_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9_%DA%A9%DB%8C_%D9%85%D8%B3%D8%AC%D8%AF_%DA%AF%D9%88%DB%81%D8%B1%D8%B4%D8%A7%D8%AF_%DA%A9%DB%8C_%D8%AE%D9%88%D8%A8_3_rrfrsy.mp4" },
      { id: 3, title: "آدابِ زیارت", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771097737/Adaab_e_Ziaraat_II_%D8%A2%D8%AF%D8%A7%D8%A8_%D8%B2%DB%8C%D8%A7%D8%B1%D8%AA_360P_yfao0n.mp4" },
      { id: 4, title: "انگوروں کی برکت", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771097744/%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7%D8%91_%DA%A9%DB%92%D8%A7%D9%86%DA%AF%D9%88%D8%B1%D9%88%DA%BA_%DA%A9%DB%8C_%D8%A8%D8%B1%DA%A9%D8%AA_Blessing_of_the_grapes_of_Imam_Reza_AS._II_360P_rzy50n.mp4" },
      { id: 5, title: "معجزاتِ امام رضاؑ", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771099127/Mojizat_e_Imam_Reza_a.s_II_%D9%85%D8%B9%D8%AC%D8%B2%D8%A7%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_360P_wzxe0j.mp4" },
      { id: 6, title: "حرم کا زیارتی ٹور", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771099141/%D9%BE%D8%A7%DA%A9_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86_%D8%B2%DB%8C%D8%A7%D8%B1%D8%AA%DB%8C_%D8%B3%DB%8C%D8%A7%D8%AD%D8%AA%DB%8C_%D9%B9%D9%88%D8%B1_360P_rale4d.mp4" },
      { id: 7, title: "حرم کا نقار خانہ", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771102885/naqaar_khana_Haram_e_Imam_Reza_a.s_%D8%AC%D8%A8_%D9%85%D8%B9%D8%AC%D8%B2%DB%81_%DB%81%D9%88%D8%AA%D8%A7_%DB%81%DB%92_%D8%A7%D9%88%D8%B1_%D9%85%D8%B1%DB%8C%D8%B6_%DA%A9%D9%88_%D8%B4%D9%81%D8%A7_%D9%85%D9%84%D8%AA%DB%8C_%DB%81%DB%92_%D8%AA%D9%88_360P_ifdmbo.mp4" },
      { id: 8, title: "مہمان سرائے حضرت", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771102832/%D9%85%DB%81%D9%85%D8%A7%D9%85%D8%B3%D8%B1%D8%A7%DB%8C_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_360P_v2zv0d.mp4" },
      { id: 9, title: "مسجد نوغان (تاریخی مقام)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771099073/%D9%85%D8%B3%D8%AC%D8%AF_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_%D9%86%D9%88%D8%BA%D8%A7%D9%86_%D9%85%D8%B4%DA%BE%D8%AF_%D8%AC%DB%81%D8%A7%DA%BA_%D8%B1%D9%88%D8%A7%DB%8C%D8%AA_%DA%A9%DB%92_%D9%85%D8%B7%D8%A7%D8%A8%D9%82_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D9%81_%DA%A9%D8%A7_%D8%AC%D9%86%D8%A7%D8%B2%DB%81_%D8%AA%DB%8C%D8%A7%D8%B1_%DA%A9%DB%8C_36_zqctkn.mp4" },
      { id: 10, title: "رہبر معظم اور غبار روئی", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771099017/_Ghubar_Roryee__the_shrine_of_Imam_Reza_a.s_by_the_Supreme_leader_360P_fbqaxp.mp4" },
    ]
  },
  {
    title: "Documentaries (English)",
    videos: [
      { id: 11, title: "Zamin e Ahu (The Incident)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771097751/Zamin_e_Ahu_II_The_incident_of_Imam_Reza_s_a.s._kindness_english_360P_nvf6vf.mp4" },
      { id: 12, title: "The Holy Shrine Documentary", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771102864/The_Holy_Shrine_of_Imam_Reza_Pbuh_360P_inofz9.mp4" },
      { id: 13, title: "The Courtyard of Healing", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771102863/The_Courtyard_of_Healing_360P_v6lute.mp4" },
      { id: 14, title: "A Sacred Zarih", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103123/A_Sacred_Zarih_Where_the_Earth_and_Heavens_Yearn_to_Gather_360P_zzhmtt.mp4" },
    ]
  },
  {
    title: "منقبت و نذرانہ عقیدت (Urdu & Farsi)",
    videos: [
      { id: 15, title: "میرے ہاتھ تھام لیجئے (فارسی)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771097746/%D9%85%DB%8C%D8%B1%DB%92_%DB%81%D8%A7%D8%AA%DA%BE_%D8%AE%D8%A7%D9%84%DB%8C_%DB%81%DB%8C%DA%BA_%D9%85%DB%8C%D8%B1%DB%92_%DB%81%D8%A7%D8%AA%DA%BE_%D8%AA%DA%BE%D8%A7%D9%85_%D9%84%DB%8C%D8%AC%D8%A6%DB%92_%DB%8C%D8%A7_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_%D9%81%D8%A7%D8%B1%D8%B3%DB%8C_%D8%B3%DB%92_%D8%A7%D8%B1%D8%AF%D9%88_%D8%AA%D8%B1%D8%AC%D9%85%DB%81_36_xgk2cg.mp4" },
      { id: 16, title: "کبوتر کا اظہارِ عشق", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771097765/%D8%A7%DB%8C%DA%A9_%DA%A9%D8%A8%D9%88%D8%AA%D8%B1_%DA%A9%D8%A7_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_%D8%B3%DB%92_%D8%A7%D8%B8%DB%81%D8%A7%D8%B1_%D8%B9%D8%B4%D9%82_%DA%A9%D8%A7_%D8%A7%D9%86%D9%88%DA%A9%DA%BE%D8%A7_%D8%A7%D9%86%D8%AF%D8%A7%D8%B2_%DA%A9%D8%A8%D9%88%D8%AA%D8%B1%D9%85_%DB%81%D9%88%D8%A7%DB%8C%DB%8C_%D8%B4%D8%AF%D9%85_360P_wvwwlp.mp4" },
      { id: 17, title: "پھر سے مولا مجھے بلا", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103165/Phirse_Mola_Mujhe_Bula_Mashad_Men_II_manqabat_Mohsin_Shokat_II_%D9%BE%DA%BE%D8%B1_%D8%B3%DB%92_%D9%85%D9%88%D9%84%D8%A7_%D9%85%D8%AC%DA%BE%DB%92_%D8%A7%DA%A9_%D8%A8%D8%A7%D8%B1_%D8%A8%D9%84%D8%A7_%D9%85%D8%B4%DA%BE%D8%AF_%D9%85%DB%8C%DA%BA_360P_aek9uu.mp4" },
      { id: 18, title: "کچھ لمحے گزار آیا ہوں", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103142/%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%AD%D8%B6%D8%B1%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_-_%DA%A9%DA%86%DA%BE_%D9%84%D9%85%D8%AD%DB%92_%DA%AF%D8%B0%D8%A7%D8%B1_%D8%A2%DB%8C%D8%A7_%DB%81%D9%88%DA%BA_kuch_lamhey_guzar_aya_Manqabat_Imam_Reza_a.s_360P_gjcbcn.mp4" },
      { id: 19, title: "شام و سحر ہے لبوں پہ", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103098/Sham_sahar_ha_labon_par_-_Manqabat_Imam_Reza_a.s_2017%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%AD%D8%B6%D8%B1%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_-_%D8%B4%D8%A7%D9%85_%D9%88_%D8%B3%D8%AD%D8%B1_%DB%81%DB%92_360P_okvb8w.mp4" },
      { id: 20, title: "جو ہے خدا کا نور", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103024/Manqabat_Imam_Reza_a.s-_Jo_ha_Khuda_ka_noor_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%AD%D8%B6%D8%B1%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_-_%D8%AC%D9%88_%DB%81%DB%92_%D8%AE%D8%AF%D8%A7_%DA%A9%D8%A7_%D9%86%D9%88%D8%B1_360P_mx9mql.mp4" },
      { id: 21, title: "جب سے آئے در رضاؑ", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103170/Jabse_aye_dar_e_Reza_a_s_k_qareeb_manqabat_Imam_Reza_a.s_2017_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%AC%D8%A8_%D8%B3%DB%92_%D8%A2%D8%A6%DB%92_%D8%AF%D8%B1_%D8%B1%D8%B6%D8%A7_%DA%A9%DB%92_%D9%82%D8%B1%DB%8C%D8%A8_360P_s8utro.mp4" },
      { id: 22, title: "اے شاہ خراسان", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103135/Manqabat_Imam_Reza_a.s_-_A_Shah_e_Khurasan_2017_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%D9%8A%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_-_%D8%A7%DB%92_%D8%B4%D8%A7%DB%81_%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86_360P_s6sjdf.mp4" },
      { id: 23, title: "ہم نے لطف خالق سے", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103216/%DB%81%D9%85_%D9%86%DB%92_%D9%84%D8%B7%D9%81_%D8%AE%D8%A7%D9%84%D9%82_%D8%B3%DB%92_%D9%85%D8%AF%D8%AD%D8%AA_%D8%B1%D8%B6%D8%A7%D9%8F_%DA%A9%DB%8C_%DB%81%DB%92_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_360P_az7j0e.mp4" },
      { id: 24, title: "المدد مولا رضاؑ", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103092/%D8%A7%D9%84%D9%85%D8%AF%D8%AF_%D9%85%D9%88%D9%84%D8%A7_%D8%B1%D8%B6%D8%A7%D9%8F_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_360P_ffalee.mp4" },
      { id: 25, title: "یا امام رضا یا امام رضا", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103158/%DB%8C%D8%A7_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7%D9%8F_%DB%8C%D8%A7_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7%D9%82_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_%D9%BE%DB%8C%D8%B4%DA%A9%D8%B4_%D9%86%D9%88%D8%B1_%D9%BE%D8%B1%D9%88%DA%88%DA%A9%D8%B4%D9%86_%D9%BE%D8%A7%DA%A9%D8%B3%D8%AA%D8%A7%D9%86_360P_licv3x.mp4" },
      { id: 26, title: "میرے جد ہیں امام رضاؑ", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103177/%D9%85%DB%8C%D8%B1%DB%92_%D8%AC%D8%AF_%DB%81%DB%8C%DA%BA_%D8%B9%D9%84%DB%8C_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7%D9%8F_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_360P_a6z6t5.mp4" },
      { id: 27, title: "برس رہی ہے نور کی برسات", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103184/%D8%A8%D8%B1%D8%B3_%D8%B1%DB%81%DB%8C_%DB%81%DB%92_%D8%AC%D9%88_%D9%85%D8%B4%DA%BE%D8%AF_%D9%85%DB%8C%DA%BA_%D9%86%D9%88%D8%B1_%DA%A9%DB%8C_%D8%A8%D8%B1%D8%B3%D8%A7%D8%AA_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D9%8F_360P_kief3w.mp4" },
      { id: 28, title: "مشہد کے شہنشاہ", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103181/%D9%85%D8%B4%DA%BE%D8%AF_%DA%A9%DB%92_%D8%B4%DB%81%D9%86%D8%B4%D8%A7%DB%81_%DB%8C%D8%A7_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D9%8F_%D9%85%D9%86%D9%82%D8%A8%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_360P_fk3ap6.mp4" },
    ]
  },
  {
    title: "خصوصی پروگرامز و تبرکات",
    videos: [
      { id: 29, title: "جشن ولادت (خواتین کی حاضری)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771099004/%D8%AC%D8%B4%D9%86_%D9%88%D9%84%D8%A7%D8%AF%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B9%D9%84%DB%8C_%D8%A7%D8%A8%D9%86_%D9%85%D9%88%D8%B3%D9%B0%DB%8C_%D8%A7%D9%84%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_%DA%A9%DB%92_%D9%85%D9%88%D9%82%D8%B9_%D9%BE%D8%B1_%D8%AE%D9%88%D8%A7%D8%AA%DB%8C%D9%86_%D9%BE%DA%BE%D9%88%D9%84_%D9%84%D8%A6%DB%92%D8%AD%D8%A7%D8%B6%D8%B1%DB%8C_%DA%A9%DB%92_%D9%84%D8%A6%DB%92_3_cip90l.mp4" },
      { id: 30, title: "جشن ولادت (پاک و ہند کے زائرین)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771099051/%D8%AC%D8%B4%D9%86_%D9%88%D9%84%D8%A7%D8%AF%D8%AA_%D8%A7%D9%85%D8%A7%D9%85_%D8%B9%D9%84%DB%8C_%D8%A7%D8%A8%D9%86_%D9%85%D9%88%D8%B3%D9%B0%DB%8C_%D8%A7%D9%84%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_%DA%A9%DB%92_%D9%85%D9%88%D9%82%D8%B9_%D9%BE%D8%B1_%D9%BE%D8%A7%DA%A9_%D9%88_%DB%81%D9%86%D8%AF_%DA%A9%D8%A7_%D8%B2%D8%A7%D8%A6%D8%B1%DB%8C%D9%86_%DA%A9%D8%A7_%D8%AD%D8%B1%D9%85_%D8%A7%D9%85_3_h4a7dq.mp4" },
      { id: 31, title: "حرم میں ماہِ رمضان", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771103198/Ramzan_dar_haram_e_Imam_Reza_a_s_%D8%AD%D8%B1%D9%85_%D8%A7%D9%85%D8%A7%D9%85_%D8%B9%D9%84%DB%8C_%D8%A7%D9%84%D8%B1%D8%B6%D8%A7_%D8%B9%D9%84%DB%8C%DB%81_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85_360P_irco0g.mp4" },
      { id: 32, title: "لائیو زیارت (لاہور)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771106804/%D8%AD%D8%B1%D9%85_%D8%A7%D9%85%D8%A7%D9%85_%D8%B1%D8%B6%D8%A7_%D9%81_%D8%B3%DB%92%D9%84%D8%A7%D8%A6%DB%8C%D9%88_%D8%B2%DB%8C%D8%A7%D8%B1%D8%AA_Imambargah_Atya_Abutalib_a.3gp_ev637r.3gp" },
      { id: 33, title: "جشن امیر المومنینؑ (تبرکات)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771106790/VID-20260128-WA0014.3gp_f9pj1t.3gp" },
      { id: 34, title: "جشن امام زمانہؑ (تبرکات)", url: "https://res.cloudinary.com/dlafcjt6z/video/upload/v1771106771/VN20260205_195313.3gp_e1nqnt.3gp" },
    ]
  }
];

// 🔴 3. کتابوں کا ڈیٹا (پلیس ہولڈر)
const booksData = [
  {
    id: 1,
    title: "انیس النفوس",
    subtitle: "تاریخ حرم امام رضا علیہ السلام",
    desc: "ایک جامع کتاب جس میں حرم امام رضاؑ کے تمام حصوں، صحنوں اور تاریخی مقامات کی مستند تفصیلات بیان کی گئی ہیں۔",
    cover: "https://via.placeholder.com/300x450/004d40/D4AF37?text=Anis-ul-Nufoos", 
  },
  {
    id: 2,
    title: "خراسان رضوی",
    subtitle: "اردو ترجمہ و ڈیزائن",
    desc: "خانہ فرہنگ ایران کی مشہور کتاب کا اردو ترجمہ جو پاکستان میں پہلی بار نفیس انداز میں ڈیزائن اور شائع کیا گیا۔",
    cover: "https://via.placeholder.com/300x450/006064/ffffff?text=Khurasan+Razavi",
  }
];

// 🔴 4. تحریروں کا ڈیٹا (پلیس ہولڈر)
const writingsData = [
  { id: 1, title: "امام رضاؑ کی حیات مبارکہ اور ہماری ذمہ داریاں", type: "کالم" },
  { id: 2, title: "مشہد مقدس کا روحانی سفر: ایک تجزیہ", type: "سفرنامہ" },
  { id: 3, title: "ضامنِ آہو: محبت کا استعارہ", type: "مضمون" },
  { id: 4, title: "حرم امام رضاؑ میں رمضان کی بہاریں", type: "مشاہدات" },
];

export default function ImamRezaNetflixStyle() {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const openVideo = (video) => {
    setCurrentVideo(video);
    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-[#141414] text-white font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* 🔴 1. سنیماٹک ہیرو سیکشن (نئی GIF کے ساتھ) */}
      <div className="relative w-full h-[80vh] md:h-[90vh]">
        <div className="absolute inset-0">
           {/* GIF یہاں استعمال ہو رہی ہے */}
           <img src={spotlightVideo.thumbnail} alt="Hero" className="w-full h-full object-cover opacity-60" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/60 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-20 flex flex-col items-start justify-end h-full">
           <span className="text-[#D4AF37] font-bold tracking-widest text-sm md:text-base mb-2 uppercase border border-[#D4AF37] px-3 py-1 rounded animate-pulse">
             خادم امام علی ابن موسیٰ الرضا علیہ السلام
           </span>
           <h1 className="text-3xl md:text-5xl font-bold font-amiri text-white mb-4 drop-shadow-lg leading-tight">
             خادم امام رضا علیہ السلام
             <span className="block text-2xl md:text-3xl text-[#D4AF37] mt-3 leading-normal">حاجی شبیر احمد شگری کی خدمات کی کچھ جھلکیاں</span>
           </h1>
           
           <p className="text-gray-300 max-w-2xl text-lg md:text-xl urdu-text leading-loose mb-6 hidden md:block">
             {spotlightVideo.desc}
           </p>

           {/* 🔴 بٹنوں کا نیا "سنیہرا" (Gold Gradient) انداز */}
           <div className="flex gap-4">
             <button 
               onClick={() => openVideo({ url: spotlightVideo.videoUrl, title: spotlightVideo.title })}
               className="flex items-center gap-2 bg-gradient-to-b from-[#FBF5B7] via-[#BF953F] to-[#AA771C] text-black shadow-[0_0_20px_rgba(212,175,55,0.6)] border border-[#FBF5B7] px-6 md:px-8 py-3 rounded hover:scale-105 transition-all font-bold text-lg"
             >
               <FaPlay /> ویڈیو دیکھیں
             </button>
             <button 
               onClick={() => setShowInfo(true)}
               className="flex items-center gap-2 bg-gradient-to-b from-[#FBF5B7] via-[#BF953F] to-[#AA771C] text-black shadow-[0_0_20px_rgba(212,175,55,0.6)] border border-[#FBF5B7] px-6 md:px-8 py-3 rounded hover:scale-105 transition-all font-bold text-lg"
             >
               <FaInfoCircle /> خادم امام رضاؑ بننے کا احوال
             </button>
           </div>
        </div>

        <Link href="/" className="absolute top-6 left-6 z-30 bg-black/50 p-3 rounded-full hover:bg-[#D4AF37] transition-colors">
          <FaChevronLeft size={24} />
        </Link>
      </div>

      {/* 🔴 2. خصوصی سیکشن: "نمایاں اقتباس" */}
      <div className="container mx-auto px-4 py-12 relative z-20 -mt-10">
        <div className="bg-[#1f1f1f] border-2 border-[#D4AF37] rounded-xl p-8 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
           <FaQuoteLeft className="text-[#D4AF37] text-4xl mb-4" />
           <p className="text-gray-300 text-lg md:text-xl leading-loose urdu-text text-center" dir="rtl">
             "جس در پہ جھکتے ہیں بادشاہ، یہ وہ دربار ہے..."
             <br/>
             <span className="text-[#D4AF37] font-bold block mt-4">2011 میں آستان قدس رضوی کی جانب سے "خادم امام رضا علیہ السلام" کا خطاب عطا ہوا۔</span>
           </p>
        </div>
      </div>

      {/* 🔴 3. ویڈیو کیٹیگریز (GRID VIEW) */}
      <div className="pb-10 px-4 md:px-12 space-y-16">
        {categories.map((cat, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] border-b border-[#D4AF37]/30 pb-2 inline-block urdu-text">
              {cat.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cat.videos.map((video) => (
                <div 
                  key={video.id} 
                  onClick={() => openVideo(video)}
                  className="bg-[#2f2f2f] rounded-lg overflow-hidden relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group border border-transparent hover:border-[#D4AF37]"
                >
                  <div className="relative aspect-video">
                    {/* یہاں اب ویڈیو پلیئر نہیں، بلکہ ہلکی پھلکی تصویر لوڈ ہوگی */}
                    <img src={getThumbnail(video.url)} className="w-full h-full object-cover opacity-90 group-hover:opacity-100" alt={video.title} />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <div className="bg-[#D4AF37] rounded-full p-3 shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                        <FaPlay className="text-white text-lg ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-bold text-white text-right urdu-text truncate">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔴 4. تعارف (مکمل تحریر) */}
      {showInfo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
           <div className="bg-[#1f1f1f] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl border border-[#D4AF37]/30 p-6 md:p-10 relative shadow-[0_0_50px_rgba(212,175,55,0.2)] scrollbar-hide">
              <button onClick={() => setShowInfo(false)} className="fixed top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors z-[60] shadow-lg"><FaTimes size={20}/></button>
              
              <div className="text-center mb-8 mt-6">
                 <h2 className="text-3xl md:text-5xl font-amiri text-[#D4AF37] mb-2">خادمِ دربارِ شاہِ خراسان</h2>
                 <p className="text-gray-400 text-lg">زندگی کا روحانی و ایمانی سفر</p>
              </div>
              
              <div className="text-gray-300 text-lg md:text-xl leading-loose urdu-text space-y-6 text-justify px-2" dir="rtl">
                <p className="font-bold text-white text-2xl text-center">"جس در پہ جھکتے ہیں بادشاہ، یہ وہ دربار ہے..."</p>
                
                <div className="bg-[#D4AF37]/10 p-6 rounded-lg border-r-4 border-[#D4AF37]">
                   <p className="italic text-[#D4AF37]">
                     امام علی ابن موسٰ الرضا علیہ السلام کا فرمان ہے کہ: "جو عالم غربت میں میری زیارت کو آئے گا میں تین وقتوں میں اس کے پاس آؤں گا تاکہ اسے قیامت کی سختیوں سے نجات دلاؤں۔ اعمال نامے دیتے وقت، پل صراط سے گزرتے وقت اور اعمال کا وزن کرتے وقت۔"
                   </p>
                </div>

                <p>میری زندگی کا حاصل، میرا کل سرمایہ اور میری بخشش کا سب سے بڑا آسرا، وہ نسبت ہے جو مجھے شاہِ خراسان، امام علی رضا علیہ السلام کے دربار سے ملی ہے۔ یہ محض ایک ٹائٹل نہیں، بلکہ 24 سالہ وفا اور عشق کا ایک ایسا سفر ہے جس کا آغاز سن 2002ء میں ہوا۔</p>

                <h3 className="text-[#D4AF37] text-2xl font-bold border-b border-gray-700 pb-2">نور کی پہلی کرن: "ضریحِ نور" (2002)</h3>
                <p>قدرت نے مجھے نور پھیلانے کے لیے منتخب کیا تو سب سے پہلا کام بھی اسی "منبعِ نور" کا سونپا۔ 2002ء میں، جب امام رضاؑ کی موجودہ ضریح مبارک کی تعمیر (پرانی ضریح مبارک کو کھول کر نئی ضریح نصب کئے جانے کے لمحات) کے بارے میں ڈاکومنٹری فلم "ضریحِ نور" بنائی۔ دراصل نور پروڈکشن کا آغاز ہی یہاں سے شروع ہوتا ہے۔</p>
                <p>الحمدللہ "نور پروڈکشنز" کے اردگرد نور ہی نور پھیلا ہے۔ سب سے پہلا نور، نور پروڈکشنز کا نام ہے جس کا نور آیت "اللہ نورالسمٰوات والارض" سے لیا گیا ہے۔ پھر جب زندگی ان نورانی گرداب میں آگئی تو ان انوار کی روحانی برکتیں اور خیر برسنے لگیں۔</p>
                
                <h3 className="text-[#D4AF37] text-2xl font-bold border-b border-gray-700 pb-2">اعزازِ خدمت (2011)</h3>
                <p>ضریح نور اور دیگر اسلامی فرھنگی خدمات کو یقیناً امام رؤف نے شرف قبولیت بخشی اور اس کریم ذات کا مجھ ناچیز پر کرم دیکھیے کہ 2011 میں آستان قدس رضوی کی جانب سے "خادم امام رضا علیہ السلام" کا خطاب عطا ہوا۔ یہ وہ لمحہ تھا جب میں نے اپنی باقی زندگی اس دربار کی نوکری کے لیے وقف کر دی۔ اس کے بعد عنایتیں ہی عنایتیں ہیں۔</p>

                <h3 className="text-[#D4AF37] text-2xl font-bold border-b border-gray-700 pb-2">خدمات کا سفر</h3>
                <ul className="list-disc pr-6 space-y-3">
                   <li><strong>پہلا نمائندہ:</strong> پاکستان میں آستان قدس رضوی کا پہلا نمائندہ ہونے کا اعزاز حاصل ہوا جس کے تحت کئی پروجیکٹ پر خدمت انجام دیں۔</li>
                   <li><strong>وحدتِ اسلامی:</strong> انقلاب اسلامی ایران کی سالگرہ کے موقع پر پاکستان بھر سے اہم شخصیات کے انٹرویوز کئے جسے ایران میں ڈبنگ کے ساتھ دکھایا گیا۔</li>
                   <li><strong>مناقب پروڈکشن:</strong> پاکستان کے مشہور منقبت خواہوں کی 16 منقبتیں اردو زبان میں تیار کی گئیں۔</li>
                   <li><strong>لائیو زیارات:</strong> ٹیکنالوجی کو روحانیت کا ذریعہ بناتے ہوئے، سکردو اور لاہور میں ہزاروں مومنین کو براہِ راست (Live) حرمِ امام رضاؑ کی زیارت کروائی۔</li>
                   <li><strong>تبرکات کی تقسیم:</strong> پاکستان میں پہلی مرتبہ حرم امام رضا علیہ السلام کے تبرکات (پھول، سکے اور نمک) مختلف محافل میں تقسیم کئے گئے۔</li>
                   <li><strong>انیس النفوس:</strong> حرم امام رضاؑ کے تاریخی حوالوں پر مبنی جامع کتاب لکھنے کی سعادت حاصل ہوئی۔</li>
                   <li><strong>خراسان رضوی:</strong> صوبہ خراسان رضوی کے نام سے پاکستان میں پہلی مرتبہ اردو زبان میں باتصویر کتاب تیار ہوئی جس کی ڈیزائننگ کا شرف حاصل ہوا۔</li>
                </ul>

                <h3 className="text-[#D4AF37] text-2xl font-bold border-b border-gray-700 pb-2">میرا ایمان</h3>
                <p>اس غلامی میں میں جو کچھ انجام دے سکا ہوں یا ان شااللہ انجام دوں گا یہ ربِ کائنات کا مجھ پر احسان ہے کہ مجھے اس خدمت کے لیے چن لیا گیا۔ میرا ایمان ہے کہ جس طرح مولا نے وعدہ فرمایا ہے کہ میں تین مواقع پر مدد کے لئے آؤں گا وہی اصل حاصل ہوگا جب ہم ایک ایک نیکی کو ترس رہے ہوں گے۔</p>
              </div>
           </div>
        </div>
      )}

      {/* 🔴 5. علمی و ادبی گوشہ (کتب اور تحاریر) */}
      <div className="container mx-auto px-4 md:px-12 py-10 relative z-10">
         <h2 className="text-3xl md:text-4xl font-amiri text-[#D4AF37] mb-10 text-center border-b border-[#D4AF37]/30 pb-4 inline-block mx-auto w-full">
            تصنیفات و تحاریر (علمی سرمایہ)
         </h2>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* بائیں طرف: کتب خانہ */}
            <div className="space-y-6">
               <h3 className="text-2xl font-bold text-white flex items-center gap-3 urdu-text"><FaBookOpen className="text-[#D4AF37]"/> کتب و تالیفات</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {booksData.map((book) => (
                   <div key={book.id} className="bg-[#1f1f1f] p-4 rounded-xl border border-gray-700 hover:border-[#D4AF37] transition-all group hover:bg-[#252525]">
                      <div className="h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center text-gray-600"><FaBookOpen size={40} /></div>
                         <img src={book.cover} alt={book.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                            <h4 className="text-xl font-bold text-[#D4AF37] urdu-text">{book.title}</h4>
                         </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed urdu-text text-right" dir="rtl">{book.desc}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* دائیں طرف: تحریریں اور گیلری */}
            <div className="space-y-8">
               
               {/* تحریریں */}
               <div>
                 <h3 className="text-2xl font-bold text-white flex items-center gap-3 urdu-text mb-4"><FaPenNib className="text-[#D4AF37]"/> کالمز و مضامین</h3>
                 <div className="bg-[#1f1f1f] rounded-xl border border-gray-700 overflow-hidden">
                    {writingsData.map((item, index) => (
                       <div key={item.id} className={`p-4 flex justify-between items-center hover:bg-[#2a2a2a] transition-colors ${index !== writingsData.length - 1 ? 'border-b border-gray-700' : ''}`}>
                          <button className="text-[#D4AF37] text-sm border border-[#D4AF37] px-3 py-1 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">پڑھیں</button>
                          <div className="text-right">
                             <h5 className="font-bold text-white urdu-text text-lg">{item.title}</h5>
                             <span className="text-xs text-gray-500 bg-black/30 px-2 py-0.5 rounded">{item.type}</span>
                          </div>
                       </div>
                    ))}
                 </div>
               </div>

               {/* گیلری Placeholder */}
               <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3 urdu-text mb-4"><FaImages className="text-[#D4AF37]"/> یادگار لمحات</h3>
                  <div className="bg-gradient-to-r from-[#1f1f1f] to-[#2a2a2a] p-6 rounded-xl border border-dashed border-gray-600 text-center hover:border-[#D4AF37] transition-all cursor-pointer group">
                     <FaImages className="text-4xl text-gray-500 mx-auto mb-2 group-hover:text-[#D4AF37] transition-colors"/>
                     <p className="text-gray-400 group-hover:text-white urdu-text">تصاویر اور اسناد کا سیکشن جلد شامل کیا جائے گا</p>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* 🔴 6. مکمل پلے لسٹ بٹن */}
      <div className="container mx-auto px-4 pb-20 pt-10 text-center border-t border-gray-800 mt-10">
        <div className="bg-gradient-to-r from-[#006064] to-[#004d40] p-8 rounded-2xl border border-[#D4AF37]/30 shadow-2xl max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-500">
          <FaBookOpen className="text-[#D4AF37] text-5xl mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold font-amiri text-[#D4AF37] mb-4">
            امام رضاؑ کے بارے میں مکمل ویڈیوز
          </h3>
          <p className="text-gray-300 mb-6 urdu-text text-lg">
             مکمل خدمات دیکھنے کے لئے کلک کریں
          </p>
          <a 
            href="https://youtube.com/playlist?list=PLVLSFOIjQLcLVVB_iHIoaN45MJx5xaJed&si=gWo90mz1Xo4NrhjB" 
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#ff0000] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#cc0000] transition-all shadow-lg hover:shadow-red-900/50"
          >
            <FaYoutube size={24} /> مکمل پلے لسٹ دیکھیں
          </a>
        </div>
      </div>

      {/* 🔴 7. ویڈیو پلیئر ماڈل (Cloudinary - FIXED CLOSE BUTTON) */}
      {showModal && currentVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-6xl relative">
            {/* FIXED CLOSE BUTTON */}
            <button 
              onClick={() => setShowModal(false)} 
              className="fixed top-5 right-5 text-white bg-red-600 hover:bg-red-700 rounded-full p-2 z-[110] shadow-lg transition-transform hover:scale-110"
            >
              <FaTimes size={24} />
            </button>
            <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.2)] border border-[#D4AF37]/50">
               <video 
                 src={currentVideo.url} 
                 className="w-full h-full" 
                 controls 
                 autoPlay 
                 controlsList="nodownload"
               ></video>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-bold mt-4 text-center urdu-text">{currentVideo.title}</h3>
          </div>
        </div>
      )}

    </main>
  );
}