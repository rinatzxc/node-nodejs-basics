import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';

import { filesFolderPath } from "./helpers.js";

const write = async () => {
    const fileName = "fileToWrite.txt";
    const filePath = path.join(filesFolderPath, fileName);

    const writeStream = fs.createWriteStream(filePath);

    await pipeline(
        process.stdin,
        writeStream
    );
};

await write();
