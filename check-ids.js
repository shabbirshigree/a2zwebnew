
const fs = require('fs');
const path = require('path');

const urduDataPath = path.join(__dirname, 'app', 'article', 'urdu-data.js');
let content = fs.readFileSync(urduDataPath, 'utf8');

// Remove 'export const urduData = ' from the beginning
content = content.replace(/^export\s+const\s+urduData\s*=\s*/, '');

try {
  const articles = eval(content); // Safe here since it's our own file
  const ids = articles.map(a => a.id);
  console.log('Article IDs:', ids.sort((a, b) => a - b));
  console.log('Total articles:', articles.length);
} catch (e) {
  console.error('Error parsing urdu-data.js:', e);
}
