const fs = require('fs-extra');
const path = require('path');

const reportsDirPath = path.resolve(`${__dirname}/../../reports`);
fs.emptyDirSync(reportsDirPath);
