import { articlesData } from '../article/articlesData';
import { yourPageData as awardsData } from '../awards/data'; 
import { CHANNELS } from '../channels/channelsData'; 
import { contactMethods } from '../contact/contactData';
import { culturalData } from '../cultural/data';
import { designData } from '../design/data';
import { BOOKS_DATA } from '../library/libraryData'; 
import { quranVideos } from '../project/projectData';
import { rezaviData } from '../imam-reza/data';

// سرچ کے لیے ماسٹر ڈیٹا (صرف وہی نام جو آپ کی فائلوں میں اصل میں موجود ہیں)
export const masterSearchData = [
  ...(CHANNELS || []).map(item => ({ 
    title: item.title, 
    description: item.desc, 
    category: 'چینلز', 
    link: '/channels' 
  })),
  ...(contactMethods || []).map(item => ({ 
    title: item.title, 
    description: item.info, 
    category: 'رابطہ', 
    link: '/contact' 
  })),
  ...(quranVideos || []).map(item => ({ 
    title: item.title, 
    description: item.description, 
    category: 'پراجیکٹس', 
    link: '/project' 
  })),
  ...(BOOKS_DATA || []).map(item => ({ 
    title: item.title, 
    description: item.author, 
    category: 'لائبریری', 
    link: '/library' 
  })),
  ...(articlesData || []).map(item => ({ 
    title: item.title, 
    description: item.description, 
    category: 'مضامین', 
    link: `/article/${item.slug || ''}` 
  })),
];