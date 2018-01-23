module.exports = function convertCompanyNameToFilename(companyName) {
  return companyName.replace(/\s+/g, '-').toLowerCase();
};
