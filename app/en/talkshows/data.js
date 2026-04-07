// app/en/talkshows/data.js

import { FaYoutube, FaFacebook, FaGlobe } from 'react-icons/fa';

export const talkshowIntro = {
  title: "Electronic Media",
  subtitle: "Unveiling Hidden Truths Behind the Scenes (Noor Productions Presents)",
  quote: `"After successfully spending a long period in the field of written journalism, I felt the acute need that many important and sensitive topics are kept silent in electronic media. To bring these hidden truths to the public and raise awareness, I ventured into the field of TV talk shows."`,

  noorProductionIntro: {
    title: "Noor Productions: A Visionary Beginning and Historic Journey",
    text1: "The most luminous chapter of this entire media journey is 'Noor Productions'. The reason for this name is the great verse from Surah An-Nur of the Quran: 'Allah is the Light of the heavens and the earth.' Inspired by this sacred light, the foundation of this institution was laid. Noor Productions was officially founded in 2008, at a time when YouTube itself was in its early stages (2007). To recognize the need of the times and the rising power of digital media was a decision that shaped future paths.",
    text2: "Although, due to the immense responsibilities of the Islamic Culture House of Iran, continuous work could not be done initially, its foundation was extremely strong. The first and historic work was the 'Shrine of Light' in 2001-2002, which documented the spiritual scenes of the preparation of the blessed shrine of Imam Raza (as).",
    text3: "The dedicated focus and hard work of the past few years has turned this channel into a flourishing tree. Today, praise be to God, it has nearly 45,000 subscribers and views in the millions. The most beautiful and spiritual example of its success is the tribute 'Ya Zahra' presented in honor of the great lady Fatima al-Zahra (peace be upon her), which has been viewed more than 1.5 million times. Similarly, Persian videos have also received millions of views. This channel has today become a great digital center for educational, Islamic, cultural, tourism, and Quranic sciences."
  },

  features: [
    {
      title: "Palestinian Issue and Truth",
      desc: `Among these important topics, the "Palestinian Issue" was foremost. Although it is an age-old issue of the Islamic world, we have been consistently raising our voice on it for the past 25 years. To honor the mission of the Cultural House and Imam Khomeini's order on "Quds Day," I filled the void in TV programs.`
    },
    {
      title: "Late Zahir-ud-Din Babur and Star Asia TV",
      desc: `The role of Star Asia TV owner and my dear friend, late Zahir-ud-Din Babur, in the success of this mission is unforgettable. With his encouragement, we formally initiated special talk shows and informative programs on these untouched topics.`
    },
    {
      title: "The Beginning of a New Trend",
      desc: `Our initiative laid the foundation for new thinking in the media. Today, praise be to God, whether it's the Palestinian issue or other important Islamic topics, our national media discusses them extensively. This is the chain of awareness that we began.`
    }
  ]
};

