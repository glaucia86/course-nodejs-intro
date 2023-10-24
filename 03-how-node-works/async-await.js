const fs = require('fs').promises;
const filePath = './file.txt';

async function readFileAsync() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
    console.log('Done');
  } catch (error) {
    console.log('An error occurred: ', error);
  }
}

readFileAsync();
