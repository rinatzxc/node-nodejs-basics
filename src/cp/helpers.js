import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const filesFolderName = 'files';
export const filesFolderPath = path.join(__dirname, filesFolderName);
