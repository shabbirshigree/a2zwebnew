export default function sitemap() {
  const baseUrl = 'https://www.shigri.info';
  const lastModified = new Date();

  // Define main routes
  const routes = [
    '',
    '/about',
    '/article',
    '/awards',
    '/contact',
    '/gallery',
    '/library',
    '/imam-reza',
    '/noor-ul-quran',
  ];

  // Define languages
  const languages = ['', '/en', '/fa'];

  const sitemapEntries = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      // Check if the route exists for that language (simplified)
      sitemapEntries.push({
        url: `${baseUrl}${lang}${route}`,
        lastModified: lastModified,
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
