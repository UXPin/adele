const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src/data/systems');
const dataJSONPath = path.join(__dirname, '../src/data/data.JSON');

// Create array of files
const files = fs.readdirSync(directoryPath);

// Create array of systems objects from files
const systemsList = files.map((fileName) => {
  const filePath = path.join(directoryPath, fileName);
  // eslint-disable-next-line import/no-dynamic-require,global-require
  return ({ filePath, data: require(filePath) });
});

// Find system that have additional categories (extended system)

const extendedSystemIndex = systemsList.map((system, index) => {
  const categoriesCount = Object.keys(system.data).length;
  return { index, categoriesCount };
}).reduce((previous, current) => {
  return current.categoriesCount > previous.categoriesCount ? current : previous;
}).index;

// find out if there's a system with new columns

/* Use the extended system as the template. If it's going to be the longestSystem
** then it's going to overwrite all the files with a new category. Otherwise it's going to equalize
** the number of columns across all the files.
*/

const extendedSystem = systemsList[extendedSystemIndex].data;
const extendedSystemCategories = Object.keys(extendedSystem);
const newTemplate = extendedSystemCategories.reduce((template, category) => {
  // eslint-disable-next-line no-param-reassign
  template[category] = { data: 'no data', label: extendedSystem[category].label };
  return template;
}, {});

// overwrite all the files with the new template
const updatedSystemsData = systemsList.map(({ filePath, data }) => {
  const changedSystemData = Object.assign({}, newTemplate, data);
  // overwrite file with the changed system
  fs.writeFileSync(filePath, JSON.stringify(changedSystemData, null, 2), 'utf-8');
  return changedSystemData;
});

// Save systemsList to the data file
fs.writeFileSync(dataJSONPath, JSON.stringify(updatedSystemsData, null, 2), 'utf-8');
