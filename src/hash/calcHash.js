import path from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderName = 'files';
const folderPath = path.join(__dirname, folderName);

const calculateHash = async () => {
    const fileName = 'fileToCalculateHashFor.txt';
    const filePath = path.join(folderPath, fileName);

    const hash = createHash('sha256');
    const input = createReadStream(filePath);

    input.on('data', data => hash.update(data));
    input.on('end', () => {
        const digest = hash.digest('hex');
        console.log(digest);
    })
};

await calculateHash();
