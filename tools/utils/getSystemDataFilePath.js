const path = require('path');

const directoryPath = path.join(__dirname, '../../src/data/systems');

function convertCompanyNameToFilename(companyName) {
  return companyName.replace(/\s+/g, '-').toLowerCase();
}

module.exports = function getSystemDataFilePath(companyName, timestamp) {
  const fileName = convertCompanyNameToFilename(companyName);
  return `${directoryPath}/${timestamp}-${fileName}.json`;
};
