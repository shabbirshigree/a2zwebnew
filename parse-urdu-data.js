
const fs = require('fs');
const path = require('path');

const urduDataPath = path.join(__dirname, 'app', 'article', 'urdu-data.js');
const content = fs.readFileSync(urduDataPath, 'utf8');

// Extract the array from the export
const match = content.match(/export const urduData = (\[[\s\S]*?);?\]);/);
if (match) {
    const data = eval(match[1]);
    console.log('Number of articles:', data.length);
    console.log('Articles:', JSON.stringify(data, null, 2));
    fs.writeFileSync(path.join(__dirname, 'urdu-articles.json'), JSON.stringify(data, null, 2));
} else {
    console.error('Could not parse urdu-data.js');
}
