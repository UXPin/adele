const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '../../src/data/systems');

module.exports = function getSystemsDataFromSourceFiles() {
  const files = fs.readdirSync(directoryPath);

  // Create array of systems objects from files
  return files.map((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    // eslint-disable-next-line import/no-dynamic-require,global-require
    return ({ filePath, data: require(filePath) });
  });
};
