import path from 'path';
import fs from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

import { filesFolderPath } from "./helpers.js";

const compress = async () => {
    const sourceFileName = "fileToCompress.txt";
    const destFileName = "archive.gz";

    const sourceFilePath = path.join(filesFolderPath, sourceFileName);
    const destFilePath = path.join(filesFolderPath, destFileName);

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(destFilePath);

    await pipeline(
        readStream,
        createGzip(),
        writeStream
    );
};

await compress();
