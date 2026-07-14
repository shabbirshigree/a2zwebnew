
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'app', 'article', 'urdu-data.js');
const content = fs.readFileSync(filePath, 'utf8');

// Write the first 2000 characters to a file for inspection
const debugPath = path.join(__dirname, 'urdu-data-debug.txt');
fs.writeFileSync(debugPath, content, 'utf8');
console.log('Wrote urdu-data.js to urdu-data-debug.txt');
console.log('File length (chars):', content.length);
console.log('First 500 chars:', JSON.stringify(content.substring(0, 500)));
