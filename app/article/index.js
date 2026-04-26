import { urduData } from './urdu-data.js';
import { punjabiData } from './punjabi-data.js';
import { englishData } from './english-data.js';
import { specialDataEn } from './english-special-data.js';
import { specialData } from './special-data.js';
import { unityData } from './unity-data.js';
import { internationalData } from './international-data.js';
import { farsiData } from './farsi-data.js';
import { specialDataFa } from './farsi-special-data.js';

// Individual language exports
export { urduData };
export { punjabiData };
export { englishData };
export { specialDataEn };
export { specialData };
export { unityData };
export { internationalData };
export { farsiData };
export { specialDataFa };

// Combined collections
export const allArticles = [
  ...(urduData || []),
  ...(punjabiData || []),
  ...(specialData || []),
  ...(specialDataFa || []),
  ...(specialDataEn || []),
  ...(unityData || []),
  ...(internationalData || []),
  ...(englishData || []),
  ...(farsiData || [])
];

export const englishArticles = [
  ...(englishData || []),
  ...(specialDataEn || [])
];

export const farsiArticles = [
  ...(farsiData || []),
  ...(specialDataFa || [])
];

// Single combined export object
export const articleData = {
  urduData,
  punjabiData,
  englishData,
  specialDataEn,
  specialData,
  unityData,
  internationalData,
  farsiData,
  specialDataFa,
  allArticles,
  englishArticles,
  farsiArticles
};

// Default export
export default articleData;