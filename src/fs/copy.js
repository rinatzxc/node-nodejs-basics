import fs from 'fs/promises';
import path from 'path';

import { isExist, filesFolderPath, __dirname } from './helpers.js';

const copy = async () => {
    const destDirName = 'files_copy';
    const destDirPath = path.join(__dirname, destDirName);

    const isSourceExist = await isExist(filesFolderPath);
    const isDestExist = await isExist(destDirPath);

    if (!isSourceExist || isDestExist) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.cp(filesFolderPath, destDirPath, { recursive: true });
    } catch (err) {
        console.error(err);
    }
};

await copy();
