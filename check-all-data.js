
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, 'app', 'article');

const dataFiles = [
  'urdu-data.js',
  'punjabi-data.js', 
  'special-data.js', 
  'unity-data.js', 
  'international-data.js'
];

console.log('Checking all data files...\n');
for (const file of dataFiles) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`${file} does not exist`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const idMatches = [...content.matchAll(/"id"\s*:\s*(\d+)/g)];
  const ids = idMatches.map(m => parseInt(m[1])).sort((a, b) => a - b);
  console.log(`=== ${file} ===`);
  console.log('Total articles:', ids.length);
  console.log('IDs found:', ids);
  console.log('');
}
