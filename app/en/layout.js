export const metadata = {
  title: 'Haji Shabbir Ahmed Shigri | Official Website',
  description: 'Collection of scholarly, research, and journalistic services by Haji Shabbir Ahmed Shigri. Special efforts for the Noor-ul-Quran Project and the Unity of Ummah.',
  keywords: ['Shabbir Ahmed Shigri', 'Noor-ul-Quran', 'Visual Quran', 'Islamic Scholar', 'Journalist', 'Pakistan', 'Iran', 'Unity of Ummah'],
  alternates: {
    canonical: '/en',
    languages: {
      'ur-PK': '/',
      'en-US': '/en',
      'fa-IR': '/fa',
    },
  },
  openGraph: {
    title: 'Haji Shabbir Ahmed Shigri | Official Website',
    description: 'Explore 45 years of dedicated service in journalism, culture, and religious research by Haji Shabbir Ahmed Shigri.',
    images: ['https://res.cloudinary.com/dtqrziupt/image/upload/v1774145249/noorulquran-proj-cover_bhvb0d.png'],
    locale: 'en_US',
  },
}

export default function EnglishLayout({ children }) {
  return <>{children}</>;
}
