
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'app', 'article', 'urdu-data.js');
const content = fs.readFileSync(filePath, 'utf8');

const idMatches = content.match(/"id":\s*(\d+)/g);
console.log("Number of 'id': occurrences:", idMatches ? idMatches.length : 0);
if (idMatches) {
    const ids = idMatches.map(m => parseInt(m.match(/\d+/)[0], 10));
    ids.sort((a, b) => a - b);
    console.log("IDs (sorted):", ids);
}
