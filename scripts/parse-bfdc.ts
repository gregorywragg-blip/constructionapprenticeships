import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import * as XLSX from 'xlsx';

// Read the Excel file
const fileBuffer = readFileSync('attached_assets/DC Apprenticeship Program Grid 2024_1762980793526.xlsx');
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const rawData = XLSX.utils.sheet_to_json(worksheet);

console.log('Total rows:', rawData.length);
console.log('First row:', JSON.stringify(rawData[0], null, 2));
console.log('\nAll column names:', Object.keys(rawData[0] || {}));

// Create output directory if it doesn't exist
mkdirSync('shared/data', { recursive: true });

// Write raw data for inspection
writeFileSync('shared/data/bfdc-programs-raw.json', JSON.stringify(rawData, null, 2));
console.log('\nRaw data written to shared/data/bfdc-programs-raw.json');
