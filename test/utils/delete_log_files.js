const fs = require('fs-extra');
const path = require('path');

const combinedLogFilePath = path.resolve(`${__dirname}/../../combined.log`);
fs.removeSync(combinedLogFilePath);
