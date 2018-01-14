const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src/data/systems');
const dataJSON = path.join(__dirname, '../src/data/data.JSON');

// Create array of files
const files = fs.readdirSync(directoryPath);

files.sort((a, b) => {
  return (
    fs.statSync(`${directoryPath}/${b}`).mtime.getTime() -
    fs.statSync(`${directoryPath}/${a}`).mtime.getTime()
  );
});
// Create array of systems objects from files
const systemsArr = [];

files.forEach((file) => {
  const system = fs.readFileSync(`${directoryPath}/${file}`, 'utf8');
  return systemsArr.push(JSON.parse(system));
});


// Check if systems have the same categories

// find unique keys
const systemsLengths = [];

systemsArr.map((system, i) => {
  const keys = Object.keys(system);
  const keysNumber = keys.length;
  const company = system.company.data.replace(/\s+/g, '-').toLowerCase();
  systemsLengths.push({index: i, company: company, length: keysNumber});
});

// sort array based on the length

systemsLengths.sort((a,b) => {
  return (
    b.length - a.length
  );
});

// find out if there's a system with new columns

const systemNewColumns = systemsLengths[0].length > systemsLengths[1].length ? systemsLengths[0].company : '';

/* Use the first system in the systemsLengths array as the template. If it's going to be the longestSystem
** then it's going to overwrite all the files with a new category. Otherwise it's going to equalize
** the number of columns across all the files.
*/

  const firstSystem = systemsArr[`${systemsLengths[0].index}`];
  const firstSystemKeys = Object.keys(firstSystem);

  files.sort((a, b) => {
    return (
      fs.statSync(`${directoryPath}/${b}`).mtime.getTime() -
      fs.statSync(`${directoryPath}/${a}`).mtime.getTime()
    );
  });

// overwrite all the files with the new template
  files.forEach((file, i) => {
    const system = fs.readFileSync(`${directoryPath}/${file}`, 'utf8');
    const systemParsed = JSON.parse(system);

    const changedSystem = {};

    // parser
    firstSystemKeys.forEach(key => {
      changedSystem[key] = systemParsed[key] !== undefined ? systemParsed[key] : {"data": "no data", "label": key};
    })

    // overwrite file with the changed system
    fs.writeFileSync(`${directoryPath}/${file}`, JSON.stringify(changedSystem, null, 2), 'utf-8');

    // re-adjust the mtime for the file to keep the original order

    // get atime and mtime
    const atime = fs.statSync(`${directoryPath}/${file}`).atime.getTime();
    const mtime = fs.statSync(`${directoryPath}/${file}`).mtime.getTime();

    // modify atime and mtime
    fs.utimesSync(`${directoryPath}/${file}`, atime, mtime - i);

    return systemsArr[i] = changedSystem;
  });


// Save systemsArr to the data file
fs.writeFileSync(dataJSON, JSON.stringify(systemsArr, null, 2), 'utf-8');

// Modify file mtime to trigger changes in the file watcher for the webpack dev server
