import {
    FaHeart, FaHandshake, FaTrophy, FaGlobe, FaQuran, FaAward, FaMedal,
    FaMicrophone, FaTv, FaVideo, FaNewspaper, FaBriefcase, FaUser,
    FaPenNib, FaLandmark, FaUsers, FaHandHoldingHeart, FaImages
} from "react-icons/fa";

export const founderItems = [
    { icon: "FaQuran", title: "پروژه نورالقرآن", desc: "نخستین قرآن بصری جهان", link: "/fa/noor-ul-quran" },
    { icon: "FaTv", title: "نورپروداکشنز", desc: "شبکه رسانه‌های اسلامی", link: "https://www.youtube.com/@noorproduction" },
    { icon: "FaHandshake", title: "انجمن دوستی پاک ایران", desc: "انجمن دوستی", link: "/fa/diplomatic-services#anjuman" },
    { icon: "FaGlobe", title: "وب‌سایت پاک ایران", desc: "درگاه وب (اردو/فارسی)", link: "https://pakiiranassociation.wixsite.com/farsee/main" },
    { icon: "FaGlobe", title: "فدراسیون تجارت و فرهنگ", desc: "فدراسیون فرهنگ و تجارت", link: "/fa/diplomatic-services#tourism" },
    { icon: "FaTrophy", title: "بنیانگذار: گردشگری پاک ایران", desc: "نخستین بار در پاکستان", link: "/fa/diplomatic-services#tourism" },
    { icon: "FaTv", title: "کانال اپارات (فارسی)", desc: "موقتاً در دسترس نیست", link: "https://www.aparat.com" },
    { icon: "FaQuran", title: "کانال کودکان نور", desc: "کانال سرگرمی کودکان", link: "https://www.youtube.com/results?search_query=Tiflan+e+Noor" }
];

export const mediaRoles = [
    { icon: "FaMicrophone", title: "میزبان رادیو", desc: "رادیو پاکستان سکردو (برادر جان)" },
    { icon: "FaTv", title: "گوینده تلویزیون", desc: "ستاره آسیا (رهبری برنامه)" },
    { icon: "FaVideo", title: "تهیه‌کننده", desc: "بیش از 2000 مستند و ویدیو" },
    { icon: "FaNewspaper", title: "روزنامه‌نگار", desc: "45 سال تجربه روزنامه‌نگاری" }
];

export const radioHistory = {
    title: "رادیو پاکستان: نخستین مکتب من",
    image: "https://res.cloudinary.com/dlafcjt6z/image/upload/v1771722020/pbcs_Copy_xlljiu.png",
    quote: "درِ اول شعور و آگاهی از طریق رادیو پاکستان باز شد.",
    text: [
        "امروز هم به خوبی یادم است که وقتی من تنها هشت یا نه ساله بودم، پخش آزمایشی موج متوسط (Medium Wave) رادیو پاکستان در سکردو آغاز شد.",
        "قانون سخت رادیو «بدون اسکریپت حرفی نمی‌توان گفت» مرا عادت‌دار نوشتن استوار کرده بود.",
        "در سال 1989-90 آن چک 750 روپیه نخستین کسب من نبود، بلکه اعتراف تشریفی بود که میکروفون به من داده بود."
    ]
};

export const services = [
    {
        icon: "FaUser",
        title: 'رسانه "سربازِ تک‌تن"',
        items: [
            "45 سال تجربه: متخصص نوشتار، فیلم‌برداری و ویرایش.",
            "آغاز: در سن 8 سالگی با رادیو پاکستان سکردو (هنرمند صدا).",
            "سردبیر: متخصص روزنامه‌های روزنامه و مجلات."
        ]
    },
    {
        icon: "FaPenNib",
        title: "روزنامه‌نگاری و کتاب‌ها",
        items: [
            "بیش از 300 مقاله و 80 شماره: منتشر شده به صورت بین‌المللی.",
            "سردبیر: سردبیر اداری روزنامه‌های حاوی، پرچار، اکاٹھ.",
            "نویسنده: مدینه‌الاهلبیت، انیسُ‌النفوس، بوی بهشت"
        ]
    },
    {
        icon: "FaMedal",
        title: "مدال‌ها و جوایز",
        items: [
            "مدال طلا: برای خدمات فرهنگی و ادبی.",
            "سفیر صلح: تشویق همزیستی میان‌ادیانی.",
            "نورالقرآن: پیشگام روش بصری قرآن."
        ],
        color: "red"
    }
];