// Tool for building separate object files from a common data.json
const fs = require('fs');
const path = require('path');
const getSystemDataFilePath = require('./utils/getSystemDataFilePath');

const dataJSON = path.join(__dirname, '../src/data/data-safety-copy.JSON');

// read data.JSON
const data = fs.readFileSync(dataJSON, 'utf8', (err, obj) => {
  if (err) {
    return console.log(err);
  }
  return obj;
});

const dataObj = JSON.parse(data);

dataObj.forEach((system) => {
  const filePath = getSystemDataFilePath(system.company.data, system.system.$addedAt);
  const systemDataToSave = system;
  delete systemDataToSave.system.$addedAt;
  fs.writeFileSync(filePath, JSON.stringify(systemDataToSave, null, 2), 'utf-8');
});
