import fs from 'fs/promises';
import path from 'path';

import { isExist, filesFolderPath } from './helpers.js';

const rename = async () => {
    const wrongFileName = 'wrongFilename.txt';
    const properFileName = 'properFilename.md';

    const wrongFilePath = path.join(filesFolderPath, wrongFileName);
    const properFilePath = path.join(filesFolderPath, properFileName);

    const isWrongFileExists = await isExist(wrongFilePath);
    const isProperFileExists = await isExist(properFilePath);

    if (!isWrongFileExists || isProperFileExists) {
        throw new Error('FS operation failed');
    }

    try {
        fs.rename(wrongFilePath, properFilePath);
    }
    catch (err) {
        console.error(err);
    }
};


await rename();
