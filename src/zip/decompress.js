import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

import { filesFolderPath } from "./helpers.js";

const decompress = async () => {
    const sourceFileName = "archive.gz";
    const destFileName = "fileToCompress.txt";

    const sourceFilePath = path.join(filesFolderPath, sourceFileName);
    const destFilePath = path.join(filesFolderPath, destFileName);

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(destFilePath);

    await pipeline(
        readStream,
        createGunzip(),
        writeStream
    )
};

await decompress();
