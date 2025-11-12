import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import * as XLSX from 'xlsx';

// Read the Excel file
const fileBuffer = readFileSync('attached_assets/DC Apprenticeship Program Grid 2024_1762980793526.xlsx');
const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const rawData: any[] = XLSX.utils.sheet_to_json(worksheet);

// Normalize the data
const normalizedPrograms = rawData
  .filter((row: any) => row.Union && row['How to apply'] !== 'not in DC area' && row['How to apply'] !== 'Not in DC area')
  .map((row: any, index: number) => ({
    id: `bfdc-${index + 1}`,
    union: String(row.Union || '').trim(),
    craft: String(row.Craft || '').trim(),
    description: String(row.Description || '').trim(),
    howToApply: String(row['How to apply'] || '').trim(),
    website: String(row['Link to application/website'] || '').trim(),
    whenOpens: String(row['When does it open?'] || '').trim(),
    requirements: String(row.Requirements || '').trim(),
    address: String(row['Address for Training Center'] || '').trim(),
    contactName: String(row['Contact Name'] || '').trim(),
    phone: String(row.Phone || '').trim(),
    email: String(row['Email '] || '').trim(),
    hasHelperStepUps: String(row['Helper/Step Ups?'] || 'N').trim(),
  }));

// Create output directory if it doesn't exist
mkdirSync('shared/data', { recursive: true });

// Write normalized data
writeFileSync('shared/data/bfdc-programs.json', JSON.stringify(normalizedPrograms, null, 2));

console.log(`\nProcessed ${normalizedPrograms.length} BF-DC programs`);
console.log('Normalized data written to shared/data/bfdc-programs.json');
console.log('\nPrograms included:');
normalizedPrograms.forEach((p: any) => {
  console.log(`  - ${p.union} (${p.craft || 'No craft specified'})`);
});
