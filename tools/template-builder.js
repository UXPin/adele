const fs = require('fs');
const path = require('path');
const getSystemsDataFromSourceFiles = require('./utils/getSystemsDataFromSourceFiles');
const getTemplateStructure = require('./utils/getTemplateStructure');

const directoryPath = path.join(__dirname, '../src/data/systems');

const systemsList = getSystemsDataFromSourceFiles();
const fileTemplate = getTemplateStructure(systemsList);

// Get filename from cli argument
const argName = JSON.parse(process.env.npm_config_argv, null, 2).remain[0];
const filename = argName !== undefined ? argName : 'new-system';

// Prepare template
fileTemplate.company.data = filename;

// Write file to directory
// todo: Generate filename with timestamp
fs.writeFileSync(`${directoryPath}/${filename}.json`, JSON.stringify(fileTemplate, null, 2), 'utf-8');

// Console.log path to file

console.log(`Success! File written to: ${directoryPath}/${filename}.json`);
