import {
  FaHandshake, FaLandmark, FaUsers, FaBook, FaPenNib,
  FaTv, FaMicrophone, FaTrophy, FaImages, FaHandHoldingHeart,
  FaYoutube, FaBookOpen, FaGlobe, FaNewspaper, FaPlane, FaUsers as FaUsersGroup,
  FaQuran
} from "react-icons/fa";

// Updated Bismillah with proper formatting
export const welcomeData = {
  bismillah: "BISMILLAH",
  greeting: "AL-SALAMU ALAIKUM!",
  description: "I welcome you to my official website. This platform serves as a humble reflection of my 45-year journey in journalism, culture, and religious service. Here, you will find comprehensive details of the 'Noor-ul-Quran Visual' project, alongside a curated collection of my editorials, travelogues, and documentaries. Explore exclusive AI-driven analyses of my literary works, available in both audio and video formats.",
  name: "HAJI SHABBIR AHMED SHIGRI"
};

export const welcomeDataEn = {
  bismillah: "IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL",
  greeting: "PEACE BE UPON YOU!",
  description: "I welcome you to my official website. This platform serves as a humble reflection of my 45-year journey in journalism, culture, and religious service. Here, you will find comprehensive details of the 'Noor-ul-Quran Visual' project, alongside a curated collection of my editorials, travelogues, and documentaries. Explore exclusive AI-driven analyses of my literary works, available in both audio and video formats.",
  name: "HAJI SHABBIR AHMED SHIGRI"
};

export const welcomeDataFa = {
  bismillah: "BISMILLAH",
  greeting: "AL-SALAMU ALAIKUM!",
  description: "Welcome to my official website. This platform serves as a humble reflection of my 45-year journey in journalism, culture, and religious service. Here, you will find comprehensive details of the 'Noor-ul-Quran Visual' project, alongside a curated collection of my editorials, travelogues, and documentaries. Explore exclusive AI-driven analyses of my literary works, available in both audio and video formats.",
  name: "HAJI SHABBIR AHMED SHIGRI"
};

