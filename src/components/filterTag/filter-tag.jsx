import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import close from '../../icons/close.svg';

import {
  StyledLabel,
  StyledFilter,
  StyledValue,
  StyledFilterContainer,
  StyledCloseButton,
} from './filter-tag.styles';

const FilterTag = ({
  category,
  clear,
  formValue,
  label,
}) => (
  <StyledFilterContainer>
    <StyledLabel>
      {label}
      :
    </StyledLabel>
    <StyledFilter title={formValue}>
      <StyledValue>{formValue}</StyledValue>
      {/* icon is surrounded by span tag with an on click event
          ** due to problems with triggering events on styled components.
          ** OnClick selected filters is going to disappear and
          ** category is going to get cleared of the list of filters.
          */}
      <StyledCloseButton onClick={() => clear([category], 'some')} tabIndex={1}>
        <Icon i={close} size="xs" in="red" active />
      </StyledCloseButton>
    </StyledFilter>
  </StyledFilterContainer>
);

FilterTag.propTypes = {
  label: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  formValue: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
};

export { FilterTag as default };