export const TALKSHOW_CHANNELS = [
  {
    title: 'Noor ul-Quran',
    handle: '@noorullquraan',
    desc: 'World\'s first visual Quran project. Visual translation of verses with a unique approach to Quranic teachings.',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorullquraan',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705133/NoorulQuran_normal_jpeg_eq5n6u.jpg',
    color: 'from-emerald-500 to-green-600',
    type: 'youtube'
  },
  {
    title: 'Noor Productions',
    handle: '@noorproduction',
    desc: 'Center for Islamic cultural films, pilgrimages, and documentary-based videos.',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-700 to-indigo-800',
    type: 'youtube'
  },
  {
    title: 'Tiflan-e-Noor',
    handle: '@tiflan-e-noor',
    desc: 'Unique channel of Islamic, moral, educational and entertainment videos for children in Urdu.',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@TiflaneNoor',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/tiflan_jlzaog.jpg',
    color: 'from-blue-700 to-indigo-800',
    type: 'youtube'
  },
  {
    title: 'BNN (Baltistan News Network)',
    handle: '@Baltistan News Network',
    desc: 'News and information from across Baltistan.',
    button: 'Follow',
    href: 'https://www.youtube.com/@Bnnskardu',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1773921624/bnn_logo_globe_copy_xlcxoa.png',
    color: 'from-red-600 to-red-800',
    type: 'youtube'
  },
  {
    title: 'Noor Productions (Facebook)',
    handle: '@noorproductionchannel',
    desc: 'Official Facebook page of Noor Productions. Cultural films and pilgrimages.',
    button: 'Follow',
    href: 'https://www.facebook.com/noorproductionchannel',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-600 to-blue-800',
    type: 'facebook'
  },
  {
    title: 'Aparat (Noor Productions)',
    handle: 'aparat.com/noorproduction',
    desc: 'Persian channel of Noor Productions',
    button: 'Follow Channel',
    href: 'https://www.aparat.com/noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/aparat_gvp8hp.png',
    color: 'from-pink-500 to-rose-600',
    icon: <FaGlobe size={30} />
  },
  {
    title: 'Shabbir Ahmed Shigri',
    handle: '@shabbirahmed1103',
    desc: 'Official personal channel. Vlogs, talk shows, analysis and daily activities.',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@shabbirahmed1103',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/channels4_profile_fz4ga1.jpg',
    color: 'from-cyan-500 to-blue-500',
    icon: <FaYoutube size={30} />
  },
  {
    title: 'Rezavi Online',
    handle: '@Rezavi Islamic Products',
    desc: 'Islamic cultural products.',
    button: 'Follow',
    href: 'https://www.youtube.com/@RezaviOnline',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1773921471/9e5b66dc-aaa8-4379-84e6-a1ce4037acf1.png',
    color: 'from-blue-600 to-blue-800',
    icon: <FaFacebook size={30} />
  }
];

