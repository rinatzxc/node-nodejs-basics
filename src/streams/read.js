import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';

import { filesFolderPath } from "./helpers.js";

const read = async () => {
    const fileName = "fileToRead.txt";
    const filePath = path.join(filesFolderPath, fileName);

    const readStream = fs.createReadStream(filePath);

    await pipeline(
        readStream,
        process.stdout
    );
};

await read();
