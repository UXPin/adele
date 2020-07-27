import React from 'react';
import PropTypes from 'prop-types';

import { StyledFilterTagSection, StyledClearButton } from './filter-tag-section.styles';

const FilterTagSection = ({
  clearFilters,
  getFilters,
  numberOfFilters,
}) => (
  <StyledFilterTagSection>
    {numberOfFilters <= 0 ? '' : getFilters()}
    {numberOfFilters > 1 ? (
      <StyledClearButton onClick={() => clearFilters()} tabIndex={1}>
        Remove All
      </StyledClearButton>
    ) : (
      ''
    )}
  </StyledFilterTagSection>
);

FilterTagSection.propTypes = {
  numberOfFilters: PropTypes.number.isRequired,
  getFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export { FilterTagSection as default };