export const talkshowVideos = [
  // Talk Shows
  { title: "Special Talk Show on Palestinian Issue", url: "https://youtu.be/-nwGiL02p8U", category: "Talk Shows" },
  { title: "Talk Show on Gaza and Bloodshed", url: "https://youtu.be/fVe9fr4XgO4", category: "Talk Shows" },
  { title: "Special Talk Show on Quds Day", url: "https://youtu.be/mb-ph5NXbcw", category: "Talk Shows" },
  { title: "Special Talk Show on Imam Khomeini's Life", url: "https://youtu.be/-17ji3vQRnE", category: "Talk Shows" },
  { title: "Special Show on Anniversary of Iranian Revolution", url: "https://youtu.be/mbivPMbARck", category: "Talk Shows" },
  { title: "Special Talk Show on Martyrdom of Amir al-Mu'minin", url: "https://youtu.be/iQajjLPxuH0", category: "Talk Shows" },
  { title: "Imam Mahdi and Belief in Other Religions", url: "https://youtu.be/VjsUpKw7mJg", category: "Talk Shows" },
  { title: "Talk Show on Anniversary of Islamic Revolution", url: "https://youtu.be/EWU6sLiF95c", category: "Talk Shows" },
  { title: "Iranian Scientist's Martyrdom and Regional Situation", url: "https://youtu.be/wXnBLpHBUmI", category: "Talk Shows" },
  { title: "Gilgit-Baltistan Gives Strong Response to India (Part 1)", url: "https://youtu.be/KjKgcUM_Wlk", category: "Talk Shows" },
  { title: "Gilgit-Baltistan Gives Strong Response to India (Part 2)", url: "https://youtu.be/y3CFui8_CDo", category: "Talk Shows" },
  { title: "Gilgit-Baltistan Gives Strong Response to India (Part 3)", url: "https://youtu.be/1mqC9xZCWMw", category: "Talk Shows" },
  { title: "Attempts at Religious Discord Under Pretext of Corona (Part 1)", url: "https://youtu.be/R7PUyW43br0", category: "Talk Shows" },
  { title: "Attempts at Religious Discord Under Pretext of Corona (Part 3)", url: "https://youtu.be/LT25Ftixsqw", category: "Talk Shows" },

  // Interviews
  { title: "Special Interview with Son of Poet Iqbal, Javed Iqbal", url: "https://youtu.be/hvxyDD6OV_0", category: "Interviews" },
  { title: "UK TV Special Interview on Imam Khomeini", url: "https://youtu.be/h6txjU2BmOo", category: "Interviews" },
  { title: "Ramadan Special with Iranian Reciters", url: "https://youtu.be/8dzF3AAjx88", category: "Interviews" },
  { title: "Special Discussion on Services of Shabbir Ahmad Shigri", url: "https://youtu.be/cU5tfXmF1Qs", category: "Interviews" },
  { title: "Special Interview with Consul General of Sri Lanka Yaseen Joya", url: "https://youtu.be/UhXOlB875Zc", category: "Interviews" },
  { title: "Conversation with Former Education Minister Ibrahim Thanai Part 1", url: "https://youtu.be/2sBuxdec0y4", category: "Interviews" },
  { title: "Conversation with Former Education Minister Ibrahim Thanai Part 2", url: "https://youtu.be/f9zhqeV84g8", category: "Interviews" },
  { title: "Discussion with Aamir Hassan Hashmi", url: "https://youtu.be/_0H7ACco2o0", category: "Interviews" },
  { title: "Interview with Maulana Qari Muhammad Afzal Imani", url: "https://youtu.be/p00yZhZG80M", category: "Interviews" },
  { title: "Mulaqat Program - with Syed Nobhaar Shah", url: "https://youtu.be/HfhK0rzEdWA", category: "Interviews" },

  // Informative & Cultural
  { title: "Are Sunni Mosques Really Not Present in Iran?", url: "https://youtu.be/lzs9np9tDKw", category: "Informative & Cultural" },
  { title: "Unique History of Tazia Processions in Baltistan", url: "https://youtu.be/vU0L3-iE3I8", category: "Informative & Cultural" },
  { title: "Everything Belongs to Your Father", url: "https://youtu.be/OxDiki06udw", category: "Informative & Cultural" },

  // Tourism & Travel
  { title: "Media Discussion on Iran Tourism", url: "https://youtu.be/fB6LYEwTiUM", category: "Tourism & Travel" },
  { title: "Media Discussion with DG of Iranian Cultural House Jaffar Rounas", url: "https://youtu.be/kUyQNPGS3GU", category: "Tourism & Travel" },
  { title: "Views of Iranian Tourism Group", url: "https://youtu.be/qgSYJw0GsRI", category: "Tourism & Travel" },
  { title: "Mosque of Prophet Muhammad (pbuh) (Travel Diary)", url: "https://youtu.be/-6LbvhLDt-U", category: "Tourism & Travel" },
  { title: "Mosque of Light, Well of Ali (as)", url: "https://youtu.be/gVj1hSZcXBQ", category: "Tourism & Travel" },
  { title: "Bait As-Sabaya Medina (Ahl al-Bayt Pilgrimage)", url: "https://youtu.be/b45G9T1F2Mo", category: "Tourism & Travel" },
  { title: "Mountain of Uhud", url: "https://youtu.be/AXXHkcqdtaE", category: "Tourism & Travel" },
  { title: "The Place Where Zulfiqar Descended from Heaven", url: "https://youtu.be/gd1TrAM6SlI", category: "Tourism & Travel" },
  { title: "Estate of Muslim ibn Aqeel Still Exists", url: "https://youtu.be/x5pR3O2Wi-M", category: "Tourism & Travel" },
  { title: "Day of Destruction of Jannat Al-Baqi", url: "https://youtu.be/fF9frA6ntfA", category: "Tourism & Travel" },
  { title: "Mosque of Mubahilation or Mosque of Response", url: "https://youtu.be/N8AtjkPiWDU", category: "Tourism & Travel" },
  { title: "Jamkaran Mosque, Qom Iran", url: "https://youtu.be/UOT9U9Pd9K0", category: "Tourism & Travel" },
  { title: "Isfahan - The Half of the World", url: "https://youtu.be/cURR_wkIXjE", category: "Tourism & Travel" },
  { title: "Iran's First Cultural Tour", url: "https://youtu.be/MhJhFb_jaLw", category: "Tourism & Travel" },
  { title: "Deosai - The World's Highest Beautiful Plain", url: "https://youtu.be/cAYx-K8XbBo", category: "Tourism & Travel" },
  { title: "Kharpotho Fort", url: "https://youtu.be/ugpEKKWrk3c", category: "Tourism & Travel" },
  { title: "Historic Khanqah Mualla - Shugar", url: "https://youtu.be/3bsh2X6kA4Q", category: "Tourism & Travel" },
  { title: "World's Most Beautiful Place Deosai-Skardu", url: "https://youtu.be/KEAYWurTv9M", category: "Tourism & Travel" },
  { title: "Satpara Lake - Full of Natural Beauty", url: "https://youtu.be/OkE-AnWiH2o", category: "Tourism & Travel" },
  { title: "Skardu - Paradise for Tourists", url: "https://youtu.be/N3oxergwGb4", category: "Tourism & Travel" },
  { title: "Heaven on Earth - Shugar", url: "https://youtu.be/tNeJK1F005g", category: "Tourism & Travel" },
  { title: "Wadi Ka Two", url: "https://youtu.be/7qpUJWqXt48", category: "Tourism & Travel" },
  { title: "Blind Lake - Shugar", url: "https://youtu.be/BgZ0pFMKI5U", category: "Tourism & Travel" },
  { title: "World's Cold Desert - Katpana Skardu", url: "https://youtu.be/gJX5nfzDXWI", category: "Tourism & Travel" },
  { title: "Shangrila - Most Beautiful Tourist Center", url: "https://youtu.be/JyldoxmbQzQ", category: "Tourism & Travel" },
  { title: "Cold Desert and Katpana Lake (English)", url: "https://youtu.be/sFnCwZBuhKg", category: "Tourism & Travel" },
  { title: "Deosaee 'Land of fairies' (English)", url: "https://youtu.be/tXCgiLPe2Bc", category: "Tourism & Travel" }
];

