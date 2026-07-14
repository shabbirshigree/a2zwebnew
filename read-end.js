
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'app', 'article', 'urdu-data.js');
const stats = fs.statSync(filePath);
console.log("File size (bytes):", stats.size);

const buffer = Buffer.alloc(20000);
const fd = fs.openSync(filePath, 'r');
fs.readSync(fd, buffer, 0, buffer.length, stats.size - 20000);
fs.closeSync(fd);

console.log("\nLast 20000 bytes of file:");
console.log(buffer.toString('utf8'));
