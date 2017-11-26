import React from 'react';
import PropTypes from 'prop-types';

import { StyledFilterTagSection, StyledClearButton } from './filter-tag-section.styles';

const FilterTagSection = props => (
  <StyledFilterTagSection>
    {props.numberOfFilters <= 0 ? '' : props.getFilters()}
    {props.numberOfFilters > 1 ? (
      <StyledClearButton onClick={() => props.clearFilters()} tabIndex={1}>
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
