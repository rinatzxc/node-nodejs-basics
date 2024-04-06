import fs from 'fs/promises';
import path from 'path';

import { isExist, filesFolderPath } from './helpers.js';

const remove = async () => {
    const fileName = 'fileToRemove.txt';

    const filePath = path.join(filesFolderPath, fileName);
    const isFileExists = await isExist(filePath);

    if (!isFileExists) {
        throw new Error('FS operation failed');
    }

    try {
        fs.unlink(filePath)
    }
    catch (err) {
        console.error(err);
    }
};

await remove();
