const fs = require('fs')
const { Console } = require('console');

const consoleClassUse =() => {
    const output = fs.createWriteStream('./stdout.log');
    const errorOutput = fs.createWriteStream('./stderr.log');
    // Custom simple logger
    const logger = new Console({ stdout: output, stderr: errorOutput });
    // use it like console
    const count = 5;
    logger.log('count: %d', count);
    // In stdout.log: count 5
}

const assert = () => {
    console.assert(true, 'does nothing');
    console.assert(false, 'Whoops %s work', 'didn\'t');
    // Assertion failed: Whoops didn't work

    console.assert();
    // Assertion failed
}

assert()