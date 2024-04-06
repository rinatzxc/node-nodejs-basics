const parseArgs = () => {
    const args = process.argv.slice(2);
    const resultArray = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg.startsWith('--')) {
            resultArray.push(`${arg.slice(2)} is ${args[i + 1]}`);
            i++;
        }
    }

    console.log(resultArray.join(', '))
};

parseArgs();
