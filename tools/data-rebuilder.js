// Tool for building separate object files from a common data.json
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src/data/systems');
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
  // create filename from names of companies
  const filename = system.company.data.replace(/\s+/g, '-').toLowerCase();
  fs.writeFileSync(`${directoryPath}/${filename}.json`, JSON.stringify(system, null, 2), 'utf-8');
});
