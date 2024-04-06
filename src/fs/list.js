import fs from 'fs/promises';

import { isExist, filesFolderPath } from './helpers.js';

const list = async () => {
    const isFolderExists = await isExist(filesFolderPath);

    if (!isFolderExists) {
        throw new Error('FS operation failed');
    }

    const content = await fs.readdir(filesFolderPath);

    for (let fileName of content) {
        console.log(fileName);
    }
};

await list();
