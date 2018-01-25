const path = require('path');

module.exports = function getTimestampFromFilePath(filePath) {
  const filename = path.basename(filePath, '.json');
  return /^(\d{12})-.*/g.exec(filename)[1];
};
