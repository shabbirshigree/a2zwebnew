
import { urduArticles, urduData } from './app/article/index.js';

console.log("urduData length:", urduData ? urduData.length : 0);
console.log("urduArticles length:", urduArticles ? urduArticles.length : 0);
console.log("\nurduData IDs:");
if (urduData) {
    urduData.forEach((article, i) => console.log(`${i}: ${article.id}`));
}
console.log("\nurduArticles IDs:");
if (urduArticles) {
    urduArticles.forEach((article, i) => console.log(`${i}: ${article.id}`));
}
