const fs = require('fs');

fs.readFile('readMeNot.txt', 'utf8', (err, data) => {
    console.log(data);
    fs.writeFile('writeMeAsync.txt', data, (err) => {
        if(err){
            console.log(err);
        }
    });
});