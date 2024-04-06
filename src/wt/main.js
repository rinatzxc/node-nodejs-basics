import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

import { __dirname } from './helpers.js';

const performCalculations = async () => {
    const number = 10;
    const workerFileName = 'worker.js';

    const numberOfCores = os.cpus().length;
    const workerFilePath = path.join(__dirname, workerFileName);

    const workers = [];

    for (let i = 0; i < numberOfCores; i++) {
        workers.push(new Promise((resolve) => {
            const n = number + i;

            const worker = new Worker(workerFilePath, {
                workerData: n,
            });

            worker.on('message', (message) => {
                resolve({
                    status: 'resolved',
                    data: Number(message),
                })
            });

            worker.on('error', () => {
                resolve({
                    status: 'error',
                    data: null,
                })
            })
        }))
    }

    const results = await Promise.all(workers);

    console.log(results);
};

await performCalculations();
