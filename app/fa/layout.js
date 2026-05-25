export const metadata = {
  title: 'حاجی شبیر احمد شگری | وب سایت رسمی',
  description: 'مجموعه خدمات علمی، پژوهشی و مطبوعاتی حاجی شبیر احمد شگری. تلاش‌های ویژه برای پروژه نورالقرآن و وحدت امت.',
  keywords: ['حاجی شبیر احمد شگری', 'نورالقرآن', 'قرآن بصری', 'پژوهشگر اسلامی', 'روزنامه نگار', 'پاکستان', 'ایران', 'وحدت امت'],
  alternates: {
    canonical: '/fa',
    languages: {
      'ur-PK': '/',
      'en-US': '/en',
      'fa-IR': '/fa',
    },
  },
  openGraph: {
    title: 'حاجی شبیر احمد شگری | وب سایت رسمی',
    description: '۴۵ سال فعالیت درخشان در مطبوعات، فرهنگ و پژوهش‌های دینی توسط حاجی شبیر احمد شگری را کاوش کنید.',
    images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
    locale: 'fa_IR',
  },
}

export default function FarsiLayout({ children }) {
  return <>{children}</>;
}