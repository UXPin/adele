module.exports = function getTemplateStructure(systemsList) {
  // Find system that have additional categories (extended system)
  const extendedSystemIndex = systemsList.map((system, index) => {
    const categoriesCount = Object.keys(system.data).length;
    return { index, categoriesCount };
  }).reduce((previous, current) => {
    return current.categoriesCount > previous.categoriesCount ? current : previous;
  }).index;

  // find out if there's a system with new columns and use the extended system as the template

  const extendedSystem = systemsList[extendedSystemIndex].data;
  const extendedSystemCategories = Object.keys(extendedSystem);
  return extendedSystemCategories.reduce((template, category) => {
    const categoryTemplateData = { data: 'no data', label: extendedSystem[category].label };
    if (extendedSystem[category].url != null) {
      categoryTemplateData.url = '';
    }
    // eslint-disable-next-line no-param-reassign
    template[category] = categoryTemplateData;
    return template;
  }, {});
};
