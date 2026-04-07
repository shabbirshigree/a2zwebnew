import { FaQuran, FaHeart, FaChild, FaShoppingBag, FaGlobeAmericas, FaNewspaper, FaMicrophoneAlt, FaWhatsapp, FaYoutube, FaFacebookF } from 'react-icons/fa';

export const SERVICES_DATA = [
  {
    icon: <FaQuran />,
    title: 'Daily Quranic Clips',
    link: '/project',
    desc: 'Daily short Quranic video clips and visual lessons that present selected verses with concise commentary for modern audiences.',
    socials: [
      { icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/@noorullquraan', color: 'text-red-600' },
      { icon: <FaWhatsapp size={20} />, url: 'https://wa.me/923334491715', color: 'text-green-600' }
    ]
  },
  {
    icon: <FaHeart />,
    title: 'Spiritual Guidance',
    link: 'https://heyzine.com/flip-book/efa19771fc.html',
    desc: 'Daily messages from the collection "Rooh Ki Meraj" offering practical spiritual guidance and ethical insights for everyday life.',
    socials: [
      { icon: <FaFacebookF size={18} />, url: 'https://facebook.com/madrasanoorequran', color: 'text-blue-600' },
      { icon: <FaWhatsapp size={20} />, url: 'https://wa.me/923334491715', color: 'text-green-600' }
    ]
  },
  {
    icon: <FaShoppingBag />,
    title: 'Rezavi Online',
    link: 'https://youtube.com/@rezavionline',
    desc: 'An online hub for authentic Islamic products, books, and devotional items that support cultural and spiritual well-being.',
    socials: [
      { icon: <FaYoutube size={20} />, url: 'https://youtube.com/@rezavionline', color: 'text-red-600' }
    ],
    isFeatured: true
  },
  {
    icon: <FaChild />,
    title: 'Children’s Noor Program',
    link: 'https://www.youtube.com/@TiflaneNoor',
    desc: 'A mission to teach children morals through animated stories and inspirational videos, protecting young minds from negative influences.',
    socials: [
      { icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/@TiflaneNoor', color: 'text-red-600' }
    ]
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'Pilgrimage & Cultural Tours',
    link: '/cultural',
    desc: 'Organized travel to Iran, Iraq and Syria with trusted support and spiritual guidance for pilgrims and cultural delegates.',
    socials: [
      { icon: <FaWhatsapp size={20} />, url: 'https://wa.me/923334491715', color: 'text-green-600' }
    ]
  },
  {
    icon: <FaNewspaper />,
    title: 'Media & Journalism',
    link: '/article',
    desc: 'Journalism, analysis, and documentary content rooted in 45 years of experience with social issues, politics, and community service.',
    socials: [
      { icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/@noorproduction', color: 'text-red-600' }
    ]
  },
  {
    icon: <FaMicrophoneAlt />,
    title: 'Religious Productions',
    link: 'https://www.youtube.com/@noorproduction',
    desc: 'Production of live programs, seminars and digital series covering religious, literary and cultural topics with professional quality.',
    socials: [
      { icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/@noorproduction', color: 'text-red-600' }
    ]
  }
];
