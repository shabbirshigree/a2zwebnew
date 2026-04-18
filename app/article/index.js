import { urduData } from './urdu-data.js';
import { punjabiData } from './punjabi-data.js';
import { englishData } from './english-data.js';
import { specialData } from './special-data.js';
import { unityData } from './unity-data.js';
import { internationalData } from './international-data.js';
import { farsiData } from './farsi-data.js';

// Individual language exports
export { urduData };
export { punjabiData };
export { englishData };
export { specialData };
export { unityData };
export { internationalData };
export { farsiData };

// Combined collections
export const allArticles = [
  ...(urduData || []),
  ...(punjabiData || []),
  ...(specialData || []),
  ...(unityData || []),
  ...(internationalData || []),
  ...(englishData || [])
];

export const englishArticles = [
  ...(englishData || [])
];

export const farsiArticles = [
  ...(farsiData || [])
];

// Single combined export object
export const articleData = {
  urduData,
  punjabiData,
  englishData,
  specialData,
  unityData,
  internationalData,
  farsiData,
  allArticles,
  englishArticles,
  farsiArticles
};

// Default export
export default articleData;