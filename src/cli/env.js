const parseEnv = () => {
    const prefix = 'RSS_';
    const resultArray = [];

    for (let [key, value] of Object.entries(process.env)) {
        if (!key.startsWith(prefix)) {
            continue;
        }

        resultArray.push(`${key}=${value}`);
    }

    console.log(resultArray.join('; '));
};

parseEnv();
