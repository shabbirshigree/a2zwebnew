
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'app', 'article', 'urdu-data.js');

// Read the file content
const content = fs.readFileSync(filePath, 'utf8');

// Try to evaluate it (in a safe way)
try {
  // Write to a temp file and import it
  const tempPath = path.join(__dirname, 'temp-test-urdu.js');
  fs.writeFileSync(tempPath, content, 'utf8');
  
  console.log('Attempting to import temp file...');
  const module = await import('./temp-test-urdu.js');
  console.log('✅ Import successful!');
  console.log('urduData.length:', module.urduData.length);
  console.log('First article id:', module.urduData[0]?.id);
  console.log('Last article id:', module.urduData[module.urduData.length - 1]?.id);
  
  // Clean up
  fs.unlinkSync(tempPath);
} catch (error) {
  console.error('❌ Error importing urdu-data.js:');
  console.error(error.message);
  console.error(error.stack);
}
