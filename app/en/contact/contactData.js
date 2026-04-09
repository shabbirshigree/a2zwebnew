import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const contactMethods = [
  {
    icon: <FaWhatsapp size={32} />,
    title: 'WhatsApp',
    info: '+92-333-4491715',
    link: 'https://wa.me/923334491715'
  },
  {
    icon: <FaEnvelope size={32} />,
    title: 'Email',
    info: 'shigri51214@gmail.com',
    link: 'mailto:shigri51214@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt size={32} />,
    title: 'Location',
    info: 'Skardu, Gilgit Baltistan, Pakistan',
    link: 'https://www.google.com/maps/place/Skardu,+Gilgit-Baltistan,+Pakistan'
  }
];

export const socialLinks = [
  { icon: <FaWhatsapp />, url: 'https://wa.me/923334491715', name: 'WhatsApp' },
  { icon: <FaYoutube />, url: 'https://youtube.com/@noorproduction', name: 'YouTube' },
  { icon: <FaTiktok />, url: 'https://www.tiktok.com/@noorproductions786', name: 'TikTok' },
  { icon: <FaFacebook />, url: 'https://www.facebook.com/share/1GkBRptjDz/', name: 'Facebook' },
  { icon: <FaXTwitter />, url: 'https://x.com/shigri41215', name: 'X' }
];
