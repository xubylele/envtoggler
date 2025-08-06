const fs = require('fs');

const filesToCheck = [
  'dist/extension.js',
];

let allFilesExist = true;

filesToCheck.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`Error: ${file} is missing!`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  process.exit(1);
} else {
  console.log('All required files are present.');
}