const fs = require('fs');
const filePath = './file.txt';

try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
  console.log('Done');
} catch (error) {
  console.log('An error occurred: ', error);
}
