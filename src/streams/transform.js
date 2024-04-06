import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const transform = async () => {
    await pipeline(
        process.stdin,
        new Transform({
            transform(chunk, encoding, callback) {
                const string = chunk.toString().trim();
                const reversedString = string.split('').reverse().join('');
                callback(null, `${reversedString}\n`);
            }
        }),
        process.stdout,
    )
};

await transform();
