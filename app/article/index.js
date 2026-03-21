import { urduData } from './urdu-data';
import { punjabiData } from './punjabi-data';
import { englishData } from './english-data';
import { specialData } from './special-data';
import { unityData } from './unity-data';
import { internationalData } from './international-data';

export const allArticles = [
  ...(urduData || []),
  ...(punjabiData || []),
  ...(englishData || []),
  ...(specialData || []),
  ...(unityData || []),
  ...(internationalData || [])
];