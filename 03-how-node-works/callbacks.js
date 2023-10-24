const fs = require('fs');
const filePath = './file.txt';

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.log('An error occurred...: ', error);
  } else {
    console.log(data);
    console.log('Done');
  }
});
