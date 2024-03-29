const fs = require('fs');
const moment = require('moment');

const getSystemsDataFromSourceFiles = require('./utils/getSystemsDataFromSourceFiles');
const getSystemDataFilePath = require('./utils/getSystemDataFilePath');
const getTemplateStructure = require('./utils/getTemplateStructure');

const systemsList = getSystemsDataFromSourceFiles();
const fileTemplate = getTemplateStructure(systemsList);

// Get companyName from cli argument
const companyName = process.argv[2];

// Prepare template
fileTemplate.company.data = companyName;

// Write file to directory
const timestamp = moment()
  .utc()
  .format('YYYYMMDDHHmm');
const filePath = getSystemDataFilePath(companyName, timestamp);
fs.writeFileSync(filePath, JSON.stringify(fileTemplate, null, 2), 'utf-8');

// Console.log path to file
console.log(`Success! File written to: ${filePath}`);
