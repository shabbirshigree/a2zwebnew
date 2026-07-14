
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('Starting test script...');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'app', 'article', 'urdu-data.js');
console.log('File path:', filePath);
console.log('File exists:', fs.existsSync(filePath));

const content = fs.readFileSync(filePath, 'utf8');
console.log('Read file, length:', content.length, 'chars');
console.log('First 200 chars:', JSON.stringify(content.substring(0, 200)));

// Try to find all "id" occurrences
const idMatches = [...content.matchAll(/"id"\s*:\s*(\d+)/g)];
console.log('Found', idMatches.length, 'id entries');
if (idMatches.length > 0) {
  console.log('First 5 ids:', idMatches.slice(0, 5).map(m => m[1]));
  console.log('Last 5 ids:', idMatches.slice(-5).map(m => m[1]));
}

// Let's check if there's a syntax error in content by writing a temporary file that just exports the array
const tempPath = path.join(__dirname, 'temp-urdu-data.js');
console.log('Writing temp file to:', tempPath);
fs.writeFileSync(tempPath, content, 'utf8');
console.log('Wrote temp file, size:', fs.statSync(tempPath).size, 'bytes');

try {
  console.log('Trying to import temp file...');
  // Import the temp file
  const module = await import('./temp-urdu-data.js');
  console.log('Successfully imported module');
  console.log('Module keys:', Object.keys(module));
  
  const { urduData } = module;
  console.log('urduData is array:', Array.isArray(urduData));
  console.log('urduData.length:', urduData.length);
  if (urduData.length > 0) {
    console.log('First article id:', urduData[0]?.id);
    console.log('Last article id:', urduData[urduData.length - 1]?.id);
    console.log('All article ids:', urduData.map(a => a.id));
  }
} catch (err) {
  console.error('Error importing urduData:', err);
  console.error('Stack:', err.stack);
} finally {
  // Clean up temp file
  try {
    fs.unlinkSync(tempPath);
    console.log('Deleted temp file');
  } catch (e) {
    console.warn('Could not delete temp file:', e);
  }
}
console.log('Test script completed');