// Honors Data
export const honorsData = [
  { title: "Khadim-e-Imam Reza (a.s)", link: "/imam-reza", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" },
  { title: "Khadim-e-Ghazi Abbas (a.s)", link: "/ghazi-abbas", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif" }
];

export const honorsDataEn = [
  { title: "Servant of Imam Reza (a.s)", link: "/imam-reza", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" },
  { title: "Servant of Ghazi Abbas (a.s)", link: "/ghazi-abbas", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif" }
];

export const honorsDataFa = [
  { title: "Khadim Imam Reza (a.s)", link: "/imam-reza", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166146/Imam_Reza_a.s_giff_qliprh.gif" },
  { title: "Khadim Ghazi Abbas (a.s)", link: "/ghazi-abbas", gif: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771166145/Ghazi_Abbas_a.s_giff_mlyw24.gif" }
];

// Project Section Data
export const projectSectionData = {
  id: 'visual-quran-main-2026',
  title: 'Noor-ul-Quran Project: World\'s First Visual Quran',
  image: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png',
  badge: "WORLD'S FIRST VISUAL QURAN",
  descUrdu: 'This is a new and unique project of Haji Shabbir Ahmed Shigri. The basic purpose of this project is to present the translations and meanings of the Holy Quran in visual and cinematic form through modern technology and artificial intelligence (AI). Visual Quran: Recitation with Urdu translation and related scenes, so that the young generation can understand it easily.',
  videoUrl: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769028288/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%88%DB%8C%DA%88%DB%8C%D9%88_%D8%AA%D8%A8%D8%B5%D8%B1%DB%81_qfyz0i.mp4',
  audioUrl: 'https://res.cloudinary.com/dtqrziupt/video/upload/v1769028270/%D9%86%D9%88%D8%B1%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_%D9%BE%D8%B1%D8%A7%D8%AC%DB%8C%DA%A9%D9%B9_%D9%BE%D8%B1_%D9%BE%D9%88%DA%88_%DA%A9%D8%A7%D8%B3%D8%B9_wdodfp.mp4',
  bookletUrl: '/library#Quran'
};

// Journey Data
export const journeyData = [
  { title: 'Diplomatic Services', link: '/diplomatic-services', icon: <FaHandshake size={24} />, desc: 'In-depth analysis of international diplomatic and constructive engagements.' },
  { title: 'Cultural Diplomacy', link: '/cultural', icon: <FaLandmark size={24} />, desc: 'Promoting Pak-Iran bilateral relations through cultural exchange.' },
  { title: 'Global Unity', link: '/unity', icon: <FaUsers size={24} />, desc: 'Persistent efforts towards fostering brotherhood and harmony among the Ummah.' },
  { title: 'Literary Works', link: '/library', icon: <FaBook size={24} />, desc: 'An extensive repository of scientific, literary, and spiritual publications.' },
  { title: 'Journalism', link: '/article', icon: <FaPenNib size={24} />, desc: 'Insightful editorial contributions spanning nearly five decades of journalism.' },
  { title: 'Media Broadcasting', link: '/channels', icon: <FaTv size={24} />, desc: 'Strategic religious and social outreach across international media networks.' },
  { title: 'Intellectual Dialogues', link: '/talkshows', icon: <FaMicrophone size={24} />, desc: 'Engaging interviews on critical national and global socio-political themes.' },
  { title: 'Distinguished Awards', link: '/awards', icon: <FaTrophy size={24} />, desc: 'A record of high-profile national and international honors and recognitions.' },
  { title: 'Visual Archive', link: '/gallery', icon: <FaImages size={24} />, desc: 'A curated visual journey through historical moments and key personalities.' },
  { title: 'Social Philanthropy', link: '/services', icon: <FaHandHoldingHeart size={24} />, desc: 'Dedicated community service and welfare initiatives for the public good.' }
];

export const journeyDataEn = journeyData;
export const journeyDataFa = journeyData;

// Books Data
export const booksData = [
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png", title: "Sirat Fatima Zahra (s.a): Boi-e-Bahisht", author: "Haji Shabbir Ahmed Shigri", year: "2018", link: "/library#book-booy" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1774382784/8d099c6f-ccec-48a3-b5cd-a24b312b44f0.png", title: "Anis al-Nufus - Holy Shrine of Imam Reza", author: "Haji Shabbir Ahmed Shigri", year: "2020", link: "/library#book-anees" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772651728/eb2e1ccd-e669-4453-8ca7-10f38cf13a50.png", title: "Iran Travelogue: Journey of Love", author: "Haji Shabbir Ahmed Shigri", year: "2012", link: "/library#book-safarnama" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png", title: "Ascension of the Soul - Self-Reformation", author: "Haji Shabbir Ahmed Shigri", year: "2012", link: "/library#book-rooh" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png", title: "In Search of Peace", author: "Haji Shabbir Ahmed Shigri", year: "2015", link: "/library#book-sakoon" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png", title: "Iran Travelogue", author: "Haji Shabbir Ahmed Shigri", year: "2016", link: "/library#book-sayahat-parts" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772111272/65878faa-2f99-4af6-8216-ad9009adc747.png", title: "Razavi Khorasan", author: "Haji Shabbir Ahmed Shigri", year: "2019", link: "/library#book-khorasan" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772597583/e1511aec-3b7d-44d3-9bd1-4cdfbeecb9c3.png", title: "Decrees of the Supreme Leader", author: "Haji Shabbir Ahmed Shigri", year: "2019", link: "/library#book-fatwa" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png", title: "Key to Paradise - Prayers & Supplications", author: "Haji Shabbir Ahmed Shigri", year: "2019", link: "/library#book-dua" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1773673146/0125d4e5-ab4f-43f0-961b-b05c3cd8b420.png", title: "Magazine: Shakh-e-Nabat", author: "Haji Shabbir Ahmed Shigri", year: "2019", link: "/library#shakh-e-nabaat" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png", title: "Magazine: Farhangistan", author: "Haji Shabbir Ahmed Shigri", year: "2017", link: "/library#book-farhang" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1772598044/95eeeeb5-067e-4fcb-b4c6-ed952d52af89.png", title: "Magazine: Inqilab", author: "Haji Shabbir Ahmed Shigri", year: "2017", link: "/library#book-inqilab" },
  { img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png", title: "Noor-ul-Quran", author: "Haji Shabbir Ahmed Shigri", year: "2021", link: "/library#Quran" }
];

// Legends Data
export const legendsData = [
  {
    name: "Jafar Rohanas",
    role: "Director, Iran Culture House, Lahore",
    img: "https://res.cloudinary.com/dtqrziupt/image/upload/v1771770325/IMG20230623164017_Copy_ddz2fd.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1774379811/jafar-rohnas_pkmmdc.mp4",
    quote: "Shabbir Ahmed Shigri is a Cultural Expert, he has started the first ever pilgrimage and tourism tour between Pakistan and Iran in history."
  },
  {
    name: "Manzoor Ahmed Watto",
    role: "Former Chief Minister of Punjab",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4",
    quote: "Shabbir Ahmed Shigri has many writings, they should be read, he has received Gold Medal due to culture and writings."
  },
  {
    name: "Pir Usman Noori",
    role: "Peace Committee",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.mp4",
    quote: "If there were two servants like Shigri, perhaps our matters with Iran would not have been like this, but they would have reached somewhere else."
  },
  {
    name: "Pir Ghulam Rasool Owaisi",
    role: "Religious leader",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.mp4",
    quote: "Masha'Allah! Shabbir Ahmed Shigri is viewed with equal respect in all political, social and religious circles of Pakistan."
  },
  {
    name: "Pir Burhan ud Din Usmani",
    role: "Usmani Foundation",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525530/5.Pir_Burhan_ud_Deen_Usmani_bxhkzp.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525530/5.Pir_Burhan_ud_Deen_Usmani_bxhkzp.mp4",
    quote: "Shabbir Shigri connects the hearts of the people of Pakistan and Iran in both efforts for the unity of the Ummah."
  },
  {
    name: "Hafiz Abdul Ghaffar Ropari",
    role: "Ameer, Jamaat Ahl-e-Hadith",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4",
    quote: "Shabbir Ahmed Shigri's efforts in which the Ummah is to be united in the chain of unity, this effort and hard work of his is very excellent."
  },
  {
    name: "Sardar Muhammad Khan Laghari",
    role: "Political leader",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525558/2.Molana_Muhammad_Khan_Laghari_diggus.mp4",
    quote: "The Government of Pakistan should give him a special medal so that encouragement for Pak Iran relations services."
  },
  {
    name: "Pir Masoom Naqvi",
    role: "Central President, Jamiat Ulema-e-Pakistan",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.mp4",
    quote: "Shabbir Shigri has played a big role in uniting all sects, joining them and keeping the Ummah of the Holy Prophet (PBUH) united."
  },
  {
    name: "Sardar Sikandar Singh",
    role: "Sikh community leader",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525528/8.Sardar_Sikandar_Singh_yg3tn9.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525528/8.Sardar_Sikandar_Singh_yg3tn9.mp4",
    quote: "Shabbir Ahmed Shigri has very good services regarding interfaith harmony and Iran's culture."
  },
  {
    name: "Dr. Muhammad Sadaqat Ali Afridi",
    role: "Religious scholar",
    img: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.jpg",
    video: "https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.mp4",
    quote: "Shabbir Ahmed Shigri's activities are increasing day by day for the unity of the Ummah and his efforts are commendable."
  }
];

// Export for other languages
export const legendsDataEn = legendsData;
export const legendsDataFa = legendsData;

// Navigation Cards Data
export const navCardsData = [
  { title: "Noor-ul-Quran Project", icon: <FaQuran />, link: "/project" },
  { title: "Noor Productions", icon: <FaTv />, link: "https://www.youtube.com/@noorproduction" },
  { title: "Pak-Iran Friendship Association", icon: <FaHandshake />, link: "https://pakiiranassociation.wixsite.com/pira" },
  { title: "Other Services", icon: <FaHandHoldingHeart />, link: "/services" }
];

export const navCardsDataEn = navCardsData;
export const navCardsDataFa = navCardsData;
