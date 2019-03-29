const fs = require('fs');

fs.unlink('writeMeNot.txt', (err) => {
  if (err) {
    console.log(err);
  }
});

fs.unlink('writeMeAsync.txt', (err) => {
  if (err) {
    console.log(err);
  }
});