export const interviewsImages = [
  { title: "Iranian Reciter Interview", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811440/1149239_512655122145082_1918311803_o_qllhb6.jpg" },
  { title: "Farid Parcha Interview", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811442/29694855_1680457202031529_8486306020814967638_n_giamyi.jpg" },
  { title: "Late Qazi Niyaz Interview", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811444/29791095_1680455938698322_1208721538213886912_n_jde4kb.jpg" },
  { title: "Pir Syed Ali Raza Gilani", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811442/29790427_1680456065364976_2220801775673776535_n_wqsl1i.jpg" },
  { title: "Maulana Abdulwahab Roopri", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811448/29791414_1680456558698260_2050965162931755239_n_ubh0eg.jpg" },
  { title: "Pir Masoom Hussein Naqvi", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811452/29791703_1680456115364971_4191998705137614837_n_gjscjx.jpg" },
  { title: "Mufti Mashadi Jamia Ahnaaf", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811441/29790115_1680456545364928_1296070976998805962_n_dmyvj9.jpg" },
  { title: "Iranian Cultural Group", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811437/photo_2018-02-24_19-56-04_bjhzgv.jpg" },
  { title: "Interview Preparation at GC Lahore", img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771811454/G.c_Alla_Iqbal_documentry2_bqowl0.jpg" }
];

export const generalGallery = [
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768224081/28168087_1638285129582070_8467778963583414144_n_Copy_z1eghy.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223895/492331562_9705931722817330_1854499131416978681_n_nnm1ro.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223721/Screenshot_2026-01-12_173201_a7dtvw.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223720/Screenshot_2026-01-12_172609_nb96q9.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223720/Screenshot_2026-01-12_173038_hr9jfn.png",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223718/Untitled-1_Copy_xd53cr.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223718/WhatsApp_Image_2018-05-27_at_12.06.56_1_Copy_vkjvgt.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223350/IMG-20180530-WA0025_Copy_lwoczg.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223348/IMG_20190213_195100_Copy_frq8eu.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223346/IMG_20190213_194625_Copy_shfrwe.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223344/IMG_20210209_180402_Copy_za3wfc.jpg",
  "https://res.cloudinary.com/dtqrziupt/image/upload/v1768223341/IMG_20190213_194900_Copy_sjezqh.jpg"
];
