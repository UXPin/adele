const fs = require('fs');
const path = require('path');
const getSystemsDataFromSourceFiles = require('./utils/getSystemsDataFromSourceFiles');
const getTemplateStructure = require('./utils/getTemplateStructure');
const getTimestampFromFilePath = require('./utils/getTimestampFromFilePath');

const dataJSONPath = path.join(__dirname, '../src/data/data.JSON');
const systemsList = getSystemsDataFromSourceFiles();
const newTemplate = getTemplateStructure(systemsList);

// overwrite all the files with the new template
const updatedSystemsData = systemsList.map(({ filePath, data }) => {
  const changedSystemData = Object.assign({}, newTemplate, data);
  // overwrite file with the changed system
  fs.writeFileSync(filePath, JSON.stringify(changedSystemData, null, 2), 'utf-8');

  changedSystemData.system.$addedAt = getTimestampFromFilePath(filePath);
  return changedSystemData;
});

// Save systemsList to the data file
fs.writeFileSync(dataJSONPath, JSON.stringify(updatedSystemsData, null, 2), 'utf-8');
