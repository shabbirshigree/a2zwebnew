// app/channels/channelsData.js
import { FaYoutube, FaFacebook, FaGlobe } from 'react-icons/fa';

export const CHANNELS = [
  {
    title: 'نورُ القرآن',
    handle: '@noorullquraan',
    desc: 'دنیا کا پہلا ویژول قرآن پروجیکٹ۔ آیات کا بصری ترجمہ، قرآنی تعلیمات کا منفرد انداز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorullquraan',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705133/NoorulQuran_normal_jpeg_eq5n6u.jpg',
    color: 'from-emerald-500 to-green-600',
    icon: <FaYoutube size={24} />
  },
  {
    title: 'نور پروڈکشنز',
    handle: '@noorproduction',
    desc: 'اسلامی ثقافتی فلمیں، زیارات، اور ڈاکومنٹریزپر مبنی ویڈیوز کا مرکز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-700 to-indigo-800',
    icon: <FaYoutube size={24} />
  },
  {
    title: 'طفلانِ نور',
    handle: '@TiflaneNoor',
    desc: 'بچوں کی دینی تربیت، اسلامی کہانیاں اور اخلاقی تربیت کا مرکز۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@TiflaneNoor',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/tiflan_jlzaog.jpg',
    color: 'from-orange-400 to-yellow-500',
    icon: <FaYoutube size={24} />
  },
  {
    title: 'آپارات (نور پروڈکشنز)',
    handle: 'aparat.com/noorproduction',
    desc: 'نورپروڈکشنز کا فارسی چینل',
    button: 'Follow Channel',
    href: 'https://www.aparat.com/noorproduction',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/aparat_gvp8hp.png',
    color: 'from-pink-500 to-rose-600',
    icon: <FaGlobe size={24} />
  },
  {
    title: 'حاجی شبیر احمد شگری',
    handle: '@shabbirahmed1103',
    desc: 'آفیشل پرسنل چینل۔ وی لاگز، ٹالک شوز، تجزیے اور روزمرہ کی مصروفیات۔',
    button: 'Subscribe',
    href: 'https://www.youtube.com/@shabbirahmed1103',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705045/channels4_profile_fz4ga1.jpg',
    color: 'from-cyan-500 to-blue-500',
    icon: <FaYoutube size={24} />
  },
  {
    title: 'نور پروڈکشنز (FB)',
    handle: '@noorproductionchannel',
    desc: 'نورپروڈکشنز کا آفیشل فیس بک پیج۔ ثقافتی فلمیں اور زیارات۔',
    button: 'Follow',
    href: 'https://www.facebook.com/noorproductionchannel',
    img: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1770705046/noor_xgcod3.jpg',
    color: 'from-blue-600 to-blue-800',
    icon: <FaFacebook size={24} />
  }
];