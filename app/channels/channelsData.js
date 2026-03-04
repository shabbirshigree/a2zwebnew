// ✅ app/channels/channelsData.js
import { FaYoutube, FaWhatsapp, FaFacebook, FaTelegram, FaTiktok } from 'react-icons/fa';

// Shuru mein 'export' likhna ZAROORI hai taake page.js isay dhoond sakay
export const CHANNELS = [
  {
    title: "Noor Production",
    handle: "@noorproduction",
    desc: "Aapka description yahan...",
    img: "https://res.cloudinary.com/...", // Aapka naya cloudinary link
    icon: <FaYoutube size={30} />,
    color: "from-red-500 to-red-700",
    href: "https://youtube.com/...",
    button: "سبسکرائب کریں"
  },
  // Baaki channels bhi isi tarah...
];