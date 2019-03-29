const fs = require('fs');

let readThisFile = fs.readFileSync('readMeNot.txt', 'utf8');
console.log(readThisFile);
fs.writeFileSync('writeMeNot.txt', readThisFile);
