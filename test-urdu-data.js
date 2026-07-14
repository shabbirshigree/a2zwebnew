
import { urduData } from './app/article/urdu-data.js';

console.log("Total articles in urduData:", urduData.length);
console.log("Article IDs:");
urduData.forEach((article, index) => {
    console.log(`Index ${index}: ID ${article.id}`);
});
