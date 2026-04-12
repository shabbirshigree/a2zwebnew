export const metadata = {
  title: 'حاجی شبیر احمد شگری | وب سایت رسمی',
  description: 'مجموعه خدمات علمی، پژوهشی و مطبوعاتی حاجی شبیر احمد شگری. تلاش‌های ویژه برای پروژه نورالقرآن و وحدت امت.',
  keywords: 'Shabbir Ahmed Shigri, Noor-ul-Quran, Visual Quran, Islamic Scholar, Journalist, Pakistan, Iran, Unity of Ummah',
  openGraph: {
    title: 'Haji Shabbir Ahmed Shigri | Official Website',
    description: 'Explore 45 years of dedicated service in journalism, culture, and religious research by Haji Shabbir Ahmed Shigri.',
    images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
  },
}

export default function FarsiLayout({ children }) {
  return <>{children}</>;
}