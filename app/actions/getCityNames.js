const fs = require('fs');
const path = require('path');

const getDocPath = (filename) => path.join(__dirname, '..', filename);
const readFile = (filename) => fs.readFileSync(getDocPath(filename), 'utf-8');

module.exports = (filename) => readFile(filename).split('\n').filter(Boolean);
