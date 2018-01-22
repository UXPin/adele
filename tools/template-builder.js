const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src/data/systems');

// todo: Generate template based on the current system data shape
// Template of a design system data object
const template = {
  company: {
    data: 'no data',
    label: 'company',
  },
  system: {
    data: 'no data',
    url: '',
    label: 'system',
  },
  repository: {
    data: 'no data',
    url: '',
    label: 'repository',
  },
  codeDepth: {
    data: 'no data',
    label: 'code depth',
  },
  components: {
    data: 'no data',
    label: 'components',
  },
  js: {
    data: 'no data',
    label: 'JS library/framework',
  },
  ts: {
    data: 'no data',
    label: 'typescript',
  },
  webComponents: {
    data: 'no data',
    label: 'web components',
  },
  tests: {
    data: 'no data',
    label: 'tests',
  },
  linter: {
    data: 'no data',
    label: 'linter',
  },
  css: {
    data: 'no data',
    label: 'CSS',
  },
  cssInjs: {
    data: 'no data',
    label: 'CSS in JS',
  },
  designTokens: {
    data: 'no data',
    label: 'design tokens',
  },
  bundleManager: {
    data: 'no data',
    label: 'bundle manager',
  },
  uiKit: {
    data: 'no data',
    url: '',
    label: 'UI kit',
  },
  brandGuidelines: {
    data: 'no data',
    url: '',
    label: 'brand guidelines',
  },
  colorPalette: {
    data: 'no data',
    url: '',
    label: 'color palette',
  },
  colorNaming: {
    data: 'no data',
    label: 'color naming',
  },
  contrastAnalysis: {
    data: 'no data',
    url: '',
    label: 'contrast analysis',
  },
  typography: {
    data: 'no data',
    url: '',
    label: 'typography',
  },
  icons: {
    data: 'no data',
    url: '',
    label: 'icons',
  },
  'space/Grid': {
    data: 'no data',
    url: '',
    label: 'space / grid',
  },
  illustrations: {
    data: 'no data',
    url: '',
    label: 'illustration',
  },
  dataVisualization: {
    data: 'no data',
    url: '',
    label: 'data visualization',
  },
  animation: {
    data: 'no data',
    url: '',
    label: 'animation',
  },
  voiceTone: {
    data: 'no data',
    url: '',
    label: 'voice & tone',
  },
  accessabilityGuidelines: {
    data: 'no data',
    url: '',
    label: 'accessability guidelines',
  },
  designPrinciples: {
    data: 'no data',
    url: '',
    label: 'design principles',
  },
  websiteDocumentation: {
    data: 'no data',
    url: '',
    label: 'documentation website',
  },
  codeDocumentation: {
    data: 'no data',
    url: '',
    label: 'code documentation',
  },
  storybook: {
    data: 'no data',
    url: '',
    label: 'storybook',
  },
  distribution: {
    data: 'no data',
    label: 'distribution',
  },
};

// Get filename from cli argument
const argName = JSON.parse(process.env.npm_config_argv, null, 2).remain[0];
const filename = argName !== undefined ? argName : 'new-system';

// Prepare template
const fileTemplate = template;
fileTemplate.company.data = filename;

// Write file to directory
// todo: Generate filename with timestamp
fs.writeFileSync(`${directoryPath}/${filename}.JSON`, JSON.stringify(fileTemplate, null, 2), 'utf-8');

// Console.log path to file

console.log(`Success! File written to: ${directoryPath}/${filename}.JSON`);
