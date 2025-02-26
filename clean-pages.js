const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
    console.log(`Deleted: ${folderPath}`);
  }
}

deleteFolderRecursive(pagesDir);
console.log('pages/ directory has been safely removed.');

