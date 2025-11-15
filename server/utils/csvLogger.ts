import fs from 'fs';
import path from 'path';
import { stringify } from 'csv-stringify/sync';

const LOG_FILE = 'activity_log.csv';
const HEADER = ['timestamp', 'username', 'page', 'details'];

export function logToCSV(username: string, page: string, details: string): void {
  const logFilePath = path.join(process.cwd(), LOG_FILE);
  
  if (!fs.existsSync(logFilePath)) {
    const headerRow = stringify([HEADER]);
    fs.writeFileSync(logFilePath, headerRow, 'utf8');
  }
  
  const timestamp = new Date().toISOString();
  const row = [timestamp, username, page, details];
  const csvRow = stringify([row]);
  
  fs.appendFileSync(logFilePath, csvRow, 'utf8');
}
