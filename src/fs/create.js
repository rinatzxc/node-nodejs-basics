import fs from 'fs/promises';
import path from 'path';

import { isExist, filesFolderPath } from './helpers.js';

const create = async () => {
    const fileName = 'fresh.txt';
    const content = 'I am fresh and young';

    const filePath = path.join(filesFolderPath, fileName);

    if (await isExist(filePath)) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.writeFile(filePath, content);
    } catch (err) {
        console.error(err);
    }
};

await create();
