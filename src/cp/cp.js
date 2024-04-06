import path from 'path';
import { fork } from 'child_process';

import { filesFolderPath } from "./helpers.js";

const spawnChildProcess = async (args) => {
    const fileName = 'script.js';
    const filePath = path.join(filesFolderPath, fileName);

    const cp = fork(filePath, args, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });

    process.stdin.on('data', (data) => {
        cp.stdin.write(data);
    })

    cp.stdout.on('data', (data) => {
        process.stdout.write(data);
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
