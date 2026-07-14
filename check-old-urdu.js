
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldFilePath = path.join(__dirname, 'old-urdu-data.js');
const oldContent = fs.readFileSync(oldFilePath, 'utf8');

const idMatches = [...oldContent.matchAll(/"id"\s*:\s*(\d+)/g)];
console.log('Found', idMatches.length, 'id entries in old file');
console.log('All ids in old file:', idMatches.map(m => parseInt(m[1])).sort((a, b) => a - b));

// Check if ids 212-224 exist
const targetIds = [212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224];
const foundIds = idMatches.map(m => parseInt(m[1]));
const missingInOld = targetIds.filter(id => !foundIds.includes(id));
const foundInOld = targetIds.filter(id => foundIds.includes(id));
console.log('Looking for ids:', targetIds);
console.log('Found in old file:', foundInOld);
console.log('Missing in old file:', missingInOld);
