import fs from 'fs/promises';
import path from 'path';

import { isExist, filesFolderPath } from './helpers.js';

const read = async () => {
    const fileName = 'fileToRead.txt';

    const filePath = path.join(filesFolderPath, fileName);
    const isFileExists = await isExist(filePath);

    if (!isFileExists) {
        throw new Error('FS operation failed');
    }

    const content = await fs.readFile(filePath, 'utf-8');
    console.log(content);
};

await read();
