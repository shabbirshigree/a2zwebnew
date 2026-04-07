// app/fa/channels/channelsData-fa.js

import { FaYoutube, FaFacebook, FaGlobe } from 'react-icons/fa';

export const CHANNELS = [
  {
    title: 'نور القرآن',
    handle: '@noorullquraan',
    desc: 'اولین پروژه قرآن بصری دنیا. ترجمه بصری آیات، روش منحصر به فرد آموزش قرآن.',
    button: 'اشتراک',
    href: 'https://www.youtube.com/@noorullquraan',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705133/NoorulQuran_normal_jpeg_eq5n6u.jpg',
    color: 'from-emerald-500 to-green-600',
    icon: <FaYoutube size={30} />
  },
  {
    title: 'نور پروداکشنز',
    handle: '@noorproduction',
    desc: 'مرکز فیلم‌های فرهنگی اسلامی، زیارت‌ها و ویدیوهای مستند.',
    button: 'اشتراک',
    href: 'https://www.youtube.com/@noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-700 to-indigo-800',
    icon: <FaYoutube size={30} />
  },
  {
    title: 'کودکان نور',
    handle: '@TiflaneNoor',
    desc: 'مرکز تربیت دینی کودکان، داستان‌های اسلامی و تربیت اخلاقی.',
    button: 'اشتراک',
    href: 'https://www.youtube.com/@TiflaneNoor',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/tiflan_jlzaog.jpg',
    color: 'from-orange-400 to-yellow-500',
    icon: <FaYoutube size={30} />
  },
  {
    title: 'آپارات (نور پروداکشنز)',
    handle: 'aparat.com/noorproduction',
    desc: 'کانال فارسی نور پروداکشنز',
    button: 'دنبال کردن کانال',
    href: 'https://www.aparat.com/noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/aparat_gvp8hp.png',
    color: 'from-pink-500 to-rose-600',
    icon: <FaGlobe size={30} />
  },
  {
    title: 'حاجی شبیر احمد شگری',
    handle: '@shabbirahmed1103',
    desc: 'کانال شخصی رسمی. ویلاگ‌ها، تک‌شو‌ها، تحلیل‌ها و فعالیت‌های روزمره.',
    button: 'اشتراک',
    href: 'https://www.youtube.com/@shabbirahmed1103',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/channels4_profile_fz4ga1.jpg',
    color: 'from-cyan-500 to-blue-500',
    icon: <FaYoutube size={30} />
  },
  {
    title: 'نور پروداکشنز (فیس‌بوک)',
    handle: '@noorproductionchannel',
    desc: 'صفحه رسمی نور پروداکشنز در فیس‌بوک. فیلم‌های فرهنگی و زیارت‌ها.',
    button: 'دنبال کردن',
    href: 'https://www.facebook.com/noorproductionchannel',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-600 to-blue-800',
    icon: <FaFacebook size={30} />
  }
];